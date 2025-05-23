
import type { Project, Experience, Education } from '@/types';


export const projectsData: Project[] = [
  {
    id: '1',
    title: 'personal financial management',
    description: 'prototype multi-platform web-based personal finance management application, designed to demonstrate real-time flow of dummy data with a modular and adaptive approach responsive',
    imageUrl: 'src/assets/images/Dashboard.PNG',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe API'],
    liveLink: '#',
    repoLink: '#',
    dataAiHint: 'ecommerce website',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A responsive task management application to help users organize their daily tasks, set priorities, and track progress. Includes features like drag-and-drop functionality and deadline reminders.',
    imageUrl: 'src/assets/images/homepage.PNG',
    technologies: ['React', 'Firebase', 'Material UI', ' Zustand'],
    liveLink: '#',
    repoLink: '#',
    dataAiHint: 'task manager interface',
  },
  {
    id: '3',
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets. Users can explore data through various charts and graphs, apply filters, and gain insights.',
    imageUrl: 'https://placehold.co/600x400.png',
    technologies: ['Python (Flask)', 'D3.js', 'Pandas', 'Bootstrap'],
    repoLink: '#',
    dataAiHint: 'dashboard charts',
  },
];

export const experienceData: Experience[] = [
  {
    id: '1',
    role: 'Education Mentor',
    company: 'Self-employed',
    duration: 'November 2022 - Present',
    location: 'Jakarta, Indonesia',
    responsibilities: [
      'Designed and implemented curriculum tailored for students.',
      'Provided one-on-one and group mentorship to students.',
      'Guiding student through preparation competition for regional at school.',
      'Organized and led workshop enhancing student knowledge and skills in areas such as mathematics, and technology.',
    ],
    logoUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'mentorship education'
  },
  {
    id: '2',
    role: 'Crew Event & Mascot Organizer',
    company: 'PT Crystal Team Indonesia',
    duration: 'November 2024 - January 2025 (Upcoming)',
    location: 'Indonesia',
    responsibilities: [
      'Responsible for event planning and mascot coordination.',
      'Ensuring smooth execution of event logistics and activities.',
      'Collaborating with team members to deliver memorable event experiences.',
    ],
    logoUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'event company'
  },
  {
    id: '3',
    role: 'Data Entry Clerk',
    company: 'Luxe Royale, Inc.',
    duration: 'Previous Role (Date Unspecified)',
    location: 'Indonesia (Assumed)',
    responsibilities: [
      'Managed and maintained data accuracy in company systems.',
      'Performed regular data quality checks and clean-up tasks.',
    ],
    logoUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'corporate building'
  },
   {
    id: '4',
    role: 'Tech Support Intern',
    company: 'GAOTek Inc.',
    duration: 'Previous Role (Date Unspecified)',
    location: 'Indonesia (Assumed)',
    responsibilities: [
      'Provided technical support to users, handling troubleshooting queries.',
      'Assisted with system maintenance and remote support tasks.',
    ],
    logoUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'tech company'
  }
];

export const educationData: Education[] = [
  {
    id: '1',
    institution: 'University of Informatics (Assumed)', // Replace with actual university
    degree: 'Bachelor of Engineering in Informatics',
    duration: 'August 2021 - Present (Expected Graduation: May 2025)', // Adjust as needed
    location: 'Jakarta, Indonesia (Assumed)',
    description: 'Focusing on software development, data structures, algorithms, and web technologies. Actively involved in tech communities and projects.',
    logoUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'university building'
  },
  // Add more education entries if available
];
