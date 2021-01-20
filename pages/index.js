import React from "react";
import dynamic from "next/dynamic";

const Search = dynamic(() => import("../components/SearchBar"));
const NavBar = dynamic(() => import("../components/Navbar"));

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div>
        <Search />
      </div>
    </>
  );
}
