$(window).resize(function () {
    banner_show();
});
banner_show();
//封装banner
 function banner_show() {
     if ($(window).width()<785){
         $('#banner1').attr('src','img/banner1s.jpg');
         $('#banner2').attr('src','img/banner2s.jpg');
         $('#banner3').attr('src','img/banner3s.jpg');
         $('#banner4').attr('src','img/banner4s.jpg');
     }else {
         $('#banner1').attr('src','img/banner1.jpg');
         $('#banner2').attr('src','img/banner2.jpg');
         $('#banner3').attr('src','img/banner3.jpg');
         $('#banner4').attr('src','img/banner4.jpg');
     }
 }
 //你可能会喜欢
var num=0;
$('.scroll-btn-next').click(function () {
    num++;
    if (num ==9){
        return false;
    }else {
        $('.scroll-inner ul').animate({'left':-20.4*num +'%'});
    }
    console.log(num);
});
$('.scroll-btn-prev').click(function () {
    if (num ==0){
        return false;
    }else {
    num--;
    $('.scroll-inner ul').animate({'left':-20.4*num +'%'});
    }
    console.log(num);

});
