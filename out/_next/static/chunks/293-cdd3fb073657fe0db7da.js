(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[293],{3626:function(t,e,n){"use strict";n.d(e,{Z:function(){return w}});var r=n(5893),o=n(7294),i=n(9704),a=n(4586),c=n(4691),s=n(5369),u=n(3347),l=n(9576),f=function(t){var e=t.uuId,n=t.wordItem,a=(0,i.I0)(),c=(0,u.Z)(),f=(0,i.v9)((function(t){return t.collection.favorites})),w=(0,o.useState)(!1),d=w[0],v=w[1],p=n.id,h=n.en,m=n.zh,b=n.parts;return(0,o.useEffect)((function(){var t=new Set(f);v(t.has(n))}),[f]),(0,r.jsxs)("div",{className:"tw-text-sm",children:[(0,r.jsxs)("div",{className:"tw-relative tw-pr-9",children:[(0,r.jsx)("div",{className:"tw-text-lg tw-text-wine tw-leading-9",children:h}),(0,r.jsx)("button",{type:"button","aria-label":"favorite-button",className:"favorite-button before-icon-star tw-w-9 tw-h-9 tw-absolute tw-right-0 tw-top-0 before:tw-leading-9 ".concat(d?"tw-text-yellow-dark":"tw-text-gray/60"),title:d?"\u79fb\u9664\u6536\u85cf":"\u52a0\u5165\u6536\u85cf",onClick:function(t){t.preventDefault(),t.stopPropagation(),a(d?(0,l.qX)(p):(0,l.wF)(p))}})]}),(0,r.jsxs)("div",{className:"tw-leading-7",children:[(0,r.jsx)("div",{className:"tw-my-2",children:(0,r.jsx)("button",{type:"button","aria-label":"speech",className:"tw-w-7 tw-h-7 tw-block tw-mr-1 tw-leading-7 before-font-material before:tw-content-['\\e050'] before:tw-block before:tw-leading-7",onClick:function(){return c(h)}})}),(0,r.jsx)(s.Z,{id:e,wordsList:m,partsList:b,hasBrackets:!0}),(0,r.jsx)("div",{className:"tw-w-full tw-h-px tw-mt-4 tw-mb-3 tw-bg-gray"}),(0,r.jsx)("a",{href:"https://dictionary.cambridge.org/zht/\u8a5e\u5178/\u82f1\u8a9e-\u6f22\u8a9e-\u7e41\u9ad4/".concat(h),target:"_blank",rel:"noreferrer",title:"\u528d\u6a4b\u8fad\u5178\u9023\u7d50",className:"tw-inline-flex tw-items-center tw-text-xs before-font-material before:tw-content-['\\ea19'] before:tw-block before:tw-mr-2 desktop:hover:tw-text-green",children:"\u528d\u6a4b\u8fad\u5178\u9023\u7d50"})]})]})},w=function(t){var e=t.wordItem,n=(0,i.I0)(),u=(0,i.v9)((function(t){return t.collection.favorites})),w=(0,o.useState)(!1),d=w[0],v=w[1],p=(0,o.useState)(!1),h=p[0],m=p[1],b=e.id,g=e.en,x=e.zh,y=e.parts;return(0,o.useEffect)((function(){var t=new Set(u);m(t.has(e))}),[u]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"tw-h-full tw-p-3 tw-block tw-rounded-lg tw-cursor-pointer tw-shadow-[0_1px_3px_0_rgba(51,51,51,0.2)]","aria-hidden":"true",onClick:function(){return v(!0)},children:(0,r.jsxs)("div",{className:"tw-relative",children:[(0,r.jsx)("div",{className:"tw-text-base tw-text-wine tw-leading-7 tw-break-all tw-pr-7",children:g}),(0,r.jsx)("div",{className:"tw-text-xs tw-text-black tw-leading-6",children:(0,r.jsx)(s.Z,{id:b,wordsList:x,partsList:y})}),(0,r.jsx)("button",{type:"button","aria-label":"favorite-button",className:"favorite-button before-icon-star tw-w-7 tw-h-7 tw-absolute tw-right-0 tw-top-0 before:tw-leading-7 ".concat(h?"tw-text-yellow-dark":"tw-text-gray/60"),title:h?"\u79fb\u9664\u6536\u85cf":"\u52a0\u5165\u6536\u85cf",onClick:function(t){t.preventDefault(),t.stopPropagation(),n(h?(0,l.qX)(b):(0,l.wF)(b))}})]})}),(0,r.jsx)(c.Z,{show:d,onClose:function(){return v(!1)},children:(0,r.jsx)(f,{uuId:(0,a.Z)(),wordItem:e})})]})}},4948:function(t,e,n){"use strict";var r=n(5893);n(7294);e.Z=function(t){var e=t.children,n=t.id,o=t.index,i=t.length,a=!(o%2!==1),c=!((o+1)%3!==0);return(0,r.jsx)("li",{className:"tw-w-full tablet:tw-w-[calc((100%-0.75rem)/2)] tablet:tw-mr-3 desktop:tw-w-[calc((100%-1.5rem)/3)] ".concat(o+1<i?"tw-mb-3":""," ").concat(a?"tablet:tw-mr-0 desktop:tw-mr-3":""," ").concat(c?"desktop:tw-mr-0":""),children:e},n)}},4691:function(t,e,n){"use strict";var r=n(5893),o=n(7294),i=n(3935),a=n(923);e.Z=function(t){var e=t.children,n=t.show,c=t.onClose,s=(0,o.useState)(!1),u=s[0],l=s[1],f=(0,o.useRef)(null);(0,o.useEffect)((function(){l(!0)}),[]),(0,o.useEffect)((function(){!0===n?document.documentElement.classList.add("is-fixed"):document.documentElement.classList.remove("is-fixed")}),[n]);var w=function(t){t.preventDefault(),c()},d=(0,r.jsx)(a.Z,{in:n,timeout:400,classNames:"fade",nodeRef:f,unmountOnExit:!0,appear:!0,children:(0,r.jsx)("div",{ref:f,className:"tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-fixed tw-top-0 tw-left-0 tw-z-5000 tw-bg-black/90","aria-hidden":"true",onClick:w,children:(0,r.jsxs)("div",{className:"tw-max-w-670 tw-w-[calc(100%-20px)] tw-min-h-300 tw-max-h-[calc(100%-20px)] tw-py-8 tw-px-4 tw-relative tw-overflow-hidden tw-rounded-lg tw-bg-white desktop:tw-px-5","aria-hidden":"true",onClick:function(t){t.stopPropagation()},children:[(0,r.jsx)("button",{type:"button","aria-label":"close-popup",className:"tw-w-5 tw-h-5 tw-absolute tw-overflow-hidden tw-top-2.5 tw-right-2.5 tw-flex tw-items-center tw-justify-center tw-text-center before-font-material before:tw-content-['\\e5cd'] before:tw-w-6 before:tw-h-6 before:tw-leading-6 before:tw-block before:tw-m-auto before:tw-text-black",onClick:w}),(0,r.jsx)("div",{className:"tw-w-full tw-h-full tw-max-h-[calc(100vh-200px)] tw-overflow-x-hidden tw-overflow-y-auto",children:e})]})})});return!0===u?i.createPortal(d,document.getElementById("modal-root-popup")):null}},5369:function(t,e,n){"use strict";var r=n(5893);n(7294);e.Z=function(t){var e=t.id,n=t.wordsList,o=t.partsList,i=t.hasBrackets,a=void 0!==i&&i,c=t.hasTextCenter,s=void 0!==c&&c,u=t.hasSpeechButton,l=void 0!==u&&u,f=t.onSpeech,w=void 0===f?function(){}:f;return(0,r.jsx)(r.Fragment,{children:n.map((function(t,n){var i="".concat(e,"_zh-").concat(n);return(0,r.jsxs)("div",{className:s?"tw-flex tw-justify-center tw-items-start":"",children:[l&&0===n&&(0,r.jsx)("button",{type:"button","aria-label":"speech",className:"tw-w-8 tw-h-8 tw-inline-block tw-align-top tw-mr-1 tw-leading-8 before-font-material before:tw-content-['\\e050'] before:tw-block before:tw-leading-8",onClick:function(t){t.preventDefault(),t.stopPropagation(),w()}}),(0,r.jsxs)("span",{className:"tw-mr-2.5 tw-font-bold",children:[a&&"(",o[n],".",a&&")"]}),(0,r.jsx)("span",{children:t})]},i)}))})}},3347:function(t,e,n){"use strict";var r=n(7294),o=n(5827);e.Z=function(){var t=(0,o.h5)(),e=t.speak,n=t.speaking;return(0,r.useCallback)((function(t){!1===n&&e({text:t,voices:{default:!0,lang:"en",localService:!0,name:"Karen",voiceURI:"Karen"}})}),[e,n])}},5827:function(t,e,n){"use strict";var r=n(219);var o=n(4989);function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"h5",{enumerable:!0,get:function(){return i(o).default}})},219:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=n(7294);var i=function(t,e){var n=(0,o.useRef)((function(){throw new Error("Cannot call an event handler while rendering.")}));return(0,o.useEffect)((function(){n.current=t}),[t].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(e))),(0,o.useCallback)((function(t){return(0,n.current)(t)}),[n])};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.onEnd,n=void 0===e?function(){}:e,a=t.onResult,c=void 0===a?function(){}:a,s=t.onError,u=void 0===s?function(){}:s,l=(0,o.useRef)(null),f=(0,o.useState)(!1),w=r(f,2),d=w[0],v=w[1],p=(0,o.useState)(!1),h=r(p,2),m=h[0],b=h[1],g=function(t){var e=Array.from(t.results).map((function(t){return t[0]})).map((function(t){return t.transcript})).join("");c(e)},x=function(t){"not-allowed"===t.error&&(l.current.onend=function(){},v(!1)),u(t)},y=i((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!d&&m){var e=t.lang,n=void 0===e?"":e,r=t.interimResults,o=void 0===r||r,i=t.continuous,a=void 0!==i&&i,c=t.maxAlternatives,s=void 0===c?1:c,u=t.grammars;v(!0),l.current.lang=n,l.current.interimResults=o,l.current.onresult=g,l.current.onerror=x,l.current.continuous=a,l.current.maxAlternatives=s,u&&(l.current.grammars=u),l.current.onend=function(){return l.current.start()},l.current.start()}}),[d,m,l]),k=i((function(){d&&m&&(l.current.onresult=function(){},l.current.onend=function(){},l.current.onerror=function(){},v(!1),l.current.stop(),n())}),[d,m,l,n]);return(0,o.useEffect)((function(){"undefined"!==typeof window&&(window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition,window.SpeechRecognition&&(b(!0),l.current=new window.SpeechRecognition))}),[]),{listen:y,listening:d,stop:k,supported:m}}},4989:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=n(7294);e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.onEnd,n=void 0===e?function(){}:e,i=(0,o.useState)([]),a=r(i,2),c=a[0],s=a[1],u=(0,o.useState)(!1),l=r(u,2),f=l[0],w=l[1],d=(0,o.useState)(!1),v=r(d,2),p=v[0],h=v[1],m=function(t){s(t)},b=function(){var t=window.speechSynthesis.getVoices();t.length>0?m(t):window.speechSynthesis.onvoiceschanged=function(e){t=e.target.getVoices(),m(t)}},g=function(){w(!1),n()};(0,o.useEffect)((function(){"undefined"!==typeof window&&window.speechSynthesis&&(h(!0),b())}),[]);var x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.voice,n=void 0===e?null:e,r=t.text,o=void 0===r?"":r,i=t.rate,a=void 0===i?1:i,c=t.pitch,s=void 0===c?1:c,u=t.volume,l=void 0===u?1:u;if(p){w(!0);var f=new window.SpeechSynthesisUtterance;f.text=o,f.voice=n,f.onend=g,f.rate=a,f.pitch=s,f.volume=l,window.speechSynthesis.speak(f)}},y=function(){p&&(w(!1),window.speechSynthesis.cancel())};return{supported:p,speak:x,speaking:f,cancel:y,voices:c}}},4586:function(t,e,n){"use strict";var r;n.d(e,{Z:function(){return f}});var o=new Uint8Array(16);function i(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(t){return"string"===typeof t&&a.test(t)},s=[],u=0;u<256;++u)s.push((u+256).toString(16).substr(1));var l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n};var f=function(t,e,n){var r=(t=t||{}).random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return l(r)}}}]);