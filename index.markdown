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
            <h2 class="section-header">SymReg related projects of our group.</h2>
            <div class="row">
                <div class="col-md-12">
                    <h3 class="section-subheading"><a href="">TransMet - Fundamentals and tools for engineering of high quality recycled and CO2 reduced strip steels</a></h3>
                    <p class="text-justify">
                    Project duration from 2021-04-01 to 2024-03-31<br />
                    Funded by: FFG<br />
                    Partners: voestalpine Stahl GmbH University of Vienna Materials Center Leoben Forschung GmbH Montanuniversität Leoben
                    <br /><br />
                    In this project which is part of the COMET Center MCL (Material Center Leoben) we work on algorithms for the adaptation of material models. Focus of our activities are the combination of physics-based models with purely data-driven models.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h3 class="section-subheading"><a href="">FlashCheck - Electric Arc Detection in DC Circuits</a></h3>
                    <p class="text-justify">
                    Project duration from 2017-02-01 to 2020-01-31<br />
                    Funded by: FFG<br /><br />
                    Electrical arcing is a potential threat in photovoltaic systems because of high voltages and currents. This particularly applies to serial arcs occurring in systems where cables are defective or have poor electrical connections (aging of cables and components, environmental influences or animal bite marks on cables). The consequence is an increased risk of fire for nearby components due to the fact, that arcing is a massive energy discharge causing very high temperature.
                    <br />
                    With a soaring number of installed photovoltaic systems and the aging of the system components including the cabling, more and more combustions will happen being caused by electrical arcing based on an exponentially increasing failure risk.
                    <br />
                    On the market there are several different solutions available to detect electrical arcing in photovoltaic systems. All of these protective devices are specific solutions being optimized for a certain range of components like inverters from the main producers only. Basically all currently available protective devices are designed for a limited number of system configurations. A general solution to detect electrical arcing in DC micro-grids (such as hybrid systems that include photovoltaic modules and battery storages) does not yet exist.
                    <br />
                    Because of no available general solution for arc detection, this project will deal with the interdependences between electrical arcing and the inverter electronics, different battery solutions to buffer electrical energy, as well as other influencing factors like the cable length of the electrical wires. The result will be a description of the common characteristics of electrical arcs in different system configurations and a general concept to detect arcing. However, any reliable arc detection must work independently of the DC micro-grid specific design and its environmental influences.
                    <br />
                    A general and reliable concept to detect electrical arcing could contribute essentially to the safety of DC micro-grids.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h3 class="section-subheading"><a href="">Josef Ressel Center for Symbolic Regression</a></h3>
                    <p class="text-justify">
                    Project duration from 2018-01-01 to 2022-12-31<br />
                    Funded by: CDG<br />
                    Partners: Miba Frictec GmbH AVL List GmbH EREMA Engineering Recycling Maschinen u Anlagen GmbH<br /><br />
                    Within the Josef Ressel Centre for Symbolic Regression we plan to develop new symbolic regression algorithms as well as a methodological and technical framework for incremental model adaptation for handling concept drift. We will apply the newly developed algorithms and frameworks for modelling powertrains and friction systems.
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
                                <td>Position:</td>
                                <td>Professor</td>
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
