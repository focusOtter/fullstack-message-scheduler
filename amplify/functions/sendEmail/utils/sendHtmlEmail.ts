import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2'

export const sesClient = new SESv2Client()

export const sendHTMLEmail = async (
	fromEmailAddress: string,
	toAddresses: string[],
	subject: string,
	html: string
) => {
	const emailParams = {
		FromEmailAddress: fromEmailAddress,
		Destination: {
			ToAddresses: toAddresses,
		},
		Content: {
			Simple: {
				Subject: {
					Data: subject,
				},
				Body: {
					Html: {
						Data: html,
					},
				},
			},
		},
	}

	const sendEmailCommand = new SendEmailCommand(emailParams)

	try {
		const data = await sesClient.send(sendEmailCommand)
		console.log('Email sent successfully:', data)
	} catch (err) {
		console.error('Error sending email:', err)
	}
}
