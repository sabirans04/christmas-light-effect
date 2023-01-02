function hexToRgb(e) {
    e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, i, a) {
        return t + t + i + i + a + a
    });
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
    } : null
}

function clamp(e, t, i) {
    return Math.min(Math.max(e, t), i)
}

function isInArray(e, t) {
    return t.indexOf(e) > -1
}
var pJS = function(e, t) {
    var i = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: i,
            w: i.offsetWidth,
            h: i.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var a = this.pJS;
    t && Object.deepExtend(a, t), a.tmp.obj = {
        size_value: a.particles.size.value,
        size_anim_speed: a.particles.size.anim.speed,
        move_speed: a.particles.move.speed,
        line_linked_distance: a.particles.line_linked.distance,
        line_linked_width: a.particles.line_linked.width,
        mode_grab_distance: a.interactivity.modes.grab.distance,
        mode_bubble_distance: a.interactivity.modes.bubble.distance,
        mode_bubble_size: a.interactivity.modes.bubble.size,
        mode_repulse_distance: a.interactivity.modes.repulse.distance
    }, a.fn.retinaInit = function() {
        a.retina_detect && window.devicePixelRatio > 1 ? (a.canvas.pxratio = window.devicePixelRatio, a.tmp.retina = !0) : (a.canvas.pxratio = 1, a.tmp.retina = !1), a.canvas.w = a.canvas.el.offsetWidth * a.canvas.pxratio, a.canvas.h = a.canvas.el.offsetHeight * a.canvas.pxratio, a.particles.size.value = a.tmp.obj.size_value * a.canvas.pxratio, a.particles.size.anim.speed = a.tmp.obj.size_anim_speed * a.canvas.pxratio, a.particles.move.speed = a.tmp.obj.move_speed * a.canvas.pxratio, a.particles.line_linked.distance = a.tmp.obj.line_linked_distance * a.canvas.pxratio, a.interactivity.modes.grab.distance = a.tmp.obj.mode_grab_distance * a.canvas.pxratio, a.interactivity.modes.bubble.distance = a.tmp.obj.mode_bubble_distance * a.canvas.pxratio, a.particles.line_linked.width = a.tmp.obj.line_linked_width * a.canvas.pxratio, a.interactivity.modes.bubble.size = a.tmp.obj.mode_bubble_size * a.canvas.pxratio, a.interactivity.modes.repulse.distance = a.tmp.obj.mode_repulse_distance * a.canvas.pxratio
    }, a.fn.canvasInit = function() {
        a.canvas.ctx = a.canvas.el.getContext("2d")
    }, a.fn.canvasSize = function() {
        a.canvas.el.width = a.canvas.w, a.canvas.el.height = a.canvas.h, a && a.interactivity.events.resize && window.addEventListener("resize", function() {
            a.canvas.w = a.canvas.el.offsetWidth, a.canvas.h = a.canvas.el.offsetHeight, a.tmp.retina && (a.canvas.w *= a.canvas.pxratio, a.canvas.h *= a.canvas.pxratio), a.canvas.el.width = a.canvas.w, a.canvas.el.height = a.canvas.h, a.particles.move.enable || (a.fn.particlesEmpty(), a.fn.particlesCreate(), a.fn.particlesDraw(), a.fn.vendors.densityAutoParticles()), a.fn.vendors.densityAutoParticles()
        })
    }, a.fn.canvasPaint = function() {
        a.canvas.ctx.fillRect(0, 0, a.canvas.w, a.canvas.h)
    }, a.fn.canvasClear = function() {
        a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h)
    }, a.fn.particle = function(e, t, i) {
        if (this.radius = (a.particles.size.random ? Math.random() : 1) * a.particles.size.value, a.particles.size.anim.enable && (this.size_status = !1, this.vs = a.particles.size.anim.speed / 100, a.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = i ? i.x : Math.random() * a.canvas.w, this.y = i ? i.y : Math.random() * a.canvas.h, this.x > a.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > a.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), a.particles.move.bounce && a.fn.vendors.checkOverlap(this, i), this.color = {}, "object" == typeof e.value)
            if (e.value instanceof Array) {
                var n = e.value[Math.floor(Math.random() * a.particles.color.value.length)];
                this.color.rgb = hexToRgb(n)
            } else null != e.value.r && null != e.value.g && null != e.value.b && (this.color.rgb = {
                r: e.value.r,
                g: e.value.g,
                b: e.value.b
            }), null != e.value.h && null != e.value.s && null != e.value.l && (this.color.hsl = {
                h: e.value.h,
                s: e.value.s,
                l: e.value.l
            });
        else "random" == e.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (a.particles.opacity.random ? Math.random() : 1) * a.particles.opacity.value, a.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = a.particles.opacity.anim.speed / 100, a.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var s = {};
        switch (a.particles.move.direction) {
            case "top":
                s = {
                    x: 0,
                    y: -1
                };
                break;
            case "top-right":
                s = {
                    x: .5,
                    y: -.5
                };
                break;
            case "right":
                s = {
                    x: 1,
                    y: -0
                };
                break;
            case "bottom-right":
                s = {
                    x: .5,
                    y: .5
                };
                break;
            case "bottom":
                s = {
                    x: 0,
                    y: 1
                };
                break;
            case "bottom-left":
                s = {
                    x: -.5,
                    y: 1
                };
                break;
            case "left":
                s = {
                    x: -1,
                    y: 0
                };
                break;
            case "top-left":
                s = {
                    x: -.5,
                    y: -.5
                };
                break;
            default:
                s = {
                    x: 0,
                    y: 0
                }
        }
        a.particles.move.straight ? (this.vx = s.x, this.vy = s.y, a.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = s.x + Math.random() - .5, this.vy = s.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var r = a.particles.shape.type;
        if ("object" == typeof r) {
            if (r instanceof Array) {
                var o = r[Math.floor(Math.random() * r.length)];
                this.shape = o
            }
        } else this.shape = r;
        if ("image" == this.shape) {
            var c = a.particles.shape;
            this.img = {
                src: c.image.src,
                ratio: c.image.width / c.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == a.tmp.img_type && null != a.tmp.source_svg && (a.fn.vendors.createSvgImg(this), a.tmp.pushing && (this.img.loaded = !1))
        }
    }, a.fn.particle.prototype.draw = function() {
        var e = this;
        if (null != e.radius_bubble) var t = e.radius_bubble;
        else t = e.radius;
        if (null != e.opacity_bubble) var i = e.opacity_bubble;
        else i = e.opacity;
        if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + i + ")";
        else n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + i + ")";
        switch (a.canvas.ctx.fillStyle = n, a.canvas.ctx.beginPath(), e.shape) {
            case "circle":
                a.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
                break;
            case "edge":
                a.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
                break;
            case "triangle":
                a.fn.vendors.drawShape(a.canvas.ctx, e.x - t, e.y + t / 1.66, 2 * t, 3, 2);
                break;
            case "polygon":
                a.fn.vendors.drawShape(a.canvas.ctx, e.x - t / (a.particles.shape.polygon.nb_sides / 3.5), e.y - t / .76, 2.66 * t / (a.particles.shape.polygon.nb_sides / 3), a.particles.shape.polygon.nb_sides, 1);
                break;
            case "star":
                a.fn.vendors.drawShape(a.canvas.ctx, e.x - 2 * t / (a.particles.shape.polygon.nb_sides / 4), e.y - t / 1.52, 2 * t * 2.66 / (a.particles.shape.polygon.nb_sides / 3), a.particles.shape.polygon.nb_sides, 2);
                break;
            case "image":
                if ("svg" == a.tmp.img_type) var s = e.img.obj;
                else s = a.tmp.img_obj;
                s && a.canvas.ctx.drawImage(s, e.x - t, e.y - t, 2 * t, 2 * t / e.img.ratio)
        }
        a.canvas.ctx.closePath(), a.particles.shape.stroke.width > 0 && (a.canvas.ctx.strokeStyle = a.particles.shape.stroke.color, a.canvas.ctx.lineWidth = a.particles.shape.stroke.width, a.canvas.ctx.stroke()), a.canvas.ctx.fill()
    }, a.fn.particlesCreate = function() {
        for (var e = 0; e < a.particles.number.value; e++) a.particles.array.push(new a.fn.particle(a.particles.color, a.particles.opacity.value))
    }, a.fn.particlesUpdate = function() {
        for (var e = 0; e < a.particles.array.length; e++) {
            var t = a.particles.array[e];
            if (a.particles.move.enable) {
                var i = a.particles.move.speed / 2;
                t.x += t.vx * i, t.y += t.vy * i
            }
            if (a.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= a.particles.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= a.particles.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), a.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= a.particles.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= a.particles.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == a.particles.move.out_mode) var n = {
                x_left: t.radius,
                x_right: a.canvas.w,
                y_top: t.radius,
                y_bottom: a.canvas.h
            };
            else n = {
                x_left: -t.radius,
                x_right: a.canvas.w + t.radius,
                y_top: -t.radius,
                y_bottom: a.canvas.h + t.radius
            };
            switch (t.x - t.radius > a.canvas.w ? (t.x = n.x_left, t.y = Math.random() * a.canvas.h) : t.x + t.radius < 0 && (t.x = n.x_right, t.y = Math.random() * a.canvas.h), t.y - t.radius > a.canvas.h ? (t.y = n.y_top, t.x = Math.random() * a.canvas.w) : t.y + t.radius < 0 && (t.y = n.y_bottom, t.x = Math.random() * a.canvas.w), a.particles.move.out_mode) {
                case "bounce":
                    t.x + t.radius > a.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > a.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
            }
            if (isInArray("grab", a.interactivity.events.onhover.mode) && a.fn.modes.grabParticle(t), (isInArray("bubble", a.interactivity.events.onhover.mode) || isInArray("bubble", a.interactivity.events.onclick.mode)) && a.fn.modes.bubbleParticle(t), (isInArray("repulse", a.interactivity.events.onhover.mode) || isInArray("repulse", a.interactivity.events.onclick.mode)) && a.fn.modes.repulseParticle(t), a.particles.line_linked.enable || a.particles.move.attract.enable)
                for (var s = e + 1; s < a.particles.array.length; s++) {
                    var r = a.particles.array[s];
                    a.particles.line_linked.enable && a.fn.interact.linkParticles(t, r), a.particles.move.attract.enable && a.fn.interact.attractParticles(t, r), a.particles.move.bounce && a.fn.interact.bounceParticles(t, r)
                }
        }
    }, a.fn.particlesDraw = function() {
        a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h), a.fn.particlesUpdate();
        for (var e = 0; e < a.particles.array.length; e++) {
            a.particles.array[e].draw()
        }
    }, a.fn.particlesEmpty = function() {
        a.particles.array = []
    }, a.fn.particlesRefresh = function() {
        cancelRequestAnimFrame(a.fn.checkAnimFrame), cancelRequestAnimFrame(a.fn.drawAnimFrame), a.tmp.source_svg = void 0, a.tmp.img_obj = void 0, a.tmp.count_svg = 0, a.fn.particlesEmpty(), a.fn.canvasClear(), a.fn.vendors.start()
    }, a.fn.interact.linkParticles = function(e, t) {
        var i = e.x - t.x,
            n = e.y - t.y,
            s = Math.sqrt(i * i + n * n);
        if (s <= a.particles.line_linked.distance) {
            var r = a.particles.line_linked.opacity - s / (1 / a.particles.line_linked.opacity) / a.particles.line_linked.distance;
            if (r > 0) {
                var o = a.particles.line_linked.color_rgb_line;
                a.canvas.ctx.strokeStyle = "rgba(" + o.r + "," + o.g + "," + o.b + "," + r + ")", a.canvas.ctx.lineWidth = a.particles.line_linked.width, a.canvas.ctx.beginPath(), a.canvas.ctx.moveTo(e.x, e.y), a.canvas.ctx.lineTo(t.x, t.y), a.canvas.ctx.stroke(), a.canvas.ctx.closePath()
            }
        }
    }, a.fn.interact.attractParticles = function(e, t) {
        var i = e.x - t.x,
            n = e.y - t.y;
        if (Math.sqrt(i * i + n * n) <= a.particles.line_linked.distance) {
            var s = i / (1e3 * a.particles.move.attract.rotateX),
                r = n / (1e3 * a.particles.move.attract.rotateY);
            e.vx -= s, e.vy -= r, t.vx += s, t.vy += r
        }
    }, a.fn.interact.bounceParticles = function(e, t) {
        var i = e.x - t.x,
            a = e.y - t.y,
            n = Math.sqrt(i * i + a * a);
        e.radius + t.radius >= n && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
    }, a.fn.modes.pushParticles = function(e, t) {
        a.tmp.pushing = !0;
        for (var i = 0; e > i; i++) a.particles.array.push(new a.fn.particle(a.particles.color, a.particles.opacity.value, {
            x: t ? t.pos_x : Math.random() * a.canvas.w,
            y: t ? t.pos_y : Math.random() * a.canvas.h
        })), i == e - 1 && (a.particles.move.enable || a.fn.particlesDraw(), a.tmp.pushing = !1)
    }, a.fn.modes.removeParticles = function(e) {
        a.particles.array.splice(0, e), a.particles.move.enable || a.fn.particlesDraw()
    }, a.fn.modes.bubbleParticle = function(e) {
        function t() {
            e.opacity_bubble = e.opacity, e.radius_bubble = e.radius
        }

        function i(t, i, n, s, r) {
            if (t != i)
                if (a.tmp.bubble_duration_end) {
                    if (null != n) c = t + (t - (s - d * (s - t) / a.interactivity.modes.bubble.duration)), "size" == r && (e.radius_bubble = c), "opacity" == r && (e.opacity_bubble = c)
                } else if (h <= a.interactivity.modes.bubble.distance) {
                if (null != n) var o = n;
                else o = s;
                if (o != t) {
                    var c = s - d * (s - t) / a.interactivity.modes.bubble.duration;
                    "size" == r && (e.radius_bubble = c), "opacity" == r && (e.opacity_bubble = c)
                }
            } else "size" == r && (e.radius_bubble = void 0), "opacity" == r && (e.opacity_bubble = void 0)
        }
        if (a.interactivity.events.onhover.enable && isInArray("bubble", a.interactivity.events.onhover.mode)) {
            var n = e.x - a.interactivity.mouse.pos_x,
                s = e.y - a.interactivity.mouse.pos_y,
                r = 1 - (h = Math.sqrt(n * n + s * s)) / a.interactivity.modes.bubble.distance;
            if (h <= a.interactivity.modes.bubble.distance) {
                if (r >= 0 && "mousemove" == a.interactivity.status) {
                    if (a.interactivity.modes.bubble.size != a.particles.size.value)
                        if (a.interactivity.modes.bubble.size > a.particles.size.value) {
                            (c = e.radius + a.interactivity.modes.bubble.size * r) >= 0 && (e.radius_bubble = c)
                        } else {
                            var o = e.radius - a.interactivity.modes.bubble.size,
                                c = e.radius - o * r;
                            e.radius_bubble = c > 0 ? c : 0
                        } if (a.interactivity.modes.bubble.opacity != a.particles.opacity.value)
                        if (a.interactivity.modes.bubble.opacity > a.particles.opacity.value) {
                            (l = a.interactivity.modes.bubble.opacity * r) > e.opacity && l <= a.interactivity.modes.bubble.opacity && (e.opacity_bubble = l)
                        } else {
                            var l;
                            (l = e.opacity - (a.particles.opacity.value - a.interactivity.modes.bubble.opacity) * r) < e.opacity && l >= a.interactivity.modes.bubble.opacity && (e.opacity_bubble = l)
                        }
                }
            } else t();
            "mouseleave" == a.interactivity.status && t()
        } else if (a.interactivity.events.onclick.enable && isInArray("bubble", a.interactivity.events.onclick.mode)) {
            if (a.tmp.bubble_clicking) {
                n = e.x - a.interactivity.mouse.click_pos_x, s = e.y - a.interactivity.mouse.click_pos_y;
                var h = Math.sqrt(n * n + s * s),
                    d = ((new Date).getTime() - a.interactivity.mouse.click_time) / 1e3;
                d > a.interactivity.modes.bubble.duration && (a.tmp.bubble_duration_end = !0), d > 2 * a.interactivity.modes.bubble.duration && (a.tmp.bubble_clicking = !1, a.tmp.bubble_duration_end = !1)
            }
            a.tmp.bubble_clicking && (i(a.interactivity.modes.bubble.size, a.particles.size.value, e.radius_bubble, e.radius, "size"), i(a.interactivity.modes.bubble.opacity, a.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
        }
    }, a.fn.modes.repulseParticle = function(e) {
        if (a.interactivity.events.onhover.enable && isInArray("repulse", a.interactivity.events.onhover.mode) && "mousemove" == a.interactivity.status) {
            var t = e.x - a.interactivity.mouse.pos_x,
                i = e.y - a.interactivity.mouse.pos_y,
                n = Math.sqrt(t * t + i * i),
                s = {
                    x: t / n,
                    y: i / n
                },
                r = clamp(1 / (c = a.interactivity.modes.repulse.distance) * (-1 * Math.pow(n / c, 2) + 1) * c * 100, 0, 50),
                o = {
                    x: e.x + s.x * r,
                    y: e.y + s.y * r
                };
            "bounce" == a.particles.move.out_mode ? (o.x - e.radius > 0 && o.x + e.radius < a.canvas.w && (e.x = o.x), o.y - e.radius > 0 && o.y + e.radius < a.canvas.h && (e.y = o.y)) : (e.x = o.x, e.y = o.y)
        } else if (a.interactivity.events.onclick.enable && isInArray("repulse", a.interactivity.events.onclick.mode))
            if (a.tmp.repulse_finish || (a.tmp.repulse_count++, a.tmp.repulse_count == a.particles.array.length && (a.tmp.repulse_finish = !0)), a.tmp.repulse_clicking) {
                var c = Math.pow(a.interactivity.modes.repulse.distance / 6, 3),
                    l = a.interactivity.mouse.click_pos_x - e.x,
                    h = a.interactivity.mouse.click_pos_y - e.y,
                    d = l * l + h * h,
                    p = -c / d * 1;
                c >= d && function() {
                    var t = Math.atan2(h, l);
                    if (e.vx = p * Math.cos(t), e.vy = p * Math.sin(t), "bounce" == a.particles.move.out_mode) {
                        var i = {
                            x: e.x + e.vx,
                            y: e.y + e.vy
                        };
                        i.x + e.radius > a.canvas.w ? e.vx = -e.vx : i.x - e.radius < 0 && (e.vx = -e.vx), i.y + e.radius > a.canvas.h ? e.vy = -e.vy : i.y - e.radius < 0 && (e.vy = -e.vy)
                    }
                }()
            } else 0 == a.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i)
    }, a.fn.modes.grabParticle = function(e) {
        if (a.interactivity.events.onhover.enable && "mousemove" == a.interactivity.status) {
            var t = e.x - a.interactivity.mouse.pos_x,
                i = e.y - a.interactivity.mouse.pos_y,
                n = Math.sqrt(t * t + i * i);
            if (n <= a.interactivity.modes.grab.distance) {
                var s = a.interactivity.modes.grab.line_linked.opacity - n / (1 / a.interactivity.modes.grab.line_linked.opacity) / a.interactivity.modes.grab.distance;
                if (s > 0) {
                    var r = a.particles.line_linked.color_rgb_line;
                    a.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + s + ")", a.canvas.ctx.lineWidth = a.particles.line_linked.width, a.canvas.ctx.beginPath(), a.canvas.ctx.moveTo(e.x, e.y), a.canvas.ctx.lineTo(a.interactivity.mouse.pos_x, a.interactivity.mouse.pos_y), a.canvas.ctx.stroke(), a.canvas.ctx.closePath()
                }
            }
        }
    }, a.fn.vendors.eventsListeners = function() {
        "window" == a.interactivity.detect_on ? a.interactivity.el = window : a.interactivity.el = a.canvas.el, (a.interactivity.events.onhover.enable || a.interactivity.events.onclick.enable) && (a.interactivity.el.addEventListener("mousemove", function(e) {
            if (a.interactivity.el == window) var t = e.clientX,
                i = e.clientY;
            else t = e.offsetX || e.clientX, i = e.offsetY || e.clientY;
            a.interactivity.mouse.pos_x = t, a.interactivity.mouse.pos_y = i, a.tmp.retina && (a.interactivity.mouse.pos_x *= a.canvas.pxratio, a.interactivity.mouse.pos_y *= a.canvas.pxratio), a.interactivity.status = "mousemove"
        }), a.interactivity.el.addEventListener("mouseleave", function(e) {
            a.interactivity.mouse.pos_x = null, a.interactivity.mouse.pos_y = null, a.interactivity.status = "mouseleave"
        })), a.interactivity.events.onclick.enable && a.interactivity.el.addEventListener("click", function() {
            if (a.interactivity.mouse.click_pos_x = a.interactivity.mouse.pos_x, a.interactivity.mouse.click_pos_y = a.interactivity.mouse.pos_y, a.interactivity.mouse.click_time = (new Date).getTime(), a.interactivity.events.onclick.enable) switch (a.interactivity.events.onclick.mode) {
                case "push":
                    a.particles.move.enable ? a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb, a.interactivity.mouse) : 1 == a.interactivity.modes.push.particles_nb ? a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb, a.interactivity.mouse) : a.interactivity.modes.push.particles_nb > 1 && a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    a.fn.modes.removeParticles(a.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    a.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    a.tmp.repulse_clicking = !0, a.tmp.repulse_count = 0, a.tmp.repulse_finish = !1, setTimeout(function() {
                        a.tmp.repulse_clicking = !1
                    }, 1e3 * a.interactivity.modes.repulse.duration)
            }
        })
    }, a.fn.vendors.densityAutoParticles = function() {
        if (a.particles.number.density.enable) {
            var e = a.canvas.el.width * a.canvas.el.height / 1e3;
            a.tmp.retina && (e /= 2 * a.canvas.pxratio);
            var t = e * a.particles.number.value / a.particles.number.density.value_area,
                i = a.particles.array.length - t;
            0 > i ? a.fn.modes.pushParticles(Math.abs(i)) : a.fn.modes.removeParticles(i)
        }
    }, a.fn.vendors.checkOverlap = function(e, t) {
        for (var i = 0; i < a.particles.array.length; i++) {
            var n = a.particles.array[i],
                s = e.x - n.x,
                r = e.y - n.y;
            Math.sqrt(s * s + r * r) <= e.radius + n.radius && (e.x = t ? t.x : Math.random() * a.canvas.w, e.y = t ? t.y : Math.random() * a.canvas.h, a.fn.vendors.checkOverlap(e))
        }
    }, a.fn.vendors.createSvgImg = function(e) {
        var t = a.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function(t, i, a, n) {
                if (e.color.rgb) var s = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
                else s = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
                return s
            }),
            i = new Blob([t], {
                type: "image/svg+xml;charset=utf-8"
            }),
            n = window.URL || window.webkitURL || window,
            s = n.createObjectURL(i),
            r = new Image;
        r.addEventListener("load", function() {
            e.img.obj = r, e.img.loaded = !0, n.revokeObjectURL(s), a.tmp.count_svg++
        }), r.src = s
    }, a.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(a.fn.drawAnimFrame), i.remove(), pJSDom = null
    }, a.fn.vendors.drawShape = function(e, t, i, a, n, s) {
        var r = n * s,
            o = n / s,
            c = 180 * (o - 2) / o,
            l = Math.PI - Math.PI * c / 180;
        e.save(), e.beginPath(), e.translate(t, i), e.moveTo(0, 0);
        for (var h = 0; r > h; h++) e.lineTo(a, 0), e.translate(a, 0), e.rotate(l);
        e.fill(), e.restore()
    }, a.fn.vendors.exportImg = function() {
        window.open(a.canvas.el.toDataURL("image/png"), "_blank")
    }, a.fn.vendors.loadImg = function(e) {
        if (a.tmp.img_error = void 0, "" != a.particles.shape.image.src)
            if ("svg" == e) {
                var t = new XMLHttpRequest;
                t.open("GET", a.particles.shape.image.src), t.onreadystatechange = function(e) {
                    4 == t.readyState && (200 == t.status ? (a.tmp.source_svg = e.currentTarget.response, a.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), a.tmp.img_error = !0))
                }, t.send()
            } else {
                var i = new Image;
                i.addEventListener("load", function() {
                    a.tmp.img_obj = i, a.fn.vendors.checkBeforeDraw()
                }), i.src = a.particles.shape.image.src
            }
        else console.log("Error pJS - No image.src"), a.tmp.img_error = !0
    }, a.fn.vendors.draw = function() {
        "image" == a.particles.shape.type ? "svg" == a.tmp.img_type ? a.tmp.count_svg >= a.particles.number.value ? (a.fn.particlesDraw(), a.particles.move.enable ? a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw) : cancelRequestAnimFrame(a.fn.drawAnimFrame)) : a.tmp.img_error || (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw)) : null != a.tmp.img_obj ? (a.fn.particlesDraw(), a.particles.move.enable ? a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw) : cancelRequestAnimFrame(a.fn.drawAnimFrame)) : a.tmp.img_error || (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw)) : (a.fn.particlesDraw(), a.particles.move.enable ? a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw) : cancelRequestAnimFrame(a.fn.drawAnimFrame))
    }, a.fn.vendors.checkBeforeDraw = function() {
        "image" == a.particles.shape.type ? "svg" == a.tmp.img_type && null == a.tmp.source_svg ? a.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(a.tmp.checkAnimFrame), a.tmp.img_error || (a.fn.vendors.init(), a.fn.vendors.draw())) : (a.fn.vendors.init(), a.fn.vendors.draw())
    }, a.fn.vendors.init = function() {
        a.fn.retinaInit(), a.fn.canvasInit(), a.fn.canvasSize(), a.fn.canvasPaint(), a.fn.particlesCreate(), a.fn.vendors.densityAutoParticles(), a.particles.line_linked.color_rgb_line = hexToRgb(a.particles.line_linked.color)
    }, a.fn.vendors.start = function() {
        isInArray("image", a.particles.shape.type) ? (a.tmp.img_type = a.particles.shape.image.src.substr(a.particles.shape.image.src.length - 3), a.fn.vendors.loadImg(a.tmp.img_type)) : a.fn.vendors.checkBeforeDraw()
    }, a.fn.vendors.eventsListeners(), a.fn.vendors.start()
};
Object.deepExtend = function(e, t) {
        for (var i in t) t[i] && t[i].constructor && t[i].constructor === Object ? (e[i] = e[i] || {}, arguments.callee(e[i], t[i])) : e[i] = t[i];
        return e
    }, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function(e, t) {
        "string" != typeof e && (t = e, e = "particles-js"), e || (e = "particles-js");
        var i = document.getElementById(e),
            a = "particles-js-canvas-el",
            n = i.getElementsByClassName(a);
        if (n.length)
            for (; n.length > 0;) i.removeChild(n[0]);
        var s = document.createElement("canvas");
        s.className = a, s.style.width = "100%", s.style.height = "100%", null != document.getElementById(e).appendChild(s) && pJSDom.push(new pJS(e, t))
    }, window.particlesJS.load = function(e, t, i) {
        var a = new XMLHttpRequest;
        a.open("GET", t), a.onreadystatechange = function(t) {
            if (4 == a.readyState)
                if (200 == a.status) {
                    var n = JSON.parse(t.currentTarget.response);
                    window.particlesJS(e, n), i && i()
                } else console.log("Error pJS - XMLHttpRequest status: " + a.status), console.log("Error pJS - File config not found")
        }, a.send()
    },
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Snowflakes = t()
    }(this, function() {
        "use strict";
        var e = "";

        function t(t, i) {
            Object.keys(i).forEach(function(a) {
                var n = a;
                e && a.search("animation") > -1 && (n = e + a[0].toUpperCase() + a.substr(1)), t.style[n] = i[a]
            })
        }

        function i(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        }

        function a(e, t) {
            e.classList.add(t)
        }

        function n(e, t) {
            e.classList.remove(t)
        }

        function s(e, t) {
            return e + Math.floor(Math.random() * (t - e))
        }

        function r(e, t, i, a, n) {
            return a + (n - a) * (e - t) / (i - t)
        }
        "undefined" != typeof window && (e = Array.prototype.slice.call(window.getComputedStyle(document.documentElement, "")).join(",").search(/,animation/) > -1 ? "" : "webkit");
        var o = 20;

        function c(e, t, i) {
            return Math.floor(r(e, 0, o, t, i))
        }
        var l = function() {
            function e(e) {
                var i = e.minSize === e.maxSize;
                this.innerSize = i ? 0 : s(0, o), this.size = c(this.innerSize, e.minSize, e.maxSize);
                var n = document.createElement("div"),
                    l = document.createElement("div"),
                    h = this.getAnimationProps(e),
                    d = {
                        animationName: "snowflake_gid_" + e.gid + "_y",
                        animationDelay: h.animationDelay,
                        animationDuration: h.animationDuration,
                        left: 99 * Math.random() + "%",
                        top: -Math.sqrt(2) * this.size + "px",
                        width: this.size + "px",
                        height: this.size + "px"
                    };
                i || (d.opacity = String(r(this.size, e.minSize, e.maxSize, e.minOpacity, e.maxOpacity))), t(n, d), t(l, {
                    animationName: "snowflake_gid_" + e.gid + "_x_" + this.innerSize,
                    animationDelay: 4 * Math.random() + "s"
                }), a(n, "snowflake"), a(l, "snowflake__inner"), e.types && a(l, "snowflake__inner_type_" + s(0, e.types)), e.wind && a(l, "snowflake__inner_wind"), e.rotation && a(l, "snowflake__inner_rotation" + (Math.random() > .5 ? "" : "_reverse")), n.appendChild(l), this.elem = n
            }
            return e.prototype.resize = function(e) {
                var i = this.getAnimationProps(e);
                this.elem && t(this.elem, i)
            }, e.prototype.appendTo = function(e) {
                this.elem && e.appendChild(this.elem)
            }, e.prototype.destroy = function() {
                delete this.elem
            }, e.prototype.getAnimationProps = function(e) {
                var t = e.containerHeight / 50 / e.speed,
                    i = t / 3;
                return {
                    animationDelay: Math.random() * t + "s",
                    animationDuration: String(r(this.size, e.minSize, e.maxSize, t, i) + "s")
                }
            }, e
        }();
        let h = "";
        return function() {
            function e(t) {
                this.destroyed = !1, this.flakes = [], this.isBody = !1, this.params = this.setParams(t), this.isBody = this.params.container === document.body, e.gid++, this.gid = e.gid, this.container = this.appendContainer(), this.params.stop && this.stop(), this.appendStyles(), this.appendFlakes(), this.handleResize = this.handleResize.bind(this), window.addEventListener("resize", this.handleResize, !1)
            }
            return e.prototype.start = function() {
                n(this.container, "snowflakes_paused")
            }, e.prototype.stop = function() {
                a(this.container, "snowflakes_paused")
            }, e.prototype.show = function() {
                n(this.container, "snowflakes_hidden")
            }, e.prototype.hide = function() {
                a(this.container, "snowflakes_hidden")
            }, e.prototype.destroy = function() {
                this.destroyed || (this.destroyed = !0, e.instanceCounter && e.instanceCounter--, this.removeStyles(), i(this.container), this.flakes.forEach(function(e) {
                    return e.destroy()
                }), this.flakes = [], window.removeEventListener("resize", this.handleResize, !1))
            }, e.prototype.handleResize = function() {
                var e = this.getFlakeParams();
                t(this.container, {
                        display: "none"
                    }), this.flakes.forEach(function(t) {
                        return t.resize(e)
                    }), this.updateAnimationStyle(),
                    function(e) {
                        t(e, {
                            display: "block"
                        })
                    }(this.container)
            }, e.prototype.appendContainer = function() {
                var e = document.createElement("div");
                return a(e, "snowflakes"), a(e, "snowflakes_gid_" + this.gid), this.isBody && a(e, "snowflakes_body"), t(e, {
                    zIndex: String(this.params.zIndex)
                }), this.params.container.appendChild(e), e
            }, e.prototype.appendStyles = function() {
                if (!e.instanceCounter) {
                    const e = this.params.launches;
                    var t = `.snowflake{-webkit-animation:snowflake_unknown 10s linear ${e};animation:snowflake_unknown 10s linear ${e};pointer-events:none;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;will-change:transform}.snowflake__inner,.snowflake__inner:before{bottom:0;left:0;position:absolute;right:0;top:0}.snowflake__inner:before{background-size:100% 100%;content:""}.snowflake__inner_wind{-webkit-animation:snowflake_unknown 2s ease-in-out infinite alternate;animation:snowflake_unknown 2s ease-in-out infinite alternate}.snowflake__inner_rotation:before{-webkit-animation:snowflake_rotation 10s linear infinite;animation:snowflake_rotation 10s linear infinite}.snowflake__inner_rotation_reverse:before{-webkit-animation:snowflake_rotation_reverse 10s linear infinite;animation:snowflake_rotation_reverse 10s linear infinite}@-webkit-keyframes snowflake_rotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes snowflake_rotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes snowflake_rotation_reverse{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}@keyframes snowflake_rotation_reverse{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}.snowflakes{pointer-events:none}.snowflakes_paused .snowflake,.snowflakes_paused .snowflake__inner,.snowflakes_paused .snowflake__inner:before{-webkit-animation-play-state:paused;animation-play-state:paused}.snowflakes_hidden{visibility:hidden}.snowflakes_body{height:1px;left:0;position:fixed;top:0;width:100%}`;
                    this.mainStyleNode = this.injectStyle(t)
                }
                if (e.instanceCounter++, this.params.images.length)
                    for (let e = 0; e < 6; e++)
                        if (this.params.images[e]) h += `${h}.snowflakes_gid_value .snowflake__inner_type_${e}:before {background-image: url("${this.params.images[e]}");}`;
                        else {
                            const t = s(0, this.params.images.length - 1);
                            h += `${h}.snowflakes_gid_value .snowflake__inner_type_${e}:before {background-image: url("${this.params.images[t]}");}`
                        } this.imagesStyleNode = this.injectStyle(h.replace(/:color:/g, encodeURIComponent(this.params.color))), this.animationStyleNode = this.injectStyle(this.getAnimationStyle())
            }, e.prototype.injectStyle = function(e, t) {
                return function(e, t, i) {
                    return t || ((t = document.createElement("style")).classList.add("toys-styles"), document.body.appendChild(t)), t.textContent = e, t
                }(e.replace(/_gid_value/g, "_gid_" + this.gid), t, this.params.container)
            }, e.prototype.getFlakeParams = function() {
                var e = this.height(),
                    t = this.params;
                return {
                    containerHeight: e,
                    gid: this.gid,
                    count: t.count,
                    speed: t.speed,
                    rotation: t.rotation,
                    minOpacity: t.minOpacity,
                    maxOpacity: t.maxOpacity,
                    minSize: t.minSize,
                    maxSize: t.maxSize,
                    types: t.types,
                    wind: t.wind,
                    images: t.images,
                    launches: t.launches
                }
            }, e.prototype.appendFlakes = function() {
                var e = this,
                    t = this.getFlakeParams();
                this.flakes = [];
                for (var i = 0; i < this.params.count; i++) this.flakes.push(new l(t));
                this.flakes.sort(function(e, t) {
                    return e.size - t.size
                }).forEach(function(t) {
                    t.appendTo(e.container)
                })
            }, e.prototype.setParams = function(e) {
                var t = e || {},
                    i = {},
                    a = {
                        color: "#5ECDEF",
                        container: document.body,
                        count: 50,
                        speed: 1,
                        stop: !1,
                        rotation: !0,
                        minOpacity: .6,
                        maxOpacity: 1,
                        minSize: 10,
                        maxSize: 25,
                        types: 6,
                        width: void 0,
                        height: void 0,
                        wind: !0,
                        zIndex: 9999,
                        images: [],
                        launches: "1"
                    };
                return Object.keys(a).forEach(function(e) {
                    i[e] = void 0 === t[e] ? a[e] : t[e]
                }), i
            }, e.prototype.getAnimationStyle = function() {
                for (var e = this.height() + this.params.maxSize * Math.sqrt(2) + "px", t = this.gid, i = "@-webkit-keyframes snowflake_gid_" + t + "_y{from{-webkit-transform:translateY(0px)}to{-webkit-transform:translateY(" + e + ");}}\n@keyframes snowflake_gid_" + t + "_y{from{transform:translateY(0px)}to{transform:translateY(" + e + ")}}", a = 0; a <= o; a++) {
                    var n = c(a, this.params.minSize, this.params.maxSize) + "px";
                    i += "@-webkit-keyframes snowflake_gid_" + t + "_x_" + a + "{from{-webkit-transform:translateX(0px)}to{-webkit-transform:translateX(" + n + ");}}\n@keyframes snowflake_gid_" + t + "_x_" + a + "{from{transform:translateX(0px)}to{transform:translateX(" + n + ")}}"
                }
                return i
            }, e.prototype.updateAnimationStyle = function() {
                this.injectStyle(this.getAnimationStyle(), this.animationStyleNode)
            }, e.prototype.removeStyles = function() {
                e.instanceCounter || (i(this.mainStyleNode), delete this.mainStyleNode), i(this.imagesStyleNode), delete this.imagesStyleNode, i(this.animationStyleNode), delete this.animationStyleNode
            }, e.prototype.height = function() {
                return this.params.height || (this.isBody ? (t = document.body, i = document.documentElement, window.innerHeight ? e = window.innerHeight : i && i.clientHeight ? e = i.clientHeight : t && (e = t.clientHeight), e || 0) : this.params.container.offsetHeight + this.params.maxSize);
                var e, t, i
            }, e.instanceCounter = 0, e.gid = 0, e
        }()
    }),
    function(e, t) {
        if ("object" == typeof exports && "object" == typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define([], t);
        else {
            var i = t();
            for (var a in i)("object" == typeof exports ? exports : e)[a] = i[a]
        }
    }(this, function() {
        return (() => {
            "use strict";
            var e = {
                    511: (e, t, i) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.Explosion = void 0;
                        var a = i(909);
                        t.Explosion = class {
                            constructor(e) {
                                var {
                                    x: t,
                                    y: i,
                                    ctx: n,
                                    hue: s,
                                    exp: r,
                                    gravity: o,
                                    friction: c,
                                    brightness: l,
                                    explosionLength: h
                                } = e;
                                for (this._coordinates = [], this._alpha = 1, this._x = t, this._y = i, this._exp = r, this._ctx = n, this._gravity = o, this._friction = c, this._explosionLength = h; this._explosionLength--;) this._coordinates.push([t, i]);
                                this._angle = (0, a.randomFloat)(0, 2 * Math.PI), this._speed = (0, a.randomInt)(1, 10), this._hue = (0, a.randomInt)(s - 20, s + 20), this._brightness = (0, a.randomInt)(l.min, l.max), this._decay = (0, a.randomFloat)(l.decay.min, l.decay.max)
                            }
                            update(e) {
                                this._coordinates.pop(), this._coordinates.unshift([this._x, this._y]), this._speed *= this._friction, this._x += Math.cos(this._angle) * this._speed, this._y += Math.sin(this._angle) * this._speed + this._gravity, this._alpha -= this._decay, this._alpha <= this._decay && e()
                            }
                            draw() {
                                var e = this._coordinates.length - 1;
                                this._ctx.beginPath(), this._exp && (this._ctx.arc(this._x, this._y, (0, a.randomFloat)(.5, 1.5), 0, 2 * Math.PI), this._ctx.fill()), this._ctx.fillStyle = (0, a.hsla)(this._hue, this._brightness, this._alpha), this._ctx.moveTo(this._coordinates[e][0], this._coordinates[e][1]), this._ctx.lineTo(this._x, this._y), this._ctx.strokeStyle = (0, a.hsla)(this._hue, this._brightness, this._alpha), this._ctx.stroke()
                            }
                        }
                    },
                    909: (e, t) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.hsla = t.getDistance = t.randomInt = t.randomFloat = void 0, t.randomFloat = function(e, t) {
                            return Math.random() * (t - e) + e
                        }, t.randomInt = function(e, t) {
                            return Math.floor(e + Math.random() * (t + 1 - e))
                        }, t.getDistance = function(e, t, i, a) {
                            var n = Math.pow;
                            return Math.sqrt(n(e - i, 2) + n(t - a, 2))
                        }, t.hsla = function(e, t) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                            return "hsla(".concat(e, ", 100%, ").concat(t, "%, ").concat(i, ")")
                        }
                    },
                    449: function(e, t, i) {
                        var a = this && this.__awaiter || function(e, t, i, a) {
                            return new(i || (i = Promise))(function(n, s) {
                                function r(e) {
                                    try {
                                        c(a.next(e))
                                    } catch (e) {
                                        s(e)
                                    }
                                }

                                function o(e) {
                                    try {
                                        c(a.throw(e))
                                    } catch (e) {
                                        s(e)
                                    }
                                }

                                function c(e) {
                                    var t;
                                    e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                                        e(t)
                                    })).then(r, o)
                                }
                                c((a = a.apply(e, t || [])).next())
                            })
                        };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.Sound = void 0;
                        var n = i(909);
                        t.Sound = class {
                            constructor(e) {
                                this._buffer = [], this.onInit = !0, this._audioContext = new(window.AudioContext || window.webkitAudioContext), this.options = Object.assign({
                                    enabled: !1,
                                    files: ["explosion0.mp3", "explosion1.mp3", "explosion2.mp3"],
                                    volume: {
                                        min: 4,
                                        max: 8
                                    }
                                }, e), this.init()
                            }
                            init() {
                                this.onInit && this.options.enabled && (this.onInit = !1, this.load())
                            }
                            load() {
                                return a(this, void 0, void 0, function*() {
                                    for (var e of this.options.files) {
                                        var t = yield(yield fetch(e)).arrayBuffer();
                                        this._audioContext.decodeAudioData(t).then(e => {
                                            this._buffer.push(e)
                                        }).catch(e => {
                                            throw e
                                        })
                                    }
                                })
                            }
                            play() {
                                if (this.options.enabled && this._buffer.length) {
                                    var e = this._audioContext.createBufferSource(),
                                        t = this._buffer[(0, n.randomInt)(0, this._buffer.length - 1)],
                                        i = this._audioContext.createGain();
                                    e.buffer = t, i.gain.value = (0, n.randomFloat)(this.options.volume.min / 100, this.options.volume.max / 100), i.connect(this._audioContext.destination), e.connect(i), e.start(0)
                                } else this.init()
                            }
                        }
                    },
                    668: (e, t, i) => {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.Trace = void 0;
                        var a = i(909);
                        t.Trace = class {
                            constructor(e) {
                                var {
                                    x: t,
                                    y: i,
                                    dx: n,
                                    dy: s,
                                    ctx: r,
                                    hue: o,
                                    speed: c,
                                    traceLength: l,
                                    acceleration: h
                                } = e;
                                for (this._coordinates = [], this._currentDistance = 0, this._x = t, this._y = i, this._sx = t, this._sy = i, this._dx = n, this._dy = s, this._ctx = r, this._hue = o, this._speed = c, this._traceLength = l, this._acceleration = h, this._totalDistance = (0, a.getDistance)(t, i, n, s); this._traceLength--;) this._coordinates.push([t, i]);
                                this._angle = Math.atan2(s - i, n - t), this._brightness = (0, a.randomInt)(50, 70)
                            }
                            update(e) {
                                this._coordinates.pop(), this._coordinates.unshift([this._x, this._y]), this._speed *= this._acceleration;
                                var t = Math.cos(this._angle) * this._speed,
                                    i = Math.sin(this._angle) * this._speed;
                                this._currentDistance = (0, a.getDistance)(this._sx, this._sy, this._x + t, this._y + i), this._currentDistance >= this._totalDistance ? e(this._dx, this._dy, this._hue) : (this._x += t, this._y += i)
                            }
                            draw() {
                                var e = this._coordinates.length - 1;
                                this._ctx.beginPath(), this._ctx.moveTo(this._coordinates[e][0], this._coordinates[e][1]), this._ctx.lineTo(this._x, this._y), this._ctx.strokeStyle = (0, a.hsla)(this._hue, this._brightness), this._ctx.stroke()
                            }
                        }
                    }
                },
                t = {};

            function i(a) {
                var n = t[a];
                if (void 0 !== n) return n.exports;
                var s = t[a] = {
                    exports: {}
                };
                return e[a].call(s.exports, s, s.exports, i), s.exports
            }
            var a = {};
            return (() => {
                var e = a;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Fireworks = void 0;
                var t = i(668),
                    n = i(449),
                    s = i(511),
                    r = i(909);
                e.Fireworks = class {
                    constructor(e) {
                        var {
                            autoresize: t = !0,
                            boundaries: i,
                            brightness: a,
                            delay: s,
                            hue: r,
                            mouse: o,
                            sound: c,
                            trace: l = 3,
                            speed: h = 2,
                            explosion: d = 5,
                            gravity: p = 1.5,
                            opacity: m = .5,
                            particles: u = 50,
                            friction: v = .95,
                            rocketsPoint: f = 50,
                            acceleration: y = 1.05
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this._tick = 0, this._version = "1.3.5", this._running = !1, this._randomRocketsPoint = !1, this._experimentals = !1, this._m = !1, this._container = e, this._canvas = document.createElement("canvas"), this._ctx = this._canvas.getContext("2d"), this._container.appendChild(this._canvas), this._sound = new n.Sound(c), this.setSize(), this.setBoundaries(Object.assign({
                            visible: !1,
                            x: 50,
                            y: 50
                        }, i)), this.autoresize = t, this.trace = l, this.speed = h, this.explosion = d, this.gravity = p, this.opacity = m, this.particles = u, this.friction = v, this.rocketsPoint = f, this.acceleration = y, this.hue = Object.assign({
                            min: 0,
                            max: 360
                        }, r), this.mouse = Object.assign({
                            click: !1,
                            move: !1,
                            max: 1
                        }, o), this.delay = Object.assign({
                            min: 15,
                            max: 30
                        }, s), this.brightness = Object.assign({
                            min: 50,
                            max: 80,
                            decay: {
                                min: .015,
                                max: .03
                            }
                        }, a), this.autoresize && window.addEventListener("resize", () => this.windowResize()), this._canvas.addEventListener("mousedown", e => this.mouseDown(e)), this._canvas.addEventListener("mouseup", e => this.mouseUp(e)), this._canvas.addEventListener("mousemove", e => this.mouseMove(e))
                    }
                    get isRunning() {
                        return this._running
                    }
                    get version() {
                        return this._version
                    }
                    start() {
                        this._running || (this._running = !0, this.clear(), this.render())
                    }
                    stop() {
                        this._running && (this._running = !1, this.clear())
                    }
                    unmount() {
                        window.removeEventListener("resize", this.windowResize), this._canvas.addEventListener("mousedown", this.mouseDown), this._canvas.addEventListener("mouseup", this.mouseUp), this._canvas.addEventListener("mousemove", this.mouseMove)
                    }
                    pause() {
                        this._running = !this._running
                    }
                    clear() {
                        this._ctx && (this._traces = [], this._explosions = [], this._ctx.clearRect(0, 0, this._width, this._height))
                    }
                    setOptions(e) {
                        for (var [t, i] of Object.entries(e)) {
                            var a = Object.prototype.hasOwnProperty.call(this, t);
                            if ("function" == typeof this[t]) throw new Error("You cannot change the methods of the class!");
                            a && ("object" == typeof this[t] ? Object.assign(this[t], i) : this[t] = i), "sound" === t && Object.assign(this._sound.options, i)
                        }
                    }
                    setSize() {
                        var {
                            width: e = this._container.clientWidth,
                            height: t = this._container.clientHeight
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this._width = e, this._height = t, this._canvas.width = e, this._canvas.height = t, this.setBoundaries({
                            width: e,
                            height: t
                        })
                    }
                    setBoundaries(e) {
                        this.boundaries = Object.assign(Object.assign({}, this.boundaries), e)
                    }
                    useMouse(e, t) {
                        (this.mouse.click || this.mouse.move) && (this._mx = e.pageX - this._canvas.offsetLeft, this._my = e.pageY - this._canvas.offsetTop, this._m = t)
                    }
                    windowResize() {
                        this.setSize()
                    }
                    mouseDown(e) {
                        this.useMouse(e, this.mouse.click)
                    }
                    mouseUp(e) {
                        this.useMouse(e, !1)
                    }
                    mouseMove(e) {
                        this.useMouse(e, this._m)
                    }
                    render() {
                        this._ctx && this._running && (requestAnimationFrame(() => this.render()), this._ctx.globalCompositeOperation = "destination-out", this._ctx.fillStyle = "rgba(0, 0, 0, ".concat(this.opacity, ")"), this._ctx.fillRect(0, 0, this._width, this._height), this._ctx.globalCompositeOperation = "lighter", this.drawBoundaries(), this.initTrace(), this.drawTrace(), this.drawExplosion(), this._tick++)
                    }
                    drawBoundaries() {
                        this.boundaries.visible && (this._ctx.beginPath(), this._ctx.strokeStyle = "red", this._ctx.rect(this.boundaries.x, this.boundaries.y, this.boundaries.width - 2 * this.boundaries.x, .5 * this.boundaries.height), this._ctx.stroke())
                    }
                    initTrace() {
                        this._ds = (0, r.randomInt)(this.delay.min, this.delay.max), (2 * this._ds < this._tick || this._m && this.mouse.max > this._traces.length) && (this._traces.push(new t.Trace({
                            x: this._width * (this._randomRocketsPoint ? (0, r.randomInt)(0, 100) : this.rocketsPoint) / 100,
                            y: this._height,
                            dx: this._mx && this.mouse.move || this._m ? this._mx : (0, r.randomInt)(this.boundaries.x, this.boundaries.width - 2 * this.boundaries.x),
                            dy: this._my && this.mouse.move || this._m ? this._my : (0, r.randomInt)(this.boundaries.y, .5 * this.boundaries.height),
                            ctx: this._ctx,
                            hue: (0, r.randomInt)(this.hue.min, this.hue.max),
                            speed: this.speed,
                            acceleration: this.acceleration,
                            traceLength: this.trace
                        })), this._tick = 0)
                    }
                    drawTrace() {
                        for (var e = this._traces.length; e--;) this._traces[e].draw(), this._traces[e].update((t, i, a) => {
                            this.initExplosion(t, i, a), this._sound.play(), this._traces.splice(e, 1)
                        })
                    }
                    initExplosion(e, t, i) {
                        for (var a = this.particles; a--;) this._explosions.push(new s.Explosion({
                            x: e,
                            y: t,
                            ctx: this._ctx,
                            hue: i,
                            friction: this.friction,
                            gravity: this.gravity,
                            explosionLength: this.explosion,
                            brightness: this.brightness,
                            exp: this._experimentals
                        }))
                    }
                    drawExplosion() {
                        for (var e = this._explosions.length; e--;) this._explosions[e].draw(), this._explosions[e].update(() => {
                            this._explosions.splice(e, 1)
                        })
                    }
                }
            })(), a
        })()
    }), window.NewYearEvent = function(e) {
        this.pointerEventsSupported = function() {
            var e, t = document.createElement("x"),
                i = document.documentElement,
                a = window.getComputedStyle;
            return "pointerEvents" in t.style && (t.style.pointerEvents = "auto", t.style.pointerEvents = "x", i.appendChild(t), e = a && "auto" === a(t, "").pointerEvents, i.removeChild(t), !!e)
        }, this.options = e, this.getEvent = function(e) {
            return this.options && this.options.hasOwnProperty(e) && this.options[e].init ? this.options[e].hasOwnProperty("options") ? this.options[e].options : {} : null
        }, this.garland = function(e) {
            this.type = e.type, this.style = e.style;
            var t, i = document.body.offsetWidth / 42,
                a = document.createElement("div");
            a.classList.add("christmas-garland");
            for (var n = 0; n < i; n++) {
                var s = document.createElement("div");
                s.classList.add("christmas-garland__item");
                var r = document.createElement("div");
                r.classList.add("shape", this.type), s.appendChild(r), a.appendChild(s)
            }
            var o = document.querySelector(".component-navbar"),
                c = document.querySelector(".navbar");
            if (o ? t = o : c && (t = c), t) {
                var l;
                switch (this.style) {
                    case "style1":
                        l = {
                            flash1: {
                                main: "#08D9F7",
                                half: "rgba(8, 217, 247, 0.4)"
                            },
                            flash2: {
                                main: "rgb(254, 58, 142)",
                                half: "rgba(254, 58, 142, 0.2)"
                            },
                            flash3: {
                                main: "rgb(6, 233, 156)",
                                half: "rgba(6, 233, 156, 0.2)"
                            }
                        };
                        break;
                    case "style2":
                        l = {
                            flash1: {
                                main: "rgb(255, 219, 0)",
                                half: "rgba(255, 219, 0, 0.4)"
                            },
                            flash2: {
                                main: "rgb(247, 95, 9)",
                                half: "rgba(247, 95, 9, 0.2)"
                            },
                            flash3: {
                                main: "rgb(6, 233, 211)",
                                half: "rgba(6, 233, 211, 0.2)"
                            }
                        };
                        break;
                    case "style3":
                        l = {
                            flash1: {
                                main: "rgb(255, 54, 97)",
                                half: "rgba(255, 54, 97, 0.4)"
                            },
                            flash2: {
                                main: "rgb(102, 224, 64)",
                                half: "rgba(102, 224, 64, 0.2)"
                            },
                            flash3: {
                                main: "rgb(188, 95, 255)",
                                half: "rgba(188, 95, 255, 0.2)"
                            }
                        };
                        break;
                    default:
                        l = {
                            flash1: {
                                main: "#00f7a5",
                                half: "rgba(0, 247, 165, 0.4)"
                            },
                            flash2: {
                                main: "aqua",
                                half: "rgba(0, 255, 255, 0.2)"
                            },
                            flash3: {
                                main: "#f70094",
                                half: "rgba(247, 0, 148, 0.2)"
                            }
                        }
                }
                var h = "@-webkit-keyframes flash-1 {\n        0%, 100% {\n          background: \n" + l.flash1.main + ";          box-shadow: 0px 5px 24px 3px \n" + l.flash1.main + ";      }\n        50% {\n          background: \n" + l.flash1.half + ";          box-shadow: 0px 5px 24px 3px \n" + l.flash1.half + ";      }\n      }\n\n    @keyframes flash-1 {\n        0%, 100% {\n          background: \n" + l.flash1.main + ";          box-shadow: 0px 5px 24px 3px \n" + l.flash1.main + ";      }\n        50% {\n          background: \n" + l.flash1.half + ";          box-shadow: 0px 5px 24px 3px \n" + l.flash1.half + ";      }\n      }\n    @-webkit-keyframes flash-2 {\n        0%, 100% {\n          background: \n" + l.flash2.main + ";          box-shadow: 0px 5px 24px 3px \n" + l.flash2.main + ";      }\n        50% {\n          background: \n" + l.flash2.half + ";          box-shadow: 0px 5px 24px 3px \n" + l.flash2.half + ";      }\n      }\n    @keyframes flash-2 {\n        0%, 100% {\n          background: \n" + l.flash2.main + ";          box-shadow: 0px 5px 24px 3px \n" + l.flash2.main + ";      }\n        50% {\n          background: \n" + l.flash2.half + ";          box-shadow: 0px 5px 24px 3px \n" + l.flash2.half + ";      }\n      }\n    @-webkit-keyframes flash-3 {\n        0%, 100% {\n          background: \n" + l.flash3.main + ";          box-shadow: 0px 5px 24px 3px \n" + l.flash3.main + ";      }\n        50% {\n          background: \n" + l.flash3.half + ";          box-shadow: 0px 5px 24px 3px \n" + l.flash3.half + ";      }\n      }\n    @keyframes flash-3 {\n        0%, 100% {\n          background: \n" + l.flash3.main + ";          box-shadow: 0px 5px 24px 3px \n" + l.flash3.main + ";      }\n        50% {\n          background: \n" + l.flash3.half + ";          box-shadow: 0px 5px 24px 3px \n" + l.flash3.half + ";      }\n      }",
                    d = document.head || document.getElementsByTagName("head")[0],
                    p = document.createElement("style");
                e.container ? e.container.appendChild(p) : d.appendChild(p), p.type = "text/css", p.styleSheet ? p.styleSheet.cssText = h : p.appendChild(document.createTextNode(h)), e.container ? e.container.appendChild(a) : t.appendChild(a)
            }
        }, this.fireworks = function(e) {
            var t = document.createElement("div");
            t.classList.add("particle-snow"), e.container ? e.container.appendChild(t) : document.getElementsByTagName("body")[0].appendChild(t), new Fireworks(t, e).start()
        }, this.snow = function(e) {
            var t = document.createElement("div");
            t.classList.add("particle-snow"), t.setAttribute("id", "particle-snow"), e.container ? e.container.appendChild(t) : document.getElementsByTagName("body")[0].appendChild(t), window.pJSDom[0] && window.pJSDom[0].pJS && (window.pJSDom[0].pJS.fn.vendors.destroypJS(), window.pJSDom = []), particlesJS("particle-snow", e)
        }, this.destroySnow = function() {
            this.toys.destroy()
        }, this.start = function() {
            if (this.pointerEventsSupported()) {
                var e = screen.width <= 768,
                    t = this.getEvent("snow"),
                    i = this.getEvent("toys"),
                    a = this.getEvent("garland"),
                    n = this.getEvent("fireworks");
                t && this.snow(t), a && this.garland(a), e || (i && (this.toys = new Snowflakes(i)), n && this.fireworks(n))
            }
            return null
        }
    };
