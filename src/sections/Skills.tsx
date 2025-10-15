import React from "react";
import SectionTitle from "../utility/SectionTitle";
import SkillDisplay from "../components/SkillDisplay";

export default function Skills() {
  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center gap-7 pt-30"
    >
      <SectionTitle text="My" coloredText="Skills" />
      <SkillDisplay />
    </div>
  );
}
