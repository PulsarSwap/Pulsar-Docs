---
id: introduction
title: Pulsar TWAMM Protocol
sidebar_position: 1
---

Welcome to the Uniswap protocol V2 docs.

The pages here contain conceptual and technical documentation of the Uniswap V2 protocol.

If you are new to Uniswap, you might want to check out the [Protocol overview](../V2/concepts/protocol-overview/how-uniswap-works) first.

Time-Weighted Average Market Maker (TWAMM) is a new on-chain automated market making model designed by Paradigm researchers Dave White, Dan Robinson, and Uniswap founder Hayden Adams. TWAMM allows market participants to efficiently execute large orders on multiple blocks of Ethereum and works by breaking longterm large orders down into an infinite number of infinitely small virtual orders, and executing transactions smoothly over time using an embedded AMM.

The detailed design principles of the TWAMM can be found at the Paradigm official website: <https://www.paradigm.xyz/2021/07/twamm/>, and the mathematical principles involved in TWAMM swap can be found in this article: <https://hackmd.io/@luffy/SJxSsOH1Y>.
Pulsar-TWAMM is the first implementation of TWAMM that effectively combines embedded AMM, , and scalable reward distribution to enable not only like Uniawap, but also TWAMM like algorithmic trading TWAP. Compared to AMM, TWAMM reduces the price slippage associated with large trades, thus reducing trader losses.

## Developer links

The V2 Uniswap protocol is separated across two repositories

- [`uniswap-v2-core`](https://github.com/Uniswap/uniswap-v2-core)
- [`uniswap-v2-periphery`](https://github.com/Uniswap/uniswap-v2-periphery)

The V2 SDK, which can assist developers when interacting with the Uniswap V2 Protocol can be found here.

- [`uniswap-sdk`](https://github.com/Uniswap/uniswap-v2-sdk)
- [`uniswap-sdk-core`](https://github.com/Uniswap/uniswap-sdk-core)
