import React from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <Nav />
    </div>
  );
}
