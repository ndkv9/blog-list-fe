import { useState } from 'react'

const Blog = ({ blog }) => {
	const [isFull, setIsFull] = useState(false)

	const blogStyle = {
		paddingTop: 10,
		paddingLeft: 2,
		border: 'solid',
		borderWidth: 1,
		marginBottom: 15,
	}

	const display = { display: isFull ? '' : 'none' }

	const toggleDisplay = () => {
		setIsFull(!isFull)
	}

	return (
		<div style={blogStyle}>
			<div>
				{blog.title} {blog.author}
				<button onClick={toggleDisplay}>{isFull ? 'hide' : 'view'}</button>
			</div>
			<div style={display}>
				<div>{blog.url}</div>
				<div>
					likes:{blog.likes} <button>likes</button>
				</div>
				<div>{blog.user.name}</div>
			</div>
		</div>
	)
}

export default Blog
