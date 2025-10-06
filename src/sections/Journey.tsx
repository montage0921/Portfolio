import React from "react";
import MeIntro from "../components/MeIntro";
import MeTimeLine from "../components/MeTimeLine";
import SectionTitle from "../utility/SectionTitle";

export default function Journey() {
  return (
    <div id="journey" className="min-h-screen flex ">
      <SectionTitle />
      <div>
        <MeIntro />
        <MeTimeLine />
      </div>
    </div>
  );
}
