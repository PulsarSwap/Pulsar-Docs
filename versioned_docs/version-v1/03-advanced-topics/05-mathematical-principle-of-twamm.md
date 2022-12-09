---
id: mathematical-principle-of-twamm
title: Mathematical Principle of TWAMM
tags: mathematical principle of twamm, documentation
---

## Definition

Assume that **TWAMM** requires $N$ blocks to execute a large virtual transaction, and that the pool selling $X$ sells at a rate of $x_{rate}$ per block, while the pool selling $Y$ sells at a rate of $y_{rate}$ per block. Thus, the total amount of $X$ sold during the whole period is $x_{in}=Nx_{rate}$ and the total amount of $Y$ sold is $y_{in}=Ny_{rate}$.

Also, we note the initial reserves $x_{reserve}$ and $y_{reserve}$ for this time period in embedded **AMM** as $x_{0}=x_{ammStart}$ and $y_{0}=y_{ammStart}$, respectively.

According to the design of **TWAMM**, large orders are traded with blocks, each block sells $x_{rate}$ to get $y_{out}$, or sells $y_{rate}$ to get $x_{out}$, while **AMM** updates the values of $x_{reserve}$ and $y_{reserve}$, the whole process $N$ transactions in total.

It is worth noting that each block transaction of **AMM** always follows a constant product market making.

![](https://i.imgur.com/mNQQqAm.png)

## Formula

First, after executing the transaction for the $n-1$ block, we assume that the $x_{reserve}$ and $y_{reserve}$ values of **AMM** are $x_{n-1}$ and $y_{n-1}$, respectively.

Next, the transaction for block $n$ is executed, with $X-Pool$ and $Y-Pool$ feeding $x_{rate}$ and $y_{rate}$ to **AMM**, respectively. Then,

$$\overline{x}_{n}=x_{n-1}+x_{rate}$$

$$\overline{y}_{n}=y_{n-1}+y_{rate}$$

Since $x_{rate}$ and $y_{rate}$ are very small and the exchange follow a constant product market maker, we can obtain that,

$$\dfrac{x_{out,n}}{y_{rate}}=\dfrac{\overline{x}_{n}}{\overline{y}_{n}}=\dfrac{x_{n-1}+x_{rate}}{y_{n-1} +y_{rate}}$$

$$\dfrac{y_{out,n}}{x_{rate}}=\dfrac{\overline{y}_{n}}{\overline{x}_{n}}=\dfrac{y_{n-1}+y_{rate}}{x_{n-1}+ x_{rate}}$$

Simplifying,

$$x_{out,n}=y_{rate}\cdot\dfrac{\overline{x}_{n}}{\overline{y}_{n}}=y_{rate}\cdot\dfrac{x_{n-1}+x_{rate}}{y_{n-1}+y_{rate}}$$

$$y_{out,n}=x_{rate}\cdot\dfrac{\overline{y}_{n}}{\overline{x}_{n}}=x_{rate}\cdot\dfrac{y_{n-1}  +y_{rate}}{x_{n-1}+x_{rate}}$$

After getting the values of $x_{out,n}$ and $y_{out,n}$, we can further obtain the $x_{reserve}$ and $y_{reserve}$ values $x_{n}$ and $y_{n}$ after the transaction of $n$ blocks.

$$x_{n}=\overline{x}_{n}-x_{out,n}=\overline{x}_{n}- y_{rate}\cdot\dfrac{\overline{x}_{n}}{\overline{y}_{n}}=y_{n-1}\cdot\dfrac{\overline{x }_{n}}{\overline{y}_{n}}= y_{n-1}\cdot\dfrac{x_{n-1}+x_{rate}}{y_{n-1}+y_{rate}}$$

$$y_{n}=\overline{y}_{n}-y_{out,n}=\overline{y}_{n}- x_{rate}\cdot\dfrac{\overline{y}_{n}}{\overline{x}_{n}}=x_{n-1}\cdot\dfrac{\overline{y }_{n}}{\overline{x}_{n}}=x_{n-1}\cdot\dfrac{y_{n-1}+y_{rate}}{x_{n-1}+x_{rate}}$$

$$Average\ Price\ P^{x}_{y}=\sum_{n=1}^{N}\dfrac{x_{out,n}}{Ny_{rate}}=\dfrac{x_{out}}{y_{in}}$$

$$Average\ Price\ P^{y}_{x}=\sum_{n=1}^{N}\dfrac{y_{out,n}}{Nx_{rate}}=\dfrac{y_{out}}{x_{in}}$$

By observation, we find that $x_{n}\cdot y_{n}= x_{n-1}\cdot y_{n-1}$, which exactly meets the prerequisite requirement of **AMM** for making a market by following a constant product.

Let $x_{n}y_{n}=x_{n-1}y_{n-1}=... = x_{1}y_{1}=x_{0}y_{0}=k$, $k$ is a constant.

## Fractional Linear Recursion

First find the general formula for $x_{n}$ and obtain the value of $x_{ammEnd}=x_{N}$, and the same for $y_{n}$.

$$x_{n}=y_{n-1}\cdot\dfrac{x_{n-1}+x_{rate}}{y_{n-1} +y_{rate}}=\dfrac{k}{x_{n-1}}\cdot\dfrac{x_{n-1} + \dfrac{x_{in}}{N}}{\dfrac{k}{x_{n-1}}+\dfrac{y_{in}}{N}}=k\cdot\dfrac{x_{n-1}+\dfrac{x_{in}}{N}}{\dfrac{y_{in}}{N}\cdot x_{n-1}+k}$$

Let $a=\sqrt{\dfrac{kx_{in}}{y_{in}}},\overline{a}=\sqrt{\dfrac{ky_{in}}{x_{in}}},b=\sqrt{\dfrac{x_{in}y_{in}}{k}}$, then

$$x_{n}=\dfrac{x_{n-1}+\dfrac{ab}{N}}{\dfrac{b}{aN}\cdot x_{n-1}+1}$$

The fractional linear recursive expression for $y_{n}$ is as follows:

$$y_{n}=k\cdot\dfrac{y_{n-1}+\dfrac{y_{in}}{N}}{\dfrac{x_{in}}{N}\cdot y_{n-1}+k}=\dfrac{y_{n-1}+ \dfrac{\overline{a}b}{N}}{\dfrac{b}{\overline{a}N}\cdot y_{n-1}+1}$$

## Solution

First, if $y_{in}=0$ and $x_{in}\neq0$ , then

$$x_{n}=x_{0}+\dfrac{x_{in}}{N}\cdot n,x_{ammEnd}=x_{N}=x_{0}+x_{in},x_{out}=x_{0}+x_{in}-x_{ammEnd}=0$$

And,

$$y_{n}=k\cdot\dfrac{y_{n-1}}{\dfrac{x_{in}}{N}\cdot y_{n-1}+ k},\dfrac{1}{y_{n}}=\dfrac{1}{y_{n-1}}+\dfrac{x_{in}}{kN}$$

The calculation yields,

$$y_{n}=\dfrac{1}{\dfrac{1}{y_{0}}+\dfrac{x_{in}}{kN}\cdot n},y_{ammEnd}=y_{N}=\dfrac{k}{x_{0}+x_{in}}$$

$$y_{out}=y_{0}+y_{in}-y_{ammEnd}=\dfrac{y_{0}}{x_{0}+x_{in}}\cdot x_{in}$$

$$Average\ Price\ P^{y}_{x}=\dfrac{y_{out}}{x_{in}}=\dfrac{y_{0}}{x_{0}+x_{in}}$$

---

When $x_{in}=0$ and $y_{in}\neq0$ , the discussion is the same as above.

---

If both $x_{in}\neq0$ and $y_{in}\neq0$, for general fractional linear recursion, we can use the [**Fixed-Point Iteration**](https://en.wikipedia.org/wiki/Fixed-point_iteration) method to solve the problem.

According to $x_{n}=\dfrac{x_{n-1}+\dfrac{ab}{N}}{ \dfrac{b}{aN}\cdot x_{n-1}+1}$, replace $\lambda=\dfrac{\lambda+\dfrac{ab}{N}}{\dfrac{b}{aN}\cdot\lambda+1}$ and solve for $\lambda=\pm{a}$. $\pm{a}$ is exactly the two fixed points of the above fractional linear recursive expression.

Further calculations,

$$x_{n}-a=\dfrac{a(\dfrac{N}{b}-1)(x_{n-1}-a)}{x_{n-1}+\dfrac{aN}{b}},x_{n}+a=\dfrac{a(\dfrac{N}{b}+1)(x_{n-1}+a)}{x_{n-1}+\dfrac{aN}{b}}$$

Dividing the two expressions above,

$$\dfrac{x_{n}-a}{x_{n}+a}=\dfrac{N-b}{N+b}\cdot\dfrac{x_{n-1}-a}{x_{n-1}+a}=(1-\dfrac{2b}{N+b})\cdot\dfrac{x_{n-1}-a}{x_{n-1}+a}$$

According to the geometric progression we get,

$$\dfrac{x_{n}-a}{x_{n}+a}=(1-\dfrac{2b}{N+b})^{n}\cdot\dfrac{x_{0}-a}{x_{0}+a},\dfrac{x_{N}-a}{x_{N}+a}=(1-\dfrac{2b}{N+b})^{ N}\cdot\dfrac{x_{0}-a}{x_{0}+a}$$

Similarly,

$$\dfrac{y_{n}-\overline{a}}{y_{n}+\overline{a}}=(1-\dfrac{2b}{N+b})^{n}\cdot\dfrac{y_{0}-\overline{a}}{y_{0}+\overline{a}},\dfrac{y_{N}-\overline{a}}{y_{N}+\overline{a}}=(1-\dfrac{2b}{N+b})^{N}\cdot\dfrac{y_{0}-\overline{a}}{y_{0}+\overline{a}}$$

## Limit Value

The basic principle of **TWAMM** is to decompose long term large orders into infinitely many infinitely small virtual orders, i.e. $N$ can be taken to infinity, so the limit value of $x_{N}$ can be obtained.

$$\dfrac{x_{ammEnd}-a}{x_{ammEnd}+a}=\lim_{N\rightarrow+\infty}(\dfrac{x_{N}-a}{x_{N}+a})=\lim_{N\rightarrow+\infty}(1-\dfrac{2b}{N+b})^{N}\cdot\dfrac{x_{0}-a}{x_{0}+a}=e^{-2b}\cdot\dfrac{x_{0}-a}{x_{0}+a}$$

> $$x_{ammEnd}=a\cdot\dfrac{e^{2b}+c}{e^{2b}-c}=\sqrt{\dfrac{kx_{in}}{y_{in}}}\cdot\dfrac{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}+c}{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}-c}$$

Where，

> $$c=\dfrac{x_{0}-a}{x_{0}+a}=\dfrac{\sqrt{x_{ammStart}\cdot y_{in}}-\sqrt{y_{ammStart}\cdot x_{in}}}{\sqrt{x_{ammStart}\cdot y_{in}}+\sqrt{y_{ ammStart}\cdot x_{in}}}$$
>
> $$x_{out}=x_{ammStart}+x_{in}-x_{ammEnd}$$
>
> $$Average\ Price\ P^{x}_{y}=\dfrac{x_{out}}{y_{in}}=\dfrac{x_{ammStart}+x_{in}-x_{ammEnd}}{y_{in}}$$

Similarly,

> $$y_{ammEnd}=\sqrt{\dfrac{ky_{in}}{x_{in}}}\cdot\dfrac{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}+\overline{c}}{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}-\overline{c}}$$
>
> $$\overline{c}=\dfrac{\sqrt{y_{ammStart}\cdot x_{in}}-\sqrt{x_{ammStart}\cdot y_{in}}}{\sqrt{x_{ammStart}\cdot y_{in}}+\sqrt{y_{ammStar t}\cdot x_{in}}}=-c$$
>
> $$y_{out}=y_{ammStart}+y_{in}-y_{ammEnd}$$
>
> $$Average\ Price\ P^{y}_{x}=\dfrac{y_{out}}{x_{in}}=\dfrac{y_{ammStart}+y_{in}-y_{ammEnd}}{x_{in}}$$

An important point is that，$x_{out}$, $y_{out}$, $x_{ammEnd}$ and $y_{ammEnd}$ must larger than 0:

> $$e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}>\left\lvert c\right\rvert=\left\lvert \dfrac{\sqrt{x_{ammStart}\cdot y_{in}}-\sqrt{y_{ammStart}\cdot x_{in}}}{\sqrt{x_{ammStart}\cdot y_{in}}+\sqrt{y_{ ammStart}\cdot x_{in}}}\right\rvert$$

Finally, after a simple verification $x_{ammEnd}\cdot y_{ammEnd}=x_{ammStart}\cdot y_{ammStart}=k$, the constant product of **AMM** is still satisfied.

When $y_{in}\rightarrow0, x_{in}\neq0$，through **[L'Hôpital's Rule](https://en.wikipedia.org/wiki/L%27H%C3%B4pital%27s_rule)**, we can obtain:

$$y_{ammEnd}=\lim_{y_{in}\rightarrow0}\left(\sqrt{\dfrac{ky_{in}}{x_{in}}}\cdot\dfrac{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}+\overline{c}}{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}-\overline{c}}\right)$$

$$=\lim_{y_{in}\rightarrow0}\left(\sqrt{\dfrac{ky_{in}}{x_{in}}}\cdot\dfrac{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}+\dfrac{\sqrt{y_{ammStart}\cdot x_{in}}-\sqrt{x_{ammStart}\cdot y_{in}}}{\sqrt{x_{ammStart}\cdot y_{in}}+\sqrt{y_{ammStar t}\cdot x_{in}}}}{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}-\dfrac{\sqrt{y_{ammStart}\cdot x_{in}}-\sqrt{x_{ammStart}\cdot y_{in}}}{\sqrt{x_{ammStart}\cdot y_{in}}+\sqrt{y_{ammStar t}\cdot x_{in}}}}\right)$$

$$=\dfrac{1}{\dfrac{1}{y_{ammStart}}+\dfrac{x_{in}}{k}}=\dfrac{y_{ammStart}\cdot x_{ammStart}}{x_{ammStart}+x_{in}}$$

$$x_{ammEnd}=\lim_{y_{in}\rightarrow0}\left(\sqrt{\dfrac{kx_{in}}{y_{in}}}\cdot\dfrac{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}-\overline{c}}{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}+\overline{c}}\right)$$

$$=\lim_{y_{in}\rightarrow0}\left(\sqrt{\dfrac{kx_{in}}{y_{in}}}\cdot\dfrac{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}-\dfrac{\sqrt{y_{ammStart}\cdot x_{in}}-\sqrt{x_{ammStart}\cdot y_{in}}}{\sqrt{x_{ammStart}\cdot y_{in}}+\sqrt{y_{ammStar t}\cdot x_{in}}}}{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}+\dfrac{\sqrt{y_{ammStart}\cdot x_{in}}-\sqrt{x_{ammStart}\cdot y_{in}}}{\sqrt{x_{ammStart}\cdot y_{in}}+\sqrt{y_{ammStar t}\cdot x_{in}}}}\right)$$

$$={x_{ammStart}+x_{in}}$$

## Differential Equation Of TWAMM

Assume the trading rate of $X-Pool$ and $Y-Pool$ is uniform according to time，

$$\overline{x}_{new}=x_{old}+\dfrac{x_{in}}{T}dt$$

$$\overline{y}_{new}=y_{old}+\dfrac{y_{in}}{T}dt$$

$$x_{new}=y_{old}\cdot\dfrac{\overline{x}_{new}}{\overline{y}_{new}}= y_{old}\cdot\dfrac{x_{old}+\dfrac{x_{in}}{T}dt}{y_{old}+\dfrac{y_{in}}{T}dt}$$

$$y_{new}=x_{old}\cdot\dfrac{\overline{y}_{new}}{\overline{x}_{new}}= x_{old}\cdot\dfrac{y_{old}+\dfrac{y_{in}}{T}dt}{x_{old}+\dfrac{x_{in}}{T}dt}$$

$$x_{new}=y_{old}\cdot\dfrac{x_{old}+\dfrac{x_{in}}{T}dt}{y_{old}+\dfrac{y_{in}}{T}dt}=\dfrac{k}{x_{old}}\cdot\dfrac{x_{old} + \dfrac{x_{in}}{T}dt}{\dfrac{k}{x_{old}}+\dfrac{y_{in}}{T}dt}=k\cdot\dfrac{x_{old}+\dfrac{x_{in}}{T}dt}{\dfrac{y_{in}}{T}dt\cdot x_{old}+k}$$

Let $a=\sqrt{\dfrac{kx_{in}}{y_{in}}},\overline{a}=\sqrt{\dfrac{ky_{in}}{x_{in}}},b=\sqrt{\dfrac{x_{in}y_{in}}{k}}$, then,

$$x_{new}=\dfrac{x_{old}+\dfrac{ab}{T}dt}{\dfrac{b}{aT}dt\cdot x_{old}+1}$$

$$\dfrac{x_{new}-a}{x_{new}+a}=\left(1-\dfrac{\dfrac{2b}{T}dt}{1+\dfrac{b}{T}dt}\right)\cdot\dfrac{x_{old}-a}{x_{old}+a}$$

$$\dfrac{\dfrac{x_{new}-a}{x_{new}+a}-\dfrac{x_{old}-a}{x_{old}+a}}{\dfrac{x_{old}-a}{x_{old}+a}}=-\dfrac{\dfrac{2b}{T}dt}{1+\dfrac{b}{T}dt}$$

$$\dfrac{\dfrac{x+dx-a}{x+dx+a}-\dfrac{x_{}-a}{x_{}+a}}{\dfrac{x_{}-a}{x_{}+a}}=-\dfrac{\dfrac{2b}{T}dt}{1+\dfrac{b}{T}dt}$$

$$\lim_{dt\rightarrow0}\dfrac{\dfrac{x+dx-a}{x+dx+a}-\dfrac{x_{}-a}{x_{}+a}}{\dfrac{x_{}-a}{x_{}+a}\cdot dt}=\lim_{dt\rightarrow0}\dfrac{-\dfrac{2b}{T}}{1+\dfrac{b}{T}dt}$$

$$\dfrac{d\left(ln\dfrac{x-a}{x+a}\right)}{dt}=-\dfrac{2b}{T}$$

$$ln\dfrac{x_{ammEnd}-a}{x_{ammEnd}+a}-ln\dfrac{x_{ammStart}-a}{x_{ammStart}+a}=\int ^{T}_{0}-\dfrac{2b}{T}dt=-2b$$

$$\dfrac{x_{ammEnd}-a}{x_{ammEnd}+a}=e^{-2b}\cdot\dfrac{x_{ammStart}-a}{x_{ammStart}+a}$$

$$x_{ammEnd}=a\cdot\dfrac{e^{2b}+c}{e^{2b}-c}=\sqrt{\dfrac{kx_{in}}{y_{in}}}\cdot\dfrac{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}+c}{e^{2\sqrt{\dfrac{x_{in}y_{in}}{k}}}-c}$$

Where，

$$c=\dfrac{x_{0}-a}{x_{0}+a}=\dfrac{\sqrt{x_{ammStart}\cdot y_{in}}-\sqrt{y_{ammStart}\cdot x_{in}}}{\sqrt{x_{ammStart}\cdot y_{in}}+\sqrt{y_{ ammStart}\cdot x_{in}}}$$

---

If we use $f(t)$ and $g(t)$ instead of $\dfrac{x_{in}}{T}$ and $\dfrac{y_{in}}{T}$, that is , the trading rate of $X-Pool$ and $Y-Pool$ is a function of time.

$$x_{new}=k\cdot\dfrac{x_{old}+f(t)dt}{g(t)dt\cdot x_{old}+k}$$

Let $a=\sqrt{\dfrac{kf(t)}{g(t)}},\overline{a}=\sqrt{\dfrac{kg(t)}{f(t)}},b=\sqrt{\dfrac{f(t)g(t)}{k}}$, then,

$$x_{new}-x_{old}=\dfrac{ab\cdot dt-\dfrac{b}{a}dt\cdot x_{old}^{2}}{\dfrac{b}{a}dt\cdot x_{old}+1}$$

$$\dfrac{x_{new}-x_{old}}{dt}=\dfrac{ab-\dfrac{b}{a}\cdot x_{old}^{2}}{\dfrac{b}{a}dt\cdot x_{old}+1}$$

$$\lim_{dt\rightarrow0}\left(\dfrac{x_{new}-x_{old}}{dt}\right)=\lim_{dt\rightarrow0}\left(\dfrac{ab-\dfrac{b}{a}\cdot x_{old}^{2}}{\dfrac{b}{a}dt\cdot x_{old}+1}\right)$$

$$\dfrac{dx}{dt}=ab-\dfrac{b}{a}\cdot x^{2}=f(t)-\dfrac{g(t)}{k}x^2=\dfrac{g(t)}{k}\cdot \left(\dfrac{kf(t)}{g(t)}-x^2\right)$$

Let $h(t)=\dfrac{f(t)}{g(t)}=\dfrac{a^2}{k}$,

> $$\dfrac{dx}{dt}=\dfrac{g(t)}{k}\cdot\left(k\cdot h(t)-x^2\right)$$

If $a$ is constant, i.e.the trading rate of $X-Pool$ and $Y-Pool$ is synchronized.

$$\dfrac{d(ln\dfrac{x-a}{x+a})}{dt}=-2\sqrt{\dfrac{f(t)g(t)}{k}}$$

$$ln\dfrac{x_{ammEnd}-a(T)}{x_{ammEnd}+a(T)}-ln\dfrac{x_{ammStart}-a(0)}{x_{ammStart}+a(0)}=\int^{T}_{0}-2\sqrt{\dfrac{f(t)g(t)}{k}}dt$$

> $$x_{ammEnd}=\sqrt{\dfrac{kf(T)}{g(T)}}\cdot\dfrac{e^{2\int^{T}_{0}\sqrt{\dfrac{f(t)g(t)}{k}}dt}+c}{e^{2\int^{T}_{0}\sqrt{\dfrac{f(t)g(t)}{k}}dt}-c}$$

Where，

> $$c=\dfrac{x_{ammStart}-a(0)}{x_{ammStart}+a(0)}=\dfrac{x_{ammStart}-\sqrt{\dfrac{kf(0)}{g(0)}}}{x_{ammStart}+\sqrt{\dfrac{kf(0)}{g(0)}}}=\dfrac{\sqrt{x_{ammStart}\cdot g(0)}-\sqrt{y_{ammStart}\cdot f(0)}}{\sqrt{x_{ammStart}\cdot g(0)}+\sqrt{y_{ ammStart}\cdot f(0)}}$$

At this point, we have completed a rigorous argument and explanation of the mathematical principles of **TWAMM** and obtained exactly the same conclusion as in the article [[**The Time-Weighted Average Market Maker - TWAMM**]](https://www.paradigm.xyz/2021/07/twamm/).

## 参考

- [1] [The Time-Weighted Average Market Maker - TWAMM](https://www.paradigm.xyz/2021/07/twamm/)
