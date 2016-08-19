! function() {
    for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
        var i = (new Date).getTime(),
            r = Math.max(0, 16 - (i - e)),
            s = window.setTimeout(function() {
                t(i + r)
            }, r);
        return e = i + r, s
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    })
}(),
function(e, t, n) {
    "use strict";
    t.documentElement.classList || Modernizr.csstransforms3d || (t.getElementById("pageBlocker").className += " is-visible");
    var i = t.body,
        r = t.getElementById("js-gallery"),
        s = r.offsetWidth,
        o = r.offsetHeight,
        a = t.getElementById("js-poster"),
        c = a.offsetWidth,
        l = a.offsetHeight,
        u = "150",
        f = t.getElementById("js-loader"),
        d = t.querySelectorAll(".js-overlay"),
        m = "[data-link]",
        g = "is-visible",
        p = "fadeOut",
        v = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || function(e) {
            return setTimeout(e, 1e3 / 60)
        },
        w = function(e, t, n) {
            if ("[object Object]" === Object.prototype.toString.call(e))
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(n, e[i], i, e);
            else
                for (var r = 0, s = e.length; s > r; r++) t.call(n, e[r], r, e)
        },
        h = function(e, n) {
            var i, r, s = n.charAt(0);
            for ("[" === s && (n = n.substr(1, n.length - 2), i = n.split("="), i.length > 1 && (r = !0, i[1] = i[1].replace(/"/g, "").replace(/'/g, ""))); e && e !== t; e = e.parentNode) {
                if ("." === s && e.classList.contains(n.substr(1))) return e;
                if ("#" === s && e.id === n.substr(1)) return e;
                if ("[" === s && e.hasAttribute(i[0])) {
                    if (!r) return e;
                    if (e.getAttribute(i[0]) === i[1]) return e
                }
                if (e.tagName.toLowerCase() === n) return e
            }
            return null
        },
        y = function(e) {
            return ("string" == typeof e || e instanceof String) && (e = e.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, "")), e
        },
        L = function() {
            var n = e.getComputedStyle(t.body, ":after").getPropertyValue("content");
            return y(n)
        },
        b = function(e, t) {
            var n = !1;
            return function() {
                n || (e.call(), n = !0, setTimeout(function() {
                    n = !1
                }, t))
            }
        },
        A = function() {
            var e = new XMLHttpRequest;
            e.open("GET", "../../symbol-defs.svg", !0), e.send(), e.onload = function() {
                var n = t.createElement("div");
                n.innerHTML = e.responseText, i.insertBefore(n, i.childNodes[0])
            }
        },
        T = function(t, n, i) {
            if (e.XMLHttpRequest) {
                var r = new XMLHttpRequest;
                r.onreadystatechange = function() {
                    if (4 === r.readyState) {
                        if (200 !== r.status) return void(i && "function" == typeof i && i(r.responseText, r));
                        n && "function" == typeof n && (n(r.responseText, r), t !== e.location && e.history.pushState({
                            path: t
                        }, "", t))
                    }
                }, r.open("GET", t), r.send()
            }
        },
        q = function(e) {
            T(e, function(e) {
                var n = t.createElement("div");
                n.innerHTML = e;
                var i = n.querySelector("#js-gallery"),
                    s = t.querySelector("#js-gallery");
                i && s && (s.innerHTML = i.innerHTML, a = t.getElementById("js-poster"), v(E), r.classList.remove(p), f.classList.remove(g))
            }, function(e) {})
        },
        E = function() {
            var e;
            e = Math.min(s / c, o / l), "small" === L() ? a.style[Modernizr.prefixed("transform")] = "translate(-50%, -55%) scale(" + e + ")" : a.style[Modernizr.prefixed("transform")] = "translate(-50%, -50%) scale(" + e + ")", v(E)
        },
        S = b(function() {
            L(), s = r.offsetWidth - u, o = r.offsetHeight - u, v(E)
        }, 100),
        F = function(t) {
            t.preventDefault();
            var n = "http://swissincss.com/",
                i = "@JonYablonski",
                r = "'sharer','toolbar=0,status=0,width=180,height=325'";
            e.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent("Check out Swiss in CSS: a collection of classic 'Swiss' posters recreated and animated in CSS by " + i + "  " + n), r)
        },
        j = function() {
            w(d, function(e) {
                e.classList.contains(g) && (e.classList.remove(g), setTimeout(function() {
                    e.scrollTop = 0
                }, 1e3))
            })
        },
        M = function(e) {
            var n = h(e.target, m);
            if (n) {
                e.preventDefault();
                var i = n.getAttribute("data-link");
                if ("transition" === i) {
                    var s = e.target.getAttribute("href");
                    j(), r.classList.add(p), f.classList.add(g), setTimeout(function() {
                        q(s)
                    }, 1e3)
                } else if ("overlay" === i) {
                    var o = e.target.getAttribute("href"),
                        a = t.querySelector(o);
                    a.classList.toggle(g)
                } else "share" === i && F(e)
            }
        },
        H = function(e) {
            var n = e.keyCode;
            if (37 === n || 39 === n) {
                var i = t.getElementById("js-gallery-nav"),
                    s = i.children[0].getAttribute("href"),
                    o = i.children[1].getAttribute("href");
                37 === n && (j(), r.classList.add(p), f.classList.add(g), setTimeout(function() {
                    q(s)
                }, 1e3)), 39 === n && (j(), r.classList.add(p), f.classList.add(g), setTimeout(function() {
                    q(o)
                }, 1e3))
            } else {
                if (27 !== n) return;
                j()
            }
        },
        k = function() {
            r.classList.add(p), f.classList.add(g), setTimeout(function() {
                q(location)
            }, 1e3)
        };
    L(), A(), s = r.offsetWidth - u, o = r.offsetHeight - u, v(E), e.addEventListener("resize", S, !1), t.addEventListener("click", M, !1), t.addEventListener("keydown", H, !1), e.addEventListener("popstate", k, !1)
}(window, document);
