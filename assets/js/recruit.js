$(document).ready(function () {
$('.recruit__opportunity__table__row__inner').click(function () {
        
        if($(this).hasClass('active')){
                $(this).removeClass('active');
                $(this).closest('.recruit__opportunity__table__row')
                .find('.recruit__opportunity__table__row__detail')
                .slideUp();
        }
        else {
                $('.recruit__opportunity__table__row__inner').removeClass('active')
                $(this).addClass('active')
                $('.recruit__opportunity__table__row__detail')
                        .slideUp();
                $(this).closest('.recruit__opportunity__table__row')
                        .find('.recruit__opportunity__table__row__detail')
                        .slideDown();
        }
});
     $(".recruit__opportunity__apply").on("click", function (e) {
    e.stopPropagation();
    $(".recruit__opportunity__form").addClass("active");
  });
$(".recruit__opportunity__form__close").on("click", function (e) {
    e.stopPropagation();
    $(".recruit__opportunity__form").removeClass("active");
  });
  // Ngăn không đóng khi click trong form
  $(".recruit__opportunity__form__inner").on("click", function (e) {
    e.stopPropagation();
  });

  // Click bên ngoài form => ẩn
  $(document).on("click", function (e) {
    // Nếu click KHÔNG nằm trong .recruit__opportunity__form__inner
    if (!e.target.closest(".recruit__opportunity__form__inner")) {
      $(".recruit__opportunity__form").removeClass("active");
    }
  });
  });