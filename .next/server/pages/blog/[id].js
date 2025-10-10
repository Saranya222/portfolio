"use strict";
(() => {
var exports = {};
exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 7186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8446);
/* harmony import */ var _form_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(409);
/* harmony import */ var _form_Textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9943);





const CommentBox = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "text-2xl font-semibold",
                children: "Leave a comment"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-gray-500 dark:text-gray-300",
                children: "Your email address will not be published."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-4 grid max-w-2xl gap-8 md:grid-cols-2 md:gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        placeholder: "Your Name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        placeholder: "Email Address"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-8 max-w-2xl",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_Textarea__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    placeholder: "Comment"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    className: "px-8",
                    children: "Add Comment"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentBox);


/***/ }),

/***/ 3676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ partials_RecentComment)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
;// CONCATENATED MODULE: ./src/components/shared/Comment.tsx



const Comment = ({ comment  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "py-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-baseline",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "text-lg font-bold",
                        children: comment.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("time", {
                        className: "ml-2 text-xs text-gray-500 dark:text-gray-400",
                        children: comment.createdAt
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-2 space-y-6 text-base text-gray-500 dark:text-gray-300",
                children: comment.content
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-3 flex items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "flex items-center text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiHeart, {
                                className: "h-4"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "ml-1 text-sm",
                                children: [
                                    comment.totalLikes,
                                    " likes"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "ml-4 flex items-center text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiMessageSquare, {
                                className: "h-4"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "ml-1 text-sm",
                                children: [
                                    comment.totalReplies,
                                    " replies"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const shared_Comment = (Comment);

// EXTERNAL MODULE: ./src/components/form/Button.tsx
var Button = __webpack_require__(8446);
;// CONCATENATED MODULE: ./src/components/partials/RecentComment.tsx




const comments = [
    {
        id: 1,
        content: `
          This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.
        `,
        name: "John Doe",
        totalLikes: 10,
        totalReplies: 3,
        createdAt: "1 month ago"
    },
    {
        id: 2,
        content: `
          This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.
        `,
        name: "Newton",
        totalLikes: 7,
        totalReplies: 5,
        createdAt: "2 hours ago"
    },
    {
        id: 3,
        content: `
          This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.
        `,
        name: "Emily Selman",
        totalLikes: 5,
        totalReplies: 1,
        createdAt: "6 min ago"
    },
    {
        id: 4,
        content: `
          This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.
        `,
        name: "Gary Smith",
        totalLikes: 3,
        totalReplies: 0,
        createdAt: "1 years ago"
    }, 
];
const RecentComment = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-2xl font-semibold",
                children: "Recent Comments"
            }),
            comments.map((item, index)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(shared_Comment, {
                    comment: item
                }, index);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                className: "mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200",
                children: "See More"
            })
        ]
    });
};
/* harmony default export */ const partials_RecentComment = (RecentComment);


/***/ }),

/***/ 2549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ posts)
/* harmony export */ });
const posts = [];


/***/ }),

/***/ 7356:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_partials_CommentBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7186);
/* harmony import */ var _components_partials_RecentComment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3676);
/* harmony import */ var _data_posts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2549);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__]);
_layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const BlogSingle = ({ post  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "Blog",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container mb-10",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-24 flex flex-col items-center justify-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-center text-2xl font-semibold sm:text-3xl md:text-4xl",
                            children: post.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "mt-4 flex items-center text-gray-400",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: post.publishedAt
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "mx-2 h-1.5 w-1.5 rounded-full bg-primary-500"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: post.authorName
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-10 overflow-hidden rounded-xl",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: post.imageUrl,
                                height: 720,
                                width: 1280,
                                layout: "responsive",
                                alt: post.title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                            className: "prose mt-10 max-w-full dark:prose-invert",
                            dangerouslySetInnerHTML: {
                                __html: post.content
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-10 flex",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "#",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiTwitter, {
                                            className: "mr-3"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "#",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiFacebook, {
                                            className: "mx-3"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "#",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiLinkedin, {
                                            className: "mx-3"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "#",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiMail, {
                                            className: "mx-3"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-10",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_RecentComment__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-10",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_CommentBox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const getServerSideProps = async (context)=>{
    const id = context.params?.id;
    const post = _data_posts__WEBPACK_IMPORTED_MODULE_8__/* .posts.find */ .x.find((post)=>post.id === Number(id));
    if (post) {
        return {
            props: {
                post
            }
        };
    }
    return {
        notFound: true
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogSingle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 6399:
/***/ ((module) => {

module.exports = require("react-icons/hi");

/***/ }),

/***/ 5337:
/***/ ((module) => {

module.exports = require("react-scroll-to-top");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,882,297,407], () => (__webpack_exec__(7356)));
module.exports = __webpack_exports__;

})();