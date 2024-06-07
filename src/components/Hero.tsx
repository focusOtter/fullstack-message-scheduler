import { Link } from 'react-router-dom'

function Hero() {
	return (
		<div className="hero min-h-screen">
			<div className="hero-content text-center">
				<div className="max-w-lg">
					<h1 className="text-5xl font-bold">Hello there 🦦</h1>
					<p className="py-6 text-xl">
						This is a sample fullstack scheduling app that uses{' '}
						<a
							className=" text-green-600 hover:text-green-400"
							href="https://daisyui.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							DaisyUI
						</a>{' '}
						for styling,{' '}
						<a
							className=" text-pink-600 hover:text-pink-400"
							href="https://aws.amazon.com/blogs/compute/introducing-amazon-eventbridge-scheduler/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Amazon EventBridge Scheduler
						</a>{' '}
						to future date the messages,{' '}
						<a
							className=" text-blue-600 hover:text-blue-400"
							href="https://nextjs.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							NextJS
						</a>{' '}
						and{' '}
						<a
							className=" text-purple-600 hover:text-purple-400"
							href="https://docs.amplify.aws/"
							target="_blank"
							rel="noopener noreferrer"
						>
							AWS Amplify Gen2
						</a>
					</p>
					<Link to={'/messages'} className="btn btn-success">
						Get Started
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
