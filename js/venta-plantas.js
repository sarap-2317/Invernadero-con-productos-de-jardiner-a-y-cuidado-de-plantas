const plantas = [
    {
        id: 1,
        nombre: "Helecho Boston",
        categoria: "Sombra",
        imagen: "img/plantas/1helechoboston.jpg",
        descripcion: "Planta decorativa ideal para interiores frescos y húmedos, purifica el aire y aporta frescura a cualquier espacio.",
        cuidado: "Riego frecuente y sombra.",
        precio: "$250 MXN"
    },
    {
        id: 2,
        nombre: "Pothos",
        categoria: "Luz indirecta",
        imagen: "img/plantas/2pothos.jpg",
        descripcion: "Trepadora resistente de hojas brillantes, perfecta para colgar o colocar en repisas, casi indestructible.",
        cuidado: "Riego moderado y luz indirecta.",
        precio: "$180 MXN"
    },
    {
        id: 3,
        nombre: "Calathea",
        categoria: "Sombra",
        imagen: "img/plantas/3calathea.jpg",
        descripcion: "Sus hojas decorativas con patrones únicos la hacen destacar en cualquier rincón sin luz directa.",
        cuidado: "Evitar sol directo y mantener humedad.",
        precio: "$320 MXN"
    },
    {
        id: 4,
        nombre: "Lengua Suegra",
        categoria: "Luz indirecta",
        imagen: "img/plantas/4lenguasuegra.jpg",
        descripcion: "Extremadamente resistente, purifica el aire y sobrevive con muy poco riego y sin luz solar directa.",
        cuidado: "Poco riego y luz indirecta.",
        precio: "$220 MXN"
    },
    {
        id: 5,
        nombre: "Filodendro",
        categoria: "Sombra",
        imagen: "img/plantas/5filodendro.jpg",
        descripcion: "Planta tropical de hojas grandes y vistosas, ideal para espacios con poca iluminación natural.",
        cuidado: "Riego moderado y sombra parcial.",
        precio: "$280 MXN"
    },
    {
        id: 6,
        nombre: "Aspidistra",
        categoria: "Sombra",
        imagen: "img/plantas/6aspidistra.jpg",
        descripcion: "Conocida como la planta de hierro, tolera condiciones difíciles y ambientes oscuros sin problemas.",
        cuidado: "Riego bajo y sombra.",
        precio: "$300 MXN"
    },
    {
        id: 7,
        nombre: "Begonia Rex",
        categoria: "Luz indirecta",
        imagen: "img/plantas/7begoniarex.jpg",
        descripcion: "Sus hojas multicolores con texturas únicas la convierten en una pieza decorativa viva para interiores.",
        cuidado: "Luz indirecta y riego moderado.",
        precio: "$260 MXN"
    },
    {
        id: 8,
        nombre: "Lavanda",
        categoria: "Sol",
        imagen: "img/plantas/8Lavanda.jpg",
        descripcion: "Aromática y hermosa, sus flores moradas atraen polinizadores y perfuman cualquier jardín o terraza.",
        cuidado: "Mucho sol y poco riego.",
        precio: "$210 MXN"
    },
    {
        id: 9,
        nombre: "Geranio",
        categoria: "Sol",
        imagen: "img/plantas/9Geranio.jpg",
        descripcion: "Flores abundantes y coloridas durante todo el año, perfecta para macetas en exteriores soleados.",
        cuidado: "Sol directo y riego moderado.",
        precio: "$190 MXN"
    },
    {
        id: 10,
        nombre: "Bugambilia",
        categoria: "Sol",
        imagen: "img/plantas/10.jpg",
        descripcion: "Trepadora explosiva de colores vibrantes, símbolo de México, florece espectacularmente bajo el sol intenso.",
        cuidado: "Sol directo y riego constante.",
        precio: "$150 MXN"
    },
    {
        id: 11,
        nombre: "Aloe Vera",
        categoria: "Sol",
        imagen: "img/plantas/11AloeVera.jpg",
        descripcion: "Planta medicinal con propiedades cicatrizantes y calmantes, muy resistente y fácil de mantener al sol.",
        cuidado: "Poco riego y buena iluminación.",
        precio: "$170 MXN"
    },
    {
        id: 12,
        nombre: "Echeveria",
        categoria: "Sol",
        imagen: "img/plantas/12Echeveria.jpg",
        descripcion: "Suculenta en forma de roseta con colores que van del verde al morado, perfecta para jardines secos.",
        cuidado: "Sol y poco riego.",
        precio: "$120 MXN"
    },
    {
        id: 13,
        nombre: "Girasol",
        categoria: "Sol",
        imagen: "img/plantas/13Girasol.jpg",
        descripcion: "Flor majestuosa que sigue el movimiento del sol, trae alegría y color vibrante a cualquier espacio exterior.",
        cuidado: "Sol directo y riego frecuente.",
        precio: "$140 MXN"
    },
    {
        id: 14,
        nombre: "Romero",
        categoria: "Sol",
        imagen: "img/plantas/14Romero.jpg",
        descripcion: "Cubresuelos colorido que florece intensamente bajo el sol, ideal para jardines de bajo mantenimiento.",
        cuidado: "Sol directo y poco riego.",
        precio: "$160 MXN"
    },
    {
        id: 15,
        nombre: "Orquídea",
        categoria: "Luz indirecta",
        imagen: "img/plantas/15Orquídea.jpg",
        descripcion: "Reina de las flores de interior, con elegantes flores que duran semanas en espacios bien iluminados sin sol directo.",
        cuidado: "Luz indirecta y riego cuidadoso.",
        precio: "$450 MXN"
    },
    {
        id: 16,
        nombre: "Ficus Lyrata",
        categoria: "Luz indirecta",
        imagen: "img/plantas/16Ficus Lyrata.jpg",
        descripcion: "Árbol de interior de moda, con grandes hojas en forma de violín que decoran espacios modernos con estilo.",
        cuidado: "Luz indirecta brillante y riego moderado.",
        precio: "$520 MXN"
    },
    {
        id: 17,
        nombre: "Monstera",
        categoria: "Luz indirecta",
        imagen: "img/plantas/17Monstera.jpg",
        descripcion: "La planta más icónica de las redes sociales, con hojas perforadas únicas que transforman cualquier espacio.",
        cuidado: "Luz indirecta y humedad media.",
        precio: "$480 MXN"
    },
    {
        id: 18,
        nombre: "Peperomia",
        categoria: "Sombra",
        imagen: "img/plantas/18Peperomia.jpg",
        descripcion: "Compacta y versátil en colores y texturas, perfecta para escritorios y espacios pequeños con luz tenue.",
        cuidado: "Sombra parcial y poco riego.",
        precio: "$190 MXN"
    },
    {
        id: 19,
        nombre: "Diefenbaquia",
        categoria: "Luz indirecta",
        imagen: "img/plantas/19Difenbaquia.jpg",
        descripcion: "Hojas grandes con manchas crema y verdes, crece rápidamente y llena espacios interiores con vida tropical.",
        cuidado: "Luz indirecta y riego moderado.",
        precio: "$300 MXN"
    },
    {
        id: 20,
        nombre: "Croton",
        categoria: "Luz indirecta",
        imagen: "img/plantas/20Croton.jpg",
        descripcion: "Explosión de color en un solo arbusto, sus hojas amarillas, rojas y verdes iluminan cualquier rincón del hogar.",
        cuidado: "Luz indirecta brillante.",
        precio: "$280 MXN"
    },
    {
        id: 21,
        nombre: "Cuna de Moisés",
        categoria: "Sombra",
        imagen: "img/plantas/21cunadmoy.jpg",
        descripcion: "Flores blancas elegantes y follaje verde oscuro brillante, una de las mejores purificadoras de aire para interiores..",
        cuidado: "Sombra y riego moderado.",
        precio: "$260 MXN"
    }
];

function mostrarPlantas(listaPlantas) {
    const contenedor = document.getElementById("contenedor-grid");
    contenedor.innerHTML = "";

    listaPlantas.forEach(planta => {
        contenedor.innerHTML += `
            <div class="servicio-card">
                <img src="${planta.imagen}" alt="${planta.nombre}">
                <h3>${planta.nombre}</h3>
                <p>${planta.categoria}</p>
                <button class="cta-button" onclick="verDetalles(${planta.id})">Ver detalles</button>
            </div>
        `;
    });
}

function verDetalles(id) {
    const planta = plantas.find(p => p.id === id);
    const modal = document.getElementById("modalServicio");
    const contenido = document.getElementById("modal-body-content");

    contenido.innerHTML = `
        <img src="${planta.imagen}" class="modal-detalle-img">
        <h2>${planta.nombre}</h2>
        <p style="color: #FA64BA; font-weight: bold;">${planta.categoria}</p>
        <hr>
        <p style="margin: 20px 0; line-height: 1.6;">${planta.descripcion}</p>
        <div class="modal-info-extra">
            <span><strong>Cuidado: </strong>${planta.cuidado}</span>
            <span><strong>Precio: </strong>${planta.precio}</span>
        </div>
    `;

    modal.style.display = "block";
}

mostrarPlantas(plantas);

const btnFiltrar = document.getElementById("btnFiltrar");
const inputBusqueda = document.getElementById("inputBusqueda");

function filtrarPlantas() {
    const termino = inputBusqueda.value.toLowerCase();

    const filtradas = plantas.filter(planta =>
        planta.nombre.toLowerCase().includes(termino) ||
        planta.categoria.toLowerCase().includes(termino)
    );

    mostrarPlantas(filtradas);
}

btnFiltrar.addEventListener("click", filtrarPlantas);

inputBusqueda.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        filtrarPlantas();
    }
});

const closeBtn = document.querySelector(".close-btn");

closeBtn.onclick = () => {
    document.getElementById("modalServicio").style.display = "none";
};

window.addEventListener("click", (event) => {
    const modal = document.getElementById("modalServicio");

    if (event.target === modal) {
        modal.style.display = "none";
    }
});