---
layout: post
title:  "Royal Society Discussion Meeting on Symbolic Regression in the Physical Sciences"
date:   2025-05-06 14:00:45 +0100
categories: workshops physics
---

# Report on the Royal Society Discussion Meeting on Symbolic Regression in the Physical Sciences
Authors: Gabriel Kronberger, Fabrício Olivetti de França, Bogdan Burlacu

The meeting held on 28th-29th of April 2025 at Royal Society in London, was organized by Deaglan Bartlett, Harry Desmond, Pedro G. Ferreira, and Gabriel Kronberger. 

Symbolic regression is a branch of machine learning that attempts to find interpretable mathematical expressions which can accurately approximate a data set. This meeting brought together practitioners of symbolic regression with physicists who are tackling problems which are particularly amenable to their analysis


## Schedule
Monday 28th of April:
- Harry Desmond, University of Portsmouth, _(Exhaustive) Symbolic Regression and model selection by minimum description length_
- Steven Abel, Durham University, _Symbolic regression in beyond Standard Model physics_
- Evgeniya Kabliman, University of Bremen & Leibniz Institute for Materials Engineering, _Constitutive modelling using symbolic regression_
- Roger Guimerà, Universitat Rovira i Virgili Physics for symbolic regression, _Symbolic regression for physics_
- William La Cava, Boston Children's Hospital _Brush: incorporating split-wise functions and multi-armed bandits into symbolic regression_
- Tariq Yasin, University of Oxford, _Empirical dark matter profiles with symbolic regression_
- Cristina Cornelio, Samsung AI, _Derivable scientific discovery_
- J. Nathan Kutz, University of Washington, _Sparse regression for symbolic representations in latent space dynamics_
 
Tuesday 29th of April:
- Deaglan Bartlett, Institut d'Astrophysique de Paris, _Accelerating cosmological modelling with symbolic regression_
- Miles Cranmer, University of Cambridge, _Concept evolution and SymbolicRegression.jl as a modular research platform_
- Etienne Russeil, Stockholm University, _Multi-view Symbolic Regression: from independent experiments to general laws_
- Geoffrey Bomarito, National Aeronautics and Space Administration (NASA), _Symbolic regression via posterior sampling_
- Andrei Constantin, University of Birmingham & University of Oxford, _Statistical patterns in the equations of physics and the emergence of a meta-law of Nature_
- Bogdan Burlacu, University of Applied Sciences Upper Austria, _Zobrist hash-based duplicate detection in symbolic regression_
- Fabricio Olivetti de França, Universidade Federal do ABC,_Equality graph assisted symbolic regression_
- Panel Discussion and Closing

## Reoccurring Topics
Several speakers gave excellent examples showcasing the power of symbolic regression and its ability to produce fast and interpretable models.


### Additional quality criteria for symbolic regression models

Measurements of accuracy, such as mean squared error or R^2, captures how well a certain model fits the available data but cannot always tell if such models are going to be useful when put into practice. Because of that, a recurrent topic in the workshop was the use of additional criteria to measure the quality of the candidate expressions and their usefulness for the science case.  

For example, as explained by Harry Desmond, minimizing the description length can bias the search toward a balance between accuracy and complexity while taking the uncertainty of the data into consideration. Roger Guimerà defined a prior for the structure of the function based on the already established physics equation to ensure that the accumulated knowledge throughout history is taken into consideration and biasing the search towards functions that are closer to well studied equations. If we have prior knowledge about logical constraints and axioms which the final model must follow, it is possible to make a post-selection analysis of those hypotheses that conform to such constraints or to create a feedback for the search engine to sample new candidates. 

There was a lively discussion about the ability of SR to discover physical equations, which often exhibit certain specific characteristics (the formula looks "physical"). Dr Andrei Constantin has published some very interesting work on the statistical patterns in the equations of physics.

Cristina Cornelio argues that this guidance is necessary to ensure the generation of applicable models. Another possibility is to compress the data into a latent space, specifically when learning the dynamics of noisy temporal sensors, as Nathan Kutz showed us. In this compressed space, it becomes easier to generate easier-to-understand, and yet accurate, equations that can be translated back to the original space using a decoder.

When you have observations collected from variations of independent experiments, the main objective becomes to find a common functional structure that will be correctly fitted into these different datasets, Etienne Russeil reported the results of different implementations of multi-view symbolic regression showing that this often leads to more robust and simplified equations especially when dealing with a small data scenario.

Sampling from the posterior distribution of models can lead to a Bayesian view of how to handle uncertainties. Geoffrey Bomarito showed how this can be exploited to gradually introduce the effect of data into the search promoting an improved capability of retrieving the true expression under limited, noisy, and sparse data.

Overall, with that many possibilities of calculating the quality of the obtained solutions, there is a need for a customizable experience with symbolic regression tools. Miles Cranmer showed his recent improvements with PySR and how it is now capable of incorporating customized loss functions, operators, and function templates in the form of standard Julia code even allowing the importing of external libraries (such as an ODE solver).


### Uncertainty
One potential shortcoming of current SR research, highlighted in the workshop, is the insufficient consideration given to the issue of uncertainty quantification. Looking at the data and models in terms of likelihoods provides a principled way for dealing with overfitting and selecting generalizable models. Unfortunately, this aspect is hardly discussed in current symbolic regression work.


### Operon and PyOperon

Operon seems to be a popular framework for astrophysics. It has been used in many works presented at the workshop.

#### Application examples
- Deaglan Bartlett et al. used PyOperon to develop a symbolic emulator for the linear matter power spectrum
  - https://github.com/DeaglanBartlett/symbolic_pofk
  - https://arxiv.org/abs/2311.15865
- Prof. Steve Abel et al. used Operon to develop analytical expressions for beyond Standard Model physics
- Etienne Russeil et al. used PyOperon for Multi-View Symbolic Regression with applications to phenomenological modeling https://arxiv.org/abs/2405.18471

- Evgeniya Kabliman et al. used PyOperon for modeling process-structure-property relationships in material science

#### Feature requests

In general, it would seem that the current scikit-learn interface provided by pyoperon is not very flexible and more attention should be paid to ergonomics, ease-of-use and customization.

Summary of requested features:
- support for a wider range of likelihoods, and the possibility to fully specify the data uncertainties in the form of a covariance matrix
- support for custom loss functions (note: this is already possible with the UserDefinedEvaluator, but it poses some issues in the Python wrapper due to the GIL/concurrency issues)
- support for constraining the number of model parameters
- the ability to perform restarts during parameter tuning
- support for warm starts and, more generally, seeding the initialization or resuming the search with an existing population


## Future Activities
- <a href="https://heal.heuristiclab.com/research/symbolic-regression-workshop">Symbolic Regression Workshop</a> at the <a href="https://gecco-2025.sigevo.org/HomePage">Genetic and Evolutionary Computation Conference (GECCO)</a> 14th-18th of July, Malaga
- <a href="https://drive.google.com/file/d/1sQE80uWEmnN15XZELUWZPp97DASWrq8b/view">Advancing Computational Mechanics with Symbolic Regression</a>, U.S. National Congress on Computational Mechanics</a>, Chicago July 20-24, 2025
- We plan to organize a workshop proposal at NeurIPS in December 2025


## Links
[Royal Society Scientific Meetings]: https://royalsociety.org/science-events-and-lectures/2025/04/symbolic-regression/
[Youtube Stream: Day 1]: https://www.youtube.com/watch?v=fzVnkDSPwt0
[Youtube Stream: Day 2]: https://www.youtube.com/watch?v=8o6jU-iBXbw
