export const showMap = () => {
	ymaps.ready(init)
	function init() {
		var myMap = new ymaps.Map('map', {
				center: [55.695301, 37.575657],
				zoom: 16,
				controls: []
			}),
			myGeoObject = new ymaps.GeoObject({
				geometry: {
					type: 'Point',
					coordinates: [55.695301, 37.575657]
				},
				properties: {
					hintContent: 'Москва, пр.60-летия Октября, 8'
				}
			})
		myMap.geoObjects.add(myGeoObject)
	}
}
