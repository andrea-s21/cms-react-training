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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"siteTitle\": function() { return /* binding */ siteTitle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst name = \"Andrea\";\nconst siteTitle = \"Next.js Sample Website\";\nfunction Home(param) {\n    let { children , home  } = param;\n    _s();\n    const [comics, setComics] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // const characters = [\n    //   {name : \"Crusher Hogan (Ultimate)\", id: 1014991},\n    //   {name : \"Apocalypse\", id: 1009156},\n    //   {name : \"Blink\", id: 1009197},\n    //   {name : \"Blob\", id: 1009199},\n    //   {name : \"Storm\", id: 1009629},\n    //   {name : \"Magento\", id: 1009417},\n    // ]\n    let cards;\n    window.onload = async (args)=>{\n        if (args === \"\") return;\n        try {\n            return await fetchComics();\n        } catch (err) {\n            return err;\n        }\n    };\n    console.log(data, \"onload\");\n    const selectChange = async (event, args)=>{\n        const value = event.target.value;\n        setSelectedOption(value);\n        event.preventDefault();\n        if (args === \"\") return;\n        try {\n            return await fetchComics();\n        } catch (err) {\n            return err;\n        }\n    };\n    cards = comics.map((comic)=>console.log(comic));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: comics.map((comic)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ComicCard, {\n                title: comic.title,\n                id: comic.id,\n                issueNumber: comic.issueNumber,\n                creators: comic.creators.items.map((creator)=>{\n                    return creator.name;\n                }),\n                thumbnail: \"\".concat(comic.thumbnail.path, \"/\").concat(IMG_FANTASTIC, \".\").concat(comic.thumbnail.extension)\n            }, comic.id, false, {\n                fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\andrea.sisneros\\\\React Projects\\\\comic-closet\\\\pages\\\\index.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"YDyqV8EO9i2ZdpOTgJBVdg0hBT4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBSzRDO0FBYTVDLE1BQU1DLE9BQU87QUFDTixNQUFNQyxZQUFZLHlCQUF5QjtBQUVuQyxTQUFTQyxLQUFLLEtBQWtCLEVBQUU7UUFBcEIsRUFBRUMsU0FBUSxFQUFFQyxLQUFJLEVBQUUsR0FBbEI7O0lBQ3pCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUE7SUFDbEMsTUFBTSxDQUFDVSxnQkFBZ0JDLGtCQUFrQixHQUFHWCwrQ0FBUUE7SUFFcEQsdUJBQXVCO0lBQ3ZCLHNEQUFzRDtJQUN0RCx3Q0FBd0M7SUFDeEMsbUNBQW1DO0lBQ25DLGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMscUNBQXFDO0lBQ3JDLElBQUk7SUFFSixJQUFJWTtJQUNKQyxPQUFPQyxNQUFNLEdBQUcsT0FBUUMsT0FBYztRQUNwQyxJQUFJQSxTQUFTLElBQUk7UUFDakIsSUFBSTtZQUNGLE9BQU8sTUFBTUM7UUFDZixFQUFFLE9BQU9DLEtBQUs7WUFDWixPQUFPQTtRQUNUO0lBQ0Y7SUFDRUMsUUFBUUMsR0FBRyxDQUFDQyxNQUFNO0lBR3BCLE1BQU1DLGVBQWUsT0FBT0MsT0FBWVAsT0FBYztRQUNwRCxNQUFNUSxRQUFRRCxNQUFNRSxNQUFNLENBQUNELEtBQUs7UUFDaENaLGtCQUFrQlk7UUFDbEJELE1BQU1HLGNBQWM7UUFDcEIsSUFBSVYsU0FBUyxJQUFJO1FBRWpCLElBQUk7WUFDRixPQUFPLE1BQU1DO1FBQ2YsRUFBRSxPQUFPQyxLQUFLO1lBQ1osT0FBT0E7UUFDVDtJQUNGO0lBQ0FMLFFBQVFOLE9BQU9vQixHQUFHLENBQUUsQ0FBQ0MsUUFDbkJULFFBQVFDLEdBQUcsQ0FBQ1E7SUFHaEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2R2QixPQUFPb0IsR0FBRyxDQUFDLENBQUNDLHNCQUNYLDhEQUFDRztnQkFDQ0MsT0FBT0osTUFBTUksS0FBSztnQkFFbEJDLElBQUlMLE1BQU1LLEVBQUU7Z0JBQ1pDLGFBQWFOLE1BQU1NLFdBQVc7Z0JBQzlCQyxVQUFVUCxNQUFNTyxRQUFRLENBQUNDLEtBQUssQ0FBQ1QsR0FBRyxDQUFDLENBQUNVLFVBQWlCO29CQUNuRCxPQUFPQSxRQUFRbkMsSUFBSTtnQkFDckI7Z0JBQ0FvQyxXQUFXLEdBQTJCQyxPQUF4QlgsTUFBTVUsU0FBUyxDQUFDRSxJQUFJLEVBQUMsS0FBb0JaLE9BQWpCVyxlQUFjLEtBQTZCLE9BQTFCWCxNQUFNVSxTQUFTLENBQUNHLFNBQVM7ZUFOM0ViLE1BQU1LLEVBQUU7Ozs7Ozs7Ozs7QUFXckIsQ0FBQztHQTFEdUI3QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBjb21pY3MgPSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGlzc3VzZU51bWJlcjogbnVtYmVyO1xyXG4gICAgY3JlYXRvcnM6IG9iamVjdDtcclxuICAgIGNoYXJhY3RlcnM6IG9iamVjdDtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHRodW1ibmFpbDogYW55O1xyXG4gICAgaXRlbXM6IGFueTtcclxuICB9O1xyXG5cclxuY29uc3QgbmFtZSA9ICdBbmRyZWEnO1xyXG5leHBvcnQgY29uc3Qgc2l0ZVRpdGxlID0gJ05leHQuanMgU2FtcGxlIFdlYnNpdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGNoaWxkcmVuLCBob21lIH0pIHtcclxuICAgIGNvbnN0IFtjb21pY3MsIHNldENvbWljc10gPSB1c2VTdGF0ZTxjb21pY3NbXT4oW10pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZXRTZWxlY3RlZE9wdGlvbl0gPSB1c2VTdGF0ZTxTdHJpbmc+KCk7XHJcbiAgICBcclxuICAgIC8vIGNvbnN0IGNoYXJhY3RlcnMgPSBbXHJcbiAgICAvLyAgIHtuYW1lIDogXCJDcnVzaGVyIEhvZ2FuIChVbHRpbWF0ZSlcIiwgaWQ6IDEwMTQ5OTF9LFxyXG4gICAgLy8gICB7bmFtZSA6IFwiQXBvY2FseXBzZVwiLCBpZDogMTAwOTE1Nn0sXHJcbiAgICAvLyAgIHtuYW1lIDogXCJCbGlua1wiLCBpZDogMTAwOTE5N30sXHJcbiAgICAvLyAgIHtuYW1lIDogXCJCbG9iXCIsIGlkOiAxMDA5MTk5fSxcclxuICAgIC8vICAge25hbWUgOiBcIlN0b3JtXCIsIGlkOiAxMDA5NjI5fSxcclxuICAgIC8vICAge25hbWUgOiBcIk1hZ2VudG9cIiwgaWQ6IDEwMDk0MTd9LFxyXG4gICAgLy8gXVxyXG5cclxuICAgIGxldCBjYXJkczogYW55O1xyXG4gICAgd2luZG93Lm9ubG9hZCA9IGFzeW5jICggYXJnczogYW55KSA9PiB7XHJcbiAgICAgIGlmIChhcmdzID09PSBcIlwiKSByZXR1cm47XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoQ29taWNzKCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsIFwib25sb2FkXCIpO1xyXG4gIFxyXG5cclxuICAgIGNvbnN0IHNlbGVjdENoYW5nZSA9IGFzeW5jIChldmVudDogYW55LCBhcmdzOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgIHNldFNlbGVjdGVkT3B0aW9uKHZhbHVlKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGFyZ3MgPT09IFwiXCIpIHJldHVybjtcclxuICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgZmV0Y2hDb21pY3MoKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNhcmRzID0gY29taWNzLm1hcCAoKGNvbWljOiBhbnkpID0+IChcclxuICAgICAgY29uc29sZS5sb2coY29taWMpXHJcblxyXG4gICAgKSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgIHtjb21pY3MubWFwKChjb21pYzogYW55KSA9PiAoXHJcbiAgICAgIDxDb21pY0NhcmRcclxuICAgICAgICB0aXRsZT17Y29taWMudGl0bGV9XHJcbiAgICAgICAga2V5PXtjb21pYy5pZH1cclxuICAgICAgICBpZD17Y29taWMuaWR9XHJcbiAgICAgICAgaXNzdWVOdW1iZXI9e2NvbWljLmlzc3VlTnVtYmVyfVxyXG4gICAgICAgIGNyZWF0b3JzPXtjb21pYy5jcmVhdG9ycy5pdGVtcy5tYXAoKGNyZWF0b3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGNyZWF0b3IubmFtZTtcclxuICAgICAgICB9KX1cclxuICAgICAgICB0aHVtYm5haWw9e2Ake2NvbWljLnRodW1ibmFpbC5wYXRofS8ke0lNR19GQU5UQVNUSUN9LiR7Y29taWMudGh1bWJuYWlsLmV4dGVuc2lvbn1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwibmFtZSIsInNpdGVUaXRsZSIsIkhvbWUiLCJjaGlsZHJlbiIsImhvbWUiLCJjb21pY3MiLCJzZXRDb21pY3MiLCJlcnJvciIsInNldEVycm9yIiwic2VsZWN0ZWRPcHRpb24iLCJzZXRTZWxlY3RlZE9wdGlvbiIsImNhcmRzIiwid2luZG93Iiwib25sb2FkIiwiYXJncyIsImZldGNoQ29taWNzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzZWxlY3RDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJjb21pYyIsImRpdiIsImNsYXNzTmFtZSIsIkNvbWljQ2FyZCIsInRpdGxlIiwiaWQiLCJpc3N1ZU51bWJlciIsImNyZWF0b3JzIiwiaXRlbXMiLCJjcmVhdG9yIiwidGh1bWJuYWlsIiwiSU1HX0ZBTlRBU1RJQyIsInBhdGgiLCJleHRlbnNpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});