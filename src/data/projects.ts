export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  github: string;
  status: 'Live' | 'In Development' | 'Classified';
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AboutUs',
    description: 'This project',
    link: 'aboutus.misseddeadlines.dpdns.org',
    github: 'https://github.com/PiterPentester/aboutus',
    status: 'In Development'
  },
  {
    id: '2',
    title: 'Lullaby Bot',
    description: 'Telegram bot to shutdown or restart my Orange Pi',
    link: '#',
    github: 'https://github.com/PiterPentester/lullaby-bot',
    status: 'Live'
  },
  {
    id: '3',
    title: 'Komunalka',
    description: 'Dashboard for monitoring my rents and payments',
    link: '#',
    github: 'https://github.com/PiterPentester/komunalka',
    status: 'Classified'
  },
  {
    id: '4',
    title: 'Tetra Bot',
    description: 'Telegram bot designed to continuously monitor your internet connection quality and alerts you when performance drops below acceptable levels.',
    link: '#',
    github: 'https://github.com/PiterPentester/tetra-bot',
    status: 'Live'
  },
  {
    id: '5',
    title: 'TrustMeBro - Frontend',
    description: 'Frontend for TrustMeBro',
    link: 'https://trustmebro.misseddeadlines.dpdns.org',
    github: 'https://github.com/PiterPentester/trustmebro-frontend',
    status: 'Live'
  },
  {
    id: '6',
    title: 'TrustMeBro - Backend',
    description: 'Backend for TrustMeBro',
    link: 'https://trustmebro.misseddeadlines.dpdns.org',
    github: 'https://github.com/PiterPentester/trustmebro-backend',
    status: 'Live'
  },
];
