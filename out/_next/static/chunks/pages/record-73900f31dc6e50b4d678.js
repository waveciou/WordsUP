(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[608],{1646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,s=6e4,r=36e5,i=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,c=2592e6,l=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:a,months:c,days:i,hours:r,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},u=function(t){return t instanceof p},w=function(t,e,n){return new p(t,n,e.$l)},f=function(t){return e.p(t)+"s"},h=function(t){return t<0},m=function(t){return h(t)?Math.ceil(t):Math.floor(t)},x=function(t){return Math.abs(t)},b=function(t,e){return t?h(t)?{negative:!0,format:""+x(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},p=function(){function h(t,e,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return w(t*d[f(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){s.$d[f(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var r=t.match(l);if(r){var i=r.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=i[0],this.$d.months=i[1],this.$d.weeks=i[2],this.$d.days=i[3],this.$d.hours=i[4],this.$d.minutes=i[5],this.$d.seconds=i[6],this.calMilliseconds(),this}}return this}var x=h.prototype;return x.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*d[n]}),0)},x.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/c),t%=c,this.$d.days=m(t/i),t%=i,this.$d.hours=m(t/r),t%=r,this.$d.minutes=m(t/s),t%=s,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},x.toISOString=function(){var t=b(this.$d.years,"Y"),e=b(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=b(n,"D"),r=b(this.$d.hours,"H"),i=b(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=b(o,"S"),c=t.negative||e.negative||s.negative||r.negative||i.negative||a.negative,l=r.format||i.format||a.format?"T":"",d=(c?"-":"")+"P"+t.format+e.format+s.format+l+r.format+i.format+a.format;return"P"===d||"-P"===d?"P0D":d},x.toJSON=function(){return this.toISOString()},x.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(s[t])}))},x.as=function(t){return this.$ms/d[f(t)]},x.get=function(t){var e=this.$ms,n=f(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/d[n]):this.$d[n],0===e?0:e},x.add=function(t,e,n){var s;return s=e?t*d[f(e)]:u(t)?t.$ms:w(t,this).$ms,w(this.$ms+s*(n?-1:1),this)},x.subtract=function(t,e){return this.add(t,e,!0)},x.locale=function(t){var e=this.clone();return e.$l=t,e},x.clone=function(){return w(this.$ms,this)},x.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},x.milliseconds=function(){return this.get("milliseconds")},x.asMilliseconds=function(){return this.as("milliseconds")},x.seconds=function(){return this.get("seconds")},x.asSeconds=function(){return this.as("seconds")},x.minutes=function(){return this.get("minutes")},x.asMinutes=function(){return this.as("minutes")},x.hours=function(){return this.get("hours")},x.asHours=function(){return this.as("hours")},x.days=function(){return this.get("days")},x.asDays=function(){return this.as("days")},x.weeks=function(){return this.get("weeks")},x.asWeeks=function(){return this.as("weeks")},x.months=function(){return this.get("months")},x.asMonths=function(){return this.as("months")},x.years=function(){return this.get("years")},x.asYears=function(){return this.as("years")},h}();return function(n,s,r){t=r,e=r().$utils(),r.duration=function(t,e){var n=r.locale();return w(t,{$l:n},e)},r.isDuration=u;var i=s.prototype.add,o=s.prototype.subtract;s.prototype.add=function(t,e){return u(t)&&(t=t.asMilliseconds()),i.bind(this)(t,e)},s.prototype.subtract=function(t,e){return u(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},3407:function(t,e,n){"use strict";n.d(e,{Ph:function(){return a},oH:function(){return c},KM:function(){return l}});var s=n(5893),r=n(7294),i=n(1898),o=n.n(i),a=function(t){var e=t.options,n=t.onChange,i=(0,r.useState)(""),a=i[0],c=i[1];(0,r.useEffect)((function(){var t=e.length>0?e[0].value:"";c(t)}),[e]);return(0,s.jsx)("div",{className:o().select,children:(0,s.jsx)("select",{value:a,onChange:function(t){c(t.target.value),n(t)},children:e.map((function(t){var e=t.value,n=t.name;return(0,s.jsx)("option",{value:e,children:n},e)}))})})},c=function(t){var e=t.defaultValue,n=void 0===e?"":e,r=t.placeholder,i=void 0===r?"":r,o=t.onChange;return(0,s.jsx)("input",{type:"text",className:"tw-w-full tw-h-10 tw-block tw-py-3 tw-px-4 tw-leading-4 tw-rounded-md tw-text-xs tw-bg-gray-light",value:n,onChange:o,placeholder:i})},l=function(t){var e=t.text,n=void 0===e?"":e,r=t.colorStyle,i=void 0===r?"green":r,o=t.isDisabled,a=void 0!==o&&o,c=t.onClick,l=void 0===c?function(){}:c;return(0,s.jsx)("button",{type:"button",className:"tw-min-w-105 tw-py-2 tw-px-5 tw-mx-1.5 tw-inline-block tw-text-sm tw-text-center tw-text-white tw-rounded-lg tw-leading-6 ".concat(a?"tw-bg-black tw-opacity-60 tw-cursor-not-allowed":"red"===i?"tw-bg-mark-red desktop:hover:tw-bg-wine":"tw-bg-green desktop:hover:tw-bg-green-dark"),onClick:l,title:n,children:n})}},4691:function(t,e,n){"use strict";var s=n(5893),r=n(7294),i=n(3935),o=n(923);e.Z=function(t){var e=t.children,n=t.show,a=t.onClose,c=(0,r.useState)(!1),l=c[0],d=c[1],u=(0,r.useRef)(null);(0,r.useEffect)((function(){d(!0)}),[]),(0,r.useEffect)((function(){!0===n?document.documentElement.classList.add("is-fixed"):document.documentElement.classList.remove("is-fixed")}),[n]);var w=function(t){t.preventDefault(),a()},f=(0,s.jsx)(o.Z,{in:n,timeout:400,classNames:"fade",nodeRef:u,unmountOnExit:!0,appear:!0,children:(0,s.jsx)("div",{ref:u,className:"tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-fixed tw-top-0 tw-left-0 tw-z-5000 tw-bg-black/90","aria-hidden":"true",onClick:w,children:(0,s.jsxs)("div",{className:"tw-max-w-670 tw-w-[calc(100%-20px)] tw-min-h-300 tw-max-h-[calc(100%-20px)] tw-py-8 tw-px-4 tw-relative tw-overflow-hidden tw-rounded-lg tw-bg-white desktop:tw-px-5","aria-hidden":"true",onClick:function(t){t.stopPropagation()},children:[(0,s.jsx)("button",{type:"button","aria-label":"close-popup",className:"tw-w-5 tw-h-5 tw-absolute tw-overflow-hidden tw-top-2.5 tw-right-2.5 tw-flex tw-items-center tw-justify-center tw-text-center before-font-material before:tw-content-['\\e5cd'] before:tw-w-6 before:tw-h-6 before:tw-leading-6 before:tw-block before:tw-m-auto before:tw-text-black",onClick:w}),(0,s.jsx)("div",{className:"tw-w-full tw-h-full tw-max-h-[calc(100vh-200px)] tw-overflow-x-hidden tw-overflow-y-auto",children:e})]})})});return!0===l?i.createPortal(f,document.getElementById("modal-root-popup")):null}},1370:function(t,e,n){"use strict";var s=n(5893),r=n(7294),i=n(9704),o=n(4586),a=n(5369),c="tw-py-2.5 tw-px-4 tw-leading-relaxed tw-align-middle tw-text-center tw-border tw-border-gray-light tw-border-solid tw-text-xs";e.Z=function(t){var e=t.scoreList,n=void 0===e?[]:e,l=(0,i.v9)((function(t){return t.collection.words})),d=(0,r.useMemo)((function(){return n.map((function(t){var e=t.id,n=t.answer,r=t.solution,i=t.result,d=(0,o.Z)(),u=l.filter((function(t){return t.id===e}))[0];return(0,s.jsxs)("tr",{className:"tw-bg-white",children:[(0,s.jsx)("td",{className:c,children:i?(0,s.jsx)("div",{className:"tw-text-center before-font-material before:tw-w-6 before:tw-h-6 before:tw-leading-6 before:tw-block before:tw-m-auto before:tw-content-['\\e86c'] before:tw-text-mark-green"}):(0,s.jsx)("div",{className:"tw-text-center before-font-material before:tw-w-6 before:tw-h-6 before:tw-leading-6 before:tw-block before:tw-m-auto before:tw-content-['\\e5c9'] before:tw-text-mark-red"})}),(0,s.jsx)("td",{className:c,children:(0,s.jsx)("div",{className:"tw-min-w-200 tw-m-auto tw-whitespace-normal tablet:tw-min-w-0 tablet:tw-max-w-xs",children:(0,s.jsx)(a.Z,{id:u.id,wordsList:u.zh,partsList:u.parts})})}),(0,s.jsx)("td",{className:c,children:""===n?"-":n}),(0,s.jsx)("td",{className:c,children:r})]},d)}))}),[n,l]);return(0,s.jsx)("div",{className:"tw-w-full tw-overflow-x-auto tw-overflow-y-hidden tw-rounded-lg",children:(0,s.jsxs)("table",{className:"tw-w-full tw-whitespace-nowrap",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"tw-bg-green",children:[(0,s.jsx)("th",{className:"".concat(c," tw-text-white"),children:"\u6210\u7e3e"}),(0,s.jsx)("th",{className:"".concat(c," tw-text-white"),children:"\u984c\u76ee"}),(0,s.jsx)("th",{className:"".concat(c," tw-text-white"),children:"\u4f60\u7684\u7b54\u6848"}),(0,s.jsx)("th",{className:"".concat(c," tw-text-white"),children:"\u6b63\u78ba\u7b54\u6848"})]})}),(0,s.jsx)("tbody",{children:d})]})})}},5369:function(t,e,n){"use strict";var s=n(5893);n(7294);e.Z=function(t){var e=t.id,n=t.wordsList,r=t.partsList,i=t.hasBrackets,o=void 0!==i&&i,a=t.hasTextCenter,c=void 0!==a&&a,l=t.hasSpeechButton,d=void 0!==l&&l,u=t.onSpeech,w=void 0===u?function(){}:u;return(0,s.jsx)(s.Fragment,{children:n.map((function(t,n){var i="".concat(e,"_zh-").concat(n);return(0,s.jsxs)("div",{className:c?"tw-flex tw-justify-center tw-items-start":"",children:[d&&0===n&&(0,s.jsx)("button",{type:"button","aria-label":"speech",className:"tw-inline-block tw-align-top tw-mr-1 tw-leading-8 before-font-material before:tw-content-['\\e050'] before:tw-w-8 before:tw-h-8 before:tw-block before:tw-leading-8 before:tw-text-center",onClick:function(t){t.preventDefault(),t.stopPropagation(),w()}}),(0,s.jsxs)("span",{className:"tw-mr-2.5 tw-font-bold",children:[o&&"(",r[n],".",o&&")"]}),(0,s.jsx)("span",{children:t})]},i)}))})}},1903:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return k}});var s=n(5893),r=n(7294),i=n(9704),o=n(4586),a=n(4977),c=n(809),l=n.n(c),d=n(2447),u=n(7484),w=n.n(u),f=n(1646),h=n.n(f),m=n(178),x=n.n(m),b=n(1163),p=n(3407),v=n(4691),g=n(1370),j=n(3351),y=n(7554),N=n(347),$=function(t){var e=t.recordData;w().extend(x()),w().extend(h());var n=(0,b.useRouter)(),o=(0,i.I0)(),c=(0,r.useState)(!1),u=c[0],f=c[1],m=(0,r.useState)(!1),$=m[0],k=m[1],M=(0,r.useState)(""),S=M[0],C=M[1],Z=(0,r.useState)(""),Y=Z[0],_=Z[1],D=e.id,E=e.startTime,H=e.finishTime,T=e.answerState;return(0,r.useEffect)((function(){var t=w()(E).utcOffset(8).format("YYYY\u5e74MM\u6708DD\u65e5 HH:mm");C(t)}),[E]),(0,r.useEffect)((function(){var t=w().duration(H-E).format("HH:mm:ss");_(t)}),[E,H]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"tw-w-full tw-flex tw-items-center tw-py-3 tw-px-4 tw-rounded-lg tw-cursor-pointer tw-shadow-[0_1px_3px_0_rgba(51,51,51,0.2)]","aria-hidden":"true",onClick:function(){return f(!0)},children:[(0,s.jsxs)("div",{className:"tw-w-16 tablet:tw-w-24 tw-text-green-dark",children:[(0,s.jsx)("span",{className:"tw-leading-relaxed tw-text-lg tablet:tw-text-xl",children:(0,y.Z)(T)}),(0,s.jsx)("span",{className:"tw-text-xs",children:"\u5206"})]}),(0,s.jsxs)("div",{className:"tw-w-[calc(100%-4rem)] tablet:tw-w-[calc(100%-6rem)] tw-overflow-hidden tw-pl-1",children:[(0,s.jsx)("div",{className:"tw-truncate tw-leading-relaxed tw-text-sm tablet:tw-text-base tw-text-wine",children:(0,j.Z)(D)}),(0,s.jsx)("div",{className:"tw-truncate tw-leading-relaxed tw-text-xxs tablet:tw-text-xs tw-text-black",children:S})]})]}),(0,s.jsx)(v.Z,{show:u,onClose:function(){return f(!1)},children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"tw-w-full tw-text-center tw-text-wine tw-text-base tablet:tw-text-lg tw-leading-relaxed tw-mb-4",children:(0,j.Z)(D)}),(0,s.jsxs)("div",{className:"tw-text-xs tablet:tw-text-xs tw-p-2 tablet:tw-p-4 tw-mb-4 tw-border tw-border-gray-light tw-border-solid tw-rounded-lg",children:[(0,s.jsxs)("dl",{className:"tw-flex tw-items-center tw-flex-wrap tw-mb-2",children:[(0,s.jsx)("dt",{className:"tw-flex tw-items-center before-font-material before:tw-content-['\\e8e8'] before:tw-block before:tw-mr-2",children:"\u5206\u6578\uff1a"}),(0,s.jsxs)("dd",{children:[(0,y.Z)(T)," ","\u5206"]})]}),(0,s.jsxs)("dl",{className:"tw-flex tw-items-center tw-flex-wrap tw-mb-2",children:[(0,s.jsx)("dt",{className:"tw-flex tw-items-center before-font-material before:tw-content-['\\f045'] before:tw-block before:tw-mr-2",children:"\u984c\u6578\uff1a"}),(0,s.jsxs)("dd",{children:[T.length," ","\u984c"]})]}),(0,s.jsxs)("dl",{className:"tw-flex tw-items-center tw-flex-wrap tw-mb-2",children:[(0,s.jsx)("dt",{className:"tw-flex tw-items-center before-font-material before:tw-content-['\\e924'] before:tw-block before:tw-mr-2",children:"\u6e2c\u9a57\u6642\u9593\uff1a"}),(0,s.jsx)("dd",{children:S})]}),(0,s.jsxs)("dl",{className:"tw-flex tw-items-center tw-flex-wrap",children:[(0,s.jsx)("dt",{className:"tw-flex tw-items-center before-font-material before:tw-content-['\\e425'] before:tw-block before:tw-mr-2",children:"\u4f5c\u7b54\u6642\u9593\uff1a"}),(0,s.jsx)("dd",{children:Y})]})]}),(0,s.jsx)(g.Z,{scoreList:T}),(0,s.jsxs)("div",{className:"tw-mt-5 tw-flex tw-justify-center",children:[(0,s.jsx)(p.KM,{text:"\u91cd\u65b0\u6e2c\u9a57",onClick:(0,d.Z)(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o((0,N.oy)(!0));case 2:return t.next=4,n.push("/quiz/".concat(D));case 4:case"end":return t.stop()}}),t)})))}),(0,s.jsx)(p.KM,{text:"\u522a\u9664\u7d00\u9304",colorStyle:"red",onClick:function(){return k(!0)}})]})]})}),(0,s.jsx)(a.Z,{show:$,title:"\u78ba\u5b9a\u8981\u522a\u9664\u9019\u7b46\u7d00\u9304\uff1f",content:"\u6b64\u52d5\u4f5c\u5c07\u7121\u6cd5\u5fa9\u539f",confirmText:"\u78ba\u5b9a",cancelText:"\u53d6\u6d88",onConfirm:function(){f(!1),o((0,N.VY)(E))},onCancel:function(){return k(!1)}})]})},k=function(){var t=(0,i.I0)(),e=(0,i.v9)((function(t){return t.exam})).recordCollection,n=(0,r.useState)(!1),c=n[0],l=n[1],d=(0,r.useMemo)((function(){return e.map((function(t,n){return(0,s.jsx)("li",{className:"".concat(n+1<e.length?"tw-mb-3":""),children:(0,s.jsx)($,{recordData:t})},(0,o.Z)())}))}),[e]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"title",children:"\u6e2c\u9a57\u7d00\u9304"}),e.length>0&&(0,s.jsx)("div",{className:"content tw-p-0 tw-rounded-none tw-bg-transparent",children:(0,s.jsxs)("div",{className:"tw-flex tw-justify-between tw-items-center",children:[(0,s.jsxs)("div",{className:"tw-text-yellow tw-text-xs",children:["\u5171",(0,s.jsx)("span",{className:"tw-mx-1",children:e.length}),"\u7b46\u7d00\u9304"]}),(0,s.jsx)("button",{type:"button",className:"tw-inline-flex tw-items-center tw-py-2 tw-pl-2 tw-pr-3 tw-rounded-lg tw-bg-white tw-text-black tw-text-xxs before-font-material before:tw-content-['\\e92b'] before:tw-text-black desktop:hover:tw-bg-green-dark desktop:hover:tw-text-white desktop:hover:before:tw-text-white","aria-label":"data-update-button",onClick:function(){return l(!0)},children:"\u6e05\u9664\u5168\u90e8\u7d00\u9304"})]})}),(0,s.jsx)("div",{className:"content",children:e.length>0?(0,s.jsx)("ul",{children:d}):(0,s.jsx)("div",{className:"tw-text-center tw-text-gray tw-py-8",children:"\u76ee\u524d\u6c92\u6709\u4efb\u4f55\u6e2c\u9a57\u7d00\u9304"})}),(0,s.jsx)(a.Z,{show:c,title:"\u78ba\u5b9a\u8981\u6e05\u9664\u5168\u90e8\u7d00\u9304\uff1f",content:"\u6b64\u52d5\u4f5c\u5c07\u7121\u6cd5\u5fa9\u539f",confirmText:"\u78ba\u5b9a",cancelText:"\u53d6\u6d88",onConfirm:function(){t((0,N.jh)([])),l(!1)},onCancel:function(){return l(!1)}})]})}},3351:function(t,e){"use strict";e.Z=function(t){switch(t){case"writed-exam":return"\u55ae\u5b57\u586b\u7a7a\u6e2c\u9a57";case"daily-writed-exam":return"\u4eca\u65e5\u55ae\u5b57\u586b\u7a7a\u6e2c\u9a57";default:return""}}},7554:function(t,e,n){"use strict";var s=n(1385);e.Z=function(t){var e=(0,s.Z)(t),n=e.filter((function(t){return!0===t.result})).length/e.length,r=Number.isNaN(n)?0:n;return Math.floor(100*r)}},5650:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/record",function(){return n(1903)}])},1898:function(t){t.exports={select:"form_select__100yN"}},4586:function(t,e,n){"use strict";var s;n.d(e,{Z:function(){return u}});var r=new Uint8Array(16);function i(){if(!s&&!(s="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(r)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var a=function(t){return"string"===typeof t&&o.test(t)},c=[],l=0;l<256;++l)c.push((l+256).toString(16).substr(1));var d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]).toLowerCase();if(!a(n))throw TypeError("Stringified UUID is invalid");return n};var u=function(t,e,n){var s=(t=t||{}).random||(t.rng||i)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e){n=n||0;for(var r=0;r<16;++r)e[n+r]=s[r];return e}return d(s)}}},function(t){t.O(0,[774,888,179],(function(){return e=5650,t(t.s=e);var e}));var e=t.O();_N_E=e}]);