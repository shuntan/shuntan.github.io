/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2015, Codrops
 * http://www.codrops.com
 */

function initPalette() {
    if (window._theme1) {
        var t = document.getElementById("palette");
        window._default_theme = {
            accent_color: "#607d8b",
            font: {
                code: "'Fira Code', Consolas",
                base: "'Josefin Sans', 'PingFang SC', 'Microsoft YaHei'",
                logo: "Lobster, cursive",
                url: "//cdn.jsdelivr.net/gh/ike-c/inside-static@2.2.0/fonts.2511e3be15287e777006.css",
                menu: "IM Fell DW Pica SC",
                label: "Sarpanch"
            },
            background: ["#607d8b linear-gradient(to bottom,#607d8b 0%,#26323b 100%)"]
        },
        window._theme.update(window._default_theme);
        var e = document.querySelector('link[href^="/theme"]');
        e && document.head.removeChild(e),
        t.innerHTML = [["#2a2b33", "#2a2b33 url(//cdn.jsdelivr.net/gh/ike-c/inside-static@pattern-1.0/shattered-island.jpg)"], ["#e84701", "#e84701 url(//cdn.jsdelivr.net/gh/ike-c/inside-static@pattern-1.0/hodgepodge.jpg)"], ["#95b400", "#95b400 url(//cdn.jsdelivr.net/gh/ike-c/inside-static@pattern-1.0/green-goblin.jpg)"], ["#0a0a0a", "#0a0a0a url(//cdn.jsdelivr.net/gh/ike-c/inside-static@pattern-1.0/celebration.jpg)"], ["#1a1a1a", "#1a1a1a url(//cdn.jsdelivr.net/gh/ike-c/inside-static@pattern-1.0/ocean.jpg)"], ["#ff76ab", "#ff76ab linear-gradient(to bottom,#ff76ab 0%,#ff5640 100%)"]].concat("f44336 e91e63 9c27b0 673ab7 3f51b5 2196f3 03a9f4 00bcd4 009688 4caf50 8bc34a ffc107 ff9800 ff5722 795548 9e9e9e 607d8b 2a2b33".split(" ")).map(function(e) {
            var t = void 0,
            a = void 0,
            n = void 0;
            return Array.isArray(e) ? (t = e[0], a = e[1], n = ";width:6rem;height:1.5rem") : (n = "", t = a = "#" + e),
            '<a style="background:' + (a + n) + '" title="' + t + '" data-a="' + t + '" data-b="' + a + '"></a>'
        }).join(""),
        setTimeout(function() {
            var e = document.createEvent("Event");
            e.initEvent("resize", !0, !0),
            window.dispatchEvent(e);
            var a = document.querySelector('meta[name="theme-color"]');
            t.addEventListener("click",
            function(e) {
                var t = e.target;
                "A" === t.tagName && (window._default_theme.accent_color = t.dataset.a, window._default_theme.background = [t.dataset.b], window._theme.update(window._default_theme), window.__inside__.color = a.content = t.dataset.a)
            })
        },
        100)
    }
}
