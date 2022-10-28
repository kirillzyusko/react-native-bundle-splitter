"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i="Basic usage",l={unversionedId:"fundamentals/basic-usage",id:"fundamentals/basic-usage",title:"Basic usage",description:"This library contains pretty minimalistic API. And we will look on this a little bit later.",source:"@site/docs/fundamentals/basic-usage.md",sourceDirName:"fundamentals",slug:"/fundamentals/basic-usage",permalink:"/react-native-bundle-splitter/docs/next/fundamentals/basic-usage",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-bundle-splitter/tree/master/docs/docs/fundamentals/basic-usage.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Enabling Ram Bundle",permalink:"/react-native-bundle-splitter/docs/next/fundamentals/enabling-ram-bundle"},next:{title:"Guides",permalink:"/react-native-bundle-splitter/docs/next/category/guides"}},s={},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-usage"},"Basic usage"),(0,a.kt)("p",null,"This library contains pretty minimalistic API. And we will look on this a little bit later.\nLet's assume we have next folder structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 ...\n\u251c\u2500\u2500 Login                   # Folder with your screen\n\u2502   \u251c\u2500\u2500 View.jsx            # Your presentational component\n\u2502   \u251c\u2500\u2500 styles.ts           # Your styles for the component\n\u2502   \u2514\u2500\u2500 index.ts            # Your entry point to the screen\n\u2514\u2500\u2500 ...\n")),(0,a.kt)("p",null,"And your ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," file looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import View from './View';\n\nexport default View;\n")),(0,a.kt)("p",null,"You can easily rewrite it with this library!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { register } from 'react-native-bundle-splitter';\n\nexport default register({ loader: () => import('./View') });\n")),(0,a.kt)("p",null,"That's all! You can reload your application to see the results and guarantee this changes will not break anything."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you are using TypeScript in your project, then you may want to specify ",(0,a.kt)("inlineCode",{parentName:"p"},"Props")," for your lazily loaded component. You can do it in this way:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { register } from 'react-native-bundle-splitter';\nimport type {Props} from './types';\n\nexport default register<Props>({ loader: () => import('./View') });\n"))),(0,a.kt)("admonition",{title:"Avoid direct references to lazy-loaded file",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please, be sure, that you have such ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," file. This library works only in case if you don't have any ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," statements which refers to your file. In other words: be sure that you do ",(0,a.kt)("strong",{parentName:"p"},"NOT")," import this file (",(0,a.kt)("inlineCode",{parentName:"p"},"View"),") from anywhere in your code.")),(0,a.kt)("p",null,"To assure, that you are doing everything in correct way this library provides a way for checking the performance."),(0,a.kt)("p",null,"In order to capture your metrics you should change your ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"import React, { Fragment, PureComponent } from 'react';\n...\n+import { investigate } from 'react-native-bundle-splitter/dist/utils';\n\n+console.log('Bundle Info: ', investigate());\n\nclass App extends PureComponent {\n...\n}\n")),(0,a.kt)("p",null,"Usually your output from log will look like ",(0,a.kt)("inlineCode",{parentName:"p"},"Bundle Info: { loaded: 2731, waiting: 141 }"),". Such way allows to understand is your changes make sense or not. After adding new screen to this library count of loaded files should be decreasing. Of course, ideal way is when you load as minimum modules as you can. For example only one page with login. In this case your startup time will be almost the same as just created application. And splash screen will not take a lot of time.\nBut it depends absolutely on you and yours architecture solutions. Feel free to play around this library and find suitable way for separating your files."))}c.isMDXComponent=!0}}]);