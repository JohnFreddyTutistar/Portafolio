$(document).ready(function(){
    $(window).scroll(function(){
        if(this,scrollY > 20){
            $('.navcls_1').addClass("sticky");
        }else{
            $('.navcls_1').removeClass("sticky");
        }
    })

    // alterar el menu
    $('.menu-btn').click(function(){
        $('.navcls_1 .menu').toggleClass("active");
        $('.menu-btn i').toogleClass("active");
    })
})