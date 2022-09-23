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