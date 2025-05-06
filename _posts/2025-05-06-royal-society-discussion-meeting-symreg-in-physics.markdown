---
layout: post
title: "Report on the Royal Society Discussion Meeting on Symbolic Regression in the Physical Sciences"
date: 2025-05-06 12:00:00 +0100
categories: workshops physics
author: Gabriel Kronberger, Fabrício Olivetti de França and Bogdan Burlacu
excerpt_separator: <!--more-->
---

The meeting on _Symbolic Regression in the Physical Sciences_ was held on 28th and 29th of April 2025 at Royal Society in London. Two days of insightful talks highlighted several applications of symbolic regression and gave some hints about future developments of symbolic regression methods. We provide our personal summary of the main topics in this post.

<!--more-->

Symbolic regression is a branch of machine learning that attempts to find interpretable mathematical expressions which can accurately approximate a data set. This meeting brought together practitioners of symbolic regression with physicists who are tackling problems which are particularly amenable to their analysis.

<div class="col-lg-7 col-md-12 text-center">
    <figure class="image-box">
        <img src="/assets/img/rs_group_cropped.jpg" id="royal-society-speakers-group-picture">
    </figure>
</div>
Left to right: C. Cornelio, E. Kabliman, S. Manti, A. Lucantonio, L. Kammerer, G. Kronberger, H. Desmond, A. Soltani, D. Bartlett, G. Bomarito, N. Kutz, P. Ferreira, B. Burlacu, W. La Cava, A. Constantin

## Schedule
The workshop had a mixture of talks focussing either on applications of symbolic regression in physical sciences and engineering or on symbolic regression methods.

### Monday 28th of April:
- Harry Desmond, University of Portsmouth, **_(Exhaustive) Symbolic Regression and model selection by minimum description length_**
- Steven Abel, Durham University, **_Symbolic regression in beyond Standard Model physics_**
- Evgeniya Kabliman, University of Bremen & Leibniz Institute for Materials Engineering, **_Constitutive modelling using symbolic regression_**
- Roger Guimerà, Universitat Rovira i Virgili **_Physics for symbolic regression, Symbolic regression for physics_**
- William La Cava, Boston Children's Hospital **_Brush: incorporating split-wise functions and multi-armed bandits into symbolic regression_**
- Tariq Yasin, University of Oxford, **_Empirical dark matter profiles with symbolic regression_**
- Cristina Cornelio, Samsung AI, **_Derivable scientific discovery_**
- J. Nathan Kutz, University of Washington, **_Sparse regression for symbolic representations in latent space dynamics_**

### Tuesday 29th of April:
- Deaglan Bartlett, Institut d'Astrophysique de Paris, **_Accelerating cosmological modelling with symbolic regression_**
- Miles Cranmer, University of Cambridge, **_Concept evolution and SymbolicRegression.jl as a modular research platform_**
- Etienne Russeil, Stockholm University, **_Multi-view Symbolic Regression: from independent experiments to general laws_**
- Geoffrey Bomarito, National Aeronautics and Space Administration (NASA), **_Symbolic regression via posterior sampling_**
- Andrei Constantin, University of Birmingham & University of Oxford, **_Statistical patterns in the equations of physics and the emergence of a meta-law of Nature_**
- Bogdan Burlacu, University of Applied Sciences Upper Austria, **_Zobrist hash-based duplicate detection in symbolic regression_**
- Fabricio Olivetti de França, Universidade Federal do ABC, **_Equality graph assisted symbolic regression_**
- Panel Discussion and Closing

## Summary

Several speakers gave excellent examples showcasing the power of symbolic regression and its ability to produce fast and accurate models. Several issues and ideas were raised repeatedly by different speakers. These reoccuring themes include **additional quality criteria** for SR models for instance to preferably produce physically plausible and interpretable models, **hierarchical models** with global parameters and local fitting parameters for each dataset, and **systematic handling of data and model uncertainty**. 

### Additional quality criteria

Measurements of accuracy, such as mean squared error or R^2, captures how well a certain model fits the available data but cannot always tell if such models are going to be useful when put into practice. Because of that, a recurrent topic in the workshop was the use of additional quality criteria for candidate expressions.

For example, as explained by Harry Desmond, minimizing the description length can bias the search toward a balance between accuracy and complexity while taking the uncertainty of the data into consideration. The minimum description length principle is connected to maximizing Bayesian evidence under different model priors. Using what they called the Katz prior they tried to produce expressions with a similar distribution of operators as exhibited by a list of named equations collected from Wikipedia.

The talk of Roger Guimerà was similar in idea. He discussed a prior for the structure of the function based on the already established physics equation to ensure that the accumulated knowledge throughout history is taken into consideration for biasing the search of expressions.

If we have prior knowledge about logical constraints and axioms which the final model must follow, it is possible to make a post-selection analysis of those hypotheses that conform to such constraints or to create a feedback for the search engine to sample new candidates. Cristina Cornelio argued that this guidance helps to find correct models. 

There was a lively discussion about the ability of SR to discover physical equations, which often exhibit certain specific characteristics (the formula looks "physical"). Andrei Constantin presented his thoughts on a meta-law of Nature circling around peculiar statistical patterns that occur in the equations of physics.

The aim to find _interpretable_ models is closely connected with the idea of using priors to produce natural or physical expressions. William La Cava showed some examples from the medical domain where he used symbolic regression and genetic programming to produce interpretable models similar to decision trees that help physicians and patients understand the reasoning for diagnoses. Additionally, he argued for the need for a benchmark or competition that evaluates interpretability of symbolic regression results. Discussion revolved around the problem of defining and measuring _interpretability_. 

Sampling from the posterior distribution of models can lead to a Bayesian view of how to handle uncertainties. Geoffrey Bomarito showed how this can be exploited to gradually introduce the effect of data into the search promoting an improved capability of retrieving the true expression under limited, noisy, and sparse data.

Steven Abel used symbolic regression tools in the context of finding extensions to the Standard Model of particle physics by trying to find accurate and efficient emulators for computationally heavy numerical simulations. He presented a huge expression produced by PyOperon spanning a whole slide. To produce an expression that is accurate for inputs which are most relevant for the numerical simulation they used a simple weighting scheme with PyOperon to weight those data more heavily.

The execution speed of the symbolic regression models is another relevant quality criterion, for example when using SR models in the form of emulators in larger optimization pipelines. This was raised for instance by Deaglan Bartlett when he presented his results for finding emulators for the linear and non-linear power spectrum and again when he presented the beautiful new approximation for a hypergeometric function that was more accurate than the human-derived approximation which has been used for decades. In this talk on PySR, Miles Cranmer expressed that he thinks that probably the best criterion for model complexity is the speed of evaluating the expressions on an FPGA. 

Overall, with that many possibilities of calculating the quality of the obtained solutions, there is a need for a customizable experience with symbolic regression tools. Miles Cranmer showed his recent improvements with PySR and how it is capable of incorporating customized loss functions, operators, and function templates in the form of standard Julia code even allowing the importing of external libraries (such as ODE solvers). As some decisions can be made post-hoc, there may be a need for a structured database of hypothesis that can be easily explored by the user, this can be accomplish with the equality graphs, presented by Fabricio Olivetti de França, allowing the automatic derivation of properties (i.e., monotonicity), pattern matching, and statistics on common patterns observed during the search.


### Hierarchical models
In most of the talks, symbolic regression models were used as one component embedded within a larger pipeline or hierarchical simulation model. Different ways of handling this were mentioned in several talks.

For example Roger Guimerà showed ordinary differential equations produced by the Bayesian Machine Scientist which describe the growth behaviour of bacterial strains on different media. The system found a common expression which was accurate for all growth curves but had fitting parameters that were fit to each of the individual growth curves. Similarly, the expressions found by the Bayesian Machine Scientists for predicting mobility patterns between larger cities included fitting parameters tuned for each city. 
Etienne Russeil called this approach multi-view symbolic regression and he highlighted results for example for the observed light intensity curves of supernovea over time where symbolic regression was used to find a common model structure with parameters that are fit to each supernova light curve.

Tariq Yasin also mentioned a similar approach with global parameters and local parameters fit to each of the approximately 150 galaxies in the dataset that they used.

Evgeniya Kabliman presented the idea to use symbolic regression to find short expressions that can be used to calculate the local parameters from other known variables instead of fitting the parameters to each dataset. Her work is focused on the development of constitutive models explaining mechanical properties of metallic materials. In this domain, several physics-based models exist to describe stress-strain behaviour but all models still have fitting parameters that must be estimated from costly measurements. She proposed using SR to improve such physics-based models by finding expressions which allow to replace fitting parameters. A main issue in these models seems to be that uncertainty of measurements and variability of samples used in experiments is often ignored.

Nathan Kutz presented an approach called SHRED and it combination with SINDy to produce sparse spatio-dynamical models. 
SHRED uses a recurrent neural network architecture (LSTM) with a final decoder layer to learn and predict noisy dynamical processes. The data is compressed into a latent space which makes it easier to produce accurate and robust predictions. He also repeatedly mentioned the unexpected difficulty of numerically approximating derivatives of noisy functions.

### Systematic handling of data and model uncertainty

One potential shortcoming of current SR research, highlighted in the workshop, is the insufficient consideration given to the issue of uncertainty quantification. Looking at the data and models in terms of likelihoods provides a principled way for dealing with overfitting and selecting generalizable models. Unfortunately, this aspect is often ignored and hardly discussed in current symbolic regression work. During the workshop, the main presented approaches to handle uncertainty was the minimization of description length, presented in Harry's talk and the Bayesian approach by Geoffrey that incrementally take the data uncertainty into consideration.

### Efficiency and usability of SR tools 

As SR becomes more popular, it is necessary to ensure a good experience to the final user. This points to efficiency, easy-of-use, and customization. Regarding efficiency, PyOperon already provides an optimized implementation often orders of magnitude faster than other approaches. Bogdan Burlacu showed that it is still possible to improve the runtime by caching the fitness values for already visited expressions using the Zobrist hash. With this approach, he avoided evaluating repeated expressions along the search. Similar to this idea, Fabricio Olivetti also exploited the fact that equality graphs can represent equivalence relationships thus estimulating the generation of unique expressions, improving the speed of convergence. He also argued that many implementations contain too many hyper-parameters, not often intuitive to the user, he shows that a minimum set of hyper-parameters can be enough to achieve competing results with the popular implementations. 
Finally, regarding customization, as already mentioned, Miles Cranmer introduced many new features to PySR enabling the user to adapt the main components to fit their personal demands. A briefly presented alternative was r🥚ression (aka rEGGression) that exploits equality graphs to offer a post-analysis navigation of multiple models found by a combination of SR algorithm executions.

### Operon and PyOperon

Operon seems to be a popular framework for astrophysics. It has been used in many works presented at the workshop.

#### Application examples

- Deaglan Bartlett et al. used PyOperon to develop a symbolic emulator for the linear matter power spectrum
  - <a href="https://github.com/DeaglanBartlett/symbolic_pofk" target="_blank">https://github.com/DeaglanBartlett/symbolic_pofk</a>
  - <a href="https://arxiv.org/abs/2311.15865" target="_blank">https://arxiv.org/abs/2311.15865</a>
- Steve Abel et al. used Operon to develop analytical expressions for beyond Standard Model physics
- Etienne Russeil et al. used PyOperon for Multi-View Symbolic Regression with applications to phenomenological modeling <a href="https://arxiv.org/abs/2405.18471" target="_blank">https://arxiv.org/abs/2405.18471</a>
- Evgeniya Kabliman et al. used PyOperon for modeling stress-strain curves of aluminium and steel alloys

#### Feature requests

In general, it would seem that the current scikit-learn interface provided by pyoperon is not very flexible and more attention should be paid to ergonomics, ease-of-use and customization.

Summary of requested features:

- support for a wider range of likelihoods, and the possibility to fully specify the data uncertainties in the form of a covariance matrix
- support for custom loss functions (note: this is already possible with the UserDefinedEvaluator, but it poses some issues in the Python wrapper due to the GIL/concurrency issues)
- support for constraining the number of model parameters
- the ability to perform restarts during parameter tuning
- support for warm starts and, more generally, seeding the initialization or resuming the search with an existing population

## Future Activities

- <a href="https://heal.heuristiclab.com/research/symbolic-regression-workshop" target="_blank">Symbolic Regression Workshop</a> at the <a href="https://gecco-2025.sigevo.org/HomePage" target="_blank">Genetic and Evolutionary Computation Conference (GECCO)</a> 14th-18th of July, Malaga
- <a href="https://drive.google.com/file/d/1sQE80uWEmnN15XZELUWZPp97DASWrq8b/view" target="_blank">Advancing Computational Mechanics with Symbolic Regression</a>, <a href="https://usnccm18.usacm.org/" target="_blank"> U.S. National Congress on Computational Mechanics</a>, Chicago July 20-24, 2025
- We plan to organize a workshop proposal at NeurIPS in December 2025

## Links

- [Royal Society Scientific Meetings][meeting]{:taret="\_blank"}
- [Youtube Stream: Day 1][vod1]{:taret="\_blank"}
- [Youtube Stream: Day 2][vod2]{:taret="\_blank"}

[meeting]: https://royalsociety.org/science-events-and-lectures/2025/04/symbolic-regression/
[vod1]: https://www.youtube.com/watch?v=fzVnkDSPwt0
[vod2]: https://www.youtube.com/watch?v=8o6jU-iBXbw
