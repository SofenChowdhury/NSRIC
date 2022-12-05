(() => {
var exports = {};
exports.id = 229;
exports.ids = [229,593];
exports.modules = {

/***/ 619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home_Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./pages/theme.js
var pages_theme = __webpack_require__(9896);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "multiselect-react-dropdown"
var external_multiselect_react_dropdown_ = __webpack_require__(9261);
// EXTERNAL MODULE: external "@mui/icons-material/Apartment"
var Apartment_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/icons-material/Map"
var Map_ = __webpack_require__(4272);
// EXTERNAL MODULE: external "@mui/icons-material/PhoneAndroid"
var PhoneAndroid_ = __webpack_require__(650);
// EXTERNAL MODULE: external "@mui/icons-material/Person"
var Person_ = __webpack_require__(1939);
// EXTERNAL MODULE: external "@mui/icons-material/Info"
var Info_ = __webpack_require__(8792);
// EXTERNAL MODULE: ./components/home/Header.jsx
var Header = __webpack_require__(4308);
// EXTERNAL MODULE: ./components/home/Logo.jsx
var Logo = __webpack_require__(950);
// EXTERNAL MODULE: ./components/home/Navber.jsx
var Navber = __webpack_require__(551);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: external "react-bootstrap/Card"
const Card_namespaceObject = require("react-bootstrap/Card");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_namespaceObject);
// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__(8907);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_);
// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__(7511);
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(8278);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(782);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
;// CONCATENATED MODULE: ./components/home/banner.jsx









const Banner = ()=>{
    const settings = {
        dots: false,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        fade: true,
        infinite: true
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
            ...settings,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                        style: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Row_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                    xl: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Body, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                marginLeft: "40px",
                                                marginTop: "60px"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Title, {
                                                    className: "learn",
                                                    style: {
                                                        fontSize: "30px",
                                                        fontWeight: "700",
                                                        color: "rgb(28, 93, 200)"
                                                    },
                                                    children: "AKD DIVISION"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()).Text, {
                                                    style: {
                                                        fontSize: "30px",
                                                        fontWeight: "500",
                                                        color: "#000"
                                                    },
                                                    children: [
                                                        "The main mission of NSRCI is to ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            style: {
                                                                fontSize: "40px",
                                                                fontWeight: "700"
                                                            },
                                                            children: "Learn,experience and disseminate knowledge "
                                                        }),
                                                        "to others."
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    variant: "primary",
                                                    children: "Get more"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                    xl: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                                        style: {
                                            border: "none"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Img, {
                                            variant: "top",
                                            style: {
                                                height: "400px"
                                            },
                                            src: "images/akd_one.png",
                                            className: "img-fluid"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                        style: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Row_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                    xl: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                                        style: {
                                            border: "none"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Img, {
                                            variant: "top",
                                            style: {
                                                height: "400px"
                                            },
                                            src: "images/akd_two.png",
                                            className: "img-fluid"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                    xl: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Body, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                marginLeft: "40px",
                                                marginTop: "60px"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Title, {
                                                    style: {
                                                        fontSize: "35px",
                                                        fontWeight: "700",
                                                        color: "rgb(28, 93, 200)"
                                                    },
                                                    children: "AKD DIVISION"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()).Text, {
                                                    style: {
                                                        fontSize: "30px",
                                                        fontWeight: "700",
                                                        color: "#000"
                                                    },
                                                    children: [
                                                        "The main mission of NSRCI is to ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            style: {
                                                                fontSize: "16px"
                                                            },
                                                            children: "Learn,experience and disseminate  "
                                                        }),
                                                        "know to others."
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    variant: "primary",
                                                    children: "Get more"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                        style: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Row_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                    xl: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Body, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                marginLeft: "40px",
                                                marginTop: "60px"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Title, {
                                                    style: {
                                                        fontSize: "30px",
                                                        fontWeight: "700",
                                                        color: "rgb(28, 93, 200)"
                                                    },
                                                    children: "AKD DIVISION"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()).Text, {
                                                    style: {
                                                        fontSize: "30px",
                                                        fontWeight: "700",
                                                        color: "#000"
                                                    },
                                                    children: [
                                                        "The main mission of NSRCI is to ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Learn,experience and disseminate  "
                                                        }),
                                                        "know to others."
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    variant: "primary",
                                                    children: "Get more"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                    xl: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                                        style: {
                                            border: "none"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Img, {
                                            variant: "top",
                                            style: {
                                                height: "400px"
                                            },
                                            src: "images/akd_three.png",
                                            className: "img-fluid"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                        style: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Row_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                    xl: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Body, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                marginLeft: "40px",
                                                marginTop: "60px"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Title, {
                                                    style: {
                                                        fontSize: "30px",
                                                        fontWeight: "700",
                                                        color: "rgb(28, 93, 200)"
                                                    },
                                                    children: "AKD DIVISION"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()).Text, {
                                                    style: {
                                                        fontSize: "30px",
                                                        fontWeight: "700",
                                                        color: "#000"
                                                    },
                                                    children: [
                                                        "The main mission of NSRCI is to ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Learn,experience and disseminate  "
                                                        }),
                                                        "know to others."
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    variant: "primary",
                                                    children: "Get more"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                    xl: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                                        style: {
                                            border: "none"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Img, {
                                            variant: "top",
                                            style: {
                                                height: "400px"
                                            },
                                            src: "images/akd_four.png",
                                            className: "img-fluid"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const banner = (Banner);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: ./styles/home.module.css
var home_module = __webpack_require__(127);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
;// CONCATENATED MODULE: ./components/home/Mission.jsx






const Mission = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx((style_default()), {
                id: "7bf65498ff7c60b1",
                children: ".mission.jsx-7bf65498ff7c60b1{background:#efefef;padding-top:44px;padding-bottom:80px}.maincontainert.jsx-7bf65498ff7c60b1{position:relative;width:100%;height:300px}.thecardt.jsx-7bf65498ff7c60b1{position:absolute;width:100%;height:100%;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition:.8s;-moz-transition:.8s;-o-transition:.8s;transition:.8s}.the_frontt.jsx-7bf65498ff7c60b1{position:absolute;width:100%;height:100%;-moz-backface-visibility:hidden;backface-visibility:hidden;-webkit-backface-visibility:hidden}.the_frontt.jsx-7bf65498ff7c60b1 img.jsx-7bf65498ff7c60b1{position:absolute;width:100%;height:100%;-moz-backface-visibility:hidden;backface-visibility:hidden;-webkit-backface-visibility:hidden}.the_backt.jsx-7bf65498ff7c60b1{position:absolute;width:100%;height:100%;-moz-backface-visibility:hidden;backface-visibility:hidden;-webkit-backface-visibility:hidden;background:#aaa;transform:rotate(180deg);-webkit-transform:rotatex(180deg);-moz-transform:rotatex(180deg);-ms-transform:rotatex(180deg);-o-transform:rotatex(180deg)}.thecardt.jsx-7bf65498ff7c60b1:hover{transform:rotate(180deg);-webkit-transform:rotatex(180deg);-moz-transform:rotatex(180deg);-ms-transform:rotatex(180deg);-o-transform:rotatex(180deg)}"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-7bf65498ff7c60b1" + " " + "mission",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                        style: {
                            border: "2px solid #555"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-7bf65498ff7c60b1" + " " + `${"d-flex "} ${"justify-content-between "} ${"flex-wrap "} ${"p-2"} ${(home_module_default()).mission_part}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        width: "49%"
                                    },
                                    className: "jsx-7bf65498ff7c60b1" + " " + `${"mb-2"} ${"mt-2"} ${(home_module_default()).mission_item}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-7bf65498ff7c60b1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "jsx-7bf65498ff7c60b1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "jsx-7bf65498ff7c60b1" + " " + "maincontainert",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "jsx-7bf65498ff7c60b1" + " " + "thecardt",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "jsx-7bf65498ff7c60b1" + " " + "the_frontt",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "images/miss (1).png",
                                                                alt: "",
                                                                className: "jsx-7bf65498ff7c60b1"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "jsx-7bf65498ff7c60b1" + " " + "the_backt",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                style: {
                                                                    width: "550px",
                                                                    margin: "0 auto"
                                                                },
                                                                className: "jsx-7bf65498ff7c60b1" + " " + ((home_module_default()).mission_text || ""),
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                        style: {
                                                                            color: "#fff",
                                                                            fontSize: "40px",
                                                                            fontWeight: "600",
                                                                            marginTop: "50px",
                                                                            marginBottom: "15px"
                                                                        },
                                                                        className: "jsx-7bf65498ff7c60b1" + " " + "text-center ",
                                                                        children: "Mission"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        style: {
                                                                            color: "#fff",
                                                                            fontSize: "20px",
                                                                            fontWeight: "400",
                                                                            textAlign: "justify",
                                                                            padding: "0 10px"
                                                                        },
                                                                        className: "jsx-7bf65498ff7c60b1",
                                                                        children: "To disseminate knowledge by making a difference within the conventional education; research, innovation, and development (RID); online education; and beyond with your expertise based on a creative, adaptive, sustainable, and holistic approach."
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        width: "49%"
                                    },
                                    className: "jsx-7bf65498ff7c60b1" + " " + `${"mb-2"} ${"mt-2"} ${(home_module_default()).mission_item}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-7bf65498ff7c60b1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "jsx-7bf65498ff7c60b1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "jsx-7bf65498ff7c60b1" + " " + "maincontainert",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "jsx-7bf65498ff7c60b1" + " " + "thecardt",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "jsx-7bf65498ff7c60b1" + " " + "the_frontt",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "images/miss (2).png",
                                                                alt: "",
                                                                className: "jsx-7bf65498ff7c60b1"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "jsx-7bf65498ff7c60b1" + " " + "the_backt ",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                style: {
                                                                    width: "550px",
                                                                    margin: "0 auto"
                                                                },
                                                                className: "jsx-7bf65498ff7c60b1" + " " + ((home_module_default()).mission_text || ""),
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                        style: {
                                                                            color: "#fff",
                                                                            fontSize: "40px",
                                                                            fontWeight: "600",
                                                                            marginTop: "50px",
                                                                            marginBottom: "15px"
                                                                        },
                                                                        className: "jsx-7bf65498ff7c60b1" + " " + "text-center",
                                                                        children: "Mission"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        style: {
                                                                            color: "#fff",
                                                                            fontSize: "20px",
                                                                            fontWeight: "400",
                                                                            textAlign: "justify",
                                                                            padding: "0 10px"
                                                                        },
                                                                        className: "jsx-7bf65498ff7c60b1",
                                                                        children: "To disseminate knowledge by making a difference within the conventional education; research, innovation, and development (RID); online education; and beyond with your expertise based on a creative, adaptive, sustainable, and holistic approach."
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        width: "49%"
                                    },
                                    className: "jsx-7bf65498ff7c60b1" + " " + `${"mb-2"} ${"mt-2"} ${(home_module_default()).mission_item}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-7bf65498ff7c60b1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "jsx-7bf65498ff7c60b1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "jsx-7bf65498ff7c60b1" + " " + "maincontainert",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "jsx-7bf65498ff7c60b1" + " " + "thecardt",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "jsx-7bf65498ff7c60b1" + " " + "the_frontt",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "images/miss (3).png",
                                                                alt: "",
                                                                className: "jsx-7bf65498ff7c60b1"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "jsx-7bf65498ff7c60b1" + " " + "the_backt ",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                style: {
                                                                    width: "550px",
                                                                    margin: "0 auto"
                                                                },
                                                                className: "jsx-7bf65498ff7c60b1" + " " + ((home_module_default()).mission_text || ""),
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                        style: {
                                                                            color: "#fff",
                                                                            fontSize: "40px",
                                                                            fontWeight: "600",
                                                                            marginTop: "50px",
                                                                            marginBottom: "15px"
                                                                        },
                                                                        className: "jsx-7bf65498ff7c60b1" + " " + "text-center",
                                                                        children: "Mission"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        style: {
                                                                            color: "#fff",
                                                                            fontSize: "20px",
                                                                            fontWeight: "400",
                                                                            textAlign: "justify",
                                                                            padding: "0 10px"
                                                                        },
                                                                        className: "jsx-7bf65498ff7c60b1",
                                                                        children: "To disseminate knowledge by making a difference within the conventional education; research, innovation, and development (RID); online education; and beyond with your expertise based on a creative, adaptive, sustainable, and holistic approach."
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        width: "49%"
                                    },
                                    className: "jsx-7bf65498ff7c60b1" + " " + `${"mb-2"} ${"mt-2"} ${(home_module_default()).mission_item}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-7bf65498ff7c60b1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "jsx-7bf65498ff7c60b1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "jsx-7bf65498ff7c60b1" + " " + "maincontainert",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "jsx-7bf65498ff7c60b1" + " " + "thecardt",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "jsx-7bf65498ff7c60b1" + " " + "the_frontt",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "images/miss (4).png",
                                                                alt: "",
                                                                className: "jsx-7bf65498ff7c60b1"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "jsx-7bf65498ff7c60b1" + " " + "the_backt ",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                style: {
                                                                    width: "550px",
                                                                    margin: "0 auto"
                                                                },
                                                                className: "jsx-7bf65498ff7c60b1" + " " + ((home_module_default()).mission_text || ""),
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                        style: {
                                                                            color: "#fff",
                                                                            fontSize: "40px",
                                                                            fontWeight: "600",
                                                                            marginTop: "50px",
                                                                            marginBottom: "15px",
                                                                            textAlign: "center"
                                                                        },
                                                                        className: "jsx-7bf65498ff7c60b1",
                                                                        children: "Mission"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        style: {
                                                                            color: "#fff",
                                                                            fontSize: "20px",
                                                                            fontWeight: "400",
                                                                            textAlign: "justify",
                                                                            padding: "0 10px"
                                                                        },
                                                                        className: "jsx-7bf65498ff7c60b1",
                                                                        children: "To disseminate knowledge by making a difference within the conventional education; research, innovation, and development (RID); online education; and beyond with your expertise based on a creative, adaptive, sustainable, and holistic approach."
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const home_Mission = (Mission);

;// CONCATENATED MODULE: ./components/home/PrimaryService.jsx





const PrimaryService = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "primary_service",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("style", {
                    children: `
              .primary_service{
                background:#efefef;
              }
              .primary_service_head{
                position: relative;
              }
              .primary_service_head::after{
                position: absolute;
                width:400px;
                height:2px;
                content: '';
                background: #000;
                top: 40px;
                left:10px;
              }
              .primary_service_head::before{
                position: absolute;
                width:400px;
                height:2px;
                content: '';
                background: #000;
                top: 40px;
                right:10px;
              }
              .privacy_img img{
                width:200px;
              }
              .primary_item_text{
                width:70%;
              }
              .primary_item_text h4{
                color: #1A5DC8;
                font-size: 18px;
                font-weight: 400;
                line-height: 28px;
              }
              .primary_item_text p{
                color: #000;
                font-size: 15px;
                font-weight: 400;
                line-height: 28px;
                text-align: justify;
              }
              .primary_all_division_item h3{
                color: #1A5DC8;
                font-size: 25px;
                font-weight: 400;
                line-height: 28px;
              }
              .primary_all_division_item h4{
                color: #1A5DC8;
                font-size: 20px;
                font-weight: 400;
                line-height: 28px;
              }
              .primary_all_division_item p{
                color: #000;
                font-size: 17px;
                font-weight: 400;
                line-height: 28px; 
              }
             
              `
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                    className: "text-center ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (home_module_default()).primary_service_head,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                background: "#DCDAF5",
                                marginBottom: "33px",
                                padding: "15px",
                                color: "#000",
                                fontSize: "30px",
                                fontWeight: "600"
                            },
                            children: "Our Primary Services"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Row_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                            sm: 12,
                            md: 12,
                            lg: 7,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "primary_item d-flex mt-2 mb-2",
                                style: {
                                    background: "#e4e4f0"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "privacy_img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "images/rid.png",
                                            alt: "",
                                            className: "img-fluid"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "primary_item_text ms-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "mb-3",
                                                children: " Research , Innovation And Development Division"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "The primary focus is to conduct Research, Innovation and Development (RID) in the areas of our interests and expertise, and our valued customer's business needs. NSRIC offers the research and innovation services to the interested individuals, commercial organizations, industry, institutions and research centres through our dedicated team members with diversified experiences and talents. For more information, please visit our NSRIC RID platform. or contact at info@nsric.ca."
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                            sm: 12,
                            md: 12,
                            lg: 5,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "primary_item d-flex mt-2 mb-2",
                                style: {
                                    background: "#e4e4f0"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "privacy_img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "images/icon_tow.png",
                                            alt: "",
                                            className: "img-fluid"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "primary_item_text ms-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "mb-3",
                                                children: " Research , Innovation And Development Division"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "The primary focus is to conduct Research, Innovation and Development (RID) in the areas of our interests and expertise, and our valued customer's business needs. NSRIC offers the  commercial organizations, "
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                            sm: 12,
                            md: 12,
                            lg: 7,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "primary_item d-flex mt-4 mb-4",
                                style: {
                                    background: "#e4e4f0"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "privacy_img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "images/icon_three.png",
                                            alt: "",
                                            className: "img-fluid"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "primary_item_text ms-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "mb-3",
                                                children: " Research , Innovation And Development Division"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "The primary focus is to conduct Research, Innovation and Development (RID) in the areas of our interests and expertise, and our valued customer's business needs. NSRIC offers the research and innovation services to the interested individuals, commercial organizations, industry, institutions and research centres through our dedicated team members with diversified experiences and talents. For more information, please visit our NSRIC RID platform. or contact at info@nsric.ca."
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                            sm: 12,
                            md: 12,
                            lg: 5,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "primary_item d-flex mt-4 mb-4",
                                style: {
                                    background: "#e4e4f0"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "privacy_img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "images/icon_four.png",
                                            alt: "",
                                            className: "img-fluid"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "primary_item_text ms-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "mb-3",
                                                children: " Research , Innovation And Development Division"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "The primary focus is to conduct Research, Innovation and Development (RID) in the areas of our interests and expertise, and our valued customer's business needs. NSRIC offers the  commercial organizations, "
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                            sm: 12,
                            lg: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "primary_item d-flex mt-4 mb-4",
                                style: {
                                    background: "#e4e4f0"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "privacy_img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "images/icon_five.png",
                                            alt: "",
                                            className: "img-fluid"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "primary_item_text ms-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "mb-3",
                                                children: " Research , Innovation And Development Division"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "The primary focus is to conduct Research, Innovation and Development (RID) in the areas of our interests and expertise, and our valued customer's business needs. NSRIC offers the research and innovation services to the interested individuals, commercial organizations, industry, institutions and research centres through our dedicated team members with diversified experiences and talents. For more information, please visit our NSRIC RID platform. or contact at info@nsric.ca."
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const home_PrimaryService = (PrimaryService);

;// CONCATENATED MODULE: ./components/home/Division.jsx




const Division = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mt-5 mb-5",
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            children: /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "primary_all_division",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "primary_all_division_item mb-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "ADK Division"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        textAlign: "justify"
                                    },
                                    children: "The ADK Division has five units from where each of these units stands alone in the knowledge domain. The archiving and dissemination of knowledge processes follow the sequences of reading, learning, and sharing of knowledge with others. Therefore the primary objective of these units is to follow the core mission of the NSRIC."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "primary_all_division_item mb-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Conference Unit:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        textAlign: "justify"
                                    },
                                    children: "The NSRIC organizes local, regional, international conferences and workshops to disseminate and share knowledge. It also brings the opportunities to enhance global networks where we gather educators, researchers, students and professionals of all disciplines through the World Association of Nature Science, Education and Engineering (WANSEE). For more information about WANSEE, please visit our World Association website at www.wansee.org. The conference series will be held virtually or physically in different strategic locations of the world in the specified areas of interest. Details can be accessed through our NSRIC conferences platform. Please visit the NSRIC Conference series at www.icnsea.org or contact us at conference@nsric.ca."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "primary_all_division_item mb-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "IU Germany Unit:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        textAlign: "justify"
                                    },
                                    children: "The NSRIC organizes local, regional, international conferences and workshops to disseminate and share knowledge. It also brings the opportunities to enhance global networks where we gather educators, researchers, students and professionals of all disciplines through the World Association of Nature Science, Education and Engineering (WANSEE). For more information about WANSEE, please visit our World Association website at www.wansee.org. The conference series will be held virtually or physically in different strategic locations of the world in the specified areas of interest. Details can be accessed through our NSRIC conferences platform. Please visit the NSRIC Conference series at www.icnsea.org or contact us at conference@nsric.ca."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "primary_all_division_item mb-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "NSRIC K12 School Unit:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        textAlign: "justify"
                                    },
                                    children: "The NSRIC organizes local, regional, international conferences and workshops to disseminate and share knowledge. It also brings the opportunities to enhance global networks where we gather educators, researchers, students and professionals of all disciplines through the World Association of Nature Science, Education and Engineering (WANSEE). For more information about WANSEE, please visit our World Association website at www.wansee.org. The conference series will be held virtually or physically in different strategic locations of the world in the specified areas of interest. Details can be accessed through our NSRIC conferences platform. Please visit the NSRIC Conference series at www.icnsea.org or contact us at conference@nsric.ca."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "primary_all_division_item mb-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "SLH Unit:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        textAlign: "justify"
                                    },
                                    children: "The NSRIC organizes local, regional, international conferences and workshops to disseminate and share knowledge. It also brings the opportunities to enhance global networks where we gather educators, researchers, students and professionals of all disciplines through the World Association of Nature Science, Education and Engineering (WANSEE). For more information about WANSEE, please visit our World Association website at www.wansee.org. The conference series will be held virtually or physically in different strategic locations of the world in the specified areas of interest. Details can be accessed through our NSRIC conferences platform. Please visit the NSRIC Conference series at www.icnsea.org or contact us at conference@nsric.ca."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "primary_all_division_item mb-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "University Unit:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        textAlign: "justify"
                                    },
                                    children: "The NSRIC organizes local, regional, international conferences and workshops to disseminate and share knowledge. It also brings the opportunities to enhance global networks where we gather educators, researchers, students and professionals of all disciplines through the World Association of Nature Science, Education and Engineering (WANSEE). For more information about WANSEE, please visit our World Association website at www.wansee.org. The conference series will be held virtually or physically in different strategic locations of the world in the specified areas of interest. Details can be accessed through our NSRIC conferences platform. Please visit the NSRIC Conference series at www.icnsea.org or contact us at conference@nsric.ca."
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const home_Division = (Division);

// EXTERNAL MODULE: ./components/home/TopFooter.jsx
var TopFooter = __webpack_require__(5063);
// EXTERNAL MODULE: ./components/home/Footer.jsx
var Footer = __webpack_require__(8219);
;// CONCATENATED MODULE: ./components/home/Home.jsx




















const Home = ()=>{
    const theme = (0,material_.useTheme)();
    const colors = (0,pages_theme.tokens)(theme.palette.mode);
    return(// <div className="app">
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Navber/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(banner, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(home_Mission, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(home_PrimaryService, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(home_Division, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(TopFooter/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    }));
};
/* harmony default export */ const home_Home = (Home);


/***/ }),

/***/ 1745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_global_SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2078);
/* harmony import */ var _components_home_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(619);
/* harmony import */ var _components_global_TopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6068);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9896);
/* harmony import */ var _components_forms_LoginForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_global_SideBar__WEBPACK_IMPORTED_MODULE_1__, _components_global_TopBar__WEBPACK_IMPORTED_MODULE_3__, _components_forms_LoginForm__WEBPACK_IMPORTED_MODULE_10__]);
([_components_global_SideBar__WEBPACK_IMPORTED_MODULE_1__, _components_global_TopBar__WEBPACK_IMPORTED_MODULE_3__, _components_forms_LoginForm__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// Redux

// Themes


// Components

const login = ({ isLoggedIn  })=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_8__.useTheme)();
    const colors = (0,_theme__WEBPACK_IMPORTED_MODULE_9__.tokens)(theme.palette.mode);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (isLoggedIn) {
            router.push("/");
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isLoggedIn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_Home__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        })
    });
};
const mapStateToProps = (state)=>{
    return {
        isLoggedIn: state.auth.token
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_7__.connect)(mapStateToProps)(login));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 782:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ }),

/***/ 6213:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/AdminPanelSettings");

/***/ }),

/***/ 3603:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/AlternateEmail");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Apartment");

/***/ }),

/***/ 4173:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 242:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/DisplaySettings");

/***/ }),

/***/ 1808:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Diversity3");

/***/ }),

/***/ 9278:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/FolderOpenOutlined");

/***/ }),

/***/ 9989:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/HomeOutlined");

/***/ }),

/***/ 8792:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Info");

/***/ }),

/***/ 5688:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Key");

/***/ }),

/***/ 9801:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ 4272:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Map");

/***/ }),

/***/ 6248:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/MenuOutlined");

/***/ }),

/***/ 4610:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/NotificationsOutlined");

/***/ }),

/***/ 1939:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Person");

/***/ }),

/***/ 5018:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/PersonOutlined");

/***/ }),

/***/ 650:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/PhoneAndroid");

/***/ }),

/***/ 8017:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 5649:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/SettingsOutlined");

/***/ }),

/***/ 453:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/WorkspacePremium");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 9261:
/***/ ((module) => {

"use strict";
module.exports = require("multiselect-react-dropdown");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1937:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 7511:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ 4678:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 8582:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ 5226:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ 2540:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ 9070:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/NavDropdown");

/***/ }),

/***/ 4934:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ 8907:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ 8625:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ci");

/***/ }),

/***/ 8547:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/gr");

/***/ }),

/***/ 4041:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 1981:
/***/ ((module) => {

"use strict";
module.exports = require("react-pro-sidebar");

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

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,896,538,722,390,740], () => (__webpack_exec__(1745)));
module.exports = __webpack_exports__;

})();