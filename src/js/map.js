export const showMap = () => {
	ymaps.ready(init)
	function init() {
		var myMap = new ymaps.Map('map', {
				center: [59.994252, 30.437570],
				zoom: 15,
				controls: []
			}),
			myGeoObject = new ymaps.GeoObject({
				geometry: {
					// type: 'Point',
					coordinates: [59.994252, 30.437570]
				},
				properties: {
					// hintContent: 'Москва, пр.60-летия Октября, 8'
				}
			})
		myMap.geoObjects.add(myGeoObject)
	}
}
