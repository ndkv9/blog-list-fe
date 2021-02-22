import { useState, useEffect } from 'react'
import BlogList from './components/BlogList'
import blogsService from './services/blogs'
import LoginForm from './components/LoginForm'
import loginService from './services/login'

const App = () => {
	const [blogs, setBlogs] = useState([])
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState(null)

	useEffect(() => {
		blogsService.getAll().then(blogs => setBlogs(blogs))
	}, [])

	const handleLogin = async event => {
		event.preventDefault()
		try {
			const credentials = {
				username,
				password,
			}

			const user = await loginService.login(credentials)
			blogsService.setUser(user)
		} catch (exception) {
			console.log('sai roi nha con')
		}
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
				<BlogList blogs={blogs} user={user} />
			)}
		</div>
	)
}

export default App
