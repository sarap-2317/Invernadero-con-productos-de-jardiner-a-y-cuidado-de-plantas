// Función para mover el carrusel con las flechas
function moveSlide(trackId, dotsId, direction) {
    const track = document.getElementById(trackId);
    const dotsContainer = document.getElementById(dotsId);

    if (!track || !dotsContainer) return;

    const slides = track.querySelectorAll(".carousel-slide");
    const dots = dotsContainer.querySelectorAll(".dot");

    if (slides.length === 0 || dots.length === 0) return;

    let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));

    if (activeIndex === -1) {
        activeIndex = 0;
    }

    slides[activeIndex].classList.remove("active");
    dots[activeIndex].classList.remove("active");

    let newIndex = activeIndex + direction;

    if (newIndex >= slides.length) {
        newIndex = 0;
    }

    if (newIndex < 0) {
        newIndex = slides.length - 1;
    }

    slides[newIndex].classList.add("active");
    dots[newIndex].classList.add("active");
}

// Función para cambiar de imagen usando los puntos del carrusel
function jumpToSlide(trackId, dotsId, index) {
    const track = document.getElementById(trackId);
    const dotsContainer = document.getElementById(dotsId);

    if (!track || !dotsContainer) return;

    const slides = track.querySelectorAll(".carousel-slide");
    const dots = dotsContainer.querySelectorAll(".dot");

    if (slides.length === 0 || dots.length === 0) return;

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

// Cambia automáticamente las imágenes cada 3 segundos
setInterval(() => {
    moveSlide("track1", "dots1", 1);
    moveSlide("track2", "dots2", 1);
}, 3000);