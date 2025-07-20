$(document).ready(function() {
  $('.relationship__content__history__year__item').click(function() {
    var selectedYear = $(this).data('year'); // đúng cú pháp

    // Bỏ active trước đó
    $('.relationship__content__history__year__item').removeClass('active');
    $(this).addClass('active');

    // Ẩn tất cả nội dung và hiện nội dung năm được chọn
    $('.relationship__content__item').removeClass('active');
    $('.relationship__content__item[data-year="' + selectedYear + '"]').addClass('active');
  });

  // Hiển thị mặc định năm 2025 (nếu có)
  $('.relationship__content__history__year__item[data-year="2025"]').click();
});
