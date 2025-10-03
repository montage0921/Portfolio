import React from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import DarkMode from "../components/DarkMode";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between px-8 py-4">
      <Logo />
      <Nav />
      <DarkMode size={25} />
    </div>
  );
}
