"use client";

import BrandHeader from "@/components/BrandHeader";
import BrandFooter from "@/components/BrandFooter";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { useState, useEffect } from "react";

const acidGroteskFont = localFont({
  src: [
    {
      path: "../../../public/fonts/FFF_AcidGrotesk_Regular-s.ec71d0d5.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/FFF_AcidGrotesk_Medium-s.a3f6ca65.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/FFF_AcidGrotesk_Bold-s.49a3bd75.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

const brandLogos = [
  "Sonos",
  "Virgin",
  "Condé Nast",
  "Chipotle",
  "Live Nation",
  "Microsoft",
  "Alphabet",
  "American Eagle",
];

const workItems = [
  {
    brand: "UGC",
    title: "App Preview",
    image:
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2574&auto=format&fit=crop",
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    brand: "Clipping",
    title: "Game Over",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2564&auto=format&fit=crop",
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    brand: "Music",
    title: "Klarna",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2564&auto=format&fit=crop",
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    brand: "logo",
    title: "Powered",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2564&auto=format&fit=crop",
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
];

export default function BrandCampaign() {
  const [heroIndex, setHeroIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroIndex(Math.floor(Math.random() * workItems.length));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Pay Only for Performance",
      desc: "You invest in measurable engagement and real reach, which means your marketing budget is spent on results, not promises, ensuring every rupee works toward visible growth.",
    },
    {
      title: "AI-Verified Content",
      desc: "Every submitted reel is reviewed by AI to ensure it meets your campaign guidelines, protecting your brand from low-quality, irrelevant, or non-compliant content while maintaining consistency at scale.",
    },
    {
      title: "Choose Creators Before You Launch",
      desc: "You can launch a campaign draft, invite creators to submit profiles, scripts, sample videos, or interview responses, and select the most suitable talent before committing your full campaign budget.",
    },
    {
      title: "Real-Time Insights",
      desc: "You monitor campaign performance as it happens, giving you the ability to analyze engagement, track reach, and optimize strategy instantly instead of waiting for delayed reports.",
    },
    {
      title: "Cost-Efficient Marketing",
      desc: "By eliminating intermediaries and tying payouts directly to performance, you reduce wasted spend, increase accountability, and maximize your return on investment.",
    },
  ];

  return (
    <div className="min-h-screen bg-page-bg text-text-primary selection:bg-blue-600 selection:text-text-primary">
      {/* ── Navbar ── */}
      <BrandHeader />

      {/* ── Hero ── */}

      <section className="pt-[180px] pb-24 px-4 sm:px-8 flex flex-col items-center justify-center text-center">
        <div className="inline-block py-1 px-4 rounded-full bg-brand-neon/10 border border-brand-neon/30 text-brand-neon text-sm font-bold mb-8 tracking-widest uppercase">
          Let Your Brand Show Its Mark
        </div>
        <h1
          className={`${acidGroteskFont.className} text-5xl md:text-[5rem] lg:text-[6rem] font-extrabold -tracking-[2px] mb-8 leading-[1.05]`}
        >
          The Creator-Powered
          <br /> <span className="text-brand-red">Performance</span> First
          Marketing <span className="text-brand-red">Platform</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-primary/60 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
          A performance-driven ecosystem where brands launch campaigns and
          creators produce authentic content that drives real engagement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button className="rounded-xl bg-[#1754d8] hover:bg-[#1240a6] text-white text-[1.3rem] font-medium px-10 py-5 transition-transform hover:scale-105  tracking-wide">
            Join As Creator
          </button>
          <button className="rounded-full bg-transparent border-2 border-text-primary/30 hover:border-text-primary/60 hover:bg-text-primary/5 text-text-primary flex items-center justify-center gap-3 text-[1.3rem] font-medium px-10 py-5 transition-colors  tracking-wide">
            Launch Your Campaign
          </button>
        </div>
      </section>

      {/* ── Hero ── */}
      {/* <section className="pt-[100px] pb-12 px-4 sm:px-8 bg-page-bg flex flex-col items-center justify-center">
        <div className="relative w-full mx-auto min-h-[80vh] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden flex flex-col items-center justify-center border border-page-border shadow-2xl">
          <div className="absolute inset-0 z-0 bg-page-bg overflow-hidden">
            {heroIndex !== null && (
              <video
                src={workItems[heroIndex].video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-80 scale-110 filter blur-[40px] md:blur-[60px]"
              />
            )}
            <div className="absolute inset-0 bg-black/10 backdrop-blur-3xl mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/50"></div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[380px] aspect-[9.5/16] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] group bg-page-surface mb-8">
            {heroIndex !== null ? (
              <img
                src={workItems[heroIndex].image}
                alt={workItems[heroIndex].brand}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-page-surface/50 animate-pulse"></div>
            )}
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 overflow-hidden px-4">
            <div className="text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[8.5vw] xl:text-[6.5vw] 2xl:text-[5.5vw] font-black tracking-tighter leading-[0.9] text-white/90 w-full max-w-[1480px] mx-auto flex flex-col justify-center h-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] whitespace-nowrap mix-blend-overlay">
              <div className="text-center relative -translate-x-[20px] sm:-translate-x-[40px] md:-translate-x-[60px] lg:-translate-x-[90px] xl:-translate-x-[120px] 2xl:-translate-x-[140px] mb-1">THE</div>
              <div className="text-center relative translate-x-[20px] sm:translate-x-[40px] md:translate-x-[60px] lg:translate-x-[90px] xl:translate-x-[120px] 2xl:translate-x-[140px] mb-1">CREATOR</div>
              <div className="text-center relative -translate-x-[20px] sm:-translate-x-[40px] md:-translate-x-[60px] lg:-translate-x-[90px] xl:-translate-x-[120px] 2xl:-translate-x-[140px] mb-1">POWERED</div>
              <div className="text-center relative translate-x-[20px] sm:translate-x-[40px] md:translate-x-[60px] lg:translate-x-[90px] xl:translate-x-[120px] 2xl:translate-x-[140px]">PLATFORM</div>
            </div>
          </div>

          <div className="absolute bottom-10 sm:bottom-10 md:bottom-[38px] z-30 flex flex-col items-center justify-center w-full">
            <Link href="/login" className="bg-[#1754d8] hover:bg-[#1240a6] text-white font-extrabold text-lg md:text-xl px-10 py-4 md:px-12 md:py-5 rounded-xl shadow-[0_0_40px_rgba(23,84,216,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(23,84,216,0.6)] active:scale-95 flex items-center gap-3">
              Join as Creator
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
          </div>
        </div>
      </section> */}

      {/* ── Logos ── */}
      {/* <div className="py-12 border-b border-page-border bg-page-bg">
        <div className="w-full px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <h2 className="text-xl sm:text-2xl font-bold max-w-sm text-left leading-snug text-text-primary/90">
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
      {/* <section className="bg-page-bg">
        <div className="w-full px-4 sm:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-page-surface rounded-[2rem] p-12 border border-page-border hover:border-page-border transition-colors">
              <h3 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">50+ Million</h3>
              <p className="font-semibold text-lg text-text-primary/50 max-w-[200px] leading-snug">Access to 50+ Million Creators Worldwide</p>
            </div>
            <div className="bg-page-surface rounded-[2rem] p-12 border border-page-border hover:border-page-border transition-colors">
              <h3 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">14.4+ Billion</h3>
              <p className="font-semibold text-lg text-text-primary/50 max-w-[200px] leading-snug">Total Aggregated Community Reach</p>
            </div>
            <div className="bg-page-surface rounded-[2rem] p-12 border border-page-border hover:border-page-border transition-colors">
              <h3 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Partners</h3>
              <p className="font-semibold text-lg text-text-primary/50 max-w-[200px] leading-snug">with All Major Social Platforms</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── Quote & Feature ── */}
      {/* ── Quote & Feature ── */}
      <section className="bg-gradient-to-b from-page-bg to-page-surface py-24 border-t border-page-border flex flex-col items-center">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8">
          {/* <div className="text-center mb-20 md:mb-28">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary mb-4">
              “The Best Influencer Marketing Platform”
            </h2>
            <div className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Digiday</div>
          </div> */}

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="w-full h-[450px] sm:h-[550px] lg:h-[700px] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-[2rem] md:rounded-[2rem] overflow-hidden border border-page-border shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2574&auto=format&fit=crop"
                  alt="Bennybucks Platform"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-left mt-8 lg:mt-0 lg:pl-8">
              <h2
                className={`${acidGroteskFont.className} text-4xl sm:text-5xl lg:text-[3rem] font-medium mb-8 -tracking-[.055625em] leading-[1.1]
                
                 
                `}
              >
                India’s Most <span className="text-[#dbf505]">Intelligent</span>{" "}
                Creator Marketing Platform
              </h2>
              <p className="text-lg text-text-primary/70 leading-relaxed mb-6 font-medium">
                BennyBucks is reinventing how brands work with creators. Launch
                a campaign, tell creators what you need, and receive high-impact
                content designed for real audience engagement.
              </p>
              <p className="text-lg text-text-primary/70 leading-relaxed mb-10 font-medium">
                Every submission is verified by Whoofy, our intelligent engine,
                ensuring every rupee you spend drives authentic reach,
                measurable engagement, and real results.
              </p>
              <button className="rounded-xl bg-[#dbf505] hover:bg-[#E6FA3A] text-black text-[1.3rem] font-medium px-10 py-4 transition-transform hover:scale-105 tracking-wide">
                <div className="flex items-center gap-2">
                  Launch Your Campaign
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Verticals Carousel ── */}
      <section className="py-32 bg-page-bg border-t border-page-border overflow-hidden">
        <div className="w-full px-4 sm:px-8 mb-16 max-w-[1480px] mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-center md:text-left">
            Verticals
          </h2>
        </div>

        <div
          className="w-full overflow-x-auto hide-scrollbar pb-12 pt-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-6 w-max mx-auto px-4 sm:px-8">
            {workItems.map((item, i) => (
              <Link
                href={`/${item.brand.toLowerCase()}`}
                key={i}
                className="relative flex-shrink-0 w-[280px] sm:w-[340px] aspect-[9/16] rounded-[1.5rem] bg-page-surface border border-page-border overflow-hidden group snap-center cursor-pointer block"
              >
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
              </Link>
            ))}
            {/* spacer for padding at end */}
            <div className="flex-shrink-0 w-[2px] opacity-0">.</div>
          </div>
        </div>
      </section>

      {/* ── Marquee / Ticker ── */}
      <section className="py-4 sm:py-6 overflow-hidden border-t border-b border-page-border flex items-center">
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes marquee-fast {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `,
          }}
        />
        <div
          className="flex w-max whitespace-nowrap selection:bg-black selection:text-brand-neon text-text-primary"
          style={{ animation: "marquee-fast 20s linear infinite" }}
        >
          {/* First set of words */}
          <div className="flex gap-4 sm:gap-8 pr-4 sm:pr-8 text-text-primary font-black text-2xl sm:text-4xl lg:text-5xl uppercase ">
            <span>BUILT LOUD. BUILT OPEN. BUILT TO WIN.</span>{" "}
            <span className="text-text-primary/30">&bull;</span>
            <span>BUILT LOUD. BUILT OPEN. BUILT TO WIN.</span>{" "}
            <span className="text-text-primary/30">&bull;</span>
            <span>BUILT LOUD. BUILT OPEN. BUILT TO WIN.</span>{" "}
            <span className="text-text-primary/30">&bull;</span>
          </div>
          {/* Identical duplicate set to seamlessly scroll */}
          <div className="flex gap-4 sm:gap-8 pr-4 sm:pr-8 text-text-primary font-black text-2xl sm:text-4xl lg:text-5xl uppercase ">
            <span>BUILT LOUD. BUILT OPEN. BUILT TO WIN.</span>{" "}
            <span className="text-text-primary/30">&bull;</span>
            <span>BUILT LOUD. BUILT OPEN. BUILT TO WIN.</span>{" "}
            <span className="text-text-primary/30">&bull;</span>
            <span>BUILT LOUD. BUILT OPEN. BUILT TO WIN.</span>{" "}
            <span className="text-text-primary/30">&bull;</span>
          </div>
        </div>
      </section>

      {/* ── Full Service grid ── */}
      <section className="py-24 bg-page-bg relative">
        <div className="w-full px-4 sm:px-8 max-w-[1480px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div
                key={i}
                className="bg-page-surface rounded-[2rem] p-10 border border-page-border hover:border-[#3b6ff5]/50 transition-colors group"
              >
                <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-text-primary/50 leading-relaxed font-medium">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="bg-[#EBEFE4] text-black w-full overflow-hidden">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 pt-20 pb-4">
          <h2 className="text-5xl md:text-[5rem] lg:text-[6.5rem] font-bold text-center tracking-tight mb-20 md:mb-32 mt-12 text-[#111]">
            Let&apos;s meet up IRL
          </h2>

          <div className="flex flex-col mb-32 border-t border-black/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-black/30 w-full group">
              <div className="flex flex-col text-lg md:text-xl font-medium tracking-tight text-[#111]">
                <h3 className="font-extrabold uppercase mb-2 text-xl md:text-2xl tracking-tighter">SOCIAL MEDIA WEEK</h3>
                <p className="uppercase font-semibold">APRIL 14-16, 2026</p>
                <p className="font-semibold">New York, NY</p>
              </div>
              <div className="mt-8 md:mt-0 flex shrink-0 justify-start md:justify-end">
                <button className="bg-white text-black font-bold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-transform text-sm md:text-base whitespace-nowrap">
                  Lets Connect
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-black/30 w-full group">
              <div className="flex flex-col text-lg md:text-xl font-medium tracking-tight max-w-sm text-[#111]">
                <h3 className="font-extrabold uppercase mb-2 text-xl md:text-2xl tracking-tighter">POSSIBLE</h3>
                <p className="uppercase font-semibold">APRIL 27-29, 2026</p>
                <p className="font-semibold">Miami, FL</p>
                <p className="text-sm md:text-base mt-4 leading-snug font-medium pr-4">
                  Hosted by Bennybucks and <span className="font-bold">Alexis Ohanian (776)</span>, aboard the Bennybucks Yacht, April 27th and 28th of Possible
                </p>
              </div>

              <div className="my-8 md:my-0 flex-1 flex justify-center w-full">
                <div className="w-full max-w-[280px] md:max-w-[320px] aspect-[4/3] rounded-[2rem] overflow-hidden shrink-0 shadow-xl transition-transform duration-700 group-hover:scale-105">
                  <img
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop"
                    alt="Yacht in Miami"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-8 md:mt-0 flex shrink-0 justify-start md:justify-end">
                <button className="bg-white text-black font-bold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-transform text-sm md:text-base whitespace-nowrap">
                  Lets Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── Footer / CTA ── */}
      <BrandFooter />
    </div>
  );
}
