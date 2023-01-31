---
layout: post
title: Coffee calculator
permalink: /projects/coffee-calc/about
description: a quick calculator for making pour-over coffee
---

Use it [here](https://connorhainje.com/coffee-calc)! See the code on [GitHub](https://github.com/cmhainje/coffee-calc).

I've been making my coffee using a [Chemex](https://www.chemexcoffeemaker.com/six-cup-classic-series-coffeemaker.html) for years now, but for all that time I've been buying pre-ground beans and just adding whatever amounts of beans and water seemed right. Playing with the number of tablespoons of grounds I added and how much water to add was really error-prone, but eventually I settled on a specific ratio: 5 Tbsp of grounds, then add water until the brewed coffee comes up to the button on the Chemex and the top is still full. This produced enough coffee for me and my partner and it tasted okay. But if I needed to change the amount of coffee I was making (like if I was brewing only *one* cup), then I was totally lost.

Recently, I got a [coffee grinder](https://fellowproducts.com/products/ode-brew-grinder-gen-2) (thanks Mom!) and realized that I was going to have the same problem moving forward, only worse now because 5 tablespoons of beans is *not* 5 Tbsp of grounds. The solution? A coffee scale! So I got [one of those](https://escali.com/products/versi-digital-coffee-scale-with-timer), too.

The first thing I did was to brew coffee my normal way (5 Tbsp, fill to button) and record the masses of each of the components. I found that 5 Tbsp of grounds was 40.7 g, and I added 724 g of water, giving me a water-to-coffee ratio of 17.8. I remember reading a long time ago that the ideal ratio for pour-over is somewhere between 17 and 18, so I was pleasantly surprised that my trial-and-error seemingly circled in on this value. Plus, I knew what ratio to use moving forward!

The next time I wanted to make coffee, I decided to compute the amount of grounds I should use according to the amount of coffee I wanted to make. This is fairly simple: assuming no water is lost in brewing, you can convert the amount of coffee you to want to make (in, say, \[fl oz\] or \[mL\]) into grams to get the amount of water you need to use (dividing by the density of water). Then, you can divide this mass by the water-to-coffee ratio to get the mass of grounds to use. This is easy (two calculations), but that's unfortunately more than WolframAlpha will display on the screen at one time. So it got me thinking: I want a dead-simple calculator for this very niche use case. 

Specifically, I wanted something that would take two inputs, the volume of coffee to make and the water-coffee ratio, and would spit out two outputs, the masses of water and grounds to use in grams. I wanted all of this to be really easily visible so I could use it as a reference while brewing my coffee. I also wanted the option to add some really simple unit conversions. This seemed like the perfect thing to try to learn a little bit of Svelte with.

The result? [Here](https://connorhainje.com/coffee-calc). It's not much, but it does exactly what I need it to do. It's been super helpful so far while I'm brewing, and has made it easy for me to even add freshly ground beans into my routine, since I know exactly the mass of beans to put in the grinder to start with!
