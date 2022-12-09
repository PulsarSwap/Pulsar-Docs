---
id: mathematical-principle-of-twamm-concentrated-liquidity
title: Mathematical Principle of TWAMM Concentrated Liquidity
tags: mathematical principle of twamm concentrated liquidity, documentation
---

The core of Uniswap V3 is to provide liquidity through intervals (Concentrated Liquidity), where liquidity providers add liquidity to a range that has the potential for price fluctuations to improve capital utilization.

**TWAMM** automated market makers as a new type of **AMM** protocol can also use **Concentrated Liquidity**.

## Capital Utilization

Let's look at the utilization rate of Uniswap V2 using non-concentrated liquidity.

![](https://i.imgur.com/QnijE5V.png)

The above graph shows the volume change curve of $x-y$ in the pool. The current price in the pool is at $c$ and is assumed to fluctuate between $a$ price point and $b$ price point. Sliding from point $c$ to point $a$ consumes the maximum $y_{real}$ and sliding from point $c$ to point $b$ consumes the maximum $x_{real}$. That is, the current price $c$ point, oscillating between $a$ and $b$ points, consumes only $x_{real}$ and $y_{real}$ at maximum. Theoretically it is enough to provide $x_{real}$ and $y_{real}$. And in fact, as shown above, at the price $c$ point, $x$ and $y$ are provided greater than $x_{real}$ and $y_{real}$, respectively. It is obvious that the funds $x-x_{real}$ and $y-y_{real}$ are never used in this case, which is also called idle funds. In this case, the capital utilization rate is $\dfrac{x_{real}}{x}$ or $\dfrac{y_{real}}{y}$. If the price fluctuation is very small, the capital utilization is very low.

How to add liquidity in a certain price interval and provide Swap function is the focus point of Uniswap V3, which needs to start with the virtual Reserves.

## Virtual Reserves

Uniswap's trading uses the constant product model ($x\cdot y=k$). The so-called Virtual Reserves are pools that provide liquidity only in a certain interval on a constant product curve.

![](https://i.imgur.com/Jl7u9CT.png)

The blue curve in the graph is the constant-product curve satisfied by the virtual Reserves. The curve of the funds that are actually needed is shown in orange in the figure. The formula for the orange curve is as follows.

> $$(x+\dfrac{L}{\sqrt{p_{b}}})(y+L\sqrt{p_{a}})=L^{2}$$

You can imagine the virtual reserves curve translating on the $x-y$ axis so that the $a,b$ points coincide with the $x,y$ axes. That is, a certain amount of money can be used to achieve a "virtual" trading curve.

## Uniswap V3 Centralized Liquidity

The constant product trading model with two token amounts in the liquidity pool satisfies: $x\cdot y=k$. If we set $k=L^2$, $x\cdot y=L^2$ and $L$ is what we call liquidity. The trading model with constant product yields the following equation.

> $$L=\sqrt{xy},p=\dfrac{y}{x}$$

With known $L$ and $\sqrt{p}$, the funding requirements $x$ and $y$ can also be derived:

> $$x=\dfrac{L}{\sqrt{p}},y=L\sqrt{p}$$

With the above equation, liquidity can be seen as the change in the amount of $y$ funds per unit of "price fluctuation", with no change in liquidity (without adding or removing liquidity). "Price fluctuation" is in quotes because it is in fact a change in $\sqrt{p}$.

> $$L=\dfrac{\Delta y}{\Delta \sqrt{p}}$$

This is the core Uniswap V3 formula that calculates liquidity in terms of relative values (relative values of funds and prices). Liquidity is the amount of money per unit of "price change". With a certain volume of trading, if the liquidity is enough, the price will change less, and if it is not liquid enough, the price will fluctuate more.

![](https://i.imgur.com/8Dm95PF.png)

## Centralized Liquidity Swap

Centralized liquidity allows users to put funds into any price range to provide liquidity. Above, for the convenience of explaining the principle, only one interval scenario is used, it is unlikely that there is only one price range in the actual scenario, assuming that there are several consecutive price ranges each with different flows, as shown below.

![](https://i.imgur.com/Y3RXKlO.png)

As we can see, the market maker curve is no longer continuous, and during the trading process, price changes to different intervals have to be calculated independently in segments.But in the $X-Y$ right-angle coordinate system the boundary of each price interval is a straight line, the $x$ and $y$ quantities are changing simultaneously, and there may be overlapping price intervals, which leads to a very high complexity of the whole calculation process.

Uniswap V3 uses the $Price - Liquidity$ coordinate system, so that the price range boundary is changed from a two-dimensional straight line to a point on the $Price$ axis. Moreover, increasing/decreasing liquidity does not change the current price, and Swap causes price changes but not liquidity values, so that $Price$ and $Liquidity$ have only one value change at the same time, further reducing the computational complexity.

How to calculate the result of a Swap is the focus of Uniswap V3. For both the user and the application side, it is still an operation on $X _{token}$ and $Y_{token}$, so the actual calculation is done by converting between $(X,Y) \leftrightarrows (Price, Liquidity)$.

![](https://i.imgur.com/nZpipVP.png)

When a Swap occurs and one of $x_{in}$ and $y_{in}$ is zero, we can write the Swap result in the following symmetric form.

$$x_{ammEnd}=y_{ammStart}\cdot\dfrac{x_{ammStart}+x_{in}}{y_{ammStart}+y_{in}}$$

$$y_{ammEnd}=x_{ammStart}\cdot\dfrac{y_{ammStart}+y_{in}}{x_{ammStart}+x_{in}}$$

$$x_{out}=x_{ammStart}+x_{in}-x_{ammEnd}=y_{in}\cdot\dfrac{x_{ammStart}+x_{in}}{y_{ammStart}+y_{in}}$$

$$y_{out}=y_{ammStart}+y_{in}-y_{ammEnd}=x_{in}\cdot\dfrac{y_{ammStart}+y_{in}}{x_{ammStart}+x_{in}}$$

For simplicity, we make $y_{in}=0$.

$$x_{ammEnd}=x_{ammStart}+x_{in}$$

$$y_{ammEnd}=x_{ammStart}\cdot\dfrac{y_{ammStart}}{x_{ammStart}+x_{in}}$$

$$x_{out}=x_{ammStart}+x_{in}-x_{ammEnd}=0$$

$$y_{out}=y_{ammStart}-y_{ammEnd}=x_{in}\cdot\dfrac{y_{ammStart}}{x_{ammStart}+x_{in}}$$

Since, the

$$x_{ammEnd}=\dfrac{L}{\sqrt{p_{ammEnd}}},x_{ammStart}=\dfrac{L}{\sqrt{p_{ammStart}}}$$

$$y_{ammEnd}=L\sqrt{p_{ammEnd}}, y_{ammStart}=L\sqrt{p_{ammStart}}$$

$$p_{ammEnd}=\dfrac{y_{ammEnd}}{x_{ammEnd}},p_{ammStart}=\dfrac{y_{ammStart}}{x_{ammStart}}$$

It is possible to compute $p_{ammEnd}$ with respect to $x_{in}$ and $p_{ammStart}$:

> $$\dfrac{1}{\sqrt{p_{ammEnd}}}=\dfrac{1}{\sqrt{p_{ammStart}}}+\dfrac{x_{in}}{L}$$
>
> $$x_{in}=\dfrac{L}{\sqrt{p_{ammEnd}}}-\dfrac{L}{\sqrt{p_{ammStart}}}$$
>
> $$y_{out}=y_{ammStart}-y_{ammEnd}=L\sqrt{p_{ammStart}}-L\sqrt{p_{ammEnd}}$$

## TWAMM Concentrated Liquidity

According to the article **[Mathematical Principle of TWAMM](https://hackmd.io/@luffy/SJxSsOH1Y)**, **TWAMM** still uses a constant product trading model with two token amounts in the pool satisfying: $x\cdot y=k=L^2$. The constant product trading model still yields the following equation.

$$L=\sqrt{xy},p=\dfrac{y}{x},x=\dfrac{L}{\sqrt{p}},y=L\sqrt{p}$$

If TWAMM use centralized liquidity, the $(X,Y) \leftrightarrows (Price, Liquidity)$ calculation for Instant Swap is still the same as Uniswap V3, but not for Term Swap.

The result of the settlement of TWAMM long-term orders at expiration is as follows.

> $$x_{ammEnd}=\sqrt{\dfrac{kx_{in}}{y_{in}}}\cdot\dfrac{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}+c}{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}} -c}$$
>
> $$x_{out}=x_{ammStart}+x_{in}-x_{ammEnd}$$
>
> $$y_{ammEnd}=\sqrt{\dfrac{ky_{in}}{x_{in}}}\cdot\dfrac{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}+\overline{c}}{e^{2\sqrt{\dfrac{x_{in}y _{in}}{k}}}-\overline{c}}$$
>
> $$y_{out}=y_{ammStart}+y_{in}-y_{ammEnd}$$
>
> $$c=\dfrac{\sqrt{x_{ammStart}\cdot y_{in}}-\sqrt{y_{ammStart}\cdot x_{in}}}{\sqrt{x_{ammStart}\cdot y_{in}}+\sqrt{y_{ammStar t}\cdot x _{in}}}=-\overline{c}$$
>
> $$e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}>\left\lvert \dfrac{\sqrt{x_{ammStart}\cdot y_{in}}-\sqrt{y_{ammStart}\cdot x_{in}}}{\sqrt{x_{ammStart}\cdot y_{in}}+\sqrt{y_{ ammStart}\cdot x_{in}}}\right\rvert$$

Similarly, we have.

$$x_{ammEnd}=\dfrac{L}{\sqrt{p_{ammEnd}}},x_{ammStart}=\dfrac{L}{\sqrt{p_{ammStart}}}$$

$$y_{ammEnd}=L\sqrt{p_{ammEnd}}, y_{ammStart}=L\sqrt{p_{ammStart}}$$

$$p_{ammEnd}=\dfrac{y_{ammEnd}}{x_{ammEnd}},p_{ammStart}=\dfrac{y_{ammStart}}{x_{ammStart}}$$

It is possible to compute $p_{ammEnd}$ with respect to $x_{in}$, $y_{in}$, $\overline{p}=\dfrac{y_{in}}{x_{in}}$ ($\overline{p}$ is constant when the long-term order is due for settlement) and $p_{ammStart}$:

$$p_{ammEnd}=\overline{p}\cdot\left(\dfrac{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}+\overline{c}}{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}-\overline{c}}\right)^{2}$$

$$=\overline{p}\cdot\left(\dfrac{e^{2\sqrt{\overline{p}}{\dfrac{x_{in}}{L}}}+\overline{c}}{e^{2\sqrt{\overline{p}}{\dfrac{x_{in}}{ L}}}-\overline{c}}\right)^{2}$$

$$\overline{c}=\dfrac{\sqrt{p_{ammStart}}-\sqrt{\overline{p}}}{\sqrt{p_{ammStart}}+\sqrt{ \overline{p}}}=-c$$

Recalculation,

> $$\sqrt{p_{ammEnd}}=\sqrt{\overline{p}}\cdot\dfrac{e^{2\sqrt{\overline{p}}{\dfrac{x_{in}}{L}}}+\overline{c}}{e^{2\sqrt{\overline{p}}{\dfrac{x_{in}}{L}}}-\overline{c}}$$
>
> $$=\sqrt{\overline{p}}\cdot\dfrac{e^{2{\dfrac{y_{in}}{L\sqrt{\overline{p}}}}}+\overline{c}}{e^{2{\dfrac{y_{in}}{L\sqrt{\overline{p}}}}}-\overline{c}}>0$$

The inverse calculation yields $x_{in}$ and $y_{in}$ computed by

$$e^{2\sqrt{\overline{p}}{\dfrac{x_{in}}{L}}}=\dfrac{\overline{c}\cdot(\sqrt{p_{ammEnd}}+\sqrt{\overline{p}})}{\sqrt{p_{ammEnd}}-\sqrt{\overline{p}}}=\dfrac{(\sqrt{p_{ammStart}}-\sqrt{\overline{p}})\cdot(\sqrt{p_{ammEnd}}+\sqrt{\overline{p}})}{(\sqrt{p_{ ammStart}}+\sqrt{\overline{p}})\cdot(\sqrt{p_{ammEnd}}-\sqrt{\overline{p}})}>1$$

After analysis, the

$$\dfrac{\sqrt{p_{ammStart}}-\sqrt{p_{ammEnd}}}{\sqrt{p_{ammEnd}}-\sqrt{\overline{p}}}>0$$

The above inequality shows that the value of $p_{ammEnd}$ is between $\overline{p}$ and $p_{ammStart}$ (excluding the case when $\overline{p}$, $p_{ammStart}$ and $p_{ammEnd}$ are all equal).

Also, by deriving $\sqrt{p_{ammEnd}}$, we can obtain the variation of $\sqrt{p_{ammEnd}}$ for $x_{in}$ and $y_{in}$ as follows

$$\frac{\mathrm{d} \sqrt{p_{ammEnd}} }{\mathrm{d} x_{in}}=\dfrac{-4\overline{p}\cdot\overline{c}}{L\left(e^{2\sqrt{\overline{p}}}{\dfrac{x_{in}}{L}}-\overline{c}\right)^{2}}$$

$$\frac{\mathrm{d} \sqrt{p_{ammEnd}} }{\mathrm{d} y_{in}}=\dfrac{-4\overline{c}}{L\left(e^{2{\dfrac{y_{in}}{L\sqrt{\overline{p}}}}}-\overline{c}\right)^{2}}$$

The above shows that if $\overline{p}>p_{ammStart}$, then $p_{ammEnd}$ monotonically increasing, and vice versa monotonically decreasing.

Finally

> $$
> x_{in}=\dfrac{L}{2\sqrt{\overline{p}}}
> \ln\left\lvert\dfrac{(\sqrt{p_{ammStart}}-\sqrt{\overline{p}})\cdot(\sqrt{p_{ammEnd}}+\sqrt{\overline{p}})}{(\sqrt{p_{ammStart}}+ \sqrt{\overline{p}})\cdot(\sqrt{p_{ammEnd}}-\sqrt{\overline{p}})}\right\rvert
> $$
>
> $$
> y_{in}=\dfrac{L\sqrt{\overline{p}}}{2}
> \ln\left\lvert\dfrac{(\sqrt{p_{ammStart}}-\sqrt{\overline{p}})\cdot(\sqrt{p_{ammEnd}}+\sqrt{\overline{p}})}{(\sqrt{p_{ammStart}}+ \sqrt{\overline{p}})\cdot(\sqrt{p_{ammEnd}}-\sqrt{\overline{p}})}\right\rvert
> $$

We can obtain the expressions for $x_{out}$ and $y_{out}$ as follows

> $$x_{out}=\dfrac{L}{\sqrt{p_{ammStart}}}+ x_{in}-\dfrac{L}{\sqrt{p_{ammEnd}}}$$
>
> $$
> =\dfrac{L}{\sqrt{p_{ammStart}}}-\dfrac{L}{\sqrt{p_{ammEnd}}}+\dfrac{L}{2\sqrt{\overline{p}}}
> \ln\left\lvert\dfrac{(\sqrt{p_{ammStart}}-\sqrt{\overline{p}})\cdot(\sqrt{p_{ammEnd}}+\sqrt{\overline{p}})}{(\sqrt{p_{ammStart}}+ \sqrt{\overline{p}})\cdot(\sqrt{p_{ammEnd}}-\sqrt{\overline{p}})}\right\rvert
> $$
>
> $$y_{out}=L\sqrt{p_{ammStart}}+y_{in}-L\sqrt{p_{ammEnd}}$$
>
> $$
> =L\sqrt{p_{ammStart}}-L\sqrt{p_{ammEnd}}+\dfrac{L\sqrt{\overline{p}}}{2}
> \ln\left\lvert\dfrac{(\sqrt{p_{ammStart}}-\sqrt{\overline{p}})\cdot(\sqrt{p_{ammEnd}}+\sqrt{\overline{p}})}{(\sqrt{p_{ammStart}}+ \sqrt{\overline{p}})\cdot(\sqrt{p_{ammEnd}}-\sqrt{\overline{p}})}\right\rvert
> $$

If $y_{in},\overline{p}\rightarrow0, x_{in}\neq0$, by **[L'Hôpital's Rule](https://en.wikipedia.org/wiki/L%27H%C3%B4pital%27s_rule)** we can obtain the instant swap result of

$$
x_{in}=\lim_{\overline{p}\rightarrow0}\left(\dfrac{L}{2\sqrt{\overline{p}}}
\ln\left\lvert\dfrac{(\sqrt{p_{ammStart}}-\sqrt{\overline{p}})\cdot(\sqrt{p_{ammEnd}}+\sqrt{\overline{p}})}{(\sqrt{p_{ammStart}}+\sqrt{\overline{p}})\cdot(\sqrt{p_{ammEnd}}-\sqrt{\overline{p}})}\right\rvert\right)
$$

$$=\dfrac{L}{\sqrt{p_{ammEnd}}}-\dfrac{L}{\sqrt{p_{ammStart}}}$$

$$y_{in}=0$$

$$x_{out}=0$$

$$y_{out}=L\sqrt{p_{ammStart}}-L\sqrt{p_{ammEnd}}$$

## Reference

- [1] [Mathematical Principle of TWAMM](https://hackmd.io/@luffy/SJxSsOH1Y)
- [2] [Technical Documentation for TWAMM Protocol ](https://showenpeng.gitbook.io/ghihni4390rbnfjk4u5r9)
- [3] [Introducing Uniswap V3](https://uniswap.org/blog/uniswap-v3)
- [4] [Uniswap V3 Core WhitePaper](https://uniswap.org/whitepaper-v3.pdf)
- [5] [Uniswap V3 技术白皮书导读](https://learnblockchain.cn/article/2357#4-Tick)
- [6] [Uniswap V3 源代码导读](https://learnblockchain.cn/article/2371)
- [7] [Uniswap v3 设计详解](https://zhuanlan.zhihu.com/p/448382469)
