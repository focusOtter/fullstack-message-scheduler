import { util } from '@aws-appsync/utils'
import * as ddb from '@aws-appsync/utils/dynamodb'

export function request(ctx) {
	const { username, sub } = ctx.identity
	const id = util.autoId()
	const now = util.time.nowISO8601()
	const owner = `${sub}::${username}`
	const title = `${ctx.args.title.split(' ').join('-').toLowerCase()}-${id}`
	const item = {
		...ctx.args,
		createdAt: now,
		updatedAt: now,
		title,
		owner,
		__typename: 'Message',
	}
	const key = { id: util.autoId() }
	return ddb.put({ key, item })
}

export function response(ctx) {
	return ctx.result
}
