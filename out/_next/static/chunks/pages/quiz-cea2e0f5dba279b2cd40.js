(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[498],{5369:function(t,e,n){"use strict";var r=n(5893),i=(n(7294),n(7175)),o=n.n(i);e.Z=function(t){var e=t.id,n=t.wordsList,i=t.partsList,s=t.hasBrackets,c=void 0!==s&&s,a=t.hasTextCenter,u=void 0!==a&&a,l=t.hasSpeechButton,d=void 0!==l&&l,f=t.handleSpeech,w=void 0===f?function(){}:f;return(0,r.jsx)(r.Fragment,{children:n.map((function(t,n){var s="".concat(e,"_zh-").concat(n);return(0,r.jsxs)("div",{className:"".concat(u?"tw-flex tw-items-center tw-justify-center":""),children:[d&&0===n&&(0,r.jsx)("div",{className:"tw-inline-block",children:(0,r.jsx)("button",{type:"button","aria-label":"speech",className:o()["speech-btn"],onClick:w})}),(0,r.jsxs)("span",{className:"tw-mr-2.5 tw-font-bold",children:[c&&"(",i[n],".",c&&")"]}),(0,r.jsx)("span",{children:t})]},s)}))})}},1823:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r=n(5893),i=n(1385),o=n(7294),s=n(9704),c=n(5369),a=n(3347),u=n(7175),l=n.n(u),d=n(3829),f=n.n(d),w=function(t){var e=t.currentTopic,n=t.wordData,i=t.onNext,s=t.setAnswer,u=(0,a.Z)(),d=(0,o.useState)(""),w=d[0],h=d[1],v=n.en,x=n.zh,m=n.parts,p=n.id;return(0,o.useEffect)((function(){h("")}),[n]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"tw-text-md tw-text-wine tw-leading-7 tw-mb-4",children:["\u7b2c"," ",e+1," ","\u984c"]}),(0,r.jsx)("div",{className:f().textInput,children:(0,r.jsx)("input",{type:"text",value:w,onChange:function(t){var e=t.target.value;h(e.toLowerCase())},placeholder:"\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u82f1\u6587\u55ae\u5b57"})}),(0,r.jsxs)("div",{className:f().descriptionArea,children:[(0,r.jsx)("div",{className:"tw-absolute tw-top-0.5 tw-left-0",children:(0,r.jsx)("button",{type:"button","aria-label":"speech",className:l()["speech-btn"],onClick:function(){return u(v)}})}),(0,r.jsx)(c.Z,{id:p,wordsList:x,partsList:m})]}),(0,r.jsxs)("div",{className:"tw-flex tw-justify-center",children:[(0,r.jsx)("button",{type:"button",className:"\n              ".concat(f().button,"\n              ").concat(""===w.trim()?f()["is-disabled"]:"","\n            "),onClick:function(){var t=w.trim();""!==t&&s({id:p,anwser:t,solution:v,result:!(w!==v)})},children:"\u9001\u51fa"}),(0,r.jsx)("button",{type:"button",className:f().button,onClick:function(){s({id:p,anwser:"",solution:v,result:!1}),i()},children:"\u7565\u904e"})]})]})})},h="tw-py-2.5 tw-px-4 tw-leading-relaxed tw-align-middle tw-text-center tw-border tw-border-gray-light tw-border-solid tw-text-xs",v=function(t){var e=t.scoreList,n=void 0===e?[]:e,i=(0,s.v9)((function(t){return t.collection.words})),a=(0,o.useMemo)((function(){return n.map((function(t){var e=t.id,n=t.anwser,o=t.solution,s=t.result,a=i.filter((function(t){return t.id===e}))[0];return(0,r.jsxs)("tr",{className:"tw-bg-white",children:[(0,r.jsx)("td",{className:h,children:(0,r.jsx)("div",{className:"tw-text-center before-font-material before:tw-w-6 before:tw-h-6 before:tw-leading-6 before:tw-block before:tw-m-auto ".concat(s?"before:tw-content-['\\e86c'] before:tw-text-mark-green":"before:tw-content-['\\e5c9'] before:tw-text-mark-red")})}),(0,r.jsx)("td",{className:h,children:(0,r.jsx)("div",{className:"tw-min-w-sm tw-m-auto tw-whitespace-normal tablet:tw-min-w-0 tablet:tw-max-w-xs",children:(0,r.jsx)(c.Z,{id:a.id,wordsList:a.zh,partsList:a.parts})})}),(0,r.jsx)("td",{className:h,children:""===n?"-":n}),(0,r.jsx)("td",{className:h,children:o})]})}))}),[n,i]);return(0,r.jsx)("div",{className:"tw-w-full tw-overflow-x-auto tw-overflow-y-hidden tw-rounded-lg",children:(0,r.jsxs)("table",{className:"tw-w-full tw-whitespace-nowrap",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"tw-bg-green",children:[(0,r.jsx)("th",{className:"".concat(h," tw-text-white"),children:"\u6210\u7e3e"}),(0,r.jsx)("th",{className:"".concat(h," tw-text-white"),children:"\u984c\u76ee"}),(0,r.jsx)("th",{className:"".concat(h," tw-text-white"),children:"\u4f60\u7684\u7b54\u6848"}),(0,r.jsx)("th",{className:"".concat(h," tw-text-white"),children:"\u6b63\u78ba\u7b54\u6848"})]})}),(0,r.jsx)("tbody",{children:a})]})})},x=function(t,e){for(var n=[],r=[];n.length<t;){var i=Math.round(Math.random()*e);r[i]||(r[i]=!0,n.push(i))}return n},m=n(6624),p=function(){var t=(0,s.I0)(),e=(0,s.v9)((function(t){return t.collection.words})),n=(0,s.v9)((function(t){return t.examination})),c=n.isExamTesting,a=n.questions,u=(0,o.useState)(!1),l=u[0],d=u[1],h=(0,o.useState)(10)[0],p=(0,o.useState)(0),b=p[0],j=p[1],_=(0,o.useState)([]),y=_[0],g=_[1],N=(0,o.useState)(0),S=N[0],k=N[1],E=function(){var e=b+1;e>h-1?(d(!0),j(0),t((0,m.d9)([])),t((0,m.Lf)(!1))):j(e)};return(0,o.useEffect)((function(){return function(){t((0,m.Lf)(!1))}}),[]),(0,o.useEffect)((function(){var t=y.filter((function(t){return!0===t.result})).length/y.length,e=Number.isNaN(t)?0:t,n=Math.floor(100*e);k(n)}),[y]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"title",children:"\u55ae\u5b57\u6e2c\u9a57"}),(0,r.jsx)("div",{className:"content",children:c?(0,r.jsx)(w,{currentTopic:b,wordData:a[b],onNext:E,setAnswer:function(t){g([].concat((0,i.Z)(y),[t])),E()}}):(0,r.jsxs)("div",{children:[l?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"tw-text-wine/80 tw-my-8 tw-text-md tw-text-center",children:["\u6211\u7684\u6210\u7e3e\uff1a",S,"\u5206"]}),(0,r.jsx)(v,{scoreList:y})]}):(0,r.jsxs)("div",{className:"tw-text-wine/80 tw-my-8 tw-text-md tw-text-center",children:["\u586b\u7a7a\u6e2c\u9a57\uff08",h,"\u984c\uff09"]}),(0,r.jsx)("div",{className:"tw-my-5 tw-flex tw-justify-center",children:(0,r.jsx)("button",{type:"button",className:f().button,onClick:function(){var n=x(h,e.length);d(!1),j(0),g([]),t((0,m.d9)(n.map((function(t){return e[t]})))),t((0,m.Lf)(!0))},children:l?"\u518d\u6b21\u6e2c\u9a57":"\u958b\u59cb\u6e2c\u9a57"})})]})})]})}},3347:function(t,e,n){"use strict";var r=n(7294),i=n(5827);e.Z=function(){var t=(0,i.h5)(),e=t.speak,n=t.speaking;return(0,r.useCallback)((function(t){!1===n&&e({text:t})}),[e,n])}},4703:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quiz",function(){return n(1823)}])},7175:function(t){t.exports={"fab-btn":"button_fab-btn__3WWnB","fab__sort-down-btn":"button_fab__sort-down-btn__3smar","is-down-alt":"button_is-down-alt__7NUFE","fab__update-btn":"button_fab__update-btn__3hUwH","speech-btn":"button_speech-btn__3FkzA"}},3829:function(t){t.exports={button:"examination_button__15LQY","is-disabled":"examination_is-disabled__4a9cL",textInput:"examination_textInput__15FrI",descriptionArea:"examination_descriptionArea__3MTKR"}},5827:function(t,e,n){"use strict";var r=n(219);var i=n(4989);function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"h5",{enumerable:!0,get:function(){return o(i).default}})},219:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var s,c=t[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(a){i=!0,o=a}finally{try{!r&&c.return&&c.return()}finally{if(i)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=n(7294);var o=function(t,e){var n=(0,i.useRef)((function(){throw new Error("Cannot call an event handler while rendering.")}));return(0,i.useEffect)((function(){n.current=t}),[t].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(e))),(0,i.useCallback)((function(t){return(0,n.current)(t)}),[n])};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.onEnd,n=void 0===e?function(){}:e,s=t.onResult,c=void 0===s?function(){}:s,a=t.onError,u=void 0===a?function(){}:a,l=(0,i.useRef)(null),d=(0,i.useState)(!1),f=r(d,2),w=f[0],h=f[1],v=(0,i.useState)(!1),x=r(v,2),m=x[0],p=x[1],b=function(t){var e=Array.from(t.results).map((function(t){return t[0]})).map((function(t){return t.transcript})).join("");c(e)},j=function(t){"not-allowed"===t.error&&(l.current.onend=function(){},h(!1)),u(t)},_=o((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!w&&m){var e=t.lang,n=void 0===e?"":e,r=t.interimResults,i=void 0===r||r,o=t.continuous,s=void 0!==o&&o,c=t.maxAlternatives,a=void 0===c?1:c,u=t.grammars;h(!0),l.current.lang=n,l.current.interimResults=i,l.current.onresult=b,l.current.onerror=j,l.current.continuous=s,l.current.maxAlternatives=a,u&&(l.current.grammars=u),l.current.onend=function(){return l.current.start()},l.current.start()}}),[w,m,l]),y=o((function(){w&&m&&(l.current.onresult=function(){},l.current.onend=function(){},l.current.onerror=function(){},h(!1),l.current.stop(),n())}),[w,m,l,n]);return(0,i.useEffect)((function(){"undefined"!==typeof window&&(window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition,window.SpeechRecognition&&(p(!0),l.current=new window.SpeechRecognition))}),[]),{listen:_,listening:w,stop:y,supported:m}}},4989:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var s,c=t[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(a){i=!0,o=a}finally{try{!r&&c.return&&c.return()}finally{if(i)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=n(7294);e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.onEnd,n=void 0===e?function(){}:e,o=(0,i.useState)([]),s=r(o,2),c=s[0],a=s[1],u=(0,i.useState)(!1),l=r(u,2),d=l[0],f=l[1],w=(0,i.useState)(!1),h=r(w,2),v=h[0],x=h[1],m=function(t){a(t)},p=function(){var t=window.speechSynthesis.getVoices();t.length>0?m(t):window.speechSynthesis.onvoiceschanged=function(e){t=e.target.getVoices(),m(t)}},b=function(){f(!1),n()};(0,i.useEffect)((function(){"undefined"!==typeof window&&window.speechSynthesis&&(x(!0),p())}),[]);var j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.voice,n=void 0===e?null:e,r=t.text,i=void 0===r?"":r,o=t.rate,s=void 0===o?1:o,c=t.pitch,a=void 0===c?1:c,u=t.volume,l=void 0===u?1:u;if(v){f(!0);var d=new window.SpeechSynthesisUtterance;d.text=i,d.voice=n,d.onend=b,d.rate=s,d.pitch=a,d.volume=l,window.speechSynthesis.speak(d)}},_=function(){v&&(f(!1),window.speechSynthesis.cancel())};return{supported:v,speak:j,speaking:d,cancel:_,voices:c}}}},function(t){t.O(0,[774,888,179],(function(){return e=4703,t(t.s=e);var e}));var e=t.O();_N_E=e}]);