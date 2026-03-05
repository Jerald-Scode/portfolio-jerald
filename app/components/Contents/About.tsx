"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faHeart,
  faRocket,
  faCode,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const timeline = [
  {
    year: "2024 – Present",
    title: "Freelance Web Developer",
    desc: "Building custom web solutions for clients using React, Next.js, and PHP.",
    icon: faLaptopCode,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    year: "2023 – 2024",
    title: "Web Development Studies",
    desc: "Deep-dived into modern frameworks, TypeScript, and full-stack development.",
    icon: faCode,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    year: "2022 – 2023",
    title: "Started Programming Journey",
    desc: "Learned the fundamentals of HTML, CSS, JavaScript, and PHP.",
    icon: faGraduationCap,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
];

const passions = [
  {
    icon: faRocket,
    label: "Building Products",
    desc: "I love turning ideas into working software.",
  },
  {
    icon: faHeart,
    label: "Clean Code",
    desc: "Writing maintainable, readable, and scalable code.",
  },
  {
    icon: faBriefcase,
    label: "Collaboration",
    desc: "Working with teams to deliver great results.",
  },
];

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 py-4">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-8"
      >
        <h1 className="text-3xl font-bold gradient-text mb-4">About Me</h1>
        <p className="text-gray-300 leading-relaxed text-base">
          Hi! I&apos;m{" "}
          <span className="text-white font-semibold">Jerald Sto.domingo</span>,
          a passionate web developer based in{" "}
          <span className="text-indigo-400">Tagaytay City, Philippines</span>. I
          specialize in building responsive, performant, and accessible web
          applications using modern technologies like{" "}
          <span className="text-indigo-400">React</span>,{" "}
          <span className="text-indigo-400">Next.js</span>,{" "}
          <span className="text-indigo-400">TypeScript</span>, and{" "}
          <span className="text-indigo-400">PHP</span>.
        </p>
        <p className="text-gray-400 leading-relaxed text-base mt-4">
          I&apos;m driven by curiosity and a desire to create digital
          experiences that make a difference. Whether it&apos;s a sleek
          portfolio, a robust attendance system, or an innovative web app — I
          bring dedication and attention to detail to every project.
        </p>
      </motion.div>

      {/* Timeline */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="w-4 h-4 text-indigo-400"
            />
          </span>
          Journey
        </h2>
        <div className="relative space-y-6 ml-4">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="relative flex gap-6 pl-8"
            >
              {/* Dot */}
              <div
                className={`absolute left-0 top-1 w-8 h-8 rounded-full ${item.bg} flex items-center justify-center z-10`}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`w-3.5 h-3.5 ${item.color}`}
                />
              </div>
              <div className="glass rounded-xl p-5 flex-1 hover-lift">
                <span className="text-xs text-gray-500 font-mono">
                  {item.year}
                </span>
                <h3 className="text-white font-semibold mt-1">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* What Drives Me */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faHeart}
              className="w-4 h-4 text-purple-400"
            />
          </span>
          What Drives Me
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {passions.map((p, i) => (
            <motion.div
              key={p.label}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="glass rounded-2xl p-6 text-center hover-lift"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={p.icon}
                  className="w-5 h-5 text-indigo-400"
                />
              </div>
              <h3 className="text-white font-semibold text-sm">{p.label}</h3>
              <p className="text-gray-400 text-xs mt-2">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
