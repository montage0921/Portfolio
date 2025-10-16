import { useState } from "react";
import { siGithub } from "simple-icons";

type GithubIconProps = {
  size?: number;
  href?: string;
  hoveredColor?: string;
};

export default function GithubIcon({
  size = 24,
  href,
  hoveredColor = "var(--theme-color)",
}: GithubIconProps) {
  const [isHover, setIsHover] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={isHover ? `hsl(${hoveredColor})` : "currentColor"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={siGithub.path} />
      </svg>
    </a>
  );
}
