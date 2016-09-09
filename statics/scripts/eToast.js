/**
 * Created by LONG on 2016/9/9.
 */

var EToast = function(containerClass,settings){

    var settings = settings;
    var containerClass = containerClass;

    $(containerClass).append($("<div class=\"etoast-full-screen-mask\"></div>"));
    //create dialog box
    $(containerClass).append($("<div class='etoast-success-toast'><img class='etoast-success-toast-img' src='"+settings.successImg+
        "'><div class='etoast-success-toast-tip'>"+((settings.successTip)?settings.successTip:'操作成功')+"</div></div>"));
    $(containerClass).append($("<div class='etoast-error-toast'><img class='etoast-error-toast-img' src='"+settings.errorImg+
        "'><div class='etoast-error-toast-tip'>"+((settings.errorTip)?settings.errorTip:'操作失败')+"</div></div>"));
    $(containerClass).append($("<div class='etoast-loading-toast'><img class='etoast-loading-toast-img' src='"+settings.loadingImg+
        "'><div class='etoast-loading-toast-tip'>"+((settings.loadingTip)?settings.loadingTip:'加载中')+"</div></div>"));


    var commonFunc = {
        "success":function(msg){
            $(".etoast-success-toast-tip").html(msg);
            $(".etoast-success-toast").fadeIn(200);
            $(".etoast-full-screen-mask").fadeIn(0);
            setTimeout(function(){$(".etoast-success-toast").fadeOut(1000);$(".etoast-full-screen-mask").fadeOut(1000);},((settings.expireTime)?settings.expireTime:2000));
        }
        ,
        "error":function(msg){
            $(".etoast-error-toast-tip").html(msg);
            $(".etoast-error-toast").fadeIn(200);
            $(".etoast-full-screen-mask").fadeIn(0);
            setTimeout(function(){$(".etoast-error-toast").fadeOut(1000);$(".etoast-full-screen-mask").fadeOut(1000);},((settings.expireTime)?settings.expireTime:2000));
        }
        ,
        "loading":function(msg){
            $(".etoast-loading-toast-tip").html(msg);
            $(".etoast-loading-toast").fadeIn(0);
            $(".etoast-full-screen-mask").fadeIn(0);

        },
        "loaded":function(){
            $(".etoast-loading-toast").fadeOut(0);
            $(".etoast-full-screen-mask").fadeOut(0);
        }
    }
    return commonFunc;
}

