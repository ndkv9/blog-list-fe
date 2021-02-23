const Blog = ({ blog }) => {
	const blogStyle = {
		paddingTop: 10,
		paddingLeft: 2,
		border: 'solid',
		borderWidth: 1,
		marginBottom: 15,
	}

	return (
		<div style={blogStyle}>
			{blog.title} {blog.author}
			<button>view</button>
		</div>
	)
}

export default Blog
