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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Favorites/Favorites.module.css */ \"./components/Favorites/Favorites.module.css\");\n/* harmony import */ var _Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Favorites = (param)=>{\n    let { favoriteComics , setFavoriteComics  } = param;\n    _s();\n    const [localFavorites, setLocalFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isSmallScreen, setIsSmallScreen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleMenuToggle = ()=>{\n        setIsMenuOpen(!isMenuOpen);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setIsSmallScreen(window.innerWidth <= 1025);\n        };\n        handleResize(); // Check on initial render\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedFavorites = localStorage.getItem(\"favorites\");\n        if (storedFavorites) {\n            const favorites = JSON.parse(storedFavorites);\n            setLocalFavorites(favorites);\n        }\n        return ()=>{\n            // Synchronize favoriteComics state when component unmounts\n            setFavoriteComics(localFavorites);\n        };\n    }, []);\n    const handleRemoveFavorite = (comicId)=>{\n        const updatedFavorites = favoriteComics.filter((comic)=>comic.id !== comicId);\n        setFavoriteComics(updatedFavorites);\n        localStorage.setItem(\"favorites\", JSON.stringify(updatedFavorites));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isSmallScreen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_3___default().favoritesContiner),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_3___default().favoritesButton),\n                            onClick: handleMenuToggle,\n                            children: [\n                                \"Show Favorites\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faBoltLightning\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined),\n                        favoriteComics.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"No favorites yet.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 15\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: favoriteComics.map((comic)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        comic.title,\n                                        \"Issue: \",\n                                        comic.issueNumber,\n                                        comic.thumbnail,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>handleRemoveFavorite(comic.id),\n                                            children: \"Remove\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, comic.id, true, {\n                                    fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 19\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_3___default().favoritesButtonDesktop), \" \").concat(isSmallScreen ? isMenuOpen ? (_Favorites_Favorites_module_css__WEBPACK_IMPORTED_MODULE_3___default().menuOpen) : \"\" : \"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Favorites\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined),\n                        favoriteComics.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"No favorites yet.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: favoriteComics.map((comic)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        comic.title,\n                                        \"Issue: \",\n                                        comic.issueNumber,\n                                        comic.thumbnail,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>handleRemoveFavorite(comic.id),\n                                            children: \"Remove\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, comic.id, true, {\n                                    fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Favorites\\\\Favorites.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Favorites, \"94fJZ1QbcItm8HBhV4zeV699bE8=\");\n_c = Favorites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favorites);\nvar _c;\n$RefreshReg$(_c, \"Favorites\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zhdm9yaXRlcy9GYXZvcml0ZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUNHO0FBQ1c7QUFDRztBQWNwRSxNQUFNTSxZQUFzQyxTQUEyQztRQUExQyxFQUFFQyxlQUFjLEVBQUVDLGtCQUFpQixFQUFFOztJQUNoRixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdSLCtDQUFRQSxDQUFVLEVBQUU7SUFDaEUsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDbEQsTUFBTSxDQUFDVyxlQUFlQyxpQkFBaUIsR0FBR1osK0NBQVFBLENBQUMsS0FBSztJQUV4RCxNQUFNYSxtQkFBbUIsSUFBTTtRQUM3QkgsY0FBYyxDQUFDRDtJQUNqQjtJQUVBVixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWUsZUFBZSxJQUFNO1lBQ3pCRixpQkFBaUJHLE9BQU9DLFVBQVUsSUFBSTtRQUN4QztRQUVBRixnQkFBZ0IsMEJBQTBCO1FBRTFDQyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUVsQyxPQUFPLElBQU07WUFDWEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTGYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1vQixrQkFBa0JDLGFBQWFDLE9BQU8sQ0FBQztRQUM3QyxJQUFJRixpQkFBaUI7WUFDbkIsTUFBTUcsWUFBWUMsS0FBS0MsS0FBSyxDQUFDTDtZQUM3Qlgsa0JBQWtCYztRQUNwQixDQUFDO1FBRUQsT0FBTyxJQUFNO1lBQ1gsMkRBQTJEO1lBQzNEaEIsa0JBQWtCQztRQUNwQjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1rQix1QkFBdUIsQ0FBQ0MsVUFBb0I7UUFDaEQsTUFBTUMsbUJBQW1CdEIsZUFBZXVCLE1BQU0sQ0FBQyxDQUFDQyxRQUFVQSxNQUFNQyxFQUFFLEtBQUtKO1FBQ3ZFcEIsa0JBQWtCcUI7UUFDbEJQLGFBQWFXLE9BQU8sQ0FBQyxhQUFhUixLQUFLUyxTQUFTLENBQUNMO0lBQ25EO0lBRUEscUJBRUU7O1lBQ0doQiwrQkFDQzswQkFDRSw0RUFBQ3NCO29CQUFJQyxXQUFXakMsMEZBQXdCOztzQ0FDeEMsOERBQUNtQzs0QkFBT0YsV0FBV2pDLHdGQUFzQjs0QkFBRXFDLFNBQVN6Qjs7Z0NBQWtCOzhDQUVwRSw4REFBQ1gsMkVBQWVBO29DQUNkcUMsTUFBTXBDLDhFQUFlQTs7Ozs7Ozs7Ozs7O3dCQUd0QkUsZUFBZW1DLE1BQU0sS0FBSyxrQkFDekIsOERBQUNDO3NDQUFFOzs7OztzREFFSCw4REFBQ0M7c0NBQ0VyQyxlQUFlc0MsR0FBRyxDQUFDLENBQUNkLHNCQUNuQiw4REFBQ2U7O3dDQUNFZixNQUFNZ0IsS0FBSzt3Q0FBQzt3Q0FDTGhCLE1BQU1pQixXQUFXO3dDQUN4QmpCLE1BQU1rQixTQUFTO3NEQUNoQiw4REFBQ1g7NENBQ0NFLFNBQVMsSUFBTWIscUJBQXFCSSxNQUFNQyxFQUFFO3NEQUM3Qzs7Ozs7OzttQ0FOTUQsTUFBTUMsRUFBRTs7Ozs7Ozs7O3FDQVl0Qjs7Ozs7Ozs7MEJBSVAsOERBQUNHO2dCQUFJQyxXQUFXLEdBQW9DdkIsT0FBakNWLCtGQUE2QixFQUFDLEtBQTRELE9BQXpEVSxnQkFBaUJGLGFBQWFSLGlGQUFlLEdBQUcsRUFBRSxHQUFJLEVBQUU7MEJBQzFHLDRFQUFDZ0M7O3NDQUNDLDhEQUFDaUI7c0NBQUc7Ozs7Ozt3QkFDSDdDLGVBQWVtQyxNQUFNLEtBQUssa0JBQ3pCLDhEQUFDQztzQ0FBRTs7Ozs7c0RBRUgsOERBQUNDO3NDQUNFckMsZUFBZXNDLEdBQUcsQ0FBQyxDQUFDZCxzQkFDbkIsOERBQUNlOzt3Q0FDSWYsTUFBTWdCLEtBQUs7d0NBQUM7d0NBQ0xoQixNQUFNaUIsV0FBVzt3Q0FDeEJqQixNQUFNa0IsU0FBUztzREFDbEIsOERBQUNYOzRDQUNDRSxTQUFTLElBQU1iLHFCQUFxQkksTUFBTUMsRUFBRTtzREFDN0M7Ozs7Ozs7bUNBTk1ELE1BQU1DLEVBQUU7Ozs7Ozs7OztxQ0FZdEI7Ozs7Ozs7Ozs7Ozs7O0FBS1g7R0FwR00xQjtLQUFBQTtBQXNHTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zhdm9yaXRlcy9GYXZvcml0ZXMudHN4PzJiNDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9GYXZvcml0ZXMvRmF2b3JpdGVzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhQm9sdExpZ2h0bmluZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5pbnRlcmZhY2UgQ29taWMge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGh1bWJuYWlsOiBhbnk7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBpc3N1ZU51bWJlcjogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRmF2b3JpdGVzUHJvcHMge1xyXG4gIGZhdm9yaXRlQ29taWNzOiBDb21pY1tdO1xyXG4gIHNldEZhdm9yaXRlQ29taWNzOiAoY29taWNzOiBDb21pY1tdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBGYXZvcml0ZXM6IFJlYWN0LkZDPEZhdm9yaXRlc1Byb3BzPiA9ICh7IGZhdm9yaXRlQ29taWNzLCBzZXRGYXZvcml0ZUNvbWljcyB9KSA9PiB7XHJcbiAgY29uc3QgW2xvY2FsRmF2b3JpdGVzLCBzZXRMb2NhbEZhdm9yaXRlc10gPSB1c2VTdGF0ZTxDb21pY1tdPihbXSk7XHJcbiAgY29uc3QgW2lzTWVudU9wZW4sIHNldElzTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc1NtYWxsU2NyZWVuLCBzZXRJc1NtYWxsU2NyZWVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudVRvZ2dsZSA9ICgpID0+IHtcclxuICAgIHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIHNldElzU21hbGxTY3JlZW4od2luZG93LmlubmVyV2lkdGggPD0gMTAyNSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVJlc2l6ZSgpOyAvLyBDaGVjayBvbiBpbml0aWFsIHJlbmRlclxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkRmF2b3JpdGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIik7XHJcbiAgICBpZiAoc3RvcmVkRmF2b3JpdGVzKSB7XHJcbiAgICAgIGNvbnN0IGZhdm9yaXRlcyA9IEpTT04ucGFyc2Uoc3RvcmVkRmF2b3JpdGVzKTtcclxuICAgICAgc2V0TG9jYWxGYXZvcml0ZXMoZmF2b3JpdGVzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAvLyBTeW5jaHJvbml6ZSBmYXZvcml0ZUNvbWljcyBzdGF0ZSB3aGVuIGNvbXBvbmVudCB1bm1vdW50c1xyXG4gICAgICBzZXRGYXZvcml0ZUNvbWljcyhsb2NhbEZhdm9yaXRlcyk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmF2b3JpdGUgPSAoY29taWNJZDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkRmF2b3JpdGVzID0gZmF2b3JpdGVDb21pY3MuZmlsdGVyKChjb21pYykgPT4gY29taWMuaWQgIT09IGNvbWljSWQpO1xyXG4gICAgc2V0RmF2b3JpdGVDb21pY3ModXBkYXRlZEZhdm9yaXRlcyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZhdm9yaXRlc1wiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkRmF2b3JpdGVzKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8PlxyXG4gICAgICB7aXNTbWFsbFNjcmVlbiAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmF2b3JpdGVzQ29udGluZXJ9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5mYXZvcml0ZXNCdXR0b259IG9uQ2xpY2s9e2hhbmRsZU1lbnVUb2dnbGV9PlxyXG4gICAgICAgICAgICBTaG93IEZhdm9yaXRlc1xyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgaWNvbj17ZmFCb2x0TGlnaHRuaW5nfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtmYXZvcml0ZUNvbWljcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgPHA+Tm8gZmF2b3JpdGVzIHlldC48L3A+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2Zhdm9yaXRlQ29taWNzLm1hcCgoY29taWMpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y29taWMuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21pYy50aXRsZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgSXNzdWU6IHtjb21pYy5pc3N1ZU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICB7Y29taWMudGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUZhdm9yaXRlKGNvbWljLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5mYXZvcml0ZXNCdXR0b25EZXNrdG9wfSAke2lzU21hbGxTY3JlZW4gPyAoaXNNZW51T3BlbiA/IHN0eWxlcy5tZW51T3BlbiA6IFwiXCIpIDogXCJcIn1gfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgyPkZhdm9yaXRlczwvaDI+XHJcbiAgICAgICAgICB7ZmF2b3JpdGVDb21pY3MubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICA8cD5ObyBmYXZvcml0ZXMgeWV0LjwvcD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7ZmF2b3JpdGVDb21pY3MubWFwKChjb21pYykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17Y29taWMuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21pYy50aXRsZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgSXNzdWU6IHtjb21pYy5pc3N1ZU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICB7Y29taWMudGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlRmF2b3JpdGUoY29taWMuaWQpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJGb250QXdlc29tZUljb24iLCJmYUJvbHRMaWdodG5pbmciLCJGYXZvcml0ZXMiLCJmYXZvcml0ZUNvbWljcyIsInNldEZhdm9yaXRlQ29taWNzIiwibG9jYWxGYXZvcml0ZXMiLCJzZXRMb2NhbEZhdm9yaXRlcyIsImlzTWVudU9wZW4iLCJzZXRJc01lbnVPcGVuIiwiaXNTbWFsbFNjcmVlbiIsInNldElzU21hbGxTY3JlZW4iLCJoYW5kbGVNZW51VG9nZ2xlIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RvcmVkRmF2b3JpdGVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZhdm9yaXRlcyIsIkpTT04iLCJwYXJzZSIsImhhbmRsZVJlbW92ZUZhdm9yaXRlIiwiY29taWNJZCIsInVwZGF0ZWRGYXZvcml0ZXMiLCJmaWx0ZXIiLCJjb21pYyIsImlkIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImRpdiIsImNsYXNzTmFtZSIsImZhdm9yaXRlc0NvbnRpbmVyIiwiYnV0dG9uIiwiZmF2b3JpdGVzQnV0dG9uIiwib25DbGljayIsImljb24iLCJsZW5ndGgiLCJwIiwidWwiLCJtYXAiLCJsaSIsInRpdGxlIiwiaXNzdWVOdW1iZXIiLCJ0aHVtYm5haWwiLCJmYXZvcml0ZXNCdXR0b25EZXNrdG9wIiwibWVudU9wZW4iLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Favorites/Favorites.tsx\n"));

/***/ })

});