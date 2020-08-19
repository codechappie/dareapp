const phrases = [{title: "titulo de prueba numero 1"},{title: "titulo de prueba numero 1"},{title: "titulo de prueba numero 1"},{title: "titulo de prueba numero 1"}]



var mySwiper = new Swiper('.swiper-container', {

    on: {
        slidePrevTransitionEnd: function() {
            console.log("Atras")
        },
        slideNextTransitionEnd: function() {
            console.log("Adelante")
        }
    },

    // Optional parameters
    loop: true
  });