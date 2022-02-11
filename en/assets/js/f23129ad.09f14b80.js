"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[41406],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return p}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=l.createContext({}),s=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=s(t.components);return l.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),k=s(n),p=r,h=k["".concat(i,".").concat(p)]||k[p]||c[p]||o;return n?l.createElement(h,a(a({ref:e},d),{},{components:n})):l.createElement(h,a({ref:e},d))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=k;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:r,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},66992:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return d},default:function(){return k}});var l=n(83117),r=n(80102),o=(n(67294),n(3905)),a=["components"],u={title:"Taro.getSystemInfoSync()",sidebar_label:"getSystemInfoSync"},i=void 0,s={unversionedId:"apis/base/system/getSystemInfoSync",id:"apis/base/system/getSystemInfoSync",isDocsHomePage:!1,title:"Taro.getSystemInfoSync()",description:"The synchronous version of Taro.getSystemInfo.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/base/system/getSystemInfoSync.md",sourceDirName:"apis/base/system",slug:"/apis/base/system/getSystemInfoSync",permalink:"/taro/en/docs/next/apis/base/system/getSystemInfoSync",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/base/system/getSystemInfoSync.md",tags:[],version:"current",frontMatter:{title:"Taro.getSystemInfoSync()",sidebar_label:"getSystemInfoSync"},sidebar:"API",previous:{title:"arrayBufferToBase64",permalink:"/taro/en/docs/next/apis/base/arrayBufferToBase64"},next:{title:"getSystemInfo",permalink:"/taro/en/docs/next/apis/base/system/getSystemInfo"}},d=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Result",id:"result",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],c={toc:d};function k(t){var e=t.components,n=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The synchronous version of ",(0,o.kt)("a",{parentName:"p",href:"./getSystemInfo"},"Taro.getSystemInfo"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/system/system-info/wx.getSystemInfoSync.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"() => Result\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"result"},"Result"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE\uff1a")," Version, statusBarHeight, fontSizeSetting, SDKVersion are not supported on the ",(0,o.kt)("strong",{parentName:"p"},"H5"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"SDKVersion"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Client base library version")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"albumAuthorized"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"The switch that allows WeChat to use Photos (only for iOS)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"benchmarkLevel"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"The device performance grade (only for Mini Games on Android). Values: -2 or 0 (the device cannot run the Mini Game), -1 (unknown performance), \u22651 (a higher value (up to 50) indicates a better performance).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"bluetoothEnabled"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"The system switch for Bluetooth")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"brand"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Device brand")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"cameraAuthorized"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"The switch that allows WeChat to use the camera")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fontSizeSetting"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"User's font size in px. The setting in ",(0,o.kt)("strong",null,"Me > Settings > General > Text Size")," in the WeChat app prevails.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"language"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Language set in WeChat")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"locationAuthorized"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"The switch that allows WeChat to use the location function")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"locationEnabled"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"The system switch for the GPS function")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"microphoneAuthorized"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"The switch that allows WeChat to use the microphone")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"model"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Device model")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"notificationAlertAuthorized"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"The switch that allows WeChat to send notifications with reminders (only for iOS)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"notificationAuthorized"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"The switch that allows WeChat to send notifications")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"notificationBadgeAuthorized"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"The switch that allows WeChat to send notifications with flags (only for iOS)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"notificationSoundAuthorized"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"The switch that allows WeChat to send notifications with sound (only for iOS).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"pixelRatio"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Device's pixel ratio")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"platform"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Client platform")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"safeArea"),(0,o.kt)("td",null,(0,o.kt)("code",null,"SafeAreaResult")),(0,o.kt)("td",null,"Safe area when the screen is in vertical orientation")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"screenHeight"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Screen height in px")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"screenWidth"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Screen width in px")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"statusBarHeight"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Status bar height in px")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"system"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Operating system and version")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"version"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"WeChat version")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"wifiEnabled"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"The system switch for Wi-Fi")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"windowHeight"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Available window height in px")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"windowWidth"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"Available window width in px")))),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"try {\n  const res = Taro.getSystemInfoSync()\n  console.log(res.model)\n  console.log(res.pixelRatio)\n  console.log(res.windowWidth)\n  console.log(res.windowHeight)\n  console.log(res.language)\n  console.log(res.version)\n  console.log(res.platform)\n} catch (e) {\n  // Do something when catch error\n}\n")),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.getSystemInfoSync"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}k.isMDXComponent=!0}}]);