"use strict";
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ BASE_URL)
/* harmony export */ });
/* unused harmony export IMAGE_URL */
// export const BASE_URL = "http://13.229.131.244/"
// export const BASE_URL = "http://52.66.207.126/"
const BASE_URL = "http://10.100.23.126/PMS/public/api/login";
const IMAGE_URL = "";


/***/ }),

/***/ 8573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DP": () => (/* binding */ AUTH_SUCCESS),
/* harmony export */   "LQ": () => (/* binding */ AUTH_LOGOUT),
/* harmony export */   "M$": () => (/* binding */ AUTH_FAIL),
/* harmony export */   "NN": () => (/* binding */ AUTH_START),
/* harmony export */   "r4": () => (/* binding */ AUTH_VALIDATION)
/* harmony export */ });
const AUTH_START = "AUTH_START";
const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_FAIL = "AUTH_FAIL";
const AUTH_LOGOUT = "AUTH_LOGOUT";
const AUTH_VALIDATION = "AUTH_VALIDATION";


/***/ }),

/***/ 3538:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "kS": () => (/* binding */ logout)
/* harmony export */ });
/* unused harmony exports authStart, authSuccess, authFail, authNotValid, checkAuthTimeout */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8573);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const authStart = ()=>{
    return {
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__/* .AUTH_START */ .NN
    };
};
const authSuccess = (token, userId, roles)=>{
    // alert(userId)
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push({
        pathname: "/"
    });
    return {
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__/* .AUTH_SUCCESS */ .DP,
        idToken: token,
        userId: userId,
        roles: roles
    };
};
const authFail = (error)=>{
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};
const authNotValid = (message)=>{
    return {
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__/* .AUTH_VALIDATION */ .r4,
        message: message
    };
};
const logout = ()=>{
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push({
        pathname: "/login"
    });
    return {
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__/* .AUTH_LOGOUT */ .LQ
    };
};
const checkAuthTimeout = (expirationTime)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(logout());
        }, expirationTime * 1000);
    };
};
const auth = (email, password)=>{
    return (dispatch)=>{
        dispatch(authStart());
        const apiUrl = _base__WEBPACK_IMPORTED_MODULE_3__/* .BASE_URL */ ._;
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(apiUrl, authData).then((response)=>{
            if (response.data.success) {
                // console.log(response.data.user.roles);
                dispatch(// authSuccess(response.data.access_token, response.data.user.id, response.data.user.roles)
                // alert(response.data.data.token),
                authSuccess(response.data.data.token, 1, []));
            // dispatch(checkAuthTimeout(response.data.expires_in));
            } else {
                dispatch(authNotValid(response.data.message));
            }
        }).catch((err)=>{
            console.log(err);
        // dispatch(authFail());
        });
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;