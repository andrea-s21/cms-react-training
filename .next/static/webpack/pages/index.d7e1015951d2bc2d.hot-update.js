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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Button; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button_Button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/Button.module.css */ \"./components/Button/Button.module.css\");\n/* harmony import */ var _Button_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Button(props) {\n    _s();\n    const isComicFavorite = props.favorites.some((c)=>c.id === props.id);\n    const [isFavorite, setFavorite] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isComicFavorite);\n    const handleFavorite = ()=>{\n        if (isComicFavorite) {\n            props.handleRemoveFromFavorites(props.id);\n        } else {\n            const comic = {\n                id: props.id,\n                thumbnail: props.thumbnail,\n                title: props.title,\n                issueNumber: props.issueNumber\n            };\n            props.handleAddToFavorites(comic);\n        }\n        setFavorite(!isComicFavorite);\n    };\n    const handleClick = ()=>{\n        handleFavorite();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        id: (_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n        className: isFavorite ? (_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonBolt) : (_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonIcon),\n        onClick: handleClick,\n        disabled: isFavorite || props.favorites.length >= 10,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n            icon: isFavorite ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimesCircle : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faBoltLightning\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Button\\\\Button.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\Button\\\\Button.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Button, \"ShRYRZPv1AClnTwOf5aly6dABGk=\");\n_c = Button;\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNTO0FBQ2dCO0FBQ0c7QUFDRjtBQW1CbkQsU0FBU00sT0FBT0MsS0FBa0IsRUFBRTs7SUFDakQsTUFBTUMsa0JBQWtCRCxNQUFNRSxTQUFTLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxFQUFFLEtBQUtMLE1BQU1LLEVBQUU7SUFDckUsTUFBTSxDQUFDQyxZQUFZQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDTztJQUUzQyxNQUFNTyxpQkFBaUIsSUFBTTtRQUMzQixJQUFJUCxpQkFBaUI7WUFDbkJELE1BQU1TLHlCQUF5QixDQUFDVCxNQUFNSyxFQUFFO1FBQzFDLE9BQU87WUFDTCxNQUFNSyxRQUFlO2dCQUNuQkwsSUFBSUwsTUFBTUssRUFBRTtnQkFDWk0sV0FBV1gsTUFBTVcsU0FBUztnQkFDMUJDLE9BQU9aLE1BQU1ZLEtBQUs7Z0JBQ2xCQyxhQUFhYixNQUFNYSxXQUFXO1lBQ2hDO1lBRUFiLE1BQU1jLG9CQUFvQixDQUFDSjtRQUM3QixDQUFDO1FBRURILFlBQVksQ0FBQ047SUFDZjtJQUVBLE1BQU1jLGNBQWMsSUFBTTtRQUN4QlA7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUTtRQUFPWCxJQUFJVix5RUFBYTtRQUFFc0IsV0FBV1gsYUFBYVgsNkVBQWlCLEdBQUdBLDZFQUFpQjtRQUFFeUIsU0FBU0w7UUFBYU0sVUFBVWYsY0FBY04sTUFBTUUsU0FBUyxDQUFDb0IsTUFBTSxJQUFJO2tCQUNoSyw0RUFBQzFCLDJFQUFlQTtZQUNkMkIsTUFBTWpCLGFBQWFSLDRFQUFhQSxHQUFHRCw4RUFBZTs7Ozs7Ozs7Ozs7QUFJMUQsQ0FBQztHQWhDdUJFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi50c3g/NDE2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQnV0dG9uL0J1dHRvbi5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFCb2x0TGlnaHRuaW5nIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFUaW1lc0NpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5pbnRlcmZhY2UgQ29taWMge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGh1bWJuYWlsOiBhbnk7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBpc3N1ZU51bWJlcjogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBpc3N1ZU51bWJlcjogbnVtYmVyO1xyXG4gIHRodW1ibmFpbDogYW55O1xyXG4gIGZhdm9yaXRlczogQ29taWNbXTtcclxuICBoYW5kbGVBZGRUb0Zhdm9yaXRlczogKG5ld0NvbWljOiBDb21pYykgPT4gdm9pZDtcclxuICBoYW5kbGVSZW1vdmVGcm9tRmF2b3JpdGVzOiAoY29taWNJZDogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24ocHJvcHM6IEJ1dHRvblByb3BzKSB7XHJcbiAgY29uc3QgaXNDb21pY0Zhdm9yaXRlID0gcHJvcHMuZmF2b3JpdGVzLnNvbWUoKGMpID0+IGMuaWQgPT09IHByb3BzLmlkKTtcclxuICBjb25zdCBbaXNGYXZvcml0ZSwgc2V0RmF2b3JpdGVdID0gdXNlU3RhdGUoaXNDb21pY0Zhdm9yaXRlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmF2b3JpdGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNDb21pY0Zhdm9yaXRlKSB7XHJcbiAgICAgIHByb3BzLmhhbmRsZVJlbW92ZUZyb21GYXZvcml0ZXMocHJvcHMuaWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgY29taWM6IENvbWljID0ge1xyXG4gICAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgICB0aHVtYm5haWw6IHByb3BzLnRodW1ibmFpbCxcclxuICAgICAgICB0aXRsZTogcHJvcHMudGl0bGUsXHJcbiAgICAgICAgaXNzdWVOdW1iZXI6IHByb3BzLmlzc3VlTnVtYmVyLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgcHJvcHMuaGFuZGxlQWRkVG9GYXZvcml0ZXMoY29taWMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZhdm9yaXRlKCFpc0NvbWljRmF2b3JpdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaGFuZGxlRmF2b3JpdGUoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBpZD17c3R5bGVzLmJ1dHRvbn0gY2xhc3NOYW1lPXtpc0Zhdm9yaXRlID8gc3R5bGVzLmJ1dHRvbkJvbHQgOiBzdHlsZXMuYnV0dG9uSWNvbn0gb25DbGljaz17aGFuZGxlQ2xpY2t9IGRpc2FibGVkPXtpc0Zhdm9yaXRlIHx8IHByb3BzLmZhdm9yaXRlcy5sZW5ndGggPj0gMTB9PlxyXG4gICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgaWNvbj17aXNGYXZvcml0ZSA/IGZhVGltZXNDaXJjbGUgOiBmYUJvbHRMaWdodG5pbmd9XHJcbiAgICAgIC8+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJGb250QXdlc29tZUljb24iLCJmYUJvbHRMaWdodG5pbmciLCJmYVRpbWVzQ2lyY2xlIiwiQnV0dG9uIiwicHJvcHMiLCJpc0NvbWljRmF2b3JpdGUiLCJmYXZvcml0ZXMiLCJzb21lIiwiYyIsImlkIiwiaXNGYXZvcml0ZSIsInNldEZhdm9yaXRlIiwiaGFuZGxlRmF2b3JpdGUiLCJoYW5kbGVSZW1vdmVGcm9tRmF2b3JpdGVzIiwiY29taWMiLCJ0aHVtYm5haWwiLCJ0aXRsZSIsImlzc3VlTnVtYmVyIiwiaGFuZGxlQWRkVG9GYXZvcml0ZXMiLCJoYW5kbGVDbGljayIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImJ1dHRvbkJvbHQiLCJidXR0b25JY29uIiwib25DbGljayIsImRpc2FibGVkIiwibGVuZ3RoIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Button/Button.tsx\n"));

/***/ })

});