import Blog from '../components/Blog'

const BlogList = ({ blogs, user }) => {
	return (
		<div>
			<h2>blogs</h2>
			<strong>{user.name} logged in</strong>
			<ul>
				{blogs.map(blog => (
					<li key={blog.id}>
						<Blog blog={blog} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default BlogList
