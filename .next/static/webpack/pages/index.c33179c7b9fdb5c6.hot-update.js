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

/***/ "./components/ComicCard/ComicCard.tsx":
/*!********************************************!*\
  !*** ./components/ComicCard/ComicCard.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ComicCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ComicCard/ComicCard.module.css */ \"./components/ComicCard/ComicCard.module.css\");\n/* harmony import */ var _ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/Button */ \"./components/Button/Button.tsx\");\n/* harmony import */ var _Details_Details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Details/Details */ \"./components/Details/Details.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction ComicCard(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().comicCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                priority: true,\n                src: props.thumbnail,\n                className: (_ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().comicImage),\n                width: 300,\n                height: 600,\n                alt: \"thumbnail\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Details_Details__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: props.title,\n                id: props.id,\n                issueNumber: props.issueNumber,\n                creators: props.creators\n            }, props.id, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = ComicCard;\nvar _c;\n$RefreshReg$(_c, \"ComicCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbWljQ2FyZC9Db21pY0NhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NEO0FBQ2hCO0FBQ0c7QUFDVjtBQUVoQixTQUFTSSxVQUFVQyxLQUFzRixFQUFFO0lBRXhILHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXUCxrRkFBZ0I7OzBCQUM5Qiw4REFBQ0csbURBQUtBO2dCQUNOTSxRQUFRO2dCQUNSQyxLQUFLTCxNQUFNTSxTQUFTO2dCQUNwQkosV0FBV1AsbUZBQWlCO2dCQUM1QmEsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsS0FBSTs7Ozs7OzBCQUVKLDhEQUFDZCxzREFBTUE7Ozs7OzBCQUNQLDhEQUFDQyx3REFBT0E7Z0JBQ0ZjLE9BQU9YLE1BQU1XLEtBQUs7Z0JBRWxCQyxJQUFJWixNQUFNWSxFQUFFO2dCQUNaQyxhQUFhYixNQUFNYSxXQUFXO2dCQUM5QkMsVUFBVWQsTUFBTWMsUUFBUTtlQUhuQmQsTUFBTVksRUFBRTs7Ozs7Ozs7Ozs7QUFPekIsQ0FBQztLQXRCdUJiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29taWNDYXJkL0NvbWljQ2FyZC50c3g/YzM3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQ29taWNDYXJkL0NvbWljQ2FyZC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgRGV0YWlscyBmcm9tICcuLi9EZXRhaWxzL0RldGFpbHMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21pY0NhcmQocHJvcHM6e2lkOiBudW1iZXIsIHRodW1ibmFpbDogYW55LCB0aXRsZTogc3RyaW5nLCBpc3N1ZU51bWJlcjogbnVtYmVyLCBjcmVhdG9yczogYW55IH0pIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29taWNDYXJkfT4gXHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICBwcmlvcml0eVxyXG4gICAgICBzcmM9e3Byb3BzLnRodW1ibmFpbH1cclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29taWNJbWFnZX1cclxuICAgICAgd2lkdGg9ezMwMH1cclxuICAgICAgaGVpZ2h0PXs2MDB9XHJcbiAgICAgIGFsdD1cInRodW1ibmFpbFwiXHJcbiAgICAgIC8+ICAgICAgIFxyXG4gICAgICA8QnV0dG9uIC8+XHJcbiAgICAgIDxEZXRhaWxzICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9XHJcbiAgICAgICAgICAgIGtleT17cHJvcHMuaWR9XHJcbiAgICAgICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICAgICAgaXNzdWVOdW1iZXI9e3Byb3BzLmlzc3VlTnVtYmVyfVxyXG4gICAgICAgICAgICBjcmVhdG9ycz17cHJvcHMuY3JlYXRvcnN9IFxyXG4gICAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkJ1dHRvbiIsIkRldGFpbHMiLCJJbWFnZSIsIkNvbWljQ2FyZCIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29taWNDYXJkIiwicHJpb3JpdHkiLCJzcmMiLCJ0aHVtYm5haWwiLCJjb21pY0ltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJ0aXRsZSIsImlkIiwiaXNzdWVOdW1iZXIiLCJjcmVhdG9ycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ComicCard/ComicCard.tsx\n"));

/***/ })

});