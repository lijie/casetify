var CheckoutCommonModel = Backbone.Model.extend({
    initialize: function() {
        this.on("change:cartItems", this.updateProductTotal, this),
        this.on("change:cartItems", this.updateShouldShowSubscriptionToggleButton, this),
        this.on("change:deliveryOption", this.updateShippingTotal, this),
        this.on("change:cartItems", this.updateSubscriptionDiscount, this),
        this.on("change:isUsingSubscriptionToken", this.updateSubscriptionDiscount, this),
        this.on("change:subscriptionDiscount", this.updateVoucherDiscount, this),
        this.on("change:shippingTotal", this.updateVoucherDiscount, this),
        this.on("change:productTotal", this.updateVoucherDiscount, this),
        this.on("change:voucher", this.updateVoucherDiscount, this),
        this.on("change:productTotal", this.updateEarningDiscount, this),
        this.on("change:shippingTotal", this.updateEarningDiscount, this),
        this.on("change:subscriptionDiscount", this.updateEarningDiscount, this),
        this.on("change:realVoucherDiscount", this.updateEarningDiscount, this),
        this.on("change:isUsingUserCredit", this.updateEarningDiscount, this),
        this.on("change:productTotal", this.updateTotal, this),
        this.on("change:shippingTotal", this.updateTotal, this),
        this.on("change:subscriptionDiscount", this.updateTotal, this),
        this.on("change:realVoucherDiscount", this.updateTotal, this),
        this.on("change:earningDiscount", this.updateTotal, this),
        this.on("change:cartItems", this.updateDiscountButton, this),
        this.get("voucher") && this.set("showVoucherInput", !0),
        this.updateProductTotal()
    },
    updateProductTotal: function() {
        var a = 0;
        this.get("cartItems") && $.each(this.get("cartItems"),
        function(b, c) {
            a += c.quantity * c.unit_price
        }),
        this.set("productTotal", a)
    },
    updateShippingTotal: function() {
        var a = this.get("deliveryOption");
        a ? this.set("shippingTotal", a.shippingCost) : this.set("shippingTotal", 0)
    },
    updateShouldShowSubscriptionToggleButton: function() {
        var a = this;
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "my/cart",
            method: "POST",
            data: {
                ajaxCall: "Y",
                apply_cart_item_discount: "Y"
            },
            success: function(b) {
                var c = JSON.parse(b);
                c && c.cart_summary ? a.set("maxSubscriptionDiscount", -c.cart_summary.cart_item_discount) : a.set("maxSubscriptionDiscount", 0),
                c && c.shouldHideToken ? a.set("shouldShowSubscriptionTokenButton", !1) : a.set("shouldShowSubscriptionTokenButton", !0)
            }
        })
    },
    updateSubscriptionDiscount: function() {
        var a = this.get("isUsingSubscriptionToken"),
        b = this;
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "my/cart",
            method: "POST",
            data: {
                ajaxCall: "Y",
                apply_cart_item_discount: a ? "Y": "N"
            },
            success: function(a) {
                var c = JSON.parse(a);
                c && c.cart_summary ? (b.set("subscriptionDiscount", -c.cart_summary.cart_item_discount), discount = c.cart_summary.cart_item_discount ? parseFloat(c.cart_summary.cart_item_discount) : 0, b.set("productTotal", parseFloat(c.cart_summary.subtotal) - discount)) : (b.set("subscriptionDiscount", 0), b.updateProductTotal()),
                c && c.shouldHideToken ? b.set("shouldShowSubscriptionTokenButton", !1) : b.set("shouldShowSubscriptionTokenButton", !0)
            }
        })
    },
    cleanVoucher: function(a) {
        return a.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    },
    updateVoucherDiscount: function() {
        var a = this.get("voucher");
        a = this.cleanVoucher(a);
        var b = this;
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "scripts/getVoucherValue.php",
            data: {
                voucher: a,
                base_price: b.get("isUsingSubscriptionToken") ? parseFloat(b.get("productTotal")) - parseFloat(b.get("subscriptionDiscount")) : parseFloat(b.get("productTotal")),
                delivery_cost: parseFloat(b.get("shippingTotal")),
                save_voucher: "yes",
                json: "Y"
            },
            success: function(a) {
                var c = JSON.parse(a);
                c.isDiscountShippingCode ? b.set("realVoucherDiscount", parseFloat(parseFloat(c.discount) > parseFloat(b.get("shippingTotal")) ? b.get("shippingTotal") : c.discount)) : b.get("isUsingSubscriptionToken") ? b.set("realVoucherDiscount", parseFloat(c.discount) > parseFloat(b.get("productTotal")) - parseFloat(b.get("subscriptionDiscount")) ? parseFloat(b.get("productTotal")) - parseFloat(b.get("subscriptionDiscount")) : parseFloat(c.discount)) : b.set("realVoucherDiscount", parseFloat(parseFloat(c.discount) > parseFloat(b.get("productTotal")) ? b.get("productTotal") : c.discount)),
                b.set("voucherDiscount", c.discount)
            }
        })
    },
    updateEarningDiscount: function() {
        var a = parseFloat(this.get("usableCredit")),
        b = this.get("isUsingUserCredit");
        if (this.get("isUsingSubscriptionToken")) var c = parseFloat(this.get("subscriptionDiscount"));
        else var c = 0;
        var d = this.get("realVoucherDiscount") ? parseFloat(this.get("realVoucherDiscount")) : 0,
        e = parseFloat(this.get("productTotal")) + parseFloat(this.get("shippingTotal")) - c - d;
        b ? this.set("earningDiscount", e > a ? a: e) : this.set("earningDiscount", 0)
    },
    updateTotal: function() {
        var a = this.get("realVoucherDiscount") ? parseFloat(this.get("realVoucherDiscount")) : 0;
        if (this.get("isUsingSubscriptionToken")) var b = parseFloat(this.get("subscriptionDiscount"));
        else var b = 0;
        var c = parseFloat(this.get("productTotal")) + parseFloat(this.get("shippingTotal")) - b - a;
        0 > c && (c = 0),
        c -= parseFloat(this.get("earningDiscount")),
        this.set("total", c)
    },
    applyVoucherCode: function(a) {
        "string" == typeof a ? this.set("voucher", a) : a = this.get("voucher")
    },
    setDeliveryOption: function(a) {
        this.set("deliveryOption", a)
    },
    updateDiscountButton: function() {
        var a = this;
        $.ajax({
            url: "/my/cart",
            data: {
                ajaxCall: "Y",
                action: "checkPriceControlOnly"
            },
            success: function(b) {
                a.set("hasPriceControlDiscountItemOnly", 1 == b)
            }
        })
    },
    getSummaryRenderData: function() {
        var a = {};
        a.cartItems = this.get("cartItems"),
        a.productTotal = parseFloat(parseFloat(this.get("productTotal")) - parseFloat(this.get("subscriptionDiscount"))).toFixed(2);
        var b = this.get("shippingTotal");
        return a.shouldHideShipping = this.get("shouldHideShipping"),
        a.isShippingFree = 0 == b,
        a.shippingTotal = parseFloat(b).toFixed(2),
        a.isSubscribed = this.get("isSubscribed"),
        a.subscriptionTokenCount = parseInt(this.get("subscriptionTokenCount")),
        a.isUsingSubscriptionToken = this.get("isUsingSubscriptionToken"),
        a.shouldShowSubscriptionTokenButton = this.get("isSubscribed") && 0 != this.get("maxSubscriptionDiscount") && this.get("shouldShowSubscriptionTokenButton"),
        a.subscriptionDiscount = parseFloat(this.get("subscriptionDiscount")).toFixed(2),
        a.voucher = this.get("voucher"),
        a.voucherDiscount = parseFloat(this.get("voucherDiscount")).toFixed(2),
        a.hasEarning = this.get("hasEarning"),
        a.isUsingUserCredit = this.get("isUsingUserCredit"),
        a.earningDiscount = parseFloat(this.get("earningDiscount")).toFixed(2),
        a.total = parseFloat(this.get("total")).toFixed(2),
        a.hasPriceControlDiscountItemOnly = this.get("hasPriceControlDiscountItemOnly"),
        a
    }
});
$.ready(function() {
    CheckoutCommonModel.updateVoucherDiscount()
}),
$().ready(function() {
    $(".monthly-checkout-box #vip-checkbox").length && ($(".monthly-checkout-box #vip-checkbox")[0].disabled = !1);
    var a = function() {
        $(".monthly-checkout-box").addClass("box").removeClass("box-unchecked"),
        $(".subscription-desc-text").html(__("You are subscribing to Casetify Monthly")),
        cartModel.addSubscriptionToCart(Server.subscriptionPlan, null, !1,
        function() {
            checkoutCommonModel && (checkoutCommonModel.set("isSubscribed", !0), checkoutCommonModel.set("isUsingSubscriptionToken", !0), checkoutCommonModel.updateShouldShowSubscriptionToggleButton())
        })
    };
    $(".monthly-checkout-box #vip-checkbox").change(function() {
        var b = $(".monthly-checkout-box #vip-checkbox")[0].checked;
        b ? (setCookie("chooseMonthlyCheckbox", !0), a()) : (setCookie("chooseMonthlyCheckbox", !1), $(".monthly-checkout-box").addClass("box-unchecked").removeClass("box"), $(".subscription-desc-text").html(__("Yes, subscribe me to Casetify Monthly")), cartModel.each(function(a) {
            a.get("system_item_tag") == Server.subscriptionPlan && cartModel.removeItem(a.get("id"))
        }), checkoutCommonModel && (checkoutCommonModel.set("isSubscribed", !1), checkoutCommonModel.set("isUsingSubscriptionToken", !1)))
    })
});
var CheckoutCommonSummaryView = Backbone.View.extend({
    template: "#template-checkout-summary",
    initialize: function() {
        this.model.on("change", this.render, this)
    },
    events: {
        "click #submit-btn": "voucherSubmit",
        "keypress #voucher-text": "voucherEnter",
        "change #toggle-token": "useTokenChanged",
        "change #toggle-credit": "useCreditChanged",
        "click .upgrade-btn": "upgradeButtonClicked",
        "click .got-promo-code a": "displayVoucher"
    },
    voucherEnter: function(a) {
        return 13 == a.keyCode ? (this.voucherSubmit(), !1) : void 0
    },
    voucherSubmit: function() {
        return this.model.applyVoucherCode(this.$("#voucher-text").val()),
        !1
    },
    useTokenChanged: function(a) {
        var b = $(a.currentTarget).is(":checked");
        this.model.set("isUsingSubscriptionToken", b)
    },
    useCreditChanged: function(a) {
        var b = $(a.currentTarget).is(":checked");
        this.model.set("isUsingUserCredit", b)
    },
    upgradeButtonClicked: function() {
        return this.model.checkoutShippingPageState && (this.model.checkoutShippingPageState.upgradeShipping(), $("html,body").animate({
            scrollTop: $("#delivery-list").offset().top
        },
        "slow")),
        !1
    },
    displayVoucher: function() {
        return this.$(".got-promo-code a").addClass("hide"),
        this.$("#voucher-code-input").removeClass("hide"),
        this.model.set("showVoucherInput", !0),
        !1
    },
    render: function() {
        this.$el.html(Mustache.render($(this.template).html(), {
            checkoutSummaryData: this.model.getSummaryRenderData(),
            shouldShowUpgradeMessage: this.model.checkoutShippingPageState && this.model.get("shouldShowUpgradeMessage") && ConstantsManager.SHOULD_SHOW_DELIVERY_UPGRADE,
            showVoucherInput: this.model.get("showVoucherInput") || this.model.get("voucher"),
            upgradeMessage: Server.upgradeMessage,
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        })),
        this.$("#toggle-token").length > 0 && (this.$("#toggle-token")[0].disabled = !1),
        this.$("#toggle-credit").length > 0 && (this.$("#toggle-credit")[0].disabled = !1)
    }
}),
CartItemView = Backbone.Marionette.ItemView.extend({
    $quantityButton: null,
    template: "#template-cart-item-view",
    tagName: "li",
    className: "row pt2 pb2 border-bottom cart-item",
    events: {
        "change .quantity-btn": "quantityChanged",
        "click .remove-btn": "removeClicked"
    },
    initialize: function() {
        this.model.on("remove", this.removeSelf, this)
    },
    quantityChanged: function() {
        var a = this.$(".quantity-btn").val();
        this.model.setQuantity(a)
    },
    removeClicked: function() {
        return this.model.remove(),
        !1
    },
    removeSelf: function() {
        this.model.off("remove", this.removeSelf, this),
        this.remove()
    },
    render: function() {
        this.model.attributes.__ = __m,
        this.model.attributes.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.model.attributes.shouldHide ? (this.$el.html(Mustache.render($("#template-cart-empty-view").html(), {
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getResourceUrl(a)
                }
            }
        })), this.model.collection.length > 1 && this.$el.hide()) : this.$el.html(Mustache.render($(this.template).html(), this.model.attributes))
    }
}),
CartEmptyView = Backbone.Marionette.ItemView.extend({
    template: "#template-cart-empty-view",
    tagName: "li",
    className: "row pt2 pb2 border-bottom cart-item",
    render: function() {
        this.$el.html(Mustache.render($(this.template).html(), {
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getResourceUrl(a)
                }
            }
        }))
    }
}),
CartCollectionView = Backbone.Marionette.CollectionView.extend({
    itemView: CartItemView,
    emptyView: CartEmptyView,
    tagName: "ul",
    className: "shipping-list reset-list"
});
MyApp = "undefined" != typeof MyApp ? MyApp: {},
MyApp.vent = "undefined" != typeof MyApp.vent ? MyApp.vent: _.extend({},
Backbone.Events);
var checkoutCommonModel = null;
$(function() {
    $(".quantity-btn").length > 0 && $(".quantity-btn").each(function(a, b) {
        b.disabled = !1
    }),
    $(".quantity-btn").change(function(a) {
        var b = $(a.currentTarget).val();
        b != parseInt(b) && $(a.currentTarget).val(1)
    }),
    $(".quantity-btn").bind("mousewheel",
    function() {
        this.blur()
    }),
    $("#toggle-token").length > 0 && ($("#toggle-token")[0].disabled = !1),
    $("#toggle-credit").length > 0 && ($("#toggle-credit")[0].disabled = !1);
    var a = new CartCollectionView({
        collection: cartModel
    }),
    b = new Backbone.Marionette.Application;
    b.addRegions({
        cartList: "#cart-container"
    }),
    b.cartList.show(a),
    checkoutCommonModel = new CheckoutCommonModel({
        cartItems: cartModel.toJSON(),
        productTotal: Server.checkoutSummaryData.productTotal,
        deliveryOption: Server.checkoutSummaryData.deliveryOption,
        shippingTotal: Server.checkoutSummaryData.shippingTotal,
        isSubscribed: Server.checkoutSummaryData.isSubscribed,
        shouldShowSubscriptionTokenButton: Server.checkoutSummaryData.shouldShowSubscriptionTokenButton,
        maxSubscriptionDiscount: Server.checkoutSummaryData.maxSubscriptionDiscount,
        subscriptionTokenCount: Server.checkoutSummaryData.subscriptionTokenCount,
        isUsingSubscriptionToken: Server.checkoutSummaryData.isUsingSubscriptionToken,
        subscriptionDiscount: Server.checkoutSummaryData.subscriptionDiscount,
        voucher: Server.checkoutSummaryData.voucher,
        realVoucherDiscount: Server.checkoutSummaryData.realVoucherDiscount,
        voucherDiscount: Server.checkoutSummaryData.voucherDiscount,
        hasEarning: Server.checkoutSummaryData.hasEarning,
        usableCredit: Server.checkoutSummaryData.usableCredit,
        isUsingUserCredit: Server.checkoutSummaryData.isUsingUserCredit,
        earningDiscount: Server.checkoutSummaryData.earningDiscount,
        total: Server.checkoutSummaryData.total,
        shouldHideShipping: !0
    }),
    cartModel.registerBackboneModelChange(function() {
        checkoutCommonModel.set("cartItems", cartModel.toJSON())
    });
    var c = new CheckoutCommonSummaryView({
        el: $("#cart-summary")[0],
        model: checkoutCommonModel
    });
    checkoutCommonModel.get("isSubscribed") && checkoutCommonModel.get("subscriptionTokenCount") > 0 && (checkoutCommonModel.set("isUsingSubscriptionToken", !0), $("#toggle-token").length > 0 && ($("#toggle-token")[0].checked = !0)),
    c.displayVoucher(),
    $(".add-to-cart-btn").click(function(a) {
        var b = $(a.currentTarget),
        c = b.attr("data-id");
        return cartModel.addSystemItem(c),
        !1
    })
});