import SkillIcon from "../utility/SkillIcon";

type SkillsCardProps = {
  skill: string;
  progress: number;
  img: string;
};

export default function SkillCard({ skill, progress, img }: SkillsCardProps) {
  return (
    <div className="flex flex-col justify-between bg-[hsl(var(--card-bg))] w-[304px] h-[128px] p-6 text-xl rounded-sm">
      <div className="flex gap-2 items-center">
        <SkillIcon imgName={img} />
        <h1>{skill}</h1>
      </div>

      {/* <progress max="100" value={10} className="skill-progress"></progress> */}
      <div className="w-full h-3 bg-[var(--navbar-text-color)] rounded-full overflow-hidden">
        <div
          className="h-full bg-[hsl(var(--theme-color))] rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm">{progress}%</p>
    </div>
  );
}
