import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLocationDot,
  faHeart,
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
  fullName = "Jerald Sto. Domingo",
  bio = "A passionate web developer with a knack for creating dynamic and responsive websites.",
  countLikes = 0,
  position = "Web Developer",
  location = "Tagaytay City, Philippines",
}) => {
  return (
    <header className="relative flex flex-col items-center justify-center gap-4 pr-6 pl-6 pb-12 bg-gradient-to-b from-gray-100 to-gray-200 shadow-md">
      <div className="relative w-full max-w-4xl">
        <div className="flex items-center w-full h-60 border-2 border-gray-300 rounded-lg overflow-hidden">
          <img
            src={coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative mt-8 bottom-4 left-4 flex items-start space-x-4">
          <img
            src={imageSrc}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="text-left p-3 rounded-lg  w-90">
            <h1 className="text-gray-800 font-bold text-xl mb-1">{fullName}</h1>
            <p className="text-gray-600 text-xs mb-2">{bio}</p>
            <div className="flex items-center space-x-4 text-gray-600 text-xs">
              <span className="flex items-center">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  size="sm"
                  className="mr-1 w-3 h-3"
                />
                {countLikes} likes
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
                  className="mr-1 w-3 h-3 "
                />
                {location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Head;
