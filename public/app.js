const burgerIcon = document.getElementById('burger-icon')
const menu = document.getElementById('menu')

burgerIcon.addEventListener('click', () => {
	if (menu.classList.contains('hidden')) {
		menu.classList.remove('hidden')
	} else {
		menu.classList.add('hidden')
	}
})
