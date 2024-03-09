$(document).ready(function(){
  $('.burger').on('click',function(){
    $(this).toggleClass('active');
    $('nav').toggle();
})

//slick slide 속성
    $('.news').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      });
})