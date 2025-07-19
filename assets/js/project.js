const parseRem = (input) => {
  return (input / 10) * parseFloat($("html").css("font-size"));
};

function projectHero() {
  let lastIndex=0;
  let swiperHero = new Swiper(".project_hero_swiper", {
    slidesPerView: 1,
    spaceBetween: parseRem(20),
    scrollbar: {
      el: ".project_hero_control_progress",
    },
    navigation: {
      nextEl: ".project_hero_control_next",
      prevEl: ".project_hero_control_prev",
    },
    on: {
      slideChange: function () {
        activeTitle(this.activeIndex)
        lastIndex = this.activeIndex;
        const activeSlide = this.slides[this.activeIndex];
        let dataTitle = $(activeSlide).attr('data-title');
        $('.project_hero_content_btn').attr('data-scroll', dataTitle);
        console.log('Slide changed! Index hiện tại là:', this.activeIndex);
      }
    }
  });
  let title =  new SplitType('.project_hero_content_title',{types: 'lines, words', lineClass: 'kl-line'})
  gsap.set('.project_hero_content_title:not(:first-child) .word', {yPercent: 100})
  let height = $('.project_hero_content_title').eq(0).outerHeight(true);
  $('.project_hero_content_title_wrap').height(height);
  function activeTitle (index) {
    let height = $('.project_hero_content_title').eq(index).outerHeight(true);
    $('.project_hero_bg_inner').removeClass('active');
    $('.project_hero_bg_inner').eq(index).addClass('active');
    gsap.fromTo($('.project_hero_bg_inner').eq(index).find('img'), {scale: 1.3}, {scale: 1, duration:1, easing: 'power4.in'})
    $('.project_hero_content_title_wrap').height(height);
    if(index > lastIndex) {
      gsap.to('.project_hero_content_title.active .word', {yPercent: -100, stagger: .025})
      gsap.to($('.project_hero_content_title').eq(index).find('.word'), {yPercent: 0, stagger: .025})
    }
    else{
      gsap.to('.project_hero_content_title.active .word', {yPercent: 100, stagger: .025})
      gsap.to($('.project_hero_content_title').eq(index).find('.word'), {yPercent: 0, stagger: .025})
    }
    $('.project_hero_content_title').removeClass('active')
    $('.project_hero_content_title').eq(index).addClass('active')
  }
}
projectHero();