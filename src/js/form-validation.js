export const formValidation = () => {
	const form = document.querySelector('.subscribe__form form')
	const nameInput = form.querySelector('input[name="name"]')
	const phoneInput = form.querySelector('input[name="phone"]')
	const submitBtnText = form.querySelector('.subscribe__btn-text')

	form.addEventListener('submit', evt => {
		evt.preventDefault()

		// Получаем значения полей формы
		const name = nameInput.value
		const phone = phoneInput.value

		// Проверяем, что поля заполнены
		if (!name || !phone) {
			showError(nameInput, 'Поле "Имя" обязательно к заполнению')
			showError(phoneInput, 'Поле "Телефон" обязательно к заполнению')
			return
		}

		// Проверяем, что имя пользователя содержит только буквы
		if (!isValidName(name)) {
			showError(
				nameInput,
				'Имя может содержать только буквы русского или латинского алфавита'
			)
			return
		}

		// Проверяем, что поле для телефона содержит только цифры
		if (!isValidPhone(phone)) {
			showError(phoneInput, 'Телефон может содержать только цифры')
			return
		}

		// Если всё в порядке, отправляем форму. Пока что закомментировано, чтобы не перезагружать страницу
		// form.submit()

		// Очищаем поля формы
		nameInput.value = ''
		phoneInput.value = ''

		// Отображаем сообщение об успешной отправке
		submitBtnText.textContent = 'Данные отправлены'

		setTimeout(function () {
			submitBtnText.innerText = 'Отправить'
		}, 3000)
	})

	function isValidName(name) {
		// Проверка имени регулярным выражением
		const pattern = /^[А-Я][а-яё]*$/
		return pattern.test(name)
	}

	function isValidPhone(phone) {
		// Проверка имени регулярным выражением
		const pattern = /^([+]?[0-9\s-\(\)]{3,25})*$/i
		return pattern.test(phone)
	}

	function showError(input, message) {
		const error = input.nextElementSibling
		error.textContent = message
		input.style.border = '1px solid red'
		input.style.borderColor = 'red'
		error.style.display = 'inline-block'

		input.addEventListener('input', () => {
			error.style.display = 'none'
			error.textContent = ''
			input.style.border = 'none'
		})
	}
}
