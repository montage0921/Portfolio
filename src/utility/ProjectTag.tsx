export default function ProjectTag({ content }: { content: string }) {
  return (
    <div className="text-sm font-semibold border border-[hsl(var(--card-text))] rounded-full px-2  inline-flex items-center">
      {content}
    </div>
  );
}
