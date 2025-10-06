import { Download } from "lucide-react";
import { sections } from "../data/sections";

export default function Nav() {
  function handleScollIntoSection(id: string) {
    const section = document.getElementById(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="hidden md:flex pl-64  gap-x-8 text-[var(--navbar-text-color)] font-semibold">
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
