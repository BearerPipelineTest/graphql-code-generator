"use strict";(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[2448],{35318:function(e,n,a){a.d(n,{Zo:function(){return d},kt:function(){return c}});var t=a(27378);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=t.createContext({}),s=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(a),c=l,f=m["".concat(o,".").concat(c)]||m[c]||u[c]||i;return a?t.createElement(f,r(r({ref:n},d),{},{components:a})):t.createElement(f,r({ref:n},d))}));function c(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var s=2;s<i;s++)r[s]=a[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},91096:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var t=a(25773),l=a(30808),i=(a(27378),a(35318)),r=["components"],p={},o=void 0,s={unversionedId:"generated-config/flow-operations",id:"generated-config/flow-operations",isDocsHomePage:!1,title:"flow-operations",description:"This plugin generates Flow types based on your GraphQLSchema and your GraphQL operations and fragments.",source:"@site/docs/generated-config/flow-operations.md",sourceDirName:"generated-config",slug:"/generated-config/flow-operations",permalink:"/docs/generated-config/flow-operations",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/flow-operations.md",tags:[],version:"current",frontMatter:{}},d=[{value:"Installation",id:"installation",children:[],level:2},{value:"API Reference",id:"api-reference",children:[{value:"<code>useFlowExactObjects</code>",id:"useflowexactobjects",children:[{value:"Usage Examples",id:"usage-examples",children:[],level:4}],level:3},{value:"<code>useFlowReadOnlyTypes</code>",id:"useflowreadonlytypes",children:[{value:"Usage Examples",id:"usage-examples-1",children:[],level:4}],level:3},{value:"<code>flattenGeneratedTypes</code>",id:"flattengeneratedtypes",children:[{value:"Usage Examples",id:"usage-examples-2",children:[],level:4}],level:3},{value:"<code>preResolveTypes</code>",id:"preresolvetypes",children:[{value:"Usage Examples",id:"usage-examples-3",children:[],level:4}],level:3},{value:"<code>skipTypeNameForRoot</code>",id:"skiptypenameforroot",children:[{value:"Usage Examples",id:"usage-examples-4",children:[],level:4}],level:3},{value:"<code>globalNamespace</code>",id:"globalnamespace",children:[{value:"Usage Examples",id:"usage-examples-5",children:[],level:4}],level:3},{value:"<code>operationResultSuffix</code>",id:"operationresultsuffix",children:[],level:3},{value:"<code>dedupeOperationSuffix</code>",id:"dedupeoperationsuffix",children:[],level:3},{value:"<code>omitOperationSuffix</code>",id:"omitoperationsuffix",children:[],level:3},{value:"<code>exportFragmentSpreadSubTypes</code>",id:"exportfragmentspreadsubtypes",children:[],level:3},{value:"<code>experimentalFragmentVariables</code>",id:"experimentalfragmentvariables",children:[],level:3},{value:"<code>addUnderscoreToArgsType</code>",id:"addunderscoretoargstype",children:[{value:"Usage Examples",id:"usage-examples-6",children:[{value:"With Custom Values",id:"with-custom-values",children:[],level:5}],level:4}],level:3},{value:"<code>enumValues</code>",id:"enumvalues",children:[],level:3},{value:"<code>declarationKind</code>",id:"declarationkind",children:[{value:"Usage Examples",id:"usage-examples-7",children:[{value:"Override all declarations",id:"override-all-declarations",children:[],level:5},{value:"Override only specific declarations",id:"override-only-specific-declarations",children:[],level:5}],level:4}],level:3},{value:"<code>enumPrefix</code>",id:"enumprefix",children:[{value:"Usage Examples",id:"usage-examples-8",children:[{value:"Disable enum prefixes",id:"disable-enum-prefixes",children:[],level:5}],level:4}],level:3},{value:"<code>fieldWrapperValue</code>",id:"fieldwrappervalue",children:[{value:"Usage Examples",id:"usage-examples-9",children:[{value:"Allow Promise",id:"allow-promise",children:[],level:5}],level:4}],level:3},{value:"<code>wrapFieldDefinitions</code>",id:"wrapfielddefinitions",children:[{value:"Usage Examples",id:"usage-examples-10",children:[{value:"Enable wrapping fields",id:"enable-wrapping-fields",children:[],level:5}],level:4}],level:3},{value:"<code>onlyOperationTypes</code>",id:"onlyoperationtypes",children:[{value:"Usage Examples",id:"usage-examples-11",children:[{value:"Override all definition types",id:"override-all-definition-types",children:[],level:5}],level:4}],level:3},{value:"<code>ignoreEnumValuesFromSchema</code>",id:"ignoreenumvaluesfromschema",children:[{value:"Usage Examples",id:"usage-examples-12",children:[{value:"Ignore enum values from schema",id:"ignore-enum-values-from-schema",children:[],level:5}],level:4}],level:3},{value:"<code>wrapEntireFieldDefinitions</code>",id:"wrapentirefielddefinitions",children:[],level:3},{value:"<code>entireFieldWrapperValue</code>",id:"entirefieldwrappervalue",children:[],level:3},{value:"<code>directiveArgumentAndInputFieldMappings</code>",id:"directiveargumentandinputfieldmappings",children:[],level:3},{value:"<code>directiveArgumentAndInputFieldMappingTypeSuffix</code>",id:"directiveargumentandinputfieldmappingtypesuffix",children:[{value:"Usage Examples",id:"usage-examples-13",children:[],level:4}],level:3},{value:"<code>strictScalars</code>",id:"strictscalars",children:[{value:"Usage Examples",id:"usage-examples-14",children:[],level:4}],level:3},{value:"<code>defaultScalarType</code>",id:"defaultscalartype",children:[{value:"Usage Examples",id:"usage-examples-15",children:[],level:4}],level:3},{value:"<code>scalars</code>",id:"scalars",children:[],level:3},{value:"<code>namingConvention</code>",id:"namingconvention",children:[],level:3},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[{value:"Usage Examples",id:"usage-examples-16",children:[],level:4}],level:3},{value:"<code>typesSuffix</code>",id:"typessuffix",children:[{value:"Usage Examples",id:"usage-examples-17",children:[],level:4}],level:3},{value:"<code>skipTypename</code>",id:"skiptypename",children:[{value:"Usage Examples",id:"usage-examples-18",children:[],level:4}],level:3},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[{value:"Usage Examples",id:"usage-examples-19",children:[],level:4}],level:3},{value:"<code>useTypeImports</code>",id:"usetypeimports",children:[],level:3},{value:"<code>dedupeFragments</code>",id:"dedupefragments",children:[],level:3},{value:"<code>inlineFragmentTypes</code>",id:"inlinefragmenttypes",children:[],level:3}],level:2}],u={toc:d};function m(e){var n=e.components,a=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This plugin generates Flow types based on your ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," and your GraphQL operations and fragments."),(0,i.kt)("p",null,"It generates types for your GraphQL documents: Query, Mutation, Subscription and Fragment."),(0,i.kt)("p",null,"This plugin requires you to use ",(0,i.kt)("inlineCode",{parentName:"p"},"@graphql-codegen/flow")," as well, because it depends on it's types."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("img",{alt:"flow-operations plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/flow-operations?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,i.kt)("div",{className:"admonition admonition-shell"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,i.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,i.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/flow-operations\n")))),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"useflowexactobjects"},(0,i.kt)("inlineCode",{parentName:"h3"},"useFlowExactObjects")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("p",null,"Generates Flow types as Exact types."),(0,i.kt)("h4",{id:"usage-examples"},"Usage Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - flow\n config:\n   useFlowExactObjects: false\n")),(0,i.kt)("h3",{id:"useflowreadonlytypes"},(0,i.kt)("inlineCode",{parentName:"h3"},"useFlowReadOnlyTypes")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Generates read-only Flow types"),(0,i.kt)("h4",{id:"usage-examples-1"},"Usage Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - flow\n config:\n   useFlowReadOnlyTypes: true\n")),(0,i.kt)("h3",{id:"flattengeneratedtypes"},(0,i.kt)("inlineCode",{parentName:"h3"},"flattenGeneratedTypes")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Flatten fragment spread and inline fragments into a simple selection set before generating."),(0,i.kt)("h4",{id:"usage-examples-2"},"Usage Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n config:\n   flattenGeneratedTypes: true\n")),(0,i.kt)("h3",{id:"preresolvetypes"},(0,i.kt)("inlineCode",{parentName:"h3"},"preResolveTypes")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("p",null,"Uses primitive types where possible.\nSet to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in order to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Pick")," and take use the types generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"typescript")," plugin."),(0,i.kt)("h4",{id:"usage-examples-3"},"Usage Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    preResolveTypes: false\n")),(0,i.kt)("h3",{id:"skiptypenameforroot"},(0,i.kt)("inlineCode",{parentName:"h3"},"skipTypeNameForRoot")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Avoid adding ",(0,i.kt)("inlineCode",{parentName:"p"},"__typename")," for root types. This is ignored when a selection explictly specifies ",(0,i.kt)("inlineCode",{parentName:"p"},"__typename"),"."),(0,i.kt)("h4",{id:"usage-examples-4"},"Usage Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    skipTypeNameForRoot: true\n")),(0,i.kt)("h3",{id:"globalnamespace"},(0,i.kt)("inlineCode",{parentName:"h3"},"globalNamespace")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Puts all generated code under ",(0,i.kt)("inlineCode",{parentName:"p"},"global")," namespace. Useful for Stencil integration."),(0,i.kt)("h4",{id:"usage-examples-5"},"Usage Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    globalNamespace: true\n")),(0,i.kt)("h3",{id:"operationresultsuffix"},(0,i.kt)("inlineCode",{parentName:"h3"},"operationResultSuffix")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,i.kt)("p",null,"Adds a suffix to generated operation result type names"),(0,i.kt)("h3",{id:"dedupeoperationsuffix"},(0,i.kt)("inlineCode",{parentName:"h3"},"dedupeOperationSuffix")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Set this configuration to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if you wish to make sure to remove duplicate operation name suffix."),(0,i.kt)("h3",{id:"omitoperationsuffix"},(0,i.kt)("inlineCode",{parentName:"h3"},"omitOperationSuffix")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Set this configuration to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if you wish to disable auto add suffix of operation name, like ",(0,i.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Mutation"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscription"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Fragment"),"."),(0,i.kt)("h3",{id:"exportfragmentspreadsubtypes"},(0,i.kt)("inlineCode",{parentName:"h3"},"exportFragmentSpreadSubTypes")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"If set to true, it will export the sub-types created in order to make it easier to access fields declared under fragment spread."),(0,i.kt)("h3",{id:"experimentalfragmentvariables"},(0,i.kt)("inlineCode",{parentName:"h3"},"experimentalFragmentVariables")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"If set to true, it will enable support for parsing variables on fragments."),(0,i.kt)("h3",{id:"addunderscoretoargstype"},(0,i.kt)("inlineCode",{parentName:"h3"},"addUnderscoreToArgsType")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Adds ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," to generated ",(0,i.kt)("inlineCode",{parentName:"p"},"Args")," types in order to avoid duplicate identifiers."),(0,i.kt)("h4",{id:"usage-examples-6"},"Usage Examples"),(0,i.kt)("h5",{id:"with-custom-values"},"With Custom Values"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    addUnderscoreToArgsType: true\n")),(0,i.kt)("h3",{id:"enumvalues"},(0,i.kt)("inlineCode",{parentName:"h3"},"enumValues")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"EnumValuesMap")),(0,i.kt)("p",null,"Overrides the default value of enum values declared in your GraphQL schema.\nYou can also map the entire enum to an external type by providing a string that of ",(0,i.kt)("inlineCode",{parentName:"p"},"module#type"),"."),(0,i.kt)("h3",{id:"declarationkind"},(0,i.kt)("inlineCode",{parentName:"h3"},"declarationKind")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"DeclarationKindConfig | string (values: abstract class, class, interface, type)")),(0,i.kt)("p",null,"Overrides the default output for various GraphQL elements."),(0,i.kt)("h4",{id:"usage-examples-7"},"Usage Examples"),(0,i.kt)("h5",{id:"override-all-declarations"},"Override all declarations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    declarationKind: 'interface'\n")),(0,i.kt)("h5",{id:"override-only-specific-declarations"},"Override only specific declarations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    declarationKind:\n      type: 'interface'\n      input: 'interface'\n")),(0,i.kt)("h3",{id:"enumprefix"},(0,i.kt)("inlineCode",{parentName:"h3"},"enumPrefix")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("p",null,"Allow you to disable prefixing for generated enums, works in combination with ",(0,i.kt)("inlineCode",{parentName:"p"},"typesPrefix"),"."),(0,i.kt)("h4",{id:"usage-examples-8"},"Usage Examples"),(0,i.kt)("h5",{id:"disable-enum-prefixes"},"Disable enum prefixes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    typesPrefix: I\n    enumPrefix: false\n")),(0,i.kt)("h3",{id:"fieldwrappervalue"},(0,i.kt)("inlineCode",{parentName:"h3"},"fieldWrapperValue")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("p",null,"Allow you to add wrapper for field type, use T as the generic value. Make sure to set ",(0,i.kt)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in order to make this flag work."),(0,i.kt)("h4",{id:"usage-examples-9"},"Usage Examples"),(0,i.kt)("h5",{id:"allow-promise"},"Allow Promise"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n   fieldWrapperValue: T | Promise<T>\n")),(0,i.kt)("h3",{id:"wrapfielddefinitions"},(0,i.kt)("inlineCode",{parentName:"h3"},"wrapFieldDefinitions")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Set the to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",(0,i.kt)("inlineCode",{parentName:"p"},"FieldWrapper"),".\nThis is useful to allow return types such as Promises and functions."),(0,i.kt)("h4",{id:"usage-examples-10"},"Usage Examples"),(0,i.kt)("h5",{id:"enable-wrapping-fields"},"Enable wrapping fields"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n")),(0,i.kt)("h3",{id:"onlyoperationtypes"},(0,i.kt)("inlineCode",{parentName:"h3"},"onlyOperationTypes")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"This will cause the generator to emit types for operations only (basically only enums and scalars)"),(0,i.kt)("h4",{id:"usage-examples-11"},"Usage Examples"),(0,i.kt)("h5",{id:"override-all-definition-types"},"Override all definition types"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   onlyOperationTypes: true\n")),(0,i.kt)("h3",{id:"ignoreenumvaluesfromschema"},(0,i.kt)("inlineCode",{parentName:"h3"},"ignoreEnumValuesFromSchema")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"This will cause the generator to ignore enum values defined in GraphQLSchema"),(0,i.kt)("h4",{id:"usage-examples-12"},"Usage Examples"),(0,i.kt)("h5",{id:"ignore-enum-values-from-schema"},"Ignore enum values from schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   ignoreEnumValuesFromSchema: true\n")),(0,i.kt)("h3",{id:"wrapentirefielddefinitions"},(0,i.kt)("inlineCode",{parentName:"h3"},"wrapEntireFieldDefinitions")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("p",null,"Set the to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",(0,i.kt)("inlineCode",{parentName:"p"},"EntireFieldWrapper"),".\nThis is useful to allow return types such as Promises and functions for fields.\nDiffers from ",(0,i.kt)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," in that this wraps the entire field definition if ie. the field is an Array, while\n",(0,i.kt)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," will wrap every single value inside the array."),(0,i.kt)("h3",{id:"entirefieldwrappervalue"},(0,i.kt)("inlineCode",{parentName:"h3"},"entireFieldWrapperValue")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"T | Promise<T> | (() => T | Promise<T>)")),(0,i.kt)("p",null,"Allow to override the type value of ",(0,i.kt)("inlineCode",{parentName:"p"},"EntireFieldWrapper"),". This wrapper applies outside of Array and Maybe\nunlike ",(0,i.kt)("inlineCode",{parentName:"p"},"fieldWrapperValue"),", that will wrap the inner type."),(0,i.kt)("h3",{id:"directiveargumentandinputfieldmappings"},(0,i.kt)("inlineCode",{parentName:"h3"},"directiveArgumentAndInputFieldMappings")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"DirectiveArgumentAndInputFieldMappings")),(0,i.kt)("p",null,"Replaces a GraphQL scalar with a custom type based on the applied directive on an argument or input field."),(0,i.kt)("p",null,"You can use both ",(0,i.kt)("inlineCode",{parentName:"p"},"module#type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"module#namespace#type")," syntax.\nWill NOT work with introspected schemas since directives are not exported.\nOnly works with directives on ARGUMENT_DEFINITION or INPUT_FIELD_DEFINITION."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"WARNING:")," Using this option does only change the type definitions."),(0,i.kt)("p",null,"For actually ensuring that a type is correct at runtime you will have to use schema transforms (e.g. with ",(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-tools.com/docs/schema-directives"},"@graphql-tools/utils mapSchema"),") that apply those rules!\nOtherwise, you might end up with a runtime type mismatch which could cause unnoticed bugs or runtime errors."),(0,i.kt)("p",null,"Please use this configuration option with care!"),(0,i.kt)("h3",{id:"directiveargumentandinputfieldmappingtypesuffix"},(0,i.kt)("inlineCode",{parentName:"h3"},"directiveArgumentAndInputFieldMappingTypeSuffix")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Adds a suffix to the imported names to prevent name clashes."),(0,i.kt)("h4",{id:"usage-examples-13"},"Usage Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"plugins:\n  config:\n    directiveArgumentAndInputFieldMappingTypeSuffix: Model\n")),(0,i.kt)("h3",{id:"strictscalars"},(0,i.kt)("inlineCode",{parentName:"h3"},"strictScalars")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Makes scalars strict."),(0,i.kt)("p",null,"If scalars are found in the schema that are not defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"scalars"),"\nan error will be thrown during codegen."),(0,i.kt)("h4",{id:"usage-examples-14"},"Usage Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  strictScalars: true\n")),(0,i.kt)("h3",{id:"defaultscalartype"},(0,i.kt)("inlineCode",{parentName:"h3"},"defaultScalarType")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("p",null,"Allows you to override the type that unknown scalars will have."),(0,i.kt)("h4",{id:"usage-examples-15"},"Usage Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  defaultScalarType: unknown\n")),(0,i.kt)("h3",{id:"scalars"},(0,i.kt)("inlineCode",{parentName:"h3"},"scalars")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"ScalarsMap")),(0,i.kt)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),(0,i.kt)("h3",{id:"namingconvention"},(0,i.kt)("inlineCode",{parentName:"h3"},"namingConvention")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"change-case-all#pascalCase")),(0,i.kt)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",(0,i.kt)("inlineCode",{parentName:"p"},"typeNames"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',(0,i.kt)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),(0,i.kt)("p",null,"Available case functions in ",(0,i.kt)("inlineCode",{parentName:"p"},"change-case-all")," are ",(0,i.kt)("inlineCode",{parentName:"p"},"camelCase"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"capitalCase"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"constantCase"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dotCase"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"headerCase"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"noCase"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"paramCase"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pascalCase"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pathCase"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sentenceCase"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"snakeCase"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"lowerCase"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"localeLowerCase"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"lowerCaseFirst"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"spongeCase"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"titleCase"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"upperCase"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"localeUpperCase")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"upperCaseFirst"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/btxtiger/change-case-all"},"See more")),(0,i.kt)("h3",{id:"typesprefix"},(0,i.kt)("inlineCode",{parentName:"h3"},"typesPrefix")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,i.kt)("p",null,"Prefixes all the generated types."),(0,i.kt)("h4",{id:"usage-examples-16"},"Usage Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesPrefix: I\n")),(0,i.kt)("h3",{id:"typessuffix"},(0,i.kt)("inlineCode",{parentName:"h3"},"typesSuffix")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,i.kt)("p",null,"Suffixes all the generated types."),(0,i.kt)("h4",{id:"usage-examples-17"},"Usage Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesSuffix: I\n")),(0,i.kt)("h3",{id:"skiptypename"},(0,i.kt)("inlineCode",{parentName:"h3"},"skipTypename")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),(0,i.kt)("h4",{id:"usage-examples-18"},"Usage Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  skipTypename: true\n")),(0,i.kt)("h3",{id:"nonoptionaltypename"},(0,i.kt)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Automatically adds ",(0,i.kt)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),(0,i.kt)("h4",{id:"usage-examples-19"},"Usage Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  nonOptionalTypename: true\n")),(0,i.kt)("h3",{id:"usetypeimports"},(0,i.kt)("inlineCode",{parentName:"h3"},"useTypeImports")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Will use ",(0,i.kt)("inlineCode",{parentName:"p"},"import type {}")," rather than ",(0,i.kt)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'),(0,i.kt)("h3",{id:"dedupefragments"},(0,i.kt)("inlineCode",{parentName:"h3"},"dedupeFragments")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Removes fragment duplicates for reducing data transfer.\nIt is done by removing sub-fragments imports from fragment definition\nInstead - all of them are imported to the Operation node."),(0,i.kt)("h3",{id:"inlinefragmenttypes"},(0,i.kt)("inlineCode",{parentName:"h3"},"inlineFragmentTypes")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"InlineFragmentTypeOptions"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"inline")),(0,i.kt)("p",null,'Whether fragment types should be inlined into other operations.\n"inline" is the default behavior and will perform deep inlining fragment types within operation type definitions.\n"combine" is the previous behavior that uses fragment type references without inlining the types (and might cauuse issues with deeply nested fragment that uses list types).'))}m.isMDXComponent=!0}}]);