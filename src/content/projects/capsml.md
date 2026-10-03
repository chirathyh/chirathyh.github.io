---
title: "CAPSML / G2P2C"
shortTitle: "CAPSML / G2P2C"
subtitle: "Towards fully closed-loop insulin delivery"
summary: "A research ecosystem for learning adaptive insulin-dosing strategies that reduce dependence on manual meal announcements and carbohydrate estimation."
secondary: "G2P2C combines reinforcement-learning policy optimization with glucose dynamics modelling and short-horizon planning. CAPSML exposes the research through an interactive simulation platform, while GluCoEnv and RL4T1D provide reusable open-source research infrastructure."
featured: true
order: 2
status: "public"
tags:
  - "Reinforcement Learning"
  - "Sequential Decision-Making"
  - "Control"
  - "POMDPs"
  - "PyTorch"
  - "Biomedical AI"
thumbnail: "../../assets/images/capsml-glucose.png"
thumbnailAlt: "CAPSML simulation plot showing glucose trajectory, meal disturbances and insulin delivery over time"
homepageVisual:
  image: "../../assets/images/glucose-demo-poster.png"
  alt: "Glucose-control simulation showing a blue glucose trace, red meal markers and green insulin-delivery bars over a day."
  caption: "An illustrative in-silico glucose-control experiment. Blue shows sensed glucose, red marks meals, and green shows insulin delivery. Use the playback controls to pause or replay the animation. These are simulated signals, not patient data."
  video:
    webm: "/media/glucose-control.webm"
    mp4: "/media/glucose-control.mp4"
links:
  paper: "https://doi.org/10.1016/j.bspc.2023.105839"
  demo: "https://capsml.com/"
  g2p2c: "https://github.com/RL4H/G2P2C"
  glucoenv: "https://github.com/RL4H/GluCoEnv"
  rl4t1d: "https://github.com/RL4H/RL4T1D"
technicalHighlights:
  - "A POMDP formulation for insulin dosing without meal announcements"
  - "Policy optimization augmented with learned glucose dynamics and short-horizon planning"
  - "Interactive inspection of virtual glucose-control experiments in CAPSML"
  - "Reusable PyTorch simulation and RL research infrastructure"
---

## Problem

Many automated insulin-delivery systems remain hybrid closed-loop systems: people must announce meals and estimate carbohydrates. This project asks how sequential decision-making methods can reduce that manual burden while accounting for delayed dynamics, partial observability, individual variability and safety-critical failure modes.

## System

The work is an ecosystem rather than a single model:

- **G2P2C** is a reinforcement-learning algorithm built around policy optimization, a learned glucose-dynamics model and a planning phase.
- **CAPSML** is an interactive research and education interface for running virtual Type 1 Diabetes scenarios and inspecting glucose and insulin trajectories.
- **GluCoEnv** provides vectorized, PyTorch-based in-silico subjects and benchmark controllers.
- **RL4T1D** provides a cleaner research codebase for agents, environments, experiments, logging and benchmarking.

## Technical contribution

G2P2C augments a learned dosing policy with auxiliary model-learning and planning phases. The model-learning phase estimates short-term glucose dynamics; the planning phase uses that model to refine actions over a short horizon. The wider software stack separates algorithms, virtual subjects, experimental protocols, metrics and visualization so that methods can be compared reproducibly.

## Results / demonstration

The published evaluation compares strategies across simulated Type 1 Diabetes cohorts. All reported results are **in-silico**; they should not be interpreted as clinical validation or autonomous deployment evidence.

## Open-source resources

- [CAPSML](https://capsml.com/) — interactive virtual glucose-control platform.
- [G2P2C](https://github.com/RL4H/G2P2C) — original algorithms and experiments.
- [GluCoEnv](https://github.com/RL4H/GluCoEnv) — GPU-oriented physiological simulation environment.
- [RL4T1D](https://github.com/RL4H/RL4T1D) — modular research infrastructure for online and offline RL.

## Paper

[“G2P2C — A modular reinforcement learning algorithm for glucose control by glucose prediction and planning in Type 1 Diabetes”](https://doi.org/10.1016/j.bspc.2023.105839) was published in *Biomedical Signal Processing and Control* in 2024.
