export interface TeamMember {
  id: string;
  name: string;
  role: 'Team Lead' | 'Idea Generator' | 'Developer' | 'Designer' | 'DevOps Engineer' | 'Tester';
  quote: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'COMMANDER_ZERO',
    role: 'Team Lead',
    quote: "Man, it's hard to manage these guys...",
    image: './assets/teamlead.jpg'
  },
  {
    id: '2',
    name: 'GLITCH_BIT',
    role: 'Idea Generator',
    quote: "If there is something stupid to do, we must do it.",
    image: './assets/idea_generator.jpg'
  },
  {
    id: '3',
    name: 'ROOT_SHELL',
    role: 'DevOps Engineer',
    quote: "Don't ask me about k8s, I don't know what it is.",
    image: './assets/devops.jpg'
  },
  {
    id: '4',
    name: 'PIXEL_PUNK',
    role: 'Designer',
    quote: "This looks terrible... I like it.",
    image: './assets/designer.jpg'
  },
  {
    id: '5',
    name: 'SYNTAX_ERROR',
    role: 'Developer',
    quote: "Project will be done in 2 hrs... Next year.",
    image: './assets/developer.jpg'
  },
  {
    id: '6',
    name: 'NULL_POINTER',
    role: 'Tester',
    quote: "I can't fix it, but I can break it more.",
    image: './assets/tester.jpg'
  }
];
