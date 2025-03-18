// Este código define una función flecha que actúa como un atajo para document.querySelector()
// Cuando definimos una función en JavaScript, el parámetro que pasamos se convierte en una
//  variable local dentro de la función.
const $ = selector => document.querySelector(selector);

const ejemplo = x => console.log(x);

ejemplo("Hola"); // Imprime "Hola"
ejemplo(123);    // Imprime 123

// instead of document.querySelector("#count") and document.querySelector("button")
const $count = $('#count'); // # indicates that we are selecting an element by id
const $button = $('button');

$button.addEventListener('click', () => {
    const count = +$count.innerHTML;
    $count.innerHTML = (count + 1).toString;
})

window.electronAPI.onUpdateTheme((event, theme) => {
    const root = document.documentElement

    // le decimos cual es la caston property que queremos cambiar, la que esta en stye.css
    root.style.setProperty('--scheme', theme)
    console.log(event, theme)
})