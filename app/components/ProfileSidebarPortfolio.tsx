import React from "react";
import { Card } from "./card";

const ProfileSidebarPortfolio: React.FC = () => {
  return (
    <aside className="space-y-6">
      <Card title="Contact" className="bg-white/80">
        <ul className="text-sm text-gray-700 space-y-3">
          <li className="flex items-start gap-3">
            <strong>Email:</strong>
            <span className="text-gray-600">habusayaf@example.com</span>
          </li>
          <li className="flex items-start gap-3">
            <strong>Location:</strong>
            <span className="text-gray-600">Tagaytay City, Philippines</span>
          </li>
          <li className="flex items-start gap-3">
            <strong>Availability:</strong>
            <span className="text-gray-600">Open to work / Freelance</span>
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

export default ProfileSidebarPortfolio;
