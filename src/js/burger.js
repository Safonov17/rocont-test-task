export const showMenu = () => {
	const headerBurger = document.querySelector('.header__burger')
	const headerNav = document.querySelector('.header__nav')

	const openMenu = () => {
		headerNav.classList.add('active')
		document.body.style.overflowY = 'hidden'
	}
	const closeMenu = () => {
		headerNav.classList.remove('active')
		document.body.style.overflowY = 'visible'
	}

	headerBurger.addEventListener('click', () => openMenu())

	headerNav.addEventListener('click', e => {
		if (e.target.classList.contains('header__menu')) return

		if (e.target.classList.contains('header__menu-link')) {
			closeMenu()
		}
		
		closeMenu()
	})
}
