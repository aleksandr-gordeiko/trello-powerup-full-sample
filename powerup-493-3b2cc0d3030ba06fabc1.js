"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[493],{8443:(t,e,r)=>{function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||x(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=x(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){s=!0,i=t},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function x(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function u(t,e,r,a,n,i,o){try{var s=t[i](o),x=s.value}catch(t){return void r(t)}s.done?e(x):Promise.resolve(x).then(a,n)}function p(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var i=t.apply(e,r);function o(t){u(i,a,n,o,s,"next",t)}function s(t){u(i,a,n,o,s,"throw",t)}o(void 0)}))}}function m(t,e,r,a){return l.apply(this,arguments)}function l(){return(l=p(regeneratorRuntime.mark((function t(e,r,a,n){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e);case 2:return(i=t.sent).push(r),t.next=6,e.set(n||"card","shared","notes",JSON.stringify(i));case 6:if(!a){t.next=9;break}return t.next=9,e.closePopup();case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t,e){return f.apply(this,arguments)}function f(){return(f=p(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=JSON,t.next=3,e.get(r||"card","shared","notes","[]");case 3:return t.t1=t.sent,t.abrupt("return",t.t0.parse.call(t.t0,t.t1));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return h.apply(this,arguments)}function h(){return(h=p(regeneratorRuntime.mark((function t(e){var r,a,i,x,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.cards("all");case 2:r=t.sent,a=[],i=s(r),t.prev=5,c=regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=x.value,t.next=3,k(e,r.id);case 3:i=t.sent,a.push.apply(a,o(i.map((function(t){return n(n({},t),{},{card:r})}))));case 5:case"end":return t.stop()}}),t)})),i.s();case 8:if((x=i.n()).done){t.next=12;break}return t.delegateYield(c(),"t0",10);case 10:t.next=8;break;case 12:t.next=17;break;case 14:t.prev=14,t.t1=t.catch(5),i.e(t.t1);case 17:return t.prev=17,i.f(),t.finish(17);case 20:return t.abrupt("return",a);case 21:case"end":return t.stop()}}),t,null,[[5,14,17,20]])})))).apply(this,arguments)}function d(t,e,r){return b.apply(this,arguments)}function b(){return(b=p(regeneratorRuntime.mark((function t(e,r,a){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e);case 2:return(n=t.sent).splice(r,1),t.abrupt("return",e.set(a||"card","shared","notes",JSON.stringify(n)));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,e){return g.apply(this,arguments)}function g(){return(g=p(regeneratorRuntime.mark((function t(e,r){var a,n,i,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.cards("all");case 2:a=t.sent,n=s(a),t.prev=4,n.s();case 6:if((i=n.n()).done){t.next=12;break}return o=i.value,t.next=10,e.set(o.id,r,"notes","[]");case 10:t.next=6;break;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),n.e(t.t0);case 17:return t.prev=17,n.f(),t.finish(17);case 20:return t.next=22,e.alert({message:"Deleted Notes!",display:"info",duration:5});case 22:case"end":return t.stop()}}),t,null,[[4,14,17,20]])})))).apply(this,arguments)}function E(t){return A.apply(this,arguments)}function A(){return(A=p(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.get("board","private","notes-auth","false");case 2:return r=t.sent,t.abrupt("return","true"===r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(t,e){return V.apply(this,arguments)}function V(){return(V=p(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.set("board","private","notes-auth",r?"true":"false");case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}r.d(e,{kT:()=>m,DI:()=>k,ZM:()=>y,lj:()=>d,p6:()=>v,v0:()=>E,QV:()=>D}),r(5666),r(1539),r(8674),r(8783),r(6992),r(3948),r(1249),r(561),r(7042),r(8309),r(1038),r(2526),r(1817),r(2165),r(9753),r(9070),r(7941),r(7327),r(5003),r(9554),r(4747),r(9337),r(3321)},7208:t=>{t.exports=JSON.parse('{"v":"5.5.9","fr":30,"ip":0,"op":71,"w":1000,"h":1000,"nm":"Comp 1","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":15,"s":[0],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":16.166,"s":[100],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":34.822,"s":[100],"e":[0]},{"t":44.150390625}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":16.166,"s":[712.5,1134,0],"e":[771,983.5,0],"to":[-14.833,-36.167,0],"ti":[-47.814,25.203,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":20.83,"s":[771,983.5,0],"e":[896,1009.5,0],"to":[127.009,-66.946,0],"ti":[7.75,-4.167,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":24.328,"s":[896,1009.5,0],"e":[712.5,981.5,0],"to":[-12.75,32.667,0],"ti":[56.417,132.5,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":26.66,"s":[712.5,981.5,0],"e":[820.5,795.5,0],"to":[-1.417,-87,0],"ti":[-0.167,18.833,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":28.992,"s":[820.5,795.5,0],"e":[679.5,368.5,0],"to":[204.167,-201.833,0],"ti":[38.5,36,0]},{"t":35.98828125}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = wiggle(4, 4);"},"a":{"a":0,"k":[574,316,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":16,"s":[100,100,100],"e":[199,199,100]},{"t":36}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[32,32],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.96862745098,0.501960784314,0.125490196078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.176470588235,0.091422316607,0.022764521954,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[569.75,313],"ix":2},"a":{"a":0,"k":[-15.167,-0.336],"ix":1},"s":{"a":0,"k":[100,34.848],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[-165.06],"e":[-21.06]},{"t":2}],"ix":6,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'pingpong\');"},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 3","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[32,32],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.96862745098,0.501960784314,0.125490196078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.780392156863,0.40428981407,0.100669778562,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[574.25,318.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[75.758,68.702],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[32,32],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.96862745098,0.501960784314,0.125490196078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.176470588235,0.091422316607,0.022764521954,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[581.25,315.25],"ix":2},"a":{"a":0,"k":[-15.167,-0.336],"ix":1},"s":{"a":0,"k":[100,34.848],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[-26.06],"e":[-138.06]},{"t":2}],"ix":6,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'pingpong\');"},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 2","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":71,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":41.818,"s":[100],"e":[0]},{"t":44.150390625}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[750,750,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4,62],[-78.169,46.191],[22.114,-50.862],[2,124],[396,308]],"o":[[-4,-62],[88,-52],[-20,46],[-2,-124],[-136.025,-105.797]],"v":[[-38,436],[24,234],[138,270],[-36,216],[-46,-366]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.96862745098,0.501960784314,0.125490196078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":2,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":24,"ix":1}},{"n":"o","nm":"offset","v":{"a":0,"k":0,"ix":7}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":37.154,"s":[0],"e":[100]},{"t":44.150390625}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":16.166,"s":[0],"e":[100]},{"t":38.3203125}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":71,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Layer 3 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[731.843,790.896,0],"ix":2},"a":{"a":0,"k":[362.122,139.363,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[40.452,1.37],[4.679,-15.32],[46.77,-0.033],[48.503,0.14],[6.296,1.537],[11.209,38.962],[13.257,-0.289],[40.499,0],[0,0]],"o":[[0,0],[0,0],[0,0],[-40.498,0],[-15.936,-0.54],[-13.653,44.693],[-48.504,0.034],[-6.536,-0.019],[-39.239,-9.576],[-3.877,-13.479],[-40.479,0.882],[0,0],[0,0]],"v":[[-330.388,106.46],[330.395,106.46],[330.395,-102.864],[318.706,-102.864],[197.227,-103.32],[170.106,-83.874],[71.411,-12.429],[-74.1,-12.498],[-93.667,-14.259],[-170.981,-86.563],[-194.156,-103.186],[-315.644,-102.865],[-330.388,-102.865]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,-4.525],[0,0],[8.736,-0.015],[223.62,0.024],[0.001,23.739],[-0.464,72.967],[-11.909,0],[0,0],[-41.397,-0.195],[-14.705,-45.239],[-33.604,-0.119],[-38.979,-1.873],[-14.084,55.457],[-12.845,-0.122],[-44.718,0]],"o":[[8.29,0],[0,0],[0,5.275],[-223.618,0.39],[-23.344,-0.003],[-0.003,-72.97],[0.061,-9.504],[0,0],[42.909,0],[47.705,0.224],[10.249,31.533],[39.068,0.137],[65.83,3.165],[3.205,-12.62],[44.714,0.424],[4.995,0]],"v":[[352.199,-134.4],[361.872,-125.46],[361.872,131.74],[350.114,138.723],[-335.18,139.017],[-361.662,111.98],[-361.408,-118.435],[-349.802,-133.36],[-321.74,-133.561],[-196.035,-133.521],[-141.306,-93.874],[-71.306,-43.152],[45.884,-42.775],[148.795,-116.45],[172.122,-133.725],[306.274,-133.561]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[362.122,139.363],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-330.392,-98.915],[-330.392,110.41],[330.392,110.41],[330.392,-98.914],[168.695,-99.411],[123.361,-20.41],[-108.64,-16.41],[-175.306,-110.41]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.09411764705882353,0.5647058823529412,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[362.126,135.413],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":71,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Layer 2 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[731.843,548.496,0],"ix":2},"a":{"a":0,"k":[362.122,139.363,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[40.452,1.37],[4.679,-15.321],[46.77,-0.032],[48.503,0.139],[6.296,1.537],[11.209,38.963],[13.257,-0.289],[40.499,0],[4.885,0]],"o":[[0,0],[0,0],[0,0],[-40.498,0],[-15.936,-0.539],[-13.653,44.692],[-48.504,0.035],[-6.536,-0.019],[-39.239,-9.576],[-3.877,-13.479],[-40.479,0.882],[-4.93,0],[0,0]],"v":[[-330.388,106.46],[330.395,106.46],[330.395,-102.864],[318.706,-102.864],[197.227,-103.321],[170.106,-83.874],[71.411,-12.429],[-74.1,-12.497],[-93.667,-14.259],[-170.981,-86.564],[-194.156,-103.186],[-315.644,-102.866],[-330.388,-102.864]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,-4.525],[0,0],[8.736,-0.015],[223.62,0.025],[0.001,23.739],[-0.464,72.967],[-11.909,0],[0,0],[-41.397,-0.195],[-14.705,-45.24],[-33.604,-0.119],[-38.979,-1.874],[-14.084,55.457],[-12.845,-0.122],[-44.718,0.001]],"o":[[8.29,0],[0,0],[0,5.276],[-223.618,0.39],[-23.344,-0.002],[-0.003,-72.971],[0.061,-9.504],[0,0],[42.909,0],[47.705,0.224],[10.249,31.533],[39.068,0.138],[65.83,3.164],[3.205,-12.62],[44.714,0.424],[4.995,0]],"v":[[352.199,-134.4],[361.872,-125.46],[361.872,131.74],[350.114,138.723],[-335.18,139.016],[-361.662,111.98],[-361.408,-118.434],[-349.802,-133.36],[-321.74,-133.562],[-196.035,-133.52],[-141.306,-93.874],[-71.306,-43.153],[45.884,-42.775],[148.795,-116.45],[172.122,-133.725],[306.274,-133.562]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[362.122,139.364],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-330.392,-98.915],[-330.392,110.41],[330.392,110.41],[330.392,-98.915],[168.695,-99.412],[123.361,-20.41],[-108.64,-16.41],[-175.306,-110.41]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.09411764705882353,0.5647058823529412,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[362.126,135.414],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":71,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"gaveta Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[731.843,929.961,0],"e":[735.843,1125.961,0],"to":[0.667,32.667,0],"ti":[-0.667,-32.667,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.333,"y":0.333},"t":16,"s":[735.843,1125.961,0],"e":[735.843,1125.961,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":46,"s":[735.843,1125.961,0],"e":[731.843,929.961,0],"to":[-0.667,-32.667,0],"ti":[0.667,32.667,0]},{"t":58}],"ix":2},"a":{"a":0,"k":[362.122,242.254,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[100,100,100],"e":[121.494,121.494,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[121.494,121.494,100],"e":[121.494,121.494,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":46,"s":[121.494,121.494,100],"e":[100,100,100]},{"t":58}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[40.452,1.37],[4.679,-15.32],[46.77,-0.032],[48.503,0.14],[6.296,1.537],[11.209,38.962],[13.257,-0.289],[40.499,0],[0,0]],"o":[[0,0],[0,0],[0,0],[-40.498,-0.001],[-15.936,-0.54],[-13.653,44.692],[-48.504,0.035],[-6.536,-0.019],[-39.239,-9.577],[-3.877,-13.48],[-40.479,0.882],[0,0],[0,0]],"v":[[-330.388,209.35],[330.395,209.35],[330.395,0.026],[318.706,0.026],[197.227,-0.43],[170.106,19.016],[71.411,90.46],[-74.1,90.393],[-93.667,88.631],[-170.981,16.327],[-194.156,-0.296],[-315.644,0.025],[-330.388,0.025]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[-5.495,0],[0.513,1.198],[24.303,54.936],[5.131,0.014],[156.275,0.241],[3.47,-8.251],[22.472,-52.664],[1.247,-4.282],[-41.397,-0.195],[-14.705,-45.239],[-33.604,-0.118],[-38.979,-1.874],[-14.084,55.457],[-12.845,-0.122],[-44.718,0]],"o":[[-0.441,-2.859],[-23.614,-55.24],[-1.88,-4.25],[-156.275,-0.436],[-8.817,-0.014],[-22.193,52.781],[-1.331,3.118],[42.909,0],[47.705,0.224],[10.249,31.534],[39.068,0.138],[65.83,3.165],[3.205,-12.62],[44.714,0.424],[4.995,-0.001]],"v":[[321.758,-30.671],[320.867,-36.171],[249.784,-125.66],[234.841,-133.938],[-233.813,-133.467],[-250.686,-122.49],[-318.535,-41.49],[-321.74,-30.671],[-196.035,-30.63],[-141.306,9.015],[-71.306,59.737],[45.884,60.115],[148.795,-13.56],[172.122,-30.835],[306.274,-30.671]],"c":true}],"e":[{"i":[[-5.495,0],[0.513,1.198],[24.303,54.936],[5.131,0.014],[156.275,0.241],[3.47,-8.251],[22.472,-52.664],[1.247,-4.282],[-41.397,-0.195],[-14.705,-45.239],[-33.604,-0.118],[-38.979,-1.874],[-14.084,55.457],[-12.845,-0.122],[-44.718,0]],"o":[[-0.441,-2.859],[-23.614,-55.24],[-1.88,-4.25],[-156.275,-0.436],[-8.817,-0.014],[-22.193,52.781],[-1.331,3.118],[42.909,0],[47.705,0.224],[10.249,31.534],[39.068,0.138],[65.83,3.165],[3.205,-12.62],[44.714,0.424],[4.995,-0.001]],"v":[[321.758,-30.671],[320.867,-36.171],[249.503,-201.66],[234.56,-209.938],[-234.267,-210.467],[-251.14,-199.49],[-318.535,-41.49],[-321.74,-30.671],[-196.035,-30.631],[-141.306,9.015],[-71.306,59.737],[45.884,60.115],[148.795,-13.56],[172.122,-30.835],[306.274,-30.671]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":9,"s":[{"i":[[-5.495,0],[0.513,1.198],[24.303,54.936],[5.131,0.014],[156.275,0.241],[3.47,-8.251],[22.472,-52.664],[1.247,-4.282],[-41.397,-0.195],[-14.705,-45.239],[-33.604,-0.118],[-38.979,-1.874],[-14.084,55.457],[-12.845,-0.122],[-44.718,0]],"o":[[-0.441,-2.859],[-23.614,-55.24],[-1.88,-4.25],[-156.275,-0.436],[-8.817,-0.014],[-22.193,52.781],[-1.331,3.118],[42.909,0],[47.705,0.224],[10.249,31.534],[39.068,0.138],[65.83,3.165],[3.205,-12.62],[44.714,0.424],[4.995,-0.001]],"v":[[321.758,-30.671],[320.867,-36.171],[249.503,-201.66],[234.56,-209.938],[-234.267,-210.467],[-251.14,-199.49],[-318.535,-41.49],[-321.74,-30.671],[-196.035,-30.631],[-141.306,9.015],[-71.306,59.737],[45.884,60.115],[148.795,-13.56],[172.122,-30.835],[306.274,-30.671]],"c":true}],"e":[{"i":[[-5.495,0],[0.513,1.198],[24.303,54.936],[5.131,0.014],[156.275,0.241],[3.47,-8.251],[22.472,-52.664],[1.247,-4.282],[-41.397,-0.195],[-14.705,-45.239],[-33.604,-0.118],[-38.979,-1.874],[-14.084,55.457],[-12.845,-0.122],[-44.718,0]],"o":[[-0.441,-2.859],[-23.614,-55.24],[-1.88,-4.25],[-156.275,-0.436],[-8.817,-0.014],[-22.193,52.781],[-1.331,3.118],[42.909,0],[47.705,0.224],[10.249,31.534],[39.068,0.138],[65.83,3.165],[3.205,-12.62],[44.714,0.424],[4.995,-0.001]],"v":[[321.758,-30.671],[320.867,-36.171],[249.503,-201.66],[234.56,-209.938],[-234.267,-210.467],[-251.14,-199.49],[-318.535,-41.49],[-321.74,-30.671],[-196.035,-30.631],[-141.306,9.015],[-71.306,59.737],[45.884,60.115],[148.795,-13.56],[172.122,-30.835],[306.274,-30.671]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":52,"s":[{"i":[[-5.495,0],[0.513,1.198],[24.303,54.936],[5.131,0.014],[156.275,0.241],[3.47,-8.251],[22.472,-52.664],[1.247,-4.282],[-41.397,-0.195],[-14.705,-45.239],[-33.604,-0.118],[-38.979,-1.874],[-14.084,55.457],[-12.845,-0.122],[-44.718,0]],"o":[[-0.441,-2.859],[-23.614,-55.24],[-1.88,-4.25],[-156.275,-0.436],[-8.817,-0.014],[-22.193,52.781],[-1.331,3.118],[42.909,0],[47.705,0.224],[10.249,31.534],[39.068,0.138],[65.83,3.165],[3.205,-12.62],[44.714,0.424],[4.995,-0.001]],"v":[[321.758,-30.671],[320.867,-36.171],[249.503,-201.66],[234.56,-209.938],[-234.267,-210.467],[-251.14,-199.49],[-318.535,-41.49],[-321.74,-30.671],[-196.035,-30.631],[-141.306,9.015],[-71.306,59.737],[45.884,60.115],[148.795,-13.56],[172.122,-30.835],[306.274,-30.671]],"c":true}],"e":[{"i":[[-5.495,0],[0.513,1.198],[24.303,54.936],[5.131,0.014],[156.275,0.241],[3.47,-8.251],[22.472,-52.664],[1.247,-4.282],[-41.397,-0.195],[-14.705,-45.239],[-33.604,-0.118],[-38.979,-1.874],[-14.084,55.457],[-12.845,-0.122],[-44.718,0]],"o":[[-0.441,-2.859],[-23.614,-55.24],[-1.88,-4.25],[-156.275,-0.436],[-8.817,-0.014],[-22.193,52.781],[-1.331,3.118],[42.909,0],[47.705,0.224],[10.249,31.534],[39.068,0.138],[65.83,3.165],[3.205,-12.62],[44.714,0.424],[4.995,-0.001]],"v":[[321.758,-30.671],[320.867,-36.171],[249.784,-125.66],[234.841,-133.938],[-233.813,-133.467],[-250.686,-122.49],[-318.535,-41.49],[-321.74,-30.671],[-196.035,-30.63],[-141.306,9.015],[-71.306,59.737],[45.884,60.115],[148.795,-13.56],[172.122,-30.835],[306.274,-30.671]],"c":true}]},{"t":58}],"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[8.735,-0.015],[223.62,0.025],[0.001,23.739],[-0.464,72.968],[-3.677,8.757],[-26.834,64.07],[-13.63,-0.02],[-165.242,0.212],[-5.154,-12.263],[-27.267,-63.372],[-2.195,-4.018]],"o":[[-8.731,2.431],[-223.619,0.39],[-23.344,-0.002],[-0.003,-72.971],[0.061,-9.504],[26.896,-64.044],[5.348,-12.769],[165.243,0.259],[12.981,-0.016],[26.734,63.597],[1.802,4.188],[0,0]],"v":[[361.872,234.629],[335.678,241.613],[-335.18,241.906],[-361.662,214.87],[-361.408,-4.041],[-355.649,-32.419],[-274.125,-147.186],[-247.515,-164.984],[248.213,-164.956],[273.886,-147.928],[355.337,-34.648],[361.872,-22.57]],"c":true}],"e":[{"i":[[0,0],[8.735,-0.015],[223.62,0.025],[0.001,23.739],[-0.464,72.968],[-3.677,8.757],[-26.834,64.07],[-13.63,-0.02],[-165.242,0.212],[-5.154,-12.263],[-27.267,-63.372],[-2.195,-4.018]],"o":[[-8.731,2.431],[-223.619,0.39],[-23.344,-0.002],[-0.003,-72.971],[0.061,-9.504],[26.896,-64.044],[5.348,-12.769],[165.243,0.259],[12.981,-0.016],[26.734,63.597],[1.802,4.188],[0,0]],"v":[[361.872,234.629],[335.678,241.613],[-335.18,241.906],[-361.662,214.87],[-361.408,-4.041],[-355.649,-32.419],[-274.092,-224.186],[-247.482,-241.984],[248.246,-241.956],[273.919,-224.928],[355.337,-34.648],[361.872,-22.57]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":9,"s":[{"i":[[0,0],[8.735,-0.015],[223.62,0.025],[0.001,23.739],[-0.464,72.968],[-3.677,8.757],[-26.834,64.07],[-13.63,-0.02],[-165.242,0.212],[-5.154,-12.263],[-27.267,-63.372],[-2.195,-4.018]],"o":[[-8.731,2.431],[-223.619,0.39],[-23.344,-0.002],[-0.003,-72.971],[0.061,-9.504],[26.896,-64.044],[5.348,-12.769],[165.243,0.259],[12.981,-0.016],[26.734,63.597],[1.802,4.188],[0,0]],"v":[[361.872,234.629],[335.678,241.613],[-335.18,241.906],[-361.662,214.87],[-361.408,-4.041],[-355.649,-32.419],[-274.092,-224.186],[-247.482,-241.984],[248.246,-241.956],[273.919,-224.928],[355.337,-34.648],[361.872,-22.57]],"c":true}],"e":[{"i":[[0,0],[8.735,-0.015],[223.62,0.025],[0.001,23.739],[-0.464,72.968],[-3.677,8.757],[-26.834,64.07],[-13.63,-0.02],[-165.242,0.212],[-5.154,-12.263],[-27.267,-63.372],[-2.195,-4.018]],"o":[[-8.731,2.431],[-223.619,0.39],[-23.344,-0.002],[-0.003,-72.971],[0.061,-9.504],[26.896,-64.044],[5.348,-12.769],[165.243,0.259],[12.981,-0.016],[26.734,63.597],[1.802,4.188],[0,0]],"v":[[361.872,234.629],[335.678,241.613],[-335.18,241.906],[-361.662,214.87],[-361.408,-4.041],[-355.649,-32.419],[-274.092,-224.186],[-247.482,-241.984],[248.246,-241.956],[273.919,-224.928],[355.337,-34.648],[361.872,-22.57]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":52,"s":[{"i":[[0,0],[8.735,-0.015],[223.62,0.025],[0.001,23.739],[-0.464,72.968],[-3.677,8.757],[-26.834,64.07],[-13.63,-0.02],[-165.242,0.212],[-5.154,-12.263],[-27.267,-63.372],[-2.195,-4.018]],"o":[[-8.731,2.431],[-223.619,0.39],[-23.344,-0.002],[-0.003,-72.971],[0.061,-9.504],[26.896,-64.044],[5.348,-12.769],[165.243,0.259],[12.981,-0.016],[26.734,63.597],[1.802,4.188],[0,0]],"v":[[361.872,234.629],[335.678,241.613],[-335.18,241.906],[-361.662,214.87],[-361.408,-4.041],[-355.649,-32.419],[-274.092,-224.186],[-247.482,-241.984],[248.246,-241.956],[273.919,-224.928],[355.337,-34.648],[361.872,-22.57]],"c":true}],"e":[{"i":[[0,0],[8.735,-0.015],[223.62,0.025],[0.001,23.739],[-0.464,72.968],[-3.677,8.757],[-26.834,64.07],[-13.63,-0.02],[-165.242,0.212],[-5.154,-12.263],[-27.267,-63.372],[-2.195,-4.018]],"o":[[-8.731,2.431],[-223.619,0.39],[-23.344,-0.002],[-0.003,-72.971],[0.061,-9.504],[26.896,-64.044],[5.348,-12.769],[165.243,0.259],[12.981,-0.016],[26.734,63.597],[1.802,4.188],[0,0]],"v":[[361.872,234.629],[335.678,241.613],[-335.18,241.906],[-361.662,214.87],[-361.408,-4.041],[-355.649,-32.419],[-274.125,-147.186],[-247.515,-164.984],[248.213,-164.956],[273.886,-147.928],[355.337,-34.648],[361.872,-22.57]],"c":true}]},{"t":58}],"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[362.122,242.254],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-334.71,-98.915],[-334.71,110.41],[334.71,110.41],[334.71,-98.914],[170.899,-99.412],[124.974,-20.41],[-110.059,-16.41],[-177.597,-110.41]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.09411764705882353,0.5647058823529412,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[357.807,341.194],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":71,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"vazio","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[516,438,0],"ix":2},"a":{"a":0,"k":[750,750,0],"ix":1},"s":{"a":0,"k":[70.667,70.667,100],"ix":6}},"ao":0,"w":1500,"h":1500,"ip":0,"op":71,"st":0,"bm":0}],"markers":[]}')}}]);