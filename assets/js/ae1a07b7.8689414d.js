(self.webpackChunkquickswap=self.webpackChunkquickswap||[]).push([[9411],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8196:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a,r=n(2122),i=n(9756),s=(n(7294),n(3905)),o={id:"05-using-flash-swaps",title:"Flash Swaps",tags:"smart contract integration, developer-guides, documentation"},l={unversionedId:"guides/smart-contract-integration/05-using-flash-swaps",id:"version-V2/guides/smart-contract-integration/05-using-flash-swaps",isDocsHomePage:!1,title:"Flash Swaps",description:"Flash swaps are an integral feature of Uniswap V2. In fact, under the hood, all swaps are actually flash swaps! This simply means that pair contracts send output tokens to the recipient before enforcing that enough input tokens have been received. This is slightly atypical, as one might expect a pair to ensure it's received payment before delivery. However, because Ethereum transactions are atomic, we can roll back the entire swap if it turns out that the contract hasn't received enough tokens to make itself whole by the end of the transaction.",source:"@site/versioned_docs/version-V2/guides/smart-contract-integration/05-using-flash-swaps.md",sourceDirName:"guides/smart-contract-integration",slug:"/guides/smart-contract-integration/05-using-flash-swaps",permalink:"/quickswap-docs/guides/smart-contract-integration/05-using-flash-swaps",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/guides/smart-contract-integration/05-using-flash-swaps.md",version:"V2",sidebarPosition:5,frontMatter:{id:"05-using-flash-swaps",title:"Flash Swaps",tags:"smart contract integration, developer-guides, documentation"},sidebar:"defaultSidebar",previous:{title:"Building an Oracle",permalink:"/quickswap-docs/guides/smart-contract-integration/04-building-an-oracle"},next:{title:"getPair",permalink:"/quickswap-docs/guides/smart-contract-integration/06-getting-pair-addresses"}},p=[{value:"Multi-Token",id:"multi-token",children:[]},{value:"Single-Token",id:"single-token",children:[]}],u=(a="Github",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),d={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Flash swaps are an integral feature of Uniswap V2. In fact, under the hood, all swaps are actually flash swaps! This simply means that pair contracts send output tokens to the recipient ",(0,s.kt)("em",{parentName:"p"},"before")," enforcing that enough input tokens have been received. This is slightly atypical, as one might expect a pair to ensure it's received payment before delivery. However, because Ethereum transactions are ",(0,s.kt)("em",{parentName:"p"},"atomic"),", we can roll back the entire swap if it turns out that the contract hasn't received enough tokens to make itself whole by the end of the transaction."),(0,s.kt)("p",null,"To see how this all works, let's start by examining the interface of the ",(0,s.kt)("inlineCode",{parentName:"p"},"swap")," function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data);\n")),(0,s.kt)("p",null,"For the sake of example, let's assume that we're dealing with a DAI/WETH pair, where DAI is ",(0,s.kt)("inlineCode",{parentName:"p"},"token0")," and WETH is ",(0,s.kt)("inlineCode",{parentName:"p"},"token1"),". ",(0,s.kt)("inlineCode",{parentName:"p"},"amount0Out")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"amount1Out")," specify the amount of DAI and WETH that the ",(0,s.kt)("inlineCode",{parentName:"p"},"msg.sender")," wants the pair to send to the ",(0,s.kt)("inlineCode",{parentName:"p"},"to")," address (one of these amounts may be 0). At this point you may be wondering how the contract ",(0,s.kt)("em",{parentName:"p"},"receives")," tokens. For a typical (non-flash) swap, it's actually the responsibility of ",(0,s.kt)("inlineCode",{parentName:"p"},"msg.sender")," to ensure that enough WETH or DAI has ",(0,s.kt)("em",{parentName:"p"},"already been sent")," to the pair before ",(0,s.kt)("inlineCode",{parentName:"p"},"swap")," is called (in the context of trading, this is all handled neatly by a router contract). But when executing a flash swap, ",(0,s.kt)("em",{parentName:"p"},"tokens do not need to be sent to the contract before calling ",(0,s.kt)("inlineCode",{parentName:"em"},"swap")),". Instead, they must be sent from within a ",(0,s.kt)("em",{parentName:"p"},"callback function")," that the pair triggers on the ",(0,s.kt)("inlineCode",{parentName:"p"},"to")," address."),(0,s.kt)("h1",{id:"triggering-a-flash-swap"},"Triggering a Flash Swap"),(0,s.kt)("p",null,'To differentiate between the "typical" trading case and the flash swap case, pairs use the ',(0,s.kt)("inlineCode",{parentName:"p"},"data")," parameter. Specifically, if ",(0,s.kt)("inlineCode",{parentName:"p"},"data.length")," equals 0, the contract assumes that payment has already been received, and simply transfers the tokens to the ",(0,s.kt)("inlineCode",{parentName:"p"},"to")," address. But, if ",(0,s.kt)("inlineCode",{parentName:"p"},"data.length")," is greater than 0, the contract transfers the tokens and then calls the following function on the ",(0,s.kt)("inlineCode",{parentName:"p"},"to")," address:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"function uniswapV2Call(address sender, uint amount0, uint amount1, bytes calldata data);\n")),(0,s.kt)("p",null,"The logic behind this identification strategy is simple: the vast majority of valid flash swap use cases involve interactions with external protocols. The best way to pass information dictating how these interactions happen (function arguments, safety parameters, addresses, etc.) is via the ",(0,s.kt)("inlineCode",{parentName:"p"},"data")," parameter. It's expected that ",(0,s.kt)("inlineCode",{parentName:"p"},"data")," will be ",(0,s.kt)("inlineCode",{parentName:"p"},"abi.decode"),"d from within ",(0,s.kt)("inlineCode",{parentName:"p"},"uniswapV2Call"),". In the rare case where no data is required, callers should ensure that ",(0,s.kt)("inlineCode",{parentName:"p"},"data.length")," equals 1 (i.e. encode a single junk byte as ",(0,s.kt)("inlineCode",{parentName:"p"},"bytes"),"), and then ignore this argument in ",(0,s.kt)("inlineCode",{parentName:"p"},"uniswapV2Call"),"."),(0,s.kt)("p",null,"Pairs call ",(0,s.kt)("inlineCode",{parentName:"p"},"uniswapV2Call")," with the ",(0,s.kt)("inlineCode",{parentName:"p"},"sender")," argument set to the ",(0,s.kt)("inlineCode",{parentName:"p"},"msg.sender")," of the ",(0,s.kt)("inlineCode",{parentName:"p"},"swap"),". ",(0,s.kt)("inlineCode",{parentName:"p"},"amount0")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"amount1")," are simply ",(0,s.kt)("inlineCode",{parentName:"p"},"amount0Out")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"amount1Out"),"."),(0,s.kt)("h1",{id:"using-uniswapv2call"},"Using uniswapV2Call"),(0,s.kt)("p",null,"There are several conditions that should be checked in all ",(0,s.kt)("inlineCode",{parentName:"p"},"uniswapV2Call")," functions:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"function uniswapV2Call(address sender, uint amount0, uint amount1, bytes calldata data) {\n  address token0 = IUniswapV2Pair(msg.sender).token0(); // fetch the address of token0\n  address token1 = IUniswapV2Pair(msg.sender).token1(); // fetch the address of token1\n  assert(msg.sender == IUniswapV2Factory(factoryV2).getPair(token0, token1)); // ensure that msg.sender is a V2 pair\n  // rest of the function goes here!\n}\n")),(0,s.kt)("p",null,"The first 2 lines simply fetch the token addresses from the pair, and the 3rd ensures that the ",(0,s.kt)("inlineCode",{parentName:"p"},"msg.sender")," is an actual Uniswap V2 pair address."),(0,s.kt)("h1",{id:"repayment"},"Repayment"),(0,s.kt)("p",null,"At the end of ",(0,s.kt)("inlineCode",{parentName:"p"},"uniswapV2Call"),", contracts must return enough tokens to the pair to make it whole. Specifically, this means that the product of the pair reserves after the swap, discounting all token amounts sent by 0.3% LP fee, must be greater than before."),(0,s.kt)("h2",{id:"multi-token"},"Multi-Token"),(0,s.kt)("p",null,"In the case where the token withdrawn is ",(0,s.kt)("em",{parentName:"p"},"not")," the token returned (i.e. DAI was requested in the flash swap, and WETH was returned, or vice versa), the fee simplifies to the simple swap case. This means that the standard ",(0,s.kt)("inlineCode",{parentName:"p"},"getAmountIn")," pricing function should be used to calculate e.g., the amount of WETH that must be returned in exchange for the amount of DAI that was requested out."),(0,s.kt)("p",null,"This type of fee calculation gives a slight advantage to the caller, as the fee derived from repayment in a corresponding token will always be slightly less than the fee derived from a direct token repayment, as a result of the difference between the amount required to pay back a swap, versus the amount withdrawn and then directly returned. The approximate comparison of fees is ~ 30 bps for a swap fee vs. 30.09 bps for a direct repayment."),(0,s.kt)("h2",{id:"single-token"},"Single-Token"),(0,s.kt)("p",null,"In the case where the token withdrawn is the ",(0,s.kt)("em",{parentName:"p"},"same")," as the token returned (i.e. DAI was requested in the flash swap, used, then returned, or vice versa with WETH), the following condition must be satisfied:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"DAIReservePre - DAIWithdrawn + (DAIReturned * .997) >= DAIReservePre")),(0,s.kt)("p",null,'It may be more intuitive to rewrite this formula in terms of a "fee" levied on the ',(0,s.kt)("em",{parentName:"p"},"withdrawn")," amount (despite the fact that Uniswap always levies fees on input amounts, in this case the ",(0,s.kt)("em",{parentName:"p"},"returned")," amount, here we can simplify to an effective fee on the ",(0,s.kt)("em",{parentName:"p"},"withdrawn")," amount). If we rearrange, the formula looks like:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"(DAIReturned * .997) - DAIWithdrawn >= 0")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"DAIReturned >= DAIWithdrawn / .997")),(0,s.kt)("p",null,"So, the effective fee on the withdrawn amount is ",(0,s.kt)("inlineCode",{parentName:"p"},".003 / .997 \u2248 0.3009027%"),"."),(0,s.kt)("h1",{id:"resources"},"Resources"),(0,s.kt)("p",null,"For further exploration of flash swaps, see the ",(0,s.kt)("a",{href:"/whitepaper.pdf",target:"_blank",rel:"noopener noreferrer"},"whitepaper"),"."),(0,s.kt)("h1",{id:"example"},"Example"),(0,s.kt)("p",null,"A fully functional example of flash swaps is available: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleFlashSwap.sol"},(0,s.kt)("inlineCode",{parentName:"a"},"ExampleFlashSwap.sol")),"."),(0,s.kt)(u,{href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSwapToPrice.sol",mdxType:"Github"},"ExampleSwapToPrice.sol"),(0,s.kt)("h1",{id:"interface"},"Interface"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Callee.sol';\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity >=0.5.0;\n\ninterface IUniswapV2Callee {\n  function uniswapV2Call(address sender, uint amount0, uint amount1, bytes calldata data) external;\n}\n")))}c.isMDXComponent=!0}}]);