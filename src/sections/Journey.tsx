import React from "react";
import MeIntro from "../components/MeIntro";
import MeTimeLine from "../components/MeTimeLine";

export default function Journey() {
  return (
    <div id="journey" className="min-h-screen ">
      <MeIntro />
      <MeTimeLine />
    </div>
  );
}
