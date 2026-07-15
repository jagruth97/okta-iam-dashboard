"use strict";

exports.mixinMyAccount = mixinMyAccount;
var MyAccountMethods = _interopRequireWildcard(require("./api"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function mixinMyAccount(Base) {
  return class OktaAuthMyAccount extends Base {
    constructor(...args) {
      super(...args);
      this.myaccount = Object.entries(MyAccountMethods).filter(([name]) => name !== 'default').reduce((acc, [name, fn]) => {
        acc[name] = fn.bind(null, this);
        return acc;
      }, {});
    }
  };
}
//# sourceMappingURL=mixin.js.map