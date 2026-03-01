"use client";

import { useState, useEffect } from "react";

export default function BrandCampaign() {
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

  const brandLogos = [
    "Sonos",
    "Virgin",
    "Condé Nast",
    "Chipotle",
    "Live Nation",
    "Microsoft",
    "Alphabet",
    "American Eagle"
  ];

  const workItems = [
    { brand: "Microsoft NYFW", title: "App Preview", image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2574&auto=format&fit=crop", video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
    { brand: "Netflix Puzzled", title: "Game Over", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2564&auto=format&fit=crop", video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
    { brand: "Klarna", title: "Klarna", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2564&auto=format&fit=crop", video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
    { brand: "Microsoft Art Basel", title: "Powered", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2564&auto=format&fit=crop", video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
    { brand: "Activision", title: "Activision", image: "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=2564&auto=format&fit=crop", video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" }
  ];

  const services = [
    {
      title: "Pay Only for Performance",
      desc: "You invest in measurable engagement and real reach, which means your marketing budget is spent on results, not promises, ensuring every rupee works toward visible growth."
    },
    {
      title: "AI-Verified Content",
      desc: "Every submitted reel is reviewed by AI to ensure it meets your campaign guidelines, protecting your brand from low-quality, irrelevant, or non-compliant content while maintaining consistency at scale."
    },
    {
      title: "Choose Creators Before You Launch",
      desc: "You can launch a campaign draft, invite creators to submit profiles, scripts, sample videos, or interview responses, and select the most suitable talent before committing your full campaign budget."
    },
    {
      title: "Real-Time Insights",
      desc: "You monitor campaign performance as it happens, giving you the ability to analyze engagement, track reach, and optimize strategy instantly instead of waiting for delayed reports."
    },
    {
      title: "Cost-Efficient Marketing",
      desc: "By eliminating intermediaries and tying payouts directly to performance, you reduce wasted spend, increase accountability, and maximize your return on investment."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white selection:bg-[#3b6ff5] selection:text-white">
      {/* ── Navbar ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="h-[3px] bg-[#1a1a1a]">
          <div
            className="h-full bg-[#e5383b] transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="w-full flex items-center justify-between px-4 sm:px-8 py-4">
          <div className="flex items-center gap-3">
            <svg width="34" height="34" viewBox="0 0 28 28" fill="none">
              <path
                d="M4 6l4 12 6-8 6 8 4-12"
                stroke="#e5383b"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-bold text-white/90 tracking-tight">
              bennybucks
            </span>
          </div>

          <div className="flex items-center gap-6 md:gap-8 font-semibold text-sm">
            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Verticals Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors uppercase tracking-wider text-xs  border-b-2 border-transparent">
                  Verticals
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </button>
                {/* Invisible hover bridge */}
                <div className="absolute top-full left-0 w-full h-4"></div>

                <div className="absolute top-[calc(100%+8px)] -left-4 w-48 bg-[#1a1a1a] border border-white/10 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl z-50 p-2 flex flex-col gap-1">
                  <a href="#" className="px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors uppercase tracking-wider">UGC</a>
                  <a href="#" className="px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors uppercase tracking-wider">Clipping</a>
                  <a href="#" className="px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors uppercase tracking-wider">Music</a>
                  <a href="#" className="px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors uppercase tracking-wider">Logo</a>
                </div>
              </div>

              <a href="#" className="text-white/60 hover:text-white uppercase tracking-wider text-xs transition-colors">Creator</a>
              <a href="#" className="text-white/60 hover:text-white uppercase tracking-wider text-xs transition-colors">Brands</a>
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
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 flex flex-col px-6 py-6 gap-6 shadow-2xl">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-2">
                <a href="#" className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm font-semibold hover:bg-white/10 transition-colors uppercase tracking-wider text-center">UGC</a>
                <a href="#" className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm font-semibold hover:bg-white/10 transition-colors uppercase tracking-wider text-center">Clipping</a>
                <a href="#" className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm font-semibold hover:bg-white/10 transition-colors uppercase tracking-wider text-center">Music</a>
                <a href="#" className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm font-semibold hover:bg-white/10 transition-colors uppercase tracking-wider text-center">Logo</a>
              </div>
            </div>

            <div className="h-[1px] bg-white/10 w-full" />

            <div className="flex flex-col gap-4">
              <a href="#" className="text-lg font-bold hover:text-white/80 transition-colors uppercase tracking-wider">Creator</a>
              <a href="#" className="text-lg font-bold hover:text-white/80 transition-colors uppercase tracking-wider">Brands</a>
            </div>

            <div className="h-[1px] bg-white/10 w-full" />

            <button className="w-full rounded-xl bg-transparent border border-white/20 hover:bg-white/5 text-white text-sm font-bold px-5 py-3.5 transition-colors uppercase tracking-wider">
              Join as creator
            </button>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section className="pt-[110px] pb-12 px-4 sm:px-8 bg-[#0f0f0f] flex flex-col items-center justify-center">
        <div className="relative w-full mx-auto min-h-[85vh] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden flex flex-col items-center justify-center border border-white/5 shadow-2xl">
          {/* Mesh Gradient Background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#A57E6E] via-[#685E65] to-[#233246]">
            {/* Additional glows to make it look like a mesh */}
            <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[70%] bg-[#B58C7A] rounded-full mix-blend-overlay filter blur-[100px] opacity-70"></div>
            <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[70%] bg-[#1A2536] rounded-full mix-blend-overlay filter blur-[100px] opacity-80"></div>
            <div className="absolute top-[20%] right-[20%] w-[30%] h-[40%] bg-[#4B434C] rounded-full mix-blend-overlay filter blur-[80px] opacity-50"></div>
          </div>

          {/* Background super large text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 overflow-hidden px-4">
            <div className="text-[17vw] sm:text-[14vw] lg:text-[11vw] xl:text-[7vw] font-bold leading-[0.8] text-white w-full max-w-[1480px] mx-auto flex flex-col justify-center h-full drop-shadow-lg whitespace-nowrap">
              <div className="text-left md:text-center md:relative md:right-16 lg:right-32 xl:right-48 pr-[5vw] md:pr-0">The</div>
              <div className="text-right md:text-center md:relative lg:right-12 xl:-right-35 pl-[5vw] md:pl-0">Creator</div>
              <div className="text-center md:relative md:left-8 lg:left-12 xl:-left-20">Powered</div>
            </div>
          </div>

          {/* Foreground Image */}
          <div className="relative z-10 mx-auto w-full max-w-[280px] sm:max-w-[320px] aspect-[9.5/16] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]  group bg-[#1a1a1a]">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
              alt="Creator"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 inset-x-0 text-center">
              <span className="bg-black/40 backdrop-blur-md text-white font-semibold text-xs px-5 py-2.5 rounded-full border border-white/20 shadow-lg">
                Performance-First Marketing Platform
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Logos ── */}
      {/* <div className="py-12 border-b border-white/10 bg-[#0f0f0f]">
        <div className="w-full px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <h2 className="text-xl sm:text-2xl font-bold max-w-sm text-left leading-snug text-white/90">
            The world&apos;s best brands trust Bennybucks for Creator Marketing.
          </h2>
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-10 gap-y-6 flex-1 opacity-60 font-extrabold text-xl sm:text-2xl uppercase tracking-tighter">
            {brandLogos.map((logo, i) => (
              <span key={i} className="hover:opacity-100 transition-opacity cursor-pointer">{logo}</span>
            ))}
          </div>
        </div>
      </div> */}

      {/* ── Stats ── */}
      {/* <section className="bg-[#0f0f0f]">
        <div className="w-full px-4 sm:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1a1a1a] rounded-[2rem] p-12 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">50+ Million</h3>
              <p className="font-semibold text-lg text-white/50 max-w-[200px] leading-snug">Access to 50+ Million Creators Worldwide</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-[2rem] p-12 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">14.4+ Billion</h3>
              <p className="font-semibold text-lg text-white/50 max-w-[200px] leading-snug">Total Aggregated Community Reach</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-[2rem] p-12 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Partners</h3>
              <p className="font-semibold text-lg text-white/50 max-w-[200px] leading-snug">with All Major Social Platforms</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── Quote & Feature ── */}
      {/* ── Quote & Feature ── */}
      <section className="bg-gradient-to-b from-[#0f0f0f] to-[#161616] py-24 border-t border-white/10 flex flex-col items-center">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-20 md:mb-28">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
              “The Best Influencer Marketing Platform”
            </h2>
            <div className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Digiday</div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <div className="w-full aspect-[4/5] sm:aspect-square bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img
                  src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2574&auto=format&fit=crop"
                  alt="Bennybucks Platform"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-left mt-8 lg:mt-0 lg:pl-4">
              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold mb-8 tracking-tight leading-[1.1]">India’s First Open Campaign Access Platform</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6 font-medium">
                For years, brands in India didn’t have a platform to run UGC, clipping, Music, logo or social content campaigns at scale. BennyBucks changes that.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mb-10 font-medium">
                The biggest challenge used to be verifying content at scale. Our in-house AI model, Whoofy, reviews every piece of content to make sure it matches your campaign requirements. Only content that drives real engagement gets rewarded. This means your marketing budget goes directly to content that actually moves the needle.
              </p>
              <button className="rounded-full bg-[#ccff00] hover:bg-[#bbe600] text-black text-base font-bold px-10 py-4 transition-transform hover:scale-105 tracking-wide">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Work Carousel ── */}
      <section className="py-32 bg-[#0f0f0f] border-t border-white/10 overflow-hidden">
        <div className="w-full px-4 sm:px-8 mb-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Our Work</h2>
        </div>

        <div className="flex gap-6 overflow-x-auto px-8 pb-12 pt-4 hide-scrollbar snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {workItems.map((item, i) => (
            <div key={i} className="relative flex-shrink-0 w-[280px] sm:w-[340px] aspect-[9/16] rounded-[1.5rem] bg-[#1a1a1a] border border-white/10 overflow-hidden group snap-center cursor-pointer">
              <video
                src={item.video}
                poster={item.image}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 inset-x-0 flex justify-center pointer-events-none">
                <span className="bg-white text-black font-bold text-sm px-6 py-2.5 rounded-full shadow-xl">
                  {item.brand}
                </span>
              </div>
            </div>
          ))}
          {/* spacer for padding at end */}
          <div className="flex-shrink-0 w-[2px] opacity-0">.</div>
        </div>
      </section>

      {/* ── Marquee / Ticker ── */}
      <section className="  py-4 sm:py-6 overflow-hidden border-t border-b border-white/20 flex items-center">
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee-fast {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `
        }} />
        <div className="flex w-max whitespace-nowrap selection:bg-black selection:text-[#ccff00] text-white" style={{ animation: "marquee-fast 20s linear infinite" }}>
          {/* First set of words */}
          <div className="flex gap-4 sm:gap-8 pr-4 sm:pr-8 text-white font-black text-2xl sm:text-4xl lg:text-5xl uppercase ">
            <span>BUILT LOUD. BUILT OPEN. BUILT TO WIN.</span> <span className="text-white/30">&bull;</span>
            <span>BUILT LOUD. BUILT OPEN. BUILT TO WIN.</span> <span className="text-white/30">&bull;</span>
            <span>BUILT LOUD. BUILT OPEN. BUILT TO WIN.</span> <span className="text-white/30">&bull;</span>
          </div>
          {/* Identical duplicate set to seamlessly scroll */}
          <div className="flex gap-4 sm:gap-8 pr-4 sm:pr-8 text-white font-black text-2xl sm:text-4xl lg:text-5xl uppercase ">
            <span>BUILT LOUD. BUILT OPEN. BUILT TO WIN.</span> <span className="text-white/30">&bull;</span>
            <span>BUILT LOUD. BUILT OPEN. BUILT TO WIN.</span> <span className="text-white/30">&bull;</span>
            <span>BUILT LOUD. BUILT OPEN. BUILT TO WIN.</span> <span className="text-white/30">&bull;</span>
          </div>
        </div>
      </section>

      {/* ── Full Service grid ── */}
      <section className="py-24 bg-[#0f0f0f] relative">
        <div className="w-full px-4 sm:px-8 max-w-[1480px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div key={i} className="bg-[#1a1a1a] rounded-[2rem] p-10 border border-white/10 hover:border-[#3b6ff5]/50 transition-colors group">
                <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-[#3b6ff5] transition-colors">{svc.title}</h3>
                <p className="text-white/50 leading-relaxed font-medium">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer / CTA ── */}
      <section className="bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] border-t border-white/10">
        {/* Top CTA area (Kofluence style) */}
        <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-8 py-32 text-center relative overflow-hidden">
          {/* subtle background pattern to match Kofluence's doodle bg */}
          <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1614850715649-1d0106293cb1?q=80&w=2670&auto=format&fit=crop')] bg-cover mix-blend-overlay pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white mb-8">
              Think Influence, Think <span className="text-[#ccff00]">Bennybucks</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              Get the traffic to your website, social media, build brand awareness, and do much more to grow your business by unlocking social influence with Bennybucks.
            </p>
            <button className="rounded-full bg-[#e5383b] hover:bg-[#c1121f] text-white text-lg font-bold px-10 py-4 transition-colors">
              Request Demo
            </button>
          </div>
        </div>

        {/* 6-Column Links Footer */}
        <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-8 py-16 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_2.5fr] gap-x-8 gap-y-16">

            {/* Col 1: Logo and Trust badges */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col gap-10">
              <div className="flex items-center gap-3">
                <svg width="40" height="40" viewBox="0 0 28 28" fill="none">
                  <path d="M4 6l4 12 6-8 6 8 4-12" stroke="#ccff00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-2xl font-black text-white tracking-tight">Bennybucks</span>
              </div>

              <div className="flex flex-wrap gap-6 text-white/50 text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  Google<br />Secured
                </div>
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  Facebook<br />Secured
                </div>
                <div className="flex items-center gap-2 w-full mt-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                  ISO<br />Certified
                </div>
              </div>
            </div>

            {/* Col 2: Company */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-bold text-lg mb-2">Company</h3>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">About</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Career</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Contact</a>
            </div>

            {/* Col 3: Product */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-bold text-lg mb-2">Product</h3>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Creator</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Brand</a>
            </div>

            {/* Col 4: Resources */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-bold text-lg mb-2">Resources</h3>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Blog</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Case Studies</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Request Demo</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">FAQs</a>
            </div>

            {/* Col 5: Privacy */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-bold text-lg mb-2">Privacy</h3>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Terms and Conditions</a>
            </div>

            {/* Col 6: Follow us & App Links */}
            <div className="flex flex-col gap-6 col-span-2 lg:col-span-1 lg:pl-8">
              <div>
                <h3 className="text-white font-bold text-sm mb-4">Follow us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-white/60 hover:text-[#E1306C] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
                  <a href="#" className="text-white/60 hover:text-[#1877F2] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg></a>
                  <a href="#" className="text-white/60 hover:text-[#0A66C2] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg></a>
                  <a href="#" className="text-white/60 hover:text-[#FF0000] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold text-sm mb-4">Download our creator&apos;s app</h3>
                <div className="flex flex-wrap gap-3">
                  <a href="#" className="bg-[#1a1a1a] border border-white/20 hover:border-white/50 transition-colors rounded-xl px-4 py-2 flex items-center gap-3">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 21.432c-1.391.066-2.583-.49-3.79-.49-1.229 0-2.6.59-3.832.55-1.272-.033-2.45-.758-3.08-1.92-1.326-2.316-1.583-5.63-.5-8.08.535-1.206 1.62-1.944 2.805-1.977 1.25-.034 2.378.854 3.003.854.624 0 1.956-.99 3.425-.845 1.503.045 2.846.611 3.585 1.832L17.7 11.53c-1.32.78-1.637 2.46-.777 3.653.642.89 1.625 1.353 2.656 1.428-.62 1.67-1.748 3.515-3.214 4.823zm-3.41-16.14c.483-1.42.046-3.007-.946-4.04-1.018-1.026-2.613-1.41-3.992-1.002-.577 1.442-.158 3.107.962 4.135 1.05 1.02 2.628 1.488 3.976.907z" /></svg>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] text-white/60 leading-tight">Available on the</span>
                      <span className="text-sm font-bold leading-tight">App Store</span>
                    </div>
                  </a>
                  <a href="#" className="bg-[#1a1a1a] border border-white/20 hover:border-white/50 transition-colors rounded-xl px-4 py-2 flex items-center gap-3">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3.195 2.162c-.114.12-.195.291-.195.513v18.65c0 .222.081.393.195.513L3.336 22l9.539-9.584V11.58L3.336 2l-.141.162zm10.748 10.822l2.978 2.998-13.385 7.636c-.463.265-1.052.179-1.439-.122l11.846-10.512zM21.16 12l-3.344-1.91-2.029 2.042v.001l2.03 2.044L21.16 12zm-17.65 9.873c.386.302.976.388 1.439.122l13.385-7.636-2.978-2.998-11.846 10.512z" /></svg>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] text-white/60 leading-tight">GET IT ON</span>
                      <span className="text-sm font-bold leading-tight">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center text-sm font-medium text-white/40">
            © 2026 Bennybucks Tech Private Limited
          </div>
        </div>
      </section>
    </div>
  );
}
