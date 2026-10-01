const carousel = document.querySelector(".church-life-section");

if (carousel) {
	const images = Array.from(carousel.querySelectorAll(".carousel-image"));
	const dots = Array.from(carousel.querySelectorAll(".carousel-dots .dot"));
	const previousButton = carousel.querySelector(".carousel-button.previous");
	const nextButton = carousel.querySelector(".carousel-button.next");
	let activeIndex = images.findIndex((image) => image.classList.contains("active"));

	if (images.length && dots.length === images.length && previousButton && nextButton) {
		if (activeIndex < 0) activeIndex = 0;

		const showImage = (index) => {
			activeIndex = (index + images.length) % images.length;

			images.forEach((image, imageIndex) => {
				const isActive = imageIndex === activeIndex;
				image.classList.toggle("active", isActive);
				image.setAttribute("aria-hidden", String(!isActive));
				dots[imageIndex].classList.toggle("active", isActive);
				dots[imageIndex].setAttribute("aria-current", String(isActive));
			});
		};

		previousButton.addEventListener("click", () => showImage(activeIndex - 1));
		nextButton.addEventListener("click", () => showImage(activeIndex + 1));
		dots.forEach((dot, index) => {
			dot.addEventListener("click", () => showImage(index));
		});

		showImage(activeIndex);
	}
}
