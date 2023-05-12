const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// Aqui le decimos que busque el id Sec class="escrito" id="SeccionEscrito"cionListaAlbum(Lo tiene un a en la lista en el html)
const deslizarlistaalbum = document.querySelector("#SeccionListaAlbum");

// Creamos la funcion deslizar para que cuadno hagamos click en el a con el id "SeccionListaAlbum" desaparezca el menu
deslizarlistaalbum.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// REPETIMOS LO MISMO DE #SeccionListaAlbum CON CADA UNO DE LOS QUE HAY EN LA LISTA

// Aqui le decimos que busque el id SeccionListaEscrito(Lo tiene un a en la lista en el html)
const deslizarlistaescrito = document.querySelector("#SeccionListaEscrito");

// Creamos la funcion deslizar para que cuadno hagamos click en el a con el id "SeccionListaAlbum" desaparezca el menu
deslizarlistaescrito.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// Aqui le decimos que busque el id SeccionListaEscrito(Lo tiene un a en la lista en el html)
const deslizarlistajuegos = document.querySelector("#SeccionListaJuegos");

// Creamos la funcion deslizar para que cuadno hagamos click en el a con el id "SeccionListaAlbum" desaparezca el menu
deslizarlistajuegos.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// Aqui le decimos que busque el id SeccionListaEscrito(Lo tiene un a en la lista en el html)
const deslizarlistacreditos = document.querySelector("#SeccionListaCreditos");

// Creamos la funcion deslizar para que cuadno hagamos click en el a con el id "SeccionListaAlbum" desaparezca el menu
deslizarlistacreditos.addEventListener("click", () => {
    nav.classList.remove("visible");
})





// PARA QUE REDIRIGA A LOS JUEGOS

document.getElementById("prueba").onclick = function () {
location.href = "memo.html";
};

document.getElementById("prueba2").onclick = function () {
location.href = "puzzle.html";
};

document.getElementById("prueba3").onclick = function () {
    location.href = "trivial.html";
    };