import { withAuthenticator } from '@aws-amplify/ui-react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScheduleMessageForm from '../components/ScheduleMessageForm'

const ScheduleMessagePage = () => {
	return (
		<div className="flex flex-col h-screen">
			<Navbar />
			<main className="flex-1">
				<h1 className="text-2xl text-center">Schedule Message</h1>
				<p className="text-center mb-8">
					Messages will be sent based on your browsers current timezone.
				</p>
				<div className="flex justify-center">
					<ScheduleMessageForm />
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default withAuthenticator(ScheduleMessagePage)
