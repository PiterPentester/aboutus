/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { teamMembers } from './data/team';
import { projects } from './data/projects';
import TeamMember from './components/TeamMember';
import ProjectCard from './components/ProjectCard';
import GlitchText from './components/GlitchText';
import { Terminal } from 'lucide-react';

export default function App() {
  const teamLead = teamMembers.find(m => m.role === 'Team Lead');
  const ideaGenerator = teamMembers.find(m => m.role === 'Idea Generator');
  const coreTeam = teamMembers.filter(m => m.role !== 'Team Lead' && m.role !== 'Idea Generator');

  return (
    <div className="min-h-screen bg-hacker-black selection:bg-neon-green selection:text-black">
      {/* Background Matrix Effect (Simplified) */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 65, .3) 25%, rgba(0, 255, 65, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 65, .3) 75%, rgba(0, 255, 65, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 65, .3) 25%, rgba(0, 255, 65, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 65, .3) 75%, rgba(0, 255, 65, .3) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-neon-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-neon-green">
            <Terminal className="w-6 h-6" />
            <span className="font-bold tracking-widest">SKELETON_CREW</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-neon-green text-gray-400 transition-colors">./ABOUT</a>
            <a href="#team" className="hover:text-neon-green text-gray-400 transition-colors">./TEAM</a>
            <a href="#projects" className="hover:text-neon-green text-gray-400 transition-colors">./PROJECTS</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-neon-green text-sm tracking-[0.5em] mb-4">SYSTEM_STATUS: ONLINE</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              WE ARE <GlitchText text="SKELETON CREW" className="text-neon-green" />
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Architects of the digital trash. We build what others don't need.
              <br />
              <span className="text-neon-green/60 text-sm mt-2 block">
                &gt; Executing innovation protocols...
              </span>
            </p>
            <a
              href="#projects"
              className="inline-block border border-neon-green text-neon-green px-8 py-3 hover:bg-neon-green hover:text-black transition-all duration-300 font-bold tracking-wider"
            >
              VIEW_PROJECTS
            </a>
          </motion.div>
        </div>
      </section>

      {/* Team Section (Hierarchical) */}
      <section id="team" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 border-l-4 border-neon-green pl-6">
            <h2 className="text-3xl font-bold text-white mb-2">TEAM_STRUCTURE</h2>
          </div>

          <div className="flex flex-col items-center gap-12">
            {/* Level 1: Leadership */}
            <div className="flex flex-col md:flex-row gap-8 justify-center w-full max-w-4xl">
              {teamLead && (
                <div className="w-full md:w-1/2 lg:w-1/3">
                  <div className="text-center mb-4 text-neon-green text-xs tracking-widest uppercase border-b border-neon-green/20 pb-2">Command Node</div>
                  <TeamMember member={teamLead} />
                </div>
              )}
              {ideaGenerator && (
                <div className="w-full md:w-1/2 lg:w-1/3">
                  <div className="text-center mb-4 text-neon-green text-xs tracking-widest uppercase border-b border-neon-green/20 pb-2">Creative Core</div>
                  <TeamMember member={ideaGenerator} />
                </div>
              )}
            </div>

            {/* Connector Lines (Visual only) */}
            <div className="hidden md:flex flex-col items-center w-full -my-6 opacity-30">
              <div className="h-12 w-px bg-neon-green"></div>
              <div className="w-2/3 h-px bg-neon-green"></div>
              <div className="flex justify-between w-2/3">
                <div className="h-8 w-px bg-neon-green"></div>
                <div className="h-8 w-px bg-neon-green"></div>
                <div className="h-8 w-px bg-neon-green"></div>
                <div className="h-8 w-px bg-neon-green"></div>
              </div>
            </div>

            {/* Level 2: Core Team */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {coreTeam.map((member) => (
                <div key={member.id} className="w-full">
                  <div className="md:hidden text-center mb-4 text-neon-green text-xs tracking-widest uppercase border-b border-neon-green/20 pb-2 mt-8 md:mt-0">Operative</div>
                  <TeamMember member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/30 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 border-l-4 border-neon-green pl-6">
            <h2 className="text-3xl font-bold text-white mb-2">ACTIVE_OPERATIONS</h2>
            <p className="text-gray-400">Clearance Level: Public</p>
          </div>

          <div className="space-y-8 border-l border-neon-green/20 ml-4 md:ml-0 pl-8 md:pl-0">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neon-green/20 text-center text-gray-500 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} SKELETON_CREW. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
