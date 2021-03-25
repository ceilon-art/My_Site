module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/cursos.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/cursos.tsx":
/*!**************************!*\
  !*** ./pages/cursos.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_cursosStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/cursosStyles */ \"./styles/cursosStyles.ts\");\n\nvar _jsxFileName = \"/home/ceilon/Desktop/MySite/pages/cursos.tsx\";\n\n\n\nconst Cursos = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_cursosStyles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Cursos gratuitos\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_cursosStyles__WEBPACK_IMPORTED_MODULE_2__[\"CourseList\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_cursosStyles__WEBPACK_IMPORTED_MODULE_2__[\"Course\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_cursosStyles__WEBPACK_IMPORTED_MODULE_2__[\"Thumbnail\"], {\n          id: \"thumbnail\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \" em breve\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \" Curso de CSS\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"Cursos\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_cursosStyles__WEBPACK_IMPORTED_MODULE_2__[\"Gold\"], {\n        children: \" premium\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_cursosStyles__WEBPACK_IMPORTED_MODULE_2__[\"CourseList\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_cursosStyles__WEBPACK_IMPORTED_MODULE_2__[\"Course\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_cursosStyles__WEBPACK_IMPORTED_MODULE_2__[\"Thumbnail\"], {\n          id: \"thumbnail\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \" em breve\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \" Curso de React\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_cursosStyles__WEBPACK_IMPORTED_MODULE_2__[\"Course\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_cursosStyles__WEBPACK_IMPORTED_MODULE_2__[\"Thumbnail\"], {\n          id: \"thumbnail\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \" em breve\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \" Curso de Node\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cursos);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jdXJzb3MudHN4PzI1ZjgiXSwibmFtZXMiOlsiQ3Vyc29zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBR0E7O0FBRUEsTUFBTUEsTUFBZ0IsR0FBRyxNQUFNO0FBQzdCLHNCQUNFLHFFQUFDLDhEQUFEO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQywrREFBRDtBQUFBLDZCQStERSxxRUFBQywyREFBRDtBQUFBLGdDQUNFLHFFQUFDLDhEQUFEO0FBQVcsWUFBRSxFQUFDLFdBQWQ7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEvREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQXlFRTtBQUFBLHdDQUVFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6RUYsZUE2RUUscUVBQUMsK0RBQUQ7QUFBQSw4QkFDRSxxRUFBQywyREFBRDtBQUFBLGdDQUNFLHFFQUFDLDhEQUFEO0FBQVcsWUFBRSxFQUFDLFdBQWQ7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFPRSxxRUFBQywyREFBRDtBQUFBLGdDQUNFLHFFQUFDLDhEQUFEO0FBQVcsWUFBRSxFQUFDLFdBQWQ7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQThGRCxDQS9GRDs7QUFpR2VBLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY3Vyc29zLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBDb250YWluZXIsIENvdXJzZSwgVGh1bWJuYWlsLCBDb3Vyc2VMaXN0LCBHb2xkIH0gZnJvbSAnLi4vc3R5bGVzL2N1cnNvc1N0eWxlcyc7XG5cbmNvbnN0IEN1cnNvczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxwPkN1cnNvcyBncmF0dWl0b3M8L3A+XG4gICAgICA8Q291cnNlTGlzdD5cbiAgICAgICAgey8qIDxDb3Vyc2U+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2N1cnNvcy9qYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBjb3Vyc2VOYW1lOiAnQ3Vyc28gZGUgSmF2YXNjcmlwdCcsXG4gICAgICAgICAgICAgICAgcGxheWxpc3RJZDogJ1BMYlY2VEkwM1pXWVZQNkVCeVlvVXhaSmVaYXFpdEhpOXInLFxuICAgICAgICAgICAgICAgIHNsaWRlc0xpbms6XG4gICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9tZWdhLm56L2ZvbGRlci9jQ1JnbGF3YSN4UzRNRUE0TnJoQmdwbENDTHhxRkRBJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRodW1ibmFpbD5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvcEw5blg2QWMyTGMvbWF4cmVzZGVmYXVsdC5qcGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkphdmFzY3JpcHRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9UaHVtYm5haWw+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxzcGFuPiBDdXJzbyBkZSBKYXZhc2NyaXB0PC9zcGFuPlxuICAgICAgICA8L0NvdXJzZT5cbiAgICAgICAgPENvdXJzZT5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvY3Vyc29zL2xpbnV4JyxcbiAgICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBjb3Vyc2VOYW1lOiAnQ3Vyc28gZGUgVGVybWluYWwgTGludXgnLFxuICAgICAgICAgICAgICAgIHBsYXlsaXN0SWQ6ICdQTGJWNlRJMDNaV1lYWHdiUDJUTlRidmlVYUZoNllxcVZ0JyxcbiAgICAgICAgICAgICAgICBzbGlkZXNMaW5rOlxuICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vbWVnYS5uei8jRiFBYkFRRVlCVCFVWXBud1hvWHdqRmNEaGNmMlpYaTNnJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRodW1ibmFpbD5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvVlJSM1Y0MkVkU2cvbWF4cmVzZGVmYXVsdC5qcGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlRlcm1pbmFsIExpbnV4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVGh1bWJuYWlsPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8c3Bhbj4gQ3Vyc28gZGUgVGVybWluYWwgTGludXg8L3NwYW4+XG4gICAgICAgIDwvQ291cnNlPlxuICAgICAgICA8Q291cnNlPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICBwYXRobmFtZTogJy9jdXJzb3MvdHJlbGxvJyxcbiAgICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBjb3Vyc2VOYW1lOiAnQ3Vyc28gZGUgVHJlbGxvJyxcbiAgICAgICAgICAgICAgICBwbGF5bGlzdElkOiAnUExiVjZUSTAzWldZWDBKQWxlbVJOSzZJWG9lWHNjVzVDOCcsXG4gICAgICAgICAgICAgICAgc2xpZGVzTGluazogJycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUaHVtYm5haWw+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kueXRpbWcuY29tL3ZpL2NrN1dXSGFBZ3BVL21heHJlc2RlZmF1bHQuanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJUcmVsbG9cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9UaHVtYm5haWw+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxzcGFuPiBDdXJzbyBkZSBUcmVsbG88L3NwYW4+XG4gICAgICAgIDwvQ291cnNlPiAqL31cbiAgICAgICAgPENvdXJzZT5cbiAgICAgICAgICA8VGh1bWJuYWlsIGlkPVwidGh1bWJuYWlsXCI+XG4gICAgICAgICAgICA8cD4gZW0gYnJldmU8L3A+XG4gICAgICAgICAgPC9UaHVtYm5haWw+XG4gICAgICAgICAgPHNwYW4+IEN1cnNvIGRlIENTUzwvc3Bhbj5cbiAgICAgICAgPC9Db3Vyc2U+XG4gICAgICA8L0NvdXJzZUxpc3Q+XG5cbiAgICAgIDxwPlxuICAgICAgICBDdXJzb3NcbiAgICAgICAgPEdvbGQ+IHByZW1pdW08L0dvbGQ+XG4gICAgICA8L3A+XG4gICAgICA8Q291cnNlTGlzdD5cbiAgICAgICAgPENvdXJzZT5cbiAgICAgICAgICA8VGh1bWJuYWlsIGlkPVwidGh1bWJuYWlsXCI+XG4gICAgICAgICAgICA8cD4gZW0gYnJldmU8L3A+XG4gICAgICAgICAgPC9UaHVtYm5haWw+XG4gICAgICAgICAgPHNwYW4+IEN1cnNvIGRlIFJlYWN0PC9zcGFuPlxuICAgICAgICA8L0NvdXJzZT5cbiAgICAgICAgPENvdXJzZT5cbiAgICAgICAgICA8VGh1bWJuYWlsIGlkPVwidGh1bWJuYWlsXCI+XG4gICAgICAgICAgICA8cD4gZW0gYnJldmU8L3A+XG4gICAgICAgICAgPC9UaHVtYm5haWw+XG4gICAgICAgICAgPHNwYW4+IEN1cnNvIGRlIE5vZGU8L3NwYW4+XG4gICAgICAgIDwvQ291cnNlPlxuICAgICAgPC9Db3Vyc2VMaXN0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3Vyc29zOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cursos.tsx\n");

/***/ }),

/***/ "./styles/cursosStyles.ts":
/*!********************************!*\
  !*** ./styles/cursosStyles.ts ***!
  \********************************/
/*! exports provided: Container, Thumbnail, CourseList, Course, Gold */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Thumbnail\", function() { return Thumbnail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CourseList\", function() { return CourseList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Course\", function() { return Course; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Gold\", function() { return Gold; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"cursosStyles__Container\",\n  componentId: \"sc-20vm82-0\"\n})([\"width:80vw;margin:0 auto;animation:loadAnimation;animation-duration:500ms;> p{margin-top:40px;margin-bottom:25px;}p{font-family:'Anton',Helvetica,serif;font-size:32px;text-transform:uppercase;}@media (max-width:900px){p{text-align:center;}}@media (max-width:700px){width:90vw;}\"]);\nconst Thumbnail = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"cursosStyles__Thumbnail\",\n  componentId: \"sc-20vm82-1\"\n})([\"height:180px;width:320px;display:flex;align-items:center;justify-content:center;border-radius:5px;cursor:pointer;img{width:320px;height:180px;border-radius:5px;font-family:'Anton',Helvetica,sans-serif;font-size:32px;text-transform:uppercase;}> p{color:#fff;}\"]);\nconst CourseList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"cursosStyles__CourseList\",\n  componentId: \"sc-20vm82-2\"\n})([\"display:grid;gap:30px 0;grid-template-columns:repeat(4,1fr);@media (max-width:1720px){grid-template-columns:repeat(3,1fr);}@media (max-width:1350px){grid-template-columns:repeat(2,1fr);}@media (max-width:900px){grid-template-columns:1fr;justify-items:center;}\"]);\nconst Course = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"cursosStyles__Course\",\n  componentId: \"sc-20vm82-3\"\n})([\"span{font-size:18px;}\"]);\nconst Gold = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({\n  displayName: \"cursosStyles__Gold\",\n  componentId: \"sc-20vm82-4\"\n})([\"display:inline;color:#ebce00;font-family:'Anton',Helvetica,sans-serif;font-size:32px;text-transform:uppercase;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvY3Vyc29zU3R5bGVzLnRzP2I0NzkiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiVGh1bWJuYWlsIiwiQ291cnNlTGlzdCIsIkNvdXJzZSIsIkdvbGQiLCJzcGFuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNlJBQWY7QUE0QkEsTUFBTUMsU0FBUyxHQUFHRix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBRQUFmO0FBdUJBLE1BQU1FLFVBQVUsR0FBR0gsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyUUFBaEI7QUFtQkEsTUFBTUcsTUFBTSxHQUFHSix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZCQUFaO0FBTUEsTUFBTUksSUFBSSxHQUFHTCx3REFBTSxDQUFDTSxJQUFWO0FBQUE7QUFBQTtBQUFBLHNIQUFWIiwiZmlsZSI6Ii4vc3R5bGVzL2N1cnNvc1N0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDgwdnc7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBhbmltYXRpb246IGxvYWRBbmltYXRpb247XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG5cbiAgPiBwIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cblxuICBwIHtcbiAgICBmb250LWZhbWlseTogJ0FudG9uJywgSGVsdmV0aWNhLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIHAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIHdpZHRoOiA5MHZ3O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVGh1bWJuYWlsID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxODBweDtcbiAgd2lkdGg6IDMyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMzIwcHg7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gID4gcCB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb3Vyc2VMaXN0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAzMHB4IDA7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE3MjBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogMTM1MHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ291cnNlID0gc3R5bGVkLmRpdmBcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgR29sZCA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGNvbG9yOiAjZWJjZTAwO1xuICBmb250LWZhbWlseTogJ0FudG9uJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/cursosStyles.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });