exports.id = 722;
exports.ids = [722];
exports.modules = {

/***/ 9006:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _pages_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9261);
/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9648);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(358);
/* harmony import */ var _mui_icons_material_WorkspacePremium__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(453);
/* harmony import */ var _mui_icons_material_WorkspacePremium__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_WorkspacePremium__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Diversity3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1808);
/* harmony import */ var _mui_icons_material_Diversity3__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Diversity3__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_DisplaySettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(242);
/* harmony import */ var _mui_icons_material_DisplaySettings__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DisplaySettings__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_7__]);
axios__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



//theme imports



//redux imports

//axios


// Icons Import



const CreatePermission = ({ token  })=>{
    // Theme Variables
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const colors = (0,_pages_theme__WEBPACK_IMPORTED_MODULE_3__.tokens)(theme.palette.mode);
    // Variables for POST
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [roles, setRoles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // Helper Variables
    const [formErrors, setFormErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [allRoles, setAllRoles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // Loading roles
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const apiRoles = _base__WEBPACK_IMPORTED_MODULE_11__/* .BASE_URL */ ._ + "api/v1/roles";
        axios__WEBPACK_IMPORTED_MODULE_7__["default"].get(apiRoles, {
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
    // Functions for creating roles array
    const rolesAdd = (list, item)=>{
        setRoles((roles)=>[
                ...roles,
                item.id
            ]);
    };
    const rolesRemove = (list, item)=>{
        setRoles(roles.filter((i)=>i !== item.id));
    };
    // POST to server
    async function create(e) {
        e.preventDefault();
        const apiUrl = _base__WEBPACK_IMPORTED_MODULE_11__/* .BASE_URL */ ._ + "api/v1/permissions/create";
        const permissionData = {
            name,
            description,
            roles
        };
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        axios__WEBPACK_IMPORTED_MODULE_7__["default"].post(apiUrl, permissionData, config).then((response)=>{
            console.log(response.data);
            if (response.data.status) {
                alert("Permission Succesfully Created");
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                variant: "h3",
                className: "mb-4",
                color: colors.greenAccent[300],
                children: "Create Permission Form"
            }),
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
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_WorkspacePremium__WEBPACK_IMPORTED_MODULE_8___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "name",
                                required: true,
                                onChange: (e)=>setName(e.target.value),
                                placeholder: "Permission Name"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                id: "basic-addon1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_DisplaySettings__WEBPACK_IMPORTED_MODULE_10___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "name",
                                required: true,
                                onChange: (e)=>setDescription(e.target.value),
                                placeholder: "Permission details"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Diversity3__WEBPACK_IMPORTED_MODULE_9___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "form-control",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_5__.Multiselect, {
                                    placeholder: "Select Roles ▼",
                                    cursor: "pointer",
                                    displayValue: "name",
                                    onRemove: rolesRemove,
                                    onSelect: rolesAdd,
                                    options: allRoles,
                                    showCheckbox: true
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: create,
                        className: "btn btn-success mb-3",
                        children: "Create Permission"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(mapStateToProps)(CreatePermission));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7612:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _pages_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9261);
/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9648);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(358);
/* harmony import */ var _mui_icons_material_WorkspacePremium__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(453);
/* harmony import */ var _mui_icons_material_WorkspacePremium__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_WorkspacePremium__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Diversity3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1808);
/* harmony import */ var _mui_icons_material_Diversity3__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Diversity3__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_DisplaySettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(242);
/* harmony import */ var _mui_icons_material_DisplaySettings__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DisplaySettings__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_7__]);
axios__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



//theme imports



//redux imports

//axios


// Icons Import



const CreateRole = ({ token  })=>{
    // Theme Variables
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const colors = (0,_pages_theme__WEBPACK_IMPORTED_MODULE_3__.tokens)(theme.palette.mode);
    // Variables for POST
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [permissions, setPermissions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // Helper Variables
    const [formErrors, setFormErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [allPermissions, setAllPermissions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // Loading Permissions
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const apiPermissions = _base__WEBPACK_IMPORTED_MODULE_11__/* .BASE_URL */ ._ + "api/v1/permissions";
        axios__WEBPACK_IMPORTED_MODULE_7__["default"].get(apiPermissions, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res)=>{
            if (res.data.status == true) {
                setAllPermissions(res.data.data);
            }
        }).catch((error)=>{
            console.log(error);
        });
    }, []);
    // Functions for creating permissions array
    const permissionsAdd = (list, item)=>{
        setPermissions((permissions)=>[
                ...permissions,
                item.id
            ]);
    };
    const permissionsRemove = (list, item)=>{
        setPermissions(permissions.filter((i)=>i !== item.id));
    };
    // POST to server
    async function create(e) {
        e.preventDefault();
        const apiUrl = _base__WEBPACK_IMPORTED_MODULE_11__/* .BASE_URL */ ._ + "api/v1/roles/create";
        const roleData = {
            name,
            description,
            permissions
        };
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        axios__WEBPACK_IMPORTED_MODULE_7__["default"].post(apiUrl, roleData, config).then((response)=>{
            console.log(response.data);
            if (response.data.status) {
                alert("Role Succesfully Created");
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                variant: "h2",
                className: "mb-4",
                color: colors.greenAccent[300],
                children: "Create Role Form"
            }),
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
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_WorkspacePremium__WEBPACK_IMPORTED_MODULE_8___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "name",
                                required: true,
                                onChange: (e)=>setName(e.target.value),
                                placeholder: "Role Name"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                id: "basic-addon1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_DisplaySettings__WEBPACK_IMPORTED_MODULE_10___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "description",
                                required: true,
                                onChange: (e)=>setDescription(e.target.value),
                                placeholder: "Role Details"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group mb-3 mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "input-group-text",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Diversity3__WEBPACK_IMPORTED_MODULE_9___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "form-control",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_5__.Multiselect, {
                                    placeholder: "Select Permissions ▼",
                                    cursor: "pointer",
                                    displayValue: "name",
                                    onRemove: permissionsRemove,
                                    onSelect: permissionsAdd,
                                    options: allPermissions,
                                    showCheckbox: true
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: create,
                        className: "btn btn-success mb-3",
                        children: "Create Role"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(mapStateToProps)(CreateRole));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2078:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1981);
/* harmony import */ var react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_pro_sidebar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2844);
/* harmony import */ var react_pro_sidebar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_pro_sidebar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9896);
/* harmony import */ var _services_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5634);
/* harmony import */ var _forms_modalForms_CreateRole__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7612);
/* harmony import */ var _mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9989);
/* harmony import */ var _mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6248);
/* harmony import */ var _mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_FolderOpenOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9278);
/* harmony import */ var _mui_icons_material_FolderOpenOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_FolderOpenOutlined__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_AdminPanelSettings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6213);
/* harmony import */ var _mui_icons_material_AdminPanelSettings__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AdminPanelSettings__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _forms_modalForms_CreatePermission__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9006);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_forms_modalForms_CreateRole__WEBPACK_IMPORTED_MODULE_8__, _forms_modalForms_CreatePermission__WEBPACK_IMPORTED_MODULE_14__]);
([_forms_modalForms_CreateRole__WEBPACK_IMPORTED_MODULE_8__, _forms_modalForms_CreatePermission__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
//next/react imports



//sidebar components






//Icons import






const Item = ({ title , to , icon , selected , setSelected  })=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    const colors = (0,_pages_theme__WEBPACK_IMPORTED_MODULE_6__.tokens)(theme.palette.mode);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
        active: selected === title,
        style: {
            color: colors.grey[100]
        },
        onClick: ()=>setSelected(title),
        icon: icon,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: to
            })
        ]
    });
};
const Sidebar = ()=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    const colors = (0,_pages_theme__WEBPACK_IMPORTED_MODULE_6__.tokens)(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    //modals variables
    const [showRoleModal, setShowRoleModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [showPermModal, setShowPermModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_services_Modal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                onClose: ()=>setShowRoleModal(false),
                show: showRoleModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_forms_modalForms_CreateRole__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_services_Modal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                onClose: ()=>setShowPermModal(false),
                show: showPermModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_forms_modalForms_CreatePermission__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                sx: {
                    "& .pro-sidebar-inner": {
                        // background: `${colors.primary[400]} !important`,
                        background: "#fff !important"
                    },
                    "& .pro-icon-wrapper": {
                        backgroundColor: "transparent !important"
                    },
                    "& .pro-inner-item": {
                        padding: "5px 35px 5px 20px !important"
                    },
                    "& .pro-inner-item:hover": {
                        color: "#868dfb !important"
                    },
                    "& .pro-menu-item.active": {
                        color: "#6870fa !important"
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.ProSidebar, {
                    collapsed: isCollapsed,
                    collapsedWidth: "90px",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.Menu, {
                        iconShape: "square",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                onClick: ()=>setIsCollapsed(!isCollapsed),
                                icon: isCollapsed ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_10___default()), {}) : undefined,
                                style: {
                                    margin: "10px 0 20px 0",
                                    color: colors.grey[100]
                                },
                                children: !isCollapsed && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    ml: "15px",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                            variant: "h3",
                                            color: colors.grey[100],
                                            children: "NSRIC"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
                                            onClick: ()=>setIsCollapsed(!isCollapsed),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_12___default()), {})
                                        })
                                    ]
                                })
                            }),
                            !isCollapsed && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                mb: "25px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            alt: "profile-user",
                                            width: "100px",
                                            height: "100px",
                                            src: `../../assets/images/user.png`,
                                            style: {
                                                cursor: "pointer",
                                                borderRadius: "50%"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                        textAlign: "center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                variant: "h2",
                                                color: colors.grey[100],
                                                sx: {
                                                    m: "10px 0 0 0"
                                                },
                                                children: "Chowdhury Md. Rabby Mahmud"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                variant: "h5",
                                                color: colors.greenAccent[500],
                                                children: "Super Admin"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                paddingLeft: isCollapsed ? undefined : "5%",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                        title: "Dashboard",
                                        to: "/",
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_9___default()), {}),
                                        selected: selected,
                                        setSelected: setSelected
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.SubMenu, {
                                        title: "Admin Functions",
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FolderOpenOutlined__WEBPACK_IMPORTED_MODULE_11___default()), {}),
                                        style: {
                                            color: colors.grey[100]
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.SubMenu, {
                                                title: "Users",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FolderOpenOutlined__WEBPACK_IMPORTED_MODULE_11___default()), {}),
                                                style: {
                                                    color: colors.grey[100]
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                                        title: "Create User",
                                                        to: "/users/createUser",
                                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AdminPanelSettings__WEBPACK_IMPORTED_MODULE_13___default()), {}),
                                                        selected: selected,
                                                        setSelected: setSelected
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                                        title: "User List",
                                                        to: "/users/userList",
                                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AdminPanelSettings__WEBPACK_IMPORTED_MODULE_13___default()), {}),
                                                        selected: selected,
                                                        setSelected: setSelected
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.SubMenu, {
                                                title: "Roles",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FolderOpenOutlined__WEBPACK_IMPORTED_MODULE_11___default()), {}),
                                                style: {
                                                    color: colors.grey[100]
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    active: selected === "Create Role",
                                                    style: {
                                                        color: colors.grey[100]
                                                    },
                                                    onClick: ()=>{
                                                        setSelected("Create Role");
                                                        setShowRoleModal(true);
                                                    },
                                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AdminPanelSettings__WEBPACK_IMPORTED_MODULE_13___default()), {}),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                        children: "Create Role"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.SubMenu, {
                                                title: "Permissions",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FolderOpenOutlined__WEBPACK_IMPORTED_MODULE_11___default()), {}),
                                                style: {
                                                    color: colors.grey[100]
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                        active: selected === "Create Permission",
                                                        style: {
                                                            color: colors.grey[100]
                                                        },
                                                        onClick: ()=>{
                                                            setSelected("Create Permission");
                                                            setShowPermModal(true);
                                                        },
                                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AdminPanelSettings__WEBPACK_IMPORTED_MODULE_13___default()), {}),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                            children: "Create Permission"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.SubMenu, {
                                                        title: "Assign",
                                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FolderOpenOutlined__WEBPACK_IMPORTED_MODULE_11___default()), {}),
                                                        style: {
                                                            color: colors.grey[100]
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                                                title: "To Role",
                                                                to: "/assignPermissionToRole",
                                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AdminPanelSettings__WEBPACK_IMPORTED_MODULE_13___default()), {}),
                                                                selected: selected,
                                                                setSelected: setSelected
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                                                title: "To User",
                                                                to: "/assignPermissionToRole",
                                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AdminPanelSettings__WEBPACK_IMPORTED_MODULE_13___default()), {}),
                                                                selected: selected,
                                                                setSelected: setSelected
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_3__.SubMenu, {
                                                title: "Companies",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FolderOpenOutlined__WEBPACK_IMPORTED_MODULE_11___default()), {}),
                                                style: {
                                                    color: colors.grey[100]
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                                    title: "Create Company",
                                                    to: "/companies/createCompany",
                                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AdminPanelSettings__WEBPACK_IMPORTED_MODULE_13___default()), {}),
                                                    selected: selected,
                                                    setSelected: setSelected
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6068:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9896);
/* harmony import */ var _mui_icons_material_NotificationsOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4610);
/* harmony import */ var _mui_icons_material_NotificationsOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_NotificationsOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_SettingsOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5649);
/* harmony import */ var _mui_icons_material_SettingsOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_SettingsOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_PersonOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5018);
/* harmony import */ var _mui_icons_material_PersonOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PersonOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8017);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9801);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_actions_auth__WEBPACK_IMPORTED_MODULE_3__]);
_store_actions_auth__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


//redux imports


//theme imports



// Icon Imports





const Topbar = ()=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const colors = (0,_pages_theme__WEBPACK_IMPORTED_MODULE_5__.tokens)(theme.palette.mode);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const submitHandler = ()=>{
        // e.preventDefault();
        dispatch((0,_store_actions_auth__WEBPACK_IMPORTED_MODULE_3__/* .logout */ .kS)());
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        display: "flex",
        justifyContent: "space-between",
        p: 2,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                display: "flex",
                backgroundColor: colors.primary[400],
                borderRadius: "3px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.InputBase, {
                        sx: {
                            ml: 2,
                            flex: 1
                        },
                        placeholder: "Search"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                        type: "button",
                        sx: {
                            p: 1
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_9___default()), {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                display: "flex",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_NotificationsOutlined__WEBPACK_IMPORTED_MODULE_6___default()), {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_SettingsOutlined__WEBPACK_IMPORTED_MODULE_7___default()), {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PersonOutlined__WEBPACK_IMPORTED_MODULE_8___default()), {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                        onClick: submitHandler,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_10___default()), {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Topbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




const Modal = ({ show , onClose , children , title  })=>{
    const [isBrowser, setIsBrowser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsBrowser(true);
    }, []);
    const handleCloseClick = (e)=>{
        e.preventDefault();
        onClose();
    };
    const modalContent = show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledModalOverlay, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledModal, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledModalHeader, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        onClick: handleCloseClick,
                        children: "x"
                    })
                }),
                title && {
                    title
                },
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledModalBody, {
                    children: children
                })
            ]
        })
    }) : null;
    if (isBrowser) {
        return /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal(modalContent, document.getElementById("modal-root"));
    } else {
        return null;
    }
};
const StyledModalBody = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  padding-top: 10px;
`;
const StyledModalHeader = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;
const StyledModal = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  background: white;
  width: 450px;
  height: 450px;
  border-radius: 15px;
  padding: 15px;
`;
const StyledModalOverlay = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ }),

/***/ 2844:
/***/ (() => {



/***/ })

};
;