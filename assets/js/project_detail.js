const parseRem = (input) => {
  return (input / 10) * parseFloat($("html").css("font-size"));
};
function projectDetailThumb () {
  let swiperHero = new Swiper(".project_detail_thumb_main", {
    slidesPerView: 1,
    initialSlide: 1,
    loop: true,
    loopAdditionalSlides: 2,
    spaceBetween: parseRem(160),
    navigation: {
      nextEl: ".project_detail_thumb_navi_item.item_next",
      prevEl: ".project_detail_thumb_navi_item.item_prev",
    },
    
  });
}
projectDetailThumb();