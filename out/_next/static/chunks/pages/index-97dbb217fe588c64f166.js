(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3407:function(t,e,n){"use strict";n.d(e,{Ph:function(){return s},oH:function(){return l},KM:function(){return c}});var r=n(5893),a=n(7294),o=n(1898),i=n.n(o),s=function(t){var e=t.options,n=t.onChange,o=(0,a.useState)(""),s=o[0],l=o[1];(0,a.useEffect)((function(){var t=e.length>0?e[0].value:"";l(t)}),[e]);return(0,r.jsx)("div",{className:i().select,children:(0,r.jsx)("select",{value:s,onChange:function(t){l(t.target.value),n(t)},children:e.map((function(t){var e=t.value,n=t.name;return(0,r.jsx)("option",{value:e,children:n},e)}))})})},l=function(t){var e=t.defaultValue,n=void 0===e?"":e,a=t.placeholder,o=void 0===a?"":a,i=t.onChange;return(0,r.jsx)("input",{type:"text",className:"tw-w-full tw-h-10 tw-block tw-py-3 tw-px-4 tw-leading-4 tw-rounded-md tw-text-xs tw-bg-gray-light",value:n,onChange:i,placeholder:o})},c=function(t){var e=t.text,n=void 0===e?"":e,a=t.colorStyle,o=void 0===a?"green":a,i=t.isDisabled,s=void 0!==i&&i,l=t.onClick,c=void 0===l?function(){}:l;return(0,r.jsx)("button",{type:"button",className:"tw-min-w-105 tw-py-2 tw-px-5 tw-mx-1.5 tw-inline-block tw-text-sm tw-text-center tw-text-white tw-rounded-lg tw-leading-6 ".concat(s?"tw-bg-black tw-opacity-60 tw-cursor-not-allowed":"red"===o?"tw-bg-mark-red desktop:hover:tw-bg-wine":"tw-bg-green desktop:hover:tw-bg-green-dark"),onClick:c,title:n,children:n})}},5369:function(t,e,n){"use strict";var r=n(5893);n(7294);e.Z=function(t){var e=t.id,n=t.wordsList,a=t.partsList,o=t.hasBrackets,i=void 0!==o&&o,s=t.hasTextCenter,l=void 0!==s&&s,c=t.hasSpeechButton,w=void 0!==c&&c,u=t.onSpeech,d=void 0===u?function(){}:u;return(0,r.jsx)(r.Fragment,{children:n.map((function(t,n){var o="".concat(e,"_zh-").concat(n);return(0,r.jsxs)("div",{className:l?"tw-flex tw-justify-center tw-items-start":"",children:[w&&0===n&&(0,r.jsx)("button",{type:"button","aria-label":"speech",className:"tw-inline-block tw-align-top tw-mr-1 tw-leading-8 before-font-material before:tw-content-['\\e050'] before:tw-w-8 before:tw-h-8 before:tw-block before:tw-leading-8 before:tw-text-center",onClick:function(t){t.preventDefault(),t.stopPropagation(),d()}}),(0,r.jsxs)("span",{className:"tw-mr-2.5 tw-font-bold",children:[i&&"(",a[n],".",i&&")"]}),(0,r.jsx)("span",{children:t})]},o)}))})}},7099:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});var r=n(5893),a=n(7294),o=n(9704),i=n(809),s=n.n(i),l=n(2447),c=(n(1079),n(1163)),w=n(7115),u=n(4002),d=n(4586),f=n(3407),x=n(5369),b=n(3347),h=n(9054),v=n(347),p=function(t){var e=t.dateCaption,n=void 0===e?"":e,i=t.wordsData,p=void 0===i?[]:i,m=(0,c.useRouter)(),g=(0,o.I0)(),j=(0,b.Z)(),k=(0,a.useState)(null),N=k[0],y=k[1],_=(0,a.useState)(0),C=_[0],S=_[1],z=(0,o.v9)((function(t){return t.daily})).isShowGuideButton;return(0,a.useEffect)((function(){C===p.length-1&&g((0,h.Ny)(!0))}),[C]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"tw-flex tw-justify-between tw-items-center tw-flex-wrap tw-mb-4",children:[(0,r.jsx)("h1",{className:"tw-flex tw-items-center tw-leading-8 tw-text-sm mini:tw-text-md tw-text-green-dark before-font-material before:tw-content-['\\e8ce'] before:tw-w-8 before:tw-h-8 before:tw-leading-8 before:tw-block before:tw-text-center",children:"\u4eca\u65e5\u55ae\u5b57"}),(0,r.jsx)("div",{className:"tw-flex tw-items-center tw-justify-start tw-text-xs",children:n})]}),(0,r.jsxs)("div",{className:"carousel tw-relative tw-overflow-hidden",children:[(0,r.jsx)("button",{type:"button","aria-label":"carousel-prev-button",className:"carousel-prev-button tw-w-6 tw-h-6 tw-text-center tw-block tw-absolute tw-left-1 tw-top-2/4 tw--translate-y-2/4 tw-z-50 before-font-material before:tw-block before:tw-m-auto ".concat(0===C?"before:tw-text-gray before:tw-cursor-not-allowed":"before:tw-text-black"),onClick:function(){return null===N||void 0===N?void 0:N.slidePrev()}}),(0,r.jsx)(w.t,{spaceBetween:10,slidesPerView:1,onSlideChange:function(t){var e=t.realIndex;return S(e)},onBeforeInit:function(t){return y(t)},children:null===p||void 0===p?void 0:p.map((function(t){var e=t.id,n=t.en,a=t.zh,o=t.parts;return(0,r.jsx)(u.o,{children:(0,r.jsx)("div",{className:"tw-w-full tw-h-full tw-p-1",children:(0,r.jsx)("div",{className:"tw-w-full tw-h-full tw-py-16 tw-px-6 tw-flex tw-justify-center tw-items-center tw-rounded-lg tw-shadow-[0_1px_3px_0_rgba(51,51,51,0.4)]",children:(0,r.jsxs)("div",{className:"tw-w-full",children:[(0,r.jsx)("div",{className:"tw-text-xl tw-text-center tw-leading-relaxed tw-text-wine tw-break-all tw-mb-2.5",children:n}),(0,r.jsx)("div",{className:"tw-leading-8 tw-text-xs mini:tw-text-sm",children:(0,r.jsx)(x.Z,{id:e,wordsList:a,partsList:o,hasBrackets:!0,hasTextCenter:!0,hasSpeechButton:!0,onSpeech:function(){return j(n)}})})]})})})},(0,d.Z)())}))}),(0,r.jsx)("button",{type:"button","aria-label":"carousel-next-button",className:"carousel-next-button tw-w-6 tw-h-6 tw-text-center tw-block tw-absolute tw-right-1 tw-top-2/4 tw--translate-y-2/4 tw-z-50 before-font-material before:tw-block before:tw-m-auto ".concat(C===p.length-1?"before:tw-text-gray before:tw-cursor-not-allowed":"before:tw-text-black"),onClick:function(){return null===N||void 0===N?void 0:N.slideNext()}}),(0,r.jsx)("div",{className:"tw-absolute tw-right-4 tw-top-3 tw-z-50",children:(0,r.jsxs)("span",{className:"tw-text-brown/80 tw-text-xs tw-font-bold",children:[C+1,"/",p.length]})})]}),z&&(0,r.jsx)("div",{className:"tw-flex tw-justify-center tw-mt-3",children:(0,r.jsx)(f.KM,{text:"\u6e2c\u9a57\u4eca\u65e5\u55ae\u5b57",onClick:(0,l.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g((0,v.oy)(!0));case 2:return t.next=4,m.push("/quiz/daily-writed-exam");case 4:case"end":return t.stop()}}),t)})))})})]})},m=function(){var t=(0,o.v9)((function(t){return t.daily})),e=t.dateCaption,n=t.dailyWords;return(0,r.jsx)("div",{className:"content size-small tw-py-5 tw-px-3 tablet:tw-px-4",children:(0,r.jsx)(p,{dateCaption:e,wordsData:n})})}},3347:function(t,e,n){"use strict";var r=n(7294),a=n(5827);e.Z=function(){var t=(0,a.h5)(),e=t.speak,n=t.speaking;return(0,r.useCallback)((function(t){!1===n&&e({text:t,voices:{default:!0,lang:"en",localService:!0,name:"Karen",voiceURI:"Karen"}})}),[e,n])}},5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7099)}])},1898:function(t){t.exports={select:"form_select__100yN"}}},function(t){t.O(0,[614,774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);