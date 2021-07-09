(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[3609],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4253:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={id:"04-oracles",title:"Oracles",tags:"oracles, documentation"},s={unversionedId:"concepts/core-concepts/04-oracles",id:"version-V2/concepts/core-concepts/04-oracles",isDocsHomePage:!1,title:"Introduction",description:"A price oracle is any tool used to view price information about a given asset. When you look at stock prices on your phone, you are using your phone as a price oracle. Similarly, the app on your phone relies on devices to retrieve price information - likely several, which are aggregated and then displayed to you, the end-user. These are price oracles as well.",source:"@site/versioned_docs/version-V2/concepts/02-core-concepts/04-oracles.md",sourceDirName:"concepts/02-core-concepts",slug:"/concepts/core-concepts/04-oracles",permalink:"/concepts/core-concepts/04-oracles",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/concepts/02-core-concepts/04-oracles.md",version:"V2",sidebarPosition:4,frontMatter:{id:"04-oracles",title:"Oracles",tags:"oracles, documentation"},sidebar:"defaultSidebar",previous:{title:"Flash Swaps",permalink:"/concepts/core-concepts/03-flash-swaps"},next:{title:"Fees",permalink:"/concepts/advanced-topics/01-fees"}},c=[{value:"Manipulation resistance",id:"manipulation-resistance",children:[]}],l={toc:c};function p(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A price oracle is any tool used to view price information about a given asset. When you look at stock prices on your phone, you are using your phone as a price oracle. Similarly, the app on your phone relies on devices to retrieve price information - likely several, which are aggregated and then displayed to you, the end-user. These are price oracles as well."),(0,o.kt)("p",null,"When building smart contracts that integrate with DeFi protocols, developers will inevitably run into the price oracle problem. What is the best way to retrieve the price of a given asset on-chain?"),(0,o.kt)("p",null,"Many oracle designs on Ethereum have been implemented on an ad-hoc basis, with varying degrees of decentralization and security. Because of this, the ecosystem has witnessed numerous high-profile hacks where the oracle implementation is the primary attack vector.\nSome of these vulnerabilities are discussed ",(0,o.kt)("a",{parentName:"p",href:"https://samczsun.com/taking-undercollateralized-loans-for-fun-and-for-profit/"},"here"),"."),(0,o.kt)("p",null,"While there is no one size fits all solution, Uniswap V2 enables developers to build highly decentralized and manipulation-resistant on-chain price oracles, which may solve many of the demands necessary for building robust protocols."),(0,o.kt)("h1",{id:"uniswap-v2-solution"},"Uniswap V2 solution"),(0,o.kt)("p",null,"Uniswap V2 includes several improvements for supporting manipulation-resistant public price feeds. First, every pair measures (but does not store) the market price at the beginning of each block, before any trades take place. This price is expensive to manipulate because it is set by the last transaction, whether it is a mint, swap, or burn, in a previous block."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To set the measured price to one that is out of sync with the global market price, an attacker has to make a bad trade at the end of a previous block")," , typically with no guarantee that they will arbitrage it back in the next block. Attackers will lose money to arbitrageurs unless they can \u201cselfishly\u201d mine two blocks in a row. This type of attack presents several challenges and ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1912.01798"},"has not been observed to date"),"."),(0,o.kt)("p",null,"Unfortunately, this alone is not enough. If significant value settles based on the price resulting from this mechanism, an attack\u2019s profit will likely outweigh the loss."),(0,o.kt)("p",null,"Instead, Uniswap V2 adds this end-of-block price to a single cumulative-price variable in the core contract weighted by the amount of time this price existed. ",(0,o.kt)("strong",{parentName:"p"},"This variable represents a sum of the Uniswap price for every second in the entire history of the contract.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5514).Z})),(0,o.kt)("p",null,"This variable can be used by external contracts to track accurate time-weighted average prices (TWAPs) across any time interval."),(0,o.kt)("p",null,"The TWAP is constructed by reading the cumulative price from an ERC20 token pair at the beginning and at the end of the desired interval. The difference in this cumulative price can then be divided by the length of the interval to create a TWAP for that period."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3238).Z})),(0,o.kt)("p",null,"TWAPs can be used directly or as the basis for moving averages (EMAs and SMAs) as needed."),(0,o.kt)("p",null,"A few notes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For a 10-minute TWAP, sample once every 10 minutes. For a 1-week TWAP, sample once every week."),(0,o.kt)("li",{parentName:"ul"},"For a simple TWAP, the cost of manipulation increases (approx. linear) with liquidity on Uniswap, as well as (approx. linear) with the length of time over which you average."),(0,o.kt)("li",{parentName:"ul"},"The Cost of an attack is relatively simple to estimate. Moving the price 5% on a 1-hour TWAP is approximately equal to the amount lost to arbitrage and fees for moving the price 5% every block for 1 hour.")),(0,o.kt)("p",null,"There are some nuances that are good to be aware of when using Uniswap V2 as an oracle, especially where manipulation resistance is concerned. The ",(0,o.kt)("a",{href:"/whitepaper.pdf",target:"_blank",rel:"noopener noreferrer"},"whitepaper")," elaborates on some of them. Additional oracle-focused developer guides and documentation will be released soon."),(0,o.kt)("p",null,"In the meantime, check out our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleOracleSimple.sol"},"example implementation")," of a 24 hr TWAP Oracle built on Uniswap V2!"),(0,o.kt)("h2",{id:"manipulation-resistance"},"Manipulation resistance"),(0,o.kt)("p",null,"The cost of manipulating the price for a specific time period can be roughly estimated as the amount lost to arbitrage and fees every block for the entire period. For larger liquidity pools and over longer time periods, this attack is impractical, as the cost of manipulation typically exceeds the value at stake."),(0,o.kt)("p",null,"Other factors, such as network congestion, can reduce the cost of attack. For a more in-depth review of the security of Uniswap V2 price oracles, read the ",(0,o.kt)("a",{parentName:"p",href:"https://uniswap.org/audit.html#org87c8b91"},"security audit section on Oracle Integrity"),"."),(0,o.kt)("h1",{id:"building-an-oracle"},"Building an oracle"),(0,o.kt)("p",null,"To learn more about building oracles check out ",(0,o.kt)("a",{parentName:"p",href:"/guides/smart-contract-integration/04-building-an-oracle"},"building an Oracle")," in the developer guides."))}p.isMDXComponent=!0},5514:function(e,t,n){"use strict";t.Z=n.p+"assets/images/v2_onchain_price_data-c051ebca6a5882e3f2ad758fa46cbf5e.png"},3238:function(e,t,n){"use strict";t.Z=n.p+"assets/images/v2_twap-fdc82ab82856196510db6b421cce9204.png"}}]);