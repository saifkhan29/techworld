const icon = document.querySelector('.icon');
const navLinks = document.querySelector('.nav-links');

const links = document.querySelectorAll('.nav-links li');

icon.addEventListener('click', () => {
    navLinks.classList.toggle('open');
})

const button = document.querySelector('#tech');

button.addEventListener('click', function () {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    
})

const randomColor = function (){
    const r = Math.floor(Math.random () * 256);
    const g = Math.floor(Math.random () * 256);
    const b = Math.floor(Math.random () * 256);

    return `rgb(${r} , ${g} , ${b})`;
}
