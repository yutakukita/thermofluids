# Summer Undergraduate Research Projects (2026): Thermofluids
**Department of Engineering, King's College London**

**Academic Advisor:** Dr Yutaku Kita (yutaku.kita@kcl.ac.uk)  

---

## Introduction & Context
This document outlines undergraduate summer research projects tailored for Engineering students at King's College London. The projects span data analytics, literature synthesis, experimental mechatronics, pedagogical design, and computational fluid dynamics (CFD). Each outline includes the target year group, a project overview, core learning objectives, and a ready-to-use initial prompt to onboard the student.

---

## Project 1: Data-Driven Drop Impact Regime Mapping
### Metadata
* **Target Level:** Year 2 Undergraduate (Engineering)
* **Core Disciplines:** Fluid Mechanics, Thermodynamics, Data Analytics & Visualisation

### Project Overview
When a liquid droplet impinges upon a heated solid surface, its hydrodynamic and thermal behaviours—ranging from complete rebound and splashing to contact boiling and the Leidenfrost state—are dictated by a complex interplay of kinetic, surface, and thermal energies. This project tasks the student with mining existing academic literature to compile an empirical database of droplet impact outcomes. By normalising disparate data using the dimensionless Weber number ($We = \frac{\rho v^2 D}{\sigma}$) and surface temperature ($T$), the student will construct a comprehensive, unified "regime map" ($We-T$). This map will serve to identify transitional boundaries and evaluate discrepancies across historical and modern literature.

<figure>
  <img src="https://journals.aps.org/prl/article/10.1103/PhysRevLett.108.036101/deliverable/fc8bb6de-69ea-4236-8262-f637c78df40a" alt="Tran's droplet impact regime map image">
  <figcaption><a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.108.036101" target="_blank">Tran's droplet impact regime map</a></figcaption>
</figure>

### Key Learning Outcomes & Deliverables
* Deep understanding of relevant thermophysical properties (e.g., surface tension), inertial forces, and boiling regimes.
* Proficiency in data extraction, normalisation, and handling conflicting multi-source datasets.
* Advanced data visualisation skills using Python (Matplotlib).
* **Deliverable:** A unified digital $We-T$ regime map with a categorised repository of source literature data.

### Onboarding Prompt for the Student
> **Welcome to the Summer Research Team!**
> 
> Your project is to develop a unified **Drop Impact Regime Map ($We-T$)** based on data compiled from historical and recent literature. To get started, please complete the following tasks over your first two weeks:
>  
> 1. **Literature Review:** Read the following 3 foundational papers: 
>     - Bernardin & Mudawar (1997): https://www.sciencedirect.com/science/article/pii/0017931096001196
>     - Ventola (2015): https://www.sciencedirect.com/science/article/pii/S0017931015000927
>     - Tran et al. (2012): https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.108.036101
> 
>     Focus heavily on how different authors define the physical boundaries between 'rebound', 'splashing', 'transition boiling', and the 'Leidenfrost state'.
> 2. **Data Architecture Setup:** You will be added to our repository where we have built the database. Learn the database's structure and how each literature dataset is stored in `.json` and `.py` files. 
> 3. **Digitisation:** Develop a Python script to digitise (extract values from) the graphs in literature. This should be able to read maps ($We$-$T$, $U$-$T$, etc., depending on the author) in an image format (e.g., PNG, JPG), extract each data point (i.e., Impact Outcome Category, $We$, $T$) and store them in a `.json` file.
> 4. **First Milestone:** Process the [Ventola (2015)](https://www.sciencedirect.com/science/article/pii/S0017931015000927) impact map to begin with, and check whether you can reproduce the map on your Python platform.

---

## Project 2: Interactive Heat Transfer Teaching Tool
### Metadata
* **Target Level:** Year 2 Undergraduate (Engineering)
* **Core Disciplines:** CAD Design, Instrumentation, Pedagogy, GUI Programming (Python/MATLAB)

### Project Overview
Abstract heat transfer theories can be challenging for undergraduate students to intuitively grasp during standard lectures. This project bridges engineering design with pedagogy by tasking the student to develop a low-cost, portable desktop laboratory demonstration rig for the Year 2 Heat and Mass Transfer module. The student will design a physical setup (e.g., a heated aluminium fin, a transient cooling sphere, visualisation using thermochromic paint, mini heat exchangers, etc.) instrumented with low-cost equipment and build a real-time graphical user interface (GUI). The GUI will overlay real-time experimental data directly onto live-computed analytical solutions (e.g., lumped capacitance or analytical fin equations) to demonstrate theoretical alignment and experimental error.

### Key Learning Outcomes & Deliverables
* Mechanical design and prototyping using Computer-Aided Design (CAD) for thermal environments.
* Parts cost estimation.
* Basic embedded programming and serial data communication.
* Software engineering for user interfaces and real-time numerical computation.
* **Deliverable:** The design of a functioning, portable desktop demonstration rig accompanied by a live-plotting Python/MATLAB GUI and a 1-page student lab instruction sheet.

### Onboarding Prompt for the Student
> **Welcome to the Summer Research Team!**
>  
> Your project sits at a unique intersection of engineering design, software development, and education. You will design and prototype a portable **Desktop Transient Heat Conduction Demo Rig** to be used by future Year 2 King's students.
>  
> Your initial tasks for the next two weeks are:
> 1. **Identify a Focused Topic:** First, determine which topic you would like to develop a demonstration for: transient conduction, extended surfaces, convection, heat exchangers, radiation, phase change, etc.
> 2. **Design Sketch:** Sketch the experimental design, identifying what you want to do in the demo, temperature ranges, and necessary measurements.
> 3. **CAD Concept:** Assuming we will heat a small metal cylinder with a simple PTC heating element and let it cool via natural convection, create a preliminary CAD model (using SolidWorks/Fusion360) of a safe, heat-insulated, and physically robust enclosure.
> 4. **Data Logging Prototype:** Write a simple Python script using `matplotlib` (or a MATLAB script) that opens a serial communication port, reads a stream of mock numbers (simulating temperature), and updates a live scrolling graph in real-time.
> 5. **First Milestone:** In our Week 2 meeting, you will present your initial concepts.

---

## Project 3: Commissioning a Thermal Fluids Experimental Rig
### Metadata
* **Target Level:** Year 1 Undergraduate (Engineering)
* **Core Disciplines:** Mechatronics, Instrumentation, Electrical Wiring, Lab Safety & Control Loops

### Project Overview
Translating thermofluidic theory into robust physical data requires precise control over experimental boundaries. This highly practical, hands-on project tasks a Year 1 student with assisting in the assembly, wiring, and commissioning of a thermal control subsystem for an active laboratory rig. The student will be responsible for wiring high-power electrical cartridge heaters, integrating temperature sensors (thermocouples or RTDs), establishing signal pathways to an industrial or micro-controller interface, and implementing/tuning a Proportional-Integral-Derivative (PID) loop to maintain stable, isothermal test section conditions.

### Key Learning Outcomes & Deliverables
* Practical knowledge of laboratory electrical safety, fusing, and mechanical relay/SSR integration.
* Hands-on experience with temperature instrumentation and sensor calibration.
* Working knowledge of feedback control systems (PID tuning methods like Ziegler-Nichols).
* **Deliverable:** A fully wired, safe, and calibrated thermal control system with documented wiring schematics and PID tuning response curves.

### Onboarding Prompt for the Student
> **Welcome to the Summer Research Team!**
>  
> Your project is hands-on and vital to our lab's operations: you will be **building and commissioning the thermal control hardware** for a new experimental fluid rig. Your first week will focus entirely on safety, planning, and documentation.
>  
> Please complete the following tasks prior to our next meeting:
> 1. **Component Familiarisation:** Download and thoroughly read the manufacturer datasheets for the specific PID controllers, Solid State Relays (SSRs), and K-type thermocouples provided in the lab (attached to your onboarding email).
> 2. **Schematic Drafting:** Sketch a complete electrical wiring schematic for the heating system. Your diagram must explicitly show power routing, grounding, fuse placements, and the control signalling interface between the sensor, controller, and SSR.
> 3. **First Milestone:** Present your wiring diagram to me in Week 2. Once we complete a thorough safety audit and I formally sign off on your schematic, we will enter the lab to begin physical wiring and assembly.

---

## Project 4: CFD Simulation of Droplet Impingement Dynamics and Thermodynamics
### Metadata
* **Target Level:** Year 2 Undergraduate (Engineering)
* **Core Disciplines:** Computational Fluid Dynamics (CFD), Multiphase Flow (VOF), Transient Conduction

### Project Overview
This project leverages advanced numerical modelling to investigate the extreme local thermal conditions occurring during the microscopic window of time when a liquid droplet impacts a hot surface. Utilising ANSYS Fluent under a strict student license framework, the student will model a multiphase system using the Volume of Fluid (VOF) tracking method. The core research objective is to analyse the instantaneous interface temperature ($T_i$) at the exact millisecond of solid-liquid contact and validate it against the classical analytical solution for the contact of two semi-infinite bodies:
$$T_i = \frac{e_d T_d + e_s T_s}{e_d + e_s}$$
where $e = \sqrt{k \rho c_p}$ represents thermal effusivity. The student will then execute a parametric study by varying the initial impact velocity to determine how dynamic advection, kinetic dissipation, and droplet deformation cause local interface heat transfer characteristics to deviate from pure conduction theory.

### Key Learning Outcomes & Deliverables
* Advanced competencies in multiphase meshing, boundary condition design, and VOF solver setup within ANSYS Fluent.
* Mastery of time-step adaptation and Courant-Friedrichs-Lewy (CFL) stability criteria.
* Experience validating complex numerical simulations against classical analytical thermodynamic solutions.
* **Deliverable:** A validated, high-fidelity 2D Axisymmetric CFD model and a parametric report characterising interface temperature deviations as a function of the Weber number.

### Onboarding Prompt for the Student
>  
> Your project focuses on building a high-fidelity numerical model using **ANSYS Fluent** to study the transient dynamics and thermodynamics of droplet impingement. Because we are operating under an ANSYS Student license, which imposes an element count limitation, you will construct this as a highly refined **2D Axisymmetric** model.
>  
> Please complete the following tasks for our Week 2 meeting:
> 1. **Analytical Baseline:** Calculate the theoretical initial contact interface temperature ($T_i$) using the classical semi-infinite contact equation for a water droplet initialised at $20^\circ\text{C}$ impacting a solid steel substrate held at $120^\circ\text{C}$. Look up the exact thermophysical properties ($\rho$, $k$, $c_p$) to determine their thermal effusivities ($e$).
> 2. **Software Tutorial:** Go through the standard ANSYS Fluent tutorials specifically focused on the **Volume of Fluid (VOF)** multiphase tracking method. Sketch out your proposed 2D computational domain, showing your intended boundary locations (axis, walls, pressure outlets) and your strategy for initialising a patched liquid sphere.
> 3. **First Milestone:** We will meet in two weeks to check your analytical calculation and review your sketched domain mesh strategy for the high-gradient impact zone.