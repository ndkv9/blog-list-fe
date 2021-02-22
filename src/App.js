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

	useEffect(() => {
		const userJSON = window.localStorage.getItem('loggedBlogListUser')
		if (userJSON) {
			const user = JSON.parse(userJSON)
			setUser(user)
			blogsService.setToken(user.token)
		}
	}, [])

	const handleLogin = async event => {
		event.preventDefault()
		try {
			const credentials = {
				username,
				password,
			}

			const user = await loginService.login(credentials)
			window.localStorage.setItem('loggedBlogListUser', JSON.stringify(user))
			blogsService.setToken(user.token)
			setUser(user)
			setUsername('')
			setPassword('')
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
