---
layout: post
title: "MSE Congress: Minisymposium on Symbolic Regression for Materials Science and Engineering"
date: 2026-09-29 14:00:00 +0100
categories: science
author: Gabriel Kronberger
image: /blog/resources/2026-09-29-mse-symreg-for-materials-science-and-engineering/mse_symreg.jpeg
---

Post by Gabriel Kronberger

<p>
The <a href="https://mse-congress.de/program/scientific-program?tab=2026-09-29&event-session=019d0577-3da0-72cd-8bee-148794fc44d6">Minisymposium for Symbolic Regression for Materials Science and Engineering</a> took place as a part of the <a href="https://mse-congress.de/">Materials Science and Engineering Congress</a> on the 29th of September 2026 in Darmstadt, Germany. 
</p>
<p>
The main topics were applications of symbolic regression for prediction of structure and mechanical properties of materials and crack tip location prediction. Several talks mentioned the need for handling uncertainty in data and models and using it for principled model selection to resolve overfitting in SR. Integration of physical constraints (e.g. unit-aware SR) was also mentioned by several speakers. SR implementations used: <a href="https://github.com/astroautomata/PySR">PySR</a> (most popular), <a href="https://github.com/wassimtenachi/physo">Φ-SO</a> (convenient for physical units), and NeoGP (DL-aware model selection). SR was used with real data and data from simulations.
</p>

<!--more-->
The Materials Science and Engineering Congress takes place every other year at Technical University Darmstadt and can be considered one of the most important scientific events for materials science in Europe. It is organized by the German Association for Material Science (DGM - Deutsche Gesellschaft für Materialkunde) and is held as a hybrid event. The location is easy to reach from Frankfurt Airport via a direct bus connection which drops you off almost in front of the event location within 30 minutes. 

We are happy with the number of participants; around 20 - 30 participants stayed for the whole session. This is comparable to the participation at ECCOMAS/WCCM and similar to the GECCO 2025 Workshop in Malaga. The CEC Workshop in Maastricht this year saw the lowest number of participants. From this year's minisymposia at ECCOMAS/WCCM and at MSE Congress, I have the feeling that symbolic regression / equation discovery is interesting to researchers in Materials Science because of its potential to find interpretable formulas. However, I think the methods and implementations are still lacking and not (yet?) able to deliver this promise.   

What is missing? I believe there are several pieces. One of my favorite topics the previous two years is **principled handling of data and model uncertainty (Bayesian inference)** and its integration into model selection, e.g. based on minimum description length as one approximation of the Bayesian evidence. The techniques are known, but they are not implemented or supported by symbolic regression implementations. Additionally, uncertainty information for data must also be provided on both sides. SR tools and applications must improve in this direction. 
The talks by Evgeniya Kabliman (IWT, *SR as a new pathway for automated discovery of material laws*) and Manfred Mücke (MCL, *Equayes - Post-hoc Inference over Analytic Expressions*) mentioned explicitly the need for handling uncertainty. I also showed <a href="/blog/resources/2026-09-29-mse-symreg-for-materials-science-and-engineering/20260929_flowrex_mse_darmstadt.pdf" target="_blank">an example</a> where we used genetic programming for symbolic regression with MDL selection to automatically select models of optimal complexity for predicting e.g. yield strength as a function of heat-treatment duration and temperature. No cross-validation, no hyperparameter tuning, no overfitting!

Another missing piece is **connecting known physics and constraints with the data-driven "curve-fitting" of SR** -- we could call this grounding of SR in existing theory. Several techniques have been proposed (e.g. unit-aware SR, shape-constraints, physics-inspired SR), but I think there is still something left on the table. We do not yet have a reliable, general, and easy to use tool available. In the minisymposium David Melching and Florian Paysan (both DLR) presented their work where they used unit-aware SR as implemented in Φ-SO for finding a short SR model for crack tip shielding effects. I believe that LLMs could provide the link between physical theory in the form of papers, existing formulas, and textual descriptions of expected convergence behaviour or function shapes and statistical / empirical function fitting. In this vein, I briefly presented the idea of using <a href="/blog/resources/2026-09-29-mse-symreg-for-materials-science-and-engineering/20260929_flowrex_mse_darmstadt.pdf" target="_blank">AI agents in an evolutionary loop</a> to improve a large physics-based (mean dislocation density) numerical model. In this ongoing work together with Johannes Kronsteiner and Sindre Hoven (both LKR), we are trying to improve the parts relevant for recrystallization processes, so that it better matches observations.  

Thank you to all the speakers for the well-prepared talks and for the insightful discussions. 

### Program

**_Symbolic regression as a new pathway for automated discovery of material laws_**,<br>
Kabliman, E. (Speaker); Sikder, N.,<br>
Leibniz Institute for Materials Engineering - IWT, Bremen (DE)<br>
Sets the stage by highlighting how symbolic regression provides unique capabilities to derive interpretable constitutive laws linking microstructural features to mechanical properties.
<!--
The materials science and engineering demands precise and interpretable material models to understand and control the complex interplay between process, microstructure, and properties. This lecture focuses on symbolic regression, a powerful data-driven approach that automatically derives closed-form mathematical equations describing material behavior while preserving physical interpretability. By combining experimental data from mechanical testing of various metal alloys with symbolic regression, a novel approach to developing constitutive laws is presented. A key advantage of this method is its ability not only to deliver high-precision predictions but also to uncover physically meaningful relationships between microstructural features and macroscopic mechanical properties. This approach opens new pathways for automated discovery of material laws and supports the development of hybrid models that integrate physical principles with data-driven insights. Ultimately, it represents a crucial step toward intelligent, model-based material design in modern manufacturing—enabling the efficient, sustainable, and precise development of novel, tailor-made materials.
-->
**_Equayes - A tool for post-hoc inference over analytic expressions_**,<br>
Mücke, M. (Speaker); Findenig, C.,<br>
Materials Center Leoben Forschung GmbH (AT)<br>
Presents <a href="https://github.com/mclprobability/Equayes" target="_blank">Equayes</a>, a tool for Bayesian inference to assess candidate expressions.
<!--
Symbolic regression (SR) provides data-driven construction of interpretable models in the form of analytic expressions. Analytic expressions with comparable prediction error or model complexity, however, can differ greatly in robustness w.r.t. input noise and capability to extrapolate. Most existing approaches do not consider expression robustness during model selection. Consequently, analytic expressions as provided by many symbolic regression workflows can vary wildly with respect to robustness. This is particularly relevant in applications with small data sets and/or relatively high noise.
We present a workflow that combines symbolic regression with Bayesian Inference (BI) for post-hoc tractability (convergence of inference) and uncertainty quantification of discovered equations. Candidate expressions derived by SR are interpreted as probabilistic graphical models and assessed -- in addition to fit quality -- by tractability, parameter identifiability, predictive uncertainty, and noise sensitivity. This allows competing symbolic models to be distinguished under noisy and data-limited conditions.
The workflow is demonstrated on a representative materials science problem.
-->


**_Prediction of Mechanical Properties of Heat-treated EN AW-6082 using Symbolic Regression_**,<br>
Kronberger, G. (Speaker); Raaber, S.; Grohmann, L.; Pichlmann, L.; Kronsteiner, J.; Österreicher, J.A.,<br>
University of Applied Sciences Upper Austria, Hagenberg (AT); <br>
AIT Austrian Institute of Technology, Vienna (AT);<br>
LKR Light Metals Technologies, AIT Austrian Institute of Technology, Ranshofen (AT)<br>
Uses genetic programming to derive short, accurate symbolic regression models predicting four tensile properties of heat-treated EN AW-6082 aluminum as a function of tempering temperature and duration, with the best model selected via minimum description length. The resulting models require no cross-validation or hyperparameter tuning and allow to calculate prediction uncertainty.<br>
<a href="/blog/resources/2026-09-29-mse-symreg-for-materials-science-and-engineering/20260929_mse_darmstadt.pdf" target="_blank">Slides (PDF)</a>
<!--
Age-hardenable aluminum alloys, such as wrought aluminum alloy EN AW-6082, require a heat treatment to obtain desired mechanical properties. Process parameters such as time, temperature, and cooling rate can be set based on experience or simulation models that predict mechanical properties. However, physics-based precipitation and yield strength models can be complex and are often computationally too expensive for real-time process control. 
We used genetic programming to find empirical prediction models for four tensile properties after tempering (artificial aging): yield strength, ultimate tensile strength, uniform elongation and elongation at break, as a function of tempering temperature and duration, using a symbolic regression approach.
Data were collected from EN AW-6082 samples that were solution annealed and quenched before artificial aging. Samples were placed inside a furnace pre-heated to the aging temperature (140, 170, 180, or 190 °C), removed after different aging durations (up to 80h), and subsequently tensile tested.
We used tree-based genetic programming to produce symbolic regression models with a length limit of up to 50 symbols using the function set and a terminal set consisting of numeric parameters and the two input variables. We used two objectives, predictive accuracy and model complexity, and evolved expressions that minimize both objectives. The model with the best fractional Bayes factor was selected from the final Pareto front. 
We found short and accurate expressions for all four tensile properties. Using Bayesian inference, the models can be used to solve the inverse problem of finding the best process parameters including uncertainty bounds to achieve given mechanical properties. 
While this study is limited to a single alloy composition, the proposed symbolic regression framework is general. Incorporating alloy composition as an additional feature set would enable calibration across multiple alloys and facilitate interpolation to unseen alloys within the 6xxx series.
-->

**_Symbolic Regression-Based Estimation of Crack Tip Shielding Effects due to Secondary Branching_**,<br>
Paysan, F. (Speaker); Breitbarth, E.,<br>
German Aerospace Center (DLR), Köln (DE)<br>
Derives an analytical symbolic regression formula linking secondary crack branching geometry (branching angle, secondary crack length) to the reduction in crack driving force of the primary crack.
<!--
Fatigue cracking represents a critical failure mechanism in the metallic fuselage structures of commercial aircraft. A deep understanding of crack propagation under realistic loading conditions is therefore essential for assessing structural integrity. During fatigue crack growth, secondary cracks initiate from microstructural features and significantly influence the crack driving force.  To elucidate the influence of mean stress on secondary crack formation, fatigue crack growth in AA2024-T3 aluminum sheets (MT160 specimens, 2 mm thick) perpendicular to the rolling direction was investigated at load ratios of R = 0.1, 0.3 and 0.5. A robot-assisted, high-resolution Digital Image Correlation (HR-DIC) system was employed, enabling the acquisition of time-resolved displacement fields directly at the crack tip throughout the entire test.

Analysis of the displacement fields revealed periodically occurring secondary cracks along the primary crack path. A distinct dependence of the crack morphology on the load ratio was observed: While the branching angle increased with decreasing R-ratio, the length of the secondary cracks increased with rising R-ratios. Since crack branching exerts a retarding effect on the overall crack propagation rates da/dN, an analytical estimation formula was derived using symbolic regression to quantify this effect. This formula links geometric crack parameters (branching angle, secondary crack length) to the reduction of the crack tip driving force J of the primary crack, thereby quantifying the local retardation effect of the branching. The data basis for this was provided by a linear-elastic isotropic finite element parameter study, in which branching angles and relative secondary crack lengths were systematically varied.

Applying the derived formula to the experimental data demonstrates that the larger branching angles at low R-ratios cause a more significant mechanical stress reduction (reduction in J) than the longer secondary cracks at high R-ratios. These findings provide a promising physical explanation for the phenomenologically observed acceleration of crack growth with increasing R-ratios in AA2024-T3.
-->

**_From Symbolic Regression to Reliable Crack Tip Annotation in Full-Field Digital Image Correlation Data_**,<br>
Melching, D. (Speaker); Dömling, F.; Paysan, F.; Strohmann, T.; Schultheis, E.; Dietrich, E.; Breitbarth, E.,<br>
German Aerospace Center (DLR), Köln (DE)<br>
Uses physics-guided, unit-aware symbolic regression on simulated displacement fields to derive closed-form crack tip correction formulas expressed via Williams-series coefficients.
<!--
Accurate crack tip localization is essential for experimental fracture mechanics based on full-field digital image correlation (DIC) data. Although deep-learning-based methods achieve high accuracy in crack detection, their black-box nature limits physical interpretability and systematic validation. Here, we present a physics-guided symbolic regression framework that links analytical fracture mechanics, interpretable machine learning, and experimental data analysis.

Using simulated displacement fields from linear-elastic finite element models under mode I, mode II, and mixed-mode loading, we apply physical deep symbolic regression [1] to discover closed-form crack tip correction formulas expressed in terms of Williams-series coefficients [2]. Enforcing physical unit constraints ensures dimensional consistency, reduces the search space, and yields compact analytical expressions. The resulting formulas generalize classical correction schemes, converge reliably under iterative application, and recover known theoretical results while extending them to more general loading conditions.

We further show how these correction formulas enable a fully automated crack tip annotation pipeline for experimental DIC data [3]. Applied to large-scale fatigue crack growth experiments on aerospace-grade aluminium alloys, this pipeline is used to generate a curated benchmark dataset of experimentally measured displacement fields with consistently annotated crack tip locations and fracture-mechanical descriptors. The resulting CrackMNIST [4] dataset provides multiple spatial resolutions and dataset scales, enabling reproducible benchmarking of physics-based and machine-learning-based approaches on experimental data.

Overall, the work demonstrates how symbolic regression can act as an enabling technology in materials science by extracting physically meaningful relations from data and supporting the creation of high-quality reference datasets. 
-->

**_Extending a Physics-based Recrystallization Model using Genetic Programming_,**<br>
Kronberger, G. (Speaker); Kronsteiner, J.; Raaber, S.,
University of Applied Sciences Upper Austria, Hagenberg (AT);<br>
LKR Light Metals Technologies, Austrian Institute of Technology, Vienna (AT)<br>
Discusses a genetic programming approach to extend a physics-based numerical model to improve the representation of recrystallization processes.<br>
<a href="/blog/resources/2026-09-29-mse-symreg-for-materials-science-and-engineering/20260929_flowrex_mse_darmstadt.pdf" target="_blank">Slides (PDF)</a>
<!--
Predictive models in materials science aim to link processing conditions to microstructure evolution and emergent material properties. A central difficulty is the calibration of model parameters whose physical dependence on processing variables is often unknown. This issue is well documented in earlier work on constitutive and recrystallization modeling, where calibration parameters must be inferred from experimental data. Similar challenges have been addressed in flow-stress modeling using symbolic regression and genetic programming, for example in Kabliman et al. (2019) [2], Haghdadi et al. (2013) [1], and more recently in symbolic regression approaches for plastic deformation modeling [3,4]. In the present work, we compare two complementary strategies to identify functional dependencies between calibration parameters and processing conditions in a physics-based recrystallization model. First, we establish a baseline by fitting the classical model to combined experimental and virtual test data. Second, we extend this framework by replacing the calibration parameters with symbolic expressions learned through genetic programming, following a conceptually similar strategy to previous work in flow-stress and constitutive model discovery [2, 3, 4]. This allows a flexible representation of functional parameter dependencies and improved numerical performance. Although the use of learned symbolic expressions increases computational cost, we observe a good predictive accuracy combined with additional insights into processes during recrystallization compared to fixed-parameter calibration. These results highlight the strong synergy between mechanistic modeling and data-driven symbolic regression in uncovering process–structure relationships relevant for microstructure evolution.
-->

<p>
<div class="row">
    <div class="col-lg-7 col-md-12 text-center">
        <figure class="image-box">
            <img src="/blog/resources/2026-09-29-mse-symreg-for-materials-science-and-engineering/mse_symreg_large.jpeg" id="mse-organizers">
        </figure>
    </div>
</div>
</p>
Minisymposium Organizers: E. Kabliman (Leibniz Institute for Materials Engineering - IWT, Bremen), G. Kronberger (University of Applied Sciences Upper Austria)
</p>
