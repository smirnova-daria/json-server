import {
	render
} from './render'
import {
	showErrorBlock
} from './helpers'

export const filterUsers = () => {
	const btnIsChildren = document.getElementById('btn-isChildren')
	const btnIsPermissions = document.getElementById('btn-isPermissions')
	const btnIsAll = document.getElementById('btn-isAll')

	btnIsChildren.addEventListener('click', () => {
		userService.filterUsers('children').then(users => {
			render(users)
		}).catch(() => {
			showErrorBlock()
		})
	})

	btnIsPermissions.addEventListener('click', () => {
		userService.filterUsers('permissions').then(users => {
			render(users)
		}).catch(() => {
			showErrorBlock()
		})
	})

	btnIsAll.addEventListener('click', () => {
		userService.getUsers().then(users => {
			render(users)
		}).catch(() => {
			showErrorBlock()
		})
	})

}