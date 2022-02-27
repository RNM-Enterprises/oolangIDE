"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([["build_hackathon_js"],{

/***/ "./build/hackathon.js":
/*!****************************!*\
  !*** ./build/hackathon.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__wbg_alert_d7530c8a4220b241": () => (/* reexport safe */ _hackathon_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_alert_d7530c8a4220b241),
/* harmony export */   "__wbindgen_throw": () => (/* reexport safe */ _hackathon_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_throw),
/* harmony export */   "big_computation": () => (/* reexport safe */ _hackathon_bg_js__WEBPACK_IMPORTED_MODULE_1__.big_computation),
/* harmony export */   "fib": () => (/* reexport safe */ _hackathon_bg_js__WEBPACK_IMPORTED_MODULE_1__.fib),
/* harmony export */   "welcome": () => (/* reexport safe */ _hackathon_bg_js__WEBPACK_IMPORTED_MODULE_1__.welcome)
/* harmony export */ });
/* harmony import */ var _hackathon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hackathon_bg.wasm */ "./build/hackathon_bg.wasm");
/* harmony import */ var _hackathon_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hackathon_bg.js */ "./build/hackathon_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hackathon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__, _hackathon_bg_js__WEBPACK_IMPORTED_MODULE_1__]);
([_hackathon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__, _hackathon_bg_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./build/hackathon_bg.js":
/*!*******************************!*\
  !*** ./build/hackathon_bg.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "big_computation": () => (/* binding */ big_computation),
/* harmony export */   "welcome": () => (/* binding */ welcome),
/* harmony export */   "fib": () => (/* binding */ fib),
/* harmony export */   "__wbg_alert_d7530c8a4220b241": () => (/* binding */ __wbg_alert_d7530c8a4220b241),
/* harmony export */   "__wbindgen_throw": () => (/* binding */ __wbindgen_throw)
/* harmony export */ });
/* harmony import */ var _hackathon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hackathon_bg.wasm */ "./build/hackathon_bg.wasm");
/* module decorator */ module = __webpack_require__.hmd(module);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hackathon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);
_hackathon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

var lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;
var cachedTextDecoder = new lTextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
var cachegetUint8Memory0 = null;

function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _hackathon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
    cachegetUint8Memory0 = new Uint8Array(_hackathon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
  }

  return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/


function big_computation() {
  _hackathon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.big_computation();
}
var WASM_VECTOR_LEN = 0;
var lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;
var cachedTextEncoder = new lTextEncoder('utf-8');
var encodeString = typeof cachedTextEncoder.encodeInto === 'function' ? function (arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function (arg, view) {
  var buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};

function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === undefined) {
    var buf = cachedTextEncoder.encode(arg);

    var _ptr = malloc(buf.length);

    getUint8Memory0().subarray(_ptr, _ptr + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return _ptr;
  }

  var len = arg.length;
  var ptr = malloc(len);
  var mem = getUint8Memory0();
  var offset = 0;

  for (; offset < len; offset++) {
    var code = arg.charCodeAt(offset);
    if (code > 0x7F) break;
    mem[ptr + offset] = code;
  }

  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }

    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    var view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    var ret = encodeString(arg, view);
    offset += ret.written;
  }

  WASM_VECTOR_LEN = offset;
  return ptr;
}
/**
* @param {string} name
*/


function welcome(name) {
  var ptr0 = passStringToWasm0(name, _hackathon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _hackathon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  _hackathon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.welcome(ptr0, len0);
}
/**
* @param {number} n
* @returns {number}
*/

function fib(n) {
  var ret = _hackathon_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.fib(n);
  return ret >>> 0;
}
function __wbg_alert_d7530c8a4220b241(arg0, arg1) {
  alert(getStringFromWasm0(arg0, arg1));
}
;
function __wbindgen_throw(arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
}
;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./build/hackathon_bg.wasm":
/*!*********************************!*\
  !*** ./build/hackathon_bg.wasm ***!
  \*********************************/
/***/ ((module, exports, __webpack_require__) => {

var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {
	return __webpack_require__.v(exports, module.id, "1fdfef1d0c2d8be68aab", {
		"./hackathon_bg.js": {
			"__wbg_alert_d7530c8a4220b241": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_d7530c8a4220b241,
			"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw
		}
	});
}
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
	try {
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./hackathon_bg.js */ "./build/hackathon_bg.js");
	var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);
	var [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
	await __webpack_require__.v(exports, module.id, "1fdfef1d0c2d8be68aab", {
		"./hackathon_bg.js": {
			"__wbg_alert_d7530c8a4220b241": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_d7530c8a4220b241,
			"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw
		}
	});
	__webpack_async_result__();
	} catch(e) { __webpack_async_result__(e); }
}, 1);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRfaGFja2F0aG9uX2pzLmJ1bmRsZS5lYTFhYjQ0OWRmZmNjMWQzMjJhNy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQSxJQUFNQyxZQUFZLEdBQUcsT0FBT0MsV0FBUCxLQUF1QixXQUF2QixHQUFxQyxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBWCxFQUFvQixNQUFwQixFQUE0QkYsV0FBakUsR0FBK0VBLFdBQXBHO0FBRUEsSUFBSUcsaUJBQWlCLEdBQUcsSUFBSUosWUFBSixDQUFpQixPQUFqQixFQUEwQjtBQUFFSyxFQUFBQSxTQUFTLEVBQUUsSUFBYjtBQUFtQkMsRUFBQUEsS0FBSyxFQUFFO0FBQTFCLENBQTFCLENBQXhCO0FBRUFGLGlCQUFpQixDQUFDRyxNQUFsQjtBQUVBLElBQUlDLG9CQUFvQixHQUFHLElBQTNCOztBQUNBLFNBQVNDLGVBQVQsR0FBMkI7QUFDdkIsTUFBSUQsb0JBQW9CLEtBQUssSUFBekIsSUFBaUNBLG9CQUFvQixDQUFDRSxNQUFyQixLQUFnQ1gsNkRBQXJFLEVBQXlGO0FBQ3JGUyxJQUFBQSxvQkFBb0IsR0FBRyxJQUFJSSxVQUFKLENBQWViLDZEQUFmLENBQXZCO0FBQ0g7O0FBQ0QsU0FBT1Msb0JBQVA7QUFDSDs7QUFFRCxTQUFTSyxrQkFBVCxDQUE0QkMsR0FBNUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ2xDLFNBQU9YLGlCQUFpQixDQUFDRyxNQUFsQixDQUF5QkUsZUFBZSxHQUFHTyxRQUFsQixDQUEyQkYsR0FBM0IsRUFBZ0NBLEdBQUcsR0FBR0MsR0FBdEMsQ0FBekIsQ0FBUDtBQUNIO0FBQ0Q7QUFDQTs7O0FBQ08sU0FBU0UsZUFBVCxHQUEyQjtBQUM5QmxCLEVBQUFBLCtEQUFBO0FBQ0g7QUFFRCxJQUFJbUIsZUFBZSxHQUFHLENBQXRCO0FBRUEsSUFBTUMsWUFBWSxHQUFHLE9BQU9DLFdBQVAsS0FBdUIsV0FBdkIs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QWpCLEVBQXVCO0FBQzFCLE1BQUlDLElBQUksR0FBR1osaUJBQWlCLENBQUNXLElBQUQsRUFBTzVDLGlFQUFQLEVBQStCQSxrRUFBL0IsQ0FBNUI7QUFDQSxNQUFJZ0QsSUFBSSxHQUFHN0IsZUFBWDtBQUNBbkIsRUFBQUEsdURBQUEsQ0FBYTZDLElBQWIsRUFBbUJHLElBQW5CO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTQyxHQUFULENBQWFDLENBQWIsRUFBZ0I7QUFDbkIsTUFBSVIsR0FBRyxHQUFHMUMsbURBQUEsQ0FBU2tELENBQVQsQ0FBVjtBQUNBLFNBQU9SLEdBQUcsS0FBSyxDQUFmO0FBQ0g7QUFFTSxTQUFTUyw0QkFBVCxDQUFzQ0MsSUFBdEMsRUFBNENDLElBQTVDLEVBQWtEO0FBQ3JEQyxFQUFBQSxLQUFLLENBQUN4QyxrQkFBa0IsQ0FBQ3NDLElBQUQsRUFBT0MsSUFBUCxDQUFuQixDQUFMO0FBQ0g7QUFBQTtBQUVNLFNBQVNFLGdCQUFULENBQTBCSCxJQUExQixFQUFnQ0MsSUFBaEMsRUFBc0M7QUFDekMsUUFBTSxJQUFJRyxLQUFKLENBQVUxQyxrQkFBa0IsQ0FBQ3NDLElBQUQsRUFBT0MsSUFBUCxDQUE1QixDQUFOO0FBQ0g7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2thdGhvbi8uL2J1aWxkL2hhY2thdGhvbi5qcyIsIndlYnBhY2s6Ly9oYWNrYXRob24vLi9idWlsZC9oYWNrYXRob25fYmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tIFwiLi9oYWNrYXRob25fYmcud2FzbVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vaGFja2F0aG9uX2JnLmpzXCI7IiwiaW1wb3J0ICogYXMgd2FzbSBmcm9tICcuL2hhY2thdGhvbl9iZy53YXNtJztcblxuY29uc3QgbFRleHREZWNvZGVyID0gdHlwZW9mIFRleHREZWNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RGVjb2RlciA6IFRleHREZWNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dERlY29kZXIgPSBuZXcgbFRleHREZWNvZGVyKCd1dGYtOCcsIHsgaWdub3JlQk9NOiB0cnVlLCBmYXRhbDogdHJ1ZSB9KTtcblxuY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKCk7XG5cbmxldCBjYWNoZWdldFVpbnQ4TWVtb3J5MCA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZ2V0VWludDhNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZ2V0VWludDhNZW1vcnkwLmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDhNZW1vcnkwID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDhNZW1vcnkwO1xufVxuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tV2FzbTAocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgbGVuKSk7XG59XG4vKipcbiovXG5leHBvcnQgZnVuY3Rpb24gYmlnX2NvbXB1dGF0aW9uKCkge1xuICAgIHdhc20uYmlnX2NvbXB1dGF0aW9uKCk7XG59XG5cbmxldCBXQVNNX1ZFQ1RPUl9MRU4gPSAwO1xuXG5jb25zdCBsVGV4dEVuY29kZXIgPSB0eXBlb2YgVGV4dEVuY29kZXIgPT09ICd1bmRlZmluZWQnID8gKDAsIG1vZHVsZS5yZXF1aXJlKSgndXRpbCcpLlRleHRFbmNvZGVyIDogVGV4dEVuY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RW5jb2RlciA9IG5ldyBsVGV4dEVuY29kZXIoJ3V0Zi04Jyk7XG5cbmNvbnN0IGVuY29kZVN0cmluZyA9ICh0eXBlb2YgY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvKGFyZywgdmlldyk7XG59XG4gICAgOiBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgdmlldy5zZXQoYnVmKTtcbiAgICByZXR1cm4ge1xuICAgICAgICByZWFkOiBhcmcubGVuZ3RoLFxuICAgICAgICB3cml0dGVuOiBidWYubGVuZ3RoXG4gICAgfTtcbn0pO1xuXG5mdW5jdGlvbiBwYXNzU3RyaW5nVG9XYXNtMChhcmcsIG1hbGxvYywgcmVhbGxvYykge1xuXG4gICAgaWYgKHJlYWxsb2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICAgICAgY29uc3QgcHRyID0gbWFsbG9jKGJ1Zi5sZW5ndGgpO1xuICAgICAgICBnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGJ1Zi5sZW5ndGgpLnNldChidWYpO1xuICAgICAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBidWYubGVuZ3RoO1xuICAgICAgICByZXR1cm4gcHRyO1xuICAgIH1cblxuICAgIGxldCBsZW4gPSBhcmcubGVuZ3RoO1xuICAgIGxldCBwdHIgPSBtYWxsb2MobGVuKTtcblxuICAgIGNvbnN0IG1lbSA9IGdldFVpbnQ4TWVtb3J5MCgpO1xuXG4gICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICBmb3IgKDsgb2Zmc2V0IDwgbGVuOyBvZmZzZXQrKykge1xuICAgICAgICBjb25zdCBjb2RlID0gYXJnLmNoYXJDb2RlQXQob2Zmc2V0KTtcbiAgICAgICAgaWYgKGNvZGUgPiAweDdGKSBicmVhaztcbiAgICAgICAgbWVtW3B0ciArIG9mZnNldF0gPSBjb2RlO1xuICAgIH1cblxuICAgIGlmIChvZmZzZXQgIT09IGxlbikge1xuICAgICAgICBpZiAob2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgICAgICBhcmcgPSBhcmcuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBwdHIgPSByZWFsbG9jKHB0ciwgbGVuLCBsZW4gPSBvZmZzZXQgKyBhcmcubGVuZ3RoICogMyk7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIgKyBvZmZzZXQsIHB0ciArIGxlbik7XG4gICAgICAgIGNvbnN0IHJldCA9IGVuY29kZVN0cmluZyhhcmcsIHZpZXcpO1xuXG4gICAgICAgIG9mZnNldCArPSByZXQud3JpdHRlbjtcbiAgICB9XG5cbiAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBvZmZzZXQ7XG4gICAgcmV0dXJuIHB0cjtcbn1cbi8qKlxuKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuKi9cbmV4cG9ydCBmdW5jdGlvbiB3ZWxjb21lKG5hbWUpIHtcbiAgICB2YXIgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20wKG5hbWUsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICB2YXIgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICB3YXNtLndlbGNvbWUocHRyMCwgbGVuMCk7XG59XG5cbi8qKlxuKiBAcGFyYW0ge251bWJlcn0gblxuKiBAcmV0dXJucyB7bnVtYmVyfVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWIobikge1xuICAgIHZhciByZXQgPSB3YXNtLmZpYihuKTtcbiAgICByZXR1cm4gcmV0ID4+PiAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfYWxlcnRfZDc1MzBjOGE0MjIwYjI0MShhcmcwLCBhcmcxKSB7XG4gICAgYWxlcnQoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX3Rocm93KGFyZzAsIGFyZzEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn07XG5cbiJdLCJuYW1lcyI6WyJ3YXNtIiwibFRleHREZWNvZGVyIiwiVGV4dERlY29kZXIiLCJtb2R1bGUiLCJyZXF1aXJlIiwiY2FjaGVkVGV4dERlY29kZXIiLCJpZ25vcmVCT00iLCJmYXRhbCIsImRlY29kZSIsImNhY2hlZ2V0VWludDhNZW1vcnkwIiwiZ2V0VWludDhNZW1vcnkwIiwiYnVmZmVyIiwibWVtb3J5IiwiVWludDhBcnJheSIsImdldFN0cmluZ0Zyb21XYXNtMCIsInB0ciIsImxlbiIsInN1YmFycmF5IiwiYmlnX2NvbXB1dGF0aW9uIiwiV0FTTV9WRUNUT1JfTEVOIiwibFRleHRFbmNvZGVyIiwiVGV4dEVuY29kZXIiLCJjYWNoZWRUZXh0RW5jb2RlciIsImVuY29kZVN0cmluZyIsImVuY29kZUludG8iLCJhcmciLCJ2aWV3IiwiYnVmIiwiZW5jb2RlIiwic2V0IiwicmVhZCIsImxlbmd0aCIsIndyaXR0ZW4iLCJwYXNzU3RyaW5nVG9XYXNtMCIsIm1hbGxvYyIsInJlYWxsb2MiLCJ1bmRlZmluZWQiLCJtZW0iLCJvZmZzZXQiLCJjb2RlIiwiY2hhckNvZGVBdCIsInNsaWNlIiwicmV0Iiwid2VsY29tZSIsIm5hbWUiLCJwdHIwIiwiX193YmluZGdlbl9tYWxsb2MiLCJfX3diaW5kZ2VuX3JlYWxsb2MiLCJsZW4wIiwiZmliIiwibiIsIl9fd2JnX2FsZXJ0X2Q3NTMwYzhhNDIyMGIyNDEiLCJhcmcwIiwiYXJnMSIsImFsZXJ0IiwiX193YmluZGdlbl90aHJvdyIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==