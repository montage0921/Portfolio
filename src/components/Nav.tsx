import { Download } from "lucide-react";
import React from "react";

const sections = [
  { sectionName: "Home", id: "home" },
  { sectionName: "My Journey", id: "journey" },
  { sectionName: "Skills", id: "skills" },
  { sectionName: "Projects", id: "projects" },
  { sectionName: "Contact Me", id: "contact" },
];

export default function Nav() {
  function handleScollIntoSection(id: string) {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="pl-64 flex gap-x-8 text-[var(--navbar-text-color)] font-semibold">
      {sections.map((section, i) => (
        <div
          className="hover:text-[hsl(var(--theme-color))] hover: cursor-pointer"
          key={i}
          onClick={() => handleScollIntoSection(section.id)}
        >
          {section.sectionName}
        </div>
      ))}
      <a
        className="pl-30 flex gap-1 hover:text-[hsl(var(--theme-color))] hover: cursor-pointer"
        href="public\Te Shi - Resume.pdf"
        download={true}
      >
        <Download />
        Resume
      </a>
    </div>
  );
}
