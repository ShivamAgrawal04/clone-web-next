"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedIconWrapper } from "./AnimatedIconWrapper";

// Icons
import { HouseIcon } from "@/components/HouseIcon";
import { CompassIcon } from "@/components/CompassIcon";
import { MessageCircleIcon } from "@/components/MessageCircleIcon";
import { BellIcon } from "@/components/BellIcon";
import { TrendingUpDownIcon } from "@/components/TrendingUpDownIcon";
import { UserRoundIcon } from "@/components/UserRoundIcon";
import { MegaphoneIcon } from "@/components/MegaphoneIcon";
import { useState } from "react";
import { BadgeDollarIcon } from "../BadgeDollarIcon";

export const navItems = [
  { name: "Home", href: "/home", icon: HouseIcon },
  { name: "Discover", href: "/discover", icon: CompassIcon },
  { name: "Campaign", href: "/campaign", icon: MegaphoneIcon },
  // { name: "Messages", href: "/messages", icon: MessageCircleIcon },
  { name: "Accounts", href: "/accounts", icon: UserRoundIcon },

  { name: "Notifications", href: "/notifications", icon: BellIcon },
  { name: "Balance", href: "/balance", icon: BadgeDollarIcon },
  { name: "Create a business", href: "/finance", icon: TrendingUpDownIcon },
  { name: "Login", href: "/finance", icon: UserRoundIcon },
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
        transition-[width] duration-300 ease-out
        ${expanded ? "w-64" : "w-20"}
      `}
    >
      <div className="px-7 py-6 text-xl font-semibold text-foreground">
        {expanded ? "Whop" : "W"}
      </div>

      <nav className="space-y-2 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          const hovered = hoveredItem === item.name;

          return (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`
                flex items-center gap-3 rounded-xl px-4 py-2.5
                transition-colors duration-200
                ${active
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"}
              `}
            >
              {/* 👇 ONLY THIS ICON ANIMATES */}
              <AnimatedIconWrapper isHovered={hovered}>
                <Icon className="h-7 w-7 stroke-[1.75]" />
              </AnimatedIconWrapper>

              {expanded && (
                <span className="whitespace-nowrap transition-opacity duration-200">
                  {item.name}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
