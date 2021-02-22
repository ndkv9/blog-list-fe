import { useState, useEffect } from 'react'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import blogsService from './services/blogs'
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
			setUser(user)
			blogsService.setToken(user.token)
			setUsername('')
			setPassword('')
		} catch (exception) {
			console.log('sai roi nha con')
		}
	}

	const handleLogout = () => {
		window.localStorage.clear()
		setUser(null)
	}

	const addNew = async blog => {
		try {
			const newBlog = await blogsService.create(blog)
			setBlogs(blogs.concat(newBlog))
		} catch (exception) {
			console.log(exception)
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
				<div>
					<BlogForm createBlog={addNew} />
					<BlogList blogs={blogs} user={user} handleLogout={handleLogout} />
				</div>
			)}
		</div>
	)
}

export default App
