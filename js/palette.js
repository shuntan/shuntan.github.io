!function() {
    "use strict";
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    function t(e) {
        return (t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function r(e, t) {
        return (r = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function n(e, t, o) {
        return (n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }() ? Reflect.construct : function(e, t, n) {
            var o = [null];
            o.push.apply(o, t);
            var a = new (Function.bind.apply(e, o));
            return n && r(a, n.prototype),
            a
        }
        ).apply(null, arguments)
    }
    function o(e) {
        var a = "function" == typeof Map ? new Map : void 0;
        return (o = function(e) {
            if (null === e || (o = e,
            -1 === Function.toString.call(o).indexOf("[native code]")))
                return e;
            var o;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== a) {
                if (a.has(e))
                    return a.get(e);
                a.set(e, c)
            }
            function c() {
                return n(e, arguments, t(this).constructor)
            }
            return c.prototype = Object.create(e.prototype, {
                constructor: {
                    value: c,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            r(c, e)
        }
        )(e)
    }
    function a(e, t) {
        return !t || "object" != typeof t && "function" != typeof t ? function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }
    var c = "is-";
    var i = !!window.customElements;
    var f, l, u = document.querySelector('meta[name="theme-color"]');
    var d, s, b, p, g = [{
        background: "#e2d3b6 url(//www.toptal.com/designers/subtlepatterns/patterns/vintage-concrete.png)",
        sidebar_background: "#e2d3b6 url(//www.toptal.com/designers/subtlepatterns/patterns/vintage-concrete.png)",
        card_background: "url(//www.toptal.com/designers/subtlepatterns/patterns/paper.png)",
        foreground_color: "#363636",
        border_color: "#fff",
        highlight: ["#fff", "#fff", "#fff", "#95a5b3", "#363636", "#262b2f", "#000000", "#000000", "#5d6c7b", "#40464a", "#2980b9", "#be516e", "#237dac", "#944770", "#239371", "#fff"],
        _label: "paper",
        _style: "color:#000",
        _color: ["#e2d3b6", "#e2d3b6"]
    }, {
        foreground_color: "#363636",
        border_color: "#e0e0e0",
        background: "#f3f6f7",
        sidebar_background: "#607d8b linear-gradient(to bottom,#607d8b 0%,#26323b 100%)",
        card_background: "#fff",
        highlight: ["#ffffff", "#ffffff", "#f3f6f7", "#95a5b3", "#363636", "#262b2f", "#000000", "#000000", "#5d6c7b", "#40464a", "#2980b9", "#be516e", "#237dac", "#944770", "#239371", "#edf0f3"],
        _label: "day",
        _style: "background:#fff;color:#000",
        _color: ["#607d8b", "#f3f6f7"]
    }, {
        foreground_color: "#d8d8d8",
        border_color: "#444",
        background: "#202020",
        sidebar_background: "#262626",
        card_background: "#252525",
        highlight: ["#252525", "#252525", "#939393", "#585858", "#b8b8b8", "#d8d8d8", "#e8e8e8", "#f8f8f8", "#ab4642", "#dc9656", "#f7ca88", "#a1b56c", "#b8b8b8", "#7cafc2", "#ba8baf", "#a16946"],
        _label: "night",
        _style: "color:#fff",
        _color: ["#262626", "#202020"]
    }].concat(function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = new Array(e.length); t < e.length; t++)
                r[t] = e[t];
            return r
        }
    }(d = [["#fff", "#2a2b33 url(//cdn.jsdelivr.net/gh/ikeq/inside-static@assets/shattered-island.jpg)"], ["#e84701", "#e84701 url(//cdn.jsdelivr.net/gh/ikeq/inside-static@assets/hodgepodge.jpg)"], ["#ff76ab", "#ff76ab linear-gradient(to bottom,#ff76ab 0%,#ff5640 100%)"], ["#95b400", "#95b400 url(//cdn.jsdelivr.net/gh/ikeq/inside-static@assets/green-goblin.jpg)"], ["#fff", "#1a1a1a url(//cdn.jsdelivr.net/gh/ikeq/inside-static@assets/ocean.jpg)"]].map((function(e) {
        return {
            accent_color: e[0],
            sidebar_background: e[1]
        }
    }
    )).concat("f44336 e91e63 9c27b0 673ab7 3f51b5 2196f3 03a9f4 00bcd4 009688 4caf50 8bc34a ffc107 ff9800 ff5722 795548 9e9e9e 607d8b 2a2b33".split(" ").map((function(e) {
        return {
            accent_color: "#" + e,
            sidebar_background: "#" + e
        }
    }
    )))) || function(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
            return Array.from(e)
    }(d) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()), h = ":host{display:inline-block;width:300px;line-height:1}a{display:inline-block;width:11.111111%;height:1.5rem;color:white;vertical-align:bottom;text-align:center;text-transform:uppercase;font-size:.5em;line-height:1.6rem;cursor:pointer;transition:transform .15s}a:hover,a.current{box-shadow:1px 1px 2px rgba(0,0,0,0.3);transform:scale(1.1)}a:nth-child(1){border-radius:6px 0 0 0}a:nth-child(4){border-radius:0 6px 0 0}a:nth-child(18){border-radius:0 0 0 6px}a:last-child{border-radius:0 0 6px 0}\n", _ = g.map((function(e) {
        var t, r = "";
        e.background || e.sidebar_background ? t = e.sidebar_background || e.background : e.accent_color && (t = e.accent_color),
        (e.background && /(url|linear)/.test(e.background) || e.sidebar_background && /(url|linear)/.test(e.sidebar_background) || e._label) && (r = ";width:25%;"),
        e._style && (r += e._style);
        var n = Object.assign({}, e);
        for (var o in n)
            "_" === o[0] && delete n[o];
        return '<a style="background:'.concat(t + r, "\" title='").concat(JSON.stringify(n, null, 2), "'>").concat(e._label || "", "</a>")
    }
    )).join("");
    s = "palette",
    b = function(n) {
        function o() {
            var e;
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o);
            var r = (e = a(this, t(o).call(this))).attachShadow({
                mode: "closed"
            });
            return r.innerHTML = "<style>".concat(h, "</style><div>").concat(_, "</div>"),
            r.addEventListener("click", (function(e) {
                var t, r, n, o = e.target;
                "A" === o.tagName && (t = g[(r = o.parentElement.children,
                n = o,
                [].indexOf.call(r, n))],
                f || (f = window.__inside__),
                l || (l = f && f.$update),
                l && (l(t),
                t._color ? f.color = t._color : t.accent_color && (f.color = [t.accent_color])))
            }
            )),
            e
        }
        var c, i, d;
        return function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && r(e, t)
        }(o, n),
        c = o,
        (i = [{
            key: "connectedCallback",
            value: function() {
                var e = new CustomEvent("iswc",{
                    detail: {
                        trigger: "window:resize"
                    }
                });
                document.dispatchEvent(e)
            }
        }]) && e(c.prototype, i),
        d && e(c, d),
        o
    }(o(HTMLElement)),
    i && customElements.define(c + s, b, p),
    document.addEventListener("iswc", (function(e) {
        var t = e.detail;
        if (t) {
            var r = t.trigger;
            if (r) {
                r = r.split(":");
                var n = new Event(r[1]);
                window[r[0]].dispatchEvent(n)
            }
        }
    }
    ))
}();