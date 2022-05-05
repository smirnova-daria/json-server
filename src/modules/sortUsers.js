import {
	render
} from './render'
import {
	showErrorBlock
} from './helpers'


export const sortUsers = () => {
	const headerSortIsCheldren = document.getElementById('sort-is-children')
	headerSortIsCheldren.style.cursor = 'pointer'
	let isSort = false

	headerSortIsCheldren.addEventListener('click', e => {
		userService.getSortUsers({
			name: 'children',
			value: isSort ? 'asc' : 'desc'
		}).then(users => {
			render(users)
		}).catch(() => {
			showErrorBlock()
		})

		isSort = !isSort
	})
}