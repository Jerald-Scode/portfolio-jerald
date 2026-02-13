import React from "react";

const ProjectCard: React.FC<{
  title: string;
  date: string;
  description: string;
  tech?: string[];
  image?: string;
}> = ({ title, date, description, tech = [], image }) => {
  return (
    <div className="bg-white/90 rounded-lg shadow p-4 space-y-3">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-gray-800">{title}</div>
              <div className="text-xs text-gray-500">{date}</div>
            </div>
            <div className="flex items-center gap-2">
              <a
                className="text-sm px-2 py-1 bg-blue-600 text-white rounded"
                href="#"
              >
                Live
              </a>
              <a className="text-sm px-2 py-1 bg-gray-100 rounded" href="#">
                Repo
              </a>
            </div>
          </div>
          <div className="text-gray-700 text-sm mt-2">{description}</div>
          <div className="flex flex-wrap gap-2 mt-3 text-xs text-gray-600">
            {tech.map((t) => (
              <span key={t} className="px-2 py-1 bg-gray-100 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      {image && (
        <img
          src={image}
          className="w-full rounded-md mt-2 object-cover"
          alt="project"
        />
      )}
    </div>
  );
};

export const ProfilePosts: React.FC = () => {
  return (
    <section className="space-y-6">
      <div className="bg-white/90 rounded-lg shadow p-4">
        <div className="flex items-start gap-3">
          <img
            src="/header-img/jeep drive.jpg"
            alt="me"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <input
              className="w-full bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-600"
              placeholder="Add a new project — title, short description, tech stack"
            />
            <div className="flex items-center gap-3 mt-3 text-sm text-gray-500">
              <button className="px-3 py-1 rounded bg-green-50 text-green-600">
                Add screenshot
              </button>
              <button className="px-3 py-1 rounded bg-blue-50 text-blue-600">
                Add link
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm font-medium">Projects</div>
        <div className="text-sm text-gray-500">Filter • Sort</div>
      </div>

      <ProjectCard
        title="Portfolio Website"
        date="Jan 2026"
        description="A responsive portfolio built with Next.js, Tailwind CSS, and TypeScript. Focused on accessibility and performance."
        tech={["Next.js", "TypeScript", "Tailwind"]}
        image="/header-img/Cartoon Motorcyle.png"
      />

      <ProjectCard
        title="Attendance System (School)"
        date="Dec 2025"
        description="An attendance & reporting tool designed for teachers — demonstrates CRUD, CSV export, and charting."
        tech={["React", "Node.js", "CSV"]}
      />
    </section>
  );
};
