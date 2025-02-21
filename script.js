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
// input form date
window.onload = () => {
    let today = new Date().toISOString().split('T')[0];
    document.getElementById('start-date').value = today;
    document.getElementById('return-date').value = new Date(
      Date.now() + 7 * 86400000
    )
    .toISOString()
    .split('T')[0];
}