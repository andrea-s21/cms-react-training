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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ComicCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ComicCard/ComicCard.module.css */ \"./components/ComicCard/ComicCard.module.css\");\n/* harmony import */ var _ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/Button */ \"./components/Button/Button.tsx\");\n/* harmony import */ var _Details_Details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Details/Details */ \"./components/Details/Details.tsx\");\n\n\n\n\n// module.exports = (phase, { defaultConfig }) => {\n//   /**\n//    * @type {import('next').NextConfig}\n//    */\n//   const nextConfig = {\n//     images: {\n//       remotePatterns: [\n//         {\n//           protocol: 'https',\n//           hostname: 'annihil.us\" '\n//         },\n//       ],\n//     },\n//   }\n//   return nextConfig\n// }\nfunction ComicCard(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().comicCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: props.thumbnail,\n                alt: \"thumbnail\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Details_Details__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: props.title,\n                id: props.id,\n                issueNumber: props.issueNumber,\n                creators: props.creators\n            }, props.id, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_c = ComicCard;\nvar _c;\n$RefreshReg$(_c, \"ComicCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbWljQ2FyZC9Db21pY0NhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNzRDtBQUNoQjtBQUNHO0FBR3pDLG1EQUFtRDtBQUNuRCxRQUFRO0FBQ1IseUNBQXlDO0FBQ3pDLFFBQVE7QUFDUix5QkFBeUI7QUFDekIsZ0JBQWdCO0FBQ2hCLDBCQUEwQjtBQUMxQixZQUFZO0FBQ1osK0JBQStCO0FBQy9CLHFDQUFxQztBQUNyQyxhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVCxNQUFNO0FBQ04sc0JBQXNCO0FBQ3RCLElBQUk7QUFHVyxTQUFTRyxVQUFVQyxLQUFzRixFQUFFO0lBRXhILHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXTixrRkFBZ0I7OzBCQVM5Qiw4REFBQ1E7Z0JBQUlDLEtBQUtMLE1BQU1NLFNBQVM7Z0JBQUVDLEtBQUk7Ozs7OzswQkFDL0IsOERBQUNWLHNEQUFNQTs7Ozs7MEJBQ1AsOERBQUNDLHdEQUFPQTtnQkFDTlUsT0FBT1IsTUFBTVEsS0FBSztnQkFFbEJDLElBQUlULE1BQU1TLEVBQUU7Z0JBQ1pDLGFBQWFWLE1BQU1VLFdBQVc7Z0JBQzlCQyxVQUFVWCxNQUFNVyxRQUFRO2VBSG5CWCxNQUFNUyxFQUFFOzs7Ozs7Ozs7OztBQU9yQixDQUFDO0tBdkJ1QlYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21pY0NhcmQvQ29taWNDYXJkLnRzeD9jMzc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9Db21pY0NhcmQvQ29taWNDYXJkLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4uL0RldGFpbHMvRGV0YWlscyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbi8vIG1vZHVsZS5leHBvcnRzID0gKHBoYXNlLCB7IGRlZmF1bHRDb25maWcgfSkgPT4ge1xyXG4vLyAgIC8qKlxyXG4vLyAgICAqIEB0eXBlIHtpbXBvcnQoJ25leHQnKS5OZXh0Q29uZmlnfVxyXG4vLyAgICAqL1xyXG4vLyAgIGNvbnN0IG5leHRDb25maWcgPSB7XHJcbi8vICAgICBpbWFnZXM6IHtcclxuLy8gICAgICAgcmVtb3RlUGF0dGVybnM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBwcm90b2NvbDogJ2h0dHBzJyxcclxuLy8gICAgICAgICAgIGhvc3RuYW1lOiAnYW5uaWhpbC51c1wiICdcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICBdLFxyXG4vLyAgICAgfSxcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIG5leHRDb25maWdcclxuLy8gfVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbWljQ2FyZChwcm9wczp7aWQ6IG51bWJlciwgdGh1bWJuYWlsOiBhbnksIHRpdGxlOiBzdHJpbmcsIGlzc3VlTnVtYmVyOiBudW1iZXIsIGNyZWF0b3JzOiBhbnkgfSkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21pY0NhcmR9PiBcclxuICAgICAgey8qIDxJbWFnZVxyXG4gICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgc3JjPXtwcm9wcy50aHVtYm5haWx9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29taWNJbWFnZX1cclxuICAgICAgICB3aWR0aD17MzAwfVxyXG4gICAgICAgIGhlaWdodD17NjAwfVxyXG4gICAgICAgIGFsdD1cInRodW1ibmFpbFwiXHJcbiAgICAgIC8+ICAgKi99XHJcbiAgICAgIDxpbWcgc3JjPXtwcm9wcy50aHVtYm5haWx9IGFsdD1cInRodW1ibmFpbFwiIC8+ICAgICBcclxuICAgICAgPEJ1dHRvbiAvPlxyXG4gICAgICA8RGV0YWlscyAgICAgICAgICAgICBcclxuICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9XHJcbiAgICAgICAga2V5PXtwcm9wcy5pZH1cclxuICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgaXNzdWVOdW1iZXI9e3Byb3BzLmlzc3VlTnVtYmVyfVxyXG4gICAgICAgIGNyZWF0b3JzPXtwcm9wcy5jcmVhdG9yc30gXHJcbiAgICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiQnV0dG9uIiwiRGV0YWlscyIsIkNvbWljQ2FyZCIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29taWNDYXJkIiwiaW1nIiwic3JjIiwidGh1bWJuYWlsIiwiYWx0IiwidGl0bGUiLCJpZCIsImlzc3VlTnVtYmVyIiwiY3JlYXRvcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ComicCard/ComicCard.tsx\n"));

/***/ })

});