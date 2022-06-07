export const debounce = (func, ms = 300) => {
	let timer

	return (...args) => {
		clearTimeout(timer)

		timer = setTimeout(() => {
			func.apply(this, args)
		}, ms)
	}
}

export const showErrorBlock = () => {
	let errorBlock = document.querySelector('.error-block')
	if (!errorBlock) {
		const table = document.querySelector('table')
		table.insertAdjacentHTML('afterend', '<p class="error-block" style="color:red; text-align:center">Произошла ошибка, данных нет!</p>')
		errorBlock = document.querySelector('.error-block')
	}
	setTimeout(() => {
		errorBlock.remove()
	}, 5000)
}