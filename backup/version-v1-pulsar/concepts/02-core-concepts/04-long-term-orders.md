---
id: long-term-orders
title: LongTerm Orders
tags: long term orders, documentation
---

Each longterm order includes the number of tokens sold and the time of expiry which is an integer multiple of [Minimum Expiry Interval](../03-advanced-topics/03-minimum-expiry-interval.md), in addition to the order pools, the longterm orders struct keep the state of the virtual [Order Execution](../03-advanced-topics/04-order-execution.md). Most importantly, it keeps track of the last block where virtual orders were executed. Before every interaction with the embedded AMM, the state of virtual order execution is brought forward to the present block. We can do this efficiently because only certain blocks are eligible for virtual order expiry.

Thus, we can advance the state by a full block interval in a single computation. Crucially, advancing the state of longterm order execution is linear only in the number of block intervals since the last interaction with TWAMM, not linear in the number of orders.
