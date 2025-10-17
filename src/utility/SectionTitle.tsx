type SectionTitleProsp = {
  text: string;
  coloredText: string;
};

export default function SectionTitle({ text, coloredText }: SectionTitleProsp) {
  return (
    <div className="text-3xl md:text-4xl font-bold">
      {text}{" "}
      <span className="text-[hsl(var(--theme-color))]">{coloredText}</span>
    </div>
  );
}
