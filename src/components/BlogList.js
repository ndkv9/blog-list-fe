import Blog from '../components/Blog'

const BlogList = ({ blogs }) => {
	return (
		<div>
			<h2>blogs</h2>
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
