$(document).ready(function(){
    $('.burger').on('click',function(){
        $(this).toggleClass('active');
        $('nav').toggle();
    })

    var height = $(window).scrollTop();
    console.log(height);

//애니메이션 부여
    var window_W = $(window).outerWidth();

    if(window_W > 950){ //pc, 노트북
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
    }


    if(window_W <= 950 && window_W > 700){ //태블릿
        $(document).on("scroll",function(){
            if($(document).scrollTop() > 220){ 
                $('.content1').addClass("animate__fadeInUp");
                $('.content1').css({"visibility":"visible"});
            }
    
            if($(document).scrollTop() > 1180){ 
                $('.content2').addClass("animate__fadeInUp");
                $('.content2').css({"visibility":"visible"});
            }
    
            if($(document).scrollTop() > 1909){ 
                $('.content3').addClass("animate__fadeInUp");
                $('.content3').css({"visibility":"visible"});
            }
    
            if($(document).scrollTop() > 2873){ 
                $('.content4').addClass("animate__fadeInUp");
                $('.content4').css({"visibility":"visible"});
            }
    
            if($(document).scrollTop() > 3327){ 
                $('article:nth-child(2)').addClass("animate__fadeInUp");
                $('article:nth-child(2)').css({"visibility":"visible"});
            }
        })
    }


    if(window_W <= 700){ //모바일
        $(document).on("scroll",function(){
            if($(document).scrollTop() > 50){ 
                $('.content1').addClass("animate__fadeInUp");
                $('.content1').css({"visibility":"visible"});
            }
    
            if($(document).scrollTop() > 406){ 
                $('.content2').addClass("animate__fadeInUp");
                $('.content2').css({"visibility":"visible"});
            }
    
            if($(document).scrollTop() > 706){ 
                $('.content3').addClass("animate__fadeInUp");
                $('.content3').css({"visibility":"visible"});
            }
    
            if($(document).scrollTop() > 1072){ 
                $('.content4').addClass("animate__fadeInUp");
                $('.content4').css({"visibility":"visible"});
            }
    
            if($(document).scrollTop() > 1072){ 
                $('article:nth-child(2)').addClass("animate__fadeInUp");
                $('article:nth-child(2)').css({"visibility":"visible"});
            }
        })
    }
});


