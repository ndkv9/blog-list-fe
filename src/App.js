import { useState, useEffect } from 'react'
import BlogList from './components/BlogList'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import loginService from './services/login'

const App = () => {
	const [blogs, setBlogs] = useState([])
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState(null)

	useEffect(() => {
		blogService.getAll().then(blogs => setBlogs(blogs))
	}, [])

	const handleLogin = async event => {
		event.preventDefault()
		const credentials = {
			username,
			password,
		}

		const user = await loginService.login(credentials)
		setUser(user)
	}

	return (
		<div>
			{user === null ? (
				<LoginForm
					username={username}
					password={password}
					setUsername={setUsername}
					setPassword={setPassword}
					handleLogin={handleLogin}
				/>
			) : (
				<BlogList blogs={blogs} />
			)}
		</div>
	)
}

export default App
