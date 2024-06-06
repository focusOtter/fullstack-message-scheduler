import { util, runtime } from '@aws-appsync/utils'

export function request(ctx) {
	console.log('the context identity', ctx.identity)
	if (!ctx.prev.result.id) {
		runtime.earlyReturn({
			message: 'error saving recording to database, no message scheduled',
		})
	}
	return {
		resourcePath: `/schedules/${ctx.prev.result.title}`,
		method: 'POST',
		params: {
			headers: {
				'Content-Type': 'application/json',
			},
			body: {
				ActionAfterCompletion: 'DELETE',
				ScheduleExpression: `at(${ctx.prev.result.deliveryDate})`,
				ScheduleExpressionTimezone: ctx.prev.result.timezone,
				ClientToken: util.autoId(),
				FlexibleTimeWindow: {
					Mode: 'OFF',
				},
				Target: {
					Arn: ctx.env.SCHEDULE_FUNCTION_ARN,
					RoleArn: ctx.env.SCHEDULE_FUNCTION_ROLE_ARN,
					Input: JSON.stringify({
						messageId: ctx.prev.result.id,
						userEmail: ctx.identity.claims.email,
					}),
				},
			},
		},
	}
}
export function response(ctx) {
	const parsedBody = JSON.parse(ctx.result.body)

	return { message: 'message successfully scheduled' }
}
