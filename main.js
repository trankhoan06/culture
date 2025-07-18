
$(document).ready(function () {
    $(document).ready(function () {
        $('.stat').each(function () {
            let $this = $(this);
            let countTo = $this.attr('data-count');
            $({ countNum: 0 }).animate({ countNum: countTo }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum) + "+");
                },
                complete: function () {
                    $this.text(this.countNum + "+");
                }
            });
        });
    });

    $('.projects_detail').slick({
        dots: false,
        arrows: false,
        margin: 10,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.client-grid').slick({
        dots: false,
        arrows: false,
        margin: 10,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });


    if (window.innerWidth <= 768) {
        $('.text-muted').find('br').remove();
    }


    const backToTop = $('#backToTop')
    const amountScrolled = 300

    $(window).scroll(() => {
        $(window).scrollTop() >= amountScrolled
            ? backToTop.fadeIn('fast')
            : backToTop.fadeOut('fast')
    })

    backToTop.click(() => {
        $('body, html').animate({
            scrollTop: 0
        }, 600)
        return false
    })


    // $('.news_slide').slick({
    //     dots: false,
    //     arrows: false,
    //     margin: 10,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1
    //             }
    //         }
    //     ]
    // });

    let lastScrollTop = 0;
    let header = $('#mainHeader');

    $(window).on('scroll', function () {
        let currentScroll = $(this).scrollTop();

        if (currentScroll > lastScrollTop) {
            // Cuộn xuống → ẩn header
            header.removeClass('header-visible').addClass('header-hidden');
        } else if (currentScroll < lastScrollTop && currentScroll > 0) {
            // Cuộn lên (và đã cuộn khỏi top) → hiện header + nền xanh
            header.removeClass('header-hidden').addClass('header-visible');
        } else if (currentScroll === 0) {
            // Quay lại đầu trang → reset về trong suốt
            header.removeClass('header-visible header-hidden');
        }

        lastScrollTop = currentScroll;
    });

    $('.mobile-menu-toggle').click(function() {
        $('.mobile-menu').addClass('active');
        $('.mobile-menu-overlay').addClass('active');
    });

    $('.close-menu, .mobile-menu-overlay').click(function() {
        $('.mobile-menu').removeClass('active');
        $('.mobile-menu-overlay').removeClass('active');
    });
});
