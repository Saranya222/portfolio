"use strict";
exports.id = 882;
exports.ids = [882];
exports.modules = {

/***/ 7882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fg": () => (/* binding */ useTheme),
/* harmony export */   "Q2": () => (/* binding */ Theme),
/* harmony export */   "f6": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var Theme;
(function(Theme) {
    Theme["LIGHT"] = "light";
    Theme["DARK"] = "dark";
})(Theme || (Theme = {}));
const ThemeContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);
const ThemeProvider = ({ children  })=>{
    const [theme, setTheme] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(Theme.DARK); // default to DARK
    const toggleTheme = ()=>{
        if (theme === Theme.LIGHT) {
            setTheme(Theme.DARK);
            document.documentElement.classList.add(Theme.DARK);
            localStorage.setItem("theme", Theme.DARK);
        } else {
            setTheme(Theme.LIGHT);
            document.documentElement.classList.remove(Theme.DARK);
            localStorage.setItem("theme", Theme.LIGHT);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const localTheme = localStorage.getItem("theme");
        if (localTheme) {
            setTheme(localTheme);
            if (localTheme === Theme.DARK) {
                document.documentElement.classList.add(Theme.DARK);
            } else {
                document.documentElement.classList.remove(Theme.DARK);
            }
        } else {
            // Default to DARK mode on first load
            document.documentElement.classList.add(Theme.DARK);
            setTheme(Theme.DARK);
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: children
    });
};
const useTheme = ()=>{
    const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};



/***/ })

};
;