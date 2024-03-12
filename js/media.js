$(document).ready(function(){
  $('.burger').on('click',function(){
    $(this).toggleClass('active');
    $('nav').toggle();
})

//slick slide 속성
    $('.news').slick({
        infinite: true,
        pauseOnHover:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive:[ // 반응형 웹 구현 옵션
                      {breakpoint: 950, //화면 사이즈 1500px 보다 작을 시
                        settings:{slidesToShow: 2}},

                        {breakpoint: 700, //화면 사이즈 800px 보다 작을 시
                        settings: {slidesToShow: 1}}
                    ]
      });



})