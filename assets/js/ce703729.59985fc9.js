(self.webpackChunkquickswap=self.webpackChunkquickswap||[]).push([[1971],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),f=r,d=h["".concat(l,".").concat(f)]||h[f]||u[f]||i;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5610:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var n,r=a(2122),i=a(9756),o=(a(7294),a(3905)),s={id:"03-flash-swaps",title:"Flash Swaps",tags:"flash-swaps, documentation"},l={unversionedId:"concepts/core-concepts/03-flash-swaps",id:"version-V2/concepts/core-concepts/03-flash-swaps",isDocsHomePage:!1,title:"Flash Swaps",description:"Uniswap flash swaps\xa0allow you to withdraw up to the full reserves of any ERC20 token on Uniswap and execute arbitrary logic at no upfront cost, provided that by the end of the transaction you either:",source:"@site/versioned_docs/version-V2/concepts/02-core-concepts/03-flash-swaps.md",sourceDirName:"concepts/02-core-concepts",slug:"/concepts/core-concepts/03-flash-swaps",permalink:"/concepts/core-concepts/03-flash-swaps",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/concepts/02-core-concepts/03-flash-swaps.md",version:"V2",sidebarPosition:3,frontMatter:{id:"03-flash-swaps",title:"Flash Swaps",tags:"flash-swaps, documentation"},sidebar:"defaultSidebar",previous:{title:"Pools",permalink:"/concepts/core-concepts/02-pools"},next:{title:"Introduction",permalink:"/concepts/core-concepts/04-oracles"}},p=[{value:"Capital Free Arbitrage",id:"capital-free-arbitrage",children:[{value:"Withdrawing ETH from Uniswap",id:"withdrawing-eth-from-uniswap",children:[]},{value:"Trade at External Venue",id:"trade-at-external-venue",children:[]}]},{value:"Instant Leverage",id:"instant-leverage",children:[]}],c=(n="Github",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),u={toc:p};function h(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Uniswap flash swaps\xa0allow you to withdraw up to the full reserves of any ERC20 token on Uniswap and execute arbitrary logic at no upfront cost, provided that by the end of the transaction you either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pay for the withdrawn ERC20 tokens with the corresponding pair tokens"),(0,o.kt)("li",{parentName:"ul"},"return the withdrawn ERC20 tokens along with a small fee")),(0,o.kt)("p",null,"Flash swaps are incredibly useful because they obviate upfront capital requirements and unnecessary order-of-operations constraints\xa0for multi-step transactions involving Uniswap."),(0,o.kt)("h1",{id:"examples"},"Examples"),(0,o.kt)("h2",{id:"capital-free-arbitrage"},"Capital Free Arbitrage"),(0,o.kt)("p",null,"One particularly interesting use case for flash swaps is capital-free\xa0arbitrage. It's well-known that an integral part of Uniswap's design is to create incentives for arbitrageurs to trade the Uniswap price to a \"fair\" market price. While game-theoretically sound, this strategy is accessible only to those with sufficient capital to take advantage of arbitrage opportunities. Flash swaps remove this barrier entirely, effectively democratizing arbitrage."),(0,o.kt)("p",null,"Imagine a scenario where the cost of buying 1 ETH on Uniswap is 200 DAI (which is calculated by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"getAmountIn")," with 1 ETH specified as an exact output), and on Oasis (or any other trading venue), 1 ETH buys 220 DAI. To anyone with 200 DAI available, this situation represents a risk-free profit of 20 DAI. Unfortunately, you may not have 200 DAI lying around. With flash swaps, however, this risk-free profit is available for anyone to take as long as they're able to pay gas fees."),(0,o.kt)("h3",{id:"withdrawing-eth-from-uniswap"},"Withdrawing ETH from Uniswap"),(0,o.kt)("p",null,"The first step is to ",(0,o.kt)("em",{parentName:"p"},"optimistically")," withdraw 1 ETH from Uniswap via a flash swap. This will serve as the capital that we use to execute our arbitrage. Note that in this scenario, we're assuming that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 ETH is the pre-calculated profit-maximizing trade"),(0,o.kt)("li",{parentName:"ul"},"The price has not changed on Uniswap or Oasis since our calculation")),(0,o.kt)("p",null,"It may be the case that we'd like to calculate the profit-maximizing trade on-chain at the moment of execution, which is robust to price movements. This can be somewhat complex, depending on the strategy being executed. However, one common strategy is trading as profitably as possible ",(0,o.kt)("em",{parentName:"p"},"against a fixed external price"),". (This price may be e.g., the average execution price of one or more orders on Oasis.) If the Uniswap market price is far enough above or below this external price, the following example contains code that calculates the amount to trade over Uniswap for maximum profit: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSwapToPrice.sol"},(0,o.kt)("inlineCode",{parentName:"a"},"ExampleSwapToPrice.sol")),"."),(0,o.kt)(c,{href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSwapToPrice.sol",mdxType:"Github"},"ExampleSwapToPrice.sol"),(0,o.kt)("h3",{id:"trade-at-external-venue"},"Trade at External Venue"),(0,o.kt)("p",null,"Once we've obtained our temporary capital of 1 ETH from Uniswap, we now can trade this for 220 DAI on Oasis. Once we've received the DAI, we need to pay Uniswap back. We've mentioned that the amount required to cover 1 ETH is 200 DAI, calculated via ",(0,o.kt)("inlineCode",{parentName:"p"},"getAmountIn"),". So, after sending 200 of the DAI back to the Uniswap pair, you're left with 20 DAI of profit!"),(0,o.kt)("h2",{id:"instant-leverage"},"Instant Leverage"),(0,o.kt)("p",null,"Flash swaps can be used to improve the efficiency of levering up using lending protocols and Uniswap."),(0,o.kt)("p",null,"Consider Maker in its simplest form: a system which accepts ETH as collateral and allows DAI to be minted against it while ensuring that the value of the ETH never drops below 150% of the value of the DAI."),(0,o.kt)("p",null,"Say we use this system to deposit a principal amount of 3 ETH, and mint the maximum amount of DAI. At a price of 1 ETH / 200 DAI, we receive 400 DAI. In theory, we could lever this position up by selling the DAI for more ETH, depositing this ETH, minting the maximum amount of DAI (which would be less this time), and repeating until we've reached our desired leverage level."),(0,o.kt)("p",null,"It's quite simple to use Uniswap as a liquidity source for the DAI-to-ETH component of this process. However, looping through protocols in this way isn't particularly elegant, and can be gas-intensive."),(0,o.kt)("p",null,"Luckily, flash swaps enable us to withdraw the ",(0,o.kt)("em",{parentName:"p"},"full")," ETH amount upfront. If we wanted 2x leverage against our 3 ETH principal, we could simply request 3 ETH in a flash swap and deposit 6 ETH into Maker. This gives us the ability to mint 800 DAI. If we mint as much as we need to cover our flash swap (say 605), the remainder serves as a safety margin against price movements."),(0,o.kt)("h1",{id:"developer-resources"},"Developer resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To see how to integrate a flash swap in your smart contract read ",(0,o.kt)("a",{parentName:"li",href:"/guides/smart-contract-integration/05-using-flash-swaps"},"Using Flash Swaps"),".")))}h.isMDXComponent=!0}}]);