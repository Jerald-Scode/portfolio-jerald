"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCodeBranch,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  live?: string;
  repo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Tagaytay Complaint Management System",
    description:
      "A thesis project for the City of Tagaytay - a full-featured complaint management system enabling residents to file, track, and resolve complaints digitally.",
    tech: ["ASP.NET", "MS-SQL", "HTML/CSS/BOOTSTRAP", "JavaScript"],
    image: "/project-img/Complaint.png",
    live: "#",
    repo: "#",
    featured: true,
  },
  // {
  //   title: "E-Services Platform (React Rebuild)",
  //   description:
  //     "Rebuilt an e-services platform using React, integrated an online payment gateway via API, and implemented security and middleware protections.",
  //   tech: ["React", "TypeScript", "REST APIs", "Payment Gateway"],
  //   image: "/project-img/Complaint.png",
  //   live: "#",
  //   repo: "#",
  //   featured: true,
  // },
  {
    title: "Legacy Blade to React Migration",
    description:
      "Migrated a legacy Blade-based website to React, improving scalability, structure, and user interface for a client at CoreDev Solutions.",
    tech: ["React", "Laravel", "TypeScript", "Tailwind CSS"],
    repo: "#",
  },
  {
    title: "CMS Template",
    description:
      "A reusable CMS template for managing and maintaining client websites, handling updates, design improvements, and performance optimization.",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    repo: "#",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects: React.FC = () => {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold gradient-text mb-2">Projects</h1>
        <p className="text-[#1A1A1A]/80">
          A showcase of my work - from full-stack apps to creative experiments.
        </p>
      </motion.div>

      {/* Featured */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {featured.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariant}
            className="glass rounded-2xl overflow-hidden hover-lift"
          >
            {project.image && (
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#E8F1FF]/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-[#4C8CE4]/20 text-[#4C8CE4] border border-[#4C8CE4]/35">
                  Featured
                </span>
              </div>
            )}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">
                    {project.title}
                  </h3>
                  <p className="text-[#1A1A1A]/80 text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  {project.live && (
                    <a
                      href={project.live}
                      className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[#1A1A1A]/80 hover:text-[#4C8CE4] hover:border-[#4C8CE4]/40 transition-colors"
                      title="Live Demo"
                    >
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="w-3.5 h-3.5"
                      />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[#1A1A1A]/80 hover:text-[#4C8CE4] hover:border-[#4C8CE4]/40 transition-colors"
                      title="Source Code"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="w-3.5 h-3.5"
                      />
                    </a>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="tag-chip px-3 py-1 rounded-lg text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Other projects */}
      {other.length > 0 && (
        <>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#7B61FF]/20 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faFolder}
                className="w-4 h-4 text-[#7B61FF]"
              />
            </div>
            <h2 className="text-lg font-semibold text-[#1A1A1A]">
              Other Projects
            </h2>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {other.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariant}
                className="glass rounded-2xl p-5 hover-lift"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4C8CE4]/25 to-[#7B61FF]/20 flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faCodeBranch}
                      className="w-4 h-4 text-[#4C8CE4]"
                    />
                  </div>
                  <div className="flex gap-2">
                    {project.repo && (
                      <a
                        href={project.repo}
                        className="text-[#1A1A1A]/60 hover:text-[#4C8CE4] transition-colors"
                        title="Source Code"
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-[#1A1A1A] font-semibold">
                  {project.title}
                </h3>
                <p className="text-[#1A1A1A]/80 text-sm mt-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="tag-chip px-2.5 py-1 rounded-md text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Projects;
