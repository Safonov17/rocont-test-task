import cards from '../data/cards.json'
import { showMenu } from './burger'
import { displayCards } from './displayCards'
import { formValidation } from './form-validation'
import { gallerySlider } from './gallery-slider'
import { showMap } from './map'
import { preloader } from './preloader'

preloader()
showMenu()
gallerySlider()
showMap()
formValidation()
displayCards(cards)
