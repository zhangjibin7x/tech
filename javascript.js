/**
 * Created by Administrator on 2016/7/11.
 */
$(function () {
    jQuery(document).ready(function () {
        $('.s1').backstretch([
            "images/slide-1.jpg",
            "images/slide-2.jpg",
            "images/slide-3.jpg",
            "images/slide-4.jpg"
        ], {duration: 1000, fade: 750});
    });
});
$(function () {


    $(window).scroll(function () {
        var t = $(this).scrollTop()
        if (t > 200) {
            $(".top").stop().fadeIn();
        } else {
            $(".top").stop().fadeOut();
        }

    })


    $(".top").click(function () {

        $("body,html").stop().animate({scrollTop: 0}, 300)
    })

})
