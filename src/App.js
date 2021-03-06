import { useState, useEffect } from 'react'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import Noti from './components/Noti'
import blogsService from './services/blogs'
import loginService from './services/login'

const App = () => {
	const [blogs, setBlogs] = useState([])
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState(null)
	const [noti, setNoti] = useState({ message: null, type: 'error' })

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
			setNoti({ message: `welcome back ${user.name}`, type: 'noti' })
			setTimeout(() => {
				setNoti({ message: null, type: 'error' })
			}, 3000)
		} catch (exception) {
			setNoti({ message: 'wrong username or password', type: 'error' })
			setTimeout(() => {
				setNoti({ message: null, type: 'error' })
			}, 3000)
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
			setNoti({
				message: `added ${newBlog.title} by ${newBlog.author}`,
				type: 'noti',
			})
			setTimeout(() => {
				setNoti({ message: null, type: 'error' })
			}, 3000)
		} catch (exception) {
			console.log(exception)
		}
	}

	const handleLikes = async id => {
		const blogToLike = blogs.find(b => b.id === id)
		const likedBlog = {
			...blogToLike,
			likes: blogToLike.likes + 1,
			user: blogToLike.user.id,
		}
		await blogsService.update(likedBlog)
		setBlogs(
			blogs.map(b =>
				b.id === id ? { ...blogToLike, likes: blogToLike.likes + 1 } : b
			)
		)
	}

	const removeBlog = async id => {
		try {
			const blogToDelete = blogs.find(b => b.id === id)
			const result = window.confirm(
				`remove ${blogToDelete.title} by ${blogToDelete.author}`
			)
			if (result) {
				await blogsService.remove(id)
				setBlogs(blogs.filter(b => b.id !== id))
			}
		} catch (exception) {
			console.log(exception)
		}
	}

	return (
		<div>
			<Noti noti={noti} />
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
					<h2>blogs</h2>
					<Togglable buttonLabel='new note'>
						<BlogForm createBlog={addNew} />
					</Togglable>
					<BlogList
						blogs={blogs}
						user={user}
						handleLogout={handleLogout}
						addLikes={handleLikes}
						removeBlog={removeBlog}
					/>
				</div>
			)}
		</div>
	)
}

export default App
