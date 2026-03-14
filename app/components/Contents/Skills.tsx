"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faServer,
  faPalette,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

interface SkillCategory {
  title: string;
  icon: typeof faCode;
  color: string;
  bg: string;
  skills: { name: string; level: number }[];
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: faPalette,
    color: "text-[#4C8CE4]",
    bg: "from-[#4C8CE4]/25 to-[#4C8CE4]/8",
    skills: [
      { name: "React / TypeScript", level: 85 },
      { name: "HTML / CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 88 },
    ],
  },
  {
    title: "Backend",
    icon: faServer,
    color: "text-[#7B61FF]",
    bg: "from-[#7B61FF]/25 to-[#7B61FF]/8",
    skills: [
      { name: "PHP / Laravel", level: 82 },
      { name: "MySQL", level: 78 },
      { name: "REST APIs", level: 80 },
      { name: "C# / ASP.NET", level: 70 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: faTools,
    color: "text-[#4C8CE4]",
    bg: "from-[#4C8CE4]/25 to-[#E8F1FF]",
    skills: [
      { name: "Git & Source Control", level: 85 },
      { name: "Web Performance", level: 78 },
      { name: "VS Code", level: 92 },
      { name: "Excel", level: 80 },
      { name: "Microsoft Office", level: 85 },
    ],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 py-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold gradient-text mb-2">
          Skills & Technologies
        </h1>
        <p className="text-[#1A1A1A]/80">
          Technologies and tools I use to bring ideas to life.
        </p>
      </motion.div>

      {/* Skill categories */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={item}
            className="glass rounded-2xl p-6 hover-lift"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.bg} flex items-center justify-center`}
              >
                <FontAwesomeIcon
                  icon={cat.icon}
                  className={`w-4.5 h-4.5 ${cat.color}`}
                />
              </div>
              <h2 className="text-[#1A1A1A] font-semibold">{cat.title}</h2>
            </div>
            <div className="space-y-4">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#1A1A1A]">{skill.name}</span>
                    <span className="text-[#1A1A1A]/60 text-xs">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#E8F1FF] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-[#4C8CE4] to-[#7B61FF]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick tags summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="glass rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-[#4C8CE4]/20 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faCode}
              className="w-4 h-4 text-[#4C8CE4]"
            />
          </div>
          <h3 className="text-[#1A1A1A] font-semibold">All Technologies</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories
            .flatMap((c) => c.skills)
            .map((s) => (
              <span
                key={s.name}
                className="tag-chip px-3 py-1.5 rounded-lg text-xs font-medium"
              >
                {s.name}
              </span>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;

