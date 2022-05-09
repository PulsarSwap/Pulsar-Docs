---
id: pulsar-twamm-protocol
title: Pulsar TWAMM Protocol
tags: pulsar twamm protocol, documentation
slug: /
---

Welcome to the Pulsar TWAMM protocol docs.

The pages here contain conceptual and technical documentation of the Pulsar protocol.If you are new to Pulsar, you might want to check out the [Protocol Overview](../concepts/protocol-overview/introduction) first.

Time-Weighted Average Market Maker (**TWAMM**) is a new on-chain automated market making model designed by
Paradigm Research Partners [Dave White](https://twitter.com/_Dave__White_), [Dan Robinson](https://twitter.com/danrobinson) and Uniswap founder [Hayden Adams](https://twitter.com/haydenzadams). TWAMM allows market participants to efficiently execute large orders on multiple blocks of Ethereum and works by breaking longterm large orders down into an infinite number of infinitely small virtual orders, and executing transactions smoothly over time using an embedded AMM.

The detailed design principles of the TWAMM can be found at the Paradigm official website: <https://www.paradigm.xyz/2021/07/twamm/>, and the mathematical principles involved in TWAMM swap can be found in this article: <https://hackmd.io/@luffy/SJxSsOH1Y>.

Pulsar-TWAMM is the first implementation of TWAMM that effectively combines embedded AMM, [LongTerm Orders](concepts/02-core-concepts/04-long-term-orders.md), [Order Pool](concepts/02-core-concepts/05-order-pool.md) and [Scalable Reward Distribution](https://uploads-ssl.webflow.com/5ad71ffeb79acc67c8bcdaba/5ad8d1193a40977462982470_scalable-reward-distribution-paper.pdf) to enable not only [Instant Swap](concepts/02-core-concepts/01-instant-swap.md) like Uniawap, but also TWAMM [Term Swap](concepts/02-core-concepts/02-term-swap.md) like algorithmic trading [TWAP](https://en.wikipedia.org/wiki/Time-weighted_average_price). Compared to AMM, TWAMM reduces the price slippage associated with large trades, thus reducing trader losses.

## Developer Links

The Pulsar protocol smart contacts core repository.

- [`TWAMM-Contracts`](https://github.com/PulsarSwap/TWAMM-Contracts)

The TWAMM SDK, which can assist developers when interacting with the Pulsar protocol can be found here.

- [`TWAMM-SDK`](https://github.com/PulsarSwap/TWAMM-SDK)

Inspired by:

- <https://www.paradigm.xyz/2021/07/twamm>
- <https://github.com/para-dave/twamm>
- [FrankieIsLost MVP code implementation](https://github.com/FrankieIsLost)
