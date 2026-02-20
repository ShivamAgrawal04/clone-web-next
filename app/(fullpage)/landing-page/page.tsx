"use client";

import { useState, useEffect, useRef } from "react";

/* ─── Types ─── */
type Section = { id: string; label: string };

/* ─── Data ─── */
const sections: Section[] = [
    { id: "intro", label: "Introduction" },
    { id: "what-is", label: "What is a whop?" },
    { id: "examples", label: "Real examples" },
    { id: "how-it-works", label: "How it works" },
    { id: "get-started", label: "Getting started" },
    { id: "faq", label: "FAQ" },
];

/* ─── Sub-components ─── */

function TopNav({ progress }: { progress: number }) {
    return (
        <header className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-white/10">
            {/* Red progress bar */}
            <div className="h-[2px] bg-[#1a1a1a]">
                <div
                    className="h-full bg-[#e5383b] transition-all duration-150"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Main nav row */}
            <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3">
                {/* Left: logo + nav links */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1.5">
                        {/* W logo mark */}
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M4 6l4 12 6-8 6 8 4-12" stroke="#e5383b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-semibold text-white/70">bennybucks</span>
                    </div>

                </div>

                {/* Right: icons + buttons */}
                <div className="flex items-center gap-3">
                    {/* Share icon */}
                    {/* <button className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                            <polyline points="16 6 12 2 8 6" />
                            <line x1="12" y1="2" x2="12" y2="15" />
                        </svg>
                    </button> */}
                    {/* Search icon */}
                    {/* <button className="h-8 w-8 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </button> */}
                    <a href="#" className="hidden sm:block text-sm text-white/70 hover:text-white font-medium px-2">
                        Join Our Community
                    </a>
                    <button className="rounded-lg bg-[#3b6ff5] hover:bg-[#3061e0] text-white text-sm font-semibold px-4 py-1.5 transition-colors">
                        Launch Campaign
                    </button>
                </div>
            </div>
        </header>
    );
}

/* ─── Page ─── */
export default function LandingPage() {
    const [progress, setProgress] = useState(0);
    const [activeTab, setActiveTab] = useState<"listen" | "contents" | "summary">("contents");
    const [activeSection, setActiveSection] = useState("intro");
    const articleRef = useRef<HTMLDivElement>(null);

    /* scroll progress */
    useEffect(() => {
        const onScroll = () => {
            const el = document.documentElement;
            const scrolled = el.scrollTop;
            const max = el.scrollHeight - el.clientHeight;
            setProgress(max > 0 ? (scrolled / max) * 100 : 0);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* active section tracking */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                }
            },
            { rootMargin: "-30% 0px -60% 0px" }
        );
        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white">
            <TopNav progress={progress} />

            {/* ─── HERO (full-width) ─── */}
            <section className="bg-[#111111] border-b border-white/10">
                <div className="mx-auto max-w-[1200px] px-5 py-12 md:py-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Left text */}
                    <div className="flex-1 min-w-0">
                        {/* Breadcrumb */}
                        <div className="mb-4 flex items-center gap-2 text-sm text-white/50">
                            <a href="#" className="hover:text-white/80">Blog</a>
                            <span>→</span>
                            <span className="text-white/80">Whop</span>
                        </div>
                        {/* Date */}
                        <p className="text-sm text-white/50 mb-3">Sep 22, 2025</p>
                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] text-white">
                            What is a whop? A complete guide to whops
                        </h1>
                        {/* Authors */}
                        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/60">
                            <div className="flex items-center gap-2">
                                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-[10px] font-black text-white">E</div>
                                <span>By <span className="text-white/90 font-medium">East</span></span>
                                <span className="text-blue-400">✔</span>
                            </div>
                            <span className="text-white/30">|</span>
                            <div className="flex items-center gap-2">
                                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-[10px] font-black text-white">K</div>
                                <span>Reviewed by <span className="text-[#3b6ff5] font-medium hover:underline cursor-pointer">Keisha Singleton</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Hero image / app mockup */}
                    <div className="w-full md:w-[420px] flex-shrink-0">
                        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/10 aspect-[4/3] flex items-center justify-center shadow-2xl">
                            {/* App UI mockup */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40" />
                            <div className="relative z-10 w-full h-full flex">
                                {/* Mock sidebar */}
                                <div className="w-14 bg-[#0a0a0f]/80 flex flex-col items-center py-4 gap-4 border-r border-white/10">
                                    <div className="w-8 h-8 rounded-lg bg-[#e5383b]/90 flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 28 28" fill="none">
                                            <path d="M4 6l4 12 6-8 6 8 4-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    {[
                                        <path key="h" strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />,
                                        <path key="b" strokeLinecap="round" strokeLinejoin="round" d="M15 21V12H9v9" />,
                                    ].map((_, i) => (
                                        <div key={i} className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                            <div className="w-3 h-3 rounded-sm bg-white/40" />
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 rounded-lg bg-[#3b6ff5]/60 flex items-center justify-center mt-1">
                                        <svg width="13" height="13" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                    </div>
                                </div>
                                {/* Mock content */}
                                <div className="flex-1 p-3 flex flex-col gap-2">
                                    <div className="text-[10px] text-white/40 font-medium">$500 IN 7 DAYS ▾</div>
                                    <div className="bg-[#1a1a2e]/60 rounded-lg p-2 text-[9px] text-white/70">
                                        <div className="font-semibold text-white/50 mb-1.5 text-[8px] tracking-widest">ADMIN AREA</div>
                                        <div className="flex items-center gap-1.5 py-1 border-b border-white/10">
                                            <div className="w-2 h-2 rounded-sm bg-white/20" />
                                            <span>Checklist</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 py-1">
                                            <div className="w-2 h-2 rounded-sm bg-white/20" />
                                            <span>Dashboard</span>
                                        </div>
                                    </div>
                                    {/* Mock cityscape image area */}
                                    <div className="flex-1 rounded-lg overflow-hidden bg-gradient-to-b from-purple-800/50 via-pink-800/30 to-indigo-900/50 flex items-end p-2">
                                        <div className="text-[8px] text-white/40">Whop App</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── BODY: sidebar + content ─── */}
            <div className="mx-auto max-w-[1200px] px-5 py-10 flex gap-8 items-start">

                {/* ─── LEFT STICKY SIDEBAR ─── */}
                <aside className="hidden lg:block w-[280px] xl:w-[300px] flex-shrink-0 sticky top-[60px] self-start space-y-5">

                    {/* Listen / Contents / Summary tabs */}
                    <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] overflow-hidden">
                        <div className="flex border-b border-white/10">
                            {(["listen", "contents", "summary"] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 py-3 text-xs font-semibold capitalize transition-colors flex items-center justify-center gap-1.5 ${activeTab === tab
                                        ? "text-white border-b-2 border-white"
                                        : "text-white/40 hover:text-white/70"
                                        }`}
                                >
                                    {tab === "listen" && (
                                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                                    )}
                                    {tab === "contents" && (
                                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                                    )}
                                    {tab === "summary" && (
                                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                                    )}
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Tab content */}
                        <div className="p-4">
                            {activeTab === "contents" && (
                                <nav className="space-y-0.5">
                                    {sections.map((s) => (
                                        <button
                                            key={s.id}
                                            onClick={() => scrollTo(s.id)}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${activeSection === s.id
                                                ? "bg-white/10 text-white font-medium"
                                                : "text-white/50 hover:text-white/80 hover:bg-white/5"
                                                }`}
                                        >
                                            {s.label}
                                        </button>
                                    ))}
                                </nav>
                            )}
                            {activeTab === "listen" && (
                                <div className="py-4 text-center">
                                    <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                                        <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /></svg>
                                    </div>
                                    <p className="text-sm text-white/60">Listen to this article</p>
                                    <button className="mt-3 rounded-lg bg-[#3b6ff5] text-white text-xs font-semibold px-4 py-2">
                                        Play audio
                                    </button>
                                </div>
                            )}
                            {activeTab === "summary" && (
                                <div className="space-y-2 py-2 text-sm text-white/60">
                                    <p className="leading-relaxed">A whop is a customizable online business space for courses, memberships, and communities.</p>
                                    <p className="leading-relaxed">Whop apps are modular building blocks for creators.</p>
                                    <p className="leading-relaxed">Built-in marketplace helps creators get discovered.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Promo card */}
                    <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] overflow-hidden">
                        {/* Card image */}
                        <div className="relative h-44 bg-gradient-to-br from-[#0d1117] via-[#1a1f2e] to-[#0d1117] overflow-hidden">
                            {/* Mock dashboard screenshot */}
                            <div className="absolute inset-0 p-3">
                                <div className="w-full h-full bg-white/5 rounded-lg border border-white/10 p-2 overflow-hidden">
                                    <div className="text-[7px] text-white/40 mb-1">Today</div>
                                    <div className="flex justify-between text-[7px] text-green-400 mb-2">
                                        <span>$906,424.42</span><span>$1,210,454.61</span>
                                    </div>
                                    {/* Fake chart lines */}
                                    <div className="relative h-16">
                                        <svg viewBox="0 0 200 60" className="w-full h-full opacity-60">
                                            <polyline points="0,50 30,40 60,20 90,35 120,15 150,25 200,10" fill="none" stroke="#3b82f6" strokeWidth="2" />
                                            <polyline points="0,55 30,50 60,45 90,48 120,42 150,38 200,45" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4,2" />
                                        </svg>
                                    </div>
                                    <div className="text-[7px] text-white/40 mt-1">$10,000,000.00</div>
                                </div>
                            </div>
                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-10 w-10 rounded-full bg-black/60 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </div>
                            </div>
                        </div>
                        {/* Card body */}
                        <div className="p-4">
                            <p className="text-sm font-bold text-white leading-tight">
                                Start with an idea — we&apos;ll handle the rest
                            </p>
                            <p className="mt-1.5 text-xs text-white/50 leading-relaxed">
                                One platform for creating, hosting, and selling. Whop runs everything that powers your business.
                            </p>
                            <button className="mt-4 w-full rounded-lg bg-[#3b6ff5] hover:bg-[#3061e0] text-white text-sm font-semibold py-2.5 transition-colors">
                                Start selling today
                            </button>
                        </div>
                    </div>
                </aside>

                {/* ─── MAIN ARTICLE ─── */}
                <main ref={articleRef} className="min-w-0 flex-1 max-w-[760px]">

                    {/* Intro lead */}
                    <div id="intro" className="scroll-mt-20 mb-10">
                        <p className="text-[1.125rem] text-white/80 leading-[1.75] mb-4">
                            Whop is a platform for any online business. Learn what a whop is, explore real
                            examples, and see how you can start selling your own offers—from memberships, to
                            services, to coaching.
                        </p>

                        {/* Key takeaways */}
                        <div className="my-6 rounded-xl border border-white/10 bg-[#1a1a1a] p-5">
                            <p className="text-sm font-bold text-white mb-3">Key takeaways</p>
                            <ul className="space-y-2.5">
                                {[
                                    "A whop is a customizable online business space you can shape into courses, coaching, memberships, or any monetizable offer.",
                                    "Apps are modular building blocks that let creators add specific features like chat, courses, and forums to their whop.",
                                    "Whop combines creation tools with a built-in marketplace, helping creators both build and get discovered by millions of visitors.",
                                ].map((point) => (
                                    <li key={point} className="flex items-start gap-2.5 text-sm text-white/70 leading-relaxed">
                                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#3b6ff5] flex-shrink-0" />
                                        <span dangerouslySetInnerHTML={{ __html: point.replace(/(courses|coaching|memberships|monetizable offer|chat|courses|forums|built-in marketplace|millions)/g, '<span class="text-[#3b6ff5] font-medium">$1</span>') }} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-white/70 leading-relaxed">
                            The internet has made it possible for <em className="text-white not-italic font-medium">anyone</em> to turn an idea into a business. Whether you want
                            to teach, coach, build a community, or sell a service, all you need is the right place to bring it to
                            life.
                        </p>
                        <p className="mt-4 text-white/70 leading-relaxed">
                            That&apos;s where <span className="text-[#3b6ff5] font-medium">Whop comes in.</span>
                        </p>
                        <p className="mt-4 text-white/70 leading-relaxed">
                            Whop is the all-in-one platform and marketplace for online businesses of every kind. With
                            Whop, you can create a whop—your own offer that people can buy, join, or book.
                        </p>
                        <p className="mt-4 text-white/70 leading-relaxed">
                            A whop can be anything: an online course, a membership, a coaching program, a consulting
                            package, or even a hybrid offer that blends digital and in-person experiences.
                        </p>
                        <p className="mt-4 text-white/70 leading-relaxed">
                            Every whop comes with the tools you need to sell, manage, and scale your business in one
                            place. And because Whop has its own built-in marketplace, millions of people each month can
                            find and purchase offers just like yours.
                        </p>
                    </div>

                    {/* Section: What is a whop */}
                    <div id="what-is" className="scroll-mt-20 mb-10">
                        <h2 className="text-2xl font-extrabold text-white mb-5">What is a whop?</h2>

                        {/* Large section image */}
                        <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] bg-gradient-to-br from-purple-900 via-pink-900/60 to-indigo-900 flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-purple-800/20 to-indigo-900/80" />
                            {/* Mock Whop app + cityscape */}
                            <div className="relative z-10 flex w-full h-full">
                                <div className="w-14 bg-black/50 flex flex-col items-center py-5 gap-4 border-r border-white/10">
                                    <div className="w-9 h-9 rounded-xl bg-[#e5383b] flex items-center justify-center">
                                        <svg width="16" height="16" viewBox="0 0 28 28" fill="none">
                                            <path d="M4 6l4 12 6-8 6 8 4-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    {[0, 1, 2, 3].map(i => (
                                        <div key={i} className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                                            <div className="w-4 h-4 rounded bg-white/20" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex-1 p-4 flex flex-col justify-end">
                                    <div className="rounded-xl bg-black/40 backdrop-blur-md border border-white/10 p-3 max-w-[200px]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-5 h-5 rounded bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-sm bg-yellow-400" />
                                            </div>
                                            <span className="text-xs text-white/80 font-medium">Whop</span>
                                        </div>
                                        <p className="text-[10px] text-white/50">Your customizable business space</p>
                                    </div>
                                </div>
                            </div>
                            {/* Neon city overlay fade */}
                            <div className="absolute bottom-0 left-14 right-0 h-1/2 bg-gradient-to-t from-purple-900/60 to-transparent" />
                        </div>

                        <p className="text-white/70 leading-relaxed mb-4">
                            A whop is your customizable online space built to fit whatever business or community you want
                            to create.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-4">
                            When you first <span className="text-[#3b6ff5] underline cursor-pointer">set up your whop</span>, it starts as a blank canvas. From there, you shape it into
                            exactly what you need.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-4">
                            Maybe your whop offers group coaching calls, exclusive courses, or member-only discussions.
                            Maybe it&apos;s a booking hub for services, a paid newsletter, or a private community. With Whop,
                            you decide how it looks, feels, and functions.
                        </p>
                    </div>

                    {/* Section: Real examples */}
                    <div id="examples" className="scroll-mt-20 mb-10">
                        <h2 className="text-2xl font-extrabold text-white mb-5">Real examples of whops</h2>

                        {/* Example product card - Data Engineer Academy style */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-white mb-4">
                                Data Engineer Academy: <span className="text-white/70">$3,000/month</span>
                            </h3>
                            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] overflow-hidden">
                                {/* Card header */}
                                <div className="flex items-center gap-2 px-5 pt-4 pb-2">
                                    <div className="w-6 h-6 rounded bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
                                        <svg width="12" height="12" fill="none" stroke="#eab308" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6M9 12h6M9 15h4" /></svg>
                                    </div>
                                    <span className="text-sm font-semibold text-white">Data Engineer Academy</span>
                                </div>
                                {/* Card hero */}
                                <div className="mx-4 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-[#0d1117] to-[#1a1f2e] border border-white/10 p-6 text-center">
                                    <h4 className="text-xl font-extrabold text-white leading-tight mb-2">
                                        Learn how to code and land your<br />dream data engineer role.
                                    </h4>
                                    <p className="text-sm text-white/50 mb-5">
                                        Unlock The Skills To Excel In Data Engineering With Our Comprehensive<br />
                                        Academy. Learn From Experts And Gain Hands-On Experience.
                                    </p>
                                    {/* DE Academy badge */}
                                    <div className="mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0b0b0b] border border-white/10 max-w-[200px] p-4 flex items-center gap-3">
                                        <div className="h-12 w-12 rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
                                            <span className="text-xl font-black text-yellow-400">D</span>
                                        </div>
                                        <span className="text-lg font-extrabold text-white">DE Academy</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-white/70 leading-relaxed mb-4">
                            A high-ticket education &amp; mentorship program preparing people for data engineering roles. This
                            whop includes personalized curriculums, hands-on projects, mock interview prep, and
                            placement support.
                        </p>

                        {/* Another example row */}
                        <div className="rounded-xl border border-white/10 bg-[#1a1a1a] p-4 mb-4 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-xl bg-pink-500/20 border border-pink-400/20 flex items-center justify-center text-lg font-black text-pink-400 flex-shrink-0">
                                P
                            </div>
                            <div>
                                <p className="font-semibold text-white text-sm">Pop Mart Labubu Wonderland — <span className="text-white/60">$15/month</span></p>
                                <p className="text-xs text-white/50 mt-0.5">Exclusive collector&apos;s community with early access drops and trading channels.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section: How it works */}
                    <div id="how-it-works" className="scroll-mt-20 mb-10">
                        <h2 className="text-2xl font-extrabold text-white mb-5">How it works</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Once you set up your whop, members can purchase access using a one-time payment or
                            subscription. You control pricing, access levels, and what content they can see.
                        </p>
                        <div className="space-y-3">
                            {[
                                { n: "01", title: "Create your whop", desc: "Sign up free and set up your digital storefront in minutes." },
                                { n: "02", title: "Add apps & content", desc: "Choose from courses, community, coaching, newsletters, and more." },
                                { n: "03", title: "Set your price", desc: "One-time, subscription, or free — you decide." },
                                { n: "04", title: "Get discovered", desc: "List on the Whop marketplace and reach millions of buyers." },
                            ].map((s) => (
                                <div key={s.n} className="flex items-start gap-4 rounded-xl border border-white/10 bg-[#1a1a1a] px-5 py-4">
                                    <span className="text-2xl font-black text-white/15 flex-shrink-0 leading-none mt-0.5">{s.n}</span>
                                    <div>
                                        <p className="font-semibold text-white text-sm">{s.title}</p>
                                        <p className="text-xs text-white/50 mt-0.5">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section: Get started */}
                    <div id="get-started" className="scroll-mt-20 mb-10">
                        <h2 className="text-2xl font-extrabold text-white mb-5">Getting started</h2>
                        <p className="text-white/70 leading-relaxed mb-4">
                            Getting started with Whop is completely free. You only pay when you make money — Whop
                            takes a small percentage of your revenue, so there&apos;s no upfront cost.
                        </p>
                        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] p-6 text-center">
                            <p className="text-xl font-bold text-white mb-2">Ready to start your business?</p>
                            <p className="text-sm text-white/50 mb-5">Join thousands of creators already earning on Whop.</p>
                            <button className="rounded-xl bg-[#3b6ff5] hover:bg-[#3061e0] text-white font-bold px-8 py-3 transition-colors">
                                Start selling for free →
                            </button>
                        </div>
                    </div>

                    {/* Section: FAQ */}
                    <div id="faq" className="scroll-mt-20 mb-10">
                        <h2 className="text-2xl font-extrabold text-white mb-5">FAQ</h2>
                        <div className="space-y-3">
                            {[
                                { q: "Is Whop free to use?", a: "Yes. Creating a whop is completely free. Whop takes a small revenue share only when you make sales." },
                                { q: "What can I sell on Whop?", a: "Courses, memberships, coaching, SaaS tools, communities, newsletters, and more." },
                                { q: "How do I get paid?", a: "Earnings are deposited directly to your bank account or Stripe on a regular schedule." },
                                { q: "Can I migrate from another platform?", a: "Yes. Whop has tools to help you import members and content from other platforms." },
                            ].map((item, i) => (
                                <details key={i} className="group rounded-xl border border-white/10 bg-[#1a1a1a] overflow-hidden">
                                    <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-semibold text-white">
                                        {item.q}
                                        <span className="text-white/40 transition-transform group-open:rotate-180 ml-3 flex-shrink-0">
                                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
                                        </span>
                                    </summary>
                                    <div className="px-5 pb-4 text-sm text-white/60 leading-relaxed border-t border-white/5 pt-3">
                                        {item.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>

                    {/* Author card */}
                    <div className="mt-8 rounded-xl border border-white/10 bg-[#1a1a1a] p-5 flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-lg font-black text-white flex-shrink-0">E</div>
                        <div>
                            <p className="font-bold text-white">East</p>
                            <p className="text-xs text-white/50 mt-0.5">Creator educator and clipping expert. Helping the next generation of digital entrepreneurs build sustainable income streams.</p>
                        </div>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <button className="text-xs text-white/30 hover:text-white/60 transition-colors">Report this content</button>
                    </div>
                </main>
            </div>

            {/* ─── Mobile bottom TOC bar ─── */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#0f0f0f]/95 backdrop-blur-md">
                <div className="px-4 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
                    {sections.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => scrollTo(s.id)}
                            className={`flex-shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${activeSection === s.id
                                ? "bg-white text-black"
                                : "bg-white/10 text-white/60"
                                }`}
                        >
                            {s.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="h-14 lg:hidden" />

            {/* ─── Footer ─── */}
            {/* <footer className="border-t border-white/10 bg-[#0a0a0a]">
                <div className="mx-auto max-w-[1200px] px-5 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
                    <div className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
                            <path d="M4 6l4 12 6-8 6 8 4-12" stroke="#e5383b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-semibold text-white/70">Whop</span>
                    </div>
                    <div className="flex gap-5">
                        {["Terms", "Privacy", "Contact"].map(l => (
                            <a key={l} href="#" className="hover:text-white/70 transition-colors">{l}</a>
                        ))}
                    </div>
                    <p>© 2025 Whop Inc. All rights reserved.</p>
                </div>
            </footer> */}
        </div>
    );
}
