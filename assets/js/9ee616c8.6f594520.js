(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[2534],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return d},kt:function(){return m}});var i=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,i,n=function(t,e){if(null==t)return{};var r,i,n={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=i.createContext({}),u=function(t){var e=i.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=u(t.components);return i.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,c=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=u(r),m=n,h=p["".concat(c,".").concat(m)]||p[m]||l[m]||a;return r?i.createElement(h,o(o({ref:e},d),{},{components:r})):i.createElement(h,o({ref:e},d))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:n,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1768:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var i=r(2122),n=r(9756),a=(r(7294),r(3905)),o={id:"03-providing-liquidity",title:"Providing Liquidity",tags:"smart contract integration, developer-guides, documentation"},s={unversionedId:"guides/smart-contract-integration/03-providing-liquidity",id:"version-V2/guides/smart-contract-integration/03-providing-liquidity",isDocsHomePage:!1,title:"Providing Liquidity",description:"Introduction",source:"@site/versioned_docs/version-V2/guides/smart-contract-integration/03-providing-liquidity.md",sourceDirName:"guides/smart-contract-integration",slug:"/guides/smart-contract-integration/03-providing-liquidity",permalink:"/guides/smart-contract-integration/03-providing-liquidity",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/guides/smart-contract-integration/03-providing-liquidity.md",version:"V2",sidebarPosition:3,frontMatter:{id:"03-providing-liquidity",title:"Providing Liquidity",tags:"smart contract integration, developer-guides, documentation"},sidebar:"defaultSidebar",previous:{title:"Implement a Swap",permalink:"/guides/smart-contract-integration/02-trading-from-a-smart-contract"},next:{title:"Building an Oracle",permalink:"/guides/smart-contract-integration/04-building-an-oracle"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Using the Router",id:"using-the-router",children:[]}],u={toc:c};function d(t){var e=t.components,r=(0,n.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"When providing liquidity from a smart contract, the most important thing to keep in mind is that tokens deposited into a pool at any rate other than the current reserve ratio ",(0,a.kt)("em",{parentName:"p"},"are vulnerable to being arbitraged"),". As an example, if the ratio of x:y in a pair is 10:2 (i.e. the price is 5), and someone naively adds liquidity at 5:2 (a price of 2.5), the contract will simply accept all tokens (changing the price to 3.75 and opening up the market to arbitrage), but only issue pool tokens entitling the sender to the amount of assets sent at the proper ratio, in this case 5:1. To avoid donating to arbitrageurs, it is imperative to add liquidity at the current price. Luckily, it's easy to ensure that this condition is met!"),(0,a.kt)("h2",{id:"using-the-router"},"Using the Router"),(0,a.kt)("p",null,"The easiest way to safely add liquidity to a pool is to use the ",(0,a.kt)("a",{parentName:"p",href:"/reference/smart-contracts/router02"},"router"),", which provides simple methods to safely add liquidity to a pool. If the liquidity is to be added to an ERC-20/ERC-20 pair, use ",(0,a.kt)("a",{parentName:"p",href:"/reference/smart-contracts/router02#addliquidity"},"addLiquidity"),". If WETH is involved, use ",(0,a.kt)("a",{parentName:"p",href:"/reference/smart-contracts/router02#addliquidityeth"},"addLiquidityETH"),"."),(0,a.kt)("p",null,"These methods both require the caller to commit to a ",(0,a.kt)("em",{parentName:"p"},"belief about the current price"),", which is encoded in the ",(0,a.kt)("inlineCode",{parentName:"p"},"amount*Desired")," parameters. Typically, it's fairly safe to assume that the current fair market price is around what the current reserve ratio is for a pair (because of arbitrage). So, if a user wants to add 1 ETH to a pool, and the current DAI/WETH ratio of the pool is 200/1, it's reasonable to calculate that 200 DAI must be sent along with the ETH, which is an implicit commitment to the price of 200 DAI/1 WETH. However, it's important to note that this must be calculated ",(0,a.kt)("em",{parentName:"p"},"before the transaction is submitted"),". It is ",(0,a.kt)("em",{parentName:"p"},"not safe")," to look up the reserve ratio from within a transaction and rely on it as a price belief, as this ratio can be cheaply manipulated to your detriment."),(0,a.kt)("p",null,"However, it is still possible to submit a transaction which encodes a belief about the price which ends up being wrong because of a larger change in the true market price before the transaction is confirmed. For that reason, it's necessary to pass an additional set of parameters which encode the caller's tolerance to price changes. These ",(0,a.kt)("inlineCode",{parentName:"p"},"amount*Min")," parameters should typically be set to percentages of the calculated desired price. So, at a 1% tolerance level, if our user sends a transaction with 1 ETH and 200 DAI, ",(0,a.kt)("inlineCode",{parentName:"p"},"amountETHMin")," should be set to e.g. .99 ETH, and ",(0,a.kt)("inlineCode",{parentName:"p"},"amountTokenMin")," should be set to 198 DAI. This means that, at worst, liquidity will be added at a rate between 198 DAI/1 ETH and 202.02 DAI/1 ETH (200 DAI/.99 ETH)."),(0,a.kt)("p",null,"Once the price calculations have been made, it's important to ensure that your contract a) controls at least as many tokens/ETH as were passed as ",(0,a.kt)("inlineCode",{parentName:"p"},"amount*Desired")," parameters, and b) has granted approval to the router to withdraw this many tokens."))}d.isMDXComponent=!0}}]);