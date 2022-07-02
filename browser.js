// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r,n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return n({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,u=Object.prototype,f=u.toString,i=u.__defineGetter__,o=u.__defineSetter__,c=u.__lookupGetter__,a=u.__lookupSetter__,l=e,y=function(r,n,t){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===f.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(r,n)||a.call(r,n)?(e=r.__proto__,r.__proto__=u,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,n,t.get),p&&o&&o.call(r,n,t.set),r},p=t()?l:y,v=function(r,n,t){p(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})},s=Math.floor,N=s,b=function(r){return N(r)===r&&r>=0},w=s,d=function(r){return w(r)===r},h=function(r){return r!=r},A=Number.POSITIVE_INFINITY,_=Number.NEGATIVE_INFINITY,m=A,g=_,U=function(r){return r===m||r===g},j=function(r){return Math.abs(r)},I="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),O=Object.prototype.toString,S=O,E=function(r){return S.call(r)},F=Object.prototype.hasOwnProperty,T=function(r,n){return null!=r&&F.call(r,n)},H="function"==typeof Symbol?Symbol.toStringTag:"",G=T,P=H,k=O,x=E,M=function(r){var n,t,e;if(null==r)return k.call(r);t=r[P],n=G(r,P);try{r[P]=void 0}catch(n){return k.call(r)}return e=k.call(r),n?r[P]=t:delete r[P],e},L=I&&"symbol"==typeof Symbol.toStringTag?M:x,V=L,W="function"==typeof Uint32Array,Y="function"==typeof Uint32Array?Uint32Array:null,q=function(r){return W&&r instanceof Uint32Array||"[object Uint32Array]"===V(r)},C=Y,z=function(){var r,n;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,4294967296,4294967297]),r=q(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},B="function"==typeof Uint32Array?Uint32Array:void 0,D=function(){throw new Error("not implemented")},J=z()?B:D,K=L,Q="function"==typeof Float64Array,R="function"==typeof Float64Array?Float64Array:null,X=function(r){return Q&&r instanceof Float64Array||"[object Float64Array]"===K(r)},Z=R,$=function(){var r,n;if("function"!=typeof Z)return!1;try{n=new Z([1,3.14,-3.14,NaN]),r=X(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r},rr="function"==typeof Float64Array?Float64Array:void 0,nr=function(){throw new Error("not implemented")},tr=$()?rr:nr,er=L,ur="function"==typeof Uint8Array,fr="function"==typeof Uint8Array?Uint8Array:null,ir=function(r){return ur&&r instanceof Uint8Array||"[object Uint8Array]"===er(r)},or=fr,cr=function(){var r,n;if("function"!=typeof or)return!1;try{n=new or(n=[1,3.14,-3.14,256,257]),r=ir(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},ar="function"==typeof Uint8Array?Uint8Array:void 0,lr=function(){throw new Error("not implemented")},yr=cr()?ar:lr,pr=L,vr="function"==typeof Uint16Array,sr="function"==typeof Uint16Array?Uint16Array:null,Nr=function(r){return vr&&r instanceof Uint16Array||"[object Uint16Array]"===pr(r)},br=sr,wr=function(){var r,n;if("function"!=typeof br)return!1;try{n=new br(n=[1,3.14,-3.14,65536,65537]),r=Nr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},dr="function"==typeof Uint16Array?Uint16Array:void 0,hr=function(){throw new Error("not implemented")},Ar={uint16:wr()?dr:hr,uint8:yr};(r=new Ar.uint16(1))[0]=4660;var _r,mr,gr=52===new Ar.uint8(r.buffer)[0],Ur=J,jr=!0===gr?1:0,Ir=new tr(1),Or=new Ur(Ir.buffer),Sr=function(r){return Ir[0]=r,Or[jr]},Er=J,Fr=!0===gr?1:0,Tr=new tr(1),Hr=new Er(Tr.buffer),Gr=function(r,n){return Tr[0]=r,Hr[Fr]=n>>>0,Tr[0]},Pr=Gr,kr=Sr,xr=Pr,Mr=h,Lr=_,Vr=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Wr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Yr=.6931471803691238,qr=1.9082149292705877e-10,Cr=1048575,zr=function(r){var n,t,e,u,f,i,o,c,a,l,y;return 0===r?Lr:Mr(r)||r<0?NaN:(u=0,(t=kr(r))<1048576&&(u-=54,t=kr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(o=614244+(t&=Cr)&1048576|0)>>20|0,i=(r=xr(r,t|1072693248^o))-1,(Cr&2+t)<3?0===i?0===u?0:u*Yr+u*qr:(f=i*i*(.5-.3333333333333333*i),0===u?i-f:u*Yr-(f-u*qr-i)):(o=t-398458|0,c=440401-t|0,e=(l=(y=(a=i/(2+i))*a)*y)*Vr(l),f=y*Wr(l)+e,(o|=c)>0?(n=.5*i*i,0===u?i-(n-a*(n+f)):u*Yr-(n-(a*(n+f)+u*qr)-i)):0===u?i-a*(i-f):u*Yr-(a*(i-f)-u*qr-i))))},Br=Math.ceil,Dr=s,Jr=Br,Kr=function(r){return r<0?Jr(r):Dr(r)},Qr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},Rr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7},Xr=function(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*Qr(f),e+=u*u*Rr(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))},Zr=-.16666666666666632,$r=function(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(Zr+u*t):r-(u*(.5*n-e*t)-n-e*Zr)},rn=J,nn=!0===gr?0:1,tn=new tr(1),en=new rn(tn.buffer),un=function(r){return tn[0]=r,en[nn]};!0===gr?(_r=1,mr=0):(_r=0,mr=1);var fn,on,cn=J,an={HIGH:_r,LOW:mr},ln=new tr(1),yn=new cn(ln.buffer),pn=an.HIGH,vn=an.LOW,sn=function(r,n){return yn[pn]=r,yn[vn]=n,ln[0]},Nn=sn;!0===gr?(fn=1,on=0):(fn=0,on=1);var bn=J,wn={HIGH:fn,LOW:on},dn=new tr(1),hn=new bn(dn.buffer),An=wn.HIGH,_n=wn.LOW,mn=function(r,n){return dn[0]=n,r[0]=hn[An],r[1]=hn[_n],r},gn=function(r,n){return 1===arguments.length?mn([0,0],r):mn(r,n)},Un=gn,jn=Un,In=Sr,On=Nn,Sn=[0,0],En=function(r,n){var t,e;return jn(Sn,r),t=Sn[0],t&=2147483647,e=In(n),On(t|=e&=2147483648,Sn[1])},Fn=U,Tn=h,Hn=j,Gn=function(r,n){return Tn(n)||Fn(n)?(r[0]=n,r[1]=0,r):0!==n&&Hn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)},Pn=function(r,n){return 1===arguments.length?Gn([0,0],r):Gn(r,n)},kn=Sr,xn=function(r){var n=kn(r);return(n=(2146435072&n)>>>20)-1023|0},Mn=A,Ln=_,Vn=h,Wn=U,Yn=En,qn=Pn,Cn=xn,zn=Un,Bn=Nn,Dn=[0,0],Jn=[0,0],Kn=function(r,n){var t,e;return 0===n||0===r||Vn(r)||Wn(r)?r:(qn(Dn,r),n+=Dn[1],(n+=Cn(r=Dn[0]))<-1074?Yn(0,r):n>1023?r<0?Ln:Mn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,zn(Jn,r),t=Jn[0],t&=2148532223,e*Bn(t|=n+1023<<20,Jn[1])))},Qn=Kn,Rn=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t},Xn=s,Zn=Qn,$n=function(r){return Rn(0,r)},rt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],nt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],tt=16777216,et=5.960464477539063e-8,ut=$n(20),ft=$n(20),it=$n(20),ot=$n(20);function ct(r,n,t,e,u,f,i,o,c){var a,l,y,p,v,s,N,b,w;for(p=f,w=e[t],b=t,v=0;b>0;v++)l=et*w|0,ot[v]=w-tt*l|0,w=e[b-1]+l,b-=1;if(w=Zn(w,u),w-=8*Xn(.125*w),w-=N=0|w,y=0,u>0?(N+=v=ot[t-1]>>24-u,ot[t-1]-=v<<24-u,y=ot[t-1]>>23-u):0===u?y=ot[t-1]>>23:w>=.5&&(y=2),y>0){for(N+=1,a=0,v=0;v<t;v++)b=ot[v],0===a?0!==b&&(a=1,ot[v]=16777216-b):ot[v]=16777215-b;if(u>0)switch(u){case 1:ot[t-1]&=8388607;break;case 2:ot[t-1]&=4194303}2===y&&(w=1-w,0!==a&&(w-=Zn(1,u)))}if(0===w){for(b=0,v=t-1;v>=f;v--)b|=ot[v];if(0===b){for(s=1;0===ot[f-s];s++);for(v=t+1;v<=t+s;v++){for(c[o+v]=rt[i+v],l=0,b=0;b<=o;b++)l+=r[b]*c[o+(v-b)];e[v]=l}return ct(r,n,t+=s,e,u,f,i,o,c)}}if(0===w)for(t-=1,u-=24;0===ot[t];)t-=1,u-=24;else(w=Zn(w,-u))>=tt?(l=et*w|0,ot[t]=w-tt*l|0,u+=24,ot[t+=1]=l):ot[t]=0|w;for(l=Zn(1,u),v=t;v>=0;v--)e[v]=l*ot[v],l*=et;for(v=t;v>=0;v--){for(l=0,s=0;s<=p&&s<=t-v;s++)l+=nt[s]*e[v+s];it[t-v]=l}for(l=0,v=t;v>=0;v--)l+=it[v];for(n[0]=0===y?l:-l,l=it[0]-l,v=1;v<=t;v++)l+=it[v];return n[1]=0===y?l:-l,7&N}var at=function(r,n,t,e){var u,f,i,o,c,a,l;for((f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),a=f-(i=e-1),l=i+4,c=0;c<=l;c++)ut[c]=a<0?0:rt[a],a+=1;for(c=0;c<=4;c++){for(u=0,a=0;a<=i;a++)u+=r[a]*ut[i+(c-a)];ft[c]=u}return ct(r,n,4,ft,o,4,f,i,ut)},lt=Math.round,yt=Sr,pt=Sr,vt=un,st=Nn,Nt=at,bt=function(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=lt(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(yt(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(yt(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e},wt=1.5707963267341256,dt=6077100506506192e-26,ht=2*dt,At=3*dt,_t=4*dt,mt=[0,0,0],gt=[0,0],Ut=function(r,n){var t,e,u,f,i,o,c;if((u=2147483647&pt(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?bt(r,u,n):u<=1073928572?r>0?(c=r-wt,n[0]=c-dt,n[1]=c-n[0]-dt,1):(c=r+wt,n[0]=c+dt,n[1]=c-n[0]+dt,-1):r>0?(c=r-2*wt,n[0]=c-ht,n[1]=c-n[0]-ht,2):(c=r+2*wt,n[0]=c+ht,n[1]=c-n[0]+ht,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?bt(r,u,n):r>0?(c=r-3*wt,n[0]=c-At,n[1]=c-n[0]-At,3):(c=r+3*wt,n[0]=c+At,n[1]=c-n[0]+At,-3):1075388923===u?bt(r,u,n):r>0?(c=r-4*wt,n[0]=c-_t,n[1]=c-n[0]-_t,4):(c=r+4*wt,n[0]=c+_t,n[1]=c-n[0]+_t,-4);if(u<1094263291)return bt(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=vt(r),c=st(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)mt[i]=0|c,c=16777216*(c-mt[i]);for(mt[2]=c,f=3;0===mt[f-1];)f-=1;return o=Nt(mt,gt,e,f),r<0?(n[0]=-gt[0],n[1]=-gt[1],-o):(n[0]=gt[0],n[1]=gt[1],o)},jt=Sr,It=Xr,Ot=$r,St=Ut,Et=[0,0],Ft=Sr,Tt=Xr,Ht=$r,Gt=Ut,Pt=[0,0],kt=function(r){var n;if(n=Ft(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Ht(r,0);if(n>=2146435072)return NaN;switch(3&Gt(r,Pt)){case 0:return Ht(Pt[0],Pt[1]);case 1:return Tt(Pt[0],Pt[1]);case 2:return-Ht(Pt[0],Pt[1]);default:return-Tt(Pt[0],Pt[1])}},xt=3.141592653589793,Mt=h,Lt=U,Vt=function(r){var n;if(n=jt(r),(n&=2147483647)<=1072243195)return n<1044381696?1:It(r,0);if(n>=2146435072)return NaN;switch(3&St(r,Et)){case 0:return It(Et[0],Et[1]);case 1:return-Ot(Et[0],Et[1]);case 2:return-It(Et[0],Et[1]);default:return Ot(Et[0],Et[1])}},Wt=kt,Yt=j,qt=En,Ct=xt,zt=h,Bt=U,Dt=j,Jt=zr,Kt=Kr,Qt=function(r){var n,t;return Mt(r)||Lt(r)?NaN:0===(n=Yt(t=r%2))||1===n?qt(0,t):n<.25?Wt(Ct*t):n<.75?qt(Vt(Ct*(n=.5-n)),t):n<1.25?(t=qt(1,t)-t,Wt(Ct*t)):n<1.75?-qt(Vt(Ct*(n-=1.5)),t):(t-=qt(2,t),Wt(Ct*t))},Rt=A,Xt=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},Zt=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},$t=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},re=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},ne=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},te=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},ee=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},ue=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},fe=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},ie=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},oe=1.4616321449683622,ce=1.4616321449683622,ae=function(r){var n,t,e,u,f,i,o,c;if(zt(r)||Bt(r))return r;if(0===r)return Rt;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Jt(r);if(n){if(r>=4503599627370496)return Rt;if(0===(u=Qt(r)))return Rt;t=Jt(3.141592653589793/Dt(u*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(c=-Jt(r),r>=oe-1+.27?(i=1-r,e=0):r>=oe-1-.27?(i=r-(ce-1),e=1):(i=r,e=2)):(c=0,r>=oe+.27?(i=2-r,e=0):r>=oe-.27?(i=r-ce,e=1):(i=r-1,e=2)),e){case 0:c+=i*(.07721566490153287+(o=i*i)*Xt(o))+o*(.3224670334241136+o*Zt(o))-.5*i;break;case 1:c+=(o=i*i)*(.48383612272381005+(f=o*i)*ne(f))-(-3638676997039505e-33-f*(f*te(f)-.1475877229945939+i*(.06462494023913339+f*ee(f))))-.12148629053584961;break;case 2:c+=-.5*i+i*(i*ue(i)-.07721566490153287)/(1+i*fe(i))}else if(r<8)switch(c=.5*(i=r-(e=Kt(r)))+i*(i*re(i)-.07721566490153287)/(1+i*$t(i)),o=1,e){case 7:o*=i+6;case 6:o*=i+5;case 5:o*=i+4;case 4:o*=i+3;case 3:c+=Jt(o*=i+2)}else c=r<0x400000000000000?(r-.5)*((u=Jt(r))-1)+(f=.4189385332046727+(o=1/r)*ie(i=o*o)):r*(Jt(r)-1);return n&&(c=t-c),c},le=h,ye=Sr,pe=Pr,ve=A,se=_,Ne=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},be=.6931471803691238,we=1.9082149292705877e-10,de=function(r){var n,t,e,u,f,i,o,c,a,l;if(r<-1||le(r))return NaN;if(-1===r)return se;if(r===ve)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(f=(l=((t=ye(a=1+r))>>20)-1023)>0?1-(a-r):r-(a-1),f/=a):(l=((t=ye(a=r))>>20)-1023,f=0),(t&=1048575)<434334?a=pe(a,1072693248|t):(l+=1,a=pe(a,1071644672|t),t=1048576-t>>2),u=a-1),n=.5*u*u,0===t?0===u?l*be+(f+=l*we):l*be-((c=n*(1-.6666666666666666*u))-(l*we+f)-u):(c=(o=(i=u/(2+u))*i)*Ne(o),0===l?u-(n-i*(n+c)):l*be-(n-(i*(n+c)+(l*we+f))-u))},he=_,Ae=function(r){return 0===r&&1/r===he},_e=d,me=function(r){return _e(r/2)},ge=function(r){return me(r>0?r-1:r+1)},Ue=Math.sqrt,je=J,Ie=!0===gr?0:1,Oe=new tr(1),Se=new je(Oe.buffer),Ee=function(r,n){return Oe[0]=r,Se[Ie]=n>>>0,Oe[0]},Fe=function(r){return 0|r},Te=ge,He=En,Ge=_,Pe=A,ke=Sr,xe=j,Me=A,Le=Sr,Ve=Ee,We=Pr,Ye=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},qe=1048576,Ce=[1,1.5],ze=[0,.5849624872207642],Be=[0,1.350039202129749e-8],De=Ee,Je=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)},Ke=Sr,Qe=Pr,Re=Ee,Xe=Fe,Ze=Qn,$e=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},ru=2147483647,nu=1048575,tu=1048576,eu=h,uu=ge,fu=U,iu=d,ou=Ue,cu=j,au=Un,lu=Ee,yu=Fe,pu=_,vu=A,su=function(r,n){return n===Ge?Pe:n===Pe?0:n>0?Te(n)?r:0:Te(n)?He(Pe,r):Pe},Nu=function(r,n){return(2147483647&ke(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},bu=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:xe(r)<1==(n===Me)?0:Me},wu=function(r,n,t){var e,u,f,i,o,c,a,l,y,p,v,s,N,b,w,d,h,A,_,m;return A=0,t<qe&&(A-=53,t=Le(n*=9007199254740992)),A+=(t>>20)-1023|0,t=1072693248|(_=1048575&t|0),_<=235662?m=0:_<767610?m=1:(m=0,A+=1,t-=qe),e=524288+(t>>1|536870912),o=(h=1/((n=We(n,t))+(a=Ce[m])))*((d=n-a)-(i=Ve(u=d*h,0))*(c=We(0,e+=m<<18))-i*(n-(c-a))),w=(f=u*u)*f*Ye(f),c=Ve(c=3+(f=i*i)+(w+=o*(i+u)),0),N=(v=-7.028461650952758e-9*(y=Ve(y=(d=i*c)+(h=o*c+(w-(c-3-f))*u),0))+.9617966939259756*(h-(y-d))+Be[m])-((s=Ve(s=(p=.9617967009544373*y)+v+(l=ze[m])+(b=A),0))-b-l-p),r[0]=s,r[1]=N,r},du=function(r,n){var t,e,u,f,i;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*Je(u)*1.4426950408889634)-((e=De(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r},hu=function(r,n,t){var e,u,f,i,o,c,a,l,y;return y=((l=r&ru|0)>>20)-1023|0,a=0,l>1071644672&&(u=Qe(0,((a=r+(tu>>y+1)>>>0)&~(nu>>(y=((a&ru)>>20)-1023|0)))>>>0),a=(a&nu|tu)>>20-y>>>0,r<0&&(a=-a),n-=u),o=(i=.6931471805599453*(t-((u=Re(u=t+n,0))-n))+-1.904654299957768e-9*u)-((c=(f=.6931471824645996*u)+i)-f),e=c-(u=c*c)*$e(u),r=Ke(c=1-(c*e/(e-2)-(o+c*o)-c)),r=Xe(r),c=(r+=a<<20>>>0)>>20<=0?Ze(c,a):Qe(c,r)},Au=2147483647,_u=1083179008,mu=1e300,gu=1e-300,Uu=[0,0],ju=[0,0],Iu=function r(n,t){var e,u,f,i,o,c,a,l,y,p,v,s,N,b;if(eu(n)||eu(t))return NaN;if(au(Uu,t),o=Uu[0],0===Uu[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return ou(n);if(-.5===t)return 1/ou(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(fu(t))return bu(n,t)}if(au(Uu,n),i=Uu[0],0===Uu[1]){if(0===i)return su(n,t);if(1===n)return 1;if(-1===n&&uu(t))return-1;if(fu(n))return n===pu?r(-0,-t):t<0?0:vu}if(n<0&&!1===iu(t))return(n-n)/(n-n);if(f=cu(n),e=i&Au|0,u=o&Au|0,a=o>>>31|0,c=(c=i>>>31|0)&&uu(t)?-1:1,u>1105199104){if(u>1139802112)return Nu(n,t);if(e<1072693247)return 1===a?c*mu*mu:c*gu*gu;if(e>1072693248)return 0===a?c*mu*mu:c*gu*gu;v=du(ju,f)}else v=wu(ju,f,e);if(p=(t-(l=lu(t,0)))*v[0]+t*v[1],y=l*v[0],au(Uu,s=p+y),N=yu(Uu[0]),b=yu(Uu[1]),N>=_u){if(0!=(N-_u|b))return c*mu*mu;if(p+8008566259537294e-32>s-y)return c*mu*mu}else if((N&Au)>=1083231232){if(0!=(N-3230714880|b))return c*gu*gu;if(p<=s-y)return c*gu*gu}return c*(s=hu(N,y,p))},Ou=Qn,Su=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},Eu=h,Fu=Kr,Tu=_,Hu=A,Gu=function(r,n,t){var e,u,f;return f=(e=r-n)-(u=e*e)*Su(u),Ou(1-(n-e*f/(2-f)-r),t)},Pu=1.4426950408889634,ku=1/(1<<28),xu=Iu,Mu=function(r){var n;return Eu(r)||r===Hu?r:r===Tu?0:r>709.782712893384?Hu:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<ku?1+r:(n=Fu(r<0?Pu*r-.5:Pu*r+.5),Gu(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},Lu=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))},Vu=h,Wu=d,Yu=Ae,qu=j,Cu=s,zu=kt,Bu=A,Du=_,Ju=xt,Ku=function(r){var n,t,e;return n=1+(n=1/r)*Lu(n),t=Mu(r),2.5066282746310007*(t=r>143.01608?(e=xu(r,.5*r-.25))*(e/t):xu(r,r-.5)/t)*n},Qu=function(r,n){return n/((1+.5772156649015329*r)*r)},Ru=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)},Xu=A,Zu=function(r){return 0===r&&1/r===Xu},$u=h,rf=_,nf=A,tf=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return $u(r)||$u(n)?NaN:r===nf||n===nf?nf:r===n&&0===r?Zu(r)?r:n:r>n?r:n;for(e=rf,f=0;f<t;f++){if($u(u=arguments[f])||u===nf)return u;(u>e||u===e&&0===u&&Zu(u))&&(e=u)}return e},ef=Ae,uf=h,ff=_,of=A,cf=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return uf(r)||uf(n)?NaN:r===ff||n===ff?ff:r===n&&0===r?ef(r)?r:n:r<n?r:n;for(e=of,f=0;f<t;f++){if(uf(u=arguments[f])||u===ff)return u;(u<e||u===e&&0===u&&ef(u))&&(e=u)}return e},af=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],lf=af.length,yf=Iu,pf=function(r){var n,t,e,u,f;if(r<-1.1||r>1.1)return NaN;for(e=0,u=0,n=2*r,f=0;f<lf;f++)t=e,u=n*(e=u)-t+af[f];return.5*(u-t)},vf=ae,sf=de,Nf=function(r){var n,t,e,u;if(Wu(r)&&r<0||r===Du||Vu(r))return NaN;if(0===r)return Yu(r)?Du:Bu;if(r>171.61447887182297)return Bu;if(r<-170.5674972726612)return 0;if((t=qu(r))>33)return r>=0?Ku(r):(n=0==(1&(e=Cu(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*zu(Ju*u),n*Ju/(qu(u)*Ku(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Qu(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Qu(r,u);u/=r,r+=1}return 2===r?u:u*Ru(r-=2)},bf=tf,wf=cf,df=zr,hf=_,Af=A,_f=function(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?pf(2*yf(10/r,2)-1)/r:1/(12*r)},mf=d,gf=h,Uf=function(r,n){var t,e,u;return e=wf(r,n),u=bf(r,n),e<0?NaN:0===e?Af:u===Af?hf:e>=10?(t=_f(e)+_f(u)-_f(e+u),-.5*df(u)+.9189385332046728+t+(e-.5)*df(e/(e+u))+u*sf(-e/(e+u))):u>=10?(t=_f(u)-_f(e+u),vf(e)+t+e-e*df(e+u)+(u-.5)*sf(-e/(e+u))):df(Nf(e)*(Nf(u)/Nf(e+u)))},jf=j,If=zr,Of=_,Sf=function r(n,t){return gf(n)||gf(t)?NaN:mf(n)&&mf(t)?n<0?r(-n+t-1,t):t<0?Of:0===t?0:1===t?If(jf(n)):n<t?Of:n-t<2?r(n,n-t):-If(n+1)-Uf(n-t+1,t+1):NaN},Ef=Sf;function Ff(r,n,t){var e;return h(r)||h(n)||h(t)||t<0||t>1||!b(n)||n===A?NaN:b(r)?r>n?_:0===t?0===r?0:_:1===t?r===n?0:_:(e=Ef(n,r),e+=r*zr(t)+(n-r)*de(-t)):_}var Tf=function(r){return function(){return r}},Hf=h,Gf=_,Pf=Tf,kf=h,xf=_,Mf=function(r,n){return Hf(r)||Hf(n)?NaN:r===n?0:Gf};v(Mf,"factory",(function(r){return kf(r)?Pf(NaN):function(n){return kf(n)?NaN:n===r?0:xf}}));var Lf=Mf;return v(Ff,"factory",(function(r,n){return h(r)||h(n)||!b(r)||r===A||n<0||n>1?Tf(NaN):0===n||0===r?Lf.factory(0):1===n?Lf.factory(r):function(t){var e;return h(t)?NaN:b(t)?t>r?_:(e=Ef(r,t),e+=t*zr(n)+(r-t)*de(-n)):_}})),Ff},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logpmf=n();
//# sourceMappingURL=browser.js.map
