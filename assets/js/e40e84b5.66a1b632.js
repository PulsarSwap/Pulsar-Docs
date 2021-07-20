(self.webpackChunkquickswap=self.webpackChunkquickswap||[]).push([[7917],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6022:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a={id:"04-glossary",title:"Glossary",tags:"protocol-overview, documentation"},c={unversionedId:"concepts/protocol-overview/04-glossary",id:"version-V2/concepts/protocol-overview/04-glossary",isDocsHomePage:!1,title:"Glossary",description:"Automated market maker",source:"@site/versioned_docs/version-V2/concepts/01-protocol-overview/04-glossary.md",sourceDirName:"concepts/01-protocol-overview",slug:"/concepts/protocol-overview/04-glossary",permalink:"/quickswap-docs/concepts/protocol-overview/04-glossary",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/concepts/01-protocol-overview/04-glossary.md",version:"V2",sidebarPosition:4,frontMatter:{id:"04-glossary",title:"Glossary",tags:"protocol-overview, documentation"},sidebar:"defaultSidebar",previous:{title:"Smart contracts",permalink:"/quickswap-docs/concepts/protocol-overview/03-smart-contracts"},next:{title:"Swaps",permalink:"/quickswap-docs/concepts/core-concepts/01-swaps"}},l=[{value:"Automated market maker",id:"automated-market-maker",children:[]},{value:"Constant product formula",id:"constant-product-formula",children:[]},{value:"ERC20",id:"erc20",children:[]},{value:"Factory",id:"factory",children:[]},{value:"Pair",id:"pair",children:[]},{value:"Pool",id:"pool",children:[]},{value:"Liquidity provider / LP",id:"liquidity-provider--lp",children:[]},{value:"Mid price",id:"mid-price",children:[]},{value:"Price impact",id:"price-impact",children:[]},{value:"Slippage",id:"slippage",children:[]},{value:"Core",id:"core",children:[]},{value:"Periphery",id:"periphery",children:[]},{value:"Flash swap",id:"flash-swap",children:[]},{value:"<code>x * y = k</code>",id:"x--y--k",children:[]},{value:"Invariant",id:"invariant",children:[]}],s={toc:l};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"automated-market-maker"},"Automated market maker"),(0,o.kt)("p",null,"An automated market maker is a smart contract on Ethereum that holds on-chain liquidity reserves. Users can trade against these reserves at prices set by an automated market making formula."),(0,o.kt)("h3",{id:"constant-product-formula"},"Constant product formula"),(0,o.kt)("p",null,"The automated market making algorithm used by Uniswap.\nSee ",(0,o.kt)("a",{parentName:"p",href:"#x--y--k"},"x","*","y=k"),"."),(0,o.kt)("h3",{id:"erc20"},"ERC20"),(0,o.kt)("p",null,"ERC20 tokens are fungibile tokens on Ethereum. Uniswap supports all standard ERC20 implementations."),(0,o.kt)("h3",{id:"factory"},"Factory"),(0,o.kt)("p",null,"A smart contract that deploys a unique smart contract for any ERC20/ERC20 trading pair."),(0,o.kt)("h3",{id:"pair"},"Pair"),(0,o.kt)("p",null,"A smart contract deployed from the Uniswap V2 Factory that enables trading between two ERC20 tokens."),(0,o.kt)("h3",{id:"pool"},"Pool"),(0,o.kt)("p",null,"Liquidity within a pair is pooled across all liquidity providers."),(0,o.kt)("h3",{id:"liquidity-provider--lp"},"Liquidity provider / LP"),(0,o.kt)("p",null,"A liquidity provider is someone who deposits an equivalent value of two ERC20 tokens into the liquidity pool within a pair. Liquidity providers take on price risk and are compensated with fees."),(0,o.kt)("h3",{id:"mid-price"},"Mid price"),(0,o.kt)("p",null,"The price between what users can buy and sell tokens at a given moment. In Uniswap this is the ratio of the two ERC20 token reserves."),(0,o.kt)("h3",{id:"price-impact"},"Price impact"),(0,o.kt)("p",null,"The difference between the mid-price and the execution price of a trade."),(0,o.kt)("h3",{id:"slippage"},"Slippage"),(0,o.kt)("p",null,"The amount the price moves in a trading pair between when a transaction is submitted and when it is executed."),(0,o.kt)("h3",{id:"core"},"Core"),(0,o.kt)("p",null,"Smart contracts that are essential for Uniswap to exist. Upgrading to a new version of core would require a liquidity migration."),(0,o.kt)("h3",{id:"periphery"},"Periphery"),(0,o.kt)("p",null,"External smart contracts that are useful, but not required for Uniswap to exist. New periphery contracts can always be deployed without migrating liquidity."),(0,o.kt)("h3",{id:"flash-swap"},"Flash swap"),(0,o.kt)("p",null,"A trade that uses the tokens being purchased before paying for them."),(0,o.kt)("h3",{id:"x--y--k"},(0,o.kt)("inlineCode",{parentName:"h3"},"x * y = k")),(0,o.kt)("p",null,"The constant product formula."),(0,o.kt)("h3",{id:"invariant"},"Invariant"),(0,o.kt)("p",null,'The "k" value in the constant product formula'))}p.isMDXComponent=!0}}]);