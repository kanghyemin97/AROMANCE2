var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,//슬라이드 넘어가는 시간
    disableOnInteraction: false,
  },
  
  slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });