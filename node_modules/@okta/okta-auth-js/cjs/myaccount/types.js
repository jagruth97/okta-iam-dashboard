"use strict";

exports.Status = exports.PasswordStatus = exports.EmailRole = void 0;
let EmailRole = exports.EmailRole = /*#__PURE__*/function (EmailRole) {
  EmailRole["PRIMARY"] = "PRIMARY";
  EmailRole["SECONDARY"] = "SECONDARY";
  return EmailRole;
}({});
let Status = exports.Status = /*#__PURE__*/function (Status) {
  Status["VERIFIED"] = "VERIFIED";
  Status["UNVERIFIED"] = "UNVERIFIED";
  return Status;
}({});
let PasswordStatus = exports.PasswordStatus = /*#__PURE__*/function (PasswordStatus) {
  PasswordStatus["NOT_ENROLLED"] = "NOT_ENROLLED";
  PasswordStatus["ACTIVE"] = "ACTIVE";
  return PasswordStatus;
}({});
//# sourceMappingURL=types.js.map