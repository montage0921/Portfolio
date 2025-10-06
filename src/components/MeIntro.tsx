import MyButton from "../utility/MyButton";

export default function MeIntro() {
  function handleContact() {
    const contactDiv = document.getElementById("contact");
    contactDiv?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="flex-1 flex flex-col gap-4 items-center text-center max-w-2xl md:max-w-xl leading-loose text-lg">
      <h3 className="text-xl md:text-2xl text-[var(--navbar-text-color)] font-semibold">
        Passionate Full-Stack Developer & AI Engineer
      </h3>
      <p>
        With hands-on experience across React, TypeScript, Java Spring Boot, and
        Python, I build scalable, user-centric web applications that bridge
        design and technology.
      </p>
      <p>
        I’m driven by the challenge of crafting clean, reliable, and impactful
        digital products and I’m always eager to learn more!
      </p>
      <div className="flex gap-10">
        <MyButton
          color={"var(--theme-color)"}
          text={"Contact Me"}
          btFn={handleContact}
        />
        <MyButton
          color={"var(--bg-color)"}
          borderColor="var(--theme-color)"
          text={"Download Resume"}
          download={true}
          href="public\Te Shi - Resume.pdf"
        />
      </div>
    </div>
  );
}
