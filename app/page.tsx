"use client";

import React, { useState } from "react";
import Head from "./components/head";
import ProfileSidebarPortfolio from "./components/ProfileSidebarPortfolio";
import { ProfilePosts } from "./components/ProfilePosts";
import About from "./components/Contents/About";
import Projects from "./components/Contents/Projects";
import Skills from "./components/Contents/Skills";
import Contact from "./components/Contents/Contact";

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
    <div className="min-h-screen bg-gray-50">
      <Head activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 mt-8">
        {renderContent()}
      </main>
    </div>
  );
}
