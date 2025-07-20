---
layout: post
title: "Report on the Symbolic Regression at GECCO 2025, Malaga"
date: 2025-07-18 12:00:00 +0100
categories: workshops
author: Gabriel Kronberger and Fabrício Olivetti de França
excerpt_separator: <!--more-->
image: /blog/resources/2025-07-18-symbolic-regression-workshop-gecco/gabe_fabricio.jpg
---


This year's workshop on Symbolic Regression at GECCO (Genetic and Evolutionary Computation Conference) saw a record number of submissions and was very well recieved. We had two marvelous sessions with nine contributed talks and a 30-minute long lively discussion round. The overall quality of talks was high spanning a good mix of topics including benchmarking, efficiency improvements, theoretical considerations, and applications. Thanks to all the speakers and participants for their contributions. 

<!--more-->

The sessions for the GP track and the poster sessions had several additional contributions on SR. 

It has been a while since my (Gabriel's) previous in-person visit to GECCO in 2018. For me, it was an outstanding intellectually satisfying event in Malaga, thanks to the many friends and new like-minded colleagues that I met after a long time. The many interesting and friendly chats I had in the breaks between sessions and at dinner were the best part of the conference.  


## Talks
Florian Bachinger presented his proposal of benchmarks for shape constrained regression which should be helpful for the development of SR algorithms that allow to incorporate knowledge on the shape of the regression function (range, monotonicity, curvature). Regression with shape constraints could for instance be helpful to restrict function behaviour outside the range of training data to improve extrapolation.
The benchmark is based on an adapted version of the AI Feynman SR benchmark functions which uses physically appropriate ranges for the input variables.
They derive target constraints for each benchmark instance automatically by analysing data from the known target function and its derivatives. <a href="https://github.com/prescriptiveanalytics/SCR-Benchmarks" target="_blank">SCR-Benchmarks</a>

Hernan Lira presented an application of SR for identifying pathways of oceanic metabolism in the OceanIA project <a href="https://oceania.inria.cl" target="_blank">https://oceania.inria.cl</a>. They use SR to describe the relationships between environmental conditions in the ocean, gene abundances and metabolism pathways in oceanic life and a large set of relevant descriptors (KO). They use several specific adaptations, such as a hierarchical (2-level) model and a multi-view approach, to find a common model structure but allow different fitting parameters for metabolism at different ocean depths. The fitness function includes several penalty terms to nudge GP to identify biologically plausible and consistent multi-view SR models. Several questions were discussed which mainly revolved around the constraints that were used to improve biological plausibility.

Fitria Wulandari presented a data augmentation idea to improve the extrapolation behavior of SR models. The approach is based on generating synthetic data outside of the region of training data (extrapolation range) from a teacher model. The teacher model is trained only on the available data but allows to freely generate  additional training data for SR. The hypothesis is that the bias of the teacher model can lead to useful synthetic data (probably: lower noise, smooth) for SR. Different algorithms were tried for the teacher model (NN, RF, GBT, SR) and the performance of SR with and without teacher model was compared. Results seem to be mixed / inconclusive.

Alberto Tonda showed an example where data transformation can mislead search. This problem appears for example in symbolic system identification, that is finding ordinary differential equations that predict the dynamics of systems based solely on samples of observed states from the system. Alberto showed that two options for solving this problem both involve data transformation. Here this refers to adding calculated columns for the approximated derivatives of trajectories to the dataset that are used as the target for symbolic regression. By this the symbolic identification problem is converted to a symbolic regression problem which is beneficial as it is easier to evaluate a loss function (no numeric integration) but on the other hand requires smoothing of the approximate derivatives. They used Savitzky-Golay smoothing and tuned hyperparameters for the smoother. The result was tested on ODEBench whereby for some instances the data transformation led to a misleading fitness function (the loss of the true data generating function was higher than the loss of the identified function). Discussion revolved around the characteristics around the problematic instances (more wiggly or more chaotic?).

Jiajun Duan presented results using a well-known benchmark dataset from the medical domain (Parkinson’s) to argue that using a hinge-loss function for the classification problem instead of accuracy is beneficial but admits that the hinge loss does not match typical likelihood functions for classification problems.


Bernhard Werth revisited pruning in tree-based GP for SR. Pruning is the removal of ineffective subexpressions with the motivation to make space for beneficial growth of expressions, ideally reducing size and/or improving prediction error. The looked at continuous pruning which means pruning a part or all of the trees in each generation, not just at the end.
The empirical results on a large set of datasets did show an improvement in training and test quality but did not show a clear difference in model length between GP with and without pruning. One explanation given by the speaker was that strict offspring selection (a specific variant of GP developed in the group) immediately fills up the pruned subexpressions with other expressions of similar size.


Erik-Jan Senn presented his preliminary work on establishing theoretical statements about the limit-behaviour model selection consistency and efficiency of symbolic regression algorithms. The main motivation being to see whether SR algorithms can identify the “true model” or the best approximation in the limit of infinite number of observations. He introduced an abstract formulation of all SR algorithms as two-phase model selection approaches and conjectures that exhaustive symbolic regression (Bartlett et al.) selects the correct functional form in large samples (with the assumption that the parameter fitting problem is solved by an oracle). He did not make a similar statement about GP yet but argues that the PAC framework should be revisited to get a better understanding about the theoretical guarantees of SR. How this affects practical applications was not covered.


Guilherme Imai Almeida presented the recent modifications of SRBench and new results. To reduce runtime for running all the experiments the number of datasets was reduced by selecting the datasets that were most discriminative among the different algorithms via a dimensionality reduction and agglomerative clustering. The dataset features for this clustering were descriptive features such as the size (number of observations and variables), best R², as well as performance results of algorithms. A focus of recent SRBench work was to allow more detailed comparisons between algorithms on individual datasets instead of aggregating all results into a single rank for comparison (benchmarking is not about finding a winner but instead should give us insights in the relative weaknesses and open issues of existing implementations). In the discussion the point was raised that it is still useful to have the simple ranking of algorithms because outsiders are mainly interested in finding out what is the “best” method on average that can be used. 

Nathan Haut presented result of using alternating tournaments in GP with three objectives, prediction error, expression complexity (visitation length), and smoothness of the regression function. They used alternating Pareto tournaments in two objectives, that is, if in one generation they select the Pareto optimal individuals regarding prediction error and complexity they would switch this to prediction error and smoothness in the next generation. Many different variations for alternating Pareto tournaments were evaluated on the Kotanchek test function and several other benchmark datasets and positive results were observed: prediction errors, complexity and smoothness could be improved on average. As a remark about the motivation for using Pareto tournaments instead of doing multi.-objective NSGA-II directly, Nathan mentioned that Pareto tournaments in his experience focus more on the most important region/knee of the Pareto front instead of keeping the whole Pareto front in the population.


## Discussion
After the talks we have a lively 30-minute long discussion round allowing all participants to express their thoughts about the most pressing topics in SR research. 

### Stability
An issue raised was stability of GP for SR. While there is some degree of semantic stability which leads to comparable prediction errors of the produced models from multiple GP runs, the expressions can be completely different each time. This is problematic in scientific and engineering applications because it reduces trust in in the results and requires more effort in the validation or interpretation of the expressions to gain knowledge about the studied systems.
Stability is a beneficial property for SR algorithms and it is worthwhile to improve current systems in this direction. Recent work on using equality saturation and egraphs, also presented in other tracks at GECCO could help here.


### Uncertainty
The next topic was handling uncertainty of SR models. We are frequently just assuming exact data points (discarding data / measurement uncertainty) and often use a loss function such as negative R² or sum of squared errors to assess model fit. First, we should start including an error model for the data; uncertainty of data propagates into uncertainty of parameters, and further into uncertainty of predictions giving e.g. confidence intervals for parameters or prediction intervals. Including this uncertainty has other benefits in model selection, overfitting reduction, and preventing unnecessarily complexity models. Beyond that the model selection uncertainty through GP search is another factor. 
On the other hand, there can be difficulties expression confidence regions or prediction intervals when combining multiple models into an ensemble or with multi-modal likelihood functions (not sure if I understood the online comment correctly).
In any case, recent work in Bayesian symbolic regression and sequential Monte Carlo sampling for symbolic regression looks very promising. 


### Benchmarks
Several participants raised the question: “What benchmarks should we use or what are characteristics of good benchmark problems?”. There seems to be a consensus that most of the AI Feynman problem instances are too easy as they are very short expressions that can be recovered easily with exhaustive search. We should question whether it is worthwhile to devise intricate SR systems to be able to discover such simple equations. Probably we should construct much more complex synthetic benchmark functions to really challenge our current SR systems. On the other hand, if such complex target functions never occur in real-world situations directing efforts into systems that are able to rediscover such equations might also be wasted. We should not dump all problem instances (and algorithms) into the same bin but instead could use groups of characteristically similar instances.

### More
We discussed the aims of SR implementations. Currently, SR is often considered as a solver or a system giving you a solution for a problem, instead SR could be more useful as an exploration tool (such as <a href="https://github.com/folivetti/reggression">rEGGression</a> which was presented in another GECCO track). Both use cases are beneficial. 

Another topic was the smoothness of mutation in genetic programming. Typical mutation operators are rather disruptive, and the hypothesis was raised that a smoother mutation operation could improve search.


<div class="row">
    <div class="col-lg-7 col-md-12 text-center">
        <figure class="image-box">
            <img src="/blog/resources/2025-07-18-symbolic-regression-workshop-gecco/symreg_workshop.jpg" id="workshop-room">
        </figure>
    </div>
    <div class="col-lg-7 col-md-12 text-center">
        <figure class="image-box">
            <img src="/blog/resources/2025-07-18-symbolic-regression-workshop-gecco/gabe_fabricio.jpg" id="workshop-organizers">
        </figure>
    </div>
</div>

Gabriel Kronberger and Fabrício Olivetti de Franca

