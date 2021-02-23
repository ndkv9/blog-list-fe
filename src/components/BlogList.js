import Blog from '../components/Blog'

const BlogList = ({ blogs, user, handleLogout, addLikes }) => {
	return (
		<div>
			<strong>{user.name} logged in</strong>
			<button onClick={handleLogout}>logout</button>

			{blogs.map(blog => (
				<Blog key={blog.id} blog={blog} addLikes={addLikes} />
			))}
		</div>
	)
}

export default BlogList
