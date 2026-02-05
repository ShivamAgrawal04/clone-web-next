"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BellIcon } from "@/components/BellIcon";
import { CompassIcon } from "@/components/CompassIcon";
import { HouseIcon } from "@/components/HouseIcon";
import { MessageCircleIcon } from "@/components/MessageCircleIcon";
import { UserRoundIcon } from "@/components/UserRoundIcon";

const items = [
  { name: "Home", href: "/", icon: HouseIcon },
  { name: "Discover", href: "/discover", icon: CompassIcon },
  { name: "Messages", href: "/messages", icon: MessageCircleIcon },
  { name: "Notifications", href: "/notifications", icon: BellIcon },
  { name: "Login", href: "/finance", icon: UserRoundIcon },
];

export function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Menu Button */}
      <button onClick={() => setOpen(true)} className="sm:hidden text-xl">
        ☰
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-64 bg-background p-6 transition-transform
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mb-6 text-xl font-semibold">Whop</div>

        <nav className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2
                  ${active ? "bg-muted" : "hover:bg-muted"}
                `}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
