const kop = document.querySelector('h1');
const knop = document.querySelector('button');

kop.textContent = 'Interactieve website';

knop.addEventListener('click', () => {
    alert('Je hebt een knop ingedrukt!')
})