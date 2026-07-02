---
layout: post
title: "Review of the WCCI/CEC 2026 Symbolic Regression Workshop"
date: 2026-06-23 14:00:00 +0100
categories: science
author: Gabriel Kronberger
image: /blog/resources/2026-06-23-wcci-cec-symbolic-regression-workshop/wcci.jpg
---

Post by Gabriel Kronberger [Linkedin](https://www.linkedin.com/in/gabriel-kronberger-89a09450/)


We organized the [Workshop on Symbolic Regression and Equation Discovery](https://heal.heuristiclab.com/research/symbolic-regression-workshop) as a subevent within WCCI/CEC 2026 in Maastricht, Netherlands this year. After several years of hosting it at GECCO, it was a great opportunity for meeting new people, discussing SR developments, and sharing ideas. 

For the first time, we used OpenReview as a platform to organize paper submissions and reviews. We received 8 submissions and accepted 5 papers, which were presented during the workshop. The accepted papers and review discussions are [archived on OpenReview](https://openreview.net/group?id=IEEE.org/WCCI/2026/Workshop/SymReg&referrer=%5BHomepage%5D(%2F)#tab-accept-oral).

<!--more-->

## Workshop Overview


<div class="row">
    <div class="col-lg-7 col-md-12 text-center">
        <figure class="image-box">
            <img src="/blog/resources/2026-06-23-wcci-cec-symbolic-regression-workshop/wcci.jpg" id="wcci-logo">
        </figure>
    </div>
    <div class="col-lg-7 col-md-12 text-center">
        <figure class="image-box">
            <img src="/blog/resources/2026-06-23-wcci-cec-symbolic-regression-workshop/symreg-banner.png" id="symreg-banner">
        </figure>
    </div>
</div>

### Program
Two invited talks and four contributed talks were presented during the workshop.

- **Invited Talk:** _"Exhaustive Symbolic Regression: Learning Physics directly from Data"_, Harry Desmond
- _"Learning Parametric Nitrogen Fertilizer Response Curves Using Neuro Symbolic Regression"_, Giorgio Morales, John Sheppard
- _"SRToolkit: Shared Infrastructure for Symbolic Regression Research"_, Sebastian Mežnar, Ljupco Todorovski, Sašo Džeroski
- **Invited Talk:** _"Evolution of mutation + Genetic and agentic symbolic regression of distributed rate-and-state friction models"_, Marco Virgolin
- _"Prediction Intervals and Confidence Regions for Symbolic Regression Models based on Likelihood Profiles"_, Fabricio Olivetti de Franca, Gabriel Kronberger
- _"Generalized Residuals Symbolic Regression"_, Rory Sweeney, Takfarinas Saber, James McDermott

[Harry Desmond](https://www.port.ac.uk/about-us/structure-and-governance/our-people/our-staff/harry-desmond) presented  exhaustive symbolic regression and in particular their formulation for the calculation of total description length of symbolic regression models, combining model accuracy and complexity for ranking expressions. He then presented several applications and their results in astrophysics including modeling of universe expansion and the radial acceleration relation of galaxies.  

[Marco Virgolin](https://marcovirgolin.github.io/) gave a nice overview of different approaches to mutation in the history of symbolic regression, from initial "tree twiddling" operators to agentic LLM-based approaches. He discussed them within a unified framework of expression variation operators in different algorithms. A short demo in the end showed how agentic-AI based on LLMs can be useful for finding equations in settings where a single evaluation is expensive, such as in physics simulations. 

The main takeaway from Marco's talk is that if fitness evaluation is costly, it is worth to use more informed mutation operators to guide the search, while for cheap fitness evaluation, simple mutation operators are sufficient.
Make sure to check out his [automodel skill](https://github.com/Unlayer-AI/automodel).
Application to tyre friction modelling: https://github.com/Unlayer-AI/friction-modeling-symreg2026 

### Discussion
The workshop concluded with a discussion session on relevant future research directions for symbolic regression.

The disucssion revolved around **integration of prior knowledge** into symbolic regression. Some partial solutions which are often application-specific have been proposed e.g. for limit behavior, symmetries, structural preferences [[1](http://doi.org/10.1145/3377930.3390152), [2](https://doi.org/10.1162/evco_a_00294), [3](https://doi.org/10.1155/2016/1021378)]. However, it is unclear how those can be expressed, generally to allow SR search processes to consider diverse background knowledge.
In a Bayesian formulation we could potentially express this using priors. There are also other possibilities, such as integrated directly into ML loss functions or as secondary objectives. 
A study was mentioned where neural networks were used in an interactive learning scenario to learn human preferences using interactive feedback from pairwise comparisons. 
LLMs may provide another avenue for understanding and reacting to background knowledge in written form. The potential of using fuzzy computing ideas for handling human preferences was also mentioned. 

Another topic that was raised is that SR community could benefit from research directed into **describing SR algorithm behavior**. A lot of comparison of methods is based on the results only, i.e. whether method A beats method B in performance. Currently, there is a lot of momentum in the development of different SR methods also in related AI-focussed domains, but there is no clear understanding of the (dis)similarities of methods. How can all of this busyness be directed to develop something substantially new, to prevent that we are re-inventing / discussing the same things over and over again? Visualizations of algorithm internals, such as inheritance patterns, diversity, or inheritability of solution properties could be especially insightful to get a better understanding of algorithm behavior. 
 
**Handling uncertainty in SR** was a topic in multiple presentations: in the form of uncertainty-aware model selection (based on DL, or Bayesian information criterion) which automatically prefers less complex models when data is scarce or noisy, and for calculating parameter confidence intervals and prediction intervals for symbolic regression models.

Prior work looking into using symbolic regression with **vectorial input values** was briefly discussed as well [[4](https://link.springer.com/chapter/10.1007/978-3-030-16670-0_14), [5](https://dl.acm.org/doi/abs/10.1145/3583133.3590695), [6](https://link.springer.com/chapter/10.1007/978-981-16-8113-4_2), [7](https://arxiv.org/abs/2303.03200)}. 

### Plans for 2027
We are still undecided where to host the next workshop in 2027. We are **considering both GECCO and CEC**, and we will announce the location and dates on the workshop website once decided. 

We are also interested in **hosting a symbolic regression / equation discovery workshop at one of the large AI conferences** (NeurIPS, ICML, ICLR, AAAI, IJCAI) in 2027. If you are interested in co-organizing such a workshop, please [contact us](mailto:gabriel.kronberger@fh-hagenberg.at).

Additionally, we try to host **a small, in-depth, invitation-only multi-day SymReg event** most likely in the EU in 2027. Let us know if you are interested in participating in such an event.

Finally, I want to thank my co-organizers: Fabricio Olivetti, William LaCava and Steven Gustafson as well as the members of the Programme Committee (Deaglan J. Bartlett, Geoffrey F. Bomarito, Harry Desmond, Alcides Fonseca, Johannes Koch, Alessandro Lucantonio, James McDermott, Julia Reuter, Colm O'Riordan, Giovanni Squillero, Alberto Tonda, Leonardo Trujillo, Bernhard Werth, Stephan Winkler, Aisha Yousuf) for their help in reviewing the submitted papers. 