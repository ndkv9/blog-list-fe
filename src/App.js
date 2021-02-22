import { useState, useEffect } from 'react'
import BlogList from './components/BlogList'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'

const App = () => {
	const [blogs, setBlogs] = useState([])
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState(null)

	useEffect(() => {
		blogService.getAll().then(blogs => setBlogs(blogs))
	}, [])

	return (
		<div>
			<BlogList blogs={blogs} />
		</div>
	)
}

export default App
