"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[483],{6483:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h}),n(1249),n(8309),n(9753),n(2526),n(1817),n(1539),n(2165),n(6992),n(8783),n(3948),n(7042),n(1038),n(8674),n(5666);var r=n(7294),a=n(2613),o=n(8443),l=n(724),c=n.n(l),i=n(9260),u=n.n(i),s=n(7208);function f(e,t,n,r,a,o,l){try{var c=e[o](l),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,a)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function l(e){f(o,r,a,l,c,"next",e)}function c(e){f(o,r,a,l,c,"throw",e)}l(void 0)}))}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const h=function(){var e,t,n=(0,a.DN)(),l=(e=(0,r.useState)(null),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=l[0],f=l[1],h=function(){var e=m(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.ZM)(n);case 2:if(t=e.sent,f(t),0!==t.length){e.next=9;break}return e.next=7,n.sizeTo(300);case 7:e.next=11;break;case 9:return e.next=11,n.sizeTo("#react-root");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){h().then((function(){n.render(m(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:case"end":return e.stop()}}),e)}))))}))}),[]),r.createElement("div",null,r.createElement("div",{className:"card-container"},null===i&&r.createElement("p",null,"Loading..."),null!==i&&i.length>0&&i.map((function(e,t){return r.createElement("div",{key:t,className:"card",style:{borderLeft:"10px solid ".concat(e.color)}},r.createElement("div",{className:"card-markdown"},r.createElement(c(),null,e.text),r.createElement("div",null,r.createElement("a",{href:"#",onClick:function(){return n.showCard(e.card.id)}},e.card.name))))})),null!==i&&0===i.length&&r.createElement("div",null,r.createElement(u(),{className:"lottie-empty-state",loop:!1,height:200,animationData:s}),r.createElement("div",{className:"lottie-empty-state-label"},r.createElement("h2",null,"No Notes"),r.createElement("a",{href:"https://lottiefiles.com/14171-empty",rel:"noreferrer",target:"_blank"},"Animation by Andrei Deniz")))))}}}]);