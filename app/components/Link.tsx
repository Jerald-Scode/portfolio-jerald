import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

interface LinkProps {
  href: string;
  text: string;
}

const Link: React.FC<LinkProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-blue-600 hover:underline"
    >
      {text}
      <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
    </a>
  );
};

export default Link;
