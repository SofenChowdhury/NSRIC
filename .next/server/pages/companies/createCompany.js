"use strict";
(() => {
var exports = {};
exports.id = 566;
exports.ids = [566,593];
exports.modules = {

/***/ 9430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9261);
/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_icons_material_Apartment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Apartment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4272);
/* harmony import */ var _mui_icons_material_Map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_PhoneAndroid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(650);
/* harmony import */ var _mui_icons_material_PhoneAndroid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PhoneAndroid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1939);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8792);
/* harmony import */ var _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7__);



// Icon imports





const CreateCompany = ()=>{
    const [companyName, setCompanyName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [companyAddress, setCompanyAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [contactNumber, setContactNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [contactPerson, setContactPerson] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [companyTin, setCompanyTin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [companyBin, setCompanyBin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [formErrors, setFormErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const onSubmit = (e)=>{
        e.preventDefault();
        const company = {
            companyName,
            companyAddress,
            contactNumber,
            contactPerson,
            companyBin,
            companyTin
        };
        console.log(company);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "text-danger",
                style: {
                    fontWeight: 200
                },
                children: formErrors
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Apartment__WEBPACK_IMPORTED_MODULE_3___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "name",
                                required: true,
                                onChange: (e)=>setCompanyName(e.target.value),
                                placeholder: "Company Name"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Map__WEBPACK_IMPORTED_MODULE_4___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "address",
                                required: true,
                                onChange: (e)=>setCompanyAddress(e.target.value),
                                placeholder: "Company Address"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PhoneAndroid__WEBPACK_IMPORTED_MODULE_5___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "contactNo",
                                required: true,
                                onChange: (e)=>setContactNumber(e.target.value),
                                placeholder: "Contact Number"
                            })
                        ]
                    }),
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
                                id: "contactPerson",
                                required: true,
                                onChange: (e)=>setContactPerson(e.target.value),
                                placeholder: "Contact Person"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                id: "basic-addon1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "tin",
                                required: true,
                                onChange: (e)=>setCompanyTin(e.target.value),
                                placeholder: "Company TIN"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                id: "basic-addon1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "bin",
                                required: true,
                                onChange: (e)=>setCompanyBin(e.target.value),
                                placeholder: "Company BIN"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: onSubmit,
                        className: "btn btn-success mb-3",
                        children: "Create Company"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateCompany);


/***/ }),

/***/ 6950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9261);
/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_icons_material_Apartment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Apartment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4272);
/* harmony import */ var _mui_icons_material_Map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_PhoneAndroid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(650);
/* harmony import */ var _mui_icons_material_PhoneAndroid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PhoneAndroid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1939);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8792);
/* harmony import */ var _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7__);



// Icon imports





const CreateVendor = ()=>{
    const [vendorName, setVendorName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [vendorAddress, setVendorAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [contactNumber, setContactNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [contactPerson, setContactPerson] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [vendorTin, setVendorTin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [vendorBin, setVendorBin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [formErrors, setFormErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const onSubmit = (e)=>{
        e.preventDefault();
        const vendor = {
            vendorName,
            vendorAddress,
            contactNumber,
            contactPerson,
            vendorBin,
            vendorTin
        };
        console.log(vendor);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "text-danger",
                style: {
                    fontWeight: 200
                },
                children: formErrors
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Apartment__WEBPACK_IMPORTED_MODULE_3___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "name",
                                required: true,
                                onChange: (e)=>setVendorName(e.target.value),
                                placeholder: "Vendor Name"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Map__WEBPACK_IMPORTED_MODULE_4___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "address",
                                required: true,
                                onChange: (e)=>setVendorAddress(e.target.value),
                                placeholder: "Vendor Address"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PhoneAndroid__WEBPACK_IMPORTED_MODULE_5___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "contactNo",
                                required: true,
                                onChange: (e)=>setContactNumber(e.target.value),
                                placeholder: "Contact Number"
                            })
                        ]
                    }),
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
                                id: "contactPerson",
                                required: true,
                                onChange: (e)=>setContactPerson(e.target.value),
                                placeholder: "Contact Person"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                id: "basic-addon1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "tin",
                                required: true,
                                onChange: (e)=>setVendorTin(e.target.value),
                                placeholder: "Vendor TIN"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                id: "basic-addon1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "bin",
                                required: true,
                                onChange: (e)=>setVendorBin(e.target.value),
                                placeholder: "Vendor BIN"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: onSubmit,
                        className: "btn btn-success mb-3",
                        children: "Create Vendor"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateVendor);


/***/ }),

/***/ 9089:
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
/* harmony import */ var _components_global_SideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2078);
/* harmony import */ var _components_global_TopBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6068);
/* harmony import */ var _components_forms_RegisterForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(819);
/* harmony import */ var _components_forms_CreateCopmany__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9430);
/* harmony import */ var _components_forms_CreateVendor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6950);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_global_SideBar__WEBPACK_IMPORTED_MODULE_5__, _components_global_TopBar__WEBPACK_IMPORTED_MODULE_6__, _components_forms_RegisterForm__WEBPACK_IMPORTED_MODULE_7__]);
([_components_global_SideBar__WEBPACK_IMPORTED_MODULE_5__, _components_global_TopBar__WEBPACK_IMPORTED_MODULE_6__, _components_forms_RegisterForm__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
//react


//redux imports

//theme imports


//components





const createCompany = ({ roles  })=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const colors = (0,_theme__WEBPACK_IMPORTED_MODULE_3__.tokens)(theme.palette.mode);
    const [superAdmin, setSuperAdmin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        roles.map((role)=>{
            if (role.name === "SuperAdmin") {
                setSuperAdmin(true);
            }
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "app",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_global_SideBar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_global_TopBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "holder",
                            children: superAdmin ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                        variant: "h3",
                                        color: colors.greenAccent[300],
                                        children: "You're a super admin!"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                        className: "mt-4",
                                        variant: "h5",
                                        color: colors.greenAccent[300],
                                        children: "Create Company Form"
                                    }),
                                    superAdmin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_CreateCopmany__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                                    superAdmin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_CreateVendor__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                variant: "h3",
                                color: colors.greenAccent[300],
                                children: "Permission required!"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
const mapStateToProps = (state)=>{
    return {
        roles: state.auth.roles
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(createCompany));

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

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Apartment");

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

/***/ 8792:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Info");

/***/ }),

/***/ 5688:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Key");

/***/ }),

/***/ 9801:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ 4272:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Map");

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

/***/ 5226:
/***/ ((module) => {

module.exports = require("react-bootstrap/Form");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,896,538,722,819], () => (__webpack_exec__(9089)));
module.exports = __webpack_exports__;

})();