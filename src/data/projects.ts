export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  github: string;
}

// Ordered with the technically strongest / most in-depth entries first.
export const projects: Project[] = [
  {
    id: '7',
    title: 'Web & App Ad Click-Through Rate Prediction',
    description:
      'Predicts click-through rates on high-dimensional, sparse, categorical ad, user, and device data.',
    techStack: [
      'Machine Learning',
      'Deep Learning',
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'PyTorch',
    ],
    github: 'https://github.com/Bertin-Ir/Avazu_CTR_Challenge',
  },
  {
    id: '9',
    title: 'Peer to Peer File Sharing System',
    description:
      'A peer-to-peer (P2P) file sharing system built with Python that enables direct file transfers between peers, with a central Tracker server coordinating peer discovery and SHA-256 chunk verification for integrity.',
    techStack: ['Python', 'Networking', 'Socket Programming', 'Distributed Systems'],
    github: 'https://github.com/Bertin-Ir/p2p_file_sharing',
  },
  {
    id: '1',
    title: 'Optimizing Direct Bank Marketing',
    description:
      'Analyzes a bank\'s direct marketing campaign to identify clients most likely to subscribe to a long-term deposit, improving campaign efficiency and reducing unnecessary outreach.',
    techStack: [
      'Machine Learning',
      'Data Analysis',
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Data Visualization',
      'Matplotlib',
    ],
    github: 'https://github.com/Bertin-Ir/Optimizing_direct_marketing/tree/main',
  },
  {
    id: '8',
    title: 'Movie Recommendation Engine',
    description:
      'Explores multiple approaches to personalized movie recommendations on the MovieLens 100k dataset.',
    techStack: ['Machine Learning', 'Recommender Systems', 'Keras'],
    github: 'https://github.com/Bertin-Ir/Recommendation_System',
  },
  {
    id: '10',
    title: 'Hand Written Digits Classifier',
    description:
      'A machine learning model that automatically identifies handwritten digits (0–9), comparing a multilayer perceptron baseline against a convolutional neural network.',
    techStack: ['Machine Learning', 'Deep Learning', 'Pytorch', 'Neural Networks', 'Computer Vision'],
    github: 'https://github.com/Bertin-Ir/Digits_Classifier',
  },
  {
    id: '2',
    title: 'Library Catalog Management System',
    description:
      'A C++ application for organizing and managing book collections using hierarchical categories, featuring custom data structures and algorithms with a command-line interface.',
    techStack: ['C++', 'Data Structures', 'Algorithms', 'OOP', 'Command-Line Interfaces'],
    github: 'https://github.com/Bertin-Ir/lcms',
  },
  {
    id: '3',
    title: 'Translator: Multilingual Dictionary',
    description:
      'A multilingual dictionary powered by a custom hash table with quadratic probing, enabling ultra-fast lookups and efficient memory usage for large datasets.',
    techStack: ['C++', 'Hash Tables'],
    github: 'https://github.com/Bertin-Ir/Translator',
  },
  {
    id: '4',
    title: 'Smart Drive Alert System',
    description:
      'A hardware–software system that monitors driver stress, fatigue, and distraction using heart rate variability (HRV) data, providing real-time alerts to improve road safety.',
    techStack: [
      'Embedded Systems',
      'Arduino',
      'Sensors & Hardware Integration',
      'Signal Processing',
    ],
    github: 'https://github.com/Bertin-Ir/SmartDriveAlertSystem',
  },
  {
    id: '5',
    title: 'Tesla Coil Simulator',
    description:
      'A C++ simulation of a Tesla Coil system over a specified time span using an object-oriented programming approach.',
    techStack: ['C++', 'OOP', 'System Modeling'],
    github: 'https://github.com/Bertin-Ir/Tesla_coil_Simulator',
  },
  {
    id: '6',
    title: 'Indian Movies & Songs Scraper',
    description:
      'A data scraping project that builds a comprehensive dataset of Indian movies and songs.',
    techStack: ['Web scraping', 'Python'],
    github: 'https://github.com/Bertin-Ir/Indian-Movies-Scraper',
  },
];
