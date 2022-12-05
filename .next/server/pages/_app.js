(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,593];
exports.modules = {

/***/ 6883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
// EXTERNAL MODULE: ./store/actions/actionTypes.js
var actionTypes = __webpack_require__(8573);
;// CONCATENATED MODULE: ./components/services/Utilities.jsx
const updateObject = (oldObject, updatedProperties)=>{
    return {
        ...oldObject,
        ...updatedProperties
    };
};

;// CONCATENATED MODULE: ./store/reducers/authReducer.js


const initialState = {
    token: null,
    userId: null,
    error: null,
    roles: null,
    loading: false
};
const authStart = (state, action)=>{
    return updateObject(state, {
        error: null,
        loading: true
    });
};
const authSuccess = (state, action)=>{
    return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
        roles: action.roles
    });
};
const authFail = (state, action)=>{
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};
const authLogout = (state, action)=>{
    return updateObject(state, {
        token: null,
        userId: null,
        roles: null
    });
};
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes/* AUTH_START */.NN:
            return authStart(state, action);
        case actionTypes/* AUTH_SUCCESS */.DP:
            return authSuccess(state, action);
        case actionTypes/* AUTH_FAIL */.M$:
            return authFail(state, action);
        case actionTypes/* AUTH_LOGOUT */.LQ:
            return authLogout(state, action);
        default:
            return state;
    }
};
/* harmony default export */ const authReducer = (reducer);

;// CONCATENATED MODULE: ./store/reducers/errorMessage.js


const errorMessage_initialState = {
    message: null
};
const errorMessage_authSuccess = (state, action)=>{
    return updateObject(state, {
        message: null
    });
};
const authValidation = (state, action)=>{
    return updateObject(state, {
        message: action.message
    });
};
const errorMessage_reducer = (state = errorMessage_initialState, action)=>{
    switch(action.type){
        case actionTypes/* AUTH_VALIDATION */.r4:
            return authValidation(state, action);
        case actionTypes/* AUTH_SUCCESS */.DP:
            return errorMessage_authSuccess(state, action);
        default:
            return state;
    }
};
/* harmony default export */ const errorMessage = (errorMessage_reducer);

;// CONCATENATED MODULE: ./store/store.js





const persistConfig = {
    key: "root",
    storage: (storage_default())
};
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, authReducer);
const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: {
        auth: persistedReducer,
        authMsg: errorMessage
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        })
});
const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);

;// CONCATENATED MODULE: external "redux-persist/integration/react"
const react_namespaceObject = require("redux-persist/integration/react");
// EXTERNAL MODULE: ./pages/theme.js
var pages_theme = __webpack_require__(9896);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./pages/_app.js



//Redux imports





function MyApp({ Component , pageProps  }) {
    const [theme, colorMode] = (0,pages_theme.useMode)();
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.PersistGate, {
            loading: null,
            persistor: persistor,
            children: /*#__PURE__*/ jsx_runtime_.jsx(pages_theme.ColorModeContext.Provider, {
                value: colorMode,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ThemeProvider, {
                    theme: theme,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 9090:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [896], () => (__webpack_exec__(6883)));
module.exports = __webpack_exports__;

})();