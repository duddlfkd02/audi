$(document).ready(function(){
    $('.burger').on('click',function(){
        $(this).toggleClass('active');
        $('nav').toggle();
    })

    // var height = $(window).scrollTop();
    // console.log(height);

//애니메이션 부여
    $(document).on("scroll",function(){
        if($(document).scrollTop() > 220){ 
            $('.content1').addClass("animate__fadeInUp");
            $('.content1').css({"visibility":"visible"});
        }

        if($(document).scrollTop() > 1180){ 
            $('.content2').addClass("animate__fadeInUp");
            $('.content2').css({"visibility":"visible"});
        }

        if($(document).scrollTop() > 530){ 
            $('.content3').addClass("animate__fadeInUp");
            $('.content3').css({"visibility":"visible"});
        }

        if($(document).scrollTop() > 1550){ 
            $('.content4').addClass("animate__fadeInUp");
            $('.content4').css({"visibility":"visible"});
        }

        if($(document).scrollTop() > 2260){ 
            $('article:nth-child(2)').addClass("animate__fadeInUp");
            $('article:nth-child(2)').css({"visibility":"visible"});
        }
    })

});


