import L from "react";
var T = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function te() {
  if (F) return R;
  F = 1;
  var a = Symbol.for("react.transitional.element"), _ = Symbol.for("react.fragment");
  function f(d, s, u) {
    var m = null;
    if (u !== void 0 && (m = "" + u), s.key !== void 0 && (m = "" + s.key), "key" in s) {
      u = {};
      for (var E in s)
        E !== "key" && (u[E] = s[E]);
    } else u = s;
    return s = u.ref, {
      $$typeof: a,
      type: d,
      key: m,
      ref: s !== void 0 ? s : null,
      props: u
    };
  }
  return R.Fragment = _, R.jsx = f, R.jsxs = f, R;
}
var b = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function ne() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function a(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case z:
          return "Profiler";
        case J:
          return "StrictMode";
        case X:
          return "Suspense";
        case H:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case q:
            return "Portal";
          case G:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case B:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : a(e.type) || "Memo";
          case g:
            r = e._payload, e = e._init;
            try {
              return a(e(r));
            } catch {
            }
        }
      return null;
    }
    function _(e) {
      return "" + e;
    }
    function f(e) {
      try {
        _(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), _(e);
      }
    }
    function d(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === g)
        return "<...>";
      try {
        var r = a(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function E(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function U() {
      var e = a(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, r, t, n, l, c, h, j) {
      return t = c.ref, e = {
        $$typeof: P,
        type: e,
        key: r,
        props: c,
        _owner: l
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: U
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: h
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function S(e, r, t, n, l, c, h, j) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (ee(o)) {
            for (n = 0; n < o.length; n++)
              w(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(o);
      if (y.call(r, "key")) {
        o = a(e);
        var i = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        n = 0 < i.length ? "{key: someKey, " + i.join(": ..., ") + ": ...}" : "{key: someKey}", $[o + n] || (i = 0 < i.length ? "{" + i.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          i,
          o
        ), $[o + n] = !0);
      }
      if (o = null, t !== void 0 && (f(t), o = "" + t), m(r) && (f(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var x in r)
          x !== "key" && (t[x] = r[x]);
      } else t = r;
      return o && E(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        o,
        c,
        l,
        s(),
        t,
        h,
        j
      );
    }
    function w(e) {
      typeof e == "object" && e !== null && e.$$typeof === P && e._store && (e._store.validated = 1);
    }
    var v = L, P = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), G = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), O = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, ee = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var N, C = {}, Y = v["react-stack-bottom-frame"].bind(
      v,
      u
    )(), I = A(d(u)), $ = {};
    b.Fragment = k, b.jsx = function(e, r, t, n, l) {
      var c = 1e4 > O.recentlyCreatedOwnerStacks++;
      return S(
        e,
        r,
        t,
        !1,
        n,
        l,
        c ? Error("react-stack-top-frame") : Y,
        c ? A(d(e)) : I
      );
    }, b.jsxs = function(e, r, t, n, l) {
      var c = 1e4 > O.recentlyCreatedOwnerStacks++;
      return S(
        e,
        r,
        t,
        !0,
        n,
        l,
        c ? Error("react-stack-top-frame") : Y,
        c ? A(d(e)) : I
      );
    };
  }()), b;
}
var M;
function oe() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? T.exports = te() : T.exports = ne()), T.exports;
}
var p = oe();
const se = (a) => (L.useEffect(() => (console.log("Button Mounted"), () => {
  console.log("Button Unmounted");
}), []), /* @__PURE__ */ p.jsx("div", { className: "btn-wrap", style: { width: 100, height: 50, backgroundColor: "red" }, onClick: a.onClick, children: /* @__PURE__ */ p.jsx("span", { children: a.content }) })), ue = (a) => /* @__PURE__ */ p.jsx("div", { className: "toast", children: /* @__PURE__ */ p.jsx("span", { children: a.content }) });
export {
  se as Button,
  ue as Toast
};
