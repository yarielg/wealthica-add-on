(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c134072"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(n(t))}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),c=r("9112");for(var a in o){var f=n[a],u=f&&f.prototype;if(u&&u.forEach!==i)try{c(u,"forEach",i)}catch(s){u.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=r("ae40"),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),c=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2b14":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"pa-5"},[r("h2",[t._v("Portfolio Rebalancing")]),r("v-data-table",{staticClass:"table mx-auto",attrs:{headers:t.HEADERS,items:t.tableItems,"hide-default-footer":""}})],1)},o=[],i=(r("d81d"),r("db63")),c=r("5a50"),a=[{text:"CLASS",value:"class",sortable:!1},{text:"CURRENT",value:"current",sortable:!1},{text:"TARGET",value:"target",sortable:!1},{text:"REBALANCING",value:"rebalancing",sortable:!1}],f={mixins:[i["a"]],props:["profile"],computed:{tableItems:function(){var t=this,e=[0,1].map((function(e){return{class:c["a"][e],current:Math.round(t.allocations[e].percent)+"%",target:t.profile?t.profile.data[e]+"%":"",rebalancing:""}}));return e[0].rebalancing=e[0].current===e[0].target?"You're on target!":"You need rebalancing",e}},created:function(){this.HEADERS=a}},u=f,s=r("2877"),l=Object(s["a"])(u,n,o,!1,null,null,null);e["default"]=l.exports},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),c=r("ae40"),a=i("filter"),f=c("filter");n({target:"Array",proto:!0,forced:!a||!f},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),c=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?o.f(t,c,i(0,r)):t[c]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),c=r("c430"),a=r("83ab"),f=r("4930"),u=r("fdbf"),s=r("d039"),l=r("5135"),b=r("e8b5"),d=r("861d"),p=r("825a"),v=r("7b0b"),h=r("fc6a"),g=r("c04e"),y=r("5c6c"),m=r("7c73"),O=r("df75"),S=r("241c"),w=r("057f"),j=r("7418"),E=r("06cf"),L=r("9bf2"),P=r("d1e7"),x=r("9112"),A=r("6eeb"),T=r("5692"),C=r("f772"),D=r("d012"),R=r("90e3"),N=r("b622"),M=r("e538"),k=r("746f"),G=r("d44e"),H=r("69f3"),V=r("b727").forEach,I=C("hidden"),F="Symbol",J="prototype",B=N("toPrimitive"),_=H.set,q=H.getterFor(F),Y=Object[J],Q=o.Symbol,U=i("JSON","stringify"),W=E.f,$=L.f,z=w.f,K=P.f,X=T("symbols"),Z=T("op-symbols"),tt=T("string-to-symbol-registry"),et=T("symbol-to-string-registry"),rt=T("wks"),nt=o.QObject,ot=!nt||!nt[J]||!nt[J].findChild,it=a&&s((function(){return 7!=m($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=W(Y,e);n&&delete Y[e],$(t,e,r),n&&t!==Y&&$(Y,e,n)}:$,ct=function(t,e){var r=X[t]=m(Q[J]);return _(r,{type:F,tag:t,description:e}),a||(r.description=e),r},at=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ft=function(t,e,r){t===Y&&ft(Z,e,r),p(t);var n=g(e,!0);return p(r),l(X,n)?(r.enumerable?(l(t,I)&&t[I][n]&&(t[I][n]=!1),r=m(r,{enumerable:y(0,!1)})):(l(t,I)||$(t,I,y(1,{})),t[I][n]=!0),it(t,n,r)):$(t,n,r)},ut=function(t,e){p(t);var r=h(e),n=O(r).concat(pt(r));return V(n,(function(e){a&&!lt.call(r,e)||ft(t,e,r[e])})),t},st=function(t,e){return void 0===e?m(t):ut(m(t),e)},lt=function(t){var e=g(t,!0),r=K.call(this,e);return!(this===Y&&l(X,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(X,e)||l(this,I)&&this[I][e])||r)},bt=function(t,e){var r=h(t),n=g(e,!0);if(r!==Y||!l(X,n)||l(Z,n)){var o=W(r,n);return!o||!l(X,n)||l(r,I)&&r[I][n]||(o.enumerable=!0),o}},dt=function(t){var e=z(h(t)),r=[];return V(e,(function(t){l(X,t)||l(D,t)||r.push(t)})),r},pt=function(t){var e=t===Y,r=z(e?Z:h(t)),n=[];return V(r,(function(t){!l(X,t)||e&&!l(Y,t)||n.push(X[t])})),n};if(f||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=R(t),r=function(t){this===Y&&r.call(Z,t),l(this,I)&&l(this[I],e)&&(this[I][e]=!1),it(this,e,y(1,t))};return a&&ot&&it(Y,e,{configurable:!0,set:r}),ct(e,t)},A(Q[J],"toString",(function(){return q(this).tag})),A(Q,"withoutSetter",(function(t){return ct(R(t),t)})),P.f=lt,L.f=ft,E.f=bt,S.f=w.f=dt,j.f=pt,M.f=function(t){return ct(N(t),t)},a&&($(Q[J],"description",{configurable:!0,get:function(){return q(this).description}}),c||A(Y,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:Q}),V(O(rt),(function(t){k(t)})),n({target:F,stat:!0,forced:!f},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!a},{create:st,defineProperty:ft,defineProperties:ut,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:s((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(v(t))}}),U){var vt=!f||s((function(){var t=Q();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(d(e)||void 0!==t)&&!at(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,U.apply(null,o)}})}Q[J][B]||x(Q[J],B,Q[J].valueOf),G(Q,F),D[I]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),o=r("d039"),i=r("5135"),c=Object.defineProperty,a={},f=function(t){throw t};t.exports=function(t,e){if(i(a,t))return a[t];e||(e={});var r=[][t],u=!!i(e,"ACCESSORS")&&e.ACCESSORS,s=i(e,0)?e[0]:f,l=i(e,1)?e[1]:void 0;return a[t]=!!r&&!o((function(){if(u&&!n)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:f}):t[1]=1,r.call(t,s,l)}))}},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),c=r("d039"),a=c((function(){i(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(t){return i(o(t))}})},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),c=r("50c4"),a=r("65f0"),f=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,s=4==t,l=6==t,b=5==t||l;return function(d,p,v,h){for(var g,y,m=i(d),O=o(m),S=n(p,v,3),w=c(O.length),j=0,E=h||a,L=e?E(d,w):r?E(d,0):void 0;w>j;j++)if((b||j in O)&&(g=O[j],y=S(g,j,m),t))if(e)L[j]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return j;case 2:f.call(L,g)}else if(s)return!1;return l?-1:u||s?s:L}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,i=r("1dde"),c=r("ae40"),a=i("map"),f=c("map");n({target:"Array",proto:!0,forced:!a||!f},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},db63:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r("4160"),r("d81d"),r("159b");var n=r("5530"),o=r("2f62"),i=r("5a50"),c={computed:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["positions"])),{},{allocations:function(){var t=0,e=[0,1].map((function(t){return{label:i["a"][t],amount:0,percent:0,cntHoldings:0}}));return this.positions.forEach((function(r){var n="equity"===r.class?1:0;e[n].amount+=r.value,t+=r.value,e[n].cntHoldings++})),e.forEach((function(e){e.percent=100*e.amount/t})),e}})}},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),c=r("fc6a"),a=r("06cf"),f=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),o=a.f,u=i(n),s={},l=0;while(u.length>l)r=o(n,e=u[l++]),void 0!==r&&f(s,e,r);return s}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),c=r("06cf").f,a=r("83ab"),f=o((function(){c(1)})),u=!a||f;n({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-9c134072.0ede16b1.js.map