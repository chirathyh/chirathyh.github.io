export const siteConfig = {
  name: 'Chirath Hettiarachchi',
  displayName: 'Chirath Hettiarachchi, PhD',
  title: 'Chirath Hettiarachchi — Machine Learning Researcher',
  description:
    'Research in reinforcement learning, scientific machine learning, computational neuroscience and adaptive biomedical systems.',
  url: 'https://chirathyh.github.io',
  email: 'chirathyh@hotmail.com',
  github: 'https://github.com/chirathyh',
  scholar: 'https://scholar.google.com/citations?user=gvLLPs8AAAAJ&hl=en',
  orcid: 'https://orcid.org/0000-0002-7702-0718',
  linkedin: 'https://www.linkedin.com/in/chirathyh/',
  cvPath: '/files/Industry-CV-2026.pdf',
  cvAvailable: true,
  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'Papers', href: '/publications/' },
    { label: 'CV', href: '/cv/' },
    { label: 'GitHub', href: 'https://github.com/chirathyh', external: true },
    { label: 'Contact', href: '/#contact' },
  ],
  researchTags: [
    'Reinforcement Learning',
    'Scientific ML',
    'Dynamical Systems',
    'Computational Neuroscience',
  ],
  neurips: {
    label: 'NeurIPS 2026 · Sydney',
    status: 'Workshop presenter',
    paperTitle: 'Workshop paper title to be confirmed',
    summary:
      'A workshop presentation on machine-learning methods for closed-loop biomedical systems, connecting scientific simulation, sequential decision-making and reproducible research software to study adaptive interventions before clinical translation.',
    paperUrl: null,
    posterUrl: null,
    codeUrl: 'https://github.com/chirathyh/neurostimenv',
  },
} as const;

export const capabilities = [
  {
    title: 'Sequential decision-making',
    body: 'Reinforcement learning, offline RL, contextual and multi-armed bandits, adaptive control and POMDP formulations.',
  },
  {
    title: 'Scientific machine learning',
    body: 'Generative modelling, flow matching, learned dynamics, surrogate modelling and time-series ML.',
  },
  {
    title: 'Computational modelling',
    body: 'Biophysical neural circuits, physiological simulation, EEG and signal processing, and dynamical systems.',
  },
  {
    title: 'Research engineering',
    body: 'PyTorch, NEURON, LFPy, SimNIBS, MPI/HPC, experiment infrastructure and reproducible open-source research.',
  },
] as const;
