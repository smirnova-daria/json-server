import {
	render
} from './render'
import {
	showErrorBlock
} from './helpers'

export const removeUsers = () => {
	const tbody = document.getElementById('table-body')


	tbody.addEventListener('click', e => {
		if (e.target.closest('.btn-remove')) {
			const tr = e.target.closest('tr')
			const id = tr.dataset.key

			userService.removeUser(id).then(res => {
				userService.getUsers().then(users => {
					render(users)
				}).catch(() => {
					showErrorBlock()
				})
			}).catch(() => {
				showErrorBlock()
			})
		}
	})
}