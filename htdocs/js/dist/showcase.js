/*! casetagram 2014-11-05 */
var ShowcaseView = Backbone.Marionette.ItemView.extend({
    template: "#template-showcase-slideshow-showcase",
    render: function() {
        this.$el.append(this.element)
    },
    initialize: function(a) {
        this.data = a.data,
        this.element = document.createElement("li"),
        this.element.className = "f-left xs-column12 s-column4 column3 l-column2 reset-list close-pack showcase relative";
        var b = document.createElement("a");
        b.target = "_blank",
        b.href = a.data.link,
        this.img = document.createElement("img"),
        this.img.src = "/img/placeholder-223.jpg",
        this.img.className = (ClientDeviceManager.isMobileAgent() ? " mobile ": "") + "flex-img f-width image",
        this.img.style.opacity = 0,
        this.preload = new Image,
        this.preload.onload = $.proxy(function() {
            this.img.src = a.data.standard_src,
            this.img.removeAttribute("style")
        },
        this),
        this.preload.src = a.data.standard_src,
        b.appendChild(this.img),
        b.appendChild($('<div class="showcase-description landing__author--testi f-width absolute"><div class="table f-height"><div class="t-cell f-height vertical-middle"><a href="' + a.data.profile_link + '" target="_blank"><img class="avatar ml2 vertical-middle" src="' + getThumbnailUrl(a.data.profile_pic) + '" alt="profile"><span class="h4-like inline vertical-middle text-white pl1 mt0 mb0">' + a.data.display_name + "</span></a></div></div></div>")[0]),
        this.element.appendChild(b)
    }
}),
showcaseModel = new ShowcaseModel({
    showcases: Server.showcases
});
$().ready(function() {
    var a = function(a) {
        for (index in a) new ShowcaseView({
            data: a[index],
            el: $(".showcase-container")[0]
        }).render()
    };
    a(showcaseModel.getInfiniteFeed(20)),
    $(window).scroll(function() {
        $(".showcase-container li").last().offset().top - 2 * $(".showcase-container li").last().height() < $(window).scrollTop() && a(showcaseModel.getInfiniteFeed(10))
    }),
    ClientDeviceManager.isMobileAgent() || setInterval(function() {
        var b = $(".showcase-container").offset();
        b.top--,
        $(".showcase-container").offset(b),
        $(".showcase-container li").last().offset().top - 2 * $(".showcase-container li").last().height() < $(window).scrollTop() && a(showcaseModel.getInfiniteFeed(10))
    },
    100)
});