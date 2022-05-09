---
id: minimum-expiry-interval
title: Minimum Expiry Interval
tags: minimum expiry interval, documentation
---

TWAMM has a minimum expiry interval of 5 blocks, which is equal to approximately 2 minutes, which means that every integer multiple of 5 blocks in height, we also call it [`orderBlockInterval`](https://github.com/PulsarSwap/TWAMM-Contracts/blob/a063840b95855c58986d662be15ea11b7d0ce35e/contracts/Pair.sol#L39)
. The long term orders in the order pool are due for settlement and the user's swap rewards are updated.

**Order Block Interval (OBI)** is an explicit parameter on the Pulsar solidity implementation. It specifies the number of blocks between the [execuion of virtual orders](04-order-execution.md) and explicitly limits temporal resolution for specifying trades. The temporal resolution limitation arises because the length of an Term Swap is expressed in integer multiples of the OBI.
