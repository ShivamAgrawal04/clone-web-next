"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatedIconWrapper } from "./AnimatedIconWrapper";

// Icons Imports
import { HouseIcon } from "@/components/HouseIcon";
import { CompassIcon } from "@/components/CompassIcon";
import { MessageCircleIcon } from "@/components/MessageCircleIcon";
import { BellIcon } from "@/components/BellIcon";
import { TrendingUpDownIcon } from "@/components/TrendingUpDownIcon";
import { UserRoundIcon } from "@/components/UserRoundIcon";

const navItems = [
  { name: "Home", href: "/home", icon: HouseIcon },
  { name: "Discover", href: "/discover", icon: CompassIcon },
  { name: "Messages", href: "/messages", icon: MessageCircleIcon },
  { name: "Notifications", href: "/notifications", icon: BellIcon },
  { name: "Create a business", href: "/finance", icon: TrendingUpDownIcon },
  { name: "Login", href: "/finance", icon: UserRoundIcon },
];

export function Sidebar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 min-h-screen w-64 border-r bg-side-background px-2 py-6 hidden md:block">
      <div className="mb-8 text-xl font-semibold px-4">Whop</div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          const isHovered = hoveredItem === item.name;

          return (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`flex items-center gap-2.5 rounded-xl px-2.5 py-2.5 text-[18px] font-medium transition-all ${
                isActive
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {/* Har Icon ko Wrapper mein daal do */}
              <AnimatedIconWrapper isHovered={isHovered}>
                <Icon className="h-7 w-7 stroke-[1.75]" />
              </AnimatedIconWrapper>

              <span className="flex-1">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
