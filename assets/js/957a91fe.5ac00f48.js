(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[393],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4576:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"01-quick-start",title:"Smart Contract Quick start",tags:"smart contract integration, documentation, quick start"},s={unversionedId:"guides/smart-contract-integration/01-quick-start",id:"version-V2/guides/smart-contract-integration/01-quick-start",isDocsHomePage:!1,title:"Smart Contract Quick start",description:"Developing smart contracts for Ethereum involves a bevy of off-chain tools used for producing and testing bytecode",source:"@site/versioned_docs/version-V2/guides/smart-contract-integration/01-quick-start.md",sourceDirName:"guides/smart-contract-integration",slug:"/guides/smart-contract-integration/01-quick-start",permalink:"/guides/smart-contract-integration/01-quick-start",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/guides/smart-contract-integration/01-quick-start.md",version:"V2",sidebarPosition:1,frontMatter:{id:"01-quick-start",title:"Smart Contract Quick start",tags:"smart contract integration, documentation, quick start"},sidebar:"defaultSidebar",previous:{title:"getPair",permalink:"/guides/javascript-sdk/05-getting-pair-addresses"},next:{title:"Implement a Swap",permalink:"/guides/smart-contract-integration/02-trading-from-a-smart-contract"}},l=[{value:"Requirements",id:"requirements",children:[]},{value:"Bootstrapping a project",id:"bootstrapping-a-project",children:[]},{value:"Setting up npm",id:"setting-up-npm",children:[]},{value:"Adding dependencies",id:"adding-dependencies",children:[]},{value:"Writing our contract",id:"writing-our-contract",children:[]},{value:"Writing tests",id:"writing-tests",children:[]},{value:"Compiling and deploying the contract",id:"compiling-and-deploying-the-contract",children:[]},{value:"WIP",id:"wip",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Developing smart contracts for Ethereum involves a bevy of off-chain tools used for producing and testing bytecode\nthat runs on the ",(0,i.kt)("a",{parentName:"p",href:"https://eth.wiki/en/concepts/evm/ethereum-virtual-machine-(evm)-awesome-list"},"Ethereum Virtual Machine (EVM)"),".\nSome tools also include workflows for deploying this bytecode to the Ethereum network and testnets.\nThere are many options for these tools. This guide walks you through writing and testing a simple smart contract that\ninteracts with the Uniswap Protocol using one specific set of tools (",(0,i.kt)("inlineCode",{parentName:"p"},"truffle")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"mocha"),")."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To follow this guide, you must have the following installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"nodejs >= v12.x & npm >= 6.x"))),(0,i.kt)("h2",{id:"bootstrapping-a-project"},"Bootstrapping a project"),(0,i.kt)("p",null,"You can start from scratch, but it's easier to use a tool like ",(0,i.kt)("inlineCode",{parentName:"p"},"truffle")," to bootstrap an empty project.\nCreate an empty directory and run ",(0,i.kt)("inlineCode",{parentName:"p"},"npx truffle init")," inside that directory to unbox the default\n",(0,i.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/boxes"},"Truffle box"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"mkdir demo\ncd demo\nnpx truffle init\n")),(0,i.kt)("h2",{id:"setting-up-npm"},"Setting up npm"),(0,i.kt)("p",null,"In order to reference the Uniswap V2 contracts, you should use the npm artifacts we deploy containing the core and\nperiphery smart contracts and interfaces. To add npm dependencies, we first initialize the npm package.\nWe can run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm init")," in the same directory to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file. You can accept all the defaults and\nchange it later."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"npm init\n")),(0,i.kt)("h2",{id:"adding-dependencies"},"Adding dependencies"),(0,i.kt)("p",null,"Now that we have an npm package, we can add our dependencies. Let's add both the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@uniswap/v2-core"},(0,i.kt)("inlineCode",{parentName:"a"},"@uniswap/v2-core"))," and\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@uniswap/v2-periphery"},(0,i.kt)("inlineCode",{parentName:"a"},"@uniswap/v2-periphery"))," packages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"npm i --save @uniswap/v2-core\nnpm i --save @uniswap/v2-periphery\n")),(0,i.kt)("p",null,"If you check the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/@uniswap")," directory, you can now find the Uniswap V2 contracts. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"moody@MacBook-Pro ~/I/u/demo> ls node_modules/@uniswap/v2-core/contracts\nUniswapV2ERC20.sol    UniswapV2Pair.sol     libraries/\nUniswapV2Factory.sol  interfaces/           test/\nmoody@MacBook-Pro ~/I/u/demo> ls node_modules/@uniswap/v2-periphery/contracts/\nUniswapV2Migrator.sol  examples/              test/\nUniswapV2Router01.sol  interfaces/\nUniswapV2Router02.sol  libraries/\n")),(0,i.kt)("p",null,"These packages include both the smart contract source code and the build artifacts."),(0,i.kt)("h2",{id:"writing-our-contract"},"Writing our contract"),(0,i.kt)("p",null,"We can now get started writing our example contract.\nFor writing Solidity, we recommend IntelliJ or VSCode with a solidity plugin, but you can use any text editor.\nLet's write a contract that returns the value of some amount of liquidity shares for a given token pair.\nFirst create a couple of files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"mkdir contracts/interfaces\ntouch contracts/interfaces/ILiquidityValueCalculator.sol\ntouch contracts/LiquidityValueCalculator.sol\n")),(0,i.kt)("p",null,"This will be the interface of the contract we implement. Put it in ",(0,i.kt)("inlineCode",{parentName:"p"},"contracts/interfaces/ILiquidityValueCalculator.sol"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity ^0.6.6;\n\ninterface ILiquidityValueCalculator {\n    function computeLiquidityShareValue(uint liquidity, address tokenA, address tokenB) external returns (uint tokenAAmount, uint tokenBAmount);\n}\n")),(0,i.kt)("p",null,"Now let's start with the constructor. You need to know where the ",(0,i.kt)("inlineCode",{parentName:"p"},"UniswapV2Factory")," is deployed in order to compute the\naddress of the pair and look up the total supply of liquidity shares, plus the amounts for the reserves.\nWe can store this as an address passed to the constructor."),(0,i.kt)("p",null,"The factory address is constant on mainnet and all testnets, so it may be tempting to make this value a constant in your contract,\nbut since we need to unit test the contract it should be an argument. You can use solidity immutables to save on gas\nwhen accessing this variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity ^0.6.6;\n\nimport './interfaces/ILiquidityValueCalculator.sol';\n\ncontract LiquidityValueCalculator is ILiquidityValueCalculator {\n    address public factory;\n    constructor(address factory_) public {\n        factory = factory_;\n    }\n}\n")),(0,i.kt)("p",null,"Now we need to be able to look up the total supply of liquidity for a pair, and its token balances.\nLet's put this in a separate function. To implement it, we must:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Look up the pair address"),(0,i.kt)("li",{parentName:"ol"},"Get the reserves of the pair"),(0,i.kt)("li",{parentName:"ol"},"Get the total supply of the pair liquidity"),(0,i.kt)("li",{parentName:"ol"},"Sort the reserves in the order of tokenA, tokenB ")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/reference/smart-contracts/library"},(0,i.kt)("inlineCode",{parentName:"a"},"UniswapV2Library"))," has some helpful methods for this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity ^0.6.6;\n\nimport './interfaces/ILiquidityValueCalculator.sol';\nimport '@uniswap/v2-periphery/contracts/libraries/UniswapV2Library.sol';\nimport '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';\n\ncontract LiquidityValueCalculator is ILiquidityValueCalculator {\n    function pairInfo(address tokenA, address tokenB) internal view returns (uint reserveA, uint reserveB, uint totalSupply) {\n        IUniswapV2Pair pair = IUniswapV2Pair(UniswapV2Library.pairFor(factory, tokenA, tokenB));\n        totalSupply = pair.totalSupply();\n        (uint reserves0, uint reserves1,) = pair.getReserves();\n        (reserveA, reserveB) = tokenA == pair.token0() ? (reserves0, reserves1) : (reserves1, reserves0);\n    } \n}\n")),(0,i.kt)("p",null,"Finally we just need to compute the share value. We will leave that as an exercise to the reader."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity ^0.6.6;\n\nimport './interfaces/ILiquidityValueCalculator.sol';\nimport '@uniswap/v2-periphery/contracts/libraries/UniswapV2Library.sol';\nimport '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';\n\ncontract LiquidityValueCalculator is ILiquidityValueCalculator {\n    address public factory;\n    constructor(address factory_) public {\n        factory = factory_;\n    }\n\n    function pairInfo(address tokenA, address tokenB) internal view returns (uint reserveA, uint reserveB, uint totalSupply) {\n        IUniswapV2Pair pair = IUniswapV2Pair(UniswapV2Library.pairFor(factory, tokenA, tokenB));\n        totalSupply = pair.totalSupply();\n        (uint reserves0, uint reserves1,) = pair.getReserves();\n        (reserveA, reserveB) = tokenA == pair.token0() ? (reserves0, reserves1) : (reserves1, reserves0);\n    }\n \n    function computeLiquidityShareValue(uint liquidity, address tokenA, address tokenB) external override returns (uint tokenAAmount, uint tokenBAmount) {\n        revert('TODO');\n    }\n}\n")),(0,i.kt)("h2",{id:"writing-tests"},"Writing tests"),(0,i.kt)("p",null,"In order to test your contract, you need to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Bring up a testnet"),(0,i.kt)("li",{parentName:"ol"},"Deploy the ",(0,i.kt)("inlineCode",{parentName:"li"},"UniswapV2Factory")),(0,i.kt)("li",{parentName:"ol"},"Deploy at least 2 ERC20 tokens for a pair"),(0,i.kt)("li",{parentName:"ol"},"Create a pair for the factory"),(0,i.kt)("li",{parentName:"ol"},"Deploy your ",(0,i.kt)("inlineCode",{parentName:"li"},"LiquidityValueCalculator")," contract"),(0,i.kt)("li",{parentName:"ol"},"Call ",(0,i.kt)("inlineCode",{parentName:"li"},"LiquidityValueCalculator#computeLiquidityShareValue")),(0,i.kt)("li",{parentName:"ol"},"Verify the result with an assertion")),(0,i.kt)("p",null,"#","1 is handled for you automatically by the ",(0,i.kt)("inlineCode",{parentName:"p"},"truffle test")," command."),(0,i.kt)("p",null,"Note you should only deploy the precompiled Uniswap contracts in the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," directories for unit tests.\nThis is because solidity appends a metadata hash to compiled contract artifacts which includes the hash of the contract\nsource code path, and compilations on other machines will not result in the exact same bytecode.\nThis is problematic because in Uniswap V2 we use the hash of the bytecode in the v2-periphery\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/libraries/UniswapV2Library.sol#L24"},(0,i.kt)("inlineCode",{parentName:"a"},"UniswapV2Library")),",\nto compute the pair address."),(0,i.kt)("p",null,"To get the bytecode for deploying UniswapV2Factory, you can import the file via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const UniswapV2FactoryBytecode = require('@uniswap/v2-core/build/UniswapV2Factory.json').bytecode\n")),(0,i.kt)("p",null,"We recommend using a standard ERC20 from ",(0,i.kt)("inlineCode",{parentName:"p"},"@openzeppelin/contracts")," for deploying an ERC20."),(0,i.kt)("p",null,"You can read more about deploying contracts and writing tests using Truffle\n",(0,i.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript"},"here"),"."),(0,i.kt)("h2",{id:"compiling-and-deploying-the-contract"},"Compiling and deploying the contract"),(0,i.kt)("p",null,"Learn more about compiling and deploying contracts using Truffle\n",(0,i.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/truffle/getting-started/compiling-contracts"},"here")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations"},"here")," respectively."),(0,i.kt)("h2",{id:"wip"},"WIP"),(0,i.kt)("p",null,"This guide is a WIP. Please contribute to this guide with the edit button below!"))}p.isMDXComponent=!0}}]);