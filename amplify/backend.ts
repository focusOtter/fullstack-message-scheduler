import { sendSESEmailFunc } from './functions/sendEmail/resource'
import { defineBackend } from '@aws-amplify/backend'
import { auth } from './auth/resource'
import { data } from './data/resource'
import {
	PolicyDocument,
	PolicyStatement,
	Role,
	ServicePrincipal,
} from 'aws-cdk-lib/aws-iam'
import { Stack } from 'aws-cdk-lib'

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */

const backend = defineBackend({
	auth,
	data,
	sendSESEmailFunc,
})

backend.sendSESEmailFunc.resources.lambda.addToRolePolicy(
	new PolicyStatement({
		actions: ['ses:SendEmail', 'ses:SendRawEmail'],
		resources: ['*'],
	})
)

const ebSchedulerDS = backend.data.addHttpDataSource(
	// name of the data source that needs to be passed to my amplify/data/resource.ts file
	'ebSchedulerDS',
	'https://scheduler.us-east-1.amazonaws.com',
	{
		authorizationConfig: {
			signingRegion: 'us-east-1',
			signingServiceName: 'scheduler',
		},
	}
)

ebSchedulerDS.grantPrincipal.addToPrincipalPolicy(
	new PolicyStatement({
		actions: ['scheduler:CreateSchedule'],
		resources: ['*'],
	})
)

// create a role a scheduler to invoke the function

const schedulerRole = new Role(
	Stack.of(backend.data),
	'createMessageSchedulerRole',
	{
		assumedBy: new ServicePrincipal('scheduler.amazonaws.com'),
		inlinePolicies: {
			invokeFunction: new PolicyDocument({
				statements: [
					new PolicyStatement({
						actions: ['lambda:InvokeFunction'],
						resources: [backend.sendSESEmailFunc.resources.lambda.functionArn],
					}),
				],
			}),
		},
	}
)

// pass the role from the ebScheduler to the schedulerRole
ebSchedulerDS.grantPrincipal.addToPrincipalPolicy(
	new PolicyStatement({
		actions: ['iam:PassRole'],
		resources: [schedulerRole.roleArn],
	})
)

//set the role and the function's arn to env vars
backend.data.resources.cfnResources.cfnGraphqlApi.environmentVariables = {
	SCHEDULE_FUNCTION_ROLE_ARN: schedulerRole.roleArn,
	SCHEDULE_FUNCTION_ARN: backend.sendSESEmailFunc.resources.lambda.functionArn,
}
