import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-600 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Home
      </Link>
      <Link className="bg-white text-black p-2" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
