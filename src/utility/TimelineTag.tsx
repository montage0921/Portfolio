type TimelineTagProps = {
  text: string;
};

export default function TimelineTag({ text }: TimelineTagProps) {
  return (
    <div className="bg-gray-300 text-black text-[0.8rem] font-medium p-1 rounded-[3px]">
      {text}
    </div>
  );
}
