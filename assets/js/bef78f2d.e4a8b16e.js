(self.webpackChunkquickswap=self.webpackChunkquickswap||[]).push([[62],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,k=u["".concat(d,".").concat(h)]||u[h]||l[h]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1014:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={id:"02-fetching-data",title:"Fetching Data",tags:"SDK, developer-guides, documentation"},s={unversionedId:"guides/javascript-sdk/02-fetching-data",id:"version-V2/guides/javascript-sdk/02-fetching-data",isDocsHomePage:!1,title:"Fetching Data",description:"Looking for a quickstart?",source:"@site/versioned_docs/version-V2/guides/javascript-sdk/02-fetching-data.md",sourceDirName:"guides/javascript-sdk",slug:"/guides/javascript-sdk/02-fetching-data",permalink:"/guides/javascript-sdk/02-fetching-data",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/guides/javascript-sdk/02-fetching-data.md",version:"V2",sidebarPosition:2,frontMatter:{id:"02-fetching-data",title:"Fetching Data",tags:"SDK, developer-guides, documentation"},sidebar:"defaultSidebar",previous:{title:"SDK Quick start",permalink:"/guides/javascript-sdk/01-quick-start"},next:{title:"Pricing",permalink:"/guides/javascript-sdk/03-pricing"}},d=[{value:"Identifying Data",id:"identifying-data",children:[]},{value:"Required Data",id:"required-data",children:[{value:"Provided by the User",id:"provided-by-the-user",children:[]},{value:"Fetched by the SDK",id:"fetched-by-the-sdk",children:[]}]},{value:"Optional Data",id:"optional-data",children:[]},{value:"Identifying Data",id:"identifying-data-1",children:[]},{value:"Required Data",id:"required-data-1",children:[{value:"Provided by the User",id:"provided-by-the-user-1",children:[]},{value:"Fetched by the SDK",id:"fetched-by-the-sdk-1",children:[]}]}],p={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Looking for a ",(0,o.kt)("a",{parentName:"p",href:"/guides/javascript-sdk/01-quick-start"},"quickstart"),"?")),(0,o.kt)("p",null,"While the SDK is fully self-contained, there are two cases where it needs ",(0,o.kt)("em",{parentName:"p"},"on-chain data")," to function.\nThis guide will detail both of these cases, and offer some strategies that you can use to fetch this data."),(0,o.kt)("h1",{id:"case-1-tokens"},"Case 1: Tokens"),(0,o.kt)("p",null,"Unsurprisingly, the SDK needs some notion of an ERC-20 token to be able to function. This immediately raises the question of ",(0,o.kt)("em",{parentName:"p"},"where data about tokens comes from"),"."),(0,o.kt)("p",null,"As an example, let's try to represent DAI in a format the SDK can work with. To do so, we need at least 3 pieces of data: a ",(0,o.kt)("strong",{parentName:"p"},"chainId"),", a ",(0,o.kt)("strong",{parentName:"p"},"token address"),", and how many ",(0,o.kt)("strong",{parentName:"p"},"decimals")," the token has. We also may be interested in the ",(0,o.kt)("strong",{parentName:"p"},"symbol")," and/or ",(0,o.kt)("strong",{parentName:"p"},"name")," of the token."),(0,o.kt)("h2",{id:"identifying-data"},"Identifying Data"),(0,o.kt)("p",null,"The first two pieces of data \u2014 ",(0,o.kt)("strong",{parentName:"p"},"chainId")," and ",(0,o.kt)("strong",{parentName:"p"},"token address")," \u2014 must be provided by us. Thinking about it, this makes sense, as there's really no other way to unambiguously identify a token."),(0,o.kt)("p",null,"So, in the case of DAI, we know that the ",(0,o.kt)("strong",{parentName:"p"},"chainId")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," (we're on mainnet), and the ",(0,o.kt)("strong",{parentName:"p"},"token address")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"0x6B175474E89094C44Da98b954EedeAC495271d0F"),". Note that it's very important to externally verify token addresses. Don't use addresses from sources you don't trust!"),(0,o.kt)("h2",{id:"required-data"},"Required Data"),(0,o.kt)("p",null,"The next piece of data we need is ",(0,o.kt)("strong",{parentName:"p"},"decimals"),"."),(0,o.kt)("h3",{id:"provided-by-the-user"},"Provided by the User"),(0,o.kt)("p",null,"One option here is to simply pass in the correct value, which we may know is ",(0,o.kt)("inlineCode",{parentName:"p"},"18"),". At this point, we're ready to represent DAI as a ",(0,o.kt)("a",{parentName:"p",href:"/reference/SDK/02-token"},"Token"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token } from '@uniswap/sdk'\n\nconst chainId = ChainId.MAINNET\nconst tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // must be checksummed\nconst decimals = 18\n\nconst DAI = new Token(chainId, tokenAddress, decimals)\n")),(0,o.kt)("p",null,"If we don't know or don't want to hardcode the value, we could look it up ourselves via any method of retrieving on-chain data in a function that looks something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId } from '@uniswap/sdk'\n\nasync function getDecimals(chainId: ChainId, tokenAddress: string): Promise<number> {\n  // implementation details\n}\n")),(0,o.kt)("h3",{id:"fetched-by-the-sdk"},"Fetched by the SDK"),(0,o.kt)("p",null,"If we don't want to provide or look up the value ourselves, we can ask the SDK to look it up for us with ",(0,o.kt)("a",{parentName:"p",href:"/reference/SDK/07-fetcher#fetchtokendata"},"Fetcher.fetchTokenData")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token, Fetcher } from '@uniswap/sdk'\n\nconst chainId = ChainId.MAINNET\nconst tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // must be checksummed\n\n// note that you may want/need to handle this async code differently,\n// for example if top-level await is not an option\nconst DAI: Token = await Fetcher.fetchTokenData(chainId, tokenAddress)\n")),(0,o.kt)("p",null,"By default, this method will use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/providers/#providers-getDefaultProvider"},"default provider defined by ethers.js"),".\nIf you're already using ethers.js in your application, you may pass in your provider as a 3rd argument.\nIf you're using another library, you'll have to fetch the data separately."),(0,o.kt)("h2",{id:"optional-data"},"Optional Data"),(0,o.kt)("p",null,"Finally, we can talk about ",(0,o.kt)("strong",{parentName:"p"},"symbol")," and ",(0,o.kt)("strong",{parentName:"p"},"name"),". Because these fields aren't used anywhere in the SDK itself, they're optional, and can be provided if you want to use them in your application. However, the SDK will not fetch them for you, so you'll have to provide them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token } from '@uniswap/sdk'\n\nconst DAI = new Token(\n  ChainId.MAINNET,\n  '0x6B175474E89094C44Da98b954EedeAC495271d0F',\n  18,\n  'DAI',\n  'Dai Stablecoin'\n)\n")),(0,o.kt)("p",null,"or:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token, Fetcher } from '@uniswap/sdk'\n\n// note that you may want/need to handle this async code differently,\n// for example if top-level await is not an option\nconst DAI = await Fetcher.fetchTokenData(\n  ChainId.MAINNET,\n  '0x6B175474E89094C44Da98b954EedeAC495271d0F',\n  undefined,\n  'DAI',\n  'Dai Stablecoin'\n)\n")),(0,o.kt)("h1",{id:"case-2-pairs"},"Case 2: Pairs"),(0,o.kt)("p",null,"Now that we've explored how to define a token, let's talk about pairs. To read more about what Uniswap pairs are, see ",(0,o.kt)("a",{parentName:"p",href:"/reference/smart-contracts/pair"},"Pair")),(0,o.kt)("p",null,"As an example, let's try to represent the DAI-WETH pair."),(0,o.kt)("h2",{id:"identifying-data-1"},"Identifying Data"),(0,o.kt)("p",null,"Each pair consists of two tokens (see previous section). Note that WETH used by the router is ",(0,o.kt)("a",{parentName:"p",href:"/reference/SDK/08-other-exports"},"exported by the SDK"),"."),(0,o.kt)("h2",{id:"required-data-1"},"Required Data"),(0,o.kt)("p",null,"The data we need is the ",(0,o.kt)("em",{parentName:"p"},"reserves")," of the pair. To read more about reserves, see ",(0,o.kt)("a",{parentName:"p",href:"/reference/smart-contracts/pair#getreserves"},"getReserves"),"."),(0,o.kt)("h3",{id:"provided-by-the-user-1"},"Provided by the User"),(0,o.kt)("p",null,"One option here is to simply pass in values which we've fetched ourselves to create a ",(0,o.kt)("a",{parentName:"p",href:"/reference/SDK/03-pair"},"Pair"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token, WETH, Pair, TokenAmount } from '@uniswap/sdk'\n\nconst DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)\n\nasync function getPair(): Promise<Pair> {\n  const pairAddress = Pair.getAddress(DAI, WETH[DAI.chainId])\n\n  const reserves = [/* use pairAddress to fetch reserves here */]\n  const [reserve0, reserve1] = reserves\n\n  const tokens = [DAI, WETH[DAI.chainId]]\n  const [token0, token1] = tokens[0].sortsBefore(tokens[1]) ? tokens : [tokens[1], tokens[0]]\n\n  const pair = new Pair(new TokenAmount(token0, reserve0), new TokenAmount(token1, reserve1))\n  return pair\n}\n")),(0,o.kt)("p",null,"Note that these values can change as frequently as every block, and should be kept up-to-date."),(0,o.kt)("h3",{id:"fetched-by-the-sdk-1"},"Fetched by the SDK"),(0,o.kt)("p",null,"If we don't want to look up the value ourselves, we can ask the SDK to look them up for us with ",(0,o.kt)("a",{parentName:"p",href:"/reference/SDK/07-fetcher#fetchtokendata"},"Fetcher.fetchTokenData"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token, WETH, Fetcher } from '@uniswap/sdk'\n\nconst DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)\n\n// note that you may want/need to handle this async code differently,\n// for example if top-level await is not an option\nconst pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId])\n")),(0,o.kt)("p",null,"By default, this method will use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/providers/#providers-getDefaultProvider"},"default provider defined by ethers.js"),". If you're already using ethers.js in your application, you may pass in your provider as a 3rd argument. If you're using another library, you'll have to fetch the data separately."),(0,o.kt)("p",null,"Note that these values can change as frequently as every block, and should be kept up-to-date."))}c.isMDXComponent=!0}}]);