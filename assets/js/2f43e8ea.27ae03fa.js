"use strict";(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[723],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,u=d["".concat(p,".").concat(m)]||d[m]||g[m]||o;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13240:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),i=["components"],l={},p=void 0,c={unversionedId:"generated-config/gql-tag-operations-preset",id:"generated-config/gql-tag-operations-preset",isDocsHomePage:!1,title:"gql-tag-operations-preset",description:"Installation",source:"@site/docs/generated-config/gql-tag-operations-preset.md",sourceDirName:"generated-config",slug:"/generated-config/gql-tag-operations-preset",permalink:"/docs/generated-config/gql-tag-operations-preset",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/gql-tag-operations-preset.md",tags:[],version:"current",frontMatter:{}},s=[{value:"Installation",id:"installation",children:[],level:2},{value:"API Reference",id:"api-reference",children:[{value:"<code>augmentedModuleName</code>",id:"augmentedmodulename",children:[{value:"Usage Examples",id:"usage-examples",children:[],level:4}],level:3}],level:2}],g={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("img",{alt:"gql-tag-operations-preset plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/gql-tag-operations-preset?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,o.kt)("div",{className:"admonition admonition-shell"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,o.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,o.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/gql-tag-operations-preset\n")))),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"augmentedmodulename"},(0,o.kt)("inlineCode",{parentName:"h3"},"augmentedModuleName")),(0,o.kt)("p",null,"type: ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Instead of generating a ",(0,o.kt)("inlineCode",{parentName:"p"},"gql")," function, this preset can also generate a d.ts that will enhance the ",(0,o.kt)("inlineCode",{parentName:"p"},"gql")," function of your framework."),(0,o.kt)("p",null,"E.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-tag")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@urql/core"),"."),(0,o.kt)("h4",{id:"usage-examples"},"Usage Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\ngql/:\n preset: gql-tag-operations-preset\n presetConfig:\n   augmentedModuleName: '@urql/core'\n\n")))}d.isMDXComponent=!0}}]);