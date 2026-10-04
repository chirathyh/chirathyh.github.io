---
title: "Open-source research systems"
shortTitle: "Open-source systems"
subtitle: "Reusable infrastructure for simulation and sequential decision-making"
summary: "A set of public research systems for virtual Type 1 Diabetes experiments, reinforcement-learning benchmarks and interactive analysis."
secondary: "GluCoEnv, RL4T1D and CAPSML make physiological simulation, algorithm comparison and result inspection available beyond a single paper implementation."
featured: true
order: 3
status: "public"
tags:
  - "Open Source"
  - "PyTorch"
  - "Simulation"
  - "Offline RL"
  - "Benchmarking"
thumbnail: "../../assets/images/glucoenv.png"
thumbnailAlt: "GluCoEnv wordmark with a stylized glucose trace"
links:
  demo: "https://capsml.com/"
  glucoenv: "https://github.com/RL4H/GluCoEnv"
  rl4t1d: "https://github.com/RL4H/RL4T1D"
technicalHighlights:
  - "Vectorized PyTorch environments for virtual Type 1 Diabetes subjects"
  - "Online and offline RL experiment infrastructure"
  - "Configurable scenarios, sensors, pumps and benchmark controllers"
  - "Interactive glucose-control simulation and result inspection through CAPSML"
---

## GluCoEnv

GluCoEnv is a PyTorch-based physiological simulation environment designed for reinforcement-learning experiments in glucose control. It supports vectorized virtual subjects, configurable meal scenarios, glucose sensors, insulin pumps, benchmark controllers and reproducible settings.

## RL4T1D

RL4T1D organizes agents, environments, clinical comparators, metrics and experiment configuration into a reusable research codebase. It includes infrastructure for both online and offline reinforcement-learning studies.

## CAPSML

[CAPSML](https://capsml.com/) makes automated insulin-delivery research accessible through an interactive simulation interface. Users can explore virtual Type 1 Diabetes scenarios, compare dosing strategies, and inspect simulated glucose and insulin-delivery trajectories.

The platform supports research and education through in-silico experiments; it is not a clinical decision-support system.
