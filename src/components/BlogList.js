import Blog from '../components/Blog'

const BlogList = ({ blogs, user, handleLogout, addLikes, removeBlog }) => {
	const orderedBlogs = blogs.sort((a, b) => b.likes - a.likes)

	return (
		<div>
			<strong>{user.name} logged in</strong>
			<button onClick={handleLogout}>logout</button>

			{orderedBlogs.map(blog => (
				<Blog
					key={blog.id}
					blog={blog}
					addLikes={addLikes}
					removeBlog={removeBlog}
					user={user}
				/>
			))}
		</div>
	)
}

export default BlogList
