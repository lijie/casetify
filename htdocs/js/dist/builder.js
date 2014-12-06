/*! casetagram 2014-11-05 */
function tutorial() {
    {
        var a = ($(".bulle-explain"), $(".exp-next"), $(".skip"));
        $("body").find(".bulle-explain")
    }
    $(".bulle-explain[data-position] .exp-next").click(function(a) {
        var b = $(a.currentTarget),
        c = b.parents("[data-position]"),
        d = c.attr("data-position"),
        e = parseInt(d) + 1,
        f = $(".bulle-explain[data-position=" + e + "]").length > 0;
        return c.addClass("hide"),
        f && $(".bulle-explain[data-position=" + e + "]").removeClass("hide"),
        !1
    }),
    $('.bulle-explain[data-position="1"]').removeClass("hide"),
    a.click(function() {
        return $(".bulle-explain").addClass("hide"),
        !1
    }),
    _gaq && _gaq.push(["_trackPageview", "/ga_builder_show_tuto"])
}
var BuilderPageState = Backbone.Model.extend({
    randomPool: [],
    initialize: function(a) {
        this.app = a.app,
        this.on("change:currentDevice", this.reloadProductList, this),
        this.on("change:currentProduct", this.reloadItemOptionList, this),
        this.on("change:currentDevice", this.reloadLayoutList, this),
        this.on("change:currentProduct", this.reloadLayoutList, this)
    },
    getRenderDeviceList: function() {
        var a = this,
        b = this.get("deviceList"),
        c = this.get("currentDevice");
        return $.each(b,
        function(d, e) {
            b[d].is_active = c && c.short_name == e.short_name,
            b[d].is_featured = "Y" == b[d].is_featured,
            b[d].icon = a.getDeviceIconPathWithSelectState(e.short_name)
        }),
        b
    },
    reloadProductList: function() {
        var a = this.get("productMapping"),
        b = this.get("currentDevice"),
        c = a[b.short_name],
        c = $.map(c,
        function(a) {
            return [a]
        }),
        d = !1;
        for (index in c) if (10 == c[index].id) {
            d = !0;
            break
        }
        if (d && c.length > 1) {
            var e = c[0];
            c[0] = c[1],
            c[1] = e
        }
        if (this.set("productList", c), !Server.skipCaseSelect || !this.get("currentProduct")) {
            var f = this.get("currentProduct"),
            g = null,
            h = !1;
            for (product in c) f && c[product].id == f.id && (h = !0),
            4 == c[product].id && (g = c[product]),
            10 == c[product].id && (g = c[product]);
            if (!g) {
                for (first in c) break;
                g = c[first]
            } (!Server.isMobile || Object.keys(c).length <= 1 || f && !h) && this.set("currentProduct", g)
        }
        this.trigger("change:currentProduct")
    },
    getRenderProductList: function() {
        var a = this,
        b = this.get("productList"),
        c = this.get("currentProduct"),
        d = this.get("currentDevice"),
        e = [];
        return b && $.each(b,
        function(f, g) {
            if (c && g.id == c.id) {
                b[f].selected = !0;
                var h = a.getCurrentItemOption();
                b[f].currentItemOptionDescription = h ? h.item_type_description: null
            } else b[f].selected = !1;
            g.isBlackplate = !1,
            1 == g.id ? (g.preview = d && $.inArray(d.default_item_option, ConstantsManager.ITEM_OPTION_TYPE_IPAD.split(",")) > 0 ? "/img/cases_image_case_" + d.short_name + ".jpg": "/img/cases_image_case.jpg", g.currentItemOptionShortDescription = "Silm profile hard case") : 4 == g.id ? (g.preview = "/img/cases_image_bevel.jpg", g.currentItemOptionShortDescription = "Protective interchangeable Backplate") : 5 == g.id ? (g.isBlackplate = !0, g.preview = "/img/cases_image_backplate.jpg") : 9 == g.id ? (g.preview = "/img/cases_image_wood-case.jpg", g.currentItemOptionShortDescription = "Maple-wood crafted case") : 10 == g.id ? (g.currentItemOptionDescription = "Printed in premium matte finish", g.currentItemOptionShortDescription = "Printed in premium matte finish", g.preview = "/img/cases_image_cover.jpg") : g.preview = "/img/cases_image_case.jpg",
            e.push(g)
        }),
        e
    },
    reloadItemOptionList: function() {
        var a = [],
        b = this.get("currentDevice"),
        c = this.get("currentProduct"),
        d = this.get("itemOptionMapping"),
        e = (this.get("itemOption"), d[b.short_name]),
        f = null;
        for (index in e) c && e[index].product_type_id == c.id && e[index].device_type_id == b.device_id && (f || (f = e[index]), a.push(e[index]));
        this.set("itemOptionList", a),
        (!Server.isMobile || a.length <= 1) && this.set("currentItemOption", f)
    },
    getRenderItemOptionList: function() {
        var a = this.get("itemOptionList");
        if (!a) return null;
        var b = this.get("currentProduct");
        if (!b) return null;
        var c = this.getCurrentItemOption();
        for (index in a) {
            var d = a[index].item_type;
            if ("brw" == a[index].system_item_type) var d = "Black-Red-White";
            else if ("ccw" == a[index].system_item_type) var d = "Cyan-Cyan-White";
            else if ("bbw" == a[index].system_item_type) var d = "Black-Black-White";
            else if ("www" == a[index].system_item_type) var d = "White-White-White";
            switch (d = d.split("-"), a[index].singleColor = !1, a[index].bicolor = !1, a[index].tricolor = !1, d.length) {
            case 3:
                a[index].colorClass3 = "transparent" == d[2].toLowerCase() ? "transparent": "",
                a[index].cssColor3 = d[2].toLowerCase();
            case 2:
                a[index].colorClass2 = "transparent" == d[1].toLowerCase() ? "transparent": "",
                a[index].cssColor2 = d[1].toLowerCase();
            case 1:
                a[index].colorClass1 = "transparent" == d[0].toLowerCase() ? "transparent": "",
                a[index].cssColor1 = d[0].toLowerCase()
            }
            switch (d.length) {
            case 1:
                a[index].singleColor = !0;
                break;
            case 2:
                a[index].bicolor = !0;
                break;
            case 3:
                a[index].tricolor = !0
            }
            a[index].selected = c && a[index].type_id == c.type_id ? !0 : !1,
            a[index].preview = this.getCasePreivewUrl(a[index])
        }
        return a
    },
    setCurrentItemOptionById: function(a) {
        var b = this.get("itemOptionList");
        if (b) for (index in b) if (b[index].type_id == a) return void this.set("currentItemOption", b[index])
    },
    setCurrentProductWithId: function(a) {
        {
            var b = this.get("productList");
            this.get("currentDevice")
        }
        for (index in b) if (b[index].id == a) {
            this.set("currentProduct", b[index]);
            break
        }
    },
    setCurrentDevice: function(a) {
        var b = this.get("deviceList"),
        c = null;
        $.each(b,
        function(b, d) {
            d.short_name == a && (c = _.clone(d))
        }),
        this.set("currentDevice", c)
    },
    getDeviceIconPathWithSelectState: function(a, b) {
        var c = a;
        return b ? "/img/phones/vector/" + c + "_active.png": "/img/phones/vector/" + c + ".png"
    },
    reloadLayoutList: function() {
        var a = this.get("currentLayout"),
        b = this.get("currentDevice"),
        c = this.get("templateMapping"),
        d = c[b.device_id],
        e = this.get("currentProduct"),
        f = [],
        g = e ? e.id: 1;
        for (index in d) - 1 != $.inArray(g, d[index].product_type_id) && f.push(d[index]);
        var h = !1;
        if (a) for (index in f) a.name == f[index].name && (h = !0);
        this.set("layoutList", f),
        (h && a || !h && f && f[0]) && this.setCurrentLayout(h ? a.name: f[0].name)
    },
    setCurrentLayout: function(a) {
        var b = this.get("layoutList"),
        c = null;
        if ($.each(b,
        function(b, d) {
            d.name == a && (c = d)
        }), this.set("currentLayout", c), designPanelState.set("userTextsData", null), c.defaults && c.defaults.length) for (index2 in c.format.containers) if (c.format.containers[index2].type && "text" == c.format.containers[index2].type) {
            var d = new TextModel({
                font: c.format.containers[index2].font,
                fontSize: c.format.containers[index2].fontSize,
                align: c.format.containers[index2].align,
                color: c.format.containers[index2].color,
                capitalisation: c.format.containers[index2].capitalisation,
                maxLength: c.format.containers[index2].maxLength,
                multiline: c.format.containers[index2].multiline,
                maxLine: c.format.containers[index2].maxLine,
                lineHeight: c.format.containers[index2].lineHeight
            });
            designPanelState.setTextForBox(c.format.containers[index2].id, d, !0)
        } else for (index in c.defaults) if (c.format.containers[index2].id == c.defaults[index].id && (!c.format.containers[index2].type || "text" != c.format.containers[index2].type)) {
            var e = new ImageModel({
                lowRec: c.defaults[index].lowResImg,
                highRec: c.defaults[index].img,
                thumbnail: c.defaults[index].lowResImg
            });
            e.loadLowRecImg(),
            e.loadHighRecImg(),
            designPanelState.setImageForBox(c.defaults[index].id, e, !0)
        }
    },
    reloadCurrentLayout: function() {
        var a = this.get("currentLayout");
        a && this.setCurrentLayout(a.name)
    },
    getCurrentItemOption: function() {
        var a = this.get("currentItemOption");
        if (!a && !Server.isMobile) {
            var b = this.get("currentDevice"),
            c = b.default_item_option,
            d = this.get("itemOptionMapping"),
            e = d[b.short_name];
            for (index in e) if (e[index].type_id == c) return e[index]
        }
        return a
    },
    setSubscriptionById: function(a) {
        var b = this.get("subscriptionPlans");
        for (index in b) if (b[index].id == a) {
            this.set("currentSubscription", b[index]);
            break
        }
    },
    saveDesign: function(a, b, c) {
        this.test();
        return;
        var d = this.get("currentTitle"),
        e = this.get("currentTag"),
        f = this.get("currentLayout"),
        g = this.getCurrentItemOption(),
        h = this.get("currentDevice"),
        i = f.format.containers,
        j = designPanelState.getAllImages(),
        k = designPanelState.getAllTransforms(),
        l = designPanelState.getAllTexts();
        if (!f) return void(b && ($.proxy(b, c)(__("Please choose a layout before saving")), _gaq && _gaq.push(["_trackPageview", "/ga_builder_warning_choose_layout"])));
        if (!h) return void(b && ($.proxy(b, c)(__("Please choose a device before saving")), _gaq && _gaq.push(["_trackPageview", "/ga_builder_warning_choose_device"])));
        if (!g) return void(b && ($.proxy(b, c)(__("Please choose case option before saving")), _gaq && _gaq.push(["_trackPageview", "/ga_builder_warning_choose_case_option"])));
        j || (j = []),
        k || (k = []),
        saveData = {},
        saveData.img = [],
        saveData.lowResImg = [],
        saveData.transform = [],
        saveData.hldrSize = [],
        saveData.text = [];
        for (index in i) {
            var m = {
                width: parseInt(i[index].width),
                height: parseInt(i[index].height)
            };
            if ("text" == i[index].type) {
                var n = l[i[index].id],
                o = JSON.parse(JSON.stringify(n.toJSON()));
                o.textArr && o.textArr.length && (o.text = o.textArr.join("\n")),
                delete o.textArr,
                o.downFontSize && (o.fontSize = o.downFontSize),
                delete o.downFontSize,
                saveData.text.push(o),
                m.type = "text"
            } else {
                var p = j[i[index].id];
                if (p && (!p.get("highRecImage") || !p.get("highRecImage"))) return $.proxy(b, c)(__("Some images are not loaded yet")),
                void(_gaq && _gaq.push(["_trackPageview", "/ga_builder_warning_image_not_loaded"]));
                var q = k[i[index].id];
                p ? (saveData.img.push(p.get("highRec")), saveData.lowResImg.push(p.get("lowRec"))) : (saveData.img.push(""), saveData.lowResImg.push("")),
                saveData.transform.push(q && p ? this.getServerTransformDataFormat(q, i[index], p) : p ? this.getServerTransformDataFormat({
                    transLeft: 0,
                    transTop: 0,
                    scale: 1
                },
                i[index], p) : null),
                m.type = "image"
            }
            saveData.hldrSize.push(m)
        }
        saveData.id = null,
        saveData.imgCount = saveData.img.length,
        saveData.deviceType = h.short_name,
        saveData.itemType = g.type_id,
        saveData.template = h.short_name + "-" + f.name,
        saveData.version = 3,
        saveData.filter = this.get("currentFilter") ? this.get("currentFilter") : "none",
        saveData.aqua = this.get("aqua") ? this.get("aqua") : !1,
        this.app.designPanel && this.app.designPanel.currentView.showProgress(5);
        var r = 0;
        for (index in j) null != j[index] && r++;
        var s = 0,
        t = !1;
        for (index in i) null != i[index] && "text" != i[index].type && s++;
        for (index in l) l[index].get("text") && "" != l[index].get("text") || (t = !0);
        if (s != r || t) return void(b && ($.proxy(b, c)(__("Cannot save before the design complete.")), _gaq && _gaq.push(["_trackPageview", "/ga_builder_warning_design_not_complete"])));
        var u = this;
        if (!this.confirmDuplicate) {
            var v = !1,
            w = [];
            for (index in j) for (index2 in j) index != index2 && j[index2] == j[index] && (v = !0, -1 == w.lastIndexOf(index) && w.push(index), -1 == w.lastIndexOf(index2) && w.push(index2));
            if (v) {
                var x = new ConfirmResetModalView({
                    app: u.app,
                    successCallback: function() {
                        u.app.confrimModalView.close(),
                        u.confirmDuplicate = !0,
                        u.saveDesign(a, b, c)
                    },
                    failedCallback: function() {
                        u.confirmDuplicate = !0,
                        u.app.confrimModalView.close(),
                        $.proxy(b, c)();
                        for (index in w) $("[data-tpid=" + w[index] + "]").addClass("duplication-warning"),
                        setTimeout($.proxy(function(a, b) {
                            $("[data-tpid=" + a[b] + "]").removeClass("duplication-warning")
                        },
                        this, w, index), 1e3)
                    },
                    heading: __("Hang on a sec..."),
                    message: __("Some photos are duplicated, do you want to continue?"),
                    confirm: __("Continue"),
                    cancel: __("I'll change it")
                });
                return u.app.confrimModalView.show(x),
                void(_gaq && _gaq.push(["_trackPageview", "/ga_builder_warning_image_duplicated"]))
            }
        }
        /*var y = UserProfileManager.getUserInfo();
        if (this.set("userInfo", y), y == ConstantsManager.USER_INFO_UNABLE_TO_GET_USER_PROFILE_ERROR && (y = null), !y) {
            var z = new SignupModalView({
                app: this.app,
                successCallback: function() {
                    _gaq && _gaq.push(["_trackPageview", "/ga_builder_signup"]),
                    $.proxy(u.saveDesign, u, a, b, c)()
                },
                failedCallback: $.proxy(b, c)
            });
            return void this.app.signupModalView.show(z)
        }
        if ((y && y.is_artist && !u.get("private") || this.get("enterChallenge")) && (!d || !e)) {
            var A = new EditDetailModalView({
                app: this.app,
                successCallback: function(d, e) {
                    u.set("currentTitle", d),
                    u.set("currentTag", e),
                    $.proxy(u.saveDesign, u, a, b, c)()
                },
                failedCallback: $.proxy(b, c)
            });
            return void this.app.editDesignModalView.show(A)
        }
        if (!d) return void $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "controllers/User.php",
            method: "GET",
            data: {
                fn: "getNextDefaultArtworkName"
            },
            success: function(d) {
                u.set("currentTitle", d),
                $.proxy(u.saveDesign, u, a, b, c)()
            }
        });*/
        this.app.designPanel.currentView.showProgress(7),
        this.app.designPanel.currentView.model.computeOverallImageQuality();
        var u = this;
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "save_data",
            method: "POST",
            data: {
                itemType: saveData.itemType,
                saveString: escape(JSON.stringify(saveData)),
                caseTitle: d,
                is_adaptive: "Y" == f.is_adaptive ? 1 : 0,
                is_hd: parseFloat(this.app.designPanel.currentView.model.get("imageQuality")) > 1 ? 1 : 0
            },
            success: function(d) {
                u.app.designPanel.currentView.showProgress(10);
                var e = d,
                f = u.app.designPanel.currentView.designCanvas.currentView.getImageDataStr(),
                g = u.app.designPanel.currentView.designCanvas.currentView.getCleanDataStr();
                $.proxy(u.sendImage, u)(e, f, g, a, b, c),
                _gaq && _gaq.push(["_trackPageview", "/ga_save_design"])
            }
        })
    },
    getServerTransformDataFormat: function(a, b, c) {
        if (!c.get("highRecImage")) return null;
        var d = c.get("highRecImage"),
        e = ImageTransformationHelper.getImageOnCanvasDefaultWidth(d.width, d.height, b),
        f = ImageTransformationHelper.getImageOnCanvasDefaultHeight(d.width, d.height, b),
        g = (e * a.scale - b.width) / 2,
        h = (f * a.scale - b.height) / 2,
        i = {
            transLeft: a.transLeft - g,
            transTop: a.transTop - h,
            scale: a.scale
        };
        return i
    },
    getCanvasTransformDataFormat: function(a, b, c) {
        if (!c.get("highRecImage")) return null;
        var d = c.get("highRecImage"),
        e = ImageTransformationHelper.getImageOnCanvasDefaultWidth(d.width, d.height, b),
        f = ImageTransformationHelper.getImageOnCanvasDefaultHeight(d.width, d.height, b),
        g = (e * parseFloat(a.scale) - b.width) / 2,
        h = (f * parseFloat(a.scale) - b.height) / 2,
        i = {
            transLeft: parseFloat(a.transLeft) + g,
            transTop: parseFloat(a.transTop) + h,
            scale: parseFloat(a.scale)
        };
        return i
    },
    sendImage: function(a, b, c, d, e, f) {
        var g = this,
        h = new XMLHttpRequest;
        h.upload && h.upload.addEventListener("progress",
        function(a) {
            a.lengthComputable && g.app.designPanel.currentView.showProgress(a.loaded / a.total * 38 + 10)
        },
        !1),
        h.addEventListener("load",
        function() {
            g.sendRawImage(a, c, d, e, f)
        });
        var i = navigator.userAgent;
        h.open("post", ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "controllers/save_image?id=" + a + "&ua=" + i, !0),
        h.setRequestHeader("Content-Type", "multipart/form-data-"),
        h.setRequestHeader("X-File-Name", a),
        h.setRequestHeader("X-File-Size", b.length),
        h.setRequestHeader("X-File-Type", "image/png"),
        h.send(b)
    },
    sendRawImage: function(a, b, c, d, e) {
        var f = this,
        g = new XMLHttpRequest;
        g.upload && g.upload.addEventListener("progress",
        function(a) {
            a.lengthComputable && f.app.designPanel.currentView.showProgress(a.loaded / a.total * 37 + 51)
        },
        !1),
        g.addEventListener("load",
        function() {
            f.verifySendImage(g.responseText, a, b, c, d, e);
        });
        var h = navigator.userAgent;
        g.open("post", ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "save_image?id=" + a + "&is_raw=Y&ua=" + h, !0),
        g.setRequestHeader("Content-Type", "multipart/form-data-"),
        g.setRequestHeader("X-File-Name", a),
        g.setRequestHeader("X-File-Size", b.length),
        g.setRequestHeader("X-File-Type", "image/png"),
        g.send(b)
    },
    
    verifySendImage: function(data, a, b, c, d, e) {
        f.app.designPanel.currentView.showProgress(100),
            $.proxy(c, e)();
        var h = g.full_name ? g.full_name: g.username;
        var i = JSON.parse(data);
        f.get("currentSubscription") && cartModel.addSubscriptionToCart(f.get("currentSubscription").system_record_tag),
        Server.isAdminEdit && (window.location.href = "/admin/root/cs/editArtworkCallback.php?artwork_id=" + a);
        var j = ConstantsManager.CASETAGRAM_BASE_URL_WITHOUT_LOGIN + "/showcase/" + b + "/r/" + g.referral.code,
            k = new SaveDesignModal({
                app: f.app,
                preview: i.preview_url.L,
                artworkId: a,
                unitPrice: i.unit_price,
                itemOption: i.item_option,
                artworkUrlName: b,
                deviceShortName: i.device_short_name,
                shareLink: j,
                shareImage: i.preview_url.L,
                shareName: f.get("enterChallenge") ? __("Vote for " + h + "'s awesome design on Casetify") : __("Check out my Casetify. Use this link & Get $<!--inviteCredit--> off").replace("<!--inviteCredit-->", ConstantsManager.USER_INVITE_CREDIT_OF_SINGLE_REFERRAL),
                twitterShareMessage: f.get("enterChallenge") ? __("Vote for " + h + "'s awesome design on Casetify") : __("Check out my new @Casetify using Instagram & Facebook photos. Make yours and get $<!--inviteCredit--> off: ").replace("<!--inviteCredit-->", ConstantsManager.USER_INVITE_CREDIT_OF_SINGLE_REFERRAL) + j + " via @Casetify",
                pinitShareMessage: f.get("enterChallenge") ? __("Vote for " + h + "'s awesome design on Casetify") : __("Check out my new @Casetify using Instagram & Facebook photos. Make yours and get $<!--inviteCredit--> off: ").replace("<!--inviteCredit-->", ConstantsManager.USER_INVITE_CREDIT_OF_SINGLE_REFERRAL) + j,
                shareDesc: __(f.get("enterChallenge") ? h + " created a rad case on Casetify, a social design service where you can personalize your own case using Instagram, Facebook and personal photos. Every vote counts, so make sure to show your love today.": "Make your case with Facebook photos")
            });
        f.app.saveDesignModalView.show(k)
    },
    updateTag: function(a, b, c, d, e) {
        var f = this;
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "controllers/Artwork.php",
            method: "POST",
            data: {
                fn: "updateArtworkTagList",
                id: a,
                tag_list: f.get("currentTag")
            },
            success: function() {
                f.app.designPanel.currentView.showProgress(90),
                f.get("enterChallenge") ? $.proxy(f.toggleChallenge, f)(a, b, c, d, e) : $.proxy(f.togglePublic, f)(a, b, c, d, e)
            }
        })
    },
    toggleChallenge: function(a, b, c, d, e) {
        var f = this;
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "controllers/Artwork.php",
            method: "POST",
            data: {
                fn: "toggleSellDesign",
                id: a,
                toggle: f.get("enterChallenge") ? 1 : 0
            },
            success: function() {
                f.app.designPanel.currentView.showProgress(93),
                $.proxy(f.togglePublic, f)(a, b, c, d, e)
            }
        })
    },
    togglePublic: function(a, b, c, d, e) {
        var f = this;
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "controllers/Artwork.php",
            method: "POST",
            data: {
                fn: "toggleIsPublic",
                id: a,
                toggle: f.get("private") ? 0 : 1
            },
            success: function() {
                f.app.designPanel.currentView.showProgress(95),
                $.proxy(f.getArtworkDetail, f)(a, b, c, d, e)
            }
        })
    },
    getArtworkDetail: function(a, b, c, d, e) {
        var f = this,
        g = this.get("userInfo"),
        h = g.full_name ? g.full_name: g.username;
        f.confirmDuplicate = !1,
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "controllers/Artwork.php",
            method: "GET",
            data: {
                fn: "getByID",
                id: a,
                includePreviewPath: "Y"
            },
            success: function(d) {
                f.app.designPanel.currentView.showProgress(100),
                $.proxy(c, e)();
                var i = JSON.parse(d);
                f.get("currentSubscription") && cartModel.addSubscriptionToCart(f.get("currentSubscription").system_record_tag),
                Server.isAdminEdit && (window.location.href = "/admin/root/cs/editArtworkCallback.php?artwork_id=" + a);
                var j = ConstantsManager.CASETAGRAM_BASE_URL_WITHOUT_LOGIN + "/showcase/" + b + "/r/" + g.referral.code,
                k = new SaveDesignModal({
                    app: f.app,
                    preview: i.preview_url.L,
                    artworkId: a,
                    unitPrice: i.unit_price,
                    itemOption: i.item_option,
                    artworkUrlName: b,
                    deviceShortName: i.device_short_name,
                    shareLink: j,
                    shareImage: i.preview_url.L,
                    shareName: f.get("enterChallenge") ? __("Vote for " + h + "'s awesome design on Casetify") : __("Check out my Casetify. Use this link & Get $<!--inviteCredit--> off").replace("<!--inviteCredit-->", ConstantsManager.USER_INVITE_CREDIT_OF_SINGLE_REFERRAL),
                    twitterShareMessage: f.get("enterChallenge") ? __("Vote for " + h + "'s awesome design on Casetify") : __("Check out my new @Casetify using Instagram & Facebook photos. Make yours and get $<!--inviteCredit--> off: ").replace("<!--inviteCredit-->", ConstantsManager.USER_INVITE_CREDIT_OF_SINGLE_REFERRAL) + j + " via @Casetify",
                    pinitShareMessage: f.get("enterChallenge") ? __("Vote for " + h + "'s awesome design on Casetify") : __("Check out my new @Casetify using Instagram & Facebook photos. Make yours and get $<!--inviteCredit--> off: ").replace("<!--inviteCredit-->", ConstantsManager.USER_INVITE_CREDIT_OF_SINGLE_REFERRAL) + j,
                    shareDesc: __(f.get("enterChallenge") ? h + " created a rad case on Casetify, a social design service where you can personalize your own case using Instagram, Facebook and personal photos. Every vote counts, so make sure to show your love today.": "Make your case with Facebook photos")
                });
                f.app.saveDesignModalView.show(k)
            }
        })
    },
    addImageToRandomPool: function(a) {
        var b = this.get("randomPool");
        b || (b = new Backbone.Collection),
        b.add(a),
        this.set("randomPool", b),
        this.trigger("change:randomPool")
    },
    addInstagramToRandomPool: function() {
        var a = this,
        b = this.app.instagramPhotoList.currentView.collection;
        b && b.each(function(b) {
            a.addImageToRandomPool(b)
        })
    },
    addFacebookToRandomPool: function() {
        var a = this,
        b = this.app.facebookPhotoList.currentView.collection;
        b && b.each(function(b) {
            a.addImageToRandomPool(b)
        })
    },
    addUploadToRandomPool: function() {
        var a = this;
        this.app.uploadPanelPhotoList.currentView.uploadPanelState.startTrackingUpdateForRandomPool();
        var b = this.app.uploadPanelPhotoList.currentView.collection;
        b && b.each(function(b) {
            a.addImageToRandomPool(b)
        })
    },
    addStampToRandomPool: function() {
        var a = this,
        b = this.app.stampList.currentView.collection;
        b && b.each(function(b) {
            a.addImageToRandomPool(b)
        })
    },
    cleanRandomPool: function() {
        this.set("randomPool", null),
        this.trigger("change:randomPool")
    },
    isRandomPoolActive: function() {
        var a = this.get("randomPool");
        return a && a.length > 0 ? !0 : !1
    },
    getRandomImages: function(a) {
        var b = this.get("randomPool"),
        c = !1;
        if (b.length >= a && (c = !0), b && b.length > 0) {
            for (var d = [], e = 0; a > e; e++) {
                if (c) {
                    do {
                        var f = !1,
                        g = Math.floor(Math.random() * b.length);
                        for (index in d) if (d[index] == b.at(g)) {
                            f = !0;
                            break
                        }
                    } while ( f )
                } else var g = Math.floor(Math.random() * b.length);
                d.push(b.at(g))
            }
            return d
        }
        return null
    },
    getCasePreivewUrl: function(a) {
        if (!a) var a = this.get("currentItemOption");
        var b = this.get("currentDevice");
        return a && b ? "/img/case/case_color_preview_" + a.type_id + ".jpg": ""
    },
    hasImages: function() {
        var a = this.app.designPanel.currentView.model.getAllImages(!0);
        if (!a) return ! 1;
        for (index in a) if (null != a[index]) return ! 0;
        return ! 1
    },
    putNextAvailableGrid: function(a) {
        var b = this.app.designPanel.currentView.model.getAllImages(),
        c = -1;
        if (b) {
            var d = this.get("currentLayout"),
            e = d.format.containers;
            for (holder in e) if (!b[e[holder].id]) {
                c = e[holder].id;
                break
            }
        } else c = 0;
        c >= 0 && this.app.designPanel.currentView.templateGrid.currentView.setImageDataForBox(a, c)
    }
}),
DesignPanelState = Backbone.Model.extend({
    initialize: function(a) {
        this.pageModel = a.pageModel,
        this.app = a.app,
        this.pageModel.on("change:currentDevice", this.fetchDeviceBackground, this),
        this.pageModel.on("change:currentItemOption", this.fetchDeviceBackground, this),
        this.pageModel.on("change:currentDevice", this.fetchMask, this),
        this.pageModel.on("change:currentDevice", this.fetchOverlay, this),
        this.pageModel.on("change:currentLayout", this.fetchOverlay, this),
        this.pageModel.on("change:currentItemOption", this.fetchOverlay, this),
        this.pageModel.on("change:currentItemOption", this.fetchMask, this),
        this.on("change:userImagesData", this.computeOverallImageQuality, this),
        this.on("change:userTransformData", this.computeOverallImageQuality, this)
    },
    setImageForBox: function(a, b, c) {
        var d = this.get("userImagesData");
        if (d || (d = {}), d[a]) {
            if (c) return;
            this.removeImageForBox(a)
        }
        d[a] = b,
        this.set("userImagesData", d),
        this.trigger("change:userImagesData")
    },
    setTextForBox: function(a, b, c) {
        var d = this.get("userTextsData");
        if (d || (d = {}), d[a]) {
            if (c) return;
            this.removeTextForBox(a)
        }
        d[a] = b,
        this.set("userTextsData", d),
        this.trigger("change:userTextsData")
    },
    getTextForBox: function(a) {
        var b = this.get("userTextsData");
        return b ? b[a] : null
    },
    getImageForBox: function(a) {
        var b = this.get("userImagesData");
        return b ? b[a] : null
    },
    hasImageAtBox: function(a) {
        var b = this.get("userImagesData");
        return b ? null != b[a] : !1
    },
    removeImageForBox: function(a) {
        this.app.designPanel.currentView.templateGrid.currentView.removeImageFromBox(a);
        var b = this.get("userImagesData"),
        c = this.get("userTransformData");
        c || (c = {}),
        b || (b = {}),
        c[a] = null,
        this.set("userTransformData", c),
        b[a] = null,
        this.set("userImagesData", b),
        this.trigger("change:userImagesData"),
        this.trigger("change:userTransformData")
    },
    removeTextForBox: function(a) {
        var b = this.get("userTextsData");
        b[a] = null,
        this.set("userTextsData", b),
        this.trigger("change:userTextsData")
    },
    isGridEditable: function(a) {
        var b = this.pageModel.get("currentLayout");
        if (b.format.containers.length) for (index in b.format.containers) if (b.format.containers[index].id == a && b.format.containers[index].uneditable) return ! 1;
        return ! 0
    },
    fetchDeviceBackground: function() {
        var a = this.pageModel.get("currentDevice");
        if (a) {
            var b = a.short_name,
            c = this.pageModel.getCurrentItemOption();
            if (!c) return;
            var d = c.type_id;
            this.set("deviceBackground", null),
            image = new Image,
            image.onload = $.proxy(function(a, b, c) {
                var d = this.pageModel.get("currentDevice"),
                e = this.pageModel.getCurrentItemOption();
                if (e) {
                    var f = e.type_id;
                    d.short_name == b && c == f && this.set("deviceBackground", a)
                }
            },
            this, image, b, d),
            image.src = "/img/template/base_" + b + "_" + d + ".png"
        }
    },
    fetchMask: function() {
        var a = this.pageModel.get("currentDevice"),
        b = this.pageModel.get("currentItemOption");
        if (a && b) {
            var c = a.short_name;
            this.set("deviceMaskImage", null),
            image = new Image,
            image.onload = $.proxy(function(a, b, c) {
                var d = this.pageModel.get("currentDevice");
                d.short_name == b && c.id == this.pageModel.get("currentItemOption").id && this.set("deviceMaskImage", a, b)
            },
            this, image, c, b),
            1 == b.product_type_id ? image.src = "/img/template/mask_" + c + ".png": 4 == b.product_type_id ? image.src = "/img/template/mask_bezel-case_" + c + ".png": 5 == b.product_type_id ? image.src = "/img/template/mask_bezel-case-backplate_" + c + ".png": b.product_type_id == ConstantsManager.PRODUCT_TYPE_WOOD_CASE ? image.src = "/img/template/mask_wood-case_" + c + ".png": b.product_type_id == ConstantsManager.PRODUCT_TYPE_SMART_COVER ? image.src = "/img/template/mask_cover_" + c + ".png": b.product_type_id == ConstantsManager.PRODUCT_TYPE_FUSION_CASE && (image.src = "/img/template/mask_fusion_" + c + ".png")
        }
    },
    fetchOverlay: function() {
        var a = this.pageModel.get("currentDevice");
        if (a) {
            var b = this.pageModel.get("currentLayout");
            if (b) {
                var c = Server.templateMapping;
                if (null != c[a.device_id]) {
                    var d = c[a.device_id],
                    e = !1;
                    for (index in d) if (d[index].name == b.name) {
                        e = !0;
                        break
                    }
                    if (e) {
                        var f = a.short_name,
                        g = this.pageModel.getCurrentItemOption();
                        if (g) {
                            var h = g.type_id;
                            this.set("overlayImage", null),
                            image = new Image,
                            image.onload = $.proxy(function(a, b, c, d) {
                                var e = this.pageModel.get("currentDevice"),
                                f = this.pageModel.get("currentLayout"),
                                g = this.pageModel.getCurrentItemOption().type_id;
                                e.short_name == b && c == f.name && d == g && this.set("overlayImage", a)
                            },
                            this, image, f, b.name, h),
                            image.src = b.require_overlay ? "/img/template/overlay_" + f + "-" + b.reference_name + "-" + h + ".png": "/img/template/overlay_" + f + "-single-" + h + ".png"
                        }
                    }
                }
            }
        }
    },
    getUserTransformDataForBox: function(a) {
        var b = {
            transLeft: 0,
            transTop: 0,
            scale: 1
        },
        c = this.get("userTransformData");
        return c && c[a] ? c[a] : b
    },
    setUserTransformDataForBox: function(a, b) {
        var c = this.get("userTransformData");
        c || (c = {}),
        c[a] = b,
        this.set("userTransformData", c),
        this.trigger("change:userTransformData")
    },
    copyUserTransformDataFromBox: function(a, b, c) {
        if (!c.get("highRecImage")) return void c.addHighRecCallback($.proxy(this.copyUserTransformDataFromBox, this, a, b, c));
        var d = this.pageModel.get("currentLayout"),
        e = null,
        f = null;
        for (index in d.format.containers) d.format.containers[index].id == a && (e = d.format.containers[index]),
        d.format.containers[index].id == b && (f = d.format.containers[index]);
        var g = 1,
        h = 1,
        i = c.get("highRecImage");
        g = ImageTransformationHelper.shouldFitWidth(i.width, i.height, e) ? i.width / e.width: i.height / e.height,
        h = ImageTransformationHelper.shouldFitWidth(i.width, i.height, f) ? i.width / f.width: i.height / f.height;
        var j = this.get("userTransformData");
        j || (j = {});
        var k = j[a];
        k && (k.transLeft *= g / h, k.transTop *= g / h),
        j[b] = k,
        this.set("userTransformData", j),
        this.trigger("change:userTransformData")
    },
    resetDesign: function() {
        var a = this.pageModel.get("currentLayout");
        if (a && a.format.containers.length) {
            var b = this.get("userTransformData"),
            c = this.get("userImagesData");
            for (index in a.format.containers) a.format.containers[index].uneditable || (b && (b[a.format.containers[index].id] = null), c && (c[a.format.containers[index].id] = null));
            this.set("userTransformData", b),
            this.set("userImagesData", c)
        } else this.set("userTransformData", null),
        this.set("userImagesData", null);
        this.trigger("change:userTransformData"),
        this.trigger("change:userImagesData")
    },
    adaptDesign: function(a) {
        var b = this.pageModel.get("currentLayout"),
        c = this.get("userImagesData"),
        d = {};
        if (b && c && a) {
            for (index in a.format.containers) a.format.containers[index].uneditable && (c[a.format.containers[index].id] = null);
            for (index in b.format.containers) b.format.containers[index].uneditable || (d[b.format.containers[index].id] = c[b.format.containers[index].id], c[b.format.containers[index].id] = null);
            for (index in b.format.containers) for (index2 in c) if (c[index2]) {
                d[b.format.containers[index].id] = c[index2],
                c[index2] = null;
                break
            }
            this.set("userImagesData", d),
            this.trigger("change:userImagesData")
        }
        this.set("userTransformData", null),
        this.trigger("change:userTransformData")
    },
    getAllImages: function(a) {
        if (a) {
            var b = this.get("userImagesData"),
            c = {};
            if (b) for (index in b) c[index] = b[index];
            b = c;
            var d = this.pageModel.get("currentLayout");
            if (d && d.format.containers.length) for (index in d.format.containers) d.format.containers[index].uneditable && (b[d.format.containers[index].id] = null);
            return b
        }
        return this.get("userImagesData")
    },
    getAllTransforms: function() {
        return this.get("userTransformData")
    },
    getAllTexts: function() {
        return this.get("userTextsData")
    },
    computeOverallImageQuality: function() {
        var a = this.pageModel.get("currentLayout"),
        b = this.get("userTransformData"),
        c = this.get("userImagesData");
        c || (c = []),
        b || (b = []);
        var d = 1e3;
        if (!a) return d;
        var e = a.format.containers;
        for (index in e) {
            var f = c[e[index].id],
            g = b[e[index].id];
            imageQuality = f ? g ? this.resolutionDifferent(g, e[index], f) : this.resolutionDifferent({
                transLeft: 0,
                transTop: 0,
                scale: 1
            },
            e[index], f) : null,
            imageQuality && d > imageQuality && (d = imageQuality)
        }
        this.set("imageQualityLevel", this.getImageQualityLevel(d))
    },
    getImageQualityLevel: function(a) {
        var b = 0;
        return a >= 0 && (b = 2),
        a >= .4 && (b = 3),
        a >= .7 && (b = 4),
        a >= 1 && (b = 5),
        b
    },
    resolutionDifferent: function(a, b, c) {
        var d = b.width / 560 / .7 * 612,
        e = b.height / 560 / .7 * 612,
        f = c.get("highRecImage");
        if (f) {
            var g = ImageTransformationHelper.getImageOnCanvasDefaultWidth(f.width, f.height, b),
            h = ImageTransformationHelper.getImageOnCanvasDefaultHeight(f.width, f.height, b),
            i = f.width * b.width / (g * a.scale),
            j = f.height * b.height / (h * a.scale),
            k = i / d,
            l = j / e;
            return l > k ? k: l
        }
        return 1
    },
    randomize: function() {
        var a = this;
        this.resetDesign();
        var b = this.pageModel.get("currentLayout"),
        c = b.format.containers,
        d = this.pageModel.getRandomImages(c.length);
        $.each(c,
        function(b, c) {
            c.uneditable || "text" == c.type || (d[b].addLowRecCallback(a.app.designPanel.currentView.designCanvas.currentView.render), d[b].loadLowRecImg(), d[b].loadHighRecImg(), a.app.designPanel.currentView.templateGrid.currentView.setImageDataForBox(d[b], c.id))
        })
    }
}),
FacebookPanelModel = Backbone.Model.extend({
    albumModel: null,
    imagesModel: null,
    friendsModel: null,
    initialize: function(a) {
        this.app = a.app,
        this.albumModel = new Backbone.Collection([]),
        this.imagesModel = new Backbone.Collection([]),
        this.friendsModel = new Backbone.Collection([]),
        this.albumCache = {},
        this.pageModel = a.pageModel
    },
    connectFacebook: function(a, b, c) {
        ExternalSourceAccessManager.targetType = 'facebook';
        ExternalSourceAccessManager.authenticateUser(2, ExternalSourceAccessManager.getUserInfo, $.proxy(function(a) {
            b && $.proxy(b, c)(a)
        },
        this), !1, null, Server.isLogin && !Server.facebookConnected)
    },
    fetchUserFriends: function() {
        var a = this;
        this.get("isFetchingFriends") || (this.set("isFetchingFriends", !0), ExternalSourceAccessManager.getUserContactList(2, $.proxy(function(b) {
            if (this.friendsModel.reset(), a.set("isFetchingFriends", !1), b != ConstantsManager.USER_INFO_UNABLE_TO_GET_USER_CONTACT_LIST_ERROR) {
                for (index in b) b[index].full_name && "" != b[index].full_name || (b[index].full_name = b[index].username);
                this.friendsModel.add(b)
            }
        },
        this), $.proxy(function(b) {
            a.set("isFetchingFriends", !1),
            console.log("fetch friends error"),
            console.log(b)
        },
        this), !1, Server.isLogin && !Server.facebookConnected))
    },
    fetchUserAlbum: function(a, b, c, d) {
        this.set("currentAlbumUserId", a),
        this.set("isLoadingAlbum", !0),
        ExternalSourceAccessManager.getUserPhotoAlbum(2, $.proxy(function(a) {
            this.set("isLoadingAlbum", !1),
            a != ConstantsManager.USER_INFO_UNABLE_TO_GET_USER_PHOTO_ALBUM_ERROR && (this.updateFacebookAlbum(a), b && $.proxy(b, d)())
        },
        this), $.proxy(function(a) {
            this.set("isLoadingAlbum", !1),
            console.log("fetch album failed"),
            console.log(a),
            c && $.proxy(c, d)()
        },
        this), !1, Server.isLogin && !Server.facebookConnected, a ? a: null)
    },
    updateFacebookAlbum: function(a) {
        this.albumModel.add(a)
    },
    loadAlbum: function(a, b, c, d) {
        this.imagesModel.reset(),
        this.isLoadingNextPage = !0,
        this.hasLastPageFetched = !1,
        this.nextPage = 1,
        this.albumId = a,
        this.set("isLoadingPhoto", !0),
        ExternalSourceAccessManager.getUserPhoto(2, a, $.proxy(function(a) {
            this.set("isLoadingPhoto", !1),
            b && $.proxy(b, d)(),
            this.updateFacebookImages(a)
        },
        this), $.proxy(function(a) {
            this.set("isLoadingPhoto", !1),
            c && $.proxy(c, d)(a)
        },
        this), !1, 1, 1, Server.isLogin && !Server.facebookConnected)
    },
    updateFacebookImages: function(a) {
        if (a == ConstantsManager.USER_INFO_NO_MEDIA_DATA_TO_RETURN) this.hasLastPageFetched = !0;
        else if (a == ConstantsManager.USER_INFO_UNABLE_TO_GET_USER_MEDIA_ERROR);
        else {
            var b = new Array;
            for (index in a) {
                var c = new ImageModel({
                    lowRec: a[index].images.low_resolution,
                    highRec: a[index].images.standard_resolution,
                    thumbnail: a[index].images.squared_thumbnail
                });
                this.app.controlPanel && ("facebook-photo-list" == this.app.controlPanel.currentView.currentViewId || "facebook-album-list" == this.app.controlPanel.currentView.currentViewId || "photos-btn" == this.app.controlPanel.currentView.currentViewId) && this.pageModel.addImageToRandomPool(c),
                b.push(c)
            }
            this.imagesModel.add(b),
            this.nextPage++
        }
        this.isLoadingNextPage = !1,
        setTimeout($.proxy(function() {
            {
                var a = $(".facebook-photo-collection-view");
                a.height() - a.parents(".scroll").height()
            }
            a.parents(".scroll").height() > a.height() && this.loadNextPage()
        },
        this), 5e3)
    },
    loadNextPage: function() {
        this.hasLastPageFetched || this.isLoadingNextPage || (this.isLoadingNextPage = !0, ExternalSourceAccessManager.getUserPhoto(2, this.albumId, $.proxy(function(a) {
            this.updateFacebookImages(a),
            this.isLoadingNextPage = !1
        },
        this), $.proxy(function() {
            this.isLoadingNextPage = !1
        },
        this), !1, this.nextPage, this.nextPage, Server.isLogin && !Server.facebookConnected))
    }
}),
Filters = {
    width: 0,
    height: 0,
    HSVtoRGB: function(a, b, c) {
        var d, e, f, g = Math.floor(6 * a),
        h = 6 * a - g,
        i = c * (1 - b),
        j = c * (1 - h * b),
        k = c * (1 - (1 - h) * b);
        switch (g % 6) {
        case 0:
            d = c,
            e = k,
            f = i;
            break;
        case 1:
            d = j,
            e = c,
            f = i;
            break;
        case 2:
            d = i,
            e = c,
            f = k;
            break;
        case 3:
            d = i,
            e = j,
            f = c;
            break;
        case 4:
            d = k,
            e = i,
            f = c;
            break;
        case 5:
            d = c,
            e = i,
            f = j
        }
        return [255 * d, 255 * e, 255 * f]
    },
    RGBtoHSV: function(a, b, c) {
        a /= 255,
        b /= 255,
        c /= 255;
        var d, e, f = Math.max(a, b, c),
        g = Math.min(a, b, c),
        h = f,
        i = f - g;
        if (e = 0 === f ? 0 : i / f, f === g) d = 0;
        else {
            switch (f) {
            case a:
                d = (b - c) / i + (c > b ? 6 : 0);
                break;
            case b:
                d = (c - a) / i + 2;
                break;
            case c:
                d = (a - b) / i + 4
            }
            d /= 6
        }
        return [d, e, h]
    },
    bezier: function(a, b, c, d, e, f) {
        var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G;
        for (u = a[0], y = a[1], v = b[0], z = b[1], w = c[0], A = c[1], x = d[0], B = d[1], m = {},
        k = 3 * (v - u), i = 3 * (w - v) - k, g = x - u - k - i, l = 3 * (z - y), j = 3 * (A - z) - l, h = B - y - l - j, p = C = 0; 1e3 > C; p = ++C) t = p / 1e3,
        n = Math.round(g * Math.pow(t, 3) + i * Math.pow(t, 2) + k * t + u),
        o = Math.round(h * Math.pow(t, 3) + j * Math.pow(t, 2) + l * t + y),
        e && e > o ? o = e: f && o > f && (o = f),
        m[n] = o;
        if (m.length < d[0] + 1) for (p = D = 0, F = d[0]; F >= 0 ? F >= D: D >= F; p = F >= 0 ? ++D: --D) if (null == m[p]) {
            for (r = [p - 1, m[p - 1]], q = E = p, G = d[0]; G >= p ? G >= E: E >= G; q = G >= p ? ++E: --E) if (null != m[q]) {
                s = [q, m[q]];
                break
            }
            m[p] = r[1] + (s[1] - r[1]) / (s[0] - r[0]) * (p - r[0])
        }
        return null == m[d[0]] && (m[d[0]] = m[d[0] - 1]),
        m
    },
    curves: function(a, b, c, d) {
        var e, f, g, h, i, j;
        if (e = this.bezier(a, b, c, d, 0, 255), a[0] > 0) for (f = g = 0, i = a[0]; i >= 0 ? i > g: g > i; f = i >= 0 ? ++g: --g) e[f] = a[1];
        if (d[0] < 255) for (f = h = j = d[0]; 255 >= j ? 255 >= h: h >= 255; f = 255 >= j ? ++h: --h) e[f] = d[1];
        return e
    },
    vignetteFilter: function(a, b, c) {
        var d = this.canvasWidth,
        e = this.canvasHeight,
        f = this.filterCenterOffsetLeft,
        g = this.filterCenterOffsetTop,
        h = document.createElement("canvas");
        h.width = d,
        h.height = e;
        var i = h.getContext("2d"),
        j = i.createImageData(Filters.width, Filters.height);
        for (o = 0; o < a.length; o += 4) j.data[o + 0] = a[o],
        j.data[o + 1] = a[o + 1],
        j.data[o + 2] = a[o + 2],
        j.data[o + 3] = a[o + 3]; {
            var k, l = a,
            m = [],
            n = 1.6 * Math.sqrt(Math.pow(d / 2, 2) + Math.pow(e / 2, 2));
            d - Filters.width,
            e - Filters.height
        }
        i.putImageData(j, f, g),
        k = i.createRadialGradient(d / 2, e / 2, 0, d / 2, e / 2, n),
        k.addColorStop(0, b),
        k.addColorStop(1, c),
        i.fillStyle = k,
        i.fillRect(0, 0, d, e),
        m = i.getImageData(f, g, Filters.width, Filters.height).data;
        var o = 0;
        for (o = 0; o < m.length; o += 4) l[o + 0] = m[o],
        l[o + 1] = m[o + 1],
        l[o + 2] = m[o + 2],
        l[o + 3] = m[o + 3];
        return l
    },
    grayScale: function(a) {
        var b, c;
        for (c = 0; c < a.length; c += 4) b = parseInt((a[c] + a[c + 1] + a[c + 2]) / 3, 10),
        b = 255 * (1.3 * (b / 255 - .5) + .5),
        b = parseInt(0 > b ? 0 : b > 255 ? 255 : b),
        a[c] = b,
        a[c + 1] = b,
        a[c + 2] = b
    },
    blackWhite: function(a) {
        var b, c;
        for (c = 0; c < a.length; c += 4) b = parseInt((a[c] + a[c + 1] + a[c + 2]) / 3, 10),
        b = b > 127 ? 255 : 0,
        a[c] = b,
        a[c + 1] = b,
        a[c + 2] = b
    },
    pinhole: function(a) {
        var b, c, d = this;
        for (c = 0; c < a.length; c += 4) b = parseInt((a[c] + a[c + 1] + a[c + 2]) / 3, 10),
        a[c] = b,
        a[c + 1] = b,
        a[c + 2] = b;
        var e, f, g, h = 10;
        for (h /= 100, c = 0; c < a.length; c += 4) e = Math.min(255, a[c] * (1 - .607 * h) + .769 * a[c + 1] * h + .189 * a[c + 2] * h),
        f = Math.min(255, .349 * a[c] * h + a[c + 1] * (1 - .314 * h) + .168 * a[c + 2] * h),
        g = Math.min(255, .272 * a[c] * h + .534 * a[c + 1] * h + a[c + 2] * (1 - .869 * h)),
        e = parseInt(0 > e ? 0 : e > 255 ? 255 : e),
        f = parseInt(0 > f ? 0 : f > 255 ? 255 : f),
        g = parseInt(0 > g ? 0 : g > 255 ? 255 : g),
        a[c] = e,
        a[c + 1] = f,
        a[c + 2] = g;
        var i, j, k;
        h = 10,
        k = Math.abs(h) / 100,
        i = [0, 255 * k],
        j = [255 - 255 * k, 255];
        var l = d.curves([0, 0], i, j, [255, 255]);
        for (h = Math.pow(1.15, 2), c = 0; c < a.length; c += 4) e = l[a[c]],
        f = l[a[c + 1]],
        g = l[a[c + 2]],
        e /= 255,
        e -= .5,
        e *= h,
        e += .5,
        e *= 255,
        f /= 255,
        f -= .5,
        f *= h,
        f += .5,
        f *= 255,
        g /= 255,
        g -= .5,
        g *= h,
        g += .5,
        g *= 255,
        e = parseInt(0 > e ? 0 : e > 255 ? 255 : e),
        f = parseInt(0 > f ? 0 : f > 255 ? 255 : f),
        g = parseInt(0 > g ? 0 : g > 255 ? 255 : g),
        a[c] = e,
        a[c + 1] = f,
        a[c + 2] = g;
        d.vignetteFilter(a, "rgba(0,0,0,0)", "rgba(102,102,102,1)")
    },
    sepia: function(a) {
        var b, c, d, e, f = .7,
        g = Math.max(0, 1.46),
        h = f * g,
        i = 128 * -g + 128;
        for (e = 0; e < a.length; e += 4) b = (.393 * a[e] + .769 * a[e + 1] + .189 * a[e + 2]) * h + i + 28,
        c = (.349 * a[e] + .686 * a[e + 1] + .168 * a[e + 2]) * h + i + 2,
        d = (.272 * a[e] + .534 * a[e + 1] + .131 * a[e + 2]) * h + i,
        b = parseInt(0 > b ? 0 : b > 255 ? 255 : b),
        c = parseInt(0 > c ? 0 : c > 255 ? 255 : c),
        d = parseInt(0 > d ? 0 : d > 255 ? 255 : d),
        a[e] = b,
        a[e + 1] = c,
        a[e + 2] = d
    },
    lomo: function(a) {
        var b, c, d, e, f = this;
        for (e = 0; e < a.length; e += 4) b = a[e],
        c = a[e + 1],
        d = a[e + 2],
        b = 255 * (2 * (b / 255 - .5) + .5),
        c = 255 * (2 * (c / 255 - .5) + .5),
        a[e] = b,
        a[e + 1] = c,
        a[e + 2] = d;
        f.vignetteFilter(a, "rgba(0,0,0,0)", "rgba(0,0,0,0.6)")
    },
    gotham: function(a) {
        var b, c, d, e, f, g, h, i = .8,
        j = .3086,
        k = .6084,
        l = .082,
        m = (1 - i) * j + i,
        n = (1 - i) * j,
        o = (1 - i) * j,
        p = (1 - i) * k,
        q = (1 - i) * k + i,
        r = (1 - i) * k,
        s = (1 - i) * l,
        t = (1 - i) * l,
        u = (1 - i) * l + i;
        for (h = 0; h < a.length; h += 4) b = a[h],
        c = a[h + 1],
        d = a[h + 2],
        e = 255 * (1.3 * (b / 255 - .5) + .5),
        f = 255 * (1.3 * (c / 255 - .5) + .5),
        g = 255 * (1.3 * (d / 255 - .5) + .5),
        b = e * j + f * k + g * l + .05 * b,
        c = e * j + f * k + g * l + .05 * c,
        d = e * j + f * k + g * l + .05 * d,
        e = 255 * (1.1 * (b / 255 - .5) + .5),
        f = 255 * (1.1 * (c / 255 - .5) + .5),
        g = 255 * (1.1 * (d / 255 - .5) + .5),
        b = e * m + f * p + g * s,
        c = e * n + f * q + g * t,
        d = e * o + f * r + g * u,
        b = 255 * Math.pow(b / 255, 2) + .5,
        c = 255 * Math.pow(c / 255, 2) + .5,
        d = 255 * Math.pow(d / 255, 2) + .5,
        b = 255 * (1.1 * (b / 255 - .5) + .5),
        c = 255 * (1.1 * (c / 255 - .5) + .5),
        d = 255 * (1.1 * (d / 255 - .5) + .5),
        b = parseInt(0 > b ? 0 : b > 255 ? 255 : b),
        c = parseInt(0 > c ? 0 : c > 255 ? 255 : c),
        d = parseInt(0 > d ? 0 : d > 255 ? 255 : d),
        b -= .26 * (b - 41),
        c -= .26 * (c - 49),
        d -= .26 * (d - 109),
        a[h] = b,
        a[h + 1] = c,
        a[h + 2] = d
    },
    west: function(a) {
        var b, c = [0, 0, 0, 1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 17, 18, 19, 19, 20, 21, 22, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 44, 45, 47, 48, 49, 52, 54, 55, 57, 59, 60, 62, 65, 67, 69, 70, 72, 74, 77, 79, 81, 83, 86, 88, 90, 92, 94, 97, 99, 101, 103, 107, 109, 111, 112, 116, 118, 120, 124, 126, 127, 129, 133, 135, 136, 140, 142, 143, 145, 149, 150, 152, 155, 157, 159, 162, 163, 165, 167, 170, 171, 173, 176, 177, 178, 180, 183, 184, 185, 188, 189, 190, 192, 194, 195, 196, 198, 200, 201, 202, 203, 204, 206, 207, 208, 209, 211, 212, 213, 214, 215, 216, 218, 219, 219, 220, 221, 222, 223, 224, 225, 226, 227, 227, 228, 229, 229, 230, 231, 232, 232, 233, 234, 234, 235, 236, 236, 237, 238, 238, 239, 239, 240, 241, 241, 242, 242, 243, 244, 244, 245, 245, 245, 246, 247, 247, 248, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
        d = [0, 0, 1, 2, 2, 3, 5, 5, 6, 7, 8, 8, 10, 11, 11, 12, 13, 15, 15, 16, 17, 18, 18, 19, 21, 22, 22, 23, 24, 26, 26, 27, 28, 29, 31, 31, 32, 33, 34, 35, 35, 37, 38, 39, 40, 41, 43, 44, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81, 83, 84, 85, 86, 88, 89, 90, 92, 93, 94, 95, 96, 97, 100, 101, 102, 103, 105, 106, 107, 108, 109, 111, 113, 114, 115, 117, 118, 119, 120, 122, 123, 124, 126, 127, 128, 129, 131, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 145, 146, 148, 149, 150, 151, 153, 154, 155, 157, 158, 159, 160, 162, 163, 164, 166, 167, 168, 169, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 182, 183, 184, 186, 186, 187, 188, 189, 190, 192, 193, 194, 195, 195, 196, 197, 199, 200, 201, 202, 202, 203, 204, 205, 206, 207, 208, 208, 209, 210, 211, 212, 213, 214, 214, 215, 216, 217, 218, 219, 219, 220, 221, 222, 223, 223, 224, 225, 226, 226, 227, 228, 228, 229, 230, 231, 232, 232, 232, 233, 234, 235, 235, 236, 236, 237, 238, 238, 239, 239, 240, 240, 241, 242, 242, 242, 243, 244, 245, 245, 246, 246, 247, 247, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 255],
        e = [53, 53, 53, 54, 54, 54, 55, 55, 55, 56, 57, 57, 57, 58, 58, 58, 59, 59, 59, 60, 61, 61, 61, 62, 62, 63, 63, 63, 64, 65, 65, 65, 66, 66, 67, 67, 67, 68, 69, 69, 69, 70, 70, 71, 71, 72, 73, 73, 73, 74, 74, 75, 75, 76, 77, 77, 78, 78, 79, 79, 80, 81, 81, 82, 82, 83, 83, 84, 85, 85, 86, 86, 87, 87, 88, 89, 89, 90, 90, 91, 91, 93, 93, 94, 94, 95, 95, 96, 97, 98, 98, 99, 99, 100, 101, 102, 102, 103, 104, 105, 105, 106, 106, 107, 108, 109, 109, 110, 111, 111, 112, 113, 114, 114, 115, 116, 117, 117, 118, 119, 119, 121, 121, 122, 122, 123, 124, 125, 126, 126, 127, 128, 129, 129, 130, 131, 132, 132, 133, 134, 134, 135, 136, 137, 137, 138, 139, 140, 140, 141, 142, 142, 143, 144, 145, 145, 146, 146, 148, 148, 149, 149, 150, 151, 152, 152, 153, 153, 154, 155, 156, 156, 157, 157, 158, 159, 160, 160, 161, 161, 162, 162, 163, 164, 164, 165, 165, 166, 166, 167, 168, 168, 169, 169, 170, 170, 171, 172, 172, 173, 173, 174, 174, 175, 176, 176, 177, 177, 177, 178, 178, 179, 180, 180, 181, 181, 181, 182, 182, 183, 184, 184, 184, 185, 185, 186, 186, 186, 187, 188, 188, 188, 189, 189, 189, 190, 190, 191, 191, 192, 192, 193, 193, 193, 194, 194, 194, 195, 196, 196, 196, 197, 197, 197, 198, 199];
        for (b = 0; b < a.length; b += 4) a[b] = c[a[b]],
        a[b + 1] = d[a[b + 1]],
        a[b + 2] = e[a[b + 2]]
    },
    roland: function(a) {
        var b, c = [0, 0, 0, 1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 17, 18, 19, 19, 20, 21, 22, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 44, 45, 47, 48, 49, 52, 54, 55, 57, 59, 60, 62, 65, 67, 69, 70, 72, 74, 77, 79, 81, 83, 86, 88, 90, 92, 94, 97, 99, 101, 103, 107, 109, 111, 112, 116, 118, 120, 124, 126, 127, 129, 133, 135, 136, 140, 142, 143, 145, 149, 150, 152, 155, 157, 159, 162, 163, 165, 167, 170, 171, 173, 176, 177, 178, 180, 183, 184, 185, 188, 189, 190, 192, 194, 195, 196, 198, 200, 201, 202, 203, 204, 206, 207, 208, 209, 211, 212, 213, 214, 215, 216, 218, 219, 219, 220, 221, 222, 223, 224, 225, 226, 227, 227, 228, 229, 229, 230, 231, 232, 232, 233, 234, 234, 235, 236, 236, 237, 238, 238, 239, 239, 240, 241, 241, 242, 242, 243, 244, 244, 245, 245, 245, 246, 247, 247, 248, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
        d = [0, 0, 1, 2, 2, 3, 5, 5, 6, 7, 8, 8, 10, 11, 11, 12, 13, 15, 15, 16, 17, 18, 18, 19, 21, 22, 22, 23, 24, 26, 26, 27, 28, 29, 31, 31, 32, 33, 34, 35, 35, 37, 38, 39, 40, 41, 43, 44, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81, 83, 84, 85, 86, 88, 89, 90, 92, 93, 94, 95, 96, 97, 100, 101, 102, 103, 105, 106, 107, 108, 109, 111, 113, 114, 115, 117, 118, 119, 120, 122, 123, 124, 126, 127, 128, 129, 131, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 145, 146, 148, 149, 150, 151, 153, 154, 155, 157, 158, 159, 160, 162, 163, 164, 166, 167, 168, 169, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 182, 183, 184, 186, 186, 187, 188, 189, 190, 192, 193, 194, 195, 195, 196, 197, 199, 200, 201, 202, 202, 203, 204, 205, 206, 207, 208, 208, 209, 210, 211, 212, 213, 214, 214, 215, 216, 217, 218, 219, 219, 220, 221, 222, 223, 223, 224, 225, 226, 226, 227, 228, 228, 229, 230, 231, 232, 232, 232, 233, 234, 235, 235, 236, 236, 237, 238, 238, 239, 239, 240, 240, 241, 242, 242, 242, 243, 244, 245, 245, 246, 246, 247, 247, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 255];
        for (b = 0; b < a.length; b += 4) a[b] = d[a[b]],
        a[b + 1] = c[a[b + 1]]
    },
    roma: function(a) {
        var b, c = [0, 0, 0, 1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 17, 18, 19, 19, 20, 21, 22, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 44, 45, 47, 48, 49, 52, 54, 55, 57, 59, 60, 62, 65, 67, 69, 70, 72, 74, 77, 79, 81, 83, 86, 88, 90, 92, 94, 97, 99, 101, 103, 107, 109, 111, 112, 116, 118, 120, 124, 126, 127, 129, 133, 135, 136, 140, 142, 143, 145, 149, 150, 152, 155, 157, 159, 162, 163, 165, 167, 170, 171, 173, 176, 177, 178, 180, 183, 184, 185, 188, 189, 190, 192, 194, 195, 196, 198, 200, 201, 202, 203, 204, 206, 207, 208, 209, 211, 212, 213, 214, 215, 216, 218, 219, 219, 220, 221, 222, 223, 224, 225, 226, 227, 227, 228, 229, 229, 230, 231, 232, 232, 233, 234, 234, 235, 236, 236, 237, 238, 238, 239, 239, 240, 241, 241, 242, 242, 243, 244, 244, 245, 245, 245, 246, 247, 247, 248, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
        d = [0, 0, 1, 2, 2, 3, 5, 5, 6, 7, 8, 8, 10, 11, 11, 12, 13, 15, 15, 16, 17, 18, 18, 19, 21, 22, 22, 23, 24, 26, 26, 27, 28, 29, 31, 31, 32, 33, 34, 35, 35, 37, 38, 39, 40, 41, 43, 44, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81, 83, 84, 85, 86, 88, 89, 90, 92, 93, 94, 95, 96, 97, 100, 101, 102, 103, 105, 106, 107, 108, 109, 111, 113, 114, 115, 117, 118, 119, 120, 122, 123, 124, 126, 127, 128, 129, 131, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 145, 146, 148, 149, 150, 151, 153, 154, 155, 157, 158, 159, 160, 162, 163, 164, 166, 167, 168, 169, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 182, 183, 184, 186, 186, 187, 188, 189, 190, 192, 193, 194, 195, 195, 196, 197, 199, 200, 201, 202, 202, 203, 204, 205, 206, 207, 208, 208, 209, 210, 211, 212, 213, 214, 214, 215, 216, 217, 218, 219, 219, 220, 221, 222, 223, 223, 224, 225, 226, 226, 227, 228, 228, 229, 230, 231, 232, 232, 232, 233, 234, 235, 235, 236, 236, 237, 238, 238, 239, 239, 240, 240, 241, 242, 242, 242, 243, 244, 245, 245, 246, 246, 247, 247, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 255];
        for (b = 0; b < a.length; b += 4) a[b] = c[a[b]],
        a[b + 2] = d[a[b + 2]]
    },
    georgia: function(a) {
        var b, c = [0, 0, 0, 1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 17, 18, 19, 19, 20, 21, 22, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 44, 45, 47, 48, 49, 52, 54, 55, 57, 59, 60, 62, 65, 67, 69, 70, 72, 74, 77, 79, 81, 83, 86, 88, 90, 92, 94, 97, 99, 101, 103, 107, 109, 111, 112, 116, 118, 120, 124, 126, 127, 129, 133, 135, 136, 140, 142, 143, 145, 149, 150, 152, 155, 157, 159, 162, 163, 165, 167, 170, 171, 173, 176, 177, 178, 180, 183, 184, 185, 188, 189, 190, 192, 194, 195, 196, 198, 200, 201, 202, 203, 204, 206, 207, 208, 209, 211, 212, 213, 214, 215, 216, 218, 219, 219, 220, 221, 222, 223, 224, 225, 226, 227, 227, 228, 229, 229, 230, 231, 232, 232, 233, 234, 234, 235, 236, 236, 237, 238, 238, 239, 239, 240, 241, 241, 242, 242, 243, 244, 244, 245, 245, 245, 246, 247, 247, 248, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
        d = [0, 0, 1, 2, 2, 3, 5, 5, 6, 7, 8, 8, 10, 11, 11, 12, 13, 15, 15, 16, 17, 18, 18, 19, 21, 22, 22, 23, 24, 26, 26, 27, 28, 29, 31, 31, 32, 33, 34, 35, 35, 37, 38, 39, 40, 41, 43, 44, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81, 83, 84, 85, 86, 88, 89, 90, 92, 93, 94, 95, 96, 97, 100, 101, 102, 103, 105, 106, 107, 108, 109, 111, 113, 114, 115, 117, 118, 119, 120, 122, 123, 124, 126, 127, 128, 129, 131, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 145, 146, 148, 149, 150, 151, 153, 154, 155, 157, 158, 159, 160, 162, 163, 164, 166, 167, 168, 169, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 182, 183, 184, 186, 186, 187, 188, 189, 190, 192, 193, 194, 195, 195, 196, 197, 199, 200, 201, 202, 202, 203, 204, 205, 206, 207, 208, 208, 209, 210, 211, 212, 213, 214, 214, 215, 216, 217, 218, 219, 219, 220, 221, 222, 223, 223, 224, 225, 226, 226, 227, 228, 228, 229, 230, 231, 232, 232, 232, 233, 234, 235, 235, 236, 236, 237, 238, 238, 239, 239, 240, 240, 241, 242, 242, 242, 243, 244, 245, 245, 246, 246, 247, 247, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 255];
        for (b = 0; b < a.length; b += 4) a[b + 1] = c[a[b + 1]],
        a[b + 2] = d[a[b + 2]]
    },
    redWhite: function(a) {
        var b, c;
        for (c = 0; c < a.length; c += 4) b = parseInt((a[c] + a[c + 1] + a[c + 2]) / 3, 10),
        b = b > 127 ? 255 : 0,
        255 == b ? (a[c] = 255, a[c + 1] = 0, a[c + 2] = 0) : (a[c] = 255, a[c + 1] = 255, a[c + 2] = 255)
    }
},
ImageModel = Backbone.Model.extend({
    initialize: function(a) {
        this.set("lowRec", a.lowRec),
        this.set("highRec", a.highRec),
        this.set("thumbnail", a.thumbnail)
    },
    loadLowRecImg: function() {
        var a = new Image;
        a.onload = $.proxy(function(a) {
            this.set("lowRecImage", a),
            this.lowRecCallback && $.each(this.lowRecCallback, $.proxy(function(a, b) {
                $.isFunction(b) && b(this)
            },
            this))
        },
        this, a),
        a.src = this.get("lowRec").match("^/controllers/mapper") ? this.get("lowRec") : getSameOriginUrl(this.get("lowRec"))
    },
    loadHighRecImg: function() {
        var a = new Image;
        a.onload = $.proxy(function(a) {
            this.set("highRecImage", a),
            this.highRecCallback && $.each(this.highRecCallback, $.proxy(function(a, b) {
                $.isFunction(b) && b(this)
            },
            this))
        },
        this, a),
        a.src = this.get("highRec").match("^/controllers/mapper") ? this.get("highRec") : getSameOriginUrl(this.get("highRec"))
    },
    addLowRecCallback: function(a) {
        this.lowRecCallback || (this.lowRecCallback = []);
        var b = !1;
        $.each(this.lowRecCallback,
        function(c, d) {
            a == d && (b = !0)
        }),
        b || this.lowRecCallback.push(a)
    },
    addHighRecCallback: function(a) {
        this.highRecCallback || (this.highRecCallback = []);
        var b = !1;
        $.each(this.highRecCallback,
        function(c, d) {
            a == d && (b = !0)
        }),
        b || this.highRecCallback.push(a)
    },
    lowRec: null,
    highRec: null,
    thumbnail: null
}),
ImageTransformationHelper = {
    shouldFitWidth: function(a, b, c) {
        var d = parseFloat(a) / parseFloat(b),
        e = parseFloat(c.width) / parseFloat(c.height);
        return e > 1 ? d > 1 ? e > d ? !0 : !1 : !0 : 1 > e ? d > 1 ? !1 : e > d ? !0 : !1 : d > 1 ? !1 : !0
    },
    getImageOnCanvasDefaultWidth: function(a, b, c) {
        return this.shouldFitWidth(a, b, c) ? c.width: a / (b / c.height)
    },
    getImageOnCanvasDefaultHeight: function(a, b, c) {
        return this.shouldFitWidth(a, b, c) ? b / (a / c.width) : c.height
    }
},
InstagramPanelModel = Backbone.Model.extend({
    imagesModel: null,
    friendsModel: null,
    initialize: function(a) {
        this.app = a.app,
        this.imagesModel = new Backbone.Collection([]),
        this.friendsModel = new Backbone.Collection([]),
        this.pageModel = a.pageModel
    },
    connectInstagram: function(a, b, c) {
        ExternalSourceAccessManager.targetType = 'instagram';
        
        ExternalSourceAccessManager.authenticateUser(2, ExternalSourceAccessManager.getUserInfo, $.proxy(function() {
            b && $.proxy(b, c)()
        },
        this), !1, null, Server.isLogin && !Server.instagramConnected)
    },
    fetchUserFriends: function() {
        var a = this;
        this.get("isFetchingFriends") || (this.set("isFetchingFriends", !0), ExternalSourceAccessManager.getUserContactList(1, $.proxy(function(b) {
            if (this.friendsModel.reset(), a.set("isFetchingFriends", !1), b != ConstantsManager.USER_INFO_UNABLE_TO_GET_USER_CONTACT_LIST_ERROR) {
                for (index in b) b[index].full_name && "" != b[index].full_name || (b[index].full_name = b[index].username);
                this.friendsModel.add(b)
            } else setTimeout(function() {
                a.fetchUserFriends()
            },
            5e3)
        },
        this), $.proxy(function(b) {
            a.set("isFetchingFriends", !1),
            console.log("fetch friends error"),
            console.log(b),
            setTimeout(function() {
                a.fetchUserFriends()
            },
            5e3)
        },
        this), !1, Server.isLogin && !Server.instagramConnected, !1, !0))
    },
    fetchUserPhotos: function(a) {
        this.userId = a,
        this.imagesModel.reset(),
        this.nextPage = 1,
        this.isLoadingNextPage = !0,
        this.hasLastPageFetched = !1,
        this.set("isLoading", !0);
        var a = a;
        ExternalSourceAccessManager.getUserPhoto(1, null, $.proxy(function(b) {
            a == this.userId && $.proxy(this.updateInstagramImages, this)(b),
            this.isLoadingNextPage = !1,
            this.set("isLoading", !1)
        },
        this), $.proxy(function() {
            this.isLoadingNextPage = !1,
            this.set("isLoading", !1)
        },
        this), !1, this.nextPage, this.nextPage, Server.isLogin && !Server.instagramConnected, a)
    },
    updateInstagramImages: function(a) {
        if (a == ConstantsManager.USER_INFO_NO_MEDIA_DATA_TO_RETURN) this.hasLastPageFetched = !0;
        else if (a == ConstantsManager.USER_INFO_UNABLE_TO_GET_USER_MEDIA_ERROR);
        else {
            var b = new Array;
            for (index in a) {
                var c = new ImageModel({
                    lowRec: a[index].images.low_resolution,
                    highRec: a[index].images.standard_resolution,
                    thumbnail: a[index].images.squared_thumbnail
                }); ! this.app.controlPanel || "instagram-photo-list" != this.app.controlPanel.currentView.currentViewId && "instagram-connect" != this.app.controlPanel.currentView.currentViewId && "photos-btn" != this.app.controlPanel.currentView.currentViewId || this.pageModel.addImageToRandomPool(c),
                b.push(c)
            }
            this.imagesModel.add(b),
            this.nextPage++
        }
        this.isLoadingNextPage = !1,
        setTimeout($.proxy(function() {
            {
                var a = $(".instagram-collection-view");
                a.height() - a.parents(".scroll").height()
            }
            a.parents(".scroll").height() > a.height() && this.loadNextPage()
        },
        this), 5e3)
    },
    loadNextPage: function() {
        if (!this.hasLastPageFetched && !this.isLoadingNextPage) {
            this.isLoadingNextPage = !0;
            var a = this.userId;
            ExternalSourceAccessManager.getUserPhoto(1, null, $.proxy(function(b) {
                a == this.userId && $.proxy(this.updateInstagramImages, this)(b),
                this.isLoadingNextPage = !1
            },
            this), $.proxy(function() {
                this.isLoadingNextPage = !1
            },
            this), !1, this.nextPage, this.nextPage, Server.isLogin && !Server.instagramConnected, this.userId)
        }
    }
}),
StampPanelModel = Backbone.Model.extend({
    stampsModel: null,
    stampsAlbumsModel: null,
    initialize: function(a) {
        this.stampsAlbumsModel = new Backbone.Collection(a.stamps),
        this.stampsModel = new Backbone.Collection([])
    },
    loadDetailPageWithAlbumId: function(a) {
        this.stampsModel.reset();
        var b = this.get("stamps");
        for (index in b) if (b[index].id == a) {
            var c = [];
            $.each(b[index].containing_images,
            function(a, b) {
                var d = new ImageModel({
                    lowRec: b.images.low_resolution,
                    highRec: b.images.raw_uri,
                    thumbnail: b.images.squared_thumbnail
                });
                c.push(d)
            }),
            this.stampsModel.add(c)
        }
    }
}),
TextModel = Backbone.Model.extend({}),
TransformToolModel = Backbone.Model.extend({
    initialize: function(a) {
        var b = a.imageData;
        if (this.set("canvasTransformData", a.userTransformData), this.set("imageSrc", b.get("highRec")), !b.get("lowRecImage")) return void b.addLowRecCallback($.proxy(this.initialize, this, a));
        this.calculatePos();
        var c = b.get("lowRecImage"),
        d = this.get("holderData"),
        e = ImageTransformationHelper.getImageOnCanvasDefaultWidth(c.width, c.height, d),
        f = ImageTransformationHelper.getImageOnCanvasDefaultHeight(c.width, c.height, d),
        g = parseInt(d.top) - (f - parseInt(d.height)) / 2,
        h = parseInt(d.left) - (e - parseInt(d.width)) / 2;
        this.set("defaultPosition", {
            top: g,
            left: h,
            width: e,
            height: f
        }),
        this.trigger("loadComplete")
    },
    calculatePos: function() {
        var a = this.get("imageData"),
        b = this.get("holderData"),
        c = this.get("canvasTransformData"),
        d = a.get("lowRecImage"),
        e = ImageTransformationHelper.getImageOnCanvasDefaultWidth(d.width, d.height, b) * c.scale,
        f = ImageTransformationHelper.getImageOnCanvasDefaultHeight(d.width, d.height, b) * c.scale,
        g = parseInt(b.top) - (f - parseInt(b.height)) / 2 + c.transTop,
        h = parseInt(b.left) - (e - parseInt(b.width)) / 2 + c.transLeft;
        this.set("toolTop", g),
        this.set("toolLeft", h),
        this.set("toolWidth", e),
        this.set("toolHeight", f),
        this.set("holderTop", b.top),
        this.set("holderLeft", b.left),
        this.set("holderWidth", b.width),
        this.set("holderHeight", b.height);
        var i = 1,
        j = b.width / 300,
        k = b.height / 300;
        i = k > j ? k: j,
        this.set("resizeScale", i),
        this.set("scaledHolderWidth", b.width / i),
        this.set("scaledHolderHeight", b.height / i),
        this.set("scaledToolMarginLeft", (h - b.left) / i),
        this.set("scaledToolMarginTop", (g - b.top) / i),
        this.set("scaledToolWidth", e / i),
        this.set("scaledToolHeight", f / i)
    },
    initStartDrag: function() {
        this.set("startDragTransformData", {
            transTop: this.get("canvasTransformData").transTop,
            transLeft: this.get("canvasTransformData").transLeft,
            scale: this.get("canvasTransformData").scale
        }),
        this.set("startDragRect", {
            top: this.get("toolTop"),
            left: this.get("toolLeft"),
            width: this.get("toolWidth"),
            height: this.get("toolHeight")
        });
        var a = this.getReferenceCoor(this.get("startDragRect"), {
            x: 0,
            y: 0
        },
        "nw-resize"),
        b = this.getImageCenter(),
        c = this.getDistance(a, b);
        this.set("startDragDistance", c)
    },
    drag: function(a, b) {
        {
            var c = (this.get("holderData"), this.get("canvasTransformData")); ({
                transLeft: c.transLeft,
                transTop: c.transTop,
                scale: c.scale
            })
        }
        if ("move" == b) {
            var d = this.get("startDragTransformData").transLeft,
            e = this.get("startDragTransformData").transTop;
            c.transLeft = d + a.x,
            c.transTop = e + a.y
        } else {
            var f = this.getImageCenter();
            if ("resize" == b) var g = this.get("startDragDistance") * (1 + a.d / this.get("startDragDistance"));
            else var h = this.getReferenceCoor(this.get("startDragRect"), a, b),
            g = this.getDistance(h, f);
            var i = this.get("defaultPosition").height,
            j = this.get("defaultPosition").width,
            k = Math.sqrt(Math.pow(i / 2, 2) + Math.pow(j / 2, 2));
            c.scale = g / parseFloat(k)
        } ({
            top: this.get("toolTop"),
            left: this.get("toolLeft"),
            width: this.get("toolWidth"),
            height: this.get("toolHeight")
        });
        this.set("canvasTransformData", c),
        this.calculatePos(),
        this.fixImageToWrapHolder(b),
        this.trigger("change:canvasTransformData"),
        "move" != b && this.computeImageQuality()
    },
    getDistance: function(a, b) {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
    },
    fixImageToWrapHolder: function(a) {
        var b = this.get("toolLeft"),
        c = this.get("toolTop"),
        d = this.get("toolWidth"),
        e = this.get("toolHeight"),
        f = this.get("holderData"),
        g = this.get("canvasTransformData");
        if ("move" == a) b > f.left && (g.transLeft -= b - parseInt(f.left)),
        c > f.top && (g.transTop -= c - parseInt(f.top)),
        b + d < parseInt(f.left) + parseInt(f.width) && (g.transLeft += parseInt(f.left) + parseInt(f.width) - (b + d)),
        c + e < parseInt(f.top) + parseInt(f.height) && (g.transTop += parseInt(f.top) + parseInt(f.height) - (c + e));
        else {
            var h = this.get("imageData"),
            i = h.get("lowRecImage"),
            j = ImageTransformationHelper.getImageOnCanvasDefaultWidth(i.width, i.height, f),
            k = ImageTransformationHelper.getImageOnCanvasDefaultHeight(i.width, i.height, f);
            j > d && (g.scale = 1),
            k > e && (g.scale = 1),
            this.set("canvasTransformData", g),
            this.calculatePos(),
            b = this.get("toolLeft"),
            c = this.get("toolTop"),
            d = this.get("toolWidth"),
            e = this.get("toolHeight"),
            f = this.get("holderData"),
            b > f.left && (g.transLeft -= b - parseInt(f.left)),
            c > f.top && (g.transTop -= c - parseInt(f.top)),
            b + d < parseInt(f.left) + parseInt(f.width) && (g.transLeft += parseInt(f.left) + parseInt(f.width) - (b + d)),
            c + e < parseInt(f.top) + parseInt(f.height) && (g.transTop += parseInt(f.top) + parseInt(f.height) - (c + e))
        }
        this.set("canvasTransformData", g),
        this.calculatePos()
    },
    getReferenceCoor: function(a, b, c) {
        var d = this.getImageCenter();
        if ("nw-resize" == c) {
            var e = a.left + b.x,
            f = a.top + b.y;
            e > d.x && (e = d.x),
            f > d.y && (f = d.y)
        } else if ("sw-resize" == c) {
            var e = a.left + b.x,
            f = a.top + a.height + b.y;
            e > d.x && (e = d.x),
            f < d.y && (f = d.y)
        } else if ("se-resize" == c) {
            var e = a.left + a.width + b.x,
            f = a.top + a.height + b.y;
            e < d.x && (e = d.x),
            f < d.y && (f = d.y)
        } else if ("ne-resize" == c) {
            var e = a.left + a.width + b.x,
            f = a.top + b.y;
            e < d.x && (e = d.x),
            f > d.y && (f = d.y)
        }
        return {
            x: e,
            y: f
        }
    },
    getImageCenter: function() {
        return {
            x: this.get("toolLeft") + this.get("toolWidth") / 2,
            y: this.get("toolTop") + this.get("toolHeight") / 2
        }
    },
    computeImageQuality: function() {
        var a = this.get("imageData"),
        b = this.get("holderData"),
        c = this.get("canvasTransformData"),
        d = this.designPanelState.resolutionDifferent(c, b, a),
        e = this.designPanelState.getImageQualityLevel(d);
        this.set("imageQuality", d),
        this.set("imageQualityLevel", e)
    },
    getPercentageImageQualityDifference: function() {
        var a = this.get("imageQuality");
        return a ? (.7 - a) / .7 * 100 : 0
    }
}),
UploadPanelState = Backbone.Model.extend({
    imagesModel: null,
    initialize: function(a) {
        this.imagesModel = new Backbone.Collection([]),
        this.pageModel = a.pageModel,
        this.set("uploadCount", 0)
    },
    uploadFile: function(a, b, c, d) {
        if (a && a.length > ConstantsManager.FILE_UPLOAD_USER_PHOTO_BATCH_SIZE_LIMIT) return void $.proxy(c, d)(__("You can only upload at most " + ConstantsManager.FILE_UPLOAD_USER_PHOTO_BATCH_SIZE_LIMIT + " images at a time."));
        var e = this;
        if (_gaq && !commonData.trackedUploadFile && (commonData.trackedUploadFile = !0, _gaq.push(["_trackPageview", "/ga_builder_upload_photo"])), window.FormData) {
            formdata = new FormData;
            for (index in a) if (a[index].size >= ConstantsManager.FILE_UPLOAD_USER_PHOTO_LIMIT) return $.proxy(c, d)(__("The maximum file size per upload image is " + ConstantsManager.FILE_UPLOAD_USER_PHOTO_LIMIT_TEXT + ".")),
            void this.set("uploadCount", 0);
            $.each(a,
            function(a, f) {
                f.type.match(/image.*/) ? (window.FileReader && (reader = new FileReader, reader.readAsDataURL(f)), formdata && formdata.append("fileUploader", f), formdata.append("fn", "uploadFile"), formdata.append("ajax", "Y"), formdata.append("uploadType", ConstantsManager.FILE_UPLOAD_TYPE_USER_IMAGE), $.ajax({
                    url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "upload",
                    type: "POST",
                    data: formdata,
                    processData: !1,
                    contentType: !1,
                    beforeSend: function() {
                        e.set("uploadCount", e.get("uploadCount") + 1)
                    },
                    success: function(a) {
                        e.set("uploadCount", e.get("uploadCount") - 1),
                        a == ConstantsManager.FILE_UPLOAD_SUCCESS ? (_gaq && !commonData.trackedUploadFileSuccess && (commonData.trackedUploadFileSuccess = !0, _gaq.push(["_trackPageview", "/ga_builder_upload_photo_success"])), $.proxy(b, d)(), e.reloadImages()) : $.proxy(c, d)(a == ConstantsManager.FILE_UPLOAD_FAIL_FILE_SIZE_EXCEED_LIMIT ? __("The maximum file size per upload image is " + ConstantsManager.FILE_UPLOAD_USER_PHOTO_LIMIT_TEXT + ".") : __("Upload failed"))
                    }
                })) : $.proxy(c, d)(__("Please upload an image"))
            })
        } else $.proxy(c, d)(__("Upload failed"))
    },
    uploadForIE: function(a, b, c) {
        var d = this;
        _gaq && !commonData.trackedUploadFile && (commonData.trackedUploadFile = !0, _gaq.push(["_trackPageview", "/ga_builder_upload_photo"])),
        $("#myIframe").contents().html("");
        var e = setInterval(function() {
            var f = $("#myIframe").contents().text();
            d.set("uploadCount", d.get("uploadCount") + 1),
            "" != f && (d.set("uploadCount", d.get("uploadCount") - 1), f == ConstantsManager.FILE_UPLOAD_SUCCESS ? (_gaq && !commonData.trackedUploadFileSuccess && (commonData.trackedUploadFileSuccess = !0, _gaq.push(["_trackPageview", "/ga_builder_upload_photo_success"])), $.proxy(a, c)(), d.reloadImages()) : $.proxy(b, c)(__("Upload failed")), clearInterval(e))
        },
        1e3);
        $("#hiddenForm").submit()
    },
    reloadImages: function() {
        this.nextPage = 1,
        this.hasLastPageFetched = !1,
        this.isLoadingNextPage = !1,
        this.pageModel.cleanRandomPool(),
        this.imagesModel.reset(),
        this.set("isLoading", !0);
        var a = this;
        this.loadNextPage(function() {
            a.set("isLoading", !1)
        })
    },
    loadNextPage: function(a) {
        var b = this;
        b.isLoadingNextPage || b.hasLastPageFetched || (b.isLoadingNextPage = !0, $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "getuploadlist",
            type: "get",
            dataType: "json",
            cache: !1,
            data: {
                fn: "getUploadFile",
                uploadType: ConstantsManager.FILE_UPLOAD_TYPE_USER_IMAGE,
                ajax: "Y",
                startPage: b.nextPage,
                pageSize: 20
            },
            success: function(c) {
                if (a && a(), c == ConstantsManager.FILE_UPLOAD_GET_FILE_FAIL) b.imagesModel.reset();
                else if (c == ConstantsManager.FILE_UPLOAD_NO_MEDIA_DATA_TO_RETURN) b.hasLastPageFetched = !0;
                else {
                    var d = new Array;
                    for (index in c) {
                        var e = new ImageModel({
                            id: c[index].id,
                            lowRec: c[index].uri,
                            highRec: c[index].uri,
                            thumbnail: getThumbnailUrl(c[index].uri)
                        });
                        d.push(e),
                        b.get("shouldStartTrackingRandomPool") && b.pageModel.addImageToRandomPool(e)
                    }
                    b.imagesModel.add(d),
                    b.nextPage++,
                    b.isLoadingNextPage = !1,
                    setTimeout($.proxy(function() {
                        {
                            var a = $("ul.upload-list");
                            parseInt(a.height() - a.parents(".scroll").height()) + parseInt($(".upload-drop-area-container").height())
                        }
                        a.parents(".scroll").height() > a.height() && b.loadNextPage()
                    },
                    this), 5e3)
                }
            }
        }))
    },
    deletePhoto: function(a) {
        var b = this;
        $.ajax({
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "upload",
            type: "POST",
            dataType: "json",
            cache: !1,
            data: {
                fn: "deleteFile",
                uploadedFileId: a.get("id"),
                ajax: "Y"
            },
            success: function() {
                console.log("file deleted")
            }
        }),
        this.imagesModel.remove(a),
        b.get("shouldStartTrackingRandomPool") && (b.pageModel.cleanRandomPool(), b.pageModel.addUploadToRandomPool())
    },
    startTrackingUpdateForRandomPool: function() {
        this.set("shouldStartTrackingRandomPool", !0)
    }
}),
ControlCaseDetailPanel = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-case-options-new",
    templateBezel: "#template-builder-case-options",
    render: function() {
        {
            var a = !1,
            b = this.model.get("currentProduct");
            this.model.get("currentDevice")
        }
        isBezelCase = b && b.id == ConstantsManager.PRODUCT_TYPE_BEZEL_CASE,
        a = b && b.id == ConstantsManager.PRODUCT_TYPE_CASE,
        this.$el.html(Mustache.render($(this.template).html(), {
            preview: this.model.getCasePreivewUrl(),
            itemOptionList: this.model.getRenderItemOptionList(),
            hasBack: (!Server.skipSubscription || !Server.skipCaseSelect) && this.model.getRenderProductList().length > 1,
            shouldShowDiscription: Server.skipSubscription || !isBezelCase || !Server.canSubscribe,
            isBezelCase: isBezelCase,
            isSnapCase: a,
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        }));
        var c = this.$("#case-option-preview");
        c.length > 0 && !c[0].complete ? (c[0].onload = $.proxy(function(a) {
            a.addClass("hide")
        },
        this, this.$(".spinner-wrap")), this.$(".spinner-wrap").removeClass("hide")) : this.$(".spinner-wrap").addClass("hide")
    },
    events: {
        "click .back-btn": "backButtonClicked",
        "click .case-picture": "colorButtonClicked"
    },
    initialize: function(a) {
        this.controlPanel = a.controlPanel,
        this.model.on("change:currentItemOption", this.render, this),
        this.controlPanel.on("change:navStructure", this.render, this)
    },
    backButtonClicked: function() {
        return this.model.getRenderProductList().length <= 1 ? !1 : (this.controlPanel.gotoSlide(this.model.get("currentSubscription") ? "case-subscription": "case-list"), !1)
    },
    colorButtonClicked: function(a) {
        var b = ($("#case-option-preview"), $(a.currentTarget)),
        c = b.attr("data-item-option-id");
        return this.model.setCurrentItemOptionById(c),
        commonData.selectedFirstColor || (commonData.selectedFirstColor = !0, this.controlPanel.gotoSlide("layout-list")),
        !1
    }
}),
ControlCasePanel = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-case",
    render: function() {
        this.$el.html(Mustache.render($(this.template).html(), {
            productList: this.model.getRenderProductList(),
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        }))
    },
    events: {
        "click .case-btn": "caseButtonClicked"
    },
    initialize: function(a) {
        this.model.on("change:productList", this.render, this),
        this.model.on("change:currentProduct", this.render, this),
        this.model.on("change:currentItemOption", this.render, this),
        this.controlPanel = a.controlPanel
    },
    caseButtonClicked: function(a) {
        var b = $(a.currentTarget);
        this.model.setCurrentProductWithId(b.attr("data-id")),
        1 == b.attr("data-id") ? (this.controlPanel.gotoSlide("case-option"), this.model.set("currentSubscription", null)) : 4 == b.attr("data-id") ? this.controlPanel.gotoSlide("case-option") : commonData.selectedFirstProduct || (commonData.selectedFirstProduct = !0, this.controlPanel.gotoSlide("layout-list"))
    }
}),
ControlCaseSubscription = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-case-subscription",
    events: {
        "change .subscription-btn": "subscriptionChanged",
        "click .back-btn": "backButtonClicked",
        "click .subscription-btn": "subscriptionButtonClicked",
        "click [data-reveal]": "toggleAdvantage"
    },
    initialize: function(a) {
        this.controlPanel = a.controlPanel,
        this.model.on("change:currentSubscription", this.updateRender, this)
    },
    render: function() {
        this.$("[data-reveal]").unbind("click"),
        this.$el.html(Mustache.render($(this.template).html(), {
            regularSelected: this.model.get("currentSubscription") ? 6e4 == this.model.get("currentSubscription").id: !1,
            month6Selected: this.model.get("currentSubscription") ? 60001 == this.model.get("currentSubscription").id: !1,
            month12Selected: this.model.get("currentSubscription") ? 60002 == this.model.get("currentSubscription").id: !1,
            hasBack: !Server.skipCaseSelect,
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        }))
    },
    updateRender: function() {
        var a = this.model.get("currentSubscription");
        $(".case-btn").removeClass("active"),
        a && $(".subscription-btn[data-id=" + a.id + "] .case-btn").addClass("active")
    },
    backButtonClicked: function() {
        return this.controlPanel.gotoSlide("case-list"),
        !1
    },
    subscriptionButtonClicked: function(a) {
        var b = $(a.currentTarget).attr("data-id");
        return this.model.setSubscriptionById(b),
        setTimeout($.proxy(function() {
            this.controlPanel.gotoSlide("case-option")
        },
        this), 500),
        !1
    },
    toggleAdvantage: function(a) {
        return a.stopPropagation(),
        !1
    }
}),
ControlDevicePanel = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-device",
    events: {
        "click .device-btn": "deviceButtonClicked"
    },
    initialize: function(a) {
        this.controlPanel = a.controlPanel,
        this.model.on("change:currentDevice", this.deviceChanged, this),
        this.app = a.app
    },
    render: function() {
        var a = this.model.getRenderDeviceList(),
        b = !1;
        $.each(a,
        function(a, c) {
            c.is_featured || (b = !0)
        }),
        this.$el.html(Mustache.render($(this.template).html(), {
            deviceList: a,
            hasMoreDevice: b,
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        }))
    },
    deviceButtonClicked: function(a) {
        var b = $(a.currentTarget),
        c = b.attr("data-device-short-name"),
        d = (this.model.get("currentDevice"), this.model.get("currentLayout"));
        this.model.setCurrentDevice(c);
        var e = this.model.get("currentLayout");
        return d && e && d.name == e.name && d.format.containers.length == e.format.containers.length || designPanelState.adaptDesign(d),
        commonData.selectedFirstDevice || (commonData.selectedFirstDevice = !0, setTimeout($.proxy(function() {
            this.controlPanel.gotoSlide("case-list")
        },
        this), 500)),
        !1
    },
    deviceChanged: function() {
        var a = $(".device-btn.active"),
        b = a.attr("data-device-short-name");
        a.find("img").attr("src", this.model.getDeviceIconPathWithSelectState(b)),
        a.removeClass("active"),
        a.addClass("text-default");
        var c = this.model.get("currentDevice"),
        d = $(".device-btn[data-device-short-name=" + c.short_name + "]");
        d.find("img").attr("src", this.model.getDeviceIconPathWithSelectState(c.short_name)),
        d.removeClass("text-default"),
        d.addClass("active")
    }
}),
ControlFacebookPanel = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-photos-facebook",
    events: {
        "click .ext-source-btn": "connectFacebook"
    },
    initialize: function(a) {
        this.controlPanel = a.controlPanel
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
    connectFacebook: function() {
        this.$(".facebook-btn-text").text(__("Loading..."));
        this.model.connectFacebook(this.connectSucces, this.connectFail, this);
    },
    connectSucces: function() {
        _gaq && _gaq.push(["_trackPageview", "/ga_builder_click_connect_fb_success"]),
        this.controlPanel.setDefault("facebook-btn", "facebook-album-list"),
        this.controlPanel.gotoSlide("facebook-album-list"),
        this.render()
    },
    connectFail: function(a) {
        console.log("connect facebook failed"),
        console.log(a),
        this.render()
    }
}),
FacebookAlbumViewItem = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-photos-facebook-album-item",
    tagName: "li",
    className: "column6 mt1 text-center",
    initialize: function(a) {
        this.facebookModel = a.facebookModel,
        this.controlPanel = a.controlPanel
    },
    events: {
        click: "albumClicked"
    },
    albumClicked: function() {
        this.controlPanel.gotoSlide("facebook-photo-list"),
        this.facebookModel.loadAlbum(this.model.get("id"), this.albumLoadSuccess, this.albumLoadFailed, this)
    },
    albumLoadSuccess: function(a) {
        this.facebookModel.updateFacebookImages(a)
    },
    albumLoadFailed: function(a) {
        console.log("album load fail"),
        console.log(a)
    },
    render: function() {
        this.model.attributes.__ = __m,
        this.model.attributes.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render($(this.template).html(), this.model.attributes));
        var a = new Image;
        a.src = this.model.get("cover_photo") ? this.model.get("cover_photo").images.thumbnail: "/img/social_pic_temp.jpg",
        a.complete ? this.$(".spinner-wrap").addClass("hide") : (a.onload = $.proxy(function(a) {
            a.addClass("hide")
        },
        this, this.$(".spinner-wrap")), this.$(".spinner-wrap").removeClass("hide"))
    }
}),
FacebookAlbumCollectionView = Backbone.Marionette.CompositeView.extend({
    itemViewContainer: "#fb-album-container",
    template: "#template-builder-photos-facebook-album",
    itemView: FacebookAlbumViewItem,
    events: {
        "click .friend-album-btn": "friendAlbumButtonClicked",
        "click .your-album-btn": "yourAlbumButtonClicked",
        "click .back-to-friend-list-btn": "friendAlbumButtonClicked"
    },
    initialize: function(a) {
        this.facebookModel = a.facebookModel,
        this.controlPanel = a.controlPanel,
        this.facebookModel.on("change:profilePicture", this.render, this),
        this.facebookModel.on("change:isLoadingAlbum", this.render, this)
    },
    buildItemView: function(a, b) {
        var c = new b({
            model: a,
            facebookModel: this.facebookModel,
            controlPanel: this.controlPanel
        });
        return c
    },
    renderModel: function() {
        var a = {};
        a = this.serializeData(),
        a = this.mixinTemplateHelpers(a),
        a.__ = __m,
        a.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        a.friendAlbum = this.facebookModel.get("friendAlbum"),
        a.selectedFriend = this.facebookModel.get("selectedFriend"),
        a.friendProfilePicture = this.facebookModel.get("friendProfilePicture"),
        a.profilePicture = this.facebookModel.get("profilePicture");
        var b = this.getTemplate();
        return Mustache.render($(b).html(), a)
    },
    onRender: function() {
        this.facebookModel.get("isLoadingAlbum") ? this.$(".loading").removeClass("hide") : this.$(".loading").addClass("hide")
    },
    friendAlbumButtonClicked: function() {
        return this.facebookModel.friendsModel && 0 != this.facebookModel.friendsModel.length || this.facebookModel.fetchUserFriends(),
        this.facebookModel.set("friendAlbum", !0),
        this.facebookModel.set("selectedFriend", !1),
        facebookFriendsCompositeView.render(),
        this.controlPanel.gotoSlide("facebook-friends-page"),
        !1
    },
    yourAlbumButtonClicked: function() {
        return this.facebookModel.albumModel.reset(),
        this.facebookModel.fetchUserAlbum(),
        this.facebookModel.set("friendAlbum", !1),
        this.facebookModel.set("selectedFriend", !1),
        facebookAlbumList.render(),
        this.controlPanel.gotoSlide("facebook-album-list"),
        !1
    }
}),
FacebookPhotoPage = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-photos-facebook-photo-list-view",
    initialize: function(a) {
        this.controlPanel = a.controlPanel,
        this.model.on("change:isLoadingPhoto", this.onRender, this)
    },
    onRender: function() {
        this.model.get("isLoadingPhoto") ? this.$(".loading").removeClass("hide") : this.$(".loading").addClass("hide")
    },
    events: {
        "click .back-btn": "backButtonClicked"
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
    backButtonClicked: function() {
        this.controlPanel.gotoSlide("facebook-album-list")
    }
}),
FacebookPhotoViewItem = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-photo-item",
    tagName: "li",
    className: "column4 relative",
    events: {
        dblclick: "imageDoubleClicked"
    },
    initialize: function(a) {
        this.facebookModel = a.facebookModel
    },
    render: function() {
        this.model.attributes.__ = __m,
        this.model.attributes.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render($(this.template).html(), this.model.attributes));
        var a = this.$(".image-draggable");
        a[0].complete || (a[0].onload = $.proxy(function(a) {
            a.addClass("hide")
        },
        this, this.$(".spinner-wrap")), this.$(".spinner-wrap").removeClass("hide")),
        this.$(".image-draggable").draggable({
            helper: "clone",
            appendTo: "body",
            zIndex: 100,
            opacity: .7,
            start: $.proxy(function() { ! commonData.trackedFBFriendImageToGrid && this.facebookModel.get("selectedFriend") && (commonData.trackedFBFriendImageToGrid = !0, _gaq && _gaq.push(["_trackPageview", "/ga_builder_fb_first_friend_image_to_grid"])),
                this.model.loadLowRecImg(),
                this.model.loadHighRecImg()
            },
            this)
        }).data("image", this.model)
    },
    imageDoubleClicked: function() {
        this.model.loadLowRecImg(),
        this.model.loadHighRecImg(),
        $.proxy(builderPageState.putNextAvailableGrid, builderPageState)(this.model)
    }
}),
FacebookPhotoCollectionView = Backbone.Marionette.CollectionView.extend({
    className: "social-pics row reset-list facebook-photo-collection-view",
    tagName: "ul",
    itemView: FacebookPhotoViewItem,
    onRender: function() {
        var a = this;
        this.$el.parents(".scroll").scroll(function() {
            var b = a.$el.parents(".scroll").scrollTop(),
            c = a.$el.height() - a.$el.parents(".scroll").height() - 300;
            b >= c && a.model.loadNextPage()
        })
    },
    buildItemView: function(a, b) {
        var c = new b({
            facebookModel: this.model,
            model: a
        });
        return c
    }
}),
FacebookFriendsViewItem = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-facebook-friends-item",
    tagName: "li",
    events: {
        "click .user-btn": "userClicked"
    },
    initialize: function(a) {
        this.facebookModel = a.facebookModel,
        this.controlPanel = a.controlPanel
    },
    render: function() {
        this.model.attributes.__ = __m,
        this.model.attributes.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render($(this.template).html(), this.model.attributes))
    },
    userClicked: function() {
        return this.facebookModel.albumModel.reset(),
        this.facebookModel.fetchUserAlbum(this.model.get("user_id")),
        this.facebookModel.set("friendAlbum", !0),
        this.facebookModel.set("selectedFriend", !0),
        this.facebookModel.set("friendProfilePicture", this.model.get("profile_picture")),
        facebookAlbumList.render(),
        this.controlPanel.gotoSlide("facebook-album-list"),
        !1
    }
}),
FacebookFriendsCompositeView = Backbone.Marionette.CompositeView.extend({
    itemViewContainer: "ul",
    template: "#template-builder-facebook-friends-page",
    itemView: FacebookFriendsViewItem,
    events: {
        "click .your-album-btn": "yourAlbumButtonClicked",
        "keyup #search-friends": "search",
        "submit .search-form": "searchSubmit"
    },
    initialize: function(a) {
        this.facebookModel = a.facebookModel,
        this.controlPanel = a.controlPanel,
        this.friendsModel = a.friendsModel,
        this.facebookModel.on("change:isFetchingFriends", this.onRender, this)
    },
    buildItemView: function(a, b) {
        var c = new b({
            model: a,
            facebookModel: this.facebookModel,
            controlPanel: this.controlPanel,
            friendsModel: this.friendsModel
        });
        return c
    },
    renderModel: function() {
        var a = {};
        a = this.serializeData(),
        a = this.mixinTemplateHelpers(a),
        a.__ = __m,
        a.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        a.searchWord = this.searchWord,
        a.friendAlbum = this.facebookModel.get("friendAlbum"),
        a.selectedFriend = this.facebookModel.get("selectedFriend"),
        a.profilePicture = this.facebookModel.get("profilePicture");
        var b = this.getTemplate();
        return Mustache.render($(b).html(), a)
    },
    onRender: function() {
        this.facebookModel.get("isFetchingFriends") ? this.$(".loading").removeClass("hide") : this.$(".loading").addClass("hide")
    },
    yourAlbumButtonClicked: function() {
        return this.facebookModel.albumModel.reset(),
        this.facebookModel.fetchUserAlbum(),
        this.facebookModel.set("friendAlbum", !1),
        this.facebookModel.set("selectedFriend", !1),
        facebookAlbumList.render(),
        this.controlPanel.gotoSlide("facebook-album-list"),
        !1
    },
    searchSubmit: function() {
        return this.search(),
        !1
    },
    search: function() {
        var a = this.$("#search-friends").val();
        this.searchWord = a,
        this.collection = a && "" != a ? new Backbone.Collection(this.facebookModel.friendsModel.filter(function(b) {
            a = a.replace(/\s/, ".*");
            var c = new RegExp(".*" + a + ".*", "i");
            return c.test(b.get("full_name")) || c.test(b.get("username"))
        })) : this.facebookModel.friendsModel,
        this._renderChildren()
    }
}),
FilterView = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-control-filter",
    className: "block f-left",
    tagName: "li",
    events: {
        "click .build-filter-btn": "filterButtonClicked"
    },
    initialize: function(a) {
        this.builderPageState = a.builderPageState,
        this.builderPageState.on("change:currentFilter", this.render, this)
    },
    render: function() {
        this.model.attributes.selected = !this.builderPageState.get("currentFilter") && "none" == this.model.attributes.shortName || this.model.get("shortName") == this.builderPageState.get("currentFilter") ? !0 : !1,
        this.model.attributes.__ = __m,
        this.model.attributes.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render($(this.template).html(), this.model.attributes))
    },
    filterButtonClicked: function() {
        var a = this.model.get("shortName");
        return this.builderPageState.set("currentFilter", a),
        !1
    }
}),
FilterPage = Backbone.Marionette.CompositeView.extend({
    template: "#template-builder-control-filter-page",
    itemView: FilterView,
    itemViewContainer: "#filter-list-container",
    collection: new Backbone.Collection([{
        shortName: "none",
        displayName: "None"
    },
    {
        shortName: "grayScale",
        displayName: "Grayscale"
    },
    {
        shortName: "gotham",
        displayName: "Gotham"
    },
    {
        shortName: "lomo",
        displayName: "Lomo"
    },
    {
        shortName: "sepia",
        displayName: "Sepia"
    },
    {
        shortName: "west",
        displayName: "West"
    },
    {
        shortName: "roland",
        displayName: "Roland"
    },
    {
        shortName: "roma",
        displayName: "Roma"
    },
    {
        shortName: "georgia",
        displayName: "Georgia"
    }]),
    buildItemView: function(a, b) {
        var c = new b({
            model: a,
            builderPageState: this.builderPageState
        });
        return c
    },
    initialize: function(a) {
        this.builderPageState = a.builderPageState
    },
    renderModel: function() {
        var a = {};
        a = this.serializeData(),
        a = this.mixinTemplateHelpers(a),
        a.__ = __m,
        a.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        };
        var b = this.getTemplate();
        return Mustache.render($(b).html(), a)
    }
}),
ControlInstagramConnect = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-photos-instagram-connect",
    photoItemCollectionView: null,
    initialize: function(a) {
        this.controlPanel = a.controlPanel
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
    events: {
        "click .ext-source-btn": "connectInstagram"
    },
    connectInstagram: function() {
        _gaq && _gaq.push(["_trackPageview", "/ga_builder_click_connect_ig"]),
        this.$(".instagram-btn-text").text(__("Loading...")),
        this.model.connectInstagram(this.connectSuccess, this.connectFailed, this)
    },
    connectSuccess: function() {
        _gaq && _gaq.push(["_trackPageview", "/ga_builder_click_connect_ig_success"]),
        this.controlPanel.setDefault("instagram-btn", "instagram-photo-list"),
        this.controlPanel.gotoSlide("instagram-photo-list"),
        this.render()
    },
    connectFailed: function(a) {
        console.log("failed"),
        console.log(a),
        this.render()
    }
}),
InstagramPhotoItemView = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-photo-item",
    className: "column4 relative",
    tagName: "li",
    events: {
        dblclick: "imageDoubleClicked"
    },
    initialize: function(a) {
        this.instagramModel = a.instagramModel
    },
    render: function() {
        this.model.attributes.__ = __m,
        this.model.attributes.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render($(this.template).html(), this.model.attributes));
        var a = this.$(".image-draggable");
        a[0].complete ? this.$(".spinner-wrap").addClass("hide") : (a[0].onload = $.proxy(function(a) {
            a.addClass("hide")
        },
        this, this.$(".spinner-wrap")), this.$(".spinner-wrap").removeClass("hide")),
        this.$(".image-draggable").draggable({
            helper: "clone",
            appendTo: "body",
            zIndex: 100,
            opacity: .7,
            start: $.proxy(function() { ! commonData.trackedIGFriendImageToGrid && this.instagramModel.get("selectedFriend") && (commonData.trackedIGFriendImageToGrid = !0, _gaq && _gaq.push(["_trackPageview", "/ga_builder_ig_first_friend_image_to_grid"])),
                this.model.loadLowRecImg(),
                this.model.loadHighRecImg()
            },
            this)
        }).data("image", this.model)
    },
    imageDoubleClicked: function() {
        this.model.loadLowRecImg(),
        this.model.loadHighRecImg(),
        $.proxy(builderPageState.putNextAvailableGrid, builderPageState)(this.model)
    }
}),
InstagramPhotoItemCollectionView = Backbone.Marionette.CompositeView.extend({
    itemViewContainer: "ul",
    template: "#template-builder-photos-instagram-page",
    itemView: InstagramPhotoItemView,
    events: {
        "click .friend-album-btn": "friendAlbumButtonClicked",
        "click .your-album-btn": "yourAlbumButtonClicked",
        "click .back-to-friend-list-btn": "friendAlbumButtonClicked"
    },
    initialize: function(a) {
        this.controlPanel = a.controlPanel,
        this.model.on("change:profilePicture", this.render, this),
        this.model.on("change:isLoading", this.onRender, this)
    },
    onRender: function() {
        var a = this;
        this.$el.parents(".scroll").scroll(function() {
            var b = a.$el.parents(".scroll").scrollTop(),
            c = a.$el.height() - a.$el.parents(".scroll").height() - 300;
            b >= c && a.model.loadNextPage()
        }),
        this.model.get("isLoading") ? this.$(".loading").removeClass("hide") : this.$(".loading").addClass("hide")
    },
    buildItemView: function(a, b) {
        var c = new b({
            instagramModel: this.model,
            model: a
        });
        return c
    },
    renderModel: function() {
        var a = {};
        a = this.serializeData(),
        a = this.mixinTemplateHelpers(a),
        a.__ = __m,
        a.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        a.friendAlbum = this.model.get("friendAlbum"),
        a.selectedFriend = this.model.get("selectedFriend"),
        a.friendProfilePicture = this.model.get("friendProfilePicture"),
        a.profilePicture = this.model.get("profilePicture");
        var b = this.getTemplate();
        return Mustache.render($(b).html(), a)
    },
    friendAlbumButtonClicked: function() {
        return this.model.friendsModel && 0 != this.model.friendsModel.length || this.model.fetchUserFriends(),
        this.model.set("friendAlbum", !0),
        this.model.set("selectedFriend", !1),
        instagramFriendsCompositeView.render(),
        this.controlPanel.gotoSlide("instagram-friends-page"),
        !1
    },
    yourAlbumButtonClicked: function() {
        return this.model.imagesModel.reset(),
        this.model.fetchUserPhotos(),
        this.model.set("friendAlbum", !1),
        this.model.set("selectedFriend", !1),
        instagramPhotoList.render(),
        this.controlPanel.gotoSlide("instagram-photo-list"),
        !1
    }
}),
InstagramFriendsViewItem = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-facebook-friends-item",
    tagName: "li",
    events: {
        "click .user-btn": "userClicked"
    },
    initialize: function(a) {
        this.controlPanel = a.controlPanel,
        this.instagramModel = a.instagramModel
    },
    render: function() {
        this.model.attributes.__ = __m,
        this.model.attributes.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render($(this.template).html(), this.model.attributes))
    },
    userClicked: function() {
        return this.instagramModel.imagesModel.reset(),
        this.instagramModel.fetchUserPhotos(this.model.get("user_id")),
        this.instagramModel.set("friendAlbum", !0),
        this.instagramModel.set("selectedFriend", !0),
        this.instagramModel.set("friendProfilePicture", this.model.get("profile_picture")),
        instagramPhotoList.render(),
        this.controlPanel.gotoSlide("instagram-photo-list"),
        !1
    }
}),
InstagramFriendsCompositeView = Backbone.Marionette.CompositeView.extend({
    itemViewContainer: "ul",
    template: "#template-builder-photos-instagram-friends-page",
    itemView: InstagramFriendsViewItem,
    events: {
        "click .your-album-btn": "yourAlbumButtonClicked",
        "keyup #search-friends": "search",
        "submit .search-form": "searchSubmit"
    },
    initialize: function(a) {
        this.controlPanel = a.controlPanel,
        this.model.on("change:isFetchingFriends", this.onRender, this),
        this.model.on("change:profilePicture", this.render, this)
    },
    onRender: function() {
        this.model.get("isFetchingFriends") ? this.$(".loading").removeClass("hide") : this.$(".loading").addClass("hide")
    },
    buildItemView: function(a, b) {
        var c = new b({
            model: a,
            controlPanel: this.controlPanel,
            instagramModel: this.model
        });
        return c
    },
    renderModel: function() {
        var a = {};
        a = this.serializeData(),
        a = this.mixinTemplateHelpers(a),
        a.__ = __m,
        a.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        a.searchWord = this.searchWord,
        a.friendAlbum = this.model.get("friendAlbum"),
        a.selectedFriend = this.model.get("selectedFriend"),
        a.profilePicture = this.model.get("profilePicture");
        var b = this.getTemplate();
        return Mustache.render($(b).html(), a)
    },
    yourAlbumButtonClicked: function() {
        return this.model.imagesModel.reset(),
        this.model.fetchUserPhotos(),
        this.model.set("friendAlbum", !1),
        this.model.set("selectedFriend", !1),
        instagramPhotoList.render(),
        this.controlPanel.gotoSlide("instagram-photo-list"),
        !1
    },
    searchSubmit: function() {
        return this.search(),
        !1
    },
    search: function() {
        var a = this.$("#search-friends").val();
        this.searchWord = a,
        this.collection = a && "" != a ? new Backbone.Collection(this.model.friendsModel.filter(function(b) {
            a = a.replace(/\s/, ".*");
            var c = new RegExp(".*" + a + ".*", "i");
            return c.test(b.get("full_name")) || c.test(b.get("username"))
        })) : this.model.friendsModel,
        this._renderChildren()
    }
}),
ControlLayoutPanel = Backbone.Marionette.ItemView.extend({
    templateLayoutPanel: "#template-builder-layout",
    templateTemplatePanel: "#template-builder-template",
    events: {
        "click .template-btn": "templateClicked",
        "click .layout-panel-btn": "gotoLayoutPanel",
        "click .template-panel-btn": "gotoTemplatePanel"
    },
    initialize: function(a) {
        this.app = a.app,
        this.controlPanel = a.controlPanel,
        this.model.on("change:layoutList", this.render, this),
        this.model.on("change:layoutList", this.templateChanged, this),
        this.model.on("change:currentLayout", this.templateChanged, this)
    },
    render: function() {
        var a = this.model.get("layoutList"),
        b = [];
        a && (b = $.grep(a,
        function(a) {
            return a.is_template
        }), a = a = $.grep(a,
        function(a) {
            return ! a.is_template
        }), "template" == this.mode && 0 == b.length && (this.mode = "layout")),
        outList = "template" == this.mode ? b: a,
        this.$el.html(Mustache.render($("template" == this.mode ? this.templateTemplatePanel: this.templateLayoutPanel).html(), {
            layoutList: outList,
            hasTemplateList: b.length > 0,
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        }))
    },
    gotoLayoutPanel: function() {
        this.mode = "layout",
        this.render()
    },
    gotoTemplatePanel: function() {
        this.mode = "template",
        this.render()
    },
    templateClicked: function(a) {
        var b = $(a.currentTarget),
        c = b.attr("data-tpl"),
        d = this.model.get("currentLayout");
        if (d && d.name != c) {
            var e = this.model.get("currentLayout");
            if (commonData.selectedFirstLayout || commonData.selectedFirstTemplate || setTimeout($.proxy(function() {
                this.controlPanel.selectButton("photos-btn")
            },
            this), 500), "template" == this.mode) commonData.selectedFirstTemplate || ("undifined" != typeof _gaq && _gaq.push(["_trackPageview", "/ga_builder_selected_first_template"]), commonData.selectedFirstTemplate = !0),
            designPanelState.set("userImagesData", null),
            this.model.setCurrentLayout(c);
            else {
                commonData.selectedFirstLayout || ("undifined" != typeof _gaq && _gaq.push(["_trackPageview", "/ga_builder_selected_first_layout"]), commonData.selectedFirstLayout = !0),
                this.model.setCurrentLayout(c);
                var f = this.model.get("currentLayout");
                e && f && e.name == f.name && e.format.containers.length == f.format.containers.length || designPanelState.adaptDesign(e)
            }
        }
        return ! 1
    },
    templateChanged: function() {
        var a = $(".template-btn.active");
        a.removeClass("active");
        var b = this.model.get("currentLayout");
        if (b) {
            var c = $(".template-btn[data-tpl=" + b.name + "]");
            c.addClass("active")
        }
    }
}),
temp = null,
ControlPanel = Backbone.Marionette.ItemView.extend({
    className: "f-height",
    navStructure: {
        "products-btn": {
            "device-btn": {
                "device-list": null
            },
            "case-btn": {
                "case-list": null,
                "case-subscription": null,
                "case-option": null
            },
            "layout-btn": {
                "layout-list": null
            }
        },
        "photos-btn": {
            "instagram-btn": {
                "instagram-connect": null,
                "instagram-photo-list": null,
                "instagram-friends-page": null
            },
            "facebook-btn": {
                "facebook-connect": null,
                "facebook-friends-page": null,
                "facebook-album-list": null,
                "facebook-photo-list": null
            },
            "upload-btn": {
                "upload-page": null
            },
            "stamp-btn": {
                "stamp-page": null,
                "stamp-detail-page": null
            }
        },
        "extra-btn": {
            "filter-btn": {
                "filter-page": null
            }
        }
    },
    loadingMap: {},
    template: "#template-builder-control-panel",
    events: {
        "click [nav-btn]": "navButtonClicked",
        "click .save-btn": "saveDesignButtonClicked"
    },
    initialize: function(a) {
        this.pageModel = a.pageModel,
        this.app = a.app
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
    navButtonClicked: function(a) {
        var b = $(a.currentTarget),
        c = b.attr("nav-id");
        return this.selectButton(c),
        !1
    },
    selectButton: function(a) {
        this.pageModel.cleanRandomPool(),
        this.selectNavAndChild(this.navStructure, a)
    },
    gotoSlide: function(a) {
        return "case-list" == a && Server.skipCaseSelect ? void this.gotoSlide("case-subscription") : "case-subscription" == a && Server.skipSubscription ? void this.gotoSlide("case-option") : "case-subscription" != a || this.pageModel.get("canSubscribe") ? (this.pageModel.cleanRandomPool(), void this.selectNavAndParent(this.navStructure, a)) : void this.gotoSlide("case-option")
    },
    setDefault: function(a, b) {
        this._setDefault(this.navStructure, a, b)
    },
    _setDefault: function(a, b, c) {
        if (!a) return ! 1;
        for (index in a) if ("defaultId" != index) {
            if (index == b) return a[index].defaultId = c,
            !0;
            if (this._setDefault(a[index], b, c)) return ! 0
        }
        return ! 1
    },
    loadView: function(a) {
        if ("stamp-page" == a && ctgBuilder.stampAlbumList.show(stampAlbumList), "upload-page" == a) {
            if (this.loadingMap[a]) return;
            this.loadingMap[a] = !0,
            ctgBuilder.uploadPanel.show(uploadPanel),
            ctgBuilder.uploadPanelPhotoList.show(uploadPanelPhotoList),
            uploadPanelState.reloadImages()
        }
        if ("layout-list" == a && ctgBuilder.layoutPanel.show(layoutPanel), "template-list" == a && ctgBuilder.templatePanel.show(templatePanel), "case-list" == a && ctgBuilder.casePanel.show(casePanel), "case-option" == a && ctgBuilder.caseDetailPanel.show(caseDetailPanel), "instagram-photo-list" == a) {
            if (this.loadingMap[a]) return;
            this.loadingMap[a] = !0,
            ctgBuilder.instagramPhotoList.show(instagramPhotoList),
            instagramPanelModel.fetchUserPhotos()
        }
        if ("facebook-album-list" == a) {
            if (this.loadingMap[a]) return;
            this.loadingMap[a] = !0,
            ctgBuilder.facebookAlbumList.show(facebookAlbumList),
            facebookPanelModel.fetchUserAlbum()
        }
    },
    setDefaultPath: function(a, b, c) {
        if (!b) return ! 1;
        for (index in b) if ("defaultId" != index) {
            if (index == a) return c;
            var d = this.setDefaultPath(a, b[index], index);
            if (d) return b.defaultId = d,
            c
        }
        return ! 1
    },
    selectSingleNav: function(a) {
        if (this.currentViewId = a, "case-list" == a && this.pageModel.set("hasVisitedCasePage", !0), "case-list" == a && Server.skipCaseSelect) return void this.gotoSlide("case-subscription");
        if ("case-list" == a) {
            this.trigger("change:navStructure");
            var b = this.pageModel.getRenderProductList();
            if (b.length <= 1) return void this.gotoSlide("case-option")
        }
        this.loadView(a),
        "instagram-photo-list" == a && this.pageModel.addInstagramToRandomPool(),
        "facebook-photo-list" == a && this.pageModel.addFacebookToRandomPool(),
        "upload-page" == a && this.pageModel.addUploadToRandomPool(),
        "stamp-detail-page" == a && this.pageModel.addStampToRandomPool(),
        this.currentNavId = a;
        var c = this.$("[nav-id=" + a + "]"),
        d = c.parents("[nav-container]");
        if (c.is("[nav-slide]")) d.find("[nav-id]").fadeOut("fast"),
        c.fadeIn("fast"),
        _gaq && _gaq.push(["_trackPageview", "/ga_builder_tab_" + a]);
        else {
            d.find("[nav-id]").removeClass("active"),
            c.addClass("active");
            var e = c.attr("nav-btn-group"),
            f = d.find("[nav-btn-group=" + e + "]").first(),
            g = d.offset().left - f.offset().left;
            d.css({
                left: g + "px"
            })
        }
        this.setDefaultPath(a, this.navStructure)
    },
    getCurrentNav: function() {
        return this.currentNavId
    },
    selectNavAndChild: function(a, b) {
        if (a) for (index in a) if ("defaultId" != index) if (index == b) {
            this.selectSingleNav(b);
            var c = a[index];
            if (c) if (c.defaultId) this.selectNavAndChild(c, c.defaultId);
            else {
                for (first in c) break;
                this.selectNavAndChild(c, first)
            }
        } else this.selectNavAndChild(a[index], b)
    },
    selectNavAndParent: function(a, b) {
        if (!a) return ! 1;
        for (index in a) if ("defaultId" != index) {
            var c = index;
            if (index == b) return this.selectSingleNav(b),
            !0;
            if (this.selectNavAndParent(a[index], b)) return this.selectSingleNav(c),
            !0
        }
        return ! 1
    },
    saveDesignButtonClicked: function() {
        //return _gaq && _gaq.push(["_trackPageview", "/ga_builder_click_save_design"]),
        //this.app.designPanel.currentView.showProgress(0);
        this.pageModel.saveDesign(this.saveDesignSuccess, this.saveDesignFailed, this);
        return false;
    },
    saveDesignSuccess: function() {
        this.app.designPanel.currentView.hideProgress()
    },
    saveDesignFailed: function(a) {
        this.app.designPanel.currentView.hideProgress(),
        a && showErrorMessage(a)
    }
}),
StampAlbumItem = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-control-stamp",
    tagName: "li",
    className: "border-bottom border-top",
    events: {
        "click .stamp-item-btn": "stampAlbumClicked"
    },
    initialize: function(a) {
        this.controlPanel = a.controlPanel,
        this.stampPanelModel = a.stampPanelModel
    },
    render: function() {
        this.model.attributes.__ = __m,
        this.model.attributes.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render($(this.template).html(), this.model.attributes))
    },
    stampAlbumClicked: function() {
        this.stampPanelModel.loadDetailPageWithAlbumId(this.model.get("id")),
        this.controlPanel.gotoSlide("stamp-detail-page")
    }
}),
StampAlbumList = Backbone.Marionette.CompositeView.extend({
    template: "#template-builder-control-stamp-album-page",
    itemView: StampAlbumItem,
    itemViewContainer: "#stamp-detail-list",
    initialize: function(a) {
        this.controlPanel = a.controlPanel,
        this.stampPanelModel = a.stampPanelModel
    },
    buildItemView: function(a, b) {
        var c = new b({
            model: a,
            controlPanel: this.controlPanel,
            stampPanelModel: stampPanelModel
        });
        return c
    },
    renderModel: function() {
        var a = {};
        a = this.serializeData(),
        a = this.mixinTemplateHelpers(a),
        a.__ = __m,
        a.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        };
        var b = this.getTemplate();
        return Mustache.render($(b).html(), a)
    }
}),
StampItem = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-photo-item",
    tagName: "li",
    className: "column4 relative",
    events: {
        dblclick: "imageDoubleClicked"
    },
    render: function() {
        this.model.attributes.__ = __m,
        this.model.attributes.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render($(this.template).html(), this.model.attributes));
        var a = this.$(".image-draggable");
        a[0].complete ? this.$(".spinner-wrap").addClass("hide") : (a[0].onload = $.proxy(function(a) {
            a.addClass("hide")
        },
        this, this.$(".spinner-wrap")), this.$(".spinner-wrap").removeClass("hide")),
        this.$(".image-draggable").draggable({
            helper: "clone",
            appendTo: "body",
            zIndex: 100,
            opacity: .7,
            start: $.proxy(function() {
                this.model.loadLowRecImg(),
                this.model.loadHighRecImg()
            },
            this)
        }).data("image", this.model)
    },
    imageDoubleClicked: function() {
        this.model.loadLowRecImg(),
        this.model.loadHighRecImg(),
        $.proxy(builderPageState.putNextAvailableGrid, builderPageState)(this.model)
    }
}),
StampList = Backbone.Marionette.CompositeView.extend({
    template: "#template-builder-control-stamp-detail",
    itemView: StampItem,
    itemViewContainer: "#stamp-detail-list",
    events: {
        "click .back-btn": "backButtonPressed"
    },
    initialize: function(a) {
        this.controlPanel = a.controlPanel
    },
    backButtonPressed: function() {
        this.controlPanel.gotoSlide("stamp-page")
    },
    renderModel: function() {
        var a = {};
        a = this.serializeData(),
        a = this.mixinTemplateHelpers(a),
        a.__ = __m,
        a.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        };
        var b = this.getTemplate();
        return Mustache.render($(b).html(), a)
    }
}),
ControlUploadPanel = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-photos-upload",
    $uploader: null,
    events: {
        "click .upload-btn": "uploadButtonClicked",
        "change .hidden-uploader": "uploadFileChoosen",
        "drop .drop-area": "fileDroped",
        "dragenter .drop-area": "captureEvent",
        "dragleave .drop-area": "captureEvent",
        "dragover .drop-area": "captureEvent"
    },
    initialize: function() {
        this.model.imagesModel.on("all", this.detectUpload, this),
        this.model.on("change:uploadCount", this.updateUploadButtonState, this),
        this.model.on("change:isLoading", this.updatePhotoListLoadingStatus, this);
        var a = navigator.appName;
        this.isIEUser = "Microsoft Internet Explorer" == a ? !0 : !1
    },
    updatePhotoListLoadingStatus: function() {
        this.model.get("isLoading") ? this.$(".upload-image-spinner").removeClass("hide") : this.$(".upload-image-spinner").addClass("hide")
    },
    detectUpload: function() {
        0 == this.model.imagesModel.length ? this.$(".drop-area").removeClass("drop-min") : this.$(".drop-area").addClass("drop-min")
    },
    updateUploadButtonState: function() {
        var a = this.model.get("uploadCount");
        a > 0 ? (this.$("#upload-area").addClass("disabled"), this.$(".spinner-wrap").removeClass("hide")) : (this.$("#upload-area").removeClass("disabled"), this.$(".spinner-wrap").addClass("hide"))
    },
    uploadButtonClicked: function() {
        return this.model.get("uploadCount") > 0 ? !1 : (this.$uploader.click(), !1)
    },
    uploadFileChoosen: function() {
        if (this.isIEUser) this.model.uploadForIE(this.uploadSuccess, this.uploadFailed, this);
        else {
            var a = this.$uploader[0].files.length > 0 ? this.$uploader[0].files: null;
            null != a && this.model.uploadFile(a, this.uploadSuccess, this.uploadFailed, this)
        }
        return ! 1
    },
    captureEvent: function(a) {
        return a.stopPropagation(),
        !1
    },
    fileDroped: function(a) {
        if (a.stopPropagation(), this.isIEUser) return ! 1;
        if (this.model.get("uploadCount") > 0) return ! 1;
        var b = a.originalEvent.dataTransfer.files;
        return b && this.model.uploadFile(b, this.uploadSuccess, this.uploadFailed, this),
        !1
    },
    render: function() {
        this.$el.html(Mustache.render($(this.template).html(), {
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        })),
        this.$uploader = this.$(".hidden-uploader"),
        this.isIEUser && (this.$("#hiddenForm").removeClass("hide"), this.$(".upload-btn").addClass("hide"), this.$("#drag-n-drop-msg").addClass("hide"), this.$uploader[0].multiple = !1, $(".drop-area drop-min").html(""))
    },
    uploadSuccess: function() {},
    uploadFailed: function(a) {
        showErrorMessage(a)
    }
}),
ControlUploadItem = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-photos-upload-item",
    tagName: "li",
    className: "column4 close-edge-action relative",
    events: {
        "click .delete-btn": "deleteButtonIsClicked",
        dblclick: "imageDoubleClicked"
    },
    initialize: function(a) {
        this.uploadPanelState = a.uploadPanelState
    },
    deleteButtonIsClicked: function() {
        this.uploadPanelState.deletePhoto(this.model)
    },
    render: function() {
        this.model.attributes.__ = __m,
        this.model.attributes.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render($(this.template).html(), this.model.attributes));
        var a = this.$(".image-draggable");
        a[0].complete ? this.$(".spinner-wrap").addClass("hide") : (a[0].onload = $.proxy(function(a) {
            a.addClass("hide")
        },
        this, this.$(".spinner-wrap")), this.$(".spinner-wrap").removeClass("hide")),
        this.$(".image-draggable").draggable({
            helper: "clone",
            appendTo: "body",
            zIndex: 100,
            opacity: .7,
            start: $.proxy(function() {
                this.model.loadLowRecImg(),
                this.model.loadHighRecImg()
            },
            this)
        }).data("image", this.model)
    },
    imageDoubleClicked: function() {
        this.model.loadLowRecImg(),
        this.model.loadHighRecImg(),
        $.proxy(builderPageState.putNextAvailableGrid, builderPageState)(this.model)
    }
}),
ControlUploadCollectionView = Backbone.Marionette.CollectionView.extend({
    itemView: ControlUploadItem,
    tagName: "ul",
    className: "social-pics row reset-list mt2 upload-list",
    initialize: function(a) {
        this.uploadPanelState = a.uploadPanelState
    },
    onRender: function() {
        var a = this;
        this.$el.parents(".scroll").scroll(function() {
            var b = a.$el.parents(".scroll").scrollTop(),
            c = parseInt(a.$el.height() - a.$el.parents(".scroll").height()) + parseInt($(".upload-drop-area-container").height()) - 100;
            b >= c && a.uploadPanelState.loadNextPage()
        })
    },
    buildItemView: function(a, b) {
        var c = new b({
            model: a,
            uploadPanelState: this.uploadPanelState
        });
        return c
    }
}),
DesignCanvas = Backbone.Marionette.ItemView.extend({
    tagName: "canvas",
    className: "absolute",
    initialize: function(a) {
        this.pageModel = a.pageModel,
        this.pageModel.on("change:currentLayout", this.render, this),
        this.pageModel.on("change:currentDevice", this.render, this),
        this.pageModel.on("change:currentItemOption", this.render, this),
        this.pageModel.on("change:currentFilter", this.render, this),
        this.pageModel.on("change:aqua", this.render, this),
        this.model.on("change:userTransformData", this.render, this),
        this.model.on("change:userImagesData", this.render, this),
        this.model.on("change:userTextsData", this.render, this),
        this.model.on("change:deviceBackground", this.render, this),
        this.model.on("change:deviceMaskImage", this.render, this),
        this.model.on("change:overlayImage", this.render, this),
        this.context = this.el.getContext("2d")
    },
    render: function() {
        this.drawOnContext(this.context, this.el)
    },
    drawOnContext: function(context, el, disableOverlay) {
        var self = this,
        currentLayout = this.pageModel.get("currentLayout"),
        currentProduct = this.pageModel.get("currentProduct"),
        userImagesData = this.model.get("userImagesData"),
        userTextsData = this.model.get("userTextsData"),
        userTransformData = this.model.get("userTransformData");
        if (userImagesData || (userImagesData = {}), userTransformData || (userTransformData = {}), currentLayout) {
            var layoutContainers = currentLayout.format.containers;
            $(el).attr("width", currentLayout.format.width),
            $(el).attr("height", currentLayout.format.height);
            for (index in layoutContainers) {
                var imageHolderData = layoutContainers[index];
                if ("text" == layoutContainers[index].type) {
                    if (userTextsData) {
                        var textData = userTextsData[layoutContainers[index].id];
                        if (textData) {
                            if (context.font = parseInt(parseInt(textData.get("fontSize")) / 96 * 72) + "pt " + textData.get("font"), context.textAlign = textData.get("align"), textData.get("multiline")) {
                                context.textBaseline = "top";
                                var top = parseInt(imageHolderData.top)
                            } else {
                                context.textBaseline = "middle";
                                var top = parseInt(imageHolderData.top) + parseInt(imageHolderData.height / 2)
                            }
                            context.fillStyle = textData.get("color");
                            var text = textData.get("text"),
                            isEmptyString = !1;
                            if (text && "" != text || (text = "text here", isEmptyString = !0), text = text.replace("\n", ""), "upper" == textData.get("capitalisation") ? text = text.toUpperCase() : "lower" == textData.get("capitalisation") && (text = text.toLowerCase()), textData.get("multiline")) {
                                maxWidth = imageHolderData.width;
                                for (var words = text.split(" "), lines = [], line = "", n = 0; n < words.length; n++) {
                                    var testLine = line + words[n] + " ",
                                    metrics = context.measureText(testLine),
                                    testWidth = metrics.width;
                                    if (testWidth > maxWidth) {
                                        line && line.length && line.length && " " == line[line.length - 1] && (line = line.substr(0, line.length - 1)),
                                        line.length && lines.push(line);
                                        for (var newWord = words[n]; newWord.length > 0;) {
                                            for (var measureWord = newWord; context.measureText(measureWord).width > maxWidth;) measureWord = measureWord.substr(0, measureWord.length - 1);
                                            newWord = newWord.substr(measureWord.length),
                                            newWord.length > 0 ? (measureWord.length && " " == measureWord[measureWord.length - 1] && (measureWord = measureWord.substr(0, measureWord.length - 1)), measureWord.length && lines.push(measureWord)) : line = measureWord + " "
                                        }
                                    } else line = testLine
                                }
                                line.length && " " == line[line.length - 1] && (line = line.substr(0, line.length - 1)),
                                line.length && lines.push(line);
                                for (var outArr = [], i = 0; i < lines.length && !(textData.get("maxLine") && i >= textData.get("maxLine")); i++) outArr.push(lines[i]);
                                for (var centerVOffset = (parseInt(imageHolderData.height) - parseInt(textData.get("lineHeight")) * outArr.length) / 2, i = 0; i < outArr.length; i++) context.fillText(lines[i], parseInt(imageHolderData.left), top + centerVOffset + textData.get("lineHeight") * i);
                                isEmptyString || textData.set("textArr", outArr)
                            } else {
                                for (var downSize = 0; context.measureText(text).width >= imageHolderData.width - 6;) downSize++,
                                context.font = parseInt(parseInt(textData.get("fontSize") - downSize) / 96 * 72) + "pt " + textData.get("font");
                                0 != downSize ? textData.set("downFontSize", textData.get("fontSize") - downSize) : textData.set("downFontSize", textData.get("fontSize")),
                                "left" == context.textAlign ? context.fillText(text, parseInt(imageHolderData.left), top, imageHolderData.width) : "right" == context.textAlign ? context.fillText(text, parseInt(imageHolderData.left) + parseInt(imageHolderData.width), top, imageHolderData.width) : context.fillText(text, parseInt(imageHolderData.left) + parseInt(imageHolderData.width / 2), top, imageHolderData.width)
                            }
                        }
                    }
                } else {
                    var imageData = userImagesData[layoutContainers[index].id],
                    transformData = userTransformData[layoutContainers[index].id];
                    if (transformData || (transformData = {
                        transLeft: 0,
                        transTop: 0,
                        scale: 1
                    }), imageData) if (imageData.get("highRecImage")) {
                        var image = imageData.get("highRecImage");
                        currentProduct && currentProduct.id == ConstantsManager.PRODUCT_TYPE_WOOD_CASE && this.pageModel.get("aqua") && (context.globalAlpha = 1);
                        var targetWidth = image.width,
                        targetHeight = image.height,
                        autoScale = 1;
                        ImageTransformationHelper.shouldFitWidth(image.width, image.height, imageHolderData) ? (targetHeight = parseFloat(imageHolderData.height) / imageHolderData.width * image.width, autoScale = targetWidth / imageHolderData.width) : (targetWidth = parseFloat(imageHolderData.width) / imageHolderData.height * image.height, autoScale = targetHeight / imageHolderData.height),
                        targetWidth /= transformData.scale,
                        targetHeight /= transformData.scale;
                        var left = Math.round((image.width - targetWidth) / 2 - transformData.transLeft * autoScale / transformData.scale),
                        top = Math.round((image.height - targetHeight) / 2 - transformData.transTop * autoScale / transformData.scale);
                        imageHolderData.is_circle && (context.save(), context.beginPath(), context.arc(parseInt(imageHolderData.left) + parseInt(imageHolderData.width / 2), parseInt(imageHolderData.top) + parseInt(imageHolderData.height / 2), imageHolderData.width / 2, 0, 2 * Math.PI, !1), context.clip());
                        try {
                            context.drawImage(image, left, top, targetWidth, targetHeight, imageHolderData.left, imageHolderData.top, imageHolderData.width, imageHolderData.height);
                            var filter = self.pageModel.get("currentFilter");
                            if (filter && "none" != filter) {
                                var imageData = context.getImageData(imageHolderData.left, imageHolderData.top, imageHolderData.width, imageHolderData.height);
                                eval("if ($.isFunction(Filters." + filter + ")) {Filters.canvasWidth=" + currentLayout.format.width + "; Filters.canvasHeight=" + currentLayout.format.height + ";Filters.width=" + imageHolderData.width + "; Filters.height=" + imageHolderData.height + ";Filters.filterCenterOffsetLeft=" + imageHolderData.left + "; Filters.filterCenterOffsetTop=" + imageHolderData.top + ";Filters." + filter + "(imageData.data);}"),
                                context.putImageData(imageData, imageHolderData.left, imageHolderData.top)
                            }
                        } catch(err) {}
                        imageHolderData.is_circle && context.restore()
                    } else imageData.addHighRecCallback(this.render, this)
                }
            }
            currentProduct && currentProduct.id == ConstantsManager.PRODUCT_TYPE_WOOD_CASE && this.pageModel.get("aqua") && (context.globalAlpha = 1);
            var backupCompositeOperation = context.globalCompositeOperation,
            deviceMaskImage = self.model.get("deviceMaskImage");
            deviceMaskImage && !disableOverlay && (context.globalCompositeOperation = "destination-out", context.drawImage(deviceMaskImage, 0, 0)),
            context.globalCompositeOperation = "destination-over",
            currentProduct && currentProduct.id == ConstantsManager.PRODUCT_TYPE_WOOD_CASE && this.pageModel.get("aqua") && (context.globalCompositeOperation = "multiply");
            var deviceBackground = self.model.get("deviceBackground");
            deviceBackground && !disableOverlay && context.drawImage(deviceBackground, 0, 0),
            context.globalCompositeOperation = "source-over";
            var overlayImage = self.model.get("overlayImage");
            overlayImage && !disableOverlay && context.drawImage(overlayImage, 0, 0),
            context.globalCompositeOperation = backupCompositeOperation
        } else $(el).attr("width", 0),
        $(el).attr("height", 0)
    },
    getImageDataStr: function() {
        return this.el.toDataURL()
    },
    getCleanDataStr: function() {
        var a = document.createElement("canvas"),
        b = a.getContext("2d");
        return this.drawOnContext(b, a, !0),
        a.toDataURL()
    }
}),
DesignPanel = Backbone.Marionette.Layout.extend({
    template: "#template-builder-design-panel",
    className: "f-height",
    $progressContainer: null,
    $progressBar: null,
    $progressText: null,
    initialize: function() {
        this.model.pageModel.on("change:currentItemOption", this.updateSideView, this)
    },
    render: function() {
        this.$el.html(Mustache.render($(this.template).html(), {
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        })),
        this.$progressContainer = this.$("#progress-bar-container"),
        this.$progressBar = this.$("#progress-bar"),
        this.$progressText = this.$("#progress-text"),
        this.editTextView = new EditTextView({
            el: this.$("#text-edit-container")[0],
            designPanel: this
        }),
        this.$("#text-edit-container").hide()
    },
    regions: {
        templateGrid: "#template-grid",
        designCanvas: "#design-canvas",
        transformTool: "#transform-tool"
    },
    showTransformTool: function(a) {
        this.transformTool.show(a)
    },
    hideTransformTool: function() {
        this.transformTool.close()
    },
    showEditTextView: function(a, b, c, d) {
        this.editTextView.rect = d,
        this.editTextView.successCallback = b,
        this.editTextView.failedCallback = c,
        this.editTextView.setText(a),
        this.editTextView.show()
    },
    hideEditTextView: function() {
        this.editTextView.hide()
    },
    showProgress: function(a) {
        a = parseInt(a),
        this.$progressContainer.show(),
        this.$progressBar.width(a + "%"),
        this.$progressText.html(a + "%"),
        this.$(".saving-overlay").removeClass("hide")
    },
    hideProgress: function() {
        this.$progressContainer.hide(),
        this.$(".saving-overlay").addClass("hide")
    },
    updateSideView: function() {
        var a = this.model.pageModel.get("currentProduct"),
        b = this.model.pageModel.get("currentItemOption");
        if (a && "bezel-case" == a.short_name) {
            var c = new Image,
            d = "/img/case/builder_side_color_preview_" + b.type_id + ".jpg";
            c.onload = $.proxy(function(a) {
                var b = this.model.pageModel.get("currentItemOption"),
                c = "/img/case/builder_side_color_preview_" + b.type_id + ".jpg";
                c == a && (this.$(".case-side img").attr("src", "/img/case/builder_side_color_preview_" + b.type_id + ".jpg"), this.$(".case-side img").removeClass("hide"))
            },
            this, d),
            c.src = d
        } else this.$(".case-side img").addClass("hide")
    }
}),
EditDetailModalView = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-edit-detail-modal",
    tagName: "div",
    className: "table f-width f-height modal-box fixed",
    events: {
        "click #cancel-btn": "cancelButtonClicked",
        "click #done-btn": "doneButtonClicked",
        "click .tag": "tagClicked"
    },
    initialize: function(a) {
        this.successCallback = a.successCallback,
        this.failedCallback = a.failedCallback,
        this.app = a.app
    },
    render: function() {
        this.$el.html(Mustache.render($(this.template).html(), {
            tagList: Server.tagList,
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        })),
        _gaq && _gaq.push(["_trackPageview", "/ga_builder_show_edit_tag_modal"])
    },
    cancelButtonClicked: function() {
        this.failedCallback && (this.app.editDesignModalView.close(), this.failedCallback(__("Cannot save without entering your details")))
    },
    doneButtonClicked: function() {
        var a = this.$("#name-design").val();
        if (!a || "" == a) return showErrorMessage(__("Please enter a title")),
        !1;
        if (3 != $(".tag.active").length) return showErrorMessage(__("Please choose 3 categories")),
        !1;
        var b = [];
        $(".tag.active").each(function(a, c) {
            b.push($(c).attr("data-id"))
        });
        var c = b.join();
        return this.successCallback && (this.app.editDesignModalView.close(), this.successCallback(a, c)),
        !1
    },
    tagClicked: function(a) {
        var b = $(a.currentTarget);
        b.toggleClass("active")
    }
}),
EditTextView = Backbone.Marionette.ItemView.extend({
    events: {
        "click .ok-btn": "okClicked",
        "click .cancel-btn": "cancelClicked",
        "keyup input": "keyup",
        "click #text-edit-tool": "overlayClicked"
    },
    initialize: function(a) {
        this.designPanel = a.designPanel
    },
    okClicked: function() {
        if (this.containsNonAscii()) {
            var a = this.$("input").val();
            return message = a.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, ""),
            showErrorMessage("Message contains illegal letters"),
            this.$("input").val(message),
            !1
        }
        return this.isMessageTooLong() ? (showErrorMessage("Message too long. Allowed " + this.textModel.get("maxLength") + " letters"), !1) : (this.designPanel.hideEditTextView(), void(this.successCallback && this.successCallback(this.$("input").val())))
    },
    show: function() {
        var a = this;
        this.$el.show(),
        this.$("#text-edit-overlay").hide(),
        this.$("#text-edit-box").show().css({
            left: this.rect.left + this.rect.width / 2 - $(document).width() / 2,
            top: this.rect.top + this.rect.height / 2 - $(document).height() / 2,
            width: 0,
            height: 0,
            opacity: 0
        }).animate({
            left: 0,
            top: 0,
            width: 400,
            height: 100,
            opacity: 1
        },
        function() {
            a.$("#text-edit-overlay").show(),
            a.$("#text-edit-box input").focus()
        })
    },
    hide: function() {
        var a = this.rect;
        this.$("#text-edit-box input").blur(),
        this.$("#text-edit-box").show();
        var b = this;
        this.$("#text-edit-box").show().css({
            left: 0,
            top: 0,
            width: 400,
            height: 100,
            opacity: 1
        }).animate({
            left: a.left + a.width / 2 - $(document).width() / 2,
            top: a.top + a.height / 2 - $(document).height() / 2,
            width: 0,
            height: 0,
            opacity: 0
        },
        function() {
            b.$el.hide(),
            b.$("#text-edit-overlay").hide()
        })
    },
    cancelClicked: function() {
        this.designPanel.hideEditTextView(),
        this.failedCallback && this.failedCallback()
    },
    overlayClicked: function(a) {
        "text-edit-box" == a.target.id || $(a.target).parents("#text-edit-box").size() || this.cancelClicked()
    },
    setText: function(a) {
        this.textModel = a,
        this.$("input").val(this.textModel ? a.get("text") : "")
    },
    keyup: function(a) {
        13 == a.keyCode ? this.okClicked() : 27 == a.keyCode && this.cancelClicked()
    },
    containsNonAscii: function() {
        var a = this.$("input").val();
        return message = a.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, ""),
        a != message
    },
    isMessageTooLong: function() {
        var a = this.$("input").val();
        return this.textModel.get("maxLength") ? a.length > this.textModel.get("maxLength") : !0
    }
}),
SaveDesignModal = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-save-design-modal",
    className: "modal-box f-width absolute scroll",
    tagName: "div",
    events: {
        "click .close-btn": "goToGallery",
        "click .add-to-cart-btn": "addToCart",
        "click #fb-share-btn": "shareToFacebook",
        "click #twitter-share-btn": "shareToTwitter",
        "click #email-share-btn": "shareWithMailClicked",
        "click #pinit-share-btn": "shareToPinInterest",
        "click .go-to-gallery-btn": "goToGallery",
        "click .make-another-case-btn": "makeAnotherCaseButtonClicked",
        "click #share-with-mail-btn": "mailSubmitButtonClicked",
        "keyup #share-with-mail-text": "shareWithMailTextFieldPressed"
    },
    initialize: function(a) {
        this.app = a.app,
        this.preview = a.preview,
        this.artworkId = a.artworkId,
        this.artworkUrlName = a.artworkUrlName,
        this.unitPrice = a.unitPrice,
        this.itemOption = a.itemOption,
        this.deviceShortName = a.deviceShortName,
        this.shareLink = a.shareLink,
        this.shareImage = a.shareImage,
        this.shareName = a.shareName,
        this.shareDesc = a.shareDesc,
        this.twitterShareMessage = a.twitterShareMessage,
        this.pinitShareMessage = a.pinitShareMessage
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
    closeModal: function() {
        return this.app.saveDesignModalView.close(),
        !1
    },
    addToCart: function() {
        return _gaq && _gaq.push(["_trackPageview", "/ga_builder_add_to_cart"]),
        cartModel.addToCart(this.artworkId, this.unitPrice, this.itemOption, 1, this.deviceShortName, !0, !0),
        !1
    },
    shareToFacebook: function() {
        _gaq && _gaq.push(["_trackPageview", "/ga_builder_click_share"]);
        var a = {
            Click: {
                text: "Use this link so I get $" + ConstantsManager.USER_INVITE_CREDIT_OF_SINGLE_REFERRAL + " off",
                href: this.shareLink
            }
        };
        return FB.ui({
            method: "feed",
            link: this.shareLink,
            picture: this.shareImage,
            name: this.shareName,
            description: this.shareDesc,
            properties: a
        }),
        !1
    },
    shareToTwitter: function() {
        return _gaq && _gaq.push(["_trackPageview", "/ga_builder_click_share"]),
        window.open("http://www.twitter.com/share?url=" + encodeURIComponent(this.shareLink) + "&text=" + encodeURIComponent(this.twitterShareMessage), "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=220,width=600"),
        !1
    },
    shareToPinInterest: function() {
        return _gaq && _gaq.push(["_trackPageview", "/ga_builder_click_share"]),
        window.open("http://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(this.shareLink) + "&media=" + encodeURIComponent(this.shareImage) + "&description=" + encodeURIComponent(this.pinitShareMessage), "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=220,width=600"),
        !1
    },
    goToGallery: function() {
        return window.location = "/product/" + this.artworkUrlName + "/" + this.deviceShortName,
        !1
    },
    shareWithMailClicked: function() {
        return this.$("#share-with-mail-input").toggleClass("hide"),
        !1
    },
    mailSubmitButtonClicked: function() {
        var a = this,
        b = this.$("#share-with-mail-text").val();
        return validateEmail(b) ? $.ajax({
            url: "/controllers/Artwork.php",
            method: "POST",
            data: {
                fn: "shareDesign",
                share_email: b,
                artworkID: a.artworkId
            },
            success: function(b) {
                1 == b ? (_gaq && _gaq.push(["_trackPageview", "/ga_builder_click_share"]), a.$("#share-with-mail-text").val(""), a.$("#share-with-mail-input").addClass("hide"), showSuccessMessage(__("Email Sent"))) : showErrorMessage(__("Unable to share"))
            }
        }) : showErrorMessage(__("Invalid email")),
        !1
    },
    shareWithMailTextFieldPressed: function(a) {
        return 13 == a.keyCode ? (this.mailSubmitButtonClicked(), !1) : void 0
    },
    makeAnotherCaseButtonClicked: function() {
        return this.app.designPanel.currentView.model.resetDesign(),
        this.app.controlPanel && this.app.controlPanel.currentView.gotoSlide("device-list"),
        builderPageState.set("currentTitle", null),
        builderPageState.reloadCurrentLayout(),
        this.closeModal(),
        !1
    }
}),
SigninModalView = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-signin-modal",
    className: "modal-box f-width absolute",
    tagName: "div",
    $emailField: null,
    $passwordField: null,
    $usernameField: null,
    events: {
        "click .close-btn": "closeModal",
        "click #email-signup-btn": "submitEmailRegister",
        "click #facebook-signup-btn": "facebookSignup",
        "click #instagram-signup-btn": "instagramSignup",
        "click .signup-link": "showSignup"
    },
    initialize: function(a) {
        this.app = a.app,
        this.successCallback = a.successCallback,
        this.failedCallback = a.failedCallback
    },
    render: function() {
        this.$el.html(Mustache.render($(this.template).html(), {
            __: __m
        })),
        this.$emailField = this.$("#sign-up-mail"),
        this.$passwordField = this.$("#sign-up-password"),
        _gaq && _gaq.push(["_trackPageview", "/ga_builder_show_sign_up"])
    },
    closeModal: function() {
        return this.$("[data-reveal]").unbind("click", globalRevealClicked),
        this.app.signupModalView.close(),
        this.failedCallback(__("You have to sign up before save")),
        !1
    },
    facebookSignup: function() {
        ExternalSourceAccessManager.getUserInfo(2, $.proxy(function() {
            _gaq && _gaq.push(["_trackPageview", "/ga_signup"]),
            this.successCallback(),
            this.app.signupModalView.close()
        },
        this), this.failedCallback, !1, !1)
    },
    instagramSignup: function() {
        ExternalSourceAccessManager.getUserInfo(1, $.proxy(function() {
            _gaq && _gaq.push(["_trackPageview", "/ga_signup"]),
            this.successCallback(),
            this.app.signupModalView.close()
        },
        this), this.failedCallback, !1, !1)
    },
    submitEmailRegister: function() {
        var a = this;
        return "" != this.$emailField.val() && validateEmail(this.$emailField.val()) ? ($.ajax({
            url: ConstantsManager.CASETAGRAM_INDEX_URL_WITHOUT_LOGIN + ConstantsManager.USER_AUTH_CONTROLLER_AUTHENTICATION_PATH,
            method: "POST",
            data: {
                fn: "loginUser",
                "login-email": a.$emailField.val(),
                "login-password": a.$passwordField.val(),
                ajax: "Y",
                overrideSessionId: getCookie(ConstantsManager.DEFAULT_SESSION_NAME)
            },
            success: function(b) {
                b == ConstantsManager.USER_AUTH_AUTHENTICATE_USER_SUCCESS ? (a.successCallback && a.successCallback(), a.app.signupModalView.close()) : showErrorMessage(__("Login not successful"))
            }
        }), !1) : (showErrorMessage(__("Invalid email")), !1)
    },
    showSignup: function() {
        this.app.signupModalView.close();
        var a = new SignupModalView({
            app: this.app,
            successCallback: this.successCallback,
            failedCallback: this.failedCallback
        });
        return this.app.signupModalView.show(a),
        !1
    }
}),
SignupModalView = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-signup-modal",
    className: "modal-box f-width absolute",
    tagName: "div",
    $emailField: null,
    $passwordField: null,
    $usernameField: null,
    events: {
        "click .close-btn": "closeModal",
        "click #email-signup-btn": "submitEmailRegister",
        "click #facebook-signup-btn": "facebookSignup",
        "click #instagram-signup-btn": "instagramSignup",
        "click .signin-link": "showSignin"
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
        })),
        this.$("[data-reveal]").bind("click", globalRevealClicked),
        this.$emailField = this.$("#sign-up-mail"),
        _gaq && _gaq.push(["_trackPageview", "/ga_builder_show_sign_up"])
    },
    closeModal: function() {
        return this.$("[data-reveal]").unbind("click", globalRevealClicked),
        this.app.signupModalView.close(),
        this.failedCallback(__("You have to sign up before save")),
        !1
    },
    facebookSignup: function() {
        ExternalSourceAccessManager.getUserInfo(2, $.proxy(function() {
            _gaq && _gaq.push(["_trackPageview", "/ga_signup"]),
            this.successCallback(),
            this.app.signupModalView.close()
        },
        this), this.failedCallback, !1, !1)
    },
    instagramSignup: function() {
        ExternalSourceAccessManager.getUserInfo(1, $.proxy(function() {
            _gaq && _gaq.push(["_trackPageview", "/ga_signup"]),
            this.successCallback(),
            this.app.signupModalView.close()
        },
        this), this.failedCallback, !1, !1)
    },
    submitEmailRegister: function() {
        var a = this;
        return "" != this.$emailField.val() && validateEmail(this.$emailField.val()) ? ($.ajax({
            url: (ie && 10 > ie ? ConstantsManager.CASETAGRAM_INDEX_URL_WITHOUT_LOGIN: ConstantsManager.SECURED_CASETAGRAM_INDEX_URL_WITHOUT_LOGIN) + "controllers/User.php",
            type: "POST",
            dataType: "json",
            data: {
                fn: "registerNewUser",
                "register-username": "",
                "register-email": a.$emailField.val(),
                newflow: 1,
                "register-password": "",
                ajax: "Y",
                overrideSessionId: getCookie(ConstantsManager.DEFAULT_SESSION_NAME)
            },
            success: function(b) {
                b == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_USERNAME_NOT_PROVIDED ? showErrorMessage(__("Please fill in your username")) : b == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_EMAIL_NOT_PROVIDED ? showErrorMessage(__("Please fill in your email")) : b == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_PASSWORD_NOT_PROVIDED ? showErrorMessage(__("Please fill in your password")) : b == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_USERNAME_ALREADY_IN_USE ? showErrorMessage(__("Username already taken")) : b == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_INVALID_USERNAME ? showErrorMessage(__("Username contains invalid character")) : b == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_EMAIL_ALREADY_IN_USE && showErrorMessage(__("Email already taken")),
                b == ConstantsManager.USER_INFO_REGISTER_NEW_USER_SUCCESS && (_gaq && _gaq.push(["_trackPageview", "/ga_signup"]), a.successCallback(), a.app.signupModalView.close())
            }
        }), !1) : (showErrorMessage(__("Invalid email")), !1)
    },
    showSignin: function() {
        this.app.signupModalView.close();
        var a = new SigninModalView({
            app: this.app,
            successCallback: this.successCallback,
            failedCallback: this.failedCallback
        });
        return this.app.signupModalView.show(a),
        !1
    }
}),
TemplateGrid = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-design-panel-template-grid",
    initialize: function(a) {
        this.pageModel = a.pageModel,
        this.pageModel.on("change:currentLayout", this.render, this),
        this.designPanel = a.designPanel
    },
    events: {
        "dblclick .image-transformable": "imageDoubleClicked",
        "click .editable-text": "editTextClicked"
    },
    render: function() {
        var a = this;
        if (this.pageModel.get("currentDevice") && this.pageModel.get("currentLayout")) {
            var b = this.pageModel.get("currentDevice").short_name,
            c = this.pageModel.get("currentLayout").name;
            if (this.pageModel.get("currentLayout").override_css_filename) var d = "/controllers/templates/" + this.pageModel.get("currentLayout").override_css_filename;
            else var d = "/controllers/templates/" + this.pageModel.get("currentDevice").short_name + "-" + this.pageModel.get("currentLayout").reference_name + ".tpl";
            $.ajax({
                url: d,
                success: function(d) {
                    if (c == a.pageModel.get("currentLayout").name && b == a.pageModel.get("currentDevice").short_name) {
                        a.$el.html(d),
                        a.$el.append("<style>div.design-template>div.placeholder.highlight, div.design-template>div.placeholder.loading-highlight {background-color: rgba(0, 0, 0, 0.3);} div.design-template{z-index:0}</style>");
                        var e = a.designPanel.model.get("userImagesData"),
                        f = a.pageModel.get("currentLayout");
                        if (f) {
                            var g = f.format.containers;
                            for (index in g) g[index].uneditable && a.$("[data-tpid=" + g[index].id + "]").removeClass("grabbable")
                        }
                        if (a.$(".grabbable").addClass("image-transformable"), Server.isMobile && $(".image-transformable").doubletap($.proxy(a.imageDoubleClicked, a)), $(".grabbable").droppable({
                            accept: ".image-draggable",
                            drop: $.proxy(a.imageDropped, a),
                            hoverClass: "highlight",
                            tolerance: "pointer",
                            over: $.proxy(function(a) {
                                $(".grabbable").droppable("disable"),
                                $(a.target).droppable("enable")
                            },
                            a),
                            out: $.proxy(function() {
                                $(".grabbable").droppable("enable")
                            },
                            a)
                        }), f && e) {
                            var g = f.format.containers;
                            for (index in g) if (e[g[index].id] && void 0 != typeof e[g[index].id]) {
                                var d = e[g[index].id],
                                h = g[index].id;
                                templateGrid.setImageDataForBox(d, h)
                            }
                        }
                        a.callback && a.callbackLayoutShortName == a.pageModel.get("currentLayout").name && a.callback()
                    }
                }
            })
        }
    },
    setUpdateImageDataCallback: function(a, b) {
        this.callback = a,
        this.callbackLayoutShortName = b
    },
    imageDropped: function(a, b) {
        var c = $(a.target),
        d = c.attr("data-tpid");
        if (!this.model.isGridEditable(d)) return ! 0;
        $(".grabbable").droppable("enable"),
        a.stopPropagation();
        var e = b.draggable.data("image"),
        f = b.draggable.data("fromBoxId");
        return f && this.model.copyUserTransformDataFromBox(f, d, e),
        this.setImageDataForBox(e, d),
        f || commonData.trackedImageToGrid || (commonData.trackedImageToGrid = !0, _gaq && (_gaq.push(["_trackPageview", "/ga_builder_first_image_to_grid"]), _gaq.push(["_trackEvent", "Builder first image to grid", "Drop", "image"]))),
        !1
    },
    setImageDataForBox: function(a, b) {
        if (a) {
            "undefined" != typeof Storage ? getCookie("hasShownDoubleClickToEdit") || ($(".info-double-click").removeClass("hide"), setCookie("hasShownDoubleClickToEdit", !0, 365)) : tutorial();
            var c = this,
            d = this.model.isGridEditable(b);
            this.model.setImageForBox(b, a);
            var e = this.$("[data-tpid=" + b + "]");
            e.html("<img src='" + a.get("thumbnail") + "' class='grid-image " + (d ? "image-draggable": "") + "' style='opacity:0; width:100%; height:100%; " + (d ? "cursor:pointer": "") + "'/>"),
            a.get("highRecImage") || (e.addClass("loading-highlight"), e.append("<div class='spinner-wrap absolute'><div class='spiner'><div class='circle absolute f-height f-width'></div><div class='circle absolute f-height f-width'></div></div></div>"), a.addHighRecCallback($.proxy(function(a, b) {
                var c = this.$("[data-tpid=" + b + "]"),
                d = c.find(".grid-image").data("image");
                d && a && d.get("highRecImage") && a.get("highRecImage") && d.get("highRecImage").src == a.get("highRecImage").src && (c.removeClass("loading-highlight"), c.find(".spinner-wrap").remove())
            },
            this, a, b))),
            d && e.find(".image-draggable").draggable({
                helper: "clone",
                appendTo: "body",
                zIndex: 100,
                start: function(a, b) {
                    b.helper.css("opacity", .5),
                    b.helper.css("width", "auto"),
                    b.helper.css("height", "auto")
                },
                stop: function() {
                    c.model.removeImageForBox(b),
                    e.empty()
                }
            }),
            e.find(".grid-image").data("image", a).data("fromBoxId", b)
        }
    },
    removeImageFromBox: function(a) {
        var b = this.$("[data-tpid=" + a + "]");
        b.removeClass("loading-highlight")
    },
    getHolderDataForBox: function(a) {
        var b = this.pageModel.get("currentLayout");
        if (!b) return null;
        var c = b.format.containers;
        for (index in c) if (c[index].id == a) return c[index];
        return null
    },
    imageDoubleClicked: function(a) {
        var b = $(a.currentTarget),
        c = b.attr("data-tpid");
        if (!this.model.isGridEditable(c)) return ! 0;
        if ($(".info-double-click").addClass("hide"), this.model.hasImageAtBox(c)) {
            var d = new TransformToolModel({
                imageData: this.model.getImageForBox(c),
                holderData: this.getHolderDataForBox(c),
                userTransformData: this.model.getUserTransformDataForBox(c)
            });
            d.designPanelState = this.model;
            var e = new TransformTool({
                model: d,
                designPanel: this.designPanel,
                finishCallback: $.proxy(this.imageResizeFinished, this, c),
                cancelCallback: $.proxy(this.imageResizeCancel, this),
                trashCallback: $.proxy(this.imageResizeTrash, this, c)
            });
            return this.designPanel.showTransformTool(e),
            d.computeImageQuality(),
            e.updateImageQualityWarning(),
            a.stopPropagation(),
            !1
        }
    },
    imageResizeFinished: function(a, b) {
        this.model.setUserTransformDataForBox(a, b)
    },
    imageResizeCancel: function() {},
    imageResizeTrash: function(a) {
        this.model.removeImageForBox(a),
        $target = this.$("[data-tpid=" + a + "]"),
        $target.data("image", null),
        $target.empty()
    },
    editTextClicked: function(a) {
        var b = $(a.currentTarget),
        c = b.attr("data-tpid"),
        d = this.model.getTextForBox(c),
        e = this;
        return designPanel.showEditTextView(d,
        function(a) {
            d && (d.set("text", a), e.model.setTextForBox(c, d))
        },
        function() {},
        {
            width: b.width(),
            height: b.height(),
            left: b.offset().left,
            top: b.offset().top
        }),
        !1
    }
}),
TransformTool = Backbone.Marionette.ItemView.extend({
    template: "#template-builder-transform-tool",
    dragState: null,
    initMousePos: null,
    finishCallback: null,
    cancelCallback: null,
    trashCallback: null,
    events: {
        "dblclick .transform-tool-overlay": "done",
        "dblclick .transform-image": "done",
        "dblclick .transform-holder": "done",
        "mousedown .transform-handle": "startTrackingMouseMove",
        "mousedown .transform-image": "startTrackingMouseMove",
        "mousedown .transform-holder": "startTrackingMouseMove",
        "click #ok-btn": "done",
        "click #cancel-btn": "cancel",
        "click #trash-btn": "trash"
    },
    initialize: function(a) {
        this.designPanel = a.designPanel,
        this.model.on("change:canvasTransformData", this.update, this),
        this.model.on("loadComplete", this.render, this),
        this.model.on("change:imageQualityLevel", this.updateImageQualityWarning, this),
        this.finishCallback = a.finishCallback,
        this.cancelCallback = a.cancelCallback,
        this.trashCallback = a.trashCallback
    },
    update: function() {
        this.model.get("canvasTransformData");
        this.$(".transform-tool-container").css("left", this.model.get("toolLeft") + "px"),
        this.$(".transform-tool-container").css("top", this.model.get("toolTop") + "px"),
        this.$(".transform-tool-container").css("width", this.model.get("toolWidth") + "px"),
        this.$(".transform-tool-container").css("height", this.model.get("toolHeight") + "px")
    },
    render: function() {
        this.model.attributes.__ = __m,
        this.model.attributes.getResourceUrl = function() {
            return function(a) {
                return urlResourceLocator.getUrl(a)
            }
        },
        this.$el.html(Mustache.render($(this.template).html(), this.model.attributes)),
        this.updateImageQualityWarning(),
        Server.isMobile && (this.$(".transform-holder").unbind("touchstart").bind("touchstart", $.proxy(this.startTrackingMouseMove, this)), this.$(".transform-image").unbind("touchstart").bind("touchstart", $.proxy(this.startTrackingMouseMove, this)), this.$(".transform-handle").unbind("touchstart").bind("touchstart", $.proxy(this.startTrackingMouseMove, this)), this.$(".transform-tool-overlay").doubletap($.proxy(this.done, this)), this.$(".transform-image").doubletap($.proxy(this.done, this)), this.$(".transform-holder").doubletap($.proxy(this.done, this)))
    },
    startTrackingMouseMove: function(a) {
        return $target = $(a.currentTarget),
        $target.hasClass("transform-handle-nw") ? this.dragState = "nw-resize": $target.hasClass("transform-handle-sw") ? this.dragState = "sw-resize": $target.hasClass("transform-handle-se") ? this.dragState = "se-resize": $target.hasClass("transform-handle-ne") ? this.dragState = "ne-resize": ($target.hasClass("transform-image") || $target.hasClass("transform-holder")) && (this.dragState = "move"),
        this.model.initStartDrag(),
        this.initMousePos = Server.isMobile ? {
            x: a.originalEvent.changedTouches[0].pageX,
            y: a.originalEvent.changedTouches[0].pageY
        }: {
            x: a.clientX,
            y: a.clientY
        },
        Server.isMobile ? ($(window).unbind("touchmove").bind("touchmove", $.proxy(this.drag, this)), $(window).unbind("touchend").bind("touchend", $.proxy(this.stopTrackingMouseMove, this))) : ($(window).mousemove($.proxy(this.drag, this)), $(window).mouseup($.proxy(this.stopTrackingMouseMove, this))),
        a.stopPropagation(),
        !1
    },
    drag: function(a) {
        if (Server.isMobile) var b = a.originalEvent.changedTouches[0].pageX - this.initMousePos.x,
        c = a.originalEvent.changedTouches[0].pageY - this.initMousePos.y;
        else var b = a.clientX - this.initMousePos.x,
        c = a.clientY - this.initMousePos.y;
        return this.model.drag({
            x: b,
            y: c
        },
        this.dragState),
        a.stopPropagation(),
        !1
    },
    stopTrackingMouseMove: function(a) {
        return "cancel-btn" == a.originalEvent.target.id ? !0 : "trash-btn" == a.originalEvent.target.id ? !0 : "ok-btn" == a.originalEvent.target.id ? !0 : ($(window).unbind(Server.isMobile ? "touchmove": "mousemove"), a.stopPropagation(), !1)
    },
    done: function() {
        return this.finishCallback(this.model.get("canvasTransformData")),
        this.destructor(),
        this.designPanel.hideTransformTool(),
        !1
    },
    cancel: function() {
        return this.cancelCallback(),
        this.destructor(),
        this.designPanel.hideTransformTool(),
        !1
    },
    trash: function() {
        return this.trashCallback(),
        this.destructor(),
        this.designPanel.hideTransformTool(),
        !1
    },
    destructor: function() {
        Server.isMobile && ($(window).unbind("touchmove"), $(window).unbind("touchend"), this.$(".transform-holder").unbind("touchstart"), this.$(".transform-image").unbind("touchstart"), this.$(".transform-handle").unbind("touchstart"))
    },
    updateImageQualityWarning: function() {
        {
            var a = this.model.get("imageQualityLevel");
            this.model.get("imageQuality")
        }
        4 > a ? (2 >= a ? (this.$(".text-important").addClass("hide"), this.$(".text-error").removeClass("hide")) : (this.$(".text-important").removeClass("hide"), this.$(".text-error").addClass("hide")), this.$("#quality-warning").removeClass("hide"), 3 == a ? this.$(".quality-warning-text").text(__("Acceptable image quality. Print may be slightly fuzzy.")) : 2 == a && this.$(".quality-warning-text").text(__("Mediocre image quality. Print may be fuzzy."))) : this.$("#quality-warning").addClass("hide")
    }
}),
commonData = {},
ctgBuilder = new Backbone.Marionette.Application,
builderPageState = new BuilderPageState({
    templateMapping: Server.templateMapping,
    deviceList: Server.devices,
    itemOptionMapping: Server.deviceItemOptionListMapping,
    productMapping: Server.deviceProductMapping,
    subscriptionPlans: Server.subscriptionPlans,
    enterChallenge: Server.enterChallenge,
    canSubscribe: Server.canSubscribe
}),
designPanelState = new DesignPanelState({
    templateMapping: Server.templateMapping,
    pageModel: builderPageState,
    app: ctgBuilder
}),
MainView = Backbone.Marionette.CompositeView.extend({
    model: builderPageState,
    designPanelState: designPanelState,
    template: "#template-builder",
    className: "f-height",
    events: {
        "click #reset-btn": "resetButtonClicked",
        "click #random-btn": "randomButtonClicked",
        "change #toggle-private": "togglePrivate",
        "click #aqua-btn": "toggleAqua",
        "click #aqua-container .skip": "closeAquaExplain"
    },
    initialize: function() {
        this.model.on("change:randomPool", this.updateRandomButtonState, this),
        this.model.on("change:currentProduct", this.updateAquaButton, this),
        this.designPanelState.on("change:imageQualityLevel", this.updatePrintQualityLevel, this),
        this.designPanelState.on("change:userImagesData", this.updatePrintQualityVisibility, this)
    },
    render: function() {
        var a = $(this.template).html(),
        b = Mustache.render(a, {
            isArtist: Server.isArtist,
            __: __m,
            getResourceUrl: function() {
                return function(a) {
                    return urlResourceLocator.getUrl(a)
                }
            }
        });
        this.$el.html(b),
        Server.enterChallenge && this.$("#private-container").addClass("hide")
    },
    updateRandomButtonState: function() {
        this.model.isRandomPoolActive() ? this.$("#random-btn").removeClass("disabled") : this.$("#random-btn").addClass("disabled")
    },
    resetButtonClicked: function() {
        if (builderPageState.hasImages()) {
            var a = new ConfirmResetModalView({
                app: this.designPanelState.app,
                successCallback: function() {
                    this.app.confrimModalView.close(),
                    designPanelState.resetDesign()
                },
                failedCallback: function() {
                    this.app.confrimModalView.close()
                },
                heading: __("Are you sure?"),
                message: __("All your pictures will be removed from your design"),
                confirm: __("Reset")
            });
            this.designPanelState.app.confrimModalView.show(a)
        }
        return _gaq && _gaq.push(["_trackPageview", "/ga_builder_reset_clicked"]),
        !1
    },
    randomButtonClicked: function() {
        if (this.$("#random-btn").hasClass("disabled")) return ! 1;
        if (builderPageState.hasImages()) {
            var a = new ConfirmResetModalView({
                app: this.designPanelState.app,
                successCallback: function() {
                    this.app.confrimModalView.close(),
                    designPanelState.randomize()
                },
                failedCallback: function() {
                    this.app.confrimModalView.close()
                },
                heading: __("Are you sure?"),
                message: __("All your pictures will be removed from your design"),
                confirm: __("Reset")
            });
            this.designPanelState.app.confrimModalView.show(a)
        } else this.designPanelState.randomize();
        return _gaq && _gaq.push(["_trackPageview", "/ga_builder_randomize_clicked"]),
        !1
    },
    togglePrivate: function() {
        this.model.set("private", this.$("#toggle-private").is(":checked"))
    },
    toggleAqua: function() {
        var a = this.$("#aqua-btn").hasClass("active");
        this.$("#aqua-btn").toggleClass("active"),
        this.$("#aqua-btn>.text").toggleClass("text-main"),
        this.model.set("aqua", !a)
    },
    updateAquaButton: function() {
        this.model.get("currentProduct") && this.model.get("currentProduct").id == ConstantsManager.PRODUCT_TYPE_WOOD_CASE ? (this.$("#aqua-container").removeClass("hide"), "undefined" != typeof Storage ? localStorage.hasShownAquaTuto || ($("#aqua-container .info-aqua").removeClass("hide"), localStorage.hasShownAquaTuto = !0) : $("#aqua-container .info-aqua").removeClass("hide")) : this.$("#aqua-container").addClass("hide")
    },
    closeAquaExplain: function() {
        return this.$("#aqua-container .bulle-explain").addClass("hide"),
        !1
    },
    updatePrintQualityVisibility: function() {
        var a = this.designPanelState.get("userImagesData"),
        b = 0;
        for (index in a) a[index] && b++;
        b > 0 ? $(".quality-picture").css("opacity", 1) : $(".quality-picture").css("opacity", 0)
    },
    updatePrintQualityLevel: function() {
        var a = this.designPanelState.get("imageQualityLevel");
        a >= 1 ? $("#quality-star1").removeClass("text-second-d").addClass("text-main") : $("#quality-star1").addClass("text-second-d").removeClass("text-main"),
        a >= 2 ? $("#quality-star2").removeClass("text-second-d").addClass("text-main") : $("#quality-star2").addClass("text-second-d").removeClass("text-main"),
        a >= 3 ? $("#quality-star3").removeClass("text-second-d").addClass("text-main") : $("#quality-star3").addClass("text-second-d").removeClass("text-main"),
        a >= 4 ? $("#quality-star4").removeClass("text-second-d").addClass("text-main") : $("#quality-star4").addClass("text-second-d").removeClass("text-main"),
        a >= 5 ? $("#quality-star5").removeClass("text-second-d").addClass("text-main") : $("#quality-star5").addClass("text-second-d").removeClass("text-main")
    }
});
builderPageState.app = ctgBuilder;
var CurrentDeviceView = Backbone.View.extend({
    initialize: function() {
        this.model.on("change:currentDevice", this.render, this)
    },
    render: function() {
        var a = this.model.get("currentDevice");
        this.$el.html(a.short_description)
    }
}),
CurrentPriceView = Backbone.View.extend({
    initialize: function() {
        this.model.on("change:currentItemOption", this.render, this)
    },
    render: function() {
        var a = this.model.getCurrentItemOption();
        this.$el.html("6month" == Server.defaultSubscription ? "$13.95 <span class='h4-like block mt0'>(Casetify Monthly)</span>": "12month" == Server.defaultSubscription ? "$9.95 <span class='h4-like block mt0'>(Casetify Monthly)</span>": "$" + parseFloat(parseFloat(a.base_price) + parseFloat(a.additional_cost)))
    }
}),
instagramPanelModel = new InstagramPanelModel({
    app: ctgBuilder,
    pageModel: builderPageState
}),
facebookPanelModel = new FacebookPanelModel({
    app: ctgBuilder,
    pageModel: builderPageState
}),
uploadPanelState = new UploadPanelState({
    pageModel: builderPageState
}),
stampPanelModel = new StampPanelModel({
    stamps: Server.stamps,
    pageModel: builderPageState
}),
mainView = new MainView,
controlPanel = new ControlPanel({
    pageModel: builderPageState,
    app: ctgBuilder
}),
devicePanel = new ControlDevicePanel({
    model: builderPageState,
    controlPanel: controlPanel,
    app: ctgBuilder
}),
casePanel = new ControlCasePanel({
    model: builderPageState,
    controlPanel: controlPanel
}),
controlCaseSubscription = new ControlCaseSubscription({
    model: builderPageState,
    controlPanel: controlPanel
}),
caseDetailPanel = new ControlCaseDetailPanel({
    model: builderPageState,
    controlPanel: controlPanel
}),
layoutPanel = new ControlLayoutPanel({
    model: builderPageState,
    controlPanel: controlPanel,
    app: ctgBuilder
}),
facebookPanel = new ControlFacebookPanel({
    model: facebookPanelModel,
    controlPanel: controlPanel
}),
facebookAlbumList = new FacebookAlbumCollectionView({
    collection: facebookPanelModel.albumModel,
    facebookModel: facebookPanelModel,
    controlPanel: controlPanel
}),
facebookFriendsCompositeView = new FacebookFriendsCompositeView({
    facebookModel: facebookPanelModel,
    controlPanel: controlPanel,
    collection: facebookPanelModel.friendsModel
}),
facebookPhotoPage = new FacebookPhotoPage({
    model: facebookPanelModel,
    controlPanel: controlPanel
}),
facebookPhotoList = new FacebookPhotoCollectionView({
    collection: facebookPanelModel.imagesModel,
    model: facebookPanelModel,
    pageModel: builderPageState
}),
instagramConnect = new ControlInstagramConnect({
    model: instagramPanelModel,
    controlPanel: controlPanel
}),
instagramPhotoList = new InstagramPhotoItemCollectionView({
    collection: instagramPanelModel.imagesModel,
    model: instagramPanelModel,
    controlPanel: controlPanel
}),
instagramFriendsCompositeView = new InstagramFriendsCompositeView({
    collection: instagramPanelModel.friendsModel,
    model: instagramPanelModel,
    controlPanel: controlPanel
}),
uploadPanel = new ControlUploadPanel({
    model: uploadPanelState
}),
uploadPanelPhotoList = new ControlUploadCollectionView({
    collection: uploadPanelState.imagesModel,
    uploadPanelState: uploadPanelState
}),
stampAlbumList = new StampAlbumList({
    collection: stampPanelModel.stampsAlbumsModel,
    controlPanel: controlPanel,
    stampPanelModel: stampPanelModel
}),
stampList = new StampList({
    collection: stampPanelModel.stampsModel,
    controlPanel: controlPanel
}),
filterList = new FilterPage({
    builderPageState: builderPageState
}),
designPanel = new DesignPanel({
    model: designPanelState
}),
templateGrid = new TemplateGrid({
    pageModel: builderPageState,
    model: designPanelState,
    designPanel: designPanel
}),
designCanvas = new DesignCanvas({
    pageModel: builderPageState,
    model: designPanelState
});
ctgBuilder.addRegions({
    mainContent: "#builder-main-content",
    controlPanel: "#builder-control-panel",
    devicePanel: "[item-view=controlDevicePanel]",
    casePanel: "[item-view=controlCasePanel]",
    controlCaseSubscription: "[item-view=controlCaseSubscription]",
    caseDetailPanel: "[item-view=controlCaseOption]",
    layoutPanel: "[item-view=controlLayoutPanel]",
    templatePanel: "[item-view=controlTemplatePanel]",
    facebookPanel: "[item-view=controlFacebookConnect]",
    facebookAlbumList: "[item-view=controlFacebookAlbum]",
    facebookFriendsCompositeView: "[item-view=controlFacebookFriendsPage]",
    facebookPhotoPage: "[item-view=controlFacebookPhotoPage]",
    facebookPhotoList: "#facebook-photo-list",
    instagramConnect: "[item-view=controlInstagramConnect]",
    instagramPhotoList: "[item-view=controlInstagramPhotoList]",
    instagramFriendsCompositeView: "[item-view=controlInstagramFriendsPage]",
    uploadPanel: "[item-view=controlUpload]",
    uploadPanelPhotoList: "#upload-photo-container",
    filterList: "[item-view=controlFilter]",
    stampAlbumList: "[item-view=controlStamp]",
    stampList: "[item-view=controlStampDetail]",
    designPanel: "#design-panel",
    signupModalView: "#builder-signup-modal",
    saveDesignModalView: "#builder-save-design-modal",
    editDesignModalView: "#builder-edit-detail-modal",
    completeUserProfileModalView: "#builder-complete-user-profile-modal",
    confrimModalView: "#builder-confirm-modal"
}),
ctgBuilder.mainContent.show(mainView),
ctgBuilder.controlPanel.show(controlPanel),
ctgBuilder.devicePanel.show(devicePanel),
ctgBuilder.facebookPanel.show(facebookPanel),
ctgBuilder.facebookFriendsCompositeView.show(facebookFriendsCompositeView),
ctgBuilder.facebookPhotoPage.show(facebookPhotoPage),
ctgBuilder.facebookPhotoList.show(facebookPhotoList),
ctgBuilder.instagramConnect.show(instagramConnect),
ctgBuilder.instagramFriendsCompositeView.show(instagramFriendsCompositeView),
ctgBuilder.filterList.show(filterList),
ctgBuilder.stampList.show(stampList),
ctgBuilder.designPanel.show(designPanel),
designPanel.templateGrid.show(templateGrid),
designPanel.designCanvas.show(designCanvas),
ctgBuilder.start();
var currentDeviceView = new CurrentDeviceView({
    el: $("#current-device-name")[0],
    model: builderPageState
}),
currentPriceView = new CurrentPriceView({
    el: $("#current-price")[0],
    model: builderPageState
});
if (builderPageState.set("currentDevice", Server.devices[0]), mainView.toggleAqua(), controlPanel.selectButton("products-btn"), Server.facebookConnected) {
    var delay = 0;
    Server.facebookConnected && (delay += 2e3),
    Server.instagramConnected && (delay += 2e3),
    ExternalSourceAccessManager.setkValidAccessTokenCache(2, !1, !0),
    controlPanel.setDefault("facebook-btn", "facebook-album-list"),
    facebookPanelModel.set("profilePicture", getThumbnailUrl(Server.facebookProfilePic)),
    setTimeout(function() {
        controlPanel.loadView("facebook-album-list")
    },
    delay)
}
Server.instagramConnected && (ExternalSourceAccessManager.setkValidAccessTokenCache(1, !1, !0), controlPanel.setDefault("instagram-btn", "instagram-photo-list"), instagramPanelModel.set("profilePicture", getThumbnailUrl(Server.instagramProfilePic)), setTimeout(function() {
    controlPanel.loadView("instagram-photo-list")
},
2e3)),
Server.defaultCaseType && ("bezel" == Server.defaultCaseType ? (builderPageState.setCurrentProductWithId(4), builderPageState.set("hasVisitedCasePage", !0)) : "woodcase" == Server.defaultCaseType ? (commonData.selectedFirstDevice = !0, commonData.selectedFirstProduct = !0, builderPageState.setCurrentProductWithId(9), builderPageState.set("hasVisitedCasePage", !0), controlPanel.gotoSlide("layout-list")) : "ipadcover" == Server.defaultCaseType && (commonData.selectedFirstDevice = !0, commonData.selectedFirstProduct = !0, builderPageState.set("hasVisitedCasePage", !0), builderPageState.setCurrentDevice("ipad-mini"), builderPageState.setCurrentProductWithId(10), controlPanel.gotoSlide("layout-list"))),
Server.defaultSubscription && ("regular" == Server.defaultSubscription && builderPageState.setSubscriptionById(6e4), "6month" == Server.defaultSubscription && builderPageState.setSubscriptionById(60001), "12month" == Server.defaultSubscription && builderPageState.setSubscriptionById(60002)),
Server.defualtDevice && builderPageState.setCurrentDevice(Server.defualtDevice),
"undefined" != typeof Storage ? localStorage.hasVisitedBuilderPage || (tutorial(), localStorage.hasVisitedBuilderPage = !0) : tutorial();
var $needHelp = $(".need-help");
if ($needHelp.click(function() {
    tutorial()
}), $(".info-double-click .skip").click(function(a) {
    $target = $(a.currentTarget),
    $target.parents(".info-double-click ").addClass("hide")
}), Server.isEditMode || Server.isVirtualMode) {
    builderPageState.setCurrentDevice(Server.editArtwork.artwork.deviceType),
    builderPageState.set("currentFilter", Server.editArtwork.artwork.filter);
    var productId = 1;
    parseInt(Server.editArtwork.artwork.itemType) < 5e4 && parseInt(Server.editArtwork.artwork.itemType) > 4e4 && (productId = 4),
    parseInt(Server.editArtwork.artwork.itemType) > 5e4 && parseInt(Server.editArtwork.artwork.itemType) < 6e4 && (productId = 5),
    parseInt(Server.editArtwork.artwork.itemType) > 9e4 && parseInt(Server.editArtwork.artwork.itemType) < 1e5 && (productId = 9),
    parseInt(Server.editArtwork.artwork.itemType) > 1e5 && parseInt(Server.editArtwork.artwork.itemType) < 11e4 && (productId = 10),
    builderPageState.setCurrentProductWithId(productId);
    var layoutShortName = Server.editArtwork.artwork.template.replace(Server.editArtwork.artwork.deviceType + "-", "");
    builderPageState.setCurrentLayout(layoutShortName),
    builderPageState.setCurrentItemOptionById(Server.editArtwork.artwork.itemType),
    builderPageState.set("hasVisitedCasePage", !0),
    templateGrid.setUpdateImageDataCallback(function() {
        var a = Server.editArtwork.artwork.img,
        b = Server.editArtwork.artwork.lowResImg,
        c = 0;
        for (index in a) {
            var d = b ? b[index] : a[index],
            e = a[index].match("^/controllers/mapper") ? a[index] : getThumbnailUrl(a[index]),
            f = new ImageModel({
                lowRec: d,
                highRec: a[index],
                thumbnail: e
            });
            for (f.addHighRecCallback($.proxy(function(a, b) {
                var c = builderPageState.getCanvasTransformDataFormat(Server.editArtwork.artwork.transform[b], Server.editArtwork.artwork.hldrSize[b], a);
                designPanelState.setUserTransformDataForBox(b, c)
            },
            this, f, index)), f.loadLowRecImg(), f.loadHighRecImg(), templateGrid.setImageDataForBox(f, c), c++; Server.editArtwork.artwork.hldrSize[c] && Server.editArtwork.artwork.hldrSize[c].type && "image" != Server.editArtwork.artwork.hldrSize[c].type;) c++
        }
    },
    layoutShortName);
    var texts = Server.editArtwork.artwork.text,
    currentLayout = builderPageState.get("currentLayout");
    if (currentLayout) {
        var containers = currentLayout.format.containers,
        textArrOffset = 0;
        for (index in containers) if ("text" == containers[index].type && texts[textArrOffset]) {
            var textObj = texts[textArrOffset],
            textModels = designPanelState.get("userTextsData");
            if (textModels) {
                var textModel = textModels[index];
                textObj && textObj.text && textModel.set("text", textObj.text),
                designPanelState.setTextForBox(containers[index].id, textModel, !0)
            }
            textArrOffset++
        }
    }
}

var preloadFont = function(a) {
    var b = document.createElement("span");
    b.innerHTML = " ",
    b.style.fontFamily = a,
    b.style.fontSize = 1,
    b.style.opacity = .1,
    document.getElementById("preloader").appendChild(b)
};
preloadFont("FONT_Didot"),
preloadFont("FONT_Raleway_Medium"),
preloadFont("FONT_Raleway_ExtraLight"),
preloadFont("FONT_AbrahamLincoln"),
preloadFont("FONT_LeagueGothic_Regular");
