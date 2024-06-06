import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import BubbleBackground from '../components/bubble.svg'
import sectionBackground from '../components/section.svg'
import bottomSectionBackground from '../components/bottomSection.svg'
import SectionItem from '../components/SectionItem'
import Footer from '../components/Footer'

const HomePage = () => {
	return (
		<>
			<div
				className="bg-cover"
				style={{ backgroundImage: `url(${BubbleBackground})` }}
			>
				<Navbar />
				<Hero />
			</div>
			<div
				className="bg-cover"
				style={{
					backgroundImage: `url(${sectionBackground})`,
					aspectRatio: '900/100',
				}}
			></div>
			<main>
				<h1 className="text-center text-5xl mb-6">
					A bit about this project 👀
				</h1>
				<div className="flex justify-start">
					<SectionItem
						title="Why this project"
						description="I was at the dentist no too long ago and when I was finished, they asked me if I would like to schedule my next appointment. It was odd to me that they just gave me a card with the date. I thought about what it would be like to create a scheduling system that I could use for myself."
						img="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
					/>
				</div>
				<div className="flex justify-end">
					<SectionItem
						title="Project Hiccups"
						description="I initially wanted to have users sign up with their phone number and use the Twilio API to send a text message. Totally doable, but the process for setting up SMS auth with AWS involes a 2 week review to make sure spam messages aren't sent 😩 I'll revisit this once I'm approved!"
						img="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
					/>
				</div>
				<div
					className="bg-cover"
					style={{
						backgroundImage: `url(${bottomSectionBackground})`,
						aspectRatio: '900/100',
					}}
				></div>
			</main>
			<Footer />
		</>
	)
}

export default HomePage
