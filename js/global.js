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

// Lógica barra de búsqueda global
const MAPA_SITIO = [
    {
        nombre: "Inicio",
        url: "index.html",
        keywords: [
            "inicio",
            "home",
            "bienvenida",
            "sara",
            "invernadero",
            "principal",
            "plantas",
            "jardineria",
            "jardinería"
        ]
    },
    {
        nombre: "Servicios",
        url: "servicios.html",
        keywords: [
            "servicios",
            "jardineria",
            "jardinería",
            "mantenimiento",
            "riego",
            "poda",
            "plagas",
            "fertilizacion",
            "fertilización",
            "decoracion",
            "decoración"
        ]
    },
    {
        nombre: "Venta de Plantas",
        url: "venta-plantas.html",
        keywords: [
            "venta",
            "plantas",
            "catalogo",
            "catálogo",
            "sol",
            "sombra",
            "luz indirecta",
            "pothos",
            "monstera",
            "lavanda",
            "orquidea",
            "orquídea",
            "helecho",
            "ficus",
            "romero",
            "girasol"
        ]
    },
    {
        nombre: "Diseños de Jardín",
        url: "disenos-jardin.html",
        keywords: [
            "diseños",
            "disenos",
            "diseño",
            "diseno",
            "jardin",
            "jardín",
            "zen",
            "vertical",
            "ecologico",
            "ecológico",
            "pequeño",
            "pequeno",
            "grande",
            "terraza"
        ]
    },
    {
        nombre: "Contáctanos",
        url: "contactanos.html",
        keywords: [
            "contacto",
            "contactanos",
            "contáctanos",
            "telefono",
            "teléfono",
            "whatsapp",
            "instagram",
            "correo",
            "solicitud",
            "mensaje"
        ]
    }
];

function ejecutarBusqueda() {
    const inputBuscar = document.querySelector(".search-bar");

    if (!inputBuscar) return;

    const termino = inputBuscar.value.toLowerCase().trim();

    if (!termino) {
        alert("Escribe algo para buscar.");
        return;
    }

    const destino = MAPA_SITIO.find(pagina =>
        pagina.nombre.toLowerCase().includes(termino) ||
        pagina.keywords.some(keyword => keyword.toLowerCase().includes(termino))
    );

    if (destino) {
        window.location.href = destino.url;
    } else {
        alert("No se encontró la sección. Intenta con: plantas, servicios, jardín o contacto.");
    }
}

// Asignamos eventos clic y Enter
const btnBuscar = document.querySelector(".search-btn");

if (btnBuscar) {
    btnBuscar.addEventListener("click", ejecutarBusqueda);
}

const inputBuscar = document.querySelector(".search-bar");

if (inputBuscar) {
    inputBuscar.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            ejecutarBusqueda();
        }
    });
}