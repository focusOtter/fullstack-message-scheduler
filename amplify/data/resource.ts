import { type ClientSchema, a, defineData } from '@aws-amplify/backend'
import { sendSESEmailFunc } from '../functions/sendEmail/resource'

const schema = a
	.schema({
		Message: a
			.model({
				title: a.string().required(),
				message: a.string().required(),
				//2024-05-09T18:58 is what I need but a.datetime() needs ISO (with timezone)
				deliveryDate: a.string().required(),
				timezone: a.string().required(),
			})
			.authorization((allow) => [allow.owner()]),
		createMessageSchedule: a
			.mutation()
			.arguments({
				message: a.string().required(),
				deliveryDate: a.string().required(),
				timezone: a.string().required(),
				title: a.string().required(),
			})
			.returns(
				a.customType({
					message: a.string().required(),
				})
			)
			.handler([
				a.handler.custom({
					entry: './createMessage.js',
					dataSource: a.ref('Message'),
				}),
				a.handler.custom({
					entry: './scheduleMessage.js',
					dataSource: 'ebSchedulerDS',
				}),
			])
			.authorization((allow) => [allow.authenticated()]),
	})
	.authorization((allow) => [allow.resource(sendSESEmailFunc).to(['query'])])

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
	name: 'MessageScheduler',
	schema,
	authorizationModes: {
		defaultAuthorizationMode: 'userPool',
	},
})
