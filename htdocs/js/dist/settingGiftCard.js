/*! casetagram 2014-11-05 */
var GiftCardPreviewModal = Backbone.View.extend({
    template: "#template-gift-card-preview-modal",
    events: {
        "click .close-btn": "closeModal",
        "click #add-to-cart-btn": "addToCartClicked"
    },
    initialize: function(a) {
        this.price = a.price,
        this.preview = a.preview,
        this.cardType = a.cardType,
        this.recipientName = a.recipientName,
        this.recipientEmail = a.recipientEmail,
        this.message = a.message,
        this.senderName = a.senderName,
        this.senderEmail = a.senderEmail,
        this.utf = a.utf
    },
    render: function() {
        this.__ = __m,
        this.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render($(this.template).html(), this)),
        $("html,body").css({
            overflow: "hidden",
            height: "100%"
        })
    },
    closeModal: function() {
        this.$el.html(""),
        $("html,body").css({
            overflow: "inherit",
            height: "auto"
        })
    },
    addToCartClicked: function() {
        return this.$("#add-to-cart-form").submit(),
        !1
    }
});
$(function() {
    $("#your-name").keyup(function(a) {
        return 13 == a.keyCode ? void $("#preview-btn").click() : void 0
    }),
    $("#card-amount").change(function() {
        return $("#card_type>option").each(function(a, b) {
            b.selected = !1
        }),
        $("#card_type>option")[0].selected = !0,
        a(),
        !1
    }),
    $("#card_type").change(function() {
        return $("#card-amount>option").each(function(a, b) {
            b.selected = !1
        }),
        $("#card-amount>option")[0].selected = !0,
        a(),
        !1
    });
    var a = function() {
        var a = b();
        0 == a ? ($("#price-preview-int").html(""), $("#price-preview-float").html("")) : ($("#price-preview-int").html("<span class='exposant inline vertical-top'>$</span>" + parseInt(a)), $("#price-preview-float").html("." + ("" + parseFloat(a).toFixed(2)).slice( - 2)))
    },
    b = function() {
        var a = parseFloat($("#card-amount>option:selected").attr("data-price")),
        b = parseFloat($("#card_type>option:selected").attr("data-price"));
        return a > b ? a: b
    };
    $("#add-to-cart-btn").click(function() {
        if (0 == parseFloat($("#card-amount>option:selected").attr("data-price")) && 0 == parseFloat($("#card_type>option:selected").attr("data-price"))) return showErrorMessage(__("Please choose amount")),
        $("#card-amount").focus(),
        !1;
        if (0 != parseFloat($("#card-amount>option:selected").attr("data-price")) && 0 != parseFloat($("#card_type>option:selected").attr("data-price"))) return showErrorMessage(__("Please choose only one amount")),
        $("#card_type").focus(),
        !1;
        var a = $("#recipient-name"),
        c = $("#recipient-email"),
        d = $("#confirm-email"),
        e = $("#recipient-message"),
        f = $("#your-name");
        return "" == a.val() ? (showErrorMessage(__("Invalid Name")), a.focus(), !1) : validateEmail(c.val()) ? d.val() != c.val() ? (showErrorMessage(__("Email address does not match")), d.focus(), !1) : "" == e.val() ? (showErrorMessage(__("Please enter message")), e.focus(), !1) : "" == f.val() ? (showErrorMessage(__("Invalid Name")), f.focus(), !1) : ($.ajax({
            url: "/gift-card",
            method: "POST",
            data: {
                checkout: "Y",
                unit_price: b(),
                recipient_name: a.val(),
                recipient_email: c.val(),
                message: e.val(),
                sender_name: f.val(),
                utf: new RegExp(/[\u00A1-\uFFFF]/).test(e.val()) ? 1 : 0
            },
            success: function() {
                window.location.href = "/my/cart"
            }
        }), !1) : (showErrorMessage(__("Invalid email")), c.focus(), !1)
    }),
    Server.presetCardValue && ($("#card-amount option").each(function() {
        $(this)[0].selected = $(this).attr("data-price") == Server.presetCardValue ? !0 : !1
    }), a()),
    Server.presetDeviceType && ($("#card_type option").each(function() {
        $(this)[0].selected = $(this).attr("value") == Server.presetDeviceType ? !0 : !1
    }), a())
});