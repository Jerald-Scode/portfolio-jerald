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
    href: "https://www.instagram.com/jeraldstodomingo/",
    icon: faSquareInstagram,
    label: "Instagram",
  },
  {
    href: "www.linkedin.com/in/jerald-sto-domingo-492a09347",
    icon: faLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Jerald-Scode",
    icon: faGithub,
    label: "GitHub",
  },
];

const Head: React.FC<HeadProps> = ({
  coverImage = "/header-img/Cartoon Motorcyle.png",
  imageSrc = "/header-img/profile.jpg",
  fullName = "Jerald Sto.domingo",
  bio = "Solution-oriented developer with hands-on experience building full-stack web applications, migrating legacy systems to modern frameworks, and integrating payment APIs.",
  position = "Junior Web Developer",
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E8F1FF]/70 to-[#FFFFFF]" />
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
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-[3px] bg-gradient-to-br from-[#4C8CE4] via-[#7B61FF] to-[#E8F1FF] shadow-lg glow">
              <img
                src={imageSrc}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-[#FFFFFF]"
              />
            </div>
            {/* Online indicator */}
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-[#4C8CE4] rounded-full border-2 border-[#FFFFFF] pulse-ring" />
          </motion.div>

          {/* Name & meta */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex-1 pb-2"
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
              {fullName}
              <span className="ml-2 text-sm font-normal text-[#4C8CE4]">
                (Je)
              </span>
            </h1>
            <p className="text-[#1A1A1A]/80 text-sm sm:text-base mt-1 max-w-xl">
              {bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-[#1A1A1A]/80 text-xs sm:text-sm">
              <span className="flex items-center gap-1.5">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="w-3.5 h-3.5 text-[#4C8CE4]"
                />
                {position}
              </span>
              <span className="flex items-center gap-1.5">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="w-3.5 h-3.5 text-[#4C8CE4]"
                />
                {location}
              </span>
              <span className="flex items-center gap-1.5">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="w-2 h-2 text-[#4C8CE4]"
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
                className="w-10 h-10 flex items-center justify-center rounded-xl glass hover:bg-[#E8F1FF] hover:border-[#4C8CE4]/40 transition-all duration-300 text-[#1A1A1A]/80 hover:text-[#4C8CE4]"
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
                      ? "text-[#4C8CE4]"
                      : "text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-[#4C8CE4] to-[#7B61FF] rounded-full"
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
