"use client";

import BrandHeader from "@/components/BrandHeader";
import BrandFooter from "@/components/BrandFooter";

export default function BrandCampaign() {

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
      <BrandHeader />

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
      <BrandFooter />
    </div>
  );
}
