import { useState, useEffect } from 'react'
import BlogList from './components/BlogList'
import blogService from './services/blogs'

const App = () => {
	const [blogs, setBlogs] = useState([])

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
