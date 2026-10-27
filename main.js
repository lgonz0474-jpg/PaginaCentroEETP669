/*=============== SHOW/HIDE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Toggle menu al hacer clic en el ícono hamburguesa */
if(navToggle){
   navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show-menu'); // alterna abrir/cerrar
   });
}

/* Cerrar menú al hacer clic en el ícono X (opcional) */
if(navClose){
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   });
}

/*=============== AOS INIT ===============*/
document.addEventListener('DOMContentLoaded', function() {
   AOS.init({
      duration: 1000,  // Duración de la animación
      offset: 100,     // Distancia del scroll para activarse
      delay: 100,      // Retardo en animación
      once: true,      // Solo se ejecuta una vez
      easing: 'ease-in-out',  // Tipo de easing
   });
});
