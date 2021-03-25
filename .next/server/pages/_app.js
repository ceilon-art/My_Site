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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/theme.tsx":
/*!***************************!*\
  !*** ./context/theme.tsx ***!
  \***************************/
/*! exports provided: ThemeProvider, useTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThemeProvider\", function() { return ThemeProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useTheme\", function() { return useTheme; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/ceilon/Desktop/MySite/context/theme.tsx\";\n\nconst ThemeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nconst ThemeProvider = ({\n  children\n}) => {\n  const {\n    0: chosedTheme,\n    1: setChosedTheme\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  const {\n    0: lockScroll,\n    1: setLockScroll\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: theme,\n    1: setTheme\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(chosedTheme);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    function fetchTheme() {\n      const theme = localStorage.getItem('@andre:theme'); // @ts-ignore\n\n      setChosedTheme(theme);\n    }\n\n    fetchTheme();\n  }, []);\n  const changeTheme = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(() => {\n    if (theme === 'dark') {\n      setTheme('light');\n      localStorage.setItem('@andre:theme', 'light');\n      console.log(theme);\n    } else {\n      setTheme('dark');\n      localStorage.setItem('@andre:theme', 'dark');\n      console.log(theme);\n    }\n  }, [theme]);\n  const lock = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(lockBool => {\n    if (lockBool) {\n      setLockScroll(!lockScroll);\n    } else {\n      setLockScroll(lockBool);\n    }\n  }, [lockScroll]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ThemeContext.Provider, {\n    value: {\n      theme,\n      changeTheme,\n      lockScroll,\n      lock\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, undefined);\n};\nfunction useTheme() {\n  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(ThemeContext);\n  return context;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L3RoZW1lLnRzeD9mMGE1Il0sIm5hbWVzIjpbIlRoZW1lQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjaG9zZWRUaGVtZSIsInNldENob3NlZFRoZW1lIiwidXNlU3RhdGUiLCJsb2NrU2Nyb2xsIiwic2V0TG9ja1Njcm9sbCIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VFZmZlY3QiLCJmZXRjaFRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNoYW5nZVRoZW1lIiwidXNlQ2FsbGJhY2siLCJzZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImxvY2siLCJsb2NrQm9vbCIsInVzZVRoZW1lIiwiY29udGV4dCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBZUEsTUFBTUEsWUFBWSxnQkFBR0MsMkRBQWEsQ0FBbUIsRUFBbkIsQ0FBbEM7QUFFTyxNQUFNQyxhQUF1QixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQ3ZELFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsRUFBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJGLHNEQUFRLENBQUMsS0FBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDRyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkosc0RBQVEsQ0FBQ0YsV0FBRCxDQUFsQztBQUVBTyx5REFBUyxDQUFDLE1BQU07QUFDZCxhQUFTQyxVQUFULEdBQXNCO0FBQ3BCLFlBQU1ILEtBQUssR0FBR0ksWUFBWSxDQUFDQyxPQUFiLENBQXFCLGNBQXJCLENBQWQsQ0FEb0IsQ0FFcEI7O0FBQ0FULG9CQUFjLENBQUNJLEtBQUQsQ0FBZDtBQUNEOztBQUVERyxjQUFVO0FBQ1gsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBLFFBQU1HLFdBQVcsR0FBR0MseURBQVcsQ0FBQyxNQUFNO0FBQ3BDLFFBQUlQLEtBQUssS0FBSyxNQUFkLEVBQXNCO0FBQ3BCQyxjQUFRLENBQUMsT0FBRCxDQUFSO0FBQ0FHLGtCQUFZLENBQUNJLE9BQWIsQ0FBcUIsY0FBckIsRUFBcUMsT0FBckM7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlWLEtBQVo7QUFDRCxLQUpELE1BSU87QUFDTEMsY0FBUSxDQUFDLE1BQUQsQ0FBUjtBQUNBRyxrQkFBWSxDQUFDSSxPQUFiLENBQXFCLGNBQXJCLEVBQXFDLE1BQXJDO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVixLQUFaO0FBQ0Q7QUFDRixHQVY4QixFQVU1QixDQUFDQSxLQUFELENBVjRCLENBQS9CO0FBWUEsUUFBTVcsSUFBSSxHQUFHSix5REFBVyxDQUNyQkssUUFBRCxJQUF1QjtBQUNyQixRQUFJQSxRQUFKLEVBQWM7QUFDWmIsbUJBQWEsQ0FBQyxDQUFDRCxVQUFGLENBQWI7QUFDRCxLQUZELE1BRU87QUFDTEMsbUJBQWEsQ0FBQ2EsUUFBRCxDQUFiO0FBQ0Q7QUFDRixHQVBxQixFQVF0QixDQUFDZCxVQUFELENBUnNCLENBQXhCO0FBV0Esc0JBQ0UscUVBQUMsWUFBRCxDQUFjLFFBQWQ7QUFBdUIsU0FBSyxFQUFFO0FBQUVFLFdBQUY7QUFBU00saUJBQVQ7QUFBc0JSLGdCQUF0QjtBQUFrQ2E7QUFBbEMsS0FBOUI7QUFBQSxjQUNHakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQTNDTTtBQTZDQSxTQUFTbUIsUUFBVCxHQUFzQztBQUMzQyxRQUFNQyxPQUFPLEdBQUdDLHdEQUFVLENBQUN4QixZQUFELENBQTFCO0FBRUEsU0FBT3VCLE9BQVA7QUFDRCIsImZpbGUiOiIuL2NvbnRleHQvdGhlbWUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFxuICBjcmVhdGVDb250ZXh0LCBcbiAgdXNlU3RhdGUsIFxuICB1c2VDYWxsYmFjaywgXG4gIHVzZUVmZmVjdCwgXG4gIHVzZUNvbnRleHQgXG59IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFRoZW1lQ29udGV4dERhdGEge1xuICB0aGVtZTogJ2xpZ2h0JyB8ICdkYXJrJztcbiAgY2hhbmdlVGhlbWUoKTogdm9pZDtcbiAgbG9ja1Njcm9sbDogYm9vbGVhbjtcbiAgbG9jayhsb2NrQm9vbDogYm9vbGVhbik6IHZvaWQ7XG59XG5cbmNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VGhlbWVDb250ZXh0RGF0YT4oe30gYXMgVGhlbWVDb250ZXh0RGF0YSk7XG5cbmV4cG9ydCBjb25zdCBUaGVtZVByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2Nob3NlZFRoZW1lLCBzZXRDaG9zZWRUaGVtZV0gPSB1c2VTdGF0ZTwnbGlnaHQnIHwgJ2RhcmsnPigpO1xuICBjb25zdCBbbG9ja1Njcm9sbCwgc2V0TG9ja1Njcm9sbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoY2hvc2VkVGhlbWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gZmV0Y2hUaGVtZSgpIHtcbiAgICAgIGNvbnN0IHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0BhbmRyZTp0aGVtZScpO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgc2V0Q2hvc2VkVGhlbWUodGhlbWUpO1xuICAgIH0gXG5cbiAgICBmZXRjaFRoZW1lKClcbiAgfSwgW10pXG5cbiAgY29uc3QgY2hhbmdlVGhlbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHRoZW1lID09PSAnZGFyaycpIHtcbiAgICAgIHNldFRoZW1lKCdsaWdodCcpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0BhbmRyZTp0aGVtZScsICdsaWdodCcpO1xuICAgICAgY29uc29sZS5sb2codGhlbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaGVtZSgnZGFyaycpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0BhbmRyZTp0aGVtZScsICdkYXJrJyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGVtZSlcbiAgICB9XG4gIH0sIFt0aGVtZV0pO1xuXG4gIGNvbnN0IGxvY2sgPSB1c2VDYWxsYmFjayhcbiAgICAobG9ja0Jvb2w6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChsb2NrQm9vbCkge1xuICAgICAgICBzZXRMb2NrU2Nyb2xsKCFsb2NrU2Nyb2xsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldExvY2tTY3JvbGwobG9ja0Jvb2wpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2xvY2tTY3JvbGxdLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0aGVtZSwgY2hhbmdlVGhlbWUsIGxvY2tTY3JvbGwsIGxvY2sgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGhlbWUoKTogVGhlbWVDb250ZXh0RGF0YSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/theme.tsx\n");

/***/ }),

/***/ "./node_modules/react-perfect-scrollbar/dist/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/react-perfect-scrollbar/dist/css/styles.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhci9kaXN0L2Nzcy9zdHlsZXMuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-perfect-scrollbar/dist/css/styles.css\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-toastify/dist/ReactToastify.css\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals */ \"./styles/globals.ts\");\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/theme */ \"./context/theme.tsx\");\n\n\nvar _jsxFileName = \"/home/ceilon/Desktop/MySite/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  const {\n    theme,\n    lockScroll\n  } = Object(_context_theme__WEBPACK_IMPORTED_MODULE_3__[\"useTheme\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context_theme__WEBPACK_IMPORTED_MODULE_3__[\"ThemeProvider\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_globals__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        theme: theme,\n        lock: lockScroll\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 7\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJsb2NrU2Nyb2xsIiwidXNlVGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLE1BQU1BLEtBQXlCLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUM5RCxRQUFNO0FBQUVDLFNBQUY7QUFBU0M7QUFBVCxNQUF3QkMsK0RBQVEsRUFBdEM7QUFFQSxzQkFDQTtBQUFBLDJCQUNFLHFFQUFDLDREQUFEO0FBQUEsOEJBQ0UscUVBQUMsdURBQUQ7QUFBYSxhQUFLLEVBQUVGLEtBQXBCO0FBQTJCLFlBQUksRUFBRUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLFNBQUQsb0JBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFEQTtBQU9BLENBVkY7O0FBWWVGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSAnLi4vc3R5bGVzL2dsb2JhbHMnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgdXNlVGhlbWUgfSBmcm9tICcuLi9jb250ZXh0L3RoZW1lJztcblxuY29uc3QgTXlBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgeyB0aGVtZSwgbG9ja1Njcm9sbCB9ID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICA8PlxuICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgPEdsb2JhbFN0eWxlIHRoZW1lPXt0aGVtZX0gbG9jaz17bG9ja1Njcm9sbH0gLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gIDwvPlxuKX1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.ts":
/*!***************************!*\
  !*** ./styles/globals.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ \"./node_modules/react-perfect-scrollbar/dist/css/styles.css\");\n/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n   *{\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n  }\n\n  *:focus {\n    outline: 0;\n  }\n\n  html, body, #root {\n    height:100%;\n  }\n\n  body{\n    -webkit-font-smoothing: antialiased !important;\n    transition: background-color 300ms;\n    overflow: ${props => props.lock === true ? 'hidden' : 'auto'};\n  }\n\n  body, input, button {\n    font-size: 14px;\n    font-family: 'Roboto', Helvetica, sans-serif;\n  }\n\n  button {\n    cursor: pointer;\n    border: 0;\n  }\n\n  svg {\n    cursor: pointer\n  }\n\n  ul {\n    list-style:none;\n  }\n\n  h1 {\n    font-family: 'Anton', Helvetica, Arial;\n  }\n\n  li {\n    list-style-type: none;\n    text-transform: uppercase;\n    font-family: 'Anton', Helvetica, Arial;\n    font-size: 30px;\n    cursor: pointer;\n  }\n\n  a {\n    text-decoration:none;\n  }\n  \n  @keyframes loadAnimation {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity:1\n    }\n  }\n\n  ${props => props.theme === \"dark\" ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"body{background-color:#444444;color:#fafafa;}\"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"body{background-color:#f0f0f0;color:#272727;}\"])}\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvZ2xvYmFscy50cz81OTY1Il0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJwcm9wcyIsImxvY2siLCJ0aGVtZSIsImNzcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFPQSxNQUFNQSxXQUFXLEdBQUdDLG1FQUFvQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFpQkMsS0FBRCxJQUFvQkEsS0FBSyxDQUFDQyxJQUFOLEtBQWUsSUFBZixHQUFzQixRQUF0QixHQUFpQyxNQUFRO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUtELEtBQUQsSUFDQUEsS0FBSyxDQUFDRSxLQUFOLEtBQWdCLE1BQWhCLEdBQXlCQyw2REFBekIsc0RBTUVBLDZEQU5GLG1EQVlEO0FBQ0gsQ0FoRkE7QUFrRmVMLDBFQUFmIiwiZmlsZSI6Ii4vc3R5bGVzL2dsb2JhbHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcbiAgY3JlYXRlR2xvYmFsU3R5bGUsIFxuICBjc3MsXG4gIEZsYXR0ZW5TaW1wbGVJbnRlcnBvbGF0aW9uXG4gfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCAncmVhY3QtcGVyZmVjdC1zY3JvbGxiYXIvZGlzdC9jc3Mvc3R5bGVzLmNzcyc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuXG5pbnRlcmZhY2UgR2xvYmFsU3R5bGVQcm9wcyB7XG4gIGxvY2s6IGJvb2xlYW47XG4gIHRoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnO1xufVxuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlPEdsb2JhbFN0eWxlUHJvcHM+YFxuICAgKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgKjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuXG4gIGh0bWwsIGJvZHksICNyb290IHtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgfVxuXG4gIGJvZHl7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xuICAgIG92ZXJmbG93OiAkeyhwcm9wcyk6IHN0cmluZyA9PiAocHJvcHMubG9jayA9PT0gdHJ1ZSA/ICdoaWRkZW4nIDogJ2F1dG8nKX07XG4gIH1cblxuICBib2R5LCBpbnB1dCwgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDA7XG4gIH1cblxuICBzdmcge1xuICAgIGN1cnNvcjogcG9pbnRlclxuICB9XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogJ0FudG9uJywgSGVsdmV0aWNhLCBBcmlhbDtcbiAgfVxuXG4gIGxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LWZhbWlseTogJ0FudG9uJywgSGVsdmV0aWNhLCBBcmlhbDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgbG9hZEFuaW1hdGlvbiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OjFcbiAgICB9XG4gIH1cblxuICAkeyhwcm9wcyk6IEZsYXR0ZW5TaW1wbGVJbnRlcnBvbGF0aW9uID0+IFxuICAgIHByb3BzLnRoZW1lID09PSBcImRhcmtcIiA/IGNzcyBgXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcbiAgICAgICAgY29sb3I6ICNmYWZhZmE7XG4gICAgICB9XG4gICAgYCBcbiAgICA6IGNzcyBgXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICAgICAgY29sb3I6ICMyNzI3Mjc7XG4gICAgICB9XG4gICAgYFxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


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