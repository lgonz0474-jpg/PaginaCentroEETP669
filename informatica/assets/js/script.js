// ================= TRANDING 3D SLIDER =================
document.addEventListener('DOMContentLoaded', () => {
  const TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',        // efecto 3D
    grabCursor: true,           // cursor tipo "mano"
    centeredSlides: true,       // slide central centrado
    loop: true,                 // loop infinito
    slidesPerView: 'auto',      // se adapta al tamaño de cada slide
    coverflowEffect: {
      rotate: 0,                // rotación del slide
      stretch: 0,               // distancia entre slides
      depth: 100,               // profundidad del 3D
      modifier: 2.5,            // intensidad del efecto
      slideShadows: false       // sombras opcionales
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    speed: 800
  });
});
