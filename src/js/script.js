import { showMenu } from './burger'
import { formValidation } from './form-validation'
import { gallerySlider } from './gallery-slider'
import { showMap } from './map'

showMenu()
gallerySlider()
showMap()
formValidation()
AOS.init({
	disable: 'mobile'
})
