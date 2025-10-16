import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../utility/SectionTitle";
import project from "../data/project.json";
import MyButton from "../utility/MyButton";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div
      id="projects"
      className="min-h-screen pt-30 flex flex-col items-center gap-3"
    >
      <SectionTitle text="Featured" coloredText="Project" />
      <p className="max-w-2xl text-center">
        Here are some of my recent projects. Each project was carefully crafted
        with attention to detail, performance, and user experience. It is
        updated constantly.
      </p>
      <div className="grid px-20 grid-cols-1 md:grid-cols-3 gap-8">
        {project.map((p) => (
          <ProjectCard projectInfo={p} />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="mt-10"
      >
        <MyButton
          color={"var(--theme-color)"}
          text={"View My Github"}
          link={true}
          href={"https://github.com/montage0921"}
        />
      </motion.div>
    </div>
  );
}
