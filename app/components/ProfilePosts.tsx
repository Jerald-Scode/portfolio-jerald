"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import DailyQuote from "./DailyQuote";

const ProjectCard: React.FC<{
  title: string;
  date: string;
  description: string;
  tech?: string[];
  image?: string;
  live?: string;
  repo?: string;
}> = ({ title, date, description, tech = [], image, live, repo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl overflow-hidden hover-lift"
    >
      {image && (
        <div className="relative h-44 overflow-hidden">
          <img
            src={image}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent" />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-white">{title}</h3>
            <span className="text-xs text-gray-500 font-mono">{date}</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {live && (
              <a
                href={live}
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-indigo-400 transition-colors"
                title="Live Demo"
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="w-3 h-3"
                />
              </a>
            )}
            {repo && (
              <a
                href={repo}
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-indigo-400 transition-colors"
                title="Source Code"
              >
                <FontAwesomeIcon icon={faGithub} className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tech.map((t) => (
            <span key={t} className="tag-chip px-2.5 py-1 rounded-md text-xs">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const ProfilePosts: React.FC = () => {
  return (
    <section className="space-y-6">
      {/* Daily Quote */}
      <DailyQuote />

      {/* Section header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faCodeBranch}
            className="w-4 h-4 text-indigo-400"
          />
          <span className="text-sm font-medium text-white">
            Recent Projects
          </span>
        </div>
        <span className="text-xs text-gray-500">Newest first</span>
      </div>

      {/* Project cards */}
      <ProjectCard
        title="Portfolio Website"
        date="Jan 2026"
        description="A responsive portfolio built with Next.js, Tailwind CSS, and TypeScript. Features glassmorphism design, animated transitions, and a daily quotes API."
        tech={["Next.js", "TypeScript", "Tailwind CSS"]}
        image="/header-img/Cartoon Motorcyle.png"
        live="#"
        repo="#"
      />

      <ProjectCard
        title="Attendance System (School)"
        date="Dec 2025"
        description="An attendance & reporting tool designed for teachers — demonstrates CRUD, CSV export, and charting."
        tech={["React", "Node.js", "MySQL"]}
        live="#"
        repo="#"
      />
    </section>
  );
};
