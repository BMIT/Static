(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(4296)}])},2368:function(c,b,a){"use strict";a.d(b,{Z:function(){return f}});var d=a(5893);a(7294);var e=a(9008),f=function(a){var b=a.title,c=a.children;return(0,d.jsxs)(e.default,{children:[(0,d.jsxs)("title",{children:[b&&"".concat(b," | "),"Hello Next.js SSG"]}),c]})}},63:function(c,b,a){"use strict";a.d(b,{Z:function(){return k}});var d=a(5893);a(7294);var e=a(6010),f=a(7058),g=a(2368),h=a(4409),i="".concat("/nextjs-ssg"),j={header:"flex items-center border border-gray-200 min-h-[60px] w-full px-4",container:"p-0 flex flex-col min-h-screen",main:"px-4 flex flex-col flex-1",footer:"mt-6 w-full h-16 border-t border-gray-200 flex justify-center items-center space-x-2",footerLink:"flex justify-center items-center",footerLogo:"ml-2 h-4"},k=function(a){var b,c=a.htmlHead,l=void 0===c?(0,d.jsx)(g.Z,{}):c,k=a.header,m=a.children,n=a.className,o=a.containerClassName,p=a.headerClassName,q=(0,f.$)().t;return(0,d.jsxs)(d.Fragment,{children:[l,(0,d.jsxs)("div",{className:(0,e.Z)(j.container,o),children:[k&&(0,d.jsx)("header",{className:(0,e.Z)(j.header,p),children:k}),(0,d.jsx)("main",{className:(0,e.Z)(j.main,n),children:m}),(0,d.jsxs)("footer",{className:j.footer,children:[(0,d.jsxs)(h.Z,{className:j.footerLink,href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",children:["".concat(q("Powered by")," "),(0,d.jsx)("img",{src:(b="vercel.svg",i?"".concat(i,"/").concat(b):"/".concat(b)),alt:"Vercel Logo",className:j.footerLogo})]}),(0,d.jsx)(h.Z,{href:"https://nextjs.org/",children:(0,d.jsx)("img",{src:"https://img.shields.io/badge/-NextJS-000?&logo=next.js",alt:"Next.js Logo"})}),(0,d.jsx)(h.Z,{href:"https://tailwindcss.com/",children:(0,d.jsx)("img",{src:"https://img.shields.io/badge/-TailwindCSS-000?&logo=tailwindcss",alt:"TailwindCSS Logo"})})]})]})]})}},5364:function(f,c,a){"use strict";a.d(c,{Z:function(){return o}});var g=a(5893),d=a(7294),h=a(1664),i=a(1163),j=a(6010),e=a(5051),k=a.n(e);function l(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function m(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function n(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){m(d,a,c[a])})}return d}var b=d.forwardRef(function(a,q){var b,c,e=(b=d.useState(!1),c=2,function(a){if(Array.isArray(a))return a}(b)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(b,c)||function(a,c){if(a){if("string"==typeof a)return l(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return l(a,c)}}(b,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=e[0],E=e[1],s=(0,i.useRouter)().pathname,t=a.className,f=a.activeClassName,o=a.checkIsActive,u=void 0===o?function(a,b){return a===b}:o,p=a.href,v=a.as,w=a.replace,x=a.scroll,y=a.shallow,z=a.passHref,A=a.prefetch,B=a.locale,C=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],d.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["className","activeClassName","checkIsActive","href","as","replace","scroll","shallow","passHref","prefetch","locale"]);d.useEffect(function(){E(u(s,p))},[s,p,u]);var D=n({},C,{className:(0,j.Z)(k().link,t,m({},"".concat(void 0===f?"active":f),r))});return(0,g.jsx)(h.default,{href:p,as:v,replace:w,scroll:x,shallow:y,passHref:z,prefetch:A,locale:B,children:(0,g.jsx)("a",n({},D,{ref:q}))})});b.displayName="InternalLink";var o=b},4409:function(e,c,a){"use strict";a.d(c,{Z:function(){return h}});var f=a(5893),d=a(7294);function g(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var b=d.forwardRef(function(a,e){var b=a.target,c=a.rel,d=a.href,h=a.children,i=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],d.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["target","rel","href","children"]);return b="_blank",c="noopener noreferrer",(0,f.jsx)("a",function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){g(d,a,c[a])})}return d}({},i,{ref:e,target:b,rel:c,href:d,children:h||d}))});b.displayName="TargetBlankLink";var h=b},6045:function(e,b,a){"use strict";a.d(b,{u:function(){return q}});var f=a(5893),g=a(7294),h=a(5364),i=a(6010),j=a(7058),k=a(4024),c=a(8789),l=a.n(c);function m(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var n=/^[a-z]{2}-[a-z]{2}$/i,o=function(e){var a,b,h=e.className,c=(0,j.$)().i18n,d=(a=g.useState(c.language),b=2,function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||function(a,c){if(a){if("string"==typeof a)return m(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return m(a,c)}}(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=d[0],p=d[1];g.useEffect(function(){return c.on("languageChanged",p),window&&window.setTimeout(function(){var a=c.language;n.test(a)&&(a=a.split("-")[0]),p(a)}),function(){c.off("languageChanged",p)}},[c]);var q=function(a){(0,k.J1)(a).then(function(){return c.changeLanguage(a)})},r=g.useCallback(function(a){return function(){return o!==a?q(a):void 0}},[o]);return(0,f.jsx)("div",{className:(0,i.Z)(l().container,h),children:(0,f.jsx)("ul",{children:k.J3.map(function(c,e){var a,b,d;return(0,f.jsx)("li",{className:(0,i.Z)(l().option,(a={},b="".concat(l().selected),d=c===o,b in a?Object.defineProperty(a,b,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[b]=d,a)),onClick:r(c),children:c},e)})})})},d=a(7191),p=a.n(d),q=function(a){var b=a.label,c=a.items;return(0,f.jsxs)("div",{className:p().nav,children:[b&&(0,f.jsx)("div",{className:p().label,children:b}),(0,f.jsx)("ul",{children:(void 0===c?[]:c).map(function(a,b){var c=a.label,d=a.href;return(0,f.jsx)("li",{children:(0,f.jsx)(h.Z,{activeClassName:p().activeLink,href:d,children:c})},b)})}),(0,f.jsx)("div",{className:p().spacer}),(0,f.jsx)(o,{})]})}},4296:function(d,b,a){"use strict";a.r(b),a.d(b,{Home:function(){return c},"default":function(){return n}});var e=a(5893);a(7294);var f=a(7058),g=a(63).Z,h=a(6045),i=[{label:"JSON Placeholder",href:"/jsonplaceholder"},],j=function(){var a=(0,f.$)().t;return(0,e.jsx)(h.u,{label:"".concat(a("Samples"),":"),items:i})},k=a(4409),l=JSON.parse("{\"y\":\"hello world from json file\"}"),m={main:"justify-center items-center",title:"leading-[1.15] text-[4rem] text-center mt-8 md:mt-0",titleLink:"no-underline text-blue-500 text-center hover:underline focus:underline active:underline",description:"mt-4 px-8 text-center text-2xl leading-normal",code:"bg-gray-100 rounded-[5px] p-3 text-[1.1rem] font-mono",grid:"flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full",card:"p-6 mt-6 md:w-96 text-left border rounded-xl transition ease-[2s] hover:text-blue-500 focus:text-blue-500 active:text-blue-500 hover:border-blue-600 focus:border-blue-600 active:border-blue-600",cardTitle:"text-xl font-bold",cardText:"mt-4 text-lg"},c=function(){var a=(0,f.$)().t;return(0,e.jsxs)(g,{className:m.main,header:(0,e.jsx)(j,{}),children:[(0,e.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[(0,e.jsxs)("div",{className:m.title,children:[a("Hello")," ",(0,e.jsx)("a",{className:m.titleLink,href:"https://nextjs.org",children:"Next.js"})," ","SSG"]}),(0,e.jsx)("div",{children:a("Welcome to React")}),(0,e.jsxs)("div",{children:[(0,e.jsx)("code",{className:m.code,children:"hello.json"})," - ",l.y]})]}),(0,e.jsxs)("p",{className:m.description,children:["👉"," ",(0,e.jsx)("code",{className:m.code,children:(0,e.jsx)(k.Z,{href:"https://nextjs.org/docs/basic-features/pages#static-generation-recommended",children:"SSG"})})," ","- ",a("static site generation")]}),(0,e.jsxs)("div",{className:m.grid,children:[(0,e.jsxs)("a",{href:"https://nextjs.org/docs",className:m.card,children:[(0,e.jsxs)("h3",{children:[a("Documentation")," →"]}),(0,e.jsx)("p",{children:a("Find in-depth information about Next.js features and API.")})]}),(0,e.jsxs)("a",{href:"https://nextjs.org/learn",className:m.card,children:[(0,e.jsxs)("h3",{children:[a("Learn")," →"]}),(0,e.jsx)("p",{children:a("Learn about Next.js in an interactive course with quizzes!")})]}),(0,e.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/master/examples",className:m.card,children:[(0,e.jsxs)("h3",{children:[a("Examples")," →"]}),(0,e.jsx)("p",{children:a("Discover and deploy boilerplate example Next.js projects.")})]}),(0,e.jsxs)("a",{href:"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:m.card,children:[(0,e.jsxs)("h3",{children:[a("Deploy")," →"]}),(0,e.jsx)("p",{children:a("Instantly deploy your Next.js site to a public URL with Vercel.")})]})]})]})},n=c},8789:function(a){a.exports={container:"ChangeLanguage_container__wc7Ay",option:"ChangeLanguage_option__E0Ve3",selected:"ChangeLanguage_selected__JJhXI"}},5051:function(a){a.exports={link:"InternalLink_link__rEVyt"}},7191:function(a){a.exports={nav:"TopNavBase_nav__LG9uP",label:"TopNavBase_label__PDyH4",activeLink:"TopNavBase_activeLink__hHp96",spacer:"TopNavBase_spacer__UBcKB"}}},function(a){a.O(0,[59,774,888,179],function(){return a(a.s=5301)}),_N_E=a.O()}])