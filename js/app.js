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

// console.log(1);

// window.addEventListener('load', function() { // load espera que el JS y los archivos que dependen de HTML esten listos
//     console.log('Ya cargo la pagina');
// });

// window.addEventListener('load', imprimir);

// window.onload = function() {
//     console.log('Segunda opcion de evento load');
// };

// document.addEventListener('DOMContentLoaded', function() { // Este evento solo espera a que cargue el HTML sin importar css o imagenes.
//     console.log('Este solo espera a que cargue el HTML')
// });
// console.log(2);
// console.log(5);

// function imprimir() { // Se puede crear una funcion por fuera para luego utilizarla en el addEventListener
//     console.log('Usando una funcion por fuera');
// };

// window.onscroll = function() {
//     console.log('scrolling...');
// };


// Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault(); // Muy util a la hora de validar un formulario
//     console.log('Enviando Formulario...');
// });

// EVENTOS DE INPUT Y TEXTAREA

const datos = {
    nombre: '',
    email: '',
    mensaje:''
};

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    // console.log(e.target.value); Envia cada valor escrito. Target te dice el input que es escrito

    datos[e.target.id] = e.target.value; // Almacena los datos en el objeto
   // console.log(datos);

}

// Capturar submit

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(evento) {
    //Previene acciones por defecto, en este caso enviar el formulario y recargar la pagina
    evento.preventDefault(); 

    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');
        return; // corta la ejecucion del codigo
    } else {
        mostrarCorrecto('Formulario enviado');
    }

    console.log('Enviando formulario...')
});

// Mostrar el error en pantalla

function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild(error);

    // Desaparezca luego de 3 segundos
    setTimeout(() => {
        error.remove(); //Metodo para borrar un elemento
    }, 3000)
    console.log(error);
}

// Mostrar validacion en pantalla

function mostrarCorrecto(mensaje) {
    const correcto = document.createElement('P');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto');
    formulario.appendChild(correcto);

    // Desaparezca luego de 3 segundos
    setTimeout(() => {
        correcto.remove(); //Metodo para borrar un elemento
    }, 3000)
    console.log(correcto);
}