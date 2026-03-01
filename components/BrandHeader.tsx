"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function BrandHeader() {
    const [progress, setProgress] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const el = document.documentElement;
            const max = el.scrollHeight - el.clientHeight;
            setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
            <div className="h-[3px] bg-[#1a1a1a]">
                <div
                    className="h-full bg-[#e5383b] transition-all duration-150"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="w-full flex items-center justify-between px-4 sm:px-8 py-4">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3">
                        <svg width="34" height="34" viewBox="0 0 28 28" fill="none">
                            <path d="M4 6l4 12 6-8 6 8 4-12" stroke="#e5383b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-xl font-bold text-white/90 tracking-tight">bennybucks</span>
                    </Link>
                </div>

                <div className="flex items-center gap-6 md:gap-8 font-semibold text-sm">
                    {/* Nav Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {/* Verticals Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors uppercase tracking-wider text-xs border-b-2 border-transparent">
                                Verticals
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            {/* Invisible hover bridge */}
                            <div className="absolute top-full left-0 w-full h-4"></div>

                            <div className="absolute top-[calc(100%+8px)] -left-4 w-48 bg-[#1a1a1a] border border-white/10 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl z-50 p-2 flex flex-col gap-1">
                                <Link href="/ugc" className="px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors uppercase tracking-wider">UGC</Link>
                                <Link href="/clipping" className="px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors uppercase tracking-wider">Clipping</Link>
                                <Link href="/music" className="px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors uppercase tracking-wider">Music</Link>
                                <Link href="/logo" className="px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors uppercase tracking-wider">Logo</Link>
                            </div>
                        </div>

                        <Link href="/creators" className="text-white/60 hover:text-white uppercase tracking-wider text-xs transition-colors">Creator</Link>
                        <Link href="/brand-campaign" className="text-white/60 hover:text-white uppercase tracking-wider text-xs transition-colors">Brands</Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 lg:ml-6">
                        <button className="hidden md:block rounded-xl bg-transparent border border-white/20 hover:bg-white/5 text-white text-xs font-bold px-5 py-2.5 transition-colors uppercase tracking-wider">
                            Join as creator
                        </button>
                        <button className="rounded-xl bg-[#ccff00] hover:bg-[#bbe600] text-black text-[10px] sm:text-xs font-bold px-4 sm:px-6 py-2 sm:py-2.5 transition-colors uppercase tracking-wider">
                            Launch <span className="hidden sm:inline">your campaign</span>
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 -mr-2 text-white/80 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 flex flex-col px-6 py-6 gap-6 shadow-2xl">
                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-2">
                                <Link href="/ugc" className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm font-semibold hover:bg-white/10 transition-colors uppercase tracking-wider text-center">UGC</Link>
                                <Link href="/clipping" className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm font-semibold hover:bg-white/10 transition-colors uppercase tracking-wider text-center">Clipping</Link>
                                <Link href="/music" className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm font-semibold hover:bg-white/10 transition-colors uppercase tracking-wider text-center">Music</Link>
                                <Link href="/logo" className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm font-semibold hover:bg-white/10 transition-colors uppercase tracking-wider text-center">Logo</Link>
                            </div>
                        </div>

                        <div className="h-[1px] bg-white/10 w-full" />

                        <div className="flex flex-col gap-4">
                            <Link href="/creators" className="text-lg font-bold hover:text-white/80 transition-colors uppercase tracking-wider">Creator</Link>
                            <Link href="/brand-campaign" className="text-lg font-bold hover:text-white/80 transition-colors uppercase tracking-wider">Brands</Link>
                        </div>

                        <div className="h-[1px] bg-white/10 w-full" />

                        <button className="w-full rounded-xl bg-transparent border border-white/20 hover:bg-white/5 text-white text-sm font-bold px-5 py-3.5 transition-colors uppercase tracking-wider">
                            Join as creator
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}
