/*! casetagram 2014-11-05 */
$(function() {
    $("#add-to-cart-btn").click(function(a) {
        var b = $(a.currentTarget),
        c = b.attr("data-id");
        return cartModel.addSystemItem(c, !0),
        !1
    }),
    $(".video-btn").click(function(a) {
        var b = $(a.currentTarget),
        c = b.attr("data-link"),
        d = new VideoModalView({
            el: $("#subscription-video-modal")[0],
            url: "//www.youtube.com/embed/" + c + "?autoplay=1"
        });
        return d.render(),
        !1
    }),
    Server && Server.showVideo && $(".video-btn").click()
});
var slider = document.querySelector(".slider ul"),
sliderChildren = document.querySelectorAll(".slider ul li"),
pagination = document.querySelector(".pagination"),
currentSlide = 0;
sliderSet = function() {
    slider.style.width = 100 * sliderChildren.length + "%",
    sliderMove(currentSlide)
},
sliderMove = function(a) {
    var b = document.querySelectorAll(".pagination li");
    slider.style.marginLeft = -(100 * a) + "%",
    currentSlide = a;
    for (var c = 0; c < b.length; c++) b[c].className = c == currentSlide ? "active": ""
},
sliderSet();