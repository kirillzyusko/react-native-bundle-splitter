"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3301],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=s(a),m=n,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(h,o(o({ref:e},u),{},{components:a})):r.createElement(h,o({ref:e},u))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7405:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2},o="Capturing startup time",l={unversionedId:"recipes/capturing-startup-time",id:"version-2.x/recipes/capturing-startup-time",title:"Capturing startup time",description:"The main purpose of this package is splitting bundle by two parts: the first, relatively small which you can load at the start of your application, and the second, where you will keep the rest part of your application. Such way allows significantly decrease initial startup time and practically reduce it to the same time as in an empty application created via react-native init command. Let's look how we can capture the startup time of an application and understand, how much did you win with the usage of this library.",source:"@site/versioned_docs/version-2.x/recipes/capturing-startup-time.md",sourceDirName:"recipes",slug:"/recipes/capturing-startup-time",permalink:"/react-native-bundle-splitter/docs/recipes/capturing-startup-time",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-bundle-splitter/tree/master/docs/versioned_docs/version-2.x/recipes/capturing-startup-time.md",tags:[],version:"2.x",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Bundle analysis",permalink:"/react-native-bundle-splitter/docs/recipes/bundle-analysis"},next:{title:"Jest testing guide",permalink:"/react-native-bundle-splitter/docs/recipes/jest-testing-guide"}},p={},s=[{value:"Using <code>react-native-startup-time</code> library",id:"using-react-native-startup-time-library",level:2},{value:"Library that you need to install",id:"library-that-you-need-to-install",level:3},{value:"Integration to an application",id:"integration-to-an-application",level:3},{value:"Flipper",id:"flipper",level:2},{value:"Expected results",id:"expected-results",level:2}],u={toc:s};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"capturing-startup-time"},"Capturing startup time"),(0,n.kt)("p",null,"The main purpose of this package is splitting bundle by two parts: the first, relatively small which you can load at the start of your application, and the second, where you will keep the rest part of your application. Such way allows significantly decrease initial ",(0,n.kt)("strong",{parentName:"p"},"startup time")," and practically reduce it to the same time as in an empty application created via ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native init")," command. Let's look how we can capture the startup time of an application and understand, how much did you win with the usage of this library."),(0,n.kt)("p",null,"Below are two ways to measure the start time of the application."),(0,n.kt)("h2",{id:"using-react-native-startup-time-library"},"Using ",(0,n.kt)("inlineCode",{parentName:"h2"},"react-native-startup-time")," library"),(0,n.kt)("h3",{id:"library-that-you-need-to-install"},"Library that you need to install"),(0,n.kt)("p",null,"First of all you need to install 3rd party package, that allows you to capture the startup time. I'd recommend you to start using ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-native-startup-time"},"react-native-startup-time"),". So let's start with this library."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-startup-time\n# or with npm\n# npm install react-native-startup-time --save\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This library is need in react-native linking. So if you are using react-native <= 0.60 you need to go through manual step of linking that you may find in the docs of this library.")),(0,n.kt)("h3",{id:"integration-to-an-application"},"Integration to an application"),(0,n.kt)("p",null,"After installation you need to integrate it to your application. Basically there you have two ways of usage:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"as JSX-element"),(0,n.kt)("li",{parentName:"ul"},"imperative call")),(0,n.kt)("p",null,"I would ",(0,n.kt)("strong",{parentName:"p"},"highly")," recommend you to capture the startup time on application, that builded with minification and in prod mode (at least without the usage of ",(0,n.kt)("inlineCode",{parentName:"p"},"dev-server"),"). In other case, metrics, that you captured may not reflect a real situation."),(0,n.kt)("p",null,"However in a lot of application the most common used approach is deleting any ",(0,n.kt)("inlineCode",{parentName:"p"},"console.log")," statements in application in production mode via babel-plugin, for example. So I'd recommend you use ",(0,n.kt)("strong",{parentName:"p"},"JSX-element")," approach."),(0,n.kt)("p",null,"So let's start with JSX-element. First of all you need to add import statement:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-diff"},"+ import { StartupTime } from 'react-native-startup-time';\n")),(0,n.kt)("p",null,"And after that somewhere in the root of your application you need to add this part of markup:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"<StartupTime\n    style={styles.startupTime /* optional */}\n/>\n")),(0,n.kt)("p",null,"That's all. Now you are ready to see the real startup time. For this, please, build a production release and run it on a real devices on both Platform (iOS/Android)."),(0,n.kt)("p",null,"In order to see the difference between two versions of an application (with usage of ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native-bundle-splitter")," and without) you should capture these metrics on both version of application."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For capturing the real metrics you should kill your application after every running.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For a more revealing result you should try to capture results several (I'd recommend at least five) times. In this case you can see the average startup time.")),(0,n.kt)("h2",{id:"flipper"},"Flipper"),(0,n.kt)("p",null,"Starting from 0.62 ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native")," has ",(0,n.kt)("inlineCode",{parentName:"p"},"Flipper")," integration. If you already use this tool you can add ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-performance"},"react-native-performance")," plugin and capture a lot of metrics."),(0,n.kt)("p",null,"You can read detailed instructions on how to set it up in github repo. More likely you will be interested only in ",(0,n.kt)("inlineCode",{parentName:"p"},"runJsBundleStart")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"runJsBundleEnd")," performance metrics, but this plugin has support for much more."),(0,n.kt)("p",null,"In the end you will have visualized results, which should look like the image below:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/378279/105892056-9f677480-6011-11eb-895a-f3f8653449c8.png",alt:"Flipper performance plugin"})),(0,n.kt)("h2",{id:"expected-results"},"Expected results"),(0,n.kt)("p",null,"On various projects you may get different results. And these results depend only on size and complexity of your js code and static assets. And if you were able to reduce your initially loaded bundle from 50 mb to 2 mb, for example, of course, you may expect significant boost of the performance."),(0,n.kt)("p",null,"From perspective of my practice I get various results, but the average range was about 0.3-1.5s."),(0,n.kt)("p",null,"As an example I can show you the performance table from the last project, which I was written."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Platform"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Usage of ",(0,n.kt)("inlineCode",{parentName:"th"},"react-native-bundle-splitter")),(0,n.kt)("th",{parentName:"tr",align:"center"},"Time (ms)"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Average"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"Android")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"834, 861, 820, 847, 816"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"835.6"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"Android")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1374, 1325, 1310, 1281, 1354"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"1,328.8"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"iOS")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1074, 1056, 1044, 1068, 1052"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"1,058.8"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"iOS")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1784, 1767, 1798, 1779, 1783"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"1784"))))),(0,n.kt)("p",null,"As you can see the difference in startup time is ~500ms for ",(0,n.kt)("strong",{parentName:"p"},"Android")," and ~700ms for ",(0,n.kt)("strong",{parentName:"p"},"iOS"),"."),(0,n.kt)("p",null,"But it doesn't mean, that for your application results will be the same. Each application and each platform is universal - it has own structure and business logic, so there is only one 100% way to know what is the boost of performance you may get - try to integrate this library to your project and see the results."))}c.isMDXComponent=!0}}]);