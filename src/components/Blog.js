import { useState } from 'react'

const Blog = ({ blog, user, addLikes, removeBlog }) => {
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
				<span className='title-author'>
					{blog.title} {blog.author}
				</span>

				<button className='view-btn' onClick={toggleDisplay}>
					{isFull ? 'hide' : 'view'}
				</button>
			</div>
			<div style={display} className='togglableContents'>
				<div>{blog.url}</div>
				<div>
					likes:{blog.likes}{' '}
					<button className='like-btn' onClick={() => addLikes(blog.id)}>
						likes
					</button>
				</div>
				<div>{blog.user.name}</div>
				{user.name === blog.user.name && (
					<button style={btnStyle} onClick={remove}>
						remove
					</button>
				)}
			</div>
		</div>
	)
}

export default Blog
