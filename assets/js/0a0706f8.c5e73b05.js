"use strict";(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[6758],{35318:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var a=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),u=d(t),c=i,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return t?a.createElement(h,o(o({ref:n},s),{},{components:t})):a.createElement(h,o({ref:n},s))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=u;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},81999:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var a=t(25773),i=t(30808),l=(t(27378),t(35318)),o=["components"],r={},p=void 0,d={unversionedId:"generated-config/typescript-stencil-apollo",id:"generated-config/typescript-stencil-apollo",isDocsHomePage:!1,title:"typescript-stencil-apollo",description:"This plugin generates Stencil Apollo functional components typings",source:"@site/docs/generated-config/typescript-stencil-apollo.md",sourceDirName:"generated-config",slug:"/generated-config/typescript-stencil-apollo",permalink:"/docs/generated-config/typescript-stencil-apollo",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-stencil-apollo.md",tags:[],version:"current",frontMatter:{}},s=[{value:"Installation",id:"installation",children:[],level:2},{value:"API Reference",id:"api-reference",children:[{value:"<code>componentType</code>",id:"componenttype",children:[],level:3},{value:"<code>noGraphQLTag</code>",id:"nographqltag",children:[],level:3},{value:"<code>gqlImport</code>",id:"gqlimport",children:[{value:"Usage Examples",id:"usage-examples",children:[{value:"graphql.macro",id:"graphqlmacro",children:[],level:5},{value:"Gatsby",id:"gatsby",children:[],level:5}],level:4}],level:3},{value:"<code>documentNodeImport</code>",id:"documentnodeimport",children:[],level:3},{value:"<code>noExport</code>",id:"noexport",children:[],level:3},{value:"<code>dedupeOperationSuffix</code>",id:"dedupeoperationsuffix",children:[],level:3},{value:"<code>omitOperationSuffix</code>",id:"omitoperationsuffix",children:[],level:3},{value:"<code>operationResultSuffix</code>",id:"operationresultsuffix",children:[],level:3},{value:"<code>documentVariablePrefix</code>",id:"documentvariableprefix",children:[],level:3},{value:"<code>documentVariableSuffix</code>",id:"documentvariablesuffix",children:[],level:3},{value:"<code>fragmentVariablePrefix</code>",id:"fragmentvariableprefix",children:[],level:3},{value:"<code>fragmentVariableSuffix</code>",id:"fragmentvariablesuffix",children:[],level:3},{value:"<code>documentMode</code>",id:"documentmode",children:[],level:3},{value:"<code>optimizeDocumentNode</code>",id:"optimizedocumentnode",children:[],level:3},{value:"<code>importOperationTypesFrom</code>",id:"importoperationtypesfrom",children:[],level:3},{value:"<code>importDocumentNodeExternallyFrom</code>",id:"importdocumentnodeexternallyfrom",children:[{value:"Usage Examples",id:"usage-examples-1",children:[],level:4}],level:3},{value:"<code>pureMagicComment</code>",id:"puremagiccomment",children:[],level:3},{value:"<code>experimentalFragmentVariables</code>",id:"experimentalfragmentvariables",children:[],level:3},{value:"<code>strictScalars</code>",id:"strictscalars",children:[{value:"Usage Examples",id:"usage-examples-2",children:[],level:4}],level:3},{value:"<code>defaultScalarType</code>",id:"defaultscalartype",children:[{value:"Usage Examples",id:"usage-examples-3",children:[],level:4}],level:3},{value:"<code>scalars</code>",id:"scalars",children:[],level:3},{value:"<code>namingConvention</code>",id:"namingconvention",children:[],level:3},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[{value:"Usage Examples",id:"usage-examples-4",children:[],level:4}],level:3},{value:"<code>typesSuffix</code>",id:"typessuffix",children:[{value:"Usage Examples",id:"usage-examples-5",children:[],level:4}],level:3},{value:"<code>skipTypename</code>",id:"skiptypename",children:[{value:"Usage Examples",id:"usage-examples-6",children:[],level:4}],level:3},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[{value:"Usage Examples",id:"usage-examples-7",children:[],level:4}],level:3},{value:"<code>useTypeImports</code>",id:"usetypeimports",children:[],level:3},{value:"<code>dedupeFragments</code>",id:"dedupefragments",children:[],level:3},{value:"<code>inlineFragmentTypes</code>",id:"inlinefragmenttypes",children:[],level:3}],level:2}],m={toc:s};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This plugin generates Stencil Apollo functional components typings"),(0,l.kt)("p",null,"It extends the basic TypeScript plugins: ",(0,l.kt)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript-operations")," - and thus shares a similar configuration."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("img",{alt:"typescript-stencil-apollo plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-stencil-apollo?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,l.kt)("div",{className:"admonition admonition-shell"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,l.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,l.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/typescript-stencil-apollo\n")))),(0,l.kt)("h2",{id:"api-reference"},"API Reference"),(0,l.kt)("h3",{id:"componenttype"},(0,l.kt)("inlineCode",{parentName:"h3"},"componentType")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"StencilComponentType"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"functional")),(0,l.kt)("p",null,"Customize the output of the plugin - you can choose to generate a Component class or a function component."),(0,l.kt)("h3",{id:"nographqltag"},(0,l.kt)("inlineCode",{parentName:"h3"},"noGraphQLTag")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Deprecated. Changes the documentMode to ",(0,l.kt)("inlineCode",{parentName:"p"},"documentNode"),"."),(0,l.kt)("h3",{id:"gqlimport"},(0,l.kt)("inlineCode",{parentName:"h3"},"gqlImport")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-tag#gql")),(0,l.kt)("p",null,"Customize from which module will ",(0,l.kt)("inlineCode",{parentName:"p"},"gql")," be imported from.\nThis is useful if you want to use modules other than ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-tag"),", e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql.macro"),"."),(0,l.kt)("h4",{id:"usage-examples"},"Usage Examples"),(0,l.kt)("h5",{id:"graphqlmacro"},"graphql.macro"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  gqlImport: graphql.macro#gql\n")),(0,l.kt)("h5",{id:"gatsby"},"Gatsby"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  gqlImport: gatsby#graphql\n")),(0,l.kt)("h3",{id:"documentnodeimport"},(0,l.kt)("inlineCode",{parentName:"h3"},"documentNodeImport")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql#DocumentNode")),(0,l.kt)("p",null,"Customize from which module will ",(0,l.kt)("inlineCode",{parentName:"p"},"DocumentNode")," be imported from.\nThis is useful if you want to use modules other than ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql"),", e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"@graphql-typed-document-node"),"."),(0,l.kt)("h3",{id:"noexport"},(0,l.kt)("inlineCode",{parentName:"h3"},"noExport")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Set this configuration to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if you wish to tell codegen to generate code with no ",(0,l.kt)("inlineCode",{parentName:"p"},"export")," identifier."),(0,l.kt)("h3",{id:"dedupeoperationsuffix"},(0,l.kt)("inlineCode",{parentName:"h3"},"dedupeOperationSuffix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Set this configuration to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if you wish to make sure to remove duplicate operation name suffix."),(0,l.kt)("h3",{id:"omitoperationsuffix"},(0,l.kt)("inlineCode",{parentName:"h3"},"omitOperationSuffix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Set this configuration to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if you wish to disable auto add suffix of operation name, like ",(0,l.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Mutation"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Subscription"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Fragment"),"."),(0,l.kt)("h3",{id:"operationresultsuffix"},(0,l.kt)("inlineCode",{parentName:"h3"},"operationResultSuffix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,l.kt)("p",null,"Adds a suffix to generated operation result type names"),(0,l.kt)("h3",{id:"documentvariableprefix"},(0,l.kt)("inlineCode",{parentName:"h3"},"documentVariablePrefix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,l.kt)("p",null,"Changes the GraphQL operations variables prefix."),(0,l.kt)("h3",{id:"documentvariablesuffix"},(0,l.kt)("inlineCode",{parentName:"h3"},"documentVariableSuffix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"Document")),(0,l.kt)("p",null,"Changes the GraphQL operations variables suffix."),(0,l.kt)("h3",{id:"fragmentvariableprefix"},(0,l.kt)("inlineCode",{parentName:"h3"},"fragmentVariablePrefix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,l.kt)("p",null,"Changes the GraphQL fragments variables prefix."),(0,l.kt)("h3",{id:"fragmentvariablesuffix"},(0,l.kt)("inlineCode",{parentName:"h3"},"fragmentVariableSuffix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"FragmentDoc")),(0,l.kt)("p",null,"Changes the GraphQL fragments variables suffix."),(0,l.kt)("h3",{id:"documentmode"},(0,l.kt)("inlineCode",{parentName:"h3"},"documentMode")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"DocumentMode"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"graphQLTag")),(0,l.kt)("p",null,"Declares how DocumentNode are created:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"graphQLTag"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"graphql-tag")," or other modules (check ",(0,l.kt)("inlineCode",{parentName:"li"},"gqlImport"),") will be used to generate document nodes. If this is used, document nodes are generated on client side i.e. the module used to generate this will be shipped to the client"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"documentNode"),": document nodes will be generated as objects when we generate the templates."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"documentNodeImportFragments"),": Similar to documentNode except it imports external fragments instead of embedding them."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"external"),": document nodes are imported from an external file. To be used with ",(0,l.kt)("inlineCode",{parentName:"li"},"importDocumentNodeExternallyFrom"))),(0,l.kt)("p",null,"Note that some plugins (like ",(0,l.kt)("inlineCode",{parentName:"p"},"typescript-graphql-request"),") also supports ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," for this parameter."),(0,l.kt)("h3",{id:"optimizedocumentnode"},(0,l.kt)("inlineCode",{parentName:"h3"},"optimizeDocumentNode")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("p",null,"If you are using ",(0,l.kt)("inlineCode",{parentName:"p"},"documentNode: documentMode | documentNodeImportFragments"),", you can set this to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),' to apply document optimizations for your GraphQL document.\nThis will remove all "loc" and "description" fields from the compiled document, and will remove all empty arrays (such as ',(0,l.kt)("inlineCode",{parentName:"p"},"directives"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"arguments")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"variableDefinitions"),")."),(0,l.kt)("h3",{id:"importoperationtypesfrom"},(0,l.kt)("inlineCode",{parentName:"h3"},"importOperationTypesFrom")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,l.kt)("p",null,"This config is used internally by presets, but you can use it manually to tell codegen to prefix all base types that it's using.\nThis is useful if you wish to generate base types from ",(0,l.kt)("inlineCode",{parentName:"p"},"typescript-operations")," plugin into a different file, and import it from there."),(0,l.kt)("h3",{id:"importdocumentnodeexternallyfrom"},(0,l.kt)("inlineCode",{parentName:"h3"},"importDocumentNodeExternallyFrom")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,l.kt)("p",null,"This config should be used if ",(0,l.kt)("inlineCode",{parentName:"p"},"documentMode")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"external"),". This has 2 usage:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"any string: This would be the path to import document nodes from. This can be used if we want to manually create the document nodes e.g. Use ",(0,l.kt)("inlineCode",{parentName:"li"},"graphql-tag")," in a separate file and export the generated document"),(0,l.kt)("li",{parentName:"ul"},"'near-operation-file': This is a special mode that is intended to be used with ",(0,l.kt)("inlineCode",{parentName:"li"},"near-operation-file")," preset to import document nodes from those files. If these files are ",(0,l.kt)("inlineCode",{parentName:"li"},".graphql")," files, we make use of webpack loader.")),(0,l.kt)("h4",{id:"usage-examples-1"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: path/to/document-node-file\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: near-operation-file\n")),(0,l.kt)("h3",{id:"puremagiccomment"},(0,l.kt)("inlineCode",{parentName:"h3"},"pureMagicComment")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"This config adds PURE magic comment to the static variables to enforce treeshaking for your bundler."),(0,l.kt)("h3",{id:"experimentalfragmentvariables"},(0,l.kt)("inlineCode",{parentName:"h3"},"experimentalFragmentVariables")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"If set to true, it will enable support for parsing variables on fragments."),(0,l.kt)("h3",{id:"strictscalars"},(0,l.kt)("inlineCode",{parentName:"h3"},"strictScalars")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Makes scalars strict."),(0,l.kt)("p",null,"If scalars are found in the schema that are not defined in ",(0,l.kt)("inlineCode",{parentName:"p"},"scalars"),"\nan error will be thrown during codegen."),(0,l.kt)("h4",{id:"usage-examples-2"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  strictScalars: true\n")),(0,l.kt)("h3",{id:"defaultscalartype"},(0,l.kt)("inlineCode",{parentName:"h3"},"defaultScalarType")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"any")),(0,l.kt)("p",null,"Allows you to override the type that unknown scalars will have."),(0,l.kt)("h4",{id:"usage-examples-3"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  defaultScalarType: unknown\n")),(0,l.kt)("h3",{id:"scalars"},(0,l.kt)("inlineCode",{parentName:"h3"},"scalars")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarsMap")),(0,l.kt)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),(0,l.kt)("h3",{id:"namingconvention"},(0,l.kt)("inlineCode",{parentName:"h3"},"namingConvention")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"change-case-all#pascalCase")),(0,l.kt)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",(0,l.kt)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",(0,l.kt)("inlineCode",{parentName:"p"},"typeNames"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',(0,l.kt)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),(0,l.kt)("p",null,"Available case functions in ",(0,l.kt)("inlineCode",{parentName:"p"},"change-case-all")," are ",(0,l.kt)("inlineCode",{parentName:"p"},"camelCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"capitalCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"constantCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"dotCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"headerCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"noCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"paramCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pascalCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pathCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"sentenceCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"snakeCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"lowerCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"localeLowerCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"lowerCaseFirst"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"spongeCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"titleCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"upperCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"localeUpperCase")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"upperCaseFirst"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/btxtiger/change-case-all"},"See more")),(0,l.kt)("h3",{id:"typesprefix"},(0,l.kt)("inlineCode",{parentName:"h3"},"typesPrefix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,l.kt)("p",null,"Prefixes all the generated types."),(0,l.kt)("h4",{id:"usage-examples-4"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesPrefix: I\n")),(0,l.kt)("h3",{id:"typessuffix"},(0,l.kt)("inlineCode",{parentName:"h3"},"typesSuffix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,l.kt)("p",null,"Suffixes all the generated types."),(0,l.kt)("h4",{id:"usage-examples-5"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesSuffix: I\n")),(0,l.kt)("h3",{id:"skiptypename"},(0,l.kt)("inlineCode",{parentName:"h3"},"skipTypename")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),(0,l.kt)("h4",{id:"usage-examples-6"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  skipTypename: true\n")),(0,l.kt)("h3",{id:"nonoptionaltypename"},(0,l.kt)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Automatically adds ",(0,l.kt)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),(0,l.kt)("h4",{id:"usage-examples-7"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  nonOptionalTypename: true\n")),(0,l.kt)("h3",{id:"usetypeimports"},(0,l.kt)("inlineCode",{parentName:"h3"},"useTypeImports")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Will use ",(0,l.kt)("inlineCode",{parentName:"p"},"import type {}")," rather than ",(0,l.kt)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'),(0,l.kt)("h3",{id:"dedupefragments"},(0,l.kt)("inlineCode",{parentName:"h3"},"dedupeFragments")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Removes fragment duplicates for reducing data transfer.\nIt is done by removing sub-fragments imports from fragment definition\nInstead - all of them are imported to the Operation node."),(0,l.kt)("h3",{id:"inlinefragmenttypes"},(0,l.kt)("inlineCode",{parentName:"h3"},"inlineFragmentTypes")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"InlineFragmentTypeOptions"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"inline")),(0,l.kt)("p",null,'Whether fragment types should be inlined into other operations.\n"inline" is the default behavior and will perform deep inlining fragment types within operation type definitions.\n"combine" is the previous behavior that uses fragment type references without inlining the types (and might cauuse issues with deeply nested fragment that uses list types).'))}u.isMDXComponent=!0}}]);