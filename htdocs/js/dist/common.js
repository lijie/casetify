/*! casetagram 2014-11-05 */
function validateField(a, b, c) {
    if (!b(document.getElementById(a).value)) {
        var d = $("#" + a).attr("class");
        return $("#" + a).attr("class", d + "-error"),
        $("#error_cell_" + a).show(),
        $("#error_row_" + c).slideDown("slow"),
        !1
    }
    return ! 0
}
function isValidName(a) {
    return ! isEmpty(a) && onlyAlphabet(a)
}
function isValidAddress(a) {
    return ! isEmpty(a)
}
function isValidZipCode(a) {
    return isNumeric(a)
}
function isEmpty(a) {
    var b = /^\s*$/;
    return b.test(a)
}
function onlyAlphabet(a) {
    var b = /^[A-Za-z-\s]+$/;
    return b.test(a)
}
function isNumeric(a) {
    var b = /^\d*$/;
    return b.test(a)
}
function isValidUsername(a) {
    return isEmpty(a) ? !1 : encodeURIComponent(a) != a ? !1 : !0
}
function HeaderTitlePosition(a, b) {
    var c = $(a + " .header-info"),
    d = $(window).height(),
    e = $(window).width(),
    f = parseFloat(d / b);
    c.css(799 > d ? e > 767 ? {
        "margin-top": f / 2 + "px"
    }: {
        "margin-top": f / 1.6 + "px"
    }: e > 1500 ? {
        "margin-top": f / 1.5 + "px"
    }: {
        "margin-top": f / 2 + "px"
    })
}
function URLResourceLocator() {
    this.PATH_TYPE_FULL = 1,
    this.PATH_TYPE_ABSOLUTE = 2,
    this.PATH_TYPE_RELATIVE = 3
}
var ArtworkModel = Backbone.Model.extend({
    isLiked: function() {
        return this.get("liked")
    },
    like: function() {
        var a = this;
        return Server.isLogin ? (this.set("liked", !0), $.ajax({
            url: "/controllers/LikeArtwork.php?fn=like&allowGuestUser=Y&subject_id=" + a.get("id"),
            success: function() {}
        }), !0) : (showErrorMessage("Please login"), window.location.href = "/login?fav_login=Y&redirect=" + encodeURIComponent(window.location.href), !1)
    },
    unlike: function() {
        var a = this;
        return Server.isLogin ? (this.set("liked", !1), $.ajax({
            url: "/controllers/LikeArtwork.php?fn=unlike&allowGuestUser=Y&subject_id=" + a.get("id"),
            success: function() {}
        }), !0) : (showErrorMessage("Please login"), window.location.href = "/login?fav_login=Y&redirect=" + encodeURIComponent(window.location.href), !1)
    },
    isVoted: function() {
        return this.get("voted")
    },
    vote: function(a) {
        var b = this;
        Server.isLogin || (showErrorMessage("Please login"), window.location.href = "/login?vote_login=Y&redirect=" + encodeURIComponent(window.location.href), a(!1)),
        $.ajax({
            url: "/controllers/Artwork.php",
            method: "POST",
            data: {
                fn: "voteArtwork",
                id: b.get("id"),
                type: "VOTE",
                score: 5
            },
            success: function(c) {
                console.log(c),
                c == ConstantsManager.CHALLENGE_NO_ACTIVE_CHALLENGE ? (showErrorMessage(__("No active challenge")), a(!1)) : c == ConstantsManager.CHALLENGE_VOTE_PERIOD_NOT_STARTED ? (showErrorMessage(__("Challenge not started")), a(!1)) : c == ConstantsManager.CHALLENGE_VOTE_PERIOD_ENDED ? (showErrorMessage(__("Challenge has finished")), a(!1)) : 0 == c ? (showErrorMessage(__("Vote failed")), a(!1)) : (b.set("voted", !0), a(!0))
            }
        })
    },
    unvote: function(a) {
        var b = this;
        Server.isLogin || (showErrorMessage("Please login"), window.location.href = "/login?vote_login=Y&redirect=" + encodeURIComponent(window.location.href), a(!1)),
        $.ajax({
            url: "/controllers/Artwork.php",
            method: "POST",
            data: {
                fn: "voteArtwork",
                id: b.get("id"),
                type: "NONE",
                score: 5
            },
            success: function(c) {
                c == ConstantsManager.CHALLENGE_NO_ACTIVE_CHALLENGE ? (showErrorMessage(__("No active challenge")), a(!1)) : c == ConstantsManager.CHALLENGE_VOTE_PERIOD_NOT_STARTED ? (showErrorMessage(__("Challenge not started")), a(!1)) : c == ConstantsManager.CHALLENGE_VOTE_PERIOD_ENDED ? (showErrorMessage(__("Challenge has finished")), a(!1)) : 0 == c ? (showErrorMessage(__("Unvote failed")), a(!1)) : (b.set("voted", !1), a(!0))
            }
        })
    }
}),
CartItem = Backbone.Model.extend({
    setQuantity: function(a) {
        var b = this,
        c = {
            ajaxCall: "1",
            action: "modify",
            id: b.get("id"),
            quantity: a
        };
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "my/cart",
            type: "post",
            data: c,
            success: function() {
                b.set("quantity", a)
            }
        })
    },
    remove: function() {
        var a = this,
        b = {
            ajaxCall: "1",
            action: "remove",
            id: a.get("id"),
            includeCartData: "Y"
        };
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "my/cart",
            type: "post",
            data: b,
            success: function(a) {
                var b = JSON.parse(a);
                b.success && cartModel.reset(b.cartItems)
            }
        })
    }
}),
CartModel = Backbone.Collection.extend({
    model: CartItem,
    initialize: function() {
        this.on("all", this.notifyRelatedModel, this)
    },
    getProductTotal: function() {
        var a = 0;
        return this.each(function(b) {
            a += b.get("quantity") * b.get("unit_price")
        }),
        parseFloat(a).toFixed(2)
    },
    addToCart: function(a, b, c, d, e, f, g) {
        if ("true" === ConstantsManager.CHECKOUT_DISABLE_WOOD_CODE) {
            var h = ConstantsManager.ITEM_OPTION_TYPE_WOOD.split(",");
            if ( - 1 != h.indexOf(c)) return showErrorMessage("Due to extraordinary demand recently, the product is currently sold out. We'll restock and make it available again soon. Stay tuned!"),
            !1
        }
        var i = this;
        c === !1 && (c = ""),
        b || (b = 34.95),
        d || (d = 1),
        _gaq && _gaq.push(["_trackPageview", "/ga_add_to_cart"]),
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "my/cart",
            type: "post",
            data: {
                ajaxCall: "1",
                action: "add",
                art_work_id: a,
                quantity: d,
                unit_price: b,
                item_option: c,
                includeCartData: "Y"
            },
            success: $.proxy(function(a, b) {
                var c = JSON.parse(b);
                c.success && (hoverCart.popupCart(), i.reset(c.cartItems)),
                i.trigger("change"),
                a && (window.location.href = g ? "/checkout/shipping": "/my/cart")
            },
            this, f)
        })
    },
    registerBackboneModelChange: function(a) {
        this.notifyCallbacks = this.notifyCallbacks ? this.notifyCallbacks: [],
        this.notifyCallbacks.push(a)
    },
    notifyRelatedModel: function() {
        if (this.notifyCallbacks) for (index in this.notifyCallbacks) $.isFunction(this.notifyCallbacks[index]) && this.notifyCallbacks[index]()
    },
    addSubscriptionToCart: function(a, b, c, d) {
        var e = this;
        _gaq && _gaq.push(["_trackPageview", "/ga_add_to_cart"]),
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "my/cart",
            type: "post",
            data: {
                ajaxCall: "1",
                action: "addSubscriptionPlan",
                system_tag: a,
                quick_checkout: c ? "Y": "N",
                quantity: 1,
                includeCartData: "Y"
            },
            success: function(a) {
                var c = JSON.parse(a);
                c.success && e.reset(c.cartItems),
                e.trigger("change"),
                d && d(c.success),
                b && (window.location.href = b)
            }
        })
    },
    getCartCount: function() {
        var a = 0;
        return this.each(function(b) {
            b.get("shouldHide") || (a += parseInt(b.get("quantity")))
        }),
        a
    },
    addSystemItem: function(a, b) {
        var c = this;
        _gaq && _gaq.push(["_trackPageview", "/ga_add_to_cart"]),
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "my/cart",
            type: "post",
            data: {
                ajaxCall: "1",
                action: "addSystemItem",
                system_tag: a,
                quantity: 1,
                includeCartData: "Y"
            },
            success: function(a) {
                var d = JSON.parse(a);
                d.success && c.reset(d.cartItems),
                c.trigger("change"),
                b && (window.location.href = "/my/cart")
            }
        })
    },
    removeItem: function(a) {
        this.each(function(b) {
            b.get("id") == a && b.remove()
        })
    }
}),
FollowButtonModel = Backbone.Model.extend({
    isFollowed: function() {
        return this.get("followed")
    },
    follow: function() {
        var a = this;
        this.set("followed", !0),
        $.ajax({
            url: "/controllers/UserFollow.php?fn=follow&followee_user_id=" + a.get("targetUserId"),
            success: function(b) {
                var c = JSON.parse(b);
                a.set("followerCount", c.followerCount)
            }
        })
    },
    unfollow: function() {
        var a = this;
        this.set("followed", !1),
        $.ajax({
            url: "/controllers/UserFollow.php?fn=unfollow&followee_user_id=" + a.get("targetUserId"),
            success: function(b) {
                var c = JSON.parse(b);
                a.set("followerCount", c.followerCount)
            }
        })
    }
}),
ShowcaseModel = Backbone.Model.extend({
    infiniteCurrentEnd: 0,
    getTotalPages: function(a) {
        var b = this.get("showcases");
        return Math.ceil(b.length / a)
    },
    getPageContent: function(a, b) {
        var c = this.get("showcases"),
        d = c.slice((a - 1) * b, a * b);
        return d
    },
    hasNextPage: function(a, b) {
        var c = this.get("showcases");
        return c && c.length ? c.length >= a * b: !1
    },
    hasPrevPage: function(a) {
        var b = this.get("showcases");
        return b && b.length ? 1 != a: !1
    },
    getInfiniteFeed: function(a) {
        var b = this.get("showcases"),
        c = [];
        if (a > 0) {
            for (a + this.infiniteCurrentEnd % b.length; a > 0;) a > b.length - this.infiniteCurrentEnd ? (c = c.concat(b.slice(this.infiniteCurrentEnd % b.length)), a -= b.length - this.infiniteCurrentEnd, this.infiniteCurrentEnd = 0) : (c = c.concat(b.slice(this.infiniteCurrentEnd % b.length, this.infiniteCurrentEnd % b.length + a)), this.infiniteCurrentEnd += a, this.infiniteCurrentEnd %= b.length, a = 0)
        }
        return c
    }
}),
ArtworkView = Backbone.View.extend({
    $likeButton: null,
    events: {
        "click .like-btn": "likeButtonClicked",
        "click .add-to-cart-btn": "addToCartClicked",
        "click .remove-case": "removeButtonClicked",
        "click .vote-btn": "voteButtonClicked"
    },
    initialize: function() {
        this.$likeButton = this.$(".like-btn")
    },
    likeButtonClicked: function() {
        var a = parseInt(this.$(".like-count").html());
        return this.model.isLiked() ? this.model.unlike() && (this.$(".like-icon").removeClass("hide"), this.$(".liked-icon").addClass("hide"), this.$(".like-count").html(a - 1)) : this.model.like() && (this.$(".liked-icon").removeClass("hide"), this.$(".like-icon").addClass("hide"), this.$(".like-count").html(a + 1)),
        !1
    },
    addToCartClicked: function() {
        return cartModel.addToCart(this.model.get("id"), this.model.get("unit_price"), this.model.get("item_option"), 1, this.model.get("device_short_name")),
        !1
    },
    removeButtonClicked: function() {
        var a = this.model.get("id"),
        b = $.proxy(function(a) {
            $.ajax({
                url: "/controllers/Artwork.php",
                data: {
                    fn: "delete",
                    id: a
                }
            }),
            this.remove()
        },
        this, a);
        if ($("#confirm-delete-modal").length > 0) {
            var c = new TwoOptionModalView({
                el: $("#confirm-delete-modal")[0],
                option1Callback: function() {
                    this.$el.html("")
                },
                option2Callback: function() {
                    b(),
                    this.$el.html("")
                },
                heading: __("Are you sure?"),
                subHeading: __("This design will be deleted"),
                option1: __("Cancel"),
                option2: __("Yes")
            });
            c.render()
        } else b();
        return ! 1
    },
    voteButtonClicked: function() {
        var a = this,
        b = parseInt(this.$(".vote-count").html());
        return this.model.isVoted() ? this.model.unvote(function(c) {
            c && (a.$(".vote-icon").removeClass("hide"), a.$(".voted-icon").addClass("hide"), a.$(".vote-count").html(b - 1))
        }) : this.model.vote(function(c) {
            c && (a.$(".voted-icon").removeClass("hide"), a.$(".vote-icon").addClass("hide"), a.$(".vote-count").html(b + 1))
        }),
        !1
    }
}),
ConfirmResetModalView = Backbone.Marionette.ItemView.extend({
    template: "#template-confirm-modal",
    className: "modal-box f-width f-height absolute",
    tagName: "div",
    events: {
        "click #cancel-btn": "cancelButtonClicked",
        "click #done-btn": "doneButtonClicked"
    },
    initialize: function(a) {
        this.app = a.app,
        this.successCallback = a.successCallback,
        this.failedCallback = a.failedCallback,
        this.heading = a.heading,
        this.message = a.message,
        this.confirm = a.confirm,
        this.cancel = a.cancel
    },
    render: function() {
        this.$el.html(Mustache.render($(this.template).html(), {
            heading: this.heading,
            message: this.message,
            confirm: this.confirm ? this.confirm: __("Confirm"),
            cancel: this.cancel ? this.cancel: __("Cancel"),
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        }))
    },
    closeModal: function() {
        return this.failedCallback && this.failedCallback(),
        !1
    },
    cancelButtonClicked: function() {
        return this.failedCallback && this.failedCallback(),
        !1
    },
    doneButtonClicked: function() {
        return this.successCallback && this.successCallback(),
        !1
    }
}),
CustomDropDown = Backbone.View.extend({
    $dropDownButton: null,
    $dropDownList: null,
    events: {
        "click .filter-btn": "onDropDownButtonClicked",
        "click .drop li": "onItemClicked"
    },
    initialize: function() {
        this.$dropDownButton = this.$(".filter-btn"),
        this.$dropDownList = this.$(".drop"),
        $("html").click(_.bind(this.onPageAnywhereClicked, this)),
        MyApp.vent.on("customDropDown:dismissAll", this.dismiss, this)
    },
    onItemClicked: function(a) {
        this.$dropDownButton.text($(a.target).text())
    },
    dismiss: function() {
        this.$el.removeClass("open")
    },
    onDropDownButtonClicked: function() {
        var a = this.$el.hasClass("open");
        return MyApp.vent.trigger("customDropDown:dismissAll"),
        a || this.$el.addClass("open"),
        !1
    },
    onPageAnywhereClicked: function(a) {
        a.target != this.$dropDownButton[0] && this.$el.removeClass("open")
    }
}),
DownloadModalView = Backbone.Marionette.ItemView.extend({
    template: "#template-download-modal",
    className: "modal-box f-width f-height absolute",
    tagName: "div",
    events: {
        "click #view-in-web-btn": "closeModal",
        "click #download-btn": "downlaodButtonClicked"
    },
    initialize: function(a) {
        this.app = a.app
    },
    render: function() {
        this.$el.html(Mustache.render($(this.template).html()))
    },
    closeModal: function() {
        return this.$el.fadeOut(),
        !1
    },
    downlaodButtonClicked: function() {
        return _gaq && _gaq.push(["_trackPageview", "/ga_download_app"]),
        setCookie("hasShowDownloadPage", "true"),
        window.location.href = ClientDeviceManager.isAndriod() ? "/get-android-app": "/get-ios-app",
        !1
    }
}),
FollowButton = Backbone.View.extend({
    events: {
        click: "followButtonClicked"
    },
    initialize: function() {
        this.model.on("change:followed", this.render, this)
    },
    followButtonClicked: function(a) {
        $(a.currentTarget).blur();
        var b = this.model.isFollowed();
        return b ? this.model.unfollow() : this.model.follow(),
        !1
    },
    render: function() {
        var a = this.model.isFollowed();
        this.$el.html(__(a ? "Unfollow": "Follow"))
    }
}),
FollowerCount = Backbone.View.extend({
    initialize: function() {
        this.model.on("change:followerCount", this.render, this)
    },
    render: function() {
        this.$el.html(this.model.get("followerCount"))
    }
}),
HoverCart = Backbone.Marionette.ItemView.extend({
    template: "#template-navigation-cart",
    events: {
        "click .remove-btn": "removeButtonClicked"
    },
    initialize: function(a) {
        this.model = a.model
    },
    render: function() {
        var a = this.model.toJSON(),
        b = 0;
        for (index in a) a[index].shouldHide || b++;
        this.$el.html(Mustache.render($(this.template).html(), {
            cartItems: a,
            hasItems: b > 0,
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        }))
    },
    removeButtonClicked: function(a) {
        var b = $(a.currentTarget).attr("data-id");
        return this.model.removeItem(b),
        !1
    },
    popupCart: function() {
        $(".cart-btn-wrapper").addClass("hover"),
        setTimeout(function() {
            $(".cart-btn-wrapper").removeClass("hover")
        },
        3e3)
    }
}),
InviteSignupModalView = Backbone.Marionette.ItemView.extend({
    template: "#template-invite-signup-modal",
    template2: "#template-invite-use-code-modal",
    events: {
        "click .invite-signup-close-btn": "close",
        "click .invite-signup-modal": "close",
        "click .invite-signup-modal-holder": "preventClick",
        "click .signup-avatar": "preventClick",
        "click #email-signup-btn": "submitEmailRegister",
        "click #facebook-signup-btn": "facebookSignup",
        "click #instagram-signup-btn": "instagramSignup",
        "click .action-button": "actionButtonClicked"
    },
    initialize: function(a) {
        this.currentUrl = encodeURIComponent(window.location.href),
        this.profilePic = a.profilePic,
        this.username = a.username,
        this.isLogined = a.isLogined,
        this.inviteCode = a.inviteCode,
        this.actionText = a.actionText,
        this.actionLink = a.actionLink
    },
    render: function() {
        this.__ = __m,
        this.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render(this.isLogined ? $(this.template2).html() : $(this.template).html(), {
            currentUrl: this.currentUrl,
            inviteCredit: ConstantsManager.USER_INVITE_CREDIT_OF_SINGLE_REFERRAL,
            profilePic: this.profilePic,
            inviteCode: this.inviteCode,
            actionText: this.actionText,
            actionLink: this.actionLink,
            username: this.username,
            __: __m
        })),
        $("body").addClass("modal-lock"),
        this.$("[data-reveal]").bind("click", globalRevealClicked),
        this.$("#sign-up-form").bind("submit", this.submitEmailRegister),
        $(window).resize(function() {
            $(window).width() > 767 || $(window).height() < $(".invite-signup-modal-holder").innerHeight() ? ($(".inner-container").removeClass("inner-container"), $(window).width() > 767 ? $(".invite-signup-modal>div").addClass("f-height") : $(".invite-signup-modal>div").removeClass("f-height")) : $(".invite-signup-modal>div").addClass("inner-container")
        }),
        $(window).resize()
    },
    close: function() {
        return this.$("#sign-up-form").unbind("submit", this.submitEmailRegister),
        this.$("[data-reveal]").unbind("click", this.globalRevealClicked),
        this.$el.html(""),
        $("body").removeClass("modal-lock"),
        setCookie("shouldShowReferralSignupPrompt", !1, 0),
        !1
    },
    preventClick: function(a) {
        return "A" != a.target.tagName ? !1 : void a.stopPropagation()
    },
    facebookSignup: function() {
        ExternalSourceAccessManager.getUserInfo(2,
        function() {
            _gaq && _gaq.push(["_trackPageview", "/ga_signup"]),
            self.close(),
            window.location.reload()
        },
        function() {},
        ClientDeviceManager.isMobileAgent())
    },
    instagramSignup: function() {
        ExternalSourceAccessManager.getUserInfo(1,
        function() {
            _gaq && _gaq.push(["_trackPageview", "/ga_signup"]),
            self.close(),
            window.location.reload()
        },
        function() {},
        ClientDeviceManager.isMobileAgent())
    },
    submitEmailRegister: function() {
        var a = this.$("#sign-up-url").val(),
        b = this.$("#sign-up-mail").val(),
        c = this.$("#sign-up-password").val(),
        d = this;
        return isValidUsername(a) ? "" != b && validateEmail(b) ? "" == c ? (showErrorMessage(__("Invalid password")), !1) : ($.ajax({
            url: "/user",
            type: "POST",
            dataType: "json",
            data: {
                fn: "registerNewUser",
                "register-username": a,
                "register-email": b,
                "register-password": c,
                ajax: "Y",
                overrideSessionId: getCookie(ConstantsManager.DEFAULT_SESSION_NAME)
            },
            success: function(a) {
                a == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_USERNAME_NOT_PROVIDED ? showErrorMessage(__("Please fill in your username")) : a == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_EMAIL_NOT_PROVIDED ? showErrorMessage(__("Please fill in your email")) : a == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_PASSWORD_NOT_PROVIDED ? showErrorMessage(__("Please fill in your password")) : a == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_USERNAME_ALREADY_IN_USE ? showErrorMessage(__("Username already taken")) : a == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_INVALID_USERNAME ? showErrorMessage(__("Username contains invalid character")) : a == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_EMAIL_ALREADY_IN_USE && showErrorMessage(__("Email already taken")),
                a == ConstantsManager.USER_INFO_REGISTER_NEW_USER_SUCCESS && (_gaq && _gaq.push(["_trackPageview", "/ga_signup"]), d.close(), window.location.reload())
            }
        }), !1) : (showErrorMessage(__("Invalid email")), !1) : (showErrorMessage(__("Invalid username")), !1)
    },
    actionButtonClicked: function() {
        this.close();
        var a = this.$(".action-button")[0].href;
        return window.location.href = a,
        !1
    }
}),
MessageModalView = Backbone.Marionette.ItemView.extend({
    template: "#template-message-modal",
    className: "table modal-box f-width f-height absolute",
    tagName: "div",
    events: {
        "click #done-btn": "doneButtonClicked",
        "click .close-btn": "closeModal"
    },
    initialize: function(a) {
        this.successCallback = a.successCallback,
        this.failedCallback = a.failedCallback,
        this.heading = a.heading,
        this.message = a.message,
        this.confirm = a.confirm
    },
    render: function() {
        this.$el.html(Mustache.render($(this.template).html(), {
            heading: this.heading,
            message: this.message,
            confirm: this.confirm ? this.confirm: __("OK"),
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        }))
    },
    closeModal: function() {
        return this.failedCallback && this.failedCallback(),
        this.$el.html(""),
        !1
    },
    doneButtonClicked: function() {
        return this.successCallback && this.successCallback(),
        this.$el.html(""),
        !1
    }
}),
CompleteUserProfileModal = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-complete-user-profile-modal",
    className: "table f-width modal-box f-height absolute",
    tagName: "div",
    events: {
        "click .close-btn": "closeModal",
        "click #submit-btn": "submitClicked"
    },
    initialize: function(a) {
        this.app = a.app,
        this.successCallback = a.successCallback,
        this.failedCallback = a.failedCallback
    },
    render: function() {
        this.$el.html(Mustache.render($(this.template).html(), {
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        }))
    },
    closeModal: function() {
        return this.app.completeUserProfileModalView.close(),
        this.failedCallback(),
        !1
    },
    submitClicked: function() {
        var a = this.$("#sign-up-url").val();
        if (!a || "" == a) return showErrorMessage(__("Please enter username")),
        !1;
        var b = this.$("#sign-up-mail").val();
        if (!b || "" == b) return showErrorMessage(__("Please enter your email")),
        !1;
        var c = this;
        return $.ajax({
            url: "/user",
            method: "POST",
            data: {
                fn: "confirmUserProfileDetails",
                "confirm-username": a,
                "confirm-email": b,
                ajax: "Y"
            },
            success: function(a) {
                a == ConstantsManager.USER_INFO_PROFILE_CONFIRM_FAIL_EMAIL_ALREADY_IN_USE ? showErrorMessage(__("Email already taken")) : a == ConstantsManager.USER_INFO_PROFILE_CONFIRM_FAIL_USERNAME_ALREADY_IN_USE ? showErrorMessage(__("Username already taken")) : (c.app.completeUserProfileModalView.close(), c.successCallback())
            }
        }),
        !1
    }
}),
SerachUserView = Backbone.Marionette.ItemView.extend({
    template: "#template-search-user-item-view",
    tagName: "li",
    className: "column3 s-column4 text-center mb1",
    initialize: function(a) {
        this.fullWidth = a.fullWidth
    },
    render: function() {
        this.model.attributes.__ = __m,
        this.model.attributes.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render($(this.template).html(), this.model.attributes))
    }
}),
SearchUserCollectionView = Backbone.Marionette.CollectionView.extend({
    className: "mt1 reset-list row",
    tagName: "ul",
    className: "reset-list",
    itemView: SerachUserView,
    initialize: function(a) {
        this.fullWidth = a.fullWidth
    },
    buildItemView: function(a, b) {
        var c = new b({
            model: a,
            fullWidth: this.fullWidth
        });
        return c
    }
}),
SerachArtworkView = Backbone.Marionette.ItemView.extend({
    template: "#template-search-artwork-item-view",
    tagName: "li",
    className: "column3 s-column4 xs-column6 case mb1",
    initialize: function(a) {
        this.fullWidth = a.fullWidth,
        this.minWidth = a.minWidth
    },
    render: function() {
        this.model.attributes.__ = __m,
        this.model.attributes.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render($(this.template).html(), this.model.attributes))
    }
}),
SearchArtworkCollectionView = Backbone.Marionette.CollectionView.extend({
    className: "mt1 reset-list row",
    tagName: "ul",
    className: "reset-list",
    itemView: SerachArtworkView,
    initialize: function(a) {
        this.fullWidth = a.fullWidth,
        this.minWidth = a.minWidth
    },
    buildItemView: function(a, b) {
        var c = new b({
            model: a,
            minWidth: this.minWidth,
            fullWidth: this.fullWidth
        });
        return c
    }
}),
SerachDeviceView = Backbone.Marionette.ItemView.extend({
    template: "#template-search-device-item-view",
    tagName: "li",
    className: "column3 s-column4 xs-column6 mb1",
    render: function() {
        this.model.attributes.__ = __m,
        this.model.attributes.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render($(this.template).html(), this.model.attributes))
    }
}),
SearchDeviceCollectionView = Backbone.Marionette.CollectionView.extend({
    className: "mt1 reset-list row",
    tagName: "ul",
    className: "reset-list",
    itemView: SerachDeviceView
}),
ShareLinkView = Backbone.View.extend({
    $textField: null,
    $copyButton: null,
    clip: null,
    initialize: function() {
        this.$textField = this.$("#invite-link"),
        this.$copyButton = this.$("#copy-button");
        var a = this;
        this.clip = new ZeroClipboard(a.$copyButton, {
            moviePath: "/js/vendors/ZeroClipboard.swf",
            text: a.$textField.val()
        }),
        this.clip.on("load",
        function() {
            a.clip.setText(a.$textField.val())
        }),
        this.clip.on("dataRequested",
        function() {
            a.$textField.select(),
            a.clip.setText(a.$textField.val()),
            showSuccessMessage(__("Share link is copied."))
        }),
        this.clip.on("noflash",
        function() {
            a.$copyButton.hide()
        })
    }
}),
StickBar = Backbone.View.extend({
    originalTop: null,
    initialize: function() {
        this.originalTop = this.$el.offset().top,
        $(window).scroll(_.bind(this.detectStickyHeader, this))
    },
    detectStickyHeader: function() {
        $(window).scrollTop() > this.originalTop ? this.$el.addClass("sticky") : this.$el.removeClass("sticky")
    }
}),
TwoOptionModalView = Backbone.Marionette.ItemView.extend({
    template: "#template-two-option-modal",
    className: "modal-box f-width f-height absolute",
    tagName: "div",
    events: {
        "click #option1-btn": "option1Clicked",
        "click #option2-btn": "option2Clicked"
    },
    initialize: function(a) {
        this.app = a.app,
        this.option1Callback = a.option1Callback,
        this.option2Callback = a.option2Callback,
        this.heading = a.heading,
        this.subHeading = a.subHeading,
        this.message = a.message,
        this.option1 = a.option1,
        this.option2 = a.option2
    },
    render: function() {
        this.__ = __m,
        this.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render($(this.template).html(), this)),
        this.$("#option1-btn").unbind("click"),
        this.$("#option2-btn").unbind("click")
    },
    close: function() {
        this.undelegateEvents(),
        this.$el.html("")
    },
    option1Clicked: function() {
        return this.option1Callback && this.option1Callback(),
        !1
    },
    option2Clicked: function() {
        return this.option2Callback && this.option2Callback(),
        !1
    }
}),
UserListModal = Backbone.Marionette.ItemView.extend({
    template: "#template-user-list-modal",
    events: {
        "click .close-btn": "closeModal"
    },
    render: function() {
        this.__ = __m,
        this.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render($(this.template).html(), this)),
        this.$(".avatar").error(function(a) {
            $(a.currentTarget).attr("src", "/img/ui/avatar.png")
        })
    },
    initialize: function(a) {
        this.header = a.header,
        this.userList = a.userList;
        var b = this;
        $.each(this.userList,
        function(a, c) {
            b.userList[a].profile_picture = getThumbnailUrl(c.profile_picture),
            b.userList[a].url = "/" + c.username
        })
    },
    closeModal: function() {
        return this.$el.html(""),
        !1
    }
}),
VideoModalView = Backbone.Marionette.ItemView.extend({
    template: "#template-video-modal",
    events: {
        "click .close-btn": "close",
        "click .modal-box": "close"
    },
    initialize: function(a) {
        this.url = a.url
    },
    render: function() {
        this.__ = __m,
        this.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render($(this.template).html(), this))
    },
    close: function() {
        return this.$el.html(""),
        !1
    }
});
$(function() {
    $(".fb-share-btn").click(function() {
        var a = $(this).attr("share-url"),
        b = (1 == $(this).attr("isDiscountUrl"), $(this).attr("share-img")),
        c = $(this).attr("share-title"),
        d = $(this).attr("share-desc");
        return FB.ui({
            method: "feed",
            redirect_uri: ConstantsManager.CASETAGRAM_WINDOW_SELF_CLOSE_URL,
            link: a,
            picture: b,
            name: c,
            description: d
        }),
        !1
    })
}),
function() {
    for (var a, b = function() {},
    c = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], d = c.length, e = window.console = window.console || {}; d--;) a = c[d],
    e[a] || (e[a] = b)
} ();
var UserProfileManager = {
    isUserProfileComplete: function() {
        var a = {
            fn: "checkUserProfileCompleteness"
        },
        b = !1;
        return $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "user",
            dataType: "json",
            async: !1,
            data: a,
            beforeSend: function() {},
            error: function() {},
            success: function(a) {
                a == ConstantsManager.USER_INFO_PROFILE_COMPLETE && (b = !0)
            }
        }),
        b
    },
    logoutUser: function() {
        var a = {
            fn: "logoutUser"
        },
        b = !1;
        return $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + ConstantsManager.USER_AUTH_CONTROLLER_AUTHENTICATION_PATH,
            type: "POST",
            dataType: "json",
            async: !1,
            data: a,
            beforeSend: function() {},
            error: function() {},
            success: function(a) {
                a == ConstantsManager.USER_AUTH_LOGOUT_USER_SUCCESS && (b = !0)
            }
        }),
        b
    },
    getUserInfo: function(a) {
        var b = {
            fn: "getUserInfo"
        };
        return a && (b.allowGuestUser = !0),
        rtn = null,
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "user",
            dataType: "json",
            async: !1,
            data: b,
            beforeSend: function() {},
            error: function() {},
            success: function(a) {
                a && (rtn = a)
            }
        }),
        rtn
    }
},
ExternalSourceAccessManager = {
    AUTH_WINDOW_PROBING_INTERVAL: 2e3,
    callbackActionSuccess: null,
    callbackActionFail: null,
    userAuthenticatedForThisAction: !1,
    currentExternalSourceId: null,
    currentPhotoAlbumId: null,
    callbackAuthenticateSuccess: null,
    callbackAuthenticateFail: null,
    authWindowCreated: !1,
    authWindow: null,
    iframeCheckingInterval: null,
    isRetrieveExternalDataOnly: !1,
    validAccessTokenCache: {},
    getUserInfo: function(a, b, c, d, e, f) {
        a ? this.setCallbackStateForAuthWindow(b, c) : (a = this.currentExternalSourceId, f = this.isRetrieveExternalDataOnly),
        this.checkValidAccessToken(a, f,
        function(g) {
            g || this.userAuthenticatedForThisAction ? this.fetchUserInfoFromServer(a, b, c) : (this.currentExternalSourceId = a, this.isRetrieveExternalDataOnly = f, this.authenticateUser(a, this.getUserInfo, c, d, e, f))
        },
        this)
    },
    getUserPhoto: function(a, b, c, d, e, f, g, h, i) {
        f = f || 1,
        g = g || ConstantsManager.MEDIA_SELECT_ROW_COUNT,
        a ? this.setCallbackStateForAuthWindow(c, d) : (a = this.currentExternalSourceId, b = this.currentPhotoAlbumId, h = this.isRetrieveExternalDataOnly),
        this.checkValidAccessToken(a, h,
        function(j) {
            this.userAuthenticatedForThisAction || j ? this.fetchUserPhotoFromServer(a, b, f, g, h, c, d, i) : (this.currentExternalSourceId = a, this.isRetrieveExternalDataOnly = h, this.authenticateUser(a, this.getUserPhoto, d, e, null, h))
        },
        this)
    },
    getUserPhotoAlbum: function(a, b, c, d, e, f) {
        a ? this.setCallbackStateForAuthWindow(b, c) : (a = this.currentExternalSourceId, e = this.isRetrieveExternalDataOnly),
        this.checkValidAccessToken(a, e,
        function(g) {
            this.userAuthenticatedForThisAction || g ? this.fetchUserPhotoAlbumFromServer(a, e, b, c, f) : (this.currentExternalSourceId = a, this.isRetrieveExternalDataOnly = e, this.authenticateUser(a, this.getUserPhotoAlbum, c, d, null, e))
        },
        this)
    },
    getUserContactList: function(a, b, c, d, e, f, g) {
        f = "boolean" == typeof f ? f: !1,
        a ? this.setCallbackStateForAuthWindow(b, c) : (a = this.currentExternalSourceId, e = this.isRetrieveExternalDataOnly),
        this.checkValidAccessToken(a, e,
        function(h) {
            this.userAuthenticatedForThisAction || h ? this.fetchUserContactListFromServer(a, e, f, b, c, g) : (this.currentExternalSourceId = a, this.isRetrieveExternalDataOnly = e, this.authenticateUser(a, this.getUserContactList, c, d, null, e))
        },
        this)
    },
    setkValidAccessTokenCache: function(a, b, c) {
        this.validAccessTokenCache[a + "," + b] = c
    },
    checkValidAccessToken: function(a, b, c, d) {
        if (this.validAccessTokenCache && this.validAccessTokenCache[a + "," + b]) return void $.proxy(c, d, !0)();
        var e = this,
        f = {
            fn: "checkValidAccessToken",
            isRetrieveExternalDataOnly: "boolean" == typeof b && b ? "Y": "N"
        };
        f[ConstantsManager.USER_AUTH_SIGN_IN_SOURCE_PARAM_NAME] = a;
        var g = !1; ! b && "undefined" != typeof Server && Server.instagramConnected && a == ConstantsManager.USER_EXTERNAL_SOURCE_ID_INSTAGRAM && (g = !0),
        !b && "undefined" != typeof Server && Server.facebookConnected && a == ConstantsManager.USER_EXTERNAL_SOURCE_ID_FACEBOOK && (g = !0),
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + ConstantsManager.USER_AUTH_CONTROLLER_AUTHENTICATION_PATH,
            dataType: "json",
            async: g,
            data: f,
            beforeSend: function() {},
            error: function() {},
            success: function(f) {
                f == ConstantsManager.USER_AUTH_CHECK_VALID_ACCESS_TOKEN_SUCCESS ? (e.validAccessTokenCache[a + "," + b] = !0, $.proxy(c, d, !0)()) : $.proxy(c, d, !1)()
            }
        })
    },
    authenticateUser: function(a, b, c, d, e, f) {
        d && "boolean" == typeof d || (d = !1),
        e = "undefined" == typeof e || parseInt(0 >= e) ? 0 : parseInt(e),
        f = "boolean" == typeof f ? f: !1,
        this.callbackAuthenticateSuccess = b,
        this.callbackAuthenticateFail = c;
        //var g = ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + ConstantsManager.USER_AUTH_CONTROLLER_AUTHENTICATION_PATH + "?fn=authenticateUser&" + ConstantsManager.USER_AUTH_SIGN_IN_SOURCE_PARAM_NAME + "=" + a + (e > 0 ? "&mergeUserId=" + e: "") + "&displayPopup=" + (d ? "N": "Y") + (ClientDeviceManager && ClientDeviceManager.isMobileAgent() ? "&isMobile=Y": "") + "&isRetrieveExternalDataOnly=" + (f ? "Y": "N");
        var g = '/auth?fn=' + this.targetType;
        return d ? void(window.location = g + "&returnFromExternalSource=Y") : ExternalSourceAccessManager.proceedPopupAuthentication(g, a)
    },
    resetIFrameCheckingState: function() {
        clearInterval(this.iframeCheckingInterval),
        this.iframeCheckingInterval = null,
        $(this.loginIFrame).remove()
    },
    proceedPopupAuthentication: function(a, b) {
        this.authWindow = window.open(a + "&statusOnly=N", "casetagramAuthWindow" + b, "height=500,width=600,resizable=yes,toolbar=no,menubar=no,location=no,status=no"),
        this.authWindow && !this.authWindow.closed && (this.authWindowCreated = !0),
        setTimeout(this.checkAuthWindowStatus, ExternalSourceAccessManager.AUTH_WINDOW_PROBING_INTERVAL)
    },
    toggleAuthWindowState: function(a) {
        ExternalSourceAccessManager.authWindowCreated = a,
        a || (ExternalSourceAccessManager.authWindow = null)
    },
    checkAuthWindowStatus: function() {
        ExternalSourceAccessManager.authWindowCreated && null != ExternalSourceAccessManager.authWindow && (ExternalSourceAccessManager.authWindow.closed ? (ExternalSourceAccessManager.toggleAuthWindowState(!1), ExternalSourceAccessManager.callbackAuthenticateFail()) : setTimeout(ExternalSourceAccessManager.checkAuthWindowStatus, ExternalSourceAccessManager.AUTH_WINDOW_PROBING_INTERVAL))
    },
    authenticateUserReturn: function(a) {
        this.toggleAuthWindowState(!1),
        a == ConstantsManager.USER_AUTH_AUTHENTICATE_USER_SUCCESS && null != this.callbackAuthenticateSuccess && (this.userAuthenticatedForThisAction = !0, this.callbackAuthenticateSuccess()),
        a == ConstantsManager.USER_AUTH_EXTERNAL_SOURCE_MERGE_USER_SUCCESS && null != this.callbackAuthenticateSuccess ? (this.userAuthenticatedForThisAction = !0, this.callbackAuthenticateSuccess()) : a == ConstantsManager.USER_AUTH_AUTHENTICATE_USER_FAIL && null != this.callbackAuthenticateFail ? (this.userAuthenticatedForThisAction = !1, this.callbackAuthenticateFail(a)) : a == ConstantsManager.USER_AUTH_EXTERNAL_SOURCE_USER_ALREADY_CONNECTED && null != this.callbackAuthenticateFail ? (this.userAuthenticatedForThisAction = !1, this.callbackAuthenticateFail(a)) : a == ConstantsManager.USER_AUTH_EXTERNAL_SOURCE_MISMATCH_WITH_CACHED_MERGE_USER_ID && null != this.callbackAuthenticateFail ? (this.userAuthenticatedForThisAction = !1, this.callbackAuthenticateFail(a)) : a == ConstantsManager.USER_AUTH_EXTERNAL_SOURCE_UNABLE_TO_RETRIEVE_USER_DETAILS && null != this.callbackAuthenticateFail && (this.userAuthenticatedForThisAction = !1, this.callbackAuthenticateFail(a))
    },
    showUserAuthenticationError: function() {
        return ! 1
    },
    setCallbackStateForAuthWindow: function(a, b) {
        this.userAuthenticatedForThisAction = !1,
        this.callbackActionSuccess = a,
        this.callbackActionFail = b
    },
    executeCallbackReturnAction: function(a) {
        this.userAuthenticatedForThisAction = !1,
        a ? this.callbackActionSuccess(a) : this.callbackActionFail()
    },
    fetchUserInfoFromServer: function(a, b, c) {
        var d = this,
        e = {
            fn: "getUserInfo"
        };
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + ConstantsManager.USER_AUTH_CONTROLLER_USER_PATH,
            dataType: "json",
            data: e,
            beforeSend: function() {},
            error: function() {
                d.userAuthenticatedForThisAction = !1,
                c ? c() : ExternalSourceAccessManager.executeCallbackReturnAction(!1)
            },
            success: function(a) {
                d.userAuthenticatedForThisAction = !1,
                b ? a ? b(a) : c() : ExternalSourceAccessManager.executeCallbackReturnAction(a)
            }
        })
    },
    fetchUserPhotoFromServer: function(a, b, c, d, e, f, g, h) {
        var i = this,
        j = {
            fn: "getUserPhoto",
            pageStart: c,
            pageEnd: d,
            isRetrieveExternalDataOnly: "boolean" == typeof e && e ? "Y": "N"
        };
        h && (j.targetUserId = h),
        j[ConstantsManager.USER_AUTH_SIGN_IN_SOURCE_PARAM_NAME] = a,
        b && (j.photoAlbumId = b),
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + ConstantsManager.USER_AUTH_CONTROLLER_USER_PATH,
            dataType: "json",
            data: j,
            beforeSend: function() {},
            timeout: 3e4,
            error: function() {
                i.userAuthenticatedForThisAction = !1,
                g()
            },
            success: function(a) {
                i.userAuthenticatedForThisAction = !1,
                a ? f(a) : g()
            }
        })
    },
    fetchUserPhotoAlbumFromServer: function(a, b, c, d, e) {
        var f = this,
        g = {
            fn: "getUserAlbumPhoto",
            isRetrieveExternalDataOnly: "boolean" == typeof b && b ? "Y": "N"
        };
        e && e > 0 && "" != e && (g.targetUserId = e),
        g[ConstantsManager.USER_AUTH_SIGN_IN_SOURCE_PARAM_NAME] = a,
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + ConstantsManager.USER_AUTH_CONTROLLER_USER_PATH,
            dataType: "json",
            data: g,
            beforeSend: function() {},
            error: function() {
                f.userAuthenticatedForThisAction = !1,
                d()
            },
            success: function(a) {
                f.userAuthenticatedForThisAction = !1,
                a ? c(a) : d()
            }
        })
    },
    fetchUserContactListFromServer: function(a, b, c, d, e, f) {
        var g = this,
        h = {
            fn: "getUserContactList",
            isRetrieveExternalDataOnly: "boolean" == typeof b && b ? "Y": "N",
            filterOutMember: "boolean" == typeof c && c ? "Y": "N"
        };
        f && (h.friendsOnly = "Y"),
        h[ConstantsManager.USER_AUTH_SIGN_IN_SOURCE_PARAM_NAME] = a,
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + ConstantsManager.USER_AUTH_CONTROLLER_USER_PATH,
            dataType: "json",
            data: h,
            beforeSend: function() {},
            error: function() {
                g.userAuthenticatedForThisAction = !1,
                e()
            },
            success: function(a) {
                g.userAuthenticatedForThisAction = !1,
                a ? d(a) : e(),
                ExternalSourceAccessManager.executeCallbackReturnAction(a)
            }
        })
    },
    init: function() {
        "undefined" != typeof externalSourceAccessManagerTrigger && externalSourceAccessManagerTrigger && externalSourceAccessManagerTrigger()
    }
};
ExternalSourceAccessManager.init();
var SearchModule = Backbone.View.extend({
    $searchBtn: null,
    $searchInput: null,
    events: {
        "click .search-btn": "onSearchButtonClicked"
    },
    initialize: function() {
        this.$searchBtn = this.$(".search-btn"),
        this.$searchInput = this.$(".search-input"),
        $("html").click(_.bind(this.onBackgroundClicked, this))
    },
    onSearchButtonClicked: function() {
        return this.$el.addClass("active"),
        this.$searchInput.focus(),
        this.$searchBtn.attr("data-open", "true"),
        !1
    },
    onBackgroundClicked: function() {
        this.$el.removeClass("active"),
        this.$searchBtn.attr("data-open", "false")
    }
}),
NavigationModule = Backbone.View.extend({
    $mobileBtn: null,
    $mobileDropNav: null,
    $profileBtn: null,
    $profileDropNav: null,
    events: {
        "click .m-nav-btn": "onMobileButtonClicked",
        "click .nav-user-profile > a": "onMobileProfileButtonClicked",
        "click #logout-btn": "logoutClicked"
    },
    initialize: function() {
        this.$mobileBtn = this.$(".m-nav-btn"),
        this.$mobileDropNav = this.$(".mobile-drop-nav"),
        this.$profileBtn = $(".nav-user-profile > a"),
        this.$profileDropNav = $(".nav-user-profile .drop-nav"),
        MyApp.vent.on("window:widthChange", this.onWidthChanged, this)
    },
    onMobileButtonClicked: function() {
        return "false" === this.$mobileBtn.attr("data-open") ? (this.$mobileDropNav.css({
            transform: "scaleY(1)",
            "-webkit-transform": "scaleY(1)"
        }), this.$mobileBtn.attr("data-open", "true"), !1) : (this.$mobileDropNav.css({
            transform: "scaleY(0)",
            "-webkit-transform": "scaleY(0)"
        }), this.$mobileBtn.attr("data-open", "false"), !1)
    },
    isMobile: function() {
        var a = window.matchMedia("(max-width: 900px)");
        return a.matches
    },
    onMobileProfileButtonClicked: function() {
        return this.isMobile() ? "false" === this.$profileBtn.attr("data-open") ? (this.$profileDropNav.css({
            display: "block"
        }), this.$profileBtn.attr("data-open", "true"), !1) : (this.$profileDropNav.css({
            display: ""
        }), this.$profileBtn.attr("data-open", "false"), !1) : void 0
    },
    onWidthChanged: function() {
        this.isMobile() ? this.$mobileDropNav.css({
            transform: "scaleY(0)",
            "-webkit-transform": "scaleY(0)"
        }) : (this.$mobileDropNav.css({
            transform: "none",
            "-webkit-transform": "none"
        }), this.$mobileBtn.attr("data-open", "false"))
    },
    logoutClicked: function() {
        return Login.logout(),
        !1
    }
}),
shouldDisplaySearch = !1,
hoverCart = null;
$(function() {
    hoverCart = new HoverCart({
        el: $(".hover-cart")[0],
        model: cartModel
    }),
    hoverCart2 = new HoverCart({
        el: $(".hover-cart")[1],
        model: cartModel
    }),
    hoverCart.render(),
    hoverCart2.render(),
    cartModel.on("all",
    function() {
        var a = cartModel.getCartCount();
        $(".nav-cart-count").html(a > 0 ? cartModel.getCartCount() : "&nbsp;"),
        hoverCart.render()
    },
    this),
    $("#event-ribbon-close-btn").click(function() {
        return setCookie(ConstantsManager.SITE_PROMPT_COOKIE_NAME, !0),
        $(".event-ribbon").addClass("hide"),
        !1
    }),
    $("#link-to-profile").click(function() {
        var a = window.matchMedia("(min-width: 767px)");
        return a.matches ? (window.location = "/my", !1) : void 0
    }),
    $("#open-in-app-btn").click(function() {
        return ! 1
    }),
    $(".search-btn").click(function() {
        return shouldDisplaySearch ? ($("#nav-search-form").submit(), !1) : (shouldDisplaySearch = !0, $(".search-field .drop-nav").show(), $("#search-focus").focus(), $("body").css("overflow", "hidden"), $("body").css("height", "100%"), !1)
    });
    $("#event-downloadapp-closebtn").click(function() {
        setCookie(ConstantsManager.HIDE_DOWNLOAD_APP_BLOCK_COOKIE_NAME, !0),
        $(".app-downloadapp").hide()
    })
}),
$("#logout-btn").click(function() {
    Login.logout()
});
var globalRevealClicked = function(a) {
    var b = $(a.currentTarget).attr("data-reveal"),
    c = "#" + b;
    return $(a.currentTarget).toggleClass("open"),
    $(c).slideToggle("fast"),
    !1
},
socialRevealClicked = function(a) {
    var b = $(a.currentTarget).attr("data-social-reveal"),
    c = "#" + b;
    $(a.currentTarget).toggleClass("open"),
    $(c).slideToggle("fast")
},
globalModalClicked = function(a) {
    var b = $(a.currentTarget).attr("data-modal"),
    c = "#" + b,
    d = $(".close-btn");
    return $(c).removeClass("hide"),
    d.click(function() {
        return $(c).addClass("hide"),
        !1
    }),
    !1
},
$modal = $("[data-modal]");
$modal.click(globalModalClicked),
$(function() {
    function a(a, b) {
        var c = new Image;
        c.src = a,
        c.complete ? (b(), c.onload = function() {}) : c.onload = function() {
            b(),
            c.onload = function() {}
        }
    }
    function b() {
        var a = $(".go-through");
        a.click(function() {
            return $("html,body").animate({
                scrollTop: $(window).height()
            },
            "slow"),
            !1
        })
    }
    function c() {
        var a = $(window).height(),
        b = $(".no-nav-f-height");
        b.css({
            height: a + "px"
        })
    }
    function d() {
        var a = $("[data-reveal-xs]");
        a.click(function() {
            var a = $(this).attr("data-reveal-xs"),
            b = "#" + a;
            $(this).toggleClass("open"),
            $(b).slideToggle("fast")
        })
    }
    function e(a) {
        var e = $("#mobile-drop-nav"),
        f = $("#profile-mobile"),
        g = $(".xs-hide");
        a.matches ? (c(), b(), $("#all-filters").css({
            display: "block"
        }), $("#setting__navigation").css({
            display: "block"
        }), e.css({
            display: "block"
        }), f.removeAttr("style"), g.removeAttr("style"), $("#open-in-app-btn").addClass("hide"), shouldDisplaySearch ? $(".search-field .drop-nav").show() : $(".search-field .drop-nav").hide()) : (d(), shouldDisplaySearch ? $("#mobile-drop-nav").show() : ($("#mobile-drop-nav").hide(), e.css({
            display: "none"
        }), $("#all-filters").css({
            display: "none"
        }), $("#setting__navigation").css({
            display: "none"
        })), shouldHideGetAppBtn || $("#open-in-app-btn").removeClass("hide"))
    }
    $(".scroll-top").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        },
        "slow"),
        !1
    }),
    $("img.flex-img").each(function(b, c) {
        var d = $(c).attr("src");
        a(d,
        function() {});
        var e = $(".phone-input"),
        f = $('.delivery-list input[type="radio"]');
        f.change(function() {
            $("#fedex-priority:checked") || $("#fedexFirst:checked") ? e.addClass("show-height") : alert("test")
        })
    });
    var f = ($(".tabs"), $(".tab li a")),
    g = $(".slide");
    f.click(function() {
        var a = $(this).attr("data-slide"),
        b = ".slide-" + a;
        return f.removeClass("active"),
        $(this).addClass("active"),
        g.addClass("hide"),
        $(b).removeClass("hide"),
        !1
    });
    var h = $("[data-reveal]");
    h.click(globalRevealClicked);
    var i = $("[data-social-reveal]");
    i.click(socialRevealClicked);
    var j = ($(".sub-navigation").width(), "[data-slide-to]"),
    k = ".sub-nav-container",
    l = $(".sub-nav-container .back");
    if ($(j).click(function() {
        $(this).parents(k).css({
            left: "-100%"
        })
    }), l.click(function() {
        return $(this).parents(k).css({
            left: "0"
        }),
        !1
    }), matchMedia) {
        var m = window.matchMedia("(min-width: 767px)");
        m.addListener(e),
        e(m)
    }
}),
URLResourceLocator.prototype.getUrl = function(a, b, c, d, e) {
    return (null === b || "undefined" == typeof b) && (b = this.PATH_TYPE_ABSOLUTE),
    (null === c || "boolean" != typeof c) && (c = !1),
    (null === d || "boolean" != typeof d) && (d = !1),
    (null === e || "boolean" != typeof e) && (e = !1),
    prefix = "",
    b == this.PATH_TYPE_FULL ? prefix = c ? e ? ConstantsManager.SECURED_CASETAGRAM_INDEX_URL: ConstantsManager.SECURED_CASETAGRAM_INDEX_URL_WITHOUT_LOGIN: e ? ConstantsManager.CASETAGRAM_INDEX_URL: ConstantsManager.CASETAGRAM_INDEX_URL_WITHOUT_LOGIN: b == this.PATH_TYPE_ABSOLUTE && (prefix = ConstantsManager.CASETAGRAM_INDEX_PATH),
    d && (locale = ConstantsManager.SESSION_LOCALE, locale.match(/^\s*$/) || (prefix = prefix + locale + "/")),
    a.length > 0 && "/" == a[0] && (a = a.substr(1)),
    prefix + a
},
URLResourceLocator.prototype.getResourceUrl = function(a) {
    return this.getUrl(a, null, !1, !0, !1)
};
var urlResourceLocator = new URLResourceLocator;
$(document).ready(function() {
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none",
        helpers: {
            title: null
        },
        padding: 0
    })
});