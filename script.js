// menu
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('move');
    navbar.classList.toggle('open-menu')
};
// close menu on page scroll 
window.onscroll = () => {
    menu.classList.remove('move');
    navbar.classList.remove('open-menu')
};
// scroll reveal animation 
const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

animate.reveal('.nav, .heading');
animate.reveal(".home-img img", {origin: "right"});
animate.reveal(".input-form", {origin: "bottom"});
animate.reveal(".trend-box, .rentals-box, .team-content, .t-box, .newsletter", {interval: 100});