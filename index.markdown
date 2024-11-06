---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
lang: en
permalink: /
description: SymReg Homepage
---

<section id="info">
    <div class="container">
        <h2 class="section-header">What is Symbolic Regression?</h2>
        <div class=row>
            <div class="col-lg-5 col-md-12">
                <p class="text-justify">
                    Symbolic regression is a supervised learning task where the goal is to find equations that fit data (equation learning). Symbolic regression models allow to predict one or multiple variables from known variables. In contrast to other regression methods, the task is not only to identify fitting parameter values for a fixed equation structure, but instead to find the complete equation including fitting parameter values.
                    <br/>
                    Symbolic regression was coined by <a href="https://genetic-programming.org/">John Koza</a> in the context of <a href="https://geneticprogramming.com/">genetic programming</a> (GP). GP is an evolutionary algorithm for symbolic regression. It manages a set of equations (population) and recombines parts from well-fitting equations to produce new equations. This processes is repeated over many generations to produce better and better solutions starting from a set of random equations.
                </p>
            </div>
            <div class="col-lg-7 col-md-12 text-center">
                <figure class="image-box">
                    <img src="/assets/img/symreg-explanation.png" id="symreg-example">
                </figure>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-7 col-md-12 text-center">
                <figure class="image-box">
                    <img src="/assets/img/gp-cycle.svg" id="gp-cycle">
                </figure>
            </div>
            <div class="col-lg-5 col-md-12">
                <p class="text-justify">
                    Many different algorithms for symbolic regression have been described as alternatives to GP. One approach that can be useful to find short equations is systematic enumeration of the set of equations as in <a href="https://arxiv.org/abs/2109.13895">Grammar Enumeration</a> or <a href="https://arxiv.org/abs/2211.11461">Exhaustive Symbolic Regression</a>.
                </p>
            </div>
        </div>
    </div>
</section>

<section id="projects" class="bg-light-grey">
    <div class="container">
        <h2 class="section-header">Our projects</h2>
        <div class="row">
            <div class="col-md-12">
                <h3 class="section-subheading">AstroSymReg - Accelerating the Physical Sciences with Symbolic Regression</h3>
                <p class="text-justify">
                We develop and apply symbolic regression algorithms to create models for astrophysics, such as emulators for the <a href="https://arxiv.org/abs/2311.15865">linear</a> and the <a href="https://arxiv.org/abs/2402.17492">nonlinear</a> mass power spectrum.<br />
                Project duration: 2024 - ongoing<br />
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h3 class="section-subheading"><a href="https://www.ait.ac.at/en/research-topics/forming-technologies/projects/prometheus">ProMetHEus - Production and processing of metals for high-performance, energy efficiency, environmental protection and sustainability</a></h3>
                <p class="text-justify">
                The project, lead by <a href="https://www.ait.ac.at/en/about-the-ait/center/center-for-transport-technologies/lkr-leichtmetallkompetenzzentrum-ranshofen">LKR Light Metal Competence Center Ranshofen, Austrian Institute of Technology (AIT)</a>, supports companies in the materials processing industries to produce sustainably and efficiently. We develop symbolic regression algorithms and models for new process routes.<br />
                Project duration: 2024 - ongoing<br />
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h3 class="section-subheading"><a href="https://www.mcl.at/en/funding-programs/comet/areas/#c1467">TransMet - Fundamentals and tools for engineering of high quality recycled and CO2 reduced strip steels</a></h3>
                <p class="text-justify">
                We develop algorithms for the adaptation of material models in this project which is lead by the <a href="https://mcl.at">Materials Center Leoben</a>. Focus of our activities are the combination of physics-based models with data-driven models using symbolic regression.<br />
                Project duration: 2021 - 2024<br />
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h3 class="section-subheading"><a href="https://www.cdg.ac.at/en/research-units/labor/symbolic-regression">Josef Ressel Center for Symbolic Regression</a></h3>
                <p class="text-justify">
                Within the Josef Ressel Centre for Symbolic Regression we developed new symbolic regression algorithms as well as a methodological and technical framework for incremental model adaptation for handling concept drift. We used symbolic regression for modelling components of powertrains, friction systems, and plastics recycling plants. <br />
                Project duration: 2018 - 2022<br/>
                </p>
            </div>
        </div>
	        <div class="row">
            <div class="col-md-12">
                <h3 class="section-subheading"><a href="https://heal.heuristiclab.com/projects/hopl"></a>Heuristic Optimization in Production and Logistics (HOPL)</h3>
                <p class="text-justify">In this COMET project supported by the Austrian Research Promotion Agency we developed novel algorithms that use additional optimization potential by integrative modeling and optimizing of interrelated logistics and production processes. Many existing problem models are abstracted and isolated formulations of real world situations in order to make existing optimization techniques applicable. Consequently, the optimized solutions are often hard to transfer into the real world as the inherent complexity and volatility of the problem situations have been lost.
One of the goals was using symbolic regression to produce models for design and dimensioning of friction systems.
		  <br />
                Project duration: 2014 - 2018<br />
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h3 class="section-subheading">Heureka! - Josef Ressel Center for Heuristic Optimization</h3>
                <p class="text-justify">
		  A part of this project was development of improved symbolic regression methods and application to real-world tasks.
		  In this project we developed a new approach to the optimization of parameters of symbolic regression models and implemented
		  several improvements in our open-source software system HeuristicLab.
		  We used symbolic regression algorithms for example for modeling blast furnace processes as well as temper-rolling processes together with our partner voestalpine Stahl in Linz.
		  Supported by the Austrian Research Promotion Agency (FFG).<br />
                Project duration: 2008 - 2013<br />
                </p>
            </div>
        </div>
	<!-- template:
        <div class="row">
            <div class="col-md-12">
                <h3 class="section-subheading"><a href="XXX"></a>XXX</h3>
                <p class="text-justify">
		  XXX<br />
                Project duration: XXXX - XXXX<br />
                </p>
            </div>
        </div>
-->
    </div>
</section>
<section id="links">
    <div class="container">
        <h2 class="section-header">Links</h2>
        <div class="row">
            <div class="col-md-4">
                <a href="https://www.genetic-programming.org" target="_blank">https://www.genetic-programming.org</a>
            </div>
            <div class="col-md-8">Genetic programming page by John Koza</div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <a href="https://www.geneticprogramming.com" target="_blank">https://www.geneticprogramming.com</a>
            </div>
            <div class="col-md-8">More recent page on genetic programming by the GP community</div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <a href="https://heal.heuristiclab.com" target="_blank">https://heal.heuristiclab.com</a>
            </div>
            <div class="col-md-8">Research Group - Heuristic and Evolutionary Algorithms Laboratory</div>
        </div>
    </div>
</section>
<section id="contact" class="bg-brand-secondary">
    <div class="container">
        <h2 class="section-header">Contact</h2>
        <div class="row d-flex">
            <div class="col-lg-6">
                <div class="contact-container">
                    <h4>FH-Prof. DI Dr. Gabriel Kronberger</h4>
                    <table class="contact-table">
                        <tbody>
                            <tr>
                                <td>Professor for Business Intelligence and Data Engineering</td>
                            </tr>
                            <tr>
                                <td>Heuristic and Evolutionary Algorithms Laboratory (HEAL)</td>
                            </tr>
                            <tr>
                                <td>University of Applied Sciences Upper Austria (FH OÖ)</td>
                            </tr>
                            <tr>
                                <td>Phone: +43 80484 22320</td>
                            </tr>
                            <tr>
                                <td>Mail: <a href="mailto:gabriel.kronberger@fh-hagenberg.at">gabriel.kronberger@fh-hagenberg.at</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-lg-6 d-none d-md-block">
                <div id="map-container">
                    <div id="map"></div>
                </div>
            </div>
        </div>
    </div>
</section>
