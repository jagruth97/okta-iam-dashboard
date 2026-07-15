"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.mixinMinimalIdx = mixinMinimalIdx;
var _minimalApi = require("../idx/factory/minimalApi");
var _fingerprint = _interopRequireDefault(require("../browser/fingerprint"));
var webauthn = _interopRequireWildcard(require("./webauthn"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function mixinMinimalIdx(Base) {
  return class OktaAuthIdx extends Base {
    static webauthn = webauthn;
    constructor(...args) {
      super(...args);
      this.idx = (0, _minimalApi.createMinimalIdxAPI)(this);
      this.fingerprint = _fingerprint.default.bind(null, this);
    }
  };
}
//# sourceMappingURL=mixinMinimal.js.map