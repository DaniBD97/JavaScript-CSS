var swiper = new Swiper(".slide-track", {
    spaceBetween: 10,
    loop: false,
    centerSlide: true,
    autoplay: {
      delay: 10000,
      pauseOnMouseEnter: true,
    },
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "slide", // Cambiamos el efecto a 'slide' para una transición similar a 'linear'
    speed: 1000, // Ajusta la velocidad según tus preferencias
  
    breakpoints: {
      575: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        autoplay: {
          delay: 3000,
        },
      },
      1200: {
        slidesPerView: 3,
        autoplay: {
          delay: 1000,
          pauseOnMouseEnter: true,
        },
      },
    },
  });
  