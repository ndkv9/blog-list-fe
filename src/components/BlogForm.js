import { useState } from 'react'

const BlogForm = props => {
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [url, setUrl] = useState('')

	const addNew = event => {
		event.preventDefault()
		const blog = {
			title,
			author,
			url,
		}
		props.createBlog(blog)
		setTitle('')
		setAuthor('')
		setUrl('')
	}

	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={addNew}>
				<div>
					title:
					<input
						name='Title'
						type='text'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</div>
				<div>
					author:
					<input
						name='Author'
						type='text'
						value={author}
						onChange={e => setAuthor(e.target.value)}
					/>
				</div>
				<div>
					url:
					<input
						name='Url'
						type='text'
						value={url}
						onChange={e => setUrl(e.target.value)}
					/>
				</div>
				<button type='submit'>create</button>
			</form>
		</div>
	)
}

export default BlogForm
