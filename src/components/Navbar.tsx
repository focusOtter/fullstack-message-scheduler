import { Link } from 'react-router-dom'
import Logout from './Logout'

function Navbar({ auth }: { auth?: boolean }) {
	return (
		<div className="navbar">
			<div className="flex-1">
				<Link to="/" className="btn btn-ghost text-2xl">
					Focus Otter Scheduler
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link to={'/messages'} className="text-lg">
							View Messages
						</Link>
					</li>
					<li>
						<Link to={'/messages/schedule'} className="text-lg">
							Create New Message
						</Link>
					</li>
					{auth && (
						<li>
							<Logout />
						</li>
					)}
				</ul>
			</div>
		</div>
	)
}

export default Navbar
