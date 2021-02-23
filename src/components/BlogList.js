import Blog from '../components/Blog'

const BlogList = ({ blogs, user, handleLogout, addLikes }) => {
	return (
		<div>
			<strong>{user.name} logged in</strong>
			<button onClick={handleLogout}>logout</button>
			<ul>
				{blogs.map(blog => (
					<li key={blog.id}>
						<Blog blog={blog} addLikes={addLikes} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default BlogList
