$('.teamBox li').click(function () {
    $(this).children('a').children('i').addClass('on');
    $(this).siblings('li').children('a').children('i').removeClass('on');

});