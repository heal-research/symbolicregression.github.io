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
        <h2 class="section-header">What is Symbolic Regression (SymReg)?</h2>
        <div class=row>
            <div class="col-lg-5 col-md-12">
                <p class="text-justify">
                    Symbolic regression is a data-based modelling method where the goal is to find a formula that describes given data. Similarly to other regression methods, the model allows to predict one or multiple variables given known values of the input variables. However, in symbolic regression one does not merely fit parameters to a fixed model structure. Instead, the goal is to identify the necessary model structure as well as optimal model parameters for the given dataset.
                    <br/>
                    The term symbolic regression was coined by John Koza in the context of genetic programming. In later developments, different algorithm variants for symbolic regression have been proposed, many of which are based on evolutionary algorithms.<br />
                    When using genetic programming, the user specifies which operators and basic functions are allowed to be used in the model. The algorithm starts with a set of random expressions. Through selection and random recombination the algorithm evolves a well-fitting model.
                </p>
            </div>
            <div class="col-lg-7 col-md-12 text-center">
                <figure class="image-box">
                    <img src="/assets/img/symreg-explaination.png" id="symreg-explaination">
                </figure>
            </div>
        </div>

        <div class=row>
            <div class="col-lg-7 col-md-12 text-center">
                <figure class="image-box">
                    <img src="/assets/img/symreg-grammar.png" id="symreg-explaination">
                </figure>
            </div>
            <div class="col-lg-5 col-md-12">
                <p class="text-justify">
                    A drawback of evolutionary algorithms is that they are non-deterministic. For industrial applications we need deterministic and efficient parameter-less solvers for symbolic regression problems. In the Josef Ressel Centre we develop and implement such algorithms.
                    <br />
                    We take up the idea of “Prioritized Grammar Enumeration” (Worm and Chiu, 2013) which uses dynamic programming to create symbolic regression models. The algorithm uses a formal grammar as input which describes the structure of the symbolic regression models and is then able to produce all models for this structure up to a certain maximum size. The approach has potentially exponential asymptotic runtime for increasing formula sizes or number of variables. Therefore, heuristics are necessary to guide the search process to potentially more interesting parts of the search tree.
                </p>
            </div>
        </div>
    </div>

    <section id="projects" class="bg-light-grey">
        <div class=container>
            <h2 class="section-header">Projects</h2>
            <div class="row">
                <div class="col-md-12">
                    <h3 class="section-subheading"><a href="">ProMetHEus - Production and processing of metals for high-performance, energy efficiency, environmental protection and sustainability</a></h3>
                    <p class="text-justify">
                    The project, lead by LKR Light Metal Competence Center Ranshofen, Austrian Institute of Technology (AIT), supports companies in the materials processing industries to produce sustainably and efficiently. We develop symbolic regression algorithms and models for new process routes.
                    Project duration: 2024 - ongoing<br />
		    <a href=https://www.ait.ac.at/en/research-topics/forming-technologies/projects/prometheus>Project details</a><br />
                    <br /><br />
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h3 class="section-subheading"><a href="">TransMet - Fundamentals and tools for engineering of high quality recycled and CO2 reduced strip steels</a></h3>
                    <p class="text-justify">
                    Project duration from 2021-04-01 to 2024-03-31<br />
                    <br /><br />
                    In this project which is part of the COMET Center MCL (Material Center Leoben) we work on algorithms for the adaptation of material models. Focus of our activities are the combination of physics-based models with purely data-driven models.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h3 class="section-subheading"><a href="">Josef Ressel Center for Symbolic Regression</a></h3>
                    <p class="text-justify">
                    Project duration from 2018-01-01 to 2022-12-31<br />
                    Within the Josef Ressel Centre for Symbolic Regression we developed new symbolic regression algorithms as well as a methodological and technical framework for incremental model adaptation for handling concept drift. We used symbolic regression for modelling components of powertrains, friction systems, and plastics recycling plants.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section id="contact" class="bg-brand-secondary">
        <div class="container">
            <div class="row">
                <h2 class="section-header">Contact</h2>
                <div class="col-md-12">
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
                                <td>Phone:</td>
                                <td>+43 50804 22320</td>
                            </tr>
                            <tr>
                                <td>Mail:</td>
                                <td>gabriel.kronberger@fh-hagenberg.at</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

    <section id="links">
        <div class="container">
            <h2 class="section-header">Useful links</h2>
            <div class="row">

            </div>
        </div>
    </section>
</section>
