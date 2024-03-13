$(document).ready(function(){
    $('.burger').on('click',function(){
        $(this).toggleClass('active');
        $('nav').toggle();
    })

    // var height = $(window).scrollTop();
    // console.log(height);


/*======애니메이션 스크롤 구간 설정======*/
    var window_W = $(window).outerWidth();

    if(window_W > 950){//pc, 노트북
        $(document).on("scroll",function(){
            if($(document).scrollTop() > 222){
                $('.ov_img1').addClass("animate__fadeInUp");
                $('.ov_img1').css({"visibility":"visible"});
            }
    
            if($(document).scrollTop() > 846){
                $('.ov_img2').addClass("animate__fadeInUp");
                $('.ov_img2').css({"visibility":"visible"});
            }
            if($(document).scrollTop() > 1738){
                $('.ov_img3').addClass("animate__fadeInUp");
                $('.ov_img3').css({"visibility":"visible"});
            }
            if($(document).scrollTop() > 2250){
                $('.ov_img4').addClass("animate__fadeInUp");
                $('.ov_img4').css({"visibility":"visible"});
            }
            if($(document).scrollTop() > 3170){
                $('.form_image').addClass("animate__slideInLeft");
                $('.form_image').css({"visibility":"visible"});
            }
            if($(document).scrollTop() > 994){
                $('.middle_txt').addClass("animate__fadeIn");
                $('.middle_txt').css({"visibility":"visible"});
            }
    
            if($(document).scrollTop() > 1665){
                $('.etron_fp').addClass("animate__fadeIn");
                $('.etron_fp').css({"visibility":"visible"});
            }
    
            if($(document).scrollTop() > 2319){
                $('.middle_img').addClass("animate__fadeIn");
                $('.middle_img').css({"visibility":"visible"});
            }
        })
    }

    if(window_W <= 950 && window_W > 700){//태블릿
        $(document).on("scroll",function(){
            if($(document).scrollTop() > 2060){
                $('.form_image').addClass("animate__slideInLeft");
                $('.form_image').css({"visibility":"visible"});
            }
            if($(document).scrollTop() > 458){
                $('.middle_txt').addClass("animate__fadeIn");
                $('.middle_txt').css({"visibility":"visible"});
            }
    
            if($(document).scrollTop() >  1044){
                $('.etron_fp').addClass("animate__fadeIn");
                $('.etron_fp').css({"visibility":"visible"});
            }
    
            if($(document).scrollTop() > 1690){
                $('.middle_img').addClass("animate__fadeIn");
                $('.middle_img').css({"visibility":"visible"});
            }
        })
    }

    if(window_W <= 700){//태블릿
        $(document).on("scroll",function(){
            if($(document).scrollTop() > 900){
                $('.middle_txt').addClass("animate__fadeIn");
                $('.middle_txt').css({"visibility":"visible"});
            }
    
            if($(document).scrollTop() >  1250){
                $('.etron_fp').addClass("animate__fadeIn");
                $('.etron_fp').css({"visibility":"visible"});
            }
    
            if($(document).scrollTop() > 1798){
                $('.middle_img').addClass("animate__fadeIn");
                $('.middle_img').css({"visibility":"visible"});
            }
        })
    }
    



    //차 이미지 변경
    $('.small_etron:nth-child(1)').click(function(){
        $('.main img').attr('src','images/image3/etron_front.jpeg')
    })
    $('.small_etron:nth-child(2)').click(function(){
        $('.main img').attr('src','images/image3/etron_back.jpeg')
    })
    $('.small_etron:nth-child(3)').click(function(){
        $('.main img').attr('src','images/image3/etron_side.jpeg')
    })
 

});





    //예약하기 유효성검사
    function check(){
        let uname = document.querySelector("#username");
        let phone = document.querySelector("#phonenumber");
        let region = document.querySelector('#region').value;

        let regName = /^[a-zA-Z]{2,15}$/;
        let regPhone = /^[0-9]{10,12}$/;

        //이름 확인 영어만 입력
        if(uname.value == ""){
            alert("Please write your name.");
            uname.focus();
            return false;
        }
        else if(!regName.test(uname.value)){
            alert("You can enter more than two characters in English.")
            uname.focus();
            return false;
        }


        /*전화번호 유효성 검사*/

        if(phone.value == "" ){ 
            alert("Please write your phone numeber.");
            phone.focus();
            return false;
        }else if(!regPhone.test(phone.value)){
            alert("Only 12 digits can be entered.");
            phone.focus();
            return false;
        }
        /*selectbox 검사*/
        if(region == "") {
            alert("Please select model");
            region.focus();
            return false;
        }


};//check