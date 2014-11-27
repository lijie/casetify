/*! casetagram 2014-11-11 */
var ChallengeDetailsModel = Backbone.Model.extend({
    vote: function() {
        this.set("voteCount", this.get("baseVoteCount") + 1),
        this.set("voted", !0);
        var a = this;
        $.ajax({
            url: "/controllers/Artwork.php",
            method: "POST",
            data: {
                fn: "voteArtwork",
                id: a.get("artworkId"),
                type: "VOTE",
                score: 5
            },
            success: function(b) {
                b == ConstantsManager.CHALLENGE_NO_ACTIVE_CHALLENGE ? showErrorMessage(__("No active challenge")) : b == ConstantsManager.CHALLENGE_VOTE_PERIOD_NOT_STARTED ? showErrorMessage(__("Challenge not started")) : b == ConstantsManager.CHALLENGE_VOTE_PERIOD_ENDED ? showErrorMessage(__("Challenge has finished")) : 0 == b ? (showErrorMessage(__("Vote failed")), a.set("voteCount", a.get("baseVoteCount")), a.set("voted", !1)) : (a.set("voteCount", a.get("baseVoteCount") + 1), a.set("voted", !0)),
                a.trigger("change:voted")
            }
        })
    },
    unvote: function() {
        this.set("voteCount", this.get("baseVoteCount")),
        this.set("voted", !1);
        var a = this;
        $.ajax({
            url: "/controllers/Artwork.php",
            method: "POST",
            data: {
                fn: "voteArtwork",
                id: a.get("artworkId"),
                type: "NONE",
                score: 5
            },
            success: function(b) {
                b == ConstantsManager.CHALLENGE_NO_ACTIVE_CHALLENGE ? showErrorMessage(__("No active challenge")) : b == ConstantsManager.CHALLENGE_VOTE_PERIOD_NOT_STARTED ? showErrorMessage(__("Challenge not started")) : b == ConstantsManager.CHALLENGE_VOTE_PERIOD_ENDED ? showErrorMessage(__("Challenge has finished")) : 0 == b ? (showErrorMessage(__("Unvote failed")), a.set("voteCount", a.get("baseVoteCount") + 1), a.set("voted", !0)) : (a.set("voteCount", a.get("baseVoteCount")), a.set("voted", !1)),
                a.trigger("change:voted")
            }
        })
    }
}),
DetailsPageState = Backbone.Model.extend({
    deviceList: null,
    currentDevice: null,
    itemListMapping: null,
    currentItemList: null,
    currentItem: null,
    caseDescription: null,
    initialize: function() {
        this.on("change:currentDevice", this.updateProductList, this),
        this.on("change:currentProduct", this.updateItemList, this),
        this.on("change:currentItem", this.updateSoldOutStatus, this),
        this.updateProductList(),
        this.updateItemList()
    },
    getDeviceShortNameByIndex: function(a) {
        return this.get("deviceList")[a]
    },
    setCurrentItemByItemOptionId: function(a) {
        var b = this.get("currentDevice"),
        c = b ? b.short_name: null,
        d = window.location.pathname,
        e = /\/product\/([^\/]+)\/([^\/]+)\/?/g,
        f = e.exec(d);
        f && window.history.replaceState(null, null, window.location.origin + "/product/" + f[1] + (c ? "/" + c + "/" + a: ""));
        var g = this.get("itemListMapping")[this.get("currentDevice").short_name];
        for (index in g) if (g[index].type_id == a) {
            this.set("currentItem", g[index]),
            this.trigger("change:currentItem");
            break
        }
    },
    setCurrentDeviceByShortname: function(a) {
        var b = this.get("deviceList");
        for (index in b) if (b[index].short_name == a) {
            this.set("currentDevice", b[index]);
            break
        }
        var c = window.location.pathname,
        d = /\/product\/([^\/]+)\/([^\/]+)\/?/g,
        e = d.exec(c);
        e && window.history.replaceState(null, null, window.location.origin + "/product/" + e[1] + "/" + a);
        var f = !1;
        if (!Server.overiddenItemOption && ("iphone5" == a || "iphone5s" == a || "ipad2" == a || "ipad3" == a || "ipad-mini" == a || "ipad-air" == a) && Server.sellable) {
            var g = !1;
            for (index in Server.caseList) if (4 == Server.caseList[index].id) {
                g = !0;
                break
            }
            g && !Server.isOwner && (this.setCurrentProductById(4), f = !0);
            var h = !1;
            for (index in Server.caseList) if (10 == Server.caseList[index].id) {
                h = !0;
                break
            }
            h && !Server.isOwner && (this.setCurrentProductById(10), f = !0)
        } ! f && Server.currentProduct && this.setCurrentProductById(Server.currentProduct.id),
        this.trigger("change:currentProduct")
    },
    updateProductList: function() {
        var a = this.get("currentDevice"),
        b = this.get("deviceProductMapping"),
        c = b[a.short_name],
        d = [];
        $.each(c,
        function(a, b) {
            d.push(b)
        }),
        this.set("caseList", d),
        this.set("currentProduct", d[0]),
        this.trigger("change:currentProduct")
    },
    updateItemList: function() {
        var a = this.get("currentDevice"),
        b = this.get("currentProduct");
        if (b) {
            var c = this.get("itemListMapping"),
            d = c[a.short_name],
            e = [];
            $.each(d,
            function(a, c) {
                c.product_type_id == b.id && e.push(c)
            }),
            this.set("currentItemList", e),
            this.setCurrentItemByItemOptionId(this.getDefaultItem().type_id)
        }
    },
    setCurrentProductById: function(a) {
        var b = this.get("caseList");
        for (index in b) if (b[index].id == a) return void this.set("currentProduct", b[index])
    },
    getDefaultItem: function() {
        var a = this.get("currentDevice").default_item_option,
        b = this.get("currentItemList");
        for (index in b) if (b[index].type_id == a) return b[index];
        return b[0]
    },
    getItemOptionListWithSelectState: function() {
        var a = JSON.parse(JSON.stringify(this.get("currentItemList"))),
        b = this.get("currentItem");
        return a = $.map(a,
        function(a) {
            return b && a.type_id == b.type_id && (a.selected = !0),
            a
        })
    },
    getDeviceListWithSelectState: function() {
        var a = this,
        b = JSON.parse(JSON.stringify(this.get("deviceList")));
        return b = $.map(b,
        function(b) {
            return b.short_name == a.get("currentDevice").short_name && (b.selected = !0),
            b
        })
    },
    getCaseDescription: function() {
        var a = (this.get("currentDevice").description, this.get("currentItemList"), this.get("currentProduct"));
        return ! a || "bezel-case" != a.short_name && "bezel-case-backplate" != a.short_name ? this.get("caseDescription") : __("Protection meets customization. 3-part extremely durable bezel protects the screen from directly contacting surfaces. The lightweight, minimalist design delivers a stylish profile, while allowing access to all buttons and ports at ease. Interchangeable Backplates adds one-of-a-kind personalization with endless choices.")
    },
    getPrice: function() {
        var a = this.get("currentItem") ? this.get("currentItem") : this.get("currentItemList")[0];
        return parseFloat(a.base_price) + parseFloat(a.additional_cost)
    },
    getOriginalPrice: function() {
        var a = this.get("currentItem") ? this.get("currentItem") : this.get("currentItemList")[0];
        return parseFloat(a.original_base_price) + parseFloat(a.additional_cost)
    },
    getCurrentArtworkImage: function(a, b) {
        if ("L" == a.toUpperCase()) var c = this.get("artworkImage");
        else var c = this.get("artworkThumbnail");
        b || (b = "");
        var d = (this.get("artworkId"), this.get("currentDevice")),
        e = this.get("currentItem"),
        f = c.replace(/(\d+)(_([^_]+))?(_(\d+))?.png/, "$1" + (d ? "_" + d.short_name: "") + (e ? "_" + e.type_id: "") + b + ".png");
        return "/" + f
    },
    getCurrentCaseImages: function(a) {
        var b = this.get("currentDevice"),
        c = this.get("currentItem") ? this.get("currentItem") : this.get("currentItemList")[0],
        d = this.get("currentProduct"),
        e = [],
        f = [];
        return e.push("/img/case/case_color_preview_" + c.type_id + ".jpg"),
        f.push({
            img: "/img/case/case_color_preview_" + c.type_id + ".jpg",
            option: "slider"
        }),
        -1 != ConstantsManager.ARTWORK_PREVIEW_STYLE_DEVICE_LIST.split(",").indexOf(b.short_name) && (e.push(this.getCurrentArtworkImage("L", "__style1")), f.push({
            img: this.getCurrentArtworkImage("", "__style1")
        }), e.push(this.getCurrentArtworkImage("L", "__style2")), f.push({
            img: this.getCurrentArtworkImage("", "__style2"),
            largeScreenOnly: !0
        })),
        "bezel-case" == d.short_name && (e.push("/img/case/front_color_preview_" + c.type_id + ".jpg"), f.push({
            img: "/img/case/front_color_preview_" + c.type_id + ".jpg",
            option: "slider"
        }), e.push("/img/case/side_color_preview_" + c.type_id + ".jpg"), f.push({
            img: "/img/case/side_color_preview_" + c.type_id + ".jpg",
            option: "slider"
        }), f.push({
            img: "/img/subscription_page/video_bevel_detail.jpg",
            option: "video",
            videoUrl: "//www.youtube.com/embed/PkEtKD819no?autoplay=1"
        })),
        "iphone6" == b.short_name && (e.push("/img/case/front_color_preview_" + c.type_id + ".jpg"), f.push({
            img: "/img/case/front_color_preview_" + c.type_id + ".jpg",
            option: "slider"
        }), e.push("/img/case/side_color_preview_" + c.type_id + ".jpg"), f.push({
            img: "/img/case/side_color_preview_" + c.type_id + ".jpg",
            option: "slider"
        })),
        a(e, f),
        null
    },
    toggleLike: function(a, b) {
        var c = this.get("liked"),
        d = this;
        $.ajax({
            url: "/controllers/LikeArtwork.php",
            method: "GET",
            data: {
                fn: c ? "unlike": "like",
                subject_id: this.get("artworkId"),
                allowGuestUser: "Y"
            },
            success: function(e) {
                var f = JSON.parse(e);
                f.success && d.set("liked", !c),
                $.proxy(a, b)(f)
            }
        })
    },
    toggleEnterChallenge: function() {
        var a = this.get("canEnterChallenge");
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "controllers/Artwork.php",
            method: "POST",
            data: {
                fn: "toggleSellDesign",
                id: this.get("artworkId"),
                toggle: a ? 1 : 0
            },
            success: $.proxy(function(a, b) {
                1 == b ? (this.set("canEnterChallenge", !a), this.trigger("change:canEnterChallenge")) : showErrorMessage(__("Cannot enter challenge"))
            },
            this, a)
        })
    },
    updateSoldOutStatus: function() {
        var a = this.get("currentItem"),
        b = !1;
        if ("true" === ConstantsManager.CHECKOUT_DISABLE_WOOD_CODE) {
            var c = ConstantsManager.ITEM_OPTION_TYPE_WOOD.split(","); - 1 != c.indexOf(a.type_id) && (b = !0)
        } ! a || b ? this.set("isSoldOut", !0) : this.set("isSoldOut", !1)
    }
}),
AddToCartButton = Backbone.View.extend({
    events: {
        click: "addToCartClicked"
    },
    initialize: function() {
        this.model.on("change:isSoldOut", this.updateSoldOutStatus, this)
    },
    addToCartClicked: function() {
        if (this.model.get("isSoldOut")) return ! 1;
        this.model.get("currentProduct") ? 4 == this.model.get("currentProduct").id: !1;
        return cartModel.addToCart(this.model.get("artworkId"), this.model.get("currentItem") ? parseFloat(this.model.get("currentItem").base_price) + parseFloat(this.model.get("currentItem").additional_cost) : parseFloat(this.model.getDefaultItem().base_price) + parseFloat(this.model.getDefaultItem().additional_cost), this.model.get("currentItem") ? this.model.get("currentItem").type_id: this.model.getDefaultItem().type_id, 1, this.model.get("currentDevice") ? this.model.get("currentDevice").short_name: this.model.get("artworkDevice"), !1),
        showSuccessMessage(__("Item is added to cart")),
        !1
    },
    updateSoldOutStatus: function() {
        return this.model.get("isSoldOut") ? (this.$el.addClass("disabled"), this.$(".add-to-cart-text").text("Sold Out")) : (this.$el.removeClass("disabled"), this.$(".add-to-cart-text").text("Add to Cart")),
        !1
    }
}),
AddToFavoriteButton = Backbone.View.extend({
    events: {
        click: "likeClicked"
    },
    initialize: function() {
        this.model.on("change:liked", this.render, this)
    },
    likeClicked: function() {
        return this.model.toggleLike(function(a) {
            a.success ? this.$(".like-count").html(a.artworkLikeCount) : showErrorMessage(a.errorMessage)
        },
        this),
        !1
    },
    render: function() {
        var a = this.model.get("liked");
        a ? (this.$el.addClass("border-btn-main-color"), this.$el.removeClass("border-btn-third-color"), this.$(".text-extra").attr("data-icon", "")) : (this.$el.removeClass("border-btn-main-color"), this.$el.addClass("border-btn-third-color"), this.$(".text-extra").attr("data-icon", ""))
    }
}),
ArtworkLikeModal = Backbone.Marionette.ItemView.extend({
    template: "#template-artwork-liked-user-modal",
    events: {
        click: "close"
    },
    initialize: function() {},
    close: function() {
        return this.$el.html(""),
        !1
    },
    render: function() {
        this.$el.html(Mustache.render($(this.template).html(), {
            likedUserList: Server.likedUserList,
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        }))
    }
}),
CaseDescription = Backbone.View.extend({
    initialize: function() {
        this.model.on("change:currentItemList", this.render, this)
    },
    render: function() {
        this.$el.html(this.model.getCaseDescription())
    }
}),
CaseTypeSelector = Backbone.View.extend({
    template: "#template-details-case-list",
    events: {
        "click .case-option-btn": "optionChanged"
    },
    initialize: function(a) {
        this.model.on("change:caseList", this.render, this),
        this.model.on("change:currentProduct", this.render, this),
        this.sliderView = a.sliderView
    },
    render: function() {
        var a = this.model.get("caseList"),
        b = this.model.get("currentProduct"),
        c = [],
        d = !1;
        a && $.each(a,
        function(a, e) {
            b && b.id == e.id ? ("bezel-case-backplate" == e.short_name && (d = !0), e.selected = !0) : e.selected = !1,
            c.push(e)
        }),
        this.$el.html(Mustache.render($(this.template).html(), {
            shouldShowCaseList: c.length > 1,
            currentProduct: b,
            caseList: c,
            isSelectingBlackplate: d,
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        }))
    },
    optionChanged: function(a) {
        var b = $(a.currentTarget).attr("data-id");
        return this.model.setCurrentProductById(b),
        !1
    }
}),
VoteButton = Backbone.Marionette.ItemView.extend({
    template: "#template-details-view-challenge-vote-button",
    events: {
        "click #vote-btn": "voteButtonClicked"
    },
    initialize: function() {
        this.model.on("change:voted", this.render, this),
        this.model.on("change:voteCount", this.render, this)
    },
    render: function() {
        this.model.attributes.__ = __m,
        this.$el.html(Mustache.render($(this.template).html(), this.model.attributes))
    },
    voteButtonClicked: function() {
        return Server.isLogin ? (this.model.get("voted") ? this.model.unvote() : this.model.vote(), !1) : (window.location.href = "/login?redirect=" + encodeURIComponent(window.location.href), !1)
    }
}),
EditTagModule = Backbone.View.extend({
    editMode: !1,
    events: {
        "click #edit-btn": "editButtonClicked",
        "click #done-btn": "doneButtonClicked",
        "click #cancel-btn": "cancelButtonClicked",
        "click .tag-btn": "tagButtonClicked"
    },
    editButtonClicked: function() {
        return this.editMode = !0,
        this.$(".tag-btn.tagged .tiny-tag").addClass("active"),
        this.$(".tag-btn").removeClass("hide"),
        this.$("#edit-btn").addClass("hide"),
        this.$("#done-btn").removeClass("hide"),
        this.$("#cancel-btn").removeClass("hide"),
        !1
    },
    doneButtonClicked: function() {
        var a = this,
        b = this.$(".tag-btn .tiny-tag.active");
        if (b.length > 3) return showErrorMessage(__("Please choose no more than 3 categories")),
        !1;
        var c = [];
        return b.each(function(a, b) {
            c.push($(b).attr("data-id"))
        }),
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "controllers/Artwork.php",
            method: "POST",
            data: {
                fn: "updateArtworkTagList",
                id: a.model.get("artworkId"),
                tag_list: c.join(",")
            },
            success: function(b) {
                1 == b ? (a.$(".tag-btn").removeClass("tagged"), a.$(".tag-btn .tiny-tag.active").parents(".tag-btn").addClass("tagged"), a.cancelButtonClicked()) : showErrorMessage(__("Cannot save"))
            }
        }),
        !1
    },
    cancelButtonClicked: function() {
        return this.editMode = !1,
        this.$(".tag-btn .tiny-tag").removeClass("active"),
        this.$(".tag-btn:not(.tagged)").addClass("hide"),
        this.$("#edit-btn").removeClass("hide"),
        this.$("#done-btn").addClass("hide"),
        this.$("#cancel-btn").addClass("hide"),
        !1
    },
    tagButtonClicked: function(a) {
        return this.editMode ? ($(a.currentTarget).find(".tiny-tag").toggleClass("active"), !1) : void 0
    }
}),
EditTitleModule = Backbone.View.extend({
    events: {
        "click #edit-btn": "editButtonClicked",
        "click #done-btn": "editDone",
        "click #cancel-btn": "editCancel",
        "keyup #artwork-name-edit": "dectectEnterPressed"
    },
    editButtonClicked: function() {
        return this.$(".display-mode").addClass("hide"),
        this.$(".edit-mode").removeClass("hide"),
        this.$("#artwork-name-edit").focus(),
        !1
    },
    editDone: function() {
        var a = this,
        b = this.$("#artwork-name-edit").val();
        return $.ajax({
            url: "/controllers/Artwork.php",
            method: "POST",
            data: {
                fn: "updateArtworkName",
                id: this.model.get("artworkId"),
                name: b,
                json: "Y"
            },
            success: function(c) {
                var c = JSON.parse(c);
                c.success ? (a.$("#artwork-name-display").html(b), a.$(".display-mode").removeClass("hide"), a.$(".edit-mode").addClass("hide"), window.history.replaceState(null, null, "/product/" + c.newArtworkUrl), a.$("#artwork-name-edit").blur()) : showErrorMessage(__("Invalid title or title already used"))
            }
        }),
        !1
    },
    editCancel: function() {
        var a = this.$("#artwork-name-display").html();
        return this.$("#artwork-name-edit").val(a),
        this.$(".display-mode").removeClass("hide"),
        this.$(".edit-mode").addClass("hide"),
        this.$("#artwork-name-edit").blur(),
        !1
    },
    dectectEnterPressed: function(a) {
        13 == a.keyCode ? this.editDone() : 27 == a.keyCode && this.editCancel()
    }
}),
EnterChallengeButton = Backbone.View.extend({
    events: {
        click: "enterChallengeClicked"
    },
    initialize: function() {
        this.model.on("change:canEnterChallenge", this.render, this)
    },
    render: function() {
        this.loading = !1;
        var a = this.model.get("canEnterChallenge");
        a ? (this.$el.removeClass("border-btn-main-color"), this.$el.addClass("border-btn-third-color")) : (this.$el.addClass("border-btn-main-color"), this.$el.removeClass("border-btn-third-color"))
    },
    enterChallengeClicked: function() {
        return this.loading || (this.loading = !0, this.model.toggleEnterChallenge()),
        !1
    }
}),
ItemSelector = Backbone.View.extend({
    events: {
        "click li a": "colorChanged"
    },
    initialize: function(a) {
        this.model.on("change:currentItem", this.render, this),
        this.sliderView = a.sliderView
    },
    render: function() {
        var a = this.model.getItemOptionListWithSelectState();
        a = this.getRenderItemOptionList(a);
        var b = this.model.get("currentItem"),
        c = $("#template-details-color-list").html(),
        d = Mustache.render(c, {
            itemList: a,
            currentItemOption: b,
            shouldShowColorList: a && a.length > 1,
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        });
        this.$el.html(d)
    },
    getRenderItemOptionList: function(a) {
        for (index in a) {
            var b = a[index].item_type;
            if ("brw" == a[index].system_item_type) var b = "Black-Red-White";
            else if ("ccw" == a[index].system_item_type) var b = "Cyan-Cyan-White";
            else if ("bbw" == a[index].system_item_type) var b = "Black-Black-White";
            else if ("www" == a[index].system_item_type) var b = "White-White-White";
            switch (b = b.split("-"), a[index].singleColor = !1, a[index].bicolor = !1, a[index].tricolor = !1, b.length) {
            case 3:
                a[index].colorClass3 = "transparent" == b[2].toLowerCase() ? "transparent": "",
                a[index].cssColor3 = b[2].toLowerCase();
            case 2:
                a[index].colorClass2 = "transparent" == b[1].toLowerCase() ? "transparent": "",
                a[index].cssColor2 = b[1].toLowerCase();
            case 1:
                a[index].colorClass1 = "transparent" == b[0].toLowerCase() ? "transparent": "",
                a[index].cssColor1 = b[0].toLowerCase()
            }
            switch (b.length) {
            case 1:
                a[index].singleColor = !0;
                break;
            case 2:
                a[index].bicolor = !0;
                break;
            case 3:
                a[index].tricolor = !0
            }
        }
        return a
    },
    colorChanged: function(a) {
        this.$("li a").removeClass("selected");
        var b = $(a.currentTarget);
        return b.addClass("selected"),
        this.model.setCurrentItemByItemOptionId(b.attr("data-id")),
        this.sliderView.sliderMove(1),
        !1
    }
}),
PhoneSelector = Backbone.View.extend({
    $phoneButtonList: null,
    $phoneList: null,
    $phoneListLi: null,
    $moreButton: null,
    events: {
        "change #case-type": "phoneChanged"
    },
    initialize: function(a) {
        this.model.on("change:currentDevice", this.render, this),
        this.sliderView = a.sliderView
    },
    phoneChanged: function() {
        var a = this.$(".case-type-option:selected").val();
        this.model.setCurrentDeviceByShortname(a),
        this.sliderView.sliderMove(0)
    },
    render: function() {
        this.model.off("change:currentDevice", this.render, this);
        var a = (this.model.get("currentDevice"), $("#template-details-device-list").html()),
        b = this.model.getDeviceListWithSelectState(),
        c = Mustache.render(a, {
            deviceList: b,
            shouldShowDeviceList: Server.isAdaptive,
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        });
        this.$el.html(c),
        this.$("select").length > 0 && (this.$("select")[0].disabled = !1)
    }
}),
PriceView = Backbone.View.extend({
    initialize: function() {
        this.model.on("change:currentItem", this.render, this),
        this.model.on("change:currentItemList", this.render, this)
    },
    render: function() {
        this.$el.html(this.model.getPrice() == this.model.getOriginalPrice() ? "$<span itemprop='price'>" + this.model.getPrice() + "</span>": "$<span itemprop='price'>" + this.model.getPrice() + "</span> <span class='ml1 inline line-through text-error'>$" + this.model.getOriginalPrice() + "</span>")
    }
}),
ShowcaseView = Backbone.View.extend({
    imagePerPage: 5,
    page: 1,
    events: {
        "click .prev-btn": "prevButtonClicked",
        "click .next-btn": "nextButtonClicked"
    },
    initialize: function() {
        this.page = 1,
        $(".details__section--users-picture").removeClass("hide"),
        $(".details__cell--pics:not(:first-child) img").hide(),
        this.render()
    },
    render: function() {
        $(".current-page").text(this.page),
        $(".total-page").text(this.model.getTotalPages(this.imagePerPage));
        var a = this.model.getPageContent(this.page, this.imagePerPage),
        b = 0,
        c = a.length,
        d = function() {
            b == c && $(".details__cell--pics:not(:first-child) img").each(function(b, c) {
                setTimeout($.proxy(function(b, c) {
                    $(c).parent().parent().find(".spinner-wrap").addClass("hide"),
                    $(c).fadeOut(400,
                    function() {
                        b < a.length && (c.src = a[b].standard_src, $(c).parent().attr("href", a[b].link), $(c).fadeIn())
                    })
                },
                window, b, c), 100 * b)
            })
        };
        $(".details__cell--pics:not(:first-child) .spinner-wrap").removeClass("hide");
        for (var e = 0; c > e; e++) {
            var f = new Image;
            f.onload = function() {
                b++,
                d()
            },
            f.src = a[e].standard_src
        }
    },
    prevButtonClicked: function() {
        return this.model.hasPrevPage(this.page, this.imagePerPage) && (this.page--, this.render()),
        !1
    },
    nextButtonClicked: function() {
        return this.model.hasNextPage(this.page, this.imagePerPage) && (this.page++, this.render()),
        !1
    }
}),
SliderView = Backbone.View.extend({
    $sliderChildren: null,
    $pagination: null,
    $paginationButtons: null,
    $paginationChildren: null,
    $artworkImage: null,
    $artworkThumb: null,
    $caseImage: null,
    $caseImageLi: null,
    $caseThumb: null,
    $caseThumbLi: null,
    $slider: null,
    currentSlide: 0,
    events: {
        "click .pagination li a": "paginationClicked"
    },
    initialize: function() {
        this.$(".slider ul").width(100 * this.$(".slider ul li").length + "%"),
        $(this.$(".pagination li")[this.currentSlide]).addClass("active"),
        this.$("#artwork-image img").removeClass("hide"),
        this.$(".case-image img").removeClass("hide"),
        this.$(".case-thumb img").removeClass("hide"),
        this.$(".spinner-wrap").addClass("hide"),
        this.model.on("change:currentDevice", this.updateDevice, this),
        this.model.on("change:currentItemList", this.updateCaseImage, this),
        this.model.on("change:currentItem", this.updateCaseImage, this),
        this.model.on("change:currentItem", this.updateDevice, this),
        this.model.on("change:currentProduct", this.updateDevice, this),
        this.updateDevice(),
        this.updateCaseImage()
    },
    paginationClicked: function(a) {
        var b = a.currentTarget,
        c = $.inArray(b, this.$(".pagination li a")),
        d = $(b).attr("video-url");
        if (d) {
            var e = new VideoModalView({
                el: $("#video-modal")[0],
                url: d
            });
            e.render()
        } else this.sliderMove(c);
        return ! 1
    },
    sliderMove: function(a) {
        this.$(".slider ul").css({
            marginLeft: -(100 * a) + "%"
        }),
        this.currentSlide = a,
        this.$(".pagination li").removeClass("active"),
        $(this.$(".pagination li")[this.currentSlide]).addClass("active")
    },
    preload: function(a, b) {
        var c = a.siblings(".spinner-wrap"),
        d = new Image;
        c.removeClass("hide"),
        d.onload = function() {
            a.siblings(".placeholder-img").remove(),
            a.removeClass("absolute"),
            a.attr("src", b),
            c.addClass("hide"),
            a.removeClass("hide")
        },
        d.src = b
    },
    updateDevice: function() {
        var a = this.model.getCurrentArtworkImage("L"),
        b = this.model.getCurrentArtworkImage("S");
        this.preload(this.$("#artwork-image img"), a),
        this.preload(this.$("#artwork-thumb img"), b),
        this.sliderMove(0)
    },
    updateCaseImage: function() {
        var a = this;
        this.$(".slider ul").width(100 * this.$(".slider ul li").length + "%"),
        this.model.getCurrentCaseImages(function(b, c) {
            var d = b.length,
            e = a.$(".case-image img").length;
            e > d ? _.times(e - d,
            function() {
                $("#artwork-list li:last-child").remove()
            },
            a) : d > e && _.times(d - e,
            function() {
                var a = Mustache.render($("#template-details-case-image").html(), {
                    __: __m,
                    getResourceUrl: function() {
                        return function(a) {
                            return urlResourceLocator.getUrl(a)
                        }
                    }
                });
                $("#artwork-list").append(a)
            },
            a),
            $.each(b,
            function(c) {
                a.preload($(a.$(".case-image img")[c]), b[c])
            });
            var f = c.length,
            g = a.$(".case-thumb img").length;
            g > f ? _.times(g - f,
            function() {
                $("#thumb-list li:last-child").remove()
            },
            a) : f > g && _.times(f - g,
            function() {
                var a = Mustache.render($("#template-details-case-thumb").html(), {
                    __: __m,
                    getResourceUrl: function() {
                        return function(a) {
                            return urlResourceLocator.getUrl(a)
                        }
                    }
                });
                $("#thumb-list").append(a)
            },
            a),
            $.each(c,
            function(b, d) {
                a.preload($(a.$(".case-thumb img")[b]), c[b].img),
                "video" == d.option && $(a.$(".case-thumb a")[b]).attr("video-url", c[b].videoUrl),
                d.largeScreenOnly ? $(a.$(".case-thumb")[b]).addClass("xs-visibility-false") : $(a.$(".case-thumb")[b]).removeClass("xs-visibility-false")
            })
        })
    }
}),
SubscriptionModal = Backbone.Marionette.ItemView.extend({
    events: {
        click: "dismiss",
        "click .pricing-panel": "preventClick",
        "click .add-to-cart-btn": "addToCart"
    },
    initialize: function() {},
    show: function() {
        var a = $(window).height();
        this.$el.removeClass("hide"),
        $("html,body").css({
            height: a,
            overflow: "hidden"
        })
    },
    dismiss: function() {
        return this.$el.addClass("hide"),
        $("html,body").css({
            height: "inherit",
            overflow: "inherit"
        }),
        !1
    },
    preventClick: function(a) {
        return a.stopPropagation(),
        !1
    },
    addToCart: function(a) {
        var b = $(a.currentTarget),
        c = b.attr("data-tag");
        if (c) {
            if (b.hasClass("disabled")) return ! 1;
            cartModel.addSubscriptionToCart(c, !1),
            showSuccessMessage(__("Item is added to cart")),
            this.dismiss()
        } else window.location.href = "/my/cart";
        return ! 1
    }
});
MyApp = "undefined" != typeof MyApp ? MyApp: {},
MyApp.vent = "undefined" != typeof MyApp.vent ? MyApp.vent: _.extend({},
Backbone.Events);
var detailsPageState = null;
$(function() {
    $("#device-list select").length > 0 && ($("#device-list select")[0].disabled = !1),
    detailsPageState = new DetailsPageState({
        deviceList: Server.deviceList,
        caseList: Server.caseList,
        currentDevice: Server.selectedDevice,
        itemListMapping: Server.itemListMapping,
        deviceProductMapping: Server.deviceProductMapping,
        currentProduct: Server.currentProduct,
        currentItemList: Server.currentItemList,
        caseDescription: Server.caseDescription,
        artworkImage: Server.artworkImage,
        artworkThumbnail: Server.artworkThumbnail,
        artworkDevice: Server.artworkDevice,
        artworkId: Server.artworkId,
        liked: Server.liked,
        canEnterChallenge: Server.canEnterChallenge,
        plans: Server.plans,
        canSubscribe: Server.canSubscribe
    }),
    Server.selectedDevice && detailsPageState.setCurrentDeviceByShortname(Server.selectedDevice.short_name); {
        var a = new SliderView({
            el: $(".slider-view")[0],
            model: detailsPageState
        });
        new SubscriptionModal({
            el: $("#subscirption-modal")[0],
            model: detailsPageState
        })
    }
    new PhoneSelector({
        el: $("#device-list")[0],
        model: detailsPageState,
        sliderView: a
    }),
    new ItemSelector({
        el: $("#color-list")[0],
        model: detailsPageState,
        sliderView: a
    }),
    new CaseDescription({
        el: $("#case-desc")[0],
        model: detailsPageState
    }),
    new PriceView({
        el: $("#price")[0],
        model: detailsPageState
    });
    var b = new AddToCartButton({
        el: $("#add-to-cart-btn")[0],
        model: detailsPageState
    });
    new AddToFavoriteButton({
        el: $("#add-to-fav-btn")[0],
        model: detailsPageState
    }),
    new EnterChallengeButton({
        el: $("#enter-challenge-btn")[0],
        model: detailsPageState
    }),
    new CaseTypeSelector({
        el: $("#case-list")[0],
        model: detailsPageState,
        sliderView: a
    }),
    new EditTitleModule({
        el: $("#edit-title-module")[0],
        model: detailsPageState
    }),
    new EditTagModule({
        el: $("#edit-tag-module")[0],
        model: detailsPageState
    }),
    $(".artwork").each(function(a, b) {
        new ArtworkView({
            el: b,
            model: new ArtworkModel(Server.relatedArtworks[a])
        })
    }),
    $("#remove-btn").click(function() {
        $.ajax({
            url: "/controllers/Artwork.php",
            data: {
                fn: "delete",
                id: detailsPageState.get("artworkId")
            },
            success: function() {
                window.location = "/collections"
            }
        })
    }),
    $("#toggle-private").length > 0 && ($("#toggle-private")[0].disabled = !1),
    $("#toggle-private").change(function(a) {
        var b = $(a.currentTarget).is(":checked");
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "controllers/Artwork.php",
            method: "POST",
            data: {
                fn: "toggleIsPublic",
                id: detailsPageState.get("artworkId"),
                toggle: b ? 0 : 1
            },
            success: function(a) {
                0 == a && b && showErrorMessage(b ? __("Toggle to private was not successful") : __("Toggle to public was not successful"))
            }
        })
    }),
    $("#toggle-sell").length > 0 && ($("#toggle-sell")[0].disabled = !1),
    $("#toggle-sell").change(function(a) {
        var b = $(a.currentTarget).is(":checked");
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "controllers/Artwork.php",
            method: "POST",
            data: {
                fn: "toggleSellDesign",
                id: detailsPageState.get("artworkId"),
                sellType: ConstantsManager.ARTWORK_SELL_DESIGN_TYPE_ARTIST_COLLECTION,
                toggle: b ? 1 : 0,
                json: "Y"
            },
            success: function(c) {
                var d = JSON.parse(c);
                if (!d.success && b) showErrorMessage(__("Toggle sell design was not successful")),
                $(a.currentTarget)[0].checked = !b;
                else if (d.status == ConstantsManager.TOGGLE_SELL_DESIGN_SUCCESS_WITH_PENDING_APPROVE && b) {
                    var e = new MessageModalView({
                        heading: __("Awesome!"),
                        message: __("You'll get an email in 3 days once this design is available for sale."),
                        confirm: __("OK"),
                        el: $("#message-modal")[0]
                    });
                    e.render()
                }
            }
        })
    }); {
        var c = new ChallengeDetailsModel({
            voted: Server.voted,
            artworkId: Server.artworkId,
            baseVoteCount: Server.baseVoteCount
        });
        new VoteButton({
            model: c,
            el: $("#vote-btn-container")[0]
        })
    }
    $("#more-voted-user-btn").click(function() {
        return $("#more-voted-user-modal").removeClass("hide"),
        !1
    }),
    $("#more-liked-user-btn").click(function() {
        var a = new ArtworkLikeModal({
            el: $("#artwork-like-list")[0]
        });
        return a.render(),
        !1
    }),
    $(".close-btn").click(function() {
        return $("#more-voted-user-modal").addClass("hide"),
        $("#more-liked-user-modal").addClass("hide"),
        !1
    }),
    $("#notify-made").length > 0 && ($("#notify-made")[0].disabled = !1),
    $("#notify-made").change(function() {
        return $("#notify-made").is(":checked") ? Server.isLogin ? ($("#email-input-container").addClass("hide"), d(Server.artworkId)) : $("#email-input-container").removeClass("hide") : ($("#email-input-container").addClass("hide"), e(Server.artworkId)),
        !1
    }),
    $("#subscribe-email-submit").click(function() {
        return d(Server.artworkId, $("#subscribe-email-textfield").val()),
        $("#email-input-container").addClass("hide"),
        $("#notify-made").attr("disabled", 1),
        !1
    });
    var d = function(a, b) {
        var c = {
            fn: "subscribeArtwork",
            id: a
        };
        b && (c.email = b),
        $.ajax({
            url: "/controllers/Artwork.php",
            method: "POST",
            data: c,
            success: function(a) {
                a == ConstantsManager.ARTWORK_SUBSCRIPTION_SUCCESS || console.log("subscription failed")
            }
        })
    },
    e = function(a) {
        var b = {
            fn: "unsubscribeArtwork",
            id: a
        };
        $.ajax({
            url: "/controllers/Artwork.php",
            method: "POST",
            data: b,
            success: function(a) {
                a == ConstantsManager.ARTWORK_UNSUBSCRIPTION_SUCCESS || console.log("subscription failed")
            }
        })
    };
    $(".small-vote-btn").click(function(a) {
        var b = $(a.currentTarget),
        c = b.siblings(".small-unvote-btn");
        return b.addClass("hide"),
        c.removeClass("hide"),
        $.ajax({
            url: "/controllers/Artwork.php",
            method: "POST",
            data: {
                fn: "voteArtwork",
                id: b.attr("data-artwork-id"),
                type: "VOTE",
                score: 5
            },
            success: function(a) {
                a == ConstantsManager.CHALLENGE_NO_ACTIVE_CHALLENGE ? console.log("no active challenge") : a == ConstantsManager.CHALLENGE_VOTE_PERIOD_NOT_STARTED ? console.log("challenge not started") : a == ConstantsManager.CHALLENGE_VOTE_PERIOD_ENDED ? console.log("challenge has finished") : 0 == a && (console.log("vote failed"), b.removeClass("hide"), c.addClass("hide"))
            }
        }),
        !1
    }),
    $(".small-unvote-btn").click(function(a) {
        var b = $(a.currentTarget),
        c = b.siblings(".small-vote-btn");
        return b.addClass("hide"),
        c.removeClass("hide"),
        $.ajax({
            url: "/controllers/Artwork.php",
            method: "POST",
            data: {
                fn: "voteArtwork",
                id: b.attr("data-artwork-id"),
                type: "NONE",
                score: 5
            },
            success: function(a) {
                a == ConstantsManager.CHALLENGE_NO_ACTIVE_CHALLENGE ? console.log("no active challenge") : a == ConstantsManager.CHALLENGE_VOTE_PERIOD_NOT_STARTED ? console.log("challenge not started") : a == ConstantsManager.CHALLENGE_VOTE_PERIOD_ENDED ? console.log("challenge has finished") : 0 == a && (console.log("unvote failed"), b.removeClass("hide"), c.addClass("hide"))
            }
        }),
        !1
    }),
    Server.selectedDevice && detailsPageState.setCurrentDeviceByShortname(Server.selectedDevice.short_name);
    var f = new ShowcaseModel({
        showcases: Server.showcases
    });
    if (Server.showcases && Server.showcases.length > 0) {
        new ShowcaseView({
            model: f,
            el: $(".details__section--users-picture")[0]
        })
    }
    $(".slider ul").width(100 * $(".slider ul li").length + "%"),
    detailsPageState.updateSoldOutStatus(),
    b.updateSoldOutStatus()
});