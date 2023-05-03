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
/***/ (function(module, exports, __webpack_require__) {

eval(__webpack_require__.ts("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: ()=>ComicCard\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\nconst _comicCardModuleCss = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! ../ComicCard/ComicCard.module.css */ \"./components/ComicCard/ComicCard.module.css\"));\nconst _button = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! ../Button/Button */ \"./components/Button/Button.tsx\"));\nconst _details = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! ../Details/Details */ \"./components/Details/Details.tsx\"));\nconst _image = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! next/image */ \"./node_modules/next/image.js\"));\nmodule.exports = (phase, param)=>{\n    let { defaultConfig  } = param;\n    /**\r\n   * @type {import('next').NextConfig}\r\n   */ const nextConfig = {\n        reactStrictMode: true,\n        thumbnail: {\n            remotePatterns: [\n                {\n                    protocol: \"https\",\n                    hostname: \"i.annihil.us\",\n                    port: \"\",\n                    pathname: \"u/prod/marvel/i/mg/**\"\n                }\n            ]\n        }\n    };\n    return nextConfig;\n};\nfunction ComicCard(props) {\n    const IMG_FANTASTIC = \"portrait_fantastic\";\n    const myLoader = (param)=>{\n        let { src  } = param;\n        return \"\".concat(props.thumbnail.path, \"/\").concat(IMG_FANTASTIC, \".\").concat(props.thumbnail.extension);\n    };\n    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(\"div\", {\n        className: _comicCardModuleCss.default.comicCard,\n        children: [\n            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_image.default, {\n                priority: true,\n                loader: myLoader,\n                src: props.thumbnail,\n                className: _comicCardModuleCss.default.comicImage,\n                width: 300,\n                height: 600,\n                alt: \"thumbnail\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_button.default, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_details.default, {\n                title: props.title,\n                id: props.id,\n                issueNumber: props.issueNumber,\n                creators: props.creators\n            }, props.id, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\components\\\\ComicCard\\\\ComicCard.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_c = ComicCard;\nvar _c;\n$RefreshReg$(_c, \"ComicCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbWljQ2FyZC9Db21pY0NhcmQudHN4LmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7OzJDQTJCQTs7YUFBd0JBOzs7O3FGQTFCTDt5RUFDQTswRUFDQzt3RUFDRjtBQUVsQkMsT0FBT0MsT0FBTyxHQUFHLENBQUNDLGVBQTZCO1FBQXRCLEVBQUVDLGNBQWEsRUFBRTtJQUN4QztRQUlFRSxpQkFBaUIsSUFBSTtRQUNyQkMsV0FBVztZQUNUQyxnQkFBZ0I7Z0JBQ2Q7b0JBQ0VDOztvQkFFQUUsTUFBTTtvQkFDTkMsVUFBVTtnQkFDWjthQUNEO1FBQ0g7SUFDRjtJQUNBO0FBQ0Y7QUFHZSxTQUFTWixVQUFVYTs7SUFFaEMsTUFBTUUsV0FBVztZQUFDLEVBQUVDLElBQUcsRUFBRTtRQUN2QixPQUFPLEdBQTJCRixPQUF4QkQsTUFBTU47SUFDbEI7SUFHQSxxQkFDRSwyQkFBQ1k7OzswQkFDQywyQkFBQ0k7Z0JBQ0NDO2dCQUNBQyxRQUFRVjtnQkFDUkMsS0FBS0gsTUFBTU47Z0JBQ1hhLFdBQVdDO2dCQUNYTSxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxLQUFJOzs7Ozs7MEJBR047Ozs7OzBCQUNBO2dCQUNFRztnQkFFQUMsSUFBSXBCLE1BQU1vQixFQUFFO2dCQUNaQyxhQUFhckIsTUFBTXFCO2dCQUNuQkMsVUFBVXRCO2VBSExBLE1BQU1vQixFQUFFOzs7Ozs7Ozs7OztBQU9yQjtLQTdCd0JqQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbWljQ2FyZC9Db21pY0NhcmQudHN4P2MzNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0NvbWljQ2FyZC9Db21pY0NhcmQubW9kdWxlLmNzcydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IERldGFpbHMgZnJvbSAnLi4vRGV0YWlscy9EZXRhaWxzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAocGhhc2UsIHsgZGVmYXVsdENvbmZpZyB9KSA9PiB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge2ltcG9ydCgnbmV4dCcpLk5leHRDb25maWd9XHJcbiAgICovXHJcbiAgY29uc3QgbmV4dENvbmZpZyA9IHtcclxuICAgIHJlYWN0U3RyaWN0TW9kZTogdHJ1ZSxcclxuICAgIHRodW1ibmFpbDoge1xyXG4gICAgICByZW1vdGVQYXR0ZXJuczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3RvY29sOiAnaHR0cHMnLFxyXG4gICAgICAgICAgaG9zdG5hbWU6ICdpLmFubmloaWwudXMnLFxyXG4gICAgICAgICAgcG9ydDogJycsXHJcbiAgICAgICAgICBwYXRobmFtZTogJ3UvcHJvZC9tYXJ2ZWwvaS9tZy8qKicsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfVxyXG4gIHJldHVybiBuZXh0Q29uZmlnXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21pY0NhcmQocHJvcHM6e2lkOiBudW1iZXIsIHRodW1ibmFpbDogYW55LCB0aXRsZTogc3RyaW5nLCBpc3N1ZU51bWJlcjogbnVtYmVyLCBjcmVhdG9yczogYW55IH0pIHtcclxuICBjb25zdCBJTUdfRkFOVEFTVElDID0gXCJwb3J0cmFpdF9mYW50YXN0aWNcIjtcclxuICBjb25zdCBteUxvYWRlciA9ICh7IHNyYyB9KSA9PiB7XHJcbiAgICByZXR1cm4gYCR7cHJvcHMudGh1bWJuYWlsLnBhdGh9LyR7SU1HX0ZBTlRBU1RJQ30uJHtwcm9wcy50aHVtYm5haWwuZXh0ZW5zaW9ufWBcclxuICB9XHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbWljQ2FyZH0+IFxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBwcmlvcml0eVxyXG4gICAgICAgIGxvYWRlcj17bXlMb2FkZXJ9XHJcbiAgICAgICAgc3JjPXtwcm9wcy50aHVtYm5haWx9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29taWNJbWFnZX1cclxuICAgICAgICB3aWR0aD17MzAwfVxyXG4gICAgICAgIGhlaWdodD17NjAwfVxyXG4gICAgICAgIGFsdD1cInRodW1ibmFpbFwiXHJcbiAgICAgIC8+ICBcclxuICAgICAgey8qIDxpbWcgc3JjPXtwcm9wcy50aHVtYm5haWx9IGFsdD1cInRodW1ibmFpbFwiIC8+ICAgICAgKi99XHJcbiAgICAgIDxCdXR0b24gLz5cclxuICAgICAgPERldGFpbHMgICAgICAgICAgICAgXHJcbiAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfVxyXG4gICAgICAgIGtleT17cHJvcHMuaWR9XHJcbiAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgIGlzc3VlTnVtYmVyPXtwcm9wcy5pc3N1ZU51bWJlcn1cclxuICAgICAgICBjcmVhdG9ycz17cHJvcHMuY3JlYXRvcnN9IFxyXG4gICAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIkNvbWljQ2FyZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJwaGFzZSIsImRlZmF1bHRDb25maWciLCJuZXh0Q29uZmlnIiwicmVhY3RTdHJpY3RNb2RlIiwidGh1bWJuYWlsIiwicmVtb3RlUGF0dGVybnMiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsInBhdGhuYW1lIiwicHJvcHMiLCJJTUdfRkFOVEFTVElDIiwibXlMb2FkZXIiLCJzcmMiLCJwYXRoIiwiZXh0ZW5zaW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGVzIiwiY29taWNDYXJkIiwiSW1hZ2UiLCJwcmlvcml0eSIsImxvYWRlciIsImNvbWljSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIkJ1dHRvbiIsIkRldGFpbHMiLCJ0aXRsZSIsImlkIiwiaXNzdWVOdW1iZXIiLCJjcmVhdG9ycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ComicCard/ComicCard.tsx\n"));

/***/ })

});