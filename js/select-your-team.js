$('.western .area-title').click(function () {
    $(this).toggleClass('bgceff');
    $('.eastern .area-title').removeClass('bgceff');
    $('.western .area-team').toggle();
    $('.eastern .area-team').hide();

    $('.western .area-team').css('width','20%');
    $('.western').css('width','200%');
    $('.western .area-title').css({'width':'50%','float':'right','marginLeft':'50%'});
    $('.eastern .area-title').css({'position':'relative','z-index':'11'});
    console.log('west');
});
$('.eastern .area-title').click(function () {
    $('.eastern .area-team').toggle();
    $(this).toggleClass('bgceff');
    $('.western .area-title').removeClass('bgceff');
    $('.western .area-team').hide();
    $('.eastern .area-team').css('width','20%');
    $('.eastern').css('width','200%');
    $('.eastern .area-title').css({'width':'50%','marginRight':'50%'});
    console.log('east');
});