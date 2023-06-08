"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/FilterBar/FilterBar.tsx":
/*!********************************************!*\
  !*** ./components/FilterBar/FilterBar.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FilterBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FilterBar_FilterBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FilterBar/FilterBar.module.css */ \"./components/FilterBar/FilterBar.module.css\");\n/* harmony import */ var _FilterBar_FilterBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FilterBar_FilterBar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction FilterBar(props) {\n    _s();\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isSmallScreen, setIsSmallScreen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleMenuToggle = ()=>{\n        setIsMenuOpen(!isMenuOpen);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setIsSmallScreen(window.innerWidth <= 1025);\n        };\n        handleResize(); // Check on initial render\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isSmallScreen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_FilterBar_FilterBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().filterButton),\n                        onClick: handleMenuToggle,\n                        children: \"Filter\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_FilterBar_FilterBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().filterBar),\n                        onClick: handleMenuToggle,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                onChange: (e)=>props.handleCharacterFilterChange(e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"All Characters\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"1009368\",\n                                        children: \"Iron Man\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"1009220\",\n                                        children: \"Captain America\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"1009664\",\n                                        children: \"Thor\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"1009268\",\n                                        children: \"Deadpool\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"1009562\",\n                                        children: \"Scarlet Witch\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"1009189\",\n                                        children: \"Black Widow\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"1009707\",\n                                        children: \"Wasp\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"1010763\",\n                                        children: \"Gamora\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                onChange: (e)=>props.handleCreatorFilterChange(e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"All Creators\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"12787\",\n                                        children: \"Kate Leth\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"24\",\n                                        children: \"Brian Michael Bendis\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"30\",\n                                        children: \"Stan Lee\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"32\",\n                                        children: \"Steve Ditko\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"196\",\n                                        children: \"Jack Kirby\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_FilterBar_FilterBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().filterBar), \" \").concat(isSmallScreen ? isMenuOpen ? (_FilterBar_FilterBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().menuOpen) : \"\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        onChange: (e)=>props.handleCharacterFilterChange(e.target.value),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"All Characters\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"1009368\",\n                                children: \"Iron Man\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"1009220\",\n                                children: \"Captain America\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"1009664\",\n                                children: \"Thor\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"1009268\",\n                                children: \"Deadpool\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"1009562\",\n                                children: \"Scarlet Witch\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"1009189\",\n                                children: \"Black Widow\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"1009707\",\n                                children: \"Wasp\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"1010763\",\n                                children: \"Gamora\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        onChange: (e)=>props.handleCreatorFilterChange(e.target.value),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"All Creators\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"12787\",\n                                children: \"Kate Leth\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"24\",\n                                children: \"Brian Michael Bendis\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"30\",\n                                children: \"Stan Lee\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"32\",\n                                children: \"Steve Ditko\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"196\",\n                                children: \"Jack Kirby\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\FilterBar\\\\FilterBar.tsx\",\n                lineNumber: 60,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(FilterBar, \"hv4xqbApu6rmPQe2kwOhpC8IrXI=\");\n_c = FilterBar;\nvar _c;\n$RefreshReg$(_c, \"FilterBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzBDQUN4Qiw4REFBQ0M7Z0NBQU9ELE9BQU07MENBQVU7Ozs7OzswQ0FDeEIsOERBQUNDO2dDQUFPRCxPQUFNOzBDQUFVOzs7Ozs7Ozs7Ozs7a0NBRTFCLDhEQUFDTDt3QkFBT0MsVUFBVSxDQUFDQyxJQUFNbkIsTUFBTXdCLHlCQUF5QixDQUFDTCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7OzBDQUNyRSw4REFBQ0M7Z0NBQU9ELE9BQU07MENBQUc7Ozs7OzswQ0FDakIsOERBQUNDO2dDQUFPRCxPQUFNOzBDQUFROzs7Ozs7MENBQ3RCLDhEQUFDQztnQ0FBT0QsT0FBTTswQ0FBSzs7Ozs7OzBDQUNuQiw4REFBQ0M7Z0NBQU9ELE9BQU07MENBQUs7Ozs7OzswQ0FDbkIsOERBQUNDO2dDQUFPRCxPQUFNOzBDQUFLOzs7Ozs7MENBQ25CLDhEQUFDQztnQ0FBT0QsT0FBTTswQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEMsQ0FBQztHQS9FcUJ2QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZpbHRlckJhci9GaWx0ZXJCYXIudHN4P2YzYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9GaWx0ZXJCYXIvRmlsdGVyQmFyLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWx0ZXJCYXIocHJvcHM6eyBcclxuICBzZXRDaGFyYWN0ZXJGaWx0ZXI6IGFueSwgXHJcbiAgc2V0Q3JlYXRvckZpbHRlcjogYW55LCBcclxuICBoYW5kbGVDaGFyYWN0ZXJGaWx0ZXJDaGFuZ2U6IGFueSwgXHJcbiAgaGFuZGxlQ3JlYXRvckZpbHRlckNoYW5nZTogYW55XHJcbn0pIHtcclxuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzU21hbGxTY3JlZW4sIHNldElzU21hbGxTY3JlZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVNZW51VG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNZW51T3BlbighaXNNZW51T3Blbik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgc2V0SXNTbWFsbFNjcmVlbih3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDI1KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlUmVzaXplKCk7IC8vIENoZWNrIG9uIGluaXRpYWwgcmVuZGVyXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7aXNTbWFsbFNjcmVlbiAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVNZW51VG9nZ2xlfT5cclxuICAgICAgICBGaWx0ZXJcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJhcn0gb25DbGljaz17aGFuZGxlTWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IHByb3BzLmhhbmRsZUNoYXJhY3RlckZpbHRlckNoYW5nZShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbCBDaGFyYWN0ZXJzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwOTM2OFwiPklyb24gTWFuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwOTIyMFwiPkNhcHRhaW4gQW1lcmljYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwMDk2NjRcIj5UaG9yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwOTI2OFwiPkRlYWRwb29sPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwOTU2MlwiPlNjYXJsZXQgV2l0Y2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDA5MTg5XCI+QmxhY2sgV2lkb3c8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDA5NzA3XCI+V2FzcDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwMTA3NjNcIj5HYW1vcmE8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMuaGFuZGxlQ3JlYXRvckZpbHRlckNoYW5nZShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbCBDcmVhdG9yczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEyNzg3XCI+S2F0ZSBMZXRoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjRcIj5CcmlhbiBNaWNoYWVsIEJlbmRpczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMwXCI+U3RhbiBMZWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzMlwiPlN0ZXZlIERpdGtvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTk2XCI+SmFjayBLaXJieTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj48Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5maWx0ZXJCYXJ9ICR7aXNTbWFsbFNjcmVlbiA/IChpc01lbnVPcGVuID8gc3R5bGVzLm1lbnVPcGVuIDogXCJcIikgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMuaGFuZGxlQ2hhcmFjdGVyRmlsdGVyQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbCBDaGFyYWN0ZXJzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwMDkzNjhcIj5Jcm9uIE1hbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDA5MjIwXCI+Q2FwdGFpbiBBbWVyaWNhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwMDk2NjRcIj5UaG9yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwMDkyNjhcIj5EZWFkcG9vbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDA5NTYyXCI+U2NhcmxldCBXaXRjaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDA5MTg5XCI+QmxhY2sgV2lkb3c8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwOTcwN1wiPldhc3A8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAxMDc2M1wiPkdhbW9yYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IHByb3BzLmhhbmRsZUNyZWF0b3JGaWx0ZXJDaGFuZ2UoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsIENyZWF0b3JzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEyNzg3XCI+S2F0ZSBMZXRoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjI0XCI+QnJpYW4gTWljaGFlbCBCZW5kaXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzBcIj5TdGFuIExlZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzMlwiPlN0ZXZlIERpdGtvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5NlwiPkphY2sgS2lyYnk8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgfVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkZpbHRlckJhciIsInByb3BzIiwiaXNNZW51T3BlbiIsInNldElzTWVudU9wZW4iLCJpc1NtYWxsU2NyZWVuIiwic2V0SXNTbWFsbFNjcmVlbiIsImhhbmRsZU1lbnVUb2dnbGUiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJidXR0b24iLCJjbGFzc05hbWUiLCJmaWx0ZXJCdXR0b24iLCJvbkNsaWNrIiwiZGl2IiwiZmlsdGVyQmFyIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJlIiwiaGFuZGxlQ2hhcmFjdGVyRmlsdGVyQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJvcHRpb24iLCJoYW5kbGVDcmVhdG9yRmlsdGVyQ2hhbmdlIiwibWVudU9wZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FilterBar/FilterBar.tsx\n"));

/***/ })

});