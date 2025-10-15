import { useState } from "react";
import skills from "../data/skills.json";
import SkillCard from "./SkillCard";

const tabs = ["All", "Front End", "Back End", "ML/AI", "Tools"];

export default function SkillDisplay() {
  const [selectedTab, setSelectedTab] = useState("All");

  function handleTabSelect(t: string) {
    setSelectedTab(t);
  }
  return (
    <div className="flex flex-col gap-8 items-center w-full ">
      <ul className="px-5 flex gap-10 text-xl text-[var(--navbar-text-color)]">
        {tabs.map((t, i) => (
          <li
            className={`${
              selectedTab === t ? "text-[hsl(var(--theme-color))]" : ""
            } hover:cursor-pointer`}
            key={i}
            onClick={() => handleTabSelect(t)}
          >
            {t}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {selectedTab === "All"
          ? skills.map((s, i) => (
              <SkillCard
                key={i}
                skill={s.skill}
                progress={s.progress}
                img={s.icon}
              />
            ))
          : skills
              .filter((s) => s.class === selectedTab)
              .map((s, i) => (
                <SkillCard
                  key={i}
                  skill={s.skill}
                  progress={s.progress}
                  img={s.icon}
                />
              ))}
      </div>
    </div>
  );
}
