/**
 * Created by LONG on 2016/8/4.
 */

$(document).ready(function () {
    var eToast = EToast(".toast-container", {
        successImg: "statics/images/success-tip.png", /*三种状态下的对应图片，必须设置*/
        errorImg: "statics/images/error-tip.png",
        loadingImg: "statics/images/loading-tip.gif",
        successTip: "成功", /*三种状态下的默认提示，可缺省*/
        expireTime: 3000, /*成功失败弹出层的显示时间，默认2000毫秒，可缺省*/
    });
    $(".main .title").html(common.textTitle);
    $(".main .typeIn-area textarea").attr("placeholder", common.textTip);
    $('.typeIn-area textarea').on("keyup change", function () {
        var currentLenght = $(this).val().length;
        $(".current-count").html(currentLenght);
        if (currentLenght >= common.textLimit) {
            $(".current-count").addClass("reach-limit");
            $(".publish").addClass("reach-limit");
        } else {
            $(".current-count").removeClass("reach-limit");
            $(".publish").removeClass("reach-limit");
        }
    });

    $(".publish").on("touchend click", function () {
        if ($(this).attr("class").indexOf("reach-limit") == -1) {
            eToast.error("字数不得少于" + common.textLimit + "字");
            return;
        }
        publish();
    });

    function publish() {
        eToast.loading("读取中");
        $.ajax({
            type: "POST",
            url: common.publishUrl,
            //可选参数data由于测试用，所以未填写
            //data:{"content":$(".typeIn-area textarea").val()},
            dataType: "json",
            success: function (data) {
                eToast.loaded();
                if (data && data.rescode == 1) {
                    eToast.success(data.resmsg);
                    // eToast.success();
                } else if (data) {
                    eToast.error(data.resmsg);
                } else {
                    eToast.error("操作失败");
                }
            },
            error: function (data) {
                eToast.loaded();
                if (data) {
                    eToast.error(data.resmsg);
                }
            }
        });
    }

});