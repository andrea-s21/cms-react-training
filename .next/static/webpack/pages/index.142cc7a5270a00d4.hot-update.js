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

/***/ "./components/HeroImage/HeroImage.tsx":
/*!********************************************!*\
  !*** ./components/HeroImage/HeroImage.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HeroImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HeroImage_HeroImage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HeroImage/HeroImage.module.css */ \"./components/HeroImage/HeroImage.module.css\");\n/* harmony import */ var _HeroImage_HeroImage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_HeroImage_HeroImage_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction HeroImage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_HeroImage_HeroImage_module_css__WEBPACK_IMPORTED_MODULE_2___default().heroImageContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                priority: true,\n                src: \"/images/hero-photo.png\",\n                className: (_HeroImage_HeroImage_module_css__WEBPACK_IMPORTED_MODULE_2___default().heroImage),\n                width: 1840,\n                height: 950,\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\HeroImage\\\\HeroImage.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                priority: true,\n                src: \"/images/halftone@2x.png\",\n                className: (_HeroImage_HeroImage_module_css__WEBPACK_IMPORTED_MODULE_2___default().halftoneImage),\n                width: 375,\n                height: 92,\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\HeroImage\\\\HeroImage.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\HeroImage\\\\HeroImage.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = HeroImage;\nvar _c;\n$RefreshReg$(_c, \"HeroImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm9JbWFnZS9IZXJvSW1hZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUN3QjtBQUV4QyxTQUFTRSxZQUFZO0lBQ2xDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXSCwyRkFBeUI7OzBCQUN2Qyw4REFBQ0QsbURBQUtBO2dCQUNOTSxRQUFRO2dCQUNSQyxLQUFJO2dCQUNKSCxXQUFXSCxrRkFBZ0I7Z0JBQzNCUSxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxLQUFJOzs7Ozs7MEJBRUosOERBQUNYLG1EQUFLQTtnQkFDTk0sUUFBUTtnQkFDUkMsS0FBSTtnQkFDSkgsV0FBV0gsc0ZBQW9CO2dCQUMvQlEsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsS0FBSTs7Ozs7Ozs7Ozs7O0FBSVYsQ0FBQztLQXJCdUJUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVyb0ltYWdlL0hlcm9JbWFnZS50c3g/NmRjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vSGVyb0ltYWdlL0hlcm9JbWFnZS5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm9JbWFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvSW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgcHJpb3JpdHlcclxuICAgICAgc3JjPVwiL2ltYWdlcy9oZXJvLXBob3RvLnBuZ1wiXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlcm9JbWFnZX1cclxuICAgICAgd2lkdGg9ezE4NDB9XHJcbiAgICAgIGhlaWdodD17OTUwfVxyXG4gICAgICBhbHQ9XCJcIlxyXG4gICAgLz5cclxuICAgICAgPEltYWdlXHJcbiAgICAgIHByaW9yaXR5XHJcbiAgICAgIHNyYz1cIi9pbWFnZXMvaGFsZnRvbmVAMngucG5nXCJcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGFsZnRvbmVJbWFnZX1cclxuICAgICAgd2lkdGg9ezM3NX1cclxuICAgICAgaGVpZ2h0PXs5Mn1cclxuICAgICAgYWx0PVwiXCJcclxuICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVzIiwiSGVyb0ltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVyb0ltYWdlQ29udGFpbmVyIiwicHJpb3JpdHkiLCJzcmMiLCJoZXJvSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImhhbGZ0b25lSW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HeroImage/HeroImage.tsx\n"));

/***/ })

});