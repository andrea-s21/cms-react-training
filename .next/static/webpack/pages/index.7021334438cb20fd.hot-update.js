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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ComicCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ComicCard/ComicCard.module.css */ \"./components/ComicCard/ComicCard.module.css\");\n/* harmony import */ var _ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/Button */ \"./components/Button/Button.tsx\");\n/* harmony import */ var _Details_Details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Details/Details */ \"./components/Details/Details.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n// module.exports = (phase, { defaultConfig }) => {\n//   /**\n//    * @type {import('next').NextConfig}\n//    */\n//   const nextConfig = {\n//     reactStrictMode: true,\n//     images: {\n//       remotePatterns: [\n//         {\n//           protocol: 'https',\n//           hostname: 'annihil.us\" '\n//         },\n//       ],\n//     },\n//   }\n//   return nextConfig\n// }\nfunction ComicCard(props) {\n    const IMG_FANTASTIC = \"portrait_fantastic\";\n    const myLoader = (param)=>{\n        let { src  } = param;\n        return \"\".concat(props.thumbnail.path, \"/\").concat(IMG_FANTASTIC, \".\").concat(props.thumbnail.extension);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().comicCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                priority: true,\n                // loader={myLoader}\n                src: props.thumbnail,\n                className: (_ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().comicImage),\n                width: 300,\n                height: 600,\n                alt: \"thumbnail\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Details_Details__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: props.title,\n                id: props.id,\n                issueNumber: props.issueNumber,\n                creators: props.creators\n            }, props.id, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_c = ComicCard;\nvar _c;\n$RefreshReg$(_c, \"ComicCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbWljQ2FyZC9Db21pY0NhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NEO0FBQ2hCO0FBQ0c7QUFDVjtBQUUvQixtREFBbUQ7QUFDbkQsUUFBUTtBQUNSLHlDQUF5QztBQUN6QyxRQUFRO0FBQ1IseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsMEJBQTBCO0FBQzFCLFlBQVk7QUFDWiwrQkFBK0I7QUFDL0IscUNBQXFDO0FBQ3JDLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNULE1BQU07QUFDTixzQkFBc0I7QUFDdEIsSUFBSTtBQUdXLFNBQVNJLFVBQVVDLEtBQXNGLEVBQUU7SUFDeEgsTUFBTUMsZ0JBQWdCO0lBQ3RCLE1BQU1DLFdBQVcsU0FBYTtZQUFaLEVBQUVDLElBQUcsRUFBRTtRQUN2QixPQUFPLEdBQTJCRixPQUF4QkQsTUFBTUksU0FBUyxDQUFDQyxJQUFJLEVBQUMsS0FBb0JMLE9BQWpCQyxlQUFjLEtBQTZCLE9BQTFCRCxNQUFNSSxTQUFTLENBQUNFLFNBQVM7SUFDOUU7SUFHQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV2Isa0ZBQWdCOzswQkFDOUIsOERBQUNHLG1EQUFLQTtnQkFDSlksUUFBUTtnQkFDUixvQkFBb0I7Z0JBQ3BCUCxLQUFLSCxNQUFNSSxTQUFTO2dCQUNwQkksV0FBV2IsbUZBQWlCO2dCQUM1QmlCLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLEtBQUk7Ozs7OzswQkFHTiw4REFBQ2xCLHNEQUFNQTs7Ozs7MEJBQ1AsOERBQUNDLHdEQUFPQTtnQkFDTmtCLE9BQU9mLE1BQU1lLEtBQUs7Z0JBRWxCQyxJQUFJaEIsTUFBTWdCLEVBQUU7Z0JBQ1pDLGFBQWFqQixNQUFNaUIsV0FBVztnQkFDOUJDLFVBQVVsQixNQUFNa0IsUUFBUTtlQUhuQmxCLE1BQU1nQixFQUFFOzs7Ozs7Ozs7OztBQU9yQixDQUFDO0tBN0J1QmpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29taWNDYXJkL0NvbWljQ2FyZC50c3g/YzM3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQ29taWNDYXJkL0NvbWljQ2FyZC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgRGV0YWlscyBmcm9tICcuLi9EZXRhaWxzL0RldGFpbHMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IChwaGFzZSwgeyBkZWZhdWx0Q29uZmlnIH0pID0+IHtcclxuLy8gICAvKipcclxuLy8gICAgKiBAdHlwZSB7aW1wb3J0KCduZXh0JykuTmV4dENvbmZpZ31cclxuLy8gICAgKi9cclxuLy8gICBjb25zdCBuZXh0Q29uZmlnID0ge1xyXG4vLyAgICAgcmVhY3RTdHJpY3RNb2RlOiB0cnVlLFxyXG4vLyAgICAgaW1hZ2VzOiB7XHJcbi8vICAgICAgIHJlbW90ZVBhdHRlcm5zOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgcHJvdG9jb2w6ICdodHRwcycsXHJcbi8vICAgICAgICAgICBob3N0bmFtZTogJ2FubmloaWwudXNcIiAnXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgXSxcclxuLy8gICAgIH0sXHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiBuZXh0Q29uZmlnXHJcbi8vIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21pY0NhcmQocHJvcHM6e2lkOiBudW1iZXIsIHRodW1ibmFpbDogYW55LCB0aXRsZTogc3RyaW5nLCBpc3N1ZU51bWJlcjogbnVtYmVyLCBjcmVhdG9yczogYW55IH0pIHtcclxuICBjb25zdCBJTUdfRkFOVEFTVElDID0gXCJwb3J0cmFpdF9mYW50YXN0aWNcIjtcclxuICBjb25zdCBteUxvYWRlciA9ICh7IHNyYyB9KSA9PiB7XHJcbiAgICByZXR1cm4gYCR7cHJvcHMudGh1bWJuYWlsLnBhdGh9LyR7SU1HX0ZBTlRBU1RJQ30uJHtwcm9wcy50aHVtYm5haWwuZXh0ZW5zaW9ufWBcclxuICB9XHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbWljQ2FyZH0+IFxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBwcmlvcml0eVxyXG4gICAgICAgIC8vIGxvYWRlcj17bXlMb2FkZXJ9XHJcbiAgICAgICAgc3JjPXtwcm9wcy50aHVtYm5haWx9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29taWNJbWFnZX1cclxuICAgICAgICB3aWR0aD17MzAwfVxyXG4gICAgICAgIGhlaWdodD17NjAwfVxyXG4gICAgICAgIGFsdD1cInRodW1ibmFpbFwiXHJcbiAgICAgIC8+ICBcclxuICAgICAgey8qIDxpbWcgc3JjPXtwcm9wcy50aHVtYm5haWx9IGFsdD1cInRodW1ibmFpbFwiIC8+ICAgICAgKi99XHJcbiAgICAgIDxCdXR0b24gLz5cclxuICAgICAgPERldGFpbHMgICAgICAgICAgICAgXHJcbiAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfVxyXG4gICAgICAgIGtleT17cHJvcHMuaWR9XHJcbiAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgIGlzc3VlTnVtYmVyPXtwcm9wcy5pc3N1ZU51bWJlcn1cclxuICAgICAgICBjcmVhdG9ycz17cHJvcHMuY3JlYXRvcnN9IFxyXG4gICAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkJ1dHRvbiIsIkRldGFpbHMiLCJJbWFnZSIsIkNvbWljQ2FyZCIsInByb3BzIiwiSU1HX0ZBTlRBU1RJQyIsIm15TG9hZGVyIiwic3JjIiwidGh1bWJuYWlsIiwicGF0aCIsImV4dGVuc2lvbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbWljQ2FyZCIsInByaW9yaXR5IiwiY29taWNJbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwidGl0bGUiLCJpZCIsImlzc3VlTnVtYmVyIiwiY3JlYXRvcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ComicCard/ComicCard.tsx\n"));

/***/ })

});