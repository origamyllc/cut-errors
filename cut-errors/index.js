'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unauthorized = exports.bad_implementation = exports.not_found = exports.bad_request = undefined;

var _cut = require('./cut.errors');

var errors = _interopRequireWildcard(_cut);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var bad_request = exports.bad_request = errors.bad_request;
var not_found = exports.not_found = errors.not_found;
var bad_implementation = exports.bad_implementation = errors.bad_implementation;
var unauthorized = exports.unauthorized = errors.unauthorized;