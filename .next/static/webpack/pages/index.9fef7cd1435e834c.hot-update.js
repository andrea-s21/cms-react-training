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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ComicCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ComicCard/ComicCard.module.css */ \"./components/ComicCard/ComicCard.module.css\");\n/* harmony import */ var _ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/Button */ \"./components/Button/Button.tsx\");\n/* harmony import */ var _Details_Details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Details/Details */ \"./components/Details/Details.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n// module.exports = (phase, { defaultConfig }) => {\n//   /**\n//    * @type {import('next').NextConfig}\n//    */\n//   const nextConfig = {\n//     reactStrictMode: true,\n//     images: {\n//       remotePatterns: [\n//         {\n//           protocol: 'https',\n//           hostname: 'annihil.us\" '\n//         },\n//       ],\n//     },\n//   }\n//   return nextConfig\n// }\nfunction ComicCard(props) {\n    const IMG_FANTASTIC = \"portrait_fantastic\";\n    const myLoader = (param)=>{\n        let { src  } = param;\n        return \"\".concat(props.thumbnail.path, \"/\").concat(IMG_FANTASTIC, \".\").concat(props.thumbnail.extension);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().comicCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                priority: true,\n                loader: myLoader,\n                src: props.thumbnail,\n                className: (_ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().comicImage),\n                width: 300,\n                height: 600,\n                alt: \"thumbnail\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Details_Details__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: props.title,\n                id: props.id,\n                issueNumber: props.issueNumber,\n                creators: props.creators\n            }, props.id, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_c = ComicCard;\nvar _c;\n$RefreshReg$(_c, \"ComicCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbWljQ2FyZC9Db21pY0NhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NEO0FBQ2hCO0FBQ0c7QUFDVjtBQUUvQixtREFBbUQ7QUFDbkQsUUFBUTtBQUNSLHlDQUF5QztBQUN6QyxRQUFRO0FBQ1IseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsMEJBQTBCO0FBQzFCLFlBQVk7QUFDWiwrQkFBK0I7QUFDL0IscUNBQXFDO0FBQ3JDLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNULE1BQU07QUFDTixzQkFBc0I7QUFDdEIsSUFBSTtBQUdXLFNBQVNJLFVBQVVDLEtBQXNGLEVBQUU7SUFDeEgsTUFBTUMsZ0JBQWdCO0lBQ3RCLE1BQU1DLFdBQVcsU0FBYTtZQUFaLEVBQUVDLElBQUcsRUFBRTtRQUN2QixPQUFPLEdBQTJCRixPQUF4QkQsTUFBTUksU0FBUyxDQUFDQyxJQUFJLEVBQUMsS0FBb0JMLE9BQWpCQyxlQUFjLEtBQTZCLE9BQTFCRCxNQUFNSSxTQUFTLENBQUNFLFNBQVM7SUFDOUU7SUFHQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV2Isa0ZBQWdCOzswQkFDOUIsOERBQUNHLG1EQUFLQTtnQkFDSlksUUFBUTtnQkFDUkMsUUFBUVQ7Z0JBQ1JDLEtBQUtILE1BQU1JLFNBQVM7Z0JBQ3BCSSxXQUFXYixtRkFBaUI7Z0JBQzVCa0IsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsS0FBSTs7Ozs7OzBCQUdOLDhEQUFDbkIsc0RBQU1BOzs7OzswQkFDUCw4REFBQ0Msd0RBQU9BO2dCQUNObUIsT0FBT2hCLE1BQU1nQixLQUFLO2dCQUVsQkMsSUFBSWpCLE1BQU1pQixFQUFFO2dCQUNaQyxhQUFhbEIsTUFBTWtCLFdBQVc7Z0JBQzlCQyxVQUFVbkIsTUFBTW1CLFFBQVE7ZUFIbkJuQixNQUFNaUIsRUFBRTs7Ozs7Ozs7Ozs7QUFPckIsQ0FBQztLQTdCdUJsQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbWljQ2FyZC9Db21pY0NhcmQudHN4P2MzNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0NvbWljQ2FyZC9Db21pY0NhcmQubW9kdWxlLmNzcydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IERldGFpbHMgZnJvbSAnLi4vRGV0YWlscy9EZXRhaWxzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSAocGhhc2UsIHsgZGVmYXVsdENvbmZpZyB9KSA9PiB7XHJcbi8vICAgLyoqXHJcbi8vICAgICogQHR5cGUge2ltcG9ydCgnbmV4dCcpLk5leHRDb25maWd9XHJcbi8vICAgICovXHJcbi8vICAgY29uc3QgbmV4dENvbmZpZyA9IHtcclxuLy8gICAgIHJlYWN0U3RyaWN0TW9kZTogdHJ1ZSxcclxuLy8gICAgIGltYWdlczoge1xyXG4vLyAgICAgICByZW1vdGVQYXR0ZXJuczogW1xyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIHByb3RvY29sOiAnaHR0cHMnLFxyXG4vLyAgICAgICAgICAgaG9zdG5hbWU6ICdhbm5paGlsLnVzXCIgJ1xyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIF0sXHJcbi8vICAgICB9LFxyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gbmV4dENvbmZpZ1xyXG4vLyB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29taWNDYXJkKHByb3BzOntpZDogbnVtYmVyLCB0aHVtYm5haWw6IGFueSwgdGl0bGU6IHN0cmluZywgaXNzdWVOdW1iZXI6IG51bWJlciwgY3JlYXRvcnM6IGFueSB9KSB7XHJcbiAgY29uc3QgSU1HX0ZBTlRBU1RJQyA9IFwicG9ydHJhaXRfZmFudGFzdGljXCI7XHJcbiAgY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMgfSkgPT4ge1xyXG4gICAgcmV0dXJuIGAke3Byb3BzLnRodW1ibmFpbC5wYXRofS8ke0lNR19GQU5UQVNUSUN9LiR7cHJvcHMudGh1bWJuYWlsLmV4dGVuc2lvbn1gXHJcbiAgfVxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21pY0NhcmR9PiBcclxuICAgICAgPEltYWdlXHJcbiAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxyXG4gICAgICAgIHNyYz17cHJvcHMudGh1bWJuYWlsfVxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbWljSW1hZ2V9XHJcbiAgICAgICAgd2lkdGg9ezMwMH1cclxuICAgICAgICBoZWlnaHQ9ezYwMH1cclxuICAgICAgICBhbHQ9XCJ0aHVtYm5haWxcIlxyXG4gICAgICAvPiAgXHJcbiAgICAgIHsvKiA8aW1nIHNyYz17cHJvcHMudGh1bWJuYWlsfSBhbHQ9XCJ0aHVtYm5haWxcIiAvPiAgICAgICovfVxyXG4gICAgICA8QnV0dG9uIC8+XHJcbiAgICAgIDxEZXRhaWxzICAgICAgICAgICAgIFxyXG4gICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZX1cclxuICAgICAgICBrZXk9e3Byb3BzLmlkfVxyXG4gICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICBpc3N1ZU51bWJlcj17cHJvcHMuaXNzdWVOdW1iZXJ9XHJcbiAgICAgICAgY3JlYXRvcnM9e3Byb3BzLmNyZWF0b3JzfSBcclxuICAgICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJCdXR0b24iLCJEZXRhaWxzIiwiSW1hZ2UiLCJDb21pY0NhcmQiLCJwcm9wcyIsIklNR19GQU5UQVNUSUMiLCJteUxvYWRlciIsInNyYyIsInRodW1ibmFpbCIsInBhdGgiLCJleHRlbnNpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJjb21pY0NhcmQiLCJwcmlvcml0eSIsImxvYWRlciIsImNvbWljSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInRpdGxlIiwiaWQiLCJpc3N1ZU51bWJlciIsImNyZWF0b3JzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ComicCard/ComicCard.tsx\n"));

/***/ })

});