"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.createOktaAuthBase = createOktaAuthBase;
var _util = require("../util");
var features = _interopRequireWildcard(require("../features"));
var constants = _interopRequireWildcard(require("../constants"));
var _tinyEmitter = _interopRequireDefault(require("tiny-emitter"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
// Do not use this type in code, so it won't be emitted in the declaration output

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore 
// Do not use this type in code, so it won't be emitted in the declaration output

function createOktaAuthBase(OptionsConstructor) {
  class OktaAuthBase {
    static features = features;
    static constants = constants;
    constructor(...args) {
      const options = new OptionsConstructor(args.length ? args[0] || {} : {});
      this.options = (0, _util.removeNils)(options); // clear out undefined values
      this.emitter = new _tinyEmitter.default();
      this.features = features;
    }
  }

  // Hoist feature detection functions to prototype & static type
  OktaAuthBase.features = OktaAuthBase.prototype.features = features;

  // Also hoist constants for CommonJS users
  Object.assign(OktaAuthBase, {
    constants
  });
  return OktaAuthBase;
}
//# sourceMappingURL=factory.js.map