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

/***/ "./components/Favorites/Favorites.tsx":
/*!********************************************!*\
  !*** ./components/Favorites/Favorites.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Favorites/Favorites.module.css */ \"./components/Favorites/Favorites.module.css\");\n/* harmony import */ var _Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Favorites = (param)=>{\n    let { favoriteComics , setFavoriteComics  } = param;\n    _s();\n    const [localFavorites, setLocalFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isSmallScreen, setIsSmallScreen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const myLoader = (param, comic)=>{\n        let { src , width , quality  } = param;\n        return \"\".concat(comic.thumbnail, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n    };\n    const handleMenuToggle = ()=>{\n        setIsMenuOpen(!isMenuOpen);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setIsSmallScreen(window.innerWidth <= 1025);\n        };\n        handleResize(); // Check on initial render\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedFavorites = localStorage.getItem(\"favorites\");\n        if (storedFavorites) {\n            const favorites = JSON.parse(storedFavorites);\n            setLocalFavorites(favorites);\n        }\n        return ()=>{\n            // Synchronize favoriteComics state when component unmounts\n            setFavoriteComics(localFavorites);\n        };\n    }, []);\n    const handleRemoveFavorite = (comicId)=>{\n        const updatedFavorites = favoriteComics.filter((comic)=>comic.id !== comicId);\n        setFavoriteComics(updatedFavorites);\n        localStorage.setItem(\"favorites\", JSON.stringify(updatedFavorites));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isSmallScreen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_4___default().favoritesContiner),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_4___default().favoritesButton),\n                        onClick: handleMenuToggle,\n                        children: [\n                            isMenuOpen ? \"Hide Favorites\" : \"Show Favorites\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faBoltLightning\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_4___default().favoritesButtonDesktop), \" \").concat(isSmallScreen ? isMenuOpen ? (_Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuOpen) : \"\" : \"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Favorites\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, undefined),\n                        favoriteComics.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"No favorites yet.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: favoriteComics.map((comic)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: (_Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                                                    children: comic.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                                                    lineNumber: 111,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \"Issue: \",\n                                                        comic.issueNumber\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                                            lineNumber: 110,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            priority: true,\n                                            loader: (props)=>myLoader(props, comic),\n                                            src: comic.thumbnail,\n                                            className: (_Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_4___default().comicImage),\n                                            width: 50,\n                                            height: 75,\n                                            alt: \"thumbnail\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: (_Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_4___default().removeButton),\n                                            onClick: ()=>handleRemoveFavorite(comic.id),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faXmark\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                                                lineNumber: 126,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                                            lineNumber: 123,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, comic.id, true, {\n                                    fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Favorites, \"94fJZ1QbcItm8HBhV4zeV699bE8=\");\n_c = Favorites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favorites);\nvar _c;\n$RefreshReg$(_c, \"Favorites\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zhdm9yaXRlcy9GYXZvcml0ZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW1EO0FBQ3BCO0FBRXVCO0FBQ1c7QUFDRztBQUNSO0FBZTVELE1BQU1RLFlBQXNDLFNBQTJDO1FBQTFDLEVBQUVDLGVBQWMsRUFBRUMsa0JBQWlCLEVBQUU7O0lBQ2hGLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1YsK0NBQVFBLENBQVUsRUFBRTtJQUNoRSxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQUMsS0FBSztJQUNsRCxNQUFNLENBQUNhLGVBQWVDLGlCQUFpQixHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRXhELE1BQU1lLFdBQVcsUUFBNENDLFFBQWlCO1lBQTVELEVBQUVDLElBQUcsRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQW9CO1FBQ3pELE9BQU8sR0FBd0JELE9BQXJCRixNQUFNSSxTQUFTLEVBQUMsT0FBZ0JELE9BQVhELE9BQU0sT0FBbUIsT0FBZEMsV0FBVztJQUN2RDtJQUVBLE1BQU1FLG1CQUFtQixJQUFNO1FBQzdCVCxjQUFjLENBQUNEO0lBQ2pCO0lBRUFaLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNdUIsZUFBZSxJQUFNO1lBQ3pCUixpQkFBaUJTLE9BQU9DLFVBQVUsSUFBSTtRQUN4QztRQUVBRixnQkFBZ0IsMEJBQTBCO1FBRTFDQyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUVsQyxPQUFPLElBQU07WUFDWEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTHZCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNNEIsa0JBQWtCQyxhQUFhQyxPQUFPLENBQUM7UUFDN0MsSUFBSUYsaUJBQWlCO1lBQ25CLE1BQU1HLFlBQVlDLEtBQUtDLEtBQUssQ0FBQ0w7WUFDN0JqQixrQkFBa0JvQjtRQUNwQixDQUFDO1FBRUQsT0FBTyxJQUFNO1lBQ1gsMkRBQTJEO1lBQzNEdEIsa0JBQWtCQztRQUNwQjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU13Qix1QkFBdUIsQ0FBQ0MsVUFBb0I7UUFDaEQsTUFBTUMsbUJBQW1CNUIsZUFBZTZCLE1BQU0sQ0FBQyxDQUFDcEIsUUFBVUEsTUFBTXFCLEVBQUUsS0FBS0g7UUFDdkUxQixrQkFBa0IyQjtRQUNsQlAsYUFBYVUsT0FBTyxDQUFDLGFBQWFQLEtBQUtRLFNBQVMsQ0FBQ0o7SUFDbkQ7SUFFQSxxQkFFRTs7WUFDR3RCLCtCQUNDOzBCQUNFLDRFQUFDMkI7b0JBQUlDLFdBQVd2QywwRkFBd0I7OEJBQ3RDLDRFQUFDeUM7d0JBQU9GLFdBQVd2Qyx3RkFBc0I7d0JBQUUyQyxTQUFTeEI7OzRCQUNqRFYsYUFBYSxtQkFBbUIsZ0JBQWdCOzBDQUNqRCw4REFBQ1IsMkVBQWVBO2dDQUNkMkMsTUFBTTFDLDhFQUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQXdCL0IsOERBQUNvQztnQkFBSUMsV0FBVyxHQUFvQzVCLE9BQWpDWCwrRkFBNkIsRUFBQyxLQUE0RCxPQUF6RFcsZ0JBQWlCRixhQUFhVCxpRkFBZSxHQUFHLEVBQUUsR0FBSSxFQUFFOzBCQUMxRyw0RUFBQ3NDOztzQ0FDQyw4REFBQ1M7c0NBQUc7Ozs7Ozt3QkFDSDFDLGVBQWUyQyxNQUFNLEtBQUssa0JBQ3pCLDhEQUFDQztzQ0FBRTs7Ozs7c0RBRUgsOERBQUNDO3NDQUNFN0MsZUFBZThDLEdBQUcsQ0FBQyxDQUFDckMsc0JBQ25CLDhEQUFDc0M7O3NEQUNDLDhEQUFDZDs0Q0FBSUMsV0FBV3ZDLGdGQUFjOzs4REFDNUIsOERBQUNpRDtvREFBRVYsV0FBV3ZDLDhFQUFZOzhEQUFHYyxNQUFNd0MsS0FBSzs7Ozs7OzhEQUN4Qyw4REFBQ0w7O3dEQUFFO3dEQUFRbkMsTUFBTXlDLFdBQVc7Ozs7Ozs7Ozs7Ozs7c0RBRTlCLDhEQUFDeEQsbURBQUtBOzRDQUNKeUQsUUFBUTs0Q0FDUkMsUUFBUSxDQUFDQyxRQUE0QjdDLFNBQVM2QyxPQUFPNUM7NENBQ3JEQyxLQUFLRCxNQUFNSSxTQUFTOzRDQUNwQnFCLFdBQVd2QyxtRkFBaUI7NENBQzVCZ0IsT0FBTzs0Q0FDUDRDLFFBQVE7NENBQ1JDLEtBQUk7Ozs7OztzREFFTiw4REFBQ3BCOzRDQUFPRixXQUFXdkMscUZBQW1COzRDQUNwQzJDLFNBQVMsSUFBTVoscUJBQXFCakIsTUFBTXFCLEVBQUU7c0RBRTVDLDRFQUFDbEMsMkVBQWVBO2dEQUFDMkMsTUFBTXpDLHNFQUFPQTs7Ozs7Ozs7Ozs7O21DQWpCekJXLE1BQU1xQixFQUFFOzs7Ozs7Ozs7cUNBc0J0Qjs7Ozs7Ozs7Ozs7Ozs7QUFLWDtHQWxITS9CO0tBQUFBO0FBb0hOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmF2b3JpdGVzL0Zhdm9yaXRlcy50c3g/MmI0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IEltYWdlTG9hZGVyUHJvcHMgfSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9GYXZvcml0ZXMvRmF2b3JpdGVzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhQm9sdExpZ2h0bmluZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhWG1hcmsgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5cclxuXHJcbmludGVyZmFjZSBDb21pYyB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aHVtYm5haWw6IGFueTtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGlzc3VlTnVtYmVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBGYXZvcml0ZXNQcm9wcyB7XHJcbiAgZmF2b3JpdGVDb21pY3M6IENvbWljW107XHJcbiAgc2V0RmF2b3JpdGVDb21pY3M6IChjb21pY3M6IENvbWljW10pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IEZhdm9yaXRlczogUmVhY3QuRkM8RmF2b3JpdGVzUHJvcHM+ID0gKHsgZmF2b3JpdGVDb21pY3MsIHNldEZhdm9yaXRlQ29taWNzIH0pID0+IHtcclxuICBjb25zdCBbbG9jYWxGYXZvcml0ZXMsIHNldExvY2FsRmF2b3JpdGVzXSA9IHVzZVN0YXRlPENvbWljW10+KFtdKTtcclxuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzU21hbGxTY3JlZW4sIHNldElzU21hbGxTY3JlZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBteUxvYWRlciA9ICh7IHNyYywgd2lkdGgsIHF1YWxpdHkgfTogSW1hZ2VMb2FkZXJQcm9wcywgY29taWM6IENvbWljKSA9PiB7XHJcbiAgICByZXR1cm4gYCR7Y29taWMudGh1bWJuYWlsfT93PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVNZW51VG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNZW51T3BlbighaXNNZW51T3Blbik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgc2V0SXNTbWFsbFNjcmVlbih3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDI1KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlUmVzaXplKCk7IC8vIENoZWNrIG9uIGluaXRpYWwgcmVuZGVyXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRGYXZvcml0ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKTtcclxuICAgIGlmIChzdG9yZWRGYXZvcml0ZXMpIHtcclxuICAgICAgY29uc3QgZmF2b3JpdGVzID0gSlNPTi5wYXJzZShzdG9yZWRGYXZvcml0ZXMpO1xyXG4gICAgICBzZXRMb2NhbEZhdm9yaXRlcyhmYXZvcml0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIFN5bmNocm9uaXplIGZhdm9yaXRlQ29taWNzIHN0YXRlIHdoZW4gY29tcG9uZW50IHVubW91bnRzXHJcbiAgICAgIHNldEZhdm9yaXRlQ29taWNzKGxvY2FsRmF2b3JpdGVzKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVGYXZvcml0ZSA9IChjb21pY0lkOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRGYXZvcml0ZXMgPSBmYXZvcml0ZUNvbWljcy5maWx0ZXIoKGNvbWljKSA9PiBjb21pYy5pZCAhPT0gY29taWNJZCk7XHJcbiAgICBzZXRGYXZvcml0ZUNvbWljcyh1cGRhdGVkRmF2b3JpdGVzKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmF2b3JpdGVzXCIsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRGYXZvcml0ZXMpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDw+XHJcbiAgICAgIHtpc1NtYWxsU2NyZWVuICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYXZvcml0ZXNDb250aW5lcn0+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZmF2b3JpdGVzQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVNZW51VG9nZ2xlfT5cclxuICAgICAgICAgICAgICB7aXNNZW51T3BlbiA/IFwiSGlkZSBGYXZvcml0ZXNcIiA6IFwiU2hvdyBGYXZvcml0ZXNcIn1cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICBpY29uPXtmYUJvbHRMaWdodG5pbmd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHsvKiB7ZmF2b3JpdGVDb21pY3MubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICAgIDxwPk5vIGZhdm9yaXRlcyB5ZXQuPC9wPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtmYXZvcml0ZUNvbWljcy5tYXAoKGNvbWljKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NvbWljLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y29taWMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgSXNzdWU6IHtjb21pYy5pc3N1ZU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICB7Y29taWMudGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUZhdm9yaXRlKGNvbWljLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZmF2b3JpdGVzQnV0dG9uRGVza3RvcH0gJHtpc1NtYWxsU2NyZWVuID8gKGlzTWVudU9wZW4gPyBzdHlsZXMubWVudU9wZW4gOiBcIlwiKSA6IFwiXCJ9YH0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj5GYXZvcml0ZXM8L2gyPlxyXG4gICAgICAgICAge2Zhdm9yaXRlQ29taWNzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgPHA+Tm8gZmF2b3JpdGVzIHlldC48L3A+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAge2Zhdm9yaXRlQ29taWNzLm1hcCgoY29taWMpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NvbWljLmlkfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2NvbWljLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Jc3N1ZToge2NvbWljLmlzc3VlTnVtYmVyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXsocHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IG15TG9hZGVyKHByb3BzLCBjb21pYyl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtjb21pYy50aHVtYm5haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29taWNJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3NX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ0aHVtYm5haWxcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVGYXZvcml0ZShjb21pYy5pZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhWG1hcmt9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsInN0eWxlcyIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQm9sdExpZ2h0bmluZyIsImZhWG1hcmsiLCJGYXZvcml0ZXMiLCJmYXZvcml0ZUNvbWljcyIsInNldEZhdm9yaXRlQ29taWNzIiwibG9jYWxGYXZvcml0ZXMiLCJzZXRMb2NhbEZhdm9yaXRlcyIsImlzTWVudU9wZW4iLCJzZXRJc01lbnVPcGVuIiwiaXNTbWFsbFNjcmVlbiIsInNldElzU21hbGxTY3JlZW4iLCJteUxvYWRlciIsImNvbWljIiwic3JjIiwid2lkdGgiLCJxdWFsaXR5IiwidGh1bWJuYWlsIiwiaGFuZGxlTWVudVRvZ2dsZSIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0b3JlZEZhdm9yaXRlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmYXZvcml0ZXMiLCJKU09OIiwicGFyc2UiLCJoYW5kbGVSZW1vdmVGYXZvcml0ZSIsImNvbWljSWQiLCJ1cGRhdGVkRmF2b3JpdGVzIiwiZmlsdGVyIiwiaWQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZGl2IiwiY2xhc3NOYW1lIiwiZmF2b3JpdGVzQ29udGluZXIiLCJidXR0b24iLCJmYXZvcml0ZXNCdXR0b24iLCJvbkNsaWNrIiwiaWNvbiIsImZhdm9yaXRlc0J1dHRvbkRlc2t0b3AiLCJtZW51T3BlbiIsImgyIiwibGVuZ3RoIiwicCIsInVsIiwibWFwIiwibGkiLCJjb250ZW50IiwidGl0bGUiLCJpc3N1ZU51bWJlciIsInByaW9yaXR5IiwibG9hZGVyIiwicHJvcHMiLCJjb21pY0ltYWdlIiwiaGVpZ2h0IiwiYWx0IiwicmVtb3ZlQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Favorites/Favorites.tsx\n"));

/***/ })

});