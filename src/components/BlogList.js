import Blog from '../components/Blog'

const BlogList = ({ blogs, user, handleLogout, addLikes }) => {
	const orderedBlogs = blogs.sort((a, b) => b.likes - a.likes)

	return (
		<div>
			<strong>{user.name} logged in</strong>
			<button onClick={handleLogout}>logout</button>

			{orderedBlogs.map(blog => (
				<Blog key={blog.id} blog={blog} addLikes={addLikes} />
			))}
		</div>
	)
}

export default BlogList
