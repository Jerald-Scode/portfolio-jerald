import React from "react";
import Head from "./layouts/head";
import ProfileSidebarPortfolio from "./components/ProfileSidebarPortfolio";
import { ProfilePosts } from "./components/ProfilePosts";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head
        fullName="Rosallie Montemayor"
        bio="Frontend developer — building accessible, responsive web apps. Selected projects & case studies below."
        countLikes={1200}
        position="Frontend Developer"
        location="Tagaytay City, Philippines"
      />

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 order-1 lg:order-1">
            <ProfileSidebarPortfolio />
          </div>

          <div className="lg:col-span-2 order-2 lg:order-2">
            <ProfilePosts />
          </div>
        </div>
      </main>
    </div>
  );
}
