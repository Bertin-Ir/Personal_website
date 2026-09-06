// Rendered as a 2-column grid (md:grid-cols-2), filled row-wise:
// row1 = [0,1], row2 = [2,3], row3 = [4,5] — order below places
// New York University / Tulsa ahead of MIT on the right, and
// New York University Paris ahead of CodePath on the left.
export const education = [
  {
    institution: 'New York University Abu Dhabi',
    location: 'Abu Dhabi, UAE',
    year: null,
    degree: 'Bachelor of Science in Computer Science',
    minor: 'Minor: Mathematics and Economics',
    expectedGraduation: '2028',
    gpa: '3.85',
    courses: null,
  },
  {
    institution: 'New York University',
    location: 'New York, USA',
    year: null,
    degree: null,
    minor: null,
    expectedGraduation: null,
    gpa: null,
    courses: 'Agile Software Engineering and DevOps',
  },
  {
    institution: 'New York University Paris',
    location: 'Paris, France',
    year: null,
    degree: null,
    minor: null,
    expectedGraduation: null,
    gpa: null,
    courses: 'Machine Learning, Computer Networking, Computer System Organization',
  },
  {
    institution: 'University of Tulsa',
    location: 'Tulsa, Oklahoma, USA',
    year: null,
    degree: null,
    minor: null,
    expectedGraduation: null,
    gpa: null,
    courses: 'Database Systems',
  },
  {
    institution: 'CodePath',
    location: 'San Francisco / Remote',
    year: null,
    degree: null,
    minor: null,
    expectedGraduation: null,
    gpa: null,
    courses: null,
    courseList: [
      'Intermediate Technical Interview Prep (2025)',
      'Applied AI Engineering (2026)',
    ],
  },
  {
    institution: 'MIT',
    location: 'Remote',
    year: '2026',
    degree: null,
    minor: null,
    expectedGraduation: null,
    gpa: null,
    courses: 'Blockchain and Money, Financial Mathematics',
  },
];

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  /** Sort key, 'YYYY-MM' of the role's start month. Used to derive stats (e.g. years of experience) and to keep this list ordered. */
  startDate: string;
  description?: string;
  bullets?: string[];
}

// Ordered reverse-chronologically by startDate (most recent first).
export const experience: ExperienceEntry[] = [
  {
    role: 'Data Scientist',
    company: 'Sun Wolf Industries',
    location: 'Oklahoma, US',
    period: '08/2026 – Present',
    startDate: '2026-08',
  },
  {
    role: 'Analytics Engineering Intern',
    company: 'Irembo',
    location: 'Kigali, Rwanda',
    period: '05/2026 – 08/2026',
    startDate: '2026-05',
    bullets: [
      'Eliminated 100% of unauthorised access to production Dagster pipelines by designing and deploying a zero-trust authentication layer (Keycloak, OAuth2 Proxy, Redis, Kong) enforcing verified identity and MFA on every request across all environments.',
      'Designed, packaged, and deployed the complete platform infrastructure on Kubernetes using Helm charts — covering six interdependent services including the OAuth2 Proxy, Dagster pipeline orchestrator, Keycloak identity provider, HashiCorp Vault, Redis, and Kong — enabling consistent and repeatable deployments across environments through parameterised configuration.',
    ],
  },
  {
    role: 'Technical Interview Scholar',
    company: 'CodePath',
    location: 'San Francisco, USA',
    period: '08/2025 – 12/2025',
    startDate: '2025-08',
    description:
      'Completed rigorous training in algorithms, data structures, and performance optimization, strengthening system-level reasoning and scalability awareness for real-world software and ML pipelines.',
  },
  {
    role: 'Research Analyst Intern',
    company: 'Mentora',
    location: 'Dubai, UAE',
    period: '07/2025 – 08/2025',
    startDate: '2025-07',
    description:
      'Researched and automated admissions data collection for 700+ global universities, designing Python-based data pipelines that transformed raw datasets into actionable insights for students, advisors, and investors.',
  },
  {
    role: 'Mentor',
    company: 'NYU Abu Dhabi Summer Academy',
    location: 'Abu Dhabi, UAE',
    period: '06/2025 – 08/2025',
    startDate: '2025-06',
    bullets: [
      'Mentored and guided Summer Academy Scholars by providing academic support, residential life management, and ensuring timely completion of assignments.',
      'Coordinated between faculty, staff, and students to streamline program activities, resolve issues promptly, and enhance the overall Summer Academy experience.',
    ],
  },
  {
    role: 'Library Reference Assistant',
    company: 'New York University Abu Dhabi',
    location: 'Abu Dhabi, UAE',
    period: '01/2025 – 12/2025',
    startDate: '2025-01',
    bullets: [
      'Trained users in effective research methodologies, including database navigation, source evaluation, and systematic literature review techniques.',
      'Supported research workflows by assisting with citation management, resource organization, and access to both print and digital collections.',
      'Contributed to the development and maintenance of library web content, enhancing accessibility of research guides and digital resources.',
    ],
  },
  {
    role: 'Field Monitor',
    company: 'Areco Rwanda Nziza',
    location: 'Kigali, Rwanda',
    period: '02/2023 – 12/2023',
    startDate: '2023-02',
    description:
      'Collected and analyzed GIS-based field data to track beneficiary locations and project progress, supporting efficient distribution of eco-friendly stoves.',
  },
];

export const languages = [
  { name: 'English', proficiency: 'Proficient' },
  { name: 'French', proficiency: 'Basic' },
  { name: 'Kinyarwanda', proficiency: 'Native' },
];

const FULL_RESUME_URL = 'https://docs.google.com/document/d/1hmz10GXteV-iObB-zuOtXsj4wHBN75hHs9ZMG0tL8mI/edit?usp=sharing';

export const aboutMe = {
  paragraphs: [
    'A coder at heart, a math enthusiast by inclination, and economics-driven by mindset. I bring analytical rigor and technical skill together to solve real-world problems and build systems that create measurable impact.',
    'My work spans machine learning, data science, and software engineering. I develop, train, fine-tune, and evaluate machine learning models, with experience in data preprocessing, feature engineering, model evaluation, and predictive analytics. I also work with real-world datasets to build data pipelines, uncover patterns, and turn complex data into actionable insights.',
    'Beyond data and AI, I enjoy building the systems that make technology useful in practice—from websites to mobile apps. I have experience designing databases and data models, developing software applications, building APIs, and working with cloud-native infrastructure.',
    'At the intersection of mathematics, computing, and real-world problems, I am particularly interested in building intelligent, reliable, and scalable systems—and continuously learning whatever is necessary to solve the problem at hand.',
  ],
  contactLink: '/contact/',
  fullResumeUrl: FULL_RESUME_URL,
};

export { FULL_RESUME_URL };
