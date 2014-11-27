/*! casetagram 2014-11-11 */
MyApp = "undefined" != typeof MyApp ? MyApp: {},
MyApp.vent = "undefined" != typeof MyApp.vent ? MyApp.vent: _.extend({},
Backbone.Events),
$(function() {
    $(".filter").each(function(a, b) {
        new CustomDropDown({
            el: b
        })
    }),
    new StickBar({
        el: $(".filters")[0]
    }),
    $(".artwork").each(function(a, b) {
        new ArtworkView({
            el: b,
            model: new ArtworkModel(Server.artworkList[a])
        })
    })
});