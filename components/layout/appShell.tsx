"use client";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar: desktop only */}
      <div className="hidden md:block">
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
      </div>

      {/* Content */}
      <div
        className="
          flex flex-1 flex-col bg-background
          transition-[margin-left] duration-300 ease-out
          md:ml-20 md:data-[expanded=true]:ml-64
        "
        data-expanded={expanded}
      >
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
