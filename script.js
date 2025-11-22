/* ======================================
   MENSAJES DE BIENVENIDA - MÉTODOS I/O
====================================== */
console.log("Bienvenido a la página del Colegio");
alert("Bienvenido al sitio web oficial");

// Entrada por teclado
let nombre = prompt("¿Cuál es tu nombre?");
console.log("Usuario ingresó:", nombre);


/* ======================================
   OPERADORES Y ESTRUCTURAS
====================================== */
let a = 10;
let b = 5;
let suma = a + b;

if (suma > 10) {
    console.log("La suma es mayor que 10");
} else {
    console.log("La suma es menor o igual a 10");
}

/* ======================================
   ARREGLOS Y BUCLES
====================================== */
let cursos = ["Inglés", "Matemática", "DPCC", "Comunicación"];
console.log("Lista de cursos:", cursos);

for (let i = 0; i < cursos.length; i++) {
    console.log("Curso:", cursos[i]);
}


/* ======================================
   BOTÓN PARA CARGAR NOTICIAS
====================================== */
const noticias = [
  "Inicio del año escolar 2025",
  "Campeones en desfile escolar",
  "Nueva sala de cómputo inaugurada"
];

document.getElementById("btnCargar").onclick = function() {
    let contenedor = document.getElementById("noticias");
    contenedor.innerHTML = "";
    noticias.forEach(noticia => {
        contenedor.innerHTML += `<p>📌 ${noticia}</p>`;
    });
};


/* ======================================
   MENÚ RESPONSIVO
====================================== */
document.getElementById("menuBtn").onclick = function() {
  document.getElementById("navLinks").classList.toggle("open");
};


/* ======================================
   MODAL (ventana flotante)
====================================== */
const modal = document.getElementById("modal");
document.getElementById("openModal").onclick = () => modal.style.display = "flex";
document.getElementById("closeModal").onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};


/* ======================================
   CONTADORES ANIMADOS
====================================== */
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 40);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});


/* ======================================
   PESTAÑAS (Tabs)
====================================== */
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".tab-btn.active").classList.remove("active");
        document.querySelector(".tab-content.active").classList.remove("active");

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});
