// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,f=e.__defineGetter__,i=e.__defineSetter__,o=e.__lookupGetter__,a=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(o.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&f&&f.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r},l=n()?c:v;var y=function(r,n,t){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})},N=Math.floor,p=N;var s=function(r){return p(r)===r&&r>=0},b=N;var w=function(r){return b(r)===r};var h=function(r){return r!=r},A=Number.POSITIVE_INFINITY,_=Number.NEGATIVE_INFINITY,d=A,m=_;var U=function(r){return r===d||r===m};var g=function(r){return Math.abs(r)};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var I=function(){return j&&"symbol"==typeof Symbol.toStringTag},O=Object.prototype.toString,S=O;var E=function(r){return S.call(r)},F=Object.prototype.hasOwnProperty;var H=function(r,n){return null!=r&&F.call(r,n)},T="function"==typeof Symbol?Symbol.toStringTag:"",G=H,P=T,k=O;var M=E,x=function(r){var n,t,e;if(null==r)return k.call(r);t=r[P],n=G(r,P);try{r[P]=void 0}catch(n){return k.call(r)}return e=k.call(r),n?r[P]=t:delete r[P],e},L=I()?x:M,V=L,W="function"==typeof Uint32Array;var Y="function"==typeof Uint32Array?Uint32Array:null,q=function(r){return W&&r instanceof Uint32Array||"[object Uint32Array]"===V(r)},C=Y;var z=function(){var r,n;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,4294967296,4294967297]),r=q(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var B="function"==typeof Uint32Array?Uint32Array:void 0,D=function(){throw new Error("not implemented")},J=z()?B:D,K=L,Q="function"==typeof Float64Array;var R="function"==typeof Float64Array?Float64Array:null,X=function(r){return Q&&r instanceof Float64Array||"[object Float64Array]"===K(r)},Z=R;var $=function(){var r,n;if("function"!=typeof Z)return!1;try{n=new Z([1,3.14,-3.14,NaN]),r=X(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var rr="function"==typeof Float64Array?Float64Array:void 0,nr=function(){throw new Error("not implemented")},tr=$()?rr:nr,er=L,ur="function"==typeof Uint8Array;var fr="function"==typeof Uint8Array?Uint8Array:null,ir=function(r){return ur&&r instanceof Uint8Array||"[object Uint8Array]"===er(r)},or=fr;var ar=function(){var r,n;if("function"!=typeof or)return!1;try{n=new or(n=[1,3.14,-3.14,256,257]),r=ir(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var cr="function"==typeof Uint8Array?Uint8Array:void 0,vr=function(){throw new Error("not implemented")},lr=ar()?cr:vr,yr=L,Nr="function"==typeof Uint16Array;var pr="function"==typeof Uint16Array?Uint16Array:null,sr=function(r){return Nr&&r instanceof Uint16Array||"[object Uint16Array]"===yr(r)},br=pr;var wr=function(){var r,n;if("function"!=typeof br)return!1;try{n=new br(n=[1,3.14,-3.14,65536,65537]),r=sr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var hr,Ar="function"==typeof Uint16Array?Uint16Array:void 0,_r=function(){throw new Error("not implemented")},dr={uint16:wr()?Ar:_r,uint8:lr};(hr=new dr.uint16(1))[0]=4660;var mr=52===new dr.uint8(hr.buffer)[0],Ur=J,gr=!0===mr?1:0,jr=new tr(1),Ir=new Ur(jr.buffer);var Or=function(r){return jr[0]=r,Ir[gr]},Sr=J,Er=!0===mr?1:0,Fr=new tr(1),Hr=new Sr(Fr.buffer);var Tr=function(r,n){return Fr[0]=r,Hr[Er]=n>>>0,Fr[0]},Gr=Tr;var Pr=Or,kr=Gr,Mr=h,xr=_,Lr=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Vr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Wr=.6931471803691238,Yr=1.9082149292705877e-10;var qr=function(r){var n,t,e,u,f,i,o,a,c,v,l;return 0===r?xr:Mr(r)||r<0?NaN:(u=0,(t=Pr(r))<1048576&&(u-=54,t=Pr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(o=(t&=1048575)+614244&1048576|0)>>20|0,i=(r=kr(r,t|1072693248^o))-1,(1048575&2+t)<3?0===i?0===u?0:u*Wr+u*Yr:(f=i*i*(.5-.3333333333333333*i),0===u?i-f:u*Wr-(f-u*Yr-i)):(o=t-398458|0,a=440401-t|0,e=(v=(l=(c=i/(2+i))*c)*l)*Lr(v),f=l*Vr(v)+e,(o|=a)>0?(n=.5*i*i,0===u?i-(n-c*(n+f)):u*Wr-(n-(c*(n+f)+u*Yr)-i)):0===u?i-c*(i-f):u*Wr-(c*(i-f)-u*Yr-i))))},Cr=Math.ceil,zr=N,Br=Cr;var Dr=function(r){return r<0?Br(r):zr(r)};var Jr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},Kr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var Qr=function(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*Jr(f),e+=u*u*Kr(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))},Rr=-.16666666666666632;var Xr=function(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(Rr+u*t):r-(u*(.5*n-e*t)-n-e*Rr)},Zr=J,$r=!0===mr?0:1,rn=new tr(1),nn=new Zr(rn.buffer);var tn,en,un=function(r){return rn[0]=r,nn[$r]};!0===mr?(tn=1,en=0):(tn=0,en=1);var fn=J,on={HIGH:tn,LOW:en},an=new tr(1),cn=new fn(an.buffer),vn=on.HIGH,ln=on.LOW;var yn,Nn,pn=function(r,n){return cn[vn]=r,cn[ln]=n,an[0]},sn=pn;!0===mr?(yn=1,Nn=0):(yn=0,Nn=1);var bn=J,wn={HIGH:yn,LOW:Nn},hn=new tr(1),An=new bn(hn.buffer),_n=wn.HIGH,dn=wn.LOW;var mn=function(r,n){return hn[0]=n,r[0]=An[_n],r[1]=An[dn],r};var Un=function(r,n){return 1===arguments.length?mn([0,0],r):mn(r,n)},gn=Un,jn=Or,In=sn,On=[0,0];var Sn=function(r,n){var t,e;return gn(On,r),t=On[0],t&=2147483647,e=jn(n),In(t|=e&=2147483648,On[1])},En=U,Fn=h,Hn=g;var Tn=function(r,n){return Fn(n)||En(n)?(r[0]=n,r[1]=0,r):0!==n&&Hn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Gn=Or;var Pn=function(r){var n=Gn(r);return(n=(2146435072&n)>>>20)-1023|0},kn=A,Mn=_,xn=h,Ln=U,Vn=Sn,Wn=function(r,n){return 1===arguments.length?Tn([0,0],r):Tn(r,n)},Yn=Pn,qn=Un,Cn=sn,zn=[0,0],Bn=[0,0];var Dn=function(r,n){var t,e;return 0===n||0===r||xn(r)||Ln(r)?r:(Wn(zn,r),n+=zn[1],(n+=Yn(r=zn[0]))<-1074?Vn(0,r):n>1023?r<0?Mn:kn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,qn(Bn,r),t=Bn[0],t&=2148532223,e*Cn(t|=n+1023<<20,Bn[1])))},Jn=Dn;var Kn=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var Qn=N,Rn=Jn,Xn=function(r){return Kn(0,r)},Zn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],$n=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],rt=5.960464477539063e-8,nt=Xn(20),tt=Xn(20),et=Xn(20),ut=Xn(20);function ft(r,n,t,e,u,f,i,o,a){var c,v,l,y,N,p,s,b,w;for(y=f,w=e[t],b=t,N=0;b>0;N++)v=rt*w|0,ut[N]=w-16777216*v|0,w=e[b-1]+v,b-=1;if(w=Rn(w,u),w-=8*Qn(.125*w),w-=s=0|w,l=0,u>0?(s+=N=ut[t-1]>>24-u,ut[t-1]-=N<<24-u,l=ut[t-1]>>23-u):0===u?l=ut[t-1]>>23:w>=.5&&(l=2),l>0){for(s+=1,c=0,N=0;N<t;N++)b=ut[N],0===c?0!==b&&(c=1,ut[N]=16777216-b):ut[N]=16777215-b;if(u>0)switch(u){case 1:ut[t-1]&=8388607;break;case 2:ut[t-1]&=4194303}2===l&&(w=1-w,0!==c&&(w-=Rn(1,u)))}if(0===w){for(b=0,N=t-1;N>=f;N--)b|=ut[N];if(0===b){for(p=1;0===ut[f-p];p++);for(N=t+1;N<=t+p;N++){for(a[o+N]=Zn[i+N],v=0,b=0;b<=o;b++)v+=r[b]*a[o+(N-b)];e[N]=v}return ft(r,n,t+=p,e,u,f,i,o,a)}}if(0===w)for(t-=1,u-=24;0===ut[t];)t-=1,u-=24;else(w=Rn(w,-u))>=16777216?(v=rt*w|0,ut[t]=w-16777216*v|0,u+=24,ut[t+=1]=v):ut[t]=0|w;for(v=Rn(1,u),N=t;N>=0;N--)e[N]=v*ut[N],v*=rt;for(N=t;N>=0;N--){for(v=0,p=0;p<=y&&p<=t-N;p++)v+=$n[p]*e[N+p];et[t-N]=v}for(v=0,N=t;N>=0;N--)v+=et[N];for(n[0]=0===l?v:-v,v=et[0]-v,N=1;N<=t;N++)v+=et[N];return n[1]=0===l?v:-v,7&s}var it=function(r,n,t,e){var u,f,i,o,a,c,v;for(4,(f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),v=i+4,a=0;a<=v;a++)nt[a]=c<0?0:Zn[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*nt[i+(a-c)];tt[a]=u}return 4,ft(r,n,4,tt,o,4,f,i,nt)},ot=Math.round,at=Or;var ct=Or,vt=un,lt=sn,yt=it,Nt=function(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=ot(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(at(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(at(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e},pt=1.5707963267341256,st=6077100506506192e-26,bt=2*st,wt=4*st,ht=[0,0,0],At=[0,0];var _t=function(r,n){var t,e,u,f,i,o,a;if((u=2147483647&ct(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Nt(r,u,n):u<=1073928572?r>0?(a=r-pt,n[0]=a-st,n[1]=a-n[0]-st,1):(a=r+pt,n[0]=a+st,n[1]=a-n[0]+st,-1):r>0?(a=r-2*pt,n[0]=a-bt,n[1]=a-n[0]-bt,2):(a=r+2*pt,n[0]=a+bt,n[1]=a-n[0]+bt,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Nt(r,u,n):r>0?(a=r-3*pt,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*pt,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?Nt(r,u,n):r>0?(a=r-4*pt,n[0]=a-wt,n[1]=a-n[0]-wt,4):(a=r+4*pt,n[0]=a+wt,n[1]=a-n[0]+wt,-4);if(u<1094263291)return Nt(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=vt(r),a=lt(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)ht[i]=0|a,a=16777216*(a-ht[i]);for(ht[2]=a,f=3;0===ht[f-1];)f-=1;return o=yt(ht,At,e,f),r<0?(n[0]=-At[0],n[1]=-At[1],-o):(n[0]=At[0],n[1]=At[1],o)},dt=Or,mt=Qr,Ut=Xr,gt=_t,jt=[0,0];var It=Or,Ot=Qr,St=Xr,Et=_t,Ft=[0,0];var Ht=function(r){var n;if(n=It(r),(n&=2147483647)<=1072243195)return n<1045430272?r:St(r,0);if(n>=2146435072)return NaN;switch(3&Et(r,Ft)){case 0:return St(Ft[0],Ft[1]);case 1:return Ot(Ft[0],Ft[1]);case 2:return-St(Ft[0],Ft[1]);default:return-Ot(Ft[0],Ft[1])}},Tt=3.141592653589793,Gt=h,Pt=U,kt=function(r){var n;if(n=dt(r),(n&=2147483647)<=1072243195)return n<1044381696?1:mt(r,0);if(n>=2146435072)return NaN;switch(3&gt(r,jt)){case 0:return mt(jt[0],jt[1]);case 1:return-Ut(jt[0],jt[1]);case 2:return-mt(jt[0],jt[1]);default:return Ut(jt[0],jt[1])}},Mt=Ht,xt=g,Lt=Sn,Vt=Tt;var Wt=h,Yt=U,qt=g,Ct=qr,zt=Dr,Bt=function(r){var n,t;return Gt(r)||Pt(r)?NaN:0===(n=xt(t=r%2))||1===n?Lt(0,t):n<.25?Mt(Vt*t):n<.75?Lt(kt(Vt*(n=.5-n)),t):n<1.25?(t=Lt(1,t)-t,Mt(Vt*t)):n<1.75?-Lt(kt(Vt*(n-=1.5)),t):(t-=Lt(2,t),Mt(Vt*t))},Dt=A,Jt=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},Kt=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},Qt=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},Rt=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},Xt=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},Zt=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},$t=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},re=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},ne=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},te=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},ee=1.4616321449683622,ue=1.4616321449683622;var fe=function(r){var n,t,e,u,f,i,o,a;if(Wt(r)||Yt(r))return r;if(0===r)return Dt;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Ct(r);if(n){if(r>=4503599627370496)return Dt;if(0===(u=Bt(r)))return Dt;t=Ct(3.141592653589793/qt(u*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(a=-Ct(r),r>=ee-1+.27?(i=1-r,e=0):r>=ee-1-.27?(i=r-(ue-1),e=1):(i=r,e=2)):(a=0,r>=ee+.27?(i=2-r,e=0):r>=ee-.27?(i=r-ue,e=1):(i=r-1,e=2)),e){case 0:a+=i*(.07721566490153287+(o=i*i)*Jt(o))+o*(.3224670334241136+o*Kt(o))-.5*i;break;case 1:a+=-.12148629053584961+((o=i*i)*(.48383612272381005+(f=o*i)*Xt(f))-(-3638676997039505e-33-f*(f*Zt(f)-.1475877229945939+i*(.06462494023913339+f*$t(f)))));break;case 2:a+=-.5*i+i*(i*re(i)-.07721566490153287)/(1+i*ne(i))}else if(r<8)switch(a=.5*(i=r-(e=zt(r)))+i*(i*Rt(i)-.07721566490153287)/(1+i*Qt(i)),o=1,e){case 7:o*=i+6;case 6:o*=i+5;case 5:o*=i+4;case 4:o*=i+3;case 3:a+=Ct(o*=i+2)}else a=r<0x400000000000000?(r-.5)*((u=Ct(r))-1)+(f=.4189385332046727+(o=1/r)*te(i=o*o)):r*(Ct(r)-1);return n&&(a=t-a),a};var ie=h,oe=Or,ae=Gr,ce=A,ve=_,le=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},ye=.6931471803691238,Ne=1.9082149292705877e-10;var pe=function(r){var n,t,e,u,f,i,o,a,c,v;if(r<-1||ie(r))return NaN;if(-1===r)return ve;if(r===ce)return r;if(0===r)return r;if(v=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,u=r,t=1)}return 0!==v&&(e<9007199254740992?(f=(v=((t=oe(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),f/=c):(v=((t=oe(c=r))>>20)-1023,f=0),(t&=1048575)<434334?c=ae(c,1072693248|t):(v+=1,c=ae(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?v*ye+(f+=v*Ne):v*ye-((a=n*(1-.6666666666666666*u))-(v*Ne+f)-u):(a=(o=(i=u/(2+u))*i)*le(o),0===v?u-(n-i*(n+a)):v*ye-(n-(i*(n+a)+(v*Ne+f))-u))},se=_;var be=function(r){return 0===r&&1/r===se},we=w;var he=function(r){return we(r/2)};var Ae=function(r){return he(r>0?r-1:r+1)},_e=Math.sqrt,de=J,me=!0===mr?0:1,Ue=new tr(1),ge=new de(Ue.buffer);var je=function(r,n){return Ue[0]=r,ge[me]=n>>>0,Ue[0]};var Ie=function(r){return 0|r},Oe=Ae,Se=Sn,Ee=_,Fe=A;var He=Or;var Te=g,Ge=A;var Pe=Or,ke=je,Me=Gr,xe=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Le=[1,1.5],Ve=[0,.5849624872207642],We=[0,1.350039202129749e-8];var Ye=je,qe=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Ce=Or,ze=Gr,Be=je,De=Ie,Je=Jn,Ke=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Qe=h,Re=Ae,Xe=U,Ze=w,$e=_e,ru=g,nu=Un,tu=je,eu=Ie,uu=_,fu=A,iu=function(r,n){return n===Ee?Fe:n===Fe?0:n>0?Oe(n)?r:0:Oe(n)?Se(Fe,r):Fe},ou=function(r,n){return(2147483647&He(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},au=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Te(r)<1==(n===Ge)?0:Ge},cu=function(r,n,t){var e,u,f,i,o,a,c,v,l,y,N,p,s,b,w,h,A,_,d,m;return _=0,t<1048576&&(_-=53,t=Pe(n*=9007199254740992)),_+=(t>>20)-1023|0,t=1072693248|(d=1048575&t|0),d<=235662?m=0:d<767610?m=1:(m=0,_+=1,t-=1048576),e=524288+(t>>1|536870912),o=(A=1/((n=Me(n,t))+(c=Le[m])))*((h=n-c)-(i=ke(u=h*A,0))*(a=Me(0,e+=m<<18))-i*(n-(a-c))),w=(f=u*u)*f*xe(f),a=ke(a=3+(f=i*i)+(w+=o*(i+u)),0),s=(N=-7.028461650952758e-9*(l=ke(l=(h=i*a)+(A=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(A-(l-h))+We[m])-((p=ke(p=(y=.9617967009544373*l)+N+(v=Ve[m])+(b=_),0))-b-v-y),r[0]=p,r[1]=s,r},vu=function(r,n){var t,e,u,f,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*qe(u)))-((e=Ye(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r},lu=function(r,n,t){var e,u,f,i,o,a,c,v,l,y;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(e=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=f=ze(0,e)),a=(o=.6931471805599453*(t-((f=Be(f=t+n,0))-n))+-1.904654299957768e-9*f)-((c=(i=.6931471824645996*f)+o)-i),u=c-(f=c*c)*Ke(f),r=Ce(c=1-(c*u/(u-2)-(a+c*a)-c)),r=De(r),c=(r+=v<<20>>>0)>>20<=0?Je(c,v):ze(c,r)},yu=1e300,Nu=1e-300,pu=[0,0],su=[0,0];var bu=function r(n,t){var e,u,f,i,o,a,c,v,l,y,N,p,s,b;if(Qe(n)||Qe(t))return NaN;if(nu(pu,t),o=pu[0],0===pu[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return $e(n);if(-.5===t)return 1/$e(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Xe(t))return au(n,t)}if(nu(pu,n),i=pu[0],0===pu[1]){if(0===i)return iu(n,t);if(1===n)return 1;if(-1===n&&Re(t))return-1;if(Xe(n))return n===uu?r(-0,-t):t<0?0:fu}if(n<0&&!1===Ze(t))return(n-n)/(n-n);if(f=ru(n),e=2147483647&i|0,u=2147483647&o|0,c=o>>>31|0,a=(a=i>>>31|0)&&Re(t)?-1:1,u>1105199104){if(u>1139802112)return ou(n,t);if(e<1072693247)return 1===c?a*yu*yu:a*Nu*Nu;if(e>1072693248)return 0===c?a*yu*yu:a*Nu*Nu;N=vu(su,f)}else N=cu(su,f,e);if(y=(t-(v=tu(t,0)))*N[0]+t*N[1],l=v*N[0],nu(pu,p=y+l),s=eu(pu[0]),b=eu(pu[1]),s>=1083179008){if(0!=(s-1083179008|b))return a*yu*yu;if(y+8008566259537294e-32>p-l)return a*yu*yu}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|b))return a*Nu*Nu;if(y<=p-l)return a*Nu*Nu}return a*(p=lu(s,l,y))};var wu=Jn,hu=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Au=h,_u=Dr,du=_,mu=A,Uu=function(r,n,t){var e,u,f;return f=(e=r-n)-(u=e*e)*hu(u),wu(1-(n-e*f/(2-f)-r),t)};var gu=bu,ju=function(r){var n;return Au(r)||r===mu?r:r===du?0:r>709.782712893384?mu:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=_u(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),Uu(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},Iu=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))};var Ou=h,Su=w,Eu=be,Fu=g,Hu=N,Tu=Ht,Gu=A,Pu=_,ku=Tt,Mu=function(r){var n,t,e;return n=1+(n=1/r)*Iu(n),t=ju(r),2.5066282746310007*(t=r>143.01608?(e=gu(r,.5*r-.25))*(e/t):gu(r,r-.5)/t)*n},xu=function(r,n){return n/((1+.5772156649015329*r)*r)},Lu=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)};var Vu=A;var Wu=function(r){return 0===r&&1/r===Vu},Yu=h,qu=_,Cu=A;var zu=be,Bu=h,Du=_,Ju=A;var Ku=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],Qu=Ku.length;var Ru=bu,Xu=function(r){var n,t,e,u,f;if(r<-1.1||r>1.1)return NaN;for(e=0,u=0,n=2*r,f=0;f<Qu;f++)t=e,u=n*(e=u)-t+Ku[f];return.5*(u-t)};var Zu=fe,$u=pe,rf=function(r){var n,t,e,u;if(Su(r)&&r<0||r===Pu||Ou(r))return NaN;if(0===r)return Eu(r)?Pu:Gu;if(r>171.61447887182297)return Gu;if(r<-170.5674972726612)return 0;if((t=Fu(r))>33)return r>=0?Mu(r):(n=0==(1&(e=Hu(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*Tu(ku*u),n*ku/(Fu(u)*Mu(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return xu(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return xu(r,u);u/=r,r+=1}return 2===r?u:u*Lu(r-=2)},nf=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return Yu(r)||Yu(n)?NaN:r===Cu||n===Cu?Cu:r===n&&0===r?Wu(r)?r:n:r>n?r:n;for(e=qu,f=0;f<t;f++){if(Yu(u=arguments[f])||u===Cu)return u;(u>e||u===e&&0===u&&Wu(u))&&(e=u)}return e},tf=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return Bu(r)||Bu(n)?NaN:r===Du||n===Du?Du:r===n&&0===r?zu(r)?r:n:r<n?r:n;for(e=Ju,f=0;f<t;f++){if(Bu(u=arguments[f])||u===Du)return u;(u<e||u===e&&0===u&&zu(u))&&(e=u)}return e},ef=qr,uf=_,ff=A,of=function(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?Xu(2*Ru(10/r,2)-1)/r:1/(12*r)};var af=w,cf=h,vf=function(r,n){var t,e,u;return e=tf(r,n),u=nf(r,n),e<0?NaN:0===e?ff:u===ff?uf:e>=10?(t=of(e)+of(u)-of(e+u),-.5*ef(u)+.9189385332046728+t+(e-.5)*ef(e/(e+u))+u*$u(-e/(e+u))):u>=10?(t=of(u)-of(e+u),Zu(e)+t+e-e*ef(e+u)+(u-.5)*$u(-e/(e+u))):ef(rf(e)*(rf(u)/rf(e+u)))},lf=g,yf=qr,Nf=_;var pf=function r(n,t){return cf(n)||cf(t)?NaN:af(n)&&af(t)?n<0?r(-n+t-1,t):t<0?Nf:0===t?0:1===t?yf(lf(n)):n<t?Nf:n-t<2?r(n,n-t):-yf(n+1)-vf(n-t+1,t+1):NaN},sf=pf;function bf(r,n,t){var e;return h(r)||h(n)||h(t)||t<0||t>1||!s(n)||n===A?NaN:s(r)?r>n?_:0===t?0===r?0:_:1===t?r===n?0:_:(e=sf(n,r),e+=r*qr(t)+(n-r)*pe(-t)):_}var wf=function(r){return function(){return r}},hf=h,Af=_;var _f=wf,df=h,mf=_;var Uf=function(r){return df(r)?_f(NaN):function(n){if(df(n))return NaN;return n===r?0:mf}};function gf(r,n){return h(r)||h(n)||!s(r)||r===A||n<0||n>1?wf(NaN):0===n||0===r?Uf(0):1===n?Uf(r):function(t){var e;if(h(t))return NaN;if(s(t))return t>r?_:(e=sf(r,t),e+=t*qr(n)+(r-t)*pe(-n));return _}}y((function(r,n){return hf(r)||hf(n)?NaN:r===n?0:Af}),"factory",Uf),y(bf,"factory",gf);export{bf as default,gf as factory};
//# sourceMappingURL=mod.js.map
