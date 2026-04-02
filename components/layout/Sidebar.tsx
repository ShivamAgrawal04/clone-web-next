"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedIconWrapper } from "./AnimatedIconWrapper";

// Icons
import { HouseIcon } from "@/components/HouseIcon";
import { CompassIcon } from "@/components/CompassIcon";
import { MessageCircleIcon } from "@/components/MessageCircleIcon";
import { BellIcon } from "@/components/BellIcon";
import { UserRoundIcon } from "@/components/UserRoundIcon";
import { MegaphoneIcon } from "@/components/MegaphoneIcon";
import { useState } from "react";
import { BadgeDollarIcon } from "../BadgeDollarIcon";
import { SettingsIcon } from "../ui/settings-icon";
import { Monitor, Sun, Moon } from "lucide-react";
import { useTheme } from "../theme-provider";

export interface MenuItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
}

export const navItems: MenuItem[] = [
  { name: "Home", href: "/home", icon: HouseIcon },
  { name: "Discover", href: "/discover", icon: CompassIcon },
  { name: "Campaign", href: "/campaign", icon: MegaphoneIcon },
  { name: "Accounts", href: "/accounts", icon: UserRoundIcon },
  { name: "Messages", href: "/messages", icon: MessageCircleIcon },
  { name: "Notifications", href: "/notifications", icon: BellIcon },
  { name: "Balance", href: "/balance", icon: BadgeDollarIcon },
  { name: "Settings", href: "/settings", icon: SettingsIcon },

  // { name: "Create a business", href: "/finance", icon: TrendingUpDownIcon },
];

export function Sidebar({
  expanded,
  setExpanded,
}: {
  expanded: boolean;
  setExpanded: (v: boolean) => void;
}) {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const currentNavItems: MenuItem[] = navItems;

  return (
    <aside
      onMouseEnter={() => {
        if (typeof window !== 'undefined' && window.innerWidth >= 768) {
          setExpanded(true);
        }
      }}
      onMouseLeave={() => {
        setExpanded(false);
        setHoveredItem(null);
      }}
      className={`
        h-full border-r bg-background
        transition-[width] duration-300 ease-out flex flex-col
        ${expanded ? "w-64" : "w-20"}
      `}
    >
      <nav className="space-y-2 px-2 pt-6">
        {currentNavItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          const hovered = hoveredItem === item.name;

          const content = (
            <>
              {/* 👇 ONLY THIS ICON ANIMATES */}
              <AnimatedIconWrapper isHovered={hovered}>
                <Icon className="h-7 w-7 stroke-[1.75]" />
              </AnimatedIconWrapper>

              {expanded && (
                <span className="whitespace-nowrap transition-opacity duration-200">
                  {item.name}
                </span>
              )}
            </>
          );

          const className = `
            flex w-full items-center gap-3 rounded-xl px-4 py-2.5
            transition-colors duration-200
            ${active
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"}
          `;

          if ('onClick' in item && item.onClick) {
            return (
              <button
                key={item.name}
                onClick={item.onClick}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className={className}
              >
                {content}
              </button>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              className={className}
            >
              {content}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-3 pb-10">
        {expanded ? (
          <div className="flex items-center gap-2 w-full animate-in fade-in duration-500">
            {/* Theme Switcher Container */}
            <div className="flex items-center bg-muted/50 rounded-xl p-1 border border-border flex-1 transition-colors">
              <button
                onClick={() => setTheme("system")}
                className={`flex-1 flex justify-center items-center py-2 rounded-lg transition-all ${theme === "system" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <Monitor size={18} strokeWidth={2} />
              </button>
              <button
                onClick={() => setTheme("light")}
                className={`flex-1 flex justify-center items-center py-2 rounded-lg transition-all ${theme === "light" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <Sun size={18} strokeWidth={2} />
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`flex-1 flex justify-center items-center py-2 rounded-lg transition-all ${theme === "dark" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <Moon size={18} strokeWidth={2} />
              </button>
            </div>

            {/* Language Switcher */}
            <button className="bg-muted border border-border rounded-xl px-3 py-2 text-[13px] font-bold text-foreground hover:bg-accent transition-colors">
              EN
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 animate-in fade-in duration-500">
            <div
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="bg-muted p-2 rounded-xl border border-border text-foreground cursor-pointer hover:bg-accent transition-colors"
            >
              {theme === "light" ? <Sun size={18} strokeWidth={2} /> : theme === "dark" ? <Moon size={18} strokeWidth={2} /> : <Monitor size={18} strokeWidth={2} />}
            </div>
            <div className="bg-muted border border-border rounded-xl px-2 py-1.5 text-[11px] font-bold text-foreground transition-colors">
              EN
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
