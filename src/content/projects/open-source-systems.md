---
title: "Open-source research systems"
shortTitle: "Open-source systems"
subtitle: "Reusable infrastructure for simulation and sequential decision-making"
summary: "A set of public research systems for virtual Type 1 Diabetes experiments, reinforcement-learning benchmarks and interactive analysis."
secondary: "GluCoEnv, RL4T1D and CAPSML Assistant make physiological simulation, algorithm comparison and result inspection available beyond a single paper implementation."
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
  - "Interactive result inspection through CAPSML Assistant"
---

## GluCoEnv

GluCoEnv is a PyTorch-based physiological simulation environment designed for reinforcement-learning experiments in glucose control. It supports vectorized virtual subjects, configurable meal scenarios, glucose sensors, insulin pumps, benchmark controllers and reproducible settings.

## RL4T1D

RL4T1D organizes agents, environments, clinical comparators, metrics and experiment configuration into a reusable research codebase. It includes infrastructure for both online and offline reinforcement-learning studies.

## CAPSML Assistant

CAPSML Assistant makes selected virtual experiments inspectable through the public CAPSML interface. It is a research and education platform for simulation—not a clinical decision-support system—and this site does not display unverified usage statistics.
