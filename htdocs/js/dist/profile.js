/*! casetagram 2014-11-05 */
MyApp = "undefined" != typeof MyApp ? MyApp: {},
MyApp.vent = "undefined" != typeof MyApp.vent ? MyApp.vent: _.extend({},
Backbone.Events),
$(function() {
    var a = new FollowButtonModel({
        followed: Server.isFollowing,
        targetUserId: Server.targetUserId
    });
    $(".filter").each(function(a, b) {
        new CustomDropDown({
            el: b
        })
    }),
    new StickBar({
        el: $(".filters")[0]
    }),
    new FollowButton({
        el: $("#follow-btn")[0],
        model: a
    }),
    new FollowerCount({
        el: $("#follower-count")[0],
        model: a
    }),
    $(".artwork").each(function(a, b) {
        new ArtworkView({
            el: b,
            model: new ArtworkModel(Server.artworks[a])
        })
    }),
    $(".followers-link").click(function() {
        return $.ajax({
            url: "/controllers/UserFollow.php",
            data: {
                fn: "getFollowerList",
                user_id: Server.targetUserId
            },
            success: function(a) {
                var b = JSON.parse(a);
                if (b.success) {
                    var c = b.list,
                    d = new UserListModal({
                        el: $("#userListModal")[0],
                        userList: c,
                        header: __("Followers")
                    });
                    d.render()
                }
            }
        }),
        !1
    }),
    $(".following-link").click(function() {
        return $.ajax({
            url: "/controllers/UserFollow.php",
            data: {
                fn: "getFollowingList",
                user_id: Server.targetUserId
            },
            success: function(a) {
                var b = JSON.parse(a);
                if (b.success) {
                    var c = b.list,
                    d = new UserListModal({
                        el: $("#userListModal")[0],
                        header: __("Followings"),
                        userList: c
                    });
                    d.render()
                }
            }
        }),
        !1
    })
});