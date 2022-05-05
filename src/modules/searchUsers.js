import {
	render
} from './render'
import {
	debounce
} from './helpers'
import {
	showErrorBlock
} from './helpers'

export const searchUsers = () => {
	const input = document.getElementById('search-input')

	const debounceSearch = debounce(() => {
		userService.getSearchUser(input.value).then(users => {
			render(users)
		}).catch(() => {
			showErrorBlock()
		})
	}, 500)

	input.addEventListener('input', debounceSearch)
}