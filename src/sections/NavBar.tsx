"use client";
import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import DarkMode from "../components/DarkMode";
import { Menu, X } from "lucide-react";
import { sections } from "../data/sections";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); //for mobile version burger menu
  const [isVisible, setIsVisible] = useState(true); //hide when not scroll

  // navbar visible when scrolling, and hidden when not
  useEffect(function () {
    let scrollTimer: number;
    function handleScroll() {
      setIsVisible(true);
      clearTimeout(scrollTimer);
      // disappear after 1 second so user has time to click on it
      // stay if scroll bar is at top
      scrollTimer = window.setTimeout(() => {
        if (window.scrollY > 100) setIsVisible(false);
        else setIsVisible(true);
      }, 800);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(function () {
    function handleMouseEnterOrLeaveTop(e: MouseEvent) {
      if (e.clientY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("mousemove", handleMouseEnterOrLeaveTop);
    return () =>
      window.removeEventListener("mousemove", handleMouseEnterOrLeaveTop);
  }, []);

  function handleScollIntoSection(id: string) {
    const section = document.getElementById(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsOpen(false);
  }

  return (
    <div
      className={`px-2 flex items-center justify-between md:px-8 py-4 transition-opacity duration-500 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <Logo />
      <Nav />
      <div className="flex gap-2">
        <Menu
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <DarkMode size={25} />
      </div>

      {/* drop down menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[hsl(var(--bg-color))]/75 flex flex-col items-center justify-center gap-y-8 text-xl font-semibold md:hidden">
          {sections.map((s, i) => (
            <div
              className="hover:cursor-pointer hover:text-[hsl(var(--theme-color))]"
              key={i}
              onClick={() => handleScollIntoSection(s.id)}
            >
              {s.sectionName}
            </div>
          ))}
          <X
            size={40}
            className="fixed right-10 top-10 hover:cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
