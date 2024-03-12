$(document).ready(function(){
//햄버거메뉴 클릭 버튼
    $('.burger').on('click',function(){
        $(this).toggleClass('active');
        $('nav').toggle();
    })
    
    var height = $(window).scrollTop();
    console.log(height);


/*======애니메이션 스크롤 구간 설정======*/
    var window_W = $(window).outerWidth();

    if(window_W > 950){//pc, 노트북
        $(document).on("scroll",function(){
            if($(document).scrollTop() > 1409){ 
                $('.service_wrap').addClass("animate__fadeIn");
                $('.service_wrap').css({"visibility":"visible"});
            }
    
        });
    }
    
    if(window_W <= 950 && window_W > 700){ //태블릿
        $(document).on("scroll",function(){
            if($(document).scrollTop() > 814){ 
                $('.service_wrap').addClass("animate__fadeIn");
                $('.service_wrap').css({"visibility":"visible"});
            }
        })
    }

    if(window_W <= 700){ //모바일
        $(document).on("scroll",function(){
            if($(document).scrollTop() > 570){ 
                $('.service_wrap').addClass("animate__fadeIn");
                $('.service_wrap').css({"visibility":"visible"});
            }
        })
    }






/*======슬라이드 구간 설정======*/

    var window_W = $(window).width()+17;


    $(window).resize(function(){
        window_W = $(window).width()+17;
        
        if(window_W > 699){//모바일 이상일 때 슬라이드

            //이전버튼
            $('.slide_btn img:nth-child(1)').click(function(){
                $('.vh_slide ul').css({"margin-left":"-33%"});
                $('.vh_slide ul li').last().prependTo('.vh_slide ul');
                $('.vh_slide ul').stop().animate({"margin-left":"0"});
            })
    
            //다음버튼    
            $('.slide_btn img:last-child').click(function(){
                $('.vh_slide ul').stop().animate({"margin-left":"-33%"},function(){
                    $('.vh_slide ul li').first().appendTo('.vh_slide ul');
                    $('.vh_slide ul').css({"margin-left":"0"});
                })
            })

        }


        if(window_W <= 699){//모바일일 때 슬라이드

            //이전버튼
            $('.slide_btn img:nth-child(1)').click(function(){
                $('.vh_slide ul').css({"margin-left":"-100%"});
                $('.vh_slide ul li').last().prependTo('.vh_slide ul');
                $('.vh_slide ul').stop().animate({"margin-left":"0"});
        
            })
        
            //다음버튼    
            $('.slide_btn img:last-child').click(function(){
                $('.vh_slide ul').stop().animate({"margin-left":"-100%"},function(){
                    $('.vh_slide ul li').first().appendTo('.vh_slide ul');
                    $('.vh_slide ul').css({"margin-left":"0"});
                })
            })
        }
    });//resize

    

    if(window_W > 699){//모바일 이상일 때 슬라이드

        //이전버튼
        $('.slide_btn img:nth-child(1)').click(function(){
            $('.vh_slide ul').css({"margin-left":"-33%"});
            $('.vh_slide ul li').last().prependTo('.vh_slide ul');
            $('.vh_slide ul').stop().animate({"margin-left":"0"});
        })

        //다음버튼    
        $('.slide_btn img:last-child').click(function(){
            $('.vh_slide ul').stop().animate({"margin-left":"-33%"},function(){
                $('.vh_slide ul li').first().appendTo('.vh_slide ul');
                $('.vh_slide ul').css({"margin-left":"0"});
            })
        })
    
    }



    if(window_W <= 699){//모바일일 때 슬라이드

    //이전버튼
    $('.slide_btn img:nth-child(1)').click(function(){
        $('.vh_slide ul').css({"margin-left":"-100%"});
        $('.vh_slide ul li').last().prependTo('.vh_slide ul');
        $('.vh_slide ul').stop().animate({"margin-left":"0"});

    })

    //다음버튼    
    $('.slide_btn img:last-child').click(function(){
        $('.vh_slide ul').stop().animate({"margin-left":"-100%"},function(){
            $('.vh_slide ul li').first().appendTo('.vh_slide ul');
            $('.vh_slide ul').css({"margin-left":"0"});
        })
    })

    
    }
    
});