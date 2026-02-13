import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLocationDot,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

interface HeadProps {
  imageSrc?: string;
  coverImage?: string;
  fullName?: string;
  bio?: string;
  countLikes?: number;
  position?: string;
  location?: string;
}

const Head: React.FC<HeadProps> = ({
  coverImage = "/header-img/Cartoon Motorcyle.png",
  imageSrc = "/header-img/jeep drive.jpg",
  fullName = "Habusayaf Abdulah",
  bio = "A passionate web developer with a knack for creating dynamic and responsive websites.",
  countLikes = 0,
  position = "Web Developer",
  location = "Tagaytay City, Philippines",
}) => {
  return (
    <header className="relative flex flex-col items-center justify-center gap-4 pr-6 pl-6 pb-12 bg-gradient-to-b from-gray-100 to-gray-200 shadow-md">
      <div className="relative w-full max-w-4xl">
        <div className="flex items-center w-full h-40 sm:h-60 border-2 border-gray-300 rounded-lg overflow-hidden">
          <img
            src={coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative mt-6 sm:mt-8 bottom-4 left-4 flex items-start w-full gap-4">
          <img
            src={imageSrc}
            alt="Profile"
            className="w-20 h-20 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />

          <div className="flex-1 text-left p-2 sm:p-3 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h1 className="text-gray-800 font-bold text-lg sm:text-xl mb-1">
                  {fullName}{" "}
                  <span className="text-gray-400 font-normal hidden sm:inline">
                    (Sallie)
                  </span>
                </h1>
                <p className="text-gray-600 text-xs sm:text-sm mb-2">{bio}</p>

                <div className="flex flex-wrap items-center gap-3 text-gray-600 text-xs sm:text-sm">
                  <span className="flex items-center">
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      size="sm"
                      className="mr-1 w-3 h-3"
                    />
                    {countLikes} followers
                  </span>
                  <span className="flex items-center">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      size="sm"
                      className="mr-1 w-3 h-3"
                    />
                    {position}
                  </span>
                  <span className="flex items-center">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      size="sm"
                      className="mr-1 w-3 h-3"
                    />
                    {location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-3">
                  <button className="px-3 py-1 bg-gray-800 text-white rounded text-sm shadow">
                    Contact
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm shadow">
                    Hire me
                  </button>
                </div>
                <button className="sm:hidden px-2 py-1 bg-gray-100 rounded text-sm">
                  ⋯
                </button>
              </div>
            </div>

            {/* Tabs (portfolio-focused) */}
            <nav className="mt-4 border-t pt-3 overflow-x-auto">
              <ul className="flex gap-6 text-sm text-gray-600 whitespace-nowrap">
                <li className="border-b-2 border-blue-600 pb-2">All</li>
                <li className="pb-2">About</li>
                <li className="pb-2">Projects</li>
                <li className="pb-2">Skills</li>
                <li className="pb-2">Contact</li>
                <li className="pb-2">More ▾</li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gray-300 h-0.5"></div>
      </div>
    </header>
  );
};

export default Head;
