---
id: smart-contracts
title: Smart Contracts
tags: smart contracts, documentation
---

<!-- Pulsar is a binary smart contract system. [Core](#core) contracts provide fundamental safety guarantees for all parties interacting with Pulsar. [Periphery](#periphery) contracts interact with one or more core contracts but are not themselves part of the core.

# Core

[Source code](https://github.com/Uniswap/uniswap-v2-core)

The core consists of a singleton [factory](#factory) and many [pairs](#pairs), which the factory is responsible for creating and indexing. These contracts are quite minimal, even brutalist. The simple rationale for this is that contracts with a smaller surface area are easier to reason about, less bug-prone, and more functionally elegant. Perhaps the biggest upside of this design is that many desired properties of the system can be asserted directly in the code, leaving little room for error. One downside, however, is that core contracts are somewhat user-unfriendly. In fact, interacting directly with these contracts is not recommended for most use cases. Instead, a periphery contract should be used. -->

Pulsar is a DeFi protocol that uses smart contracts to facilitate swap tokens and interactions on the blockchain. Pulsar protocol has three main smart contracts: [Factory](#factory), [Pair](#pair), and [TWAMM](#twamm) contract.

The Factory contract allows for the creation of liquidity pools, while the Pair contract manages the underlying assets (two ERC20 tokens) and their corresponding liquidity tokens. The TWAMM contract, also known as the `Time-Weighted Average Market Maker` is responsible for handling instant swap, term swap and facilitating liquidity provision and removing.

Together, these contracts enable the Pulsar Protocol to provide decentralized, automated finance for a range of assets on the Ethereum blockchain.

# Factory

## Code

[`Factory.sol`](https://github.com/PulsarSwap/TWAMM-Contracts/blob/master/contracts/Factory.sol)

## Address

`Factory` is deployed at `0x408f66057163d829a30d4d466092c6b0eebb692f` on the [Ethereum Mainnet](https://etherscan.io/address/0x408f66057163d829a30d4d466092c6b0eebb692f), and at `0x336a2f76d2be24e7cb6f468665a4277d4d617d00` on the [Arbitrum One](https://arbiscan.io/address/0x336a2f76d2be24e7cb6f468665a4277d4d617d00).

The factory holds the generic bytecode responsible for powering pairs. Its primary job is to create one and only one smart contract per unique token pair. It also contains logic to turn on the protocol charge.

# TWAMM

## Code

[`TWAMM.sol`](https://github.com/PulsarSwap/TWAMM-Contracts/blob/master/contracts/TWAMM.sol)

## Address

`TWAMM` is deployed at `0xcd43aba971bef65555d877657f83093ddfb885b8` on the [Ethereum Mainnet](https://etherscan.io/address/0xcd43aba971bef65555d877657f83093ddfb885b8), and at `0x04538b69f9a637500ecf2b705e05ab38bab27b7e` on the [Arbitrum One](https://arbiscan.io/address/0x04538b69f9a637500ecf2b705e05ab38bab27b7e).

The `TWAMM`, which uses the [Library](#library) fully supports all the basic requirements of a user-friendly front-end offering Instant Swap, Term Swap and Liquidity Management functionality.

# Address List

| Platform         | Factory.sol                                  | TWAMM.sol                                    |
| :--------------- | :------------------------------------------- | :------------------------------------------- |
| Ethereum Mainnet | `0x408f66057163d829a30d4d466092c6b0eebb692f` | `0xcd43aba971bef65555d877657f83093ddfb885b8` |
| Arbitrum One     | `0x336a2f76d2be24e7cb6f468665a4277d4d617d00` | `0x04538b69f9a637500ecf2b705e05ab38bab27b7e` |
|                  |                                              |                                              |

# Pair

## Code

[`Pair.sol`](https://github.com/PulsarSwap/TWAMM-Contracts/blob/master/contracts/Pair.sol)

The `Pair`, which uses the [BinarySearchTree](#binarysearchtree), [LongTermOrders](#longtermorders), [OrderPool](#orderpool) have two primary purposes: serving as time weighted average market makers of two ERC20 tokens and keeping track of pool token balances. They also expose data which can be used to execute [Long Term Orders](../02-core-concepts/04-long-term-orders.md).

## Library

[`Library.sol`](https://github.com/PulsarSwap/TWAMM-Contracts/blob/master/contracts/libraries/Library.sol)

The `Library` provides a variety of convenience functions for fetching data.

## OrderPool

[`OrderPool.sol`](https://github.com/PulsarSwap/TWAMM-Contracts/blob/master/contracts/libraries/OrderPool.sol)

The main abstraction for implementing long-term orders is the `OrderPool`. The order pool represents a set of long-term orders, which sell a given token to the embedded AMM at a constant rate. The token pool also handles the logic for the distribution of sales proceeds to the owners of the long-term orders.

The distribution of proceeds is done through a modified version of algorithm from [Scalable Reward Distribution](https://uploads-ssl.webflow.com/5ad71ffeb79acc67c8bcdaba/5ad8d1193a40977462982470_scalable-reward-distribution-paper.pdf) on the Ethereum Blockchain. Since order expiries are decoupled from proceeds distribution in the TWAMM model, the modified algorithm needs to keep track of additional parameters to compute proceeds correctly.

## LongTermOrders

[`LongTermOrders.sol`](https://github.com/PulsarSwap/TWAMM-Contracts/blob/master/contracts/libraries/LongTermOrders.sol)

In addition to the [OrderPool](#orderpool), the `LongTermOrders` struck keep the state of the virtual order execution. Most importantly, it keep track of the last block where virtual orders were executed. Before every interaction with the embedded AMM, the state of virtual order execution is brought forward to the present block. We can do this efficiently because only certain blocks are eligible for virtual order expiry. Thus, we can advance the state by a full block interval in a single computation. Crucially, advancing the state of long-term order execution is linear only in the number of block intervals since the last interaction with TWAMM, not linear in the number of orders.

## BinarySearchTree

[`BinarySearchTree.sol`](https://github.com/PulsarSwap/TWAMM-Contracts/blob/master/contracts/libraries/BinarySearchTree.sol)

`BinarySearchTree (BST)` is a data structure that is used to store and organize data in a hierarchical manner. In Pulsar's particular BST, the nodes are long-term order expiration block heights. The tree allows for nodes to be inserted and deleted, and when [execute virtual orders](../03-advanced-topics/04-order-execution.md), it will retrieve a list of expirations from the [lastVirtualOrderBlock](https://github.com/PulsarSwap/TWAMM-Contracts/blob/ffb6cfc4a640e1efeddc18adb04c3fd248705a92/contracts/libraries/LongTermOrders.sol#L39) up until the current time, as well as a list of expirations for the next week.

<!-- # Design Decisions

The following sections describe some of the notable design decisions made in Pulsar. These are safe to skip unless you're interested in gaining a deep technical understanding of how V2 works under the hood, or writing smart contract integrations!

## Sending Tokens

Typically, smart contracts which need tokens to perform some functionality require would-be interactors to first make an approval on the token contract, then call a function that in turn calls transferFrom on the token contract. This is _not_ how V2 pairs accept tokens. Instead, pairs check their token balances at the _end_ of every interaction. Then, at the beginning of the _next_ interaction, current balances are differenced against the stored values to determine the amount of tokens that were sent by the current interactor. See the <a href='/whitepaper.pdf' target='_blank' rel='noopener noreferrer'>whitepaper</a> for a justification of why this is the case, but the takeaway is that **tokens must be transferred to the pair before calling any token-requiring method** (the one exception to this rule is [Flash Swaps](../02-core-concepts/03-flash-swaps.md). -->

## Fixed Point Math

This implementation uses the [PRBMath Library](https://github.com/paulrberg/prb-math) for fixed point arithmetic, in order to implement the closed form solution to settling long-term trades. Efforts were made to make the computation numerically stable, but there's remaining work to be done here in order to ensure that the computation is correct for the full set of expected inputs.
