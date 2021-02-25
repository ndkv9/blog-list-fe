import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogForm from './BlogForm'

test('form calls the event handler it received as props with the right details', () => {
	const createBlogMock = jest.fn()

	const component = render(<BlogForm createBlog={createBlogMock} />)

	const blogData = {
		author: 'me',
		title: 'testing',
		url: 'https://example.com',
	}

	const form = component.container.querySelector('.blog-form')
	const title = component.container.querySelector('.title-input')
	const author = component.container.querySelector('.author-input')
	const url = component.container.querySelector('.url-input')

	fireEvent.change(author, {
		target: { value: blogData.author },
	})
	fireEvent.change(title, {
		target: { value: blogData.title },
	})
	fireEvent.change(url, {
		target: { value: blogData.url },
	})
	fireEvent.submit(form)

	expect(createBlogMock.mock.calls).toHaveLength(1)
	expect(createBlogMock.mock.calls[0][0]).toEqual(blogData)
})
