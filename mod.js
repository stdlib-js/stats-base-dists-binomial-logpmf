// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function N(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,v,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function A(r,e,n){var t=e-r.length;return t<0?r:r=n?r+m(t):m(t)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,n,t,a,o,c,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(e=void 0!==t.precision,!(t=k(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=N(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(x(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return I.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var P=Math.floor;function M(r){return P(r)===r&&r>=0}function R(r){return P(r)===r}function Z(r){return r!=r}var X=Number.POSITIVE_INFINITY,Y=Number.NEGATIVE_INFINITY;function q(r){return r===X||r===Y}function z(r){return Math.abs(r)}var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var D=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var rr=B&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return D.call(r);n=r[Q],a=Q,e=null!=(i=r)&&J.call(i,a);try{r[Q]=void 0}catch(e){return D.call(r)}return t=D.call(r),e?r[Q]=n:delete r[Q],t}:function(r){return D.call(r)},er="function"==typeof Uint32Array;var nr="function"==typeof Uint32Array?Uint32Array:null;var tr,ir="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,e,n;if("function"!=typeof nr)return!1;try{e=new nr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(er&&n instanceof Uint32Array||"[object Uint32Array]"===rr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar=tr,or="function"==typeof Float64Array;var ur="function"==typeof Float64Array?Float64Array:null;var fr,cr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,e,n;if("function"!=typeof ur)return!1;try{e=new ur([1,3.14,-3.14,NaN]),n=e,r=(or&&n instanceof Float64Array||"[object Float64Array]"===rr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var sr=fr,lr="function"==typeof Uint8Array;var pr="function"==typeof Uint8Array?Uint8Array:null;var vr,yr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,256,257]),n=e,r=(lr&&n instanceof Uint8Array||"[object Uint8Array]"===rr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr=vr,dr="function"==typeof Uint16Array;var hr="function"==typeof Uint16Array?Uint16Array:null;var wr,br="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,e,n;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(dr&&n instanceof Uint16Array||"[object Uint16Array]"===rr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var Nr,mr={uint16:wr,uint8:gr};(Nr=new mr.uint16(1))[0]=4660;var Ar=52===new mr.uint8(Nr.buffer)[0],_r=!0===Ar?1:0,Er=new sr(1),Ur=new ar(Er.buffer);function kr(r){return Er[0]=r,Ur[_r]}var Ir=!0===Ar?1:0,Sr=new sr(1),xr=new ar(Sr.buffer);function Fr(r,e){return Sr[0]=r,xr[Ir]=e>>>0,Sr[0]}var jr=.6931471803691238,Tr=1.9082149292705877e-10;function Or(r){var e,n,t,i,a,o,u,f,c,s,l,p;return 0===r?Y:Z(r)||r<0?NaN:(a=0,(n=kr(r))<1048576&&(a-=54,n=kr(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(f=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=Fr(r,n|1072693248^f))-1,(1048575&2+n)<3?0===u?0===a?0:a*jr+a*Tr:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*jr-(o-a*Tr-u)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*jr-(e-(s*(e+o)+a*Tr)-u)):0===a?u-s*(u-o):a*jr-(s*(u-o)-a*Tr-u))))}var Vr=Math.ceil;function $r(r){return r<0?Vr(r):P(r)}function Gr(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Hr=-.16666666666666632;function Wr(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(Hr+i*n):r-(i*(.5*e-t*n)-e-t*Hr)}var Cr,Lr,Pr=!0===Ar?0:1,Mr=new sr(1),Rr=new ar(Mr.buffer);!0===Ar?(Cr=1,Lr=0):(Cr=0,Lr=1);var Zr={HIGH:Cr,LOW:Lr},Xr=new sr(1),Yr=new ar(Xr.buffer),qr=Zr.HIGH,zr=Zr.LOW;function Br(r,e){return Yr[qr]=r,Yr[zr]=e,Xr[0]}var Dr,Jr;!0===Ar?(Dr=1,Jr=0):(Dr=0,Jr=1);var Kr={HIGH:Dr,LOW:Jr},Qr=new sr(1),re=new ar(Qr.buffer),ee=Kr.HIGH,ne=Kr.LOW;function te(r,e,n,t){return Qr[0]=r,e[t]=re[ee],e[t+n]=re[ne],e}function ie(r){return te(r,[0,0],1,0)}L(ie,"assign",te);var ae=[0,0];function oe(r,e){var n,t;return ie.assign(r,ae,1,0),n=ae[0],n&=2147483647,t=kr(e),Br(n|=t&=2147483648,ae[1])}function ue(r,e,n,t){return Z(r)||q(r)?(e[t]=r,e[t+n]=0,e):0!==r&&z(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return ue(r,[0,0],1,0)}),"assign",ue);var fe=[0,0],ce=[0,0];function se(r,e){var n,t;return 0===e||0===r||Z(r)||q(r)?r:(ue(r,fe,1,0),e+=fe[1],e+=function(r){var e=kr(r);return(e=(2146435072&e)>>>20)-1023|0}(r=fe[0]),e<-1074?oe(0,r):e>1023?r<0?Y:X:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,ie.assign(r,ce,1,0),n=ce[0],n&=2148532223,t*Br(n|=e+1023<<20,ce[1])))}function le(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var pe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ve=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ye=5.960464477539063e-8,ge=le(20),de=le(20),he=le(20),we=le(20);function be(r,e,n,t,i,a,o,u,f){var c,s,l,p,v,y,g,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=ye*h|0,we[v]=h-16777216*s|0,h=t[d-1]+s,d-=1;if(h=se(h,i),h-=8*P(.125*h),h-=g=0|h,l=0,i>0?(g+=v=we[n-1]>>24-i,we[n-1]-=v<<24-i,l=we[n-1]>>23-i):0===i?l=we[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,c=0,v=0;v<n;v++)d=we[v],0===c?0!==d&&(c=1,we[v]=16777216-d):we[v]=16777215-d;if(i>0)switch(i){case 1:we[n-1]&=8388607;break;case 2:we[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=se(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=we[v];if(0===d){for(y=1;0===we[a-y];y++);for(v=n+1;v<=n+y;v++){for(f[u+v]=pe[o+v],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(v-d)];t[v]=s}return be(r,e,n+=y,t,i,a,o,u,f)}}if(0===h)for(n-=1,i-=24;0===we[n];)n-=1,i-=24;else(h=se(h,-i))>=16777216?(s=ye*h|0,we[n]=h-16777216*s|0,i+=24,we[n+=1]=s):we[n]=0|h;for(s=se(1,i),v=n;v>=0;v--)t[v]=s*we[v],s*=ye;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=ve[y]*t[v+y];he[n-v]=s}for(s=0,v=n;v>=0;v--)s+=he[v];for(e[0]=0===l?s:-s,s=he[0]-s,v=1;v<=n;v++)s+=he[v];return e[1]=0===l?s:-s,7&g}function Ne(r,e,n,t){var i,a,o,u,f,c,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)ge[f]=c<0?0:pe[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*ge[o+(f-c)];de[f]=i}return 4,be(r,e,4,de,u,4,a,o,ge)}var me=Math.round;function Ae(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=me(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(kr(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(kr(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var _e=1.5707963267341256,Ee=6077100506506192e-26,Ue=2*Ee,ke=4*Ee,Ie=[0,0,0],Se=[0,0];function xe(r,e){var n,t,i,a,o,u,f;if((i=2147483647&kr(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?Ae(r,i,e):i<=1073928572?r>0?(f=r-_e,e[0]=f-Ee,e[1]=f-e[0]-Ee,1):(f=r+_e,e[0]=f+Ee,e[1]=f-e[0]+Ee,-1):r>0?(f=r-2*_e,e[0]=f-Ue,e[1]=f-e[0]-Ue,2):(f=r+2*_e,e[0]=f+Ue,e[1]=f-e[0]+Ue,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?Ae(r,i,e):r>0?(f=r-3*_e,e[0]=f-1.8231301519518578e-10,e[1]=f-e[0]-1.8231301519518578e-10,3):(f=r+3*_e,e[0]=f+1.8231301519518578e-10,e[1]=f-e[0]+1.8231301519518578e-10,-3):1075388923===i?Ae(r,i,e):r>0?(f=r-4*_e,e[0]=f-ke,e[1]=f-e[0]-ke,4):(f=r+4*_e,e[0]=f+ke,e[1]=f-e[0]+ke,-4);if(i<1094263291)return Ae(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Mr[0]=r,Rr[Pr]}(r),f=Br(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Ie[o]=0|f,f=16777216*(f-Ie[o]);for(Ie[2]=f,a=3;0===Ie[a-1];)a-=1;return u=Ne(Ie,Se,t,a),r<0?(e[0]=-Se[0],e[1]=-Se[1],-u):(e[0]=Se[0],e[1]=Se[1],u)}var Fe=[0,0];function je(r){var e;if(e=kr(r),(e&=2147483647)<=1072243195)return e<1044381696?1:Gr(r,0);if(e>=2146435072)return NaN;switch(3&xe(r,Fe)){case 0:return Gr(Fe[0],Fe[1]);case 1:return-Wr(Fe[0],Fe[1]);case 2:return-Gr(Fe[0],Fe[1]);default:return Wr(Fe[0],Fe[1])}}var Te=[0,0];function Oe(r){var e;if(e=kr(r),(e&=2147483647)<=1072243195)return e<1045430272?r:Wr(r,0);if(e>=2146435072)return NaN;switch(3&xe(r,Te)){case 0:return Wr(Te[0],Te[1]);case 1:return Gr(Te[0],Te[1]);case 2:return-Wr(Te[0],Te[1]);default:return-Gr(Te[0],Te[1])}}var Ve=3.141592653589793;var $e=1.4616321449683622,Ge=1.4616321449683622;function He(r){var e,n,t,i,a,o,u,f,c,s,l,p,v;if(Z(r)||q(r))return r;if(0===r)return X;if(r<0?(e=!0,r=-r):e=!1,r<8470329472543003e-37)return-Or(r);if(e){if(r>=4503599627370496)return X;if(c=function(r){var e,n;return Z(r)||q(r)?NaN:0===(e=z(n=r%2))||1===e?oe(0,n):e<.25?Oe(Ve*n):e<.75?oe(je(Ve*(e=.5-e)),n):e<1.25?(n=oe(1,n)-n,Oe(Ve*n)):e<1.75?-oe(je(Ve*(e-=1.5)),n):(n-=oe(2,n),Oe(Ve*n))}(r),0===c)return X;n=Or(Ve/z(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-Or(r),r>=$e-1+.27?(l=1-r,t=0):r>=$e-1-.27?(l=r-(Ge-1),t=1):(l=r,t=2)):(v=0,r>=$e+.27?(l=2-r,t=0):r>=$e-.27?(l=r-Ge,t=1):(l=r-1,t=2)),t){case 0:o=.07721566490153287+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(.3224670334241136+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(u=l*o+a)-.5*l;break;case 1:o=.48383612272381005+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s)-.1475877229945939,i=.06462494023913339+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=-.12148629053584961+(u=p*o-(-3638676997039505e-33-s*(a+l*i)));break;case 2:o=l*(l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)-.07721566490153287),a=1+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+o/a}else if(r<8)switch(u=(l=r-(t=$r(r)))*(l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)-.07721566490153287),f=1+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+u/f,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=Or(p*=l+2)}else r<0x400000000000000?(c=Or(r),s=.4189385332046727+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(c-1)+s):v=r*(Or(r)-1);return e&&(v=n-v),v}var We=.6931471803691238,Ce=1.9082149292705877e-10;function Le(r){var e,n,t,i,a,o,u,f,c,s;if(r<-1||Z(r))return NaN;if(-1===r)return Y;if(r===X)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,n=1)}return 0!==s&&(t<9007199254740992?(a=(s=((n=kr(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),a/=c):(s=((n=kr(c=r))>>20)-1023,a=0),(n&=1048575)<434334?c=Fr(c,1072693248|n):(s+=1,c=Fr(c,1071644672|n),n=1048576-n>>2),i=c-1),e=.5*i*i,0===n?0===i?s*We+(a+=s*Ce):s*We-((f=e*(1-.6666666666666666*i))-(s*Ce+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(e-o*(e+f)):s*We-(e-(o*(e+f)+(s*Ce+a))-i))}function Pe(r){return 0===r&&1/r===Y}function Me(r){return R(r/2)}function Re(r){return Me(r>0?r-1:r+1)}var Ze=Math.sqrt,Xe=!0===Ar?0:1,Ye=new sr(1),qe=new ar(Ye.buffer);function ze(r,e){return Ye[0]=r,qe[Xe]=e>>>0,Ye[0]}function Be(r){return 0|r}var De=[1,1.5],Je=[0,.5849624872207642],Ke=[0,1.350039202129749e-8];var Qe=1e300,rn=1e-300,en=[0,0],nn=[0,0];function tn(r,e){var n,t,i,a,o,u,f,c,s,l,p,v,y,g;if(Z(r)||Z(e))return NaN;if(ie.assign(e,en,1,0),o=en[0],0===en[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Ze(r);if(-.5===e)return 1/Ze(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(q(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:z(r)<1==(e===X)?0:X}(r,e)}if(ie.assign(r,en,1,0),a=en[0],0===en[1]){if(0===a)return function(r,e){return e===Y?X:e===X?0:e>0?Re(e)?r:0:Re(e)?oe(X,r):X}(r,e);if(1===r)return 1;if(-1===r&&Re(e))return-1;if(q(r))return r===Y?tn(-0,-e):e<0?0:X}if(r<0&&!1===R(e))return(r-r)/(r-r);if(i=z(r),n=2147483647&a|0,t=2147483647&o|0,f=o>>>31|0,u=(u=a>>>31|0)&&Re(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&kr(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*Qe*Qe:u*rn*rn;if(n>1072693248)return 0===f?u*Qe*Qe:u*rn*rn;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=ze(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(nn,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v,y,g,d,h,w,b,N,m,A,_;return N=0,n<1048576&&(N-=53,n=kr(e*=9007199254740992)),N+=(n>>20)-1023|0,n=1072693248|(m=1048575&n|0),m<=235662?A=0:m<767610?A=1:(A=0,N+=1,n-=1048576),o=ze(i=(w=(e=Fr(e,n))-(c=De[A]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=Fr(0,t+=A<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=ze(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),g=(v=-7.028461650952758e-9*(l=ze(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+Ke[A])-((y=ze(y=(p=.9617967009544373*l)+v+(s=Je[A])+(d=N),0))-d-s-p),r[0]=y,r[1]=g,r}(nn,i,n);if(v=(l=(e-(c=ze(e,0)))*p[0]+e*p[1])+(s=c*p[0]),ie.assign(v,en,1,0),y=Be(en[0]),g=Be(en[1]),y>=1083179008){if(0!=(y-1083179008|g))return u*Qe*Qe;if(l+8008566259537294e-32>v-s)return u*Qe*Qe}else if((2147483647&y)>=1083231232){if(0!=(y-3230714880|g))return u*rn*rn;if(l<=v-s)return u*rn*rn}return v=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=Fr(0,t)),r=Be(r=kr(c=1-((c=(o=.6931471824645996*(a=ze(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(v=a)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?se(c,s):Fr(c,r)}(y,s,l),u*v}function an(r){var e;return Z(r)||r===X?r:r===Y?0:r>709.782712893384?X:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,e,n){var t,i,a,o;return se(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=$r(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*e,e)}function on(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=an(r),2.5066282746310007*(n=r>143.01608?(t=tn(r,.5*r-.25))*(t/n):tn(r,r-.5)/n)*e}function un(r,e){return e/((1+.5772156649015329*r)*r)}function fn(r){var e,n,t,i;if(R(r)&&r<0||r===Y||Z(r))return NaN;if(0===r)return Pe(r)?Y:X;if(r>171.61447887182297)return X;if(r<-170.5674972726612)return 0;if((n=z(r))>33)return r>=0?on(r):(e=0==(1&(t=P(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*Oe(Ve*i),e*Ve/(z(i)*on(n)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return un(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return un(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(r-=2)}function cn(r,e){return Z(r)||Z(e)?NaN:r===X||e===X?X:r===e&&0===r?function(r){return 0===r&&1/r===X}(r)?r:e:r>e?r:e}var sn=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],ln=sn.length;function pn(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?function(r){var e,n,t,i,a;if(r<-1.1||r>1.1)return NaN;for(t=0,i=0,e=2*r,a=0;a<ln;a++)n=t,i=e*(t=i)-n+sn[a];return.5*(i-n)}(2*tn(10/r,2)-1)/r:1/(12*r)}function vn(r,e){var n,t,i,a,o;return o=e,t=Z(a=r)||Z(o)?NaN:a===Y||o===Y?Y:a===o&&0===a?Pe(a)?a:o:a<o?a:o,i=cn(r,e),t<0?NaN:0===t?X:i===X?Y:t>=10?(n=pn(t)+pn(i)-pn(t+i),-.5*Or(i)+.9189385332046728+n+(t-.5)*Or(t/(t+i))+i*Le(-t/(t+i))):i>=10?(n=pn(i)-pn(t+i),He(t)+n+t-t*Or(t+i)+(i-.5)*Le(-t/(t+i))):Or(fn(t)*(fn(i)/fn(t+i)))}function yn(r,e){return Z(r)||Z(e)?NaN:R(r)&&R(e)?r<0?yn(-r+e-1,e):e<0?Y:0===e?0:1===e?Or(z(r)):r<e?Y:r-e<2?yn(r,r-e):-Or(r+1)-vn(r-e+1,e+1):NaN}function gn(r,e,n){var t;return Z(r)||Z(e)||Z(n)||n<0||n>1||!M(e)||e===X?NaN:M(r)?r>e?Y:0===n?0===r?0:Y:1===n?r===e?0:Y:(t=yn(e,r),t+=r*Or(n)+(e-r)*Le(-n)):Y}function dn(r){return function(){return r}}function hn(r){return Z(r)?dn(NaN):function(e){if(Z(e))return NaN;return e===r?0:Y}}function wn(r,e){return Z(r)||Z(e)||!M(r)||r===X||e<0||e>1?dn(NaN):0===e||0===r?hn(0):1===e?hn(r):function(n){var t;if(Z(n))return NaN;if(M(n))return n>r?Y:(t=yn(r,n),t+=n*Or(e)+(r-n)*Le(-e));return Y}}L((function(r,e){return Z(r)||Z(e)?NaN:r===e?0:Y}),"factory",hn),L(gn,"factory",wn);export{gn as default,wn as factory};
//# sourceMappingURL=mod.js.map