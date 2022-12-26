---
id: cancel-long-term-orders
title: Cancel Long Term Orders
tags: cancel long-term orders, documentation
---

The `Cancel Long Term Orders` action refers to the process of ending or removing a previously placed long-term order that is intended to remain open for an extended period.

There are various reasons why traders might want to cancel a long-term order. For example, they may want to change the term of the order, they may no longer want to hold the asset in question, or they may need to change their investment strategy.

To cancel a long-term order swap X for Y, the order must have not yet expired. Once the order is canceled, it will no longer be active and will not be executed. The proceeds of token Y from canceled long-term orders are the same as proceeds from unexpired [withdrawals of long-term orders](10-withdraw-long-term-orders-proceeds.md). Unsold token X will be sent to the wallet.

```solidity
//If order has not yet expired, we just adjust the start
totalProceeds = (rewardFactor - rewardFactorAtSubmission) * orderSellRate

unSoldAmount = timeRemaining * orderSellRate
```
