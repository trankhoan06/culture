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