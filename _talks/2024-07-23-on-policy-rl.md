---
title: "On-policy RL Algorithms"
collection: talks
type: "Tutorial"
permalink: /talks/2024-07-23-on-policy-rl
date: 2024-07-23
---

## Overview.
This article summarises concepts related to on-policy Reinforcement Learning (RL) algorithms. Specifically the focus is on looking at the optimisation objectives, on-policy distributions and ccompare between different RL task settings. 

The interaction between a RL agent and its environment is formulated using the formal Markov Decision Process (MDP) framework, where the underlying task could be either episodic (naturally broken down into identifiable episodes) or continuing (goes on continuall over the lifetime of the agent). 

**Notation**: An MDP is defined as a tuple $ (S, A, P, r) $, where, $ S $ is a finite set of states, $ A $ is a finite set of actions, $ P: S \times A \times S \rightarrow [0, 1] $ is the state transition probability function, where $ P(s' | s, a) $ denotes the probability of transitioning to state $ s' $ from state $ s $ after taking action $ a $, and $ R: S \times A \rightarrow \mathbb{R} $ is the reward function, where $ r(s, a) $ gives the immediate reward received after taking action $a$ in state $ s $.

A policy $ \pi $ is a mapping from states to a probability distribution over actions: $ \pi: S \times A \rightarrow [0, 1] $, where $ \pi(a|s) $ denotes the probability of taking action $ a $ when in state $ s $.

#### Our goal is to use an optimisation objetive to learn the optimal policy $ \pi^{\star}(a|s) $.

We can design the objective by considering,
- $ M_{\pi}(s) $, a metric which estimates the expected future reward of a state $s$, following the policy $\pi$.
- $ d^{\pi}(s) $, a probability distribution over $S$ based on the proportion of time spent in each state following the policy $ \pi $. 

By maximizing the weighted average of $ M_{\pi}(s) $ with each state weighted by $ \mu(s) $, we can obtain an optimisation objectcive:

$$ 
J(\pi) \doteq \sum_{s \in S} d^{\pi}(s) M_{\pi}(s) .
$$

## Episodic Tasks

In episodic tasks $ d^{\pi}(s) $ is the on-policy distribution and $ v_{\pi}(s) =  \mathbb{E}_{s_{t}, a_{t} \sim\pi_{\theta}}[\sum_{t=0}^{t-1} r_{t}(s_{t},a_{t})] $ is the value-function, which represents the expected return when starting in $s$ and following $ \pi $.

$$ 
J(\pi) \doteq \sum_{s \in S} d^{\pi}(s) v_{\pi}(s). 
$$

$d^{\pi}(s)$ can be calculated using the initial state distribution $h(s)$ and $ \eta(s) $ the number of time steps spent, on average, in state $s$ in a single episode.

$$ 
d^{\pi}(s) = \frac{\eta(s)}{\sum_{s'} \eta(s')},
$$

where, 

$$ 
 \eta(s) = h(s) + \sum_{\bar{s}} \eta(\bar{s}) \sum_{a} \pi (a|\bar{s})P(s|\bar{s},a).

$$

## Continuing Tasks: Average Reward $(r_{\pi}(s))$ Setting 

In the average reward setting, $M_{\pi}(s)$ represents the average one-step reward received by the agent following $\pi$, where $r_{\pi}(s) = \sum_{a \in A} \pi(a|s)r(s, a)$. 

$$ 
J(\pi) \doteq \sum_{s \in S} d^{\pi}(s) r_{\pi}(s). 
$$

In continuing tasks $d^{\pi}(s)$ is the stationary distribution over the states.

$$ 
d^{\pi}(s) = \lim_{t\to\infty} P(s_{t}=s|\pi).
$$


## Continuing Tasks: Discounted $(\gamma)$ Setting 

In the discounted setting $\gamma \in [0,1] $ is introduced to discount the future rewards. Depending on the value of $\gamma$, the agent could be either myopic or farsighted. $v^{\gamma}_{\pi}(s) =  =  \mathbb{E}_{s_{t}, a_{t} \sim\pi_{\theta}}[\sum_{t=0}^{t-1} \gamma^{t} r_{t}(s_{t},a_{t})]$ is the value function. 

$$ 
J(\pi) \doteq \sum_{s \in S} d^{\pi}(s) v^{\gamma}_{\pi}(s). 
$$

$$ 
d^{\pi}(s) = (1-\gamma) \sum_{t=0}^{\infty} \gamma^{t}P(s_{t}=s|\pi).
$$

### References

[1] Sutton, R. S. and Barto, A. G., 2018. Reinforcement Learning: An Introduction. MIT Press. 3, 4, 23, 28, 33, 46, 47, 68, 85.

[2] Naik, A., Shariff, R., et al., Discounted Reinforcement Learning Is Not an Opti- mization Problem, arXiv:1910.02140, 2019. doi:https://doi.org/10.48550/arXiv.1910. 02140. 46, 47.
