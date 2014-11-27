/*! casetagram 2014-11-11 */
window.Modernizr = function(a, b, c) {
    function d(a) {
        t.cssText = a
    }
    function e(a, b) {
        return d(x.join(a + ";") + (b || ""))
    }
    function f(a, b) {
        return typeof a === b
    }
    function g(a, b) {
        return !! ~ ("" + a).indexOf(b)
    }
    function h(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!g(e, "-") && t[e] !== c) return "pfx" == b ? e: !0
        }
        return ! 1
    }
    function i(a, b, d) {
        for (var e in a) {
            var g = b[a[e]];
            if (g !== c) return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g
        }
        return ! 1
    }
    function j(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + z.join(d + " ") + d).split(" ");
        return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + A.join(d + " ") + d).split(" "), i(e, b, c))
    }
    function k() {
        o.input = function(c) {
            for (var d = 0,
            e = c.length; e > d; d++) E[c[d]] = c[d] in u;
            return E.list && (E.list = !!b.createElement("datalist") && !!a.HTMLDataListElement),
            E
        } ("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
        o.inputtypes = function(a) {
            for (var d, e, f, g = 0,
            h = a.length; h > g; g++) u.setAttribute("type", e = a[g]),
            d = "text" !== u.type,
            d && (u.value = v, u.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && u.style.WebkitAppearance !== c ? (q.appendChild(u), f = b.defaultView, d = f.getComputedStyle && "textfield" !== f.getComputedStyle(u, null).WebkitAppearance && 0 !== u.offsetHeight, q.removeChild(u)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? u.checkValidity && u.checkValidity() === !1 : u.value != v)),
            D[a[g]] = !!d;
            return D
        } ("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var l, m, n = "2.6.2",
    o = {},
    p = !0,
    q = b.documentElement,
    r = "modernizr",
    s = b.createElement(r),
    t = s.style,
    u = b.createElement("input"),
    v = ":)",
    w = {}.toString,
    x = " -webkit- -moz- -o- -ms- ".split(" "),
    y = "Webkit Moz O ms",
    z = y.split(" "),
    A = y.toLowerCase().split(" "),
    B = {
        svg: "http://www.w3.org/2000/svg"
    },
    C = {},
    D = {},
    E = {},
    F = [],
    G = F.slice,
    H = function(a, c, d, e) {
        var f, g, h, i, j = b.createElement("div"),
        k = b.body,
        l = k || b.createElement("body");
        if (parseInt(d, 10)) for (; d--;) h = b.createElement("div"),
        h.id = e ? e[d] : r + (d + 1),
        j.appendChild(h);
        return f = ["&#173;", '<style id="s', r, '">', a, "</style>"].join(""),
        j.id = r,
        (k ? j: l).innerHTML += f,
        l.appendChild(j),
        k || (l.style.background = "", l.style.overflow = "hidden", i = q.style.overflow, q.style.overflow = "hidden", q.appendChild(l)),
        g = c(j, a),
        k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), q.style.overflow = i),
        !!g
    },
    I = function(b) {
        var c = a.matchMedia || a.msMatchMedia;
        if (c) return c(b).matches;
        var d;
        return H("@media " + b + " { #" + r + " { position: absolute; } }",
        function(b) {
            d = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position
        }),
        d
    },
    J = function() {
        function a(a, e) {
            e = e || b.createElement(d[a] || "div"),
            a = "on" + a;
            var g = a in e;
            return g || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""), g = f(e[a], "function"), f(e[a], "undefined") || (e[a] = c), e.removeAttribute(a))),
            e = null,
            g
        }
        var d = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return a
    } (),
    K = {}.hasOwnProperty;
    m = f(K, "undefined") || f(K.call, "undefined") ?
    function(a, b) {
        return b in a && f(a.constructor.prototype[b], "undefined")
    }: function(a, b) {
        return K.call(a, b)
    },
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        var b = this;
        if ("function" != typeof b) throw new TypeError;
        var c = G.call(arguments, 1),
        d = function() {
            if (this instanceof d) {
                var e = function() {};
                e.prototype = b.prototype;
                var f = new e,
                g = b.apply(f, c.concat(G.call(arguments)));
                return Object(g) === g ? g: f
            }
            return b.apply(a, c.concat(G.call(arguments)))
        };
        return d
    }),
    C.flexbox = function() {
        return j("flexWrap")
    },
    C.canvas = function() {
        var a = b.createElement("canvas");
        return !! a.getContext && !!a.getContext("2d")
    },
    C.canvastext = function() {
        return !! o.canvas && !!f(b.createElement("canvas").getContext("2d").fillText, "function")
    },
    C.webgl = function() {
        return !! a.WebGLRenderingContext
    },
    C.touch = function() {
        var c;
        return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : H(["@media (", x.join("touch-enabled),("), r, ")", "{#modernizr{top:9px;position:absolute}}"].join(""),
        function(a) {
            c = 9 === a.offsetTop
        }),
        c
    },
    C.geolocation = function() {
        return "geolocation" in navigator
    },
    C.postmessage = function() {
        return !! a.postMessage
    },
    C.websqldatabase = function() {
        return !! a.openDatabase
    },
    C.indexedDB = function() {
        return !! j("indexedDB", a)
    },
    C.hashchange = function() {
        return J("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    },
    C.history = function() {
        return !! a.history && !!history.pushState
    },
    C.draganddrop = function() {
        var a = b.createElement("div");
        return "draggable" in a || "ondragstart" in a && "ondrop" in a
    },
    C.websockets = function() {
        return "WebSocket" in a || "MozWebSocket" in a
    },
    C.rgba = function() {
        return d("background-color:rgba(150,255,150,.5)"),
        g(t.backgroundColor, "rgba")
    },
    C.hsla = function() {
        return d("background-color:hsla(120,40%,100%,.5)"),
        g(t.backgroundColor, "rgba") || g(t.backgroundColor, "hsla")
    },
    C.multiplebgs = function() {
        return d("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(t.background)
    },
    C.backgroundsize = function() {
        return j("backgroundSize")
    },
    C.borderimage = function() {
        return j("borderImage")
    },
    C.borderradius = function() {
        return j("borderRadius")
    },
    C.boxshadow = function() {
        return j("boxShadow")
    },
    C.textshadow = function() {
        return "" === b.createElement("div").style.textShadow
    },
    C.opacity = function() {
        return e("opacity:.55"),
        /^0.55$/.test(t.opacity)
    },
    C.cssanimations = function() {
        return j("animationName")
    },
    C.csscolumns = function() {
        return j("columnCount")
    },
    C.cssgradients = function() {
        var a = "background-image:",
        b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        c = "linear-gradient(left top,#9f9, white);";
        return d((a + "-webkit- ".split(" ").join(b + a) + x.join(c + a)).slice(0, -a.length)),
        g(t.backgroundImage, "gradient")
    },
    C.cssreflections = function() {
        return j("boxReflect")
    },
    C.csstransforms = function() {
        return !! j("transform")
    },
    C.csstransforms3d = function() {
        var a = !!j("perspective");
        return a && "webkitPerspective" in q.style && H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
        function(b) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight
        }),
        a
    },
    C.csstransitions = function() {
        return j("transition")
    },
    C.fontface = function() {
        var a;
        return H('@font-face {font-family:"font";src:url("https://")}',
        function(c, d) {
            var e = b.getElementById("smodernizr"),
            f = e.sheet || e.styleSheet,
            g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText: f.cssText || "": "";
            a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
        }),
        a
    },
    C.generatedcontent = function() {
        var a;
        return H(["#", r, "{font:0/0 a}#", r, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""),
        function(b) {
            a = b.offsetHeight >= 3
        }),
        a
    },
    C.video = function() {
        var a = b.createElement("video"),
        c = !1;
        try { (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch(d) {}
        return c
    },
    C.audio = function() {
        var a = b.createElement("audio"),
        c = !1;
        try { (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch(d) {}
        return c
    },
    C.localstorage = function() {
        try {
            return localStorage.setItem(r, r),
            localStorage.removeItem(r),
            !0
        } catch(a) {
            return ! 1
        }
    },
    C.sessionstorage = function() {
        try {
            return sessionStorage.setItem(r, r),
            sessionStorage.removeItem(r),
            !0
        } catch(a) {
            return ! 1
        }
    },
    C.webworkers = function() {
        return !! a.Worker
    },
    C.applicationcache = function() {
        return !! a.applicationCache
    },
    C.svg = function() {
        return !! b.createElementNS && !!b.createElementNS(B.svg, "svg").createSVGRect
    },
    C.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>",
        (a.firstChild && a.firstChild.namespaceURI) == B.svg
    },
    C.smil = function() {
        return !! b.createElementNS && /SVGAnimate/.test(w.call(b.createElementNS(B.svg, "animate")))
    },
    C.svgclippaths = function() {
        return !! b.createElementNS && /SVGClipPath/.test(w.call(b.createElementNS(B.svg, "clipPath")))
    };
    for (var L in C) m(C, L) && (l = L.toLowerCase(), o[l] = C[L](), F.push((o[l] ? "": "no-") + l));
    return o.input || k(),
    o.addTest = function(a, b) {
        if ("object" == typeof a) for (var d in a) m(a, d) && o.addTest(d, a[d]);
        else {
            if (a = a.toLowerCase(), o[a] !== c) return o;
            b = "function" == typeof b ? b() : b,
            "undefined" != typeof p && p && (q.className += " " + (b ? "": "no-") + a),
            o[a] = b
        }
        return o
    },
    d(""),
    s = u = null,
    function(a, b) {
        function c(a, b) {
            var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>",
            d.insertBefore(c.lastChild, d.firstChild)
        }
        function d() {
            var a = r.elements;
            return "string" == typeof a ? a.split(" ") : a
        }
        function e(a) {
            var b = q[a[o]];
            return b || (b = {},
            p++, a[o] = p, q[p] = b),
            b
        }
        function f(a, c, d) {
            if (c || (c = b), k) return c.createElement(a);
            d || (d = e(c));
            var f;
            return f = d.cache[a] ? d.cache[a].cloneNode() : n.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a),
            f.canHaveChildren && !m.test(a) ? d.frag.appendChild(f) : f
        }
        function g(a, c) {
            if (a || (a = b), k) return a.createDocumentFragment();
            c = c || e(a);
            for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) f.createElement(h[g]);
            return f
        }
        function h(a, b) {
            b.cache || (b.cache = {},
            b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()),
            a.createElement = function(c) {
                return r.shivMethods ? f(c, a, b) : b.createElem(c)
            },
            a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/\w+/g,
            function(a) {
                return b.createElem(a),
                b.frag.createElement(a),
                'c("' + a + '")'
            }) + ");return n}")(r, b.frag)
        }
        function i(a) {
            a || (a = b);
            var d = e(a);
            return r.shivCSS && !j && !d.hasCSS && (d.hasCSS = !!c(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),
            k || h(a, d),
            a
        }
        var j, k, l = a.html5 || {},
        m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        n = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        o = "_html5shiv",
        p = 0,
        q = {}; !
        function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>",
                j = "hidden" in a,
                k = 1 == a.childNodes.length ||
                function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
                } ()
            } catch(c) {
                j = !0,
                k = !0
            }
        } ();
        var r = {
            elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: l.shivCSS !== !1,
            supportsUnknownElements: k,
            shivMethods: l.shivMethods !== !1,
            type: "default",
            shivDocument: i,
            createElement: f,
            createDocumentFragment: g
        };
        a.html5 = r,
        i(b)
    } (this, b),
    o._version = n,
    o._prefixes = x,
    o._domPrefixes = A,
    o._cssomPrefixes = z,
    o.mq = I,
    o.hasEvent = J,
    o.testProp = function(a) {
        return h([a])
    },
    o.testAllProps = j,
    o.testStyles = H,
    o.prefixed = function(a, b, c) {
        return b ? j(a, b, c) : j(a, "pfx")
    },
    q.className = q.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + F.join(" ") : ""),
    o
} (this, this.document),
function(a, b, c) {
    function d(a) {
        return "[object Function]" == q.call(a)
    }
    function e(a) {
        return "string" == typeof a
    }
    function f() {}
    function g(a) {
        return ! a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
        var a = r.shift();
        s = 1,
        a ? a.t ? o(function() { ("c" == a.t ? m.injectCss: m.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        },
        0) : (a(), h()) : s = 0
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!n && g(l.readyState) && (t.r = n = 1, !s && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && o(function() {
                    v.removeChild(l)
                },
                50);
                for (var d in A[c]) A[c].hasOwnProperty(d) && A[c][d].onload()
            }
        }
        var j = j || m.errorTimeout,
        l = b.createElement(a),
        n = 0,
        q = 0,
        t = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === A[c] && (q = 1, A[c] = []),
        "object" == a ? l.data = c: (l.src = c, l.type = a),
        l.width = l.height = "0",
        l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, q)
        },
        r.splice(e, 0, t),
        "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null: p), o(k, j)) : A[c].push(l))
    }
    function j(a, b, c, d, f) {
        return s = 0,
        b = b || "j",
        e(a) ? i("c" == b ? x: w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a), 1 == r.length && h()),
        this
    }
    function k() {
        var a = m;
        return a.loader = {
            load: j,
            i: 0
        },
        a
    }
    var l, m, n = b.documentElement,
    o = a.setTimeout,
    p = b.getElementsByTagName("script")[0],
    q = {}.toString,
    r = [],
    s = 0,
    t = "MozAppearance" in n.style,
    u = t && !!b.createRange().compareNode,
    v = u ? n: p.parentNode,
    n = a.opera && "[object Opera]" == q.call(a.opera),
    n = !!b.attachEvent && !n,
    w = t ? "object": n ? "script": "img",
    x = n ? "script": w,
    y = Array.isArray ||
    function(a) {
        return "[object Array]" == q.call(a)
    },
    z = [],
    A = {},
    B = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]),
            a
        }
    };
    m = function(a) {
        function b(a) {
            var b, c, d, a = a.split("!"),
            e = z.length,
            f = a.pop(),
            g = a.length,
            f = {
                url: f,
                origUrl: f,
                prefixes: a
            };
            for (c = 0; g > c; c++) d = a[c].split("="),
            (b = B[d.shift()]) && (f = b(f, d));
            for (c = 0; e > c; c++) f = z[c](f);
            return f
        }
        function g(a, e, f, g, h) {
            var i = b(a),
            j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(),
            i.bypass || (e && (e = d(e) ? e: e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (A[i.url] ? i.noexec = !0 : A[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c": c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                k(),
                e && e(i.origUrl, h, g),
                j && j(i.origUrl, h, g),
                A[i.url] = 2
            })))
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) c || (l = function() {
                        var a = [].slice.call(arguments);
                        m.apply(this, a),
                        n()
                    }),
                    g(a, l, b, 0, j);
                    else if (Object(a) === a) for (i in h = function() {
                        var b, c = 0;
                        for (b in a) a.hasOwnProperty(b) && c++;
                        return c
                    } (), a) a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function() {
                        var a = [].slice.call(arguments);
                        m.apply(this, a),
                        n()
                    }: l[i] = function(a) {
                        return function() {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b),
                            n()
                        }
                    } (m[i])), g(a[i], l, b, i, j))
                } else ! c && n()
            }
            var h, i, j = !!a.test,
            k = a.load || a.both,
            l = a.callback || f,
            m = l,
            n = a.complete || f;
            c(j ? a.yep: a.nope, !!k),
            k && c(k)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0);
        else if (y(a)) for (i = 0; i < a.length; i++) j = a[i],
        e(j) ? g(j, 0, l, 0) : y(j) ? m(j) : Object(j) === j && h(j, l);
        else Object(a) === a && h(a, l)
    },
    m.addPrefix = function(a, b) {
        B[a] = b
    },
    m.addFilter = function(a) {
        z.push(a)
    },
    m.errorTimeout = 1e4,
    null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", l = function() {
        b.removeEventListener("DOMContentLoaded", l, 0),
        b.readyState = "complete"
    },
    0)),
    a.yepnope = k(),
    a.yepnope.executeStack = h,
    a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k, l, n = b.createElement("script"),
        e = e || m.errorTimeout;
        n.src = a;
        for (l in d) n.setAttribute(l, d[l]);
        c = j ? h: c || f,
        n.onreadystatechange = n.onload = function() { ! k && g(n.readyState) && (k = 1, c(), n.onload = n.onreadystatechange = null)
        },
        o(function() {
            k || (k = 1, c(1))
        },
        e),
        i ? n.onload() : p.parentNode.insertBefore(n, p)
    },
    a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var j, e = b.createElement("link"),
        c = i ? h: c || f;
        e.href = a,
        e.rel = "stylesheet",
        e.type = "text/css";
        for (j in d) e.setAttribute(j, d[j]);
        g || (p.parentNode.insertBefore(e, p), o(c, 0))
    }
} (this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
},
window.matchMedia = window.matchMedia ||
function(a) {
    var b, c = a.documentElement,
    d = c.firstElementChild || c.firstChild,
    e = a.createElement("body"),
    f = a.createElement("div");
    return f.id = "mq-test-1",
    f.style.cssText = "position:absolute;top:-100em",
    e.appendChild(f),
    function(a) {
        return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>',
        c.insertBefore(e, d),
        b = 42 == f.offsetWidth,
        c.removeChild(e),
        {
            matches: b,
            media: a
        }
    }
} (document),
function(a) {
    "use strict";
    a.picturefill = function() {
        for (var b = a.document.getElementsByTagName("span"), c = 0, d = b.length; d > c; c++) if (null !== b[c].getAttribute("data-picture")) {
            for (var e = b[c].getElementsByTagName("span"), f = [], g = 0, h = e.length; h > g; g++) {
                var i = e[g].getAttribute("data-media"); (!i || a.matchMedia && a.matchMedia(i).matches) && f.push(e[g])
            }
            var j = b[c].getElementsByTagName("img")[0];
            if (f.length) {
                var k = f.pop();
                j && "NOSCRIPT" !== j.parentNode.nodeName || (j = a.document.createElement("img"), j.alt = b[c].getAttribute("data-alt")),
                j.src = k.getAttribute("data-src"),
                k.appendChild(j)
            } else j && j.parentNode.removeChild(j)
        }
    },
    a.addEventListener ? (a.addEventListener("resize", a.picturefill, !1), a.addEventListener("DOMContentLoaded",
    function() {
        a.picturefill(),
        a.removeEventListener("load", a.picturefill, !1)
    },
    !1), a.addEventListener("load", a.picturefill, !1)) : a.attachEvent && a.attachEvent("onload", a.picturefill)
} (this),
function(a, b) {
    function c(a) {
        var b = a.length,
        c = kb.type(a);
        return kb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    function d(a) {
        var b = zb[a] = {};
        return kb.each(a.match(mb) || [],
        function(a, c) {
            b[c] = !0
        }),
        b
    }
    function e(a, c, d, e) {
        if (kb.acceptData(a)) {
            var f, g, h = kb.expando,
            i = a.nodeType,
            j = i ? kb.cache: a,
            k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || d !== b || "string" != typeof c) return k || (k = i ? a[h] = bb.pop() || kb.guid++:h),
            j[k] || (j[k] = i ? {}: {
                toJSON: kb.noop
            }),
            ("object" == typeof c || "function" == typeof c) && (e ? j[k] = kb.extend(j[k], c) : j[k].data = kb.extend(j[k].data, c)),
            g = j[k],
            e || (g.data || (g.data = {}), g = g.data),
            d !== b && (g[kb.camelCase(c)] = d),
            "string" == typeof c ? (f = g[c], null == f && (f = g[kb.camelCase(c)])) : f = g,
            f
        }
    }
    function f(a, b, c) {
        if (kb.acceptData(a)) {
            var d, e, f = a.nodeType,
            g = f ? kb.cache: a,
            i = f ? a[kb.expando] : kb.expando;
            if (g[i]) {
                if (b && (d = c ? g[i] : g[i].data)) {
                    kb.isArray(b) ? b = b.concat(kb.map(b, kb.camelCase)) : b in d ? b = [b] : (b = kb.camelCase(b), b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    for (; e--;) delete d[b[e]];
                    if (c ? !h(d) : !kb.isEmptyObject(d)) return
                } (c || (delete g[i].data, h(g[i]))) && (f ? kb.cleanData([a], !0) : kb.support.deleteExpando || g != g.window ? delete g[i] : g[i] = null)
            }
        }
    }
    function g(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(Bb, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null: +d + "" === d ? +d: Ab.test(d) ? kb.parseJSON(d) : d
                } catch(f) {}
                kb.data(a, c, d)
            } else d = b
        }
        return d
    }
    function h(a) {
        var b;
        for (b in a) if (("data" !== b || !kb.isEmptyObject(a[b])) && "toJSON" !== b) return ! 1;
        return ! 0
    }
    function i() {
        return ! 0
    }
    function j() {
        return ! 1
    }
    function k() {
        try {
            return Y.activeElement
        } catch(a) {}
    }
    function l(a, b) {
        do a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    function m(a, b, c) {
        if (kb.isFunction(b)) return kb.grep(a,
        function(a, d) {
            return !! b.call(a, d, a) !== c
        });
        if (b.nodeType) return kb.grep(a,
        function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (Qb.test(b)) return kb.filter(b, a, c);
            b = kb.filter(b, a)
        }
        return kb.grep(a,
        function(a) {
            return kb.inArray(a, b) >= 0 !== c
        })
    }
    function n(a) {
        var b = Ub.split("|"),
        c = a.createDocumentFragment();
        if (c.createElement) for (; b.length;) c.createElement(b.pop());
        return c
    }
    function o(a, b) {
        return kb.nodeName(a, "table") && kb.nodeName(1 === b.nodeType ? b: b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function p(a) {
        return a.type = (null !== kb.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function q(a) {
        var b = ec.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function r(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) kb._data(c, "globalEval", !b || kb._data(b[d], "globalEval"))
    }
    function s(a, b) {
        if (1 === b.nodeType && kb.hasData(a)) {
            var c, d, e, f = kb._data(a),
            g = kb._data(b, f),
            h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) kb.event.add(b, c, h[c][d])
            }
            g.data && (g.data = kb.extend({},
            g.data))
        }
    }
    function t(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !kb.support.noCloneEvent && b[kb.expando]) {
                e = kb._data(b);
                for (d in e.events) kb.removeEvent(b, d, e.handle);
                b.removeAttribute(kb.expando)
            }
            "script" === c && b.text !== a.text ? (p(b).text = a.text, q(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), kb.support.html5Clone && a.innerHTML && !kb.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && bc.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected: ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    function u(a, c) {
        var d, e, f = 0,
        g = typeof a.getElementsByTagName !== W ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== W ? a.querySelectorAll(c || "*") : b;
        if (!g) for (g = [], d = a.childNodes || a; null != (e = d[f]); f++) ! c || kb.nodeName(e, c) ? g.push(e) : kb.merge(g, u(e, c));
        return c === b || c && kb.nodeName(a, c) ? kb.merge([a], g) : g
    }
    function v(a) {
        bc.test(a.type) && (a.defaultChecked = a.checked)
    }
    function w(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yc.length; e--;) if (b = yc[e] + c, b in a) return b;
        return d
    }
    function x(a, b) {
        return a = b || a,
        "none" === kb.css(a, "display") || !kb.contains(a.ownerDocument, a)
    }
    function y(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g],
        d.style && (f[g] = kb._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && x(d) && (f[g] = kb._data(d, "olddisplay", C(d.nodeName)))) : f[g] || (e = x(d), (c && "none" !== c || !e) && kb._data(d, "olddisplay", e ? c: kb.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g],
        d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "": "none"));
        return a
    }
    function z(a, b, c) {
        var d = rc.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function A(a, b, c, d, e) {
        for (var f = c === (d ? "border": "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += kb.css(a, c + xc[f], !0, e)),
        d ? ("content" === c && (g -= kb.css(a, "padding" + xc[f], !0, e)), "margin" !== c && (g -= kb.css(a, "border" + xc[f] + "Width", !0, e))) : (g += kb.css(a, "padding" + xc[f], !0, e), "padding" !== c && (g += kb.css(a, "border" + xc[f] + "Width", !0, e)));
        return g
    }
    function B(a, b, c) {
        var d = !0,
        e = "width" === b ? a.offsetWidth: a.offsetHeight,
        f = kc(a),
        g = kb.support.boxSizing && "border-box" === kb.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = lc(a, b, f), (0 > e || null == e) && (e = a.style[b]), sc.test(e)) return e;
            d = g && (kb.support.boxSizingReliable || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + A(a, b, c || (g ? "border": "content"), d, f) + "px"
    }
    function C(a) {
        var b = Y,
        c = uc[a];
        return c || (c = D(a, b), "none" !== c && c || (jc = (jc || kb("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (jc[0].contentWindow || jc[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = D(a, b), jc.detach()), uc[a] = c),
        c
    }
    function D(a, b) {
        var c = kb(b.createElement(a)).appendTo(b.body),
        d = kb.css(c[0], "display");
        return c.remove(),
        d
    }
    function E(a, b, c, d) {
        var e;
        if (kb.isArray(b)) kb.each(b,
        function(b, e) {
            c || Ac.test(a) ? d(a, e) : E(a + "[" + ("object" == typeof e ? b: "") + "]", e, c, d)
        });
        else if (c || "object" !== kb.type(b)) d(a, b);
        else for (e in b) E(a + "[" + e + "]", b[e], c, d)
    }
    function F(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
            f = b.toLowerCase().match(mb) || [];
            if (kb.isFunction(c)) for (; d = f[e++];)"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function G(a, c, d, e) {
        function f(i) {
            var j;
            return g[i] = !0,
            kb.each(a[i] || [],
            function(a, i) {
                var k = i(c, d, e);
                return "string" != typeof k || h || g[k] ? h ? !(j = k) : b: (c.dataTypes.unshift(k), f(k), !1)
            }),
            j
        }
        var g = {},
        h = a === Rc;
        return f(c.dataTypes[0]) || !g["*"] && f("*")
    }
    function H(a, c) {
        var d, e, f = kb.ajaxSettings.flatOptions || {};
        for (e in c) c[e] !== b && ((f[e] ? a: d || (d = {}))[e] = c[e]);
        return d && kb.extend(!0, a, d),
        a
    }
    function I(a, c, d) {
        for (var e, f, g, h, i = a.contents,
        j = a.dataTypes;
        "*" === j[0];) j.shift(),
        f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
        if (f) for (h in i) if (i[h] && i[h].test(f)) {
            j.unshift(h);
            break
        }
        if (j[0] in d) g = j[0];
        else {
            for (h in d) {
                if (!j[0] || a.converters[h + " " + j[0]]) {
                    g = h;
                    break
                }
                e || (e = h)
            }
            g = g || e
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : b
    }
    function J(a, b, c, d) {
        var e, f, g, h, i, j = {},
        k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b);
            else try {
                b = g(b)
            } catch(l) {
                return {
                    state: "parsererror",
                    error: g ? l: "No conversion from " + i + " to " + f
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    function K() {
        try {
            return new a.XMLHttpRequest
        } catch(b) {}
    }
    function L() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch(b) {}
    }
    function M() {
        return setTimeout(function() {
            $c = b
        }),
        $c = kb.now()
    }
    function N(a, b, c) {
        for (var d, e = (ed[b] || []).concat(ed["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }
    function O(a, b, c) {
        var d, e, f = 0,
        g = dd.length,
        h = kb.Deferred().always(function() {
            delete i.elem
        }),
        i = function() {
            if (e) return ! 1;
            for (var b = $c || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c: (h.resolveWith(a, [j]), !1)
        },
        j = h.promise({
            elem: a,
            props: kb.extend({},
            b),
            opts: kb.extend(!0, {
                specialEasing: {}
            },
            c),
            originalProperties: b,
            originalOptions: c,
            startTime: $c || M(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = kb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0,
                d = b ? j.tweens.length: 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }),
        k = j.props;
        for (P(k, j.opts.specialEasing); g > f; f++) if (d = dd[f].call(j, a, k, j.opts)) return d;
        return kb.map(k, N, j),
        kb.isFunction(j.opts.start) && j.opts.start.call(a, j),
        kb.fx.timer(kb.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function P(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = kb.camelCase(c), e = b[d], f = a[c], kb.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = kb.cssHooks[d], g && "expand" in g) {
            f = g.expand(f),
            delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }
    function Q(a, b, c) {
        var d, e, f, g, h, i, j = this,
        k = {},
        l = a.style,
        m = a.nodeType && x(a),
        n = kb._data(a, "fxshow");
        c.queue || (h = kb._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, j.always(function() {
            j.always(function() {
                h.unqueued--,
                kb.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [l.overflow, l.overflowX, l.overflowY], "inline" === kb.css(a, "display") && "none" === kb.css(a, "float") && (kb.support.inlineBlockNeedsLayout && "inline" !== C(a.nodeName) ? l.zoom = 1 : l.display = "inline-block")),
        c.overflow && (l.overflow = "hidden", kb.support.shrinkWrapBlocks || j.always(function() {
            l.overflow = c.overflow[0],
            l.overflowX = c.overflow[1],
            l.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], ad.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (m ? "hide": "show")) continue;
            k[d] = n && n[d] || kb.style(a, d)
        }
        if (!kb.isEmptyObject(k)) {
            n ? "hidden" in n && (m = n.hidden) : n = kb._data(a, "fxshow", {}),
            f && (n.hidden = !m),
            m ? kb(a).show() : j.done(function() {
                kb(a).hide()
            }),
            j.done(function() {
                var b;
                kb._removeData(a, "fxshow");
                for (b in k) kb.style(a, b, k[b])
            });
            for (d in k) g = N(m ? n[d] : 0, d, j),
            d in n || (n[d] = g.start, m && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function R(a, b, c, d, e) {
        return new R.prototype.init(a, b, c, d, e)
    }
    function S(a, b) {
        var c, d = {
            height: a
        },
        e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = xc[e],
        d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function T(a) {
        return kb.isWindow(a) ? a: 9 === a.nodeType ? a.defaultView || a.parentWindow: !1
    }
    var U, V, W = typeof b,
    X = a.location,
    Y = a.document,
    Z = Y.documentElement,
    $ = a.jQuery,
    _ = a.$,
    ab = {},
    bb = [],
    cb = "1.10.2",
    db = bb.concat,
    eb = bb.push,
    fb = bb.slice,
    gb = bb.indexOf,
    hb = ab.toString,
    ib = ab.hasOwnProperty,
    jb = cb.trim,
    kb = function(a, b) {
        return new kb.fn.init(a, b, V)
    },
    lb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    mb = /\S+/g,
    nb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ob = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    pb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    qb = /^[\],:{}\s]*$/,
    rb = /(?:^|:|,)(?:\s*\[)+/g,
    sb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    tb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    ub = /^-ms-/,
    vb = /-([\da-z])/gi,
    wb = function(a, b) {
        return b.toUpperCase()
    },
    xb = function(a) { (Y.addEventListener || "load" === a.type || "complete" === Y.readyState) && (yb(), kb.ready())
    },
    yb = function() {
        Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", xb, !1), a.removeEventListener("load", xb, !1)) : (Y.detachEvent("onreadystatechange", xb), a.detachEvent("onload", xb))
    };
    kb.fn = kb.prototype = {
        jquery: cb,
        constructor: kb,
        init: function(a, c, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : ob.exec(a), !e || !e[1] && c) return ! c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof kb ? c[0] : c, kb.merge(this, kb.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c: Y, !0)), pb.test(e[1]) && kb.isPlainObject(c)) for (e in c) kb.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this
                }
                if (f = Y.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return d.find(a);
                    this.length = 1,
                    this[0] = f
                }
                return this.context = Y,
                this.selector = a,
                this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : kb.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), kb.makeArray(a, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return fb.call(this)
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function(a) {
            var b = kb.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return kb.each(this, a, b)
        },
        ready: function(a) {
            return kb.ready.promise().done(a),
            this
        },
        slice: function() {
            return this.pushStack(fb.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(a) {
            var b = this.length,
            c = +a + (0 > a ? b: 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        map: function(a) {
            return this.pushStack(kb.map(this,
            function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: eb,
        sort: [].sort,
        splice: [].splice
    },
    kb.fn.init.prototype = kb.fn,
    kb.extend = kb.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {},
        i = 1,
        j = arguments.length,
        k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {},
        i = 2), "object" == typeof h || kb.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++) if (null != (f = arguments[i])) for (e in f) a = h[e],
        d = f[e],
        h !== d && (k && d && (kb.isPlainObject(d) || (c = kb.isArray(d))) ? (c ? (c = !1, g = a && kb.isArray(a) ? a: []) : g = a && kb.isPlainObject(a) ? a: {},
        h[e] = kb.extend(k, g, d)) : d !== b && (h[e] = d));
        return h
    },
    kb.extend({
        expando: "jQuery" + (cb + Math.random()).replace(/\D/g, ""),
        noConflict: function(b) {
            return a.$ === kb && (a.$ = _),
            b && a.jQuery === kb && (a.jQuery = $),
            kb
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? kb.readyWait++:kb.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--kb.readyWait: !kb.isReady) {
                if (!Y.body) return setTimeout(kb.ready);
                kb.isReady = !0,
                a !== !0 && --kb.readyWait > 0 || (U.resolveWith(Y, [kb]), kb.fn.trigger && kb(Y).trigger("ready").off("ready"))
            }
        },
        isFunction: function(a) {
            return "function" === kb.type(a)
        },
        isArray: Array.isArray ||
        function(a) {
            return "array" === kb.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return ! isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return null == a ? a + "": "object" == typeof a || "function" == typeof a ? ab[hb.call(a)] || "object": typeof a
        },
        isPlainObject: function(a) {
            var c;
            if (!a || "object" !== kb.type(a) || a.nodeType || kb.isWindow(a)) return ! 1;
            try {
                if (a.constructor && !ib.call(a, "constructor") && !ib.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(d) {
                return ! 1
            }
            if (kb.support.ownLast) for (c in a) return ib.call(a, c);
            for (c in a);
            return c === b || ib.call(a, c)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return ! 1;
            return ! 0
        },
        error: function(a) {
            throw Error(a)
        },
        parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1),
            b = b || Y;
            var d = pb.exec(a),
            e = !c && [];
            return d ? [b.createElement(d[1])] : (d = kb.buildFragment([a], b, e), e && kb(e).remove(), kb.merge([], d.childNodes))
        },
        parseJSON: function(c) {
            return a.JSON && a.JSON.parse ? a.JSON.parse(c) : null === c ? c: "string" == typeof c && (c = kb.trim(c), c && qb.test(c.replace(sb, "@").replace(tb, "]").replace(rb, ""))) ? Function("return " + c)() : (kb.error("Invalid JSON: " + c), b)
        },
        parseXML: function(c) {
            var d, e;
            if (!c || "string" != typeof c) return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch(f) {
                d = b
            }
            return d && d.documentElement && !d.getElementsByTagName("parsererror").length || kb.error("Invalid XML: " + c),
            d
        },
        noop: function() {},
        globalEval: function(b) {
            b && kb.trim(b) && (a.execScript ||
            function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(ub, "ms-").replace(vb, wb)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
            g = a.length,
            h = c(a);
            if (d) {
                if (h) for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else for (f in a) if (e = b.apply(a[f], d), e === !1) break
            } else if (h) for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else for (f in a) if (e = b.call(a[f], f, a[f]), e === !1) break;
            return a
        },
        trim: jb && !jb.call("﻿ ") ?
        function(a) {
            return null == a ? "": jb.call(a)
        }: function(a) {
            return null == a ? "": (a + "").replace(nb, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? kb.merge(d, "string" == typeof a ? [a] : a) : eb.call(d, a)),
            d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (gb) return gb.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c: 0; d > c; c++) if (c in b && b[c] === a) return c
            }
            return - 1
        },
        merge: function(a, c) {
            var d = c.length,
            e = a.length,
            f = 0;
            if ("number" == typeof d) for (; d > f; f++) a[e++] = c[f];
            else for (; c[f] !== b;) a[e++] = c[f++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            var d, e = [],
            f = 0,
            g = a.length;
            for (c = !!c; g > f; f++) d = !!b(a[f], f),
            c !== d && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
            g = a.length,
            h = c(a),
            i = [];
            if (h) for (; g > f; f++) e = b(a[f], f, d),
            null != e && (i[i.length] = e);
            else for (f in a) e = b(a[f], f, d),
            null != e && (i[i.length] = e);
            return db.apply([], i)
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (f = a[c], c = a, a = f),
            kb.isFunction(a) ? (d = fb.call(arguments, 2), e = function() {
                return a.apply(c || this, d.concat(fb.call(arguments)))
            },
            e.guid = a.guid = a.guid || kb.guid++, e) : b
        },
        access: function(a, c, d, e, f, g, h) {
            var i = 0,
            j = a.length,
            k = null == d;
            if ("object" === kb.type(d)) {
                f = !0;
                for (i in d) kb.access(a, c, i, d[i], !0, g, h)
            } else if (e !== b && (f = !0, kb.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                return k.call(kb(a), c)
            })), c)) for (; j > i; i++) c(a[i], d, h ? e: e.call(a[i], i, c(a[i], d)));
            return f ? a: k ? c.call(a) : j ? c(a[0], d) : g
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f],
            a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        }
    }),
    kb.ready.promise = function(b) {
        if (!U) if (U = kb.Deferred(), "complete" === Y.readyState) setTimeout(kb.ready);
        else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", xb, !1),
        a.addEventListener("load", xb, !1);
        else {
            Y.attachEvent("onreadystatechange", xb),
            a.attachEvent("onload", xb);
            var c = !1;
            try {
                c = null == a.frameElement && Y.documentElement
            } catch(d) {}
            c && c.doScroll &&
            function e() {
                if (!kb.isReady) {
                    try {
                        c.doScroll("left")
                    } catch(a) {
                        return setTimeout(e, 50)
                    }
                    yb(),
                    kb.ready()
                }
            } ()
        }
        return U.promise(b)
    },
    kb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(a, b) {
        ab["[object " + b + "]"] = b.toLowerCase()
    }),
    V = kb(Y),
    function(a, b) {
        function c(a, b, c, d) {
            var e, f, g, h, i, j, k, l, o, p;
            if ((b ? b.ownerDocument || b: O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (I && !d) {
                if (e = tb.exec(a)) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f),
                        c
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f),
                    c
                } else {
                    if (e[2]) return ab.apply(c, b.getElementsByTagName(a)),
                    c;
                    if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return ab.apply(c, b.getElementsByClassName(g)),
                    c
                }
                if (x.qsa && (!J || !J.test(a))) {
                    if (l = k = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = m(a), (k = b.getAttribute("id")) ? l = k.replace(wb, "\\$&") : b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--;) j[i] = l + n(j[i]);
                        o = nb.test(a) && b.parentNode || b,
                        p = j.join(",")
                    }
                    if (p) try {
                        return ab.apply(c, o.querySelectorAll(p)),
                        c
                    } catch(q) {} finally {
                        k || b.removeAttribute("id")
                    }
                }
            }
            return v(a.replace(jb, "$1"), b, c, d)
        }
        function d() {
            function a(c, d) {
                return b.push(c += " ") > z.cacheLength && delete a[b.shift()],
                a[c] = d
            }
            var b = [];
            return a
        }
        function e(a) {
            return a[N] = !0,
            a
        }
        function f(a) {
            var b = G.createElement("div");
            try {
                return !! a(b)
            } catch(c) {
                return ! 1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function g(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) z.attrHandle[c[d]] = b
        }
        function h(a, b) {
            var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
            if (d) return d;
            if (c) for (; c = c.nextSibling;) if (c === b) return - 1;
            return a ? 1 : -1
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function j(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function k(a) {
            return e(function(b) {
                return b = +b,
                e(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function l() {}
        function m(a, b) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = z.preFilter; h;) { (!d || (e = lb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])),
                d = !1,
                (e = mb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(jb, " ")
                }), h = h.slice(d.length));
                for (g in z.filter) ! (e = rb[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return b ? h.length: h ? c.error(a) : S(a, i).slice(0)
        }
        function n(a) {
            for (var b = 0,
            c = a.length,
            d = ""; c > b; b++) d += a[b].value;
            return d
        }
        function o(a, b, c) {
            var d = b.dir,
            e = c && "parentNode" === d,
            f = Q++;
            return b.first ?
            function(b, c, f) {
                for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f)
            }: function(b, c, g) {
                var h, i, j, k = P + " " + f;
                if (g) {
                    for (; b = b[d];) if ((1 === b.nodeType || e) && a(b, c, g)) return ! 0
                } else for (; b = b[d];) if (1 === b.nodeType || e) if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
                    if ((h = i[1]) === !0 || h === y) return h === !0
                } else if (i = j[d] = [k], i[1] = a(b, c, g) || y, i[1] === !0) return ! 0
            }
        }
        function p(a) {
            return a.length > 1 ?
            function(b, c, d) {
                for (var e = a.length; e--;) if (!a[e](b, c, d)) return ! 1;
                return ! 0
            }: a[0]
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function r(a, b, c, d, f, g) {
            return d && !d[N] && (d = r(d)),
            f && !f[N] && (f = r(f, g)),
            e(function(e, g, h, i) {
                var j, k, l, m = [],
                n = [],
                o = g.length,
                p = e || u(b || "*", h.nodeType ? [h] : h, []),
                r = !a || !e && b ? p: q(p, m, a, h, i),
                s = c ? f || (e ? a: o || d) ? [] : g: r;
                if (c && c(r, s, h, i), d) for (j = q(s, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                if (e) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                            f(null, s = [], j, i)
                        }
                        for (k = s.length; k--;)(l = s[k]) && (j = f ? cb.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
                    }
                } else s = q(s === g ? s.splice(o, s.length) : s),
                f ? f(null, g, s, i) : ab.apply(g, s)
            })
        }
        function s(a) {
            for (var b, c, d, e = a.length,
            f = z.relative[a[0].type], g = f || z.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                return a === b
            },
            g, !0), j = o(function(a) {
                return cb.call(b, a) > -1
            },
            g, !0), k = [function(a, c, d) {
                return ! f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
            }]; e > h; h++) if (c = z.relative[a[h].type]) k = [o(p(k), c)];
            else {
                if (c = z.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !z.relative[a[d].type]; d++);
                    return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*": ""
                    })).replace(jb, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
                }
                k.push(c)
            }
            return p(k)
        }
        function t(a, b) {
            var d = 0,
            f = b.length > 0,
            g = a.length > 0,
            h = function(e, h, i, j, k) {
                var l, m, n, o = [],
                p = 0,
                r = "0",
                s = e && [],
                t = null != k,
                u = D,
                v = e || g && z.find.TAG("*", k && h.parentNode || h),
                w = P += null == u ? 1 : Math.random() || .1;
                for (t && (D = h !== G && h, y = d); null != (l = v[r]); r++) {
                    if (g && l) {
                        for (m = 0; n = a[m++];) if (n(l, h, i)) {
                            j.push(l);
                            break
                        }
                        t && (P = w, y = ++d)
                    }
                    f && ((l = !n && l) && p--, e && s.push(l))
                }
                if (p += r, f && r !== p) {
                    for (m = 0; n = b[m++];) n(s, o, h, i);
                    if (e) {
                        if (p > 0) for (; r--;) s[r] || o[r] || (o[r] = $.call(j));
                        o = q(o)
                    }
                    ab.apply(j, o),
                    t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j)
                }
                return t && (P = w, D = u),
                s
            };
            return f ? e(h) : h
        }
        function u(a, b, d) {
            for (var e = 0,
            f = b.length; f > e; e++) c(a, b[e], d);
            return d
        }
        function v(a, b, c, d) {
            var e, f, g, h, i, j = m(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && z.relative[f[1].type]) {
                    if (b = (z.find.ID(g.matches[0].replace(xb, yb), b) || [])[0], !b) return c;
                    a = a.slice(f.shift().value.length)
                }
                for (e = rb.needsContext.test(a) ? 0 : f.length; e--&&(g = f[e], !z.relative[h = g.type]);) if ((i = z.find[h]) && (d = i(g.matches[0].replace(xb, yb), nb.test(f[0].type) && b.parentNode || b))) {
                    if (f.splice(e, 1), a = d.length && n(f), !a) return ab.apply(c, d),
                    c;
                    break
                }
            }
            return C(a, j)(d, b, !I, c, nb.test(a)),
            c
        }
        var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
        O = a.document,
        P = 0,
        Q = 0,
        R = d(),
        S = d(),
        T = d(),
        U = !1,
        V = function(a, b) {
            return a === b ? (U = !0, 0) : 0
        },
        W = typeof b,
        X = 1 << 31,
        Y = {}.hasOwnProperty,
        Z = [],
        $ = Z.pop,
        _ = Z.push,
        ab = Z.push,
        bb = Z.slice,
        cb = Z.indexOf ||
        function(a) {
            for (var b = 0,
            c = this.length; c > b; b++) if (this[b] === a) return b;
            return - 1
        },
        db = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        eb = "[\\x20\\t\\r\\n\\f]",
        fb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        gb = fb.replace("w", "w#"),
        hb = "\\[" + eb + "*(" + fb + ")" + eb + "*(?:([*^$|!~]?=)" + eb + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + gb + ")|)|)" + eb + "*\\]",
        ib = ":(" + fb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + hb.replace(3, 8) + ")*)|.*)\\)|)",
        jb = RegExp("^" + eb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + eb + "+$", "g"),
        lb = RegExp("^" + eb + "*," + eb + "*"),
        mb = RegExp("^" + eb + "*([>+~]|" + eb + ")" + eb + "*"),
        nb = RegExp(eb + "*[+~]"),
        ob = RegExp("=" + eb + "*([^\\]'\"]*)" + eb + "*\\]", "g"),
        pb = RegExp(ib),
        qb = RegExp("^" + gb + "$"),
        rb = {
            ID: RegExp("^#(" + fb + ")"),
            CLASS: RegExp("^\\.(" + fb + ")"),
            TAG: RegExp("^(" + fb.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + hb),
            PSEUDO: RegExp("^" + ib),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + eb + "*(even|odd|(([+-]|)(\\d*)n|)" + eb + "*(?:([+-]|)" + eb + "*(\\d+)|))" + eb + "*\\)|)", "i"),
            bool: RegExp("^(?:" + db + ")$", "i"),
            needsContext: RegExp("^" + eb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + eb + "*((?:-\\d)?\\d*)" + eb + "*\\)|)(?=[^-]|$)", "i")
        },
        sb = /^[^{]+\{\s*\[native \w/,
        tb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ub = /^(?:input|select|textarea|button)$/i,
        vb = /^h\d$/i,
        wb = /'|\\/g,
        xb = RegExp("\\\\([\\da-f]{1,6}" + eb + "?|(" + eb + ")|.)", "ig"),
        yb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b: 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(55296 | d >> 10, 56320 | 1023 & d)
        };
        try {
            ab.apply(Z = bb.call(O.childNodes), O.childNodes),
            Z[O.childNodes.length].nodeType
        } catch(zb) {
            ab = {
                apply: Z.length ?
                function(a, b) {
                    _.apply(a, bb.call(b))
                }: function(a, b) {
                    for (var c = a.length,
                    d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        B = c.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName: !1
        },
        x = c.support = {},
        F = c.setDocument = function(a) {
            var c = a ? a.ownerDocument || a: O,
            d = c.defaultView;
            return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, I = !B(c), d && d.attachEvent && d !== d.top && d.attachEvent("onbeforeunload",
            function() {
                F()
            }), x.attributes = f(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }), x.getElementsByTagName = f(function(a) {
                return a.appendChild(c.createComment("")),
                !a.getElementsByTagName("*").length
            }), x.getElementsByClassName = f(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
                a.firstChild.className = "i",
                2 === a.getElementsByClassName("i").length
            }), x.getById = f(function(a) {
                return H.appendChild(a).id = N,
                !c.getElementsByName || !c.getElementsByName(N).length
            }), x.getById ? (z.find.ID = function(a, b) {
                if (typeof b.getElementById !== W && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            },
            z.filter.ID = function(a) {
                var b = a.replace(xb, yb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete z.find.ID, z.filter.ID = function(a) {
                var b = a.replace(xb, yb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== W && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), z.find.TAG = x.getElementsByTagName ?
            function(a, c) {
                return typeof c.getElementsByTagName !== W ? c.getElementsByTagName(a) : b
            }: function(a, b) {
                var c, d = [],
                e = 0,
                f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            },
            z.find.CLASS = x.getElementsByClassName &&
            function(a, c) {
                return typeof c.getElementsByClassName !== W && I ? c.getElementsByClassName(a) : b
            },
            K = [], J = [], (x.qsa = sb.test(c.querySelectorAll)) && (f(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>",
                a.querySelectorAll("[selected]").length || J.push("\\[" + eb + "*(?:value|" + db + ")"),
                a.querySelectorAll(":checked").length || J.push(":checked")
            }), f(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("t", ""),
                a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + eb + "*(?:''|\"\")"),
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                J.push(",.*:")
            })), (x.matchesSelector = sb.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && f(function(a) {
                x.disconnectedMatch = L.call(a, "div"),
                L.call(a, "[s!='']:x"),
                K.push("!=", ib)
            }), J = J.length && RegExp(J.join("|")), K = K.length && RegExp(K.join("|")), M = sb.test(H.contains) || H.compareDocumentPosition ?
            function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement: a,
                d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }: function(a, b) {
                if (b) for (; b = b.parentNode;) if (b === a) return ! 0;
                return ! 1
            },
            V = H.compareDocumentPosition ?
            function(a, b) {
                if (a === b) return U = !0,
                0;
                var d = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                return d ? 1 & d || !x.sortDetached && b.compareDocumentPosition(a) === d ? a === c || M(O, a) ? -1 : b === c || M(O, b) ? 1 : E ? cb.call(E, a) - cb.call(E, b) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            }: function(a, b) {
                var d, e = 0,
                f = a.parentNode,
                g = b.parentNode,
                i = [a],
                j = [b];
                if (a === b) return U = !0,
                0;
                if (!f || !g) return a === c ? -1 : b === c ? 1 : f ? -1 : g ? 1 : E ? cb.call(E, a) - cb.call(E, b) : 0;
                if (f === g) return h(a, b);
                for (d = a; d = d.parentNode;) i.unshift(d);
                for (d = b; d = d.parentNode;) j.unshift(d);
                for (; i[e] === j[e];) e++;
                return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            },
            c) : G
        },
        c.matches = function(a, b) {
            return c(a, null, null, b)
        },
        c.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== G && F(a), b = b.replace(ob, "='$1']"), !(!x.matchesSelector || !I || K && K.test(b) || J && J.test(b))) try {
                var d = L.call(a, b);
                if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch(e) {}
            return c(b, G, null, [a]).length > 0
        },
        c.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a),
            M(a, b)
        },
        c.attr = function(a, c) { (a.ownerDocument || a) !== G && F(a);
            var d = z.attrHandle[c.toLowerCase()],
            e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
            return e === b ? x.attributes || !I ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value: null: e
        },
        c.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a)
        },
        c.uniqueSort = function(a) {
            var b, c = [],
            d = 0,
            e = 0;
            if (U = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), U) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return a
        },
        A = c.getText = function(a) {
            var b, c = "",
            d = 0,
            e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += A(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else for (; b = a[d]; d++) c += A(b);
            return c
        },
        z = c.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: rb,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(xb, yb),
                    a[3] = (a[4] || a[5] || "").replace(xb, yb),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var c, d = !a[5] && a[2];
                    return rb.CHILD.test(a[0]) ? null: (a[3] && a[4] !== b ? a[2] = a[4] : d && pb.test(d) && (c = m(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(xb, yb).toLowerCase();
                    return "*" === a ?
                    function() {
                        return ! 0
                    }: function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = RegExp("(^|" + eb + ")" + a + "(" + eb + "|$)")) && R(a,
                    function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, d) {
                    return function(e) {
                        var f = c.attr(e, a);
                        return null == f ? "!=" === b: b ? (f += "", "=" === b ? f === d: "!=" === b ? f !== d: "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice( - d.length) === d: "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-": !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                    g = "last" !== a.slice( - 4),
                    h = "of-type" === b;
                    return 1 === d && 0 === e ?
                    function(a) {
                        return !! a.parentNode
                    }: function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling": "previousSibling",
                        q = b.parentNode,
                        r = h && b.nodeName.toLowerCase(),
                        s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];) if (h ? l.nodeName.toLowerCase() === r: 1 === l.nodeType) return ! 1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return ! 0
                            }
                            if (o = [g ? q.firstChild: q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [P, n, m];
                                    break
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r: 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e,
                            m === d || 0 === m % d && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var d, f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return f[N] ? f(b) : f.length > 1 ? (d = [a, a, "", b], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
                        for (var d, e = f(a, b), g = e.length; g--;) d = cb.call(a, e[g]),
                        a[d] = !(c[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, d)
                    }) : f
                }
            },
            pseudos: {
                not: e(function(a) {
                    var b = [],
                    c = [],
                    d = C(a.replace(jb, "$1"));
                    return d[N] ? e(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        !c.pop()
                    }
                }),
                has: e(function(a) {
                    return function(b) {
                        return c(a, b).length > 0
                    }
                }),
                contains: e(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || A(b)).indexOf(a) > -1
                    }
                }),
                lang: e(function(a) {
                    return qb.test(a || "") || c.error("unsupported lang: " + a),
                    a = a.replace(xb, yb).toLowerCase(),
                    function(b) {
                        var c;
                        do
                        if (c = I ? b.lang: b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(),
                        c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return ! 1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return ! 1;
                    return ! 0
                },
                parent: function(a) {
                    return ! z.pseudos.empty(a)
                },
                header: function(a) {
                    return vb.test(a.nodeName)
                },
                input: function(a) {
                    return ub.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                },
                first: k(function() {
                    return [0]
                }),
                last: k(function(a, b) {
                    return [b - 1]
                }),
                eq: k(function(a, b, c) {
                    return [0 > c ? c + b: c]
                }),
                even: k(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: k(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: k(function(a, b, c) {
                    for (var d = 0 > c ? c + b: c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: k(function(a, b, c) {
                    for (var d = 0 > c ? c + b: c; b > ++d;) a.push(d);
                    return a
                })
            }
        },
        z.pseudos.nth = z.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) z.pseudos[w] = i(w);
        for (w in {
            submit: !0,
            reset: !0
        }) z.pseudos[w] = j(w);
        l.prototype = z.filters = z.pseudos,
        z.setFilters = new l,
        C = c.compile = function(a, b) {
            var c, d = [],
            e = [],
            f = T[a + " "];
            if (!f) {
                for (b || (b = m(a)), c = b.length; c--;) f = s(b[c]),
                f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d))
            }
            return f
        },
        x.sortStable = N.split("").sort(V).join("") === N,
        x.detectDuplicates = U,
        F(),
        x.sortDetached = f(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }),
        f(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || g("type|href|height|width",
        function(a, c, d) {
            return d ? b: a.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
        }),
        x.attributes && f(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || g("value",
        function(a, c, d) {
            return d || "input" !== a.nodeName.toLowerCase() ? b: a.defaultValue
        }),
        f(function(a) {
            return null == a.getAttribute("disabled")
        }) || g(db,
        function(a, c, d) {
            var e;
            return d ? b: (e = a.getAttributeNode(c)) && e.specified ? e.value: a[c] === !0 ? c.toLowerCase() : null
        }),
        kb.find = c,
        kb.expr = c.selectors,
        kb.expr[":"] = kb.expr.pseudos,
        kb.unique = c.uniqueSort,
        kb.text = c.getText,
        kb.isXMLDoc = c.isXML,
        kb.contains = c.contains
    } (a);
    var zb = {};
    kb.Callbacks = function(a) {
        a = "string" == typeof a ? zb[a] || d(a) : kb.extend({},
        a);
        var c, e, f, g, h, i, j = [],
        k = !a.once && [],
        l = function(b) {
            for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && g > h; h++) if (j[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                e = !1;
                break
            }
            c = !1,
            j && (k ? k.length && l(k.shift()) : e ? j = [] : m.disable())
        },
        m = {
            add: function() {
                if (j) {
                    var b = j.length; !
                    function d(b) {
                        kb.each(b,
                        function(b, c) {
                            var e = kb.type(c);
                            "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                        })
                    } (arguments),
                    c ? g = j.length: e && (i = b, l(e))
                }
                return this
            },
            remove: function() {
                return j && kb.each(arguments,
                function(a, b) {
                    for (var d; (d = kb.inArray(b, j, d)) > -1;) j.splice(d, 1),
                    c && (g >= d && g--, h >= d && h--)
                }),
                this
            },
            has: function(a) {
                return a ? kb.inArray(a, j) > -1 : !(!j || !j.length)
            },
            empty: function() {
                return j = [],
                g = 0,
                this
            },
            disable: function() {
                return j = k = e = b,
                this
            },
            disabled: function() {
                return ! j
            },
            lock: function() {
                return k = b,
                e || m.disable(),
                this
            },
            locked: function() {
                return ! k
            },
            fireWith: function(a, b) {
                return ! j || f && !k || (b = b || [], b = [a, b.slice ? b.slice() : b], c ? k.push(b) : l(b)),
                this
            },
            fire: function() {
                return m.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! f
            }
        };
        return m
    },
    kb.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", kb.Callbacks("once memory"), "resolved"], ["reject", "fail", kb.Callbacks("once memory"), "rejected"], ["notify", "progress", kb.Callbacks("memory")]],
            c = "pending",
            d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return kb.Deferred(function(c) {
                        kb.each(b,
                        function(b, f) {
                            var g = f[0],
                            h = kb.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = h && h.apply(this, arguments);
                                a && kb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? kb.extend(a, d) : d
                }
            },
            e = {};
            return d.pipe = d.then,
            kb.each(b,
            function(a, f) {
                var g = f[2],
                h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                },
                b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d: this, arguments),
                    this
                },
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b, c, d, e = 0,
            f = fb.call(arguments),
            g = f.length,
            h = 1 !== g || a && kb.isFunction(a.promise) ? g: 0,
            i = 1 === h ? a: kb.Deferred(),
            j = function(a, c, d) {
                return function(e) {
                    c[a] = this,
                    d[a] = arguments.length > 1 ? fb.call(arguments) : e,
                    d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1) for (b = Array(g), c = Array(g), d = Array(g); g > e; e++) f[e] && kb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f),
            i.promise()
        }
    }),
    kb.support = function(b) {
        var c, d, e, f, g, h, i, j, k, l = Y.createElement("div");
        if (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = l.getElementsByTagName("*") || [], d = l.getElementsByTagName("a")[0], !d || !d.style || !c.length) return b;
        f = Y.createElement("select"),
        h = f.appendChild(Y.createElement("option")),
        e = l.getElementsByTagName("input")[0],
        d.style.cssText = "top:1px;float:left;opacity:.5",
        b.getSetAttribute = "t" !== l.className,
        b.leadingWhitespace = 3 === l.firstChild.nodeType,
        b.tbody = !l.getElementsByTagName("tbody").length,
        b.htmlSerialize = !!l.getElementsByTagName("link").length,
        b.style = /top/.test(d.getAttribute("style")),
        b.hrefNormalized = "/a" === d.getAttribute("href"),
        b.opacity = /^0.5/.test(d.style.opacity),
        b.cssFloat = !!d.style.cssFloat,
        b.checkOn = !!e.value,
        b.optSelected = h.selected,
        b.enctype = !!Y.createElement("form").enctype,
        b.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML,
        b.inlineBlockNeedsLayout = !1,
        b.shrinkWrapBlocks = !1,
        b.pixelPosition = !1,
        b.deleteExpando = !0,
        b.noCloneEvent = !0,
        b.reliableMarginRight = !0,
        b.boxSizingReliable = !0,
        e.checked = !0,
        b.noCloneChecked = e.cloneNode(!0).checked,
        f.disabled = !0,
        b.optDisabled = !h.disabled;
        try {
            delete l.test
        } catch(m) {
            b.deleteExpando = !1
        }
        e = Y.createElement("input"),
        e.setAttribute("value", ""),
        b.input = "" === e.getAttribute("value"),
        e.value = "t",
        e.setAttribute("type", "radio"),
        b.radioValue = "t" === e.value,
        e.setAttribute("checked", "t"),
        e.setAttribute("name", "t"),
        g = Y.createDocumentFragment(),
        g.appendChild(e),
        b.appendChecked = e.checked,
        b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked,
        l.attachEvent && (l.attachEvent("onclick",
        function() {
            b.noCloneEvent = !1
        }), l.cloneNode(!0).click());
        for (k in {
            submit: !0,
            change: !0,
            focusin: !0
        }) l.setAttribute(i = "on" + k, "t"),
        b[k + "Bubbles"] = i in a || l.attributes[i].expando === !1;
        l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        b.clearCloneStyle = "content-box" === l.style.backgroundClip;
        for (k in kb(b)) break;
        return b.ownLast = "0" !== k,
        kb(function() {
            var c, d, e, f = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            g = Y.getElementsByTagName("body")[0];
            g && (c = Y.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = l.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", j = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", kb.swap(g, null != g.style.zoom ? {
                zoom: 1
            }: {},
            function() {
                b.boxSizing = 4 === l.offsetWidth
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(l, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(l, null) || {
                width: "4px"
            }).width, d = l.appendChild(Y.createElement("div")), d.style.cssText = l.style.cssText = f, d.style.marginRight = d.style.width = "0", l.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), typeof l.style.zoom !== W && (l.innerHTML = "", l.style.cssText = f + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.innerHTML = "<div></div>", l.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== l.offsetWidth, b.inlineBlockNeedsLayout && (g.style.zoom = 1)), g.removeChild(c), c = l = e = d = null)
        }),
        c = f = g = h = d = e = null,
        b
    } ({});
    var Ab = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    Bb = /([A-Z])/g;
    kb.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? kb.cache[a[kb.expando]] : a[kb.expando],
            !!a && !h(a)
        },
        data: function(a, b, c) {
            return e(a, b, c)
        },
        removeData: function(a, b) {
            return f(a, b)
        },
        _data: function(a, b, c) {
            return e(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return f(a, b, !0)
        },
        acceptData: function(a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return ! 1;
            var b = a.nodeName && kb.noData[a.nodeName.toLowerCase()];
            return ! b || b !== !0 && a.getAttribute("classid") === b
        }
    }),
    kb.fn.extend({
        data: function(a, c) {
            var d, e, f = null,
            h = 0,
            i = this[0];
            if (a === b) {
                if (this.length && (f = kb.data(i), 1 === i.nodeType && !kb._data(i, "parsedAttrs"))) {
                    for (d = i.attributes; d.length > h; h++) e = d[h].name,
                    0 === e.indexOf("data-") && (e = kb.camelCase(e.slice(5)), g(i, e, f[e]));
                    kb._data(i, "parsedAttrs", !0)
                }
                return f
            }
            return "object" == typeof a ? this.each(function() {
                kb.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                kb.data(this, a, c)
            }) : i ? g(i, a, kb.data(i, a)) : null
        },
        removeData: function(a) {
            return this.each(function() {
                kb.removeData(this, a)
            })
        }
    }),
    kb.extend({
        queue: function(a, c, d) {
            var e;
            return a ? (c = (c || "fx") + "queue", e = kb._data(a, c), d && (!e || kb.isArray(d) ? e = kb._data(a, c, kb.makeArray(d)) : e.push(d)), e || []) : b
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = kb.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = kb._queueHooks(a, b),
            g = function() {
                kb.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--),
            e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return kb._data(a, c) || kb._data(a, c, {
                empty: kb.Callbacks("once memory").add(function() {
                    kb._removeData(a, b + "queue"),
                    kb._removeData(a, c)
                })
            })
        }
    }),
    kb.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--),
            d > arguments.length ? kb.queue(this[0], a) : c === b ? this: this.each(function() {
                var b = kb.queue(this, a, c);
                kb._queueHooks(this, a),
                "fx" === a && "inprogress" !== b[0] && kb.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                kb.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = kb.fx ? kb.fx.speeds[a] || a: a,
            b = b || "fx",
            this.queue(b,
            function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1,
            f = kb.Deferred(),
            g = this,
            h = this.length,
            i = function() {--e || f.resolveWith(g, [g])
            };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = kb._data(g[h], a + "queueHooks"),
            d && d.empty && (e++, d.empty.add(i));
            return i(),
            f.promise(c)
        }
    });
    var Cb, Db, Eb = /[\t\r\n\f]/g,
    Fb = /\r/g,
    Gb = /^(?:input|select|textarea|button|object)$/i,
    Hb = /^(?:a|area)$/i,
    Ib = /^(?:checked|selected)$/i,
    Jb = kb.support.getSetAttribute,
    Kb = kb.support.input;
    kb.fn.extend({
        attr: function(a, b) {
            return kb.access(this, kb.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                kb.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return kb.access(this, kb.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = kb.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = b,
                    delete this[a]
                } catch(c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0,
            h = this.length,
            i = "string" == typeof a && a;
            if (kb.isFunction(a)) return this.each(function(b) {
                kb(this).addClass(a.call(this, b, this.className))
            });
            if (i) for (b = (a || "").match(mb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : " ")) {
                for (f = 0; e = b[f++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                c.className = kb.trim(d)
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0,
            h = this.length,
            i = 0 === arguments.length || "string" == typeof a && a;
            if (kb.isFunction(a)) return this.each(function(b) {
                kb(this).removeClass(a.call(this, b, this.className))
            });
            if (i) for (b = (a || "").match(mb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : "")) {
                for (f = 0; e = b[f++];) for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                c.className = a ? kb.trim(d) : ""
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(kb.isFunction(a) ?
            function(c) {
                kb(this).toggleClass(a.call(this, c, this.className, b), b)
            }: function() {
                if ("string" === c) for (var b, d = 0,
                e = kb(this), f = a.match(mb) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === W || "boolean" === c) && (this.className && kb._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "": kb._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ",
            c = 0,
            d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Eb, " ").indexOf(b) >= 0) return ! 0;
            return ! 1
        },
        val: function(a) {
            var c, d, e, f = this[0];
            return arguments.length ? (e = kb.isFunction(a), this.each(function(c) {
                var f;
                1 === this.nodeType && (f = e ? a.call(this, c, kb(this).val()) : a, null == f ? f = "": "number" == typeof f ? f += "": kb.isArray(f) && (f = kb.map(f,
                function(a) {
                    return null == a ? "": a + ""
                })), d = kb.valHooks[this.type] || kb.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f))
            })) : f ? (d = kb.valHooks[f.type] || kb.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c: (c = f.value, "string" == typeof c ? c.replace(Fb, "") : null == c ? "": c)) : void 0
        }
    }),
    kb.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = kb.find.attr(a, "value");
                    return null != b ? b: a.text
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options,
                    e = a.selectedIndex,
                    f = "select-one" === a.type || 0 > e,
                    g = f ? null: [], h = f ? e + 1 : d.length, i = 0 > e ? h: f ? e: 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (kb.support.optDisabled ? c.disabled: null !== c.getAttribute("disabled")) || c.parentNode.disabled && kb.nodeName(c.parentNode, "optgroup"))) {
                        if (b = kb(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options,
                    f = kb.makeArray(b), g = e.length; g--;) d = e[g],
                    (d.selected = kb.inArray(kb(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        },
        attr: function(a, c, d) {
            var e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? typeof a.getAttribute === W ? kb.prop(a, c, d) : (1 === g && kb.isXMLDoc(a) || (c = c.toLowerCase(), e = kb.attrHooks[c] || (kb.expr.match.bool.test(c) ? Db: Cb)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f: (f = kb.find.attr(a, c), null == f ? b: f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f: (a.setAttribute(c, d + ""), d) : (kb.removeAttr(a, c), b)) : void 0
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
            f = b && b.match(mb);
            if (f && 1 === a.nodeType) for (; c = f[e++];) d = kb.propFix[c] || c,
            kb.expr.match.bool.test(c) ? Kb && Jb || !Ib.test(c) ? a[d] = !1 : a[kb.camelCase("default-" + c)] = a[d] = !1 : kb.attr(a, c, ""),
            a.removeAttribute(Jb ? c: d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!kb.support.radioValue && "radio" === b && kb.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !kb.isXMLDoc(a), g && (c = kb.propFix[c] || c, f = kb.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e: a[c] = d: f && "get" in f && null !== (e = f.get(a, c)) ? e: a[c]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = kb.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Gb.test(a.nodeName) || Hb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }),
    Db = {
        set: function(a, b, c) {
            return b === !1 ? kb.removeAttr(a, c) : Kb && Jb || !Ib.test(c) ? a.setAttribute(!Jb && kb.propFix[c] || c, c) : a[kb.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    kb.each(kb.expr.match.bool.source.match(/\w+/g),
    function(a, c) {
        var d = kb.expr.attrHandle[c] || kb.find.attr;
        kb.expr.attrHandle[c] = Kb && Jb || !Ib.test(c) ?
        function(a, c, e) {
            var f = kb.expr.attrHandle[c],
            g = e ? b: (kb.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return kb.expr.attrHandle[c] = f,
            g
        }: function(a, c, d) {
            return d ? b: a[kb.camelCase("default-" + c)] ? c.toLowerCase() : null
        }
    }),
    Kb && Jb || (kb.attrHooks.value = {
        set: function(a, c, d) {
            return kb.nodeName(a, "input") ? (a.defaultValue = c, b) : Cb && Cb.set(a, c, d)
        }
    }),
    Jb || (Cb = {
        set: function(a, c, d) {
            var e = a.getAttributeNode(d);
            return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)),
            e.value = c += "",
            "value" === d || c === a.getAttribute(d) ? c: b
        }
    },
    kb.expr.attrHandle.id = kb.expr.attrHandle.name = kb.expr.attrHandle.coords = function(a, c, d) {
        var e;
        return d ? b: (e = a.getAttributeNode(c)) && "" !== e.value ? e.value: null
    },
    kb.valHooks.button = {
        get: function(a, c) {
            var d = a.getAttributeNode(c);
            return d && d.specified ? d.value: b
        },
        set: Cb.set
    },
    kb.attrHooks.contenteditable = {
        set: function(a, b, c) {
            Cb.set(a, "" === b ? !1 : b, c)
        }
    },
    kb.each(["width", "height"],
    function(a, c) {
        kb.attrHooks[c] = {
            set: function(a, d) {
                return "" === d ? (a.setAttribute(c, "auto"), d) : b
            }
        }
    })),
    kb.support.hrefNormalized || kb.each(["href", "src"],
    function(a, b) {
        kb.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    kb.support.style || (kb.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || b
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    }),
    kb.support.optSelected || (kb.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
        }
    }),
    kb.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        kb.propFix[this.toLowerCase()] = this
    }),
    kb.support.enctype || (kb.propFix.enctype = "encoding"),
    kb.each(["radio", "checkbox"],
    function() {
        kb.valHooks[this] = {
            set: function(a, c) {
                return kb.isArray(c) ? a.checked = kb.inArray(kb(a).val(), c) >= 0 : b
            }
        },
        kb.support.checkOn || (kb.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on": a.value
        })
    });
    var Lb = /^(?:input|select|textarea)$/i,
    Mb = /^key/,
    Nb = /^(?:mouse|contextmenu)|click/,
    Ob = /^(?:focusinfocus|focusoutblur)$/,
    Pb = /^([^.]*)(?:\.(.+)|)$/;
    kb.event = {
        global: {},
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = kb._data(a);
            if (r) {
                for (d.handler && (j = d, d = j.handler, f = j.selector), d.guid || (d.guid = kb.guid++), (h = r.events) || (h = r.events = {}), (l = r.handle) || (l = r.handle = function(a) {
                    return typeof kb === W || a && kb.event.triggered === a.type ? b: kb.event.dispatch.apply(l.elem, arguments)
                },
                l.elem = a), c = (c || "").match(mb) || [""], i = c.length; i--;) g = Pb.exec(c[i]) || [],
                o = q = g[1],
                p = (g[2] || "").split(".").sort(),
                o && (k = kb.event.special[o] || {},
                o = (f ? k.delegateType: k.bindType) || o, k = kb.event.special[o] || {},
                m = kb.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && kb.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                },
                j), (n = h[o]) || (n = h[o] = [], n.delegateCount = 0, k.setup && k.setup.call(a, e, p, l) !== !1 || (a.addEventListener ? a.addEventListener(o, l, !1) : a.attachEvent && a.attachEvent("on" + o, l))), k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, m) : n.push(m), kb.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = kb.hasData(a) && kb._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(mb) || [""], j = b.length; j--;) if (h = Pb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = kb.event.special[n] || {},
                    n = (d ? l.delegateType: l.bindType) || n, m = k[n] || [], h = h[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f],
                    !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || kb.removeEvent(a, n, q.handle), delete k[n])
                } else for (n in k) kb.event.remove(a, n + b[j], c, d, !0);
                kb.isEmptyObject(k) && (delete q.handle, kb._removeData(a, "events"))
            }
        },
        trigger: function(c, d, e, f) {
            var g, h, i, j, k, l, m, n = [e || Y],
            o = ib.call(c, "type") ? c.type: c,
            p = ib.call(c, "namespace") ? c.namespace.split(".") : [];
            if (i = l = e = e || Y, 3 !== e.nodeType && 8 !== e.nodeType && !Ob.test(o + kb.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), h = 0 > o.indexOf(":") && "on" + o, c = c[kb.expando] ? c: new kb.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : kb.makeArray(d, [c]), k = kb.event.special[o] || {},
            f || !k.trigger || k.trigger.apply(e, d) !== !1)) {
                if (!f && !k.noBubble && !kb.isWindow(e)) {
                    for (j = k.delegateType || o, Ob.test(j + o) || (i = i.parentNode); i; i = i.parentNode) n.push(i),
                    l = i;
                    l === (e.ownerDocument || Y) && n.push(l.defaultView || l.parentWindow || a)
                }
                for (m = 0; (i = n[m++]) && !c.isPropagationStopped();) c.type = m > 1 ? j: k.bindType || o,
                g = (kb._data(i, "events") || {})[c.type] && kb._data(i, "handle"),
                g && g.apply(i, d),
                g = h && i[h],
                g && kb.acceptData(i) && g.apply && g.apply(i, d) === !1 && c.preventDefault();
                if (c.type = o, !f && !c.isDefaultPrevented() && (!k._default || k._default.apply(n.pop(), d) === !1) && kb.acceptData(e) && h && e[o] && !kb.isWindow(e)) {
                    l = e[h],
                    l && (e[h] = null),
                    kb.event.triggered = o;
                    try {
                        e[o]()
                    } catch(q) {}
                    kb.event.triggered = b,
                    l && (e[h] = l)
                }
                return c.result
            }
        },
        dispatch: function(a) {
            a = kb.event.fix(a);
            var c, d, e, f, g, h = [],
            i = fb.call(arguments),
            j = (kb._data(this, "events") || {})[a.type] || [],
            k = kb.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = kb.event.handlers.call(this, a, j), c = 0; (f = h[c++]) && !a.isPropagationStopped();) for (a.currentTarget = f.elem, g = 0; (e = f.handlers[g++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, d = ((kb.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, c) {
            var d, e, f, g, h = [],
            i = c.delegateCount,
            j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type)) for (; j != this; j = j.parentNode || this) if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                for (f = [], g = 0; i > g; g++) e = c[g],
                d = e.selector + " ",
                f[d] === b && (f[d] = e.needsContext ? kb(d, this).index(j) >= 0 : kb.find(d, this, null, [j]).length),
                f[d] && f.push(e);
                f.length && h.push({
                    elem: j,
                    handlers: f
                })
            }
            return c.length > i && h.push({
                elem: this,
                handlers: c.slice(i)
            }),
            h
        },
        fix: function(a) {
            if (a[kb.expando]) return a;
            var b, c, d, e = a.type,
            f = a,
            g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Nb.test(e) ? this.mouseHooks: Mb.test(e) ? this.keyHooks: {}), d = g.props ? this.props.concat(g.props) : this.props, a = new kb.Event(f), b = d.length; b--;) c = d[b],
            a[c] = f[c];
            return a.target || (a.target = f.srcElement || Y),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode: b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button,
                h = c.fromElement;
                return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || Y, f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)),
                !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement: h),
                a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== k() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === k() && this.blur ? (this.blur(), !1) : b
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return kb.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : b
                },
                _default: function(a) {
                    return kb.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = kb.extend(new kb.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? kb.event.trigger(e, null, b) : kb.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    kb.removeEvent = Y.removeEventListener ?
    function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }: function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === W && (a[d] = null), a.detachEvent(d, c))
    },
    kb.Event = function(a, c) {
        return this instanceof kb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i: j) : this.type = a, c && kb.extend(this, c), this.timeStamp = a && a.timeStamp || kb.now(), this[kb.expando] = !0, b) : new kb.Event(a, c)
    },
    kb.Event.prototype = {
        isDefaultPrevented: j,
        isPropagationStopped: j,
        isImmediatePropagationStopped: j,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = i,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = i,
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = i,
            this.stopPropagation()
        }
    },
    kb.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(a, b) {
        kb.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                e = a.relatedTarget,
                f = a.handleObj;
                return (!e || e !== d && !kb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
                c
            }
        }
    }),
    kb.support.submitBubbles || (kb.event.special.submit = {
        setup: function() {
            return kb.nodeName(this, "form") ? !1 : (kb.event.add(this, "click._submit keypress._submit",
            function(a) {
                var c = a.target,
                d = kb.nodeName(c, "input") || kb.nodeName(c, "button") ? c.form: b;
                d && !kb._data(d, "submitBubbles") && (kb.event.add(d, "submit._submit",
                function(a) {
                    a._submit_bubble = !0
                }), kb._data(d, "submitBubbles", !0))
            }), b)
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && kb.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return kb.nodeName(this, "form") ? !1 : (kb.event.remove(this, "._submit"), b)
        }
    }),
    kb.support.changeBubbles || (kb.event.special.change = {
        setup: function() {
            return Lb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (kb.event.add(this, "propertychange._change",
            function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), kb.event.add(this, "click._change",
            function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1),
                kb.event.simulate("change", this, a, !0)
            })), !1) : (kb.event.add(this, "beforeactivate._change",
            function(a) {
                var b = a.target;
                Lb.test(b.nodeName) && !kb._data(b, "changeBubbles") && (kb.event.add(b, "change._change",
                function(a) { ! this.parentNode || a.isSimulated || a.isTrigger || kb.event.simulate("change", this.parentNode, a, !0)
                }), kb._data(b, "changeBubbles", !0))
            }), b)
        },
        handle: function(a) {
            var c = a.target;
            return this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type ? a.handleObj.handler.apply(this, arguments) : b
        },
        teardown: function() {
            return kb.event.remove(this, "._change"),
            !Lb.test(this.nodeName)
        }
    }),
    kb.support.focusinBubbles || kb.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        var c = 0,
        d = function(a) {
            kb.event.simulate(b, a.target, kb.event.fix(a), !0)
        };
        kb.event.special[b] = {
            setup: function() {
                0 === c++&&Y.addEventListener(a, d, !0)
            },
            teardown: function() {
                0 === --c && Y.removeEventListener(a, d, !0)
            }
        }
    }),
    kb.fn.extend({
        on: function(a, c, d, e, f) {
            var g, h;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (g in a) this.on(g, c, d, a[g], f);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = j;
            else if (!e) return this;
            return 1 === f && (h = e, e = function(a) {
                return kb().off(a),
                h.apply(this, arguments)
            },
            e.guid = h.guid || (h.guid = kb.guid++)),
            this.each(function() {
                kb.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj,
            kb(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace: e.origType, e.selector, e.handler),
            this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b),
            d === !1 && (d = j),
            this.each(function() {
                kb.event.remove(this, a, d, c)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                kb.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, c) {
            var d = this[0];
            return d ? kb.event.trigger(a, c, d, !0) : b
        }
    });
    var Qb = /^.[^:#\[\.,]*$/,
    Rb = /^(?:parents|prev(?:Until|All))/,
    Sb = kb.expr.match.needsContext,
    Tb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    kb.fn.extend({
        find: function(a) {
            var b, c = [],
            d = this,
            e = d.length;
            if ("string" != typeof a) return this.pushStack(kb(a).filter(function() {
                for (b = 0; e > b; b++) if (kb.contains(d[b], this)) return ! 0
            }));
            for (b = 0; e > b; b++) kb.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? kb.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a: a,
            c
        },
        has: function(a) {
            var b, c = kb(a, this),
            d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) if (kb.contains(this, c[b])) return ! 0
            })
        },
        not: function(a) {
            return this.pushStack(m(this, a || [], !0))
        },
        filter: function(a) {
            return this.pushStack(m(this, a || [], !1))
        },
        is: function(a) {
            return !! m(this, "string" == typeof a && Sb.test(a) ? kb(a) : a || [], !1).length
        },
        closest: function(a, b) {
            for (var c, d = 0,
            e = this.length,
            f = [], g = Sb.test(a) || "string" != typeof a ? kb(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (11 > c.nodeType && (g ? g.index(c) > -1 : 1 === c.nodeType && kb.find.matchesSelector(c, a))) {
                c = f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? kb.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? kb.inArray(this[0], kb(a)) : kb.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? kb(a, b) : kb.makeArray(a && a.nodeType ? [a] : a),
            d = kb.merge(this.get(), c);
            return this.pushStack(kb.unique(d))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject: this.prevObject.filter(a))
        }
    }),
    kb.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b: null
        },
        parents: function(a) {
            return kb.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return kb.dir(a, "parentNode", c)
        },
        next: function(a) {
            return l(a, "nextSibling")
        },
        prev: function(a) {
            return l(a, "previousSibling")
        },
        nextAll: function(a) {
            return kb.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return kb.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return kb.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return kb.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return kb.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return kb.sibling(a.firstChild)
        },
        contents: function(a) {
            return kb.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: kb.merge([], a.childNodes)
        }
    },
    function(a, b) {
        kb.fn[a] = function(c, d) {
            var e = kb.map(this, b, c);
            return "Until" !== a.slice( - 5) && (d = c),
            d && "string" == typeof d && (e = kb.filter(d, e)),
            this.length > 1 && (Tb[a] || (e = kb.unique(e)), Rb.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    }),
    kb.extend({
        filter: function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType ? kb.find.matchesSelector(d, a) ? [d] : [] : kb.find.matches(a, kb.grep(b,
            function(a) {
                return 1 === a.nodeType
            }))
        },
        dir: function(a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !kb(f).is(d));) 1 === f.nodeType && e.push(f),
            f = f[c];
            return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Ub = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Vb = / jQuery\d+="(?:null|\d+)"/g,
    Wb = RegExp("<(?:" + Ub + ")[\\s/>]", "i"),
    Xb = /^\s+/,
    Yb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Zb = /<([\w:]+)/,
    $b = /<tbody/i,
    _b = /<|&#?\w+;/,
    ac = /<(?:script|style|link)/i,
    bc = /^(?:checkbox|radio)$/i,
    cc = /checked\s*(?:[^=]|=\s*.checked.)/i,
    dc = /^$|\/(?:java|ecma)script/i,
    ec = /^true\/(.*)/,
    fc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    gc = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: kb.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    hc = n(Y),
    ic = hc.appendChild(Y.createElement("div"));
    gc.optgroup = gc.option,
    gc.tbody = gc.tfoot = gc.colgroup = gc.caption = gc.thead,
    gc.th = gc.td,
    kb.fn.extend({
        text: function(a) {
            return kb.access(this,
            function(a) {
                return a === b ? kb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(a))
            },
            null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? kb.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || kb.cleanData(u(c)),
            c.parentNode && (b && kb.contains(c.ownerDocument, c) && r(u(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && kb.cleanData(u(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && kb.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a: b,
            this.map(function() {
                return kb.clone(this, a, b)
            })
        },
        html: function(a) {
            return kb.access(this,
            function(a) {
                var c = this[0] || {},
                d = 0,
                e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Vb, "") : b;
                if (! ("string" != typeof a || ac.test(a) || !kb.support.htmlSerialize && Wb.test(a) || !kb.support.leadingWhitespace && Xb.test(a) || gc[(Zb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Yb, "<$1></$2>");
                    try {
                        for (; e > d; d++) c = this[d] || {},
                        1 === c.nodeType && (kb.cleanData(u(c, !1)), c.innerHTML = a);
                        c = 0
                    } catch(f) {}
                }
                c && this.empty().append(a)
            },
            null, a, arguments.length)
        },
        replaceWith: function() {
            var a = kb.map(this,
            function(a) {
                return [a.nextSibling, a.parentNode]
            }),
            b = 0;
            return this.domManip(arguments,
            function(c) {
                var d = a[b++],
                e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), kb(this).remove(), e.insertBefore(c, d))
            },
            !0),
            b ? this: this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b, c) {
            a = db.apply([], a);
            var d, e, f, g, h, i, j = 0,
            k = this.length,
            l = this,
            m = k - 1,
            n = a[0],
            o = kb.isFunction(n);
            if (o || !(1 >= k || "string" != typeof n || kb.support.checkClone) && cc.test(n)) return this.each(function(d) {
                var e = l.eq(d);
                o && (a[0] = n.call(this, d, e.html())),
                e.domManip(a, b, c)
            });
            if (k && (i = kb.buildFragment(a, this[0].ownerDocument, !1, !c && this), d = i.firstChild, 1 === i.childNodes.length && (i = d), d)) {
                for (g = kb.map(u(i, "script"), p), f = g.length; k > j; j++) e = i,
                j !== m && (e = kb.clone(e, !0, !0), f && kb.merge(g, u(e, "script"))),
                b.call(this[j], e, j);
                if (f) for (h = g[g.length - 1].ownerDocument, kb.map(g, q), j = 0; f > j; j++) e = g[j],
                dc.test(e.type || "") && !kb._data(e, "globalEval") && kb.contains(h, e) && (e.src ? kb._evalUrl(e.src) : kb.globalEval((e.text || e.textContent || e.innerHTML || "").replace(fc, "")));
                i = d = null
            }
            return this
        }
    }),
    kb.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        kb.fn[a] = function(a) {
            for (var c, d = 0,
            e = [], f = kb(a), g = f.length - 1; g >= d; d++) c = d === g ? this: this.clone(!0),
            kb(f[d])[b](c),
            eb.apply(e, c.get());
            return this.pushStack(e)
        }
    }),
    kb.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = kb.contains(a.ownerDocument, a);
            if (kb.support.html5Clone || kb.isXMLDoc(a) || !Wb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ic.innerHTML = a.outerHTML, ic.removeChild(f = ic.firstChild)), !(kb.support.noCloneEvent && kb.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || kb.isXMLDoc(a))) for (d = u(f), h = u(a), g = 0; null != (e = h[g]); ++g) d[g] && t(e, d[g]);
            if (b) if (c) for (h = h || u(a), d = d || u(f), g = 0; null != (e = h[g]); g++) s(e, d[g]);
            else s(a, f);
            return d = u(f, "script"),
            d.length > 0 && r(d, !i && u(a, "script")),
            d = h = e = null,
            f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length,
            m = n(b), o = [], p = 0; l > p; p++) if (f = a[p], f || 0 === f) if ("object" === kb.type(f)) kb.merge(o, f.nodeType ? [f] : f);
            else if (_b.test(f)) {
                for (h = h || m.appendChild(b.createElement("div")), i = (Zb.exec(f) || ["", ""])[1].toLowerCase(), k = gc[i] || gc._default, h.innerHTML = k[1] + f.replace(Yb, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                if (!kb.support.leadingWhitespace && Xb.test(f) && o.push(b.createTextNode(Xb.exec(f)[0])), !kb.support.tbody) for (f = "table" !== i || $b.test(f) ? "<table>" !== k[1] || $b.test(f) ? 0 : h: h.firstChild, e = f && f.childNodes.length; e--;) kb.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (kb.merge(o, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = m.lastChild
            } else o.push(b.createTextNode(f));
            for (h && m.removeChild(h), kb.support.appendChecked || kb.grep(u(o, "input"), v), p = 0; f = o[p++];) if ((!d || -1 === kb.inArray(f, d)) && (g = kb.contains(f.ownerDocument, f), h = u(m.appendChild(f), "script"), g && r(h), c)) for (e = 0; f = h[e++];) dc.test(f.type || "") && c.push(f);
            return h = null,
            m
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0,
            h = kb.expando,
            i = kb.cache,
            j = kb.support.deleteExpando,
            k = kb.event.special; null != (c = a[g]); g++) if ((b || kb.acceptData(c)) && (e = c[h], f = e && i[e])) {
                if (f.events) for (d in f.events) k[d] ? kb.event.remove(c, d) : kb.removeEvent(c, d, f.handle);
                i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== W ? c.removeAttribute(h) : c[h] = null, bb.push(e))
            }
        },
        _evalUrl: function(a) {
            return kb.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
    kb.fn.extend({
        wrapAll: function(a) {
            if (kb.isFunction(a)) return this.each(function(b) {
                kb(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = kb(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(kb.isFunction(a) ?
            function(b) {
                kb(this).wrapInner(a.call(this, b))
            }: function() {
                var b = kb(this),
                c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = kb.isFunction(a);
            return this.each(function(c) {
                kb(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                kb.nodeName(this, "body") || kb(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var jc, kc, lc, mc = /alpha\([^)]*\)/i,
    nc = /opacity\s*=\s*([^)]*)/,
    oc = /^(top|right|bottom|left)$/,
    pc = /^(none|table(?!-c[ea]).+)/,
    qc = /^margin/,
    rc = RegExp("^(" + lb + ")(.*)$", "i"),
    sc = RegExp("^(" + lb + ")(?!px)[a-z%]+$", "i"),
    tc = RegExp("^([+-])=(" + lb + ")", "i"),
    uc = {
        BODY: "block"
    },
    vc = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    wc = {
        letterSpacing: 0,
        fontWeight: 400
    },
    xc = ["Top", "Right", "Bottom", "Left"],
    yc = ["Webkit", "O", "Moz", "ms"];
    kb.fn.extend({
        css: function(a, c) {
            return kb.access(this,
            function(a, c, d) {
                var e, f, g = {},
                h = 0;
                if (kb.isArray(c)) {
                    for (f = kc(a), e = c.length; e > h; h++) g[c[h]] = kb.css(a, c[h], !1, f);
                    return g
                }
                return d !== b ? kb.style(a, c, d) : kb.css(a, c)
            },
            a, c, arguments.length > 1)
        },
        show: function() {
            return y(this, !0)
        },
        hide: function() {
            return y(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                x(this) ? kb(this).show() : kb(this).hide()
            })
        }
    }),
    kb.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = lc(a, "opacity");
                        return "" === c ? "1": c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": kb.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = kb.camelCase(c),
                j = a.style;
                if (c = kb.cssProps[i] || (kb.cssProps[i] = w(j, i)), h = kb.cssHooks[c] || kb.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f: j[c];
                if (g = typeof d, "string" === g && (f = tc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(kb.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || kb.cssNumber[i] || (d += "px"), kb.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                    j[c] = d
                } catch(k) {}
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = kb.camelCase(c);
            return c = kb.cssProps[i] || (kb.cssProps[i] = w(a.style, i)),
            h = kb.cssHooks[c] || kb.cssHooks[i],
            h && "get" in h && (g = h.get(a, !0, d)),
            g === b && (g = lc(a, c, e)),
            "normal" === g && c in wc && (g = wc[c]),
            "" === d || d ? (f = parseFloat(g), d === !0 || kb.isNumeric(f) ? f || 0 : g) : g
        }
    }),
    a.getComputedStyle ? (kc = function(b) {
        return a.getComputedStyle(b, null)
    },
    lc = function(a, c, d) {
        var e, f, g, h = d || kc(a),
        i = h ? h.getPropertyValue(c) || h[c] : b,
        j = a.style;
        return h && ("" !== i || kb.contains(a.ownerDocument, a) || (i = kb.style(a, c)), sc.test(i) && qc.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)),
        i
    }) : Y.documentElement.currentStyle && (kc = function(a) {
        return a.currentStyle
    },
    lc = function(a, c, d) {
        var e, f, g, h = d || kc(a),
        i = h ? h[c] : b,
        j = a.style;
        return null == i && j && j[c] && (i = j[c]),
        sc.test(i) && !oc.test(c) && (e = j.left, f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em": i, i = j.pixelLeft + "px", j.left = e, g && (f.left = g)),
        "" === i ? "auto": i
    }),
    kb.each(["height", "width"],
    function(a, c) {
        kb.cssHooks[c] = {
            get: function(a, d, e) {
                return d ? 0 === a.offsetWidth && pc.test(kb.css(a, "display")) ? kb.swap(a, vc,
                function() {
                    return B(a, c, e)
                }) : B(a, c, e) : b
            },
            set: function(a, b, d) {
                var e = d && kc(a);
                return z(a, b, d ? A(a, c, d, kb.support.boxSizing && "border-box" === kb.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    kb.support.opacity || (kb.cssHooks.opacity = {
        get: function(a, b) {
            return nc.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": b ? "1": ""
        },
        set: function(a, b) {
            var c = a.style,
            d = a.currentStyle,
            e = kb.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")": "",
            f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === kb.trim(f.replace(mc, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = mc.test(f) ? f.replace(mc, e) : f + " " + e)
        }
    }),
    kb(function() {
        kb.support.reliableMarginRight || (kb.cssHooks.marginRight = {
            get: function(a, c) {
                return c ? kb.swap(a, {
                    display: "inline-block"
                },
                lc, [a, "marginRight"]) : b
            }
        }),
        !kb.support.pixelPosition && kb.fn.position && kb.each(["top", "left"],
        function(a, c) {
            kb.cssHooks[c] = {
                get: function(a, d) {
                    return d ? (d = lc(a, c), sc.test(d) ? kb(a).position()[c] + "px": d) : b
                }
            }
        })
    }),
    kb.expr && kb.expr.filters && (kb.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !kb.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || kb.css(a, "display"))
    },
    kb.expr.filters.visible = function(a) {
        return ! kb.expr.filters.hidden(a)
    }),
    kb.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(a, b) {
        kb.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0,
                e = {},
                f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + xc[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        qc.test(a) || (kb.cssHooks[a + b].set = z)
    });
    var zc = /%20/g,
    Ac = /\[\]$/,
    Bc = /\r?\n/g,
    Cc = /^(?:submit|button|image|reset|file)$/i,
    Dc = /^(?:input|select|textarea|keygen)/i;
    kb.fn.extend({
        serialize: function() {
            return kb.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = kb.prop(this, "elements");
                return a ? kb.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !kb(this).is(":disabled") && Dc.test(this.nodeName) && !Cc.test(a) && (this.checked || !bc.test(a))
            }).map(function(a, b) {
                var c = kb(this).val();
                return null == c ? null: kb.isArray(c) ? kb.map(c,
                function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Bc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Bc, "\r\n")
                }
            }).get()
        }
    }),
    kb.param = function(a, c) {
        var d, e = [],
        f = function(a, b) {
            b = kb.isFunction(b) ? b() : null == b ? "": b,
            e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (c === b && (c = kb.ajaxSettings && kb.ajaxSettings.traditional), kb.isArray(a) || a.jquery && !kb.isPlainObject(a)) kb.each(a,
        function() {
            f(this.name, this.value)
        });
        else for (d in a) E(d, a[d], c, f);
        return e.join("&").replace(zc, "+")
    },
    kb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(a, b) {
        kb.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    kb.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Ec, Fc, Gc = kb.now(),
    Hc = /\?/,
    Ic = /#.*$/,
    Jc = /([?&])_=[^&]*/,
    Kc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Lc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Mc = /^(?:GET|HEAD)$/,
    Nc = /^\/\//,
    Oc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Pc = kb.fn.load,
    Qc = {},
    Rc = {},
    Sc = "*/".concat("*");
    try {
        Fc = X.href
    } catch(Tc) {
        Fc = Y.createElement("a"),
        Fc.href = "",
        Fc = Fc.href
    }
    Ec = Oc.exec(Fc.toLowerCase()) || [],
    kb.fn.load = function(a, c, d) {
        if ("string" != typeof a && Pc) return Pc.apply(this, arguments);
        var e, f, g, h = this,
        i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)),
        kb.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (g = "POST"),
        h.length > 0 && kb.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: c
        }).done(function(a) {
            f = arguments,
            h.html(e ? kb("<div>").append(kb.parseHTML(a)).find(e) : a)
        }).complete(d &&
        function(a, b) {
            h.each(d, f || [a.responseText, b, a])
        }),
        this
    },
    kb.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(a, b) {
        kb.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    kb.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Fc,
            type: "GET",
            isLocal: Lc.test(Ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": kb.parseJSON,
                "text xml": kb.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? H(H(a, kb.ajaxSettings), b) : H(kb.ajaxSettings, a)
        },
        ajaxPrefilter: F(Qc),
        ajaxTransport: F(Rc),
        ajax: function(a, c) {
            function d(a, c, d, e) {
                var f, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), k = b, h = e || "", w.readyState = a > 0 ? 4 : 0, f = a >= 200 && 300 > a || 304 === a, d && (t = I(m, w, d)), t = J(m, t, w, f), f ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (kb.lastModified[g] = v), v = w.getResponseHeader("etag"), v && (kb.etag[g] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent": 304 === a ? x = "notmodified": (x = t.state, l = t.data, s = t.error, f = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, j && o.trigger(f ? "ajaxSuccess": "ajaxError", [w, m, f ? l: s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --kb.active || kb.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (c = a, a = b),
            c = c || {};
            var e, f, g, h, i, j, k, l, m = kb.ajaxSetup({},
            c),
            n = m.context || m,
            o = m.context && (n.nodeType || n.jquery) ? kb(n) : kb.event,
            p = kb.Deferred(),
            q = kb.Callbacks("once memory"),
            r = m.statusCode || {},
            s = {},
            t = {},
            u = 0,
            v = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!l) for (l = {}; b = Kc.exec(h);) l[b[1].toLowerCase()] = b[2];
                        b = l[a.toLowerCase()]
                    }
                    return null == b ? null: b
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? h: null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a, s[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return u || (m.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > u) for (b in a) r[b] = [r[b], a[b]];
                    else w.always(a[w.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || v;
                    return k && k.abort(b),
                    d(0, b),
                    this
                }
            };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Fc) + "").replace(Ic, "").replace(Nc, Ec[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = kb.trim(m.dataType || "*").toLowerCase().match(mb) || [""], null == m.crossDomain && (e = Oc.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === Ec[1] && e[2] === Ec[2] && (e[3] || ("http:" === e[1] ? "80": "443")) === (Ec[3] || ("http:" === Ec[1] ? "80": "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = kb.param(m.data, m.traditional)), G(Qc, m, c, w), 2 === u) return w;
            j = m.global,
            j && 0 === kb.active++&&kb.event.trigger("ajaxStart"),
            m.type = m.type.toUpperCase(),
            m.hasContent = !Mc.test(m.type),
            g = m.url,
            m.hasContent || (m.data && (g = m.url += (Hc.test(g) ? "&": "?") + m.data, delete m.data), m.cache === !1 && (m.url = Jc.test(g) ? g.replace(Jc, "$1_=" + Gc++) : g + (Hc.test(g) ? "&": "?") + "_=" + Gc++)),
            m.ifModified && (kb.lastModified[g] && w.setRequestHeader("If-Modified-Since", kb.lastModified[g]), kb.etag[g] && w.setRequestHeader("If-None-Match", kb.etag[g])),
            (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType),
            w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Sc + "; q=0.01": "") : m.accepts["*"]);
            for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) w[f](m[f]);
            if (k = G(Rc, m, c, w)) {
                w.readyState = 1,
                j && o.trigger("ajaxSend", [w, m]),
                m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout")
                },
                m.timeout));
                try {
                    u = 1,
                    k.send(s, d)
                } catch(x) {
                    if (! (2 > u)) throw x;
                    d( - 1, x)
                }
            } else d( - 1, "No Transport");
            return w
        },
        getJSON: function(a, b, c) {
            return kb.get(a, b, c, "json")
        },
        getScript: function(a, c) {
            return kb.get(a, b, c, "script")
        }
    }),
    kb.each(["get", "post"],
    function(a, c) {
        kb[c] = function(a, d, e, f) {
            return kb.isFunction(d) && (f = f || e, e = d, d = b),
            kb.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            })
        }
    }),
    kb.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return kb.globalEval(a),
                a
            }
        }
    }),
    kb.ajaxPrefilter("script",
    function(a) {
        a.cache === b && (a.cache = !1),
        a.crossDomain && (a.type = "GET", a.global = !1)
    }),
    kb.ajaxTransport("script",
    function(a) {
        if (a.crossDomain) {
            var c, d = Y.head || kb("head")[0] || Y.documentElement;
            return {
                send: function(b, e) {
                    c = Y.createElement("script"),
                    c.async = !0,
                    a.scriptCharset && (c.charset = a.scriptCharset),
                    c.src = a.url,
                    c.onload = c.onreadystatechange = function(a, b) { (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"))
                    },
                    d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(b, !0)
                }
            }
        }
    });
    var Uc = [],
    Vc = /(=)\?(?=&|$)|\?\?/;
    kb.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Uc.pop() || kb.expando + "_" + Gc++;
            return this[a] = !0,
            a
        }
    }),
    kb.ajaxPrefilter("json jsonp",
    function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (Vc.test(c.url) ? "url": "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Vc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = kb.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(Vc, "$1" + f) : c.jsonp !== !1 && (c.url += (Hc.test(c.url) ? "&": "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
            return h || kb.error(f + " was not called"),
            h[0]
        },
        c.dataTypes[0] = "json", g = a[f], a[f] = function() {
            h = arguments
        },
        e.always(function() {
            a[f] = g,
            c[f] && (c.jsonpCallback = d.jsonpCallback, Uc.push(f)),
            h && kb.isFunction(g) && g(h[0]),
            h = g = b
        }), "script") : b
    });
    var Wc, Xc, Yc = 0,
    Zc = a.ActiveXObject &&
    function() {
        var a;
        for (a in Wc) Wc[a](b, !0)
    };
    kb.ajaxSettings.xhr = a.ActiveXObject ?
    function() {
        return ! this.isLocal && K() || L()
    }: K,
    Xc = kb.ajaxSettings.xhr(),
    kb.support.cors = !!Xc && "withCredentials" in Xc,
    Xc = kb.support.ajax = !!Xc,
    Xc && kb.ajaxTransport(function(c) {
        if (!c.crossDomain || kb.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType),
                    c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h])
                    } catch(j) {}
                    i.send(c.hasContent && c.data || null),
                    d = function(a, e) {
                        var h, j, k, l;
                        try {
                            if (d && (e || 4 === i.readyState)) if (d = b, g && (i.onreadystatechange = kb.noop, Zc && delete Wc[g]), e) 4 !== i.readyState && i.abort();
                            else {
                                l = {},
                                h = i.status,
                                j = i.getAllResponseHeaders(),
                                "string" == typeof i.responseText && (l.text = i.responseText);
                                try {
                                    k = i.statusText
                                } catch(m) {
                                    k = ""
                                }
                                h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                            }
                        } catch(n) {
                            e || f( - 1, n)
                        }
                        l && f(h, k, l, j)
                    },
                    c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Yc, Zc && (Wc || (Wc = {},
                    kb(a).unload(Zc)), Wc[g] = d), i.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(b, !0)
                }
            }
        }
    });
    var $c, _c, ad = /^(?:toggle|show|hide)$/,
    bd = RegExp("^(?:([+-])=|)(" + lb + ")([a-z%]*)$", "i"),
    cd = /queueHooks$/,
    dd = [Q],
    ed = {
        "*": [function(a, b) {
            var c = this.createTween(a, b),
            d = c.cur(),
            e = bd.exec(b),
            f = e && e[3] || (kb.cssNumber[a] ? "": "px"),
            g = (kb.cssNumber[a] || "px" !== f && +d) && bd.exec(kb.css(c.elem, a)),
            h = 1,
            i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do h = h || ".5",
                g /= h,
                kb.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }]
    };
    kb.Animation = kb.extend(O, {
        tweener: function(a, b) {
            kb.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0,
            e = a.length; e > d; d++) c = a[d],
            ed[c] = ed[c] || [],
            ed[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? dd.unshift(a) : dd.push(a)
        }
    }),
    kb.Tween = R,
    R.prototype = {
        constructor: R,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (kb.cssNumber[c] ? "": "px")
        },
        cur: function() {
            var a = R.propHooks[this.prop];
            return a && a.get ? a.get(this) : R.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = R.propHooks[this.prop];
            return this.pos = b = this.options.duration ? kb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : R.propHooks._default.set(this),
            this
        }
    },
    R.prototype.init.prototype = R.prototype,
    R.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = kb.css(a.elem, a.prop, ""), b && "auto" !== b ? b: 0) : a.elem[a.prop]
            },
            set: function(a) {
                kb.fx.step[a.prop] ? kb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[kb.cssProps[a.prop]] || kb.cssHooks[a.prop]) ? kb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    kb.each(["toggle", "show", "hide"],
    function(a, b) {
        var c = kb.fn[b];
        kb.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(S(b, !0), a, d, e)
        }
    }),
    kb.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = kb.isEmptyObject(a),
            f = kb.speed(b, c, d),
            g = function() {
                var b = O(this, kb.extend({},
                a), f); (e || kb._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop,
                b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b),
            c && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0,
                c = null != a && a + "queueHooks",
                f = kb.timers,
                g = kb._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else for (c in g) g[c] && g[c].stop && cd.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1)); (b || !d) && kb.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = kb._data(this),
                d = c[a + "queue"],
                e = c[a + "queueHooks"],
                f = kb.timers,
                g = d ? d.length: 0;
                for (c.finish = !0, kb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    kb.each({
        slideDown: S("show"),
        slideUp: S("hide"),
        slideToggle: S("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(a, b) {
        kb.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    kb.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? kb.extend({},
        a) : {
            complete: c || !c && b || kb.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !kb.isFunction(b) && b
        };
        return d.duration = kb.fx.off ? 0 : "number" == typeof d.duration ? d.duration: d.duration in kb.fx.speeds ? kb.fx.speeds[d.duration] : kb.fx.speeds._default,
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            kb.isFunction(d.old) && d.old.call(this),
            d.queue && kb.dequeue(this, d.queue)
        },
        d
    },
    kb.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return.5 - Math.cos(a * Math.PI) / 2
        }
    },
    kb.timers = [],
    kb.fx = R.prototype.init,
    kb.fx.tick = function() {
        var a, c = kb.timers,
        d = 0;
        for ($c = kb.now(); c.length > d; d++) a = c[d],
        a() || c[d] !== a || c.splice(d--, 1);
        c.length || kb.fx.stop(),
        $c = b
    },
    kb.fx.timer = function(a) {
        a() && kb.timers.push(a) && kb.fx.start()
    },
    kb.fx.interval = 13,
    kb.fx.start = function() {
        _c || (_c = setInterval(kb.fx.tick, kb.fx.interval))
    },
    kb.fx.stop = function() {
        clearInterval(_c),
        _c = null
    },
    kb.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    kb.fx.step = {},
    kb.expr && kb.expr.filters && (kb.expr.filters.animated = function(a) {
        return kb.grep(kb.timers,
        function(b) {
            return a === b.elem
        }).length
    }),
    kb.fn.offset = function(a) {
        if (arguments.length) return a === b ? this: this.each(function(b) {
            kb.offset.setOffset(this, a, b)
        });
        var c, d, e = {
            top: 0,
            left: 0
        },
        f = this[0],
        g = f && f.ownerDocument;
        return g ? (c = g.documentElement, kb.contains(c, f) ? (typeof f.getBoundingClientRect !== W && (e = f.getBoundingClientRect()), d = T(g), {
            top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
            left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
        }) : e) : void 0
    },
    kb.offset = {
        setOffset: function(a, b, c) {
            var d = kb.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = kb(a),
            h = g.offset(),
            i = kb.css(a, "top"),
            j = kb.css(a, "left"),
            k = ("absolute" === d || "fixed" === d) && kb.inArray("auto", [i, j]) > -1,
            l = {},
            m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0),
            kb.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (l.top = b.top - h.top + e),
            null != b.left && (l.left = b.left - h.left + f),
            "using" in b ? b.using.call(a, l) : g.css(l)
        }
    },
    kb.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                },
                d = this[0];
                return "fixed" === kb.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), kb.nodeName(a[0], "html") || (c = a.offset()), c.top += kb.css(a[0], "borderTopWidth", !0), c.left += kb.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - kb.css(d, "marginTop", !0),
                    left: b.left - c.left - kb.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Z; a && !kb.nodeName(a, "html") && "static" === kb.css(a, "position");) a = a.offsetParent;
                return a || Z
            })
        }
    }),
    kb.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(a, c) {
        var d = /Y/.test(c);
        kb.fn[a] = function(e) {
            return kb.access(this,
            function(a, e, f) {
                var g = T(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? kb(g).scrollLeft() : f, d ? f: kb(g).scrollTop()) : a[e] = f, b)
            },
            a, e, arguments.length, null)
        }
    }),
    kb.each({
        Height: "height",
        Width: "width"
    },
    function(a, c) {
        kb.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        },
        function(d, e) {
            kb.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                h = d || (e === !0 || f === !0 ? "margin": "border");
                return kb.access(this,
                function(c, d, e) {
                    var f;
                    return kb.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? kb.css(c, d, h) : kb.style(c, d, e, h)
                },
                c, g ? e: b, g, null)
            }
        })
    }),
    kb.fn.size = function() {
        return this.length
    },
    kb.fn.andSelf = kb.fn.addBack,
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = kb: (a.jQuery = a.$ = kb, "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return kb
    }))
} (window),
function(a, b) {
    function c(b, c) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap=#" + f + "]")[0], !!g && d(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled: "a" === h ? b.href || c: c) && d(b)
    }
    function d(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility")
        }).length
    }
    var e = 0,
    f = /^ui-id-\d+$/;
    a.ui = a.ui || {},
    a.extend(a.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    a.fn.extend({
        focus: function(b) {
            return function(c, d) {
                return "number" == typeof c ? this.each(function() {
                    var b = this;
                    setTimeout(function() {
                        a(b).focus(),
                        d && d.call(b)
                    },
                    c)
                }) : b.apply(this, arguments)
            }
        } (a.fn.focus),
        scrollParent: function() {
            var b;
            return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0),
            /fixed/.test(this.css("position")) || !b.length ? a(document) : b
        },
        zIndex: function(c) {
            if (c !== b) return this.css("zIndex", c);
            if (this.length) for (var d, e, f = a(this[0]); f.length && f[0] !== document;) {
                if (d = f.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (e = parseInt(f.css("zIndex"), 10), !isNaN(e) && 0 !== e)) return e;
                f = f.parent()
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++e)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                f.test(this.id) && a(this).removeAttr("id")
            })
        }
    }),
    a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !! a.data(c, b)
            }
        }) : function(b, c, d) {
            return !! a.data(b, d[3])
        },
        focusable: function(b) {
            return c(b, !isNaN(a.attr(b, "tabindex")))
        },
        tabbable: function(b) {
            var d = a.attr(b, "tabindex"),
            e = isNaN(d);
            return (e || d >= 0) && c(b, !e)
        }
    }),
    a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"],
    function(c, d) {
        function e(b, c, d, e) {
            return a.each(f,
            function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0,
                d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0),
                e && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }),
            c
        }
        var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"],
        g = d.toLowerCase(),
        h = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight
        };
        a.fn["inner" + d] = function(c) {
            return c === b ? h["inner" + d].call(this) : this.each(function() {
                a(this).css(g, e(this, c) + "px")
            })
        },
        a.fn["outer" + d] = function(b, c) {
            return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function() {
                a(this).css(g, e(this, b, !0, c) + "px")
            })
        }
    }),
    a.fn.addBack || (a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject: this.prevObject.filter(a))
    }),
    a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
        return function(c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
        }
    } (a.fn.removeData)),
    a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    a.support.selectstart = "onselectstart" in document.createElement("div"),
    a.fn.extend({
        disableSelection: function() {
            return this.bind((a.support.selectstart ? "selectstart": "mousedown") + ".ui-disableSelection",
            function(a) {
                a.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }),
    a.extend(a.ui, {
        plugin: {
            add: function(b, c, d) {
                var e, f = a.ui[b].prototype;
                for (e in d) f.plugins[e] = f.plugins[e] || [],
                f.plugins[e].push([c, d[e]])
            },
            call: function(a, b, c) {
                var d, e = a.plugins[b];
                if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType) for (d = 0; e.length > d; d++) a.options[e[d][0]] && e[d][1].apply(a.element, c)
            }
        },
        hasScroll: function(b, c) {
            if ("hidden" === a(b).css("overflow")) return ! 1;
            var d = c && "left" === c ? "scrollLeft": "scrollTop",
            e = !1;
            return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
        }
    })
} (jQuery),
function(a, b) {
    var c = 0,
    d = Array.prototype.slice,
    e = a.cleanData;
    a.cleanData = function(b) {
        for (var c, d = 0; null != (c = b[d]); d++) try {
            a(c).triggerHandler("remove")
        } catch(f) {}
        e(b)
    },
    a.widget = function(c, d, e) {
        var f, g, h, i, j = {},
        k = c.split(".")[0];
        c = c.split(".")[1],
        f = k + "-" + c,
        e || (e = d, d = a.Widget),
        a.expr[":"][f.toLowerCase()] = function(b) {
            return !! a.data(b, f)
        },
        a[k] = a[k] || {},
        g = a[k][c],
        h = a[k][c] = function(a, c) {
            return this._createWidget ? (arguments.length && this._createWidget(a, c), b) : new h(a, c)
        },
        a.extend(h, g, {
            version: e.version,
            _proto: a.extend({},
            e),
            _childConstructors: []
        }),
        i = new d,
        i.options = a.widget.extend({},
        i.options),
        a.each(e,
        function(c, e) {
            return a.isFunction(e) ? (j[c] = function() {
                var a = function() {
                    return d.prototype[c].apply(this, arguments)
                },
                b = function(a) {
                    return d.prototype[c].apply(this, a)
                };
                return function() {
                    var c, d = this._super,
                    f = this._superApply;
                    return this._super = a,
                    this._superApply = b,
                    c = e.apply(this, arguments),
                    this._super = d,
                    this._superApply = f,
                    c
                }
            } (), b) : (j[c] = e, b)
        }),
        h.prototype = a.widget.extend(i, {
            widgetEventPrefix: g ? i.widgetEventPrefix: c
        },
        j, {
            constructor: h,
            namespace: k,
            widgetName: c,
            widgetFullName: f
        }),
        g ? (a.each(g._childConstructors,
        function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, h, c._proto)
        }), delete g._childConstructors) : d._childConstructors.push(h),
        a.widget.bridge(c, h)
    },
    a.widget.extend = function(c) {
        for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++) for (e in g[h]) f = g[h][e],
        g[h].hasOwnProperty(e) && f !== b && (c[e] = a.isPlainObject(f) ? a.isPlainObject(c[e]) ? a.widget.extend({},
        c[e], f) : a.widget.extend({},
        f) : f);
        return c
    },
    a.widget.bridge = function(c, e) {
        var f = e.prototype.widgetFullName || c;
        a.fn[c] = function(g) {
            var h = "string" == typeof g,
            i = d.call(arguments, 1),
            j = this;
            return g = !h && i.length ? a.widget.extend.apply(null, [g].concat(i)) : g,
            this.each(h ?
            function() {
                var d, e = a.data(this, f);
                return e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, !1) : b) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + g + "'")
            }: function() {
                var b = a.data(this, f);
                b ? b.option(g || {})._init() : a.data(this, f, new e(g, this))
            }),
            j
        }
    },
    a.Widget = function() {},
    a.Widget._childConstructors = [],
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(b, d) {
            d = a(d || this.defaultElement || this)[0],
            this.element = a(d),
            this.uuid = c++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.options = a.widget.extend({},
            this.options, this._getCreateOptions(), b),
            this.bindings = a(),
            this.hoverable = a(),
            this.focusable = a(),
            d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(a) {
                    a.target === d && this.destroy()
                }
            }), this.document = a(d.style ? d.ownerDocument: d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(c, d) {
            var e, f, g, h = c;
            if (0 === arguments.length) return a.widget.extend({},
            this.options);
            if ("string" == typeof c) if (h = {},
            e = c.split("."), c = e.shift(), e.length) {
                for (f = h[c] = a.widget.extend({},
                this.options[c]), g = 0; e.length - 1 > g; g++) f[e[g]] = f[e[g]] || {},
                f = f[e[g]];
                if (c = e.pop(), d === b) return f[c] === b ? null: f[c];
                f[c] = d
            } else {
                if (d === b) return this.options[c] === b ? null: this.options[c];
                h[c] = d
            }
            return this._setOptions(h),
            this
        },
        _setOptions: function(a) {
            var b;
            for (b in a) this._setOption(b, a[b]);
            return this
        },
        _setOption: function(a, b) {
            return this.options[a] = b,
            "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(c, d, e) {
            var f, g = this;
            "boolean" != typeof c && (e = d, d = c, c = !1),
            e ? (d = f = a(d), this.bindings = this.bindings.add(d)) : (e = d, d = this.element, f = this.widget()),
            a.each(e,
            function(e, h) {
                function i() {
                    return c || g.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof h ? g[h] : h).apply(g, arguments) : b
                }
                "string" != typeof h && (i.guid = h.guid = h.guid || i.guid || a.guid++);
                var j = e.match(/^(\w+)\s*(.*)$/),
                k = j[1] + g.eventNamespace,
                l = j[2];
                l ? f.delegate(l, k, i) : d.bind(k, i)
            })
        },
        _off: function(a, b) {
            b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            a.unbind(b).undelegate(b)
        },
        _delay: function(a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments)
            }
            var d = this;
            return setTimeout(c, b || 0)
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b),
            this._on(b, {
                mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b),
            this._on(b, {
                focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {},
            c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b: this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent) for (e in f) e in c || (c[e] = f[e]);
            return this.element.trigger(c, d),
            !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
        }
    },
    a.each({
        show: "fadeIn",
        hide: "fadeOut"
    },
    function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            "string" == typeof e && (e = {
                effect: e
            });
            var g, h = e ? e === !0 || "number" == typeof e ? c: e.effect || c: b;
            e = e || {},
            "number" == typeof e && (e = {
                duration: e
            }),
            g = !a.isEmptyObject(e),
            e.complete = f,
            e.delay && d.delay(e.delay),
            g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                a(this)[b](),
                f && f.call(d[0]),
                c()
            })
        }
    })
} (jQuery),
function(a) {
    var b = !1;
    a(document).mouseup(function() {
        b = !1
    }),
    a.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var b = this;
            this.element.bind("mousedown." + this.widgetName,
            function(a) {
                return b._mouseDown(a)
            }).bind("click." + this.widgetName,
            function(c) {
                return ! 0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(c) {
            if (!b) {
                this._mouseStarted && this._mouseUp(c),
                this._mouseDownEvent = c;
                var d = this,
                e = 1 === c.which,
                f = "string" == typeof this.options.cancel && c.target.nodeName ? a(c.target).closest(this.options.cancel).length: !1;
                return e && !f && this._mouseCapture(c) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    d.mouseDelayMet = !0
                },
                this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
                    return d._mouseMove(a)
                },
                this._mouseUpDelegate = function(a) {
                    return d._mouseUp(a)
                },
                a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), b = !0, !0)) : !0
            }
        },
        _mouseMove: function(b) {
            return a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button ? this._mouseUp(b) : this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
        },
        _mouseUp: function(b) {
            return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)),
            !1
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return ! 0
        }
    })
} (jQuery),
function(a) {
    a.widget("ui.draggable", a.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled && this.element.addClass("ui-draggable-disabled"),
            this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
            this._mouseDestroy()
        },
        _mouseCapture: function(b) {
            var c = this.options;
            return this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(b), this.handle ? (a(c.iframeFix === !0 ? "iframe": c.iframeFix).each(function() {
                a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(a(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(b) {
            var c = this.options;
            return this.helper = this._createHelper(b),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            a.ui.ddmanager && (a.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(),
            this.offsetParent = this.helper.offsetParent(),
            this.offsetParentCssPosition = this.offsetParent.css("position"),
            this.offset = this.positionAbs = this.element.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            this.offset.scroll = !1,
            a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this.position = this._generatePosition(b),
            this.originalPageX = b.pageX,
            this.originalPageY = b.pageY,
            c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt),
            this._setContainment(),
            this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
        },
        _mouseDrag: function(b, c) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                var d = this._uiHash();
                if (this._trigger("drag", b, d) === !1) return this._mouseUp({}),
                !1;
                this.position = d.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            a.ui.ddmanager && a.ui.ddmanager.drag(this, b),
            !1
        },
        _mouseStop: function(b) {
            var c = this,
            d = !1;
            return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)),
            this.dropped && (d = this.dropped, this.dropped = !1),
            "original" !== this.options.helper || a.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10),
            function() {
                c._trigger("stop", b) !== !1 && c._clear()
            }) : this._trigger("stop", b) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function(b) {
            return a("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }),
            a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b),
            a.ui.mouse.prototype._mouseUp.call(this, b)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(b) {
            return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length: !0
        },
        _createHelper: function(b) {
            var c = this.options,
            d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
            return d.parents("body").length || d.appendTo("parent" === c.appendTo ? this.element[0].parentNode: c.appendTo),
            d[0] === this.element[0] || /(fixed|absolute)/.test(d.css("position")) || d.css("position", "absolute"),
            d
        },
        _adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")),
            a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }),
            "left" in b && (this.offset.click.left = b.left + this.margins.left),
            "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left),
            "top" in b && (this.offset.click.top = b.top + this.margins.top),
            "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var b = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                top: 0,
                left: 0
            }),
            {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var a = this.element.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var b, c, d, e = this.options;
            return e.containment ? "window" === e.containment ? void(this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === e.containment ? void(this.containment = [0, 0, a(document).width() - this.helperProportions.width - this.margins.left, (a(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : e.containment.constructor === Array ? void(this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = a(e.containment), d = c[0], void(d && (b = "hidden" !== c.css("overflow"), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c))) : void(this.containment = null)
        },
        _convertPositionTo: function(b, c) {
            c || (c = this.position);
            var d = "absolute" === b ? 1 : -1,
            e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }),
            {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * d
            }
        },
        _generatePosition: function(b) {
            var c, d, e, f, g = this.options,
            h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            i = b.pageX,
            j = b.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: h.scrollTop(),
                left: h.scrollLeft()
            }),
            this.originalPosition && (this.containment && (this.relative_container ? (d = this.relative_container.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, b.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), b.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), b.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), b.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e: e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f: f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f)),
            {
                top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1
        },
        _trigger: function(b, c, d) {
            return d = d || this._uiHash(),
            a.ui.plugin.call(this, b, [c, d]),
            "drag" === b && (this.positionAbs = this._convertPositionTo("absolute")),
            a.Widget.prototype._trigger.call(this, b, c, d)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(b, c) {
            var d = a(this).data("ui-draggable"),
            e = d.options,
            f = a.extend({},
            c, {
                item: d.element
            });
            d.sortables = [],
            a(e.connectToSortable).each(function() {
                var c = a.data(this, "ui-sortable");
                c && !c.options.disabled && (d.sortables.push({
                    instance: c,
                    shouldRevert: c.options.revert
                }), c.refreshPositions(), c._trigger("activate", b, f))
            })
        },
        stop: function(b, c) {
            var d = a(this).data("ui-draggable"),
            e = a.extend({},
            c, {
                item: d.element
            });
            a.each(d.sortables,
            function() {
                this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, "original" === d.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e))
            })
        },
        drag: function(b, c) {
            var d = a(this).data("ui-draggable"),
            e = this;
            a.each(d.sortables,
            function() {
                var f = !1,
                g = this;
                this.instance.positionAbs = d.positionAbs,
                this.instance.helperProportions = d.helperProportions,
                this.instance.offset.click = d.offset.click,
                this.instance._intersectsWith(this.instance.containerCache) && (f = !0, a.each(d.sortables,
                function() {
                    return this.instance.positionAbs = d.positionAbs,
                    this.instance.helperProportions = d.helperProportions,
                    this.instance.offset.click = d.offset.click,
                    this !== g && this.instance._intersectsWith(this.instance.containerCache) && a.contains(g.instance.element[0], this.instance.element[0]) && (f = !1),
                    f
                })),
                f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return c.helper[0]
                },
                b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", b), d.dropped = !1)
            })
        }
    }),
    a.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var b = a("body"),
            c = a(this).data("ui-draggable").options;
            b.css("cursor") && (c._cursor = b.css("cursor")),
            b.css("cursor", c.cursor)
        },
        stop: function() {
            var b = a(this).data("ui-draggable").options;
            b._cursor && a("body").css("cursor", b._cursor)
        }
    }),
    a.ui.plugin.add("draggable", "opacity", {
        start: function(b, c) {
            var d = a(c.helper),
            e = a(this).data("ui-draggable").options;
            d.css("opacity") && (e._opacity = d.css("opacity")),
            d.css("opacity", e.opacity)
        },
        stop: function(b, c) {
            var d = a(this).data("ui-draggable").options;
            d._opacity && a(c.helper).css("opacity", d._opacity)
        }
    }),
    a.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var b = a(this).data("ui-draggable");
            b.scrollParent[0] !== document && "HTML" !== b.scrollParent[0].tagName && (b.overflowOffset = b.scrollParent.offset())
        },
        drag: function(b) {
            var c = a(this).data("ui-draggable"),
            d = c.options,
            e = !1;
            c.scrollParent[0] !== document && "HTML" !== c.scrollParent[0].tagName ? (d.axis && "x" === d.axis || (c.overflowOffset.top + c.scrollParent[0].offsetHeight - b.pageY < d.scrollSensitivity ? c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop + d.scrollSpeed: b.pageY - c.overflowOffset.top < d.scrollSensitivity && (c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop - d.scrollSpeed)), d.axis && "y" === d.axis || (c.overflowOffset.left + c.scrollParent[0].offsetWidth - b.pageX < d.scrollSensitivity ? c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft + d.scrollSpeed: b.pageX - c.overflowOffset.left < d.scrollSensitivity && (c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft - d.scrollSpeed))) : (d.axis && "x" === d.axis || (b.pageY - a(document).scrollTop() < d.scrollSensitivity ? e = a(document).scrollTop(a(document).scrollTop() - d.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < d.scrollSensitivity && (e = a(document).scrollTop(a(document).scrollTop() + d.scrollSpeed))), d.axis && "y" === d.axis || (b.pageX - a(document).scrollLeft() < d.scrollSensitivity ? e = a(document).scrollLeft(a(document).scrollLeft() - d.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < d.scrollSensitivity && (e = a(document).scrollLeft(a(document).scrollLeft() + d.scrollSpeed)))),
            e !== !1 && a.ui.ddmanager && !d.dropBehaviour && a.ui.ddmanager.prepareOffsets(c, b)
        }
    }),
    a.ui.plugin.add("draggable", "snap", {
        start: function() {
            var b = a(this).data("ui-draggable"),
            c = b.options;
            b.snapElements = [],
            a(c.snap.constructor !== String ? c.snap.items || ":data(ui-draggable)": c.snap).each(function() {
                var c = a(this),
                d = c.offset();
                this !== b.element[0] && b.snapElements.push({
                    item: this,
                    width: c.outerWidth(),
                    height: c.outerHeight(),
                    top: d.top,
                    left: d.left
                })
            })
        },
        drag: function(b, c) {
            var d, e, f, g, h, i, j, k, l, m, n = a(this).data("ui-draggable"),
            o = n.options,
            p = o.snapTolerance,
            q = c.offset.left,
            r = q + n.helperProportions.width,
            s = c.offset.top,
            t = s + n.helperProportions.height;
            for (l = n.snapElements.length - 1; l >= 0; l--) h = n.snapElements[l].left,
            i = h + n.snapElements[l].width,
            j = n.snapElements[l].top,
            k = j + n.snapElements[l].height,
            h - p > r || q > i + p || j - p > t || s > k + p || !a.contains(n.snapElements[l].item.ownerDocument, n.snapElements[l].item) ? (n.snapElements[l].snapping && n.options.snap.release && n.options.snap.release.call(n.element, b, a.extend(n._uiHash(), {
                snapItem: n.snapElements[l].item
            })), n.snapElements[l].snapping = !1) : ("inner" !== o.snapMode && (d = p >= Math.abs(j - t), e = p >= Math.abs(k - s), f = p >= Math.abs(h - r), g = p >= Math.abs(i - q), d && (c.position.top = n._convertPositionTo("relative", {
                top: j - n.helperProportions.height,
                left: 0
            }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                top: k,
                left: 0
            }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: h - n.helperProportions.width
            }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: i
            }).left - n.margins.left)), m = d || e || f || g, "outer" !== o.snapMode && (d = p >= Math.abs(j - s), e = p >= Math.abs(k - t), f = p >= Math.abs(h - q), g = p >= Math.abs(i - r), d && (c.position.top = n._convertPositionTo("relative", {
                top: j,
                left: 0
            }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                top: k - n.helperProportions.height,
                left: 0
            }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: i - n.helperProportions.width
            }).left - n.margins.left)), !n.snapElements[l].snapping && (d || e || f || g || m) && n.options.snap.snap && n.options.snap.snap.call(n.element, b, a.extend(n._uiHash(), {
                snapItem: n.snapElements[l].item
            })), n.snapElements[l].snapping = d || e || f || g || m)
        }
    }),
    a.ui.plugin.add("draggable", "stack", {
        start: function() {
            var b, c = this.data("ui-draggable").options,
            d = a.makeArray(a(c.stack)).sort(function(b, c) {
                return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
            });
            d.length && (b = parseInt(a(d[0]).css("zIndex"), 10) || 0, a(d).each(function(c) {
                a(this).css("zIndex", b + c)
            }), this.css("zIndex", b + d.length))
        }
    }),
    a.ui.plugin.add("draggable", "zIndex", {
        start: function(b, c) {
            var d = a(c.helper),
            e = a(this).data("ui-draggable").options;
            d.css("zIndex") && (e._zIndex = d.css("zIndex")),
            d.css("zIndex", e.zIndex)
        },
        stop: function(b, c) {
            var d = a(this).data("ui-draggable").options;
            d._zIndex && a(c.helper).css("zIndex", d._zIndex)
        }
    })
} (jQuery),
function(a) {
    function b(a, b, c) {
        return a > b && b + c > a
    }
    a.widget("ui.droppable", {
        version: "1.10.3",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var b = this.options,
            c = b.accept;
            this.isover = !1,
            this.isout = !0,
            this.accept = a.isFunction(c) ? c: function(a) {
                return a.is(c)
            },
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            },
            a.ui.ddmanager.droppables[b.scope] = a.ui.ddmanager.droppables[b.scope] || [],
            a.ui.ddmanager.droppables[b.scope].push(this),
            b.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var b = 0,
            c = a.ui.ddmanager.droppables[this.options.scope]; c.length > b; b++) c[b] === this && c.splice(b, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(b, c) {
            "accept" === b && (this.accept = a.isFunction(c) ? c: function(a) {
                return a.is(c)
            }),
            a.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass),
            c && this._trigger("activate", b, this.ui(c))
        },
        _deactivate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass),
            c && this._trigger("deactivate", b, this.ui(c))
        },
        _over: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)))
        },
        _out: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)))
        },
        _drop: function(b, c) {
            var d = c || a.ui.ddmanager.current,
            e = !1;
            return d && (d.currentItem || d.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var b = a.data(this, "ui-droppable");
                return b.options.greedy && !b.options.disabled && b.options.scope === d.options.scope && b.accept.call(b.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(b, {
                    offset: b.element.offset()
                }), b.options.tolerance) ? (e = !0, !1) : void 0
            }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element) : !1) : !1
        },
        ui: function(a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            }
        }
    }),
    a.ui.intersect = function(a, c, d) {
        if (!c.offset) return ! 1;
        var e, f, g = (a.positionAbs || a.position.absolute).left,
        h = g + a.helperProportions.width,
        i = (a.positionAbs || a.position.absolute).top,
        j = i + a.helperProportions.height,
        k = c.offset.left,
        l = k + c.proportions.width,
        m = c.offset.top,
        n = m + c.proportions.height;
        switch (d) {
        case "fit":
            return g >= k && l >= h && i >= m && n >= j;
        case "intersect":
            return g + a.helperProportions.width / 2 > k && l > h - a.helperProportions.width / 2 && i + a.helperProportions.height / 2 > m && n > j - a.helperProportions.height / 2;
        case "pointer":
            return e = (a.positionAbs || a.position.absolute).left + (a.clickOffset || a.offset.click).left,
            f = (a.positionAbs || a.position.absolute).top + (a.clickOffset || a.offset.click).top,
            b(f, m, c.proportions.height) && b(e, k, c.proportions.width);
        case "touch":
            return (i >= m && n >= i || j >= m && n >= j || m > i && j > n) && (g >= k && l >= g || h >= k && l >= h || k > g && h > l);
        default:
            return ! 1
        }
    },
    a.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(b, c) {
            var d, e, f = a.ui.ddmanager.droppables[b.options.scope] || [],
            g = c ? c.type: null,
            h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
            a: for (d = 0; f.length > d; d++) if (! (f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) {
                for (e = 0; h.length > e; e++) if (h[e] === f[d].element[0]) {
                    f[d].proportions.height = 0;
                    continue a
                }
                f[d].visible = "none" !== f[d].element.css("display"),
                f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), f[d].offset = f[d].element.offset(), f[d].proportions = {
                    width: f[d].element[0].offsetWidth,
                    height: f[d].element[0].offsetHeight
                })
            }
        },
        drop: function(b, c) {
            var d = !1;
            return a.each((a.ui.ddmanager.droppables[b.options.scope] || []).slice(),
            function() {
                this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, c)))
            }),
            d
        },
        dragStart: function(b, c) {
            b.element.parentsUntil("body").bind("scroll.droppable",
            function() {
                b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
            })
        },
        drag: function(b, c) {
            b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c),
            a.each(a.ui.ddmanager.droppables[b.options.scope] || [],
            function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var d, e, f, g = a.ui.intersect(b, this, this.options.tolerance),
                    h = !g && this.isover ? "isout": g && !this.isover ? "isover": null;
                    h && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return a.data(this, "ui-droppable").options.scope === e
                    }), f.length && (d = a.data(f[0], "ui-droppable"), d.greedyChild = "isover" === h)), d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[h] = !0, this["isout" === h ? "isover": "isout"] = !1, this["isover" === h ? "_over": "_out"].call(this, c), d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d, c)))
                }
            })
        },
        dragStop: function(b, c) {
            b.element.parentsUntil("body").unbind("scroll.droppable"),
            b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
        }
    }
} (jQuery),
function(a) {
    function b(a) {
        return parseInt(a, 10) || 0
    }
    function c(a) {
        return ! isNaN(parseInt(a, 10))
    }
    a.widget("ui.resizable", a.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var b, c, d, e, f, g = this,
            h = this.options;
            if (this.element.addClass("ui-resizable"), a.extend(this, {
                _aspectRatio: !!h.aspectRatio,
                aspectRatio: h.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper": null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = h.handles || (a(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            }: "e,s,se"), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), b = this.handles.split(","), this.handles = {},
            c = 0; b.length > c; c++) d = a.trim(b[c]),
            f = "ui-resizable-" + d,
            e = a("<div class='ui-resizable-handle " + f + "'></div>"),
            e.css({
                zIndex: h.zIndex
            }),
            "se" === d && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
            this.handles[d] = ".ui-resizable-" + d,
            this.element.append(e);
            this._renderAxis = function(b) {
                var c, d, e, f;
                b = b || this.element;
                for (c in this.handles) this.handles[c].constructor === String && (this.handles[c] = a(this.handles[c], this.element).show()),
                this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (d = a(this.handles[c], this.element), f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = ["padding", /ne|nw|n/.test(c) ? "Top": /se|sw|s/.test(c) ? "Bottom": /^e$/.test(c) ? "Right": "Left"].join(""), b.css(e, f), this._proportionallyResize()),
                a(this.handles[c]).length
            },
            this._renderAxis(this.element),
            this._handles = a(".ui-resizable-handle", this.element).disableSelection(),
            this._handles.mouseover(function() {
                g.resizing || (this.className && (e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), g.axis = e && e[1] ? e[1] : "se")
            }),
            h.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                h.disabled || (a(this).removeClass("ui-resizable-autohide"), g._handles.show())
            }).mouseleave(function() {
                h.disabled || g.resizing || (a(this).addClass("ui-resizable-autohide"), g._handles.hide())
            })),
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var b, c = function(b) {
                a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
                position: b.css("position"),
                width: b.outerWidth(),
                height: b.outerHeight(),
                top: b.css("top"),
                left: b.css("left")
            }).insertAfter(b), b.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            c(this.originalElement),
            this
        },
        _mouseCapture: function(b) {
            var c, d, e = !1;
            for (c in this.handles) d = a(this.handles[c])[0],
            (d === b.target || a.contains(d, b.target)) && (e = !0);
            return ! this.options.disabled && e
        },
        _mouseStart: function(c) {
            var d, e, f, g = this.options,
            h = this.element.position(),
            i = this.element;
            return this.resizing = !0,
            /absolute/.test(i.css("position")) ? i.css({
                position: "absolute",
                top: i.css("top"),
                left: i.css("left")
            }) : i.is(".ui-draggable") && i.css({
                position: "absolute",
                top: h.top,
                left: h.left
            }),
            this._renderProxy(),
            d = b(this.helper.css("left")),
            e = b(this.helper.css("top")),
            g.containment && (d += a(g.containment).scrollLeft() || 0, e += a(g.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: d,
                top: e
            },
            this.size = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            }: {
                width: i.width(),
                height: i.height()
            },
            this.originalSize = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            }: {
                width: i.width(),
                height: i.height()
            },
            this.originalPosition = {
                left: d,
                top: e
            },
            this.sizeDiff = {
                width: i.outerWidth() - i.width(),
                height: i.outerHeight() - i.height()
            },
            this.originalMousePosition = {
                left: c.pageX,
                top: c.pageY
            },
            this.aspectRatio = "number" == typeof g.aspectRatio ? g.aspectRatio: this.originalSize.width / this.originalSize.height || 1,
            f = a(".ui-resizable-" + this.axis).css("cursor"),
            a("body").css("cursor", "auto" === f ? this.axis + "-resize": f),
            i.addClass("ui-resizable-resizing"),
            this._propagate("start", c),
            !0
        },
        _mouseDrag: function(b) {
            var c, d = this.helper,
            e = {},
            f = this.originalMousePosition,
            g = this.axis,
            h = this.position.top,
            i = this.position.left,
            j = this.size.width,
            k = this.size.height,
            l = b.pageX - f.left || 0,
            m = b.pageY - f.top || 0,
            n = this._change[g];
            return n ? (c = n.apply(this, [b, l, m]), this._updateVirtualBoundaries(b.shiftKey), (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), this._updateCache(c), this._propagate("resize", b), this.position.top !== h && (e.top = this.position.top + "px"), this.position.left !== i && (e.left = this.position.left + "px"), this.size.width !== j && (e.width = this.size.width + "px"), this.size.height !== k && (e.height = this.size.height + "px"), d.css(e), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), a.isEmptyObject(e) || this._trigger("resize", b, this.ui()), !1) : !1
        },
        _mouseStop: function(b) {
            this.resizing = !1;
            var c, d, e, f, g, h, i, j = this.options,
            k = this;
            return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && a.ui.hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, g = {
                width: k.helper.width() - f,
                height: k.helper.height() - e
            },
            h = parseInt(k.element.css("left"), 10) + (k.position.left - k.originalPosition.left) || null, i = parseInt(k.element.css("top"), 10) + (k.position.top - k.originalPosition.top) || null, j.animate || this.element.css(a.extend(g, {
                top: i,
                left: h
            })), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()),
            a("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", b),
            this._helper && this.helper.remove(),
            !1
        },
        _updateVirtualBoundaries: function(a) {
            var b, d, e, f, g, h = this.options;
            g = {
                minWidth: c(h.minWidth) ? h.minWidth: 0,
                maxWidth: c(h.maxWidth) ? h.maxWidth: 1 / 0,
                minHeight: c(h.minHeight) ? h.minHeight: 0,
                maxHeight: c(h.maxHeight) ? h.maxHeight: 1 / 0
            },
            (this._aspectRatio || a) && (b = g.minHeight * this.aspectRatio, e = g.minWidth / this.aspectRatio, d = g.maxHeight * this.aspectRatio, f = g.maxWidth / this.aspectRatio, b > g.minWidth && (g.minWidth = b), e > g.minHeight && (g.minHeight = e), g.maxWidth > d && (g.maxWidth = d), g.maxHeight > f && (g.maxHeight = f)),
            this._vBoundaries = g
        },
        _updateCache: function(a) {
            this.offset = this.helper.offset(),
            c(a.left) && (this.position.left = a.left),
            c(a.top) && (this.position.top = a.top),
            c(a.height) && (this.size.height = a.height),
            c(a.width) && (this.size.width = a.width)
        },
        _updateRatio: function(a) {
            var b = this.position,
            d = this.size,
            e = this.axis;
            return c(a.height) ? a.width = a.height * this.aspectRatio: c(a.width) && (a.height = a.width / this.aspectRatio),
            "sw" === e && (a.left = b.left + (d.width - a.width), a.top = null),
            "nw" === e && (a.top = b.top + (d.height - a.height), a.left = b.left + (d.width - a.width)),
            a
        },
        _respectSize: function(a) {
            var b = this._vBoundaries,
            d = this.axis,
            e = c(a.width) && b.maxWidth && b.maxWidth < a.width,
            f = c(a.height) && b.maxHeight && b.maxHeight < a.height,
            g = c(a.width) && b.minWidth && b.minWidth > a.width,
            h = c(a.height) && b.minHeight && b.minHeight > a.height,
            i = this.originalPosition.left + this.originalSize.width,
            j = this.position.top + this.size.height,
            k = /sw|nw|w/.test(d),
            l = /nw|ne|n/.test(d);
            return g && (a.width = b.minWidth),
            h && (a.height = b.minHeight),
            e && (a.width = b.maxWidth),
            f && (a.height = b.maxHeight),
            g && k && (a.left = i - b.minWidth),
            e && k && (a.left = i - b.maxWidth),
            h && l && (a.top = j - b.minHeight),
            f && l && (a.top = j - b.maxHeight),
            a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null,
            a
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var a, b, c, d, e, f = this.helper || this.element;
                for (a = 0; this._proportionallyResizeElements.length > a; a++) {
                    if (e = this._proportionallyResizeElements[a], !this.borderDif) for (this.borderDif = [], c = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], d = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")], b = 0; c.length > b; b++) this.borderDif[b] = (parseInt(c[b], 10) || 0) + (parseInt(d[b], 10) || 0);
                    e.css({
                        height: f.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: f.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var b = this.element,
            c = this.options;
            this.elementOffset = b.offset(),
            this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++c.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(a, b) {
                return {
                    width: this.originalSize.width + b
                }
            },
            w: function(a, b) {
                var c = this.originalSize,
                d = this.originalPosition;
                return {
                    left: d.left + b,
                    width: c.width - b
                }
            },
            n: function(a, b, c) {
                var d = this.originalSize,
                e = this.originalPosition;
                return {
                    top: e.top + c,
                    height: d.height - c
                }
            },
            s: function(a, b, c) {
                return {
                    height: this.originalSize.height + c
                }
            },
            se: function(b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
            },
            sw: function(b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
            },
            ne: function(b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
            },
            nw: function(b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
            }
        },
        _propagate: function(b, c) {
            a.ui.plugin.call(this, b, [c, this.ui()]),
            "resize" !== b && this._trigger(b, c, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    a.ui.plugin.add("resizable", "animate", {
        stop: function(b) {
            var c = a(this).data("ui-resizable"),
            d = c.options,
            e = c._proportionallyResizeElements,
            f = e.length && /textarea/i.test(e[0].nodeName),
            g = f && a.ui.hasScroll(e[0], "left") ? 0 : c.sizeDiff.height,
            h = f ? 0 : c.sizeDiff.width,
            i = {
                width: c.size.width - h,
                height: c.size.height - g
            },
            j = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null,
            k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
            c.element.animate(a.extend(i, k && j ? {
                top: k,
                left: j
            }: {}), {
                duration: d.animateDuration,
                easing: d.animateEasing,
                step: function() {
                    var d = {
                        width: parseInt(c.element.css("width"), 10),
                        height: parseInt(c.element.css("height"), 10),
                        top: parseInt(c.element.css("top"), 10),
                        left: parseInt(c.element.css("left"), 10)
                    };
                    e && e.length && a(e[0]).css({
                        width: d.width,
                        height: d.height
                    }),
                    c._updateCache(d),
                    c._propagate("resize", b)
                }
            })
        }
    }),
    a.ui.plugin.add("resizable", "containment", {
        start: function() {
            var c, d, e, f, g, h, i, j = a(this).data("ui-resizable"),
            k = j.options,
            l = j.element,
            m = k.containment,
            n = m instanceof a ? m.get(0) : /parent/.test(m) ? l.parent().get(0) : m;
            n && (j.containerElement = a(n), /document/.test(m) || m === document ? (j.containerOffset = {
                left: 0,
                top: 0
            },
            j.containerPosition = {
                left: 0,
                top: 0
            },
            j.parentData = {
                element: a(document),
                left: 0,
                top: 0,
                width: a(document).width(),
                height: a(document).height() || document.body.parentNode.scrollHeight
            }) : (c = a(n), d = [], a(["Top", "Right", "Left", "Bottom"]).each(function(a, e) {
                d[a] = b(c.css("padding" + e))
            }), j.containerOffset = c.offset(), j.containerPosition = c.position(), j.containerSize = {
                height: c.innerHeight() - d[3],
                width: c.innerWidth() - d[1]
            },
            e = j.containerOffset, f = j.containerSize.height, g = j.containerSize.width, h = a.ui.hasScroll(n, "left") ? n.scrollWidth: g, i = a.ui.hasScroll(n) ? n.scrollHeight: f, j.parentData = {
                element: n,
                left: e.left,
                top: e.top,
                width: h,
                height: i
            }))
        },
        resize: function(b) {
            var c, d, e, f, g = a(this).data("ui-resizable"),
            h = g.options,
            i = g.containerOffset,
            j = g.position,
            k = g._aspectRatio || b.shiftKey,
            l = {
                top: 0,
                left: 0
            },
            m = g.containerElement;
            m[0] !== document && /static/.test(m.css("position")) && (l = i),
            j.left < (g._helper ? i.left: 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left: g.position.left - l.left), k && (g.size.height = g.size.width / g.aspectRatio), g.position.left = h.helper ? i.left: 0),
            j.top < (g._helper ? i.top: 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top: g.position.top), k && (g.size.width = g.size.height * g.aspectRatio), g.position.top = g._helper ? i.top: 0),
            g.offset.left = g.parentData.left + g.position.left,
            g.offset.top = g.parentData.top + g.position.top,
            c = Math.abs((g._helper ? g.offset.left - l.left: g.offset.left - l.left) + g.sizeDiff.width),
            d = Math.abs((g._helper ? g.offset.top - l.top: g.offset.top - i.top) + g.sizeDiff.height),
            e = g.containerElement.get(0) === g.element.parent().get(0),
            f = /relative|absolute/.test(g.containerElement.css("position")),
            e && f && (c -= g.parentData.left),
            c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, k && (g.size.height = g.size.width / g.aspectRatio)),
            d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, k && (g.size.width = g.size.height * g.aspectRatio))
        },
        stop: function() {
            var b = a(this).data("ui-resizable"),
            c = b.options,
            d = b.containerOffset,
            e = b.containerPosition,
            f = b.containerElement,
            g = a(b.helper),
            h = g.offset(),
            i = g.outerWidth() - b.sizeDiff.width,
            j = g.outerHeight() - b.sizeDiff.height;
            b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
                left: h.left - e.left - d.left,
                width: i,
                height: j
            }),
            b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
                left: h.left - e.left - d.left,
                width: i,
                height: j
            })
        }
    }),
    a.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var b = a(this).data("ui-resizable"),
            c = b.options,
            d = function(b) {
                a(b).each(function() {
                    var b = a(this);
                    b.data("ui-resizable-alsoresize", {
                        width: parseInt(b.width(), 10),
                        height: parseInt(b.height(), 10),
                        left: parseInt(b.css("left"), 10),
                        top: parseInt(b.css("top"), 10)
                    })
                })
            };
            "object" != typeof c.alsoResize || c.alsoResize.parentNode ? d(c.alsoResize) : c.alsoResize.length ? (c.alsoResize = c.alsoResize[0], d(c.alsoResize)) : a.each(c.alsoResize,
            function(a) {
                d(a)
            })
        },
        resize: function(b, c) {
            var d = a(this).data("ui-resizable"),
            e = d.options,
            f = d.originalSize,
            g = d.originalPosition,
            h = {
                height: d.size.height - f.height || 0,
                width: d.size.width - f.width || 0,
                top: d.position.top - g.top || 0,
                left: d.position.left - g.left || 0
            },
            i = function(b, d) {
                a(b).each(function() {
                    var b = a(this),
                    e = a(this).data("ui-resizable-alsoresize"),
                    f = {},
                    g = d && d.length ? d: b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    a.each(g,
                    function(a, b) {
                        var c = (e[b] || 0) + (h[b] || 0);
                        c && c >= 0 && (f[b] = c || null)
                    }),
                    b.css(f)
                })
            };
            "object" != typeof e.alsoResize || e.alsoResize.nodeType ? i(e.alsoResize) : a.each(e.alsoResize,
            function(a, b) {
                i(a, b)
            })
        },
        stop: function() {
            a(this).removeData("resizable-alsoresize")
        }
    }),
    a.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var b = a(this).data("ui-resizable"),
            c = b.options,
            d = b.size;
            b.ghost = b.originalElement.clone(),
            b.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: d.height,
                width: d.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost: ""),
            b.ghost.appendTo(b.helper)
        },
        resize: function() {
            var b = a(this).data("ui-resizable");
            b.ghost && b.ghost.css({
                position: "relative",
                height: b.size.height,
                width: b.size.width
            })
        },
        stop: function() {
            var b = a(this).data("ui-resizable");
            b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
        }
    }),
    a.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var b = a(this).data("ui-resizable"),
            c = b.options,
            d = b.size,
            e = b.originalSize,
            f = b.originalPosition,
            g = b.axis,
            h = "number" == typeof c.grid ? [c.grid, c.grid] : c.grid,
            i = h[0] || 1,
            j = h[1] || 1,
            k = Math.round((d.width - e.width) / i) * i,
            l = Math.round((d.height - e.height) / j) * j,
            m = e.width + k,
            n = e.height + l,
            o = c.maxWidth && m > c.maxWidth,
            p = c.maxHeight && n > c.maxHeight,
            q = c.minWidth && c.minWidth > m,
            r = c.minHeight && c.minHeight > n;
            c.grid = h,
            q && (m += i),
            r && (n += j),
            o && (m -= i),
            p && (n -= j),
            /^(se|s|e)$/.test(g) ? (b.size.width = m, b.size.height = n) : /^(ne)$/.test(g) ? (b.size.width = m, b.size.height = n, b.position.top = f.top - l) : /^(sw)$/.test(g) ? (b.size.width = m, b.size.height = n, b.position.left = f.left - k) : (b.size.width = m, b.size.height = n, b.position.top = f.top - l, b.position.left = f.left - k)
        }
    })
} (jQuery),
function() {
    var a = this,
    b = a._,
    c = {},
    d = Array.prototype,
    e = Object.prototype,
    f = Function.prototype,
    g = d.push,
    h = d.slice,
    i = d.concat,
    j = e.toString,
    k = e.hasOwnProperty,
    l = d.forEach,
    m = d.map,
    n = d.reduce,
    o = d.reduceRight,
    p = d.filter,
    q = d.every,
    r = d.some,
    s = d.indexOf,
    t = d.lastIndexOf,
    u = Array.isArray,
    v = Object.keys,
    w = f.bind,
    x = function(a) {
        return a instanceof x ? a: this instanceof x ? void(this._wrapped = a) : new x(a)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : a._ = x,
    x.VERSION = "1.5.2";
    var y = x.each = x.forEach = function(a, b, d) {
        if (null != a) if (l && a.forEach === l) a.forEach(b, d);
        else if (a.length === +a.length) {
            for (var e = 0,
            f = a.length; f > e; e++) if (b.call(d, a[e], e, a) === c) return
        } else for (var g = x.keys(a), e = 0, f = g.length; f > e; e++) if (b.call(d, a[g[e]], g[e], a) === c) return
    };
    x.map = x.collect = function(a, b, c) {
        var d = [];
        return null == a ? d: m && a.map === m ? a.map(b, c) : (y(a,
        function(a, e, f) {
            d.push(b.call(c, a, e, f))
        }), d)
    };
    var z = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), n && a.reduce === n) return d && (b = x.bind(b, d)),
        e ? a.reduce(b, c) : a.reduce(b);
        if (y(a,
        function(a, f, g) {
            e ? c = b.call(d, c, a, f, g) : (c = a, e = !0)
        }), !e) throw new TypeError(z);
        return c
    },
    x.reduceRight = x.foldr = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), o && a.reduceRight === o) return d && (b = x.bind(b, d)),
        e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = a.length;
        if (f !== +f) {
            var g = x.keys(a);
            f = g.length
        }
        if (y(a,
        function(h, i, j) {
            i = g ? g[--f] : --f,
            e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0)
        }), !e) throw new TypeError(z);
        return c
    },
    x.find = x.detect = function(a, b, c) {
        var d;
        return A(a,
        function(a, e, f) {
            return b.call(c, a, e, f) ? (d = a, !0) : void 0
        }),
        d
    },
    x.filter = x.select = function(a, b, c) {
        var d = [];
        return null == a ? d: p && a.filter === p ? a.filter(b, c) : (y(a,
        function(a, e, f) {
            b.call(c, a, e, f) && d.push(a)
        }), d)
    },
    x.reject = function(a, b, c) {
        return x.filter(a,
        function(a, d, e) {
            return ! b.call(c, a, d, e)
        },
        c)
    },
    x.every = x.all = function(a, b, d) {
        b || (b = x.identity);
        var e = !0;
        return null == a ? e: q && a.every === q ? a.every(b, d) : (y(a,
        function(a, f, g) {
            return (e = e && b.call(d, a, f, g)) ? void 0 : c
        }), !!e)
    };
    var A = x.some = x.any = function(a, b, d) {
        b || (b = x.identity);
        var e = !1;
        return null == a ? e: r && a.some === r ? a.some(b, d) : (y(a,
        function(a, f, g) {
            return e || (e = b.call(d, a, f, g)) ? c: void 0
        }), !!e)
    };
    x.contains = x.include = function(a, b) {
        return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a,
        function(a) {
            return a === b
        })
    },
    x.invoke = function(a, b) {
        var c = h.call(arguments, 2),
        d = x.isFunction(b);
        return x.map(a,
        function(a) {
            return (d ? b: a[b]).apply(a, c)
        })
    },
    x.pluck = function(a, b) {
        return x.map(a,
        function(a) {
            return a[b]
        })
    },
    x.where = function(a, b, c) {
        return x.isEmpty(b) ? c ? void 0 : [] : x[c ? "find": "filter"](a,
        function(a) {
            for (var c in b) if (b[c] !== a[c]) return ! 1;
            return ! 0
        })
    },
    x.findWhere = function(a, b) {
        return x.where(a, b, !0)
    },
    x.max = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.max.apply(Math, a);
        if (!b && x.isEmpty(a)) return - 1 / 0;
        var d = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return y(a,
        function(a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g > d.computed && (d = {
                value: a,
                computed: g
            })
        }),
        d.value
    },
    x.min = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.min.apply(Math, a);
        if (!b && x.isEmpty(a)) return 1 / 0;
        var d = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return y(a,
        function(a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g < d.computed && (d = {
                value: a,
                computed: g
            })
        }),
        d.value
    },
    x.shuffle = function(a) {
        var b, c = 0,
        d = [];
        return y(a,
        function(a) {
            b = x.random(c++),
            d[c - 1] = d[b],
            d[b] = a
        }),
        d
    },
    x.sample = function(a, b, c) {
        return arguments.length < 2 || c ? a[x.random(a.length - 1)] : x.shuffle(a).slice(0, Math.max(0, b))
    };
    var B = function(a) {
        return x.isFunction(a) ? a: function(b) {
            return b[a]
        }
    };
    x.sortBy = function(a, b, c) {
        var d = B(b);
        return x.pluck(x.map(a,
        function(a, b, e) {
            return {
                value: a,
                index: b,
                criteria: d.call(c, a, b, e)
            }
        }).sort(function(a, b) {
            var c = a.criteria,
            d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (d > c || void 0 === d) return - 1
            }
            return a.index - b.index
        }), "value")
    };
    var C = function(a) {
        return function(b, c, d) {
            var e = {},
            f = null == c ? x.identity: B(c);
            return y(b,
            function(c, g) {
                var h = f.call(d, c, g, b);
                a(e, h, c)
            }),
            e
        }
    };
    x.groupBy = C(function(a, b, c) { (x.has(a, b) ? a[b] : a[b] = []).push(c)
    }),
    x.indexBy = C(function(a, b, c) {
        a[b] = c
    }),
    x.countBy = C(function(a, b) {
        x.has(a, b) ? a[b]++:a[b] = 1
    }),
    x.sortedIndex = function(a, b, c, d) {
        c = null == c ? x.identity: B(c);
        for (var e = c.call(d, b), f = 0, g = a.length; g > f;) {
            var h = f + g >>> 1;
            c.call(d, a[h]) < e ? f = h + 1 : g = h
        }
        return f
    },
    x.toArray = function(a) {
        return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : []
    },
    x.size = function(a) {
        return null == a ? 0 : a.length === +a.length ? a.length: x.keys(a).length
    },
    x.first = x.head = x.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : h.call(a, 0, b)
    },
    x.initial = function(a, b, c) {
        return h.call(a, 0, a.length - (null == b || c ? 1 : b))
    },
    x.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0))
    },
    x.rest = x.tail = x.drop = function(a, b, c) {
        return h.call(a, null == b || c ? 1 : b)
    },
    x.compact = function(a) {
        return x.filter(a, x.identity)
    };
    var D = function(a, b, c) {
        return b && x.every(a, x.isArray) ? i.apply(c, a) : (y(a,
        function(a) {
            x.isArray(a) || x.isArguments(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a)
        }), c)
    };
    x.flatten = function(a, b) {
        return D(a, b, [])
    },
    x.without = function(a) {
        return x.difference(a, h.call(arguments, 1))
    },
    x.uniq = x.unique = function(a, b, c, d) {
        x.isFunction(b) && (d = c, c = b, b = !1);
        var e = c ? x.map(a, c, d) : a,
        f = [],
        g = [];
        return y(e,
        function(c, d) { (b ? d && g[g.length - 1] === c: x.contains(g, c)) || (g.push(c), f.push(a[d]))
        }),
        f
    },
    x.union = function() {
        return x.uniq(x.flatten(arguments, !0))
    },
    x.intersection = function(a) {
        var b = h.call(arguments, 1);
        return x.filter(x.uniq(a),
        function(a) {
            return x.every(b,
            function(b) {
                return x.indexOf(b, a) >= 0
            })
        })
    },
    x.difference = function(a) {
        var b = i.apply(d, h.call(arguments, 1));
        return x.filter(a,
        function(a) {
            return ! x.contains(b, a)
        })
    },
    x.zip = function() {
        for (var a = x.max(x.pluck(arguments, "length").concat(0)), b = new Array(a), c = 0; a > c; c++) b[c] = x.pluck(arguments, "" + c);
        return b
    },
    x.object = function(a, b) {
        if (null == a) return {};
        for (var c = {},
        d = 0,
        e = a.length; e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    },
    x.indexOf = function(a, b, c) {
        if (null == a) return - 1;
        var d = 0,
        e = a.length;
        if (c) {
            if ("number" != typeof c) return d = x.sortedIndex(a, b),
            a[d] === b ? d: -1;
            d = 0 > c ? Math.max(0, e + c) : c
        }
        if (s && a.indexOf === s) return a.indexOf(b, c);
        for (; e > d; d++) if (a[d] === b) return d;
        return - 1
    },
    x.lastIndexOf = function(a, b, c) {
        if (null == a) return - 1;
        var d = null != c;
        if (t && a.lastIndexOf === t) return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (var e = d ? c: a.length; e--;) if (a[e] === b) return e;
        return - 1
    },
    x.range = function(a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0),
        c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e;) f[e++] = a,
        a += c;
        return f
    };
    var E = function() {};
    x.bind = function(a, b) {
        var c, d;
        if (w && a.bind === w) return w.apply(a, h.call(arguments, 1));
        if (!x.isFunction(a)) throw new TypeError;
        return c = h.call(arguments, 2),
        d = function() {
            if (! (this instanceof d)) return a.apply(b, c.concat(h.call(arguments)));
            E.prototype = a.prototype;
            var e = new E;
            E.prototype = null;
            var f = a.apply(e, c.concat(h.call(arguments)));
            return Object(f) === f ? f: e
        }
    },
    x.partial = function(a) {
        var b = h.call(arguments, 1);
        return function() {
            return a.apply(this, b.concat(h.call(arguments)))
        }
    },
    x.bindAll = function(a) {
        var b = h.call(arguments, 1);
        if (0 === b.length) throw new Error("bindAll must be passed function names");
        return y(b,
        function(b) {
            a[b] = x.bind(a[b], a)
        }),
        a
    },
    x.memoize = function(a, b) {
        var c = {};
        return b || (b = x.identity),
        function() {
            var d = b.apply(this, arguments);
            return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
        }
    },
    x.delay = function(a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c)
        },
        b)
    },
    x.defer = function(a) {
        return x.delay.apply(x, [a, 1].concat(h.call(arguments, 1)))
    },
    x.throttle = function(a, b, c) {
        var d, e, f, g = null,
        h = 0;
        c || (c = {});
        var i = function() {
            h = c.leading === !1 ? 0 : new Date,
            g = null,
            f = a.apply(d, e)
        };
        return function() {
            var j = new Date;
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this,
            e = arguments,
            0 >= k ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e)) : g || c.trailing === !1 || (g = setTimeout(i, k)),
            f
        }
    },
    x.debounce = function(a, b, c) {
        var d, e, f, g, h;
        return function() {
            f = this,
            e = arguments,
            g = new Date;
            var i = function() {
                var j = new Date - g;
                b > j ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e)))
            },
            j = c && !d;
            return d || (d = setTimeout(i, b)),
            j && (h = a.apply(f, e)),
            h
        }
    },
    x.once = function(a) {
        var b, c = !1;
        return function() {
            return c ? b: (c = !0, b = a.apply(this, arguments), a = null, b)
        }
    },
    x.wrap = function(a, b) {
        return function() {
            var c = [a];
            return g.apply(c, arguments),
            b.apply(this, c)
        }
    },
    x.compose = function() {
        var a = arguments;
        return function() {
            for (var b = arguments,
            c = a.length - 1; c >= 0; c--) b = [a[c].apply(this, b)];
            return b[0]
        }
    },
    x.after = function(a, b) {
        return function() {
            return--a < 1 ? b.apply(this, arguments) : void 0
        }
    },
    x.keys = v ||
    function(a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var b = [];
        for (var c in a) x.has(a, c) && b.push(c);
        return b
    },
    x.values = function(a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
        return d
    },
    x.pairs = function(a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++) d[e] = [b[e], a[b[e]]];
        return d
    },
    x.invert = function(a) {
        for (var b = {},
        c = x.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] = c[d];
        return b
    },
    x.functions = x.methods = function(a) {
        var b = [];
        for (var c in a) x.isFunction(a[c]) && b.push(c);
        return b.sort()
    },
    x.extend = function(a) {
        return y(h.call(arguments, 1),
        function(b) {
            if (b) for (var c in b) a[c] = b[c]
        }),
        a
    },
    x.pick = function(a) {
        var b = {},
        c = i.apply(d, h.call(arguments, 1));
        return y(c,
        function(c) {
            c in a && (b[c] = a[c])
        }),
        b
    },
    x.omit = function(a) {
        var b = {},
        c = i.apply(d, h.call(arguments, 1));
        for (var e in a) x.contains(c, e) || (b[e] = a[e]);
        return b
    },
    x.defaults = function(a) {
        return y(h.call(arguments, 1),
        function(b) {
            if (b) for (var c in b) void 0 === a[c] && (a[c] = b[c])
        }),
        a
    },
    x.clone = function(a) {
        return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({},
        a) : a
    },
    x.tap = function(a, b) {
        return b(a),
        a
    };
    var F = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof x && (a = a._wrapped),
        b instanceof x && (b = b._wrapped);
        var e = j.call(a);
        if (e != j.call(b)) return ! 1;
        switch (e) {
        case "[object String]":
            return a == String(b);
        case "[object Number]":
            return a != +a ? b != +b: 0 == a ? 1 / a == 1 / b: a == +b;
        case "[object Date]":
        case "[object Boolean]":
            return + a == +b;
        case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        if ("object" != typeof a || "object" != typeof b) return ! 1;
        for (var f = c.length; f--;) if (c[f] == a) return d[f] == b;
        var g = a.constructor,
        h = b.constructor;
        if (g !== h && !(x.isFunction(g) && g instanceof g && x.isFunction(h) && h instanceof h)) return ! 1;
        c.push(a),
        d.push(b);
        var i = 0,
        k = !0;
        if ("[object Array]" == e) {
            if (i = a.length, k = i == b.length) for (; i--&&(k = F(a[i], b[i], c, d)););
        } else {
            for (var l in a) if (x.has(a, l) && (i++, !(k = x.has(b, l) && F(a[l], b[l], c, d)))) break;
            if (k) {
                for (l in b) if (x.has(b, l) && !i--) break;
                k = !i
            }
        }
        return c.pop(),
        d.pop(),
        k
    };
    x.isEqual = function(a, b) {
        return F(a, b, [], [])
    },
    x.isEmpty = function(a) {
        if (null == a) return ! 0;
        if (x.isArray(a) || x.isString(a)) return 0 === a.length;
        for (var b in a) if (x.has(a, b)) return ! 1;
        return ! 0
    },
    x.isElement = function(a) {
        return ! (!a || 1 !== a.nodeType)
    },
    x.isArray = u ||
    function(a) {
        return "[object Array]" == j.call(a)
    },
    x.isObject = function(a) {
        return a === Object(a)
    },
    y(["Arguments", "Function", "String", "Number", "Date", "RegExp"],
    function(a) {
        x["is" + a] = function(b) {
            return j.call(b) == "[object " + a + "]"
        }
    }),
    x.isArguments(arguments) || (x.isArguments = function(a) {
        return ! (!a || !x.has(a, "callee"))
    }),
    "function" != typeof / . / &&(x.isFunction = function(a) {
        return "function" == typeof a
    }),
    x.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    },
    x.isNaN = function(a) {
        return x.isNumber(a) && a != +a
    },
    x.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" == j.call(a)
    },
    x.isNull = function(a) {
        return null === a
    },
    x.isUndefined = function(a) {
        return void 0 === a
    },
    x.has = function(a, b) {
        return k.call(a, b)
    },
    x.noConflict = function() {
        return a._ = b,
        this
    },
    x.identity = function(a) {
        return a
    },
    x.times = function(a, b, c) {
        for (var d = Array(Math.max(0, a)), e = 0; a > e; e++) d[e] = b.call(c, e);
        return d
    },
    x.random = function(a, b) {
        return null == b && (b = a, a = 0),
        a + Math.floor(Math.random() * (b - a + 1))
    };
    var G = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    G.unescape = x.invert(G.escape);
    var H = {
        escape: new RegExp("[" + x.keys(G.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(G.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"],
    function(a) {
        x[a] = function(b) {
            return null == b ? "": ("" + b).replace(H[a],
            function(b) {
                return G[a][b]
            })
        }
    }),
    x.result = function(a, b) {
        if (null == a) return void 0;
        var c = a[b];
        return x.isFunction(c) ? c.call(a) : c
    },
    x.mixin = function(a) {
        y(x.functions(a),
        function(b) {
            var c = x[b] = a[b];
            x.prototype[b] = function() {
                var a = [this._wrapped];
                return g.apply(a, arguments),
                M.call(this, c.apply(x, a))
            }
        })
    };
    var I = 0;
    x.uniqueId = function(a) {
        var b = ++I + "";
        return a ? a + b: b
    },
    x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var J = /(.)^/,
    K = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(a, b, c) {
        var d;
        c = x.defaults({},
        c, x.templateSettings);
        var e = new RegExp([(c.escape || J).source, (c.interpolate || J).source, (c.evaluate || J).source].join("|") + "|$", "g"),
        f = 0,
        g = "__p+='";
        a.replace(e,
        function(b, c, d, e, h) {
            return g += a.slice(f, h).replace(L,
            function(a) {
                return "\\" + K[a]
            }),
            c && (g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"),
            d && (g += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"),
            e && (g += "';\n" + e + "\n__p+='"),
            f = h + b.length,
            b
        }),
        g += "';\n",
        c.variable || (g = "with(obj||{}){\n" + g + "}\n"),
        g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
        try {
            d = new Function(c.variable || "obj", "_", g)
        } catch(h) {
            throw h.source = g,
            h
        }
        if (b) return d(b, x);
        var i = function(a) {
            return d.call(this, a, x)
        };
        return i.source = "function(" + (c.variable || "obj") + "){\n" + g + "}",
        i
    },
    x.chain = function(a) {
        return x(a).chain()
    };
    var M = function(a) {
        return this._chain ? x(a).chain() : a
    };
    x.mixin(x),
    y(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
    function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments),
            "shift" != a && "splice" != a || 0 !== c.length || delete c[0],
            M.call(this, c)
        }
    }),
    y(["concat", "join", "slice"],
    function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            return M.call(this, b.apply(this._wrapped, arguments))
        }
    }),
    x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0,
            this
        },
        value: function() {
            return this._wrapped
        }
    })
}.call(this),
function() {
    var a, b = this,
    c = b.Backbone,
    d = [],
    e = d.push,
    f = d.slice,
    g = d.splice;
    a = "undefined" != typeof exports ? exports: b.Backbone = {},
    a.VERSION = "1.0.0";
    var h = b._;
    h || "undefined" == typeof require || (h = require("underscore")),
    a.$ = b.jQuery || b.Zepto || b.ender || b.$,
    a.noConflict = function() {
        return b.Backbone = c,
        this
    },
    a.emulateHTTP = !1,
    a.emulateJSON = !1;
    var i = a.Events = {
        on: function(a, b, c) {
            if (!k(this, "on", a, [b, c]) || !b) return this;
            this._events || (this._events = {});
            var d = this._events[a] || (this._events[a] = []);
            return d.push({
                callback: b,
                context: c,
                ctx: c || this
            }),
            this
        },
        once: function(a, b, c) {
            if (!k(this, "once", a, [b, c]) || !b) return this;
            var d = this,
            e = h.once(function() {
                d.off(a, e),
                b.apply(this, arguments)
            });
            return e._callback = b,
            this.on(a, e, c)
        },
        off: function(a, b, c) {
            var d, e, f, g, i, j, l, m;
            if (!this._events || !k(this, "off", a, [b, c])) return this;
            if (!a && !b && !c) return this._events = {},
            this;
            for (g = a ? [a] : h.keys(this._events), i = 0, j = g.length; j > i; i++) if (a = g[i], f = this._events[a]) {
                if (this._events[a] = d = [], b || c) for (l = 0, m = f.length; m > l; l++) e = f[l],
                (b && b !== e.callback && b !== e.callback._callback || c && c !== e.context) && d.push(e);
                d.length || delete this._events[a]
            }
            return this
        },
        trigger: function(a) {
            if (!this._events) return this;
            var b = f.call(arguments, 1);
            if (!k(this, "trigger", a, b)) return this;
            var c = this._events[a],
            d = this._events.all;
            return c && l(c, b),
            d && l(d, arguments),
            this
        },
        stopListening: function(a, b, c) {
            var d = this._listeners;
            if (!d) return this;
            var e = !b && !c;
            "object" == typeof b && (c = this),
            a && ((d = {})[a._listenerId] = a);
            for (var f in d) d[f].off(b, c, this),
            e && delete this._listeners[f];
            return this
        }
    },
    j = /\s+/,
    k = function(a, b, c, d) {
        if (!c) return ! 0;
        if ("object" == typeof c) {
            for (var e in c) a[b].apply(a, [e, c[e]].concat(d));
            return ! 1
        }
        if (j.test(c)) {
            for (var f = c.split(j), g = 0, h = f.length; h > g; g++) a[b].apply(a, [f[g]].concat(d));
            return ! 1
        }
        return ! 0
    },
    l = function(a, b) {
        var c, d = -1,
        e = a.length,
        f = b[0],
        g = b[1],
        h = b[2];
        switch (b.length) {
        case 0:
            for (; ++d < e;)(c = a[d]).callback.call(c.ctx);
            return;
        case 1:
            for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f);
            return;
        case 2:
            for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f, g);
            return;
        case 3:
            for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f, g, h);
            return;
        default:
            for (; ++d < e;)(c = a[d]).callback.apply(c.ctx, b)
        }
    },
    m = {
        listenTo: "on",
        listenToOnce: "once"
    };
    h.each(m,
    function(a, b) {
        i[b] = function(b, c, d) {
            var e = this._listeners || (this._listeners = {}),
            f = b._listenerId || (b._listenerId = h.uniqueId("l"));
            return e[f] = b,
            "object" == typeof c && (d = this),
            b[a](c, d, this),
            this
        }
    }),
    i.bind = i.on,
    i.unbind = i.off,
    h.extend(a, i);
    var n = a.Model = function(a, b) {
        var c, d = a || {};
        b || (b = {}),
        this.cid = h.uniqueId("c"),
        this.attributes = {},
        h.extend(this, h.pick(b, o)),
        b.parse && (d = this.parse(d, b) || {}),
        (c = h.result(this, "defaults")) && (d = h.defaults({},
        d, c)),
        this.set(d, b),
        this.changed = {},
        this.initialize.apply(this, arguments)
    },
    o = ["url", "urlRoot", "collection"];
    h.extend(n.prototype, i, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return h.clone(this.attributes)
        },
        sync: function() {
            return a.sync.apply(this, arguments)
        },
        get: function(a) {
            return this.attributes[a]
        },
        escape: function(a) {
            return h.escape(this.get(a))
        },
        has: function(a) {
            return null != this.get(a)
        },
        set: function(a, b, c) {
            var d, e, f, g, i, j, k, l;
            if (null == a) return this;
            if ("object" == typeof a ? (e = a, c = b) : (e = {})[a] = b, c || (c = {}), !this._validate(e, c)) return ! 1;
            f = c.unset,
            i = c.silent,
            g = [],
            j = this._changing,
            this._changing = !0,
            j || (this._previousAttributes = h.clone(this.attributes), this.changed = {}),
            l = this.attributes,
            k = this._previousAttributes,
            this.idAttribute in e && (this.id = e[this.idAttribute]);
            for (d in e) b = e[d],
            h.isEqual(l[d], b) || g.push(d),
            h.isEqual(k[d], b) ? delete this.changed[d] : this.changed[d] = b,
            f ? delete l[d] : l[d] = b;
            if (!i) {
                g.length && (this._pending = !0);
                for (var m = 0,
                n = g.length; n > m; m++) this.trigger("change:" + g[m], this, l[g[m]], c)
            }
            if (j) return this;
            if (!i) for (; this._pending;) this._pending = !1,
            this.trigger("change", this, c);
            return this._pending = !1,
            this._changing = !1,
            this
        },
        unset: function(a, b) {
            return this.set(a, void 0, h.extend({},
            b, {
                unset: !0
            }))
        },
        clear: function(a) {
            var b = {};
            for (var c in this.attributes) b[c] = void 0;
            return this.set(b, h.extend({},
            a, {
                unset: !0
            }))
        },
        hasChanged: function(a) {
            return null == a ? !h.isEmpty(this.changed) : h.has(this.changed, a)
        },
        changedAttributes: function(a) {
            if (!a) return this.hasChanged() ? h.clone(this.changed) : !1;
            var b, c = !1,
            d = this._changing ? this._previousAttributes: this.attributes;
            for (var e in a) h.isEqual(d[e], b = a[e]) || ((c || (c = {}))[e] = b);
            return c
        },
        previous: function(a) {
            return null != a && this._previousAttributes ? this._previousAttributes[a] : null
        },
        previousAttributes: function() {
            return h.clone(this._previousAttributes)
        },
        fetch: function(a) {
            a = a ? h.clone(a) : {},
            void 0 === a.parse && (a.parse = !0);
            var b = this,
            c = a.success;
            return a.success = function(d) {
                return b.set(b.parse(d, a), a) ? (c && c(b, d, a), void b.trigger("sync", b, d, a)) : !1
            },
            L(this, a),
            this.sync("read", this, a)
        },
        save: function(a, b, c) {
            var d, e, f, g = this.attributes;
            if (null == a || "object" == typeof a ? (d = a, c = b) : (d = {})[a] = b, !(!d || c && c.wait || this.set(d, c))) return ! 1;
            if (c = h.extend({
                validate: !0
            },
            c), !this._validate(d, c)) return ! 1;
            d && c.wait && (this.attributes = h.extend({},
            g, d)),
            void 0 === c.parse && (c.parse = !0);
            var i = this,
            j = c.success;
            return c.success = function(a) {
                i.attributes = g;
                var b = i.parse(a, c);
                return c.wait && (b = h.extend(d || {},
                b)),
                h.isObject(b) && !i.set(b, c) ? !1 : (j && j(i, a, c), void i.trigger("sync", i, a, c))
            },
            L(this, c),
            e = this.isNew() ? "create": c.patch ? "patch": "update",
            "patch" === e && (c.attrs = d),
            f = this.sync(e, this, c),
            d && c.wait && (this.attributes = g),
            f
        },
        destroy: function(a) {
            a = a ? h.clone(a) : {};
            var b = this,
            c = a.success,
            d = function() {
                b.trigger("destroy", b, b.collection, a)
            };
            if (a.success = function(e) { (a.wait || b.isNew()) && d(),
                c && c(b, e, a),
                b.isNew() || b.trigger("sync", b, e, a)
            },
            this.isNew()) return a.success(),
            !1;
            L(this, a);
            var e = this.sync("delete", this, a);
            return a.wait || d(),
            e
        },
        url: function() {
            var a = h.result(this, "urlRoot") || h.result(this.collection, "url") || K();
            return this.isNew() ? a: a + ("/" === a.charAt(a.length - 1) ? "": "/") + encodeURIComponent(this.id)
        },
        parse: function(a) {
            return a
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return null == this.id
        },
        isValid: function(a) {
            return this._validate({},
            h.extend(a || {},
            {
                validate: !0
            }))
        },
        _validate: function(a, b) {
            if (!b.validate || !this.validate) return ! 0;
            a = h.extend({},
            this.attributes, a);
            var c = this.validationError = this.validate(a, b) || null;
            return c ? (this.trigger("invalid", this, c, h.extend(b || {},
            {
                validationError: c
            })), !1) : !0
        }
    });
    var p = ["keys", "values", "pairs", "invert", "pick", "omit"];
    h.each(p,
    function(a) {
        n.prototype[a] = function() {
            var b = f.call(arguments);
            return b.unshift(this.attributes),
            h[a].apply(h, b)
        }
    });
    var q = a.Collection = function(a, b) {
        b || (b = {}),
        b.url && (this.url = b.url),
        b.model && (this.model = b.model),
        void 0 !== b.comparator && (this.comparator = b.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        a && this.reset(a, h.extend({
            silent: !0
        },
        b))
    },
    r = {
        add: !0,
        remove: !0,
        merge: !0
    },
    s = {
        add: !0,
        merge: !1,
        remove: !1
    };
    h.extend(q.prototype, i, {
        model: n,
        initialize: function() {},
        toJSON: function(a) {
            return this.map(function(b) {
                return b.toJSON(a)
            })
        },
        sync: function() {
            return a.sync.apply(this, arguments)
        },
        add: function(a, b) {
            return this.set(a, h.defaults(b || {},
            s))
        },
        remove: function(a, b) {
            a = h.isArray(a) ? a.slice() : [a],
            b || (b = {});
            var c, d, e, f;
            for (c = 0, d = a.length; d > c; c++) f = this.get(a[c]),
            f && (delete this._byId[f.id], delete this._byId[f.cid], e = this.indexOf(f), this.models.splice(e, 1), this.length--, b.silent || (b.index = e, f.trigger("remove", f, this, b)), this._removeReference(f));
            return this
        },
        set: function(a, b) {
            b = h.defaults(b || {},
            r),
            b.parse && (a = this.parse(a, b)),
            h.isArray(a) || (a = a ? [a] : []);
            var c, d, f, i, j, k = b.at,
            l = this.comparator && null == k && b.sort !== !1,
            m = h.isString(this.comparator) ? this.comparator: null,
            n = [],
            o = [],
            p = {};
            for (c = 0, d = a.length; d > c; c++)(f = this._prepareModel(a[c], b)) && ((i = this.get(f)) ? (b.remove && (p[i.cid] = !0), b.merge && (i.set(f.attributes, b), l && !j && i.hasChanged(m) && (j = !0))) : b.add && (n.push(f), f.on("all", this._onModelEvent, this), this._byId[f.cid] = f, null != f.id && (this._byId[f.id] = f)));
            if (b.remove) {
                for (c = 0, d = this.length; d > c; ++c) p[(f = this.models[c]).cid] || o.push(f);
                o.length && this.remove(o, b)
            }
            if (n.length && (l && (j = !0), this.length += n.length, null != k ? g.apply(this.models, [k, 0].concat(n)) : e.apply(this.models, n)), j && this.sort({
                silent: !0
            }), b.silent) return this;
            for (c = 0, d = n.length; d > c; c++)(f = n[c]).trigger("add", f, this, b);
            return j && this.trigger("sort", this, b),
            this
        },
        reset: function(a, b) {
            b || (b = {});
            for (var c = 0,
            d = this.models.length; d > c; c++) this._removeReference(this.models[c]);
            return b.previousModels = this.models,
            this._reset(),
            this.add(a, h.extend({
                silent: !0
            },
            b)),
            b.silent || this.trigger("reset", this, b),
            this
        },
        push: function(a, b) {
            return a = this._prepareModel(a, b),
            this.add(a, h.extend({
                at: this.length
            },
            b)),
            a
        },
        pop: function(a) {
            var b = this.at(this.length - 1);
            return this.remove(b, a),
            b
        },
        unshift: function(a, b) {
            return a = this._prepareModel(a, b),
            this.add(a, h.extend({
                at: 0
            },
            b)),
            a
        },
        shift: function(a) {
            var b = this.at(0);
            return this.remove(b, a),
            b
        },
        slice: function(a, b) {
            return this.models.slice(a, b)
        },
        get: function(a) {
            return null == a ? void 0 : this._byId[null != a.id ? a.id: a.cid || a]
        },
        at: function(a) {
            return this.models[a]
        },
        where: function(a, b) {
            return h.isEmpty(a) ? b ? void 0 : [] : this[b ? "find": "filter"](function(b) {
                for (var c in a) if (a[c] !== b.get(c)) return ! 1;
                return ! 0
            })
        },
        findWhere: function(a) {
            return this.where(a, !0)
        },
        sort: function(a) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            return a || (a = {}),
            h.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(h.bind(this.comparator, this)),
            a.silent || this.trigger("sort", this, a),
            this
        },
        sortedIndex: function(a, b, c) {
            b || (b = this.comparator);
            var d = h.isFunction(b) ? b: function(a) {
                return a.get(b)
            };
            return h.sortedIndex(this.models, a, d, c)
        },
        pluck: function(a) {
            return h.invoke(this.models, "get", a)
        },
        fetch: function(a) {
            a = a ? h.clone(a) : {},
            void 0 === a.parse && (a.parse = !0);
            var b = a.success,
            c = this;
            return a.success = function(d) {
                var e = a.reset ? "reset": "set";
                c[e](d, a),
                b && b(c, d, a),
                c.trigger("sync", c, d, a)
            },
            L(this, a),
            this.sync("read", this, a)
        },
        create: function(a, b) {
            if (b = b ? h.clone(b) : {},
            !(a = this._prepareModel(a, b))) return ! 1;
            b.wait || this.add(a, b);
            var c = this,
            d = b.success;
            return b.success = function(e) {
                b.wait && c.add(a, b),
                d && d(a, e, b)
            },
            a.save(null, b),
            a
        },
        parse: function(a) {
            return a
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0,
            this.models = [],
            this._byId = {}
        },
        _prepareModel: function(a, b) {
            if (a instanceof n) return a.collection || (a.collection = this),
            a;
            b || (b = {}),
            b.collection = this;
            var c = new this.model(a, b);
            return c._validate(a, b) ? c: (this.trigger("invalid", this, a, b), !1)
        },
        _removeReference: function(a) {
            this === a.collection && delete a.collection,
            a.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(a, b, c, d) { ("add" !== a && "remove" !== a || c === this) && ("destroy" === a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], null != b.id && (this._byId[b.id] = b)), this.trigger.apply(this, arguments))
        }
    });
    var t = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    h.each(t,
    function(a) {
        q.prototype[a] = function() {
            var b = f.call(arguments);
            return b.unshift(this.models),
            h[a].apply(h, b)
        }
    });
    var u = ["groupBy", "countBy", "sortBy"];
    h.each(u,
    function(a) {
        q.prototype[a] = function(b, c) {
            var d = h.isFunction(b) ? b: function(a) {
                return a.get(b)
            };
            return h[a](this.models, d, c)
        }
    });
    var v = a.View = function(a) {
        this.cid = h.uniqueId("view"),
        this._configure(a || {}),
        this._ensureElement(),
        this.initialize.apply(this, arguments),
        this.delegateEvents()
    },
    w = /^(\S+)\s*(.*)$/,
    x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    h.extend(v.prototype, i, {
        tagName: "div",
        $: function(a) {
            return this.$el.find(a)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this.$el.remove(),
            this.stopListening(),
            this
        },
        setElement: function(b, c) {
            return this.$el && this.undelegateEvents(),
            this.$el = b instanceof a.$ ? b: a.$(b),
            this.el = this.$el[0],
            c !== !1 && this.delegateEvents(),
            this
        },
        delegateEvents: function(a) {
            if (!a && !(a = h.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var b in a) {
                var c = a[b];
                if (h.isFunction(c) || (c = this[a[b]]), c) {
                    var d = b.match(w),
                    e = d[1],
                    f = d[2];
                    c = h.bind(c, this),
                    e += ".delegateEvents" + this.cid,
                    "" === f ? this.$el.on(e, c) : this.$el.on(e, f, c)
                }
            }
            return this
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid),
            this
        },
        _configure: function(a) {
            this.options && (a = h.extend({},
            h.result(this, "options"), a)),
            h.extend(this, h.pick(a, x)),
            this.options = a
        },
        _ensureElement: function() {
            if (this.el) this.setElement(h.result(this, "el"), !1);
            else {
                var b = h.extend({},
                h.result(this, "attributes"));
                this.id && (b.id = h.result(this, "id")),
                this.className && (b["class"] = h.result(this, "className"));
                var c = a.$("<" + h.result(this, "tagName") + ">").attr(b);
                this.setElement(c, !1)
            }
        }
    }),
    a.sync = function(b, c, d) {
        var e = y[b];
        h.defaults(d || (d = {}), {
            emulateHTTP: a.emulateHTTP,
            emulateJSON: a.emulateJSON
        });
        var f = {
            type: e,
            dataType: "json"
        };
        if (d.url || (f.url = h.result(c, "url") || K()), null != d.data || !c || "create" !== b && "update" !== b && "patch" !== b || (f.contentType = "application/json", f.data = JSON.stringify(d.attrs || c.toJSON(d))), d.emulateJSON && (f.contentType = "application/x-www-form-urlencoded", f.data = f.data ? {
            model: f.data
        }: {}), d.emulateHTTP && ("PUT" === e || "DELETE" === e || "PATCH" === e)) {
            f.type = "POST",
            d.emulateJSON && (f.data._method = e);
            var g = d.beforeSend;
            d.beforeSend = function(a) {
                return a.setRequestHeader("X-HTTP-Method-Override", e),
                g ? g.apply(this, arguments) : void 0
            }
        }
        "GET" === f.type || d.emulateJSON || (f.processData = !1),
        "PATCH" !== f.type || !window.ActiveXObject || window.external && window.external.msActiveXFilteringEnabled || (f.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var i = d.xhr = a.ajax(h.extend(f, d));
        return c.trigger("request", c, i, d),
        i
    };
    var y = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    a.ajax = function() {
        return a.$.ajax.apply(a.$, arguments)
    };
    var z = a.Router = function(a) {
        a || (a = {}),
        a.routes && (this.routes = a.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments)
    },
    A = /\((.*?)\)/g,
    B = /(\(\?)?:\w+/g,
    C = /\*\w+/g,
    D = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    h.extend(z.prototype, i, {
        initialize: function() {},
        route: function(b, c, d) {
            h.isRegExp(b) || (b = this._routeToRegExp(b)),
            h.isFunction(c) && (d = c, c = ""),
            d || (d = this[c]);
            var e = this;
            return a.history.route(b,
            function(f) {
                var g = e._extractParameters(b, f);
                d && d.apply(e, g),
                e.trigger.apply(e, ["route:" + c].concat(g)),
                e.trigger("route", c, g),
                a.history.trigger("route", e, c, g)
            }),
            this
        },
        navigate: function(b, c) {
            return a.history.navigate(b, c),
            this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = h.result(this, "routes");
                for (var a, b = h.keys(this.routes); null != (a = b.pop());) this.route(a, this.routes[a])
            }
        },
        _routeToRegExp: function(a) {
            return a = a.replace(D, "\\$&").replace(A, "(?:$1)?").replace(B,
            function(a, b) {
                return b ? a: "([^/]+)"
            }).replace(C, "(.*?)"),
            new RegExp("^" + a + "$")
        },
        _extractParameters: function(a, b) {
            var c = a.exec(b).slice(1);
            return h.map(c,
            function(a) {
                return a ? decodeURIComponent(a) : null
            })
        }
    });
    var E = a.History = function() {
        this.handlers = [],
        h.bindAll(this, "checkUrl"),
        "undefined" != typeof window && (this.location = window.location, this.history = window.history)
    },
    F = /^[#\/]|\s+$/g,
    G = /^\/+|\/+$/g,
    H = /msie [\w.]+/,
    I = /\/$/;
    E.started = !1,
    h.extend(E.prototype, i, {
        interval: 50,
        getHash: function(a) {
            var b = (a || this).location.href.match(/#(.*)$/);
            return b ? b[1] : ""
        },
        getFragment: function(a, b) {
            if (null == a) if (this._hasPushState || !this._wantsHashChange || b) {
                a = this.location.pathname;
                var c = this.root.replace(I, "");
                a.indexOf(c) || (a = a.substr(c.length))
            } else a = this.getHash();
            return a.replace(F, "")
        },
        start: function(b) {
            if (E.started) throw new Error("Backbone.history has already been started");
            E.started = !0,
            this.options = h.extend({},
            {
                root: "/"
            },
            this.options, b),
            this.root = this.options.root,
            this._wantsHashChange = this.options.hashChange !== !1,
            this._wantsPushState = !!this.options.pushState,
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var c = this.getFragment(),
            d = document.documentMode,
            e = H.exec(navigator.userAgent.toLowerCase()) && (!d || 7 >= d);
            this.root = ("/" + this.root + "/").replace(G, "/"),
            e && this._wantsHashChange && (this.iframe = a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(c)),
            this._hasPushState ? a.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !e ? a.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
            this.fragment = c;
            var f = this.location,
            g = f.pathname.replace(/[^\/]$/, "$&/") === this.root;
            return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !g ? (this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && g && f.hash && (this.fragment = this.getHash().replace(F, ""), this.history.replaceState({},
            document.title, this.root + this.fragment + f.search)), this.options.silent ? void 0 : this.loadUrl())
        },
        stop: function() {
            a.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
            clearInterval(this._checkUrlInterval),
            E.started = !1
        },
        route: function(a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            })
        },
        checkUrl: function() {
            var a = this.getFragment();
            return a === this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe))),
            a === this.fragment ? !1 : (this.iframe && this.navigate(a), void(this.loadUrl() || this.loadUrl(this.getHash())))
        },
        loadUrl: function(a) {
            var b = this.fragment = this.getFragment(a),
            c = h.any(this.handlers,
            function(a) {
                return a.route.test(b) ? (a.callback(b), !0) : void 0
            });
            return c
        },
        navigate: function(a, b) {
            if (!E.started) return ! 1;
            if (b && b !== !0 || (b = {
                trigger: b
            }), a = this.getFragment(a || ""), this.fragment !== a) {
                this.fragment = a;
                var c = this.root + a;
                if (this._hasPushState) this.history[b.replace ? "replaceState": "pushState"]({},
                document.title, c);
                else {
                    if (!this._wantsHashChange) return this.location.assign(c);
                    this._updateHash(this.location, a, b.replace),
                    this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, a, b.replace))
                }
                b.trigger && this.loadUrl(a)
            }
        },
        _updateHash: function(a, b, c) {
            if (c) {
                var d = a.href.replace(/(javascript:|#).*$/, "");
                a.replace(d + "#" + b)
            } else a.hash = "#" + b
        }
    }),
    a.history = new E;
    var J = function(a, b) {
        var c, d = this;
        c = a && h.has(a, "constructor") ? a.constructor: function() {
            return d.apply(this, arguments)
        },
        h.extend(c, d, b);
        var e = function() {
            this.constructor = c
        };
        return e.prototype = d.prototype,
        c.prototype = new e,
        a && h.extend(c.prototype, a),
        c.__super__ = d.prototype,
        c
    };
    n.extend = q.extend = z.extend = v.extend = E.extend = J;
    var K = function() {
        throw new Error('A "url" property or function must be specified')
    },
    L = function(a, b) {
        var c = b.error;
        b.error = function(d) {
            c && c(a, d, b),
            a.trigger("error", a, d, b)
        }
    }
}.call(this),
"object" != typeof JSON && (JSON = {}),
function() {
    "use strict";
    function f(a) {
        return 10 > a ? "0" + a: a
    }
    function quote(a) {
        return escapable.lastIndex = 0,
        escapable.test(a) ? '"' + a.replace(escapable,
        function(a) {
            var b = meta[a];
            return "string" == typeof b ? b: "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"': '"' + a + '"'
    }
    function str(a, b) {
        var c, d, e, f, g, h = gap,
        i = b[a];
        switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
        case "string":
            return quote(i);
        case "number":
            return isFinite(i) ? String(i) : "null";
        case "boolean":
        case "null":
            return String(i);
        case "object":
            if (!i) return "null";
            if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                for (f = i.length, c = 0; f > c; c += 1) g[c] = str(c, i) || "null";
                return e = 0 === g.length ? "[]": gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]": "[" + g.join(",") + "]",
                gap = h,
                e
            }
            if (rep && "object" == typeof rep) for (f = rep.length, c = 0; f > c; c += 1)"string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && g.push(quote(d) + (gap ? ": ": ":") + e));
            else for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": ": ":") + e));
            return e = 0 === g.length ? "{}": gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}": "{" + g.join(",") + "}",
            gap = h,
            e
        }
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z": null
    },
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap, indent, meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    },
    rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
        var d;
        if (gap = "", indent = "", "number" == typeof c) for (d = 0; c > d; d += 1) indent += " ";
        else "string" == typeof c && (indent = c);
        if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error("JSON.stringify");
        return str("", {
            "": a
        })
    }),
    "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        function walk(a, b) {
            var c, d, e = a[b];
            if (e && "object" == typeof e) for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d: delete e[c]);
            return reviver.call(a, b, e)
        }
        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx,
        function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"),
        "function" == typeof reviver ? walk({
            "": j
        },
        "") : j;
        throw new SyntaxError("JSON.parse")
    })
} (),
Backbone.Wreqr = function(a, b, c) {
    "use strict";
    var d = {};
    return d.Handlers = function(a, b) {
        var c = function(a) {
            this.options = a,
            this._wreqrHandlers = {},
            b.isFunction(this.initialize) && this.initialize(a)
        };
        return c.extend = a.Model.extend,
        b.extend(c.prototype, a.Events, {
            setHandlers: function(a) {
                b.each(a,
                function(a, c) {
                    var d = null;
                    b.isObject(a) && !b.isFunction(a) && (d = a.context, a = a.callback),
                    this.setHandler(c, a, d)
                },
                this)
            },
            setHandler: function(a, b, c) {
                var d = {
                    callback: b,
                    context: c
                };
                this._wreqrHandlers[a] = d,
                this.trigger("handler:add", a, b, c)
            },
            hasHandler: function(a) {
                return !! this._wreqrHandlers[a]
            },
            getHandler: function(a) {
                var b = this._wreqrHandlers[a];
                if (!b) throw new Error("Handler not found for '" + a + "'");
                return function() {
                    var a = Array.prototype.slice.apply(arguments);
                    return b.callback.apply(b.context, a)
                }
            },
            removeHandler: function(a) {
                delete this._wreqrHandlers[a]
            },
            removeAllHandlers: function() {
                this._wreqrHandlers = {}
            }
        }),
        c
    } (a, c),
    d.CommandStorage = function() {
        var b = function(a) {
            this.options = a,
            this._commands = {},
            c.isFunction(this.initialize) && this.initialize(a)
        };
        return c.extend(b.prototype, a.Events, {
            getCommands: function(a) {
                var b = this._commands[a];
                return b || (b = {
                    command: a,
                    instances: []
                },
                this._commands[a] = b),
                b
            },
            addCommand: function(a, b) {
                var c = this.getCommands(a);
                c.instances.push(b)
            },
            clearCommands: function(a) {
                var b = this.getCommands(a);
                b.instances = []
            }
        }),
        b
    } (),
    d.Commands = function(a) {
        return a.Handlers.extend({
            storageType: a.CommandStorage,
            constructor: function(b) {
                this.options = b || {},
                this._initializeStorage(this.options),
                this.on("handler:add", this._executeCommands, this);
                var c = Array.prototype.slice.call(arguments);
                a.Handlers.prototype.constructor.apply(this, c)
            },
            execute: function(a, b) {
                a = arguments[0],
                b = Array.prototype.slice.call(arguments, 1),
                this.hasHandler(a) ? this.getHandler(a).apply(this, b) : this.storage.addCommand(a, b)
            },
            _executeCommands: function(a, b, d) {
                var e = this.storage.getCommands(a);
                c.each(e.instances,
                function(a) {
                    b.apply(d, a)
                }),
                this.storage.clearCommands(a)
            },
            _initializeStorage: function(a) {
                var b, d = a.storageType || this.storageType;
                b = c.isFunction(d) ? new d: d,
                this.storage = b
            }
        })
    } (d),
    d.RequestResponse = function(a) {
        return a.Handlers.extend({
            request: function() {
                var a = arguments[0],
                b = Array.prototype.slice.call(arguments, 1);
                return this.getHandler(a).apply(this, b)
            }
        })
    } (d),
    d.EventAggregator = function(a, b) {
        var c = function() {};
        return c.extend = a.Model.extend,
        b.extend(c.prototype, a.Events),
        c
    } (a, c),
    d
} (Backbone, Backbone.Marionette, _),
Backbone.ChildViewContainer = function(a, b) {
    var c = function(a) {
        this._views = {},
        this._indexByModel = {},
        this._indexByCustom = {},
        this._updateLength(),
        b.each(a, this.add, this)
    };
    b.extend(c.prototype, {
        add: function(a, b) {
            var c = a.cid;
            this._views[c] = a,
            a.model && (this._indexByModel[a.model.cid] = c),
            b && (this._indexByCustom[b] = c),
            this._updateLength()
        },
        findByModel: function(a) {
            return this.findByModelCid(a.cid)
        },
        findByModelCid: function(a) {
            var b = this._indexByModel[a];
            return this.findByCid(b)
        },
        findByCustom: function(a) {
            var b = this._indexByCustom[a];
            return this.findByCid(b)
        },
        findByIndex: function(a) {
            return b.values(this._views)[a]
        },
        findByCid: function(a) {
            return this._views[a]
        },
        remove: function(a) {
            var c = a.cid;
            a.model && delete this._indexByModel[a.model.cid],
            b.any(this._indexByCustom,
            function(a, b) {
                return a === c ? (delete this._indexByCustom[b], !0) : void 0
            },
            this),
            delete this._views[c],
            this._updateLength()
        },
        call: function(a) {
            this.apply(a, b.tail(arguments))
        },
        apply: function(a, c) {
            b.each(this._views,
            function(d) {
                b.isFunction(d[a]) && d[a].apply(d, c || [])
            })
        },
        _updateLength: function() {
            this.length = b.size(this._views)
        }
    });
    var d = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
    return b.each(d,
    function(a) {
        c.prototype[a] = function() {
            var c = b.values(this._views),
            d = [c].concat(b.toArray(arguments));
            return b[a].apply(b, d)
        }
    }),
    c
} (Backbone, _);
var Marionette = function(a, b, c) {
    "use strict";
    function d(a) {
        return g.call(a)
    }
    function e(a, b) {
        var c = Error(a);
        throw c.name = b || "Error",
        c
    }
    var f = {};
    b.Marionette = f,
    f.$ = b.$;
    var g = Array.prototype.slice;
    return f.extend = b.Model.extend,
    f.getOption = function(a, b) {
        if (a && b) {
            var c;
            return c = a.options && b in a.options && void 0 !== a.options[b] ? a.options[b] : a[b]
        }
    },
    f.triggerMethod = function() {
        function a(a, b, c) {
            return c.toUpperCase()
        }
        var b = /(^|:)(\w)/gi,
        d = function(d) {
            var e = "on" + d.replace(b, a),
            f = this[e];
            return c.isFunction(this.trigger) && this.trigger.apply(this, arguments),
            c.isFunction(f) ? f.apply(this, c.tail(arguments)) : void 0
        };
        return d
    } (),
    f.MonitorDOMRefresh = function() {
        function a(a) {
            a._isShown = !0,
            d(a)
        }
        function b(a) {
            a._isRendered = !0,
            d(a)
        }
        function d(a) {
            a._isShown && a._isRendered && c.isFunction(a.triggerMethod) && a.triggerMethod("dom:refresh")
        }
        return function(c) {
            c.listenTo(c, "show",
            function() {
                a(c)
            }),
            c.listenTo(c, "render",
            function() {
                b(c)
            })
        }
    } (),
    function(a) {
        function b(a, b, d, f) {
            var g = f.split(/\s+/);
            c.each(g,
            function(c) {
                var f = a[c];
                f || e("Method '" + c + "' was configured as an event handler, but does not exist."),
                a.listenTo(b, d, f, a)
            })
        }
        function d(a, b, c, d) {
            a.listenTo(b, c, d, a)
        }
        function f(a, b, d, e) {
            var f = e.split(/\s+/);
            c.each(f,
            function(c) {
                var e = a[c];
                a.stopListening(b, d, e, a)
            })
        }
        function g(a, b, c, d) {
            a.stopListening(b, c, d, a)
        }
        function h(a, b, d, e, f) {
            b && d && (c.isFunction(d) && (d = d.call(a)), c.each(d,
            function(d, g) {
                c.isFunction(d) ? e(a, b, g, d) : f(a, b, g, d)
            }))
        }
        a.bindEntityEvents = function(a, c, e) {
            h(a, c, e, d, b)
        },
        a.unbindEntityEvents = function(a, b, c) {
            h(a, b, c, g, f)
        }
    } (f),
    f.Callbacks = function() {
        this._deferred = f.$.Deferred(),
        this._callbacks = []
    },
    c.extend(f.Callbacks.prototype, {
        add: function(a, b) {
            this._callbacks.push({
                cb: a,
                ctx: b
            }),
            this._deferred.done(function(c, d) {
                b && (c = b),
                a.call(c, d)
            })
        },
        run: function(a, b) {
            this._deferred.resolve(b, a)
        },
        reset: function() {
            var a = this._callbacks;
            this._deferred = f.$.Deferred(),
            this._callbacks = [],
            c.each(a,
            function(a) {
                this.add(a.cb, a.ctx)
            },
            this)
        }
    }),
    f.Controller = function(a) {
        this.triggerMethod = f.triggerMethod,
        this.options = a || {},
        c.isFunction(this.initialize) && this.initialize(this.options)
    },
    f.Controller.extend = f.extend,
    c.extend(f.Controller.prototype, b.Events, {
        close: function() {
            this.stopListening(),
            this.triggerMethod("close"),
            this.unbind()
        }
    }),
    f.Region = function(a) {
        if (this.options = a || {},
        this.el = f.getOption(this, "el"), !this.el) {
            var b = Error("An 'el' must be specified for a region.");
            throw b.name = "NoElError",
            b
        }
        if (this.initialize) {
            var c = Array.prototype.slice.apply(arguments);
            this.initialize.apply(this, c)
        }
    },
    c.extend(f.Region, {
        buildRegion: function(a, b) {
            var d = "string" == typeof a,
            e = "string" == typeof a.selector,
            f = void 0 === a.regionType,
            g = "function" == typeof a;
            if (!g && !d && !e) throw Error("Region must be specified as a Region type, a selector string or an object with selector property");
            var h, i;
            d && (h = a),
            a.selector && (h = a.selector),
            g && (i = a),
            !g && f && (i = b),
            a.regionType && (i = a.regionType);
            var j = new i({
                el: h
            });
            return a.parentEl && (j.getEl = function(b) {
                var d = a.parentEl;
                return c.isFunction(d) && (d = d()),
                d.find(b)
            }),
            j
        }
    }),
    c.extend(f.Region.prototype, b.Events, {
        show: function(a) {
            this.ensureEl();
            var b = a.isClosed || c.isUndefined(a.$el),
            d = a !== this.currentView;
            d && this.close(),
            a.render(),
            (d || b) && this.open(a),
            this.currentView = a,
            f.triggerMethod.call(this, "show", a),
            f.triggerMethod.call(a, "show")
        },
        ensureEl: function() {
            this.$el && 0 !== this.$el.length || (this.$el = this.getEl(this.el))
        },
        getEl: function(a) {
            return f.$(a)
        },
        open: function(a) {
            this.$el.empty().append(a.el)
        },
        close: function() {
            var a = this.currentView;
            a && !a.isClosed && (a.close ? a.close() : a.remove && a.remove(), f.triggerMethod.call(this, "close"), delete this.currentView)
        },
        attachView: function(a) {
            this.currentView = a
        },
        reset: function() {
            this.close(),
            delete this.$el
        }
    }),
    f.Region.extend = f.extend,
    f.RegionManager = function(a) {
        var b = a.Controller.extend({
            constructor: function(b) {
                this._regions = {},
                a.Controller.prototype.constructor.call(this, b)
            },
            addRegions: function(a, b) {
                var d = {};
                return c.each(a,
                function(a, e) {
                    "string" == typeof a && (a = {
                        selector: a
                    }),
                    a.selector && (a = c.defaults({},
                    a, b));
                    var f = this.addRegion(e, a);
                    d[e] = f
                },
                this),
                d
            },
            addRegion: function(b, d) {
                var e, f = c.isObject(d),
                g = c.isString(d),
                h = !!d.selector;
                return e = g || f && h ? a.Region.buildRegion(d, a.Region) : c.isFunction(d) ? a.Region.buildRegion(d, a.Region) : d,
                this._store(b, e),
                this.triggerMethod("region:add", b, e),
                e
            },
            get: function(a) {
                return this._regions[a]
            },
            removeRegion: function(a) {
                var b = this._regions[a];
                this._remove(a, b)
            },
            removeRegions: function() {
                c.each(this._regions,
                function(a, b) {
                    this._remove(b, a)
                },
                this)
            },
            closeRegions: function() {
                c.each(this._regions,
                function(a) {
                    a.close()
                },
                this)
            },
            close: function() {
                this.removeRegions();
                var b = Array.prototype.slice.call(arguments);
                a.Controller.prototype.close.apply(this, b)
            },
            _store: function(a, b) {
                this._regions[a] = b,
                this._setLength()
            },
            _remove: function(a, b) {
                b.close(),
                delete this._regions[a],
                this._setLength(),
                this.triggerMethod("region:remove", a, b)
            },
            _setLength: function() {
                this.length = c.size(this._regions)
            }
        }),
        d = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
        return c.each(d,
        function(a) {
            b.prototype[a] = function() {
                var b = c.values(this._regions),
                d = [b].concat(c.toArray(arguments));
                return c[a].apply(c, d)
            }
        }),
        b
    } (f),
    f.TemplateCache = function(a) {
        this.templateId = a
    },
    c.extend(f.TemplateCache, {
        templateCaches: {},
        get: function(a) {
            var b = this.templateCaches[a];
            return b || (b = new f.TemplateCache(a), this.templateCaches[a] = b),
            b.load()
        },
        clear: function() {
            var a, b = d(arguments),
            c = b.length;
            if (c > 0) for (a = 0; c > a; a++) delete this.templateCaches[b[a]];
            else this.templateCaches = {}
        }
    }),
    c.extend(f.TemplateCache.prototype, {
        load: function() {
            if (this.compiledTemplate) return this.compiledTemplate;
            var a = this.loadTemplate(this.templateId);
            return this.compiledTemplate = this.compileTemplate(a),
            this.compiledTemplate
        },
        loadTemplate: function(a) {
            var b = f.$(a).html();
            return b && 0 !== b.length || e("Could not find template: '" + a + "'", "NoTemplateError"),
            b
        },
        compileTemplate: function(a) {
            return c.template(a)
        }
    }),
    f.Renderer = {
        render: function(a, b) {
            if (!a) {
                var c = Error("Cannot render the template since it's false, null or undefined.");
                throw c.name = "TemplateNotFoundError",
                c
            }
            var d;
            return (d = "function" == typeof a ? a: f.TemplateCache.get(a))(b)
        }
    },
    f.View = b.View.extend({
        constructor: function() {
            c.bindAll(this, "render");
            var a = Array.prototype.slice.apply(arguments);
            b.View.prototype.constructor.apply(this, a),
            f.MonitorDOMRefresh(this),
            this.listenTo(this, "show", this.onShowCalled, this)
        },
        triggerMethod: f.triggerMethod,
        getTemplate: function() {
            return f.getOption(this, "template")
        },
        mixinTemplateHelpers: function(a) {
            a = a || {};
            var b = f.getOption(this, "templateHelpers");
            return c.isFunction(b) && (b = b.call(this)),
            c.extend(a, b)
        },
        configureTriggers: function() {
            if (this.triggers) {
                var a = {},
                b = c.result(this, "triggers");
                return c.each(b,
                function(b, c) {
                    a[c] = function(a) {
                        a && a.preventDefault && a.preventDefault(),
                        a && a.stopPropagation && a.stopPropagation();
                        var c = {
                            view: this,
                            model: this.model,
                            collection: this.collection
                        };
                        this.triggerMethod(b, c)
                    }
                },
                this),
                a
            }
        },
        delegateEvents: function(a) {
            this._delegateDOMEvents(a),
            f.bindEntityEvents(this, this.model, f.getOption(this, "modelEvents")),
            f.bindEntityEvents(this, this.collection, f.getOption(this, "collectionEvents"))
        },
        _delegateDOMEvents: function(a) {
            a = a || this.events,
            c.isFunction(a) && (a = a.call(this));
            var d = {},
            e = this.configureTriggers();
            c.extend(d, a, e),
            b.View.prototype.delegateEvents.call(this, d)
        },
        undelegateEvents: function() {
            var a = Array.prototype.slice.call(arguments);
            b.View.prototype.undelegateEvents.apply(this, a),
            f.unbindEntityEvents(this, this.model, f.getOption(this, "modelEvents")),
            f.unbindEntityEvents(this, this.collection, f.getOption(this, "collectionEvents"))
        },
        onShowCalled: function() {},
        close: function() {
            if (!this.isClosed) {
                var a = this.triggerMethod("before:close");
                a !== !1 && (this.isClosed = !0, this.triggerMethod("close"), this.unbindUIElements(), this.remove())
            }
        },
        bindUIElements: function() {
            if (this.ui) {
                this._uiBindings || (this._uiBindings = this.ui);
                var a = c.result(this, "_uiBindings");
                this.ui = {},
                c.each(c.keys(a),
                function(b) {
                    var c = a[b];
                    this.ui[b] = this.$(c)
                },
                this)
            }
        },
        unbindUIElements: function() {
            this.ui && this._uiBindings && (c.each(this.ui,
            function(a, b) {
                delete this.ui[b]
            },
            this), this.ui = this._uiBindings, delete this._uiBindings)
        }
    }),
    f.ItemView = f.View.extend({
        constructor: function() {
            f.View.prototype.constructor.apply(this, d(arguments))
        },
        serializeData: function() {
            var a = {};
            return this.model ? a = this.model.toJSON() : this.collection && (a = {
                items: this.collection.toJSON()
            }),
            a
        },
        render: function() {
            this.isClosed = !1,
            this.triggerMethod("before:render", this),
            this.triggerMethod("item:before:render", this);
            var a = this.serializeData();
            a = this.mixinTemplateHelpers(a);
            var b = this.getTemplate(),
            c = f.Renderer.render(b, a);
            return this.$el.html(c),
            this.bindUIElements(),
            this.triggerMethod("render", this),
            this.triggerMethod("item:rendered", this),
            this
        },
        close: function() {
            this.isClosed || (this.triggerMethod("item:before:close"), f.View.prototype.close.apply(this, d(arguments)), this.triggerMethod("item:closed"))
        }
    }),
    f.CollectionView = f.View.extend({
        itemViewEventPrefix: "itemview",
        constructor: function() {
            this._initChildViewStorage(),
            f.View.prototype.constructor.apply(this, d(arguments)),
            this._initialEvents()
        },
        _initialEvents: function() {
            this.collection && (this.listenTo(this.collection, "add", this.addChildView, this), this.listenTo(this.collection, "remove", this.removeItemView, this), this.listenTo(this.collection, "reset", this.render, this))
        },
        addChildView: function(a) {
            this.closeEmptyView();
            var b = this.getItemView(a),
            c = this.collection.indexOf(a);
            this.addItemView(a, b, c)
        },
        onShowCalled: function() {
            this.children.each(function(a) {
                f.triggerMethod.call(a, "show")
            })
        },
        triggerBeforeRender: function() {
            this.triggerMethod("before:render", this),
            this.triggerMethod("collection:before:render", this)
        },
        triggerRendered: function() {
            this.triggerMethod("render", this),
            this.triggerMethod("collection:rendered", this)
        },
        render: function() {
            return this.isClosed = !1,
            this.triggerBeforeRender(),
            this._renderChildren(),
            this.triggerRendered(),
            this
        },
        _renderChildren: function() {
            this.closeEmptyView(),
            this.closeChildren(),
            this.collection && this.collection.length > 0 ? this.showCollection() : this.showEmptyView()
        },
        showCollection: function() {
            var a;
            this.collection.each(function(b, c) {
                a = this.getItemView(b),
                this.addItemView(b, a, c)
            },
            this)
        },
        showEmptyView: function() {
            var a = f.getOption(this, "emptyView");
            if (a && !this._showingEmptyView) {
                this._showingEmptyView = !0;
                var c = new b.Model;
                this.addItemView(c, a, 0)
            }
        },
        closeEmptyView: function() {
            this._showingEmptyView && (this.closeChildren(), delete this._showingEmptyView)
        },
        getItemView: function() {
            var a = f.getOption(this, "itemView");
            return a || e("An `itemView` must be specified", "NoItemViewError"),
            a
        },
        addItemView: function(a, b, d) {
            var e = f.getOption(this, "itemViewOptions");
            c.isFunction(e) && (e = e.call(this, a, d));
            var g = this.buildItemView(a, b, e);
            this.addChildViewEventForwarding(g),
            this.triggerMethod("before:item:added", g),
            this.children.add(g),
            this.renderItemView(g, d),
            this._isShown && f.triggerMethod.call(g, "show"),
            this.triggerMethod("after:item:added", g)
        },
        addChildViewEventForwarding: function(a) {
            var b = f.getOption(this, "itemViewEventPrefix");
            this.listenTo(a, "all",
            function() {
                var c = d(arguments);
                c[0] = b + ":" + c[0],
                c.splice(1, 0, a),
                f.triggerMethod.apply(this, c)
            },
            this)
        },
        renderItemView: function(a, b) {
            a.render(),
            this.appendHtml(this, a, b)
        },
        buildItemView: function(a, b, d) {
            var e = c.extend({
                model: a
            },
            d);
            return new b(e)
        },
        removeItemView: function(a) {
            var b = this.children.findByModel(a);
            this.removeChildView(b),
            this.checkEmpty()
        },
        removeChildView: function(a) {
            a && (this.stopListening(a), a.close ? a.close() : a.remove && a.remove(), this.children.remove(a)),
            this.triggerMethod("item:removed", a)
        },
        checkEmpty: function() {
            this.collection && 0 !== this.collection.length || this.showEmptyView()
        },
        appendHtml: function(a, b) {
            a.$el.append(b.el)
        },
        _initChildViewStorage: function() {
            this.children = new b.ChildViewContainer
        },
        close: function() {
            this.isClosed || (this.triggerMethod("collection:before:close"), this.closeChildren(), this.triggerMethod("collection:closed"), f.View.prototype.close.apply(this, d(arguments)))
        },
        closeChildren: function() {
            this.children.each(function(a) {
                this.removeChildView(a)
            },
            this),
            this.checkEmpty()
        }
    }),
    f.CompositeView = f.CollectionView.extend({
        constructor: function() {
            f.CollectionView.prototype.constructor.apply(this, d(arguments))
        },
        _initialEvents: function() {
            this.collection && (this.listenTo(this.collection, "add", this.addChildView, this), this.listenTo(this.collection, "remove", this.removeItemView, this), this.listenTo(this.collection, "reset", this._renderChildren, this))
        },
        getItemView: function() {
            var a = f.getOption(this, "itemView") || this.constructor;
            return a || e("An `itemView` must be specified", "NoItemViewError"),
            a
        },
        serializeData: function() {
            var a = {};
            return this.model && (a = this.model.toJSON()),
            a
        },
        render: function() {
            this.isRendered = !0,
            this.isClosed = !1,
            this.resetItemViewContainer(),
            this.triggerBeforeRender();
            var a = this.renderModel();
            return this.$el.html(a),
            this.bindUIElements(),
            this.triggerMethod("composite:model:rendered"),
            this._renderChildren(),
            this.triggerMethod("composite:rendered"),
            this.triggerRendered(),
            this
        },
        _renderChildren: function() {
            this.isRendered && (f.CollectionView.prototype._renderChildren.call(this), this.triggerMethod("composite:collection:rendered"))
        },
        renderModel: function() {
            var a = {};
            a = this.serializeData(),
            a = this.mixinTemplateHelpers(a);
            var b = this.getTemplate();
            return f.Renderer.render(b, a)
        },
        appendHtml: function(a, b) {
            var c = this.getItemViewContainer(a);
            c.append(b.el)
        },
        getItemViewContainer: function(a) {
            if ("$itemViewContainer" in a) return a.$itemViewContainer;
            var b, d = f.getOption(a, "itemViewContainer");
            if (d) {
                var g = c.isFunction(d) ? d() : d;
                b = a.$(g),
                0 >= b.length && e("The specified `itemViewContainer` was not found: " + a.itemViewContainer, "ItemViewContainerMissingError")
            } else b = a.$el;
            return a.$itemViewContainer = b,
            b
        },
        resetItemViewContainer: function() {
            this.$itemViewContainer && delete this.$itemViewContainer
        }
    }),
    f.Layout = f.ItemView.extend({
        regionType: f.Region,
        constructor: function(a) {
            a = a || {},
            this._firstRender = !0,
            this._initializeRegions(a),
            f.ItemView.prototype.constructor.call(this, a)
        },
        render: function() {
            this.isClosed && this._initializeRegions(),
            this._firstRender ? this._firstRender = !1 : this.isClosed || this._reInitializeRegions();
            var a = Array.prototype.slice.apply(arguments),
            b = f.ItemView.prototype.render.apply(this, a);
            return b
        },
        close: function() {
            if (!this.isClosed) {
                this.regionManager.close();
                var a = Array.prototype.slice.apply(arguments);
                f.ItemView.prototype.close.apply(this, a)
            }
        },
        addRegion: function(a, b) {
            var c = {};
            return c[a] = b,
            this._buildRegions(c)[a]
        },
        addRegions: function(a) {
            return this.regions = c.extend({},
            this.regions, a),
            this._buildRegions(a)
        },
        removeRegion: function(a) {
            return delete this.regions[a],
            this.regionManager.removeRegion(a)
        },
        _buildRegions: function(a) {
            var b = this,
            c = {
                regionType: f.getOption(this, "regionType"),
                parentEl: function() {
                    return b.$el
                }
            };
            return this.regionManager.addRegions(a, c)
        },
        _initializeRegions: function(a) {
            var b;
            this._initRegionManager(),
            b = c.isFunction(this.regions) ? this.regions(a) : this.regions || {},
            this.addRegions(b)
        },
        _reInitializeRegions: function() {
            this.regionManager.closeRegions(),
            this.regionManager.each(function(a) {
                a.reset()
            })
        },
        _initRegionManager: function() {
            this.regionManager = new f.RegionManager,
            this.listenTo(this.regionManager, "region:add",
            function(a, b) {
                this[a] = b,
                this.trigger("region:add", a, b)
            }),
            this.listenTo(this.regionManager, "region:remove",
            function(a, b) {
                delete this[a],
                this.trigger("region:remove", a, b)
            })
        }
    }),
    f.AppRouter = b.Router.extend({
        constructor: function(a) {
            b.Router.prototype.constructor.apply(this, d(arguments)),
            this.options = a || {};
            var c = f.getOption(this, "appRoutes"),
            e = this._getController();
            this.processAppRoutes(e, c)
        },
        appRoute: function(a, b) {
            var c = this._getController();
            this._addAppRoute(c, a, b)
        },
        processAppRoutes: function(a, b) {
            if (b) {
                var d = c.keys(b).reverse();
                c.each(d,
                function(c) {
                    this._addAppRoute(a, c, b[c])
                },
                this)
            }
        },
        _getController: function() {
            return f.getOption(this, "controller")
        },
        _addAppRoute: function(a, b, d) {
            var e = a[d];
            if (!e) throw Error("Method '" + d + "' was not found on the controller");
            this.route(b, d, c.bind(e, a))
        }
    }),
    f.Application = function(a) {
        this._initRegionManager(),
        this._initCallbacks = new f.Callbacks,
        this.vent = new b.Wreqr.EventAggregator,
        this.commands = new b.Wreqr.Commands,
        this.reqres = new b.Wreqr.RequestResponse,
        this.submodules = {},
        c.extend(this, a),
        this.triggerMethod = f.triggerMethod
    },
    c.extend(f.Application.prototype, b.Events, {
        execute: function() {
            var a = Array.prototype.slice.apply(arguments);
            this.commands.execute.apply(this.commands, a)
        },
        request: function() {
            var a = Array.prototype.slice.apply(arguments);
            return this.reqres.request.apply(this.reqres, a)
        },
        addInitializer: function(a) {
            this._initCallbacks.add(a)
        },
        start: function(a) {
            this.triggerMethod("initialize:before", a),
            this._initCallbacks.run(a, this),
            this.triggerMethod("initialize:after", a),
            this.triggerMethod("start", a)
        },
        addRegions: function(a) {
            return this._regionManager.addRegions(a)
        },
        closeRegions: function() {
            this._regionManager.closeRegions()
        },
        removeRegion: function(a) {
            this._regionManager.removeRegion(a)
        },
        getRegion: function(a) {
            return this._regionManager.get(a)
        },
        module: function() {
            var a = d(arguments);
            return a.unshift(this),
            f.Module.create.apply(f.Module, a)
        },
        _initRegionManager: function() {
            this._regionManager = new f.RegionManager,
            this.listenTo(this._regionManager, "region:add",
            function(a, b) {
                this[a] = b
            }),
            this.listenTo(this._regionManager, "region:remove",
            function(a) {
                delete this[a]
            })
        }
    }),
    f.Application.extend = f.extend,
    f.Module = function(a, b) {
        this.moduleName = a,
        this.submodules = {},
        this._setupInitializersAndFinalizers(),
        this.app = b,
        this.startWithParent = !0,
        this.triggerMethod = f.triggerMethod
    },
    c.extend(f.Module.prototype, b.Events, {
        addInitializer: function(a) {
            this._initializerCallbacks.add(a)
        },
        addFinalizer: function(a) {
            this._finalizerCallbacks.add(a)
        },
        start: function(a) {
            this._isInitialized || (c.each(this.submodules,
            function(b) {
                b.startWithParent && b.start(a)
            }), this.triggerMethod("before:start", a), this._initializerCallbacks.run(a, this), this._isInitialized = !0, this.triggerMethod("start", a))
        },
        stop: function() {
            this._isInitialized && (this._isInitialized = !1, f.triggerMethod.call(this, "before:stop"), c.each(this.submodules,
            function(a) {
                a.stop()
            }), this._finalizerCallbacks.run(void 0, this), this._initializerCallbacks.reset(), this._finalizerCallbacks.reset(), f.triggerMethod.call(this, "stop"))
        },
        addDefinition: function(a, b) {
            this._runModuleDefinition(a, b)
        },
        _runModuleDefinition: function(a, d) {
            if (a) {
                var e = c.flatten([this, this.app, b, f, f.$, c, d]);
                a.apply(this, e)
            }
        },
        _setupInitializersAndFinalizers: function() {
            this._initializerCallbacks = new f.Callbacks,
            this._finalizerCallbacks = new f.Callbacks
        }
    }),
    c.extend(f.Module, {
        create: function(a, b, e) {
            var f = a,
            g = d(arguments);
            g.splice(0, 3),
            b = b.split(".");
            var h = b.length,
            i = [];
            return i[h - 1] = e,
            c.each(b,
            function(b, c) {
                var d = f;
                f = this._getModule(d, b, a),
                this._addModuleDefinition(d, f, i[c], g)
            },
            this),
            f
        },
        _getModule: function(a, b, c) {
            var d = a[b];
            return d || (d = new f.Module(b, c), a[b] = d, a.submodules[b] = d),
            d
        },
        _addModuleDefinition: function(a, b, d, e) {
            var f, g;
            c.isFunction(d) ? (f = d, g = !0) : c.isObject(d) ? (f = d.define, g = d.startWithParent) : g = !0,
            f && b.addDefinition(f, e),
            b.startWithParent = b.startWithParent && g,
            b.startWithParent && !b.startWithParentIsConfigured && (b.startWithParentIsConfigured = !0, a.addInitializer(function(a) {
                b.startWithParent && b.start(a)
            }))
        }
    }),
    f
} (this, Backbone, _); !
function(a, b) {
    if ("object" == typeof exports && exports) b(exports);
    else {
        var c = {};
        b(c),
        "function" == typeof define && define.amd ? define(c) : a.Mustache = c
    }
} (this,
function(a) {
    function b(a, b) {
        return t.call(a, b)
    }
    function c(a) {
        return ! b(p, a)
    }
    function d(a) {
        return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }
    function e(a) {
        return String(a).replace(/[&<>"'\/]/g,
        function(a) {
            return w[a]
        })
    }
    function f(a) {
        this.string = a,
        this.tail = a,
        this.pos = 0
    }
    function g(a, b) {
        this.view = a || {},
        this.parent = b,
        this._cache = {}
    }
    function h() {
        this.clearCache()
    }
    function i(b, c, d, e) {
        for (var f, g, h, j = "",
        k = 0,
        l = b.length; l > k; ++k) switch (f = b[k], g = f[1], f[0]) {
        case "#":
            if (h = d.lookup(g), "object" == typeof h) if (v(h)) for (var m = 0,
            n = h.length; n > m; ++m) j += i(f[4], c, d.push(h[m]), e);
            else h && (j += i(f[4], c, d.push(h), e));
            else if ("function" == typeof h) {
                var o = null == e ? null: e.slice(f[3], f[5]);
                h = h.call(d.view, o,
                function(a) {
                    return c.render(a, d)
                }),
                null != h && (j += h)
            } else h && (j += i(f[4], c, d, e));
            break;
        case "^":
            h = d.lookup(g),
            (!h || v(h) && 0 === h.length) && (j += i(f[4], c, d, e));
            break;
        case ">":
            h = c.getPartial(g),
            "function" == typeof h && (j += h(d));
            break;
        case "&":
            h = d.lookup(g),
            null != h && (j += h);
            break;
        case "name":
            h = d.lookup(g),
            null != h && (j += a.escape(h));
            break;
        case "text":
            j += g
        }
        return j
    }
    function j(a) {
        for (var b, c = [], d = c, e = [], f = 0, g = a.length; g > f; ++f) switch (b = a[f], b[0]) {
        case "#":
        case "^":
            e.push(b),
            d.push(b),
            d = b[4] = [];
            break;
        case "/":
            var h = e.pop();
            h[5] = b[2],
            d = e.length > 0 ? e[e.length - 1][4] : c;
            break;
        default:
            d.push(b)
        }
        return c
    }
    function k(a) {
        for (var b, c, d = [], e = 0, f = a.length; f > e; ++e) b = a[e],
        b && ("text" === b[0] && c && "text" === c[0] ? (c[1] += b[1], c[3] = b[3]) : (c = b, d.push(b)));
        return d
    }
    function l(a) {
        return [new RegExp(d(a[0]) + "\\s*"), new RegExp("\\s*" + d(a[1]))]
    }
    function m(b, e) {
        function g() {
            if (z && !A) for (; y.length;) delete x[y.pop()];
            else y = [];
            z = !1,
            A = !1
        }
        if (b = b || "", e = e || a.tags, "string" == typeof e && (e = e.split(o)), 2 !== e.length) throw new Error("Invalid tags: " + e.join(", "));
        for (var h, i, m, p, t, u = l(e), v = new f(b), w = [], x = [], y = [], z = !1, A = !1; ! v.eos();) {
            if (h = v.pos, m = v.scanUntil(u[0])) for (var B = 0,
            C = m.length; C > B; ++B) p = m.charAt(B),
            c(p) ? y.push(x.length) : A = !0,
            x.push(["text", p, h, h + 1]),
            h += 1,
            "\n" == p && g();
            if (!v.scan(u[0])) break;
            if (z = !0, i = v.scan(s) || "name", v.scan(n), "=" === i ? (m = v.scanUntil(q), v.scan(q), v.scanUntil(u[1])) : "{" === i ? (m = v.scanUntil(new RegExp("\\s*" + d("}" + e[1]))), v.scan(r), v.scanUntil(u[1]), i = "&") : m = v.scanUntil(u[1]), !v.scan(u[1])) throw new Error("Unclosed tag at " + v.pos);
            if (t = [i, m, h, v.pos], x.push(t), "#" === i || "^" === i) w.push(t);
            else if ("/" === i) {
                if (0 === w.length) throw new Error('Unopened section "' + m + '" at ' + h);
                var D = w.pop();
                if (D[1] !== m) throw new Error('Unclosed section "' + D[1] + '" at ' + h)
            } else if ("name" === i || "{" === i || "&" === i) A = !0;
            else if ("=" === i) {
                if (e = m.split(o), 2 !== e.length) throw new Error("Invalid tags at " + h + ": " + e.join(", "));
                u = l(e)
            }
        }
        var D = w.pop();
        if (D) throw new Error('Unclosed section "' + D[1] + '" at ' + v.pos);
        return x = k(x),
        j(x)
    }
    var n = /\s*/,
    o = /\s+/,
    p = /\S/,
    q = /\s*=/,
    r = /\s*\}/,
    s = /#|\^|\/|>|\{|&|=|!/,
    t = RegExp.prototype.test,
    u = Object.prototype.toString,
    v = Array.isArray ||
    function(a) {
        return "[object Array]" === u.call(a)
    },
    w = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    };
    f.prototype.eos = function() {
        return "" === this.tail
    },
    f.prototype.scan = function(a) {
        var b = this.tail.match(a);
        return b && 0 === b.index ? (this.tail = this.tail.substring(b[0].length), this.pos += b[0].length, b[0]) : ""
    },
    f.prototype.scanUntil = function(a) {
        var b, c = this.tail.search(a);
        switch (c) {
        case - 1 : b = this.tail,
            this.pos += this.tail.length,
            this.tail = "";
            break;
        case 0:
            b = "";
            break;
        default:
            b = this.tail.substring(0, c),
            this.tail = this.tail.substring(c),
            this.pos += c
        }
        return b
    },
    g.make = function(a) {
        return a instanceof g ? a: new g(a)
    },
    g.prototype.push = function(a) {
        return new g(a, this)
    },
    g.prototype.lookup = function(a) {
        var b = this._cache[a];
        if (!b) {
            if ("." == a) b = this.view;
            else for (var c = this; c;) {
                if (a.indexOf(".") > 0) {
                    b = c.view;
                    for (var d = a.split("."), e = 0; b && e < d.length;) b = b[d[e++]]
                } else b = c.view[a];
                if (null != b) break;
                c = c.parent
            }
            this._cache[a] = b
        }
        return "function" == typeof b && (b = b.call(this.view)),
        b
    },
    h.prototype.clearCache = function() {
        this._cache = {},
        this._partialCache = {}
    },
    h.prototype.compile = function(b, c) {
        var d = this._cache[b];
        if (!d) {
            var e = a.parse(b, c);
            d = this._cache[b] = this.compileTokens(e, b)
        }
        return d
    },
    h.prototype.compilePartial = function(a, b, c) {
        var d = this.compile(b, c);
        return this._partialCache[a] = d,
        d
    },
    h.prototype.getPartial = function(a) {
        return a in this._partialCache || !this._loadPartial || this.compilePartial(a, this._loadPartial(a)),
        this._partialCache[a]
    },
    h.prototype.compileTokens = function(a, b) {
        var c = this;
        return function(d, e) {
            if (e) if ("function" == typeof e) c._loadPartial = e;
            else for (var f in e) c.compilePartial(f, e[f]);
            return i(a, c, g.make(d), b)
        }
    },
    h.prototype.render = function(a, b, c) {
        return this.compile(a)(b, c)
    },
    a.name = "mustache.js",
    a.version = "0.7.2",
    a.tags = ["{{", "}}"],
    a.Scanner = f,
    a.Context = g,
    a.Writer = h,
    a.parse = m,
    a.escape = e;
    var x = new h;
    a.clearCache = function() {
        return x.clearCache()
    },
    a.compile = function(a, b) {
        return x.compile(a, b)
    },
    a.compilePartial = function(a, b, c) {
        return x.compilePartial(a, b, c)
    },
    a.compileTokens = function(a, b) {
        return x.compileTokens(a, b)
    },
    a.render = function(a, b, c) {
        return x.render(a, b, c)
    },
    a.to_html = function(b, c, d, e) {
        var f = a.render(b, c, d);
        return "function" != typeof e ? f: void e(f)
    }
}),
function() {
    "use strict";
    var a, b = function(a, b) {
        var c = a.style[b];
        if (a.currentStyle ? c = a.currentStyle[b] : window.getComputedStyle && (c = document.defaultView.getComputedStyle(a, null).getPropertyValue(b)), "auto" == c && "cursor" == b) for (var d = ["a"], e = 0; e < d.length; e++) if (a.tagName.toLowerCase() == d[e]) return "pointer";
        return c
    },
    c = function(a) {
        if (m.prototype._singleton) {
            a || (a = window.event);
            var b;
            this !== window ? b = this: a.target ? b = a.target: a.srcElement && (b = a.srcElement),
            m.prototype._singleton.setCurrent(b)
        }
    },
    d = function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
    },
    e = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    },
    f = function(a, b) {
        if (a.addClass) return a.addClass(b),
        a;
        if (b && "string" == typeof b) {
            var c = (b || "").split(/\s+/);
            if (1 === a.nodeType) if (a.className) {
                for (var d = " " + a.className + " ",
                e = a.className,
                f = 0,
                g = c.length; g > f; f++) d.indexOf(" " + c[f] + " ") < 0 && (e += " " + c[f]);
                a.className = e.replace(/^\s+|\s+$/g, "")
            } else a.className = b
        }
        return a
    },
    g = function(a, b) {
        if (a.removeClass) return a.removeClass(b),
        a;
        if (b && "string" == typeof b || void 0 === b) {
            var c = (b || "").split(/\s+/);
            if (1 === a.nodeType && a.className) if (b) {
                for (var d = (" " + a.className + " ").replace(/[\n\t]/g, " "), e = 0, f = c.length; f > e; e++) d = d.replace(" " + c[e] + " ", " ");
                a.className = d.replace(/^\s+|\s+$/g, "")
            } else a.className = ""
        }
        return a
    },
    h = function(a) {
        var c = {
            left: 0,
            top: 0,
            width: a.width || a.offsetWidth || 0,
            height: a.height || a.offsetHeight || 0,
            zIndex: 9999
        },
        d = b(a, "zIndex");
        for (d && "auto" != d && (c.zIndex = parseInt(d, 10)); a;) {
            var e = parseInt(b(a, "borderLeftWidth"), 10),
            f = parseInt(b(a, "borderTopWidth"), 10);
            c.left += isNaN(a.offsetLeft) ? 0 : a.offsetLeft,
            c.left += isNaN(e) ? 0 : e,
            c.top += isNaN(a.offsetTop) ? 0 : a.offsetTop,
            c.top += isNaN(f) ? 0 : f,
            a = a.offsetParent
        }
        return c
    },
    i = function(a) {
        return (a.indexOf("?") >= 0 ? "&": "?") + "nocache=" + (new Date).getTime()
    },
    j = function(a) {
        var b = [];
        return a.trustedDomains && b.push("string" == typeof a.trustedDomains ? "trustedDomain=" + a.trustedDomains: "trustedDomain=" + a.trustedDomains.join(",")),
        b.join("&")
    },
    k = function(a, b) {
        if (b.indexOf) return b.indexOf(a);
        for (var c = 0,
        d = b.length; d > c; c++) if (b[c] === a) return c;
        return - 1
    },
    l = function(a) {
        if ("string" == typeof a) throw new TypeError("ZeroClipboard doesn't accept query strings.");
        return a.length ? a: [a]
    },
    m = function(a, b) {
        if (a && (m.prototype._singleton || this).glue(a), m.prototype._singleton) return m.prototype._singleton;
        m.prototype._singleton = this,
        this.options = {};
        for (var c in o) this.options[c] = o[c];
        for (var d in b) this.options[d] = b[d];
        this.handlers = {},
        m.detectFlashSupport() && p()
    },
    n = [];
    m.prototype.setCurrent = function(c) {
        a = c,
        this.reposition(),
        c.getAttribute("title") && this.setTitle(c.getAttribute("title")),
        this.setHandCursor("pointer" == b(c, "cursor"))
    },
    m.prototype.setText = function(a) {
        a && "" !== a && (this.options.text = a, this.ready() && this.flashBridge.setText(a))
    },
    m.prototype.setTitle = function(a) {
        a && "" !== a && this.htmlBridge.setAttribute("title", a)
    },
    m.prototype.setSize = function(a, b) {
        this.ready() && this.flashBridge.setSize(a, b)
    },
    m.prototype.setHandCursor = function(a) {
        this.ready() && this.flashBridge.setHandCursor(a)
    },
    m.version = "1.1.7";
    var o = {
        moviePath: "ZeroClipboard.swf",
        trustedDomains: null,
        text: null,
        hoverClass: "zeroclipboard-is-hover",
        activeClass: "zeroclipboard-is-active",
        allowScriptAccess: "sameDomain"
    };
    m.setDefaults = function(a) {
        for (var b in a) o[b] = a[b]
    },
    m.destroy = function() {
        m.prototype._singleton.unglue(n);
        var a = m.prototype._singleton.htmlBridge;
        a.parentNode.removeChild(a),
        delete m.prototype._singleton
    },
    m.detectFlashSupport = function() {
        var a = !1;
        try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (a = !0)
        } catch(b) {
            navigator.mimeTypes["application/x-shockwave-flash"] && (a = !0)
        }
        return a
    };
    var p = function() {
        var a = m.prototype._singleton,
        b = document.getElementById("global-zeroclipboard-html-bridge");
        if (!b) {
            var c = '      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="' + a.options.moviePath + i(a.options.moviePath) + '"/>         <param name="allowScriptAccess" value="' + a.options.allowScriptAccess + '"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="' + j(a.options) + '"/>         <embed src="' + a.options.moviePath + i(a.options.moviePath) + '"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="always"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="' + j(a.options) + '"           scale="exactfit">         </embed>       </object>';
            b = document.createElement("div"),
            b.id = "global-zeroclipboard-html-bridge",
            b.setAttribute("class", "global-zeroclipboard-container"),
            b.setAttribute("data-clipboard-ready", !1),
            b.style.position = "absolute",
            b.style.left = "-9999px",
            b.style.top = "-9999px",
            b.style.width = "15px",
            b.style.height = "15px",
            b.style.zIndex = "9999",
            b.innerHTML = c,
            document.body.appendChild(b)
        }
        a.htmlBridge = b,
        a.flashBridge = document["global-zeroclipboard-flash-bridge"] || b.children[0].lastElementChild
    };
    m.prototype.resetBridge = function() {
        this.htmlBridge.style.left = "-9999px",
        this.htmlBridge.style.top = "-9999px",
        this.htmlBridge.removeAttribute("title"),
        this.htmlBridge.removeAttribute("data-clipboard-text"),
        g(a, this.options.activeClass),
        a = null,
        this.options.text = null
    },
    m.prototype.ready = function() {
        var a = this.htmlBridge.getAttribute("data-clipboard-ready");
        return "true" === a || a === !0
    },
    m.prototype.reposition = function() {
        if (!a) return ! 1;
        var b = h(a);
        this.htmlBridge.style.top = b.top + "px",
        this.htmlBridge.style.left = b.left + "px",
        this.htmlBridge.style.width = b.width + "px",
        this.htmlBridge.style.height = b.height + "px",
        this.htmlBridge.style.zIndex = b.zIndex + 1,
        this.setSize(b.width, b.height)
    },
    m.dispatch = function(a, b) {
        m.prototype._singleton.receiveEvent(a, b)
    },
    m.prototype.on = function(a, b) {
        for (var c = a.toString().split(/\s/g), d = 0; d < c.length; d++) a = c[d].toLowerCase().replace(/^on/, ""),
        this.handlers[a] || (this.handlers[a] = b);
        this.handlers.noflash && !m.detectFlashSupport() && this.receiveEvent("onNoFlash", null)
    },
    m.prototype.addEventListener = m.prototype.on,
    m.prototype.off = function(a, b) {
        for (var c = a.toString().split(/\s/g), d = 0; d < c.length; d++) {
            a = c[d].toLowerCase().replace(/^on/, "");
            for (var e in this.handlers) e === a && this.handlers[e] === b && delete this.handlers[e]
        }
    },
    m.prototype.removeEventListener = m.prototype.off,
    m.prototype.receiveEvent = function(b, c) {
        b = b.toString().toLowerCase().replace(/^on/, "");
        var d = a;
        switch (b) {
        case "load":
            if (c && parseFloat(c.flashVersion.replace(",", ".").replace(/[^0-9\.]/gi, "")) < 10) return void this.receiveEvent("onWrongFlash", {
                flashVersion: c.flashVersion
            });
            this.htmlBridge.setAttribute("data-clipboard-ready", !0);
            break;
        case "mouseover":
            f(d, this.options.hoverClass);
            break;
        case "mouseout":
            g(d, this.options.hoverClass),
            this.resetBridge();
            break;
        case "mousedown":
            f(d, this.options.activeClass);
            break;
        case "mouseup":
            g(d, this.options.activeClass);
            break;
        case "datarequested":
            var e = d.getAttribute("data-clipboard-target"),
            h = e ? document.getElementById(e) : null;
            if (h) {
                var i = h.value || h.textContent || h.innerText;
                i && this.setText(i)
            } else {
                var j = d.getAttribute("data-clipboard-text");
                j && this.setText(j)
            }
            break;
        case "complete":
            this.options.text = null
        }
        if (this.handlers[b]) {
            var k = this.handlers[b];
            "function" == typeof k ? k.call(d, this, c) : "string" == typeof k && window[k].call(d, this, c)
        }
    },
    m.prototype.glue = function(a) {
        a = l(a);
        for (var b = 0; b < a.length; b++) - 1 == k(a[b], n) && (n.push(a[b]), d(a[b], "mouseover", c))
    },
    m.prototype.unglue = function(a) {
        a = l(a);
        for (var b = 0; b < a.length; b++) {
            e(a[b], "mouseover", c);
            var d = k(a[b], n); - 1 != d && n.splice(d, 1)
        }
    },
    "undefined" != typeof module ? module.exports = m: "function" == typeof define && define.amd ? define(function() {
        return m
    }) : window.ZeroClipboard = m
} (),
function(a) {
    function b(a, b) {
        return function(c) {
            return i(a.call(this, c), b)
        }
    }
    function c(a, b) {
        return function(c) {
            return this.lang().ordinal(a.call(this, c), b)
        }
    }
    function d() {}
    function e(a) {
        u(a),
        g(this, a)
    }
    function f(a) {
        var b = o(a),
        c = b.year || 0,
        d = b.month || 0,
        e = b.week || 0,
        f = b.day || 0,
        g = b.hour || 0,
        h = b.minute || 0,
        i = b.second || 0,
        j = b.millisecond || 0;
        this._input = a,
        this._milliseconds = +j + 1e3 * i + 6e4 * h + 36e5 * g,
        this._days = +f + 7 * e,
        this._months = +d + 12 * c,
        this._data = {},
        this._bubble()
    }
    function g(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return b.hasOwnProperty("toString") && (a.toString = b.toString),
        b.hasOwnProperty("valueOf") && (a.valueOf = b.valueOf),
        a
    }
    function h(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }
    function i(a, b) {
        for (var c = a + ""; c.length < b;) c = "0" + c;
        return c
    }
    function j(a, b, c, d) {
        var e, f, g = b._milliseconds,
        h = b._days,
        i = b._months;
        g && a._d.setTime( + a._d + g * c),
        (h || i) && (e = a.minute(), f = a.hour()),
        h && a.date(a.date() + h * c),
        i && a.month(a.month() + i * c),
        g && !d && bb.updateOffset(a),
        (h || i) && (a.minute(e), a.hour(f))
    }
    function k(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }
    function l(a) {
        return "[object Date]" === Object.prototype.toString.call(a)
    }
    function m(a, b, c) {
        var d, e = Math.min(a.length, b.length),
        f = Math.abs(a.length - b.length),
        g = 0;
        for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && q(a[d]) !== q(b[d])) && g++;
        return g + f
    }
    function n(a) {
        if (a) {
            var b = a.toLowerCase().replace(/(.)s$/, "$1");
            a = Jb[a] || Kb[b] || b
        }
        return a
    }
    function o(a) {
        var b, c, d = {};
        for (c in a) a.hasOwnProperty(c) && (b = n(c), b && (d[b] = a[c]));
        return d
    }
    function p(b) {
        var c, d;
        if (0 === b.indexOf("week")) c = 7,
        d = "day";
        else {
            if (0 !== b.indexOf("month")) return;
            c = 12,
            d = "month"
        }
        bb[b] = function(e, f) {
            var g, h, i = bb.fn._lang[b],
            j = [];
            if ("number" == typeof e && (f = e, e = a), h = function(a) {
                var b = bb().utc().set(d, a);
                return i.call(bb.fn._lang, b, e || "")
            },
            null != f) return h(f);
            for (g = 0; c > g; g++) j.push(h(g));
            return j
        }
    }
    function q(a) {
        var b = +a,
        c = 0;
        return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)),
        c
    }
    function r(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }
    function s(a) {
        return t(a) ? 366 : 365
    }
    function t(a) {
        return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400
    }
    function u(a) {
        var b;
        a._a && -2 === a._pf.overflow && (b = a._a[gb] < 0 || a._a[gb] > 11 ? gb: a._a[hb] < 1 || a._a[hb] > r(a._a[fb], a._a[gb]) ? hb: a._a[ib] < 0 || a._a[ib] > 23 ? ib: a._a[jb] < 0 || a._a[jb] > 59 ? jb: a._a[kb] < 0 || a._a[kb] > 59 ? kb: a._a[lb] < 0 || a._a[lb] > 999 ? lb: -1, a._pf._overflowDayOfYear && (fb > b || b > hb) && (b = hb), a._pf.overflow = b)
    }
    function v(a) {
        a._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1
        }
    }
    function w(a) {
        return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)),
        a._isValid
    }
    function x(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }
    function y(a, b) {
        return b.abbr = a,
        mb[a] || (mb[a] = new d),
        mb[a].set(b),
        mb[a]
    }
    function z(a) {
        delete mb[a]
    }
    function A(a) {
        var b, c, d, e, f = 0,
        g = function(a) {
            if (!mb[a] && nb) try {
                require("./lang/" + a)
            } catch(b) {}
            return mb[a]
        };
        if (!a) return bb.fn._lang;
        if (!k(a)) {
            if (c = g(a)) return c;
            a = [a]
        }
        for (; f < a.length;) {
            for (e = x(a[f]).split("-"), b = e.length, d = x(a[f + 1]), d = d ? d.split("-") : null; b > 0;) {
                if (c = g(e.slice(0, b).join("-"))) return c;
                if (d && d.length >= b && m(e, d, !0) >= b - 1) break;
                b--
            }
            f++
        }
        return bb.fn._lang
    }
    function B(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }
    function C(a) {
        var b, c, d = a.match(rb);
        for (b = 0, c = d.length; c > b; b++) d[b] = Ob[d[b]] ? Ob[d[b]] : B(d[b]);
        return function(e) {
            var f = "";
            for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }
    function D(a, b) {
        return a.isValid() ? (b = E(b, a.lang()), Lb[b] || (Lb[b] = C(b)), Lb[b](a)) : a.lang().invalidDate()
    }
    function E(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (sb.lastIndex = 0; d >= 0 && sb.test(a);) a = a.replace(sb, c),
        sb.lastIndex = 0,
        d -= 1;
        return a
    }
    function F(a, b) {
        var c;
        switch (a) {
        case "DDDD":
            return vb;
        case "YYYY":
        case "GGGG":
        case "gggg":
            return wb;
        case "YYYYY":
        case "GGGGG":
        case "ggggg":
            return xb;
        case "S":
        case "SS":
        case "SSS":
        case "DDD":
            return ub;
        case "MMM":
        case "MMMM":
        case "dd":
        case "ddd":
        case "dddd":
            return yb;
        case "a":
        case "A":
            return A(b._l)._meridiemParse;
        case "X":
            return Bb;
        case "Z":
        case "ZZ":
            return zb;
        case "T":
            return Ab;
        case "MM":
        case "DD":
        case "YY":
        case "GG":
        case "gg":
        case "HH":
        case "hh":
        case "mm":
        case "ss":
        case "M":
        case "D":
        case "d":
        case "H":
        case "h":
        case "m":
        case "s":
        case "w":
        case "ww":
        case "W":
        case "WW":
        case "e":
        case "E":
            return tb;
        default:
            return c = new RegExp(N(M(a.replace("\\", "")), "i"))
        }
    }
    function G(a) {
        var b = (zb.exec(a) || [])[0],
        c = (b + "").match(Gb) || ["-", 0, 0],
        d = +(60 * c[1]) + q(c[2]);
        return "+" === c[0] ? -d: d
    }
    function H(a, b, c) {
        var d, e = c._a;
        switch (a) {
        case "M":
        case "MM":
            null != b && (e[gb] = q(b) - 1);
            break;
        case "MMM":
        case "MMMM":
            d = A(c._l).monthsParse(b),
            null != d ? e[gb] = d: c._pf.invalidMonth = b;
            break;
        case "D":
        case "DD":
            null != b && (e[hb] = q(b));
            break;
        case "DDD":
        case "DDDD":
            null != b && (c._dayOfYear = q(b));
            break;
        case "YY":
            e[fb] = q(b) + (q(b) > 68 ? 1900 : 2e3);
            break;
        case "YYYY":
        case "YYYYY":
            e[fb] = q(b);
            break;
        case "a":
        case "A":
            c._isPm = A(c._l).isPM(b);
            break;
        case "H":
        case "HH":
        case "h":
        case "hh":
            e[ib] = q(b);
            break;
        case "m":
        case "mm":
            e[jb] = q(b);
            break;
        case "s":
        case "ss":
            e[kb] = q(b);
            break;
        case "S":
        case "SS":
        case "SSS":
            e[lb] = q(1e3 * ("0." + b));
            break;
        case "X":
            c._d = new Date(1e3 * parseFloat(b));
            break;
        case "Z":
        case "ZZ":
            c._useUTC = !0,
            c._tzm = G(b);
            break;
        case "w":
        case "ww":
        case "W":
        case "WW":
        case "d":
        case "dd":
        case "ddd":
        case "dddd":
        case "e":
        case "E":
            a = a.substr(0, 1);
        case "gg":
        case "gggg":
        case "GG":
        case "GGGG":
        case "GGGGG":
            a = a.substr(0, 2),
            b && (c._w = c._w || {},
            c._w[a] = b)
        }
    }
    function I(a) {
        var b, c, d, e, f, g, h, i, j, k, l = [];
        if (!a._d) {
            for (d = K(a), a._w && null == a._a[hb] && null == a._a[gb] && (f = function(b) {
                return b ? b.length < 3 ? parseInt(b, 10) > 68 ? "19" + b: "20" + b: b: null == a._a[fb] ? bb().weekYear() : a._a[fb]
            },
            g = a._w, null != g.GG || null != g.W || null != g.E ? h = X(f(g.GG), g.W || 1, g.E, 4, 1) : (i = A(a._l), j = null != g.d ? T(g.d, i) : null != g.e ? parseInt(g.e, 10) + i._week.dow: 0, k = parseInt(g.w, 10) || 1, null != g.d && j < i._week.dow && k++, h = X(f(g.gg), k, j, i._week.doy, i._week.dow)), a._a[fb] = h.year, a._dayOfYear = h.dayOfYear), a._dayOfYear && (e = null == a._a[fb] ? d[fb] : a._a[fb], a._dayOfYear > s(e) && (a._pf._overflowDayOfYear = !0), c = S(e, 0, a._dayOfYear), a._a[gb] = c.getUTCMonth(), a._a[hb] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = l[b] = d[b];
            for (; 7 > b; b++) a._a[b] = l[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            l[ib] += q((a._tzm || 0) / 60),
            l[jb] += q((a._tzm || 0) % 60),
            a._d = (a._useUTC ? S: R).apply(null, l)
        }
    }
    function J(a) {
        var b;
        a._d || (b = o(a._i), a._a = [b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond], I(a))
    }
    function K(a) {
        var b = new Date;
        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }
    function L(a) {
        a._a = [],
        a._pf.empty = !0;
        var b, c, d, e, f, g = A(a._l),
        h = "" + a._i,
        i = h.length,
        j = 0;
        for (d = E(a._f, g).match(rb) || [], b = 0; b < d.length; b++) e = d[b],
        c = (F(e, a).exec(h) || [])[0],
        c && (f = h.substr(0, h.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), h = h.slice(h.indexOf(c) + c.length), j += c.length),
        Ob[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), H(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
        a._pf.charsLeftOver = i - j,
        h.length > 0 && a._pf.unusedInput.push(h),
        a._isPm && a._a[ib] < 12 && (a._a[ib] += 12),
        a._isPm === !1 && 12 === a._a[ib] && (a._a[ib] = 0),
        I(a),
        u(a)
    }
    function M(a) {
        return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
        function(a, b, c, d, e) {
            return b || c || d || e
        })
    }
    function N(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function O(a) {
        var b, c, d, e, f;
        if (0 === a._f.length) return a._pf.invalidFormat = !0,
        void(a._d = new Date(0 / 0));
        for (e = 0; e < a._f.length; e++) f = 0,
        b = g({},
        a),
        v(b),
        b._f = a._f[e],
        L(b),
        w(b) && (f += b._pf.charsLeftOver, f += 10 * b._pf.unusedTokens.length, b._pf.score = f, (null == d || d > f) && (d = f, c = b));
        g(a, c || b)
    }
    function P(a) {
        var b, c = a._i,
        d = Cb.exec(c);
        if (d) {
            for (b = 4; b > 0; b--) if (d[b]) {
                a._f = Eb[b - 1] + (d[6] || " ");
                break
            }
            for (b = 0; 4 > b; b++) if (Fb[b][1].exec(c)) {
                a._f += Fb[b][0];
                break
            }
            zb.exec(c) && (a._f += " Z"),
            L(a)
        } else a._d = new Date(c)
    }
    function Q(b) {
        var c = b._i,
        d = ob.exec(c);
        c === a ? b._d = new Date: d ? b._d = new Date( + d[1]) : "string" == typeof c ? P(b) : k(c) ? (b._a = c.slice(0), I(b)) : l(c) ? b._d = new Date( + c) : "object" == typeof c ? J(b) : b._d = new Date(c)
    }
    function R(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a),
        h
    }
    function S(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a),
        b
    }
    function T(a, b) {
        if ("string" == typeof a) if (isNaN(a)) {
            if (a = b.weekdaysParse(a), "number" != typeof a) return null
        } else a = parseInt(a, 10);
        return a
    }
    function U(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }
    function V(a, b, c) {
        var d = eb(Math.abs(a) / 1e3),
        e = eb(d / 60),
        f = eb(e / 60),
        g = eb(f / 24),
        h = eb(g / 365),
        i = 45 > d && ["s", d] || 1 === e && ["m"] || 45 > e && ["mm", e] || 1 === f && ["h"] || 22 > f && ["hh", f] || 1 === g && ["d"] || 25 >= g && ["dd", g] || 45 >= g && ["M"] || 345 > g && ["MM", eb(g / 30)] || 1 === h && ["y"] || ["yy", h];
        return i[2] = b,
        i[3] = a > 0,
        i[4] = c,
        U.apply({},
        i)
    }
    function W(a, b, c) {
        var d, e = c - b,
        f = c - a.day();
        return f > e && (f -= 7),
        e - 7 > f && (f += 7),
        d = bb(a).add("d", f),
        {
            week: Math.ceil(d.dayOfYear() / 7),
            year: d.year()
        }
    }
    function X(a, b, c, d, e) {
        var f, g, h = new Date(Date.UTC(a, 0)).getUTCDay();
        return c = null != c ? c: e,
        f = e - h + (h > d ? 7 : 0),
        g = 7 * (b - 1) + (c - e) + f + 1,
        {
            year: g > 0 ? a: a - 1,
            dayOfYear: g > 0 ? g: s(a - 1) + g
        }
    }
    function Y(a) {
        var b = a._i,
        c = a._f;
        return "undefined" == typeof a._pf && v(a),
        null === b ? bb.invalid({
            nullInput: !0
        }) : ("string" == typeof b && (a._i = b = A().preparse(b)), bb.isMoment(b) ? (a = g({},
        b), a._d = new Date( + b._d)) : c ? k(c) ? O(a) : L(a) : Q(a), new e(a))
    }
    function Z(a, b) {
        bb.fn[a] = bb.fn[a + "s"] = function(a) {
            var c = this._isUTC ? "UTC": "";
            return null != a ? (this._d["set" + c + b](a), bb.updateOffset(this), this) : this._d["get" + c + b]()
        }
    }
    function $(a) {
        bb.duration.fn[a] = function() {
            return this._data[a]
        }
    }
    function _(a, b) {
        bb.duration.fn["as" + a] = function() {
            return + this / b
        }
    }
    function ab() {
        "undefined" == typeof ender && (this.moment = bb)
    }
    for (var bb, cb, db = "2.3.1",
    eb = Math.round,
    fb = 0,
    gb = 1,
    hb = 2,
    ib = 3,
    jb = 4,
    kb = 5,
    lb = 6,
    mb = {},
    nb = "undefined" != typeof module && module.exports,
    ob = /^\/?Date\((\-?\d+)/i,
    pb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
    qb = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,
    rb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
    sb = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,
    tb = /\d\d?/,
    ub = /\d{1,3}/,
    vb = /\d{3}/,
    wb = /\d{1,4}/,
    xb = /[+\-]?\d{1,6}/,
    yb = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
    zb = /Z|[\+\-]\d\d:?\d\d/i,
    Ab = /T/i,
    Bb = /[\+\-]?\d+(\.\d{1,3})?/,
    Cb = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?$/,
    Db = "YYYY-MM-DDTHH:mm:ssZ",
    Eb = ["YYYY-MM-DD", "GGGG-[W]WW", "GGGG-[W]WW-E", "YYYY-DDD"], Fb = [["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], Gb = /([\+\-]|\d\d)/gi, Hb = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), Ib = {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    },
    Jb = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        D: "date",
        w: "week",
        W: "isoWeek",
        M: "month",
        y: "year",
        DDD: "dayOfYear",
        e: "weekday",
        E: "isoWeekday",
        gg: "weekYear",
        GG: "isoWeekYear"
    },
    Kb = {
        dayofyear: "dayOfYear",
        isoweekday: "isoWeekday",
        isoweek: "isoWeek",
        weekyear: "weekYear",
        isoweekyear: "isoWeekYear"
    },
    Lb = {},
    Mb = "DDD w W M D d".split(" "), Nb = "M D H h m s w W".split(" "), Ob = {
        M: function() {
            return this.month() + 1
        },
        MMM: function(a) {
            return this.lang().monthsShort(this, a)
        },
        MMMM: function(a) {
            return this.lang().months(this, a)
        },
        D: function() {
            return this.date()
        },
        DDD: function() {
            return this.dayOfYear()
        },
        d: function() {
            return this.day()
        },
        dd: function(a) {
            return this.lang().weekdaysMin(this, a)
        },
        ddd: function(a) {
            return this.lang().weekdaysShort(this, a)
        },
        dddd: function(a) {
            return this.lang().weekdays(this, a)
        },
        w: function() {
            return this.week()
        },
        W: function() {
            return this.isoWeek()
        },
        YY: function() {
            return i(this.year() % 100, 2)
        },
        YYYY: function() {
            return i(this.year(), 4)
        },
        YYYYY: function() {
            return i(this.year(), 5)
        },
        gg: function() {
            return i(this.weekYear() % 100, 2)
        },
        gggg: function() {
            return this.weekYear()
        },
        ggggg: function() {
            return i(this.weekYear(), 5)
        },
        GG: function() {
            return i(this.isoWeekYear() % 100, 2)
        },
        GGGG: function() {
            return this.isoWeekYear()
        },
        GGGGG: function() {
            return i(this.isoWeekYear(), 5)
        },
        e: function() {
            return this.weekday()
        },
        E: function() {
            return this.isoWeekday()
        },
        a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function() {
            return this.hours()
        },
        h: function() {
            return this.hours() % 12 || 12
        },
        m: function() {
            return this.minutes()
        },
        s: function() {
            return this.seconds()
        },
        S: function() {
            return q(this.milliseconds() / 100)
        },
        SS: function() {
            return i(q(this.milliseconds() / 10), 2)
        },
        SSS: function() {
            return i(this.milliseconds(), 3)
        },
        Z: function() {
            var a = -this.zone(),
            b = "+";
            return 0 > a && (a = -a, b = "-"),
            b + i(q(a / 60), 2) + ":" + i(q(a) % 60, 2)
        },
        ZZ: function() {
            var a = -this.zone(),
            b = "+";
            return 0 > a && (a = -a, b = "-"),
            b + i(q(10 * a / 6), 4)
        },
        z: function() {
            return this.zoneAbbr()
        },
        zz: function() {
            return this.zoneName()
        },
        X: function() {
            return this.unix()
        }
    },
    Pb = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; Mb.length;) cb = Mb.pop(),
    Ob[cb + "o"] = c(Ob[cb], cb);
    for (; Nb.length;) cb = Nb.pop(),
    Ob[cb + cb] = b(Ob[cb], 2);
    for (Ob.DDDD = b(Ob.DDD, 3), g(d.prototype, {
        set: function(a) {
            var b, c;
            for (c in a) b = a[c],
            "function" == typeof b ? this[c] = b: this["_" + c] = b
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(a) {
            return this._months[a.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(a) {
            return this._monthsShort[a.month()]
        },
        monthsParse: function(a) {
            var b, c, d;
            for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++) if (this._monthsParse[b] || (c = bb.utc([2e3, b]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a)) return b
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(a) {
            return this._weekdays[a.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(a) {
            return this._weekdaysShort[a.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(a) {
            return this._weekdaysMin[a.day()]
        },
        weekdaysParse: function(a) {
            var b, c, d;
            for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++) if (this._weekdaysParse[b] || (c = bb([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function(a) {
            var b = this._longDateFormat[a];
            return ! b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,
            function(a) {
                return a.slice(1)
            }), this._longDateFormat[a] = b),
            b
        },
        isPM: function(a) {
            return "p" === (a + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(a, b, c) {
            return a > 11 ? c ? "pm": "PM": c ? "am": "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(a, b) {
            var c = this._calendar[a];
            return "function" == typeof c ? c.apply(b) : c
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(a, b, c, d) {
            var e = this._relativeTime[c];
            return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
        },
        pastFuture: function(a, b) {
            var c = this._relativeTime[a > 0 ? "future": "past"];
            return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
        },
        ordinal: function(a) {
            return this._ordinal.replace("%d", a)
        },
        _ordinal: "%d",
        preparse: function(a) {
            return a
        },
        postformat: function(a) {
            return a
        },
        week: function(a) {
            return W(a, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
            return this._invalidDate
        }
    }), bb = function(b, c, d, e) {
        return "boolean" == typeof d && (e = d, d = a),
        Y({
            _i: b,
            _f: c,
            _l: d,
            _strict: e,
            _isUTC: !1
        })
    },
    bb.utc = function(b, c, d, e) {
        var f;
        return "boolean" == typeof d && (e = d, d = a),
        f = Y({
            _useUTC: !0,
            _isUTC: !0,
            _l: d,
            _i: b,
            _f: c,
            _strict: e
        }).utc()
    },
    bb.unix = function(a) {
        return bb(1e3 * a)
    },
    bb.duration = function(a, b) {
        var c, d, e, g = bb.isDuration(a),
        h = "number" == typeof a,
        i = g ? a._input: h ? {}: a,
        j = null;
        return h ? b ? i[b] = a: i.milliseconds = a: (j = pb.exec(a)) ? (c = "-" === j[1] ? -1 : 1, i = {
            y: 0,
            d: q(j[hb]) * c,
            h: q(j[ib]) * c,
            m: q(j[jb]) * c,
            s: q(j[kb]) * c,
            ms: q(j[lb]) * c
        }) : (j = qb.exec(a)) && (c = "-" === j[1] ? -1 : 1, e = function(a) {
            var b = a && parseFloat(a.replace(",", "."));
            return (isNaN(b) ? 0 : b) * c
        },
        i = {
            y: e(j[2]),
            M: e(j[3]),
            d: e(j[4]),
            h: e(j[5]),
            m: e(j[6]),
            s: e(j[7]),
            w: e(j[8])
        }),
        d = new f(i),
        g && a.hasOwnProperty("_lang") && (d._lang = a._lang),
        d
    },
    bb.version = db, bb.defaultFormat = Db, bb.updateOffset = function() {},
    bb.lang = function(a, b) {
        var c;
        return a ? (b ? y(x(a), b) : null === b ? (z(a), a = "en") : mb[a] || A(a), c = bb.duration.fn._lang = bb.fn._lang = A(a), c._abbr) : bb.fn._lang._abbr
    },
    bb.langData = function(a) {
        return a && a._lang && a._lang._abbr && (a = a._lang._abbr),
        A(a)
    },
    bb.isMoment = function(a) {
        return a instanceof e
    },
    bb.isDuration = function(a) {
        return a instanceof f
    },
    cb = Pb.length - 1; cb >= 0; --cb) p(Pb[cb]);
    for (bb.normalizeUnits = function(a) {
        return n(a)
    },
    bb.invalid = function(a) {
        var b = bb.utc(0 / 0);
        return null != a ? g(b._pf, a) : b._pf.userInvalidated = !0,
        b
    },
    bb.parseZone = function(a) {
        return bb(a).parseZone()
    },
    g(bb.fn = e.prototype, {
        clone: function() {
            return bb(this)
        },
        valueOf: function() {
            return + this._d + 6e4 * (this._offset || 0)
        },
        unix: function() {
            return Math.floor( + this / 1e3)
        },
        toString: function() {
            return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
            return this._offset ? new Date( + this) : this._d
        },
        toISOString: function() {
            return D(bb(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function() {
            var a = this;
            return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
        },
        isValid: function() {
            return w(this)
        },
        isDSTShifted: function() {
            return this._a ? this.isValid() && m(this._a, (this._isUTC ? bb.utc(this._a) : bb(this._a)).toArray()) > 0 : !1
        },
        parsingFlags: function() {
            return g({},
            this._pf)
        },
        invalidAt: function() {
            return this._pf.overflow
        },
        utc: function() {
            return this.zone(0)
        },
        local: function() {
            return this.zone(0),
            this._isUTC = !1,
            this
        },
        format: function(a) {
            var b = D(this, a || bb.defaultFormat);
            return this.lang().postformat(b)
        },
        add: function(a, b) {
            var c;
            return c = "string" == typeof a ? bb.duration( + b, a) : bb.duration(a, b),
            j(this, c, 1),
            this
        },
        subtract: function(a, b) {
            var c;
            return c = "string" == typeof a ? bb.duration( + b, a) : bb.duration(a, b),
            j(this, c, -1),
            this
        },
        diff: function(a, b, c) {
            var d, e, f = this._isUTC ? bb(a).zone(this._offset || 0) : bb(a).local(),
            g = 6e4 * (this.zone() - f.zone());
            return b = n(b),
            "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()), e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - bb(this).startOf("month") - (f - bb(f).startOf("month"))) / d, e -= 6e4 * (this.zone() - bb(this).startOf("month").zone() - (f.zone() - bb(f).startOf("month").zone())) / d, "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3: "minute" === b ? d / 6e4: "hour" === b ? d / 36e5: "day" === b ? (d - g) / 864e5: "week" === b ? (d - g) / 6048e5: d),
            c ? e: h(e)
        },
        from: function(a, b) {
            return bb.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)
        },
        fromNow: function(a) {
            return this.from(bb(), a)
        },
        calendar: function() {
            var a = this.diff(bb().zone(this.zone()).startOf("day"), "days", !0),
            b = -6 > a ? "sameElse": -1 > a ? "lastWeek": 0 > a ? "lastDay": 1 > a ? "sameDay": 2 > a ? "nextDay": 7 > a ? "nextWeek": "sameElse";
            return this.format(this.lang().calendar(b, this))
        },
        isLeapYear: function() {
            return t(this.year())
        },
        isDST: function() {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
        day: function(a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != a ? (a = T(a, this.lang()), this.add({
                d: a - b
            })) : b
        },
        month: function(a) {
            var b, c = this._isUTC ? "UTC": "";
            return null != a ? "string" == typeof a && (a = this.lang().monthsParse(a), "number" != typeof a) ? this: (b = this.date(), this.date(1), this._d["set" + c + "Month"](a), this.date(Math.min(b, this.daysInMonth())), bb.updateOffset(this), this) : this._d["get" + c + "Month"]()
        },
        startOf: function(a) {
            switch (a = n(a)) {
            case "year":
                this.month(0);
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
            }
            return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1),
            this
        },
        endOf: function(a) {
            return a = n(a),
            this.startOf(a).add("isoWeek" === a ? "week": a, 1).subtract("ms", 1)
        },
        isAfter: function(a, b) {
            return b = "undefined" != typeof b ? b: "millisecond",
            +this.clone().startOf(b) > +bb(a).startOf(b)
        },
        isBefore: function(a, b) {
            return b = "undefined" != typeof b ? b: "millisecond",
            +this.clone().startOf(b) < +bb(a).startOf(b)
        },
        isSame: function(a, b) {
            return b = "undefined" != typeof b ? b: "millisecond",
            +this.clone().startOf(b) === +bb(a).startOf(b)
        },
        min: function(a) {
            return a = bb.apply(null, arguments),
            this > a ? this: a
        },
        max: function(a) {
            return a = bb.apply(null, arguments),
            a > this ? this: a
        },
        zone: function(a) {
            var b = this._offset || 0;
            return null == a ? this._isUTC ? b: this._d.getTimezoneOffset() : ("string" == typeof a && (a = G(a)), Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, b !== a && j(this, bb.duration(b - a, "m"), 1, !0), this)
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC": ""
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time": ""
        },
        parseZone: function() {
            return "string" == typeof this._i && this.zone(this._i),
            this
        },
        hasAlignedHourOffset: function(a) {
            return a = a ? bb(a).zone() : 0,
            0 === (this.zone() - a) % 60
        },
        daysInMonth: function() {
            return r(this.year(), this.month())
        },
        dayOfYear: function(a) {
            var b = eb((bb(this).startOf("day") - bb(this).startOf("year")) / 864e5) + 1;
            return null == a ? b: this.add("d", a - b)
        },
        weekYear: function(a) {
            var b = W(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == a ? b: this.add("y", a - b)
        },
        isoWeekYear: function(a) {
            var b = W(this, 1, 4).year;
            return null == a ? b: this.add("y", a - b)
        },
        week: function(a) {
            var b = this.lang().week(this);
            return null == a ? b: this.add("d", 7 * (a - b))
        },
        isoWeek: function(a) {
            var b = W(this, 1, 4).week;
            return null == a ? b: this.add("d", 7 * (a - b))
        },
        weekday: function(a) {
            var b = (this.day() + 7 - this.lang()._week.dow) % 7;
            return null == a ? b: this.add("d", a - b)
        },
        isoWeekday: function(a) {
            return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a: a - 7)
        },
        get: function(a) {
            return a = n(a),
            this[a]()
        },
        set: function(a, b) {
            return a = n(a),
            "function" == typeof this[a] && this[a](b),
            this
        },
        lang: function(b) {
            return b === a ? this._lang: (this._lang = A(b), this)
        }
    }), cb = 0; cb < Hb.length; cb++) Z(Hb[cb].toLowerCase().replace(/s$/, ""), Hb[cb]);
    Z("year", "FullYear"),
    bb.fn.days = bb.fn.day,
    bb.fn.months = bb.fn.month,
    bb.fn.weeks = bb.fn.week,
    bb.fn.isoWeeks = bb.fn.isoWeek,
    bb.fn.toJSON = bb.fn.toISOString,
    g(bb.duration.fn = f.prototype, {
        _bubble: function() {
            var a, b, c, d, e = this._milliseconds,
            f = this._days,
            g = this._months,
            i = this._data;
            i.milliseconds = e % 1e3,
            a = h(e / 1e3),
            i.seconds = a % 60,
            b = h(a / 60),
            i.minutes = b % 60,
            c = h(b / 60),
            i.hours = c % 24,
            f += h(c / 24),
            i.days = f % 30,
            g += h(f / 30),
            i.months = g % 12,
            d = h(g / 12),
            i.years = d
        },
        weeks: function() {
            return h(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * q(this._months / 12)
        },
        humanize: function(a) {
            var b = +this,
            c = V(b, !a, this.lang());
            return a && (c = this.lang().pastFuture(b, c)),
            this.lang().postformat(c)
        },
        add: function(a, b) {
            var c = bb.duration(a, b);
            return this._milliseconds += c._milliseconds,
            this._days += c._days,
            this._months += c._months,
            this._bubble(),
            this
        },
        subtract: function(a, b) {
            var c = bb.duration(a, b);
            return this._milliseconds -= c._milliseconds,
            this._days -= c._days,
            this._months -= c._months,
            this._bubble(),
            this
        },
        get: function(a) {
            return a = n(a),
            this[a.toLowerCase() + "s"]()
        },
        as: function(a) {
            return a = n(a),
            this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]()
        },
        lang: bb.fn.lang,
        toIsoString: function() {
            var a = Math.abs(this.years()),
            b = Math.abs(this.months()),
            c = Math.abs(this.days()),
            d = Math.abs(this.hours()),
            e = Math.abs(this.minutes()),
            f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-": "") + "P" + (a ? a + "Y": "") + (b ? b + "M": "") + (c ? c + "D": "") + (d || e || f ? "T": "") + (d ? d + "H": "") + (e ? e + "M": "") + (f ? f + "S": "") : "P0D"
        }
    });
    for (cb in Ib) Ib.hasOwnProperty(cb) && (_(cb, Ib[cb]), $(cb.toLowerCase()));
    _("Weeks", 6048e5),
    bb.duration.fn.asMonths = function() {
        return ( + this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
    },
    bb.lang("en", {
        ordinal: function(a) {
            var b = a % 10,
            c = 1 === q(a % 100 / 10) ? "th": 1 === b ? "st": 2 === b ? "nd": 3 === b ? "rd": "th";
            return a + c
        }
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("ar", {
            months: "يناير/ كانون الثاني_فبراير/ شباط_مارس/ آذار_أبريل/ نيسان_مايو/ أيار_يونيو/ حزيران_يوليو/ تموز_أغسطس/ آب_سبتمبر/ أيلول_أكتوبر/ تشرين الأول_نوفمبر/ تشرين الثاني_ديسمبر/ كانون الأول".split("_"),
            monthsShort: "يناير/ كانون الثاني_فبراير/ شباط_مارس/ آذار_أبريل/ نيسان_مايو/ أيار_يونيو/ حزيران_يوليو/ تموز_أغسطس/ آب_سبتمبر/ أيلول_أكتوبر/ تشرين الأول_نوفمبر/ تشرين الثاني_ديسمبر/ كانون الأول".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[В изминалата] dddd [в] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[В изминалия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дни",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            ordinal: function(a) {
                var b = a % 10,
                c = a % 100;
                return 0 === a ? a + "-ев": 0 === c ? a + "-ен": c > 10 && 20 > c ? a + "-ти": 1 === b ? a + "-ви": 2 === b ? a + "-ри": 7 === b || 8 === b ? a + "-ми": a + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(b) {
        function c(a, b, c) {
            var d = {
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            };
            return a + " " + f(d[c], a)
        }
        function d(a) {
            switch (e(a)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
                return a + " bloaz";
            default:
                return a + " vloaz"
            }
        }
        function e(a) {
            return a > 9 ? e(a % 10) : a
        }
        function f(a, b) {
            return 2 === b ? g(a) : a
        }
        function g(b) {
            var c = {
                m: "v",
                b: "v",
                d: "z"
            };
            return c[b.charAt(0)] === a ? b: c[b.charAt(0)] + b.substring(1)
        }
        return b.lang("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            longDateFormat: {
                LT: "h[e]mm A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY LT",
                LLLL: "dddd, D [a viz] MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoù",
                m: "ur vunutenn",
                mm: c,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: c,
                M: "ur miz",
                MM: c,
                y: "ur bloaz",
                yy: d
            },
            ordinal: function(a) {
                var b = 1 === a ? "añ": "vet";
                return a + b
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        function b(a, b, c) {
            var d = a + " ";
            switch (c) {
            case "m":
                return b ? "jedna minuta": "jedne minute";
            case "mm":
                return d += 1 === a ? "minuta": 2 === a || 3 === a || 4 === a ? "minute": "minuta";
            case "h":
                return b ? "jedan sat": "jednog sata";
            case "hh":
                return d += 1 === a ? "sat": 2 === a || 3 === a || 4 === a ? "sata": "sati";
            case "dd":
                return d += 1 === a ? "dan": "dana";
            case "MM":
                return d += 1 === a ? "mjesec": 2 === a || 3 === a || 4 === a ? "mjeseca": "mjeseci";
            case "yy":
                return d += 1 === a ? "godina": 2 === a || 3 === a || 4 === a ? "godine": "godina"
            }
        }
        return a.lang("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                        return "[prošlu] dddd [u] LT";
                    case 6:
                        return "[prošle] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: b,
                mm: b,
                h: b,
                hh: b,
                d: "dan",
                dd: b,
                M: "mjesec",
                MM: b,
                y: "godinu",
                yy: b
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("ca", {
            months: "Gener_Febrer_Març_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"),
            monthsShort: "Gen._Febr._Mar._Abr._Mai._Jun._Jul._Ag._Set._Oct._Nov._Des.".split("_"),
            weekdays: "Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"),
            weekdaysShort: "Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"),
            weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: function() {
                    return "[avui a " + (1 !== this.hours() ? "les": "la") + "] LT"
                },
                nextDay: function() {
                    return "[demà a " + (1 !== this.hours() ? "les": "la") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a " + (1 !== this.hours() ? "les": "la") + "] LT"
                },
                lastDay: function() {
                    return "[ahir a " + (1 !== this.hours() ? "les": "la") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les": "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "fa %s",
                s: "uns segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        function b(a) {
            return a > 1 && 5 > a && 1 !== ~~ (a / 10)
        }
        function c(a, c, d, e) {
            var f = a + " ";
            switch (d) {
            case "s":
                return c || e ? "pár vteřin": "pár vteřinami";
            case "m":
                return c ? "minuta": e ? "minutu": "minutou";
            case "mm":
                return c || e ? f + (b(a) ? "minuty": "minut") : f + "minutami";
            case "h":
                return c ? "hodina": e ? "hodinu": "hodinou";
            case "hh":
                return c || e ? f + (b(a) ? "hodiny": "hodin") : f + "hodinami";
            case "d":
                return c || e ? "den": "dnem";
            case "dd":
                return c || e ? f + (b(a) ? "dny": "dní") : f + "dny";
            case "M":
                return c || e ? "měsíc": "měsícem";
            case "MM":
                return c || e ? f + (b(a) ? "měsíce": "měsíců") : f + "měsíci";
            case "y":
                return c || e ? "rok": "rokem";
            case "yy":
                return c || e ? f + (b(a) ? "roky": "let") : f + "lety"
            }
        }
        var d = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
        e = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
        return a.lang("cs", {
            months: d,
            monthsShort: e,
            monthsParse: function(a, b) {
                var c, d = [];
                for (c = 0; 12 > c; c++) d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
                return d
            } (d, e),
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zítra v] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[v neděli v] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [v] LT";
                    case 3:
                        return "[ve středu v] LT";
                    case 4:
                        return "[ve čtvrtek v] LT";
                    case 5:
                        return "[v pátek v] LT";
                    case 6:
                        return "[v sobotu v] LT"
                    }
                },
                lastDay: "[včera v] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[minulou neděli v] LT";
                    case 1:
                    case 2:
                        return "[minulé] dddd [v] LT";
                    case 3:
                        return "[minulou středu v] LT";
                    case 4:
                    case 5:
                        return "[minulý] dddd [v] LT";
                    case 6:
                        return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: c,
                m: c,
                mm: c,
                h: c,
                hh: c,
                d: c,
                dd: c,
                M: c,
                MM: c,
                y: c,
                yy: c
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("cv", {
            months: "кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кç_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD-MM-YYYY",
                LL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]",
                LLL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT",
                LLLL: "dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ĕнер] LT [сехетре]",
                nextWeek: "[Çитес] dddd LT [сехетре]",
                lastWeek: "[Иртнĕ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function(a) {
                    var b = /сехет$/i.exec(a) ? "рен": /çул$/i.exec(a) ? "тан": "ран";
                    return a + b
                },
                past: "%s каялла",
                s: "пĕр-ик çеккунт",
                m: "пĕр минут",
                mm: "%d минут",
                h: "пĕр сехет",
                hh: "%d сехет",
                d: "пĕр кун",
                dd: "%d кун",
                M: "пĕр уйăх",
                MM: "%d уйăх",
                y: "пĕр çул",
                yy: "%d çул"
            },
            ordinal: "%d-мĕш",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D. MMMM, YYYY LT"
            },
            calendar: {
                sameDay: "[I dag kl.] LT",
                nextDay: "[I morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[I går kl.] LT",
                lastWeek: "[sidste] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        function b(a, b, c) {
            var d = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [a + " Tage", a + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [a + " Monate", a + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [a + " Jahre", a + " Jahren"]
            };
            return b ? d[c][0] : d[c][1]
        }
        return a.lang("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "H:mm [Uhr]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Heute um] LT",
                sameElse: "L",
                nextDay: "[Morgen um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gestern um] LT",
                lastWeek: "[letzten] dddd [um] LT"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: b,
                mm: "%d Minuten",
                h: b,
                hh: "%d Stunden",
                d: b,
                dd: b,
                M: b,
                MM: b,
                y: b,
                yy: b
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function(a, b) {
                return /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()]
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function(a, b, c) {
                return a > 11 ? c ? "μμ": "ΜΜ": c ? "πμ": "ΠΜ"
            },
            longDateFormat: {
                LT: "h:mm A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: "[την προηγούμενη] dddd [{}] LT",
                sameElse: "L"
            },
            calendar: function(a, b) {
                var c = this._calendarEl[a],
                d = b && b.hours();
                return c.replace("{}", 1 === d % 12 ? "στη": "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            ordinal: function(a) {
                return a + "η"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinal: function(a) {
                var b = a % 10,
                c = 1 === ~~ (a % 100 / 10) ? "th": 1 === b ? "st": 2 === b ? "nd": 3 === b ? "rd": "th";
                return a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                L: "YYYY-MM-DD",
                LL: "D MMMM, YYYY",
                LLL: "D MMMM, YYYY LT",
                LLLL: "dddd, D MMMM, YYYY LT"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinal: function(a) {
                var b = a % 10,
                c = 1 === ~~ (a % 100 / 10) ? "th": 1 === b ? "st": 2 === b ? "nd": 3 === b ? "rd": "th";
                return a + c
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinal: function(a) {
                var b = a % 10,
                c = 1 === ~~ (a % 100 / 10) ? "th": 1 === b ? "st": 2 === b ? "nd": 3 === b ? "rd": "th";
                return a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
            weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "YYYY-MM-DD",
                LL: "D[-an de] MMMM, YYYY",
                LLL: "D[-an de] MMMM, YYYY LT",
                LLLL: "dddd, [la] D[-an de] MMMM, YYYY LT"
            },
            meridiem: function(a, b, c) {
                return a > 11 ? c ? "p.t.m.": "P.T.M.": c ? "a.t.m.": "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "je %s",
                past: "antaŭ %s",
                s: "sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY LT",
                LLLL: "dddd, D [de] MMMM [de] YYYY LT"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s": "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s": "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s": "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s": "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s": "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        function b(a, b, c, d) {
            return d || b ? "paari sekundi": "paar sekundit"
        }
        return a.lang("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: b,
                m: "minut",
                mm: "%d minutit",
                h: "tund",
                hh: "%d tundi",
                d: "päev",
                dd: "%d päeva",
                M: "kuu",
                MM: "%d kuud",
                y: "aasta",
                yy: "%d aastat"
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] LT",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] LT",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] LT",
                llll: "ddd, YYYY[ko] MMM D[a] LT"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        var b = {
            1 : "۱",
            2 : "۲",
            3 : "۳",
            4 : "۴",
            5 : "۵",
            6 : "۶",
            7 : "۷",
            8 : "۸",
            9 : "۹",
            0 : "۰"
        },
        c = {
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9",
            "۰": "0"
        };
        return a.lang("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            meridiem: function(a) {
                return 12 > a ? "قبل از ظهر": "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چندین ثانیه",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function(a) {
                return a.replace(/[۰-۹]/g,
                function(a) {
                    return c[a]
                }).replace(/،/g, ",")
            },
            postformat: function(a) {
                return a.replace(/\d/g,
                function(a) {
                    return b[a]
                }).replace(/,/g, "،")
            },
            ordinal: "%dم",
            week: {
                dow: 6,
                doy: 12
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        function b(a, b, d, e) {
            var f = "";
            switch (d) {
            case "s":
                return e ? "muutaman sekunnin": "muutama sekunti";
            case "m":
                return e ? "minuutin": "minuutti";
            case "mm":
                f = e ? "minuutin": "minuuttia";
                break;
            case "h":
                return e ? "tunnin": "tunti";
            case "hh":
                f = e ? "tunnin": "tuntia";
                break;
            case "d":
                return e ? "päivän": "päivä";
            case "dd":
                f = e ? "päivän": "päivää";
                break;
            case "M":
                return e ? "kuukauden": "kuukausi";
            case "MM":
                f = e ? "kuukauden": "kuukautta";
                break;
            case "y":
                return e ? "vuoden": "vuosi";
            case "yy":
                f = e ? "vuoden": "vuotta"
            }
            return f = c(a, e) + " " + f
        }
        function c(a, b) {
            return 10 > a ? b ? e[a] : d[a] : a
        }
        var d = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
        e = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", d[7], d[8], d[9]];
        return a.lang("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] LT",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] LT",
                llll: "ddd, Do MMM YYYY, [klo] LT"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: b,
                m: b,
                mm: b,
                h: b,
                hh: b,
                d: b,
                dd: b,
                M: b,
                MM: b,
                y: b,
                yy: b
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinal: function(a) {
                return a + (1 === a ? "er": "")
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinal: function(a) {
                return a + (1 === a ? "er": "")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("gl", {
            months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
            monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
            weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
            weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
            weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: function() {
                    return "[hoxe " + (1 !== this.hours() ? "ás": "á") + "] LT"
                },
                nextDay: function() {
                    return "[mañá " + (1 !== this.hours() ? "ás": "á") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [" + (1 !== this.hours() ? "ás": "a") + "] LT"
                },
                lastDay: function() {
                    return "[onte " + (1 !== this.hours() ? "á": "a") + "] LT"
                },
                lastWeek: function() {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "ás": "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(a) {
                    return "uns segundos" === a ? "nuns segundos": "en " + a
                },
                past: "hai %s",
                s: "uns segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY LT",
                LLLL: "dddd, D [ב]MMMM YYYY LT",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY LT",
                llll: "ddd, D MMM YYYY LT"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function(a) {
                    return 2 === a ? "שעתיים": a + " שעות"
                },
                d: "יום",
                dd: function(a) {
                    return 2 === a ? "יומיים": a + " ימים"
                },
                M: "חודש",
                MM: function(a) {
                    return 2 === a ? "חודשיים": a + " חודשים"
                },
                y: "שנה",
                yy: function(a) {
                    return 2 === a ? "שנתיים": a + " שנים"
                }
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        var b = {
            1 : "१",
            2 : "२",
            3 : "३",
            4 : "४",
            5 : "५",
            6 : "६",
            7 : "७",
            8 : "८",
            9 : "९",
            0 : "०"
        },
        c = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };
        return a.lang("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function(a) {
                return a.replace(/[१२३४५६७८९०]/g,
                function(a) {
                    return c[a]
                })
            },
            postformat: function(a) {
                return a.replace(/\d/g,
                function(a) {
                    return b[a]
                })
            },
            meridiem: function(a) {
                return 4 > a ? "रात": 10 > a ? "सुबह": 17 > a ? "दोपहर": 20 > a ? "शाम": "रात"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        function b(a, b, c) {
            var d = a + " ";
            switch (c) {
            case "m":
                return b ? "jedna minuta": "jedne minute";
            case "mm":
                return d += 1 === a ? "minuta": 2 === a || 3 === a || 4 === a ? "minute": "minuta";
            case "h":
                return b ? "jedan sat": "jednog sata";
            case "hh":
                return d += 1 === a ? "sat": 2 === a || 3 === a || 4 === a ? "sata": "sati";
            case "dd":
                return d += 1 === a ? "dan": "dana";
            case "MM":
                return d += 1 === a ? "mjesec": 2 === a || 3 === a || 4 === a ? "mjeseca": "mjeseci";
            case "yy":
                return d += 1 === a ? "godina": 2 === a || 3 === a || 4 === a ? "godine": "godina"
            }
        }
        return a.lang("hr", {
            months: "sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),
            monthsShort: "sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                        return "[prošlu] dddd [u] LT";
                    case 6:
                        return "[prošle] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: b,
                mm: b,
                h: b,
                hh: b,
                d: "dan",
                dd: b,
                M: "mjesec",
                MM: b,
                y: "godinu",
                yy: b
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        function b(a, b, c, d) {
            var e = a;
            switch (c) {
            case "s":
                return d || b ? "néhány másodperc": "néhány másodperce";
            case "m":
                return "egy" + (d || b ? " perc": " perce");
            case "mm":
                return e + (d || b ? " perc": " perce");
            case "h":
                return "egy" + (d || b ? " óra": " órája");
            case "hh":
                return e + (d || b ? " óra": " órája");
            case "d":
                return "egy" + (d || b ? " nap": " napja");
            case "dd":
                return e + (d || b ? " nap": " napja");
            case "M":
                return "egy" + (d || b ? " hónap": " hónapja");
            case "MM":
                return e + (d || b ? " hónap": " hónapja");
            case "y":
                return "egy" + (d || b ? " év": " éve");
            case "yy":
                return e + (d || b ? " év": " éve")
            }
            return ""
        }
        function c(a) {
            return (a ? "": "[múlt] ") + "[" + d[this.day()] + "] LT[-kor]"
        }
        var d = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
        return a.lang("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D., LT",
                LLLL: "YYYY. MMMM D., dddd LT"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function() {
                    return c.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function() {
                    return c.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: b,
                m: b,
                mm: b,
                h: b,
                hh: b,
                d: b,
                dd: b,
                M: b,
                MM: b,
                y: b,
                yy: b
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] LT",
                LLLL: "dddd, D MMMM YYYY [pukul] LT"
            },
            meridiem: function(a) {
                return 11 > a ? "pagi": 15 > a ? "siang": 19 > a ? "sore": "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        function b(a) {
            return 11 === a % 100 ? !0 : 1 === a % 10 ? !1 : !0
        }
        function c(a, c, d, e) {
            var f = a + " ";
            switch (d) {
            case "s":
                return c || e ? "nokkrar sekúndur": "nokkrum sekúndum";
            case "m":
                return c ? "mínúta": "mínútu";
            case "mm":
                return b(a) ? f + (c || e ? "mínútur": "mínútum") : c ? f + "mínúta": f + "mínútu";
            case "hh":
                return b(a) ? f + (c || e ? "klukkustundir": "klukkustundum") : f + "klukkustund";
            case "d":
                return c ? "dagur": e ? "dag": "degi";
            case "dd":
                return b(a) ? c ? f + "dagar": f + (e ? "daga": "dögum") : c ? f + "dagur": f + (e ? "dag": "degi");
            case "M":
                return c ? "mánuður": e ? "mánuð": "mánuði";
            case "MM":
                return b(a) ? c ? f + "mánuðir": f + (e ? "mánuði": "mánuðum") : c ? f + "mánuður": f + (e ? "mánuð": "mánuði");
            case "y":
                return c || e ? "ár": "ári";
            case "yy":
                return b(a) ? f + (c || e ? "ár": "árum") : f + (c || e ? "ár": "ári")
            }
        }
        return a.lang("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD/MM/YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] LT",
                LLLL: "dddd, D. MMMM YYYY [kl.] LT"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: c,
                m: c,
                mm: c,
                h: "klukkustund",
                hh: c,
                d: c,
                dd: c,
                M: c,
                MM: c,
                y: c,
                yy: c
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("it", {
            months: "Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"),
            monthsShort: "Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),
            weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
            weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
            weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: "[lo scorso] dddd [alle] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: function(a) {
                    return (/^[0-9].+$/.test(a) ? "tra": "in") + " " + a
                },
                past: "%s fa",
                s: "secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("ja", {
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "Ah時m分",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日LT",
                LLLL: "YYYY年M月D日LT dddd"
            },
            meridiem: function(a) {
                return 12 > a ? "午前": "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: "[来週]dddd LT",
                lastDay: "[昨日] LT",
                lastWeek: "[前週]dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        function b(a, b) {
            var c = {
                nominative: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                accusative: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            },
            d = /D[oD] *MMMM?/.test(b) ? "accusative": "nominative";
            return c[d][a.month()]
        }
        function c(a, b) {
            var c = {
                nominative: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                accusative: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_")
            },
            d = /(წინა|შემდეგ)/.test(b) ? "accusative": "nominative";
            return c[d][a.day()]
        }
        return a.lang("ka", {
            months: b,
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: c,
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function(a) {
                    return /(წამი|წუთი|საათი|წელი)/.test(a) ? a.replace(/ი$/, "ში") : a + "ში"
                },
                past: function(a) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(a) ? a.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(a) ? a.replace(/წელი$/, "წლის წინ") : void 0
                },
                s: "რამდენიმე წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            ordinal: function(a) {
                return 0 === a ? a: 1 === a ? a + "-ლი": 20 > a || 100 >= a && 0 === a % 20 || 0 === a % 100 ? "მე-" + a: a + "-ე"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h시 mm분",
                L: "YYYY.MM.DD",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 LT",
                LLLL: "YYYY년 MMMM D일 dddd LT"
            },
            meridiem: function(a) {
                return 12 > a ? "오전": "오후"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇초",
                ss: "%d초",
                m: "일분",
                mm: "%d분",
                h: "한시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한달",
                MM: "%d달",
                y: "일년",
                yy: "%d년"
            },
            ordinal: "%d일"
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        function b(a, b, c, d) {
            return b ? "kelios sekundės": d ? "kelių sekundžių": "kelias sekundes"
        }
        function c(a, b, c, d) {
            return b ? e(c)[0] : d ? e(c)[1] : e(c)[2]
        }
        function d(a) {
            return 0 === a % 10 || a > 10 && 20 > a
        }
        function e(a) {
            return h[a].split("_")
        }
        function f(a, b, f, g) {
            var h = a + " ";
            return 1 === a ? h + c(a, b, f[0], g) : b ? h + (d(a) ? e(f)[1] : e(f)[0]) : g ? h + e(f)[1] : h + (d(a) ? e(f)[1] : e(f)[2])
        }
        function g(a, b) {
            var c = -1 === b.indexOf("dddd LT"),
            d = i[a.weekday()];
            return c ? d: d.substring(0, d.length - 2) + "į"
        }
        var h = {
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        },
        i = "pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis_sekmadienis".split("_");
        return a.lang("lt", {
            months: "sausio_vasario_kovo_balandžio_gegužės_biržėlio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: g,
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], LT [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, LT [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], LT [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, LT [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieš %s",
                s: b,
                m: c,
                mm: f,
                h: c,
                hh: f,
                d: c,
                dd: f,
                M: c,
                MM: f,
                y: c,
                yy: f
            },
            ordinal: function(a) {
                return a + "-oji"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        function b(a, b, c) {
            var d = a.split("_");
            return c ? 1 === b % 10 && 11 !== b ? d[2] : d[3] : 1 === b % 10 && 11 !== b ? d[0] : d[1]
        }
        function c(a, c, e) {
            return a + " " + b(d[e], a, c)
        }
        var d = {
            mm: "minūti_minūtes_minūte_minūtes",
            hh: "stundu_stundas_stunda_stundas",
            dd: "dienu_dienas_diena_dienas",
            MM: "mēnesi_mēnešus_mēnesis_mēneši",
            yy: "gadu_gadus_gads_gadi"
        };
        return a.lang("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, LT",
                LLLL: "YYYY. [gada] D. MMMM, dddd, LT"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s vēlāk",
                past: "%s agrāk",
                s: "dažas sekundes",
                m: "minūti",
                mm: c,
                h: "stundu",
                hh: c,
                d: "dienu",
                dd: c,
                M: "mēnesi",
                MM: c,
                y: "gadu",
                yy: c
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiem: function(a) {
                return 4 > a ? "രാത്രി": 12 > a ? "രാവിലെ": 17 > a ? "ഉച്ച കഴിഞ്ഞ്": 20 > a ? "വൈകുന്നേരം": "രാത്രി"
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        var b = {
            1 : "१",
            2 : "२",
            3 : "३",
            4 : "४",
            5 : "५",
            6 : "६",
            7 : "७",
            8 : "८",
            9 : "९",
            0 : "०"
        },
        c = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };
        return a.lang("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s नंतर",
                past: "%s पूर्वी",
                s: "सेकंद",
                m: "एक मिनिट",
                mm: "%d मिनिटे",
                h: "एक तास",
                hh: "%d तास",
                d: "एक दिवस",
                dd: "%d दिवस",
                M: "एक महिना",
                MM: "%d महिने",
                y: "एक वर्ष",
                yy: "%d वर्षे"
            },
            preparse: function(a) {
                return a.replace(/[१२३४५६७८९०]/g,
                function(a) {
                    return c[a]
                })
            },
            postformat: function(a) {
                return a.replace(/\d/g,
                function(a) {
                    return b[a]
                })
            },
            meridiem: function(a) {
                return 4 > a ? "रात्री": 10 > a ? "सकाळी": 17 > a ? "दुपारी": 20 > a ? "सायंकाळी": "रात्री"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] LT",
                LLLL: "dddd, D MMMM YYYY [pukul] LT"
            },
            meridiem: function(a) {
                return 11 > a ? "pagi": 15 > a ? "tengahari": 19 > a ? "petang": "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "H.mm",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] LT",
                LLLL: "dddd D. MMMM YYYY [kl.] LT"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "for %s siden",
                s: "noen sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        var b = {
            1 : "१",
            2 : "२",
            3 : "३",
            4 : "४",
            5 : "५",
            6 : "६",
            7 : "७",
            8 : "८",
            9 : "९",
            0 : "०"
        },
        c = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };
        return a.lang("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आइ._सो._मङ्_बु._बि._शु._श.".split("_"),
            longDateFormat: {
                LT: "Aको h:mm बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            preparse: function(a) {
                return a.replace(/[१२३४५६७८९०]/g,
                function(a) {
                    return c[a]
                })
            },
            postformat: function(a) {
                return a.replace(/\d/g,
                function(a) {
                    return b[a]
                })
            },
            meridiem: function(a) {
                return 3 > a ? "राती": 10 > a ? "बिहान": 15 > a ? "दिउँसो": 18 > a ? "बेलुका": 20 > a ? "साँझ": "राती"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोली] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडी",
                s: "केही समय",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        var b = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
        c = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
        return a.lang("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(a, d) {
                return /-MMM-/.test(d) ? c[a.month()] : b[a.month()]
            },
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            ordinal: function(a) {
                return a + (1 === a || 8 === a || a >= 20 ? "ste": "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregående] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "for %s siden",
                s: "noen sekund",
                m: "ett minutt",
                mm: "%d minutt",
                h: "en time",
                hh: "%d timar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        function b(a) {
            return 5 > a % 10 && a % 10 > 1 && 1 !== ~~ (a / 10)
        }
        function c(a, c, d) {
            var e = a + " ";
            switch (d) {
            case "m":
                return c ? "minuta": "minutę";
            case "mm":
                return e + (b(a) ? "minuty": "minut");
            case "h":
                return c ? "godzina": "godzinę";
            case "hh":
                return e + (b(a) ? "godziny": "godzin");
            case "MM":
                return e + (b(a) ? "miesiące": "miesięcy");
            case "yy":
                return e + (b(a) ? "lata": "lat")
            }
        }
        var d = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
        e = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
        return a.lang("pl", {
            months: function(a, b) {
                return /D MMMM/.test(b) ? e[a.month()] : d[a.month()]
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
            weekdaysMin: "N_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Dziś o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: "[W] dddd [o] LT",
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[W zeszłą niedzielę o] LT";
                    case 3:
                        return "[W zeszłą środę o] LT";
                    case 6:
                        return "[W zeszłą sobotę o] LT";
                    default:
                        return "[W zeszły] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                m: c,
                mm: c,
                h: c,
                hh: c,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: c,
                y: "rok",
                yy: c
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("pt-br", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY LT",
                LLLL: "dddd, D [de] MMMM [de] YYYY LT"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT": "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atrás",
                s: "segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinal: "%dº"
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("pt", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY LT",
                LLLL: "dddd, D [de] MMMM [de] YYYY LT"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT": "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atrás",
                s: "segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("ro", {
            months: "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"),
            monthsShort: "Ian_Feb_Mar_Apr_Mai_Iun_Iul_Aug_Sep_Oct_Noi_Dec".split("_"),
            weekdays: "Duminică_Luni_Marţi_Miercuri_Joi_Vineri_Sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                m: "un minut",
                mm: "%d minute",
                h: "o oră",
                hh: "%d ore",
                d: "o zi",
                dd: "%d zile",
                M: "o lună",
                MM: "%d luni",
                y: "un an",
                yy: "%d ani"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        function b(a, b) {
            var c = a.split("_");
            return 1 === b % 10 && 11 !== b % 100 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
        }
        function c(a, c, d) {
            var e = {
                mm: "минута_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            };
            return "m" === d ? c ? "минута": "минуту": a + " " + b(e[d], +a)
        }
        function d(a, b) {
            var c = {
                nominative: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                accusative: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
            },
            d = /D[oD]? *MMMM?/.test(b) ? "accusative": "nominative";
            return c[d][a.month()]
        }
        function e(a, b) {
            var c = {
                nominative: "янв_фев_мар_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                accusative: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")
            },
            d = /D[oD]? *MMMM?/.test(b) ? "accusative": "nominative";
            return c[d][a.month()]
        }
        function f(a, b) {
            var c = {
                nominative: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                accusative: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")
            },
            d = /\[ ?[Вв] ?(?:прошлую|следующую)? ?\] ?dddd/.test(b) ? "accusative": "nominative";
            return c[d][a.day()]
        }
        return a.lang("ru", {
            months: d,
            monthsShort: e,
            weekdays: f,
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., LT",
                LLLL: "dddd, D MMMM YYYY г., LT"
            },
            calendar: {
                sameDay: "[Сегодня в] LT",
                nextDay: "[Завтра в] LT",
                lastDay: "[Вчера в] LT",
                nextWeek: function() {
                    return 2 === this.day() ? "[Во] dddd [в] LT": "[В] dddd [в] LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[В прошлое] dddd [в] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[В прошлый] dddd [в] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[В прошлую] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                m: c,
                mm: c,
                h: "час",
                hh: c,
                d: "день",
                dd: c,
                M: "месяц",
                MM: c,
                y: "год",
                yy: c
            },
            meridiem: function(a) {
                return 4 > a ? "ночи": 12 > a ? "утра": 17 > a ? "дня": "вечера"
            },
            ordinal: function(a, b) {
                switch (b) {
                case "M":
                case "d":
                case "DDD":
                    return a + "-й";
                case "D":
                    return a + "-го";
                case "w":
                case "W":
                    return a + "-я";
                default:
                    return a
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        function b(a) {
            return a > 1 && 5 > a
        }
        function c(a, c, d, e) {
            var f = a + " ";
            switch (d) {
            case "s":
                return c || e ? "pár sekúnd": "pár sekundami";
            case "m":
                return c ? "minúta": e ? "minútu": "minútou";
            case "mm":
                return c || e ? f + (b(a) ? "minúty": "minút") : f + "minútami";
            case "h":
                return c ? "hodina": e ? "hodinu": "hodinou";
            case "hh":
                return c || e ? f + (b(a) ? "hodiny": "hodín") : f + "hodinami";
            case "d":
                return c || e ? "deň": "dňom";
            case "dd":
                return c || e ? f + (b(a) ? "dni": "dní") : f + "dňami";
            case "M":
                return c || e ? "mesiac": "mesiacom";
            case "MM":
                return c || e ? f + (b(a) ? "mesiace": "mesiacov") : f + "mesiacmi";
            case "y":
                return c || e ? "rok": "rokom";
            case "yy":
                return c || e ? f + (b(a) ? "roky": "rokov") : f + "rokmi"
            }
        }
        var d = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
        e = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
        return a.lang("sk", {
            months: d,
            monthsShort: e,
            monthsParse: function(a, b) {
                var c, d = [];
                for (c = 0; 12 > c; c++) d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
                return d
            } (d, e),
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[v nedeľu o] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [o] LT";
                    case 3:
                        return "[v stredu o] LT";
                    case 4:
                        return "[vo štvrtok o] LT";
                    case 5:
                        return "[v piatok o] LT";
                    case 6:
                        return "[v sobotu o] LT"
                    }
                },
                lastDay: "[včera o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[minulú nedeľu o] LT";
                    case 1:
                    case 2:
                        return "[minulý] dddd [o] LT";
                    case 3:
                        return "[minulú stredu o] LT";
                    case 4:
                    case 5:
                        return "[minulý] dddd [o] LT";
                    case 6:
                        return "[minulú sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: c,
                m: c,
                mm: c,
                h: c,
                hh: c,
                d: c,
                dd: c,
                M: c,
                MM: c,
                y: c,
                yy: c
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        function b(a, b, c) {
            var d = a + " ";
            switch (c) {
            case "m":
                return b ? "ena minuta": "eno minuto";
            case "mm":
                return d += 1 === a ? "minuta": 2 === a ? "minuti": 3 === a || 4 === a ? "minute": "minut";
            case "h":
                return b ? "ena ura": "eno uro";
            case "hh":
                return d += 1 === a ? "ura": 2 === a ? "uri": 3 === a || 4 === a ? "ure": "ur";
            case "dd":
                return d += 1 === a ? "dan": "dni";
            case "MM":
                return d += 1 === a ? "mesec": 2 === a ? "meseca": 3 === a || 4 === a ? "mesece": "mesecev";
            case "yy":
                return d += 1 === a ? "leto": 2 === a ? "leti": 3 === a || 4 === a ? "leta": "let"
            }
        }
        return a.lang("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[v] [nedeljo] [ob] LT";
                    case 3:
                        return "[v] [sredo] [ob] LT";
                    case 6:
                        return "[v] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[včeraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[prejšnja] dddd [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prejšnji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "%s nazaj",
                s: "nekaj sekund",
                m: b,
                mm: b,
                h: b,
                hh: b,
                d: "en dan",
                dd: b,
                M: "en mesec",
                MM: b,
                y: "eno leto",
                yy: b
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Marte_E Mërkure_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Neser në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s me parë",
                s: "disa seconda",
                m: "një minut",
                mm: "%d minutea",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "dddd LT",
                lastWeek: "[Förra] dddd[en] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            ordinal: function(a) {
                var b = a % 10,
                c = 1 === ~~ (a % 100 / 10) ? "e": 1 === b ? "a": 2 === b ? "a": 3 === b ? "e": "e";
                return a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            longDateFormat: {
                LT: "H นาฬิกา m นาที",
                L: "YYYY/MM/DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา LT",
                LLLL: "วันddddที่ D MMMM YYYY เวลา LT"
            },
            meridiem: function(a) {
                return 12 > a ? "ก่อนเที่ยง": "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        var b = {
            1 : "'inci",
            5 : "'inci",
            8 : "'inci",
            70 : "'inci",
            80 : "'inci",
            2 : "'nci",
            7 : "'nci",
            20 : "'nci",
            50 : "'nci",
            3 : "'üncü",
            4 : "'üncü",
            100 : "'üncü",
            6 : "'ncı",
            9 : "'uncu",
            10 : "'uncu",
            30 : "'uncu",
            60 : "'ıncı",
            90 : "'ıncı"
        };
        return a.lang("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[haftaya] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen hafta] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            ordinal: function(a) {
                if (0 === a) return a + "'ıncı";
                var c = a % 10,
                d = a % 100 - c,
                e = a >= 100 ? 100 : null;
                return a + (b[c] || b[d] || b[e])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("tzm-la", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        function b(a, b) {
            var c = a.split("_");
            return 1 === b % 10 && 11 !== b % 100 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
        }
        function c(a, c, d) {
            var e = {
                mm: "хвилина_хвилини_хвилин",
                hh: "година_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            };
            return "m" === d ? c ? "хвилина": "хвилину": "h" === d ? c ? "година": "годину": a + " " + b(e[d], +a)
        }
        function d(a, b) {
            var c = {
                nominative: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),
                accusative: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")
            },
            d = /D[oD]? *MMMM?/.test(b) ? "accusative": "nominative";
            return c[d][a.month()]
        }
        function e(a, b) {
            var c = {
                nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
            },
            d = /(\[[ВвУу]\]) ?dddd/.test(b) ? "accusative": /\[?(?:минулої|наступної)? ?\] ?dddd/.test(b) ? "genitive": "nominative";
            return c[d][a.day()]
        }
        function f(a) {
            return function() {
                return a + "о" + (11 === this.hours() ? "б": "") + "] LT"
            }
        }
        return a.lang("uk", {
            months: d,
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: e,
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., LT",
                LLLL: "dddd, D MMMM YYYY р., LT"
            },
            calendar: {
                sameDay: f("[Сьогодні "),
                nextDay: f("[Завтра "),
                lastDay: f("[Вчора "),
                nextWeek: f("[У] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return f("[Минулої] dddd [").call(this);
                    case 1:
                    case 2:
                    case 4:
                        return f("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                m: c,
                mm: c,
                h: "годину",
                hh: c,
                d: "день",
                dd: c,
                M: "місяць",
                MM: c,
                y: "рік",
                yy: c
            },
            meridiem: function(a) {
                return 4 > a ? "ночі": 12 > a ? "ранку": 17 > a ? "дня": "вечора"
            },
            ordinal: function(a, b) {
                switch (b) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return a + "-й";
                case "D":
                    return a + "-го";
                default:
                    return a
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("uz", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "D MMMM YYYY, dddd LT"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("vn", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY LT",
                LLLL: "dddd, D MMMM [năm] YYYY LT",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY LT",
                llll: "ddd, D MMM YYYY LT"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần rồi lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            ordinal: function(a) {
                return a
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "Ah点mm",
                L: "YYYY年MMMD日",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日LT",
                LLLL: "YYYY年MMMD日ddddLT",
                l: "YYYY年MMMD日",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日LT",
                llll: "YYYY年MMMD日ddddLT"
            },
            meridiem: function(a, b) {
                var c = 100 * a + b;
                return 900 > c ? "早上": 1130 > c ? "上午": 1230 > c ? "中午": 1800 > c ? "下午": "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            ordinal: function(a, b) {
                switch (b) {
                case "d":
                case "D":
                case "DDD":
                    return a + "日";
                case "M":
                    return a + "月";
                case "w":
                case "W":
                    return a + "周";
                default:
                    return a
                }
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                m: "1分钟",
                mm: "%d分钟",
                h: "1小时",
                hh: "%d小时",
                d: "1天",
                dd: "%d天",
                M: "1个月",
                MM: "%d个月",
                y: "1年",
                yy: "%d年"
            }
        })
    }),
    function(a) {
        a(bb)
    } (function(a) {
        return a.lang("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "Ah點mm",
                L: "YYYY年MMMD日",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日LT",
                LLLL: "YYYY年MMMD日ddddLT",
                l: "YYYY年MMMD日",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日LT",
                llll: "YYYY年MMMD日ddddLT"
            },
            meridiem: function(a, b) {
                var c = 100 * a + b;
                return 900 > c ? "早上": 1130 > c ? "上午": 1230 > c ? "中午": 1800 > c ? "下午": "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            ordinal: function(a, b) {
                switch (b) {
                case "d":
                case "D":
                case "DDD":
                    return a + "日";
                case "M":
                    return a + "月";
                case "w":
                case "W":
                    return a + "週";
                default:
                    return a
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                m: "一分鐘",
                mm: "%d分鐘",
                h: "一小時",
                hh: "%d小時",
                d: "一天",
                dd: "%d天",
                M: "一個月",
                MM: "%d個月",
                y: "一年",
                yy: "%d年"
            }
        })
    }),
    bb.lang("en"),
    nb ? (module.exports = bb, ab()) : "function" == typeof define && define.amd ? define("moment",
    function(a, b, c) {
        return c.config().noGlobal !== !0 && ab(),
        bb
    }) : ab()
}.call(this),
function(a) {
    function b(a, b) {
        if (! (a.originalEvent.touches.length > 1)) {
            a.preventDefault();
            var c = a.originalEvent.changedTouches[0],
            d = document.createEvent("MouseEvents");
            d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null),
            a.target.dispatchEvent(d)
        }
    }
    if (a.support.touch = "ontouchend" in document, a.support.touch) {
        var c, d = a.ui.mouse.prototype,
        e = d._mouseInit;
        d._touchStart = function(a) {
            var d = this; ! c && d._mouseCapture(a.originalEvent.changedTouches[0]) && (c = !0, d._touchMoved = !1, b(a, "mouseover"), b(a, "mousemove"), b(a, "mousedown"))
        },
        d._touchMove = function(a) {
            c && (this._touchMoved = !0, b(a, "mousemove"))
        },
        d._touchEnd = function(a) {
            c && (b(a, "mouseup"), b(a, "mouseout"), this._touchMoved || b(a, "click"), c = !1)
        },
        d._mouseInit = function() {
            var b = this;
            b.element.bind("touchstart", a.proxy(b, "_touchStart")).bind("touchmove", a.proxy(b, "_touchMove")).bind("touchend", a.proxy(b, "_touchEnd")),
            e.call(b)
        }
    }
} (jQuery),
function(a) {
    var b = /android|iphone|ipad/i.test(navigator.userAgent.toLowerCase()),
    c = b ? "touchend": "click";
    a.fn.doubletap = function(b, d) {
        d = null == d ? 300 : d,
        this.bind(c,
        function(c) {
            var e = (new Date).getTime(),
            f = a(this).data("lastTouch") || e + 1,
            g = e - f;
            d > g && g > 0 ? (a(this).data("lastTouch", null), null !== b && "function" == typeof b && b(c)) : a(this).data("lastTouch", e)
        })
    }
} (jQuery),
function(a, b) {
    function c(a) {
        return l.PF.compile(a || "nplurals=2; plural=(n != 1);")
    }
    function d(a, b) {
        this._key = a,
        this._i18n = b
    }
    var e = Array.prototype,
    f = Object.prototype,
    g = e.slice,
    h = f.hasOwnProperty,
    i = e.forEach,
    j = {},
    k = {
        forEach: function(a, b, c) {
            var d, e, f;
            if (null !== a) if (i && a.forEach === i) a.forEach(b, c);
            else if (a.length === +a.length) {
                for (d = 0, e = a.length; e > d; d++) if (d in a && b.call(c, a[d], d, a) === j) return
            } else for (f in a) if (h.call(a, f) && b.call(c, a[f], f, a) === j) return
        },
        extend: function(a) {
            return this.forEach(g.call(arguments, 1),
            function(b) {
                for (var c in b) a[c] = b[c]
            }),
            a
        }
    },
    l = function(a) {
        if (this.defaults = {
            locale_data: {
                messages: {
                    "": {
                        domain: "messages",
                        lang: "en",
                        plural_forms: "nplurals=2; plural=(n != 1);"
                    }
                }
            },
            domain: "messages"
        },
        this.options = k.extend({},
        this.defaults, a), this.textdomain(this.options.domain), a.domain && !this.options.locale_data[this.options.domain]) throw new Error("Text domain set to non-existent domain: `" + a.domain + "`")
    };
    l.context_delimiter = String.fromCharCode(4),
    k.extend(d.prototype, {
        onDomain: function(a) {
            return this._domain = a,
            this
        },
        withContext: function(a) {
            return this._context = a,
            this
        },
        ifPlural: function(a, b) {
            return this._val = a,
            this._pkey = b,
            this
        },
        fetch: function(a) {
            return "[object Array]" != {}.toString.call(a) && (a = [].slice.call(arguments)),
            (a && a.length ? l.sprintf: function(a) {
                return a
            })(this._i18n.dcnpgettext(this._domain, this._context, this._key, this._pkey, this._val), a)
        }
    }),
    k.extend(l.prototype, {
        translate: function(a) {
            return new d(a, this)
        },
        textdomain: function(a) {
            return a ? void(this._textdomain = a) : this._textdomain
        },
        gettext: function(a) {
            return this.dcnpgettext.call(this, b, b, a)
        },
        dgettext: function(a, c) {
            return this.dcnpgettext.call(this, a, b, c)
        },
        dcgettext: function(a, c) {
            return this.dcnpgettext.call(this, a, b, c)
        },
        ngettext: function(a, c, d) {
            return this.dcnpgettext.call(this, b, b, a, c, d)
        },
        dngettext: function(a, c, d, e) {
            return this.dcnpgettext.call(this, a, b, c, d, e)
        },
        dcngettext: function(a, c, d, e) {
            return this.dcnpgettext.call(this, a, b, c, d, e)
        },
        pgettext: function(a, c) {
            return this.dcnpgettext.call(this, b, a, c)
        },
        dpgettext: function(a, b, c) {
            return this.dcnpgettext.call(this, a, b, c)
        },
        dcpgettext: function(a, b, c) {
            return this.dcnpgettext.call(this, a, b, c)
        },
        npgettext: function(a, c, d, e) {
            return this.dcnpgettext.call(this, b, a, c, d, e)
        },
        dnpgettext: function(a, b, c, d, e) {
            return this.dcnpgettext.call(this, a, b, c, d, e)
        },
        dcnpgettext: function(a, b, d, e, f) {
            e = e || d,
            a = a || this._textdomain,
            f = "undefined" == typeof f ? 1 : f;
            var g;
            if (!this.options) return g = new l,
            g.dcnpgettext.call(g, void 0, void 0, d, e, f);
            if (!this.options.locale_data) throw new Error("No locale data provided.");
            if (!this.options.locale_data[a]) throw new Error("Domain `" + a + "` was not found.");
            if (!this.options.locale_data[a][""]) throw new Error("No locale meta information provided.");
            if (!d) throw new Error("No translation key found.");
            if ("number" != typeof f && (f = parseInt(f, 10), isNaN(f))) throw new Error("The number that was passed in is not a number.");
            var h, i, j = b ? b + l.context_delimiter + d: d,
            k = this.options.locale_data,
            m = k[a],
            n = m[""].plural_forms || (k.messages || this.defaults.locale_data.messages)[""].plural_forms,
            o = c(n)(f) + 1;
            if (!m) throw new Error("No domain named `" + a + "` could be found.");
            return h = m[j],
            !h || o >= h.length ? (this.options.missing_key_callback && this.options.missing_key_callback(j), i = [null, d, e], i[c(n)(f) + 1]) : (i = h[o], i ? i: (i = [null, d, e], i[c(n)(f) + 1]))
        }
    });
    var m = function() {
        function a(a) {
            return Object.prototype.toString.call(a).slice(8, -1).toLowerCase()
        }
        function b(a, b) {
            for (var c = []; b > 0; c[--b] = a);
            return c.join("")
        }
        var c = function() {
            return c.cache.hasOwnProperty(arguments[0]) || (c.cache[arguments[0]] = c.parse(arguments[0])),
            c.format.call(null, c.cache[arguments[0]], arguments)
        };
        return c.format = function(c, d) {
            var e, f, g, h, i, j, k, l = 1,
            n = c.length,
            o = "",
            p = [];
            for (f = 0; n > f; f++) if (o = a(c[f]), "string" === o) p.push(c[f]);
            else if ("array" === o) {
                if (h = c[f], h[2]) for (e = d[l], g = 0; g < h[2].length; g++) {
                    if (!e.hasOwnProperty(h[2][g])) throw m('[sprintf] property "%s" does not exist', h[2][g]);
                    e = e[h[2][g]]
                } else e = h[1] ? d[h[1]] : d[l++];
                if (/[^s]/.test(h[8]) && "number" != a(e)) throw m("[sprintf] expecting number but found %s", a(e));
                switch (("undefined" == typeof e || null === e) && (e = ""), h[8]) {
                case "b":
                    e = e.toString(2);
                    break;
                case "c":
                    e = String.fromCharCode(e);
                    break;
                case "d":
                    e = parseInt(e, 10);
                    break;
                case "e":
                    e = h[7] ? e.toExponential(h[7]) : e.toExponential();
                    break;
                case "f":
                    e = h[7] ? parseFloat(e).toFixed(h[7]) : parseFloat(e);
                    break;
                case "o":
                    e = e.toString(8);
                    break;
                case "s":
                    e = (e = String(e)) && h[7] ? e.substring(0, h[7]) : e;
                    break;
                case "u":
                    e = Math.abs(e);
                    break;
                case "x":
                    e = e.toString(16);
                    break;
                case "X":
                    e = e.toString(16).toUpperCase()
                }
                e = /[def]/.test(h[8]) && h[3] && e >= 0 ? "+" + e: e,
                j = h[4] ? "0" == h[4] ? "0": h[4].charAt(1) : " ",
                k = h[6] - String(e).length,
                i = h[6] ? b(j, k) : "",
                p.push(h[5] ? e + i: i + e)
            }
            return p.join("")
        },
        c.cache = {},
        c.parse = function(a) {
            for (var b = a,
            c = [], d = [], e = 0; b;) {
                if (null !== (c = /^[^\x25]+/.exec(b))) d.push(c[0]);
                else if (null !== (c = /^\x25{2}/.exec(b))) d.push("%");
                else {
                    if (null === (c = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(b))) throw "[sprintf] huh?";
                    if (c[2]) {
                        e |= 1;
                        var f = [],
                        g = c[2],
                        h = [];
                        if (null === (h = /^([a-z_][a-z_\d]*)/i.exec(g))) throw "[sprintf] huh?";
                        for (f.push(h[1]);
                        "" !== (g = g.substring(h[0].length));) if (null !== (h = /^\.([a-z_][a-z_\d]*)/i.exec(g))) f.push(h[1]);
                        else {
                            if (null === (h = /^\[(\d+)\]/.exec(g))) throw "[sprintf] huh?";
                            f.push(h[1])
                        }
                        c[2] = f
                    } else e |= 2;
                    if (3 === e) throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
                    d.push(c)
                }
                b = b.substring(c[0].length)
            }
            return d
        },
        c
    } (),
    n = function(a, b) {
        return b.unshift(a),
        m.apply(null, b)
    };
    l.parse_plural = function(a, b) {
        return a = a.replace(/n/g, b),
        l.parse_expression(a)
    },
    l.sprintf = function(a, b) {
        return "[object Array]" == {}.toString.call(b) ? n(a, [].slice.call(b)) : m.apply(this, [].slice.call(arguments))
    },
    l.prototype.sprintf = function() {
        return l.sprintf.apply(this, arguments)
    },
    l.PF = {},
    l.PF.parse = function(a) {
        var b = l.PF.extractPluralExpr(a);
        return l.PF.parser.parse.call(l.PF.parser, b)
    },
    l.PF.compile = function(a) {
        function b(a) {
            return a === !0 ? 1 : a ? a: 0
        }
        var c = l.PF.parse(a);
        return function(a) {
            return b(l.PF.interpreter(c)(a))
        }
    },
    l.PF.interpreter = function(a) {
        return function(b) {
            switch (a.type) {
            case "GROUP":
                return l.PF.interpreter(a.expr)(b);
            case "TERNARY":
                return l.PF.interpreter(a.expr)(b) ? l.PF.interpreter(a.truthy)(b) : l.PF.interpreter(a.falsey)(b);
            case "OR":
                return l.PF.interpreter(a.left)(b) || l.PF.interpreter(a.right)(b);
            case "AND":
                return l.PF.interpreter(a.left)(b) && l.PF.interpreter(a.right)(b);
            case "LT":
                return l.PF.interpreter(a.left)(b) < l.PF.interpreter(a.right)(b);
            case "GT":
                return l.PF.interpreter(a.left)(b) > l.PF.interpreter(a.right)(b);
            case "LTE":
                return l.PF.interpreter(a.left)(b) <= l.PF.interpreter(a.right)(b);
            case "GTE":
                return l.PF.interpreter(a.left)(b) >= l.PF.interpreter(a.right)(b);
            case "EQ":
                return l.PF.interpreter(a.left)(b) == l.PF.interpreter(a.right)(b);
            case "NEQ":
                return l.PF.interpreter(a.left)(b) != l.PF.interpreter(a.right)(b);
            case "MOD":
                return l.PF.interpreter(a.left)(b) % l.PF.interpreter(a.right)(b);
            case "VAR":
                return b;
            case "NUM":
                return a.val;
            default:
                throw new Error("Invalid Token found.")
            }
        }
    },
    l.PF.extractPluralExpr = function(a) {
        a = a.replace(/^\s\s*/, "").replace(/\s\s*$/, ""),
        /;\s*$/.test(a) || (a = a.concat(";"));
        var b, c = /nplurals\=(\d+);/,
        d = /plural\=(.*);/,
        e = a.match(c),
        f = {};
        if (! (e.length > 1)) throw new Error("nplurals not found in plural_forms string: " + a);
        if (f.nplurals = e[1], a = a.replace(c, ""), b = a.match(d), !(b && b.length > 1)) throw new Error("`plural` expression not found: " + a);
        return b[1]
    },
    l.PF.parser = function() {
        var a = {
            trace: function() {},
            yy: {},
            symbols_: {
                error: 2,
                expressions: 3,
                e: 4,
                EOF: 5,
                "?": 6,
                ":": 7,
                "||": 8,
                "&&": 9,
                "<": 10,
                "<=": 11,
                ">": 12,
                ">=": 13,
                "!=": 14,
                "==": 15,
                "%": 16,
                "(": 17,
                ")": 18,
                n: 19,
                NUMBER: 20,
                $accept: 0,
                $end: 1
            },
            terminals_: {
                2 : "error",
                5 : "EOF",
                6 : "?",
                7 : ":",
                8 : "||",
                9 : "&&",
                10 : "<",
                11 : "<=",
                12 : ">",
                13 : ">=",
                14 : "!=",
                15 : "==",
                16 : "%",
                17 : "(",
                18 : ")",
                19 : "n",
                20 : "NUMBER"
            },
            productions_: [0, [3, 2], [4, 5], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 1], [4, 1]],
            performAction: function(a, b, c, d, e, f) {
                var g = f.length - 1;
                switch (e) {
                case 1:
                    return {
                        type:
                        "GROUP",
                        expr: f[g - 1]
                    };
                case 2:
                    this.$ = {
                        type: "TERNARY",
                        expr: f[g - 4],
                        truthy: f[g - 2],
                        falsey: f[g]
                    };
                    break;
                case 3:
                    this.$ = {
                        type: "OR",
                        left: f[g - 2],
                        right: f[g]
                    };
                    break;
                case 4:
                    this.$ = {
                        type: "AND",
                        left: f[g - 2],
                        right: f[g]
                    };
                    break;
                case 5:
                    this.$ = {
                        type: "LT",
                        left: f[g - 2],
                        right: f[g]
                    };
                    break;
                case 6:
                    this.$ = {
                        type: "LTE",
                        left: f[g - 2],
                        right: f[g]
                    };
                    break;
                case 7:
                    this.$ = {
                        type: "GT",
                        left: f[g - 2],
                        right: f[g]
                    };
                    break;
                case 8:
                    this.$ = {
                        type: "GTE",
                        left: f[g - 2],
                        right: f[g]
                    };
                    break;
                case 9:
                    this.$ = {
                        type: "NEQ",
                        left: f[g - 2],
                        right: f[g]
                    };
                    break;
                case 10:
                    this.$ = {
                        type: "EQ",
                        left: f[g - 2],
                        right: f[g]
                    };
                    break;
                case 11:
                    this.$ = {
                        type: "MOD",
                        left: f[g - 2],
                        right: f[g]
                    };
                    break;
                case 12:
                    this.$ = {
                        type: "GROUP",
                        expr: f[g - 1]
                    };
                    break;
                case 13:
                    this.$ = {
                        type: "VAR"
                    };
                    break;
                case 14:
                    this.$ = {
                        type: "NUM",
                        val: Number(a)
                    }
                }
            },
            table: [{
                3 : 1,
                4 : 2,
                17 : [1, 3],
                19 : [1, 4],
                20 : [1, 5]
            },
            {
                1 : [3]
            },
            {
                5 : [1, 6],
                6 : [1, 7],
                8 : [1, 8],
                9 : [1, 9],
                10 : [1, 10],
                11 : [1, 11],
                12 : [1, 12],
                13 : [1, 13],
                14 : [1, 14],
                15 : [1, 15],
                16 : [1, 16]
            },
            {
                4 : 17,
                17 : [1, 3],
                19 : [1, 4],
                20 : [1, 5]
            },
            {
                5 : [2, 13],
                6 : [2, 13],
                7 : [2, 13],
                8 : [2, 13],
                9 : [2, 13],
                10 : [2, 13],
                11 : [2, 13],
                12 : [2, 13],
                13 : [2, 13],
                14 : [2, 13],
                15 : [2, 13],
                16 : [2, 13],
                18 : [2, 13]
            },
            {
                5 : [2, 14],
                6 : [2, 14],
                7 : [2, 14],
                8 : [2, 14],
                9 : [2, 14],
                10 : [2, 14],
                11 : [2, 14],
                12 : [2, 14],
                13 : [2, 14],
                14 : [2, 14],
                15 : [2, 14],
                16 : [2, 14],
                18 : [2, 14]
            },
            {
                1 : [2, 1]
            },
            {
                4 : 18,
                17 : [1, 3],
                19 : [1, 4],
                20 : [1, 5]
            },
            {
                4 : 19,
                17 : [1, 3],
                19 : [1, 4],
                20 : [1, 5]
            },
            {
                4 : 20,
                17 : [1, 3],
                19 : [1, 4],
                20 : [1, 5]
            },
            {
                4 : 21,
                17 : [1, 3],
                19 : [1, 4],
                20 : [1, 5]
            },
            {
                4 : 22,
                17 : [1, 3],
                19 : [1, 4],
                20 : [1, 5]
            },
            {
                4 : 23,
                17 : [1, 3],
                19 : [1, 4],
                20 : [1, 5]
            },
            {
                4 : 24,
                17 : [1, 3],
                19 : [1, 4],
                20 : [1, 5]
            },
            {
                4 : 25,
                17 : [1, 3],
                19 : [1, 4],
                20 : [1, 5]
            },
            {
                4 : 26,
                17 : [1, 3],
                19 : [1, 4],
                20 : [1, 5]
            },
            {
                4 : 27,
                17 : [1, 3],
                19 : [1, 4],
                20 : [1, 5]
            },
            {
                6 : [1, 7],
                8 : [1, 8],
                9 : [1, 9],
                10 : [1, 10],
                11 : [1, 11],
                12 : [1, 12],
                13 : [1, 13],
                14 : [1, 14],
                15 : [1, 15],
                16 : [1, 16],
                18 : [1, 28]
            },
            {
                6 : [1, 7],
                7 : [1, 29],
                8 : [1, 8],
                9 : [1, 9],
                10 : [1, 10],
                11 : [1, 11],
                12 : [1, 12],
                13 : [1, 13],
                14 : [1, 14],
                15 : [1, 15],
                16 : [1, 16]
            },
            {
                5 : [2, 3],
                6 : [2, 3],
                7 : [2, 3],
                8 : [2, 3],
                9 : [1, 9],
                10 : [1, 10],
                11 : [1, 11],
                12 : [1, 12],
                13 : [1, 13],
                14 : [1, 14],
                15 : [1, 15],
                16 : [1, 16],
                18 : [2, 3]
            },
            {
                5 : [2, 4],
                6 : [2, 4],
                7 : [2, 4],
                8 : [2, 4],
                9 : [2, 4],
                10 : [1, 10],
                11 : [1, 11],
                12 : [1, 12],
                13 : [1, 13],
                14 : [1, 14],
                15 : [1, 15],
                16 : [1, 16],
                18 : [2, 4]
            },
            {
                5 : [2, 5],
                6 : [2, 5],
                7 : [2, 5],
                8 : [2, 5],
                9 : [2, 5],
                10 : [2, 5],
                11 : [2, 5],
                12 : [2, 5],
                13 : [2, 5],
                14 : [2, 5],
                15 : [2, 5],
                16 : [1, 16],
                18 : [2, 5]
            },
            {
                5 : [2, 6],
                6 : [2, 6],
                7 : [2, 6],
                8 : [2, 6],
                9 : [2, 6],
                10 : [2, 6],
                11 : [2, 6],
                12 : [2, 6],
                13 : [2, 6],
                14 : [2, 6],
                15 : [2, 6],
                16 : [1, 16],
                18 : [2, 6]
            },
            {
                5 : [2, 7],
                6 : [2, 7],
                7 : [2, 7],
                8 : [2, 7],
                9 : [2, 7],
                10 : [2, 7],
                11 : [2, 7],
                12 : [2, 7],
                13 : [2, 7],
                14 : [2, 7],
                15 : [2, 7],
                16 : [1, 16],
                18 : [2, 7]
            },
            {
                5 : [2, 8],
                6 : [2, 8],
                7 : [2, 8],
                8 : [2, 8],
                9 : [2, 8],
                10 : [2, 8],
                11 : [2, 8],
                12 : [2, 8],
                13 : [2, 8],
                14 : [2, 8],
                15 : [2, 8],
                16 : [1, 16],
                18 : [2, 8]
            },
            {
                5 : [2, 9],
                6 : [2, 9],
                7 : [2, 9],
                8 : [2, 9],
                9 : [2, 9],
                10 : [2, 9],
                11 : [2, 9],
                12 : [2, 9],
                13 : [2, 9],
                14 : [2, 9],
                15 : [2, 9],
                16 : [1, 16],
                18 : [2, 9]
            },
            {
                5 : [2, 10],
                6 : [2, 10],
                7 : [2, 10],
                8 : [2, 10],
                9 : [2, 10],
                10 : [2, 10],
                11 : [2, 10],
                12 : [2, 10],
                13 : [2, 10],
                14 : [2, 10],
                15 : [2, 10],
                16 : [1, 16],
                18 : [2, 10]
            },
            {
                5 : [2, 11],
                6 : [2, 11],
                7 : [2, 11],
                8 : [2, 11],
                9 : [2, 11],
                10 : [2, 11],
                11 : [2, 11],
                12 : [2, 11],
                13 : [2, 11],
                14 : [2, 11],
                15 : [2, 11],
                16 : [2, 11],
                18 : [2, 11]
            },
            {
                5 : [2, 12],
                6 : [2, 12],
                7 : [2, 12],
                8 : [2, 12],
                9 : [2, 12],
                10 : [2, 12],
                11 : [2, 12],
                12 : [2, 12],
                13 : [2, 12],
                14 : [2, 12],
                15 : [2, 12],
                16 : [2, 12],
                18 : [2, 12]
            },
            {
                4 : 30,
                17 : [1, 3],
                19 : [1, 4],
                20 : [1, 5]
            },
            {
                5 : [2, 2],
                6 : [1, 7],
                7 : [2, 2],
                8 : [1, 8],
                9 : [1, 9],
                10 : [1, 10],
                11 : [1, 11],
                12 : [1, 12],
                13 : [1, 13],
                14 : [1, 14],
                15 : [1, 15],
                16 : [1, 16],
                18 : [2, 2]
            }],
            defaultActions: {
                6 : [2, 1]
            },
            parseError: function(a) {
                throw new Error(a)
            },
            parse: function(a) {
                function b(a) {
                    e.length = e.length - 2 * a,
                    f.length = f.length - a,
                    g.length = g.length - a
                }
                function c() {
                    var a;
                    return a = d.lexer.lex() || 1,
                    "number" != typeof a && (a = d.symbols_[a] || a),
                    a
                }
                var d = this,
                e = [0],
                f = [null],
                g = [],
                h = this.table,
                i = "",
                j = 0,
                k = 0,
                l = 0,
                m = 2,
                n = 1;
                this.lexer.setInput(a),
                this.lexer.yy = this.yy,
                this.yy.lexer = this.lexer,
                "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                var o = this.lexer.yylloc;
                g.push(o),
                "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                for (var p, q, r, s, t, u, v, w, x, y = {};;) {
                    if (r = e[e.length - 1], this.defaultActions[r] ? s = this.defaultActions[r] : (null == p && (p = c()), s = h[r] && h[r][p]), "undefined" == typeof s || !s.length || !s[0]) {
                        if (!l) {
                            x = [];
                            for (u in h[r]) this.terminals_[u] && u > 2 && x.push("'" + this.terminals_[u] + "'");
                            var z = "";
                            z = this.lexer.showPosition ? "Parse error on line " + (j + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + x.join(", ") + ", got '" + this.terminals_[p] + "'": "Parse error on line " + (j + 1) + ": Unexpected " + (1 == p ? "end of input": "'" + (this.terminals_[p] || p) + "'"),
                            this.parseError(z, {
                                text: this.lexer.match,
                                token: this.terminals_[p] || p,
                                line: this.lexer.yylineno,
                                loc: o,
                                expected: x
                            })
                        }
                        if (3 == l) {
                            if (p == n) throw new Error(z || "Parsing halted.");
                            k = this.lexer.yyleng,
                            i = this.lexer.yytext,
                            j = this.lexer.yylineno,
                            o = this.lexer.yylloc,
                            p = c()
                        }
                        for (;;) {
                            if (m.toString() in h[r]) break;
                            if (0 == r) throw new Error(z || "Parsing halted.");
                            b(1),
                            r = e[e.length - 1]
                        }
                        q = p,
                        p = m,
                        r = e[e.length - 1],
                        s = h[r] && h[r][m],
                        l = 3
                    }
                    if (s[0] instanceof Array && s.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + r + ", token: " + p);
                    switch (s[0]) {
                    case 1:
                        e.push(p),
                        f.push(this.lexer.yytext),
                        g.push(this.lexer.yylloc),
                        e.push(s[1]),
                        p = null,
                        q ? (p = q, q = null) : (k = this.lexer.yyleng, i = this.lexer.yytext, j = this.lexer.yylineno, o = this.lexer.yylloc, l > 0 && l--);
                        break;
                    case 2:
                        if (v = this.productions_[s[1]][1], y.$ = f[f.length - v], y._$ = {
                            first_line: g[g.length - (v || 1)].first_line,
                            last_line: g[g.length - 1].last_line,
                            first_column: g[g.length - (v || 1)].first_column,
                            last_column: g[g.length - 1].last_column
                        },
                        t = this.performAction.call(y, i, k, j, this.yy, s[1], f, g), "undefined" != typeof t) return t;
                        v && (e = e.slice(0, -1 * v * 2), f = f.slice(0, -1 * v), g = g.slice(0, -1 * v)),
                        e.push(this.productions_[s[1]][0]),
                        f.push(y.$),
                        g.push(y._$),
                        w = h[e[e.length - 2]][e[e.length - 1]],
                        e.push(w);
                        break;
                    case 3:
                        return ! 0
                    }
                }
                return ! 0
            }
        },
        b = function() {
            var a = {
                EOF: 1,
                parseError: function(a, b) {
                    if (!this.yy.parseError) throw new Error(a);
                    this.yy.parseError(a, b)
                },
                setInput: function(a) {
                    return this._input = a,
                    this._more = this._less = this.done = !1,
                    this.yylineno = this.yyleng = 0,
                    this.yytext = this.matched = this.match = "",
                    this.conditionStack = ["INITIAL"],
                    this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0
                    },
                    this
                },
                input: function() {
                    var a = this._input[0];
                    this.yytext += a,
                    this.yyleng++,
                    this.match += a,
                    this.matched += a;
                    var b = a.match(/\n/);
                    return b && this.yylineno++,
                    this._input = this._input.slice(1),
                    a
                },
                unput: function(a) {
                    return this._input = a + this._input,
                    this
                },
                more: function() {
                    return this._more = !0,
                    this
                },
                pastInput: function() {
                    var a = this.matched.substr(0, this.matched.length - this.match.length);
                    return (a.length > 20 ? "...": "") + a.substr( - 20).replace(/\n/g, "")
                },
                upcomingInput: function() {
                    var a = this.match;
                    return a.length < 20 && (a += this._input.substr(0, 20 - a.length)),
                    (a.substr(0, 20) + (a.length > 20 ? "...": "")).replace(/\n/g, "")
                },
                showPosition: function() {
                    var a = this.pastInput(),
                    b = new Array(a.length + 1).join("-");
                    return a + this.upcomingInput() + "\n" + b + "^"
                },
                next: function() {
                    if (this.done) return this.EOF;
                    this._input || (this.done = !0);
                    var a, b, c;
                    this._more || (this.yytext = "", this.match = "");
                    for (var d = this._currentRules(), e = 0; e < d.length; e++) if (b = this._input.match(this.rules[d[e]])) return c = b[0].match(/\n.*/g),
                    c && (this.yylineno += c.length),
                    this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: c ? c[c.length - 1].length - 1 : this.yylloc.last_column + b[0].length
                    },
                    this.yytext += b[0],
                    this.match += b[0],
                    this.matches = b,
                    this.yyleng = this.yytext.length,
                    this._more = !1,
                    this._input = this._input.slice(b[0].length),
                    this.matched += b[0],
                    a = this.performAction.call(this, this.yy, this, d[e], this.conditionStack[this.conditionStack.length - 1]),
                    a ? a: void 0;
                    return "" === this._input ? this.EOF: void this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    })
                },
                lex: function() {
                    var a = this.next();
                    return "undefined" != typeof a ? a: this.lex()
                },
                begin: function(a) {
                    this.conditionStack.push(a)
                },
                popState: function() {
                    return this.conditionStack.pop()
                },
                _currentRules: function() {
                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                },
                topState: function() {
                    return this.conditionStack[this.conditionStack.length - 2]
                },
                pushState: function(a) {
                    this.begin(a)
                }
            };
            return a.performAction = function(a, b, c, d) {
                switch (c) {
                case 0:
                    break;
                case 1:
                    return 20;
                case 2:
                    return 19;
                case 3:
                    return 8;
                case 4:
                    return 9;
                case 5:
                    return 6;
                case 6:
                    return 7;
                case 7:
                    return 11;
                case 8:
                    return 13;
                case 9:
                    return 10;
                case 10:
                    return 12;
                case 11:
                    return 14;
                case 12:
                    return 15;
                case 13:
                    return 16;
                case 14:
                    return 17;
                case 15:
                    return 18;
                case 16:
                    return 5;
                case 17:
                    return "INVALID"
                }
            },
            a.rules = [/^\s+/, /^[0-9]+(\.[0-9]+)?\b/, /^n\b/, /^\|\|/, /^&&/, /^\?/, /^:/, /^<=/, /^>=/, /^</, /^>/, /^!=/, /^==/, /^%/, /^\(/, /^\)/, /^$/, /^./],
            a.conditions = {
                INITIAL: {
                    rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                    inclusive: !0
                }
            },
            a
        } ();
        return a.lexer = b,
        a
    } (),
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = l), exports.Jed = l) : ("function" == typeof define && define.amd && define("jed",
    function() {
        return l
    }), a.Jed = l)
} (this),
function() { !
    function(a) {
        var b, c;
        return b = document.createElement("input"),
        b.setAttribute("type", "number"),
        "text" !== b.type ? void(a.fn.inputNumber = function() {
            return a(this)
        }) : (a.fn.inputNumber = function() {
            return a(this).filter('input[type="number"]').each(function() {
                c.polyfills.push(new c(this))
            }),
            a(this)
        },
        c = function(b) {
            var d, e, f, g, h = this;
            this.elem = a(b),
            g = this.elem.outerHeight() / 2 + "px",
            this.upBtn = a("<div/>", {
                "class": "number-spin-btn number-spin-btn-up",
                style: "height: " + g
            }),
            this.downBtn = a("<div/>", {
                "class": "number-spin-btn number-spin-btn-down",
                style: "height: " + g
            }),
            this.btnContainer = a("<div/>", {
                "class": "number-spin-btn-container"
            }),
            d = a("<span/>", {
                style: "white-space: nowrap"
            }),
            this.upBtn.appendTo(this.btnContainer),
            this.downBtn.appendTo(this.btnContainer),
            this.elem.wrap(d),
            this.btnContainer.insertAfter(this.elem),
            this.elem.on({
                focus: function() {
                    h.elem.on({
                        DOMMouseScroll: c.domMouseScrollHandler,
                        mousewheel: c.mouseWheelHandler
                    },
                    {
                        p: h
                    })
                },
                blur: function() {
                    h.elem.off({
                        DOMMouseScroll: c.domMouseScrollHandler,
                        mousewheel: c.mouseWheelHandler
                    })
                }
            }),
            this.elem.on({
                keypress: c.elemKeypressHandler,
                change: c.elemChangeHandler
            },
            {
                p: this
            }),
            this.upBtn.on("mousedown", {
                p: this,
                func: "increment"
            },
            c.elemBtnMousedownHandler),
            this.downBtn.on("mousedown", {
                p: this,
                func: "decrement"
            },
            c.elemBtnMousedownHandler),
            this.elem.css("textAlign", "right"),
            this.attrMutationHandler("class"),
            "undefined" != typeof WebKitMutationObserver && null !== WebKitMutationObserver || void 0 !== e && null !== e ? ("undefined" == typeof WebKitMutationObserver || null === WebKitMutationObserver || void 0 !== e && null !== e || (e = WebKitMutationObserver), f = new e(function(a) {
                var b, c, d;
                for (c = 0, d = a.length; d > c; c++) b = a[c],
                "attributes" === b.type && h.attrMutationHandler(b.attributeName, b.oldValue, h.elem.attr(b.attributeName))
            }), f.observe(b, {
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: ["class", "style", "min", "max", "step"]
            })) : "undefined" != typeof MutationEvent && null !== MutationEvent && this.elem.on("DOMAttrModified",
            function(a) {
                h.attrMutationHandler(a.originalEvent.attrName, a.originalEvent.prevValue, a.originalEvent.newValue)
            })
        },
        c.polyfills = [], c.isNumber = function(a) {
            return null != a && "function" == typeof a.toString ? /^-?\d+(?:\.\d+)?$/.test("" + a) : !1
        },
        c.isFloat = function(a) {
            return null != a && "function" == typeof a.toString ? /^-?\d+\.\d+$/.test("" + a) : !1
        },
        c.isInt = function(a) {
            return null != a && "function" == typeof a.toString ? /^-?\d+$/.test("" + a) : !1
        },
        c.isNegative = function(a) {
            return null != a && "function" == typeof a.toString ? /^-\d+(?:\.\d+)?$/.test("" + a) : !1
        },
        c.raiseNum = function(a) {
            var b, d, e;
            if ("number" == typeof a || "object" == typeof a && a instanceof Number) return a % 1 ? {
                num: "" + a,
                precision: 0
            }: c.raiseNum("" + a);
            if ("string" == typeof a || "object" == typeof a && a instanceof String) {
                if (c.isFloat(a)) return a = a.replace(/(\.\d)0+$/, "$1"),
                e = c.getPrecision(a),
                d = a.slice(0, -(e + 1)) + a.slice( - e),
                d = d.replace(/^(-?)0+(\d+)/, "$1$2"),
                b = {
                    num: d,
                    precision: e
                };
                if (c.isInt(a)) return {
                    num: a,
                    precision: 0
                }
            }
        },
        c.raiseNumPrecision = function(a, c) {
            var d, e;
            if (c > a.precision) {
                for (b = d = e = a.precision; c >= e ? c > d: d > c; b = c >= e ? ++d: --d) a.num += "0";
                a.precision = c
            }
        },
        c.lowerNum = function(a) {
            if (a.precision > 0) {
                for (; a.num.length < a.precision + 1;) a.num = c.isNegative(a.num) ? a.num.slice(0, 1) + "0" + a.num.slice(1) : "0" + a.num;
                return (a.num.slice(0, -a.precision) + "." + a.num.slice( - a.precision)).replace(/\.?0+$/, "").replace(/^(-?)(\.)/, "$10$2")
            }
            return a.num
        },
        c.preciseAdd = function(a, b) {
            var d, e, f;
            if (("number" == typeof a || "object" == typeof a && a instanceof Number) && ("number" == typeof b || "object" == typeof b && b instanceof Number)) return 0 === a % 1 && 0 === b % 1 ? "" + (a + b) : c.preciseAdd("" + a, "" + b);
            if (("string" == typeof a || "object" == typeof a && a instanceof String) && ("string" == typeof b || "object" == typeof b && b instanceof String)) {
                if (c.isNumber(a)) {
                    if (c.isNumber(b)) {
                        if (c.isInt(a)) {
                            if (c.isInt(b)) return c.preciseAdd(parseInt(a, 10), parseInt(b, 10));
                            c.isFloat(b) && (a += ".0")
                        } else c.isFloat(a) && c.isInt(b) && (b += ".0");
                        if (d = c.raiseNum(a), e = c.raiseNum(b), d.precision < e.precision ? c.raiseNumPrecision(d, e.precision) : d.precision > e.precision && c.raiseNumPrecision(e, d.precision), f = "" + (parseInt(d.num, 10) + parseInt(e.num, 10)), d.precision > 0) {
                            if (c.isNegative(f)) for (; d.precision > f.length - 1;) f = "-0" + f.slice(1);
                            else for (; d.precision > f.length;) f = "0" + f;
                            f = c.lowerNum({
                                num: f,
                                precision: d.precision
                            })
                        }
                        return f = f.replace(/^(-?)\./, "$10."),
                        c.isFloat(f) && (f = f.replace(/0+$/, "")),
                        f
                    }
                    throw new SyntaxError('Argument "' + b + '" is not a number.')
                }
                throw new SyntaxError('Argument "' + a + '" is not a number.')
            }
            return c.preciseAdd("" + a, "" + b)
        },
        c.preciseSubtract = function(a, b) {
            return "number" == typeof b || "object" == typeof b && b instanceof Number ? c.preciseAdd(a, -b) : "string" == typeof b || "object" == typeof b && b instanceof String ? c.isNegative(b) ? c.preciseAdd(a, b.slice(1)) : c.preciseAdd(a, "-" + b) : void 0
        },
        c.getPrecision = function(a) {
            var b, d;
            if ("number" == typeof a) {
                for (b = 0, d = a; d !== Math.floor(d);) d = a * Math.pow(10, ++b);
                return b
            }
            return "string" == typeof a && c.isNumber(a) ? c.isFloat(a) ? /^-?\d+(?:\.(\d+))?$/.exec(a)[1].length: 0 : void 0
        },
        c.prototype.getParams = function() {
            var a, b, d, e;
            return d = this.elem.attr("step"),
            b = this.elem.attr("min"),
            a = this.elem.attr("max"),
            e = this.elem.val(),
            c.isNumber(d) || (d = null),
            c.isNumber(b) || (b = null),
            c.isNumber(a) || (a = null),
            c.isNumber(e) || (e = b || 0),
            {
                min: null != b ? b: null,
                max: null != a ? a: null,
                step: null != d ? d: "1",
                val: null != e ? e: null
            }
        },
        c.prototype.clipValues = function(a, b, c) {
            return null != c && parseFloat(a) > parseFloat(c) ? c: null != b && parseFloat(a) < parseFloat(b) ? b: a
        },
        c.prototype.stepNormalize = function(a) {
            var b, d, e, f, g;
            return e = this.getParams(),
            g = e.step,
            d = e.min,
            null == g ? a: (g = c.raiseNum(g), b = c.raiseNum(a), b.precision > g.precision ? c.raiseNumPrecision(g, b.precision) : b.precision < g.precision && c.raiseNumPrecision(b, g.precision), null != d && (b = c.raiseNum(c.preciseSubtract(a, d)), c.raiseNumPrecision(b, g.precision)), 0 === parseFloat(b.num) % parseFloat(g.num) ? a: (b = c.lowerNum({
                num: "" + Math.round(parseFloat(b.num) / (f = parseFloat(g.num))) * f,
                precision: b.precision
            }), null != d && (b = c.preciseAdd(b, d)), b))
        },
        c.domMouseScrollHandler = function(a) {
            var b;
            b = a.data.p,
            a.preventDefault(),
            0 > a.originalEvent.detail ? b.increment() : b.decrement()
        },
        c.mouseWheelHandler = function(a) {
            var b;
            b = a.data.p,
            a.preventDefault(),
            a.originalEvent.wheelDelta > 0 ? b.increment() : b.decrement()
        },
        c.elemKeypressHandler = function(a) {
            var b, c, d;
            b = a.data.p,
            38 === a.keyCode ? b.increment() : 40 === a.keyCode ? b.decrement() : 8 !== (c = a.keyCode) && 9 !== c && 35 !== c && 36 !== c && 37 !== c && 39 !== c && 46 !== c && 45 !== (d = a.which) && 48 !== d && 49 !== d && 50 !== d && 51 !== d && 52 !== d && 53 !== d && 54 !== d && 55 !== d && 56 !== d && 57 !== d && a.preventDefault()
        },
        c.elemChangeHandler = function(a) {
            var b, d, e, f;
            e = a.data.p,
            c.isNumber(e.elem.val()) ? (f = e.getParams(), d = e.clipValues(f.val, f.min, f.max), d = e.stepNormalize(d), "" + d !== e.elem.val() && e.elem.val(d).change()) : (b = e.elem.attr("min"), e.elem.val(null != b && c.isNumber(b) ? b: "0").change())
        },
        c.elemBtnMousedownHandler = function(b) {
            var c, d, e, f, g = this;
            d = b.data.p,
            c = b.data.func,
            d[c](),
            f = function() {
                d[c](),
                d.timeoutID = window.setTimeout(f, 10)
            },
            e = function() {
                window.clearTimeout(d.timeoutID),
                a(document).off("mouseup", e),
                a(g).off("mouseleave", e)
            },
            a(document).on("mouseup", e),
            a(this).on("mouseleave", e),
            d.timeoutID = window.setTimeout(f, 700)
        },
        c.prototype.attrMutationHandler = function(a) {
            var c, d, e, f, g;
            if ("class" === a || "style" === a) {
                for (d = {},
                c = null, g = ["opacity", "visibility", "-moz-transition-property", "-moz-transition-duration", "-moz-transition-timing-function", "-moz-transition-delay", "-webkit-transition-property", "-webkit-transition-duration", "-webkit-transition-timing-function", "-webkit-transition-delay", "-o-transition-property", "-o-transition-duration", "-o-transition-timing-function", "-o-transition-delay", "transition-property", "transition-duration", "transition-timing-function", "transition-delay"], e = 0, f = g.length; f > e; e++) b = g[e],
                (c = this.elem.css(b)) !== this.btnContainer.css(b) && (d[b] = c);
                d.display = "none" === this.elem.css("display") ? "none": "inline-block",
                this.btnContainer.css(d)
            } else("min" === a || "max" === a || "step" === a) && this.elem.change()
        },
        c.prototype.increment = function() {
            var a, b;
            this.elem.is(":disabled") || (b = this.getParams(), a = c.preciseAdd(b.val, b.step), null != b.max && parseFloat(a) > parseFloat(b.max) && (a = b.max), a = this.stepNormalize(a), this.elem.val(a).change())
        },
        c.prototype.decrement = function() {
            var a, b;
            this.elem.is(":disabled") || (b = this.getParams(), a = c.preciseSubtract(b.val, b.step), null != b.min && parseFloat(a) < parseFloat(b.min) && (a = b.min), a = this.stepNormalize(a), this.elem.val(a).change())
        },
        void a(function() {
            a('input[type="number"]').inputNumber()
        }))
    } (jQuery)
}.call(this),
function() {
    function a() {}
    function b(a, b) {
        for (var c = a.length; c--;) if (a[c].listener === b) return c;
        return - 1
    }
    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
    e = this,
    f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if ("object" == typeof a) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    },
    d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    },
    d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {},
        b[a] = c),
        b || c
    },
    d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a),
        f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c: {
            listener: c,
            once: !1
        });
        return this
    },
    d.on = c("addListener"),
    d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    },
    d.once = c("addOnceListener"),
    d.defineEvent = function(a) {
        return this.getListeners(a),
        this
    },
    d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    },
    d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    },
    d.off = c("removeListener"),
    d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    },
    d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    },
    d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener: this.addListener,
        g = a ? this.removeListeners: this.addListeners;
        if ("object" != typeof b || b instanceof RegExp) for (d = c.length; d--;) f.call(this, b, c[d]);
        else for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    },
    d.removeEvent = function(a) {
        var b, c = typeof a,
        d = this._getEvents();
        if ("string" === c) delete d[a];
        else if ("object" === c) for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    },
    d.removeAllListeners = c("removeEvent"),
    d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g) if (g.hasOwnProperty(e)) for (d = g[e].length; d--;) c = g[e][d],
        c.once === !0 && this.removeListener(a, c.listener),
        f = c.listener.apply(this, b || []),
        f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    },
    d.trigger = c("emitEvent"),
    d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    },
    d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a,
        this
    },
    d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue: !0
    },
    d._getEvents = function() {
        return this._events || (this._events = {})
    },
    a.noConflict = function() {
        return e.EventEmitter = f,
        a
    },
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [],
    function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a: this.EventEmitter = a
}.call(this),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b,
        c
    }
    var c = document.documentElement,
    d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    }: c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ?
        function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        }: function() {
            var c = b(a);
            d.call(a, c)
        },
        a.attachEvent("on" + c, a[c + d])
    });
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    }: c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch(d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
} (this),
function(a, b) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"],
    function(c, d) {
        return b(a, c, d)
    }) : "object" == typeof exports ? module.exports = b(a, require("eventEmitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
} (this,
function(a, b, c) {
    function d(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }
    function e(a) {
        return "[object Array]" === m.call(a)
    }
    function f(a) {
        var b = [];
        if (e(a)) b = a;
        else if ("number" == typeof a.length) for (var c = 0,
        d = a.length; d > c; c++) b.push(a[c]);
        else b.push(a);
        return b
    }
    function g(a, b, c) {
        if (! (this instanceof g)) return new g(a, b);
        "string" == typeof a && (a = document.querySelectorAll(a)),
        this.elements = f(a),
        this.options = d({},
        this.options),
        "function" == typeof b ? c = b: d(this.options, b),
        c && this.on("always", c),
        this.getImages(),
        j && (this.jqDeferred = new j.Deferred);
        var e = this;
        setTimeout(function() {
            e.check()
        })
    }
    function h(a) {
        this.img = a
    }
    function i(a) {
        this.src = a,
        n[a] = this
    }
    var j = a.jQuery,
    k = a.console,
    l = "undefined" != typeof k,
    m = Object.prototype.toString;
    g.prototype = new b,
    g.prototype.options = {},
    g.prototype.getImages = function() {
        this.images = [];
        for (var a = 0,
        b = this.elements.length; b > a; a++) {
            var c = this.elements[a];
            "IMG" === c.nodeName && this.addImage(c);
            for (var d = c.querySelectorAll("img"), e = 0, f = d.length; f > e; e++) {
                var g = d[e];
                this.addImage(g)
            }
        }
    },
    g.prototype.addImage = function(a) {
        var b = new h(a);
        this.images.push(b)
    },
    g.prototype.check = function() {
        function a(a, e) {
            return b.options.debug && l && k.log("confirm", a, e),
            b.progress(a),
            c++,
            c === d && b.complete(),
            !0
        }
        var b = this,
        c = 0,
        d = this.images.length;
        if (this.hasAnyBroken = !1, !d) return void this.complete();
        for (var e = 0; d > e; e++) {
            var f = this.images[e];
            f.on("confirm", a),
            f.check()
        }
    },
    g.prototype.progress = function(a) {
        this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded;
        var b = this;
        setTimeout(function() {
            b.emit("progress", b, a),
            b.jqDeferred && b.jqDeferred.notify && b.jqDeferred.notify(b, a)
        })
    },
    g.prototype.complete = function() {
        var a = this.hasAnyBroken ? "fail": "done";
        this.isComplete = !0;
        var b = this;
        setTimeout(function() {
            if (b.emit(a, b), b.emit("always", b), b.jqDeferred) {
                var c = b.hasAnyBroken ? "reject": "resolve";
                b.jqDeferred[c](b)
            }
        })
    },
    j && (j.fn.imagesLoaded = function(a, b) {
        var c = new g(this, a, b);
        return c.jqDeferred.promise(j(this))
    }),
    h.prototype = new b,
    h.prototype.check = function() {
        var a = n[this.img.src] || new i(this.img.src);
        if (a.isConfirmed) return void this.confirm(a.isLoaded, "cached was confirmed");
        if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
        var b = this;
        a.on("confirm",
        function(a, c) {
            return b.confirm(a.isLoaded, c),
            !0
        }),
        a.check()
    },
    h.prototype.confirm = function(a, b) {
        this.isLoaded = a,
        this.emit("confirm", this, b)
    };
    var n = {};
    return i.prototype = new b,
    i.prototype.check = function() {
        if (!this.isChecked) {
            var a = new Image;
            c.bind(a, "load", this),
            c.bind(a, "error", this),
            a.src = this.src,
            this.isChecked = !0
        }
    },
    i.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    },
    i.prototype.onload = function(a) {
        this.confirm(!0, "onload"),
        this.unbindProxyEvents(a)
    },
    i.prototype.onerror = function(a) {
        this.confirm(!1, "onerror"),
        this.unbindProxyEvents(a)
    },
    i.prototype.confirm = function(a, b) {
        this.isConfirmed = !0,
        this.isLoaded = a,
        this.emit("confirm", this, b)
    },
    i.prototype.unbindProxyEvents = function(a) {
        c.unbind(a.target, "load", this),
        c.unbind(a.target, "error", this)
    },
    g
}),
window.matchMedia || (window.matchMedia = function() {
    "use strict";
    var a = window.styleMedia || window.media;
    if (!a) {
        var b = document.createElement("style"),
        c = document.getElementsByTagName("script")[0],
        d = null;
        b.type = "text/css",
        b.id = "matchmediajs-test",
        c.parentNode.insertBefore(b, c),
        d = "getComputedStyle" in window && window.getComputedStyle(b, null) || b.currentStyle,
        a = {
            matchMedium: function(a) {
                var c = "@media " + a + "{ #matchmediajs-test { width: 1px; } }";
                return b.styleSheet ? b.styleSheet.cssText = c: b.textContent = c,
                "1px" === d.width
            }
        }
    }
    return function(b) {
        return {
            matches: a.matchMedium(b || "all"),
            media: b || "all"
        }
    }
} ()),
function() {
    if (window.matchMedia && window.matchMedia("all").addListener) return ! 1;
    var a = window.matchMedia,
    b = a("only all").matches,
    c = !1,
    d = 0,
    e = [],
    f = function() {
        clearTimeout(d),
        d = setTimeout(function() {
            for (var b = 0,
            c = e.length; c > b; b++) {
                var d = e[b].mql,
                f = e[b].listeners || [],
                g = a(d.media).matches;
                if (g !== d.matches) {
                    d.matches = g;
                    for (var h = 0,
                    i = f.length; i > h; h++) f[h].call(window, d)
                }
            }
        },
        30)
    };
    window.matchMedia = function(d) {
        var g = a(d),
        h = [],
        i = 0;
        return g.addListener = function(a) {
            b && (c || (c = !0, window.addEventListener("resize", f, !0)), 0 === i && (i = e.push({
                mql: g,
                listeners: h
            })), h.push(a))
        },
        g.removeListener = function(a) {
            for (var b = 0,
            c = h.length; c > b; b++) h[b] === a && h.splice(b, 1)
        },
        g
    }
} (),
function(a, b, c, d) {
    var e = c("html"),
    f = c(a),
    g = c(b),
    h = c.fancybox = function() {
        h.open.apply(this, arguments)
    },
    i = navigator.userAgent.match(/msie/i),
    j = null,
    k = b.createTouch !== d,
    l = function(a) {
        return a && a.hasOwnProperty && a instanceof c
    },
    m = function(a) {
        return a && "string" === c.type(a)
    },
    n = function(a) {
        return m(a) && 0 < a.indexOf("%")
    },
    o = function(a, b) {
        var c = parseInt(a, 10) || 0;
        return b && n(a) && (c *= h.getViewport()[b] / 100),
        Math.ceil(c)
    },
    p = function(a, b) {
        return o(a, b) + "px"
    };
    c.extend(h, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !k,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13 : "left",
                    34 : "up",
                    39 : "left",
                    40 : "up"
                },
                prev: {
                    8 : "right",
                    33 : "down",
                    37 : "right",
                    38 : "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (i ? ' allowtransparency="true"': "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: c.noop,
            beforeLoad: c.noop,
            afterLoad: c.noop,
            beforeShow: c.noop,
            afterShow: c.noop,
            beforeChange: c.noop,
            beforeClose: c.noop,
            afterClose: c.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(a, b) {
            return a && (c.isPlainObject(b) || (b = {}), !1 !== h.close(!0)) ? (c.isArray(a) || (a = l(a) ? c(a).get() : [a]), c.each(a,
            function(e, f) {
                var g, i, j, k, n, o = {};
                "object" === c.type(f) && (f.nodeType && (f = c(f)), l(f) ? (o = {
                    href: f.data("fancybox-href") || f.attr("href"),
                    title: f.data("fancybox-title") || f.attr("title"),
                    isDom: !0,
                    element: f
                },
                c.metadata && c.extend(!0, o, f.metadata())) : o = f),
                g = b.href || o.href || (m(f) ? f: null),
                i = b.title !== d ? b.title: o.title || "",
                k = (j = b.content || o.content) ? "html": b.type || o.type,
                !k && o.isDom && (k = f.data("fancybox-type"), k || (k = (k = f.prop("class").match(/fancybox\.(\w+)/)) ? k[1] : null)),
                m(g) && (k || (h.isImage(g) ? k = "image": h.isSWF(g) ? k = "swf": "#" === g.charAt(0) ? k = "inline": m(f) && (k = "html", j = f)), "ajax" === k && (n = g.split(/\s+/, 2), g = n.shift(), n = n.shift())),
                j || ("inline" === k ? g ? j = c(m(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : o.isDom && (j = f) : "html" === k ? j = g: !k && !g && o.isDom && (k = "inline", j = f)),
                c.extend(o, {
                    href: g,
                    type: k,
                    content: j,
                    title: i,
                    selector: n
                }),
                a[e] = o
            }), h.opts = c.extend(!0, {},
            h.defaults, b), b.keys !== d && (h.opts.keys = b.keys ? c.extend({},
            h.defaults.keys, b.keys) : !1), h.group = a, h._start(h.opts.index)) : void 0
        },
        cancel: function() {
            var a = h.coming;
            a && !1 !== h.trigger("onCancel") && (h.hideLoading(), h.ajaxLoad && h.ajaxLoad.abort(), h.ajaxLoad = null, h.imgPreload && (h.imgPreload.onload = h.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), h.coming = null, h.current || h._afterZoomOut(a))
        },
        close: function(a) {
            h.cancel(),
            !1 !== h.trigger("beforeClose") && (h.unbindEvents(), h.isActive && (h.isOpen && !0 !== a ? (h.isOpen = h.isOpened = !1, h.isClosing = !0, c(".fancybox-item, .fancybox-nav").remove(), h.wrap.stop(!0, !0).removeClass("fancybox-opened"), h.transitions[h.current.closeMethod]()) : (c(".fancybox-wrap").stop(!0).trigger("onReset").remove(), h._afterZoomOut())))
        },
        play: function(a) {
            var b = function() {
                clearTimeout(h.player.timer)
            },
            c = function() {
                b(),
                h.current && h.player.isActive && (h.player.timer = setTimeout(h.next, h.current.playSpeed))
            },
            d = function() {
                b(),
                g.unbind(".player"),
                h.player.isActive = !1,
                h.trigger("onPlayEnd")
            }; ! 0 === a || !h.player.isActive && !1 !== a ? h.current && (h.current.loop || h.current.index < h.group.length - 1) && (h.player.isActive = !0, g.bind({
                "onCancel.player beforeClose.player": d,
                "onUpdate.player": c,
                "beforeLoad.player": b
            }), c(), h.trigger("onPlayStart")) : d()
        },
        next: function(a) {
            var b = h.current;
            b && (m(a) || (a = b.direction.next), h.jumpto(b.index + 1, a, "next"))
        },
        prev: function(a) {
            var b = h.current;
            b && (m(a) || (a = b.direction.prev), h.jumpto(b.index - 1, a, "prev"))
        },
        jumpto: function(a, b, c) {
            var e = h.current;
            e && (a = o(a), h.direction = b || e.direction[a >= e.index ? "next": "prev"], h.router = c || "jumpto", e.loop && (0 > a && (a = e.group.length + a % e.group.length), a %= e.group.length), e.group[a] !== d && (h.cancel(), h._start(a)))
        },
        reposition: function(a, b) {
            var d, e = h.current,
            f = e ? e.wrap: null;
            f && (d = h._getPosition(b), a && "scroll" === a.type ? (delete d.position, f.stop(!0, !0).animate(d, 200)) : (f.css(d), e.pos = c.extend({},
            e.dim, d)))
        },
        update: function(a) {
            var b = a && a.type,
            c = !b || "orientationchange" === b;
            c && (clearTimeout(j), j = null),
            h.isOpen && !j && (j = setTimeout(function() {
                var d = h.current;
                d && !h.isClosing && (h.wrap.removeClass("fancybox-tmp"), (c || "load" === b || "resize" === b && d.autoResize) && h._setDimension(), "scroll" === b && d.canShrink || h.reposition(a), h.trigger("onUpdate"), j = null)
            },
            c && !k ? 0 : 300))
        },
        toggle: function(a) {
            h.isOpen && (h.current.fitToView = "boolean" === c.type(a) ? a: !h.current.fitToView, k && (h.wrap.removeAttr("style").addClass("fancybox-tmp"), h.trigger("onUpdate")), h.update())
        },
        hideLoading: function() {
            g.unbind(".loading"),
            c("#fancybox-loading").remove()
        },
        showLoading: function() {
            var a, b;
            h.hideLoading(),
            a = c('<div id="fancybox-loading"><div></div></div>').click(h.cancel).appendTo("body"),
            g.bind("keydown.loading",
            function(a) {
                27 === (a.which || a.keyCode) && (a.preventDefault(), h.cancel())
            }),
            h.defaults.fixed || (b = h.getViewport(), a.css({
                position: "absolute",
                top: .5 * b.h + b.y,
                left: .5 * b.w + b.x
            }))
        },
        getViewport: function() {
            var b = h.current && h.current.locked || !1,
            c = {
                x: f.scrollLeft(),
                y: f.scrollTop()
            };
            return b ? (c.w = b[0].clientWidth, c.h = b[0].clientHeight) : (c.w = k && a.innerWidth ? a.innerWidth: f.width(), c.h = k && a.innerHeight ? a.innerHeight: f.height()),
            c
        },
        unbindEvents: function() {
            h.wrap && l(h.wrap) && h.wrap.unbind(".fb"),
            g.unbind(".fb"),
            f.unbind(".fb")
        },
        bindEvents: function() {
            var a, b = h.current;
            b && (f.bind("orientationchange.fb" + (k ? "": " resize.fb") + (b.autoCenter && !b.locked ? " scroll.fb": ""), h.update), (a = b.keys) && g.bind("keydown.fb",
            function(e) {
                var f = e.which || e.keyCode,
                g = e.target || e.srcElement;
                return 27 === f && h.coming ? !1 : void ! (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || g && (g.type || c(g).is("[contenteditable]")) || !c.each(a,
                function(a, g) {
                    return 1 < b.group.length && g[f] !== d ? (h[a](g[f]), e.preventDefault(), !1) : -1 < c.inArray(f, g) ? (h[a](), e.preventDefault(), !1) : void 0
                }))
            }), c.fn.mousewheel && b.mouseWheel && h.wrap.bind("mousewheel.fb",
            function(a, d, e, f) {
                for (var g = c(a.target || null), i = !1; g.length && !i && !g.is(".fancybox-skin") && !g.is(".fancybox-wrap");) i = g[0] && !(g[0].style.overflow && "hidden" === g[0].style.overflow) && (g[0].clientWidth && g[0].scrollWidth > g[0].clientWidth || g[0].clientHeight && g[0].scrollHeight > g[0].clientHeight),
                g = c(g).parent();
                0 !== d && !i && 1 < h.group.length && !b.canShrink && (f > 0 || e > 0 ? h.prev(f > 0 ? "down": "left") : (0 > f || 0 > e) && h.next(0 > f ? "up": "right"), a.preventDefault())
            }))
        },
        trigger: function(a, b) {
            var d, e = b || h.coming || h.current;
            if (e) {
                if (c.isFunction(e[a]) && (d = e[a].apply(e, Array.prototype.slice.call(arguments, 1))), !1 === d) return ! 1;
                e.helpers && c.each(e.helpers,
                function(b, d) {
                    d && h.helpers[b] && c.isFunction(h.helpers[b][a]) && h.helpers[b][a](c.extend(!0, {},
                    h.helpers[b].defaults, d), e)
                }),
                g.trigger(a)
            }
        },
        isImage: function(a) {
            return m(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(a) {
            return m(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(a) {
            var b, d, e = {};
            if (a = o(a), b = h.group[a] || null, !b) return ! 1;
            if (e = c.extend(!0, {},
            h.opts, b), b = e.margin, d = e.padding, "number" === c.type(b) && (e.margin = [b, b, b, b]), "number" === c.type(d) && (e.padding = [d, d, d, d]), e.modal && c.extend(!0, e, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            }), e.autoSize && (e.autoWidth = e.autoHeight = !0), "auto" === e.width && (e.autoWidth = !0), "auto" === e.height && (e.autoHeight = !0), e.group = h.group, e.index = a, h.coming = e, !1 === h.trigger("beforeLoad")) h.coming = null;
            else {
                if (d = e.type, b = e.href, !d) return h.coming = null,
                h.current && h.router && "jumpto" !== h.router ? (h.current.index = a, h[h.router](h.direction)) : !1;
                if (h.isActive = !0, ("image" === d || "swf" === d) && (e.autoHeight = e.autoWidth = !1, e.scrolling = "visible"), "image" === d && (e.aspectRatio = !0), "iframe" === d && k && (e.scrolling = "scroll"), e.wrap = c(e.tpl.wrap).addClass("fancybox-" + (k ? "mobile": "desktop") + " fancybox-type-" + d + " fancybox-tmp " + e.wrapCSS).appendTo(e.parent || "body"), c.extend(e, {
                    skin: c(".fancybox-skin", e.wrap),
                    outer: c(".fancybox-outer", e.wrap),
                    inner: c(".fancybox-inner", e.wrap)
                }), c.each(["Top", "Right", "Bottom", "Left"],
                function(a, b) {
                    e.skin.css("padding" + b, p(e.padding[a]))
                }), h.trigger("onReady"), "inline" === d || "html" === d) {
                    if (!e.content || !e.content.length) return h._error("content")
                } else if (!b) return h._error("href");
                "image" === d ? h._loadImage() : "ajax" === d ? h._loadAjax() : "iframe" === d ? h._loadIframe() : h._afterLoad()
            }
        },
        _error: function(a) {
            c.extend(h.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: h.coming.tpl.error
            }),
            h._afterLoad()
        },
        _loadImage: function() {
            var a = h.imgPreload = new Image;
            a.onload = function() {
                this.onload = this.onerror = null,
                h.coming.width = this.width / h.opts.pixelRatio,
                h.coming.height = this.height / h.opts.pixelRatio,
                h._afterLoad()
            },
            a.onerror = function() {
                this.onload = this.onerror = null,
                h._error("image")
            },
            a.src = h.coming.href,
            !0 !== a.complete && h.showLoading()
        },
        _loadAjax: function() {
            var a = h.coming;
            h.showLoading(),
            h.ajaxLoad = c.ajax(c.extend({},
            a.ajax, {
                url: a.href,
                error: function(a, b) {
                    h.coming && "abort" !== b ? h._error("ajax", a) : h.hideLoading()
                },
                success: function(b, c) {
                    "success" === c && (a.content = b, h._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var a = h.coming,
            b = c(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", k ? "auto": a.iframe.scrolling).attr("src", a.href);
            c(a.wrap).bind("onReset",
            function() {
                try {
                    c(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch(a) {}
            }),
            a.iframe.preload && (h.showLoading(), b.one("load",
            function() {
                c(this).data("ready", 1),
                k || c(this).bind("load.fb", h.update),
                c(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),
                h._afterLoad()
            })),
            a.content = b.appendTo(a.inner),
            a.iframe.preload || h._afterLoad()
        },
        _preloadImages: function() {
            var a, b, c = h.group,
            d = h.current,
            e = c.length,
            f = d.preload ? Math.min(d.preload, e - 1) : 0;
            for (b = 1; f >= b; b += 1) a = c[(d.index + b) % e],
            "image" === a.type && a.href && ((new Image).src = a.href)
        },
        _afterLoad: function() {
            var a, b, d, e, f, g = h.coming,
            i = h.current;
            if (h.hideLoading(), g && !1 !== h.isActive) if (!1 === h.trigger("afterLoad", g, i)) g.wrap.stop(!0).trigger("onReset").remove(),
            h.coming = null;
            else {
                switch (i && (h.trigger("beforeChange", i), i.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), h.unbindEvents(), a = g.content, b = g.type, d = g.scrolling, c.extend(h, {
                    wrap: g.wrap,
                    skin: g.skin,
                    outer: g.outer,
                    inner: g.inner,
                    current: g,
                    previous: i
                }), e = g.href, b) {
                case "inline":
                case "ajax":
                case "html":
                    g.selector ? a = c("<div>").html(a).find(g.selector) : l(a) && (a.data("fancybox-placeholder") || a.data("fancybox-placeholder", c('<div class="fancybox-placeholder"></div>').insertAfter(a).hide()), a = a.show().detach(), g.wrap.bind("onReset",
                    function() {
                        c(this).find(a).length && a.hide().replaceAll(a.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                    }));
                    break;
                case "image":
                    a = g.tpl.image.replace("{href}", e);
                    break;
                case "swf":
                    a = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + e + '"></param>',
                    f = "",
                    c.each(g.swf,
                    function(b, c) {
                        a += '<param name="' + b + '" value="' + c + '"></param>',
                        f += " " + b + '="' + c + '"'
                    }),
                    a += '<embed src="' + e + '" type="application/x-shockwave-flash" width="100%" height="100%"' + f + "></embed></object>"
                } (!l(a) || !a.parent().is(g.inner)) && g.inner.append(a),
                h.trigger("beforeShow"),
                g.inner.css("overflow", "yes" === d ? "scroll": "no" === d ? "hidden": d),
                h._setDimension(),
                h.reposition(),
                h.isOpen = !1,
                h.coming = null,
                h.bindEvents(),
                h.isOpened ? i.prevMethod && h.transitions[i.prevMethod]() : c(".fancybox-wrap").not(g.wrap).stop(!0).trigger("onReset").remove(),
                h.transitions[h.isOpened ? g.nextMethod: g.openMethod](),
                h._preloadImages()
            }
        },
        _setDimension: function() {
            var a, b, d, e, f, g, i, j, k, l = h.getViewport(),
            m = 0,
            q = !1,
            r = !1,
            q = h.wrap,
            s = h.skin,
            t = h.inner,
            u = h.current,
            r = u.width,
            v = u.height,
            w = u.minWidth,
            x = u.minHeight,
            y = u.maxWidth,
            z = u.maxHeight,
            A = u.scrolling,
            B = u.scrollOutside ? u.scrollbarWidth: 0,
            C = u.margin,
            D = o(C[1] + C[3]),
            E = o(C[0] + C[2]);
            if (q.add(s).add(t).width("auto").height("auto").removeClass("fancybox-tmp"), C = o(s.outerWidth(!0) - s.width()), a = o(s.outerHeight(!0) - s.height()), b = D + C, d = E + a, e = n(r) ? (l.w - b) * o(r) / 100 : r, f = n(v) ? (l.h - d) * o(v) / 100 : v, "iframe" === u.type) {
                if (k = u.content, u.autoHeight && 1 === k.data("ready")) try {
                    k[0].contentWindow.document.location && (t.width(e).height(9999), g = k.contents().find("body"), B && g.css("overflow-x", "hidden"), f = g.outerHeight(!0))
                } catch(F) {}
            } else(u.autoWidth || u.autoHeight) && (t.addClass("fancybox-tmp"), u.autoWidth || t.width(e), u.autoHeight || t.height(f), u.autoWidth && (e = t.width()), u.autoHeight && (f = t.height()), t.removeClass("fancybox-tmp"));
            if (r = o(e), v = o(f), j = e / f, w = o(n(w) ? o(w, "w") - b: w), y = o(n(y) ? o(y, "w") - b: y), x = o(n(x) ? o(x, "h") - d: x), z = o(n(z) ? o(z, "h") - d: z), g = y, i = z, u.fitToView && (y = Math.min(l.w - b, y), z = Math.min(l.h - d, z)), b = l.w - D, E = l.h - E, u.aspectRatio ? (r > y && (r = y, v = o(r / j)), v > z && (v = z, r = o(v * j)), w > r && (r = w, v = o(r / j)), x > v && (v = x, r = o(v * j))) : (r = Math.max(w, Math.min(r, y)), u.autoHeight && "iframe" !== u.type && (t.width(r), v = t.height()), v = Math.max(x, Math.min(v, z))), u.fitToView) if (t.width(r).height(v), q.width(r + C), l = q.width(), D = q.height(), u.aspectRatio) for (; (l > b || D > E) && r > w && v > x && !(19 < m++);) v = Math.max(x, Math.min(z, v - 10)),
            r = o(v * j),
            w > r && (r = w, v = o(r / j)),
            r > y && (r = y, v = o(r / j)),
            t.width(r).height(v),
            q.width(r + C),
            l = q.width(),
            D = q.height();
            else r = Math.max(w, Math.min(r, r - (l - b))),
            v = Math.max(x, Math.min(v, v - (D - E)));
            B && "auto" === A && f > v && b > r + C + B && (r += B),
            t.width(r).height(v),
            q.width(r + C),
            l = q.width(),
            D = q.height(),
            q = (l > b || D > E) && r > w && v > x,
            r = u.aspectRatio ? g > r && i > v && e > r && f > v: (g > r || i > v) && (e > r || f > v),
            c.extend(u, {
                dim: {
                    width: p(l),
                    height: p(D)
                },
                origWidth: e,
                origHeight: f,
                canShrink: q,
                canExpand: r,
                wPadding: C,
                hPadding: a,
                wrapSpace: D - s.outerHeight(!0),
                skinSpace: s.height() - v
            }),
            !k && u.autoHeight && v > x && z > v && !r && t.height("auto")
        },
        _getPosition: function(a) {
            var b = h.current,
            c = h.getViewport(),
            d = b.margin,
            e = h.wrap.width() + d[1] + d[3],
            f = h.wrap.height() + d[0] + d[2],
            d = {
                position: "absolute",
                top: d[0],
                left: d[3]
            };
            return b.autoCenter && b.fixed && !a && f <= c.h && e <= c.w ? d.position = "fixed": b.locked || (d.top += c.y, d.left += c.x),
            d.top = p(Math.max(d.top, d.top + (c.h - f) * b.topRatio)),
            d.left = p(Math.max(d.left, d.left + (c.w - e) * b.leftRatio)),
            d
        },
        _afterZoomIn: function() {
            var a = h.current;
            a && (h.isOpen = h.isOpened = !0, h.wrap.css("overflow", "visible").addClass("fancybox-opened"), h.update(), (a.closeClick || a.nextClick && 1 < h.group.length) && h.inner.css("cursor", "pointer").bind("click.fb",
            function(b) { ! c(b.target).is("a") && !c(b.target).parent().is("a") && (b.preventDefault(), h[a.closeClick ? "close": "next"]())
            }), a.closeBtn && c(a.tpl.closeBtn).appendTo(h.skin).bind("click.fb",
            function(a) {
                a.preventDefault(),
                h.close()
            }), a.arrows && 1 < h.group.length && ((a.loop || 0 < a.index) && c(a.tpl.prev).appendTo(h.outer).bind("click.fb", h.prev), (a.loop || a.index < h.group.length - 1) && c(a.tpl.next).appendTo(h.outer).bind("click.fb", h.next)), h.trigger("afterShow"), a.loop || a.index !== a.group.length - 1 ? h.opts.autoPlay && !h.player.isActive && (h.opts.autoPlay = !1, h.play()) : h.play(!1))
        },
        _afterZoomOut: function(a) {
            a = a || h.current,
            c(".fancybox-wrap").trigger("onReset").remove(),
            c.extend(h, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }),
            h.trigger("afterClose", a)
        }
    }),
    h.transitions = {
        getOrigPosition: function() {
            var a = h.current,
            b = a.element,
            c = a.orig,
            d = {},
            e = 50,
            f = 50,
            g = a.hPadding,
            i = a.wPadding,
            j = h.getViewport();
            return ! c && a.isDom && b.is(":visible") && (c = b.find("img:first"), c.length || (c = b)),
            l(c) ? (d = c.offset(), c.is("img") && (e = c.outerWidth(), f = c.outerHeight())) : (d.top = j.y + (j.h - f) * a.topRatio, d.left = j.x + (j.w - e) * a.leftRatio),
            ("fixed" === h.wrap.css("position") || a.locked) && (d.top -= j.y, d.left -= j.x),
            d = {
                top: p(d.top - g * a.topRatio),
                left: p(d.left - i * a.leftRatio),
                width: p(e + i),
                height: p(f + g)
            }
        },
        step: function(a, b) {
            var c, d, e = b.prop;
            d = h.current;
            var f = d.wrapSpace,
            g = d.skinSpace; ("width" === e || "height" === e) && (c = b.end === b.start ? 1 : (a - b.start) / (b.end - b.start), h.isClosing && (c = 1 - c), d = "width" === e ? d.wPadding: d.hPadding, d = a - d, h.skin[e](o("width" === e ? d: d - f * c)), h.inner[e](o("width" === e ? d: d - f * c - g * c)))
        },
        zoomIn: function() {
            var a = h.current,
            b = a.pos,
            d = a.openEffect,
            e = "elastic" === d,
            f = c.extend({
                opacity: 1
            },
            b);
            delete f.position,
            e ? (b = this.getOrigPosition(), a.openOpacity && (b.opacity = .1)) : "fade" === d && (b.opacity = .1),
            h.wrap.css(b).animate(f, {
                duration: "none" === d ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: e ? this.step: null,
                complete: h._afterZoomIn
            })
        },
        zoomOut: function() {
            var a = h.current,
            b = a.closeEffect,
            c = "elastic" === b,
            d = {
                opacity: .1
            };
            c && (d = this.getOrigPosition(), a.closeOpacity && (d.opacity = .1)),
            h.wrap.animate(d, {
                duration: "none" === b ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: c ? this.step: null,
                complete: h._afterZoomOut
            })
        },
        changeIn: function() {
            var a, b = h.current,
            c = b.nextEffect,
            d = b.pos,
            e = {
                opacity: 1
            },
            f = h.direction;
            d.opacity = .1,
            "elastic" === c && (a = "down" === f || "up" === f ? "top": "left", "down" === f || "right" === f ? (d[a] = p(o(d[a]) - 200), e[a] = "+=200px") : (d[a] = p(o(d[a]) + 200), e[a] = "-=200px")),
            "none" === c ? h._afterZoomIn() : h.wrap.css(d).animate(e, {
                duration: b.nextSpeed,
                easing: b.nextEasing,
                complete: h._afterZoomIn
            })
        },
        changeOut: function() {
            var a = h.previous,
            b = a.prevEffect,
            d = {
                opacity: .1
            },
            e = h.direction;
            "elastic" === b && (d["down" === e || "up" === e ? "top": "left"] = ("up" === e || "left" === e ? "-": "+") + "=200px"),
            a.wrap.animate(d, {
                duration: "none" === b ? 0 : a.prevSpeed,
                easing: a.prevEasing,
                complete: function() {
                    c(this).trigger("onReset").remove()
                }
            })
        }
    },
    h.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !k,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: c("html"),
        create: function(a) {
            a = c.extend({},
            this.defaults, a),
            this.overlay && this.close(),
            this.overlay = c('<div class="fancybox-overlay"></div>').appendTo(h.coming ? h.coming.parent: a.parent),
            this.fixed = !1,
            a.fixed && h.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function(a) {
            var b = this;
            a = c.extend({},
            this.defaults, a),
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a),
            this.fixed || (f.bind("resize.overlay", c.proxy(this.update, this)), this.update()),
            a.closeClick && this.overlay.bind("click.overlay",
            function(a) {
                return c(a.target).hasClass("fancybox-overlay") ? (h.isActive ? h.close() : b.close(), !1) : void 0
            }),
            this.overlay.css(a.css).show()
        },
        close: function() {
            var a, b;
            f.unbind("resize.overlay"),
            this.el.hasClass("fancybox-lock") && (c(".fancybox-margin").removeClass("fancybox-margin"), a = f.scrollTop(), b = f.scrollLeft(), this.el.removeClass("fancybox-lock"), f.scrollTop(a).scrollLeft(b)),
            c(".fancybox-overlay").remove().hide(),
            c.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var a, c = "100%";
            this.overlay.width(c).height("100%"),
            i ? (a = Math.max(b.documentElement.offsetWidth, b.body.offsetWidth), g.width() > a && (c = g.width())) : g.width() > f.width() && (c = g.width()),
            this.overlay.width(c).height(g.height())
        },
        onReady: function(a, b) {
            var d = this.overlay;
            c(".fancybox-overlay").stop(!0, !0),
            d || this.create(a),
            a.locked && this.fixed && b.fixed && (d || (this.margin = g.height() > f.height() ? c("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1),
            !0 === a.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(a, b) {
            var d, e;
            b.locked && (!1 !== this.margin && (c("*").filter(function() {
                return "fixed" === c(this).css("position") && !c(this).hasClass("fancybox-overlay") && !c(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), d = f.scrollTop(), e = f.scrollLeft(), this.el.addClass("fancybox-lock"), f.scrollTop(d).scrollLeft(e)),
            this.open(a)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(a) {
            this.overlay && !h.coming && this.overlay.fadeOut(a.speedOut, c.proxy(this.close, this))
        }
    },
    h.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(a) {
            var b = h.current,
            d = b.title,
            e = a.type;
            if (c.isFunction(d) && (d = d.call(b.element, b)), m(d) && "" !== c.trim(d)) {
                switch (b = c('<div class="fancybox-title fancybox-title-' + e + '-wrap">' + d + "</div>"), e) {
                case "inside":
                    e = h.skin;
                    break;
                case "outside":
                    e = h.wrap;
                    break;
                case "over":
                    e = h.inner;
                    break;
                default:
                    e = h.skin,
                    b.appendTo("body"),
                    i && b.width(b.width()),
                    b.wrapInner('<span class="child"></span>'),
                    h.current.margin[2] += Math.abs(o(b.css("margin-bottom")))
                }
                b["top" === a.position ? "prependTo": "appendTo"](e)
            }
        }
    },
    c.fn.fancybox = function(a) {
        var b, d = c(this),
        e = this.selector || "",
        f = function(f) {
            var g, i, j = c(this).blur(),
            k = b; ! (f.ctrlKey || f.altKey || f.shiftKey || f.metaKey || j.is(".fancybox-wrap") || (g = a.groupAttr || "data-fancybox-group", i = j.attr(g), i || (g = "rel", i = j.get(0)[g]), i && "" !== i && "nofollow" !== i && (j = e.length ? c(e) : d, j = j.filter("[" + g + '="' + i + '"]'), k = j.index(this)), a.index = k, !1 === h.open(j, a) || !f.preventDefault()))
        };
        return a = a || {},
        b = a.index || 0,
        e && !1 !== a.live ? g.undelegate(e, "click.fb-start").delegate(e + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", f) : d.unbind("click.fb-start").bind("click.fb-start", f),
        this.filter("[data-fancybox-start=1]").trigger("click"),
        this
    },
    g.ready(function() {
        var b, f;
        if (c.scrollbarWidth === d && (c.scrollbarWidth = function() {
            var a = c('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
            b = a.children(),
            b = b.innerWidth() - b.height(99).innerWidth();
            return a.remove(),
            b
        }), c.support.fixedPosition === d) {
            b = c.support,
            f = c('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var g = 20 === f[0].offsetTop || 15 === f[0].offsetTop;
            f.remove(),
            b.fixedPosition = g
        }
        c.extend(h.defaults, {
            scrollbarWidth: c.scrollbarWidth(),
            fixed: c.support.fixedPosition,
            parent: c("body")
        }),
        b = c(a).width(),
        e.addClass("fancybox-lock-test"),
        f = c(a).width(),
        e.removeClass("fancybox-lock-test"),
        c("<style type='text/css'>.fancybox-margin{margin-right:" + (f - b) + "px;}</style>").appendTo("head")
    })
} (window, document, jQuery);