(function () {
    var e;
    var d = function () {
    };
    var b = [
        'assert',
        'clear',
        'count',
        'debug',
        'dir',
        'dirxml',
        'error',
        'exception',
        'group',
        'groupCollapsed',
        'groupEnd',
        'info',
        'log',
        'markTimeline',
        'profile',
        'profileEnd',
        'table',
        'time',
        'timeEnd',
        'timeStamp',
        'trace',
        'warn'
    ];
    var c = b.length;
    var a = (window.console = window.console || {
    });
    while (c--) {
        e = b[c];
        if (!a[e]) {
            a[e] = d
        }
    }
}());
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function (e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function (e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function (e, f, a, h, g) {
        return - h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return - h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function (e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function (e, f, a, h, g) {
        return - h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return - h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function (e, f, a, h, g) {
        return - h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function (e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function (e, f, a, h, g) {
        return - h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function (e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function (e, f, a, h, g) {
        return (f == g) ? a + h : h * ( - Math.pow(2, - 10 * f / g) + 1) + a
    },
    easeInOutExpo: function (e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * ( - Math.pow(2, - 10 * --f) + 2) + a
    },
    easeInCirc: function (e, f, a, h, g) {
        return - h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function (e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return - h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return - (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, - 10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return - 0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, - 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function (e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function (e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function (e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});
$(function () {
    $('.nav').prepend('<div class="menu-icon"><span>Menu</span></div>');
    $('.menu-icon').click(function () {
        $('ul.dropdown').slideToggle(600);
        $(this).toggleClass('active')
    });
    var a = $('.sub > a');
    a.click(function (c) {
        c.preventDefault();
        var b = $(this);
        b.toggleClass('current').next('ul').toggleClass('current')
    })
});
(function (aN, av, ax) {
    function aD(c) {
        if (aC = av.documentElement, aS = av.body, bh(), ak = this, c = c || {
        }, ay = c.constants || {
        }, c.easing) {
            for (var d in c.easing) {
                a4[d] = c.easing[d]
            }
        }
        bA = c.edgeStrategy || 'set',
        aj = {
            beforerender: c.beforerender,
            render: c.render
        },
        bD = c.forceHeight !== !1,
        bD && (bd = c.scale || 1),
        ah = c.mobileDeceleration || bn,
        bu = c.smoothScrolling !== !1,
        af = c.smoothScrollingDuration || ao,
        ai = {
            targetTop: ak.getScrollTop()
        },
        bv = (c.mobileCheck || function () {
            return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || aN.opera)
        }) (),
        bv ? (by = av.getElementById('skrollr-body'), by && bq(), aZ(), ab(aC, [
            an,
            a7
        ], [
            a5
        ]))  : ab(aC, [
            an,
            aR
        ], [
            a5
        ]),
        ak.refresh(),
        bK(aN, 'resize orientationchange', function () {
            var g = aC.clientWidth,
            f = aC.clientHeight;
            (f !== ad || g !== a0) && (ad = f, a0 = g, bI = !0)
        });
        var b = aX();
        return function a() {
            aW(),
            aQ = b(a)
        }(),
        ak
    }
    var aC,
    aS,
    aJ = aN.skrollr = {
        get: function () {
            return ak
        },
        init: function (a) {
            return ak || new aD(a)
        },
        VERSION: '0.6.17'
    },
    aG = Object.prototype.hasOwnProperty,
    aw = aN.Math,
    aP = aN.getComputedStyle,
    aM = 'touchstart',
    au = 'touchmove',
    aB = 'touchcancel',
    aE = 'touchend',
    aL = 'skrollable',
    aO = aL + '-before',
    ar = aL + '-between',
    aK = aL + '-after',
    an = 'skrollr',
    a5 = 'no-' + an,
    aR = an + '-desktop',
    a7 = an + '-mobile',
    ap = 'linear',
    aH = 1000,
    bn = 0.004,
    ao = 200,
    bs = 'start',
    bm = 'end',
    bp = 'center',
    bo = 'bottom',
    bk = '___skrollable_id',
    bb = /^(?:input|textarea|button|select)$/i,
    a3 = /^\s+|\s+$/g,
    am = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
    be = /\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
    bc = /^([a-z\-]+)\[(\w+)\]$/,
    aA = /-([a-z])/g,
    bj = function (b, a) {
        return a.toUpperCase()
    },
    bg = /[\-+]?[\d]*\.?[\d]+/g,
    bf = /\{\?\}/g,
    bC = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
    br = /[a-z\-]+-gradient/g,
    aT = '',
    bl = '',
    bh = function () {
        var b = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
        if (aP) {
            var a = aP(aS, null);
            for (var c in a) {
                if (aT = c.match(b) || + c == c && a[c].match(b)) {
                    break
                }
            }
            if (!aT) {
                return aT = bl = '',
                ax
            }
            aT = aT[0],
            '-' === aT.slice(0, 1) ? (bl = aT, aT = {
                '-webkit-': 'webkit',
                '-moz-': 'Moz',
                '-ms-': 'ms',
                '-o-': 'O'
            }
            [
                aT
            ])  : bl = '-' + aT.toLowerCase() + '-'
        }
    },
    aX = function () {
        var a = aN.requestAnimationFrame || aN[aT.toLowerCase() + 'RequestAnimationFrame'],
        b = bx();
        return (bv || !a) && (a = function (c) {
            var e = bx() - b,
            d = aw.max(0, 1000 / 60 - e);
            return aN.setTimeout(function () {
                b = bx(),
                c()
            }, d)
        }),
        a
    },
    a9 = function () {
        var a = aN.cancelAnimationFrame || aN[aT.toLowerCase() + 'CancelAnimationFrame'];
        return (bv || !a) && (a = function (b) {
            return aN.clearTimeout(b)
        }),
        a
    },
    a4 = {
        begin: function () {
            return 0
        },
        end: function () {
            return 1
        },
        linear: function (a) {
            return a
        },
        quadratic: function (a) {
            return a * a
        },
        cubic: function (a) {
            return a * a * a
        },
        swing: function (a) {
            return - aw.cos(a * aw.PI) / 2 + 0.5
        },
        sqrt: function (a) {
            return aw.sqrt(a)
        },
        outCubic: function (a) {
            return aw.pow(a - 1, 3) + 1
        },
        bounce: function (b) {
            var a;
            if (0.5083 >= b) {
                a = 3
            } else {
                if (0.8489 >= b) {
                    a = 9
                } else {
                    if (0.96208 >= b) {
                        a = 27
                    } else {
                        if (!(0.99981 >= b)) {
                            return 1
                        }
                        a = 91
                    }
                }
            }
            return 1 - aw.abs(3 * aw.cos(1.028 * b * a) / a)
        }
    };
    aD.prototype.refresh = function (L) {
        var D,
        C,
        P = !1;
        for (L === ax ? (P = !0, bF = [
        ], a2 = 0, L = av.getElementsByTagName('*'))  : L = [
        ].concat(L), D = 0, C = L.length; C > D; D++) {
            var I = L[D],
            G = I,
            A = [
            ],
            N = bu,
            K = bA;
            if (I.attributes) {
                for (var x = 0, B = I.attributes.length; B > x; x++) {
                    var F = I.attributes[x];
                    if ('data-anchor-target' !== F.name) {
                        if ('data-smooth-scrolling' !== F.name) {
                            if ('data-edge-strategy' !== F.name) {
                                var M = F.name.match(am);
                                if (null !== M) {
                                    var t = {
                                        props: F.value,
                                        element: I
                                    };
                                    A.push(t);
                                    var J = M[1];
                                    J = J && ay[J.substr(1)] || 0;
                                    var q = M[2];
                                    /p$/.test(q) ? (t.isPercentage = !0, t.offset = ((0 | q.slice(0, - 1)) + J) / 100)  : t.offset = (0 | q) + J;
                                    var g = M[3],
                                    O = M[4] || g;
                                    g && g !== bs && g !== bm ? (t.mode = 'relative', t.anchors = [
                                        g,
                                        O
                                    ])  : (t.mode = 'absolute', g === bm ? t.isEnd = !0 : t.isPercentage || (t.frame = t.offset * bd, delete t.offset))
                                }
                            } else {
                                K = F.value
                            }
                        } else {
                            N = 'off' !== F.value
                        }
                    } else {
                        if (G = av.querySelector(F.value), null === G) {
                            throw 'Unable to find anchor target "' + F.value + '"'
                        }
                    }
                }
                if (A.length) {
                    var j,
                    r,
                    H;
                    !P && bk in I ? (H = I[bk], j = bF[H].styleAttr, r = bF[H].classAttr)  : (H = I[bk] = a2++, j = I.style.cssText, r = bE(I)),
                    bF[H] = {
                        element: I,
                        styleAttr: j,
                        classAttr: r,
                        anchorTarget: G,
                        keyFrames: A,
                        smoothScrolling: N,
                        edgeStrategy: K
                    },
                    ab(I, [
                        aL
                    ], [
                    ])
                }
            }
        }
        for (ag(), D = 0, C = L.length; C > D; D++) {
            var z = bF[L[D][bk]];
            z !== ax && (bi(z), bM(z))
        }
        return ak
    },
    aD.prototype.relativeToAbsolute = function (h, f, g) {
        var j = aC.clientHeight,
        c = h.getBoundingClientRect(),
        d = c.top,
        b = c.bottom - c.top;
        return f === bo ? d -= j : f === bp && (d -= j / 2),
        g === bo ? d += b : g === bp && (d += b / 2),
        d += ak.getScrollTop(),
        0 | d + 0.5
    },
    aD.prototype.animateTo = function (b, a) {
        a = a || {
        };
        var d = bx(),
        c = ak.getScrollTop();
        return bw = {
            startTop: c,
            topDiff: b - c,
            targetTop: b,
            duration: a.duration || aH,
            startTime: d,
            endTime: d + (a.duration || aH),
            easing: a4[a.easing || ap],
            done: a.done
        },
        bw.topDiff || (bw.done && bw.done.call(ak, !1), bw = ax),
        ak
    },
    aD.prototype.stopAnimateTo = function () {
        bw && bw.done && bw.done.call(ak, !0),
        bw = ax
    },
    aD.prototype.isAnimatingTo = function () {
        return !!bw
    },
    aD.prototype.setScrollTop = function (a, b) {
        return aU = b === !0,
        bv ? bL = aw.min(aw.max(a, 0), aF)  : aN.scrollTo(0, a),
        ak
    },
    aD.prototype.getScrollTop = function () {
        return bv ? bL : aN.pageYOffset || aC.scrollTop || aS.scrollTop || 0
    },
    aD.prototype.getMaxScrollTop = function () {
        return aF
    },
    aD.prototype.on = function (b, a) {
        return aj[b] = a,
        ak
    },
    aD.prototype.off = function (a) {
        return delete aj[a],
        ak
    },
    aD.prototype.destroy = function () {
        var b = a9();
        b(aQ),
        aa(),
        ab(aC, [
            a5
        ], [
            an,
            aR,
            a7
        ]);
        for (var a = 0, c = bF.length; c > a; a++) {
            aq(bF[a].element)
        }
        aC.style.overflow = aS.style.overflow = 'auto',
        aC.style.height = aS.style.height = 'auto',
        by && aJ.setStyle(by, 'transform', 'none'),
        ak = ax,
        by = ax,
        aj = ax,
        bD = ax,
        aF = 0,
        bd = 1,
        ay = ax,
        ah = ax,
        bz = 'down',
        a8 = - 1,
        a0 = 0,
        ad = 0,
        bI = !1,
        bw = ax,
        bu = ax,
        af = ax,
        ai = ax,
        aU = ax,
        a2 = 0,
        bA = ax,
        bv = !1,
        bL = 0,
        bB = ax
    };
    var aZ = function () {
        var a,
        k,
        e,
        q,
        o,
        p,
        t,
        m,
        s,
        f,
        r,
        j;
        bK(aC, [
            aM,
            au,
            aB,
            aE
        ].join(' '), function (i) {
            var d = i.changedTouches[0];
            for (q = i.target; 3 === q.nodeType; ) {
                q = q.parentNode
            }
            switch (o = d.clientY, p = d.clientX, f = i.timeStamp, bb.test(q.tagName) || i.preventDefault(), i.type) {
                case aM:
                    a && a.blur(),
                    ak.stopAnimateTo(),
                    a = q,
                    k = t = o,
                    e = p,
                    s = f;
                    break;
                case au:
                    m = o - t,
                    j = f - r,
                    ak.setScrollTop(bL - m, !0),
                    t = o,
                    r = f;
                    break;
                default:
                case aB:
                case aE:
                    var l = k - o,
                    u = e - p,
                    h = u * u + l * l;
                    if (49 > h) {
                        if (!bb.test(a.tagName)) {
                            a.focus();
                            var y = av.createEvent('MouseEvents');
                            y.initMouseEvent('click', !0, !0, i.view, 1, d.screenX, d.screenY, d.clientX, d.clientY, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, 0, null),
                            a.dispatchEvent(y)
                        }
                        return
                    }
                    a = ax;
                    var n = m / j;
                    n = aw.max(aw.min(n, 3), - 3);
                    var g = aw.abs(n / ah),
                    v = n * g + 0.5 * ah * g * g,
                    c = ak.getScrollTop() - v,
                    b = 0;
                    c > aF ? (b = (aF - c) / v, c = aF)  : 0 > c && (b = - c / v, c = 0),
                    g *= 1 - b,
                    ak.animateTo(0 | c + 0.5, {
                        easing: 'outCubic',
                        duration: g
                    })
            }
        }), aN.scrollTo(0, 0), aC.style.overflow = aS.style.overflow = 'hidden'
    },
    aI = function () {
        var k,
        q,
        b,
        d,
        o,
        h,
        g,
        m,
        j;
        for (m = 0, j = bF.length; j > m; m++) {
            for (k = bF[m], q = k.element, b = k.anchorTarget, d = k.keyFrames, o = 0, h = d.length; h > o; o++) {
                g = d[o];
                var p = g.offset;
                g.isPercentage && (p *= aC.clientHeight, g.frame = p),
                'relative' === g.mode && (aq(q), g.frame = ak.relativeToAbsolute(b, g.anchors[0], g.anchors[1]) - p, aq(q, !0)),
                bD && !g.isEnd && g.frame > aF && (aF = g.frame)
            }
        }
        for (aF = aw.max(aF, bJ()), m = 0, j = bF.length; j > m; m++) {
            for (k = bF[m], d = k.keyFrames, o = 0, h = d.length; h > o; o++) {
                g = d[o],
                g.isEnd && (g.frame = aF - g.offset)
            }
            k.keyFrames.sort(az)
        }
    },
    a1 = function (K, v) {
        for (var B = 0, G = bF.length; G > B; B++) {
            var F,
            N,
            z = bF[B],
            L = z.element,
            J = z.smoothScrolling ? K : v,
            l = z.keyFrames,
            D = l[0].frame,
            H = l[l.length - 1].frame,
            h = D > J,
            d = J > H,
            M = l[h ? 0 : l.length - 1];
            if (h || d) {
                if (h && - 1 === z.edge || d && 1 === z.edge) {
                    continue
                }
                switch (ab(L, [
                        h ? aO : aK
                    ], [
                        aO,
                        ar,
                        aK
                    ]), z.edge = h ? - 1 : 1, z.edgeStrategy) {
                    case 'reset':
                        aq(L);
                        continue;
                    case 'ease':
                        J = M.frame;
                        break;
                    default:
                    case 'set':
                        var g = M.props;
                        for (F in g) {
                            aG.call(g, F) && (N = aY(g[F].value), aJ.setStyle(L, F, N))
                        }
                        continue
                }
            } else {
                0 !== z.edge && (ab(L, [
                    aL,
                    ar
                ], [
                    aO,
                    aK
                ]), z.edge = 0)
            }
            for (var j = 0, I = l.length - 1; I > j; j++) {
                if (J >= l[j].frame && l[j + 1].frame >= J) {
                    var q = l[j],
                    i = l[j + 1];
                    for (F in q.props) {
                        if (aG.call(q.props, F)) {
                            var C = (J - q.frame) / (i.frame - q.frame);
                            C = q.props[F].easing(C),
                            N = bH(q.props[F].value, i.props[F].value, C),
                            N = aY(N),
                            aJ.setStyle(L, F, N)
                        }
                    }
                    break
                }
            }
        }
    },
    aW = function () {
        bI && (bI = !1, ag());
        var g,
        d,
        i = ak.getScrollTop(),
        h = bx();
        if (bw) {
            h >= bw.endTime ? (i = bw.targetTop, g = bw.done, bw = ax)  : (d = bw.easing((h - bw.startTime) / bw.duration), i = 0 | bw.startTop + d * bw.topDiff),
            ak.setScrollTop(i, !0)
        } else {
            if (!aU) {
                var c = ai.targetTop - i;
                c && (ai = {
                    startTop: a8,
                    topDiff: i - a8,
                    targetTop: i,
                    startTime: ac,
                    endTime: ac + af
                }),
                ai.endTime >= h && (d = a4.sqrt((h - ai.startTime) / af), i = 0 | ai.startTop + d * ai.topDiff)
            }
        }
        if (bv && by && aJ.setStyle(by, 'transform', 'translate(0, ' + - bL + 'px) ' + bB), aU || a8 !== i) {
            bz = i > a8 ? 'down' : a8 > i ? 'up' : bz,
            aU = !1;
            var b = {
                curTop: i,
                lastTop: a8,
                maxTop: aF,
                direction: bz
            },
            f = aj.beforerender && aj.beforerender.call(ak, b);
            f !== !1 && (a1(i, ak.getScrollTop()), a8 = i, aj.render && aj.render.call(ak, b)),
            g && g.call(ak, !1)
        }
        ac = h
    },
    bi = function (h) {
        for (var k = 0, b = h.keyFrames.length; b > k; k++) {
            for (var d, c, j, g, f = h.keyFrames[k], m = {
            }; null !== (g = be.exec(f.props)); ) {
                j = g[1],
                c = g[2],
                d = j.match(bc),
                null !== d ? (j = d[1], d = d[2])  : d = ap,
                c = c.indexOf('!') ? ba(c)  : [
                    c.slice(1)
                ],
                m[j] = {
                    value: c,
                    easing: a4[d]
                }
            }
            f.props = m
        }
    },
    ba = function (b) {
        var a = [
        ];
        return bC.lastIndex = 0,
        b = b.replace(bC, function (c) {
            return c.replace(bg, function (d) {
                return 100 * (d / 255) + '%'
            })
        }),
        bl && (br.lastIndex = 0, b = b.replace(br, function (c) {
            return bl + c
        })),
        b = b.replace(bg, function (c) {
            return a.push( + c),
            '{?}'
        }),
        a.unshift(b),
        a
    },
    bM = function (c) {
        var a,
        b,
        d = {
        };
        for (a = 0, b = c.keyFrames.length; b > a; a++) {
            a6(c.keyFrames[a], d)
        }
        for (d = {
        }, a = c.keyFrames.length - 1; a >= 0; a--) {
            a6(c.keyFrames[a], d)
        }
    },
    a6 = function (c, a) {
        var b;
        for (b in a) {
            aG.call(c.props, b) || (c.props[b] = a[b])
        }
        for (b in c.props) {
            a[b] = c.props[b]
        }
    },
    bH = function (f, c, d) {
        var h,
        g = f.length;
        if (g !== c.length) {
            throw 'Can\'t interpolate between "' + f[0] + '" and "' + c[0] + '"'
        }
        var b = [
            f[0]
        ];
        for (h = 1; g > h; h++) {
            b[h] = f[h] + (c[h] - f[h]) * d
        }
        return b
    },
    aY = function (b) {
        var a = 1;
        return bf.lastIndex = 0,
        b[0].replace(bf, function () {
            return b[a++]
        })
    },
    aq = function (f, c) {
        f = [
        ].concat(f);
        for (var d, h, g = 0, b = f.length; b > g; g++) {
            h = f[g],
            d = bF[h[bk]],
            d && (c ? (h.style.cssText = d.dirtyStyleAttr, ab(h, d.dirtyClassAttr))  : (d.dirtyStyleAttr = h.style.cssText, d.dirtyClassAttr = bE(h), h.style.cssText = d.styleAttr, ab(h, d.classAttr)))
        }
    },
    bq = function () {
        bB = 'translateZ(0)',
        aJ.setStyle(by, 'transform', bB);
        var c = aP(by),
        a = c.getPropertyValue('transform'),
        b = c.getPropertyValue(bl + 'transform'),
        d = a && 'none' !== a || b && 'none' !== b;
        d || (bB = '')
    };
    aJ.setStyle = function (c, a, b) {
        var f = c.style;
        if (a = a.replace(aA, bj).replace('-', ''), 'zIndex' === a) {
            f[a] = isNaN(b) ? b : '' + (0 | b)
        } else {
            if ('float' === a) {
                f.styleFloat = f.cssFloat = b
            } else {
                try {
                    aT && (f[aT + a.slice(0, 1).toUpperCase() + a.slice(1)] = b),
                    f[a] = b
                } catch (d) {
                }
            }
        }
    };
    var ak,
    bF,
    by,
    aj,
    bD,
    ay,
    ah,
    bw,
    bu,
    af,
    ai,
    aU,
    bA,
    bB,
    aQ,
    bK = aJ.addEvent = function (e, f, h) {
        var g = function (a) {
            return a = a || aN.event,
            a.target || (a.target = a.srcElement),
            a.preventDefault || (a.preventDefault = function () {
                a.returnValue = !1
            }),
            h.call(this, a)
        };
        f = f.split(' ');
        for (var c, d = 0, b = f.length; b > d; d++) {
            c = f[d],
            e.addEventListener ? e.addEventListener(c, h, !1)  : e.attachEvent('on' + c, g),
            bG.push({
                element: e,
                name: c,
                listener: h
            })
        }
    },
    ae = aJ.removeEvent = function (c, a, b) {
        a = a.split(' ');
        for (var f = 0, d = a.length; d > f; f++) {
            c.removeEventListener ? c.removeEventListener(a[f], b, !1)  : c.detachEvent('on' + a[f], b)
        }
    },
    aa = function () {
        for (var c, a = 0, b = bG.length; b > a; a++) {
            c = bG[a],
            ae(c.element, c.name, c.listener)
        }
        bG = [
        ]
    },
    ag = function () {
        var a = ak.getScrollTop();
        aF = 0,
        bD && !bv && (aS.style.height = 'auto'),
        aI(),
        bD && !bv && (aS.style.height = aF + aC.clientHeight + 'px'),
        bv ? ak.setScrollTop(aw.min(ak.getScrollTop(), aF))  : ak.setScrollTop(a, !0),
        aU = !0
    },
    bJ = function () {
        var b = by && by.offsetHeight || 0,
        a = aw.max(b, aS.scrollHeight, aS.offsetHeight, aC.scrollHeight, aC.offsetHeight, aC.clientHeight);
        return a - aC.clientHeight
    },
    bE = function (a) {
        var b = 'className';
        return aN.SVGElement && a instanceof aN.SVGElement && (a = a[b], b = 'baseVal'),
        a[b]
    },
    ab = function (m, d, b) {
        var k = 'className';
        if (aN.SVGElement && m instanceof aN.SVGElement && (m = m[k], k = 'baseVal'), b === ax) {
            return m[k] = d,
            ax
        }
        for (var g = m[k], e = 0, p = b.length; p > e; e++) {
            g = al(g).replace(al(b[e]), ' ')
        }
        g = aV(g);
        for (var j = 0, h = d.length; h > j; j++) {
            - 1 === al(g).indexOf(al(d[j])) && (g += ' ' + d[j])
        }
        m[k] = aV(g)
    },
    aV = function (a) {
        return a.replace(a3, '')
    },
    al = function (a) {
        return ' ' + a + ' '
    },
    bx = Date.now || function () {
        return + new Date
    },
    az = function (b, a) {
        return b.frame - a.frame
    },
    aF = 0,
    bd = 1,
    bz = 'down',
    a8 = - 1,
    ac = bx(),
    a0 = 0,
    ad = 0,
    bI = !1,
    a2 = 0,
    bv = !1,
    bL = 0,
    bG = [
    ]
}) (window, document);
(function (w, o, n) {
    function h(O, M, J, B, E, H, K, A, z) {
        var R = !1;
        K = !0 === K && !0 === A;
        M = M || {
        };
        M.original || (M.original = {
        }, R = !0);
        M.properties = M.properties || {
        };
        M.secondary = M.secondary || {
        };
        A = M.meta;
        for (var C = M.original, N = M.properties, G = M.secondary, r = u.length - 1; 0 <= r; r--) {
            var P = u[r] + 'transition-property',
            L = u[r] + 'transition-duration',
            I = u[r] + 'transition-timing-function';
            J = K ? u[r] + 'transform' : J;
            R && (C[P] = O.css(P) || '', C[L] = O.css(L) || '', C[I] = O.css(I) || '');
            G[J] = K ? !0 === z || !0 === s && !1 !== z && l ? 'translate3d(' + A.left + 'px, ' + A.top + 'px, 0)' : 'translate(' + A.left + 'px,' + A.top + 'px)' : H;
            N[P] = (N[P] ? N[P] + ',' : '') + J;
            N[L] = (N[L] ? N[L] + ',' : '') + B + 'ms';
            N[I] = (N[I] ? N[I] + ',' : '') + E
        }
        return M
    }
    function v(r) {
        for (var d in r) {
            return !1
        }
        return !0
    }
    function g(r) {
        r = r.toUpperCase();
        var d = {
            LI: 'list-item',
            TR: 'table-row',
            TD: 'table-cell',
            TH: 'table-cell',
            CAPTION: 'table-caption',
            COL: 'table-column',
            COLGROUP: 'table-column-group',
            TFOOT: 'table-footer-group',
            THEAD: 'table-header-group',
            TBODY: 'table-row-group'
        };
        return 'string' == typeof d[r] ? d[r] : 'block'
    }
    function q(d) {
        return parseFloat(d.replace(d.match(/\D+$/), ''))
    }
    function k(r) {
        var d = !0;
        r.each(function (x, y) {
            return d = d && y.ownerDocument
        });
        return d
    }
    var f = 'top right bottom left opacity height width'.split(' '),
    p = [
        'top',
        'right',
        'bottom',
        'left'
    ],
    u = [
        '-webkit-',
        '-moz-',
        '-o-',
        ''
    ],
    e = [
        'avoidTransforms',
        'useTranslate3d',
        'leaveTransforms'
    ],
    c = /^([+-]=)?([\d+-.]+)(.*)$/,
    b = /([A-Z])/g,
    a = {
        secondary: {
        },
        meta: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
    j = null,
    t = !1,
    m = (document.body || document.documentElement).style,
    i = void 0 !== m.WebkitTransition || void 0 !== m.MozTransition || void 0 !== m.OTransition || void 0 !== m.transition,
    l = 'WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix,
    s = l;
    w.expr && w.expr.filters && (j = w.expr.filters.animated, w.expr.filters.animated = function (d) {
        return w(d).data('events') && w(d).data('events') ['webkitTransitionEnd oTransitionEnd transitionend'] ? !0 : j.call(this, d)
    });
    w.extend({
        toggle3DByDefault: function () {
            return s = !s
        },
        toggleDisabledByDefault: function () {
            return t = !t
        },
        setDisabledByDefault: function (d) {
            return t = d
        }
    });
    w.fn.translation = function () {
        if (!this[0]) {
            return null
        }
        var x = window.getComputedStyle(this[0], null),
        z = {
            x: 0,
            y: 0
        };
        if (x) {
            for (var y = u.length - 1; 0 <= y; y--) {
                var r = x.getPropertyValue(u[y] + 'transform');
                if (r && /matrix/i.test(r)) {
                    x = r.replace(/^matrix\(/i, '').split(/, |\)$/g);
                    z = {
                        x: parseInt(x[4], 10),
                        y: parseInt(x[5], 10)
                    };
                    break
                }
            }
        }
        return z
    };
    w.fn.animate = function (E, D, r, y) {
        E = E || {
        };
        var A = !('undefined' !== typeof E.bottom || 'undefined' !== typeof E.right),
        B = w.speed(D, r, y),
        C = this,
        x = 0,
        d = function () {
            x--;
            0 === x && 'function' === typeof B.complete && B.complete.apply(C, arguments)
        },
        F;
        if (!(F = !0 === ('undefined' !== typeof E.avoidCSSTransitions ? E.avoidCSSTransitions : t))) {
            if (!(F = !i)) {
                if (!(F = v(E))) {
                    var z;
                    E: {
                        for (z in E) {
                            if (('width' == z || 'height' == z) && ('show' == E[z] || 'hide' == E[z] || 'toggle' == E[z])) {
                                z = !0;
                                break E
                            }
                        }
                        z = !1
                    }
                    F = z || 0 >= B.duration
                }
            }
        }
        return F ? o.apply(this, arguments)  : this[!0 === B.queue ? 'queue' : 'each'](function () {
            var aa = w(this),
            Z = w.extend({
            }, B),
            U = function (ad) {
                var G = aa.data('jQe') || {
                    original: {
                    }
                },
                ab = {
                };
                if (2 == ad.eventPhase) {
                    if (!0 !== E.leaveTransforms) {
                        for (ad = u.length - 1; 0 <= ad; ad--) {
                            ab[u[ad] + 'transform'] = ''
                        }
                        if (A && 'undefined' !== typeof G.meta) {
                            ad = 0;
                            for (var ac; ac = p[ad]; ++ad) {
                                ab[ac] = G.meta[ac + '_o'] + 'px',
                                w(this).css(ac, ab[ac])
                            }
                        }
                    }
                    aa.unbind('webkitTransitionEnd oTransitionEnd transitionend').css(G.original).css(ab).data('jQe', null);
                    'hide' === E.opacity && aa.css({
                        display: 'none',
                        opacity: ''
                    });
                    d.call(this)
                }
            },
            V = {
                bounce: 'cubic-bezier(0.0, 0.35, .5, 1.3)',
                linear: 'linear',
                swing: 'ease-in-out',
                easeInQuad: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
                easeInCubic: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
                easeInQuart: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
                easeInQuint: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                easeInSine: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
                easeInExpo: 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
                easeInCirc: 'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
                easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
                easeOutQuad: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                easeOutCubic: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                easeOutQuart: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
                easeOutQuint: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
                easeOutSine: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
                easeOutExpo: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
                easeOutCirc: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
                easeOutBack: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
                easeInOutQuad: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
                easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                easeInOutQuart: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
                easeInOutQuint: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',
                easeInOutSine: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
                easeInOutExpo: 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
                easeInOutCirc: 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
                easeInOutBack: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
            },
            I = {
            },
            V = V[Z.easing || 'swing'] ? V[Z.easing || 'swing'] : Z.easing || 'swing',
            Y;
            for (Y in E) {
                if ( - 1 === w.inArray(Y, e)) {
                    var S = - 1 < w.inArray(Y, p),
                    T;
                    var W = aa,
                    J = E[Y],
                    M = Y,
                    P = S && !0 !== E.avoidTransforms;
                    if ('d' == M) {
                        T = void 0
                    } else {
                        if (k(W)) {
                            var X = c.exec(J);
                            T = 'auto' === W.css(M) ? 0 : W.css(M);
                            T = 'string' == typeof T ? q(T)  : T;
                            'string' == typeof J && q(J);
                            var P = !0 === P ? 0 : T,
                            O = W.is(':hidden'),
                            L = W.translation();
                            'left' == M && (P = parseInt(T, 10) + L.x);
                            'right' == M && (P = parseInt(T, 10) + L.x);
                            'top' == M && (P = parseInt(T, 10) + L.y);
                            'bottom' == M && (P = parseInt(T, 10) + L.y);
                            !X && 'show' == J ? (P = 1, O && W.css({
                                display: g(W.context.tagName),
                                opacity: 0
                            }))  : !X && 'hide' == J && (P = 0);
                            X ? (W = parseFloat(X[2]), X[1] && (W = ('-=' === X[1] ? - 1 : 1) * W + parseInt(P, 10)), T = W)  : T = P
                        } else {
                            T = void 0
                        }
                    }
                    X = Y;
                    W = T;
                    J = aa;
                    if (k(J)) {
                        M = - 1 < w.inArray(X, f);
                        if (('width' == X || 'height' == X || 'opacity' == X) && parseFloat(W) === parseFloat(J.css(X))) {
                            M = !1
                        }
                        X = M
                    } else {
                        X = !1
                    }
                    if (X) {
                        var X = aa,
                        W = Y,
                        J = Z.duration,
                        M = V,
                        S = S && !0 !== E.avoidTransforms,
                        P = A,
                        O = E.useTranslate3d,
                        L = (L = X.data('jQe')) && !v(L) ? L : w.extend(!0, {
                        }, a),
                        R = T;
                        if ( - 1 < w.inArray(W, p)) {
                            var N = L.meta,
                            Q = q(X.css(W)) || 0,
                            H = W + '_o',
                            R = T - Q;
                            N[W] = R;
                            N[H] = 'auto' == X.css(W) ? 0 + R : Q + R || 0;
                            L.meta = N;
                            P && 0 === R && (R = 0 - N[H], N[W] = R, N[H] = 0)
                        }
                        X.data('jQe', h(X, L, W, J, M, R, S, P, O))
                    } else {
                        I[Y] = E[Y]
                    }
                }
            }
            aa.unbind('webkitTransitionEnd oTransitionEnd transitionend');
            if ((Y = aa.data('jQe')) && !v(Y) && !v(Y.secondary)) {
                x++;
                aa.css(Y.properties);
                var K = Y.secondary;
                setTimeout(function () {
                    aa.bind('webkitTransitionEnd oTransitionEnd transitionend', U).css(K)
                })
            } else {
                Z.queue = !1
            }
            v(I) || (x++, o.apply(aa, [
                I,
                {
                    duration: Z.duration,
                    easing: w.easing[Z.easing] ? Z.easing : w.easing.swing ? 'swing' : 'linear',
                    complete: d,
                    queue: Z.queue
                }
            ]));
            return !0
        })
    };
    w.fn.animate.defaults = {
    };
    w.fn.stop = function (r, d, x) {
        if (!i) {
            return n.apply(this, [
                r,
                d
            ])
        }
        r && this.queue([]);
        this.each(function () {
            var y = w(this),
            z = y.data('jQe');
            if (z && !v(z)) {
                var A,
                D = {
                };
                if (d) {
                    if (D = z.secondary, !x && void 0 !== typeof z.meta.left_o || void 0 !== typeof z.meta.top_o) {
                        D.left = void 0 !== typeof z.meta.left_o ? z.meta.left_o : 'auto';
                        D.top = void 0 !== typeof z.meta.top_o ? z.meta.top_o : 'auto';
                        for (A = u.length - 1; 0 <= A; A--) {
                            D[u[A] + 'transform'] = ''
                        }
                    }
                } else {
                    if (!v(z.secondary)) {
                        var C = window.getComputedStyle(y[0], null);
                        if (C) {
                            for (var B in z.secondary) {
                                if (z.secondary.hasOwnProperty(B) && (B = B.replace(b, '-$1').toLowerCase(), D[B] = C.getPropertyValue(B), !x && /matrix/i.test(D[B]))) {
                                    A = D[B].replace(/^matrix\(/i, '').split(/, |\)$/g);
                                    D.left = parseFloat(A[4]) + parseFloat(y.css('left')) + 'px' || 'auto';
                                    D.top = parseFloat(A[5]) + parseFloat(y.css('top')) + 'px' || 'auto';
                                    for (A = u.length - 1; 0 <= A; A--) {
                                        D[u[A] + 'transform'] = ''
                                    }
                                }
                            }
                        }
                    }
                }
                y.unbind('webkitTransitionEnd oTransitionEnd transitionend');
                y.css(z.original).css(D).data('jQe', null)
            } else {
                n.apply(y, [
                    r,
                    d
                ])
            }
        });
        return this
    }
}) (jQuery, jQuery.fn.animate, jQuery.fn.stop);

