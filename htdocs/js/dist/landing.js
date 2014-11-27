/*! casetagram 2014-11-05 */
$(function() {
    function a() {
        var a = $(window).height(),
        b = $("#design-yours .bg-land"),
        c = parseFloat(a - 126 - 155);
        b.css({
            height: c + "px"
        })
    }
    function b(b) {
        if (b.matches) {
            a(),
            HeaderTitlePosition("#design-yours", 16);
            var c;
            $(window).resize(function() {
                clearTimeout(c),
                c = setTimeout(function() {
                    a(),
                    HeaderTitlePosition("#design-yours", 16)
                },
                200)
            })
        } else {
            $(".header-info").removeAttr("style");
            var c;
            $(window).resize(function() {
                clearTimeout(c),
                c = setTimeout(function() {
                    $(".header-info").removeAttr("style")
                },
                200)
            })
        }
    }
    if (matchMedia) {
        var c = window.matchMedia("(min-width: 767px)");
        c.addListener(b),
        b(c)
    }
    if (matchMedia) {
        var d = window.matchMedia("(min-height: 901px)");
        d.addListener(b),
        b(d)
    }
    if ($("#go-to-download-app-btn").click(function() {
        return $("html,body").animate({
            scrollTop: $("#get-app-section").offset().top
        },
        "slow"),
        !1
    }), $(".go-to-store-btn").click(function() {
        _gaq && _gaq.push(["_trackPageview", "/ga_download_app"])
    }), $("#showVideoButton").click(function() {
        var a = new VideoModalView({
            el: $("#video-modal")[0],
            url: "//www.youtube.com/embed/qCKgAFk5Si8?autoplay=1"
        });
        return a.render(),
        !1
    }), $(".showcase-section").length) {
        $(".showcase-section").css("opacity", 0),
        $(".showcase-container").css("opacity", 0);
        var e = function() {
            if ("true" != $(".showcase-section").attr("data-is-shown")) {
                var a = $(window).scrollTop(),
                b = $(window).height(),
                c = $(".showcase-section").offset().top;
                if (a + b >= c + 100) {
                    $(".showcase-section").attr("data-is-shown", "true"),
                    $(".showcase-section").css("opacity", 1);
                    for (var d = {},
                    e = 0; e < $(".showcase-container").length; e++) {
                        for (var f = -1; 0 > f || d[f];) f = parseInt(Math.random() * $(".showcase-container").length);
                        d[f] = 200 * (e + 1),
                        setTimeout($.proxy(function(a) {
                            $($(".showcase-container")[a]).animate({
                                opacity: 1
                            },
                            200)
                        },
                        window, f), 200 * e)
                    }
                }
            }
        };
        e(),
        $(window).scroll(function() {
            e()
        })
    }
});