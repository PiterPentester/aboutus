export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  github: string;
  status: "Live" | "In Development" | "Classified";
}

const projectsData: Omit<Project, "id">[] = [
  {
    title: "BankirBot",
    description:
      "Telegram bot acting as a Digital Banker for physical Monopoly board games.",
    link: "https://piterpentester.github.io/bankirBot/",
    github: "https://github.com/PiterPentester/bankirBot",
    status: "Live",
  },
  {
    title: "OpenWrt MCP",
    description: "OpenWrt MCP server",
    link: "https://piterpentester.github.io/openwrt_mcp/",
    github: "https://github.com/PiterPentester/openwrt_mcp",
    status: "Live",
  },
  {
    title: "AboutUs",
    description: "This project",
    link: "aboutus.misseddeadlines.dpdns.org",
    github: "https://github.com/PiterPentester/aboutus",
    status: "Live",
  },
  {
    title: "Lullaby Bot",
    description: "Telegram bot to shutdown or restart my Orange Pi",
    link: "https://piterpentester.github.io/lullaby-bot/",
    github: "https://github.com/PiterPentester/lullaby-bot",
    status: "Live",
  },
  {
    title: "Komunalka",
    description: "Dashboard for monitoring my rents and payments",
    link: "https://piterpentester.github.io/komunalka/",
    github: "https://github.com/PiterPentester/komunalka",
    status: "Classified",
  },
  {
    title: "Tetra Bot",
    description:
      "Telegram bot designed to continuously monitor your internet connection quality and alerts you when performance drops below acceptable levels.",
    link: "https://piterpentester.github.io/tetra_bot/",
    github: "https://github.com/PiterPentester/tetra-bot",
    status: "Live",
  },
  {
    title: "TrustMeBro - Frontend",
    description: "Frontend for TrustMeBro",
    link: "https://trustmebro.misseddeadlines.dpdns.org",
    github: "https://github.com/PiterPentester/trustmebro-frontend",
    status: "Live",
  },
  {
    title: "TrustMeBro - Backend",
    description: "Backend for TrustMeBro",
    link: "https://trustmebro.misseddeadlines.dpdns.org",
    github: "https://github.com/PiterPentester/trustmebro-backend",
    status: "Live",
  },
];

export const projects: Project[] = projectsData.map((p, i) => ({
  ...p,
  id: (i + 1).toString(),
}));
