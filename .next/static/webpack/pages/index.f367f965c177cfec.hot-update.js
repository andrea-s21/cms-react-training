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

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Button; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button_Button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/Button.module.css */ \"./components/Button/Button.module.css\");\n/* harmony import */ var _Button_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Button(props) {\n    _s();\n    const [isFavorite, setFavorite] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleFavorite = ()=>{\n        const storedFavorites = localStorage.getItem(\"favorites\");\n        let favorites = [];\n        if (storedFavorites) {\n            favorites = JSON.parse(storedFavorites);\n        }\n        const isComicFavorite = favorites.some((c)=>c.id === props.id);\n        if (isComicFavorite) {\n            favorites = favorites.filter((c)=>c.id !== props.id);\n        } else {\n            const comic = {\n                id: props.id,\n                thumbnail: props.thumbnail,\n                title: props.title,\n                issueNumber: props.issueNumber\n            };\n            if (favorites.length >= 10) {\n                // Limit reached, do not add the comic\n                return;\n            }\n            favorites = [\n                ...favorites,\n                comic\n            ];\n        }\n        console.log(\"udatedFavorites\", favorites);\n        setFavorite(!isComicFavorite);\n        localStorage.setItem(\"favorites\", JSON.stringify(favorites));\n    };\n    const handleClick = ()=>{\n        props.handleAddToFavorites(props);\n        setFavorite(!isFavorite);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        id: (_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n        className: isFavorite ? (_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonBolt) : (_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonIcon),\n        onClick: handleClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faBoltLightning\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Button\\\\Button.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Button\\\\Button.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(Button, \"tx2RwCPaQ4te0ljQk1Rhg9NLkp4=\");\n_c = Button;\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFpRDtBQUNnQjtBQUNHO0FBQzVCO0FBa0J6QixTQUFTSyxPQUFPQyxLQUFrQixFQUFFOztJQUNqRCxNQUFNLENBQUNDLFlBQVlDLFlBQVksR0FBR0osK0NBQVFBLENBQUMsS0FBSztJQUdoRCxNQUFNSyxpQkFBaUIsSUFBTTtRQUMzQixNQUFNQyxrQkFBa0JDLGFBQWFDLE9BQU8sQ0FBQztRQUM3QyxJQUFJQyxZQUFxQixFQUFFO1FBRTNCLElBQUlILGlCQUFpQjtZQUNuQkcsWUFBWUMsS0FBS0MsS0FBSyxDQUFDTDtRQUN6QixDQUFDO1FBRUQsTUFBTU0sa0JBQWtCSCxVQUFVSSxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsRUFBRSxLQUFLYixNQUFNYSxFQUFFO1FBRS9ELElBQUlILGlCQUFpQjtZQUNuQkgsWUFBWUEsVUFBVU8sTUFBTSxDQUFDLENBQUNGLElBQU1BLEVBQUVDLEVBQUUsS0FBS2IsTUFBTWEsRUFBRTtRQUN2RCxPQUFPO1lBQ0wsTUFBTUUsUUFBZTtnQkFDbkJGLElBQUliLE1BQU1hLEVBQUU7Z0JBQ1pHLFdBQVdoQixNQUFNZ0IsU0FBUztnQkFDMUJDLE9BQU9qQixNQUFNaUIsS0FBSztnQkFDbEJDLGFBQWFsQixNQUFNa0IsV0FBVztZQUNoQztZQUVBLElBQUlYLFVBQVVZLE1BQU0sSUFBSSxJQUFJO2dCQUMxQixzQ0FBc0M7Z0JBQ3RDO1lBQ0YsQ0FBQztZQUVEWixZQUFZO21CQUFJQTtnQkFBV1E7YUFBTTtRQUNuQyxDQUFDO1FBQ0RLLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJkO1FBQy9CTCxZQUFZLENBQUNRO1FBQ2JMLGFBQWFpQixPQUFPLENBQUMsYUFBYWQsS0FBS2UsU0FBUyxDQUFDaEI7SUFDbkQ7SUFFQSxNQUFNaUIsY0FBYyxJQUFNO1FBQ3hCeEIsTUFBTXlCLG9CQUFvQixDQUFDekI7UUFDM0JFLFlBQVksQ0FBQ0Q7SUFDZjtJQUVBLHFCQUNFLDhEQUFDeUI7UUFBT2IsSUFBSW5CLHlFQUFhO1FBQUVpQyxXQUFXMUIsYUFBYVAsNkVBQWlCLEdBQUdBLDZFQUFpQjtRQUFFb0MsU0FBU047a0JBQ2pHLDRFQUFDN0IsMkVBQWVBO1lBQ2RvQyxNQUFNbkMsOEVBQWVBOzs7Ozs7Ozs7OztBQUk3QixDQUFDO0dBaER1Qkc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeD80MTY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQnV0dG9uL0J1dHRvbi5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFCb2x0TGlnaHRuaW5nIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIENvbWljIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRodW1ibmFpbDogYW55O1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgaXNzdWVOdW1iZXI6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEJ1dHRvblByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgaXNzdWVOdW1iZXI6IG51bWJlcjtcclxuICB0aHVtYm5haWw6IGFueTtcclxuICBoYW5kbGVBZGRUb0Zhdm9yaXRlczogKG5ld0NvbWljOiBDb21pYykgPT4gdm9pZDtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbihwcm9wczogQnV0dG9uUHJvcHMpIHtcclxuICBjb25zdCBbaXNGYXZvcml0ZSwgc2V0RmF2b3JpdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlRmF2b3JpdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRGYXZvcml0ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKTtcclxuICAgIGxldCBmYXZvcml0ZXM6IENvbWljW10gPSBbXTtcclxuXHJcbiAgICBpZiAoc3RvcmVkRmF2b3JpdGVzKSB7XHJcbiAgICAgIGZhdm9yaXRlcyA9IEpTT04ucGFyc2Uoc3RvcmVkRmF2b3JpdGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpc0NvbWljRmF2b3JpdGUgPSBmYXZvcml0ZXMuc29tZSgoYykgPT4gYy5pZCA9PT0gcHJvcHMuaWQpO1xyXG5cclxuICAgIGlmIChpc0NvbWljRmF2b3JpdGUpIHtcclxuICAgICAgZmF2b3JpdGVzID0gZmF2b3JpdGVzLmZpbHRlcigoYykgPT4gYy5pZCAhPT0gcHJvcHMuaWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgY29taWM6IENvbWljID0ge1xyXG4gICAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgICB0aHVtYm5haWw6IHByb3BzLnRodW1ibmFpbCxcclxuICAgICAgICB0aXRsZTogcHJvcHMudGl0bGUsXHJcbiAgICAgICAgaXNzdWVOdW1iZXI6IHByb3BzLmlzc3VlTnVtYmVyLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKGZhdm9yaXRlcy5sZW5ndGggPj0gMTApIHtcclxuICAgICAgICAvLyBMaW1pdCByZWFjaGVkLCBkbyBub3QgYWRkIHRoZSBjb21pY1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZmF2b3JpdGVzID0gWy4uLmZhdm9yaXRlcywgY29taWNdO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ3VkYXRlZEZhdm9yaXRlcycsIGZhdm9yaXRlcylcclxuICAgIHNldEZhdm9yaXRlKCFpc0NvbWljRmF2b3JpdGUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZvcml0ZXNcIiwgSlNPTi5zdHJpbmdpZnkoZmF2b3JpdGVzKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBwcm9wcy5oYW5kbGVBZGRUb0Zhdm9yaXRlcyhwcm9wcyk7XHJcbiAgICBzZXRGYXZvcml0ZSghaXNGYXZvcml0ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gaWQ9e3N0eWxlcy5idXR0b259IGNsYXNzTmFtZT17aXNGYXZvcml0ZSA/IHN0eWxlcy5idXR0b25Cb2x0IDogc3R5bGVzLmJ1dHRvbkljb259IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSA+XHJcbiAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICBpY29uPXtmYUJvbHRMaWdodG5pbmd9XHJcbiAgICAgIC8+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQm9sdExpZ2h0bmluZyIsIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJwcm9wcyIsImlzRmF2b3JpdGUiLCJzZXRGYXZvcml0ZSIsImhhbmRsZUZhdm9yaXRlIiwic3RvcmVkRmF2b3JpdGVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZhdm9yaXRlcyIsIkpTT04iLCJwYXJzZSIsImlzQ29taWNGYXZvcml0ZSIsInNvbWUiLCJjIiwiaWQiLCJmaWx0ZXIiLCJjb21pYyIsInRodW1ibmFpbCIsInRpdGxlIiwiaXNzdWVOdW1iZXIiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlQWRkVG9GYXZvcml0ZXMiLCJidXR0b24iLCJjbGFzc05hbWUiLCJidXR0b25Cb2x0IiwiYnV0dG9uSWNvbiIsIm9uQ2xpY2siLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Button/Button.tsx\n"));

/***/ })

});