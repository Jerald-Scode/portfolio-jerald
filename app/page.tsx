"use client";

import React, { useState } from "react";
import Head from "./components/Head";
import ProfileSidebarPortfolio from "./components/ProfileSidebarPortfolio";
import { ProfilePosts } from "./components/ProfilePosts";
import About from "./components/Contents/About";
import Projects from "./components/Contents/Projects";
import Skills from "./components/Contents/Skills";
import Contact from "./components/Contents/Contact";
import { AnimatePresence, motion } from "framer-motion";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("all");

  const renderContent = () => {
    switch (activeTab) {
      case "all":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 order-1 lg:order-1">
              <ProfileSidebarPortfolio />
            </div>
            <div className="lg:col-span-2 order-2 lg:order-2">
              <ProfilePosts />
            </div>
          </div>
        );
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Head activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="section-divider mt-12" />
      <div className="text-center py-8 text-gray-600 text-xs">
        <p>
          Built with <span className="text-indigo-400">Next.js</span>,{" "}
          <span className="text-indigo-400">Tailwind CSS</span> &{" "}
          <span className="text-indigo-400">Framer Motion</span>
        </p>
        <p className="mt-1 text-gray-700">
          © {new Date().getFullYear()} Jerald Sto.domingo. All rights reserved.
        </p>
      </div>
    </div>
  );
}
