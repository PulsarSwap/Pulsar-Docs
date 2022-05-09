---
id: order-pool
title: Order Pool
tags: order pool, documentation
---

The main abstraction for implementing longterm orders is the order pool. The order pool represents a set of longterm orders, which sell a given token to the embedded AMM at a constant rate. The token pool also handles the logic for the distribution of sales proceeds to the owners of the longterm orders.

The distribution of rewards is done through a modified version of algorithm from [Scalable Reward Distribution on the Ethereum Blockchain](https://uploads-ssl.webflow.com/5ad71ffeb79acc67c8bcdaba/5ad8d1193a40977462982470_scalable-reward-distribution-paper.pdf). Since order expiries are decopuled from reward distribution in the TWAMM model, the modified algorithm needs to keep track of additional parameters to compute rewards correctly.
