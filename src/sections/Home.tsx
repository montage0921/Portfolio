import React from "react";
import { motion } from "framer-motion";
import MyButton from "../utility/MyButton";
import { ChevronDown } from "lucide-react";

export default function Home() {
  function handleClick() {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col justify-between items-center pt-30 md:pt-40 "
    >
      <div className="flex flex-col justify-center items-center gap-6 mt-50">
        {" "}
        <motion.h1
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 -20% 0)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I'm <span className="text-[hsl(var(--theme-color))]">Gary</span>{" "}
          Shi
        </motion.h1>
        <motion.p
          className="text-base md:text-xl max-w-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          A full-stack developer and recent CS grad, ready to bring fresh ideas
          and contribute from day one.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          <MyButton
            color={"var(--theme-color)"}
            text={"View My Work"}
            btFn={handleClick}
          />
        </motion.div>
      </div>
      <motion.div
        className="flex flex-col p-2 justify-center items-center"
        animate={{ y: [0, 12, 0] }} // go down 12px then back up
        transition={{
          duration: 1.2,
          repeat: Infinity, // loop forever
          ease: "easeInOut",
        }}
      >
        <p className="text-[15px]">Scroll</p>
        <ChevronDown className=" text-[hsl(var(--theme-color))]" size={30} />
      </motion.div>
    </div>
  );
}
