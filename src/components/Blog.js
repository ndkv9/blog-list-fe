import { useState } from 'react'

const Blog = ({ blog, addLikes, removeBlog }) => {
	const [isFull, setIsFull] = useState(false)

	const blogStyle = {
		paddingTop: 10,
		paddingLeft: 2,
		border: 'solid',
		borderWidth: 1,
		marginBottom: 15,
	}

	const btnStyle = {
		backgroundColor: 'orange',
		borderRadius: 5,
	}

	const display = { display: isFull ? '' : 'none' }

	const toggleDisplay = () => {
		setIsFull(!isFull)
	}

	const remove = () => {
		removeBlog(blog.id)
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
					likes:{blog.likes}{' '}
					<button onClick={() => addLikes(blog.id)}>likes</button>
				</div>
				<div>{blog.user.name}</div>
				<button style={btnStyle} onClick={remove}>
					remove
				</button>
			</div>
		</div>
	)
}

export default Blog
