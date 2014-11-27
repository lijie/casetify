/*! casetagram 2014-11-05 */
$(function() {
    function a() {
        function a(a) {
            if (a.matches) {
                var d = parseFloat(b - 66);
                c.css({
                    height: d + "px"
                })
            } else {
                var d = parseFloat(b - 44);
                c.css({
                    height: d + "px"
                })
            }
        }
        var b = $(window).height(),
        c = $(".subscription-slide .bg-land");
        if (matchMedia) {
            var d = window.matchMedia("(min-width: 767px)");
            d.addListener(a),
            a(d)
        }
    }
    $(".bg-land");
    if (a(), HeaderTitlePosition(".sub-header-info", 4.6), $("#topShowVideoButton").click(function() {
        var a = new VideoModalView({
            el: $("#subscription-video-modal2")[0],
            url: "//www.youtube.com/embed/gFRrEk91vgk?autoplay=1"
        });
        return a.render(),
        !1
    }), $("#showVideoButton").click(function() {
        var a = new VideoModalView({
            el: $("#subscription-video-modal")[0],
            url: "//www.youtube.com/embed/gFRrEk91vgk?autoplay=1"
        });
        return a.render(),
        !1
    }), Server.shouldAutoPlayVideo) {
        var b = new VideoModalView({
            el: $("#subscription-video-modal2")[0],
            url: "//www.youtube.com/embed/gFRrEk91vgk?autoplay=1"
        });
        b.render()
    }
});