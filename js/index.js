//百度分享
window._bd_share_config = {
    "common": {
        "bdSnsKey": {},
        "bdText": "",
        "bdMini": "2",
        "bdMiniList": false,
        "bdPic": "",
        "bdStyle": "1",
        "bdSize": "16"
    },
    "slide": {
        "type": "slide",
        "bdImg": "2",
        "bdPos": "left",
        "bdTop": "187.5"
    },
    "selectShare": {
        "bdContainerClass": null,
        "bdSelectMiniList": ["qzone", "tsina", "tqq", "renren", "weixin"]
    }
};
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];

//二维码
$(function(){
    $(".hea_con_3").mouseover(function(){
        $("#erweima").show();
    }).mouseout(function(){
        $("#erweima").hide();
    })
})

//选项卡
$(function() {
        <!--二级菜单-->
        $(".nav_left li").mouseover(function() {
            $(this).addClass('current').find(".erji").show();
            $(this).siblings().removeClass('current').find(".erji").hide();
        });

        $(".erji").mouseout(function() {
            $(".erji").hide();
        });

        <!--图片透明度-->
        $(".cen_pic img,#center_pic img").mouseover(function() {
            $(this).css("opacity", 0.6).css("cursor", "pointer");
        }).mouseout(function() {
            $(this).css("opacity", 1)
        });

    <!--选项卡-->
    $(".floor1_text ul li").mouseover(function() {
        var _index = $(this).index();
        $(".tv_right_top_son").eq(_index).show().siblings().hide();
    });
    $(".floor1_text ul li").mouseover(function() {
        var _index = $(this).index();
        $(".tv_right_bot_son").eq(_index).show().siblings().hide();
    });

    <!--返回顶部-->
    $("#dinwei1").click(function() { //点击事件
        $("html,body").stop().animate({
            "scrollTop": 0
        }, 500, function() {});
    });
});

//轮播
jQuery(function($) {
    $('#demo1').slideBox();
    $('#demo2').slideBox({
        direction: 'top', //left,top#方向
        duration: 0.3, //滚动持续时间，单位：秒
        easing: 'linear', //swing,linear//滚动特效
        delay: 5, //滚动延迟时间，单位：秒
        startIndex: 1 //初始焦点顺序
    });
    $('#demo3').slideBox({
        duration: 0.3, //滚动持续时间，单位：秒
        easing: 'linear', //swing,linear//滚动特效
        delay: 5, //滚动延迟时间，单位：秒
        hideClickBar: false, //不自动隐藏点选按键
        clickBarRadius: 10
    });
    $('#demo4').slideBox({
        hideBottomBar: true //隐藏底栏
    });
});

