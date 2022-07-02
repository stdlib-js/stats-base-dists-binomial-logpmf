// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-binomcoefln@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import{factory as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logpmf@esm/index.mjs";function l(s,o,a){var l;return n(s)||n(o)||n(a)||a<0||a>1||!t(o)||o===d?NaN:t(s)?s>o?m:0===a?0===s?0:m:1===a?s===o?0:m:(l=e(o,s),l+=s*r(a)+(o-s)*i(-a)):m}function j(s,l){return n(s)||n(l)||!t(s)||s===d||l<0||l>1?o(NaN):0===l||0===s?a(0):1===l?a(s):function(d){var o;if(n(d))return NaN;if(t(d))return d>s?m:(o=e(s,d),o+=d*r(l)+(s-d)*i(-l));return m}}s(l,"factory",j);export{l as default,j as factory};
//# sourceMappingURL=index.mjs.map