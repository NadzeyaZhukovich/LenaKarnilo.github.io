(function(t){function e(e){for(var a,o,i=e[0],r=e[1],u=e[2],f=0,d=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,i=1;i<n.length;i++){var r=n[i];0!==s[r]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},c=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/LenaKarnilo.github.io/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=r;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034c":function(t,e,n){},"052c":function(t,e,n){t.exports=n.p+"assets/ic_menu.e2372bee.svg"},"06ed":function(t,e,n){t.exports=n.p+"assets/Instagram.56ae356b.svg"},"0de2":function(t,e,n){n("99af");var a=n("ded3"),s=n("4082");t.exports={functional:!0,render:function(t,e){var n=e._c,c=(e._v,e.data),o=e.children,i=void 0===o?[]:o,r=c.class,u=c.staticClass,l=c.style,f=c.staticStyle,d=c.attrs,p=void 0===d?{}:d,v=s(c,["class","staticClass","style","staticStyle","attrs"]);return n("svg",a({class:[r,u],style:[l,f],attrs:Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p)},v),i.concat([n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 8V6h18v2H3zm0 5h18v-2H3v2zm0 5h18v-2H3v2z",fill:"#000"}})]))}}},"1bf7":function(t,e,n){},"353d":function(t,e,n){t.exports=n.p+"assets/Mail.d8f20f64.svg"},"4fce":function(t,e,n){"use strict";var a=n("a63c"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"portfolio-photo"}),n("div",{staticClass:"container"},[n("Header"),n("div",{staticClass:"test"},[n("div",{staticClass:"inner"},[n("AboutMe"),n("Contact")],1)])],1)])},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"header__menu-icons",on:{click:t.toggleMenu}},[t.openedMenu?n("CloseIcon",{staticClass:"icon icon--close"}):n("BurgerMenuIcon",{staticClass:"icon icon--burger-menu"})],1),n("Navigation",{staticClass:"menuClose",class:{menuOpen:t.openedMenu}})],1)},i=[],r=n("59ea"),u=n.n(r),l=n("0de2"),f=n.n(l),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navigation"},[n("ul",{staticClass:"navigation__list"},[n("li",{staticClass:"navigation__item"},[t._v("Work")]),n("li",{staticClass:"navigation__item"},[t._v("Hobby")])])])}],v={name:"Navigation"},h=v,b=(n("894a"),n("2877")),g=Object(b["a"])(h,d,p,!1,null,"16e74dfc",null),m=g.exports,_={name:"Header",components:{Navigation:m,CloseIcon:u.a,BurgerMenuIcon:f.a},data:function(){return{openedMenu:!1}},methods:{toggleMenu:function(){this.openedMenu=!this.openedMenu}}},C=_,y=(n("4fce"),Object(b["a"])(C,o,i,!1,null,"53ff008b",null)),M=y.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about-me"},[n("h2",{staticClass:"about-me__header"},[t._v(t._s(t.aboutMe.header))]),t._l(t.aboutMe.content,(function(e,a){return n("p",{key:a,staticClass:"about-me__text",domProps:{innerHTML:t._s(e.text)}})}))],2)},x=[],O=n("bc3a"),j=n.n(O),I=j.a.create({baseURL:"https://raw.githubusercontent.com/NadzeyaZhukovich/LenaKarnilo.github.io/master/public/",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),k={getAboutMe:function(t){return I.get("data/"+t+"/about.json")}},L={name:"AboutMe",data:function(){return{aboutMe:[]}},created:function(){var t=this;k.getAboutMe("en").then((function(e){t.aboutMe=e.data.aboutMe}))}},S=L,N=(n("d85a"),Object(b["a"])(S,w,x,!1,null,"95b04e20",null)),$=N.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact"},[n("ul",{staticClass:"contact__list"},t._l(t.socialMedia,(function(e){return n("li",{key:e.name,staticClass:"contact__item"},[n("a",{attrs:{href:e.link,target:"_blank"}},[n("span",{staticClass:"visually-hidden"},[t._v(t._s(e.name))]),n("InlineIcon",{staticClass:"contact__icon",attrs:{"icon-name":e.name}})],1)])})),0)])},H=[],A=j.a.create({baseURL:"https://raw.githubusercontent.com/NadzeyaZhukovich/LenaKarnilo.github.io/master/public/",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),P={getSocialMedia:function(){return A.get("data/social-media.json")}},T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"iconWrapper"})},z=[],B=(n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),R=new Map;function U(t){var e=n("a244");return e("./".concat(t,".svg"))}var W={name:"inline-icon",components:{},props:["iconName"],watch:{iconName:function(){this.setIcon()}},mounted:function(){this.setIcon()},methods:{fetchOnce:function(t){return R.has(t)||R.set(t,fetch(t).then((function(t){return t.text()}))),R.get(t)},getIconContent:function(t){var e=U(t);return this.fetchOnce(e)},setIcon:function(){var t=this;return Object(B["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getIconContent(t.iconName);case 2:n=e.sent,n&&t.$refs.iconWrapper&&(t.$refs.iconWrapper.innerHTML=n);case 4:case"end":return e.stop()}}),e)})))()}}},K=W,D=Object(b["a"])(K,T,z,!1,null,"145bb376",null),J=D.exports,Z={name:"Contact",components:{InlineIcon:J},data:function(){return{socialMedia:null}},created:function(){var t=this;P.getSocialMedia().then((function(e){t.socialMedia=e.data.socialMedia}))}},F=Z,V=(n("fa4e"),Object(b["a"])(F,E,H,!1,null,"1d82f0f0",null)),q=V.exports,G={name:"App",components:{Contact:q,AboutMe:$,Header:M}},Q=G,X=(n("7983"),Object(b["a"])(Q,s,c,!1,null,"c689d0c0",null)),Y=X.exports;n("ce50");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(Y)}}).$mount("#app")},"59ea":function(t,e,n){n("99af");var a=n("ded3"),s=n("4082");t.exports={functional:!0,render:function(t,e){var n=e._c,c=(e._v,e.data),o=e.children,i=void 0===o?[]:o,r=c.class,u=c.staticClass,l=c.style,f=c.staticStyle,d=c.attrs,p=void 0===d?{}:d,v=s(c,["class","staticClass","style","staticStyle","attrs"]);return n("svg",a({class:[r,u],style:[l,f],attrs:Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p)},v),i.concat([n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4z",fill:"#000"}})]))}}},6185:function(t,e,n){},7983:function(t,e,n){"use strict";var a=n("1bf7"),s=n.n(a);s.a},"894a":function(t,e,n){"use strict";var a=n("034c"),s=n.n(a);s.a},a244:function(t,e,n){var a={"./Instagram.svg":"06ed","./LinkedIn.svg":"d0c7","./Mail.svg":"353d","./ic_close.svg":"e688","./ic_menu.svg":"052c"};function s(t){var e=c(t);return n(e)}function c(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=c,t.exports=s,s.id="a244"},a63c:function(t,e,n){},ce50:function(t,e,n){},d0c7:function(t,e,n){t.exports=n.p+"assets/LinkedIn.c63293e5.svg"},d85a:function(t,e,n){"use strict";var a=n("fd53"),s=n.n(a);s.a},e688:function(t,e,n){t.exports=n.p+"assets/ic_close.8f979669.svg"},fa4e:function(t,e,n){"use strict";var a=n("6185"),s=n.n(a);s.a},fd53:function(t,e,n){}});
//# sourceMappingURL=app.5eefd38e.js.map