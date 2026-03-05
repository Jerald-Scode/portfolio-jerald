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
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with Next.js, Tailwind CSS, and TypeScript. Features glassmorphism design, smooth animations, and daily inspirational quotes.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/header-img/Cartoon Motorcyle.png",
    live: "#",
    repo: "#",
    featured: true,
  },
  {
    title: "Attendance System",
    description:
      "A student attendance & reporting tool designed for teachers. Includes CRUD operations, CSV data export, and interactive charts.",
    tech: ["React", "Node.js", "MySQL", "Chart.js"],
    image: "/header-img/jeep drive.jpg",
    live: "#",
    repo: "#",
    featured: true,
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Admin panel with real-time analytics, product management, and user roles. Built with PHP and integrated with MySQL.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    repo: "#",
  },
  {
    title: "Task Manager App",
    description:
      "A collaborative to-do list with drag-and-drop, due dates, and team sharing features.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
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
        <p className="text-gray-400">
          A showcase of my work — from full-stack apps to creative experiments.
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/30 text-indigo-300 border border-indigo-500/30">
                  Featured
                </span>
              </div>
            )}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  {project.live && (
                    <a
                      href={project.live}
                      className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
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
                      className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
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
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faFolder}
                className="w-4 h-4 text-purple-400"
              />
            </div>
            <h2 className="text-lg font-semibold text-white">Other Projects</h2>
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
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faCodeBranch}
                      className="w-4 h-4 text-indigo-400"
                    />
                  </div>
                  <div className="flex gap-2">
                    {project.repo && (
                      <a
                        href={project.repo}
                        className="text-gray-500 hover:text-indigo-400 transition-colors"
                        title="Source Code"
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-white font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
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
