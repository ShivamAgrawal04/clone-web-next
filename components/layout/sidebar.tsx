"use client";
import { BadgeDollarIcon } from "@/components/BadgeDollarIcon";
import { BellIcon } from "@/components/BellIcon";
import { CompassIcon } from "@/components/CompassIcon";
import { HouseIcon } from "@/components/HouseIcon";
import { MessageCircleIcon } from "@/components/MessageCircleIcon";
import { TrendingUpDownIcon } from "@/components/TrendingUpDownIcon";
import { UserRoundIcon } from "@/components/UserRoundIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/", icon: HouseIcon },
  { name: "Discover", href: "/discover", icon: CompassIcon },
  { name: "Messages", href: "/messages", icon: MessageCircleIcon },
  { name: "Notifications", href: "/notifications", icon: BellIcon },
  // { name: "Finance", href: "/finance", badge: "New", icon: BadgeDollarIcon },
  {
    name: "Create a business",
    href: "/finance",

    icon: TrendingUpDownIcon,
  },
  { name: "Login", href: "/finance", icon: UserRoundIcon },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className=" fixed left-0 top-0 z-40 w-64 border-r bg-side-background px-2 py-6 hidden md:block">
      {/* Logo */}
      <div className="mb-8 text-xl font-semibold">Whop</div>

      {/* Nav */}
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-[18px] font-medium transition-colors ${
                isActive
                  ? "text-foreground bg-[#e0e0e0]"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              } `}
            >
              {Icon && <Icon className="h-7.5 w-7.5 stroke-[1.75]" />}

              <span className="flex-1">{item.name}</span>

              {/* {item.badge && (
                <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[11px] text-white">
                  {item.badge}
                </span>
              )} */}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
