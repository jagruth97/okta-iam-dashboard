"use strict";

exports.createIdxAPI = createIdxAPI;
var _oidc = require("../../oidc");
var _authenticate = require("../authenticate");
var _cancel = require("../cancel");
var _emailVerify = require("../emailVerify");
var _handleInteractionCodeRedirect = require("../handleInteractionCodeRedirect");
var _idxState = require("../idxState");
var _interact = require("../interact");
var _introspect = require("../introspect");
var _poll = require("../poll");
var _proceed = require("../proceed");
var _recoverPassword = require("../recoverPassword");
var _register = require("../register");
var _startTransaction = require("../startTransaction");
var _transactionMeta = require("../transactionMeta");
var _unlockAccount = require("../unlockAccount");
var remediators = _interopRequireWildcard(require("../remediators"));
var _FlowSpecification = require("../flow/FlowSpecification");
var _util = require("../util");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */

// Factory
function createIdxAPI(sdk) {
  (0, _util.setRemediatorsCtx)({
    remediators,
    getFlowSpecification: _FlowSpecification.getFlowSpecification
  });
  const boundStartTransaction = _startTransaction.startTransaction.bind(null, sdk);
  const idx = {
    interact: _interact.interact.bind(null, sdk),
    introspect: _introspect.introspect.bind(null, sdk),
    makeIdxResponse: _idxState.makeIdxState.bind(null, sdk),
    authenticate: _authenticate.authenticate.bind(null, sdk),
    register: _register.register.bind(null, sdk),
    start: boundStartTransaction,
    startTransaction: boundStartTransaction,
    // Use `start` instead. `startTransaction` will be removed in 7.0
    poll: _poll.poll.bind(null, sdk),
    proceed: _proceed.proceed.bind(null, sdk),
    cancel: _cancel.cancel.bind(null, sdk),
    recoverPassword: _recoverPassword.recoverPassword.bind(null, sdk),
    // oauth redirect callback
    handleInteractionCodeRedirect: _handleInteractionCodeRedirect.handleInteractionCodeRedirect.bind(null, sdk),
    // interaction required callback
    isInteractionRequired: _oidc.isInteractionRequired.bind(null, sdk),
    isInteractionRequiredError: _oidc.isInteractionRequiredError,
    // email verify callback
    handleEmailVerifyCallback: _emailVerify.handleEmailVerifyCallback.bind(null, sdk),
    isEmailVerifyCallback: _emailVerify.isEmailVerifyCallback,
    parseEmailVerifyCallback: _emailVerify.parseEmailVerifyCallback,
    isEmailVerifyCallbackError: _emailVerify.isEmailVerifyCallbackError,
    getSavedTransactionMeta: _transactionMeta.getSavedTransactionMeta.bind(null, sdk),
    createTransactionMeta: _transactionMeta.createTransactionMeta.bind(null, sdk),
    getTransactionMeta: _transactionMeta.getTransactionMeta.bind(null, sdk),
    saveTransactionMeta: _transactionMeta.saveTransactionMeta.bind(null, sdk),
    clearTransactionMeta: _transactionMeta.clearTransactionMeta.bind(null, sdk),
    isTransactionMetaValid: _transactionMeta.isTransactionMetaValid,
    setFlow: flow => {
      sdk.options.flow = flow;
    },
    getFlow: () => {
      return sdk.options.flow;
    },
    canProceed: _proceed.canProceed.bind(null, sdk),
    unlockAccount: _unlockAccount.unlockAccount.bind(null, sdk)
  };
  return idx;
}
//# sourceMappingURL=api.js.map