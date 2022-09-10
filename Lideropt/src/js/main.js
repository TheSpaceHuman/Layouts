
//=======User js=============
//Slider
$('.goods-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  lazyLoad: 'ondemand',
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.index-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1.3,
  slidesToScroll: 1,
  centerMode: true
  // variableWidth: true
});

/*================== Menu open =====================*/
$(".sidemenu-btn").on("click", function() {
  $(".wrapper").toggleClass("stop");
  $(".sidemenu").toggleClass("slidein");
  return false;
});
$(".close-menu").on("click", function() {
  $(".wrapper").removeClass("stop");
  $(".sidemenu").removeClass("slidein");
  return false;
});
$(".close_subs").on("click", function() {
  $(".alert.alert-success").addClass("nodisplay");
  return false;
});

$(".sidemenu-btn2").on("click", function() {
  $(".wrapper").toggleClass("stop");
  $(".sidemenu2").toggleClass("slidein");
  return false;
});
$(".close-menu2").on("click", function() {
  $(".wrapper").removeClass("stop");
  $(".sidemenu2").removeClass("slidein");
  return false;
});
$(".btn-search").on("click", function() {
  $(".wrapper").removeClass("stop");
  $(".sidemenu2").removeClass("slidein");
  return true;
});
$(".close_subs").on("click", function() {
  $(".alert.alert-success").addClass("nodisplay");
  return false;
});
$(".sidemenu2.slidein > ul > li").on("click", function() {
  $('.sidemenu2.slidein > ul > li').removeClass("active");
  $(this).addClass("active");
  return false;
});



/*================== Menu Dropdown =====================*/
$(".sidemenu ul ul,.widget_nav_menu ul ul").parent().addClass("menu-item-has-children");
$(".sidemenu ul li.menu-item-has-children > a").on("click", function() {
  $(this).parent().toggleClass("active").siblings().removeClass("active");
  $(this).next("ul").slideToggle();
  $(this).parent().siblings().find("ul").slideUp();
  return false;
});

$(".sidemenu2 ul ul,.widget_nav_menu ul ul").parent().addClass("menu-item-has-children");
$(".sidemenu2 ul li.menu-item-has-children > a").on("click", function() {
  $(this).parent().toggleClass("active").siblings().removeClass("active");
  $(this).next("ul").slideToggle();
  $(this).parent().siblings().find("ul").slideUp();
  return false;
});
