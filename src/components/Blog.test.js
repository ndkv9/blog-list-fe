import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Blog from './Blog'

describe('<Blog />', () => {
	let component
	beforeEach(() => {
		const blog = {
			title: 'piccolo likes ajinomoto',
			author: 'piccolo',
			url: 'https://piccolo-danameker.com',
			likes: 2,
			user: {
				username: 'namek1',
				name: 'piccolo',
				id: '602ea124777d7939104444c4',
			},
			id: '603620a5c81b1b0c0cb8301d',
		}

		const user = {
			username: 'namek1',
			name: 'piccolo',
			id: '602ea124777d7939104444c4',
		}

		component = render(<Blog blog={blog} user={user} />)
	})

	test('renders blogs title and author', () => {
		expect(
			component.container.querySelector('.title-author')
		).toHaveTextContent('piccolo likes ajinomoto piccolo')
	})

	test('does not render its url and number of likes', () => {
		expect(component.container.querySelector('.togglableContents')).toHaveStyle(
			'display: none'
		)
	})

	test('url and number of likes are shown when the button controlling the shown details has been clicked', () => {
		const viewBtn = component.getByText('view')
		fireEvent.click(viewBtn)

		expect(
			component.container.querySelector('.togglableContents')
		).not.toHaveStyle('display: none')
	})
})
