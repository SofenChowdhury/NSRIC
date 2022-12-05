"use strict";
exports.id = 819;
exports.ids = [819];
exports.modules = {

/***/ 819:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(358);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1939);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_AlternateEmail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3603);
/* harmony import */ var _mui_icons_material_AlternateEmail__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AlternateEmail__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Key__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5688);
/* harmony import */ var _mui_icons_material_Key__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Key__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_PhoneAndroid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(650);
/* harmony import */ var _mui_icons_material_PhoneAndroid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PhoneAndroid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_Diversity3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1808);
/* harmony import */ var _mui_icons_material_Diversity3__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Diversity3__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_5__]);
axios__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// bootstarp

//redux imports

//axios


// Icon imports





const RegisterForm = ({ token  })=>{
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [formErrors, setFormErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [roles, setRoles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [admin_roles, setSelectedRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const rolesAdd = (e)=>{
        setSelectedRole([]);
        setSelectedRole((admin_roles)=>[
                ...admin_roles,
                Number(e.target.value)
            ]);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const apiRoles = _base__WEBPACK_IMPORTED_MODULE_11__/* .BASE_URL */ ._ + "api/v1/roles";
        axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(apiRoles, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res)=>{
            if (res.data.status == true) {
                setRoles(res.data.data);
            }
        }).catch((error)=>{
            console.log(error);
        });
    }, []);
    async function register(e) {
        e.preventDefault();
        const apiUrl = _base__WEBPACK_IMPORTED_MODULE_11__/* .BASE_URL */ ._ + "api/v1/admin/store";
        const regData = {
            email,
            password,
            name,
            phone,
            admin_roles
        };
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(apiUrl, regData, config).then((response)=>{
            console.log(response.data);
            if (response.data.status) {
                next_router__WEBPACK_IMPORTED_MODULE_2___default().push({
                    pathname: "/"
                });
            } else {
                setFormErrors(Object.values(response.data.errors));
            }
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "text-danger",
                style: {
                    fontWeight: 200
                },
                children: formErrors[0]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                id: "basic-addon1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_6___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "name",
                                required: true,
                                onChange: (e)=>setName(e.target.value),
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
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AlternateEmail__WEBPACK_IMPORTED_MODULE_7___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "email",
                                className: "form-control",
                                id: "email",
                                "aria-describedby": "emailHelp",
                                required: true,
                                onChange: (e)=>setEmail(e.target.value),
                                placeholder: "Email"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                id: "basic-addon1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Key__WEBPACK_IMPORTED_MODULE_8___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "password",
                                className: "form-control",
                                id: "password",
                                required: true,
                                onChange: (e)=>setPassword(e.target.value),
                                placeholder: "Password"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PhoneAndroid__WEBPACK_IMPORTED_MODULE_9___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "phone",
                                required: true,
                                onChange: (e)=>setPhone(e.target.value),
                                placeholder: "Phone Number"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Diversity3__WEBPACK_IMPORTED_MODULE_10___default()), {})
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Select), {
                                onChange: rolesAdd,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "Select a Role"
                                    }),
                                    roles.map((role, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: role.id,
                                            children: role.name
                                        }, index))
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: register,
                        className: "btn btn-success mb-3",
                        children: "Create User"
                    })
                ]
            })
        ]
    });
};
const mapStateToProps = (state)=>{
    return {
        token: state.auth.token
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps)(RegisterForm));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;