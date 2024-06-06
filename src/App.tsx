import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MessagesPage from './pages/MessagesPage'
import ScheduleMessagePage from './pages/ScheduleMessagePage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/messages',
		element: <MessagesPage />,
	},
	{
		path: '/messages/schedule',
		element: <ScheduleMessagePage />,
	},
])
function App() {
	return <RouterProvider router={router} />
}

export default App
