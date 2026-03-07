import React from 'react';
import { motion } from 'motion/react';
import { Project as ProjectType } from '../data/projects';
import { ExternalLink, Lock, Github } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const hasLiveLink = project.link && project.link !== '#';
  const hasGithubLink = project.github && project.github !== '#';

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border-l-2 border-neon-green bg-black/40 p-6 hover:bg-neon-green/5 transition-colors relative group"
    >
      <div className="absolute -left-[9px] top-6 w-4 h-4 bg-black border-2 border-neon-green rounded-full" />

      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-3">
          <span className={`text-xs px-2 py-1 border font-bold tracking-tighter ${project.status === 'Live' ? 'border-neon-green text-neon-green' :
            project.status === 'Classified' ? 'border-red-500 text-red-500 animate-pulse' :
              'border-yellow-500 text-yellow-500'
            }`}>
            {project.status === 'Classified' && <Lock className="inline w-3 h-3 mr-1 mb-0.5" />}
            {project.status}
          </span>
        </div>
      </div>

      <p className="text-gray-400 mb-4 font-mono text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex gap-4">
        {hasGithubLink && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-neon-green/60 hover:text-neon-green transition-all border border-neon-green/20 hover:border-neon-green/50 px-3 py-1 bg-neon-green/5"
          >
            <Github className="w-4 h-4" />
            SOURCE_CODE
          </a>
        )}
        {hasLiveLink && (
          <a
            href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-neon-green/60 hover:text-neon-green transition-all border border-neon-green/20 hover:border-neon-green/50 px-3 py-1 bg-neon-green/5"
          >
            <ExternalLink className="w-4 h-4" />
            LIVE_STATUS
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
