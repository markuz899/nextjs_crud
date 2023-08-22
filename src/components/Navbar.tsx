import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-600 rounded-md px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Home
      </Link>
      <Link
        className="text-black p-2 rounded-md bg-cyan-500 hover:bg-cyan-800 hover:text-white transition-colors duration-200"
        href={"/addTopic"}
      >
        Add Topic
      </Link>
    </nav>
  );
}
