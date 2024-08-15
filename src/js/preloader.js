export const preloader = () => {
	window.addEventListener('load', function () {
		var preloader = document.getElementById('preloader')
		preloader.style.display = 'none'
		// AOS.init({
		// 	disable: 'mobile'
		// })
	})
}
