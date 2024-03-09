$(document).ready(function(){
//햄버거메뉴 클릭 버튼
    $('.burger').on('click',function(){
        $(this).toggleClass('active');
        $('nav').toggle();
    })
    
    var height = $(window).scrollTop();
    console.log(height);

    $(document).on("scroll",function(){
        if($(document).scrollTop() > 350){ 
            $('.vh_slide').addClass("animate__fadeInUp");
            $('.vh_slide').css({"visibility":"visible"});
        }

        if($(document).scrollTop() > 1409){ 
            $('.service_wrap').addClass("animate__fadeIn");
            $('.service_wrap').css({"visibility":"visible"});
        }

    });






//이전버튼
    $('.slide_btn img:nth-child(1)').click(function(){
        $('.vh_slide ul').css({"margin-left":"-33%"});
        $('.vh_slide ul li').last().prependTo('.vh_slide ul');
        $('.vh_slide ul').animate({"margin-left":"0"});

    })

//다음버튼
    $('.slide_btn img:last-child').click(function(){
        $('.vh_slide ul').animate({"margin-left":"-33%"},function(){
            $('.vh_slide ul li').first().appendTo('.vh_slide ul');
            $('.vh_slide ul').css({"margin-left":"0"});
        })
    })

    
});