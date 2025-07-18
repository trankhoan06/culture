$(document).ready(function () {
  $('.tab-content-2, .tab-content-3').hide();
  $('.tab-content-1').show();
  $('.tabs-menu-item').on('click', function (e) {
    e.preventDefault();

    const $clickedTab = $(this);
    const $allTabs = $('.tabs-menu-item');
    const $allTabContents = $('.tab-content-1, .tab-content-2, .tab-content-3');
    if ($clickedTab.hasClass('active')) {
      return;
    }
    let targetContent;
    if ($clickedTab.hasClass('tab-title-1')) {
      targetContent = $('.tab-content-1');
    } else if ($clickedTab.hasClass('tab-title-2')) {
      targetContent = $('.tab-content-2');
    } else if ($clickedTab.hasClass('tab-title-3')) {
      targetContent = $('.tab-content-3');
    }
    $allTabs.removeClass('active');
    $clickedTab.addClass('active');
    $allTabContents.fadeOut(0, function () {
      $('div.aos-init.aos-animate').removeClass('aos-animate');
      targetContent.fadeIn(0, function () {
        AOS.refresh();
      });
    });

    $('.tabs-menu-item').hover(
      function () {
        $(this).addClass('hover-effect');
      },
      function () {
        $(this).removeClass('hover-effect');
      }
    );

    $(document).on('keydown', function (e) {
      const $activeTabs = $('.tabs-menu-item.active');
      let $nextTab;

      if (e.keyCode === 37) {
        // Left arrow
        $nextTab = $activeTabs.prev('.tabs-menu-item');
        if ($nextTab.length === 0) {
          $nextTab = $('.tabs-menu-item').last();
        }
        $nextTab.trigger('click');
      } else if (e.keyCode === 39) {
        // Right arrow
        $nextTab = $activeTabs.next('.tabs-menu-item');
        if ($nextTab.length === 0) {
          $nextTab = $('.tabs-menu-item').first();
        }
        $nextTab.trigger('click');
      }
    });

    // $('html, body').animate(
    //   {
    //     scrollTop: $('.hero-banner').offset().top - 100,
    //   },
    //   500
    // );
  });
});
