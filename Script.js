// // <!-- Add this in your script -->

        




document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });


