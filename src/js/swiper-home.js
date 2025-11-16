let swiperHero = new Swiper(".hero-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    effect: "fade",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

let swiperTestemunhos = new Swiper(".testemunhos-swipper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-proximo",
        prevEl: ".swiper-anterior",
    },
});