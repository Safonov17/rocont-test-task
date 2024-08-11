export const showMenu = () => {
	const headerBurger = document.querySelector('.header__burger')
	const headerNav = document.querySelector('.header__nav')

	headerBurger.addEventListener('click', () => {
		headerNav.classList.add('active')
	})
}
