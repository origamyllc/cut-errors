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

export function bad_implementation(message,details,error_code){
    let settings = {
        status : 500,
        errorCode : error_code,
        message : message,
        type : "bad_implementation",
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