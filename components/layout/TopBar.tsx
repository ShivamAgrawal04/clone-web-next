"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "@/components/SearchIcon";
import { MessageCircleIcon } from "@/components/MessageCircleIcon";
import { BellIcon } from "@/components/BellIcon";
import { AnimatedIconWrapper } from "./AnimatedIconWrapper";
import { ChevronDown, Settings, LogOut, User } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function TopBar() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    
    // Close dropdown on outside click
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/discover?search=${encodeURIComponent(searchQuery)}`);
    }
  }, [searchQuery, router]);

  if (!mounted) {
    return (
      <header className="flex h-[64px] items-center justify-between border-b border-white/5 bg-background px-6" />
    );
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-6 relative z-10 transition-colors">
      {/* Left side: Logo & Search bar */}
      <div className="flex items-center gap-6 flex-1">
        <Link href="/home" className="text-xl font-semibold text-foreground no-underline shrink-0">
          BennyBucks
        </Link>
        <form onSubmit={handleSearch} className="w-full max-w-[400px] relative group">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-foreground transition-colors" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search across BennyBucks"
            className="w-full pl-10 h-10 bg-muted border-none rounded-xl text-[13px] text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-border"
          />
        </form>
      </div>

      {/* Right side: Actions & User */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Chat icon */}
        <Link 
          href="/messages" 
          onMouseEnter={() => setHoveredIcon("messages")}
          onMouseLeave={() => setHoveredIcon(null)}
          className="p-2 text-muted-foreground hover:text-foreground md:hover:bg-muted rounded-full transition-all"
        >
          <AnimatedIconWrapper isHovered={hoveredIcon === "messages"}>
            <MessageCircleIcon className="h-5 w-5 stroke-[1.5]" />
          </AnimatedIconWrapper>
        </Link>

        {/* Notifications icon */}
        <Link 
          href="/notifications" 
          onMouseEnter={() => setHoveredIcon("notifications")}
          onMouseLeave={() => setHoveredIcon(null)}
          className="p-2 text-muted-foreground hover:text-foreground md:hover:bg-muted rounded-full transition-all"
        >
          <AnimatedIconWrapper isHovered={hoveredIcon === "notifications"}>
            <BellIcon className="h-5 w-5 stroke-[1.5]" />
          </AnimatedIconWrapper>
        </Link>

        {/* Colorful Gradient Avatar */}
        <Link href="/profile" className="h-8 w-8 rounded-full bg-linear-to-tr from-yellow-400 via-green-400 to-red-400 border border-border cursor-pointer shadow-lg hidden sm:block hover:ring-2 ring-primary/20 transition-all ring-offset-2 ring-offset-background" />

        {/* Balance Pill */}
        <Link href="/balance" className="bg-muted hover:bg-muted/80 border border-border rounded-full px-4 h-9 flex items-center transition-colors cursor-pointer ml-1 no-underline active:scale-95">
          <span className="text-[13px] font-bold text-foreground">₹0.00</span>
        </Link>

        {/* User Initials & Dropdown Container */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)} 
            className="flex items-center gap-1.5 pl-1.5 cursor-pointer group no-underline transition-transform"
          >
            <div className={`h-9 w-9 rounded-full bg-accent border ${dropdownOpen ? 'border-primary' : 'border-border'} flex items-center justify-center relative overflow-visible shadow-inner transition-colors`}>
              <span className="text-[11px] font-bold text-foreground tracking-tight">LE</span>
            </div>
            {/* External Chevron */}
            <div className={`text-muted-foreground/60 transition-transform hidden sm:block ${dropdownOpen ? 'rotate-180 text-foreground' : 'group-hover:text-foreground'}`}>
              <ChevronDown size={14} strokeWidth={2.5} />
            </div>
          </button>

          {/* Dropdown Menu Popup */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-3 w-60 bg-background border border-border rounded-xl shadow-2xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <Link 
                href="/profile"
                onClick={() => setDropdownOpen(false)}
                className="px-4 py-3 border-b border-border block hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-tr from-yellow-400 via-green-400 to-red-400 shrink-0" />
                  <div className="overflow-hidden">
                    <p className="text-sm font-bold text-foreground truncate hover:underline">Leo Edwards</p>
                    <p className="text-xs text-muted-foreground truncate">leo@example.com</p>
                  </div>
                </div>
              </Link>
              <div className="p-1.5 border-b border-border space-y-0.5">
                <Link 
                  href="/profile" 
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/60 rounded-lg transition-colors"
                >
                  <User size={16} className="text-muted-foreground" />
                  My Profile
                </Link>
                <Link 
                  href="/settings" 
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/60 rounded-lg transition-colors"
                >
                  <Settings size={16} className="text-muted-foreground" />
                  Settings
                </Link>
              </div>
              <div className="p-1.5">
                 <button 
                   onClick={() => setDropdownOpen(false)}
                   className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                 >
                   <LogOut size={16} />
                   Sign out
                 </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
