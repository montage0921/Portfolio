export default function TimelineIcon({ imgName }: { imgName: string }) {
  return (
    <img className="rounded-full" src={`/assets/${imgName}`} alt={imgName} />
  );
}
