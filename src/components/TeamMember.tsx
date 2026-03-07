import { motion } from 'motion/react';
import { TeamMember as TeamMemberType } from '../data/team';
import { Terminal, Code, Cpu, Shield, Zap, Layout } from 'lucide-react';

interface TeamMemberProps {
  member: TeamMemberType;
}

const roleIcons = {
  'Team Lead': <Terminal className="w-5 h-5" />,
  'Developer': <Code className="w-5 h-5" />,
  'DevOps Engineer': <Cpu className="w-5 h-5" />,
  'Tester': <Shield className="w-5 h-5" />,
  'Idea Generator': <Zap className="w-5 h-5" />,
  'Designer': <Layout className="w-5 h-5" />,
};

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, zIndex: 10 }}
      className="relative group border border-neon-green/30 bg-black/50 p-4 rounded-sm"
    >
      {/* Scanline effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 rounded-sm overflow-hidden" />

      <div className="flex flex-col items-center text-center">
        <motion.div
          whileHover={{
            scale: 2,
            zIndex: 50,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
          className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-neon-green/50 group-hover:border-neon-green transition-colors cursor-zoom-in shadow-[0_0_15px_rgba(0,255,65,0.3)] group-hover:shadow-[0_0_30px_rgba(0,255,65,0.6)] z-0"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-neon-green/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>

        <h3 className="text-xl font-bold text-neon-green mb-1 flex items-center gap-2">
          {member.name}
        </h3>

        <div className="flex items-center gap-2 text-sm text-neon-green/70 mb-3 border-b border-neon-green/20 pb-2 w-full justify-center">
          {roleIcons[member.role]}
          <span className="uppercase tracking-wider">{member.role}</span>
        </div>

        <p className="text-sm italic text-gray-400 font-mono">
          "{member.quote}"
        </p>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-green" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-green" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-green" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-green" />
    </motion.div>
  );
}
