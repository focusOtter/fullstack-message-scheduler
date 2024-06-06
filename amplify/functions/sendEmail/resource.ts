import { defineFunction } from '@aws-amplify/backend'

export const sendSESEmailFunc = defineFunction({
	name: 'sendSESEmailFunc',
	entry: './main.ts',
})
