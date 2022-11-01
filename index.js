// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,u=e.toString,f=e.__defineGetter__,i=e.__defineSetter__,o=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(o.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&f&&f.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=Math.floor;function v(r){return y(r)===r&&r>=0}function p(r){return y(r)===r}function s(r){return r!=r}var N=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY;function w(r){return r===N||r===b}function d(r){return Math.abs(r)}var h,_="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),A=Object.prototype.toString,m=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol.toStringTag:"",U=_&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,f;if(null==r)return A.call(r);t=r[g],f=g,n=null!=(u=r)&&m.call(u,f);try{r[g]=void 0}catch(n){return A.call(r)}return e=A.call(r),n?r[g]=t:delete r[g],e}:function(r){return A.call(r)},j="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;h=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(j&&t instanceof Uint32Array||"[object Uint32Array]"===U(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S,E=h,F="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,H="function"==typeof Float64Array?Float64Array:void 0;S=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T([1,3.14,-3.14,NaN]),t=n,r=(F&&t instanceof Float64Array||"[object Float64Array]"===U(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var G,P=S,x="function"==typeof Uint8Array,M="function"==typeof Uint8Array?Uint8Array:null,k="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,256,257]),t=n,r=(x&&t instanceof Uint8Array||"[object Uint8Array]"===U(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var L,V=G,W="function"==typeof Uint16Array,Y="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;L=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,65536,65537]),t=n,r=(W&&t instanceof Uint16Array||"[object Uint16Array]"===U(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var C,z={uint16:L,uint8:V};(C=new z.uint16(1))[0]=4660;var B=52===new z.uint8(C.buffer)[0],D=!0===B?1:0,J=new P(1),K=new E(J.buffer);function Q(r){return J[0]=r,K[D]}var R=!0===B?1:0,X=new P(1),Z=new E(X.buffer);function $(r,n){return X[0]=r,Z[R]=n>>>0,X[0]}var rr=1023,nr=.6931471803691238,tr=1.9082149292705877e-10,er=1048575;function ur(r){var n,t,e,u,f,i,o,a,c,l,y,v;return 0===r?b:s(r)||r<0?NaN:(f=0,(t=Q(r))<1048576&&(f-=54,t=Q(r*=0x40000000000000)),t>=2146435072?r+r:(f+=(t>>20)-rr|0,f+=(a=614244+(t&=er)&1048576|0)>>20|0,o=(r=$(r,t|1072693248^a))-1,(er&2+t)<3?0===o?0===f?0:f*nr+f*tr:(i=o*o*(.5-.3333333333333333*o),0===f?o-i:f*nr-(i-f*tr-o)):(a=t-398458|0,c=440401-t|0,u=(y=(v=(l=o/(2+o))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+u,(a|=c)>0?(n=.5*o*o,0===f?o-(n-l*(n+i)):f*nr-(n-(l*(n+i)+f*tr)-o)):0===f?o-l*(o-i):f*nr-(l*(o-i)-f*tr-o))))}var fr=Math.ceil;function ir(r){return r<0?fr(r):y(r)}function or(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var ar=-.16666666666666632;function cr(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(ar+u*t):r-(u*(.5*n-e*t)-n-e*ar)}var lr,yr,vr=!0===B?0:1,pr=new P(1),sr=new E(pr.buffer);!0===B?(lr=1,yr=0):(lr=0,yr=1);var Nr,br,wr={HIGH:lr,LOW:yr},dr=new P(1),hr=new E(dr.buffer),_r=wr.HIGH,Ar=wr.LOW;function mr(r,n){return hr[_r]=r,hr[Ar]=n,dr[0]}!0===B?(Nr=1,br=0):(Nr=0,br=1);var gr={HIGH:Nr,LOW:br},Ur=new P(1),jr=new E(Ur.buffer),Ir=gr.HIGH,Or=gr.LOW;function Sr(r,n){return Ur[0]=n,r[0]=jr[Ir],r[1]=jr[Or],r}function Er(r,n){return 1===arguments.length?Sr([0,0],r):Sr(r,n)}var Fr=[0,0];function Tr(r,n){var t,e;return Er(Fr,r),t=Fr[0],t&=2147483647,e=Q(n),mr(t|=e&=2147483648,Fr[1])}function Hr(r,n,t,e){return s(r)||w(r)?(n[e]=r,n[e+t]=0,n):0!==r&&d(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return Hr(r,[0,0],1,0)}),"assign",Hr);var Gr=[0,0],Pr=[0,0];function xr(r,n){var t,e;return 0===n||0===r||s(r)||w(r)?r:(Hr(r,Gr,1,0),n+=Gr[1],n+=function(r){var n=Q(r);return(n=(2146435072&n)>>>20)-rr|0}(r=Gr[0]),n<-1074?Tr(0,r):n>1023?r<0?b:N:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Er(Pr,r),t=Pr[0],t&=2148532223,e*mr(t|=n+rr<<20,Pr[1])))}function Mr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var kr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Lr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Vr=16777216,Wr=5.960464477539063e-8,Yr=Mr(20),qr=Mr(20),Cr=Mr(20),zr=Mr(20);function Br(r,n,t,e,u,f,i,o,a){var c,l,v,p,s,N,b,w,d;for(p=f,d=e[t],w=t,s=0;w>0;s++)l=Wr*d|0,zr[s]=d-Vr*l|0,d=e[w-1]+l,w-=1;if(d=xr(d,u),d-=8*y(.125*d),d-=b=0|d,v=0,u>0?(b+=s=zr[t-1]>>24-u,zr[t-1]-=s<<24-u,v=zr[t-1]>>23-u):0===u?v=zr[t-1]>>23:d>=.5&&(v=2),v>0){for(b+=1,c=0,s=0;s<t;s++)w=zr[s],0===c?0!==w&&(c=1,zr[s]=16777216-w):zr[s]=16777215-w;if(u>0)switch(u){case 1:zr[t-1]&=8388607;break;case 2:zr[t-1]&=4194303}2===v&&(d=1-d,0!==c&&(d-=xr(1,u)))}if(0===d){for(w=0,s=t-1;s>=f;s--)w|=zr[s];if(0===w){for(N=1;0===zr[f-N];N++);for(s=t+1;s<=t+N;s++){for(a[o+s]=kr[i+s],l=0,w=0;w<=o;w++)l+=r[w]*a[o+(s-w)];e[s]=l}return Br(r,n,t+=N,e,u,f,i,o,a)}}if(0===d)for(t-=1,u-=24;0===zr[t];)t-=1,u-=24;else(d=xr(d,-u))>=Vr?(l=Wr*d|0,zr[t]=d-Vr*l|0,u+=24,zr[t+=1]=l):zr[t]=0|d;for(l=xr(1,u),s=t;s>=0;s--)e[s]=l*zr[s],l*=Wr;for(s=t;s>=0;s--){for(l=0,N=0;N<=p&&N<=t-s;N++)l+=Lr[N]*e[s+N];Cr[t-s]=l}for(l=0,s=t;s>=0;s--)l+=Cr[s];for(n[0]=0===v?l:-l,l=Cr[0]-l,s=1;s<=t;s++)l+=Cr[s];return n[1]=0===v?l:-l,7&b}function Dr(r,n,t,e){var u,f,i,o,a,c,l;for((f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),l=i+4,a=0;a<=l;a++)Yr[a]=c<0?0:kr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Yr[i+(a-c)];qr[a]=u}return Br(r,n,4,qr,o,4,f,i,Yr)}var Jr=Math.round;function Kr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Jr(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(Q(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(Q(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Qr=1.5707963267341256,Rr=6077100506506192e-26,Xr=2*Rr,Zr=3*Rr,$r=4*Rr,rn=[0,0,0],nn=[0,0];function tn(r,n){var t,e,u,f,i,o,a;if((u=2147483647&Q(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Kr(r,u,n):u<=1073928572?r>0?(a=r-Qr,n[0]=a-Rr,n[1]=a-n[0]-Rr,1):(a=r+Qr,n[0]=a+Rr,n[1]=a-n[0]+Rr,-1):r>0?(a=r-2*Qr,n[0]=a-Xr,n[1]=a-n[0]-Xr,2):(a=r+2*Qr,n[0]=a+Xr,n[1]=a-n[0]+Xr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Kr(r,u,n):r>0?(a=r-3*Qr,n[0]=a-Zr,n[1]=a-n[0]-Zr,3):(a=r+3*Qr,n[0]=a+Zr,n[1]=a-n[0]+Zr,-3):1075388923===u?Kr(r,u,n):r>0?(a=r-4*Qr,n[0]=a-$r,n[1]=a-n[0]-$r,4):(a=r+4*Qr,n[0]=a+$r,n[1]=a-n[0]+$r,-4);if(u<1094263291)return Kr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return pr[0]=r,sr[vr]}(r),a=mr(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)rn[i]=0|a,a=16777216*(a-rn[i]);for(rn[2]=a,f=3;0===rn[f-1];)f-=1;return o=Dr(rn,nn,e,f),r<0?(n[0]=-nn[0],n[1]=-nn[1],-o):(n[0]=nn[0],n[1]=nn[1],o)}var en=[0,0];function un(r){var n;if(n=Q(r),(n&=2147483647)<=1072243195)return n<1044381696?1:or(r,0);if(n>=2146435072)return NaN;switch(3&tn(r,en)){case 0:return or(en[0],en[1]);case 1:return-cr(en[0],en[1]);case 2:return-or(en[0],en[1]);default:return cr(en[0],en[1])}}var fn=[0,0];function on(r){var n;if(n=Q(r),(n&=2147483647)<=1072243195)return n<1045430272?r:cr(r,0);if(n>=2146435072)return NaN;switch(3&tn(r,fn)){case 0:return cr(fn[0],fn[1]);case 1:return or(fn[0],fn[1]);case 2:return-cr(fn[0],fn[1]);default:return-or(fn[0],fn[1])}}var an=3.141592653589793,cn=1.4616321449683622,ln=1.4616321449683622;function yn(r){var n,t,e,u,f,i,o,a,c,l,y,v,p;if(s(r)||w(r))return r;if(0===r)return N;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-ur(r);if(n){if(r>=4503599627370496)return N;if(c=function(r){var n,t;return s(r)||w(r)?NaN:0===(n=d(t=r%2))||1===n?Tr(0,t):n<.25?on(an*t):n<.75?Tr(un(an*(n=.5-n)),t):n<1.25?(t=Tr(1,t)-t,on(an*t)):n<1.75?-Tr(un(an*(n-=1.5)),t):(t-=Tr(2,t),on(an*t))}(r),0===c)return N;t=ur(an/d(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(p=-ur(r),r>=cn-1+.27?(y=1-r,e=0):r>=cn-1-.27?(y=r-(ln-1),e=1):(y=r,e=2)):(p=0,r>=cn+.27?(y=2-r,e=0):r>=cn-.27?(y=r-ln,e=1):(y=r-1,e=2)),e){case 0:i=.07721566490153287+(v=y*y)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(v),f=v*(.3224670334241136+v*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(v)),p+=(o=y*i+f)-.5*y;break;case 1:i=.48383612272381005+(l=(v=y*y)*y)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),f=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,u=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),p+=(o=v*i-(-3638676997039505e-33-l*(f+y*u)))-.12148629053584961;break;case 2:i=y*(y*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(y)-.07721566490153287),f=1+y*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(y),p+=-.5*y+i/f}else if(r<8)switch(o=(y=r-(e=ir(r)))*(y*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(y)-.07721566490153287),a=1+y*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(y),p=.5*y+o/a,v=1,e){case 7:v*=y+6;case 6:v*=y+5;case 5:v*=y+4;case 4:v*=y+3;case 3:p+=ur(v*=y+2)}else r<0x400000000000000?(c=ur(r),l=.4189385332046727+(v=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(y=v*v),p=(r-.5)*(c-1)+l):p=r*(ur(r)-1);return n&&(p=t-p),p}var vn=.6931471803691238,pn=1.9082149292705877e-10;function sn(r){var n,t,e,u,f,i,o,a,c,l;if(r<-1||s(r))return NaN;if(-1===r)return b;if(r===N)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(f=(l=((t=Q(c=1+r))>>20)-rr)>0?1-(c-r):r-(c-1),f/=c):(l=((t=Q(c=r))>>20)-rr,f=0),(t&=1048575)<434334?c=$(c,1072693248|t):(l+=1,c=$(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?l*vn+(f+=l*pn):l*vn-((a=n*(1-.6666666666666666*u))-(l*pn+f)-u):(a=(o=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===l?u-(n-i*(n+a)):l*vn-(n-(i*(n+a)+(l*pn+f))-u))}function Nn(r){return 0===r&&1/r===b}function bn(r){return p(r/2)}function wn(r){return bn(r>0?r-1:r+1)}var dn=Math.sqrt,hn=!0===B?0:1,_n=new P(1),An=new E(_n.buffer);function mn(r,n){return _n[0]=r,An[hn]=n>>>0,_n[0]}function gn(r){return 0|r}var Un=1048576,jn=[1,1.5],In=[0,.5849624872207642],On=[0,1.350039202129749e-8],Sn=2147483647,En=1048575,Fn=1048576,Tn=2147483647,Hn=1083179008,Gn=1e300,Pn=1e-300,xn=[0,0],Mn=[0,0];function kn(r,n){var t,e,u,f,i,o,a,c,l,y,v,h,_,A;if(s(r)||s(n))return NaN;if(Er(xn,n),i=xn[0],0===xn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return dn(r);if(-.5===n)return 1/dn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(w(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:d(r)<1==(n===N)?0:N}(r,n)}if(Er(xn,r),f=xn[0],0===xn[1]){if(0===f)return function(r,n){return n===b?N:n===N?0:n>0?wn(n)?r:0:wn(n)?Tr(N,r):N}(r,n);if(1===r)return 1;if(-1===r&&wn(n))return-1;if(w(r))return r===b?kn(-0,-n):n<0?0:N}if(r<0&&!1===p(n))return(r-r)/(r-r);if(u=d(r),t=f&Tn|0,e=i&Tn|0,a=i>>>31|0,o=(o=f>>>31|0)&&wn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Q(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*Gn*Gn:o*Pn*Pn;if(t>1072693248)return 0===a?o*Gn*Gn:o*Pn*Pn;v=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=mn(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(Mn,u)}else v=function(r,n,t){var e,u,f,i,o,a,c,l,y,v,p,s,N,b,w,d,h,_,A,m,g;return _=0,t<Un&&(_-=53,t=Q(n*=9007199254740992)),_+=(t>>20)-rr|0,t=1072693248|(A=1048575&t|0),A<=235662?m=0:A<767610?m=1:(m=0,_+=1,t-=Un),i=mn(u=(d=(n=$(n,t))-(c=jn[m]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=$(0,e+=m<<18),w=(f=u*u)*f*(0===(g=f)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=mn(a=3+(f=i*i)+(w+=(o=h*(d-i*a-i*(n-(a-c))))*(i+u)),0),N=(p=-7.028461650952758e-9*(y=mn(y=(d=i*a)+(h=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(h-(y-d))+On[m])-((s=mn(s=(v=.9617967009544373*y)+p+(l=In[m])+(b=_),0))-b-l-v),r[0]=s,r[1]=N,r}(Mn,u,t);if(y=(n-(c=mn(n,0)))*v[0]+n*v[1],l=c*v[0],Er(xn,h=y+l),_=gn(xn[0]),A=gn(xn[1]),_>=Hn){if(0!=(_-Hn|A))return o*Gn*Gn;if(y+8008566259537294e-32>h-l)return o*Gn*Gn}else if((_&Tn)>=1083231232){if(0!=(_-3230714880|A))return o*Pn*Pn;if(y<=h-l)return o*Pn*Pn}return h=function(r,n,t){var e,u,f,i,o,a,c,l,y,v;return y=((l=r&Sn|0)>>20)-rr|0,c=0,l>1071644672&&(u=$(0,((c=r+(Fn>>y+1)>>>0)&~(En>>(y=((c&Sn)>>20)-rr|0)))>>>0),c=(c&En|Fn)>>20-y>>>0,r<0&&(c=-c),n-=u),r=gn(r=Q(a=1-((a=(f=.6931471824645996*(u=mn(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=i-(a-f))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?xr(a,c):$(a,r)}(_,l,y),o*h}var Ln=1.4426950408889634,Vn=1/(1<<28);function Wn(r){var n;return s(r)||r===N?r:r===b?0:r>709.782712893384?N:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Vn?1+r:function(r,n,t){var e,u,f,i;return xr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(r-.6931471803691238*(n=ir(r<0?Ln*r-.5:Ln*r+.5)),1.9082149292705877e-10*n,n)}function Yn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=Wn(r),2.5066282746310007*(t=r>143.01608?(e=kn(r,.5*r-.25))*(e/t):kn(r,r-.5)/t)*n}function qn(r,n){return n/((1+.5772156649015329*r)*r)}function Cn(r){var n,t,e,u;if(p(r)&&r<0||r===b||s(r))return NaN;if(0===r)return Nn(r)?b:N;if(r>171.61447887182297)return N;if(r<-170.5674972726612)return 0;if((t=d(r))>33)return r>=0?Yn(r):(n=0==(1&(e=y(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*on(an*u),n*an/(d(u)*Yn(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return qn(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return qn(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}function zn(r){return 0===r&&1/r===N}var Bn=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],Dn=Bn.length;function Jn(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?function(r){var n,t,e,u,f;if(r<-1.1||r>1.1)return NaN;for(e=0,u=0,n=2*r,f=0;f<Dn;f++)t=e,u=n*(e=u)-t+Bn[f];return.5*(u-t)}(2*kn(10/r,2)-1)/r:1/(12*r)}function Kn(r,n){var t,e,u;return e=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return s(r)||s(n)?NaN:r===b||n===b?b:r===n&&0===r?Nn(r)?r:n:r<n?r:n;for(e=N,f=0;f<t;f++){if(s(u=arguments[f])||u===b)return u;(u<e||u===e&&0===u&&Nn(u))&&(e=u)}return e}(r,n),u=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return s(r)||s(n)?NaN:r===N||n===N?N:r===n&&0===r?zn(r)?r:n:r>n?r:n;for(e=b,f=0;f<t;f++){if(s(u=arguments[f])||u===N)return u;(u>e||u===e&&0===u&&zn(u))&&(e=u)}return e}(r,n),e<0?NaN:0===e?N:u===N?b:e>=10?(t=Jn(e)+Jn(u)-Jn(e+u),-.5*ur(u)+.9189385332046728+t+(e-.5)*ur(e/(e+u))+u*sn(-e/(e+u))):u>=10?(t=Jn(u)-Jn(e+u),yn(e)+t+e-e*ur(e+u)+(u-.5)*sn(-e/(e+u))):ur(Cn(e)*(Cn(u)/Cn(e+u)))}function Qn(r,n){return s(r)||s(n)?NaN:p(r)&&p(n)?r<0?Qn(-r+n-1,n):n<0?b:0===n?0:1===n?ur(d(r)):r<n?b:r-n<2?Qn(r,r-n):-ur(r+1)-Kn(r-n+1,n+1):NaN}function Rn(r,n,t){var e;return s(r)||s(n)||s(t)||t<0||t>1||!v(n)||n===N?NaN:v(r)?r>n?b:0===t?0===r?0:b:1===t?r===n?0:b:(e=Qn(n,r),e+=r*ur(t)+(n-r)*sn(-t)):b}function Xn(r){return function(){return r}}function Zn(r){return s(r)?Xn(NaN):function(n){return s(n)?NaN:n===r?0:b}}function $n(r,n){return s(r)||s(n)||!v(r)||r===N||n<0||n>1?Xn(NaN):0===n||0===r?Zn(0):1===n?Zn(r):function(t){var e;return s(t)?NaN:v(t)?t>r?b:(e=Qn(r,t),e+=t*ur(n)+(r-t)*sn(-n)):b}}l((function(r,n){return s(r)||s(n)?NaN:r===n?0:b}),"factory",Zn),l(Rn,"factory",$n),r.default=Rn,r.factory=$n,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).logpmf={});
//# sourceMappingURL=index.js.map
