import { type Schema } from '../../data/resource'
import { generateClient } from 'aws-amplify/data'
import { getMessage } from './graphql/queries'
import { configureAmplify } from './configureAmplify'
import { sendHTMLEmail } from './utils/sendHtmlEmail'

export const handler = async (event: {
	messageId: string
	userEmail: string
}) => {
	await configureAmplify()
	const client = generateClient<Schema>({
		authMode: 'iam',
	})

	const { data } = await client.graphql({
		query: getMessage,
		variables: { id: event.messageId },
	})

	console.log('the data from the request', data)
	console.log('the event', event)
	// your function code goes here
	await sendHTMLEmail(
		'mtliendo@focusotter.com',
		[event.userEmail],
		data.getMessage?.title as string,
		`<h1>Your message:</h1> 
		<p>${data.getMessage?.message}</p>`
	)
	return 'Hello, World!'
}
