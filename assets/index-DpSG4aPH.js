(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : s.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ms(e) {
  const t = Object.create(null);
  for (const n of e.split(',')) t[n] = 1;
  return (n) => n in t;
}
const re = {},
  on = [],
  gt = () => {},
  qa = () => !1,
  yr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Us = (e) => e.startsWith('onUpdate:'),
  ke = Object.assign,
  $s = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Ya = Object.prototype.hasOwnProperty,
  ne = (e, t) => Ya.call(e, t),
  V = Array.isArray,
  ln = (e) => Vn(e) === '[object Map]',
  vr = (e) => Vn(e) === '[object Set]',
  _o = (e) => Vn(e) === '[object Date]',
  B = (e) => typeof e == 'function',
  pe = (e) => typeof e == 'string',
  _t = (e) => typeof e == 'symbol',
  ae = (e) => e !== null && typeof e == 'object',
  Ui = (e) => (ae(e) || B(e)) && B(e.then) && B(e.catch),
  $i = Object.prototype.toString,
  Vn = (e) => $i.call(e),
  Ja = (e) => Vn(e).slice(8, -1),
  Hi = (e) => Vn(e) === '[object Object]',
  Hs = (e) =>
    pe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  wn = Ms(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Er = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Xa = /-(\w)/g,
  Qe = Er((e) => e.replace(Xa, (t, n) => (n ? n.toUpperCase() : ''))),
  Qa = /\B([A-Z])/g,
  Jt = Er((e) => e.replace(Qa, '-$1').toLowerCase()),
  Tr = Er((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Wr = Er((e) => (e ? `on${Tr(e)}` : '')),
  It = (e, t) => !Object.is(e, t),
  zn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Vi = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n,
    });
  },
  ir = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let bo;
const Sr = () =>
  bo ||
  (bo =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {});
function Vs(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = pe(r) ? tc(r) : Vs(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else if (pe(e) || ae(e)) return e;
}
const Za = /;(?![^(]*\))/g,
  za = /:([^]+)/,
  ec = /\/\*[^]*?\*\//g;
function tc(e) {
  const t = {};
  return (
    e
      .replace(ec, '')
      .split(Za)
      .forEach((n) => {
        if (n) {
          const r = n.split(za);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function Lr(e) {
  let t = '';
  if (pe(e)) t = e;
  else if (V(e))
    for (let n = 0; n < e.length; n++) {
      const r = Lr(e[n]);
      r && (t += r + ' ');
    }
  else if (ae(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
const nc =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  rc = Ms(nc);
function ji(e) {
  return !!e || e === '';
}
function sc(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++) n = wr(e[r], t[r]);
  return n;
}
function wr(e, t) {
  if (e === t) return !0;
  let n = _o(e),
    r = _o(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
  if (((n = _t(e)), (r = _t(t)), n || r)) return e === t;
  if (((n = V(e)), (r = V(t)), n || r)) return n && r ? sc(e, t) : !1;
  if (((n = ae(e)), (r = ae(t)), n || r)) {
    if (!n || !r) return !1;
    const s = Object.keys(e).length,
      o = Object.keys(t).length;
    if (s !== o) return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i),
        a = t.hasOwnProperty(i);
      if ((l && !a) || (!l && a) || !wr(e[i], t[i])) return !1;
    }
  }
  return String(e) === String(t);
}
function oc(e, t) {
  return e.findIndex((n) => wr(n, t));
}
const Wi = (e) => !!(e && e.__v_isRef === !0),
  ee = (e) =>
    pe(e)
      ? e
      : e == null
      ? ''
      : V(e) || (ae(e) && (e.toString === $i || !B(e.toString)))
      ? Wi(e)
        ? ee(e.value)
        : JSON.stringify(e, Bi, 2)
      : String(e),
  Bi = (e, t) =>
    Wi(t)
      ? Bi(e, t.value)
      : ln(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s], o) => ((n[Br(r, o) + ' =>'] = s), n),
            {}
          ),
        }
      : vr(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Br(n)) }
      : _t(t)
      ? Br(t)
      : ae(t) && !V(t) && !Hi(t)
      ? String(t)
      : t,
  Br = (e, t = '') => {
    var n;
    return _t(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ke;
class Gi {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Ke),
      !t && Ke && (this.index = (Ke.scopes || (Ke.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ke;
      try {
        return (Ke = this), t();
      } finally {
        Ke = n;
      }
    }
  }
  on() {
    Ke = this;
  }
  off() {
    Ke = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function Ki(e) {
  return new Gi(e);
}
function ic() {
  return Ke;
}
let oe;
const Gr = new WeakSet();
class qi {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Ke && Ke.active && Ke.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Gr.has(this) && (Gr.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Ji(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), yo(this), Xi(this);
    const t = oe,
      n = et;
    (oe = this), (et = !0);
    try {
      return this.fn();
    } finally {
      Qi(this), (oe = t), (et = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Bs(t);
      (this.deps = this.depsTail = void 0),
        yo(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? Gr.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    is(this) && this.run();
  }
  get dirty() {
    return is(this);
  }
}
let Yi = 0,
  Cn,
  On;
function Ji(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = On), (On = e);
    return;
  }
  (e.next = Cn), (Cn = e);
}
function js() {
  Yi++;
}
function Ws() {
  if (--Yi > 0) return;
  if (On) {
    let t = On;
    for (On = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Cn; ) {
    let t = Cn;
    for (Cn = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Xi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function Qi(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Bs(r), lc(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = s);
  }
  (e.deps = t), (e.depsTail = n);
}
function is(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Zi(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Zi(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === xn)
  )
    return;
  e.globalVersion = xn;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !is(e))) {
    e.flags &= -3;
    return;
  }
  const n = oe,
    r = et;
  (oe = e), (et = !0);
  try {
    Xi(e);
    const s = e.fn(e._value);
    (t.version === 0 || It(s, e._value)) && ((e._value = s), t.version++);
  } catch (s) {
    throw (t.version++, s);
  } finally {
    (oe = n), (et = r), Qi(e), (e.flags &= -3);
  }
}
function Bs(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (
    (r && ((r.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) Bs(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function lc(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let et = !0;
const zi = [];
function Ft() {
  zi.push(et), (et = !1);
}
function kt() {
  const e = zi.pop();
  et = e === void 0 ? !0 : e;
}
function yo(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = oe;
    oe = void 0;
    try {
      t();
    } finally {
      oe = n;
    }
  }
}
let xn = 0;
class ac {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class Gs {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!oe || !et || oe === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== oe)
      (n = this.activeLink = new ac(oe, this)),
        oe.deps
          ? ((n.prevDep = oe.depsTail),
            (oe.depsTail.nextDep = n),
            (oe.depsTail = n))
          : (oe.deps = oe.depsTail = n),
        el(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      (r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = oe.depsTail),
        (n.nextDep = void 0),
        (oe.depsTail.nextDep = n),
        (oe.depsTail = n),
        oe.deps === n && (oe.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, xn++, this.notify(t);
  }
  notify(t) {
    js();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ws();
    }
  }
}
function el(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) el(r);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const ls = new WeakMap(),
  Bt = Symbol(''),
  as = Symbol(''),
  Fn = Symbol('');
function we(e, t, n) {
  if (et && oe) {
    let r = ls.get(e);
    r || ls.set(e, (r = new Map()));
    let s = r.get(n);
    s || (r.set(n, (s = new Gs())), (s.map = r), (s.key = n)), s.track();
  }
}
function Tt(e, t, n, r, s, o) {
  const i = ls.get(e);
  if (!i) {
    xn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if ((js(), t === 'clear')) i.forEach(l);
  else {
    const a = V(e),
      f = a && Hs(n);
    if (a && n === 'length') {
      const d = Number(r);
      i.forEach((h, g) => {
        (g === 'length' || g === Fn || (!_t(g) && g >= d)) && l(h);
      });
    } else
      switch (
        ((n !== void 0 || i.has(void 0)) && l(i.get(n)), f && l(i.get(Fn)), t)
      ) {
        case 'add':
          a ? f && l(i.get('length')) : (l(i.get(Bt)), ln(e) && l(i.get(as)));
          break;
        case 'delete':
          a || (l(i.get(Bt)), ln(e) && l(i.get(as)));
          break;
        case 'set':
          ln(e) && l(i.get(Bt));
          break;
      }
  }
  Ws();
}
function Zt(e) {
  const t = te(e);
  return t === e ? t : (we(t, 'iterate', Fn), Xe(e) ? t : t.map(Ce));
}
function Cr(e) {
  return we((e = te(e)), 'iterate', Fn), e;
}
const cc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Kr(this, Symbol.iterator, Ce);
  },
  concat(...e) {
    return Zt(this).concat(...e.map((t) => (V(t) ? Zt(t) : t)));
  },
  entries() {
    return Kr(this, 'entries', (e) => ((e[1] = Ce(e[1])), e));
  },
  every(e, t) {
    return yt(this, 'every', e, t, void 0, arguments);
  },
  filter(e, t) {
    return yt(this, 'filter', e, t, (n) => n.map(Ce), arguments);
  },
  find(e, t) {
    return yt(this, 'find', e, t, Ce, arguments);
  },
  findIndex(e, t) {
    return yt(this, 'findIndex', e, t, void 0, arguments);
  },
  findLast(e, t) {
    return yt(this, 'findLast', e, t, Ce, arguments);
  },
  findLastIndex(e, t) {
    return yt(this, 'findLastIndex', e, t, void 0, arguments);
  },
  forEach(e, t) {
    return yt(this, 'forEach', e, t, void 0, arguments);
  },
  includes(...e) {
    return qr(this, 'includes', e);
  },
  indexOf(...e) {
    return qr(this, 'indexOf', e);
  },
  join(e) {
    return Zt(this).join(e);
  },
  lastIndexOf(...e) {
    return qr(this, 'lastIndexOf', e);
  },
  map(e, t) {
    return yt(this, 'map', e, t, void 0, arguments);
  },
  pop() {
    return vn(this, 'pop');
  },
  push(...e) {
    return vn(this, 'push', e);
  },
  reduce(e, ...t) {
    return vo(this, 'reduce', e, t);
  },
  reduceRight(e, ...t) {
    return vo(this, 'reduceRight', e, t);
  },
  shift() {
    return vn(this, 'shift');
  },
  some(e, t) {
    return yt(this, 'some', e, t, void 0, arguments);
  },
  splice(...e) {
    return vn(this, 'splice', e);
  },
  toReversed() {
    return Zt(this).toReversed();
  },
  toSorted(e) {
    return Zt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Zt(this).toSpliced(...e);
  },
  unshift(...e) {
    return vn(this, 'unshift', e);
  },
  values() {
    return Kr(this, 'values', Ce);
  },
};
function Kr(e, t, n) {
  const r = Cr(e),
    s = r[t]();
  return (
    r !== e &&
      !Xe(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const o = s._next();
        return o.value && (o.value = n(o.value)), o;
      })),
    s
  );
}
const uc = Array.prototype;
function yt(e, t, n, r, s, o) {
  const i = Cr(e),
    l = i !== e && !Xe(e),
    a = i[t];
  if (a !== uc[t]) {
    const h = a.apply(e, o);
    return l ? Ce(h) : h;
  }
  let f = n;
  i !== e &&
    (l
      ? (f = function (h, g) {
          return n.call(this, Ce(h), g, e);
        })
      : n.length > 2 &&
        (f = function (h, g) {
          return n.call(this, h, g, e);
        }));
  const d = a.call(i, f, r);
  return l && s ? s(d) : d;
}
function vo(e, t, n, r) {
  const s = Cr(e);
  let o = n;
  return (
    s !== e &&
      (Xe(e)
        ? n.length > 3 &&
          (o = function (i, l, a) {
            return n.call(this, i, l, a, e);
          })
        : (o = function (i, l, a) {
            return n.call(this, i, Ce(l), a, e);
          })),
    s[t](o, ...r)
  );
}
function qr(e, t, n) {
  const r = te(e);
  we(r, 'iterate', Fn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && Ys(n[0])
    ? ((n[0] = te(n[0])), r[t](...n))
    : s;
}
function vn(e, t, n = []) {
  Ft(), js();
  const r = te(e)[t].apply(e, n);
  return Ws(), kt(), r;
}
const fc = Ms('__proto__,__v_isRef,__isVue'),
  tl = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(_t)
  );
function dc(e) {
  _t(e) || (e = String(e));
  const t = te(this);
  return we(t, 'has', e), t.hasOwnProperty(e);
}
class nl {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, r) {
    if (n === '__v_skip') return t.__v_skip;
    const s = this._isReadonly,
      o = this._isShallow;
    if (n === '__v_isReactive') return !s;
    if (n === '__v_isReadonly') return s;
    if (n === '__v_isShallow') return o;
    if (n === '__v_raw')
      return r === (s ? (o ? Tc : il) : o ? ol : sl).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = V(t);
    if (!s) {
      let a;
      if (i && (a = cc[n])) return a;
      if (n === 'hasOwnProperty') return dc;
    }
    const l = Reflect.get(t, n, Te(t) ? t : r);
    return (_t(n) ? tl.has(n) : fc(n)) || (s || we(t, 'get', n), o)
      ? l
      : Te(l)
      ? i && Hs(n)
        ? l
        : l.value
      : ae(l)
      ? s
        ? ll(l)
        : hn(l)
      : l;
  }
}
class rl extends nl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const a = Kt(o);
      if (
        (!Xe(r) && !Kt(r) && ((o = te(o)), (r = te(r))),
        !V(t) && Te(o) && !Te(r))
      )
        return a ? !1 : ((o.value = r), !0);
    }
    const i = V(t) && Hs(n) ? Number(n) < t.length : ne(t, n),
      l = Reflect.set(t, n, r, Te(t) ? t : s);
    return (
      t === te(s) && (i ? It(r, o) && Tt(t, 'set', n, r) : Tt(t, 'add', n, r)),
      l
    );
  }
  deleteProperty(t, n) {
    const r = ne(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Tt(t, 'delete', n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!_t(n) || !tl.has(n)) && we(t, 'has', n), r;
  }
  ownKeys(t) {
    return we(t, 'iterate', V(t) ? 'length' : Bt), Reflect.ownKeys(t);
  }
}
class hc extends nl {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const mc = new rl(),
  pc = new hc(),
  gc = new rl(!0);
const cs = (e) => e,
  Jn = (e) => Reflect.getPrototypeOf(e);
function _c(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = te(s),
      i = ln(o),
      l = e === 'entries' || (e === Symbol.iterator && i),
      a = e === 'keys' && i,
      f = s[e](...r),
      d = n ? cs : t ? us : Ce;
    return (
      !t && we(o, 'iterate', a ? as : Bt),
      {
        next() {
          const { value: h, done: g } = f.next();
          return g
            ? { value: h, done: g }
            : { value: l ? [d(h[0]), d(h[1])] : d(h), done: g };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Xn(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function bc(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw,
        i = te(o),
        l = te(s);
      e || (It(s, l) && we(i, 'get', s), we(i, 'get', l));
      const { has: a } = Jn(i),
        f = t ? cs : e ? us : Ce;
      if (a.call(i, s)) return f(o.get(s));
      if (a.call(i, l)) return f(o.get(l));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && we(te(s), 'iterate', Bt), Reflect.get(s, 'size', s);
    },
    has(s) {
      const o = this.__v_raw,
        i = te(o),
        l = te(s);
      return (
        e || (It(s, l) && we(i, 'has', s), we(i, 'has', l)),
        s === l ? o.has(s) : o.has(s) || o.has(l)
      );
    },
    forEach(s, o) {
      const i = this,
        l = i.__v_raw,
        a = te(l),
        f = t ? cs : e ? us : Ce;
      return (
        !e && we(a, 'iterate', Bt),
        l.forEach((d, h) => s.call(o, f(d), f(h), i))
      );
    },
  };
  return (
    ke(
      n,
      e
        ? {
            add: Xn('add'),
            set: Xn('set'),
            delete: Xn('delete'),
            clear: Xn('clear'),
          }
        : {
            add(s) {
              !t && !Xe(s) && !Kt(s) && (s = te(s));
              const o = te(this);
              return (
                Jn(o).has.call(o, s) || (o.add(s), Tt(o, 'add', s, s)), this
              );
            },
            set(s, o) {
              !t && !Xe(o) && !Kt(o) && (o = te(o));
              const i = te(this),
                { has: l, get: a } = Jn(i);
              let f = l.call(i, s);
              f || ((s = te(s)), (f = l.call(i, s)));
              const d = a.call(i, s);
              return (
                i.set(s, o),
                f ? It(o, d) && Tt(i, 'set', s, o) : Tt(i, 'add', s, o),
                this
              );
            },
            delete(s) {
              const o = te(this),
                { has: i, get: l } = Jn(o);
              let a = i.call(o, s);
              a || ((s = te(s)), (a = i.call(o, s))), l && l.call(o, s);
              const f = o.delete(s);
              return a && Tt(o, 'delete', s, void 0), f;
            },
            clear() {
              const s = te(this),
                o = s.size !== 0,
                i = s.clear();
              return o && Tt(s, 'clear', void 0, void 0), i;
            },
          }
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((s) => {
      n[s] = _c(s, e, t);
    }),
    n
  );
}
function Ks(e, t) {
  const n = bc(e, t);
  return (r, s, o) =>
    s === '__v_isReactive'
      ? !e
      : s === '__v_isReadonly'
      ? e
      : s === '__v_raw'
      ? r
      : Reflect.get(ne(n, s) && s in r ? n : r, s, o);
}
const yc = { get: Ks(!1, !1) },
  vc = { get: Ks(!1, !0) },
  Ec = { get: Ks(!0, !1) };
const sl = new WeakMap(),
  ol = new WeakMap(),
  il = new WeakMap(),
  Tc = new WeakMap();
function Sc(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function Lc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Sc(Ja(e));
}
function hn(e) {
  return Kt(e) ? e : qs(e, !1, mc, yc, sl);
}
function wc(e) {
  return qs(e, !1, gc, vc, ol);
}
function ll(e) {
  return qs(e, !0, pc, Ec, il);
}
function qs(e, t, n, r, s) {
  if (!ae(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const i = Lc(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? r : n);
  return s.set(e, l), l;
}
function an(e) {
  return Kt(e) ? an(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Kt(e) {
  return !!(e && e.__v_isReadonly);
}
function Xe(e) {
  return !!(e && e.__v_isShallow);
}
function Ys(e) {
  return e ? !!e.__v_raw : !1;
}
function te(e) {
  const t = e && e.__v_raw;
  return t ? te(t) : e;
}
function Cc(e) {
  return (
    !ne(e, '__v_skip') && Object.isExtensible(e) && Vi(e, '__v_skip', !0), e
  );
}
const Ce = (e) => (ae(e) ? hn(e) : e),
  us = (e) => (ae(e) ? ll(e) : e);
function Te(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function he(e) {
  return al(e, !1);
}
function Oc(e) {
  return al(e, !0);
}
function al(e, t) {
  return Te(e) ? e : new Nc(e, t);
}
class Nc {
  constructor(t, n) {
    (this.dep = new Gs()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : te(t)),
      (this._value = n ? t : Ce(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || Xe(t) || Kt(t);
    (t = r ? t : te(t)),
      It(t, n) &&
        ((this._rawValue = t),
        (this._value = r ? t : Ce(t)),
        this.dep.trigger());
  }
}
function Ac(e) {
  return Te(e) ? e.value : e;
}
const Rc = {
  get: (e, t, n) => (t === '__v_raw' ? e : Ac(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const s = e[t];
    return Te(s) && !Te(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function cl(e) {
  return an(e) ? e : new Proxy(e, Rc);
}
class Ic {
  constructor(t, n, r) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Gs(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = xn - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && oe !== this))
      return Ji(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Zi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Pc(e, t, n = !1) {
  let r, s;
  return B(e) ? (r = e) : ((r = e.get), (s = e.set)), new Ic(r, s, n);
}
const Qn = {},
  lr = new WeakMap();
let Vt;
function xc(e, t = !1, n = Vt) {
  if (n) {
    let r = lr.get(n);
    r || lr.set(n, (r = [])), r.push(e);
  }
}
function Fc(e, t, n = re) {
  const {
      immediate: r,
      deep: s,
      once: o,
      scheduler: i,
      augmentJob: l,
      call: a,
    } = n,
    f = (b) => (s ? b : Xe(b) || s === !1 || s === 0 ? St(b, 1) : St(b));
  let d,
    h,
    g,
    v,
    L = !1,
    N = !1;
  if (
    (Te(e)
      ? ((h = () => e.value), (L = Xe(e)))
      : an(e)
      ? ((h = () => f(e)), (L = !0))
      : V(e)
      ? ((N = !0),
        (L = e.some((b) => an(b) || Xe(b))),
        (h = () =>
          e.map((b) => {
            if (Te(b)) return b.value;
            if (an(b)) return f(b);
            if (B(b)) return a ? a(b, 2) : b();
          })))
      : B(e)
      ? t
        ? (h = a ? () => a(e, 2) : e)
        : (h = () => {
            if (g) {
              Ft();
              try {
                g();
              } finally {
                kt();
              }
            }
            const b = Vt;
            Vt = d;
            try {
              return a ? a(e, 3, [v]) : e(v);
            } finally {
              Vt = b;
            }
          })
      : (h = gt),
    t && s)
  ) {
    const b = h,
      T = s === !0 ? 1 / 0 : s;
    h = () => St(b(), T);
  }
  const R = ic(),
    _ = () => {
      d.stop(), R && R.active && $s(R.effects, d);
    };
  if (o && t) {
    const b = t;
    t = (...T) => {
      b(...T), _();
    };
  }
  let C = N ? new Array(e.length).fill(Qn) : Qn;
  const w = (b) => {
    if (!(!(d.flags & 1) || (!d.dirty && !b)))
      if (t) {
        const T = d.run();
        if (s || L || (N ? T.some((k, D) => It(k, C[D])) : It(T, C))) {
          g && g();
          const k = Vt;
          Vt = d;
          try {
            const D = [T, C === Qn ? void 0 : N && C[0] === Qn ? [] : C, v];
            a ? a(t, 3, D) : t(...D), (C = T);
          } finally {
            Vt = k;
          }
        }
      } else d.run();
  };
  return (
    l && l(w),
    (d = new qi(h)),
    (d.scheduler = i ? () => i(w, !1) : w),
    (v = (b) => xc(b, !1, d)),
    (g = d.onStop =
      () => {
        const b = lr.get(d);
        if (b) {
          if (a) a(b, 4);
          else for (const T of b) T();
          lr.delete(d);
        }
      }),
    t ? (r ? w(!0) : (C = d.run())) : i ? i(w.bind(null, !0), !0) : d.run(),
    (_.pause = d.pause.bind(d)),
    (_.resume = d.resume.bind(d)),
    (_.stop = _),
    _
  );
}
function St(e, t = 1 / 0, n) {
  if (t <= 0 || !ae(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, Te(e))) St(e.value, t, n);
  else if (V(e)) for (let r = 0; r < e.length; r++) St(e[r], t, n);
  else if (vr(e) || ln(e))
    e.forEach((r) => {
      St(r, t, n);
    });
  else if (Hi(e)) {
    for (const r in e) St(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && St(e[r], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function jn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Or(s, t, n);
  }
}
function bt(e, t, n, r) {
  if (B(e)) {
    const s = jn(e, t, n, r);
    return (
      s &&
        Ui(s) &&
        s.catch((o) => {
          Or(o, t, n);
        }),
      s
    );
  }
  if (V(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(bt(e[o], t, n, r));
    return s;
  }
}
function Or(e, t, n, r = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: i } =
      (t && t.appContext.config) || re;
  if (t) {
    let l = t.parent;
    const a = t.proxy,
      f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let h = 0; h < d.length; h++) if (d[h](e, a, f) === !1) return;
      }
      l = l.parent;
    }
    if (o) {
      Ft(), jn(o, null, 10, [e, a, f]), kt();
      return;
    }
  }
  kc(e, n, s, r, i);
}
function kc(e, t, n, r = !0, s = !1) {
  if (s) throw e;
  console.error(e);
}
const Fe = [];
let ht = -1;
const cn = [];
let At = null,
  tn = 0;
const ul = Promise.resolve();
let ar = null;
function fl(e) {
  const t = ar || ul;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Dc(e) {
  let t = ht + 1,
    n = Fe.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = Fe[r],
      o = kn(s);
    o < e || (o === e && s.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function Js(e) {
  if (!(e.flags & 1)) {
    const t = kn(e),
      n = Fe[Fe.length - 1];
    !n || (!(e.flags & 2) && t >= kn(n)) ? Fe.push(e) : Fe.splice(Dc(t), 0, e),
      (e.flags |= 1),
      dl();
  }
}
function dl() {
  ar || (ar = ul.then(ml));
}
function Mc(e) {
  V(e)
    ? cn.push(...e)
    : At && e.id === -1
    ? At.splice(tn + 1, 0, e)
    : e.flags & 1 || (cn.push(e), (e.flags |= 1)),
    dl();
}
function Eo(e, t, n = ht + 1) {
  for (; n < Fe.length; n++) {
    const r = Fe[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      Fe.splice(n, 1),
        n--,
        r.flags & 4 && (r.flags &= -2),
        r(),
        r.flags & 4 || (r.flags &= -2);
    }
  }
}
function hl(e) {
  if (cn.length) {
    const t = [...new Set(cn)].sort((n, r) => kn(n) - kn(r));
    if (((cn.length = 0), At)) {
      At.push(...t);
      return;
    }
    for (At = t, tn = 0; tn < At.length; tn++) {
      const n = At[tn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (At = null), (tn = 0);
  }
}
const kn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function ml(e) {
  try {
    for (ht = 0; ht < Fe.length; ht++) {
      const t = Fe[ht];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        jn(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ht < Fe.length; ht++) {
      const t = Fe[ht];
      t && (t.flags &= -2);
    }
    (ht = -1),
      (Fe.length = 0),
      hl(),
      (ar = null),
      (Fe.length || cn.length) && ml();
  }
}
let He = null,
  pl = null;
function cr(e) {
  const t = He;
  return (He = e), (pl = (e && e.type.__scopeId) || null), t;
}
function Uc(e, t = He, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && Io(-1);
    const o = cr(t);
    let i;
    try {
      i = e(...s);
    } finally {
      cr(o), r._d && Io(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function nn(e, t) {
  if (He === null) return e;
  const n = Rr(He),
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, l, a = re] = t[s];
    o &&
      (B(o) && (o = { mounted: o, updated: o }),
      o.deep && St(i),
      r.push({
        dir: o,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: l,
        modifiers: a,
      }));
  }
  return e;
}
function $t(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    o && (l.oldValue = o[i].value);
    let a = l.dir[r];
    a && (Ft(), bt(a, n, 8, [e.el, l, e, t]), kt());
  }
}
const $c = Symbol('_vte'),
  Hc = (e) => e.__isTeleport;
function Xs(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Xs(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function gl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0];
}
function ur(e, t, n, r, s = !1) {
  if (V(e)) {
    e.forEach((L, N) => ur(L, t && (V(t) ? t[N] : t), n, r, s));
    return;
  }
  if (Nn(r) && !s) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      ur(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? Rr(r.component) : r.el,
    i = s ? null : o,
    { i: l, r: a } = e,
    f = t && t.r,
    d = l.refs === re ? (l.refs = {}) : l.refs,
    h = l.setupState,
    g = te(h),
    v = h === re ? () => !1 : (L) => ne(g, L);
  if (
    (f != null &&
      f !== a &&
      (pe(f)
        ? ((d[f] = null), v(f) && (h[f] = null))
        : Te(f) && (f.value = null)),
    B(a))
  )
    jn(a, l, 12, [i, d]);
  else {
    const L = pe(a),
      N = Te(a);
    if (L || N) {
      const R = () => {
        if (e.f) {
          const _ = L ? (v(a) ? h[a] : d[a]) : a.value;
          s
            ? V(_) && $s(_, o)
            : V(_)
            ? _.includes(o) || _.push(o)
            : L
            ? ((d[a] = [o]), v(a) && (h[a] = d[a]))
            : ((a.value = [o]), e.k && (d[e.k] = a.value));
        } else
          L
            ? ((d[a] = i), v(a) && (h[a] = i))
            : N && ((a.value = i), e.k && (d[e.k] = i));
      };
      i ? ((R.id = -1), Ge(R, n)) : R();
    }
  }
}
Sr().requestIdleCallback;
Sr().cancelIdleCallback;
const Nn = (e) => !!e.type.__asyncLoader,
  _l = (e) => e.type.__isKeepAlive;
function Vc(e, t) {
  bl(e, 'a', t);
}
function jc(e, t) {
  bl(e, 'da', t);
}
function bl(e, t, n = ve) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((Nr(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      _l(s.parent.vnode) && Wc(r, t, n, s), (s = s.parent);
  }
}
function Wc(e, t, n, r) {
  const s = Nr(t, e, r, !0);
  Zs(() => {
    $s(r[t], s);
  }, n);
}
function Nr(e, t, n = ve, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          Ft();
          const l = Bn(n),
            a = bt(t, n, e, i);
          return l(), kt(), a;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const Lt =
    (e) =>
    (t, n = ve) => {
      (!Un || e === 'sp') && Nr(e, (...r) => t(...r), n);
    },
  yl = Lt('bm'),
  Qs = Lt('m'),
  Bc = Lt('bu'),
  Gc = Lt('u'),
  Kc = Lt('bum'),
  Zs = Lt('um'),
  qc = Lt('sp'),
  Yc = Lt('rtg'),
  Jc = Lt('rtc');
function Xc(e, t = ve) {
  Nr('ec', e, t);
}
const Qc = 'components';
function Yr(e, t) {
  return zc(Qc, e, !0, t) || e;
}
const Zc = Symbol.for('v-ndc');
function zc(e, t, n = !0, r = !1) {
  const s = He || ve;
  if (s) {
    const o = s.type;
    {
      const l = ju(o, !1);
      if (l && (l === t || l === Qe(t) || l === Tr(Qe(t)))) return o;
    }
    const i = To(s[e] || o[e], t) || To(s.appContext[e], t);
    return !i && r ? o : i;
  }
}
function To(e, t) {
  return e && (e[t] || e[Qe(t)] || e[Tr(Qe(t))]);
}
function er(e, t, n, r) {
  let s;
  const o = n,
    i = V(e);
  if (i || pe(e)) {
    const l = i && an(e);
    let a = !1;
    l && ((a = !Xe(e)), (e = Cr(e))), (s = new Array(e.length));
    for (let f = 0, d = e.length; f < d; f++)
      s[f] = t(a ? Ce(e[f]) : e[f], f, void 0, o);
  } else if (typeof e == 'number') {
    s = new Array(e);
    for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, o);
  } else if (ae(e))
    if (e[Symbol.iterator]) s = Array.from(e, (l, a) => t(l, a, void 0, o));
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let a = 0, f = l.length; a < f; a++) {
        const d = l[a];
        s[a] = t(e[d], d, a, o);
      }
    }
  else s = [];
  return s;
}
const fs = (e) => (e ? (Hl(e) ? Rr(e) : fs(e.parent)) : null),
  An = ke(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => fs(e.parent),
    $root: (e) => fs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => El(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Js(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = fl.bind(e.proxy)),
    $watch: (e) => Eu.bind(e),
  }),
  Jr = (e, t) => e !== re && !e.__isScriptSetup && ne(e, t),
  eu = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0;
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: i,
        type: l,
        appContext: a,
      } = e;
      let f;
      if (t[0] !== '$') {
        const v = i[t];
        if (v !== void 0)
          switch (v) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (Jr(r, t)) return (i[t] = 1), r[t];
          if (s !== re && ne(s, t)) return (i[t] = 2), s[t];
          if ((f = e.propsOptions[0]) && ne(f, t)) return (i[t] = 3), o[t];
          if (n !== re && ne(n, t)) return (i[t] = 4), n[t];
          ds && (i[t] = 0);
        }
      }
      const d = An[t];
      let h, g;
      if (d) return t === '$attrs' && we(e.attrs, 'get', ''), d(e);
      if ((h = l.__cssModules) && (h = h[t])) return h;
      if (n !== re && ne(n, t)) return (i[t] = 4), n[t];
      if (((g = a.config.globalProperties), ne(g, t))) return g[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return Jr(s, t)
        ? ((s[t] = n), !0)
        : r !== re && ne(r, t)
        ? ((r[t] = n), !0)
        : ne(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: o,
        },
      },
      i
    ) {
      let l;
      return (
        !!n[i] ||
        (e !== re && ne(e, i)) ||
        Jr(t, i) ||
        ((l = o[0]) && ne(l, i)) ||
        ne(r, i) ||
        ne(An, i) ||
        ne(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : ne(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function So(e) {
  return V(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let ds = !0;
function tu(e) {
  const t = El(e),
    n = e.proxy,
    r = e.ctx;
  (ds = !1), t.beforeCreate && Lo(t.beforeCreate, e, 'bc');
  const {
    data: s,
    computed: o,
    methods: i,
    watch: l,
    provide: a,
    inject: f,
    created: d,
    beforeMount: h,
    mounted: g,
    beforeUpdate: v,
    updated: L,
    activated: N,
    deactivated: R,
    beforeDestroy: _,
    beforeUnmount: C,
    destroyed: w,
    unmounted: b,
    render: T,
    renderTracked: k,
    renderTriggered: D,
    errorCaptured: J,
    serverPrefetch: X,
    expose: ce,
    inheritAttrs: fe,
    components: Ne,
    directives: ye,
    filters: rt,
  } = t;
  if ((f && nu(f, r, null), i))
    for (const q in i) {
      const Q = i[q];
      B(Q) && (r[q] = Q.bind(n));
    }
  if (s) {
    const q = s.call(n, n);
    ae(q) && (e.data = hn(q));
  }
  if (((ds = !0), o))
    for (const q in o) {
      const Q = o[q],
        De = B(Q) ? Q.bind(n, n) : B(Q.get) ? Q.get.bind(n, n) : gt,
        st = !B(Q) && B(Q.set) ? Q.set.bind(n) : gt,
        We = Je({ get: De, set: st });
      Object.defineProperty(r, q, {
        enumerable: !0,
        configurable: !0,
        get: () => We.value,
        set: (Se) => (We.value = Se),
      });
    }
  if (l) for (const q in l) vl(l[q], r, n, q);
  if (a) {
    const q = B(a) ? a.call(n) : a;
    Reflect.ownKeys(q).forEach((Q) => {
      au(Q, q[Q]);
    });
  }
  d && Lo(d, e, 'c');
  function se(q, Q) {
    V(Q) ? Q.forEach((De) => q(De.bind(n))) : Q && q(Q.bind(n));
  }
  if (
    (se(yl, h),
    se(Qs, g),
    se(Bc, v),
    se(Gc, L),
    se(Vc, N),
    se(jc, R),
    se(Xc, J),
    se(Jc, k),
    se(Yc, D),
    se(Kc, C),
    se(Zs, b),
    se(qc, X),
    V(ce))
  )
    if (ce.length) {
      const q = e.exposed || (e.exposed = {});
      ce.forEach((Q) => {
        Object.defineProperty(q, Q, {
          get: () => n[Q],
          set: (De) => (n[Q] = De),
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === gt && (e.render = T),
    fe != null && (e.inheritAttrs = fe),
    Ne && (e.components = Ne),
    ye && (e.directives = ye),
    X && gl(e);
}
function nu(e, t, n = gt) {
  V(e) && (e = hs(e));
  for (const r in e) {
    const s = e[r];
    let o;
    ae(s)
      ? 'default' in s
        ? (o = fn(s.from || r, s.default, !0))
        : (o = fn(s.from || r))
      : (o = fn(s)),
      Te(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[r] = o);
  }
}
function Lo(e, t, n) {
  bt(V(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function vl(e, t, n, r) {
  let s = r.includes('.') ? kl(n, r) : () => n[r];
  if (pe(e)) {
    const o = t[e];
    B(o) && Pt(s, o);
  } else if (B(e)) Pt(s, e.bind(n));
  else if (ae(e))
    if (V(e)) e.forEach((o) => vl(o, t, n, r));
    else {
      const o = B(e.handler) ? e.handler.bind(n) : t[e.handler];
      B(o) && Pt(s, o, e);
    }
}
function El(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = o.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !s.length && !n && !r
      ? (a = t)
      : ((a = {}), s.length && s.forEach((f) => fr(a, f, i, !0)), fr(a, t, i)),
    ae(t) && o.set(t, a),
    a
  );
}
function fr(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && fr(e, o, n, !0), s && s.forEach((i) => fr(e, i, n, !0));
  for (const i in t)
    if (!(r && i === 'expose')) {
      const l = ru[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const ru = {
  data: wo,
  props: Co,
  emits: Co,
  methods: Ln,
  computed: Ln,
  beforeCreate: Ie,
  created: Ie,
  beforeMount: Ie,
  mounted: Ie,
  beforeUpdate: Ie,
  updated: Ie,
  beforeDestroy: Ie,
  beforeUnmount: Ie,
  destroyed: Ie,
  unmounted: Ie,
  activated: Ie,
  deactivated: Ie,
  errorCaptured: Ie,
  serverPrefetch: Ie,
  components: Ln,
  directives: Ln,
  watch: ou,
  provide: wo,
  inject: su,
};
function wo(e, t) {
  return t
    ? e
      ? function () {
          return ke(
            B(e) ? e.call(this, this) : e,
            B(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function su(e, t) {
  return Ln(hs(e), hs(t));
}
function hs(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ie(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ln(e, t) {
  return e ? ke(Object.create(null), e, t) : t;
}
function Co(e, t) {
  return e
    ? V(e) && V(t)
      ? [...new Set([...e, ...t])]
      : ke(Object.create(null), So(e), So(t ?? {}))
    : t;
}
function ou(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ke(Object.create(null), e);
  for (const r in t) n[r] = Ie(e[r], t[r]);
  return n;
}
function Tl() {
  return {
    app: null,
    config: {
      isNativeTag: qa,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let iu = 0;
function lu(e, t) {
  return function (r, s = null) {
    B(r) || (r = ke({}, r)), s != null && !ae(s) && (s = null);
    const o = Tl(),
      i = new WeakSet(),
      l = [];
    let a = !1;
    const f = (o.app = {
      _uid: iu++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: Bu,
      get config() {
        return o.config;
      },
      set config(d) {},
      use(d, ...h) {
        return (
          i.has(d) ||
            (d && B(d.install)
              ? (i.add(d), d.install(f, ...h))
              : B(d) && (i.add(d), d(f, ...h))),
          f
        );
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), f;
      },
      component(d, h) {
        return h ? ((o.components[d] = h), f) : o.components[d];
      },
      directive(d, h) {
        return h ? ((o.directives[d] = h), f) : o.directives[d];
      },
      mount(d, h, g) {
        if (!a) {
          const v = f._ceVNode || Ee(r, s);
          return (
            (v.appContext = o),
            g === !0 ? (g = 'svg') : g === !1 && (g = void 0),
            e(v, d, g),
            (a = !0),
            (f._container = d),
            (d.__vue_app__ = f),
            Rr(v.component)
          );
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        a &&
          (bt(l, f._instance, 16),
          e(null, f._container),
          delete f._container.__vue_app__);
      },
      provide(d, h) {
        return (o.provides[d] = h), f;
      },
      runWithContext(d) {
        const h = un;
        un = f;
        try {
          return d();
        } finally {
          un = h;
        }
      },
    });
    return f;
  };
}
let un = null;
function au(e, t) {
  if (ve) {
    let n = ve.provides;
    const r = ve.parent && ve.parent.provides;
    r === n && (n = ve.provides = Object.create(r)), (n[e] = t);
  }
}
function fn(e, t, n = !1) {
  const r = ve || He;
  if (r || un) {
    const s = un
      ? un._context.provides
      : r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && B(t) ? t.call(r && r.proxy) : t;
  }
}
const Sl = {},
  Ll = () => Object.create(Sl),
  wl = (e) => Object.getPrototypeOf(e) === Sl;
function cu(e, t, n, r = !1) {
  const s = {},
    o = Ll();
  (e.propsDefaults = Object.create(null)), Cl(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : wc(s)) : e.type.props ? (e.props = s) : (e.props = o),
    (e.attrs = o);
}
function uu(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    l = te(s),
    [a] = e.propsOptions;
  let f = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        let g = d[h];
        if (Ar(e.emitsOptions, g)) continue;
        const v = t[g];
        if (a)
          if (ne(o, g)) v !== o[g] && ((o[g] = v), (f = !0));
          else {
            const L = Qe(g);
            s[L] = ms(a, l, L, v, e, !1);
          }
        else v !== o[g] && ((o[g] = v), (f = !0));
      }
    }
  } else {
    Cl(e, t, s, o) && (f = !0);
    let d;
    for (const h in l)
      (!t || (!ne(t, h) && ((d = Jt(h)) === h || !ne(t, d)))) &&
        (a
          ? n &&
            (n[h] !== void 0 || n[d] !== void 0) &&
            (s[h] = ms(a, l, h, void 0, e, !0))
          : delete s[h]);
    if (o !== l)
      for (const h in o) (!t || !ne(t, h)) && (delete o[h], (f = !0));
  }
  f && Tt(e.attrs, 'set', '');
}
function Cl(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let a in t) {
      if (wn(a)) continue;
      const f = t[a];
      let d;
      s && ne(s, (d = Qe(a)))
        ? !o || !o.includes(d)
          ? (n[d] = f)
          : ((l || (l = {}))[d] = f)
        : Ar(e.emitsOptions, a) ||
          ((!(a in r) || f !== r[a]) && ((r[a] = f), (i = !0)));
    }
  if (o) {
    const a = te(n),
      f = l || re;
    for (let d = 0; d < o.length; d++) {
      const h = o[d];
      n[h] = ms(s, a, h, f[h], e, !ne(f, h));
    }
  }
  return i;
}
function ms(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const l = ne(i, 'default');
    if (l && r === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && B(a)) {
        const { propsDefaults: f } = s;
        if (n in f) r = f[n];
        else {
          const d = Bn(s);
          (r = f[n] = a.call(null, t)), d();
        }
      } else r = a;
      s.ce && s.ce._setProp(n, r);
    }
    i[0] &&
      (o && !l ? (r = !1) : i[1] && (r === '' || r === Jt(n)) && (r = !0));
  }
  return r;
}
const fu = new WeakMap();
function Ol(e, t, n = !1) {
  const r = n ? fu : t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    l = [];
  let a = !1;
  if (!B(e)) {
    const d = (h) => {
      a = !0;
      const [g, v] = Ol(h, t, !0);
      ke(i, g), v && l.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d);
  }
  if (!o && !a) return ae(e) && r.set(e, on), on;
  if (V(o))
    for (let d = 0; d < o.length; d++) {
      const h = Qe(o[d]);
      Oo(h) && (i[h] = re);
    }
  else if (o)
    for (const d in o) {
      const h = Qe(d);
      if (Oo(h)) {
        const g = o[d],
          v = (i[h] = V(g) || B(g) ? { type: g } : ke({}, g)),
          L = v.type;
        let N = !1,
          R = !0;
        if (V(L))
          for (let _ = 0; _ < L.length; ++_) {
            const C = L[_],
              w = B(C) && C.name;
            if (w === 'Boolean') {
              N = !0;
              break;
            } else w === 'String' && (R = !1);
          }
        else N = B(L) && L.name === 'Boolean';
        (v[0] = N), (v[1] = R), (N || ne(v, 'default')) && l.push(h);
      }
    }
  const f = [i, l];
  return ae(e) && r.set(e, f), f;
}
function Oo(e) {
  return e[0] !== '$' && !wn(e);
}
const Nl = (e) => e[0] === '_' || e === '$stable',
  zs = (e) => (V(e) ? e.map(mt) : [mt(e)]),
  du = (e, t, n) => {
    if (t._n) return t;
    const r = Uc((...s) => zs(t(...s)), n);
    return (r._c = !1), r;
  },
  Al = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (Nl(s)) continue;
      const o = e[s];
      if (B(o)) t[s] = du(s, o, r);
      else if (o != null) {
        const i = zs(o);
        t[s] = () => i;
      }
    }
  },
  Rl = (e, t) => {
    const n = zs(t);
    e.slots.default = () => n;
  },
  Il = (e, t, n) => {
    for (const r in t) (n || r !== '_') && (e[r] = t[r]);
  },
  hu = (e, t, n) => {
    const r = (e.slots = Ll());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (Il(r, t, n), n && Vi(r, '_', s, !0)) : Al(t, r);
    } else t && Rl(e, t);
  },
  mu = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      i = re;
    if (r.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (o = !1)
          : Il(s, t, n)
        : ((o = !t.$stable), Al(t, s)),
        (i = t);
    } else t && (Rl(e, t), (i = { default: 1 }));
    if (o) for (const l in s) !Nl(l) && i[l] == null && delete s[l];
  },
  Ge = Nu;
function pu(e) {
  return gu(e);
}
function gu(e, t) {
  const n = Sr();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: a,
      setText: f,
      setElementText: d,
      parentNode: h,
      nextSibling: g,
      setScopeId: v = gt,
      insertStaticContent: L,
    } = e,
    N = (
      m,
      c,
      u,
      p = null,
      y = null,
      O = null,
      P = void 0,
      F = null,
      x = !!c.dynamicChildren
    ) => {
      if (m === c) return;
      m && !En(m, c) && ((p = ot(m)), Se(m, y, O, !0), (m = null)),
        c.patchFlag === -2 && ((x = !1), (c.dynamicChildren = null));
      const { type: I, ref: E, shapeFlag: S } = c;
      switch (I) {
        case Wn:
          R(m, c, u, p);
          break;
        case qt:
          _(m, c, u, p);
          break;
        case Qr:
          m == null && C(c, u, p, P);
          break;
        case $e:
          Ne(m, c, u, p, y, O, P, F, x);
          break;
        default:
          S & 1
            ? T(m, c, u, p, y, O, P, F, x)
            : S & 6
            ? ye(m, c, u, p, y, O, P, F, x)
            : (S & 64 || S & 128) && I.process(m, c, u, p, y, O, P, F, x, Me);
      }
      E != null && y && ur(E, m && m.ref, O, c || m, !c);
    },
    R = (m, c, u, p) => {
      if (m == null) r((c.el = l(c.children)), u, p);
      else {
        const y = (c.el = m.el);
        c.children !== m.children && f(y, c.children);
      }
    },
    _ = (m, c, u, p) => {
      m == null ? r((c.el = a(c.children || '')), u, p) : (c.el = m.el);
    },
    C = (m, c, u, p) => {
      [m.el, m.anchor] = L(m.children, c, u, p, m.el, m.anchor);
    },
    w = ({ el: m, anchor: c }, u, p) => {
      let y;
      for (; m && m !== c; ) (y = g(m)), r(m, u, p), (m = y);
      r(c, u, p);
    },
    b = ({ el: m, anchor: c }) => {
      let u;
      for (; m && m !== c; ) (u = g(m)), s(m), (m = u);
      s(c);
    },
    T = (m, c, u, p, y, O, P, F, x) => {
      c.type === 'svg' ? (P = 'svg') : c.type === 'math' && (P = 'mathml'),
        m == null ? k(c, u, p, y, O, P, F, x) : X(m, c, y, O, P, F, x);
    },
    k = (m, c, u, p, y, O, P, F) => {
      let x, I;
      const { props: E, shapeFlag: S, transition: U, dirs: $ } = m;
      if (
        ((x = m.el = i(m.type, O, E && E.is, E)),
        S & 8
          ? d(x, m.children)
          : S & 16 && J(m.children, x, null, p, y, Xr(m, O), P, F),
        $ && $t(m, null, p, 'created'),
        D(x, m, m.scopeId, P, p),
        E)
      ) {
        for (const z in E) z !== 'value' && !wn(z) && o(x, z, null, E[z], O, p);
        'value' in E && o(x, 'value', null, E.value, O),
          (I = E.onVnodeBeforeMount) && ut(I, p, m);
      }
      $ && $t(m, null, p, 'beforeMount');
      const G = _u(y, U);
      G && U.beforeEnter(x),
        r(x, c, u),
        ((I = E && E.onVnodeMounted) || G || $) &&
          Ge(() => {
            I && ut(I, p, m), G && U.enter(x), $ && $t(m, null, p, 'mounted');
          }, y);
    },
    D = (m, c, u, p, y) => {
      if ((u && v(m, u), p)) for (let O = 0; O < p.length; O++) v(m, p[O]);
      if (y) {
        let O = y.subTree;
        if (
          c === O ||
          (Ml(O.type) && (O.ssContent === c || O.ssFallback === c))
        ) {
          const P = y.vnode;
          D(m, P, P.scopeId, P.slotScopeIds, y.parent);
        }
      }
    },
    J = (m, c, u, p, y, O, P, F, x = 0) => {
      for (let I = x; I < m.length; I++) {
        const E = (m[I] = F ? Rt(m[I]) : mt(m[I]));
        N(null, E, c, u, p, y, O, P, F);
      }
    },
    X = (m, c, u, p, y, O, P) => {
      const F = (c.el = m.el);
      let { patchFlag: x, dynamicChildren: I, dirs: E } = c;
      x |= m.patchFlag & 16;
      const S = m.props || re,
        U = c.props || re;
      let $;
      if (
        (u && Ht(u, !1),
        ($ = U.onVnodeBeforeUpdate) && ut($, u, c, m),
        E && $t(c, m, u, 'beforeUpdate'),
        u && Ht(u, !0),
        ((S.innerHTML && U.innerHTML == null) ||
          (S.textContent && U.textContent == null)) &&
          d(F, ''),
        I
          ? ce(m.dynamicChildren, I, F, u, p, Xr(c, y), O)
          : P || Q(m, c, F, null, u, p, Xr(c, y), O, !1),
        x > 0)
      ) {
        if (x & 16) fe(F, S, U, u, y);
        else if (
          (x & 2 && S.class !== U.class && o(F, 'class', null, U.class, y),
          x & 4 && o(F, 'style', S.style, U.style, y),
          x & 8)
        ) {
          const G = c.dynamicProps;
          for (let z = 0; z < G.length; z++) {
            const K = G[z],
              Ae = S[K],
              Re = U[K];
            (Re !== Ae || K === 'value') && o(F, K, Ae, Re, y, u);
          }
        }
        x & 1 && m.children !== c.children && d(F, c.children);
      } else !P && I == null && fe(F, S, U, u, y);
      (($ = U.onVnodeUpdated) || E) &&
        Ge(() => {
          $ && ut($, u, c, m), E && $t(c, m, u, 'updated');
        }, p);
    },
    ce = (m, c, u, p, y, O, P) => {
      for (let F = 0; F < c.length; F++) {
        const x = m[F],
          I = c[F],
          E =
            x.el && (x.type === $e || !En(x, I) || x.shapeFlag & 70)
              ? h(x.el)
              : u;
        N(x, I, E, null, p, y, O, P, !0);
      }
    },
    fe = (m, c, u, p, y) => {
      if (c !== u) {
        if (c !== re)
          for (const O in c) !wn(O) && !(O in u) && o(m, O, c[O], null, y, p);
        for (const O in u) {
          if (wn(O)) continue;
          const P = u[O],
            F = c[O];
          P !== F && O !== 'value' && o(m, O, F, P, y, p);
        }
        'value' in u && o(m, 'value', c.value, u.value, y);
      }
    },
    Ne = (m, c, u, p, y, O, P, F, x) => {
      const I = (c.el = m ? m.el : l('')),
        E = (c.anchor = m ? m.anchor : l(''));
      let { patchFlag: S, dynamicChildren: U, slotScopeIds: $ } = c;
      $ && (F = F ? F.concat($) : $),
        m == null
          ? (r(I, u, p), r(E, u, p), J(c.children || [], u, E, y, O, P, F, x))
          : S > 0 && S & 64 && U && m.dynamicChildren
          ? (ce(m.dynamicChildren, U, u, y, O, P, F),
            (c.key != null || (y && c === y.subTree)) && Pl(m, c, !0))
          : Q(m, c, u, E, y, O, P, F, x);
    },
    ye = (m, c, u, p, y, O, P, F, x) => {
      (c.slotScopeIds = F),
        m == null
          ? c.shapeFlag & 512
            ? y.ctx.activate(c, u, p, P, x)
            : rt(c, u, p, y, O, P, x)
          : wt(m, c, x);
    },
    rt = (m, c, u, p, y, O, P) => {
      const F = (m.component = Mu(m, p, y));
      if ((_l(m) && (F.ctx.renderer = Me), Uu(F, !1, P), F.asyncDep)) {
        if ((y && y.registerDep(F, se, P), !m.el)) {
          const x = (F.subTree = Ee(qt));
          _(null, x, c, u);
        }
      } else se(F, m, c, u, y, O, P);
    },
    wt = (m, c, u) => {
      const p = (c.component = m.component);
      if (Cu(m, c, u))
        if (p.asyncDep && !p.asyncResolved) {
          q(p, c, u);
          return;
        } else (p.next = c), p.update();
      else (c.el = m.el), (p.vnode = c);
    },
    se = (m, c, u, p, y, O, P) => {
      const F = () => {
        if (m.isMounted) {
          let { next: S, bu: U, u: $, parent: G, vnode: z } = m;
          {
            const at = xl(m);
            if (at) {
              S && ((S.el = z.el), q(m, S, P)),
                at.asyncDep.then(() => {
                  m.isUnmounted || F();
                });
              return;
            }
          }
          let K = S,
            Ae;
          Ht(m, !1),
            S ? ((S.el = z.el), q(m, S, P)) : (S = z),
            U && zn(U),
            (Ae = S.props && S.props.onVnodeBeforeUpdate) && ut(Ae, G, S, z),
            Ht(m, !0);
          const Re = Ao(m),
            lt = m.subTree;
          (m.subTree = Re),
            N(lt, Re, h(lt.el), ot(lt), m, y, O),
            (S.el = Re.el),
            K === null && Ou(m, Re.el),
            $ && Ge($, y),
            (Ae = S.props && S.props.onVnodeUpdated) &&
              Ge(() => ut(Ae, G, S, z), y);
        } else {
          let S;
          const { el: U, props: $ } = c,
            { bm: G, m: z, parent: K, root: Ae, type: Re } = m,
            lt = Nn(c);
          Ht(m, !1),
            G && zn(G),
            !lt && (S = $ && $.onVnodeBeforeMount) && ut(S, K, c),
            Ht(m, !0);
          {
            Ae.ce && Ae.ce._injectChildStyle(Re);
            const at = (m.subTree = Ao(m));
            N(null, at, u, p, m, y, O), (c.el = at.el);
          }
          if ((z && Ge(z, y), !lt && (S = $ && $.onVnodeMounted))) {
            const at = c;
            Ge(() => ut(S, K, at), y);
          }
          (c.shapeFlag & 256 ||
            (K && Nn(K.vnode) && K.vnode.shapeFlag & 256)) &&
            m.a &&
            Ge(m.a, y),
            (m.isMounted = !0),
            (c = u = p = null);
        }
      };
      m.scope.on();
      const x = (m.effect = new qi(F));
      m.scope.off();
      const I = (m.update = x.run.bind(x)),
        E = (m.job = x.runIfDirty.bind(x));
      (E.i = m), (E.id = m.uid), (x.scheduler = () => Js(E)), Ht(m, !0), I();
    },
    q = (m, c, u) => {
      c.component = m;
      const p = m.vnode.props;
      (m.vnode = c),
        (m.next = null),
        uu(m, c.props, p, u),
        mu(m, c.children, u),
        Ft(),
        Eo(m),
        kt();
    },
    Q = (m, c, u, p, y, O, P, F, x = !1) => {
      const I = m && m.children,
        E = m ? m.shapeFlag : 0,
        S = c.children,
        { patchFlag: U, shapeFlag: $ } = c;
      if (U > 0) {
        if (U & 128) {
          st(I, S, u, p, y, O, P, F, x);
          return;
        } else if (U & 256) {
          De(I, S, u, p, y, O, P, F, x);
          return;
        }
      }
      $ & 8
        ? (E & 16 && Ze(I, y, O), S !== I && d(u, S))
        : E & 16
        ? $ & 16
          ? st(I, S, u, p, y, O, P, F, x)
          : Ze(I, y, O, !0)
        : (E & 8 && d(u, ''), $ & 16 && J(S, u, p, y, O, P, F, x));
    },
    De = (m, c, u, p, y, O, P, F, x) => {
      (m = m || on), (c = c || on);
      const I = m.length,
        E = c.length,
        S = Math.min(I, E);
      let U;
      for (U = 0; U < S; U++) {
        const $ = (c[U] = x ? Rt(c[U]) : mt(c[U]));
        N(m[U], $, u, null, y, O, P, F, x);
      }
      I > E ? Ze(m, y, O, !0, !1, S) : J(c, u, p, y, O, P, F, x, S);
    },
    st = (m, c, u, p, y, O, P, F, x) => {
      let I = 0;
      const E = c.length;
      let S = m.length - 1,
        U = E - 1;
      for (; I <= S && I <= U; ) {
        const $ = m[I],
          G = (c[I] = x ? Rt(c[I]) : mt(c[I]));
        if (En($, G)) N($, G, u, null, y, O, P, F, x);
        else break;
        I++;
      }
      for (; I <= S && I <= U; ) {
        const $ = m[S],
          G = (c[U] = x ? Rt(c[U]) : mt(c[U]));
        if (En($, G)) N($, G, u, null, y, O, P, F, x);
        else break;
        S--, U--;
      }
      if (I > S) {
        if (I <= U) {
          const $ = U + 1,
            G = $ < E ? c[$].el : p;
          for (; I <= U; )
            N(null, (c[I] = x ? Rt(c[I]) : mt(c[I])), u, G, y, O, P, F, x), I++;
        }
      } else if (I > U) for (; I <= S; ) Se(m[I], y, O, !0), I++;
      else {
        const $ = I,
          G = I,
          z = new Map();
        for (I = G; I <= U; I++) {
          const Be = (c[I] = x ? Rt(c[I]) : mt(c[I]));
          Be.key != null && z.set(Be.key, I);
        }
        let K,
          Ae = 0;
        const Re = U - G + 1;
        let lt = !1,
          at = 0;
        const yn = new Array(Re);
        for (I = 0; I < Re; I++) yn[I] = 0;
        for (I = $; I <= S; I++) {
          const Be = m[I];
          if (Ae >= Re) {
            Se(Be, y, O, !0);
            continue;
          }
          let ct;
          if (Be.key != null) ct = z.get(Be.key);
          else
            for (K = G; K <= U; K++)
              if (yn[K - G] === 0 && En(Be, c[K])) {
                ct = K;
                break;
              }
          ct === void 0
            ? Se(Be, y, O, !0)
            : ((yn[ct - G] = I + 1),
              ct >= at ? (at = ct) : (lt = !0),
              N(Be, c[ct], u, null, y, O, P, F, x),
              Ae++);
        }
        const po = lt ? bu(yn) : on;
        for (K = po.length - 1, I = Re - 1; I >= 0; I--) {
          const Be = G + I,
            ct = c[Be],
            go = Be + 1 < E ? c[Be + 1].el : p;
          yn[I] === 0
            ? N(null, ct, u, go, y, O, P, F, x)
            : lt && (K < 0 || I !== po[K] ? We(ct, u, go, 2) : K--);
        }
      }
    },
    We = (m, c, u, p, y = null) => {
      const { el: O, type: P, transition: F, children: x, shapeFlag: I } = m;
      if (I & 6) {
        We(m.component.subTree, c, u, p);
        return;
      }
      if (I & 128) {
        m.suspense.move(c, u, p);
        return;
      }
      if (I & 64) {
        P.move(m, c, u, Me);
        return;
      }
      if (P === $e) {
        r(O, c, u);
        for (let S = 0; S < x.length; S++) We(x[S], c, u, p);
        r(m.anchor, c, u);
        return;
      }
      if (P === Qr) {
        w(m, c, u);
        return;
      }
      if (p !== 2 && I & 1 && F)
        if (p === 0) F.beforeEnter(O), r(O, c, u), Ge(() => F.enter(O), y);
        else {
          const { leave: S, delayLeave: U, afterLeave: $ } = F,
            G = () => r(O, c, u),
            z = () => {
              S(O, () => {
                G(), $ && $();
              });
            };
          U ? U(O, G, z) : z();
        }
      else r(O, c, u);
    },
    Se = (m, c, u, p = !1, y = !1) => {
      const {
        type: O,
        props: P,
        ref: F,
        children: x,
        dynamicChildren: I,
        shapeFlag: E,
        patchFlag: S,
        dirs: U,
        cacheIndex: $,
      } = m;
      if (
        (S === -2 && (y = !1),
        F != null && ur(F, null, u, m, !0),
        $ != null && (c.renderCache[$] = void 0),
        E & 256)
      ) {
        c.ctx.deactivate(m);
        return;
      }
      const G = E & 1 && U,
        z = !Nn(m);
      let K;
      if ((z && (K = P && P.onVnodeBeforeUnmount) && ut(K, c, m), E & 6))
        Ut(m.component, u, p);
      else {
        if (E & 128) {
          m.suspense.unmount(u, p);
          return;
        }
        G && $t(m, null, c, 'beforeUnmount'),
          E & 64
            ? m.type.remove(m, c, u, Me, p)
            : I && !I.hasOnce && (O !== $e || (S > 0 && S & 64))
            ? Ze(I, c, u, !1, !0)
            : ((O === $e && S & 384) || (!y && E & 16)) && Ze(x, c, u),
          p && Mt(m);
      }
      ((z && (K = P && P.onVnodeUnmounted)) || G) &&
        Ge(() => {
          K && ut(K, c, m), G && $t(m, null, c, 'unmounted');
        }, u);
    },
    Mt = (m) => {
      const { type: c, el: u, anchor: p, transition: y } = m;
      if (c === $e) {
        Ct(u, p);
        return;
      }
      if (c === Qr) {
        b(m);
        return;
      }
      const O = () => {
        s(u), y && !y.persisted && y.afterLeave && y.afterLeave();
      };
      if (m.shapeFlag & 1 && y && !y.persisted) {
        const { leave: P, delayLeave: F } = y,
          x = () => P(u, O);
        F ? F(m.el, O, x) : x();
      } else O();
    },
    Ct = (m, c) => {
      let u;
      for (; m !== c; ) (u = g(m)), s(m), (m = u);
      s(c);
    },
    Ut = (m, c, u) => {
      const { bum: p, scope: y, job: O, subTree: P, um: F, m: x, a: I } = m;
      No(x),
        No(I),
        p && zn(p),
        y.stop(),
        O && ((O.flags |= 8), Se(P, m, c, u)),
        F && Ge(F, c),
        Ge(() => {
          m.isUnmounted = !0;
        }, c),
        c &&
          c.pendingBranch &&
          !c.isUnmounted &&
          m.asyncDep &&
          !m.asyncResolved &&
          m.suspenseId === c.pendingId &&
          (c.deps--, c.deps === 0 && c.resolve());
    },
    Ze = (m, c, u, p = !1, y = !1, O = 0) => {
      for (let P = O; P < m.length; P++) Se(m[P], c, u, p, y);
    },
    ot = (m) => {
      if (m.shapeFlag & 6) return ot(m.component.subTree);
      if (m.shapeFlag & 128) return m.suspense.next();
      const c = g(m.anchor || m.el),
        u = c && c[$c];
      return u ? g(u) : c;
    };
  let ze = !1;
  const it = (m, c, u) => {
      m == null
        ? c._vnode && Se(c._vnode, null, null, !0)
        : N(c._vnode || null, m, c, null, null, null, u),
        (c._vnode = m),
        ze || ((ze = !0), Eo(), hl(), (ze = !1));
    },
    Me = {
      p: N,
      um: Se,
      m: We,
      r: Mt,
      mt: rt,
      mc: J,
      pc: Q,
      pbc: ce,
      n: ot,
      o: e,
    };
  return { render: it, hydrate: void 0, createApp: lu(it) };
}
function Xr({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n;
}
function Ht({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function _u(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Pl(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (V(r) && V(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let l = s[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[o] = Rt(s[o])), (l.el = i.el)),
        !n && l.patchFlag !== -2 && Pl(i, l)),
        l.type === Wn && (l.el = i.el);
    }
}
function bu(e) {
  const t = e.slice(),
    n = [0];
  let r, s, o, i, l;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const f = e[r];
    if (f !== 0) {
      if (((s = n[n.length - 1]), e[s] < f)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (l = (o + i) >> 1), e[n[l]] < f ? (o = l + 1) : (i = l);
      f < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
function xl(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : xl(t);
}
function No(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const yu = Symbol.for('v-scx'),
  vu = () => fn(yu);
function Pt(e, t, n) {
  return Fl(e, t, n);
}
function Fl(e, t, n = re) {
  const { immediate: r, deep: s, flush: o, once: i } = n,
    l = ke({}, n),
    a = (t && r) || (!t && o !== 'post');
  let f;
  if (Un) {
    if (o === 'sync') {
      const v = vu();
      f = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!a) {
      const v = () => {};
      return (v.stop = gt), (v.resume = gt), (v.pause = gt), v;
    }
  }
  const d = ve;
  l.call = (v, L, N) => bt(v, d, L, N);
  let h = !1;
  o === 'post'
    ? (l.scheduler = (v) => {
        Ge(v, d && d.suspense);
      })
    : o !== 'sync' &&
      ((h = !0),
      (l.scheduler = (v, L) => {
        L ? v() : Js(v);
      })),
    (l.augmentJob = (v) => {
      t && (v.flags |= 4),
        h && ((v.flags |= 2), d && ((v.id = d.uid), (v.i = d)));
    });
  const g = Fc(e, t, l);
  return Un && (f ? f.push(g) : a && g()), g;
}
function Eu(e, t, n) {
  const r = this.proxy,
    s = pe(e) ? (e.includes('.') ? kl(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  B(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = Bn(this),
    l = Fl(s, o.bind(r), n);
  return i(), l;
}
function kl(e, t) {
  const n = t.split('.');
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
const Tu = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Qe(t)}Modifiers`] || e[`${Jt(t)}Modifiers`];
function Su(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || re;
  let s = n;
  const o = t.startsWith('update:'),
    i = o && Tu(r, t.slice(7));
  i &&
    (i.trim && (s = n.map((d) => (pe(d) ? d.trim() : d))),
    i.number && (s = n.map(ir)));
  let l,
    a = r[(l = Wr(t))] || r[(l = Wr(Qe(t)))];
  !a && o && (a = r[(l = Wr(Jt(t)))]), a && bt(a, e, 6, s);
  const f = r[l + 'Once'];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), bt(f, e, 6, s);
  }
}
function Dl(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    l = !1;
  if (!B(e)) {
    const a = (f) => {
      const d = Dl(f, t, !0);
      d && ((l = !0), ke(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !o && !l
    ? (ae(e) && r.set(e, null), null)
    : (V(o) ? o.forEach((a) => (i[a] = null)) : ke(i, o),
      ae(e) && r.set(e, i),
      i);
}
function Ar(e, t) {
  return !e || !yr(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      ne(e, t[0].toLowerCase() + t.slice(1)) || ne(e, Jt(t)) || ne(e, t));
}
function Ao(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: s,
      propsOptions: [o],
      slots: i,
      attrs: l,
      emit: a,
      render: f,
      renderCache: d,
      props: h,
      data: g,
      setupState: v,
      ctx: L,
      inheritAttrs: N,
    } = e,
    R = cr(e);
  let _, C;
  try {
    if (n.shapeFlag & 4) {
      const b = s || r,
        T = b;
      (_ = mt(f.call(T, b, d, h, v, g, L))), (C = l);
    } else {
      const b = t;
      (_ = mt(
        b.length > 1 ? b(h, { attrs: l, slots: i, emit: a }) : b(h, null)
      )),
        (C = t.props ? l : Lu(l));
    }
  } catch (b) {
    (Rn.length = 0), Or(b, e, 1), (_ = Ee(qt));
  }
  let w = _;
  if (C && N !== !1) {
    const b = Object.keys(C),
      { shapeFlag: T } = w;
    b.length &&
      T & 7 &&
      (o && b.some(Us) && (C = wu(C, o)), (w = mn(w, C, !1, !0)));
  }
  return (
    n.dirs &&
      ((w = mn(w, null, !1, !0)),
      (w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Xs(w, n.transition),
    (_ = w),
    cr(R),
    _
  );
}
const Lu = (e) => {
    let t;
    for (const n in e)
      (n === 'class' || n === 'style' || yr(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  wu = (e, t) => {
    const n = {};
    for (const r in e) (!Us(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Cu(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: l, patchFlag: a } = t,
    f = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return r ? Ro(r, i, f) : !!i;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        const g = d[h];
        if (i[g] !== r[g] && !Ar(f, g)) return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? Ro(r, i, f)
        : !0
      : !!i;
  return !1;
}
function Ro(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !Ar(n, o)) return !0;
  }
  return !1;
}
function Ou({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Ml = (e) => e.__isSuspense;
function Nu(e, t) {
  t && t.pendingBranch
    ? V(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Mc(e);
}
const $e = Symbol.for('v-fgt'),
  Wn = Symbol.for('v-txt'),
  qt = Symbol.for('v-cmt'),
  Qr = Symbol.for('v-stc'),
  Rn = [];
let qe = null;
function Le(e = !1) {
  Rn.push((qe = e ? null : []));
}
function Au() {
  Rn.pop(), (qe = Rn[Rn.length - 1] || null);
}
let Dn = 1;
function Io(e, t = !1) {
  (Dn += e), e < 0 && qe && t && (qe.hasOnce = !0);
}
function Ul(e) {
  return (
    (e.dynamicChildren = Dn > 0 ? qe || on : null),
    Au(),
    Dn > 0 && qe && qe.push(e),
    e
  );
}
function xe(e, t, n, r, s, o) {
  return Ul(H(e, t, n, r, s, o, !0));
}
function Ru(e, t, n, r, s) {
  return Ul(Ee(e, t, n, r, s, !0));
}
function dr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function En(e, t) {
  return e.type === t.type && e.key === t.key;
}
const $l = ({ key: e }) => e ?? null,
  tr = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? pe(e) || Te(e) || B(e)
        ? { i: He, r: e, k: t, f: !!n }
        : e
      : null
  );
function H(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  o = e === $e ? 0 : 1,
  i = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && $l(t),
    ref: t && tr(t),
    scopeId: pl,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: He,
  };
  return (
    l
      ? (eo(a, n), o & 128 && e.normalize(a))
      : n && (a.shapeFlag |= pe(n) ? 8 : 16),
    Dn > 0 &&
      !i &&
      qe &&
      (a.patchFlag > 0 || o & 6) &&
      a.patchFlag !== 32 &&
      qe.push(a),
    a
  );
}
const Ee = Iu;
function Iu(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === Zc) && (e = qt), dr(e))) {
    const l = mn(e, t, !0);
    return (
      n && eo(l, n),
      Dn > 0 &&
        !o &&
        qe &&
        (l.shapeFlag & 6 ? (qe[qe.indexOf(e)] = l) : qe.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((Wu(e) && (e = e.__vccOpts), t)) {
    t = Pu(t);
    let { class: l, style: a } = t;
    l && !pe(l) && (t.class = Lr(l)),
      ae(a) && (Ys(a) && !V(a) && (a = ke({}, a)), (t.style = Vs(a)));
  }
  const i = pe(e) ? 1 : Ml(e) ? 128 : Hc(e) ? 64 : ae(e) ? 4 : B(e) ? 2 : 0;
  return H(e, t, n, r, s, i, o, !0);
}
function Pu(e) {
  return e ? (Ys(e) || wl(e) ? ke({}, e) : e) : null;
}
function mn(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: l, transition: a } = e,
    f = t ? Fu(s || {}, t) : s,
    d = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: f,
      key: f && $l(f),
      ref:
        t && t.ref
          ? n && o
            ? V(o)
              ? o.concat(tr(t))
              : [o, tr(t)]
            : tr(t)
          : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== $e ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && mn(e.ssContent),
      ssFallback: e.ssFallback && mn(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return a && r && Xs(d, a.clone(d)), d;
}
function xu(e = ' ', t = 0) {
  return Ee(Wn, null, e, t);
}
function ps(e = '', t = !1) {
  return t ? (Le(), Ru(qt, null, e)) : Ee(qt, null, e);
}
function mt(e) {
  return e == null || typeof e == 'boolean'
    ? Ee(qt)
    : V(e)
    ? Ee($e, null, e.slice())
    : dr(e)
    ? Rt(e)
    : Ee(Wn, null, String(e));
}
function Rt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : mn(e);
}
function eo(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (V(t)) n = 16;
  else if (typeof t == 'object')
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), eo(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !wl(t)
        ? (t._ctx = He)
        : s === 3 &&
          He &&
          (He.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    B(t)
      ? ((t = { default: t, _ctx: He }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [xu(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Fu(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === 'class')
        t.class !== r.class && (t.class = Lr([t.class, r.class]));
      else if (s === 'style') t.style = Vs([t.style, r.style]);
      else if (yr(s)) {
        const o = t[s],
          i = r[s];
        i &&
          o !== i &&
          !(V(o) && o.includes(i)) &&
          (t[s] = o ? [].concat(o, i) : i);
      } else s !== '' && (t[s] = r[s]);
  }
  return t;
}
function ut(e, t, n, r = null) {
  bt(e, t, 7, [n, r]);
}
const ku = Tl();
let Du = 0;
function Mu(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || ku,
    o = {
      uid: Du++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Gi(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ol(r, s),
      emitsOptions: Dl(r, s),
      emit: null,
      emitted: null,
      propsDefaults: re,
      inheritAttrs: r.inheritAttrs,
      ctx: re,
      data: re,
      props: re,
      attrs: re,
      slots: re,
      refs: re,
      setupState: re,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Su.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let ve = null;
const Mn = () => ve || He;
let hr, gs;
{
  const e = Sr(),
    t = (n, r) => {
      let s;
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(r),
        (o) => {
          s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
        }
      );
    };
  (hr = t('__VUE_INSTANCE_SETTERS__', (n) => (ve = n))),
    (gs = t('__VUE_SSR_SETTERS__', (n) => (Un = n)));
}
const Bn = (e) => {
    const t = ve;
    return (
      hr(e),
      e.scope.on(),
      () => {
        e.scope.off(), hr(t);
      }
    );
  },
  Po = () => {
    ve && ve.scope.off(), hr(null);
  };
function Hl(e) {
  return e.vnode.shapeFlag & 4;
}
let Un = !1;
function Uu(e, t = !1, n = !1) {
  t && gs(t);
  const { props: r, children: s } = e.vnode,
    o = Hl(e);
  cu(e, r, o, t), hu(e, s, n);
  const i = o ? $u(e, t) : void 0;
  return t && gs(!1), i;
}
function $u(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, eu));
  const { setup: r } = n;
  if (r) {
    Ft();
    const s = (e.setupContext = r.length > 1 ? Vu(e) : null),
      o = Bn(e),
      i = jn(r, e, 0, [e.props, s]),
      l = Ui(i);
    if ((kt(), o(), (l || e.sp) && !Nn(e) && gl(e), l)) {
      if ((i.then(Po, Po), t))
        return i
          .then((a) => {
            xo(e, a);
          })
          .catch((a) => {
            Or(a, e, 0);
          });
      e.asyncDep = i;
    } else xo(e, i);
  } else Vl(e);
}
function xo(e, t, n) {
  B(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ae(t) && (e.setupState = cl(t)),
    Vl(e);
}
function Vl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || gt);
  {
    const s = Bn(e);
    Ft();
    try {
      tu(e);
    } finally {
      kt(), s();
    }
  }
}
const Hu = {
  get(e, t) {
    return we(e, 'get', ''), e[t];
  },
};
function Vu(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Hu),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Rr(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(cl(Cc(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in An) return An[n](e);
          },
          has(t, n) {
            return n in t || n in An;
          },
        }))
    : e.proxy;
}
function ju(e, t = !0) {
  return B(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Wu(e) {
  return B(e) && '__vccOpts' in e;
}
const Je = (e, t) => Pc(e, t, Un);
function jl(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? ae(t) && !V(t)
      ? dr(t)
        ? Ee(e, null, [t])
        : Ee(e, t)
      : Ee(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && dr(n) && (n = [n]),
      Ee(e, t, n));
}
const Bu = '3.5.13';
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let _s;
const Fo = typeof window < 'u' && window.trustedTypes;
if (Fo)
  try {
    _s = Fo.createPolicy('vue', { createHTML: (e) => e });
  } catch {}
const Wl = _s ? (e) => _s.createHTML(e) : (e) => e,
  Gu = 'http://www.w3.org/2000/svg',
  Ku = 'http://www.w3.org/1998/Math/MathML',
  Et = typeof document < 'u' ? document : null,
  ko = Et && Et.createElement('template'),
  qu = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s =
        t === 'svg'
          ? Et.createElementNS(Gu, e)
          : t === 'mathml'
          ? Et.createElementNS(Ku, e)
          : n
          ? Et.createElement(e, { is: n })
          : Et.createElement(e);
      return (
        e === 'select' &&
          r &&
          r.multiple != null &&
          s.setAttribute('multiple', r.multiple),
        s
      );
    },
    createText: (e) => Et.createTextNode(e),
    createComment: (e) => Et.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Et.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling));

        );
      else {
        ko.innerHTML = Wl(
          r === 'svg'
            ? `<svg>${e}</svg>`
            : r === 'mathml'
            ? `<math>${e}</math>`
            : e
        );
        const l = ko.content;
        if (r === 'svg' || r === 'mathml') {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Yu = Symbol('_vtc');
function Ju(e, t, n) {
  const r = e[Yu];
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t);
}
const Do = Symbol('_vod'),
  Xu = Symbol('_vsh'),
  Qu = Symbol(''),
  Zu = /(^|;)\s*display\s*:/;
function zu(e, t, n) {
  const r = e.style,
    s = pe(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (pe(t))
        for (const i of t.split(';')) {
          const l = i.slice(0, i.indexOf(':')).trim();
          n[l] == null && nr(r, l, '');
        }
      else for (const i in t) n[i] == null && nr(r, i, '');
    for (const i in n) i === 'display' && (o = !0), nr(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[Qu];
      i && (n += ';' + i), (r.cssText = n), (o = Zu.test(n));
    }
  } else t && e.removeAttribute('style');
  Do in e && ((e[Do] = o ? r.display : ''), e[Xu] && (r.display = 'none'));
}
const Mo = /\s*!important$/;
function nr(e, t, n) {
  if (V(n)) n.forEach((r) => nr(e, t, r));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const r = ef(e, t);
    Mo.test(n)
      ? e.setProperty(Jt(r), n.replace(Mo, ''), 'important')
      : (e[r] = n);
  }
}
const Uo = ['Webkit', 'Moz', 'ms'],
  Zr = {};
function ef(e, t) {
  const n = Zr[t];
  if (n) return n;
  let r = Qe(t);
  if (r !== 'filter' && r in e) return (Zr[t] = r);
  r = Tr(r);
  for (let s = 0; s < Uo.length; s++) {
    const o = Uo[s] + r;
    if (o in e) return (Zr[t] = o);
  }
  return t;
}
const $o = 'http://www.w3.org/1999/xlink';
function Ho(e, t, n, r, s, o = rc(t)) {
  r && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS($o, t.slice(6, t.length))
      : e.setAttributeNS($o, t, n)
    : n == null || (o && !ji(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, o ? '' : _t(n) ? String(n) : n);
}
function Vo(e, t, n, r, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? Wl(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === 'value' && o !== 'PROGRESS' && !o.includes('-')) {
    const l = o === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      a = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n);
    (l !== a || !('_value' in e)) && (e.value = a),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let i = !1;
  if (n === '' || n == null) {
    const l = typeof e[t];
    l === 'boolean'
      ? (n = ji(n))
      : n == null && l === 'string'
      ? ((n = ''), (i = !0))
      : l === 'number' && ((n = 0), (i = !0));
  }
  try {
    e[t] = n;
  } catch {}
  i && e.removeAttribute(s || t);
}
function jt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function tf(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const jo = Symbol('_vei');
function nf(e, t, n, r, s = null) {
  const o = e[jo] || (e[jo] = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [l, a] = rf(t);
    if (r) {
      const f = (o[t] = lf(r, s));
      jt(e, l, f, a);
    } else i && (tf(e, l, i, a), (o[t] = void 0));
  }
}
const Wo = /(?:Once|Passive|Capture)$/;
function rf(e) {
  let t;
  if (Wo.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(Wo)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : Jt(e.slice(2)), t];
}
let zr = 0;
const sf = Promise.resolve(),
  of = () => zr || (sf.then(() => (zr = 0)), (zr = Date.now()));
function lf(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    bt(af(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = of()), n;
}
function af(e, t) {
  if (V(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const Bo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  cf = (e, t, n, r, s, o) => {
    const i = s === 'svg';
    t === 'class'
      ? Ju(e, r, i)
      : t === 'style'
      ? zu(e, n, r)
      : yr(t)
      ? Us(t) || nf(e, t, n, r, o)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : uf(e, t, r, i)
        )
      ? (Vo(e, t, r),
        !e.tagName.includes('-') &&
          (t === 'value' || t === 'checked' || t === 'selected') &&
          Ho(e, t, r, i, o, t !== 'value'))
      : e._isVueCE && (/[A-Z]/.test(t) || !pe(r))
      ? Vo(e, Qe(t), r, o, t)
      : (t === 'true-value'
          ? (e._trueValue = r)
          : t === 'false-value' && (e._falseValue = r),
        Ho(e, t, r, i));
  };
function uf(e, t, n, r) {
  if (r)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && Bo(t) && B(n))
    );
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1;
  if (t === 'width' || t === 'height') {
    const s = e.tagName;
    if (s === 'IMG' || s === 'VIDEO' || s === 'CANVAS' || s === 'SOURCE')
      return !1;
  }
  return Bo(t) && pe(n) ? !1 : t in e;
}
const mr = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1;
  return V(t) ? (n) => zn(t, n) : t;
};
function ff(e) {
  e.target.composing = !0;
}
function Go(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')));
}
const dn = Symbol('_assign'),
  es = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[dn] = mr(s);
      const o = r || (s.props && s.props.type === 'number');
      jt(e, t ? 'change' : 'input', (i) => {
        if (i.target.composing) return;
        let l = e.value;
        n && (l = l.trim()), o && (l = ir(l)), e[dn](l);
      }),
        n &&
          jt(e, 'change', () => {
            e.value = e.value.trim();
          }),
        t ||
          (jt(e, 'compositionstart', ff),
          jt(e, 'compositionend', Go),
          jt(e, 'change', Go));
    },
    mounted(e, { value: t }) {
      e.value = t ?? '';
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: o } },
      i
    ) {
      if (((e[dn] = mr(i)), e.composing)) return;
      const l =
          (o || e.type === 'number') && !/^0\d/.test(e.value)
            ? ir(e.value)
            : e.value,
        a = t ?? '';
      l !== a &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          ((r && t === n) || (s && e.value.trim() === a))) ||
          (e.value = a));
    },
  },
  bs = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, r) {
      const s = vr(t);
      jt(e, 'change', () => {
        const o = Array.prototype.filter
          .call(e.options, (i) => i.selected)
          .map((i) => (n ? ir(pr(i)) : pr(i)));
        e[dn](e.multiple ? (s ? new Set(o) : o) : o[0]),
          (e._assigning = !0),
          fl(() => {
            e._assigning = !1;
          });
      }),
        (e[dn] = mr(r));
    },
    mounted(e, { value: t }) {
      Ko(e, t);
    },
    beforeUpdate(e, t, n) {
      e[dn] = mr(n);
    },
    updated(e, { value: t }) {
      e._assigning || Ko(e, t);
    },
  };
function Ko(e, t) {
  const n = e.multiple,
    r = V(t);
  if (!(n && !r && !vr(t))) {
    for (let s = 0, o = e.options.length; s < o; s++) {
      const i = e.options[s],
        l = pr(i);
      if (n)
        if (r) {
          const a = typeof l;
          a === 'string' || a === 'number'
            ? (i.selected = t.some((f) => String(f) === String(l)))
            : (i.selected = oc(t, l) > -1);
        } else i.selected = t.has(l);
      else if (wr(pr(i), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function pr(e) {
  return '_value' in e ? e._value : e.value;
}
const df = ke({ patchProp: cf }, qu);
let qo;
function hf() {
  return qo || (qo = pu(df));
}
const mf = (...e) => {
  const t = hf().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = gf(r);
      if (!s) return;
      const o = t._component;
      !B(o) && !o.render && !o.template && (o.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = '');
      const i = n(s, !1, pf(s));
      return (
        s instanceof Element &&
          (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')),
        i
      );
    }),
    t
  );
};
function pf(e) {
  if (e instanceof SVGElement) return 'svg';
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml';
}
function gf(e) {
  return pe(e) ? document.querySelector(e) : e;
}
function _f() {
  return Bl().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Bl() {
  return typeof navigator < 'u' && typeof window < 'u'
    ? window
    : typeof globalThis < 'u'
    ? globalThis
    : {};
}
const bf = typeof Proxy == 'function',
  yf = 'devtools-plugin:setup',
  vf = 'plugin:settings:set';
let zt, ys;
function Ef() {
  var e;
  return (
    zt !== void 0 ||
      (typeof window < 'u' && window.performance
        ? ((zt = !0), (ys = window.performance))
        : typeof globalThis < 'u' &&
          !((e = globalThis.perf_hooks) === null || e === void 0) &&
          e.performance
        ? ((zt = !0), (ys = globalThis.perf_hooks.performance))
        : (zt = !1)),
    zt
  );
}
function Tf() {
  return Ef() ? ys.now() : Date.now();
}
class Sf {
  constructor(t, n) {
    (this.target = null),
      (this.targetQueue = []),
      (this.onQueue = []),
      (this.plugin = t),
      (this.hook = n);
    const r = {};
    if (t.settings)
      for (const i in t.settings) {
        const l = t.settings[i];
        r[i] = l.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let o = Object.assign({}, r);
    try {
      const i = localStorage.getItem(s),
        l = JSON.parse(i);
      Object.assign(o, l);
    } catch {}
    (this.fallbacks = {
      getSettings() {
        return o;
      },
      setSettings(i) {
        try {
          localStorage.setItem(s, JSON.stringify(i));
        } catch {}
        o = i;
      },
      now() {
        return Tf();
      },
    }),
      n &&
        n.on(vf, (i, l) => {
          i === this.plugin.id && this.fallbacks.setSettings(l);
        }),
      (this.proxiedOn = new Proxy(
        {},
        {
          get: (i, l) =>
            this.target
              ? this.target.on[l]
              : (...a) => {
                  this.onQueue.push({ method: l, args: a });
                },
        }
      )),
      (this.proxiedTarget = new Proxy(
        {},
        {
          get: (i, l) =>
            this.target
              ? this.target[l]
              : l === 'on'
              ? this.proxiedOn
              : Object.keys(this.fallbacks).includes(l)
              ? (...a) => (
                  this.targetQueue.push({
                    method: l,
                    args: a,
                    resolve: () => {},
                  }),
                  this.fallbacks[l](...a)
                )
              : (...a) =>
                  new Promise((f) => {
                    this.targetQueue.push({ method: l, args: a, resolve: f });
                  }),
        }
      ));
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue) this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Lf(e, t) {
  const n = e,
    r = Bl(),
    s = _f(),
    o = bf && n.enableEarlyProxy;
  if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o)) s.emit(yf, e, t);
  else {
    const i = o ? new Sf(n, s) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i,
    }),
      i && t(i.proxiedTarget);
  }
}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */ var Gl = 'store';
function wf(e) {
  return e === void 0 && (e = null), fn(e !== null ? e : Gl);
}
function gn(e, t) {
  Object.keys(e).forEach(function (n) {
    return t(e[n], n);
  });
}
function Cf(e) {
  return e !== null && typeof e == 'object';
}
function Of(e) {
  return e && typeof e.then == 'function';
}
function Nf(e, t) {
  return function () {
    return e(t);
  };
}
function Kl(e, t, n) {
  return (
    t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)),
    function () {
      var r = t.indexOf(e);
      r > -1 && t.splice(r, 1);
    }
  );
}
function ql(e, t) {
  (e._actions = Object.create(null)),
    (e._mutations = Object.create(null)),
    (e._wrappedGetters = Object.create(null)),
    (e._modulesNamespaceMap = Object.create(null));
  var n = e.state;
  Ir(e, n, [], e._modules.root, !0), to(e, n, t);
}
function to(e, t, n) {
  var r = e._state,
    s = e._scope;
  (e.getters = {}), (e._makeLocalGettersCache = Object.create(null));
  var o = e._wrappedGetters,
    i = {},
    l = {},
    a = Ki(!0);
  a.run(function () {
    gn(o, function (f, d) {
      (i[d] = Nf(f, e)),
        (l[d] = Je(function () {
          return i[d]();
        })),
        Object.defineProperty(e.getters, d, {
          get: function () {
            return l[d].value;
          },
          enumerable: !0,
        });
    });
  }),
    (e._state = hn({ data: t })),
    (e._scope = a),
    e.strict && xf(e),
    r &&
      n &&
      e._withCommit(function () {
        r.data = null;
      }),
    s && s.stop();
}
function Ir(e, t, n, r, s) {
  var o = !n.length,
    i = e._modules.getNamespace(n);
  if (
    (r.namespaced &&
      (e._modulesNamespaceMap[i], (e._modulesNamespaceMap[i] = r)),
    !o && !s)
  ) {
    var l = no(t, n.slice(0, -1)),
      a = n[n.length - 1];
    e._withCommit(function () {
      l[a] = r.state;
    });
  }
  var f = (r.context = Af(e, i, n));
  r.forEachMutation(function (d, h) {
    var g = i + h;
    Rf(e, g, d, f);
  }),
    r.forEachAction(function (d, h) {
      var g = d.root ? h : i + h,
        v = d.handler || d;
      If(e, g, v, f);
    }),
    r.forEachGetter(function (d, h) {
      var g = i + h;
      Pf(e, g, d, f);
    }),
    r.forEachChild(function (d, h) {
      Ir(e, t, n.concat(h), d, s);
    });
}
function Af(e, t, n) {
  var r = t === '',
    s = {
      dispatch: r
        ? e.dispatch
        : function (o, i, l) {
            var a = gr(o, i, l),
              f = a.payload,
              d = a.options,
              h = a.type;
            return (!d || !d.root) && (h = t + h), e.dispatch(h, f);
          },
      commit: r
        ? e.commit
        : function (o, i, l) {
            var a = gr(o, i, l),
              f = a.payload,
              d = a.options,
              h = a.type;
            (!d || !d.root) && (h = t + h), e.commit(h, f, d);
          },
    };
  return (
    Object.defineProperties(s, {
      getters: {
        get: r
          ? function () {
              return e.getters;
            }
          : function () {
              return Yl(e, t);
            },
      },
      state: {
        get: function () {
          return no(e.state, n);
        },
      },
    }),
    s
  );
}
function Yl(e, t) {
  if (!e._makeLocalGettersCache[t]) {
    var n = {},
      r = t.length;
    Object.keys(e.getters).forEach(function (s) {
      if (s.slice(0, r) === t) {
        var o = s.slice(r);
        Object.defineProperty(n, o, {
          get: function () {
            return e.getters[s];
          },
          enumerable: !0,
        });
      }
    }),
      (e._makeLocalGettersCache[t] = n);
  }
  return e._makeLocalGettersCache[t];
}
function Rf(e, t, n, r) {
  var s = e._mutations[t] || (e._mutations[t] = []);
  s.push(function (i) {
    n.call(e, r.state, i);
  });
}
function If(e, t, n, r) {
  var s = e._actions[t] || (e._actions[t] = []);
  s.push(function (i) {
    var l = n.call(
      e,
      {
        dispatch: r.dispatch,
        commit: r.commit,
        getters: r.getters,
        state: r.state,
        rootGetters: e.getters,
        rootState: e.state,
      },
      i
    );
    return (
      Of(l) || (l = Promise.resolve(l)),
      e._devtoolHook
        ? l.catch(function (a) {
            throw (e._devtoolHook.emit('vuex:error', a), a);
          })
        : l
    );
  });
}
function Pf(e, t, n, r) {
  e._wrappedGetters[t] ||
    (e._wrappedGetters[t] = function (o) {
      return n(r.state, r.getters, o.state, o.getters);
    });
}
function xf(e) {
  Pt(
    function () {
      return e._state.data;
    },
    function () {},
    { deep: !0, flush: 'sync' }
  );
}
function no(e, t) {
  return t.reduce(function (n, r) {
    return n[r];
  }, e);
}
function gr(e, t, n) {
  return (
    Cf(e) && e.type && ((n = t), (t = e), (e = e.type)),
    { type: e, payload: t, options: n }
  );
}
var Ff = 'vuex bindings',
  Yo = 'vuex:mutations',
  ts = 'vuex:actions',
  en = 'vuex',
  kf = 0;
function Df(e, t) {
  Lf(
    {
      id: 'org.vuejs.vuex',
      app: e,
      label: 'Vuex',
      homepage: 'https://next.vuex.vuejs.org/',
      logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
      packageName: 'vuex',
      componentStateTypes: [Ff],
    },
    function (n) {
      n.addTimelineLayer({ id: Yo, label: 'Vuex Mutations', color: Jo }),
        n.addTimelineLayer({ id: ts, label: 'Vuex Actions', color: Jo }),
        n.addInspector({
          id: en,
          label: 'Vuex',
          icon: 'storage',
          treeFilterPlaceholder: 'Filter stores...',
        }),
        n.on.getInspectorTree(function (r) {
          if (r.app === e && r.inspectorId === en)
            if (r.filter) {
              var s = [];
              Zl(s, t._modules.root, r.filter, ''), (r.rootNodes = s);
            } else r.rootNodes = [Ql(t._modules.root, '')];
        }),
        n.on.getInspectorState(function (r) {
          if (r.app === e && r.inspectorId === en) {
            var s = r.nodeId;
            Yl(t, s),
              (r.state = $f(
                Vf(t._modules, s),
                s === 'root' ? t.getters : t._makeLocalGettersCache,
                s
              ));
          }
        }),
        n.on.editInspectorState(function (r) {
          if (r.app === e && r.inspectorId === en) {
            var s = r.nodeId,
              o = r.path;
            s !== 'root' && (o = s.split('/').filter(Boolean).concat(o)),
              t._withCommit(function () {
                r.set(t._state.data, o, r.state.value);
              });
          }
        }),
        t.subscribe(function (r, s) {
          var o = {};
          r.payload && (o.payload = r.payload),
            (o.state = s),
            n.notifyComponentUpdate(),
            n.sendInspectorTree(en),
            n.sendInspectorState(en),
            n.addTimelineEvent({
              layerId: Yo,
              event: { time: Date.now(), title: r.type, data: o },
            });
        }),
        t.subscribeAction({
          before: function (r, s) {
            var o = {};
            r.payload && (o.payload = r.payload),
              (r._id = kf++),
              (r._time = Date.now()),
              (o.state = s),
              n.addTimelineEvent({
                layerId: ts,
                event: {
                  time: r._time,
                  title: r.type,
                  groupId: r._id,
                  subtitle: 'start',
                  data: o,
                },
              });
          },
          after: function (r, s) {
            var o = {},
              i = Date.now() - r._time;
            (o.duration = {
              _custom: {
                type: 'duration',
                display: i + 'ms',
                tooltip: 'Action duration',
                value: i,
              },
            }),
              r.payload && (o.payload = r.payload),
              (o.state = s),
              n.addTimelineEvent({
                layerId: ts,
                event: {
                  time: Date.now(),
                  title: r.type,
                  groupId: r._id,
                  subtitle: 'end',
                  data: o,
                },
              });
          },
        });
    }
  );
}
var Jo = 8702998,
  Mf = 6710886,
  Uf = 16777215,
  Jl = { label: 'namespaced', textColor: Uf, backgroundColor: Mf };
function Xl(e) {
  return e && e !== 'root' ? e.split('/').slice(-2, -1)[0] : 'Root';
}
function Ql(e, t) {
  return {
    id: t || 'root',
    label: Xl(t),
    tags: e.namespaced ? [Jl] : [],
    children: Object.keys(e._children).map(function (n) {
      return Ql(e._children[n], t + n + '/');
    }),
  };
}
function Zl(e, t, n, r) {
  r.includes(n) &&
    e.push({
      id: r || 'root',
      label: r.endsWith('/') ? r.slice(0, r.length - 1) : r || 'Root',
      tags: t.namespaced ? [Jl] : [],
    }),
    Object.keys(t._children).forEach(function (s) {
      Zl(e, t._children[s], n, r + s + '/');
    });
}
function $f(e, t, n) {
  t = n === 'root' ? t : t[n];
  var r = Object.keys(t),
    s = {
      state: Object.keys(e.state).map(function (i) {
        return { key: i, editable: !0, value: e.state[i] };
      }),
    };
  if (r.length) {
    var o = Hf(t);
    s.getters = Object.keys(o).map(function (i) {
      return {
        key: i.endsWith('/') ? Xl(i) : i,
        editable: !1,
        value: vs(function () {
          return o[i];
        }),
      };
    });
  }
  return s;
}
function Hf(e) {
  var t = {};
  return (
    Object.keys(e).forEach(function (n) {
      var r = n.split('/');
      if (r.length > 1) {
        var s = t,
          o = r.pop();
        r.forEach(function (i) {
          s[i] ||
            (s[i] = {
              _custom: {
                value: {},
                display: i,
                tooltip: 'Module',
                abstract: !0,
              },
            }),
            (s = s[i]._custom.value);
        }),
          (s[o] = vs(function () {
            return e[n];
          }));
      } else
        t[n] = vs(function () {
          return e[n];
        });
    }),
    t
  );
}
function Vf(e, t) {
  var n = t.split('/').filter(function (r) {
    return r;
  });
  return n.reduce(
    function (r, s, o) {
      var i = r[s];
      if (!i)
        throw new Error('Missing module "' + s + '" for path "' + t + '".');
      return o === n.length - 1 ? i : i._children;
    },
    t === 'root' ? e : e.root._children
  );
}
function vs(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var tt = function (t, n) {
    (this.runtime = n),
      (this._children = Object.create(null)),
      (this._rawModule = t);
    var r = t.state;
    this.state = (typeof r == 'function' ? r() : r) || {};
  },
  zl = { namespaced: { configurable: !0 } };
zl.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};
tt.prototype.addChild = function (t, n) {
  this._children[t] = n;
};
tt.prototype.removeChild = function (t) {
  delete this._children[t];
};
tt.prototype.getChild = function (t) {
  return this._children[t];
};
tt.prototype.hasChild = function (t) {
  return t in this._children;
};
tt.prototype.update = function (t) {
  (this._rawModule.namespaced = t.namespaced),
    t.actions && (this._rawModule.actions = t.actions),
    t.mutations && (this._rawModule.mutations = t.mutations),
    t.getters && (this._rawModule.getters = t.getters);
};
tt.prototype.forEachChild = function (t) {
  gn(this._children, t);
};
tt.prototype.forEachGetter = function (t) {
  this._rawModule.getters && gn(this._rawModule.getters, t);
};
tt.prototype.forEachAction = function (t) {
  this._rawModule.actions && gn(this._rawModule.actions, t);
};
tt.prototype.forEachMutation = function (t) {
  this._rawModule.mutations && gn(this._rawModule.mutations, t);
};
Object.defineProperties(tt.prototype, zl);
var Xt = function (t) {
  this.register([], t, !1);
};
Xt.prototype.get = function (t) {
  return t.reduce(function (n, r) {
    return n.getChild(r);
  }, this.root);
};
Xt.prototype.getNamespace = function (t) {
  var n = this.root;
  return t.reduce(function (r, s) {
    return (n = n.getChild(s)), r + (n.namespaced ? s + '/' : '');
  }, '');
};
Xt.prototype.update = function (t) {
  ea([], this.root, t);
};
Xt.prototype.register = function (t, n, r) {
  var s = this;
  r === void 0 && (r = !0);
  var o = new tt(n, r);
  if (t.length === 0) this.root = o;
  else {
    var i = this.get(t.slice(0, -1));
    i.addChild(t[t.length - 1], o);
  }
  n.modules &&
    gn(n.modules, function (l, a) {
      s.register(t.concat(a), l, r);
    });
};
Xt.prototype.unregister = function (t) {
  var n = this.get(t.slice(0, -1)),
    r = t[t.length - 1],
    s = n.getChild(r);
  s && s.runtime && n.removeChild(r);
};
Xt.prototype.isRegistered = function (t) {
  var n = this.get(t.slice(0, -1)),
    r = t[t.length - 1];
  return n ? n.hasChild(r) : !1;
};
function ea(e, t, n) {
  if ((t.update(n), n.modules))
    for (var r in n.modules) {
      if (!t.getChild(r)) return;
      ea(e.concat(r), t.getChild(r), n.modules[r]);
    }
}
function jf(e) {
  return new je(e);
}
var je = function (t) {
    var n = this;
    t === void 0 && (t = {});
    var r = t.plugins;
    r === void 0 && (r = []);
    var s = t.strict;
    s === void 0 && (s = !1);
    var o = t.devtools;
    (this._committing = !1),
      (this._actions = Object.create(null)),
      (this._actionSubscribers = []),
      (this._mutations = Object.create(null)),
      (this._wrappedGetters = Object.create(null)),
      (this._modules = new Xt(t)),
      (this._modulesNamespaceMap = Object.create(null)),
      (this._subscribers = []),
      (this._makeLocalGettersCache = Object.create(null)),
      (this._scope = null),
      (this._devtools = o);
    var i = this,
      l = this,
      a = l.dispatch,
      f = l.commit;
    (this.dispatch = function (g, v) {
      return a.call(i, g, v);
    }),
      (this.commit = function (g, v, L) {
        return f.call(i, g, v, L);
      }),
      (this.strict = s);
    var d = this._modules.root.state;
    Ir(this, d, [], this._modules.root),
      to(this, d),
      r.forEach(function (h) {
        return h(n);
      });
  },
  ro = { state: { configurable: !0 } };
je.prototype.install = function (t, n) {
  t.provide(n || Gl, this), (t.config.globalProperties.$store = this);
  var r = this._devtools !== void 0 ? this._devtools : !1;
  r && Df(t, this);
};
ro.state.get = function () {
  return this._state.data;
};
ro.state.set = function (e) {};
je.prototype.commit = function (t, n, r) {
  var s = this,
    o = gr(t, n, r),
    i = o.type,
    l = o.payload,
    a = { type: i, payload: l },
    f = this._mutations[i];
  f &&
    (this._withCommit(function () {
      f.forEach(function (h) {
        h(l);
      });
    }),
    this._subscribers.slice().forEach(function (d) {
      return d(a, s.state);
    }));
};
je.prototype.dispatch = function (t, n) {
  var r = this,
    s = gr(t, n),
    o = s.type,
    i = s.payload,
    l = { type: o, payload: i },
    a = this._actions[o];
  if (a) {
    try {
      this._actionSubscribers
        .slice()
        .filter(function (d) {
          return d.before;
        })
        .forEach(function (d) {
          return d.before(l, r.state);
        });
    } catch {}
    var f =
      a.length > 1
        ? Promise.all(
            a.map(function (d) {
              return d(i);
            })
          )
        : a[0](i);
    return new Promise(function (d, h) {
      f.then(
        function (g) {
          try {
            r._actionSubscribers
              .filter(function (v) {
                return v.after;
              })
              .forEach(function (v) {
                return v.after(l, r.state);
              });
          } catch {}
          d(g);
        },
        function (g) {
          try {
            r._actionSubscribers
              .filter(function (v) {
                return v.error;
              })
              .forEach(function (v) {
                return v.error(l, r.state, g);
              });
          } catch {}
          h(g);
        }
      );
    });
  }
};
je.prototype.subscribe = function (t, n) {
  return Kl(t, this._subscribers, n);
};
je.prototype.subscribeAction = function (t, n) {
  var r = typeof t == 'function' ? { before: t } : t;
  return Kl(r, this._actionSubscribers, n);
};
je.prototype.watch = function (t, n, r) {
  var s = this;
  return Pt(
    function () {
      return t(s.state, s.getters);
    },
    n,
    Object.assign({}, r)
  );
};
je.prototype.replaceState = function (t) {
  var n = this;
  this._withCommit(function () {
    n._state.data = t;
  });
};
je.prototype.registerModule = function (t, n, r) {
  r === void 0 && (r = {}),
    typeof t == 'string' && (t = [t]),
    this._modules.register(t, n),
    Ir(this, this.state, t, this._modules.get(t), r.preserveState),
    to(this, this.state);
};
je.prototype.unregisterModule = function (t) {
  var n = this;
  typeof t == 'string' && (t = [t]),
    this._modules.unregister(t),
    this._withCommit(function () {
      var r = no(n.state, t.slice(0, -1));
      delete r[t[t.length - 1]];
    }),
    ql(this);
};
je.prototype.hasModule = function (t) {
  return typeof t == 'string' && (t = [t]), this._modules.isRegistered(t);
};
je.prototype.hotUpdate = function (t) {
  this._modules.update(t), ql(this, !0);
};
je.prototype._withCommit = function (t) {
  var n = this._committing;
  (this._committing = !0), t(), (this._committing = n);
};
Object.defineProperties(je.prototype, ro);
/*!
 * shared v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const Es = typeof window < 'u',
  Wf = typeof Symbol == 'function' && typeof Symbol.toStringTag == 'symbol',
  Qt = (e) => (Wf ? Symbol(e) : e),
  Bf = (e, t, n) => Gf({ l: e, k: t, s: n }),
  Gf = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
      .replace(/\u0027/g, '\\u0027'),
  ge = (e) => typeof e == 'number' && isFinite(e),
  Kf = (e) => oo(e) === '[object Date]',
  xt = (e) => oo(e) === '[object RegExp]',
  Pr = (e) => j(e) && Object.keys(e).length === 0;
function qf(e, t) {
  typeof console < 'u' &&
    (console.warn('[intlify] ' + e), t && console.warn(t.stack));
}
const be = Object.assign;
let Xo;
const In = () =>
  Xo ||
  (Xo =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {});
function Qo(e) {
  return e
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
const Yf = Object.prototype.hasOwnProperty;
function so(e, t) {
  return Yf.call(e, t);
}
const ie = Array.isArray,
  de = (e) => typeof e == 'function',
  M = (e) => typeof e == 'string',
  Y = (e) => typeof e == 'boolean',
  le = (e) => e !== null && typeof e == 'object',
  ta = Object.prototype.toString,
  oo = (e) => ta.call(e),
  j = (e) => oo(e) === '[object Object]',
  Jf = (e) =>
    e == null
      ? ''
      : ie(e) || (j(e) && e.toString === ta)
      ? JSON.stringify(e, null, 2)
      : String(e);
/*!
 * message-compiler v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const Z = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  __EXTEND_POINT__: 15,
};
function xr(e, t, n = {}) {
  const { domain: r, messages: s, args: o } = n,
    i = e,
    l = new SyntaxError(String(i));
  return (l.code = e), t && (l.location = t), (l.domain = r), l;
}
function Xf(e) {
  throw e;
}
function Qf(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ts(e, t, n) {
  return { start: e, end: t };
}
const vt = ' ',
  Zf = '\r',
  Pe = `
`,
  zf = '\u2028',
  ed = '\u2029';
function td(e) {
  const t = e;
  let n = 0,
    r = 1,
    s = 1,
    o = 0;
  const i = (D) => t[D] === Zf && t[D + 1] === Pe,
    l = (D) => t[D] === Pe,
    a = (D) => t[D] === ed,
    f = (D) => t[D] === zf,
    d = (D) => i(D) || l(D) || a(D) || f(D),
    h = () => n,
    g = () => r,
    v = () => s,
    L = () => o,
    N = (D) => (i(D) || a(D) || f(D) ? Pe : t[D]),
    R = () => N(n),
    _ = () => N(n + o);
  function C() {
    return (o = 0), d(n) && (r++, (s = 0)), i(n) && n++, n++, s++, t[n];
  }
  function w() {
    return i(n + o) && o++, o++, t[n + o];
  }
  function b() {
    (n = 0), (r = 1), (s = 1), (o = 0);
  }
  function T(D = 0) {
    o = D;
  }
  function k() {
    const D = n + o;
    for (; D !== n; ) C();
    o = 0;
  }
  return {
    index: h,
    line: g,
    column: v,
    peekOffset: L,
    charAt: N,
    currentChar: R,
    currentPeek: _,
    next: C,
    peek: w,
    reset: b,
    resetPeek: T,
    skipToPeek: k,
  };
}
const Nt = void 0,
  Zo = "'",
  nd = 'tokenizer';
function rd(e, t = {}) {
  const n = t.location !== !1,
    r = td(e),
    s = () => r.index(),
    o = () => Qf(r.line(), r.column(), r.index()),
    i = o(),
    l = s(),
    a = {
      currentType: 14,
      offset: l,
      startLoc: i,
      endLoc: i,
      lastType: 14,
      lastOffset: l,
      lastStartLoc: i,
      lastEndLoc: i,
      braceNest: 0,
      inLinked: !1,
      text: '',
    },
    f = () => a,
    { onError: d } = t;
  function h(c, u, p, ...y) {
    const O = f();
    if (((u.column += p), (u.offset += p), d)) {
      const P = Ts(O.startLoc, u),
        F = xr(c, P, { domain: nd, args: y });
      d(F);
    }
  }
  function g(c, u, p) {
    (c.endLoc = o()), (c.currentType = u);
    const y = { type: u };
    return (
      n && (y.loc = Ts(c.startLoc, c.endLoc)), p != null && (y.value = p), y
    );
  }
  const v = (c) => g(c, 14);
  function L(c, u) {
    return c.currentChar() === u
      ? (c.next(), u)
      : (h(Z.EXPECTED_TOKEN, o(), 0, u), '');
  }
  function N(c) {
    let u = '';
    for (; c.currentPeek() === vt || c.currentPeek() === Pe; )
      (u += c.currentPeek()), c.peek();
    return u;
  }
  function R(c) {
    const u = N(c);
    return c.skipToPeek(), u;
  }
  function _(c) {
    if (c === Nt) return !1;
    const u = c.charCodeAt(0);
    return (u >= 97 && u <= 122) || (u >= 65 && u <= 90) || u === 95;
  }
  function C(c) {
    if (c === Nt) return !1;
    const u = c.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function w(c, u) {
    const { currentType: p } = u;
    if (p !== 2) return !1;
    N(c);
    const y = _(c.currentPeek());
    return c.resetPeek(), y;
  }
  function b(c, u) {
    const { currentType: p } = u;
    if (p !== 2) return !1;
    N(c);
    const y = c.currentPeek() === '-' ? c.peek() : c.currentPeek(),
      O = C(y);
    return c.resetPeek(), O;
  }
  function T(c, u) {
    const { currentType: p } = u;
    if (p !== 2) return !1;
    N(c);
    const y = c.currentPeek() === Zo;
    return c.resetPeek(), y;
  }
  function k(c, u) {
    const { currentType: p } = u;
    if (p !== 8) return !1;
    N(c);
    const y = c.currentPeek() === '.';
    return c.resetPeek(), y;
  }
  function D(c, u) {
    const { currentType: p } = u;
    if (p !== 9) return !1;
    N(c);
    const y = _(c.currentPeek());
    return c.resetPeek(), y;
  }
  function J(c, u) {
    const { currentType: p } = u;
    if (!(p === 8 || p === 12)) return !1;
    N(c);
    const y = c.currentPeek() === ':';
    return c.resetPeek(), y;
  }
  function X(c, u) {
    const { currentType: p } = u;
    if (p !== 10) return !1;
    const y = () => {
        const P = c.currentPeek();
        return P === '{'
          ? _(c.peek())
          : P === '@' ||
            P === '%' ||
            P === '|' ||
            P === ':' ||
            P === '.' ||
            P === vt ||
            !P
          ? !1
          : P === Pe
          ? (c.peek(), y())
          : _(P);
      },
      O = y();
    return c.resetPeek(), O;
  }
  function ce(c) {
    N(c);
    const u = c.currentPeek() === '|';
    return c.resetPeek(), u;
  }
  function fe(c) {
    const u = N(c),
      p = c.currentPeek() === '%' && c.peek() === '{';
    return c.resetPeek(), { isModulo: p, hasSpace: u.length > 0 };
  }
  function Ne(c, u = !0) {
    const p = (O = !1, P = '', F = !1) => {
        const x = c.currentPeek();
        return x === '{'
          ? P === '%'
            ? !1
            : O
          : x === '@' || !x
          ? P === '%'
            ? !0
            : O
          : x === '%'
          ? (c.peek(), p(O, '%', !0))
          : x === '|'
          ? P === '%' || F
            ? !0
            : !(P === vt || P === Pe)
          : x === vt
          ? (c.peek(), p(!0, vt, F))
          : x === Pe
          ? (c.peek(), p(!0, Pe, F))
          : !0;
      },
      y = p();
    return u && c.resetPeek(), y;
  }
  function ye(c, u) {
    const p = c.currentChar();
    return p === Nt ? Nt : u(p) ? (c.next(), p) : null;
  }
  function rt(c) {
    return ye(c, (p) => {
      const y = p.charCodeAt(0);
      return (
        (y >= 97 && y <= 122) ||
        (y >= 65 && y <= 90) ||
        (y >= 48 && y <= 57) ||
        y === 95 ||
        y === 36
      );
    });
  }
  function wt(c) {
    return ye(c, (p) => {
      const y = p.charCodeAt(0);
      return y >= 48 && y <= 57;
    });
  }
  function se(c) {
    return ye(c, (p) => {
      const y = p.charCodeAt(0);
      return (
        (y >= 48 && y <= 57) || (y >= 65 && y <= 70) || (y >= 97 && y <= 102)
      );
    });
  }
  function q(c) {
    let u = '',
      p = '';
    for (; (u = wt(c)); ) p += u;
    return p;
  }
  function Q(c) {
    R(c);
    const u = c.currentChar();
    return u !== '%' && h(Z.EXPECTED_TOKEN, o(), 0, u), c.next(), '%';
  }
  function De(c) {
    let u = '';
    for (;;) {
      const p = c.currentChar();
      if (p === '{' || p === '}' || p === '@' || p === '|' || !p) break;
      if (p === '%')
        if (Ne(c)) (u += p), c.next();
        else break;
      else if (p === vt || p === Pe)
        if (Ne(c)) (u += p), c.next();
        else {
          if (ce(c)) break;
          (u += p), c.next();
        }
      else (u += p), c.next();
    }
    return u;
  }
  function st(c) {
    R(c);
    let u = '',
      p = '';
    for (; (u = rt(c)); ) p += u;
    return c.currentChar() === Nt && h(Z.UNTERMINATED_CLOSING_BRACE, o(), 0), p;
  }
  function We(c) {
    R(c);
    let u = '';
    return (
      c.currentChar() === '-' ? (c.next(), (u += `-${q(c)}`)) : (u += q(c)),
      c.currentChar() === Nt && h(Z.UNTERMINATED_CLOSING_BRACE, o(), 0),
      u
    );
  }
  function Se(c) {
    R(c), L(c, "'");
    let u = '',
      p = '';
    const y = (P) => P !== Zo && P !== Pe;
    for (; (u = ye(c, y)); ) u === '\\' ? (p += Mt(c)) : (p += u);
    const O = c.currentChar();
    return O === Pe || O === Nt
      ? (h(Z.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0),
        O === Pe && (c.next(), L(c, "'")),
        p)
      : (L(c, "'"), p);
  }
  function Mt(c) {
    const u = c.currentChar();
    switch (u) {
      case '\\':
      case "'":
        return c.next(), `\\${u}`;
      case 'u':
        return Ct(c, u, 4);
      case 'U':
        return Ct(c, u, 6);
      default:
        return h(Z.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, u), '';
    }
  }
  function Ct(c, u, p) {
    L(c, u);
    let y = '';
    for (let O = 0; O < p; O++) {
      const P = se(c);
      if (!P) {
        h(
          Z.INVALID_UNICODE_ESCAPE_SEQUENCE,
          o(),
          0,
          `\\${u}${y}${c.currentChar()}`
        );
        break;
      }
      y += P;
    }
    return `\\${u}${y}`;
  }
  function Ut(c) {
    R(c);
    let u = '',
      p = '';
    const y = (O) => O !== '{' && O !== '}' && O !== vt && O !== Pe;
    for (; (u = ye(c, y)); ) p += u;
    return p;
  }
  function Ze(c) {
    let u = '',
      p = '';
    for (; (u = rt(c)); ) p += u;
    return p;
  }
  function ot(c) {
    const u = (p = !1, y) => {
      const O = c.currentChar();
      return O === '{' || O === '%' || O === '@' || O === '|' || !O || O === vt
        ? y
        : O === Pe
        ? ((y += O), c.next(), u(p, y))
        : ((y += O), c.next(), u(!0, y));
    };
    return u(!1, '');
  }
  function ze(c) {
    R(c);
    const u = L(c, '|');
    return R(c), u;
  }
  function it(c, u) {
    let p = null;
    switch (c.currentChar()) {
      case '{':
        return (
          u.braceNest >= 1 && h(Z.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0),
          c.next(),
          (p = g(u, 2, '{')),
          R(c),
          u.braceNest++,
          p
        );
      case '}':
        return (
          u.braceNest > 0 &&
            u.currentType === 2 &&
            h(Z.EMPTY_PLACEHOLDER, o(), 0),
          c.next(),
          (p = g(u, 3, '}')),
          u.braceNest--,
          u.braceNest > 0 && R(c),
          u.inLinked && u.braceNest === 0 && (u.inLinked = !1),
          p
        );
      case '@':
        return (
          u.braceNest > 0 && h(Z.UNTERMINATED_CLOSING_BRACE, o(), 0),
          (p = Me(c, u) || v(u)),
          (u.braceNest = 0),
          p
        );
      default:
        let O = !0,
          P = !0,
          F = !0;
        if (ce(c))
          return (
            u.braceNest > 0 && h(Z.UNTERMINATED_CLOSING_BRACE, o(), 0),
            (p = g(u, 1, ze(c))),
            (u.braceNest = 0),
            (u.inLinked = !1),
            p
          );
        if (
          u.braceNest > 0 &&
          (u.currentType === 5 || u.currentType === 6 || u.currentType === 7)
        )
          return (
            h(Z.UNTERMINATED_CLOSING_BRACE, o(), 0), (u.braceNest = 0), Ot(c, u)
          );
        if ((O = w(c, u))) return (p = g(u, 5, st(c))), R(c), p;
        if ((P = b(c, u))) return (p = g(u, 6, We(c))), R(c), p;
        if ((F = T(c, u))) return (p = g(u, 7, Se(c))), R(c), p;
        if (!O && !P && !F)
          return (
            (p = g(u, 13, Ut(c))),
            h(Z.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, p.value),
            R(c),
            p
          );
        break;
    }
    return p;
  }
  function Me(c, u) {
    const { currentType: p } = u;
    let y = null;
    const O = c.currentChar();
    switch (
      ((p === 8 || p === 9 || p === 12 || p === 10) &&
        (O === Pe || O === vt) &&
        h(Z.INVALID_LINKED_FORMAT, o(), 0),
      O)
    ) {
      case '@':
        return c.next(), (y = g(u, 8, '@')), (u.inLinked = !0), y;
      case '.':
        return R(c), c.next(), g(u, 9, '.');
      case ':':
        return R(c), c.next(), g(u, 10, ':');
      default:
        return ce(c)
          ? ((y = g(u, 1, ze(c))), (u.braceNest = 0), (u.inLinked = !1), y)
          : k(c, u) || J(c, u)
          ? (R(c), Me(c, u))
          : D(c, u)
          ? (R(c), g(u, 12, Ze(c)))
          : X(c, u)
          ? (R(c), O === '{' ? it(c, u) || y : g(u, 11, ot(c)))
          : (p === 8 && h(Z.INVALID_LINKED_FORMAT, o(), 0),
            (u.braceNest = 0),
            (u.inLinked = !1),
            Ot(c, u));
    }
  }
  function Ot(c, u) {
    let p = { type: 14 };
    if (u.braceNest > 0) return it(c, u) || v(u);
    if (u.inLinked) return Me(c, u) || v(u);
    switch (c.currentChar()) {
      case '{':
        return it(c, u) || v(u);
      case '}':
        return h(Z.UNBALANCED_CLOSING_BRACE, o(), 0), c.next(), g(u, 3, '}');
      case '@':
        return Me(c, u) || v(u);
      default:
        if (ce(c))
          return (p = g(u, 1, ze(c))), (u.braceNest = 0), (u.inLinked = !1), p;
        const { isModulo: O, hasSpace: P } = fe(c);
        if (O) return P ? g(u, 0, De(c)) : g(u, 4, Q(c));
        if (Ne(c)) return g(u, 0, De(c));
        break;
    }
    return p;
  }
  function m() {
    const { currentType: c, offset: u, startLoc: p, endLoc: y } = a;
    return (
      (a.lastType = c),
      (a.lastOffset = u),
      (a.lastStartLoc = p),
      (a.lastEndLoc = y),
      (a.offset = s()),
      (a.startLoc = o()),
      r.currentChar() === Nt ? g(a, 14) : Ot(r, a)
    );
  }
  return { nextToken: m, currentOffset: s, currentPosition: o, context: f };
}
const sd = 'parser',
  od = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function id(e, t, n) {
  switch (e) {
    case '\\\\':
      return '\\';
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : '�';
    }
  }
}
function ld(e = {}) {
  const t = e.location !== !1,
    { onError: n } = e;
  function r(_, C, w, b, ...T) {
    const k = _.currentPosition();
    if (((k.offset += b), (k.column += b), n)) {
      const D = Ts(w, k),
        J = xr(C, D, { domain: sd, args: T });
      n(J);
    }
  }
  function s(_, C, w) {
    const b = { type: _, start: C, end: C };
    return t && (b.loc = { start: w, end: w }), b;
  }
  function o(_, C, w, b) {
    (_.end = C), t && _.loc && (_.loc.end = w);
  }
  function i(_, C) {
    const w = _.context(),
      b = s(3, w.offset, w.startLoc);
    return (b.value = C), o(b, _.currentOffset(), _.currentPosition()), b;
  }
  function l(_, C) {
    const w = _.context(),
      { lastOffset: b, lastStartLoc: T } = w,
      k = s(5, b, T);
    return (
      (k.index = parseInt(C, 10)),
      _.nextToken(),
      o(k, _.currentOffset(), _.currentPosition()),
      k
    );
  }
  function a(_, C) {
    const w = _.context(),
      { lastOffset: b, lastStartLoc: T } = w,
      k = s(4, b, T);
    return (
      (k.key = C),
      _.nextToken(),
      o(k, _.currentOffset(), _.currentPosition()),
      k
    );
  }
  function f(_, C) {
    const w = _.context(),
      { lastOffset: b, lastStartLoc: T } = w,
      k = s(9, b, T);
    return (
      (k.value = C.replace(od, id)),
      _.nextToken(),
      o(k, _.currentOffset(), _.currentPosition()),
      k
    );
  }
  function d(_) {
    const C = _.nextToken(),
      w = _.context(),
      { lastOffset: b, lastStartLoc: T } = w,
      k = s(8, b, T);
    return C.type !== 12
      ? (r(_, Z.UNEXPECTED_EMPTY_LINKED_MODIFIER, w.lastStartLoc, 0),
        (k.value = ''),
        o(k, b, T),
        { nextConsumeToken: C, node: k })
      : (C.value == null &&
          r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, ft(C)),
        (k.value = C.value || ''),
        o(k, _.currentOffset(), _.currentPosition()),
        { node: k });
  }
  function h(_, C) {
    const w = _.context(),
      b = s(7, w.offset, w.startLoc);
    return (b.value = C), o(b, _.currentOffset(), _.currentPosition()), b;
  }
  function g(_) {
    const C = _.context(),
      w = s(6, C.offset, C.startLoc);
    let b = _.nextToken();
    if (b.type === 9) {
      const T = d(_);
      (w.modifier = T.node), (b = T.nextConsumeToken || _.nextToken());
    }
    switch (
      (b.type !== 10 &&
        r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, ft(b)),
      (b = _.nextToken()),
      b.type === 2 && (b = _.nextToken()),
      b.type)
    ) {
      case 11:
        b.value == null &&
          r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, ft(b)),
          (w.key = h(_, b.value || ''));
        break;
      case 5:
        b.value == null &&
          r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, ft(b)),
          (w.key = a(_, b.value || ''));
        break;
      case 6:
        b.value == null &&
          r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, ft(b)),
          (w.key = l(_, b.value || ''));
        break;
      case 7:
        b.value == null &&
          r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, ft(b)),
          (w.key = f(_, b.value || ''));
        break;
      default:
        r(_, Z.UNEXPECTED_EMPTY_LINKED_KEY, C.lastStartLoc, 0);
        const T = _.context(),
          k = s(7, T.offset, T.startLoc);
        return (
          (k.value = ''),
          o(k, T.offset, T.startLoc),
          (w.key = k),
          o(w, T.offset, T.startLoc),
          { nextConsumeToken: b, node: w }
        );
    }
    return o(w, _.currentOffset(), _.currentPosition()), { node: w };
  }
  function v(_) {
    const C = _.context(),
      w = C.currentType === 1 ? _.currentOffset() : C.offset,
      b = C.currentType === 1 ? C.endLoc : C.startLoc,
      T = s(2, w, b);
    T.items = [];
    let k = null;
    do {
      const X = k || _.nextToken();
      switch (((k = null), X.type)) {
        case 0:
          X.value == null &&
            r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, ft(X)),
            T.items.push(i(_, X.value || ''));
          break;
        case 6:
          X.value == null &&
            r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, ft(X)),
            T.items.push(l(_, X.value || ''));
          break;
        case 5:
          X.value == null &&
            r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, ft(X)),
            T.items.push(a(_, X.value || ''));
          break;
        case 7:
          X.value == null &&
            r(_, Z.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, ft(X)),
            T.items.push(f(_, X.value || ''));
          break;
        case 8:
          const ce = g(_);
          T.items.push(ce.node), (k = ce.nextConsumeToken || null);
          break;
      }
    } while (C.currentType !== 14 && C.currentType !== 1);
    const D = C.currentType === 1 ? C.lastOffset : _.currentOffset(),
      J = C.currentType === 1 ? C.lastEndLoc : _.currentPosition();
    return o(T, D, J), T;
  }
  function L(_, C, w, b) {
    const T = _.context();
    let k = b.items.length === 0;
    const D = s(1, C, w);
    (D.cases = []), D.cases.push(b);
    do {
      const J = v(_);
      k || (k = J.items.length === 0), D.cases.push(J);
    } while (T.currentType !== 14);
    return (
      k && r(_, Z.MUST_HAVE_MESSAGES_IN_PLURAL, w, 0),
      o(D, _.currentOffset(), _.currentPosition()),
      D
    );
  }
  function N(_) {
    const C = _.context(),
      { offset: w, startLoc: b } = C,
      T = v(_);
    return C.currentType === 14 ? T : L(_, w, b, T);
  }
  function R(_) {
    const C = rd(_, be({}, e)),
      w = C.context(),
      b = s(0, w.offset, w.startLoc);
    return (
      t && b.loc && (b.loc.source = _),
      (b.body = N(C)),
      w.currentType !== 14 &&
        r(
          C,
          Z.UNEXPECTED_LEXICAL_ANALYSIS,
          w.lastStartLoc,
          0,
          _[w.offset] || ''
        ),
      o(b, C.currentOffset(), C.currentPosition()),
      b
    );
  }
  return { parse: R };
}
function ft(e) {
  if (e.type === 14) return 'EOF';
  const t = (e.value || '').replace(/\r?\n/gu, '\\n');
  return t.length > 10 ? t.slice(0, 9) + '…' : t;
}
function ad(e, t = {}) {
  const n = { ast: e, helpers: new Set() };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function zo(e, t) {
  for (let n = 0; n < e.length; n++) io(e[n], t);
}
function io(e, t) {
  switch (e.type) {
    case 1:
      zo(e.cases, t), t.helper('plural');
      break;
    case 2:
      zo(e.items, t);
      break;
    case 6:
      io(e.key, t), t.helper('linked'), t.helper('type');
      break;
    case 5:
      t.helper('interpolate'), t.helper('list');
      break;
    case 4:
      t.helper('interpolate'), t.helper('named');
      break;
  }
}
function cd(e, t = {}) {
  const n = ad(e);
  n.helper('normalize'), e.body && io(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function ud(e, t) {
  const { filename: n, breakLineCode: r, needIndent: s } = t,
    o = {
      source: e.loc.source,
      filename: n,
      code: '',
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: r,
      needIndent: s,
      indentLevel: 0,
    },
    i = () => o;
  function l(L, N) {
    o.code += L;
  }
  function a(L, N = !0) {
    const R = N ? r : '';
    l(s ? R + '  '.repeat(L) : R);
  }
  function f(L = !0) {
    const N = ++o.indentLevel;
    L && a(N);
  }
  function d(L = !0) {
    const N = --o.indentLevel;
    L && a(N);
  }
  function h() {
    a(o.indentLevel);
  }
  return {
    context: i,
    push: l,
    indent: f,
    deindent: d,
    newline: h,
    helper: (L) => `_${L}`,
    needIndent: () => o.needIndent,
  };
}
function fd(e, t) {
  const { helper: n } = e;
  e.push(`${n('linked')}(`),
    pn(e, t.key),
    t.modifier
      ? (e.push(', '), pn(e, t.modifier), e.push(', _type'))
      : e.push(', undefined, _type'),
    e.push(')');
}
function dd(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n('normalize')}([`), e.indent(r());
  const s = t.items.length;
  for (let o = 0; o < s && (pn(e, t.items[o]), o !== s - 1); o++) e.push(', ');
  e.deindent(r()), e.push('])');
}
function hd(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n('plural')}([`), e.indent(r());
    const s = t.cases.length;
    for (let o = 0; o < s && (pn(e, t.cases[o]), o !== s - 1); o++)
      e.push(', ');
    e.deindent(r()), e.push('])');
  }
}
function md(e, t) {
  t.body ? pn(e, t.body) : e.push('null');
}
function pn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      md(e, t);
      break;
    case 1:
      hd(e, t);
      break;
    case 2:
      dd(e, t);
      break;
    case 6:
      fd(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n('interpolate')}(${n('list')}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n('interpolate')}(${n('named')}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
  }
}
const pd = (e, t = {}) => {
  const n = M(t.mode) ? t.mode : 'normal',
    r = M(t.filename) ? t.filename : 'message.intl';
  t.sourceMap;
  const s =
      t.breakLineCode != null
        ? t.breakLineCode
        : n === 'arrow'
        ? ';'
        : `
`,
    o = t.needIndent ? t.needIndent : n !== 'arrow',
    i = e.helpers || [],
    l = ud(e, { filename: r, breakLineCode: s, needIndent: o });
  l.push(n === 'normal' ? 'function __msg__ (ctx) {' : '(ctx) => {'),
    l.indent(o),
    i.length > 0 &&
      (l.push(`const { ${i.map((d) => `${d}: _${d}`).join(', ')} } = ctx`),
      l.newline()),
    l.push('return '),
    pn(l, e),
    l.deindent(o),
    l.push('}');
  const { code: a, map: f } = l.context();
  return { ast: e, code: a, map: f ? f.toJSON() : void 0 };
};
function gd(e, t = {}) {
  const n = be({}, t),
    s = ld(n).parse(e);
  return cd(s, n), pd(s, n);
}
/*!
 * devtools-if v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const na = {
  I18nInit: 'i18n:init',
  FunctionTranslate: 'function:translate',
};
/*!
 * core-base v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const Dt = [];
Dt[0] = { w: [0], i: [3, 0], '[': [4], o: [7] };
Dt[1] = { w: [1], '.': [2], '[': [4], o: [7] };
Dt[2] = { w: [2], i: [3, 0], 0: [3, 0] };
Dt[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  '.': [2, 1],
  '[': [4, 1],
  o: [7, 1],
};
Dt[4] = { "'": [5, 0], '"': [6, 0], '[': [4, 2], ']': [1, 3], o: 8, l: [4, 0] };
Dt[5] = { "'": [4, 0], o: 8, l: [5, 0] };
Dt[6] = { '"': [4, 0], o: 8, l: [6, 0] };
const _d = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function bd(e) {
  return _d.test(e);
}
function yd(e) {
  const t = e.charCodeAt(0),
    n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function vd(e) {
  if (e == null) return 'o';
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return 'i';
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return 'w';
  }
  return 'i';
}
function Ed(e) {
  const t = e.trim();
  return e.charAt(0) === '0' && isNaN(parseInt(e))
    ? !1
    : bd(t)
    ? yd(t)
    : '*' + t;
}
function Td(e) {
  const t = [];
  let n = -1,
    r = 0,
    s = 0,
    o,
    i,
    l,
    a,
    f,
    d,
    h;
  const g = [];
  (g[0] = () => {
    i === void 0 ? (i = l) : (i += l);
  }),
    (g[1] = () => {
      i !== void 0 && (t.push(i), (i = void 0));
    }),
    (g[2] = () => {
      g[0](), s++;
    }),
    (g[3] = () => {
      if (s > 0) s--, (r = 4), g[0]();
      else {
        if (((s = 0), i === void 0 || ((i = Ed(i)), i === !1))) return !1;
        g[1]();
      }
    });
  function v() {
    const L = e[n + 1];
    if ((r === 5 && L === "'") || (r === 6 && L === '"'))
      return n++, (l = '\\' + L), g[0](), !0;
  }
  for (; r !== null; )
    if ((n++, (o = e[n]), !(o === '\\' && v()))) {
      if (
        ((a = vd(o)),
        (h = Dt[r]),
        (f = h[a] || h.l || 8),
        f === 8 ||
          ((r = f[0]),
          f[1] !== void 0 && ((d = g[f[1]]), d && ((l = o), d() === !1))))
      )
        return;
      if (r === 7) return t;
    }
}
const ei = new Map();
function Sd(e, t) {
  return le(e) ? e[t] : null;
}
function Ld(e, t) {
  if (!le(e)) return null;
  let n = ei.get(t);
  if ((n || ((n = Td(t)), n && ei.set(t, n)), !n)) return null;
  const r = n.length;
  let s = e,
    o = 0;
  for (; o < r; ) {
    const i = s[n[o]];
    if (i === void 0) return null;
    (s = i), o++;
  }
  return s;
}
const wd = (e) => e,
  Cd = (e) => '',
  Od = 'text',
  Nd = (e) => (e.length === 0 ? '' : e.join('')),
  Ad = Jf;
function ti(e, t) {
  return (
    (e = Math.abs(e)),
    t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  );
}
function Rd(e) {
  const t = ge(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ge(e.named.count) || ge(e.named.n))
    ? ge(e.named.count)
      ? e.named.count
      : ge(e.named.n)
      ? e.named.n
      : t
    : t;
}
function Id(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Pd(e = {}) {
  const t = e.locale,
    n = Rd(e),
    r =
      le(e.pluralRules) && M(t) && de(e.pluralRules[t]) ? e.pluralRules[t] : ti,
    s = le(e.pluralRules) && M(t) && de(e.pluralRules[t]) ? ti : void 0,
    o = (_) => _[r(n, _.length, s)],
    i = e.list || [],
    l = (_) => i[_],
    a = e.named || {};
  ge(e.pluralIndex) && Id(n, a);
  const f = (_) => a[_];
  function d(_) {
    const C = de(e.messages)
      ? e.messages(_)
      : le(e.messages)
      ? e.messages[_]
      : !1;
    return C || (e.parent ? e.parent.message(_) : Cd);
  }
  const h = (_) => (e.modifiers ? e.modifiers[_] : wd),
    g =
      j(e.processor) && de(e.processor.normalize) ? e.processor.normalize : Nd,
    v =
      j(e.processor) && de(e.processor.interpolate)
        ? e.processor.interpolate
        : Ad,
    L = j(e.processor) && M(e.processor.type) ? e.processor.type : Od,
    R = {
      list: l,
      named: f,
      plural: o,
      linked: (_, ...C) => {
        const [w, b] = C;
        let T = 'text',
          k = '';
        C.length === 1
          ? le(w)
            ? ((k = w.modifier || k), (T = w.type || T))
            : M(w) && (k = w || k)
          : C.length === 2 && (M(w) && (k = w || k), M(b) && (T = b || T));
        let D = d(_)(R);
        return T === 'vnode' && ie(D) && k && (D = D[0]), k ? h(k)(D, T) : D;
      },
      message: d,
      type: L,
      interpolate: v,
      normalize: g,
    };
  return R;
}
let $n = null;
function xd(e) {
  $n = e;
}
function Fd(e, t, n) {
  $n &&
    $n.emit(na.I18nInit, {
      timestamp: Date.now(),
      i18n: e,
      version: t,
      meta: n,
    });
}
const kd = Dd(na.FunctionTranslate);
function Dd(e) {
  return (t) => $n && $n.emit(e, t);
}
function Md(e, t, n) {
  return [
    ...new Set([n, ...(ie(t) ? t : le(t) ? Object.keys(t) : M(t) ? [t] : [n])]),
  ];
}
function ra(e, t, n) {
  const r = M(n) ? n : Gn,
    s = e;
  s.__localeChainCache || (s.__localeChainCache = new Map());
  let o = s.__localeChainCache.get(r);
  if (!o) {
    o = [];
    let i = [n];
    for (; ie(i); ) i = ni(o, i, t);
    const l = ie(t) || !j(t) ? t : t.default ? t.default : null;
    (i = M(l) ? [l] : l), ie(i) && ni(o, i, !1), s.__localeChainCache.set(r, o);
  }
  return o;
}
function ni(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && Y(r); s++) {
    const o = t[s];
    M(o) && (r = Ud(e, t[s], n));
  }
  return r;
}
function Ud(e, t, n) {
  let r;
  const s = t.split('-');
  do {
    const o = s.join('-');
    (r = $d(e, o, n)), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function $d(e, t, n) {
  let r = !1;
  if (!e.includes(t) && ((r = !0), t)) {
    r = t[t.length - 1] !== '!';
    const s = t.replace(/!/g, '');
    e.push(s), (ie(n) || j(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const Hd = '9.2.2',
  Fr = -1,
  Gn = 'en-US',
  ri = '',
  si = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Vd() {
  return {
    upper: (e, t) =>
      t === 'text' && M(e)
        ? e.toUpperCase()
        : t === 'vnode' && le(e) && '__v_isVNode' in e
        ? e.children.toUpperCase()
        : e,
    lower: (e, t) =>
      t === 'text' && M(e)
        ? e.toLowerCase()
        : t === 'vnode' && le(e) && '__v_isVNode' in e
        ? e.children.toLowerCase()
        : e,
    capitalize: (e, t) =>
      t === 'text' && M(e)
        ? si(e)
        : t === 'vnode' && le(e) && '__v_isVNode' in e
        ? si(e.children)
        : e,
  };
}
let sa;
function jd(e) {
  sa = e;
}
let oa;
function Wd(e) {
  oa = e;
}
let ia;
function Bd(e) {
  ia = e;
}
let la = null;
const oi = (e) => {
    la = e;
  },
  Gd = () => la;
let aa = null;
const ii = (e) => {
    aa = e;
  },
  Kd = () => aa;
let li = 0;
function qd(e = {}) {
  const t = M(e.version) ? e.version : Hd,
    n = M(e.locale) ? e.locale : Gn,
    r =
      ie(e.fallbackLocale) ||
      j(e.fallbackLocale) ||
      M(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : n,
    s = j(e.messages) ? e.messages : { [n]: {} },
    o = j(e.datetimeFormats) ? e.datetimeFormats : { [n]: {} },
    i = j(e.numberFormats) ? e.numberFormats : { [n]: {} },
    l = be({}, e.modifiers || {}, Vd()),
    a = e.pluralRules || {},
    f = de(e.missing) ? e.missing : null,
    d = Y(e.missingWarn) || xt(e.missingWarn) ? e.missingWarn : !0,
    h = Y(e.fallbackWarn) || xt(e.fallbackWarn) ? e.fallbackWarn : !0,
    g = !!e.fallbackFormat,
    v = !!e.unresolving,
    L = de(e.postTranslation) ? e.postTranslation : null,
    N = j(e.processor) ? e.processor : null,
    R = Y(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    _ = !!e.escapeParameter,
    C = de(e.messageCompiler) ? e.messageCompiler : sa,
    w = de(e.messageResolver) ? e.messageResolver : oa || Sd,
    b = de(e.localeFallbacker) ? e.localeFallbacker : ia || Md,
    T = le(e.fallbackContext) ? e.fallbackContext : void 0,
    k = de(e.onWarn) ? e.onWarn : qf,
    D = e,
    J = le(D.__datetimeFormatters) ? D.__datetimeFormatters : new Map(),
    X = le(D.__numberFormatters) ? D.__numberFormatters : new Map(),
    ce = le(D.__meta) ? D.__meta : {};
  li++;
  const fe = {
    version: t,
    cid: li,
    locale: n,
    fallbackLocale: r,
    messages: s,
    modifiers: l,
    pluralRules: a,
    missing: f,
    missingWarn: d,
    fallbackWarn: h,
    fallbackFormat: g,
    unresolving: v,
    postTranslation: L,
    processor: N,
    warnHtmlMessage: R,
    escapeParameter: _,
    messageCompiler: C,
    messageResolver: w,
    localeFallbacker: b,
    fallbackContext: T,
    onWarn: k,
    __meta: ce,
  };
  return (
    (fe.datetimeFormats = o),
    (fe.numberFormats = i),
    (fe.__datetimeFormatters = J),
    (fe.__numberFormatters = X),
    __INTLIFY_PROD_DEVTOOLS__ && Fd(fe, t, ce),
    fe
  );
}
function lo(e, t, n, r, s) {
  const { missing: o, onWarn: i } = e;
  if (o !== null) {
    const l = o(e, n, t, s);
    return M(l) ? l : t;
  } else return t;
}
function Tn(e, t, n) {
  const r = e;
  (r.__localeChainCache = new Map()), e.localeFallbacker(e, n, t);
}
const Yd = (e) => e;
let ai = Object.create(null);
function Jd(e, t = {}) {
  {
    const r = (t.onCacheKey || Yd)(e),
      s = ai[r];
    if (s) return s;
    let o = !1;
    const i = t.onError || Xf;
    t.onError = (f) => {
      (o = !0), i(f);
    };
    const { code: l } = gd(e, t),
      a = new Function(`return ${l}`)();
    return o ? a : (ai[r] = a);
  }
}
let ca = Z.__EXTEND_POINT__;
const ns = () => ++ca,
  rn = {
    INVALID_ARGUMENT: ca,
    INVALID_DATE_ARGUMENT: ns(),
    INVALID_ISO_DATE_ARGUMENT: ns(),
    __EXTEND_POINT__: ns(),
  };
function sn(e) {
  return xr(e, null, void 0);
}
const ci = () => '',
  pt = (e) => de(e);
function ui(e, ...t) {
  const {
      fallbackFormat: n,
      postTranslation: r,
      unresolving: s,
      messageCompiler: o,
      fallbackLocale: i,
      messages: l,
    } = e,
    [a, f] = Ss(...t),
    d = Y(f.missingWarn) ? f.missingWarn : e.missingWarn,
    h = Y(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn,
    g = Y(f.escapeParameter) ? f.escapeParameter : e.escapeParameter,
    v = !!f.resolvedMessage,
    L =
      M(f.default) || Y(f.default)
        ? Y(f.default)
          ? o
            ? a
            : () => a
          : f.default
        : n
        ? o
          ? a
          : () => a
        : '',
    N = n || L !== '',
    R = M(f.locale) ? f.locale : e.locale;
  g && Xd(f);
  let [_, C, w] = v ? [a, R, l[R] || {}] : ua(e, a, R, i, h, d),
    b = _,
    T = a;
  if (
    (!v && !(M(b) || pt(b)) && N && ((b = L), (T = b)),
    !v && (!(M(b) || pt(b)) || !M(C)))
  )
    return s ? Fr : a;
  let k = !1;
  const D = () => {
      k = !0;
    },
    J = pt(b) ? b : fa(e, a, C, b, T, D);
  if (k) return b;
  const X = zd(e, C, w, f),
    ce = Pd(X),
    fe = Qd(e, J, ce),
    Ne = r ? r(fe, a) : fe;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const ye = {
      timestamp: Date.now(),
      key: M(a) ? a : pt(b) ? b.key : '',
      locale: C || (pt(b) ? b.locale : ''),
      format: M(b) ? b : pt(b) ? b.source : '',
      message: Ne,
    };
    (ye.meta = be({}, e.__meta, Gd() || {})), kd(ye);
  }
  return Ne;
}
function Xd(e) {
  ie(e.list)
    ? (e.list = e.list.map((t) => (M(t) ? Qo(t) : t)))
    : le(e.named) &&
      Object.keys(e.named).forEach((t) => {
        M(e.named[t]) && (e.named[t] = Qo(e.named[t]));
      });
}
function ua(e, t, n, r, s, o) {
  const { messages: i, onWarn: l, messageResolver: a, localeFallbacker: f } = e,
    d = f(e, r, n);
  let h = {},
    g,
    v = null;
  const L = 'translate';
  for (
    let N = 0;
    N < d.length &&
    ((g = d[N]),
    (h = i[g] || {}),
    (v = a(h, t)) === null && (v = h[t]),
    !(M(v) || de(v)));
    N++
  ) {
    const R = lo(e, t, g, o, L);
    R !== t && (v = R);
  }
  return [v, g, h];
}
function fa(e, t, n, r, s, o) {
  const { messageCompiler: i, warnHtmlMessage: l } = e;
  if (pt(r)) {
    const f = r;
    return (f.locale = f.locale || n), (f.key = f.key || t), f;
  }
  if (i == null) {
    const f = () => r;
    return (f.locale = n), (f.key = t), f;
  }
  const a = i(r, Zd(e, n, s, r, l, o));
  return (a.locale = n), (a.key = t), (a.source = r), a;
}
function Qd(e, t, n) {
  return t(n);
}
function Ss(...e) {
  const [t, n, r] = e,
    s = {};
  if (!M(t) && !ge(t) && !pt(t)) throw sn(rn.INVALID_ARGUMENT);
  const o = ge(t) ? String(t) : (pt(t), t);
  return (
    ge(n)
      ? (s.plural = n)
      : M(n)
      ? (s.default = n)
      : j(n) && !Pr(n)
      ? (s.named = n)
      : ie(n) && (s.list = n),
    ge(r) ? (s.plural = r) : M(r) ? (s.default = r) : j(r) && be(s, r),
    [o, s]
  );
}
function Zd(e, t, n, r, s, o) {
  return {
    warnHtmlMessage: s,
    onError: (i) => {
      throw (o && o(i), i);
    },
    onCacheKey: (i) => Bf(t, n, i),
  };
}
function zd(e, t, n, r) {
  const {
      modifiers: s,
      pluralRules: o,
      messageResolver: i,
      fallbackLocale: l,
      fallbackWarn: a,
      missingWarn: f,
      fallbackContext: d,
    } = e,
    g = {
      locale: t,
      modifiers: s,
      pluralRules: o,
      messages: (v) => {
        let L = i(n, v);
        if (L == null && d) {
          const [, , N] = ua(d, v, t, l, a, f);
          L = i(N, v);
        }
        if (M(L)) {
          let N = !1;
          const _ = fa(e, v, t, L, v, () => {
            N = !0;
          });
          return N ? ci : _;
        } else return pt(L) ? L : ci;
      },
    };
  return (
    e.processor && (g.processor = e.processor),
    r.list && (g.list = r.list),
    r.named && (g.named = r.named),
    ge(r.plural) && (g.pluralIndex = r.plural),
    g
  );
}
function fi(e, ...t) {
  const {
      datetimeFormats: n,
      unresolving: r,
      fallbackLocale: s,
      onWarn: o,
      localeFallbacker: i,
    } = e,
    { __datetimeFormatters: l } = e,
    [a, f, d, h] = Ls(...t),
    g = Y(d.missingWarn) ? d.missingWarn : e.missingWarn;
  Y(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const v = !!d.part,
    L = M(d.locale) ? d.locale : e.locale,
    N = i(e, s, L);
  if (!M(a) || a === '') return new Intl.DateTimeFormat(L, h).format(f);
  let R = {},
    _,
    C = null;
  const w = 'datetime format';
  for (
    let k = 0;
    k < N.length && ((_ = N[k]), (R = n[_] || {}), (C = R[a]), !j(C));
    k++
  )
    lo(e, a, _, g, w);
  if (!j(C) || !M(_)) return r ? Fr : a;
  let b = `${_}__${a}`;
  Pr(h) || (b = `${b}__${JSON.stringify(h)}`);
  let T = l.get(b);
  return (
    T || ((T = new Intl.DateTimeFormat(_, be({}, C, h))), l.set(b, T)),
    v ? T.formatToParts(f) : T.format(f)
  );
}
const da = [
  'localeMatcher',
  'weekday',
  'era',
  'year',
  'month',
  'day',
  'hour',
  'minute',
  'second',
  'timeZoneName',
  'formatMatcher',
  'hour12',
  'timeZone',
  'dateStyle',
  'timeStyle',
  'calendar',
  'dayPeriod',
  'numberingSystem',
  'hourCycle',
  'fractionalSecondDigits',
];
function Ls(...e) {
  const [t, n, r, s] = e,
    o = {};
  let i = {},
    l;
  if (M(t)) {
    const a = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!a) throw sn(rn.INVALID_ISO_DATE_ARGUMENT);
    const f = a[3]
      ? a[3].trim().startsWith('T')
        ? `${a[1].trim()}${a[3].trim()}`
        : `${a[1].trim()}T${a[3].trim()}`
      : a[1].trim();
    l = new Date(f);
    try {
      l.toISOString();
    } catch {
      throw sn(rn.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Kf(t)) {
    if (isNaN(t.getTime())) throw sn(rn.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (ge(t)) l = t;
  else throw sn(rn.INVALID_ARGUMENT);
  return (
    M(n)
      ? (o.key = n)
      : j(n) &&
        Object.keys(n).forEach((a) => {
          da.includes(a) ? (i[a] = n[a]) : (o[a] = n[a]);
        }),
    M(r) ? (o.locale = r) : j(r) && (i = r),
    j(s) && (i = s),
    [o.key || '', l, o, i]
  );
}
function di(e, t, n) {
  const r = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o);
  }
}
function hi(e, ...t) {
  const {
      numberFormats: n,
      unresolving: r,
      fallbackLocale: s,
      onWarn: o,
      localeFallbacker: i,
    } = e,
    { __numberFormatters: l } = e,
    [a, f, d, h] = ws(...t),
    g = Y(d.missingWarn) ? d.missingWarn : e.missingWarn;
  Y(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const v = !!d.part,
    L = M(d.locale) ? d.locale : e.locale,
    N = i(e, s, L);
  if (!M(a) || a === '') return new Intl.NumberFormat(L, h).format(f);
  let R = {},
    _,
    C = null;
  const w = 'number format';
  for (
    let k = 0;
    k < N.length && ((_ = N[k]), (R = n[_] || {}), (C = R[a]), !j(C));
    k++
  )
    lo(e, a, _, g, w);
  if (!j(C) || !M(_)) return r ? Fr : a;
  let b = `${_}__${a}`;
  Pr(h) || (b = `${b}__${JSON.stringify(h)}`);
  let T = l.get(b);
  return (
    T || ((T = new Intl.NumberFormat(_, be({}, C, h))), l.set(b, T)),
    v ? T.formatToParts(f) : T.format(f)
  );
}
const ha = [
  'localeMatcher',
  'style',
  'currency',
  'currencyDisplay',
  'currencySign',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits',
  'compactDisplay',
  'notation',
  'signDisplay',
  'unit',
  'unitDisplay',
  'roundingMode',
  'roundingPriority',
  'roundingIncrement',
  'trailingZeroDisplay',
];
function ws(...e) {
  const [t, n, r, s] = e,
    o = {};
  let i = {};
  if (!ge(t)) throw sn(rn.INVALID_ARGUMENT);
  const l = t;
  return (
    M(n)
      ? (o.key = n)
      : j(n) &&
        Object.keys(n).forEach((a) => {
          ha.includes(a) ? (i[a] = n[a]) : (o[a] = n[a]);
        }),
    M(r) ? (o.locale = r) : j(r) && (i = r),
    j(s) && (i = s),
    [o.key || '', l, o, i]
  );
}
function mi(e, t, n) {
  const r = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    r.__numberFormatters.has(o) && r.__numberFormatters.delete(o);
  }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != 'boolean' &&
  (In().__INTLIFY_PROD_DEVTOOLS__ = !1);
/*!
 * vue-i18n v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const eh = '9.2.2';
function th() {
  typeof __VUE_I18N_FULL_INSTALL__ != 'boolean' &&
    (In().__VUE_I18N_FULL_INSTALL__ = !0),
    typeof __VUE_I18N_LEGACY_API__ != 'boolean' &&
      (In().__VUE_I18N_LEGACY_API__ = !0),
    typeof __INTLIFY_PROD_DEVTOOLS__ != 'boolean' &&
      (In().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
let ma = Z.__EXTEND_POINT__;
const Ue = () => ++ma,
  me = {
    UNEXPECTED_RETURN_TYPE: ma,
    INVALID_ARGUMENT: Ue(),
    MUST_BE_CALL_SETUP_TOP: Ue(),
    NOT_INSLALLED: Ue(),
    NOT_AVAILABLE_IN_LEGACY_MODE: Ue(),
    REQUIRED_VALUE: Ue(),
    INVALID_VALUE: Ue(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Ue(),
    NOT_INSLALLED_WITH_PROVIDE: Ue(),
    UNEXPECTED_ERROR: Ue(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: Ue(),
    BRIDGE_SUPPORT_VUE_2_ONLY: Ue(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Ue(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Ue(),
    __EXTEND_POINT__: Ue(),
  };
function _e(e, ...t) {
  return xr(e, null, void 0);
}
const Cs = Qt('__transrateVNode'),
  Os = Qt('__datetimeParts'),
  Ns = Qt('__numberParts'),
  pa = Qt('__setPluralRules'),
  ga = Qt('__injectWithOption');
function As(e) {
  if (!le(e)) return e;
  for (const t in e)
    if (so(e, t))
      if (!t.includes('.')) le(e[t]) && As(e[t]);
      else {
        const n = t.split('.'),
          r = n.length - 1;
        let s = e;
        for (let o = 0; o < r; o++) n[o] in s || (s[n[o]] = {}), (s = s[n[o]]);
        (s[n[r]] = e[t]), delete e[t], le(s[n[r]]) && As(s[n[r]]);
      }
  return e;
}
function kr(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: o } = t,
    i = j(n) ? n : ie(r) ? {} : { [e]: {} };
  if (
    (ie(r) &&
      r.forEach((l) => {
        if ('locale' in l && 'resource' in l) {
          const { locale: a, resource: f } = l;
          a ? ((i[a] = i[a] || {}), Pn(f, i[a])) : Pn(f, i);
        } else M(l) && Pn(JSON.parse(l), i);
      }),
    s == null && o)
  )
    for (const l in i) so(i, l) && As(i[l]);
  return i;
}
const Zn = (e) => !le(e) || ie(e);
function Pn(e, t) {
  if (Zn(e) || Zn(t)) throw _e(me.INVALID_VALUE);
  for (const n in e)
    so(e, n) && (Zn(e[n]) || Zn(t[n]) ? (t[n] = e[n]) : Pn(e[n], t[n]));
}
function _a(e) {
  return e.type;
}
function ba(e, t, n) {
  let r = le(t.messages) ? t.messages : {};
  '__i18nGlobal' in n &&
    (r = kr(e.locale.value, { messages: r, __i18n: n.__i18nGlobal }));
  const s = Object.keys(r);
  s.length &&
    s.forEach((o) => {
      e.mergeLocaleMessage(o, r[o]);
    });
  {
    if (le(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length &&
        o.forEach((i) => {
          e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
        });
    }
    if (le(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length &&
        o.forEach((i) => {
          e.mergeNumberFormat(i, t.numberFormats[i]);
        });
    }
  }
}
function pi(e) {
  return Ee(Wn, null, e, 0);
}
const gi = '__INTLIFY_META__';
let _i = 0;
function bi(e) {
  return (t, n, r, s) => e(n, r, Mn() || void 0, s);
}
const nh = () => {
  const e = Mn();
  let t = null;
  return e && (t = _a(e)[gi]) ? { [gi]: t } : null;
};
function ao(e = {}, t) {
  const { __root: n } = e,
    r = n === void 0;
  let s = Y(e.inheritLocale) ? e.inheritLocale : !0;
  const o = he(n && s ? n.locale.value : M(e.locale) ? e.locale : Gn),
    i = he(
      n && s
        ? n.fallbackLocale.value
        : M(e.fallbackLocale) ||
          ie(e.fallbackLocale) ||
          j(e.fallbackLocale) ||
          e.fallbackLocale === !1
        ? e.fallbackLocale
        : o.value
    ),
    l = he(kr(o.value, e)),
    a = he(j(e.datetimeFormats) ? e.datetimeFormats : { [o.value]: {} }),
    f = he(j(e.numberFormats) ? e.numberFormats : { [o.value]: {} });
  let d = n
      ? n.missingWarn
      : Y(e.missingWarn) || xt(e.missingWarn)
      ? e.missingWarn
      : !0,
    h = n
      ? n.fallbackWarn
      : Y(e.fallbackWarn) || xt(e.fallbackWarn)
      ? e.fallbackWarn
      : !0,
    g = n ? n.fallbackRoot : Y(e.fallbackRoot) ? e.fallbackRoot : !0,
    v = !!e.fallbackFormat,
    L = de(e.missing) ? e.missing : null,
    N = de(e.missing) ? bi(e.missing) : null,
    R = de(e.postTranslation) ? e.postTranslation : null,
    _ = n ? n.warnHtmlMessage : Y(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    C = !!e.escapeParameter;
  const w = n ? n.modifiers : j(e.modifiers) ? e.modifiers : {};
  let b = e.pluralRules || (n && n.pluralRules),
    T;
  (T = (() => {
    r && ii(null);
    const E = {
      version: eh,
      locale: o.value,
      fallbackLocale: i.value,
      messages: l.value,
      modifiers: w,
      pluralRules: b,
      missing: N === null ? void 0 : N,
      missingWarn: d,
      fallbackWarn: h,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: R === null ? void 0 : R,
      warnHtmlMessage: _,
      escapeParameter: C,
      messageResolver: e.messageResolver,
      __meta: { framework: 'vue' },
    };
    (E.datetimeFormats = a.value),
      (E.numberFormats = f.value),
      (E.__datetimeFormatters = j(T) ? T.__datetimeFormatters : void 0),
      (E.__numberFormatters = j(T) ? T.__numberFormatters : void 0);
    const S = qd(E);
    return r && ii(S), S;
  })()),
    Tn(T, o.value, i.value);
  function D() {
    return [o.value, i.value, l.value, a.value, f.value];
  }
  const J = Je({
      get: () => o.value,
      set: (E) => {
        (o.value = E), (T.locale = o.value);
      },
    }),
    X = Je({
      get: () => i.value,
      set: (E) => {
        (i.value = E), (T.fallbackLocale = i.value), Tn(T, o.value, E);
      },
    }),
    ce = Je(() => l.value),
    fe = Je(() => a.value),
    Ne = Je(() => f.value);
  function ye() {
    return de(R) ? R : null;
  }
  function rt(E) {
    (R = E), (T.postTranslation = E);
  }
  function wt() {
    return L;
  }
  function se(E) {
    E !== null && (N = bi(E)), (L = E), (T.missing = N);
  }
  const q = (E, S, U, $, G, z) => {
    D();
    let K;
    if (__INTLIFY_PROD_DEVTOOLS__)
      try {
        oi(nh()), r || (T.fallbackContext = n ? Kd() : void 0), (K = E(T));
      } finally {
        oi(null), r || (T.fallbackContext = void 0);
      }
    else K = E(T);
    if (ge(K) && K === Fr) {
      const [Ae, Re] = S();
      return n && g ? $(n) : G(Ae);
    } else {
      if (z(K)) return K;
      throw _e(me.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Q(...E) {
    return q(
      (S) => Reflect.apply(ui, null, [S, ...E]),
      () => Ss(...E),
      'translate',
      (S) => Reflect.apply(S.t, S, [...E]),
      (S) => S,
      (S) => M(S)
    );
  }
  function De(...E) {
    const [S, U, $] = E;
    if ($ && !le($)) throw _e(me.INVALID_ARGUMENT);
    return Q(S, U, be({ resolvedMessage: !0 }, $ || {}));
  }
  function st(...E) {
    return q(
      (S) => Reflect.apply(fi, null, [S, ...E]),
      () => Ls(...E),
      'datetime format',
      (S) => Reflect.apply(S.d, S, [...E]),
      () => ri,
      (S) => M(S)
    );
  }
  function We(...E) {
    return q(
      (S) => Reflect.apply(hi, null, [S, ...E]),
      () => ws(...E),
      'number format',
      (S) => Reflect.apply(S.n, S, [...E]),
      () => ri,
      (S) => M(S)
    );
  }
  function Se(E) {
    return E.map((S) => (M(S) || ge(S) || Y(S) ? pi(String(S)) : S));
  }
  const Ct = { normalize: Se, interpolate: (E) => E, type: 'vnode' };
  function Ut(...E) {
    return q(
      (S) => {
        let U;
        const $ = S;
        try {
          ($.processor = Ct), (U = Reflect.apply(ui, null, [$, ...E]));
        } finally {
          $.processor = null;
        }
        return U;
      },
      () => Ss(...E),
      'translate',
      (S) => S[Cs](...E),
      (S) => [pi(S)],
      (S) => ie(S)
    );
  }
  function Ze(...E) {
    return q(
      (S) => Reflect.apply(hi, null, [S, ...E]),
      () => ws(...E),
      'number format',
      (S) => S[Ns](...E),
      () => [],
      (S) => M(S) || ie(S)
    );
  }
  function ot(...E) {
    return q(
      (S) => Reflect.apply(fi, null, [S, ...E]),
      () => Ls(...E),
      'datetime format',
      (S) => S[Os](...E),
      () => [],
      (S) => M(S) || ie(S)
    );
  }
  function ze(E) {
    (b = E), (T.pluralRules = b);
  }
  function it(E, S) {
    const U = M(S) ? S : o.value,
      $ = m(U);
    return T.messageResolver($, E) !== null;
  }
  function Me(E) {
    let S = null;
    const U = ra(T, i.value, o.value);
    for (let $ = 0; $ < U.length; $++) {
      const G = l.value[U[$]] || {},
        z = T.messageResolver(G, E);
      if (z != null) {
        S = z;
        break;
      }
    }
    return S;
  }
  function Ot(E) {
    const S = Me(E);
    return S ?? (n ? n.tm(E) || {} : {});
  }
  function m(E) {
    return l.value[E] || {};
  }
  function c(E, S) {
    (l.value[E] = S), (T.messages = l.value);
  }
  function u(E, S) {
    (l.value[E] = l.value[E] || {}), Pn(S, l.value[E]), (T.messages = l.value);
  }
  function p(E) {
    return a.value[E] || {};
  }
  function y(E, S) {
    (a.value[E] = S), (T.datetimeFormats = a.value), di(T, E, S);
  }
  function O(E, S) {
    (a.value[E] = be(a.value[E] || {}, S)),
      (T.datetimeFormats = a.value),
      di(T, E, S);
  }
  function P(E) {
    return f.value[E] || {};
  }
  function F(E, S) {
    (f.value[E] = S), (T.numberFormats = f.value), mi(T, E, S);
  }
  function x(E, S) {
    (f.value[E] = be(f.value[E] || {}, S)),
      (T.numberFormats = f.value),
      mi(T, E, S);
  }
  _i++,
    n &&
      Es &&
      (Pt(n.locale, (E) => {
        s && ((o.value = E), (T.locale = E), Tn(T, o.value, i.value));
      }),
      Pt(n.fallbackLocale, (E) => {
        s && ((i.value = E), (T.fallbackLocale = E), Tn(T, o.value, i.value));
      }));
  const I = {
    id: _i,
    locale: J,
    fallbackLocale: X,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(E) {
      (s = E),
        E &&
          n &&
          ((o.value = n.locale.value),
          (i.value = n.fallbackLocale.value),
          Tn(T, o.value, i.value));
    },
    get availableLocales() {
      return Object.keys(l.value).sort();
    },
    messages: ce,
    get modifiers() {
      return w;
    },
    get pluralRules() {
      return b || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(E) {
      (d = E), (T.missingWarn = d);
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(E) {
      (h = E), (T.fallbackWarn = h);
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(E) {
      g = E;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(E) {
      (v = E), (T.fallbackFormat = v);
    },
    get warnHtmlMessage() {
      return _;
    },
    set warnHtmlMessage(E) {
      (_ = E), (T.warnHtmlMessage = E);
    },
    get escapeParameter() {
      return C;
    },
    set escapeParameter(E) {
      (C = E), (T.escapeParameter = E);
    },
    t: Q,
    getLocaleMessage: m,
    setLocaleMessage: c,
    mergeLocaleMessage: u,
    getPostTranslationHandler: ye,
    setPostTranslationHandler: rt,
    getMissingHandler: wt,
    setMissingHandler: se,
    [pa]: ze,
  };
  return (
    (I.datetimeFormats = fe),
    (I.numberFormats = Ne),
    (I.rt = De),
    (I.te = it),
    (I.tm = Ot),
    (I.d = st),
    (I.n = We),
    (I.getDateTimeFormat = p),
    (I.setDateTimeFormat = y),
    (I.mergeDateTimeFormat = O),
    (I.getNumberFormat = P),
    (I.setNumberFormat = F),
    (I.mergeNumberFormat = x),
    (I[ga] = e.__injectWithOption),
    (I[Cs] = Ut),
    (I[Os] = ot),
    (I[Ns] = Ze),
    I
  );
}
function rh(e) {
  const t = M(e.locale) ? e.locale : Gn,
    n =
      M(e.fallbackLocale) ||
      ie(e.fallbackLocale) ||
      j(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : t,
    r = de(e.missing) ? e.missing : void 0,
    s =
      Y(e.silentTranslationWarn) || xt(e.silentTranslationWarn)
        ? !e.silentTranslationWarn
        : !0,
    o =
      Y(e.silentFallbackWarn) || xt(e.silentFallbackWarn)
        ? !e.silentFallbackWarn
        : !0,
    i = Y(e.fallbackRoot) ? e.fallbackRoot : !0,
    l = !!e.formatFallbackMessages,
    a = j(e.modifiers) ? e.modifiers : {},
    f = e.pluralizationRules,
    d = de(e.postTranslation) ? e.postTranslation : void 0,
    h = M(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== 'off' : !0,
    g = !!e.escapeParameterHtml,
    v = Y(e.sync) ? e.sync : !0;
  let L = e.messages;
  if (j(e.sharedMessages)) {
    const T = e.sharedMessages;
    L = Object.keys(T).reduce((D, J) => {
      const X = D[J] || (D[J] = {});
      return be(X, T[J]), D;
    }, L || {});
  }
  const { __i18n: N, __root: R, __injectWithOption: _ } = e,
    C = e.datetimeFormats,
    w = e.numberFormats,
    b = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: L,
    flatJson: b,
    datetimeFormats: C,
    numberFormats: w,
    missing: r,
    missingWarn: s,
    fallbackWarn: o,
    fallbackRoot: i,
    fallbackFormat: l,
    modifiers: a,
    pluralRules: f,
    postTranslation: d,
    warnHtmlMessage: h,
    escapeParameter: g,
    messageResolver: e.messageResolver,
    inheritLocale: v,
    __i18n: N,
    __root: R,
    __injectWithOption: _,
  };
}
function Rs(e = {}, t) {
  {
    const n = ao(rh(e)),
      r = {
        id: n.id,
        get locale() {
          return n.locale.value;
        },
        set locale(s) {
          n.locale.value = s;
        },
        get fallbackLocale() {
          return n.fallbackLocale.value;
        },
        set fallbackLocale(s) {
          n.fallbackLocale.value = s;
        },
        get messages() {
          return n.messages.value;
        },
        get datetimeFormats() {
          return n.datetimeFormats.value;
        },
        get numberFormats() {
          return n.numberFormats.value;
        },
        get availableLocales() {
          return n.availableLocales;
        },
        get formatter() {
          return {
            interpolate() {
              return [];
            },
          };
        },
        set formatter(s) {},
        get missing() {
          return n.getMissingHandler();
        },
        set missing(s) {
          n.setMissingHandler(s);
        },
        get silentTranslationWarn() {
          return Y(n.missingWarn) ? !n.missingWarn : n.missingWarn;
        },
        set silentTranslationWarn(s) {
          n.missingWarn = Y(s) ? !s : s;
        },
        get silentFallbackWarn() {
          return Y(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
        },
        set silentFallbackWarn(s) {
          n.fallbackWarn = Y(s) ? !s : s;
        },
        get modifiers() {
          return n.modifiers;
        },
        get formatFallbackMessages() {
          return n.fallbackFormat;
        },
        set formatFallbackMessages(s) {
          n.fallbackFormat = s;
        },
        get postTranslation() {
          return n.getPostTranslationHandler();
        },
        set postTranslation(s) {
          n.setPostTranslationHandler(s);
        },
        get sync() {
          return n.inheritLocale;
        },
        set sync(s) {
          n.inheritLocale = s;
        },
        get warnHtmlInMessage() {
          return n.warnHtmlMessage ? 'warn' : 'off';
        },
        set warnHtmlInMessage(s) {
          n.warnHtmlMessage = s !== 'off';
        },
        get escapeParameterHtml() {
          return n.escapeParameter;
        },
        set escapeParameterHtml(s) {
          n.escapeParameter = s;
        },
        get preserveDirectiveContent() {
          return !0;
        },
        set preserveDirectiveContent(s) {},
        get pluralizationRules() {
          return n.pluralRules || {};
        },
        __composer: n,
        t(...s) {
          const [o, i, l] = s,
            a = {};
          let f = null,
            d = null;
          if (!M(o)) throw _e(me.INVALID_ARGUMENT);
          const h = o;
          return (
            M(i) ? (a.locale = i) : ie(i) ? (f = i) : j(i) && (d = i),
            ie(l) ? (f = l) : j(l) && (d = l),
            Reflect.apply(n.t, n, [h, f || d || {}, a])
          );
        },
        rt(...s) {
          return Reflect.apply(n.rt, n, [...s]);
        },
        tc(...s) {
          const [o, i, l] = s,
            a = { plural: 1 };
          let f = null,
            d = null;
          if (!M(o)) throw _e(me.INVALID_ARGUMENT);
          const h = o;
          return (
            M(i)
              ? (a.locale = i)
              : ge(i)
              ? (a.plural = i)
              : ie(i)
              ? (f = i)
              : j(i) && (d = i),
            M(l) ? (a.locale = l) : ie(l) ? (f = l) : j(l) && (d = l),
            Reflect.apply(n.t, n, [h, f || d || {}, a])
          );
        },
        te(s, o) {
          return n.te(s, o);
        },
        tm(s) {
          return n.tm(s);
        },
        getLocaleMessage(s) {
          return n.getLocaleMessage(s);
        },
        setLocaleMessage(s, o) {
          n.setLocaleMessage(s, o);
        },
        mergeLocaleMessage(s, o) {
          n.mergeLocaleMessage(s, o);
        },
        d(...s) {
          return Reflect.apply(n.d, n, [...s]);
        },
        getDateTimeFormat(s) {
          return n.getDateTimeFormat(s);
        },
        setDateTimeFormat(s, o) {
          n.setDateTimeFormat(s, o);
        },
        mergeDateTimeFormat(s, o) {
          n.mergeDateTimeFormat(s, o);
        },
        n(...s) {
          return Reflect.apply(n.n, n, [...s]);
        },
        getNumberFormat(s) {
          return n.getNumberFormat(s);
        },
        setNumberFormat(s, o) {
          n.setNumberFormat(s, o);
        },
        mergeNumberFormat(s, o) {
          n.mergeNumberFormat(s, o);
        },
        getChoiceIndex(s, o) {
          return -1;
        },
        __onComponentInstanceCreated(s) {
          const { componentInstanceCreatedListener: o } = e;
          o && o(s, r);
        },
      };
    return r;
  }
}
const co = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: {
    type: String,
    validator: (e) => e === 'parent' || e === 'global',
    default: 'parent',
  },
  i18n: { type: Object },
};
function sh({ slots: e }, t) {
  return t.length === 1 && t[0] === 'default'
    ? (e.default ? e.default() : []).reduce(
        (r, s) => (r = [...r, ...(ie(s.children) ? s.children : [s])]),
        []
      )
    : t.reduce((n, r) => {
        const s = e[r];
        return s && (n[r] = s()), n;
      }, {});
}
function ya(e) {
  return $e;
}
const yi = {
  name: 'i18n-t',
  props: be(
    {
      keypath: { type: String, required: !0 },
      plural: { type: [Number, String], validator: (e) => ge(e) || !isNaN(e) },
    },
    co
  ),
  setup(e, t) {
    const { slots: n, attrs: r } = t,
      s = e.i18n || Kn({ useScope: e.scope, __useComponent: !0 });
    return () => {
      const o = Object.keys(n).filter((h) => h !== '_'),
        i = {};
      e.locale && (i.locale = e.locale),
        e.plural !== void 0 && (i.plural = M(e.plural) ? +e.plural : e.plural);
      const l = sh(t, o),
        a = s[Cs](e.keypath, l, i),
        f = be({}, r),
        d = M(e.tag) || le(e.tag) ? e.tag : ya();
      return jl(d, f, a);
    };
  },
};
function oh(e) {
  return ie(e) && !M(e[0]);
}
function va(e, t, n, r) {
  const { slots: s, attrs: o } = t;
  return () => {
    const i = { part: !0 };
    let l = {};
    e.locale && (i.locale = e.locale),
      M(e.format)
        ? (i.key = e.format)
        : le(e.format) &&
          (M(e.format.key) && (i.key = e.format.key),
          (l = Object.keys(e.format).reduce(
            (g, v) => (n.includes(v) ? be({}, g, { [v]: e.format[v] }) : g),
            {}
          )));
    const a = r(e.value, i, l);
    let f = [i.key];
    ie(a)
      ? (f = a.map((g, v) => {
          const L = s[g.type],
            N = L ? L({ [g.type]: g.value, index: v, parts: a }) : [g.value];
          return oh(N) && (N[0].key = `${g.type}-${v}`), N;
        }))
      : M(a) && (f = [a]);
    const d = be({}, o),
      h = M(e.tag) || le(e.tag) ? e.tag : ya();
    return jl(h, d, f);
  };
}
const vi = {
    name: 'i18n-n',
    props: be(
      {
        value: { type: Number, required: !0 },
        format: { type: [String, Object] },
      },
      co
    ),
    setup(e, t) {
      const n = e.i18n || Kn({ useScope: 'parent', __useComponent: !0 });
      return va(e, t, ha, (...r) => n[Ns](...r));
    },
  },
  Ei = {
    name: 'i18n-d',
    props: be(
      {
        value: { type: [Number, Date], required: !0 },
        format: { type: [String, Object] },
      },
      co
    ),
    setup(e, t) {
      const n = e.i18n || Kn({ useScope: 'parent', __useComponent: !0 });
      return va(e, t, da, (...r) => n[Os](...r));
    },
  };
function ih(e, t) {
  const n = e;
  if (e.mode === 'composition') return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function lh(e) {
  const t = (i) => {
    const { instance: l, modifiers: a, value: f } = i;
    if (!l || !l.$) throw _e(me.UNEXPECTED_ERROR);
    const d = ih(e, l.$),
      h = Ti(f);
    return [Reflect.apply(d.t, d, [...Si(h)]), d];
  };
  return {
    created: (i, l) => {
      const [a, f] = t(l);
      Es &&
        e.global === f &&
        (i.__i18nWatcher = Pt(f.locale, () => {
          l.instance && l.instance.$forceUpdate();
        })),
        (i.__composer = f),
        (i.textContent = a);
    },
    unmounted: (i) => {
      Es &&
        i.__i18nWatcher &&
        (i.__i18nWatcher(), (i.__i18nWatcher = void 0), delete i.__i18nWatcher),
        i.__composer && ((i.__composer = void 0), delete i.__composer);
    },
    beforeUpdate: (i, { value: l }) => {
      if (i.__composer) {
        const a = i.__composer,
          f = Ti(l);
        i.textContent = Reflect.apply(a.t, a, [...Si(f)]);
      }
    },
    getSSRProps: (i) => {
      const [l] = t(i);
      return { textContent: l };
    },
  };
}
function Ti(e) {
  if (M(e)) return { path: e };
  if (j(e)) {
    if (!('path' in e)) throw _e(me.REQUIRED_VALUE, 'path');
    return e;
  } else throw _e(me.INVALID_VALUE);
}
function Si(e) {
  const { path: t, locale: n, args: r, choice: s, plural: o } = e,
    i = {},
    l = r || {};
  return (
    M(n) && (i.locale = n),
    ge(s) && (i.plural = s),
    ge(o) && (i.plural = o),
    [t, l, i]
  );
}
function ah(e, t, ...n) {
  const r = j(n[0]) ? n[0] : {},
    s = !!r.useI18nComponentName;
  (Y(r.globalInstall) ? r.globalInstall : !0) &&
    (e.component(s ? 'i18n' : yi.name, yi),
    e.component(vi.name, vi),
    e.component(Ei.name, Ei)),
    e.directive('t', lh(t));
}
function ch(e, t, n) {
  return {
    beforeCreate() {
      const r = Mn();
      if (!r) throw _e(me.UNEXPECTED_ERROR);
      const s = this.$options;
      if (s.i18n) {
        const o = s.i18n;
        s.__i18n && (o.__i18n = s.__i18n),
          (o.__root = t),
          this === this.$root
            ? (this.$i18n = Li(e, o))
            : ((o.__injectWithOption = !0), (this.$i18n = Rs(o)));
      } else
        s.__i18n
          ? this === this.$root
            ? (this.$i18n = Li(e, s))
            : (this.$i18n = Rs({
                __i18n: s.__i18n,
                __injectWithOption: !0,
                __root: t,
              }))
          : (this.$i18n = e);
      s.__i18nGlobal && ba(t, s, s),
        e.__onComponentInstanceCreated(this.$i18n),
        n.__setInstance(r, this.$i18n),
        (this.$t = (...o) => this.$i18n.t(...o)),
        (this.$rt = (...o) => this.$i18n.rt(...o)),
        (this.$tc = (...o) => this.$i18n.tc(...o)),
        (this.$te = (o, i) => this.$i18n.te(o, i)),
        (this.$d = (...o) => this.$i18n.d(...o)),
        (this.$n = (...o) => this.$i18n.n(...o)),
        (this.$tm = (o) => this.$i18n.tm(o));
    },
    mounted() {},
    unmounted() {
      const r = Mn();
      if (!r) throw _e(me.UNEXPECTED_ERROR);
      delete this.$t,
        delete this.$rt,
        delete this.$tc,
        delete this.$te,
        delete this.$d,
        delete this.$n,
        delete this.$tm,
        n.__deleteInstance(r),
        delete this.$i18n;
    },
  };
}
function Li(e, t) {
  (e.locale = t.locale || e.locale),
    (e.fallbackLocale = t.fallbackLocale || e.fallbackLocale),
    (e.missing = t.missing || e.missing),
    (e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn),
    (e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn),
    (e.formatFallbackMessages =
      t.formatFallbackMessages || e.formatFallbackMessages),
    (e.postTranslation = t.postTranslation || e.postTranslation),
    (e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage),
    (e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml),
    (e.sync = t.sync || e.sync),
    e.__composer[pa](t.pluralizationRules || e.pluralizationRules);
  const n = kr(e.locale, { messages: t.messages, __i18n: t.__i18n });
  return (
    Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])),
    t.datetimeFormats &&
      Object.keys(t.datetimeFormats).forEach((r) =>
        e.mergeDateTimeFormat(r, t.datetimeFormats[r])
      ),
    t.numberFormats &&
      Object.keys(t.numberFormats).forEach((r) =>
        e.mergeNumberFormat(r, t.numberFormats[r])
      ),
    e
  );
}
const uh = Qt('global-vue-i18n');
function fh(e = {}, t) {
  const n =
      __VUE_I18N_LEGACY_API__ && Y(e.legacy)
        ? e.legacy
        : __VUE_I18N_LEGACY_API__,
    r = Y(e.globalInjection) ? e.globalInjection : !0,
    s = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0,
    o = new Map(),
    [i, l] = dh(e, n),
    a = Qt('');
  function f(g) {
    return o.get(g) || null;
  }
  function d(g, v) {
    o.set(g, v);
  }
  function h(g) {
    o.delete(g);
  }
  {
    const g = {
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? 'legacy' : 'composition';
      },
      get allowComposition() {
        return s;
      },
      async install(v, ...L) {
        (v.__VUE_I18N_SYMBOL__ = a),
          v.provide(v.__VUE_I18N_SYMBOL__, g),
          !n && r && Eh(v, g.global),
          __VUE_I18N_FULL_INSTALL__ && ah(v, g, ...L),
          __VUE_I18N_LEGACY_API__ && n && v.mixin(ch(l, l.__composer, g));
        const N = v.unmount;
        v.unmount = () => {
          g.dispose(), N();
        };
      },
      get global() {
        return l;
      },
      dispose() {
        i.stop();
      },
      __instances: o,
      __getInstance: f,
      __setInstance: d,
      __deleteInstance: h,
    };
    return g;
  }
}
function Kn(e = {}) {
  const t = Mn();
  if (t == null) throw _e(me.MUST_BE_CALL_SETUP_TOP);
  if (
    !t.isCE &&
    t.appContext.app != null &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw _e(me.NOT_INSLALLED);
  const n = hh(t),
    r = ph(n),
    s = _a(t),
    o = mh(e, s);
  if (__VUE_I18N_LEGACY_API__ && n.mode === 'legacy' && !e.__useComponent) {
    if (!n.allowComposition) throw _e(me.NOT_AVAILABLE_IN_LEGACY_MODE);
    return bh(t, o, r, e);
  }
  if (o === 'global') return ba(r, e, s), r;
  if (o === 'parent') {
    let a = gh(n, t, e.__useComponent);
    return a == null && (a = r), a;
  }
  const i = n;
  let l = i.__getInstance(t);
  if (l == null) {
    const a = be({}, e);
    '__i18n' in s && (a.__i18n = s.__i18n),
      r && (a.__root = r),
      (l = ao(a)),
      _h(i, t),
      i.__setInstance(t, l);
  }
  return l;
}
function dh(e, t, n) {
  const r = Ki();
  {
    const s =
      __VUE_I18N_LEGACY_API__ && t ? r.run(() => Rs(e)) : r.run(() => ao(e));
    if (s == null) throw _e(me.UNEXPECTED_ERROR);
    return [r, s];
  }
}
function hh(e) {
  {
    const t = fn(e.isCE ? uh : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw _e(e.isCE ? me.NOT_INSLALLED_WITH_PROVIDE : me.UNEXPECTED_ERROR);
    return t;
  }
}
function mh(e, t) {
  return Pr(e)
    ? '__i18n' in t
      ? 'local'
      : 'global'
    : e.useScope
    ? e.useScope
    : 'local';
}
function ph(e) {
  return e.mode === 'composition' ? e.global : e.global.__composer;
}
function gh(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let o = t.parent;
  for (; o != null; ) {
    const i = e;
    if (e.mode === 'composition') r = i.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = i.__getInstance(o);
      l != null && ((r = l.__composer), n && r && !r[ga] && (r = null));
    }
    if (r != null || s === o) break;
    o = o.parent;
  }
  return r;
}
function _h(e, t, n) {
  Qs(() => {}, t),
    Zs(() => {
      e.__deleteInstance(t);
    }, t);
}
function bh(e, t, n, r = {}) {
  const s = t === 'local',
    o = Oc(null);
  if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw _e(me.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const i = Y(r.inheritLocale) ? r.inheritLocale : !0,
    l = he(s && i ? n.locale.value : M(r.locale) ? r.locale : Gn),
    a = he(
      s && i
        ? n.fallbackLocale.value
        : M(r.fallbackLocale) ||
          ie(r.fallbackLocale) ||
          j(r.fallbackLocale) ||
          r.fallbackLocale === !1
        ? r.fallbackLocale
        : l.value
    ),
    f = he(kr(l.value, r)),
    d = he(j(r.datetimeFormats) ? r.datetimeFormats : { [l.value]: {} }),
    h = he(j(r.numberFormats) ? r.numberFormats : { [l.value]: {} }),
    g = s
      ? n.missingWarn
      : Y(r.missingWarn) || xt(r.missingWarn)
      ? r.missingWarn
      : !0,
    v = s
      ? n.fallbackWarn
      : Y(r.fallbackWarn) || xt(r.fallbackWarn)
      ? r.fallbackWarn
      : !0,
    L = s ? n.fallbackRoot : Y(r.fallbackRoot) ? r.fallbackRoot : !0,
    N = !!r.fallbackFormat,
    R = de(r.missing) ? r.missing : null,
    _ = de(r.postTranslation) ? r.postTranslation : null,
    C = s ? n.warnHtmlMessage : Y(r.warnHtmlMessage) ? r.warnHtmlMessage : !0,
    w = !!r.escapeParameter,
    b = s ? n.modifiers : j(r.modifiers) ? r.modifiers : {},
    T = r.pluralRules || (s && n.pluralRules);
  function k() {
    return [l.value, a.value, f.value, d.value, h.value];
  }
  const D = Je({
      get: () => (o.value ? o.value.locale.value : l.value),
      set: (u) => {
        o.value && (o.value.locale.value = u), (l.value = u);
      },
    }),
    J = Je({
      get: () => (o.value ? o.value.fallbackLocale.value : a.value),
      set: (u) => {
        o.value && (o.value.fallbackLocale.value = u), (a.value = u);
      },
    }),
    X = Je(() => (o.value ? o.value.messages.value : f.value)),
    ce = Je(() => d.value),
    fe = Je(() => h.value);
  function Ne() {
    return o.value ? o.value.getPostTranslationHandler() : _;
  }
  function ye(u) {
    o.value && o.value.setPostTranslationHandler(u);
  }
  function rt() {
    return o.value ? o.value.getMissingHandler() : R;
  }
  function wt(u) {
    o.value && o.value.setMissingHandler(u);
  }
  function se(u) {
    return k(), u();
  }
  function q(...u) {
    return o.value
      ? se(() => Reflect.apply(o.value.t, null, [...u]))
      : se(() => '');
  }
  function Q(...u) {
    return o.value ? Reflect.apply(o.value.rt, null, [...u]) : '';
  }
  function De(...u) {
    return o.value
      ? se(() => Reflect.apply(o.value.d, null, [...u]))
      : se(() => '');
  }
  function st(...u) {
    return o.value
      ? se(() => Reflect.apply(o.value.n, null, [...u]))
      : se(() => '');
  }
  function We(u) {
    return o.value ? o.value.tm(u) : {};
  }
  function Se(u, p) {
    return o.value ? o.value.te(u, p) : !1;
  }
  function Mt(u) {
    return o.value ? o.value.getLocaleMessage(u) : {};
  }
  function Ct(u, p) {
    o.value && (o.value.setLocaleMessage(u, p), (f.value[u] = p));
  }
  function Ut(u, p) {
    o.value && o.value.mergeLocaleMessage(u, p);
  }
  function Ze(u) {
    return o.value ? o.value.getDateTimeFormat(u) : {};
  }
  function ot(u, p) {
    o.value && (o.value.setDateTimeFormat(u, p), (d.value[u] = p));
  }
  function ze(u, p) {
    o.value && o.value.mergeDateTimeFormat(u, p);
  }
  function it(u) {
    return o.value ? o.value.getNumberFormat(u) : {};
  }
  function Me(u, p) {
    o.value && (o.value.setNumberFormat(u, p), (h.value[u] = p));
  }
  function Ot(u, p) {
    o.value && o.value.mergeNumberFormat(u, p);
  }
  const m = {
    get id() {
      return o.value ? o.value.id : -1;
    },
    locale: D,
    fallbackLocale: J,
    messages: X,
    datetimeFormats: ce,
    numberFormats: fe,
    get inheritLocale() {
      return o.value ? o.value.inheritLocale : i;
    },
    set inheritLocale(u) {
      o.value && (o.value.inheritLocale = u);
    },
    get availableLocales() {
      return o.value ? o.value.availableLocales : Object.keys(f.value);
    },
    get modifiers() {
      return o.value ? o.value.modifiers : b;
    },
    get pluralRules() {
      return o.value ? o.value.pluralRules : T;
    },
    get isGlobal() {
      return o.value ? o.value.isGlobal : !1;
    },
    get missingWarn() {
      return o.value ? o.value.missingWarn : g;
    },
    set missingWarn(u) {
      o.value && (o.value.missingWarn = u);
    },
    get fallbackWarn() {
      return o.value ? o.value.fallbackWarn : v;
    },
    set fallbackWarn(u) {
      o.value && (o.value.missingWarn = u);
    },
    get fallbackRoot() {
      return o.value ? o.value.fallbackRoot : L;
    },
    set fallbackRoot(u) {
      o.value && (o.value.fallbackRoot = u);
    },
    get fallbackFormat() {
      return o.value ? o.value.fallbackFormat : N;
    },
    set fallbackFormat(u) {
      o.value && (o.value.fallbackFormat = u);
    },
    get warnHtmlMessage() {
      return o.value ? o.value.warnHtmlMessage : C;
    },
    set warnHtmlMessage(u) {
      o.value && (o.value.warnHtmlMessage = u);
    },
    get escapeParameter() {
      return o.value ? o.value.escapeParameter : w;
    },
    set escapeParameter(u) {
      o.value && (o.value.escapeParameter = u);
    },
    t: q,
    getPostTranslationHandler: Ne,
    setPostTranslationHandler: ye,
    getMissingHandler: rt,
    setMissingHandler: wt,
    rt: Q,
    d: De,
    n: st,
    tm: We,
    te: Se,
    getLocaleMessage: Mt,
    setLocaleMessage: Ct,
    mergeLocaleMessage: Ut,
    getDateTimeFormat: Ze,
    setDateTimeFormat: ot,
    mergeDateTimeFormat: ze,
    getNumberFormat: it,
    setNumberFormat: Me,
    mergeNumberFormat: Ot,
  };
  function c(u) {
    (u.locale.value = l.value),
      (u.fallbackLocale.value = a.value),
      Object.keys(f.value).forEach((p) => {
        u.mergeLocaleMessage(p, f.value[p]);
      }),
      Object.keys(d.value).forEach((p) => {
        u.mergeDateTimeFormat(p, d.value[p]);
      }),
      Object.keys(h.value).forEach((p) => {
        u.mergeNumberFormat(p, h.value[p]);
      }),
      (u.escapeParameter = w),
      (u.fallbackFormat = N),
      (u.fallbackRoot = L),
      (u.fallbackWarn = v),
      (u.missingWarn = g),
      (u.warnHtmlMessage = C);
  }
  return (
    yl(() => {
      if (e.proxy == null || e.proxy.$i18n == null)
        throw _e(me.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
      const u = (o.value = e.proxy.$i18n.__composer);
      t === 'global'
        ? ((l.value = u.locale.value),
          (a.value = u.fallbackLocale.value),
          (f.value = u.messages.value),
          (d.value = u.datetimeFormats.value),
          (h.value = u.numberFormats.value))
        : s && c(u);
    }),
    m
  );
}
const yh = ['locale', 'fallbackLocale', 'availableLocales'],
  vh = ['t', 'rt', 'd', 'n', 'tm'];
function Eh(e, t) {
  const n = Object.create(null);
  yh.forEach((r) => {
    const s = Object.getOwnPropertyDescriptor(t, r);
    if (!s) throw _e(me.UNEXPECTED_ERROR);
    const o = Te(s.value)
      ? {
          get() {
            return s.value.value;
          },
          set(i) {
            s.value.value = i;
          },
        }
      : {
          get() {
            return s.get && s.get();
          },
        };
    Object.defineProperty(n, r, o);
  }),
    (e.config.globalProperties.$i18n = n),
    vh.forEach((r) => {
      const s = Object.getOwnPropertyDescriptor(t, r);
      if (!s || !s.value) throw _e(me.UNEXPECTED_ERROR);
      Object.defineProperty(e.config.globalProperties, `$${r}`, s);
    });
}
jd(Jd);
Wd(Ld);
Bd(ra);
th();
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = In();
  (e.__INTLIFY__ = !0), xd(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const Ea = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        language: 'Language',
      },
      footer: {
        copyright: 'Donate Bank MB Bank - 39186868888',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact Us',
      },
      app: {
        title: 'Free Text-to-Speech Forever | Multiple Languages',
        placeholder: 'Enter text to convert...',
        language: 'Language:',
        voice: 'Voice:',
        speed: 'Speed:',
        pitch: 'Pitch:',
        convert: 'Convert',
        processing: 'Processing...',
        longTextWarning:
          'Long text will take more time to process. Please wait.',
        history: 'Conversion History',
        play: 'Play',
        download: 'Download',
        error: 'An error occurred while converting text to speech',
        tooLong: 'Text is too long, please split it into smaller parts.',
      },
      seo: {
        title: 'Free Unlimited Text to Speech Converter | Multiple Languages',
        description:
          'Convert any text to natural-sounding speech for free. Unlimited usage with multiple languages, voices, and no restrictions. Perfect for content creators, students, and accessibility needs.',
        keywords:
          'text to speech, free tts, voice generator, speech synthesis, audio converter, multiple languages, unlimited text to speech',
        ogTitle: 'Free Unlimited Text to Speech Converter',
        ogDescription:
          'Convert any text to natural-sounding speech for free. No limits, no sign-up required.',
        hiddenTitle: 'Free Unlimited Text to Speech Converter',
        hiddenDesc1:
          'Convert any text to natural-sounding speech in multiple languages including English, Chinese, Japanese, Korean, French, German, Spanish, and many more. Our free text-to-speech tool offers unlimited conversions with no registration required.',
        hiddenDesc2:
          'Perfect for content creators, students, language learners, and accessibility needs. Create audio content from text instantly with our high-quality voice synthesis technology.',
      },
    },
    vi: {
      nav: {
        home: 'Trang chủ',
        about: 'Giới thiệu',
        contact: 'Liên hệ',
        language: 'Ngôn ngữ',
      },
      footer: {
        copyright: 'Donate Bank MB Bank - 39186868888',
        privacy: 'Chính sách bảo mật',
        terms: 'Điều khoản dịch vụ',
        contact: 'Liên hệ',
      },
      app: {
        title: 'Văn bản thành Giọng nói miễn phí và mãi mãi như vậy',
        placeholder: 'Nhập văn bản cần chuyển đổi...',
        language: 'Ngôn ngữ:',
        voice: 'Giọng đọc:',
        speed: 'Tốc độ:',
        pitch: 'Cao độ:',
        convert: 'Chuyển đổi',
        processing: 'Đang xử lý...',
        longTextWarning:
          'Văn bản dài sẽ mất nhiều thời gian để xử lý. Vui lòng đợi.',
        history: 'Lịch sử chuyển đổi',
        play: 'Phát lại',
        download: 'Tải xuống',
        error: 'Có lỗi xảy ra khi chuyển đổi văn bản thành giọng nói',
        tooLong: 'Văn bản quá dài, vui lòng chia nhỏ thành nhiều phần.',
      },
      seo: {
        title:
          'Công cụ chuyển văn bản thành giọng nói miễn phí không giới hạn | Nhiều ngôn ngữ',
        description:
          'Chuyển đổi bất kỳ văn bản nào thành giọng nói tự nhiên miễn phí. Sử dụng không giới hạn với nhiều ngôn ngữ, giọng nói, và không hạn chế. Hoàn hảo cho người sáng tạo nội dung, học sinh, và nhu cầu tiếp cận.',
        keywords:
          'văn bản thành giọng nói, tts miễn phí, tạo giọng nói, tổng hợp giọng nói, chuyển đổi âm thanh, nhiều ngôn ngữ, văn bản thành giọng nói không giới hạn',
        ogTitle:
          'Công cụ chuyển văn bản thành giọng nói miễn phí không giới hạn',
        ogDescription:
          'Chuyển đổi bất kỳ văn bản nào thành giọng nói tự nhiên miễn phí. Không giới hạn, không cần đăng ký.',
        hiddenTitle:
          'Công cụ chuyển văn bản thành giọng nói miễn phí không giới hạn',
        hiddenDesc1:
          'Chuyển đổi bất kỳ văn bản nào thành giọng nói tự nhiên bằng nhiều ngôn ngữ bao gồm tiếng Việt, tiếng Anh, tiếng Trung, tiếng Nhật, tiếng Hàn, tiếng Pháp, tiếng Đức, tiếng Tây Ban Nha, và nhiều hơn nữa. Công cụ chuyển văn bản thành giọng nói miễn phí của chúng tôi cung cấp khả năng chuyển đổi không giới hạn mà không cần đăng ký.',
        hiddenDesc2:
          'Hoàn hảo cho người sáng tạo nội dung, học sinh, người học ngôn ngữ, và nhu cầu tiếp cận. Tạo nội dung âm thanh từ văn bản ngay lập tức với công nghệ tổng hợp giọng nói chất lượng cao của chúng tôi.',
      },
    },
    zh: {
      nav: {
        home: '首页',
        about: '关于我们',
        contact: '联系我们',
        language: '语言',
      },
      footer: {
        copyright: 'Donate Bank MB Bank - 39186868888',
        privacy: '隐私政策',
        terms: '服务条款',
        contact: '联系我们',
      },
      app: {
        title: '文字转语音',
        placeholder: '输入要转换的文字...',
        language: '语言：',
        voice: '语音：',
        speed: '速度：',
        pitch: '音调：',
        convert: '转换',
        processing: '处理中...',
        longTextWarning: '长文本处理需要更多时间。请等待。',
        history: '转换历史',
        play: '播放',
        download: '下载',
        error: '转换文字为语音时发生错误',
        tooLong: '文本太长，请分成几个小部分。',
      },
      seo: {
        title: '免费无限制文字转语音转换器 | 多种语言',
        description:
          '免费将任何文本转换为自然语音。无限使用，支持多种语言、语音，无限制。适合内容创作者、学生和无障碍需求。',
        keywords:
          '文字转语音，免费tts，语音生成器，语音合成，音频转换器，多种语言，无限制文字转语音',
        ogTitle: '免费无限制文字转语音转换器',
        ogDescription: '免费将任何文本转换为自然语音。无限制，无需注册。',
        hiddenTitle: '免费无限制文字转语音转换器',
        hiddenDesc1:
          '将任何文本转换为多种语言的自然语音，包括中文、英语、日语、韩语、法语、德语、西班牙语等。我们的免费文字转语音工具提供无限转换，无需注册。',
        hiddenDesc2:
          '适合内容创作者、学生、语言学习者和无障碍需求。使用我们的高质量语音合成技术，立即从文本创建音频内容。',
      },
    },
  },
  Th = fh({ legacy: !1, locale: 'en', fallbackLocale: 'en', messages: Ea }),
  Sh = [
    { code: 'en', name: 'English' },
    { code: 'vi', name: 'Tiếng Việt' },
    { code: 'zh', name: '中文' },
  ];
function Ta(e) {
  const t = Ea[e].seo;
  document.title = t.title;
  const n = document.querySelector('meta[name="description"]');
  n && n.setAttribute('content', t.description);
  const r = document.querySelector('meta[name="keywords"]');
  r && r.setAttribute('content', t.keywords);
  const s = document.querySelector('meta[property="og:title"]');
  s && s.setAttribute('content', t.ogTitle);
  const o = document.querySelector('meta[property="og:description"]');
  o && o.setAttribute('content', t.ogDescription);
  const i = document.querySelector('meta[property="twitter:title"]');
  i && i.setAttribute('content', t.ogTitle);
  const l = document.querySelector('meta[property="twitter:description"]');
  l && l.setAttribute('content', t.ogDescription);
  const a = document.querySelector('.seo-content h1');
  a && (a.textContent = t.hiddenTitle);
  const f = document.querySelector('.seo-content p:nth-child(2)');
  f && (f.textContent = t.hiddenDesc1);
  const d = document.querySelector('.seo-content p:nth-child(3)');
  d && (d.textContent = t.hiddenDesc2);
}
const Lh = '/images/icon.png',
  Dr = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
  },
  wh = {
    name: 'Navbar',
    setup() {
      const { locale: e } = Kn(),
        t = he(!1),
        n = he(e.value);
      return {
        isMenuActive: t,
        toggleMenu: () => {
          t.value = !t.value;
        },
        selectedLanguage: n,
        changeLanguage: () => {
          (e.value = n.value), Ta(n.value);
        },
        availableLanguages: Sh,
      };
    },
  },
  Ch = { class: 'navbar' },
  Oh = { href: '/', class: 'navbar-logo' },
  Nh = ['alt'],
  Ah = { href: '/', class: 'navbar-link' },
  Rh = { href: '/about', class: 'navbar-link' },
  Ih = { href: '/contact', class: 'navbar-link' },
  Ph = { class: 'language-dropdown' },
  xh = ['value'];
function Fh(e, t, n, r, s, o) {
  return (
    Le(),
    xe('nav', Ch, [
      H('a', Oh, [
        H(
          'img',
          { src: Lh, width: '50', height: '50', alt: e.$t('nav.home') },
          null,
          8,
          Nh
        ),
      ]),
      H(
        'button',
        {
          class: 'menu-toggle',
          onClick:
            t[0] || (t[0] = (...i) => r.toggleMenu && r.toggleMenu(...i)),
        },
        '☰'
      ),
      H(
        'div',
        { class: Lr(['navbar-links', { active: r.isMenuActive }]) },
        [
          H('a', Ah, ee(e.$t('nav.home')), 1),
          H('a', Rh, ee(e.$t('nav.about')), 1),
          H('a', Ih, ee(e.$t('nav.contact')), 1),
          t[3] ||
            (t[3] = H(
              'a',
              { href: '/pc-tools', class: 'navbar-button' },
              'PC Tools',
              -1
            )),
          H('div', Ph, [
            nn(
              H(
                'select',
                {
                  'onUpdate:modelValue':
                    t[1] || (t[1] = (i) => (r.selectedLanguage = i)),
                  onChange:
                    t[2] ||
                    (t[2] = (...i) =>
                      r.changeLanguage && r.changeLanguage(...i)),
                },
                [
                  (Le(!0),
                  xe(
                    $e,
                    null,
                    er(
                      r.availableLanguages,
                      (i) => (
                        Le(),
                        xe(
                          'option',
                          { key: i.code, value: i.code },
                          ee(i.name),
                          9,
                          xh
                        )
                      )
                    ),
                    128
                  )),
                ],
                544
              ),
              [[bs, r.selectedLanguage]]
            ),
          ]),
        ],
        2
      ),
    ])
  );
}
const kh = Dr(wh, [
    ['render', Fh],
    ['__scopeId', 'data-v-e30909ba'],
  ]),
  Dh = {
    name: 'Footer',
    data() {
      return { isQRFullScreen: !1 };
    },
    methods: {
      showFullScreenQR() {
        (this.isQRFullScreen = !0), (document.body.style.overflow = 'hidden');
      },
      hideFullScreenQR() {
        (this.isQRFullScreen = !1), (document.body.style.overflow = '');
      },
    },
  },
  Mh = { class: 'footer' },
  Uh = { class: 'footer-container' },
  $h = { class: 'footer-section donate' },
  Hh = { class: 'copyright' },
  Vh = { class: 'footer-section' },
  jh = { href: '#privacy', class: 'footer-link' },
  Wh = { href: '#terms', class: 'footer-link' },
  Bh = { href: '#contact', class: 'footer-link' },
  Gh = { class: 'qr-fullscreen-container' };
function Kh(e, t, n, r, s, o) {
  return (
    Le(),
    xe('footer', Mh, [
      H('div', Uh, [
        H('div', $h, [
          H('img', {
            width: '50',
            height: '50',
            src: 'https://img.vietqr.io/image/MB-39186868888-compact.png',
            alt: 'ủng hộ tác giả',
            onClick:
              t[0] ||
              (t[0] = (...i) => o.showFullScreenQR && o.showFullScreenQR(...i)),
            class: 'qr-code',
          }),
          H('p', Hh, ee(e.$t('footer.copyright')), 1),
        ]),
        H('div', Vh, [
          H('a', jh, ee(e.$t('footer.privacy')), 1),
          H('a', Wh, ee(e.$t('footer.terms')), 1),
          H('a', Bh, ee(e.$t('footer.contact')), 1),
        ]),
      ]),
      s.isQRFullScreen
        ? (Le(),
          xe(
            'div',
            {
              key: 0,
              class: 'qr-fullscreen-overlay',
              onClick:
                t[2] ||
                (t[2] = (...i) =>
                  o.hideFullScreenQR && o.hideFullScreenQR(...i)),
            },
            [
              H('div', Gh, [
                t[3] ||
                  (t[3] = H(
                    'img',
                    {
                      src: 'https://img.vietqr.io/image/MB-39186868888-compact.png',
                      alt: 'ủng hộ tác giả',
                      class: 'qr-fullscreen-image',
                    },
                    null,
                    -1
                  )),
                H(
                  'button',
                  {
                    class: 'close-button',
                    onClick:
                      t[1] ||
                      (t[1] = (...i) =>
                        o.hideFullScreenQR && o.hideFullScreenQR(...i)),
                  },
                  '×'
                ),
              ]),
            ]
          ))
        : ps('', !0),
    ])
  );
}
const qh = Dr(Dh, [
    ['render', Kh],
    ['__scopeId', 'data-v-dabda9d4'],
  ]),
  Yh = { name: 'SeoContent' },
  Jh = { class: 'seo-content', style: { display: 'none' } };
function Xh(e, t, n, r, s, o) {
  return (
    Le(),
    xe('div', Jh, [
      H('h1', null, ee(e.$t('seo.hiddenTitle')), 1),
      H('p', null, ee(e.$t('seo.hiddenDesc1')), 1),
      H('p', null, ee(e.$t('seo.hiddenDesc2')), 1),
    ])
  );
}
const Qh = Dr(Yh, [['render', Xh]]),
  Zh = {
    name: 'App',
    components: { Navbar: kh, Footer: qh, SeoContent: Qh },
    setup() {
      const e = wf(),
        { t, locale: n } = Kn(),
        r = he(''),
        s = he(''),
        o = he(''),
        i = he(1),
        l = he(0),
        a = he(null),
        f = hn([]),
        d = hn([]),
        h = he([]),
        g = he(!1);
      Qs(async () => {
        await e.dispatch('fetchVoices'),
          f.push(...e.state.voices),
          f.length > 0 && ((s.value = f[0].languageCode), v()),
          Ta(n.value);
      });
      const v = () => {
        const w = f.find((b) => b.languageCode === s.value);
        w && w.voices && w.voices.length > 0
          ? ((h.value = w.voices), (o.value = w.voices[0].id))
          : ((h.value = []), (o.value = ''));
      };
      return {
        text: r,
        selectedLanguage: s,
        selectedVoice: o,
        speed: i,
        pitch: l,
        voices: f,
        availableVoices: h,
        history: d,
        audioPlayer: a,
        convertToSpeech: async () => {
          try {
            (g.value = !0),
              r.value.length > 5e3 && alert(t('app.longTextWarning'));
            const w = await e.dispatch('synthesizeSpeech', {
                text: r.value,
                languageCode: s.value,
                voiceId: o.value,
                speakingRate: i.value,
                pitch: l.value,
              }),
              b = new Blob([w], { type: 'audio/mp3' }),
              T = URL.createObjectURL(b);
            (a.value.src = T),
              a.value.play(),
              d.unshift({
                text: r.value,
                language: s.value,
                voice: o.value,
                audioUrl: T,
              });
          } catch (w) {
            console.error('Error converting text to speech:', w);
            let b = t('app.error');
            w.response && w.response.data && w.response.data.error
              ? (b += ': ' + w.response.data.error)
              : r.value.length > 1e4 && (b += '. ' + t('app.tooLong')),
              alert(b);
          } finally {
            g.value = !1;
          }
        },
        playFromHistory: (w) => {
          (a.value.src = w.audioUrl), a.value.play();
        },
        downloadFromHistory: (w) => {
          const b = document.createElement('a');
          b.href = w.audioUrl;
          const T = `tts_${w.text
            .substring(0, 20)
            .replace(/[^a-zA-Z0-9]/g, '_')}.mp3`;
          (b.download = T),
            document.body.appendChild(b),
            b.click(),
            document.body.removeChild(b);
        },
        getLanguageName: (w) => {
          const b = f.find((T) => T.languageCode === w);
          return b ? b.name : w;
        },
        getVoiceName: (w) => {
          for (const b of f)
            if (b.voices) {
              const T = b.voices.find((k) => k.id === w);
              if (T)
                return T.name + (T.gender === 'FEMALE' ? ' (Nữ)' : ' (Nam)');
            }
          return w;
        },
        onLanguageChange: v,
        isLoading: g,
      };
    },
  },
  zh = { class: 'container' },
  em = { class: 'input-section' },
  tm = ['placeholder'],
  nm = { class: 'controls' },
  rm = { class: 'control-group' },
  sm = ['value'],
  om = { class: 'control-group' },
  im = ['value'],
  lm = { class: 'control-group' },
  am = { class: 'control-group' },
  cm = ['disabled'],
  um = { key: 0, class: 'loading-indicator' },
  fm = { ref: 'audioPlayer', controls: '' },
  dm = { key: 0, class: 'history' },
  hm = { class: 'history-text' },
  mm = { class: 'history-info' },
  pm = { class: 'history-buttons' },
  gm = ['onClick'],
  _m = ['onClick'];
function bm(e, t, n, r, s, o) {
  const i = Yr('Navbar'),
    l = Yr('Footer'),
    a = Yr('SeoContent');
  return (
    Le(),
    xe('div', null, [
      Ee(i),
      H('div', zh, [
        H('h1', null, ee(e.$t('app.title')), 1),
        H('div', em, [
          nn(
            H(
              'textarea',
              {
                'onUpdate:modelValue': t[0] || (t[0] = (f) => (r.text = f)),
                placeholder: e.$t('app.placeholder'),
                rows: '5',
              },
              null,
              8,
              tm
            ),
            [[es, r.text]]
          ),
          H('div', nm, [
            H('div', rm, [
              H('label', null, ee(e.$t('app.language')), 1),
              nn(
                H(
                  'select',
                  {
                    'onUpdate:modelValue':
                      t[1] || (t[1] = (f) => (r.selectedLanguage = f)),
                    onChange:
                      t[2] ||
                      (t[2] = (...f) =>
                        r.onLanguageChange && r.onLanguageChange(...f)),
                  },
                  [
                    (Le(!0),
                    xe(
                      $e,
                      null,
                      er(
                        r.voices,
                        (f) => (
                          Le(),
                          xe(
                            'option',
                            { key: f.languageCode, value: f.languageCode },
                            ee(f.name) + ' (' + ee(f.country) + ') ',
                            9,
                            sm
                          )
                        )
                      ),
                      128
                    )),
                  ],
                  544
                ),
                [[bs, r.selectedLanguage]]
              ),
            ]),
            H('div', om, [
              H('label', null, ee(e.$t('app.voice')), 1),
              nn(
                H(
                  'select',
                  {
                    'onUpdate:modelValue':
                      t[3] || (t[3] = (f) => (r.selectedVoice = f)),
                  },
                  [
                    (Le(!0),
                    xe(
                      $e,
                      null,
                      er(
                        r.availableVoices,
                        (f) => (
                          Le(),
                          xe(
                            'option',
                            { key: f.id, value: f.id },
                            ee(f.name) +
                              ' (' +
                              ee(f.gender === 'FEMALE' ? 'Nữ' : 'Nam') +
                              ') ',
                            9,
                            im
                          )
                        )
                      ),
                      128
                    )),
                  ],
                  512
                ),
                [[bs, r.selectedVoice]]
              ),
            ]),
            H('div', lm, [
              H('label', null, ee(e.$t('app.speed')), 1),
              nn(
                H(
                  'input',
                  {
                    type: 'range',
                    'onUpdate:modelValue':
                      t[4] || (t[4] = (f) => (r.speed = f)),
                    min: '0.25',
                    max: '4',
                    step: '0.25',
                  },
                  null,
                  512
                ),
                [[es, r.speed]]
              ),
              H('span', null, ee(r.speed) + 'x', 1),
            ]),
            H('div', am, [
              H('label', null, ee(e.$t('app.pitch')), 1),
              nn(
                H(
                  'input',
                  {
                    type: 'range',
                    'onUpdate:modelValue':
                      t[5] || (t[5] = (f) => (r.pitch = f)),
                    min: '-20',
                    max: '20',
                    step: '1',
                  },
                  null,
                  512
                ),
                [[es, r.pitch]]
              ),
              H('span', null, ee(r.pitch), 1),
            ]),
          ]),
          H(
            'button',
            {
              onClick:
                t[6] ||
                (t[6] = (...f) => r.convertToSpeech && r.convertToSpeech(...f)),
              disabled: !r.text || r.isLoading,
            },
            ee(r.isLoading ? e.$t('app.processing') : e.$t('app.convert')),
            9,
            cm
          ),
          r.isLoading
            ? (Le(),
              xe('div', um, [
                t[7] || (t[7] = H('div', { class: 'spinner' }, null, -1)),
                H('p', null, ee(e.$t('app.longTextWarning')), 1),
              ]))
            : ps('', !0),
        ]),
        H('audio', fm, null, 512),
        r.history.length > 0
          ? (Le(),
            xe('div', dm, [
              H('h2', null, ee(e.$t('app.history')), 1),
              H('ul', null, [
                (Le(!0),
                xe(
                  $e,
                  null,
                  er(
                    r.history,
                    (f, d) => (
                      Le(),
                      xe('li', { key: d }, [
                        H('div', hm, ee(f.text), 1),
                        H('div', mm, [
                          H(
                            'span',
                            null,
                            ee(r.getLanguageName(f.language)) +
                              ' - ' +
                              ee(r.getVoiceName(f.voice)),
                            1
                          ),
                          H('div', pm, [
                            H(
                              'button',
                              { onClick: (h) => r.playFromHistory(f) },
                              ee(e.$t('app.play')),
                              9,
                              gm
                            ),
                            H(
                              'button',
                              {
                                onClick: (h) => r.downloadFromHistory(f),
                                class: 'download-btn',
                              },
                              ee(e.$t('app.download')),
                              9,
                              _m
                            ),
                          ]),
                        ]),
                      ])
                    )
                  ),
                  128
                )),
              ]),
            ]))
          : ps('', !0),
      ]),
      Ee(l),
      Ee(a),
    ])
  );
}
const ym = Dr(Zh, [['render', bm]]);
function Sa(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: vm } = Object.prototype,
  { getPrototypeOf: uo } = Object,
  Mr = ((e) => (t) => {
    const n = vm.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  nt = (e) => ((e = e.toLowerCase()), (t) => Mr(t) === e),
  Ur = (e) => (t) => typeof t === e,
  { isArray: _n } = Array,
  Hn = Ur('undefined');
function Em(e) {
  return (
    e !== null &&
    !Hn(e) &&
    e.constructor !== null &&
    !Hn(e.constructor) &&
    Ye(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const La = nt('ArrayBuffer');
function Tm(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && La(e.buffer)),
    t
  );
}
const Sm = Ur('string'),
  Ye = Ur('function'),
  wa = Ur('number'),
  $r = (e) => e !== null && typeof e == 'object',
  Lm = (e) => e === !0 || e === !1,
  rr = (e) => {
    if (Mr(e) !== 'object') return !1;
    const t = uo(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  wm = nt('Date'),
  Cm = nt('File'),
  Om = nt('Blob'),
  Nm = nt('FileList'),
  Am = (e) => $r(e) && Ye(e.pipe),
  Rm = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (Ye(e.append) &&
          ((t = Mr(e)) === 'formdata' ||
            (t === 'object' &&
              Ye(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  Im = nt('URLSearchParams'),
  [Pm, xm, Fm, km] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    nt
  ),
  Dm = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function qn(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, s;
  if ((typeof e != 'object' && (e = [e]), _n(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let l;
    for (r = 0; r < i; r++) (l = o[r]), t.call(null, e[l], l, e);
  }
}
function Ca(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const Wt =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global,
  Oa = (e) => !Hn(e) && e !== Wt;
function Is() {
  const { caseless: e } = (Oa(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && Ca(t, s)) || s;
      rr(t[o]) && rr(r)
        ? (t[o] = Is(t[o], r))
        : rr(r)
        ? (t[o] = Is({}, r))
        : _n(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && qn(arguments[r], n);
  return t;
}
const Mm = (e, t, n, { allOwnKeys: r } = {}) => (
    qn(
      t,
      (s, o) => {
        n && Ye(s) ? (e[o] = Sa(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Um = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  $m = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Hm = (e, t, n, r) => {
    let s, o, i;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !l[i] && ((t[i] = e[i]), (l[i] = !0));
      e = n !== !1 && uo(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Vm = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  jm = (e) => {
    if (!e) return null;
    if (_n(e)) return e;
    let t = e.length;
    if (!wa(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Wm = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && uo(Uint8Array)),
  Bm = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  Gm = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Km = nt('HTMLFormElement'),
  qm = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  wi = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Ym = nt('RegExp'),
  Na = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    qn(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  Jm = (e) => {
    Na(e, (t, n) => {
      if (Ye(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ye(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Xm = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return _n(e) ? r(e) : r(String(e).split(t)), n;
  },
  Qm = () => {},
  Zm = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function zm(e) {
  return !!(
    e &&
    Ye(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const ep = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if ($r(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[s] = r;
            const o = _n(r) ? [] : {};
            return (
              qn(r, (i, l) => {
                const a = n(i, s + 1);
                !Hn(a) && (o[l] = a);
              }),
              (t[s] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  tp = nt('AsyncFunction'),
  np = (e) => e && ($r(e) || Ye(e)) && Ye(e.then) && Ye(e.catch),
  Aa = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          Wt.addEventListener(
            'message',
            ({ source: s, data: o }) => {
              s === Wt && o === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), Wt.postMessage(n, '*');
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == 'function',
    Ye(Wt.postMessage)
  ),
  rp =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(Wt)
      : (typeof process < 'u' && process.nextTick) || Aa,
  A = {
    isArray: _n,
    isArrayBuffer: La,
    isBuffer: Em,
    isFormData: Rm,
    isArrayBufferView: Tm,
    isString: Sm,
    isNumber: wa,
    isBoolean: Lm,
    isObject: $r,
    isPlainObject: rr,
    isReadableStream: Pm,
    isRequest: xm,
    isResponse: Fm,
    isHeaders: km,
    isUndefined: Hn,
    isDate: wm,
    isFile: Cm,
    isBlob: Om,
    isRegExp: Ym,
    isFunction: Ye,
    isStream: Am,
    isURLSearchParams: Im,
    isTypedArray: Wm,
    isFileList: Nm,
    forEach: qn,
    merge: Is,
    extend: Mm,
    trim: Dm,
    stripBOM: Um,
    inherits: $m,
    toFlatObject: Hm,
    kindOf: Mr,
    kindOfTest: nt,
    endsWith: Vm,
    toArray: jm,
    forEachEntry: Bm,
    matchAll: Gm,
    isHTMLForm: Km,
    hasOwnProperty: wi,
    hasOwnProp: wi,
    reduceDescriptors: Na,
    freezeMethods: Jm,
    toObjectSet: Xm,
    toCamelCase: qm,
    noop: Qm,
    toFiniteNumber: Zm,
    findKey: Ca,
    global: Wt,
    isContextDefined: Oa,
    isSpecCompliantForm: zm,
    toJSONObject: ep,
    isAsyncFn: tp,
    isThenable: np,
    setImmediate: Aa,
    asap: rp,
  };
function W(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
A.inherits(W, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: A.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Ra = W.prototype,
  Ia = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  Ia[e] = { value: e };
});
Object.defineProperties(W, Ia);
Object.defineProperty(Ra, 'isAxiosError', { value: !0 });
W.from = (e, t, n, r, s, o) => {
  const i = Object.create(Ra);
  return (
    A.toFlatObject(
      e,
      i,
      function (a) {
        return a !== Error.prototype;
      },
      (l) => l !== 'isAxiosError'
    ),
    W.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const sp = null;
function Ps(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function Pa(e) {
  return A.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function Ci(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = Pa(s)), !n && o ? '[' + s + ']' : s;
        })
        .join(n ? '.' : '')
    : t;
}
function op(e) {
  return A.isArray(e) && !e.some(Ps);
}
const ip = A.toFlatObject(A, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Hr(e, t, n) {
  if (!A.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = A.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (N, R) {
        return !A.isUndefined(R[N]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || d,
    o = n.dots,
    i = n.indexes,
    a = (n.Blob || (typeof Blob < 'u' && Blob)) && A.isSpecCompliantForm(t);
  if (!A.isFunction(s)) throw new TypeError('visitor must be a function');
  function f(L) {
    if (L === null) return '';
    if (A.isDate(L)) return L.toISOString();
    if (!a && A.isBlob(L))
      throw new W('Blob is not supported. Use a Buffer instead.');
    return A.isArrayBuffer(L) || A.isTypedArray(L)
      ? a && typeof Blob == 'function'
        ? new Blob([L])
        : Buffer.from(L)
      : L;
  }
  function d(L, N, R) {
    let _ = L;
    if (L && !R && typeof L == 'object') {
      if (A.endsWith(N, '{}'))
        (N = r ? N : N.slice(0, -2)), (L = JSON.stringify(L));
      else if (
        (A.isArray(L) && op(L)) ||
        ((A.isFileList(L) || A.endsWith(N, '[]')) && (_ = A.toArray(L)))
      )
        return (
          (N = Pa(N)),
          _.forEach(function (w, b) {
            !(A.isUndefined(w) || w === null) &&
              t.append(
                i === !0 ? Ci([N], b, o) : i === null ? N : N + '[]',
                f(w)
              );
          }),
          !1
        );
    }
    return Ps(L) ? !0 : (t.append(Ci(R, N, o), f(L)), !1);
  }
  const h = [],
    g = Object.assign(ip, {
      defaultVisitor: d,
      convertValue: f,
      isVisitable: Ps,
    });
  function v(L, N) {
    if (!A.isUndefined(L)) {
      if (h.indexOf(L) !== -1)
        throw Error('Circular reference detected in ' + N.join('.'));
      h.push(L),
        A.forEach(L, function (_, C) {
          (!(A.isUndefined(_) || _ === null) &&
            s.call(t, _, A.isString(C) ? C.trim() : C, N, g)) === !0 &&
            v(_, N ? N.concat(C) : [C]);
        }),
        h.pop();
    }
  }
  if (!A.isObject(e)) throw new TypeError('data must be an object');
  return v(e), t;
}
function Oi(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function fo(e, t) {
  (this._pairs = []), e && Hr(e, this, t);
}
const xa = fo.prototype;
xa.append = function (t, n) {
  this._pairs.push([t, n]);
};
xa.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Oi);
      }
    : Oi;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + '=' + n(s[1]);
    }, '')
    .join('&');
};
function lp(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Fa(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || lp;
  A.isFunction(n) && (n = { serialize: n });
  const s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = A.isURLSearchParams(t) ? t.toString() : new fo(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf('#');
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + o);
  }
  return e;
}
class Ni {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    A.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const ka = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  ap = typeof URLSearchParams < 'u' ? URLSearchParams : fo,
  cp = typeof FormData < 'u' ? FormData : null,
  up = typeof Blob < 'u' ? Blob : null,
  fp = {
    isBrowser: !0,
    classes: { URLSearchParams: ap, FormData: cp, Blob: up },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  ho = typeof window < 'u' && typeof document < 'u',
  xs = (typeof navigator == 'object' && navigator) || void 0,
  dp =
    ho &&
    (!xs || ['ReactNative', 'NativeScript', 'NS'].indexOf(xs.product) < 0),
  hp =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  mp = (ho && window.location.href) || 'http://localhost',
  pp = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: ho,
        hasStandardBrowserEnv: dp,
        hasStandardBrowserWebWorkerEnv: hp,
        navigator: xs,
        origin: mp,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Oe = { ...pp, ...fp };
function gp(e, t) {
  return Hr(
    e,
    new Oe.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return Oe.isNode && A.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function _p(e) {
  return A.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0]
  );
}
function bp(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Da(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === '__proto__') return !0;
    const l = Number.isFinite(+i),
      a = o >= n.length;
    return (
      (i = !i && A.isArray(s) ? s.length : i),
      a
        ? (A.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !l)
        : ((!s[i] || !A.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && A.isArray(s[i]) && (s[i] = bp(s[i])),
          !l)
    );
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const n = {};
    return (
      A.forEachEntry(e, (r, s) => {
        t(_p(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function yp(e, t, n) {
  if (A.isString(e))
    try {
      return (t || JSON.parse)(e), A.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const Yn = {
  transitional: ka,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        s = r.indexOf('application/json') > -1,
        o = A.isObject(t);
      if ((o && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t)))
        return s ? JSON.stringify(Da(t)) : t;
      if (
        A.isArrayBuffer(t) ||
        A.isBuffer(t) ||
        A.isStream(t) ||
        A.isFile(t) ||
        A.isBlob(t) ||
        A.isReadableStream(t)
      )
        return t;
      if (A.isArrayBufferView(t)) return t.buffer;
      if (A.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        );
      let l;
      if (o) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return gp(t, this.formSerializer).toString();
        if ((l = A.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const a = this.env && this.env.FormData;
          return Hr(
            l ? { 'files[]': t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return o || s ? (n.setContentType('application/json', !1), yp(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Yn.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === 'json';
      if (A.isResponse(t) || A.isReadableStream(t)) return t;
      if (t && A.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (i)
            throw l.name === 'SyntaxError'
              ? W.from(l, W.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Oe.classes.FormData, Blob: Oe.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
A.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  Yn.headers[e] = {};
});
const vp = A.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  Ep = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (s = i.indexOf(':')),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && vp[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  Ai = Symbol('internals');
function Sn(e) {
  return e && String(e).trim().toLowerCase();
}
function sr(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(sr) : String(e);
}
function Tp(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Sp = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function rs(e, t, n, r, s) {
  if (A.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!A.isString(t))) {
    if (A.isString(r)) return t.indexOf(r) !== -1;
    if (A.isRegExp(r)) return r.test(t);
  }
}
function Lp(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function wp(e, t) {
  const n = A.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0,
    });
  });
}
let Ve = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, a, f) {
      const d = Sn(a);
      if (!d) throw new Error('header name must be a non-empty string');
      const h = A.findKey(s, d);
      (!h || s[h] === void 0 || f === !0 || (f === void 0 && s[h] !== !1)) &&
        (s[h || a] = sr(l));
    }
    const i = (l, a) => A.forEach(l, (f, d) => o(f, d, a));
    if (A.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (A.isString(t) && (t = t.trim()) && !Sp(t)) i(Ep(t), n);
    else if (A.isHeaders(t)) for (const [l, a] of t.entries()) o(a, l, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Sn(t)), t)) {
      const r = A.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return Tp(s);
        if (A.isFunction(n)) return n.call(this, s, r);
        if (A.isRegExp(n)) return n.exec(s);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = Sn(t)), t)) {
      const r = A.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || rs(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = Sn(i)), i)) {
        const l = A.findKey(r, i);
        l && (!n || rs(r, r[l], l, n)) && (delete r[l], (s = !0));
      }
    }
    return A.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || rs(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      A.forEach(this, (s, o) => {
        const i = A.findKey(r, o);
        if (i) {
          (n[i] = sr(s)), delete n[o];
          return;
        }
        const l = t ? Lp(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = sr(s)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      A.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && A.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Ai] = this[Ai] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const l = Sn(i);
      r[l] || (wp(s, i), (r[l] = !0));
    }
    return A.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Ve.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
A.reduceDescriptors(Ve.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
A.freezeMethods(Ve);
function ss(e, t) {
  const n = this || Yn,
    r = t || n,
    s = Ve.from(r.headers);
  let o = r.data;
  return (
    A.forEach(e, function (l) {
      o = l.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function Ma(e) {
  return !!(e && e.__CANCEL__);
}
function bn(e, t, n) {
  W.call(this, e ?? 'canceled', W.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
A.inherits(bn, W, { __CANCEL__: !0 });
function Ua(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new W(
          'Request failed with status code ' + n.status,
          [W.ERR_BAD_REQUEST, W.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function Cp(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function Op(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const f = Date.now(),
        d = r[o];
      i || (i = f), (n[s] = a), (r[s] = f);
      let h = o,
        g = 0;
      for (; h !== s; ) (g += n[h++]), (h = h % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), f - i < t)) return;
      const v = d && f - d;
      return v ? Math.round((g * 1e3) / v) : void 0;
    }
  );
}
function Np(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    o;
  const i = (f, d = Date.now()) => {
    (n = d), (s = null), o && (clearTimeout(o), (o = null)), e.apply(null, f);
  };
  return [
    (...f) => {
      const d = Date.now(),
        h = d - n;
      h >= r
        ? i(f, d)
        : ((s = f),
          o ||
            (o = setTimeout(() => {
              (o = null), i(s);
            }, r - h)));
    },
    () => s && i(s),
  ];
}
const _r = (e, t, n = 3) => {
    let r = 0;
    const s = Op(50, 250);
    return Np((o) => {
      const i = o.loaded,
        l = o.lengthComputable ? o.total : void 0,
        a = i - r,
        f = s(a),
        d = i <= l;
      r = i;
      const h = {
        loaded: i,
        total: l,
        progress: l ? i / l : void 0,
        bytes: a,
        rate: f || void 0,
        estimated: f && l && d ? (l - i) / f : void 0,
        event: o,
        lengthComputable: l != null,
        [t ? 'download' : 'upload']: !0,
      };
      e(h);
    }, n);
  },
  Ri = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Ii =
    (e) =>
    (...t) =>
      A.asap(() => e(...t)),
  Ap = Oe.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, Oe.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(Oe.origin),
        Oe.navigator && /(msie|trident)/i.test(Oe.navigator.userAgent)
      )
    : () => !0,
  Rp = Oe.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, o) {
          const i = [e + '=' + encodeURIComponent(t)];
          A.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
            A.isString(r) && i.push('path=' + r),
            A.isString(s) && i.push('domain=' + s),
            o === !0 && i.push('secure'),
            (document.cookie = i.join('; '));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Ip(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Pp(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function $a(e, t, n) {
  let r = !Ip(t);
  return e && (r || n == !1) ? Pp(e, t) : t;
}
const Pi = (e) => (e instanceof Ve ? { ...e } : e);
function Yt(e, t) {
  t = t || {};
  const n = {};
  function r(f, d, h, g) {
    return A.isPlainObject(f) && A.isPlainObject(d)
      ? A.merge.call({ caseless: g }, f, d)
      : A.isPlainObject(d)
      ? A.merge({}, d)
      : A.isArray(d)
      ? d.slice()
      : d;
  }
  function s(f, d, h, g) {
    if (A.isUndefined(d)) {
      if (!A.isUndefined(f)) return r(void 0, f, h, g);
    } else return r(f, d, h, g);
  }
  function o(f, d) {
    if (!A.isUndefined(d)) return r(void 0, d);
  }
  function i(f, d) {
    if (A.isUndefined(d)) {
      if (!A.isUndefined(f)) return r(void 0, f);
    } else return r(void 0, d);
  }
  function l(f, d, h) {
    if (h in t) return r(f, d);
    if (h in e) return r(void 0, f);
  }
  const a = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (f, d, h) => s(Pi(f), Pi(d), h, !0),
  };
  return (
    A.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const h = a[d] || s,
        g = h(e[d], t[d], d);
      (A.isUndefined(g) && h !== l) || (n[d] = g);
    }),
    n
  );
}
const Ha = (e) => {
    const t = Yt({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: o,
      headers: i,
      auth: l,
    } = t;
    (t.headers = i = Ve.from(i)),
      (t.url = Fa(
        $a(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer
      )),
      l &&
        i.set(
          'Authorization',
          'Basic ' +
            btoa(
              (l.username || '') +
                ':' +
                (l.password ? unescape(encodeURIComponent(l.password)) : '')
            )
        );
    let a;
    if (A.isFormData(n)) {
      if (Oe.hasStandardBrowserEnv || Oe.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((a = i.getContentType()) !== !1) {
        const [f, ...d] = a
          ? a
              .split(';')
              .map((h) => h.trim())
              .filter(Boolean)
          : [];
        i.setContentType([f || 'multipart/form-data', ...d].join('; '));
      }
    }
    if (
      Oe.hasStandardBrowserEnv &&
      (r && A.isFunction(r) && (r = r(t)), r || (r !== !1 && Ap(t.url)))
    ) {
      const f = s && o && Rp.read(o);
      f && i.set(s, f);
    }
    return t;
  },
  xp = typeof XMLHttpRequest < 'u',
  Fp =
    xp &&
    function (e) {
      return new Promise(function (n, r) {
        const s = Ha(e);
        let o = s.data;
        const i = Ve.from(s.headers).normalize();
        let { responseType: l, onUploadProgress: a, onDownloadProgress: f } = s,
          d,
          h,
          g,
          v,
          L;
        function N() {
          v && v(),
            L && L(),
            s.cancelToken && s.cancelToken.unsubscribe(d),
            s.signal && s.signal.removeEventListener('abort', d);
        }
        let R = new XMLHttpRequest();
        R.open(s.method.toUpperCase(), s.url, !0), (R.timeout = s.timeout);
        function _() {
          if (!R) return;
          const w = Ve.from(
              'getAllResponseHeaders' in R && R.getAllResponseHeaders()
            ),
            T = {
              data:
                !l || l === 'text' || l === 'json'
                  ? R.responseText
                  : R.response,
              status: R.status,
              statusText: R.statusText,
              headers: w,
              config: e,
              request: R,
            };
          Ua(
            function (D) {
              n(D), N();
            },
            function (D) {
              r(D), N();
            },
            T
          ),
            (R = null);
        }
        'onloadend' in R
          ? (R.onloadend = _)
          : (R.onreadystatechange = function () {
              !R ||
                R.readyState !== 4 ||
                (R.status === 0 &&
                  !(R.responseURL && R.responseURL.indexOf('file:') === 0)) ||
                setTimeout(_);
            }),
          (R.onabort = function () {
            R &&
              (r(new W('Request aborted', W.ECONNABORTED, e, R)), (R = null));
          }),
          (R.onerror = function () {
            r(new W('Network Error', W.ERR_NETWORK, e, R)), (R = null);
          }),
          (R.ontimeout = function () {
            let b = s.timeout
              ? 'timeout of ' + s.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const T = s.transitional || ka;
            s.timeoutErrorMessage && (b = s.timeoutErrorMessage),
              r(
                new W(
                  b,
                  T.clarifyTimeoutError ? W.ETIMEDOUT : W.ECONNABORTED,
                  e,
                  R
                )
              ),
              (R = null);
          }),
          o === void 0 && i.setContentType(null),
          'setRequestHeader' in R &&
            A.forEach(i.toJSON(), function (b, T) {
              R.setRequestHeader(T, b);
            }),
          A.isUndefined(s.withCredentials) ||
            (R.withCredentials = !!s.withCredentials),
          l && l !== 'json' && (R.responseType = s.responseType),
          f && (([g, L] = _r(f, !0)), R.addEventListener('progress', g)),
          a &&
            R.upload &&
            (([h, v] = _r(a)),
            R.upload.addEventListener('progress', h),
            R.upload.addEventListener('loadend', v)),
          (s.cancelToken || s.signal) &&
            ((d = (w) => {
              R &&
                (r(!w || w.type ? new bn(null, e, R) : w),
                R.abort(),
                (R = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(d),
            s.signal &&
              (s.signal.aborted ? d() : s.signal.addEventListener('abort', d)));
        const C = Cp(s.url);
        if (C && Oe.protocols.indexOf(C) === -1) {
          r(new W('Unsupported protocol ' + C + ':', W.ERR_BAD_REQUEST, e));
          return;
        }
        R.send(o || null);
      });
    },
  kp = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const o = function (f) {
        if (!s) {
          (s = !0), l();
          const d = f instanceof Error ? f : this.reason;
          r.abort(
            d instanceof W ? d : new bn(d instanceof Error ? d.message : d)
          );
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), o(new W(`timeout ${t} of ms exceeded`, W.ETIMEDOUT));
        }, t);
      const l = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((f) => {
            f.unsubscribe
              ? f.unsubscribe(o)
              : f.removeEventListener('abort', o);
          }),
          (e = null));
      };
      e.forEach((f) => f.addEventListener('abort', o));
      const { signal: a } = r;
      return (a.unsubscribe = () => A.asap(l)), a;
    }
  },
  Dp = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  Mp = async function* (e, t) {
    for await (const n of Up(e)) yield* Dp(n, t);
  },
  Up = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  xi = (e, t, n, r) => {
    const s = Mp(e, t);
    let o = 0,
      i,
      l = (a) => {
        i || ((i = !0), r && r(a));
      };
    return new ReadableStream(
      {
        async pull(a) {
          try {
            const { done: f, value: d } = await s.next();
            if (f) {
              l(), a.close();
              return;
            }
            let h = d.byteLength;
            if (n) {
              let g = (o += h);
              n(g);
            }
            a.enqueue(new Uint8Array(d));
          } catch (f) {
            throw (l(f), f);
          }
        },
        cancel(a) {
          return l(a), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Vr =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  Va = Vr && typeof ReadableStream == 'function',
  $p =
    Vr &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  ja = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Hp =
    Va &&
    ja(() => {
      let e = !1;
      const t = new Request(Oe.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !t;
    }),
  Fi = 64 * 1024,
  Fs = Va && ja(() => A.isReadableStream(new Response('').body)),
  br = { stream: Fs && ((e) => e.body) };
Vr &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !br[t] &&
        (br[t] = A.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new W(
                `Response type '${t}' is not supported`,
                W.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const Vp = async (e) => {
    if (e == null) return 0;
    if (A.isBlob(e)) return e.size;
    if (A.isSpecCompliantForm(e))
      return (
        await new Request(Oe.origin, { method: 'POST', body: e }).arrayBuffer()
      ).byteLength;
    if (A.isArrayBufferView(e) || A.isArrayBuffer(e)) return e.byteLength;
    if ((A.isURLSearchParams(e) && (e = e + ''), A.isString(e)))
      return (await $p(e)).byteLength;
  },
  jp = async (e, t) => {
    const n = A.toFiniteNumber(e.getContentLength());
    return n ?? Vp(t);
  },
  Wp =
    Vr &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: o,
        timeout: i,
        onDownloadProgress: l,
        onUploadProgress: a,
        responseType: f,
        headers: d,
        withCredentials: h = 'same-origin',
        fetchOptions: g,
      } = Ha(e);
      f = f ? (f + '').toLowerCase() : 'text';
      let v = kp([s, o && o.toAbortSignal()], i),
        L;
      const N =
        v &&
        v.unsubscribe &&
        (() => {
          v.unsubscribe();
        });
      let R;
      try {
        if (
          a &&
          Hp &&
          n !== 'get' &&
          n !== 'head' &&
          (R = await jp(d, r)) !== 0
        ) {
          let T = new Request(t, { method: 'POST', body: r, duplex: 'half' }),
            k;
          if (
            (A.isFormData(r) &&
              (k = T.headers.get('content-type')) &&
              d.setContentType(k),
            T.body)
          ) {
            const [D, J] = Ri(R, _r(Ii(a)));
            r = xi(T.body, Fi, D, J);
          }
        }
        A.isString(h) || (h = h ? 'include' : 'omit');
        const _ = 'credentials' in Request.prototype;
        L = new Request(t, {
          ...g,
          signal: v,
          method: n.toUpperCase(),
          headers: d.normalize().toJSON(),
          body: r,
          duplex: 'half',
          credentials: _ ? h : void 0,
        });
        let C = await fetch(L);
        const w = Fs && (f === 'stream' || f === 'response');
        if (Fs && (l || (w && N))) {
          const T = {};
          ['status', 'statusText', 'headers'].forEach((X) => {
            T[X] = C[X];
          });
          const k = A.toFiniteNumber(C.headers.get('content-length')),
            [D, J] = (l && Ri(k, _r(Ii(l), !0))) || [];
          C = new Response(
            xi(C.body, Fi, D, () => {
              J && J(), N && N();
            }),
            T
          );
        }
        f = f || 'text';
        let b = await br[A.findKey(br, f) || 'text'](C, e);
        return (
          !w && N && N(),
          await new Promise((T, k) => {
            Ua(T, k, {
              data: b,
              headers: Ve.from(C.headers),
              status: C.status,
              statusText: C.statusText,
              config: e,
              request: L,
            });
          })
        );
      } catch (_) {
        throw (
          (N && N(),
          _ && _.name === 'TypeError' && /fetch/i.test(_.message)
            ? Object.assign(new W('Network Error', W.ERR_NETWORK, e, L), {
                cause: _.cause || _,
              })
            : W.from(_, _ && _.code, e, L))
        );
      }
    }),
  ks = { http: sp, xhr: Fp, fetch: Wp };
A.forEach(ks, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const ki = (e) => `- ${e}`,
  Bp = (e) => A.isFunction(e) || e === null || e === !1,
  Wa = {
    getAdapter: (e) => {
      e = A.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !Bp(n) && ((r = ks[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new W(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || '#' + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([l, a]) =>
            `adapter ${l} ` +
            (a === !1
              ? 'is not supported by the environment'
              : 'is not available in the build')
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(ki).join(`
`)
            : ' ' + ki(o[0])
          : 'as no adapter specified';
        throw new W(
          'There is no suitable adapter to dispatch the request ' + i,
          'ERR_NOT_SUPPORT'
        );
      }
      return r;
    },
    adapters: ks,
  };
function os(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new bn(null, e);
}
function Di(e) {
  return (
    os(e),
    (e.headers = Ve.from(e.headers)),
    (e.data = ss.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Wa.getAdapter(e.adapter || Yn.adapter)(e).then(
      function (r) {
        return (
          os(e),
          (r.data = ss.call(e, e.transformResponse, r)),
          (r.headers = Ve.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Ma(r) ||
            (os(e),
            r &&
              r.response &&
              ((r.response.data = ss.call(e, e.transformResponse, r.response)),
              (r.response.headers = Ve.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Ba = '1.8.4',
  jr = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    jr[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  }
);
const Mi = {};
jr.transitional = function (t, n, r) {
  function s(o, i) {
    return (
      '[Axios v' +
      Ba +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? '. ' + r : '')
    );
  }
  return (o, i, l) => {
    if (t === !1)
      throw new W(
        s(i, ' has been removed' + (n ? ' in ' + n : '')),
        W.ERR_DEPRECATED
      );
    return (
      n &&
        !Mi[i] &&
        ((Mi[i] = !0),
        console.warn(
          s(
            i,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(o, i, l) : !0
    );
  };
};
jr.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Gp(e, t, n) {
  if (typeof e != 'object')
    throw new W('options must be an object', W.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const l = e[o],
        a = l === void 0 || i(l, o, e);
      if (a !== !0)
        throw new W('option ' + o + ' must be ' + a, W.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new W('Unknown option ' + o, W.ERR_BAD_OPTION);
  }
}
const or = { assertOptions: Gp, validators: jr },
  dt = or.validators;
let Gt = class {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Ni(), response: new Ni() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const o = s.stack ? s.stack.replace(/^.+\n/, '') : '';
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, '')) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Yt(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      or.assertOptions(
        r,
        {
          silentJSONParsing: dt.transitional(dt.boolean),
          forcedJSONParsing: dt.transitional(dt.boolean),
          clarifyTimeoutError: dt.transitional(dt.boolean),
        },
        !1
      ),
      s != null &&
        (A.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : or.assertOptions(
              s,
              { encode: dt.function, serialize: dt.function },
              !0
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      or.assertOptions(
        n,
        {
          baseUrl: dt.spelling('baseURL'),
          withXsrfToken: dt.spelling('withXSRFToken'),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let i = o && A.merge(o.common, o[n.method]);
    o &&
      A.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (L) => {
          delete o[L];
        }
      ),
      (n.headers = Ve.concat(i, o));
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function (N) {
      (typeof N.runWhen == 'function' && N.runWhen(n) === !1) ||
        ((a = a && N.synchronous), l.unshift(N.fulfilled, N.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function (N) {
      f.push(N.fulfilled, N.rejected);
    });
    let d,
      h = 0,
      g;
    if (!a) {
      const L = [Di.bind(this), void 0];
      for (
        L.unshift.apply(L, l),
          L.push.apply(L, f),
          g = L.length,
          d = Promise.resolve(n);
        h < g;

      )
        d = d.then(L[h++], L[h++]);
      return d;
    }
    g = l.length;
    let v = n;
    for (h = 0; h < g; ) {
      const L = l[h++],
        N = l[h++];
      try {
        v = L(v);
      } catch (R) {
        N.call(this, R);
        break;
      }
    }
    try {
      d = Di.call(this, v);
    } catch (L) {
      return Promise.reject(L);
    }
    for (h = 0, g = f.length; h < g; ) d = d.then(f[h++], f[h++]);
    return d;
  }
  getUri(t) {
    t = Yt(this.defaults, t);
    const n = $a(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Fa(n, t.params, t.paramsSerializer);
  }
};
A.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Gt.prototype[t] = function (n, r) {
    return this.request(
      Yt(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
A.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (o, i, l) {
      return this.request(
        Yt(l || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (Gt.prototype[t] = n()), (Gt.prototype[t + 'Form'] = n(!0));
});
let Kp = class Ga {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let o;
        const i = new Promise((l) => {
          r.subscribe(l), (o = l);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, l) {
        r.reason || ((r.reason = new bn(o, i, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Ga(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
};
function qp(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Yp(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const Ds = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ds).forEach(([e, t]) => {
  Ds[t] = e;
});
function Ka(e) {
  const t = new Gt(e),
    n = Sa(Gt.prototype.request, t);
  return (
    A.extend(n, Gt.prototype, t, { allOwnKeys: !0 }),
    A.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Ka(Yt(e, s));
    }),
    n
  );
}
const ue = Ka(Yn);
ue.Axios = Gt;
ue.CanceledError = bn;
ue.CancelToken = Kp;
ue.isCancel = Ma;
ue.VERSION = Ba;
ue.toFormData = Hr;
ue.AxiosError = W;
ue.Cancel = ue.CanceledError;
ue.all = function (t) {
  return Promise.all(t);
};
ue.spread = qp;
ue.isAxiosError = Yp;
ue.mergeConfig = Yt;
ue.AxiosHeaders = Ve;
ue.formToJSON = (e) => Da(A.isHTMLForm(e) ? new FormData(e) : e);
ue.getAdapter = Wa.getAdapter;
ue.HttpStatusCode = Ds;
ue.default = ue;
const {
    Axios: Zp,
    AxiosError: zp,
    CanceledError: eg,
    isCancel: tg,
    CancelToken: ng,
    VERSION: rg,
    all: sg,
    Cancel: og,
    isAxiosError: ig,
    spread: lg,
    toFormData: ag,
    AxiosHeaders: cg,
    HttpStatusCode: ug,
    formToJSON: fg,
    getAdapter: dg,
    mergeConfig: hg,
  } = ue,
  Jp = jf({
    state: { voices: [] },
    mutations: {
      setVoices(e, t) {
        e.voices = t;
      },
    },
    actions: {
      async fetchVoices({ commit: e }) {
        try {
          const t = await ue.get('https://tts.photoshop24h.com/api/voices');
          e('setVoices', t.data);
        } catch (t) {
          throw (console.error('Error fetching voices:', t), t);
        }
      },
      async synthesizeSpeech(e, t) {
        try {
          return (
            await ue.post('https://tts.photoshop24h.com/api/synthesize', t, {
              responseType: 'arraybuffer',
            })
          ).data;
        } catch (n) {
          throw (console.error('Error synthesizing speech:', n), n);
        }
      },
    },
  }),
  mo = mf(ym);
mo.use(Jp);
mo.use(Th);
mo.mount('#app');
