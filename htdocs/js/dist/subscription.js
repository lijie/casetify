/*! casetagram 2014-11-05 */
!function() {
    "use strict";
    if ("querySelector" in document && "addEventListener" in window && Array.prototype.forEach) {
        var a = function(a, b) {
            var c, d = window.pageYOffset,
            e = a.offsetTop,
            f = e - d,
            g = f / (b / 16),
            h = function() {
                window.scrollBy(0, g),
                c()
            };
            c = g >= 0 ?
            function() {
                var a = window.pageYOffset; (a >= e - g || window.innerHeight + a >= document.body.offsetHeight) && clearInterval(i)
            }: function() {
                var a = window.pageYOffset; (e || 0) >= a && clearInterval(i)
            };
            var i = setInterval(h, 16)
        },
        b = document.querySelectorAll(".s-scroll"); [].forEach.call(b,
        function(b) {
            b.addEventListener("click",
            function(c) {
                c.preventDefault();
                var d = b.getAttribute("href"),
                e = document.querySelector(d),
                f = b.getAttribute("data-speed");
                e && a(e, f || 500)
            },
            !1)
        })
    }
} (),
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
    function b() {
        var a = $(".subscription-slider"),
        b = $(".subscription-slider .subscription-slide"),
        c = parseFloat(b.length);
        a.css({
            width: 100 * c + "%"
        }),
        b.css({
            width: 100 / b.length + "%"
        });
        var d = $('.sub-pagination [data-direction="prev"]'),
        e = $('.sub-pagination [data-direction="next"]');
        i = 0,
        d.click(function() {
            return i > 0 ? (i -= 1, a.css({
                left: "-" + i + "00%"
            }), !1) : void 0
        }),
        e.click(function() {
            return c - 1 > i ? (i += 1, a.css({
                left: "-" + i + "00%"
            }), !1) : void 0
        })
    }
    function c() {
        var a = ($(".sub-pagination"), $(".sub-pagination a"));
        a.click(function() {
            a.removeClass("active"),
            $(this).addClass("active")
        })
    }
    $(".bg-land");
    if ($(".add-to-cart-btn").unbind("click").click(function(a) {
        var b = $(a.currentTarget),
        c = b.attr("data-tag");
        if (c) {
            if (b.hasClass("disabled")) return ! 1;
            cartModel.addSubscriptionToCart(c, "/builder/case/bezel/" + ("SUBSCR_BCASEPLATE_06" == c ? "6month": "12month"))
        } else window.location.href = "/builder/case/bezel/regular";
        return ! 1
    }), a(), HeaderTitlePosition(".sub-header-info", 4.6), b(), c(), $("#topShowVideoButton").click(function() {
        var a = new VideoModalView({
            el: $("#subscription-video-modal2")[0],
            url: "//www.youtube.com/embed/qCKgAFk5Si8?autoplay=1"
        });
        return a.render(),
        !1
    }), $("#showVideoButton").click(function() {
        var a = new VideoModalView({
            el: $("#subscription-video-modal")[0],
            url: "//www.youtube.com/embed/PkEtKD819no?autoplay=1"
        });
        return a.render(),
        !1
    }), Server.shouldAutoPlayVideo) {
        var d = new VideoModalView({
            el: $("#subscription-video-modal2")[0],
            url: "//www.youtube.com/embed/qCKgAFk5Si8?autoplay=1"
        });
        d.render()
    }
    $(".subscription-checkout-btn").click(function() {
        return $(this).hasClass("disabled") || (Server.canSubscribe ? cartModel.addSubscriptionToCart("SUBSCR_BCASEPLATE_A2", "/checkout/subscription", !0) : showErrorMessage(__("Sorry, Casetify monthly hasn't come to this part of the world yet."))),
        !1
    })
});