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
        $('.menu-btn i').toggleClass("active");
    })
})

function message(){
    document.getElementById("send_msg").onclick = function(){
        alert("Sending message");
    }
}
message();
