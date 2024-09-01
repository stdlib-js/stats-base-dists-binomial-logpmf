// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,g,"$1."),t=l.call(t,y,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var N=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,f,c,s,l,p,v,g,y;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))f+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,_(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,g=t.padRight,y=void 0,(y=v-p.length)<0?p:p=g?p+m(y):m(y)+p)),f+=t.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function I(r){var e,n;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var W=Math.floor;function C(r){return W(r)===r&&r>=0}function L(r){return W(r)===r}function P(r){return r!=r}var M=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY;function Z(r){return r===M||r===R}function X(r){return Math.abs(r)}var Y,q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),z=Object.prototype.toString,B=Object.prototype.hasOwnProperty,D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"",K=q&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return z.call(r);n=r[J],a=J,e=null!=(i=r)&&B.call(i,a);try{r[J]=void 0}catch(e){return z.call(r)}return t=z.call(r),e?r[J]=n:delete r[J],t}:function(r){return z.call(r)},Q="function"==typeof Uint32Array,rr="function"==typeof Uint32Array?Uint32Array:null,er="function"==typeof Uint32Array?Uint32Array:void 0;Y=function(){var r,e,n;if("function"!=typeof rr)return!1;try{e=new rr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Q&&n instanceof Uint32Array||"[object Uint32Array]"===K(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")};var nr,tr=Y,ir="function"==typeof Float64Array,ar="function"==typeof Float64Array?Float64Array:null,or="function"==typeof Float64Array?Float64Array:void 0;nr=function(){var r,e,n;if("function"!=typeof ar)return!1;try{e=new ar([1,3.14,-3.14,NaN]),n=e,r=(ir&&n instanceof Float64Array||"[object Float64Array]"===K(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur,fr=nr,cr="function"==typeof Uint8Array,sr="function"==typeof Uint8Array?Uint8Array:null,lr="function"==typeof Uint8Array?Uint8Array:void 0;ur=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr(e=[1,3.14,-3.14,256,257]),n=e,r=(cr&&n instanceof Uint8Array||"[object Uint8Array]"===K(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,vr=ur,gr="function"==typeof Uint16Array,yr="function"==typeof Uint16Array?Uint16Array:null,dr="function"==typeof Uint16Array?Uint16Array:void 0;pr=function(){var r,e,n;if("function"!=typeof yr)return!1;try{e=new yr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(gr&&n instanceof Uint16Array||"[object Uint16Array]"===K(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var hr,wr={uint16:pr,uint8:vr};(hr=new wr.uint16(1))[0]=4660;var br=52===new wr.uint8(hr.buffer)[0],mr=!0===br?1:0,Nr=new fr(1),Ar=new tr(Nr.buffer);function _r(r){return Nr[0]=r,Ar[mr]}var Er=!0===br?1:0,Ur=new fr(1),Sr=new tr(Ur.buffer);function kr(r,e){return Ur[0]=r,Sr[Er]=e>>>0,Ur[0]}var xr=1023,Ir=.6931471803691238,Fr=1.9082149292705877e-10,jr=0x40000000000000,Tr=.3333333333333333,Or=1048575,Vr=2146435072,$r=1048576,Gr=1072693248;function Hr(r){var e,n,t,i,a,o,u,f,c,s,l,p;return 0===r?R:P(r)||r<0?NaN:(a=0,(n=_r(r))<$r&&(a-=54,n=_r(r*=jr)),n>=Vr?r+r:(a+=(n>>20)-xr|0,a+=(f=614244+(n&=Or)&1048576|0)>>20|0,u=(r=kr(r,n|f^Gr))-1,(Or&2+n)<3?0===u?0===a?0:a*Ir+a*Fr:(o=u*u*(.5-Tr*u),0===a?u-o:a*Ir-(o-a*Fr-u)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Ir-(e-(s*(e+o)+a*Fr)-u)):0===a?u-s*(u-o):a*Ir-(s*(u-o)-a*Fr-u))))}var Wr=Math.ceil;function Cr(r){return r<0?Wr(r):W(r)}function Lr(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Pr=-.16666666666666632,Mr=.00833333333332249,Rr=-.0001984126982985795,Zr=27557313707070068e-22,Xr=-2.5050760253406863e-8,Yr=1.58969099521155e-10;function qr(r,e){var n,t,i;return n=Mr+(i=r*r)*(Rr+i*Zr)+i*(i*i)*(Xr+i*Yr),t=i*r,0===e?r+t*(Pr+i*n):r-(i*(.5*e-t*n)-e-t*Pr)}var zr,Br,Dr=2147483647,Jr=2146435072,Kr=1048575,Qr=!0===br?0:1,re=new fr(1),ee=new tr(re.buffer);!0===br?(zr=1,Br=0):(zr=0,Br=1);var ne={HIGH:zr,LOW:Br},te=new fr(1),ie=new tr(te.buffer),ae=ne.HIGH,oe=ne.LOW;function ue(r,e){return ie[ae]=r,ie[oe]=e,te[0]}var fe,ce,se=1023,le=-1023,pe=-1074,ve=2147483648;!0===br?(fe=1,ce=0):(fe=0,ce=1);var ge={HIGH:fe,LOW:ce},ye=new fr(1),de=new tr(ye.buffer),he=ge.HIGH,we=ge.LOW;function be(r,e,n,t){return ye[0]=r,e[t]=de[he],e[t+n]=de[we],e}function me(r){return be(r,[0,0],1,0)}H(me,"assign",be);var Ne=[0,0];function Ae(r,e){var n,t;return me.assign(r,Ne,1,0),n=Ne[0],n&=Dr,t=_r(e),ue(n|=t&=ve,Ne[1])}var _e=22250738585072014e-324,Ee=4503599627370496;function Ue(r,e,n,t){return P(r)||Z(r)?(e[t]=r,e[t+n]=0,e):0!==r&&X(r)<_e?(e[t]=r*Ee,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return Ue(r,[0,0],1,0)}),"assign",Ue);var Se=2220446049250313e-31,ke=2148532223,xe=[0,0],Ie=[0,0];function Fe(r,e){var n,t;return 0===e||0===r||P(r)||Z(r)?r:(Ue(r,xe,1,0),r=xe[0],e+=xe[1],e+=function(r){var e=_r(r);return(e=(e&Jr)>>>20)-xr|0}(r),e<pe?Ae(0,r):e>se?r<0?R:M:(e<=le?(e+=52,t=Se):t=1,me.assign(r,Ie,1,0),n=Ie[0],n&=ke,t*ue(n|=e+xr<<20,Ie[1])))}function je(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var Te=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Oe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ve=16777216,$e=5.960464477539063e-8,Ge=je(20),He=je(20),We=je(20),Ce=je(20);function Le(r,e,n,t,i,a,o,u,f){var c,s,l,p,v,g,y,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=$e*h|0,Ce[v]=h-Ve*s|0,h=t[d-1]+s,d-=1;if(h=Fe(h,i),h-=8*W(.125*h),h-=y=0|h,l=0,i>0?(y+=v=Ce[n-1]>>24-i,Ce[n-1]-=v<<24-i,l=Ce[n-1]>>23-i):0===i?l=Ce[n-1]>>23:h>=.5&&(l=2),l>0){for(y+=1,c=0,v=0;v<n;v++)d=Ce[v],0===c?0!==d&&(c=1,Ce[v]=16777216-d):Ce[v]=16777215-d;if(i>0)switch(i){case 1:Ce[n-1]&=8388607;break;case 2:Ce[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=Fe(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=Ce[v];if(0===d){for(g=1;0===Ce[a-g];g++);for(v=n+1;v<=n+g;v++){for(f[u+v]=Te[o+v],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(v-d)];t[v]=s}return Le(r,e,n+=g,t,i,a,o,u,f)}}if(0===h)for(n-=1,i-=24;0===Ce[n];)n-=1,i-=24;else(h=Fe(h,-i))>=Ve?(s=$e*h|0,Ce[n]=h-Ve*s|0,i+=24,Ce[n+=1]=s):Ce[n]=0|h;for(s=Fe(1,i),v=n;v>=0;v--)t[v]=s*Ce[v],s*=$e;for(v=n;v>=0;v--){for(s=0,g=0;g<=p&&g<=n-v;g++)s+=Oe[g]*t[v+g];We[n-v]=s}for(s=0,v=n;v>=0;v--)s+=We[v];for(e[0]=0===l?s:-s,s=We[0]-s,v=1;v<=n;v++)s+=We[v];return e[1]=0===l?s:-s,7&y}function Pe(r,e,n,t){var i,a,o,u,f,c,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)Ge[f]=c<0?0:Te[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*Ge[o+(f-c)];He[f]=i}return Le(r,e,4,He,u,4,a,o,Ge)}var Me=Math.round,Re=.6366197723675814,Ze=1.5707963267341256,Xe=6077100506506192e-26,Ye=6077100506303966e-26,qe=20222662487959506e-37,ze=20222662487111665e-37,Be=84784276603689e-45,De=2047;function Je(r,e,n){var t,i,a,o,u;return a=r-(t=Me(r*Re))*Ze,o=t*Xe,u=e>>20|0,n[0]=a-o,u-(_r(n[0])>>20&De)>16&&(o=t*qe-((i=a)-(a=i-(o=t*Ye))-o),n[0]=a-o,u-(_r(n[0])>>20&De)>49&&(o=t*Be-((i=a)-(a=i-(o=t*ze))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var Ke=0,Qe=16777216,rn=1.5707963267341256,en=6077100506506192e-26,nn=2*en,tn=3*en,an=4*en,on=598523,un=1072243195,fn=1073928572,cn=1074752122,sn=1074977148,ln=1075183036,pn=1075388923,vn=1075594811,gn=1094263291,yn=[0,0,0],dn=[0,0];function hn(r,e){var n,t,i,a,o,u,f;if((i=_r(r)&Dr|0)<=un)return e[0]=r,e[1]=0,0;if(i<=cn)return(i&Kr)===on?Je(r,i,e):i<=fn?r>0?(f=r-rn,e[0]=f-en,e[1]=f-e[0]-en,1):(f=r+rn,e[0]=f+en,e[1]=f-e[0]+en,-1):r>0?(f=r-2*rn,e[0]=f-nn,e[1]=f-e[0]-nn,2):(f=r+2*rn,e[0]=f+nn,e[1]=f-e[0]+nn,-2);if(i<=vn)return i<=ln?i===sn?Je(r,i,e):r>0?(f=r-3*rn,e[0]=f-tn,e[1]=f-e[0]-tn,3):(f=r+3*rn,e[0]=f+tn,e[1]=f-e[0]+tn,-3):i===pn?Je(r,i,e):r>0?(f=r-4*rn,e[0]=f-an,e[1]=f-e[0]-an,4):(f=r+4*rn,e[0]=f+an,e[1]=f-e[0]+an,-4);if(i<gn)return Je(r,i,e);if(i>=Jr)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return re[0]=r,ee[Qr]}(r),f=ue(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)yn[o]=0|f,f=(f-yn[o])*Qe;for(yn[2]=f,a=3;yn[a-1]===Ke;)a-=1;return u=Pe(yn,dn,t,a),r<0?(e[0]=-dn[0],e[1]=-dn[1],-u):(e[0]=dn[0],e[1]=dn[1],u)}var wn=[0,0],bn=2147483647,mn=1072243195,Nn=1044381696,An=2146435072;function _n(r){var e;if(e=_r(r),(e&=bn)<=mn)return e<Nn?1:Lr(r,0);if(e>=An)return NaN;switch(3&hn(r,wn)){case 0:return Lr(wn[0],wn[1]);case 1:return-qr(wn[0],wn[1]);case 2:return-Lr(wn[0],wn[1]);default:return qr(wn[0],wn[1])}}var En=1072243195,Un=1045430272,Sn=[0,0];function kn(r){var e;if(e=_r(r),(e&=Dr)<=En)return e<Un?r:qr(r,0);if(e>=Jr)return NaN;switch(3&hn(r,Sn)){case 0:return qr(Sn[0],Sn[1]);case 1:return Lr(Sn[0],Sn[1]);case 2:return-qr(Sn[0],Sn[1]);default:return-Lr(Sn[0],Sn[1])}}var xn=3.141592653589793,In=.07721566490153287,Fn=.3224670334241136,jn=1,Tn=-.07721566490153287,On=.48383612272381005,Vn=-.1475877229945939,$n=.06462494023913339,Gn=-.07721566490153287,Hn=1,Wn=.4189385332046727,Cn=1.4616321449683622,Ln=4503599627370496,Pn=0x400000000000000,Mn=8470329472543003e-37,Rn=1.4616321449683622,Zn=-.12148629053584961,Xn=-3638676997039505e-33;function Yn(r){var e,n,t,i,a,o,u,f,c,s,l,p,v;if(P(r)||Z(r))return r;if(0===r)return M;if(r<0?(e=!0,r=-r):e=!1,r<Mn)return-Hr(r);if(e){if(r>=Ln)return M;if(c=function(r){var e,n;return P(r)||Z(r)?NaN:0===(e=X(n=r%2))||1===e?Ae(0,n):e<.25?kn(xn*n):e<.75?Ae(_n(xn*(e=.5-e)),n):e<1.25?(n=Ae(1,n)-n,kn(xn*n)):e<1.75?-Ae(_n(xn*(e-=1.5)),n):(n-=Ae(2,n),kn(xn*n))}(r),0===c)return M;n=Hr(xn/X(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-Hr(r),r>=Cn-1+.27?(l=1-r,t=0):r>=Cn-1-.27?(l=r-(Rn-1),t=1):(l=r,t=2)):(v=0,r>=Cn+.27?(l=2-r,t=0):r>=Cn-.27?(l=r-Rn,t=1):(l=r-1,t=2)),t){case 0:o=In+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(Fn+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(u=l*o+a)-.5*l;break;case 1:o=On+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=Vn+s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s),i=$n+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=Zn+(u=p*o-(Xn-s*(a+l*i)));break;case 2:o=l*(Gn+l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)),a=Hn+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+o/a}else if(r<8)switch(u=(l=r-(t=Cr(r)))*(Tn+l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)),f=jn+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+u/f,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=Hr(p*=l+2)}else r<Pn?(c=Hr(r),s=Wn+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(c-1)+s):v=r*(Hr(r)-1);return e&&(v=n-v),v}var qn=.6931471803691238,zn=1.9082149292705877e-10,Bn=.41421356237309503,Dn=-.2928932188134525,Jn=1.862645149230957e-9,Kn=5551115123125783e-32,Qn=9007199254740992,rt=.6666666666666666;function et(r){var e,n,t,i,a,o,u,f,c,s;if(r<-1||P(r))return NaN;if(-1===r)return R;if(r===M)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<Bn){if(t<Jn)return t<Kn?r:r-r*r*.5;r>Dn&&(s=0,i=r,n=1)}return 0!==s&&(t<Qn?(a=(s=((n=_r(c=1+r))>>20)-xr)>0?1-(c-r):r-(c-1),a/=c):(s=((n=_r(c=r))>>20)-xr,a=0),(n&=1048575)<434334?c=kr(c,1072693248|n):(s+=1,c=kr(c,1071644672|n),n=1048576-n>>2),i=c-1),e=.5*i*i,0===n?0===i?s*qn+(a+=s*zn):s*qn-((f=e*(1-rt*i))-(s*zn+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(e-o*(e+f)):s*qn-(e-(o*(e+f)+(s*zn+a))-i))}function nt(r){return 0===r&&1/r===R}var tt=2.5066282746310007;function it(r){return L(r/2)}function at(r){return it(r>0?r-1:r+1)}var ot=Math.sqrt,ut=!0===br?0:1,ft=new fr(1),ct=new tr(ft.buffer);function st(r,e){return ft[0]=r,ct[ut]=e>>>0,ft[0]}function lt(r){return 0|r}var pt=1072693247,vt=1e300,gt=1e-300,yt=1048575,dt=1048576,ht=1072693248,wt=536870912,bt=524288,mt=20,Nt=9007199254740992,At=.9617966939259756,_t=.9617967009544373,Et=-7.028461650952758e-9,Ut=[1,1.5],St=[0,.5849624872207642],kt=[0,1.350039202129749e-8],xt=1.4426950408889634,It=1.4426950216293335,Ft=1.9259629911266175e-8,jt=.6931471805599453,Tt=1048576,Ot=1071644672,Vt=20,$t=.6931471824645996,Gt=-1.904654299957768e-9,Ht=1072693247,Wt=1105199104,Ct=1139802112,Lt=1083179008,Pt=1072693248,Mt=1083231232,Rt=3230714880,Zt=31,Xt=1e300,Yt=1e-300,qt=8008566259537294e-32,zt=[0,0],Bt=[0,0];function Dt(r,e){var n,t,i,a,o,u,f,c,s,l,p,v,g,y;if(P(r)||P(e))return NaN;if(me.assign(e,zt,1,0),o=zt[0],0===zt[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return ot(r);if(-.5===e)return 1/ot(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:X(r)<1==(e===M)?0:M}(r,e)}if(me.assign(r,zt,1,0),a=zt[0],0===zt[1]){if(0===a)return function(r,e){return e===R?M:e===M?0:e>0?at(e)?r:0:at(e)?Ae(M,r):M}(r,e);if(1===r)return 1;if(-1===r&&at(e))return-1;if(Z(r))return r===R?Dt(-0,-e):e<0?0:M}if(r<0&&!1===L(e))return(r-r)/(r-r);if(i=X(r),n=a&Dr|0,t=o&Dr|0,f=o>>>Zt|0,u=(u=a>>>Zt|0)&&at(e)?-1:1,t>Wt){if(t>Ct)return function(r,e){return(_r(r)&Dr)<=pt?e<0?vt*vt:gt*gt:e>0?vt*vt:gt*gt}(r,e);if(n<Ht)return 1===f?u*Xt*Xt:u*Yt*Yt;if(n>Pt)return 0===f?u*Xt*Xt:u*Yt*Yt;p=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Ft-a*xt)-((t=st(t=(o=It*i)+u,0))-o),r[0]=t,r[1]=n,r}(Bt,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v,g,y,d,h,w,b,m,N,A,_;return m=0,n<dt&&(m-=53,n=_r(e*=Nt)),m+=(n>>mt)-xr|0,n=(N=n&yt|0)|ht|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=dt),o=st(i=(w=(e=kr(e,n))-(c=Ut[A]))*(b=1/(e+c)),0),t=(n>>1|wt)+bt,f=kr(0,t+=A<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=st(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),l=st(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=_t*l,y=(v=Et*l+(b-(l-w))*At+kt[A])-((g=st(g=p+v+(s=St[A])+(d=m),0))-d-s-p),r[0]=g,r[1]=y,r}(Bt,i,n);if(v=(l=(e-(c=st(e,0)))*p[0]+e*p[1])+(s=c*p[0]),me.assign(v,zt,1,0),g=lt(zt[0]),y=lt(zt[1]),g>=Lt){if(0!=(g-Lt|y))return u*Xt*Xt;if(l+qt>v-s)return u*Xt*Xt}else if((g&Dr)>=Mt){if(0!=(g-Rt|y))return u*Yt*Yt;if(l<=v-s)return u*Yt*Yt}return v=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&Dr|0)>>Vt)-xr|0,c=0,s>Ot&&(i=kr(0,((c=r+(Tt>>l+1)>>>0)&~(Kr>>(l=((c&Dr)>>Vt)-xr|0)))>>>0),c=(c&Kr|Tt)>>Vt-l>>>0,r<0&&(c=-c),e-=i),r=lt(r=_r(f=1-((f=(a=(i=st(i=n+e,0))*$t)+(o=(n-(i-e))*jt+i*Gt))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Vt>>>0)>>Vt<=0?Fe(f,c):kr(f,r)}(g,s,l),u*v}var Jt=.6931471803691238,Kt=1.9082149292705877e-10,Qt=1.4426950408889634,ri=709.782712893384,ei=-745.1332191019411,ni=1/(1<<28),ti=-ni;function ii(r){var e;return P(r)||r===M?r:r===R?0:r>ri?M:r<ei?0:r>ti&&r<ni?1+r:function(r,e,n){var t,i,a,o;return Fe(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=Cr(r<0?Qt*r-.5:Qt*r+.5))*Jt,e*Kt,e)}var ai=143.01608;function oi(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=ii(r),n=r>ai?(t=Dt(r,.5*r-.25))*(t/n):Dt(r,r-.5)/n,tt*n*e}var ui=.5772156649015329;function fi(r,e){return e/((1+ui*r)*r)}function ci(r){var e,n,t,i;if(L(r)&&r<0||r===R||P(r))return NaN;if(0===r)return nt(r)?R:M;if(r>171.61447887182297)return M;if(r<-170.5674972726612)return 0;if((n=X(r))>33)return r>=0?oi(r):(e=0==(1&(t=W(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*kn(xn*i),e*xn/(X(i)*oi(n)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return fi(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return fi(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(r-=2)}function si(r,e){return P(r)||P(e)?NaN:r===M||e===M?M:r===e&&0===r?function(r){return 0===r&&1/r===M}(r)?r:e:r>e?r:e}var li=.9189385332046728,pi=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],vi=pi.length,gi=94906265.62425156,yi=3745194030963158e291;function di(r){return r<10?NaN:r>=yi?0:r<gi?function(r){var e,n,t,i,a;if(r<-1.1||r>1.1)return NaN;for(t=0,i=0,e=2*r,a=0;a<vi;a++)n=t,i=e*(t=i)-n+pi[a];return.5*(i-n)}(2*Dt(10/r,2)-1)/r:1/(12*r)}function hi(r,e){var n,t,i,a,o;return o=e,t=P(a=r)||P(o)?NaN:a===R||o===R?R:a===o&&0===a?nt(a)?a:o:a<o?a:o,i=si(r,e),t<0?NaN:0===t?M:i===M?R:t>=10?(n=di(t)+di(i)-di(t+i),-.5*Hr(i)+li+n+(t-.5)*Hr(t/(t+i))+i*et(-t/(t+i))):i>=10?(n=di(i)-di(t+i),Yn(t)+n+t-t*Hr(t+i)+(i-.5)*et(-t/(t+i))):Hr(ci(t)*(ci(i)/ci(t+i)))}function wi(r,e){return P(r)||P(e)?NaN:L(r)&&L(e)?r<0?wi(-r+e-1,e):e<0?R:0===e?0:1===e?Hr(X(r)):r<e?R:r-e<2?wi(r,r-e):-Hr(r+1)-hi(r-e+1,e+1):NaN}function bi(r,e,n){var t;return P(r)||P(e)||P(n)||n<0||n>1||!C(e)||e===M?NaN:C(r)?r>e?R:0===n?0===r?0:R:1===n?r===e?0:R:(t=wi(e,r),t+=r*Hr(n)+(e-r)*et(-n)):R}function mi(r){return function(){return r}}function Ni(r){return P(r)?mi(NaN):function(e){return P(e)?NaN:e===r?0:R}}return H((function(r,e){return P(r)||P(e)?NaN:r===e?0:R}),"factory",Ni),H(bi,"factory",(function(r,e){return P(r)||P(e)||!C(r)||r===M||e<0||e>1?mi(NaN):0===e||0===r?Ni(0):1===e?Ni(r):function(n){var t;return P(n)?NaN:C(n)?n>r?R:(t=wi(r,n),t+=n*Hr(e)+(r-n)*et(-e)):R}})),bi},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).logpmf=e();
//# sourceMappingURL=browser.js.map
