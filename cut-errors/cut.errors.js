'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bad_request = bad_request;
exports.not_found = not_found;
exports.bad_implementation = bad_implementation;
exports.unauthorized = unauthorized;

var _cutErrors = require('./cut.errors.factory');

function bad_request(message, details, error_code) {
    var settings = {
        status: 400,
        errorCode: error_code,
        message: message,
        type: "bad_request",
        details: details
    };
    return (0, _cutErrors.createCustomError)(settings);
}

function not_found(message, details, error_code) {
    var settings = {
        status: 404,
        errorCode: error_code,
        message: message,
        type: "not_found",
        details: details
    };
    return (0, _cutErrors.createCustomError)(settings);
}

function bad_implementation(message, details, error_code) {
    var settings = {
        status: 500,
        errorCode: error_code,
        message: message,
        type: "bad_implementation",
        details: details
    };
    return (0, _cutErrors.createCustomError)(settings);
}

function unauthorized(message, details, error_code) {
    var settings = {
        status: 401,
        errorCode: error_code,
        message: message,
        type: "unauthorized",
        details: details
    };
    return (0, _cutErrors.createCustomError)(settings);
}