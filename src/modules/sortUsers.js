import {
	render
} from './render'

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
		})

		isSort = !isSort
	})
}