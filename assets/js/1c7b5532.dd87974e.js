(self.webpackChunkquickswap=self.webpackChunkquickswap||[]).push([[1887],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(n),h=i,f=l["".concat(s,".").concat(h)]||l[h]||u[h]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},4023:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={id:"03-pricing",title:"Pricing",tags:"SDK, developer-guides, documentation"},c={unversionedId:"guides/javascript-sdk/03-pricing",id:"version-V2/guides/javascript-sdk/03-pricing",isDocsHomePage:!1,title:"Pricing",description:"Looking for a quickstart?",source:"@site/versioned_docs/version-V2/guides/javascript-sdk/03-pricing.md",sourceDirName:"guides/javascript-sdk",slug:"/guides/javascript-sdk/03-pricing",permalink:"/guides/javascript-sdk/03-pricing",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/guides/javascript-sdk/03-pricing.md",version:"V2",sidebarPosition:3,frontMatter:{id:"03-pricing",title:"Pricing",tags:"SDK, developer-guides, documentation"},sidebar:"defaultSidebar",previous:{title:"Fetching Data",permalink:"/guides/javascript-sdk/02-fetching-data"},next:{title:"Trading",permalink:"/guides/javascript-sdk/04-trading"}},s=[{value:"Direct",id:"direct",children:[]},{value:"Indirect",id:"indirect",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Looking for a ",(0,a.kt)("a",{parentName:"p",href:"/guides/javascript-sdk/01-quick-start"},"quickstart"),"?")),(0,a.kt)("p",null,"Let's talk pricing. This guide will focus on the two most important Uniswap prices: the ",(0,a.kt)("strong",{parentName:"p"},"mid price")," and the ",(0,a.kt)("strong",{parentName:"p"},"execution price"),"."),(0,a.kt)("h1",{id:"mid-price"},"Mid Price"),(0,a.kt)("p",null,"The mid price, in the context of Uniswap, is the price that reflects the ",(0,a.kt)("em",{parentName:"p"},"ratio of reserves in one or more pairs"),". There are three ways we can think about this price. Perhaps most simply, it defines the relative value of one token in terms of the other. It also represents the price at which you could theoretically trade an infinitesimal amount (\u03b5) of one token for the other. Finally, it can be interpreted as the current ",(0,a.kt)("em",{parentName:"p"},"market-clearing or fair value price")," of the assets."),(0,a.kt)("p",null,"Let's consider the mid price for DAI-WETH (that is, the amount of DAI per 1 WETH)."),(0,a.kt)("h2",{id:"direct"},"Direct"),(0,a.kt)("p",null,"The simplest way to get the DAI-WETH mid price is to observe the pair directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { ChainId, Token, WETH, Fetcher, Route } from "@uniswap/sdk";\n\nconst DAI = new Token(\n  ChainId.MAINNET,\n  "0x6B175474E89094C44Da98b954EedeAC495271d0F",\n  18\n);\n\n// note that you may want/need to handle this async code differently,\n// for example if top-level await is not an option\nconst pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId]);\n\nconst route = new Route([pair], WETH[DAI.chainId]);\n\nconsole.log(route.midPrice.toSignificant(6)); // 201.306\nconsole.log(route.midPrice.invert().toSignificant(6)); // 0.00496756\n')),(0,a.kt)("p",null,"You may be wondering why we have to construct a ",(0,a.kt)("em",{parentName:"p"},"route")," to get the mid price, as opposed to simply getting it from the pair (which, after all, includes all the necessary data). The reason is simple: a route forces us to be opinionated about the ",(0,a.kt)("em",{parentName:"p"},"direction")," of trading. Routes consist of one or more pairs, and an input token (which fully defines a trading path). In this case, we passed WETH as the input token, meaning we're interested in a WETH -> DAI trade."),(0,a.kt)("p",null,"Now we understand that the mid price is going to be defined in terms of DAI/WETH. Not to worry though, if we need the WETH/DAI price, we can easily invert."),(0,a.kt)("p",null,"Finally, you may have noticed that we're formatting the price to 6 significant digits. This is because internally, prices are stored as exact-precision fractions, which can be converted to other representations on demand. For a full list of options, see ",(0,a.kt)("a",{parentName:"p",href:"/reference/SDK/06-fractions#price"},"Price"),"."),(0,a.kt)("h2",{id:"indirect"},"Indirect"),(0,a.kt)("p",null,"For the sake of example, let's imagine a direct pair between DAI and WETH ",(0,a.kt)("em",{parentName:"p"},"doesn't exist"),". In order to get a DAI-WETH mid price we'll need to pick a valid route. Imagine both DAI and WETH have pairs with a third token, USDC. In that case, we can calculate an indirect mid price through the USDC pairs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { ChainId, Token, WETH, Fetcher, Route } from "@uniswap/sdk";\n\nconst USDC = new Token(\n  ChainId.MAINNET,\n  "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",\n  6\n);\nconst DAI = new Token(\n  ChainId.MAINNET,\n  "0x6B175474E89094C44Da98b954EedeAC495271d0F",\n  18\n);\n\n// note that you may want/need to handle this async code differently,\n// for example if top-level await is not an option\nconst USDCWETHPair = await Fetcher.fetchPairData(USDC, WETH[ChainId.MAINNET]);\nconst DAIUSDCPair = await Fetcher.fetchPairData(DAI, USDC);\n\nconst route = new Route([USDCWETHPair, DAIUSDCPair], WETH[ChainId.MAINNET]);\n\nconsole.log(route.midPrice.toSignificant(6)); // 202.081\nconsole.log(route.midPrice.invert().toSignificant(6)); // 0.00494851\n')),(0,a.kt)("h1",{id:"execution-price"},"Execution Price"),(0,a.kt)("p",null,"Mid prices are great representations of the ",(0,a.kt)("em",{parentName:"p"},"current")," state of a route, but what about trades? It turns out that it makes sense to define another price, the ",(0,a.kt)("em",{parentName:"p"},"execution")," price of a trade, as the ratio of assets sent/received."),(0,a.kt)("p",null,"Imagine we're interested in trading 1 WETH for DAI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import {\n  ChainId,\n  Token,\n  WETH,\n  Fetcher,\n  Trade,\n  Route,\n  TokenAmount,\n  TradeType,\n} from "@uniswap/sdk";\n\nconst DAI = new Token(\n  ChainId.MAINNET,\n  "0x6B175474E89094C44Da98b954EedeAC495271d0F",\n  18\n);\n\n// note that you may want/need to handle this async code differently,\n// for example if top-level await is not an option\nconst pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId]);\n\nconst route = new Route([pair], WETH[DAI.chainId]);\n\nconst trade = new Trade(\n  route,\n  new TokenAmount(WETH[DAI.chainId], "1000000000000000000"),\n  TradeType.EXACT_INPUT\n);\n\nconsole.log(trade.executionPrice.toSignificant(6));\nconsole.log(trade.nextMidPrice.toSignificant(6));\n')),(0,a.kt)("p",null,"Notice that we're constructing a trade of 1 WETH for as much DAI as possible, ",(0,a.kt)("em",{parentName:"p"},"given the current reserves of the direct pair"),". The execution price represents the average DAI/WETH price for this trade. Of course, the reserves of any pair can change every block, which would affect the execution price."),(0,a.kt)("p",null,"Also notice that we're able to access the ",(0,a.kt)("em",{parentName:"p"},"next")," mid price, if the trade were to complete successfully before the reserves changed."))}d.isMDXComponent=!0}}]);