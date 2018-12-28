$('.logo-list .menu').click(function () {
    $('.menuclick').slideDown();
    return false;
});
$('.menuclick').click(function () {
   return false;
});
$(document).click(function () {
    $('.menuclick').hide();
});
$(window).resize(function () {
   if ($(window).width()>767)$('.menuclick').hide();
});
slide_list($('.selectteam'),$('.select-team-out'));
slide_list($('.brand-li'),$('.brand-out'));
slide_list($('.ball-shirt-li'),$('.all-commodity-out'));
slide_list($('.upperwear-li'),$('.upper-wear-out'));
slide_list($('.lower-wear-li'),$('.lower-wear-out'));
slide_list($('.girl-li'),$('.girl-out'));
slide_list($('.shoes-li'),$('.shoes-out'));
slide_list($('.basketball-li'),$('.basketball-out'));
slide_list($('.equipment-li'),$('.equipment-out'));
slide_list($('.kids-and-young-li'),$('.kids-and-young-out'));


//封装悬停下拉
 function slide_list(a,b) {
     a.hover(function () {
         b.stop().slideDown();
     },function () {
         b.stop().slideUp();
     });
 }
//brank-list滚动后固定
$(window).scroll(function () {
        if ($(window).scrollTop()>$('.brand-list-out').offset().top){

            $('.brand-list').addClass('brand-list-fixed');
            $('.been-fixed-before').addClass('been-fixed');
            $('.been-fixed-before1').css({'right':'25%','borderRight':'1px solid #515152'});
            $('.been-fixed-before2').css({'right':'22%','top':'11px'});
            $('.been-fixed-before3').css({'right':'110px'});
            $('.logo-list .search-out').addClass('scroll-style');
            $('.header-list ul li:nth-child(3) a').append("<style>#change-before1::before{background-position:0px 0px;}</style>");
            $('.header-list ul li:nth-child(4) a').append("<style>#change-before2::before{background-position:-110px -7px;}</style>");
            $('.header-list ul li:nth-child(4) a span').html('');
        } else {
        $('.brand-list').removeClass('brand-list-fixed');
            $('.been-fixed-before').removeClass('been-fixed');
            $('.been-fixed-before1').css({'borderRight':'2px solid #fff'});
            $('.logo-list .search-out').removeClass('scroll-style');
            $('.header-list ul li:nth-child(3) a').append("<style>#change-before1::before{background-position:-150px 0px;}</style>");
            $('.header-list ul li:nth-child(4) a').append("<style>#change-before2::before{background-position:-35px -7px;}</style>");
            $('.header-list ul li:nth-child(4) a span').html('在线客服');
        }

});