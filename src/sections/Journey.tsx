import MeIntro from "../components/MeIntro";
import MeTimeLine from "../components/MeTimeLine";
import SectionTitle from "../utility/SectionTitle";

export default function Journey() {
  return (
    <div
      id="journey"
      className="min-h-screen flex flex-col items-center gap-4 md:gap-7 pt-20"
    >
      <SectionTitle text="About" coloredText="Me" />
      <div className="w-full overflow-x-hidden flex flex-col md:flex-row justify-center items-center gap-20">
        <MeIntro />
        <MeTimeLine />
      </div>
    </div>
  );
}
