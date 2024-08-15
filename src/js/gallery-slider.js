export const gallerySlider = () => {
	new Swiper('.gallery__slider .swiper', {
		slidesPerView: 1,
		spaceBetween: 8,
		loop: true,
		navigation: {
			nextEl: '.gallery__btn-next',
			prevEl: '.gallery__btn-prev'
		},
		breakpoints: {
			320: {
				slidesPerView: 1.33
			},
			480: {
				slidesPerView: 1.83
			},
			640: {
				slidesPerView: 2.5
			},
			960: {
				slidesPerView: 2.75
			},
			1200: {
				slidesPerView: 3.09
			},
			1700: {
				slidesPerView: 3.8
			}
		}
	})
}
