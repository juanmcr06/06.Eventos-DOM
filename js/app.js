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
console.log(2);
console.log(5);