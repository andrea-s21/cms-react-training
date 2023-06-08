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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_comics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/comics */ \"./lib/comics.tsx\");\n/* harmony import */ var _components_layout_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _components_layout_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_layout_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_ComicCard_ComicCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ComicCard/ComicCard */ \"./components/ComicCard/ComicCard.tsx\");\n/* harmony import */ var _components_FilterBar_FilterBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FilterBar/FilterBar */ \"./components/FilterBar/FilterBar.tsx\");\n/* harmony import */ var _components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pagination/Pagination */ \"./components/Pagination/Pagination.tsx\");\n/* harmony import */ var _components_Favorites_Favorites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Favorites/Favorites */ \"./components/Favorites/Favorites.tsx\");\n/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar/NavBar */ \"./components/NavBar/NavBar.tsx\");\n/* harmony import */ var _components_HeroImage_HeroImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/HeroImage/HeroImage */ \"./components/HeroImage/HeroImage.tsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer/Footer */ \"./components/Footer/Footer.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst IMG_FANTASTIC = \"portrait_fantastic\";\nfunction Home() {\n    _s();\n    const [characterFilter, setCharacterFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [creatorFilter, setCreatorFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [favorites, setFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { comics , isLoading , isSuccess , currentPage , setPage  } = (0,_lib_comics__WEBPACK_IMPORTED_MODULE_2__.useFetchComics)({\n        characterFilter,\n        creatorFilter\n    });\n    const maxDisplay = 15;\n    const handleCharacterFilterChange = (characterId)=>{\n        setCharacterFilter(characterId);\n    };\n    const handleCreatorFilterChange = (creatorId)=>{\n        setCreatorFilter(creatorId);\n    };\n    const handleAddToFavorites = (newComic)=>{\n        if (favorites.length >= 10) {\n            return; // Limit reached, do not add the new comic\n        }\n        setFavorites((prevFavorites)=>[\n                ...prevFavorites,\n                newComic\n            ]);\n        localStorage.setItem(\"favorites\", JSON.stringify([\n            ...favorites,\n            newComic\n        ]));\n        console.log(\"added\");\n        console.log(favorites, \"favs\");\n    };\n    // Calculate the start and end index of the current page\n    const startIndex = (currentPage - 1) * maxDisplay;\n    const endIndex = startIndex + maxDisplay;\n    const renderedComics = comics.slice(startIndex, endIndex);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n            lineNumber: 54,\n            columnNumber: 12\n        }, this);\n    }\n    // if (!isSuccess) {\n    //   return <p>Failed to fetch comics.</p>;\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_components_layout_module_css__WEBPACK_IMPORTED_MODULE_10___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        favoritesCount: favorites.length\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeroImage_HeroImage__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_layout_module_css__WEBPACK_IMPORTED_MODULE_10___default().textbox),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_components_layout_module_css__WEBPACK_IMPORTED_MODULE_10___default().subtitle),\n                        children: \"New Comics!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_components_layout_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),\n                        children: \"Coming Out Daily\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_components_layout_module_css__WEBPACK_IMPORTED_MODULE_10___default().description),\n                        children: \"Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_layout_module_css__WEBPACK_IMPORTED_MODULE_10___default().filter),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBar_FilterBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        setCharacterFilter: setCharacterFilter,\n                        setCreatorFilter: setCreatorFilter,\n                        handleCharacterFilterChange: handleCharacterFilterChange,\n                        handleCreatorFilterChange: handleCreatorFilterChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Favorites_Favorites__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        favoriteComics: favorites,\n                        setFavoriteComics: setFavorites\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_layout_module_css__WEBPACK_IMPORTED_MODULE_10___default().comicContainer),\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    flexWrap: \"wrap\",\n                    gap: \"20px\",\n                    margin: \"15px 20px\"\n                },\n                children: renderedComics.map((comic)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ComicCard_ComicCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: comic.title,\n                        id: comic.id,\n                        issueNumber: comic.issueNumber,\n                        creators: comic.creators.items.map((creator)=>{\n                            return creator.name;\n                        }),\n                        thumbnail: \"\".concat(comic.thumbnail.path, \"/\").concat(IMG_FANTASTIC, \".\").concat(comic.thumbnail.extension),\n                        handleAddToFavorites: handleAddToFavorites,\n                        favoriteComics: favorites\n                    }, comic.id, false, {\n                        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                comics: comics,\n                currentPage: currentPage,\n                onPageChange: setPage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"/kiJwVv3eG18q26euhWplvM9Udg=\", false, function() {\n    return [\n        _lib_comics__WEBPACK_IMPORTED_MODULE_2__.useFetchComics\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLENBQUNMLEdBQUcsQ0FBQyxDQUFDTSxVQUFpQjs0QkFDbkQsT0FBT0EsUUFBUUMsSUFBSTt3QkFDckI7d0JBQ0FDLFdBQVcsR0FBMkI5RCxPQUF4QnVELE1BQU1PLFNBQVMsQ0FBQ0MsSUFBSSxFQUFDLEtBQW9CUixPQUFqQnZELGVBQWMsS0FBNkIsT0FBMUJ1RCxNQUFNTyxTQUFTLENBQUNFLFNBQVM7d0JBQ2hGN0Msc0JBQXNCQTt3QkFDdEIwQixnQkFBZ0J0Qzt1QkFSWGdELE1BQU1DLEVBQUU7Ozs7Ozs7Ozs7MEJBWWpCLDhEQUFDN0QseUVBQVVBO2dCQUFDYyxRQUFRQTtnQkFBUUcsYUFBYUE7Z0JBQWFxRCxjQUFjcEQ7Ozs7OzswQkFDcEUsOERBQUNkLGlFQUFNQTs7Ozs7OztBQUdmLENBQUM7R0ExRXVCRTs7UUFJeUNWLHVEQUFjQTs7O0tBSnZEVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRmV0Y2hDb21pY3MgfSBmcm9tICcuLi9saWIvY29taWNzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENvbWljQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NvbWljQ2FyZC9Db21pY0NhcmQnO1xyXG5pbXBvcnQgRmlsdGVyQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvRmlsdGVyQmFyL0ZpbHRlckJhcic7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uJztcclxuaW1wb3J0IEZhdm9yaXRlcyBmcm9tICcuLi9jb21wb25lbnRzL0Zhdm9yaXRlcy9GYXZvcml0ZXMnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhci9OYXZCYXJcIjtcclxuaW1wb3J0IEhlcm9JbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL0hlcm9JbWFnZS9IZXJvSW1hZ2UnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlcic7XHJcblxyXG5cclxuY29uc3QgSU1HX0ZBTlRBU1RJQyA9IFwicG9ydHJhaXRfZmFudGFzdGljXCI7XHJcblxyXG5pbnRlcmZhY2UgQ29taWMge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGh1bWJuYWlsOiBhbnk7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBpc3N1ZU51bWJlcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtjaGFyYWN0ZXJGaWx0ZXIsIHNldENoYXJhY3RlckZpbHRlcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2NyZWF0b3JGaWx0ZXIsIHNldENyZWF0b3JGaWx0ZXJdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFtmYXZvcml0ZXMsIHNldEZhdm9yaXRlc10gPSB1c2VTdGF0ZTxDb21pY1tdPihbXSk7XHJcbiAgY29uc3QgeyBjb21pY3MsIGlzTG9hZGluZywgaXNTdWNjZXNzLCBjdXJyZW50UGFnZSwgc2V0UGFnZSB9ID0gdXNlRmV0Y2hDb21pY3MoeyBjaGFyYWN0ZXJGaWx0ZXIsIGNyZWF0b3JGaWx0ZXJ9KTtcclxuICBjb25zdCBtYXhEaXNwbGF5ID0gMTU7IFxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFyYWN0ZXJGaWx0ZXJDaGFuZ2UgPSAoY2hhcmFjdGVySWQ6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0Q2hhcmFjdGVyRmlsdGVyKGNoYXJhY3RlcklkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdG9yRmlsdGVyQ2hhbmdlID0gKGNyZWF0b3JJZDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRDcmVhdG9yRmlsdGVyKGNyZWF0b3JJZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkVG9GYXZvcml0ZXMgPSAobmV3Q29taWM6IENvbWljKSA9PiB7XHJcbiAgICBpZiAoZmF2b3JpdGVzLmxlbmd0aCA+PSAxMCkge1xyXG4gICAgICByZXR1cm47IC8vIExpbWl0IHJlYWNoZWQsIGRvIG5vdCBhZGQgdGhlIG5ldyBjb21pY1xyXG4gICAgfVxyXG4gICAgc2V0RmF2b3JpdGVzKChwcmV2RmF2b3JpdGVzOiBDb21pY1tdKSA9PiBbLi4ucHJldkZhdm9yaXRlcywgbmV3Q29taWNdKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmF2b3JpdGVzXCIsIEpTT04uc3RyaW5naWZ5KFsuLi5mYXZvcml0ZXMsIG5ld0NvbWljXSkpO1xyXG4gICAgY29uc29sZS5sb2coJ2FkZGVkJylcclxuICAgIGNvbnNvbGUubG9nKGZhdm9yaXRlcywgJ2ZhdnMnKVxyXG4gIH07XHJcblxyXG4gIC8vIENhbGN1bGF0ZSB0aGUgc3RhcnQgYW5kIGVuZCBpbmRleCBvZiB0aGUgY3VycmVudCBwYWdlXHJcbiAgY29uc3Qgc3RhcnRJbmRleCA9IChjdXJyZW50UGFnZSAtIDEpICogbWF4RGlzcGxheTtcclxuICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyBtYXhEaXNwbGF5O1xyXG5cclxuICBjb25zdCByZW5kZXJlZENvbWljcyA9IGNvbWljcy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICB9XHJcblxyXG4gIC8vIGlmICghaXNTdWNjZXNzKSB7XHJcbiAgLy8gICByZXR1cm4gPHA+RmFpbGVkIHRvIGZldGNoIGNvbWljcy48L3A+O1xyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgPE5hdkJhciBmYXZvcml0ZXNDb3VudD17ZmF2b3JpdGVzLmxlbmd0aH0gLz5cclxuICAgICAgICAgIDxIZXJvSW1hZ2UgLz5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRib3h9PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5OZXcgQ29taWNzITwvaDI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkNvbWluZyBPdXQgRGFpbHk8L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlNlZCBwb3N1ZXJlIGNvbnNlY3RldHVyIGVzdCBhdCBsb2JvcnRpcy4gTnVsbGEgdml0YWUgZWxpdCBsaWJlcm8sIGEgcGhhcmV0cmEgYXVndWUuIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gTnVsbGFtIGlkIGRvbG9yIGlkIG5pYmggdWx0cmljaWVzIHZlaGljdWxhIHV0IGlkIGVsaXQuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyfT5cclxuICAgICAgICAgIDxGaWx0ZXJCYXIgIHNldENoYXJhY3RlckZpbHRlcj17c2V0Q2hhcmFjdGVyRmlsdGVyfSBzZXRDcmVhdG9yRmlsdGVyPXtzZXRDcmVhdG9yRmlsdGVyfSBoYW5kbGVDaGFyYWN0ZXJGaWx0ZXJDaGFuZ2U9e2hhbmRsZUNoYXJhY3RlckZpbHRlckNoYW5nZX0gaGFuZGxlQ3JlYXRvckZpbHRlckNoYW5nZT17aGFuZGxlQ3JlYXRvckZpbHRlckNoYW5nZX0vPlxyXG4gICAgICAgICAgPEZhdm9yaXRlcyBmYXZvcml0ZUNvbWljcz17ZmF2b3JpdGVzfSBzZXRGYXZvcml0ZUNvbWljcz17c2V0RmF2b3JpdGVzfSAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbWljQ29udGFpbmVyfSBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGZsZXhXcmFwOiAnd3JhcCcsIGdhcDogJzIwcHgnLCAgICAgbWFyZ2luOiAnMTVweCAyMHB4JyB9fT5cclxuICAgICAgICB7cmVuZGVyZWRDb21pY3MubWFwKChjb21pYzogYW55KSA9PiAoXHJcbiAgICAgICAgICA8Q29taWNDYXJkXHJcbiAgICAgICAgICAgIHRpdGxlPXtjb21pYy50aXRsZX1cclxuICAgICAgICAgICAga2V5PXtjb21pYy5pZH1cclxuICAgICAgICAgICAgaWQ9e2NvbWljLmlkfVxyXG4gICAgICAgICAgICBpc3N1ZU51bWJlcj17Y29taWMuaXNzdWVOdW1iZXJ9XHJcbiAgICAgICAgICAgIGNyZWF0b3JzPXtjb21pYy5jcmVhdG9ycy5pdGVtcy5tYXAoKGNyZWF0b3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBjcmVhdG9yLm5hbWU7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB0aHVtYm5haWw9e2Ake2NvbWljLnRodW1ibmFpbC5wYXRofS8ke0lNR19GQU5UQVNUSUN9LiR7Y29taWMudGh1bWJuYWlsLmV4dGVuc2lvbn1gfVxyXG4gICAgICAgICAgICBoYW5kbGVBZGRUb0Zhdm9yaXRlcz17aGFuZGxlQWRkVG9GYXZvcml0ZXN9XHJcbiAgICAgICAgICAgIGZhdm9yaXRlQ29taWNzPXtmYXZvcml0ZXN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UGFnaW5hdGlvbiBjb21pY3M9e2NvbWljc30gY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfSBvblBhZ2VDaGFuZ2U9e3NldFBhZ2V9IC8+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUZldGNoQ29taWNzIiwic3R5bGVzIiwiQ29taWNDYXJkIiwiRmlsdGVyQmFyIiwiUGFnaW5hdGlvbiIsIkZhdm9yaXRlcyIsIk5hdkJhciIsIkhlcm9JbWFnZSIsIkZvb3RlciIsIklNR19GQU5UQVNUSUMiLCJIb21lIiwiY2hhcmFjdGVyRmlsdGVyIiwic2V0Q2hhcmFjdGVyRmlsdGVyIiwidW5kZWZpbmVkIiwiY3JlYXRvckZpbHRlciIsInNldENyZWF0b3JGaWx0ZXIiLCJmYXZvcml0ZXMiLCJzZXRGYXZvcml0ZXMiLCJjb21pY3MiLCJpc0xvYWRpbmciLCJpc1N1Y2Nlc3MiLCJjdXJyZW50UGFnZSIsInNldFBhZ2UiLCJtYXhEaXNwbGF5IiwiaGFuZGxlQ2hhcmFjdGVyRmlsdGVyQ2hhbmdlIiwiY2hhcmFjdGVySWQiLCJoYW5kbGVDcmVhdG9yRmlsdGVyQ2hhbmdlIiwiY3JlYXRvcklkIiwiaGFuZGxlQWRkVG9GYXZvcml0ZXMiLCJuZXdDb21pYyIsImxlbmd0aCIsInByZXZGYXZvcml0ZXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJyZW5kZXJlZENvbWljcyIsInNsaWNlIiwicCIsImhlYWRlciIsImNsYXNzTmFtZSIsImZhdm9yaXRlc0NvdW50IiwiZGl2IiwidGV4dGJveCIsImgyIiwic3VidGl0bGUiLCJoMSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmaWx0ZXIiLCJmYXZvcml0ZUNvbWljcyIsInNldEZhdm9yaXRlQ29taWNzIiwiY29taWNDb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwiZ2FwIiwibWFyZ2luIiwibWFwIiwiY29taWMiLCJpZCIsImlzc3VlTnVtYmVyIiwiY3JlYXRvcnMiLCJpdGVtcyIsImNyZWF0b3IiLCJuYW1lIiwidGh1bWJuYWlsIiwicGF0aCIsImV4dGVuc2lvbiIsIm9uUGFnZUNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});