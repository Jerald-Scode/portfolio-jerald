"use client";

import React from "react";
import { Card } from "./card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faBriefcase,
  faCode,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const skills = [
  "React / TypeScript",
  "PHP / Laravel",
  "MySQL",
  "HTML/CSS/JS",
  "Tailwind CSS",
  "REST APIs",
  "C# / ASP.NET",
  "Git",
];

const ProfileSidebarPortfolio: React.FC = () => {
  return (
    <aside className="space-y-6">
      <Card
        title="Contact Info"
        icon={<FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />}
      >
        <ul className="text-sm space-y-4">
          <li className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-3.5 h-3.5 text-indigo-400"
              />
            </div>
            <div>
              <p className="text-gray-500 text-xs">Email</p>
              <p className="text-gray-300 text-sm">
                jerald.stodomingo26@gmail.com
              </p>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="w-3.5 h-3.5 text-purple-400"
              />
            </div>
            <div>
              <p className="text-gray-500 text-xs">Location</p>
              <p className="text-gray-300 text-sm">
                Tagaytay City, Philippines
              </p>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="w-3.5 h-3.5 text-green-400"
              />
            </div>
            <div>
              <p className="text-gray-500 text-xs">Availability</p>
              <p className="text-green-400 text-sm font-medium">
                Open to work / Freelance
              </p>
            </div>
          </li>
        </ul>
      </Card>

      <Card
        title="Featured Projects"
        icon={<FontAwesomeIcon icon={faFolderOpen} className="w-4 h-4" />}
      >
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative group overflow-hidden rounded-xl"
          >
            <img
              src="/header-img/Cartoon Motorcyle.png"
              alt="project-1"
              className="w-full h-24 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-2">
              <span className="text-white text-xs font-medium">Portfolio</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative group overflow-hidden rounded-xl"
          >
            <img
              src="/header-img/jeep drive.jpg"
              alt="project-2"
              className="w-full h-24 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-2">
              <span className="text-white text-xs font-medium">Attendance</span>
            </div>
          </motion.div>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">
          Click &quot;Projects&quot; tab for more →
        </p>
      </Card>

      <Card
        title="Tech Stack"
        icon={<FontAwesomeIcon icon={faCode} className="w-4 h-4" />}
      >
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="tag-chip px-3 py-1.5 rounded-lg text-xs font-medium cursor-default"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </Card>
    </aside>
  );
};

export default ProfileSidebarPortfolio;
