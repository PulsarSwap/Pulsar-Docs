(self.webpackChunkquickswap=self.webpackChunkquickswap||[]).push([[7185],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,v=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},223:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i={id:"05-adversarial-circumstances",title:"Adversarial Circumstances",tags:"goveranance, documentation"},s={unversionedId:"concepts/governance/05-adversarial-circumstances",id:"version-V2/concepts/governance/05-adversarial-circumstances",isDocsHomePage:!1,title:"Adversarial Circumstances",description:"This document explores some adversarial circumstances which Uniswap Governance may encounter in the future. Its goal is to help those interested in Uniswap Governance understand the reasoning behind some of its design, its limitations, and potential avenues for growth.",source:"@site/versioned_docs/version-V2/concepts/11-governance/05-adversarial-circumstances.md",sourceDirName:"concepts/11-governance",slug:"/concepts/governance/05-adversarial-circumstances",permalink:"/quickswap-docs/concepts/governance/05-adversarial-circumstances",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/concepts/11-governance/05-adversarial-circumstances.md",version:"V2",sidebarPosition:5,frontMatter:{id:"05-adversarial-circumstances",title:"Adversarial Circumstances",tags:"goveranance, documentation"},sidebar:"defaultSidebar",previous:{title:"Glossary",permalink:"/quickswap-docs/concepts/governance/04-glossary"},next:{title:"Governance Reference",permalink:"/quickswap-docs/concepts/governance/06-governance-reference"}},c=[{value:"Circumvention",id:"circumvention",children:[]},{value:"Circumvention",id:"circumvention-1",children:[]},{value:"Circumvention",id:"circumvention-2",children:[]},{value:"Circumvention",id:"circumvention-3",children:[]}],l={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document explores some adversarial circumstances which Uniswap Governance may encounter in the future. Its goal is to help those interested in Uniswap Governance understand the reasoning behind some of its design, its limitations, and potential avenues for growth."),(0,r.kt)("h1",{id:"scenario-1"},"Scenario 1"),(0,r.kt)("p",null,"A good faith proposal is brought to vote but is found to have an exploitable edge case. A bad faith actor uses a series of DeFi leveraging strategies to quickly buy enough UNI during the voting period to sway the vote in favor of the proposal, passing it and exploiting the vulnerability."),(0,r.kt)("h2",{id:"circumvention"},"Circumvention"),(0,r.kt)("p",null,"UNI voting power must be delegated to an address either entirely before a proposal has been submitted or during the proposal delay period. For now, the proposal delay is set to one block, which is about 15 seconds. A proposal delay of one block leaves no opportunity for a third party to find an exploitable edge case and opportunistically purchase uni, self delegate and sway the vote."),(0,r.kt)("p",null,"In the future, Uniswap Governance may vote to increase the proposal delay. While there are obvious benefits to an increased proposal delay, It may introduce some potential adverse outcomes such as opportunistic edge case exploitation."),(0,r.kt)("h1",{id:"scenario-2"},"Scenario 2"),(0,r.kt)("p",null,"A bad faith proposal is crafted and submitted to vote, which is unambiguously not in the best interest of Uniswap Governance. Multiple parties collude ahead of time to corner the UNI market to force the proposal through, gain access to the UNI reserves, and drain the funds."),(0,r.kt)("h2",{id:"circumvention-1"},"Circumvention"),(0,r.kt)("p",null,"Since UNI is a freely tradable asset, anyone can attempt a governance takeover via market buying. That said, to force-pass a bad faith vote would require a minimum of 40 million UNI. If not outright impossible, this amount would be prohibitively expensive and likely cost more when accounting for price fluctuation than the net gain from the attack."),(0,r.kt)("p",null,"If a group somehow achieved a bad faith takeover, Timelock's delay would give affected agents time to withdraw their assets from the protocol. This would also be an opportunity to fork the protocol, a path that would likely be taken by the remaining good-faith actors."),(0,r.kt)("h1",{id:"scenario-3"},"Scenario 3"),(0,r.kt)("p",null,"A single party uses a flash loan to push through a proposal, potentially creating a pseudo-DDOS attack by spamming governance with proposals and preventing effective use."),(0,r.kt)("h2",{id:"circumvention-2"},"Circumvention"),(0,r.kt)("p",null,"A delegated balance of 10 million UNI is required to submit a vote, but the balance check is set exactly one block in the past. This prevents any flash loan proposals from being created, as flash loans cannot execute outside of a single block."),(0,r.kt)("p",null,"The proposer must also maintain a minimum balance of 10 million UNI throughout the voting period, or anyone may cancel the proposal. This balance maintenance check prevents many highly leveraged proposal techniques that may span several blocks."),(0,r.kt)("h1",{id:"scenario-4"},"Scenario 4"),(0,r.kt)("p",null,"A bad faith proposal is created, which will genuinely incentivize bad faith voting. "),(0,r.kt)("p",null,"Exmaple: ",'"',"The treasury will be drained. Any votes in favor will be sent the balance of the treasury. Any votes opposed will be locked from the funds of the treasury.",'"'),(0,r.kt)("h2",{id:"circumvention-3"},"Circumvention"),(0,r.kt)("p",null,"No mechanism explicitly prevents this type of scenario, but market forces disincentivize it. "),(0,r.kt)("p",null,"Because the treasury is comprised of UNI tokens exclusively, the market would react appropriately if a vote were to pass that would jeopardize the economic viability of Uniswap Governance and the UNI token. By the time the vote would pass, UNI's price would have fallen so low as to make the attack fruitless. "),(0,r.kt)("p",null,"UNI acting as the only asset of the governance treasury disincentivizes this form of bad faith voting. Uniswap Governance may choose in the future to diversify governance assets. While there are many benefits to this path, some fringe possibilities such as incentivized bad faith voting may appear."))}u.isMDXComponent=!0}}]);