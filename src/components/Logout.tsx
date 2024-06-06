'use client'

import { signOut } from 'aws-amplify/auth'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
	const navigate = useNavigate()

	return (
		<button
			onClick={async () => {
				await signOut()
				navigate('/')
			}}
			className="px-2 text-lg"
		>
			Sign Out
		</button>
	)
}
