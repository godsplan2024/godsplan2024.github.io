let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel-slide img");
    const totalSlides = slides.length;

    index += step;
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    const carouselSlide = document.querySelector(".carousel-slide");
    carouselSlide.style.transform = `translateX(-${index * 100}%)`;
}
