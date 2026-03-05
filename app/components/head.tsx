"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLocationDot,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faSquareInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeadProps {
  imageSrc?: string;
  coverImage?: string;
  fullName?: string;
  bio?: string;
  position?: string;
  location?: string;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const tabs = [
  { key: "all", label: "Home" },
  { key: "about", label: "About" },
  { key: "projects", label: "Projects" },
  { key: "skills", label: "Skills" },
  { key: "contact", label: "Contact" },
];

const socials = [
  {
    href: "https://www.facebook.com/jerald.stodomingo.7",
    icon: faFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/jerald_stodomingo",
    icon: faSquareInstagram,
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/in/jerald-stodomingo",
    icon: faLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/jerald-stodomingo",
    icon: faGithub,
    label: "GitHub",
  },
];

const Head: React.FC<HeadProps> = ({
  coverImage = "/header-img/Cartoon Motorcyle.png",
  imageSrc = "/header-img/jeep drive.jpg",
  fullName = "Jerald Sto.domingo",
  bio = "A passionate web developer crafting dynamic, responsive, and user-friendly web experiences.",
  position = "Web Developer",
  location = "Tagaytay City, Philippines",
  activeTab = "all",
  onTabChange,
}) => {
  return (
    <header className="relative">
      {/* Cover image with gradient overlay */}
      <div className="relative w-full h-48 sm:h-64 md:h-72 overflow-hidden">
        <img
          src={coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f1a]/60 to-[#0f0f1a]" />
      </div>

      {/* Profile info area */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-6">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative"
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-[3px] bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 shadow-lg glow">
              <img
                src={imageSrc}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-[#0f0f1a]"
              />
            </div>
            {/* Online indicator */}
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-[#0f0f1a] pulse-ring" />
          </motion.div>

          {/* Name & meta */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex-1 pb-2"
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              {fullName}
              <span className="ml-2 text-sm font-normal text-indigo-400">
                (Je)
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mt-1 max-w-xl">
              {bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-400 text-xs sm:text-sm">
              <span className="flex items-center gap-1.5">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="w-3.5 h-3.5 text-indigo-400"
                />
                {position}
              </span>
              <span className="flex items-center gap-1.5">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="w-3.5 h-3.5 text-indigo-400"
                />
                {location}
              </span>
              <span className="flex items-center gap-1.5">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="w-2 h-2 text-green-400"
                />
                Open to work
              </span>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-2 pb-2"
          >
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                aria-label={s.label}
                className="w-10 h-10 flex items-center justify-center rounded-xl glass hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 text-gray-400 hover:text-indigo-400"
              >
                <FontAwesomeIcon icon={s.icon} className="w-4 h-4" />
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.nav
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-6"
        >
          <div className="section-divider mb-0" />
          <ul className="flex gap-1 overflow-x-auto py-1 -mb-px">
            {tabs.map((tab) => (
              <li key={tab.key}>
                <button
                  onClick={() => onTabChange?.(tab.key)}
                  className={`relative px-4 py-3 text-sm font-medium rounded-t-lg transition-all duration-300 ${
                    activeTab === tab.key
                      ? "text-indigo-400"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
          <div className="section-divider" />
        </motion.nav>
      </div>
    </header>
  );
};

export default Head;
