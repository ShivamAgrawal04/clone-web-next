"use client";
import { Sidebar } from "./Sidebar";
import { BottomNav } from "./BottomNav";
import { useState } from "react";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      {/* Sidebar: Visible only on Desktop now */}
      <div className={`hidden md:block h-full shrink-0 border-r z-50 transition-[width] duration-300 ease-out ${expanded ? "w-64" : "w-[70px]"} bg-background`}>
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
      </div>

      {/* Bottom Nav: Mobile only */}
      <BottomNav />

      {/* Content */}
      <div className="flex flex-1 flex-col overflow-hidden relative min-w-0">
        <main className="flex-1 overflow-y-auto w-full pb-16 md:pb-0">
          {children}
        </main>
      </div>
    </div>
  );
}
