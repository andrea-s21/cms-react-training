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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ComicCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ComicCard/ComicCard.module.css */ \"./components/ComicCard/ComicCard.module.css\");\n/* harmony import */ var _ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/Button */ \"./components/Button/Button.tsx\");\n/* harmony import */ var _Details_Details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Details/Details */ \"./components/Details/Details.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction ComicCard(props) {\n    const myLoader = (param)=>{\n        let { src , width , quality  } = param;\n        return \"\".concat(props.thumbnail).concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().comicCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                priority: true,\n                loader: myLoader,\n                src: props.thumbnail,\n                className: (_ComicCard_ComicCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().comicImage),\n                width: 300,\n                height: 600,\n                alt: \"thumbnail\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Details_Details__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: props.title,\n                id: props.id,\n                issueNumber: props.issueNumber,\n                creators: props.creators\n            }, props.id, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = ComicCard;\nvar _c;\n$RefreshReg$(_c, \"ComicCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbWljQ2FyZC9Db21pY0NhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NEO0FBQ2hCO0FBQ0c7QUFDVjtBQUVoQixTQUFTSSxVQUFVQyxLQUFzRixFQUFFO0lBQ3hILE1BQU1DLFdBQVcsU0FBNkI7WUFBNUIsRUFBRUMsSUFBRyxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBRTtRQUN2QyxPQUFPLEdBQXFCRixPQUFsQkYsTUFBTUssU0FBUyxFQUFZRixPQUFURCxLQUFJLE9BQWdCRSxPQUFYRCxPQUFNLE9BQW1CLE9BQWRDLFdBQVc7SUFDN0Q7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBV1osa0ZBQWdCOzswQkFDOUIsOERBQUNHLG1EQUFLQTtnQkFDSlcsUUFBUTtnQkFDUkMsUUFBUVQ7Z0JBQ1JDLEtBQUtGLE1BQU1LLFNBQVM7Z0JBQ3BCRSxXQUFXWixtRkFBaUI7Z0JBQzVCUSxPQUFPO2dCQUNQUyxRQUFRO2dCQUNSQyxLQUFJOzs7Ozs7MEJBRU4sOERBQUNqQixzREFBTUE7Ozs7OzBCQUNQLDhEQUFDQyx3REFBT0E7Z0JBQ05pQixPQUFPZCxNQUFNYyxLQUFLO2dCQUVsQkMsSUFBSWYsTUFBTWUsRUFBRTtnQkFDWkMsYUFBYWhCLE1BQU1nQixXQUFXO2dCQUM5QkMsVUFBVWpCLE1BQU1pQixRQUFRO2VBSG5CakIsTUFBTWUsRUFBRTs7Ozs7Ozs7Ozs7QUFPckIsQ0FBQztLQTFCdUJoQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbWljQ2FyZC9Db21pY0NhcmQudHN4P2MzNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0NvbWljQ2FyZC9Db21pY0NhcmQubW9kdWxlLmNzcydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IERldGFpbHMgZnJvbSAnLi4vRGV0YWlscy9EZXRhaWxzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29taWNDYXJkKHByb3BzOntpZDogbnVtYmVyLCB0aHVtYm5haWw6IGFueSwgdGl0bGU6IHN0cmluZywgaXNzdWVOdW1iZXI6IG51bWJlciwgY3JlYXRvcnM6IGFueSB9KSB7XHJcbiAgY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcclxuICAgIHJldHVybiBgJHtwcm9wcy50aHVtYm5haWx9JHtzcmN9P3c9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbWljQ2FyZH0+IFxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBwcmlvcml0eVxyXG4gICAgICAgIGxvYWRlcj17bXlMb2FkZXJ9XHJcbiAgICAgICAgc3JjPXtwcm9wcy50aHVtYm5haWx9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29taWNJbWFnZX1cclxuICAgICAgICB3aWR0aD17MzAwfVxyXG4gICAgICAgIGhlaWdodD17NjAwfVxyXG4gICAgICAgIGFsdD1cInRodW1ibmFpbFwiXHJcbiAgICAgIC8+ICBcclxuICAgICAgPEJ1dHRvbiAvPlxyXG4gICAgICA8RGV0YWlscyAgICAgICAgICAgICBcclxuICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9XHJcbiAgICAgICAga2V5PXtwcm9wcy5pZH1cclxuICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgaXNzdWVOdW1iZXI9e3Byb3BzLmlzc3VlTnVtYmVyfVxyXG4gICAgICAgIGNyZWF0b3JzPXtwcm9wcy5jcmVhdG9yc30gXHJcbiAgICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiQnV0dG9uIiwiRGV0YWlscyIsIkltYWdlIiwiQ29taWNDYXJkIiwicHJvcHMiLCJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsInRodW1ibmFpbCIsImRpdiIsImNsYXNzTmFtZSIsImNvbWljQ2FyZCIsInByaW9yaXR5IiwibG9hZGVyIiwiY29taWNJbWFnZSIsImhlaWdodCIsImFsdCIsInRpdGxlIiwiaWQiLCJpc3N1ZU51bWJlciIsImNyZWF0b3JzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ComicCard/ComicCard.tsx\n"));

/***/ })

});