(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59],{6010:function(c,a,b){"use strict";function d(a){var b,e,c="";if("string"==typeof a||"number"==typeof a)c+=a;else if("object"==typeof a)if(Array.isArray(a))for(b=0;b<a.length;b++)a[b]&&(e=d(a[b]))&&(c&&(c+=" "),c+=e);else for(b in a)a[b]&&(c&&(c+=" "),c+=b);return c}function e(){for(var b,c,e=0,a="";e<arguments.length;)(b=arguments[e++])&&(c=d(b))&&(a&&(a+=" "),a+=c);return a}b.d(a,{Z:function(){return e}})},1551:function(d,c,a){"use strict";function e(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function f(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||g(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(a,c){if(a){if("string"==typeof a)return e(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return e(a,c)}}c.default=void 0;var b,h=(b=a(7294))&&b.__esModule?b:{default:b},i=a(1003),j=a(880),k=a(9246),l={};function m(a,c,d,b){if(a&&i.isLocalURL(c)){a.prefetch(c,d,b).catch(function(a){});var e=b&& void 0!==b.locale?b.locale:a&&a.locale;l[c+"%"+d+(e?"%"+e:"")]=!0}}c.default=function(b){var c,r=!1!==b.prefetch,a=j.useRouter(),o=h.default.useMemo(function(){var c=f(i.resolveHref(a,b.href,!0),2),d=c[0],e=c[1];return{href:d,as:b.as?i.resolveHref(a,b.as):e||d}},[a,b.href,b.as]),s=o.href,e=o.as,d=b.children,y=b.replace,z=b.shallow,A=b.scroll,g=b.locale;"string"==typeof d&&(d=h.default.createElement("a",null,d));var t=(c=h.default.Children.only(d))&&"object"==typeof c&&c.ref,p=f(k.useIntersection({rootMargin:"200px"}),2),u=p[0],v=p[1],w=h.default.useCallback(function(a){u(a),t&&("function"==typeof t?t(a):"object"==typeof t&&(t.current=a))},[t,u]);h.default.useEffect(function(){var c=v&&r&&i.isLocalURL(s),b=void 0!==g?g:a&&a.locale,d=l[s+"%"+e+(b?"%"+b:"")];c&&!d&&m(a,s,e,{locale:b})},[e,s,v,g,r,a]);var n={ref:w,onClick:function(f){var d,j,h,k,l,m,n,o,b,p;c.props&&"function"==typeof c.props.onClick&&c.props.onClick(f),f.defaultPrevented||(d=f,j=a,h=s,k=e,l=y,m=z,n=A,o=g,"A"===d.currentTarget.nodeName.toUpperCase()&&((p=(b=d).currentTarget.target)&&"_self"!==p||b.metaKey||b.ctrlKey||b.shiftKey||b.altKey||b.nativeEvent&&2===b.nativeEvent.which||!i.isLocalURL(h))||(d.preventDefault(),j[l?"replace":"push"](h,k,{shallow:m,locale:o,scroll:n})))}};if(n.onMouseEnter=function(b){c.props&&"function"==typeof c.props.onMouseEnter&&c.props.onMouseEnter(b),i.isLocalURL(s)&&m(a,s,e,{priority:!0})},b.passHref||"a"===c.type&&!("href"in c.props)){var q=void 0!==g?g:a&&a.locale,x=a&&a.isLocaleDomain&&i.getDomainLocale(e,q,a&&a.locales,a&&a.domainLocales);n.href=x||i.addBasePath(i.addLocale(e,q,a&&a.defaultLocale))}return h.default.cloneElement(c,n)}},9246:function(c,a,b){"use strict";function d(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function e(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||f(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(a,c){if(a){if("string"==typeof a)return d(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return d(a,c)}}Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(a){var b=a.rootRef,k=a.rootMargin,l=a.disabled||!i,o=g.useRef(),d=e(g.useState(!1),2),c=d[0],p=d[1],f=e(g.useState(b?b.current:null),2),m=f[0],q=f[1],n=g.useCallback(function(a){o.current&&(o.current(),o.current=void 0),!l&&!c&&a&&a.tagName&&(o.current=j(a,function(a){return a&&p(a)},{root:m,rootMargin:k}))},[l,m,k,c]);return g.useEffect(function(){if(!i&&!c){var a=h.requestIdleCallback(function(){return p(!0)});return function(){return h.cancelIdleCallback(a)}}},[c]),g.useEffect(function(){b&&q(b.current)},[b]),[n,c]};var g=b(7294),h=b(4686),i="undefined"!=typeof IntersectionObserver;function j(b,c,d){var a=m(d),g=a.id,e=a.observer,f=a.elements;return f.set(b,c),e.observe(b),function(){if(f.delete(b),e.unobserve(b),0===f.size){e.disconnect(),k.delete(g);var a=l.findIndex(function(a){return a.root===g.root&&a.margin===g.margin});a> -1&&l.splice(a,1)}}}var k=new Map,l=[];function m(c){var a,b={root:c.root||null,margin:c.rootMargin||""},d=l.find(function(a){return a.root===b.root&&a.margin===b.margin});if(d?a=k.get(d):(a=k.get(b),l.push(b)),a)return a;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},c);return k.set(b,a={id:b,observer:f,elements:e}),a}},9008:function(a,c,b){a.exports=b(3121)},1664:function(a,c,b){a.exports=b(1551)},1163:function(a,c,b){a.exports=b(880)},7058:function(c,b,a){"use strict";a.d(b,{"$":function(){return p}});var d=a(3878),e=a(1563),f=a(5267),g=a(4942),h=a(7294),i=a(8718);function j(){if(console&&console.warn){for(var c,d=arguments.length,a=new Array(d),b=0;b<d;b++)a[b]=arguments[b];"string"==typeof a[0]&&(a[0]="react-i18next:: ".concat(a[0])),(c=console).warn.apply(c,a)}}var k={};function l(){for(var c=arguments.length,a=new Array(c),b=0;b<c;b++)a[b]=arguments[b];"string"==typeof a[0]&&k[a[0]]||("string"==typeof a[0]&&(k[a[0]]=new Date),j.apply(void 0,a))}function m(a,b,c){a.loadNamespaces(b,function(){if(a.isInitialized)c();else{var b=function b(){setTimeout(function(){a.off("initialized",b)},0),c()};a.on("initialized",b)}})}function n(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}function o(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?n(Object(b),!0).forEach(function(a){(0,g.Z)(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):n(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}function p(v){var p=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},w=p.i18n,q=(0,h.useContext)(i.OO)||{},x=q.i18n,y=q.defaultNS,a=w||x||(0,i.nI)();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new i.zv),!a){l("You will need to pass in an i18next instance by using initReactI18next");var r=function(a){return Array.isArray(a)?a[a.length-1]:a},g=[r,{},!1];return g.t=r,g.i18n={},g.ready=!1,g}a.options.react&& void 0!==a.options.react.wait&&l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var s=o(o(o({},(0,i.JP)()),a.options.react),p),z=s.useSuspense,B=s.keyPrefix,b=v||y||a.options&&a.options.defaultNS;b="string"==typeof b?[b]:b||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(b);var j=(a.isInitialized||a.initializedStoreOnce)&&b.every(function(b){return function(b,a){var e=arguments.length>2&& void 0!==arguments[2]?arguments[2]:{};if(!a.languages||!a.languages.length)return l("i18n.languages were undefined or empty",a.languages),!0;var c=a.languages[0],f=!!a.options&&a.options.fallbackLng,g=a.languages[a.languages.length-1];if("cimode"===c.toLowerCase())return!0;var d=function(c,d){var b=a.services.backendConnector.state["".concat(c,"|").concat(d)];return -1===b||2===b};return(!(e.bindI18n&&e.bindI18n.indexOf("languageChanging")> -1)||!a.services.backendConnector.backend||!a.isLanguageChangingTo||!!d(a.isLanguageChangingTo,b))&&(!!a.hasResourceBundle(c,b)|| !a.services.backendConnector.backend||!!(d(c,b)&&(!f||d(g,b))))}(b,a,s)});function A(){return a.getFixedT(null,"fallback"===s.nsMode?b:b[0],B)}var k,n,t=(k=(0,h.useState)(A),n=2,(0,d.Z)(k)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(k,n)||(0,e.Z)(k,n)||(0,f.Z)()),u=t[0],C=t[1],D=(0,h.useRef)(!0);(0,h.useEffect)(function(){var c=s.bindI18n,d=s.bindI18nStore;function e(){D.current&&C(A)}return D.current=!0,j||z||m(a,b,function(){D.current&&C(A)}),c&&a&&a.on(c,e),d&&a&&a.store.on(d,e),function(){D.current=!1,c&&a&&c.split(" ").forEach(function(b){return a.off(b,e)}),d&&a&&d.split(" ").forEach(function(b){return a.store.off(b,e)})}},[a,b.join()]);var E=(0,h.useRef)(!0);(0,h.useEffect)(function(){D.current&&!E.current&&C(A),E.current=!1},[a]);var c=[u,a,j];if(c.t=u,c.i18n=a,c.ready=j,j)return c;if(!j&&!z)return c;throw new Promise(function(c){m(a,b,function(){c()})})}}}])