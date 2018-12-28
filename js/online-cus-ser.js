
//表情
$('.emotion').click(function () {
   $('.emotion-box').toggle();
    $('.emotion-box').click(function () {
       return false;
    });
   $(document).click(function () {
       $('.emotion-box').hide();
   });
    return false;
});
//音量
$('.volume').click(function () {
   $(this).toggleClass('volume1');
   if ($('.volume').parent().attr('title').trim() =='关闭提示音'){
       $(this).parent().attr('title','打开提示音');
   }
   else if ($('.volume').parent().attr('title').trim() =='打开提示音'){
        $(this).parent().attr('title','关闭提示音');
    }
});
//剪刀
$('.screenshot').click(function () {
    var new_obj = $("<p class='info'>未下载截图工具</p>");
    $('.chat .chat-inner').append(new_obj);

});
//电话
$('.phone').click(function () {
    var maskH=$(document).height();
    $('.mask').css('height',maskH);
    $('.mask').show();
    $('.phone-click').show();
});
$('.phone-click .header-close .icon-close').click(function () {
    $('.mask').hide();
    $('.phone-click').hide();
});
//语言
$('.internet').click(function () {
    $('.input-nav .language-list').toggle();
    $('.input-nav .language-list').hover(function () {
        return false;
    },function () {
        $(this).hide();
    })
});
$(' .language-list ul li').click(function () {
    $(this).children('em').show();
    $(this).siblings('li').children('em').hide();
});
function ChgLan(a,b,c,d,e){
    $(a).click(function () {
        $('.chat-title').html(b);
        $('#txtarea').attr('placeholder',c);
        $('.endDialog').html(d);
        $('.sendMsg a').html(e);
    });
}
ChgLan('.jianti','您正在和NBA_Bryant对话','请输入','结束对话','发送');
ChgLan('.fanti','您正在和NBA_Bryant對話','請輸入','結束對話','發送');
ChgLan('.english','You are talking to NBA_Bryant.','Please enter','End the Dialog','Send');
ChgLan('.japanese','NBA_Bryantとチャット中','入力してください','終了','送信');
ChgLan('.korean','NBA_Bryant님과 채팅진행중입니다.','내용을 입력해 주세요','대화종료','보내기');
ChgLan('.korean','NBA_Bryant님과 채팅진행중입니다.','내용을 입력해 주세요','대화종료','보내기');
ChgLan('.yuenan','Bạn đang nói chuyện với NBA_Bryan','xin vui lòng nhập','Kết thúc cuộc đối thoại',' Gửi đi ');
ChgLan('.Thai','คุณกำลังสนทนากับ NBA_Bryant','กรุณากรอก','ออกจากการสนทนา',' ่ง');
ChgLan('.Bahasa','Anda sedang chat dengan 客服代表','Harap masukkan','Tinggalkan obrolan','Kirim');

// //评价
$('.estimate').click(function () {
   $('.estimate-box').fadeToggle();
   $('.estimate-box ul li img').hover(function () {
       $(this).parent().children('span').show();
       $(this).parent().siblings('li').children('span').hide();
   },function () {
       $(this).parent().children('span').hide();
   })
});
$('.please-estimate .close-icon').click(function () {
    $('.estimate-box').hide();
});
$('.estimate-box ul li img').click(function () {
   var new_info=$('<p class="info"></p>');
   new_info.html('您对本次的服务态度评价为：'+$(this).siblings('span').html());
   $('.chat .chat-inner').append(new_info);
});
//发送
$('.two-button .sendMsg span').click(function () {
   $('.send').toggle();
    $('.send').click(function () {
       return false;
    });
    $(document).click(function () {
        $('.send').hide();
   });
    return false;
});
 //右上角缩放
RightShow();
$(window).resize(function () {
    RightShow();
});

 //封装右上角缩放函数
function RightShow() {
    if($(window).width()<700){
        $('.content-right').css({'transform':'scale(0)','transform-origin':'top right'});
        $('.content-left').css({'padding':0});
        $('.input-box').css({'padding':0});
    }else {
        $('.content-right').css({'transform':'scale(1)','transform-origin':'top right'});
        $('.content-left').css({'paddingRight':'270px'});
        $('.input-box').css({'paddingRight':'270px'});
    }
    $('.content-left').css('height',$(window).height()-$('header').height());
    $('.content').css('height',$('.content-left').height());
    $('.content-left .chat').css('height',$(window).height()-$('header').height()-$('.input-box').height());
}

 