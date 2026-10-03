---
title: "NeuroStimEnv"
shortTitle: "NeuroStimEnv"
subtitle: "Closed-loop brain stimulation as a computational control problem"
summary: "NeuroStimEnv is an open-source simulation framework for combining biophysical neural circuits, simulated EEG, transcranial stimulation and reinforcement learning for treatment discovery."
secondary: "It integrates NEURON, LFPy and SimNIBS and supports reinforcement-learning formulations in which neural activity provides observations and stimulation parameters define treatment actions."
featured: true
order: 1
status: "public"
tags:
  - "Reinforcement Learning"
  - "Computational Neuroscience"
  - "EEG"
  - "NEURON"
  - "SimNIBS"
  - "LFPy"
  - "HPC / MPI"
thumbnail: "../../assets/images/neurostimenv-framework.png"
thumbnailAlt: "NeuroStimEnv framework linking a biophysical neural circuit, simulated EEG, transcranial stimulation and a learning agent"
links:
  paper: "https://doi.org/10.21203/rs.3.rs-7958165/v1"
  code: "https://github.com/chirathyh/neurostimenv"
  neurips: "/neurips-2026/"
technicalHighlights:
  - "Biophysically detailed depression and healthy cortical microcircuits"
  - "A 1,000-neuron case study evaluated at 0.025 ms temporal resolution"
  - "MPI/HPC experiments reported using 624 CPU processes"
  - "Modular interfaces for neural circuits, observations, stimulation actions and learning algorithms"
---

## Problem

Closed-loop transcranial stimulation can be treated as a sequential control problem: infer a circuit state from neural activity, choose stimulation parameters, and observe how the simulated dynamics change. Studying that loop requires software that can connect neural-circuit simulation, signal generation, stimulation modelling and learning algorithms without presenting simulation as clinical evidence.

## System

NeuroStimEnv provides that integration layer. **NEURON** simulates morphologically and biophysically detailed neural circuits; **LFPy** derives extracellular and EEG-like measurements; **SimNIBS** supplies stimulation-field parameters; and learning agents use processed neural activity as observations and stimulation settings as actions.

The repository includes simpler local models for development and a detailed human cortical layer 2/3 microcircuit for large-scale experiments. Configuration is managed as reproducible experiment data, and MPI execution supports parallel rollouts on HPC systems.

## Technical contribution

The framework turns a multi-tool computational-neuroscience workflow into an environment for reinforcement learning and bandit experiments. It exposes the main scientific choices—circuit model, temporal resolution, observation window, EEG processing, stimulation type, montage, action set and reward formulation—rather than hiding them behind a fixed benchmark.

## Computational scale

The public preprint reports a depression case study with approximately **1,000 neurons**, a **0.025 ms** simulation timestep and an HPC run using **624 CPU processes**. These numbers describe computational experiments, not participant counts or clinical validation.

## Results / demonstration

The released experiments demonstrate that the complete loop can be executed: simulated stimulation affects a neural microcircuit, LFPy-derived signals are processed into observations, and a learning algorithm selects among stimulation settings. The work is a simulation study and a research-software contribution; it does not claim clinical treatment efficacy.

## Open-source resources

- Public code, environment configurations and examples are available in the [NeuroStimEnv repository](https://github.com/chirathyh/neurostimenv).
- The repository documents local toy circuits and the HPC-oriented depression microcircuit.
- Setup examples cover NEURON model compilation, MPI execution and SimNIBS preprocessing.

## Paper

The public preprint is [“Simulating closed-loop transcranial brain stimulation for reinforcement learning-based treatment discovery”](https://doi.org/10.21203/rs.3.rs-7958165/v1). It is explicitly presented as a simulation and evaluation study.
