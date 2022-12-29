---
id: withdraw-long-term-orders-proceeds
title: Withdraw Long Term Orders Proceeds
tags: withdraw long-term orders Proceeds, documentation
---

The `Withdraw Long Term Orders Proceeds` action means traders withdraw proceeds from the long-term swap orders. Notice that the proceeds tokens still lie in the pool contract, recorded by `OrderPool` [rewardFactor](https://github.com/PulsarSwap/TWAMM-Contracts/blob/37501c0f432d5edb9dc1e3570cd924c12b55efc9/contracts/libraries/OrderPool.sol#L20) and can then be withdrawn by the trader with an extra withdraw action.

Suppose a trader submit a long-term order swap X for Y. At any time, usually after order has expired, if the order has expired, we calculate the [reward factor at time of expiry](https://github.com/PulsarSwap/TWAMM-Contracts/blob/37501c0f432d5edb9dc1e3570cd924c12b55efc9/contracts/libraries/OrderPool.sol#L30). If order has not yet expired, we use current reward factor, and update the reward factor at time of [Order Execution](../03-advanced-topics/04-order-execution.md) (effectively submit a new long-term order).

```solidity
//If order has expired, we need to calculate the reward factor at expiry
totalProceeds = (rewardFactorAtExpiry - rewardFactorAtSubmission) * orderSellRate

//If order has not yet expired, we just adjust the start
totalProceeds = (rewardFactor - rewardFactorAtSubmission) * orderSellRate
```
