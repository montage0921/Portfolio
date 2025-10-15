export default function SkillIcon({ imgName }: { imgName: string }) {
  return (
    <img
      className="w-5 h-5 rounded-[2px]"
      src={`/assets/${imgName}`}
      alt={imgName}
    />
  );
}
