"use strict";
(() => {
var exports = {};
exports.id = 913;
exports.ids = [913,593];
exports.modules = {

/***/ 2110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(358);
/* harmony import */ var _components_global_SideBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2078);
/* harmony import */ var _components_global_TopBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6068);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1939);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_AlternateEmail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3603);
/* harmony import */ var _mui_icons_material_AlternateEmail__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AlternateEmail__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_Key__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5688);
/* harmony import */ var _mui_icons_material_Key__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Key__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_PhoneAndroid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(650);
/* harmony import */ var _mui_icons_material_PhoneAndroid__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PhoneAndroid__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_5__, _components_global_SideBar__WEBPACK_IMPORTED_MODULE_6__, _components_global_TopBar__WEBPACK_IMPORTED_MODULE_7__]);
([axios__WEBPACK_IMPORTED_MODULE_5__, _components_global_SideBar__WEBPACK_IMPORTED_MODULE_6__, _components_global_TopBar__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


//redux imports

// Theme imports


//axios


// Components


// Icon imports




const UserDetails = ({ query , token  })=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const colors = (0,_theme__WEBPACK_IMPORTED_MODULE_3__.tokens)(theme.palette.mode);
    const [userDetails, setUserDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [allRoles, setAllRoles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // FETCH USER DETAILS
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const apiUrl = `http://52.66.207.126/api/v1/admins/${query.id}`;
        axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(apiUrl, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res)=>{
            if (res.data.status == true) {
                setUserDetails(res.data.data);
            }
        }).catch((error)=>{
            console.log(error);
        });
    }, []);
    // FETCH ALL ROLES
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const apiRoles = _base__WEBPACK_IMPORTED_MODULE_12__/* .BASE_URL */ ._ + "api/v1/roles";
        axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(apiRoles, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res)=>{
            if (res.data.status == true) {
                setAllRoles(res.data.data);
            }
        }).catch((error)=>{
            console.log(error);
        });
    }, []);
    const update = ()=>{
        alert("updating users");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "app",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_global_SideBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_global_TopBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "holder",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                variant: "h2",
                                className: "mb-4",
                                color: colors.greenAccent[300],
                                children: [
                                    "Update Details of ",
                                    userDetails.name
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "input-group mb-3 mt-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "input-group-text",
                                        id: "basic-addon1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_8___default()), {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        className: "form-control",
                                        id: "name",
                                        required: true,
                                        value: userDetails.name,
                                        // onChange={(e) => setName(e.target.value)}
                                        placeholder: "Name"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "input-group mb-3 mt-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "input-group-text",
                                        id: "basic-addon1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AlternateEmail__WEBPACK_IMPORTED_MODULE_9___default()), {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "email",
                                        className: "form-control",
                                        id: "email",
                                        "aria-describedby": "emailHelp",
                                        required: true,
                                        value: userDetails.email,
                                        // onChange={(e) => setEmail(e.target.value)}
                                        placeholder: "Email"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "input-group mt-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                    className: "text-secondary",
                                    children: "Assign new temporary Password"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "input-group mb-3 mt-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "input-group-text",
                                        id: "basic-addon1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Key__WEBPACK_IMPORTED_MODULE_10___default()), {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "password",
                                        className: "form-control",
                                        id: "password",
                                        required: true,
                                        // onChange={(e) => setPassword(e.target.value)}
                                        placeholder: "Password"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "input-group mb-3 mt-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "input-group-text",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PhoneAndroid__WEBPACK_IMPORTED_MODULE_11___default()), {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        className: "form-control",
                                        id: "phone",
                                        required: true,
                                        value: userDetails.phone,
                                        // onChange={(e) => setPhone(e.target.value)}
                                        placeholder: "Phone Number"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: update,
                                className: "btn btn-success mb-3",
                                children: "Update User"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
UserDetails.getInitialProps = async ({ query  })=>{
    return {
        query
    };
};
const mapStateToProps = (state)=>{
    return {
        token: state.auth.token
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(UserDetails));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6213:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AdminPanelSettings");

/***/ }),

/***/ 3603:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AlternateEmail");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 242:
/***/ ((module) => {

module.exports = require("@mui/icons-material/DisplaySettings");

/***/ }),

/***/ 1808:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Diversity3");

/***/ }),

/***/ 9278:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FolderOpenOutlined");

/***/ }),

/***/ 9989:
/***/ ((module) => {

module.exports = require("@mui/icons-material/HomeOutlined");

/***/ }),

/***/ 5688:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Key");

/***/ }),

/***/ 9801:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ 6248:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MenuOutlined");

/***/ }),

/***/ 4610:
/***/ ((module) => {

module.exports = require("@mui/icons-material/NotificationsOutlined");

/***/ }),

/***/ 1939:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Person");

/***/ }),

/***/ 5018:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PersonOutlined");

/***/ }),

/***/ 650:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PhoneAndroid");

/***/ }),

/***/ 8017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 5649:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SettingsOutlined");

/***/ }),

/***/ 453:
/***/ ((module) => {

module.exports = require("@mui/icons-material/WorkspacePremium");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 9261:
/***/ ((module) => {

module.exports = require("multiselect-react-dropdown");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 1981:
/***/ ((module) => {

module.exports = require("react-pro-sidebar");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,896,538,722], () => (__webpack_exec__(2110)));
module.exports = __webpack_exports__;

})();