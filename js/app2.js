// EVENTO SUBMIT

// Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault(); // Muy util a la hora de validar un formulario
//     console.log('Enviando Formulario...');
// });

// Capturar submit

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(evento) {
    //Previene acciones por defecto, en este caso enviar el formulario y recargar la pagina
    evento.preventDefault(); 

    console.log('Enviando formulario...')
});

// La diferencia entre usar 'click' y 'submit' es que el primero 
// sirve para capturar cualquier click que queramos, ya sea un link,
// una foto o boton. En cambio el segundo es para si o si formularios
// ya que estos llevan por defecto un type=submit
