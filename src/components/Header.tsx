import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <div className="fixed top-0 z-50 flex justify-between items-center w-full bg-white/5 p-3 h-16">
      <p>Logo</p>
      <div className="__links flex justify-cente items-center gap-3">
        <Link
          href="/components"
          className="text-white/70 transition-colors hover:text-white text-sm"
        >
          Components
        </Link>
        <div className="">
          <Input placeholder="Search UI components"/>
        </div>
      </div>
    </div>
  );
}
