// Swiper-slider
var swiper = new Swiper('.swiper-container-baner');

var swiper = new Swiper('.swiper-container-review', {
  pagination: {
    el: '.swiper-pagination',
  },
});
// --------
// Animation yakor
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
// });
// Animation yakor
$(document).ready(function() {
   var margin = -110; // переменная для контроля докрутки
   $('a[href^="#"]').click(function() { // тут пишите условия, для всех ссылок или для конкретных
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top+margin+ "px" // .top+margin - ставьте минус, если хотите увеличить отступ
      }, {
         duration: 800, // тут можно контролировать скорость
         easing: "swing"
      });
      return false;
   });
});
// --------
// Fancybox
$('[data-fancybox="gallery"]').fancybox({
  
});
$('[data-fancybox="reviews"]').fancybox({
  
});
// -------
/* Modal-1 */
var link1 = document.querySelector('.popup-services-1');
var popup1 = document.querySelector('.popup-1');
var close1 = document.querySelector('.popup--clouse-1');
var closeFon1 = document.querySelector('.black-fon-1');

closeFon1.addEventListener("click", function(evt){
  evt.preventDefault();
  popup1.classList.remove("popup--active");
});

close1.addEventListener("click", function(evt){
  evt.preventDefault();
  popup1.classList.remove("popup--active");
});

link1.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup1.classList.add("popup--active")
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup1.classList.contains("popup--active")) {
      popup1.classList.remove("popup--active");
    }
  }
});
/* Modal-2 */
var link2 = document.querySelector('.popup-services-2');
var popup2 = document.querySelector('.popup-2');
var close2 = document.querySelector('.popup--clouse-2');
var closeFon2 = document.querySelector('.black-fon-2');

closeFon2.addEventListener("click", function(evt){
  evt.preventDefault();
  popup2.classList.remove("popup--active");
});

close2.addEventListener("click", function(evt){
  evt.preventDefault();
  popup2.classList.remove("popup--active");
});

link2.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup2.classList.add("popup--active")
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup2.classList.contains("popup--active")) {
      popup2.classList.remove("popup--active");
    }
  }
}); 

/* Modal-3 */
var link3 = document.querySelector('.popup-services-3');
var popup3 = document.querySelector('.popup-3');
var close3 = document.querySelector('.popup--clouse-3');
var closeFon3 = document.querySelector('.black-fon-3');

closeFon3.addEventListener("click", function(evt){
  evt.preventDefault();
  popup3.classList.remove("popup--active");
});

close3.addEventListener("click", function(evt){
  evt.preventDefault();
  popup3.classList.remove("popup--active");
});

link3.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup3.classList.add("popup--active")
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup3.classList.contains("popup--active")) {
      popup3.classList.remove("popup--active");
    }
  }
}); 

/* Modal-4 */
var link4 = document.querySelector('.popup-services-4');
var popup4 = document.querySelector('.popup-4');
var close4 = document.querySelector('.popup--clouse-4');
var closeFon4 = document.querySelector('.black-fon-4');

closeFon4.addEventListener("click", function(evt){
  evt.preventDefault();
  popup4.classList.remove("popup--active");
});

close4.addEventListener("click", function(evt){
  evt.preventDefault();
  popup4.classList.remove("popup--active");
});

link4.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup4.classList.add("popup--active")
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup4.classList.contains("popup--active")) {
      popup4.classList.remove("popup--active");
    }
  }
});
// Link in article of service
var servicelink1 = document.querySelector('.link-1');
var servicelink2 = document.querySelector('.link-3-1');
var servicelink3 = document.querySelector('.link-3-2');

servicelink1.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup1.classList.remove("popup--active")
  popup3.classList.add("popup--active")
});

servicelink3.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup3.classList.remove("popup--active")
  popup4.classList.add("popup--active")
});

