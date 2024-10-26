export const displayCards = data => {
	const galleryList = document.querySelector('.gallery .swiper-wrapper')

	data.forEach(card => {
		const html = /*html*/ `
			<div class="swiper-slide">
				<div class="gallery__card">
					<div class="gallery__card-overlay"></div>
					<img
						class="gallery__card-img"
						src="/gallery/${card.imgName}.jpg"
						srcset="
							/gallery/${card.imgName}_2x.jpg 2x,
							/gallery/${card.imgName}_3x.jpg 3x
						"
						alt="${card.title}"
						width="300"
						height="450"
						draggable="false"
					/>
					<div class="gallery__card-text">
						<h3 class="gallery__card-title">${card.title}</h3>
						<h4 class="gallery__card-subtitle">${card.subtitle}</h4>
					</div>
				</div>
			</div>
		`

		galleryList.insertAdjacentHTML('beforeend', html)
	})
}
