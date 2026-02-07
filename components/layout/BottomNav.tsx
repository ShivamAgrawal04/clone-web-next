"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./Sidebar";
import { AnimatedIconWrapper } from "./AnimatedIconWrapper";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[60] flex h-16 items-center justify-around border-t bg-background px-2 pb-safe shadow-[0_-1px_3px_rgba(0,0,0,0.05)] md:hidden">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center gap-1 p-2 transition-colors ${
              active ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
             <Icon className={`h-6 w-6 stroke-[1.5] ${active ? "stroke-[2.5]" : ""}`} /> 
          </Link>
        );
      })}
    </nav>
  );
}
