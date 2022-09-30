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
    console.log(datos);

}