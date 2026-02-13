import React from "react";
import { Card } from "./card";

export const ProfileSidebar: React.FC = () => {
  return (
    <aside className="space-y-6">
      <Card title="Personal details" className="bg-white/80">
        <ul className="text-sm text-gray-700 space-y-3">
          <li className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>April 12, 2002</span>
          </li>
          <li className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.6 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Female</span>
          </li>
          <li className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5V9a2 2 0 00-2-2h-3M2 20h5V4H4a2 2 0 00-2 2v14z"
              />
            </svg>
            <span>Tagaytay City, Philippines</span>
          </li>
        </ul>
      </Card>

      <Card title="Featured Projects" className="bg-white/80">
        <div className="grid grid-cols-2 gap-3">
          <img
            src="/header-img/Cartoon Motorcyle.png"
            alt="project-1"
            className="w-full h-20 object-cover rounded-md"
          />
          <img
            src="/header-img/jeep drive.jpg"
            alt="project-2"
            className="w-full h-20 object-cover rounded-md"
          />
          <div className="col-span-2 text-sm text-gray-600">
            View portfolio for more projects
          </div>
        </div>
      </Card>

      <Card title="Skills" className="bg-white/80">
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Accessibility",
            "UI/UX",
          ].map((s) => (
            <span
              key={s}
              className="px-2 py-1 bg-gray-100 rounded text-gray-700"
            >
              {s}
            </span>
          ))}
        </div>
      </Card>
    </aside>
  );
};
