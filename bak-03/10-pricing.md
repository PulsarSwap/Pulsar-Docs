---
id: pricing
title: Pricing
tags: pricing, documentation
---

TBD

<!--
# How are prices determined?

As we learned in [Protocol Overview](../01-protocol-overview/01-how-uniswap-works.md), each pair on Pulsar is actually underpinned by a liquidity pool. Liquidity pools are smart contracts that hold balances of two unique tokens and enforces rules around depositing and withdrawing them. The primary rule is the [constant product formula](../01-protocol-overview/glossary.md#constant-product-formula). When a token is withdrawn (bought), a proportional amount must be deposited (sold) to maintain the constant. The ratio of tokens in the pool, in combination with the constant product formula, ultimately determine the price that a swap executes at.

# How Pulsar handles prices

In Pulsar V1, trades are always executed at the "best possible" price, calculated at execution time. Somewhat confusingly, this calculation is actually accomplished with one of two different formulas, depending on whether the trade specifies an exact _input_ or _output_ amount. Functionally, the difference between these two functions is miniscule, but the very existence of a difference increases conceptual complexity. Initial attempts to support both functions in V2 proved inelegant, and the decision was made to **not provide any pricing functions in the core**. Instead, pairs directly check whether the invariant was satisfied (accounting for fees) after every trade. This means that rather than relying on a pricing function to _also_ enforce the invariant, V2 pairs simply and transparently ensure their own safety, a nice separation of concerns. One downstream benefit is that V2 pairs will more naturally support other flavors of trades which may emerge, (e.g. trading to a specific price at execution time).

At a high level, in Pulsar, _trades must be priced in the periphery_. The good news is that the [library](../../Technical%20Reference/smart-contracts/05-library.md)
provides a variety of functions designed to make this quite simple, and all swapping functions in the [router](../../Technical%20Reference/smart-contracts/06-router02.md) are designed with this in mind.

# Pricing Trades

When swapping tokens on Pulsar, it's common to want to receive as many output tokens as possible for an _exact input amount_, or to pay as few input tokens as possible for an _exact output amount_. In order to calculate these amounts, a contract must look up the _current reserves_ of a pair, in order to understand what the current price is. However, it is _not safe to perform this lookup and rely on the results without access to an external price_.

Say a smart contract naively wants to send 10 DAI to the DAI/WETH pair and receive as much WETH as it can get, given the current reserve ratio. If, when called, the naive smart contract simply looks up the current price and executes the trade, it is _vulnerable to front-running and will likely suffer an economic loss_. To see why, consider a malicious actor who sees this transaction before it is confirmed. They could execute a swap which dramatically changes the DAI/WETH price immediately before the naive swap goes through, wait for the naive swap to execute at a bad rate, and then swap to change the price back to what it was before the naive swap. This attack is fairly cheap and low-risk, and can typically be performed for a profit.

To prevent these types of attacks, it's vital to submit swaps _that have access to knowledge about the "fair" price their swap should execute at_. In other words, swaps need access to an _oracle_, to be sure that the best execution they can get from Pulsar is close enough to what the oracle considers the "true" price. While this may sound complicated, the oracle can be as simple as an _off-chain observation of the current market price of a pair_. Because of arbitrage, it's typically the case that the ratio of the intra-block reserves of a pair is close to the "true" market price. So, if a user submits a trade with this knowledge in mind, they can ensure that the losses due to front-running are tightly bounded. This is how, for example, the Pulsar frontend ensure trade safety. It calculates the optimal input/output amounts given observed intra-block prices, and uses the router to perform the swap, which guarantees the swap will execute at a rate no less that `x`% worse than the observed intra-block rate, where `x` is a user-specified slippage tolerance (0.5% by default).

There are, of course, other options for oracles, including [native V2 oracles](../02-core-concepts/04-oracles.md).

## Exact Input

If you'd like to send an exact amount of input tokens in exchange for as many output tokens as possible, you'll want to use [getAmountsOut](../../reference/smart-contracts/06-router02.md#getamountout). The equivalent SDK function is [getOutputAmount](../../reference/SDK/03-pair.md#getoutputamount), or [minimumAmountOut](../../reference/SDK/05-trade.md#minimumamountout-since-204) for slippage calculations.

## Exact Output

If you'd like to receive an exact amount of output tokens for as few input tokens as possible, you'll want to use [getAmountsIn](../../reference/smart-contracts/06-router02.md#getamountsin). The equivalent SDK function is [getInputAmount](../../reference/SDK/03-pair.md#getinputamount), or [maximumAmountIn](../../reference/SDK/05-trade.md#maximumamountin-since-204) for slippage calculations.

## Swap to Price

For this more advanced use case, see <Github href="https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSwapToPrice.sol">ExampleSwapToPrice.sol</Github>. -->
