"use strict";

exports.TRANSACTION_STORAGE_NAME = exports.TOKEN_STORAGE_NAME = exports.STATE_TOKEN_KEY_NAME = exports.SHARED_TRANSACTION_STORAGE_NAME = exports.REFRESH_TOKEN_STORAGE_KEY = exports.REFERRER_PATH_STORAGE_KEY = exports.PKCE_STORAGE_NAME = exports.ORIGINAL_URI_STORAGE_NAME = exports.MIN_VERIFIER_LENGTH = exports.MAX_VERIFIER_LENGTH = exports.IOS_MAX_RETRY_COUNT = exports.ID_TOKEN_STORAGE_KEY = exports.IDX_RESPONSE_STORAGE_NAME = exports.IDX_API_VERSION = exports.DEFAULT_POLLING_DELAY = exports.DEFAULT_MAX_CLOCK_SKEW = exports.DEFAULT_CODE_CHALLENGE_METHOD = exports.DEFAULT_CACHE_DURATION = exports.CACHE_STORAGE_NAME = exports.ACCESS_TOKEN_STORAGE_KEY = void 0;
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
 */

const STATE_TOKEN_KEY_NAME = exports.STATE_TOKEN_KEY_NAME = 'oktaStateToken';
const DEFAULT_POLLING_DELAY = exports.DEFAULT_POLLING_DELAY = 500;
const IOS_MAX_RETRY_COUNT = exports.IOS_MAX_RETRY_COUNT = 3;
const DEFAULT_MAX_CLOCK_SKEW = exports.DEFAULT_MAX_CLOCK_SKEW = 300;
const DEFAULT_CACHE_DURATION = exports.DEFAULT_CACHE_DURATION = 86400;
const TOKEN_STORAGE_NAME = exports.TOKEN_STORAGE_NAME = 'okta-token-storage';
const CACHE_STORAGE_NAME = exports.CACHE_STORAGE_NAME = 'okta-cache-storage';
const PKCE_STORAGE_NAME = exports.PKCE_STORAGE_NAME = 'okta-pkce-storage';
const TRANSACTION_STORAGE_NAME = exports.TRANSACTION_STORAGE_NAME = 'okta-transaction-storage';
const SHARED_TRANSACTION_STORAGE_NAME = exports.SHARED_TRANSACTION_STORAGE_NAME = 'okta-shared-transaction-storage';
const ORIGINAL_URI_STORAGE_NAME = exports.ORIGINAL_URI_STORAGE_NAME = 'okta-original-uri-storage';
const IDX_RESPONSE_STORAGE_NAME = exports.IDX_RESPONSE_STORAGE_NAME = 'okta-idx-response-storage';
const ACCESS_TOKEN_STORAGE_KEY = exports.ACCESS_TOKEN_STORAGE_KEY = 'accessToken';
const ID_TOKEN_STORAGE_KEY = exports.ID_TOKEN_STORAGE_KEY = 'idToken';
const REFRESH_TOKEN_STORAGE_KEY = exports.REFRESH_TOKEN_STORAGE_KEY = 'refreshToken';
const REFERRER_PATH_STORAGE_KEY = exports.REFERRER_PATH_STORAGE_KEY = 'referrerPath';

// Code verifier: Random URL-safe string with a minimum length of 43 characters.
// Code challenge: Base64 URL-encoded SHA-256 hash of the code verifier.
const MIN_VERIFIER_LENGTH = exports.MIN_VERIFIER_LENGTH = 43;
const MAX_VERIFIER_LENGTH = exports.MAX_VERIFIER_LENGTH = 128;
const DEFAULT_CODE_CHALLENGE_METHOD = exports.DEFAULT_CODE_CHALLENGE_METHOD = 'S256';
const IDX_API_VERSION = exports.IDX_API_VERSION = '1.0.0';
//# sourceMappingURL=constants.js.map