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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ComicCard_ComicCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ComicCard/ComicCard */ \"./components/ComicCard/ComicCard.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst IMG_FANTASTIC = \"portrait_fantastic\";\nlet API_URL = \"https://gateway.marvel.com\";\nfunction Home() {\n    _s();\n    const [comics, setComics] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fetchComics = async ()=>{\n        let baseUrl = \"\".concat(API_URL, \":443/v1/public/comics\");\n        let apiKey = \"a47015b472fa01cf91d12e737ddda35a\";\n        let url = \"\".concat(baseUrl, \"?limit=30&ts=1&apikey=\").concat(apiKey, \"&hash=bd67ce0fc9068238c3aac6ea8ca58732\");\n        try {\n            const response = await fetch(url);\n            const data = await response.json();\n            setComics(data.data.results);\n            console.log(data.data.results);\n        } catch (err) {\n            console.error(err);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchComics();\n    }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n            lineNumber: 49,\n            columnNumber: 14\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                justifyContent: \"center\",\n                flexWrap: \"wrap\",\n                width: \"20%\"\n            },\n            children: comics.map((comic)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ComicCard_ComicCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: comic.title,\n                    id: comic.id,\n                    issueNumber: comic.issueNumber,\n                    creators: comic.creators.items.map((creator)=>{\n                        return creator.name;\n                    }),\n                    thumbnail: \"\".concat(comic.thumbnail.path, \"/\").concat(IMG_FANTASTIC, \".\").concat(comic.thumbnail.extension)\n                }, comic.id, false, {\n                    fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n            lineNumber: 54,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"RYuMHcVnRlEAfdrcvPjNfqgtWQw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ2M7QUFJMUQsTUFBTUcsZ0JBQWdCO0FBY3RCLElBQUlDLFVBQVVDLDRCQUFnQztBQUUvQixTQUFTRyxPQUFPOztJQUMzQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQVcsRUFBRTtJQUNqRCxNQUFNLENBQUNVLFdBQVdDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUMsS0FBSztJQUc5QyxNQUFNWSxjQUFjLFVBQVk7UUFDOUIsSUFBSUMsVUFBVSxHQUFXLE9BQVJWLFNBQVE7UUFFekIsSUFBSVcsU0FBU1Ysa0NBQStCO1FBQzVDLElBQUlZLE1BQU0sR0FBbUNGLE9BQWhDRCxTQUFRLDBCQUErQixPQUFQQyxRQUFPO1FBQ3BELElBQUk7WUFDRixNQUFNRyxXQUFXLE1BQU1DLE1BQU1GO1lBQzdCLE1BQU1HLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ1gsVUFBVVUsS0FBS0EsSUFBSSxDQUFDRSxPQUFPO1lBQzNCQyxRQUFRQyxHQUFHLENBQUNKLEtBQUtBLElBQUksQ0FBQ0UsT0FBTztRQUMvQixFQUFFLE9BQU9HLEtBQUs7WUFDWkYsUUFBUUcsS0FBSyxDQUFDRDtRQUNoQixTQUFVO1lBQ1JiLFdBQVcsS0FBSztRQUNsQjtJQUNGO0lBRUFaLGdEQUFTQSxDQUFDLElBQU07UUFDZGE7SUFDRixHQUFHLEVBQUU7SUFFTCxJQUFJRixXQUFXO1FBQ2IscUJBQU8sOERBQUNnQjtzQkFBRTs7Ozs7O0lBQ1osQ0FBQztJQUVILHFCQUNFO2tCQUNJLDRFQUFDQztZQUFJQyxPQUFPO2dCQUFDQyxTQUFTO2dCQUFRQyxnQkFBZ0I7Z0JBQVVDLFVBQVU7Z0JBQVFDLE9BQU87WUFBTTtzQkFDdEZ4QixPQUFPeUIsR0FBRyxDQUFDLENBQUNDLHNCQUNYLDhEQUFDakMsdUVBQVNBO29CQUNSa0MsT0FBT0QsTUFBTUMsS0FBSztvQkFFbEJDLElBQUlGLE1BQU1FLEVBQUU7b0JBQ1pDLGFBQWFILE1BQU1HLFdBQVc7b0JBQzlCQyxVQUFVSixNQUFNSSxRQUFRLENBQUNDLEtBQUssQ0FBQ04sR0FBRyxDQUFDLENBQUNPLFVBQWlCO3dCQUNuRCxPQUFPQSxRQUFRQyxJQUFJO29CQUNyQjtvQkFDQUMsV0FBVyxHQUEyQnhDLE9BQXhCZ0MsTUFBTVEsU0FBUyxDQUFDQyxJQUFJLEVBQUMsS0FBb0JULE9BQWpCaEMsZUFBYyxLQUE2QixPQUExQmdDLE1BQU1RLFNBQVMsQ0FBQ0UsU0FBUzttQkFOM0VWLE1BQU1FLEVBQUU7Ozs7Ozs7Ozs7O0FBWXpCLENBQUM7R0FoRHVCN0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbWljQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NvbWljQ2FyZC9Db21pY0NhcmQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyB3cmFwIH0gZnJvbSAnbW9kdWxlJztcclxuXHJcbmNvbnN0IElNR19GQU5UQVNUSUMgPSBcInBvcnRyYWl0X2ZhbnRhc3RpY1wiO1xyXG5cclxudHlwZSBDb21pY3MgPSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGlzc3VzZU51bWJlcjogbnVtYmVyO1xyXG4gIGNyZWF0b3JzOiBvYmplY3Q7XHJcbiAgY2hhcmFjdGVyczogb2JqZWN0O1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB0aHVtYm5haWw6IGFueTtcclxuICBpdGVtczogYW55O1xyXG59O1xyXG5cclxuXHJcbmxldCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkw7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgW2NvbWljcywgc2V0Q29taWNzXSA9IHVzZVN0YXRlPENvbWljc1tdPihbXSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIFxyXG5cclxuICAgIGNvbnN0IGZldGNoQ29taWNzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBsZXQgYmFzZVVybCA9IGAke0FQSV9VUkx9OjQ0My92MS9wdWJsaWMvY29taWNzYDtcclxuICAgICAgXHJcbiAgICAgIGxldCBhcGlLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZO1xyXG4gICAgICBsZXQgdXJsID0gYCR7YmFzZVVybH0/bGltaXQ9MzAmdHM9MSZhcGlrZXk9JHthcGlLZXl9Jmhhc2g9YmQ2N2NlMGZjOTA2ODIzOGMzYWFjNmVhOGNhNTg3MzJgO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldENvbWljcyhkYXRhLmRhdGEucmVzdWx0cylcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEucmVzdWx0cyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGZldGNoQ29taWNzKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGlmIChpc0xvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gICAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgZmxleFdyYXA6ICd3cmFwJywgd2lkdGg6ICcyMCUnIH19PlxyXG4gICAgICAgIHtjb21pY3MubWFwKChjb21pYzogYW55KSA9PiAoXHJcbiAgICAgICAgICA8Q29taWNDYXJkXHJcbiAgICAgICAgICAgIHRpdGxlPXtjb21pYy50aXRsZX1cclxuICAgICAgICAgICAga2V5PXtjb21pYy5pZH1cclxuICAgICAgICAgICAgaWQ9e2NvbWljLmlkfVxyXG4gICAgICAgICAgICBpc3N1ZU51bWJlcj17Y29taWMuaXNzdWVOdW1iZXJ9XHJcbiAgICAgICAgICAgIGNyZWF0b3JzPXtjb21pYy5jcmVhdG9ycy5pdGVtcy5tYXAoKGNyZWF0b3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBjcmVhdG9yLm5hbWU7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB0aHVtYm5haWw9e2Ake2NvbWljLnRodW1ibmFpbC5wYXRofS8ke0lNR19GQU5UQVNUSUN9LiR7Y29taWMudGh1bWJuYWlsLmV4dGVuc2lvbn1gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29taWNDYXJkIiwiSU1HX0ZBTlRBU1RJQyIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQkFTRV9VUkwiLCJIb21lIiwiY29taWNzIiwic2V0Q29taWNzIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoQ29taWNzIiwiYmFzZVVybCIsImFwaUtleSIsIk5FWFRfUFVCTElDX0FQSV9LRVkiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJyZXN1bHRzIiwiY29uc29sZSIsImxvZyIsImVyciIsImVycm9yIiwicCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJ3aWR0aCIsIm1hcCIsImNvbWljIiwidGl0bGUiLCJpZCIsImlzc3VlTnVtYmVyIiwiY3JlYXRvcnMiLCJpdGVtcyIsImNyZWF0b3IiLCJuYW1lIiwidGh1bWJuYWlsIiwicGF0aCIsImV4dGVuc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});