export default function swiperModule() {
  const bannerSwiper = new Swiper(".banner .swiper", {
    loop: true,
    slidesPerView: 1,
    speed: 1200,
    effect: "fade",
    autoplay: { delay: 5000 },
    fadeEffect: { crossFade: true },
  });

  const demo = document.querySelectorAll(".gallery-slider");

  demo.forEach((item) => {
    const demo2 = item.querySelector(".swiper");
    const slide = item.querySelectorAll(".swiper-slide");
    // if (window.innerWidth > 1200 && slide.length <= 6) {
    //   demo2.classList.add("is-gallery-slider");
    // }
    const sw_gallery = new Swiper(demo2, {
      speed: 1500,
      effect: "fade",
      autoHeight: true,
      slidesPerView: 1,
      autoplay: { delay: 5000 },
      fadeEffect: { crossFade: true },
      navigation: {
        nextEl: ".gallery-slider .swiper-button-next",
        prevEl: ".gallery-slider .swiper-button-prev",
      },
    });
  });
}
