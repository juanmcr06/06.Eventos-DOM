// querySelector

const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Nuevo Heading';
heading.classList.add('nueva-clase');
console.log(heading);


// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Enlace';
enlaces[0].href = 'https://google.com';


//getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);

// Generar un nuevo enlace

const nuevoEnlace = document.createElement('A');

// Agregar el href

nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar texto

nuevoEnlace.textContent = 'Un Nuevo Enlace';

// Agregar un clase

nuevoEnlace.classList.add('navegacion__enlace');

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);  // appenChild agrega un hijo(nuevoElemento)


console.log(nuevoEnlace);


// Eventos

console.log(1);

window.addEventListener('load', function() { // load espera que el JS y los archivos que dependen de HTML esten listos
    console.log('Ya cargo la pagina');
});

window.addEventListener('load', imprimir);

window.onload = function() {
    console.log('Segunda opcion de evento load');
};

document.addEventListener('DOMContentLoaded', function() { // Este evento solo espera a que cargue el HTML sin importar css o imagenes.
    console.log('Este solo espera a que cargue el HTML')
});
console.log(2);
console.log(5);

function imprimir() { // Se puede crear una funcion por fuera para luego utilizarla en el addEventListener
    console.log('Usando una funcion por fuera');
};

window.onscroll = function() {
    console.log('scrolling...');
};


// Seleccionar elementos y asociarles un evento

const btnEnviar = document.querySelector('.boton--primario');

btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault(); // Muy util a la hora de validar un formulario
    console.log('Enviando Formulario...');
});