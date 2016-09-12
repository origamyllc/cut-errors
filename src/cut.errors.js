'use strict';

import { createCustomError } from './cut.errors.factory';

export function bad_request(message,details,error_code) {
    let settings = {
        status : 400,
        errorCode : error_code,
        message : message,
        type : "bad_request",
        details : details
    };
    return createCustomError( settings ) ;
}

export function unauthorized(message,details,error_code) {
    let settings = {
        status : 401,
        errorCode : error_code,
        message : message,
        type : "unauthorized",
        details : details
    };
    return createCustomError( settings ) ;
}

export function forbidden(message,details,error_code) {
    let settings = {
        status : 403,
        errorCode : error_code,
        message : message,
        type : "forbidden",
        details : details
    };
    return createCustomError( settings ) ;
}

export function not_found(message,details,error_code) {
    let settings = {
        status : 404,
        errorCode : error_code,
        message : message,
        type : "not_found",
        details : details
    };
    return createCustomError( settings ) ;
}

export function method_not_allowed(message,details,error_code) {
    let settings = {
        status : 405,
        errorCode : error_code,
        message : message,
        type : "method_not_allowed",
        details : details
    };
    return createCustomError( settings ) ;
}

export function not_acceptable(message,details,error_code) {
    let settings = {
        status : 406,
        errorCode : error_code,
        message : message,
        type : "not_acceptable",
        details : details
    };
    return createCustomError( settings ) ;
}

export function proxy_authentication_required(message,details,error_code) {
    let settings = {
        status : 407,
        errorCode : error_code,
        message : message,
        type : "proxy_authentication_required",
        details : details
    };
    return createCustomError( settings ) ;
}

export function request_timeout(message,details,error_code) {
    let settings = {
        status : 408,
        errorCode : error_code,
        message : message,
        type : "request_timeout",
        details : details
    };
    return createCustomError( settings ) ;
}

export function conflict(message,details,error_code) {
    let settings = {
        status : 409,
        errorCode : error_code,
        message : message,
        type : "conflict",
        details : details
    };
    return createCustomError( settings ) ;
}

export function gone(message,details,error_code) {
    let settings = {
        status : 410,
        errorCode : error_code,
        message : message,
        type : "gone",
        details : details
    };
    return createCustomError( settings ) ;
}

export function length_required(message,details,error_code) {
    let settings = {
        status : 411,
        errorCode : error_code,
        message : message,
        type : "length_required",
        details : details
    };
    return createCustomError( settings ) ;
}

export function precondition_failed(message,details,error_code) {
    let settings = {
        status : 412,
        errorCode : error_code,
        message : message,
        type : "precondition_failed",
        details : details
    };
    return createCustomError( settings ) ;
}

export function request_entity_too_large(message,details,error_code) {
    let settings = {
        status : 413,
        errorCode : error_code,
        message : message,
        type : "request_entity_too_large",
        details : details
    };
    return createCustomError( settings ) ;
}

export function request_uri_too_large(message,details,error_code) {
    let settings = {
        status : 414,
        errorCode : error_code,
        message : message,
        type : "request_uri_too_large",
        details : details
    };
    return createCustomError( settings ) ;
}

export function unsupported_media_type(message,details,error_code) {
    let settings = {
        status : 415,
        errorCode : error_code,
        message : message,
        type : "unsupported_media_type",
        details : details
    };
    return createCustomError( settings ) ;
}

export function requested_range_not_satisfiable(message,details,error_code){
    let settings = {
        status : 416,
        errorCode : error_code,
        message : message,
        type : "requested_range_not_satisfiable",
        details : details
    };
    return createCustomError( settings ) ;
}

export function expectation_failed(message,details,error_code){
    let settings = {
        status : 417,
        errorCode : error_code,
        message : message,
        type : "expectation_failed",
        details : details
    };
    return createCustomError( settings ) ;
}

export function unprocessable_entity(message,details,error_code){
    let settings = {
        status : 422,
        errorCode : error_code,
        message : message,
        type : "unprocessable_entity",
        details : details
    };
    return createCustomError( settings ) ;
}

export function locked(message,details,error_code){
    let settings = {
        status : 423,
        errorCode : error_code,
        message : message,
        type : "locked",
        details : details
    };
    return createCustomError( settings ) ;
}

export function failed_dependency(message,details,error_code){
    let settings = {
        status : 424,
        errorCode : error_code,
        message : message,
        type : "failed_dependency",
        details : details
    };
    return createCustomError( settings ) ;
}

export function upgrade_required(message,details,error_code){
    let settings = {
        status : 426,
        errorCode : error_code,
        message : message,
        type : "upgrade_required",
        details : details
    };
    return createCustomError( settings ) ;
}

export function precondition_required(message,details,error_code){
    let settings = {
        status : 428,
        errorCode : error_code,
        message : message,
        type : "precondition_required",
        details : details
    };
    return createCustomError( settings ) ;
}

export function too_many_requests(message,details,error_code){
    let settings = {
        status : 429,
        errorCode : error_code,
        message : message,
        type : "too_many_requests",
        details : details
    };
    return createCustomError( settings ) ;
}

export function request_header_fields_too_large(message,details,error_code){
    let settings = {
        status : 431,
        errorCode : error_code,
        message : message,
        type : "request_header_fields_too_large",
        details : details
    };
    return createCustomError( settings ) ;
}

export function unavailable_for_legal_reasons(message,details,error_code){
    let settings = {
        status : 451,
        errorCode : error_code,
        message : message,
        type : "unavailable_for_legal_reasons",
        details : details
    };
    return createCustomError( settings ) ;
}

export function internal_server_error(message,details,error_code){
    let settings = {
        status : 500,
        errorCode : error_code,
        message : message,
        type : "internal_server_error",
        details : details
    };
    return createCustomError( settings ) ;
}

export function not_implemented(message,details,error_code){
    let settings = {
        status : 501,
        errorCode : error_code,
        message : message,
        type : "not_implemented",
        details : details
    };
    return createCustomError( settings ) ;
}

export function bad_gateway(message,details,error_code){
    let settings = {
        status : 502,
        errorCode : error_code,
        message : message,
        type : "bad_gateway",
        details : details
    };
    return createCustomError( settings ) ;
}

export function service_unavailable(message,details,error_code){
    let settings = {
        status : 503,
        errorCode : error_code,
        message : message,
        type : "service_unavailable",
        details : details
    };
    return createCustomError( settings ) ;
}

export function gateway_time_out(message,details,error_code){
    let settings = {
        status : 504,
        errorCode : error_code,
        message : message,
        type : "gateway_time_out",
        details : details
    };
    return createCustomError( settings ) ;
}

export function http_version_not_supported(message,details,error_code){
    let settings = {
        status : 505,
        errorCode : error_code,
        message : message,
        type : "http_version_not_supported",
        details : details
    };
    return createCustomError( settings ) ;
}

export function variant_also_negotiates(message,details,error_code){
    let settings = {
        status : 506,
        errorCode : error_code,
        message : message,
        type : "variant_also_negotiates",
        details : details
    };
    return createCustomError( settings ) ;
}

export function insufficient_storage(message,details,error_code){
    let settings = {
        status : 507,
        errorCode : error_code,
        message : message,
        type : "insufficient_storage",
        details : details
    };
    return createCustomError( settings ) ;
}

export function bandwidth_limit_exceeded(message,details,error_code){
    let settings = {
        status : 509,
        errorCode : error_code,
        message : message,
        type : "bandwidth_limit_exceeded",
        details : details
    };
    return createCustomError( settings ) ;
}

export function not_extended(message,details,error_code){
    let settings = {
        status : 510,
        errorCode : error_code,
        message : message,
        type : "not_extended",
        details : details
    };
    return createCustomError( settings ) ;
}

export function network_authentication_required(message,details,error_code){
    let settings = {
        status : 511,
        errorCode : error_code,
        message : message,
        type : "network_authentication_required",
        details : details
    };
    return createCustomError( settings ) ;
}
