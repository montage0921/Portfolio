import { ExternalLink } from "lucide-react";
import GithubIcon from "../utility/GithubIcon";
import ProjectTag from "../utility/ProjectTag";

type ProjectInfoProps = {
  imgsrc: string;
  tags: string[];
  title: string;
  description: string;
  github: string;
  link?: string;
};

export default function ProjectCard({
  projectInfo,
}: {
  projectInfo: ProjectInfoProps;
}) {
  return (
    <div
      className="group bg-[hsl(var(--card-bg))] rounded-md w-[500px] md:w-[350px] shadow-lg flex flex-col gap-5 overflow-hidden
      transform transition duration-300 ease-out hover:scale-105 hover:shadow-xl"
    >
      {/* Image container */}
      <div className="flex items-center justify-center overflow-hidden">
        <img
          src={`./assets/${projectInfo.imgsrc}`}
          alt={projectInfo.imgsrc}
          className="max-h-full object-cover transition duration-500 ease-out group-hover:scale-110"
        />
      </div>

      {/* Tags */}
      <div className="px-2 flex flex-col text-[hsl(var(--card-text))]">
        <div className="flex flex-wrap gap-2 mb-4">
          {projectInfo.tags.map((tag: string) => (
            <ProjectTag content={tag} />
          ))}
        </div>

        <h1 className="mt-1 text-xl font-bold text-center">
          {projectInfo.title}
        </h1>

        <p className="self-center text-center max-w-xs mb-5">
          {projectInfo.description}
        </p>

        <div className="px-2 flex gap-3 mb-5 items-center">
          <GithubIcon size={22} href={projectInfo.github} />
          {projectInfo.link && (
            <a
              href={projectInfo.link}
              className="hover:text-[hsl(var(--theme-color))] hover:cursor-pointer"
              target="_blank" // open a new tab
            >
              <ExternalLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
