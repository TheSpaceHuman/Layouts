// ES2015+
$(document).ready(function () {
  // Active event mainMenu
  $('.header__row2__fluid-menu__item').hover(
    function (e) {
      $(this).addClass('active');
      $(this).addClass('hover');
    },
    function (e) {
      $('.header__row2__fluid-menu__item')
        .removeClass('active')
        .removeClass('hover');
    });
  $('.breadcrumbs__item.active a').click(function (e) {
    e.preventDefault()
  })

  // Filters
  const filterOptions = $('.product-collection__tabs__filter.filter--option').find('.product-collection__tabs__filter__controls__item');
  const filterOptionsReset =  $('.product-collection__tabs__filter.filter--option').find('.action--reset');
  const filterOptionInput = $('input[type="hidden"][name="option_id"]');
  filterOptions
    .click(function () {
      filterOptions.removeClass('active');
      $(this).addClass('active');
      filterOptionInput.val($(this).attr('data-id'));
    });
  filterOptionsReset
    .click(function () {
      setTimeout(() => {
        filterOptions.removeClass('active');
      }, 250)
    });

  const filterColors = $('.product-collection__tabs__filter.filter--color').find('.product-collection__tabs__filter__controls__item');
  const filterColorsReset = $('.product-collection__tabs__filter.filter--color').find('.action--reset');
  const filterColorInput = $('input[type="hidden"][name="color_id"]');
  filterColors
    .click(function () {
      filterColors.removeClass('active');
      $(this).addClass('active');
      filterColorInput.val($(this).attr('data-id'));
    });
  filterColorsReset
    .click(function () {
      setTimeout(() => {
        filterColors.removeClass('active');
      }, 250)
  });


  // Product-collection slider
  $('.slider-collection-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-collection-nav',
    lazyLoad: 'ondemand',
  });
  $('.slider-collection-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-collection-for',
    arrows: true,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });

});
