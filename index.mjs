// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-abs-mask@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-exponent-mask@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-kernel-cos@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-kernel-sin@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-rempio2@v0.2.1-esm/index.mjs";var m=[0,0];function d(d){var a;if(a=e(d),(a&=s)<=1072243195)return a<1045430272?d:i(d,0);if(a>=t)return NaN;switch(3&n(d,m)){case 0:return i(m[0],m[1]);case 1:return r(m[0],m[1]);case 2:return-i(m[0],m[1]);default:return-r(m[0],m[1])}}export{d as default};
//# sourceMappingURL=index.mjs.map
