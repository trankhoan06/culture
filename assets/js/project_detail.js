const parseRem = (input) => {
  return (input / 10) * parseFloat($("html").css("font-size"));
};
function projectDetailThumb () {
  let gapSlide = parseRem(160);
  if($(document).width() < 991 && $(document).width() > 767) {
    gapSlide = parseRem(100)
  }
  if($(document).width() < 767) {
    gapSlide = parseRem(24)
  }
  let swiperHero = new Swiper(".project_detail_thumb_main", {
    slidesPerView: 1,
    initialSlide: 1,
    spaceBetween: gapSlide,
    navigation: {
      nextEl: ".project_detail_thumb_navi_item.item_next",
      prevEl: ".project_detail_thumb_navi_item.item_prev",
    },
    
  });
}
projectDetailThumb();
function projectDetailOther() {
  let slidesPerView = 3;
  if($(document).width() < 991 && $(document).width() > 767) {
    slidesPerView= 2
  }
  else if ($(document).width() < 767) {
    slidesPerView = 1.2
  }
  let swiperHero = new Swiper(".project__detail__other__wrap", {
    slidesPerView: slidesPerView,
    loop: true,
    speed: 8000,
    autoplay: {
      delay: 0,
    },
    spaceBetween: parseRem(20),    
  });
}
projectDetailOther();