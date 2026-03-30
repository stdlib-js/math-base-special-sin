"use strict";var v=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var s=v(function(W,n){
var _=require('@stdlib/constants-float64-high-word-abs-mask/dist'),H=require('@stdlib/constants-float64-high-word-exponent-mask/dist'),c=require('@stdlib/number-float64-base-get-high-word/dist'),t=require('@stdlib/math-base-special-kernel-cos/dist'),a=require('@stdlib/math-base-special-kernel-sin/dist'),f=require('@stdlib/math-base-special-rempio2/dist'),q=1072243195,o=1045430272,e=[0,0];function O(i){var r,u;if(r=c(i),r&=_,r<=q)return r<o?i:a(i,0);if(r>=H)return NaN;switch(u=f(i,e),u&3){case 0:return a(e[0],e[1]);case 1:return t(e[0],e[1]);case 2:return-a(e[0],e[1]);default:return-t(e[0],e[1])}}n.exports=O
});var I=s();module.exports=I;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
