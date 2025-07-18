$('.recruit__opportunity__table__row__inner').click(function () {
   $(this).closest('.recruit__opportunity__table__row')
           .find('.recruit__opportunity__table__row__detail')
           .slideToggle();
  });