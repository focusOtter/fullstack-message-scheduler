import { env } from '$amplify/env/sendSESEmailFunc'
import { Amplify } from 'aws-amplify'

export const configureAmplify = async () => {
	Amplify.configure(
		{
			API: {
				GraphQL: {
					endpoint: env.MESSAGE_SCHEDULER_GRAPHQL_ENDPOINT,
					region: env.AWS_REGION,
					defaultAuthMode: 'iam',
				},
			},
		},
		{
			Auth: {
				credentialsProvider: {
					getCredentialsAndIdentityId: async () => ({
						credentials: {
							accessKeyId: env.AWS_ACCESS_KEY_ID,
							secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
							sessionToken: env.AWS_SESSION_TOKEN,
						},
					}),
					clearCredentialsAndIdentityId: () => {
						/* noop */
					},
				},
			},
		}
	)
}
