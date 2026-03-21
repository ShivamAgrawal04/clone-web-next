"use client";

import BrandHeader from "@/components/BrandHeader";
import BrandFooter from "@/components/BrandFooter";
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
    href: "/ugc",
    title: "App Preview",
    image:
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2574&auto=format&fit=crop",
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    brand: "Clipping",
    href: "/clipping",
    title: "Game Over",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2564&auto=format&fit=crop",
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    brand: "Music",
    href: "/music",
    title: "Klarna",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2564&auto=format&fit=crop",
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    brand: "Logo",
    href: "/logo",
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
      art: "performance",
      title: "Pay Only for Performance",
      desc: "Your budget goes directly toward content that generates engagement, eliminating wasted marketing spend.",
    },
    {
      art: "verified",
      title: "AI-Verified Engagement",
      desc: "Every view and interaction is automatically verified to ensure the engagement is real and authentic.",
    },
    {
      art: "dashboard",
      title: "Access the Smart Dashboard",
      desc: "Track all your clips and their performance in one simple dashboard so you can monitor results and take action quickly.",
    },
    {
      art: "audience",
      title: "Reach Niche Audiences",
      desc: "Target specific creator communities by providing all your requirements to get your brand in front of the right people.",
    },
    {
      art: "creators",
      title: "Select the Right Creators",
      desc: "Launch a campaign draft, review creator profiles, scripts, or sample videos, and select the most suitable talent before committing your full budget.",
    },
    {
      art: "community",
      title: "Create Community",
      desc: "We help you create a community of creators around your brand. Creators can use a chat feature to talk and share ideas, so they make better and more consistent content.",
    },
  ];

  const serviceArtworkPanel =
    "relative h-full min-h-[8rem] overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#343434] shadow-[0_14px_30px_rgba(0,0,0,0.24)]";
  const serviceArtworkHighlight =
    "absolute inset-x-0 top-0 h-11 bg-linear-to-b from-white/10 to-transparent";

  const renderServiceArtwork = (art: string) => {
    switch (art) {
      case "performance":
        return (
          <div className={`${serviceArtworkPanel} flex flex-col p-3`}>
            <div className={serviceArtworkHighlight} />

            <div className="flex shrink-0 items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/12 bg-white/6">
                  <div className="ml-0.5 h-0 w-0 border-y-[5px] border-l-8 border-y-transparent border-l-white/85" />
                </div>
                <div className="rounded-full border border-white/10 bg-white/4 px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.18em] text-white/60">
                  LIVE
                </div>
              </div>

              <div className="text-right">
                <div className="text-[0.58rem] font-medium tracking-[0.18em] text-white/42">
                  ROI
                </div>
                <div className="mt-0.5 text-sm font-semibold text-[#dbf505]">
                  +24%
                </div>
              </div>
            </div>

            <div className="flex-1 min-h-0 flex items-center py-2">
              <svg
                className="h-full w-full min-h-[4rem]"
                viewBox="0 0 260 62"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
              >
              <path
                d="M0 50H260"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="1.2"
              />
              <path
                d="M0 31H260"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1.2"
              />
              <path
                d="M0 12H260"
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="1.2"
              />
              <path
                d="M8 48 L43 42 L78 44 L111 34 L145 37 L183 22 L218 10"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 48 L43 42 L78 44 L111 34 L145 37 L183 22 L218 10"
                stroke="#dbf505"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M218 10 L244 6"
                stroke="#dbf505"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M236 1 H244 V9"
                stroke="#dbf505"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="43" cy="42" r="3.2" fill="rgba(255,255,255,0.78)" />
              <circle cx="78" cy="44" r="3.2" fill="rgba(255,255,255,0.78)" />
              <circle cx="111" cy="34" r="3.2" fill="rgba(255,255,255,0.78)" />
              <circle cx="145" cy="37" r="3.2" fill="rgba(255,255,255,0.78)" />
              <circle cx="183" cy="22" r="3.2" fill="#dbf505" />
              <circle cx="218" cy="10" r="4" fill="#dbf505" />
            </svg>
            </div>

            <div className="shrink-0">
              <div className="mb-2 flex items-center justify-between text-[0.6rem] font-medium tracking-[0.17em] text-white/44">
                <span>PERFORMANCE PAYOUT</span>
                <span>82%</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-[3px] flex-1 rounded-full bg-white/10">
                  <div className="h-full w-[82%] rounded-full bg-[#dbf505]" />
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <div className="h-2.5 w-2.5 rounded-[3px] border border-white/45" />
                </div>
              </div>
            </div>
          </div>
        );
      case "verified":
        return (
          <div className={`${serviceArtworkPanel} flex items-center justify-center p-3`}>
            <div className={serviceArtworkHighlight} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,245,5,0.1),rgba(255,255,255,0.01)_38%,rgba(0,0,0,0)_66%)]" />

            <div className="absolute left-1/2 top-1/2 h-[28%] w-[28%] min-w-16 min-h-16 max-w-24 max-h-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#dbf505]/35 bg-black/12 shadow-[0_0_0_10px_rgba(219,245,5,0.04),0_0_24px_rgba(219,245,5,0.12)]">
              <div className="absolute inset-3 rounded-full border border-white/12" />
              <svg
                className="absolute inset-0 m-auto h-9 w-9 text-[#dbf505]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12.5 10 17l9-9" />
              </svg>
            </div>

            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <svg
                className="h-4 w-4 text-white/55"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 17.3c-.2 0-.4-.1-.5-.2C5.1 13.3 2 10.5 2 6.9A3.9 3.9 0 0 1 5.9 3c1.6 0 2.9.7 4.1 2 1.2-1.3 2.5-2 4.1-2A3.9 3.9 0 0 1 18 6.9c0 3.6-3.1 6.4-7.5 10.2-.1.1-.3.2-.5.2Z" />
              </svg>
              <span className="text-[0.82rem] font-semibold text-white/86">
                12.5K
              </span>
            </div>

            <div className="absolute right-4 top-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <svg
                className="h-4 w-4 text-white/55"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle cx="10" cy="10" r="6" />
                <path d="M10 6v4l2.5 2.5" strokeLinecap="round" />
              </svg>
              <span className="text-[0.82rem] font-semibold text-white/86">
                3.2K
              </span>
            </div>

            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <div className="flex h-4 w-4 items-center justify-center text-white/55">
                <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                  <path d="M10 4c4.2 0 7.7 3 9 6-1.3 3-4.8 6-9 6s-7.7-3-9-6c1.3-3 4.8-6 9-6Zm0 2.5A3.5 3.5 0 1 0 10 13a3.5 3.5 0 0 0 0-7Z" />
                </svg>
              </div>
              <span className="text-[0.82rem] font-semibold text-white/86">
                85K
              </span>
            </div>

            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <div className="flex h-4 w-4 items-center justify-center text-white/55">
                <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                  <path d="M3 4.5A2.5 2.5 0 0 1 5.5 2h9A2.5 2.5 0 0 1 17 4.5v5A2.5 2.5 0 0 1 14.5 12H10l-3.5 3v-3h-1A2.5 2.5 0 0 1 3 9.5v-5Z" />
                </svg>
              </div>
              <span className="text-[0.82rem] font-semibold text-white/86">
                1.2K
              </span>
            </div>

            <div className="absolute inset-x-13 top-1/2 h-px -translate-y-1/2 bg-linear-to-r from-transparent via-white/12 to-transparent" />
            <div className="absolute left-1/2 inset-y-8 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-white/12 to-transparent" />
          </div>
        );
      case "dashboard":
        return (
          <div className={`${serviceArtworkPanel} flex flex-col gap-2 p-3`}>
            <div className="flex-1 min-h-0 overflow-hidden rounded-[1.15rem] border border-white/10 bg-[#3b3f48] shadow-[0_12px_24px_rgba(0,0,0,0.18)] relative p-3">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_100%)]" />
              <div className="absolute left-3 top-2">
                <div className="text-[0.72rem] font-medium text-white/72">
                  Campaigns
                </div>
                <div className="mt-0.5 text-[1.65rem] font-semibold leading-none text-white">
                  12
                </div>
              </div>

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 320 92"
                fill="none"
              >
                <path
                  d="M78 63 H300"
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="1.5"
                />
                <path
                  d="M78 43 H300"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1.5"
                />
                <path
                  d="M78 23 H300"
                  stroke="rgba(255,255,255,0.04)"
                  strokeWidth="1.5"
                />

                <rect
                  x="88"
                  y="57"
                  width="12"
                  height="14"
                  rx="3"
                  fill="rgba(255,255,255,0.16)"
                />
                <rect
                  x="106"
                  y="50"
                  width="12"
                  height="21"
                  rx="3"
                  fill="rgba(255,255,255,0.16)"
                />
                <rect
                  x="124"
                  y="53"
                  width="12"
                  height="18"
                  rx="3"
                  fill="rgba(255,255,255,0.16)"
                />
                <rect
                  x="142"
                  y="42"
                  width="12"
                  height="29"
                  rx="3"
                  fill="rgba(255,255,255,0.16)"
                />
                <rect
                  x="160"
                  y="56"
                  width="12"
                  height="15"
                  rx="3"
                  fill="rgba(255,255,255,0.16)"
                />
                <rect
                  x="178"
                  y="59"
                  width="12"
                  height="12"
                  rx="3"
                  fill="rgba(255,255,255,0.16)"
                />
                <rect
                  x="196"
                  y="55"
                  width="12"
                  height="16"
                  rx="3"
                  fill="rgba(255,255,255,0.16)"
                />
                <rect
                  x="214"
                  y="49"
                  width="12"
                  height="22"
                  rx="3"
                  fill="rgba(255,255,255,0.16)"
                />
                <rect
                  x="232"
                  y="54"
                  width="12"
                  height="17"
                  rx="3"
                  fill="rgba(255,255,255,0.16)"
                />
                <rect
                  x="250"
                  y="45"
                  width="12"
                  height="26"
                  rx="3"
                  fill="rgba(255,255,255,0.16)"
                />
                <rect
                  x="268"
                  y="34"
                  width="12"
                  height="37"
                  rx="3"
                  fill="rgba(255,255,255,0.16)"
                />
                <rect
                  x="286"
                  y="24"
                  width="12"
                  height="47"
                  rx="3"
                  fill="rgba(255,255,255,0.16)"
                />

                <path
                  d="M86 56 L116 40 L150 52 L184 37 L216 45 L246 31 L275 12 L298 18"
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M86 56 L116 40 L150 52 L184 37 L216 45 L246 31 L275 12 L298 18"
                  stroke="#dbf505"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <circle cx="116" cy="40" r="3.5" fill="rgba(255,255,255,0.7)" />
                <circle cx="150" cy="52" r="3.5" fill="rgba(255,255,255,0.7)" />
                <circle cx="216" cy="45" r="3.5" fill="rgba(255,255,255,0.7)" />
                <circle cx="275" cy="12" r="4" fill="#dbf505" />
                <path
                  d="M293 8 H303 V18"
                  stroke="#dbf505"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-2 shrink-0">
            <div className="h-14 min-h-[3.5rem] rounded-[1.05rem] border border-white/10 bg-[#3b3f48] px-3 py-2 shadow-[0_12px_24px_rgba(0,0,0,0.18)]">
              <div className="flex items-start justify-between">
                <div className="space-y-1 text-[0.72rem] text-white/82">
                  <div className="flex items-center gap-2">
                    <span className="text-white/74">Clicks</span>
                    <span className="text-[1.1rem] font-semibold leading-none text-white">
                      8.4K
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/74">Conversions</span>
                    <span className="text-[1.1rem] font-semibold leading-none text-white">
                      1.2K
                    </span>
                  </div>
                </div>

                <div className="mt-0.5 flex items-end gap-1.5">
                  <div className="h-8 w-3 rounded-sm bg-linear-to-t from-white/18 to-white/30" />
                  <div className="h-11 w-3 rounded-sm bg-linear-to-t from-white/18 to-white/30" />
                  <div className="h-13 w-3 rounded-sm bg-linear-to-t from-[#9aae18] to-[#dbf505]" />
                </div>
              </div>
              <div className="mt-1.5 h-[3px] rounded-full bg-white/10">
                <div className="h-full w-[82%] rounded-full bg-white/35" />
              </div>
            </div>

            <div className="h-14 min-h-[3.5rem] overflow-hidden rounded-[1.05rem] border border-white/10 bg-[#3b3f48] px-3 py-2 shadow-[0_12px_24px_rgba(0,0,0,0.18)] relative">
              <div className="absolute inset-x-3 top-2 bottom-7 rounded-[0.8rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_100%)]" />
              <div className="absolute left-1/2 top-[1.05rem] z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-xl border border-white/18 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                <div className="ml-0.5 h-0 w-0 border-y-[6px] border-l-10 border-y-transparent border-l-white/90" />
              </div>

              <svg
                className="absolute inset-x-3 top-2 h-8"
                viewBox="0 0 120 32"
                fill="none"
              >
                <path
                  d="M5 24 L20 22 L34 25 L48 19 L61 22 L76 12 L88 16 L102 7 L115 10"
                  stroke="#dbf505"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="absolute inset-x-3 bottom-2.5 flex items-center justify-between text-[0.72rem] text-white/86">
                <div className="flex items-baseline gap-1">
                  <span className="text-[1.15rem] font-semibold leading-none text-white">
                    82K
                  </span>
                  <span className="text-white/68">Views</span>
                </div>
                <div className="flex items-center gap-1 text-white/82">
                  <span className="text-[#dbf505]">❤</span>
                  <span className="font-semibold text-white">4.5K</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        );
      case "audience":
        return (
          <div className={serviceArtworkPanel}>
            <div className={serviceArtworkHighlight} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),rgba(255,255,255,0.01)_40%,rgba(0,0,0,0)_70%)]" />

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 320 170"
              fill="none"
            >
              <path
                d="M60 48 L156 26 L252 46"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M60 48 L156 96 L252 46"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M156 26 L156 96"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M60 48 L92 116"
                stroke="rgba(110,190,255,0.24)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M156 96 L92 116"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M156 96 L228 116"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M252 46 L228 116"
                stroke="rgba(255,145,80,0.24)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M92 116 L228 116"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <circle cx="108" cy="60" r="4" fill="#6aaeff" fillOpacity="0.8" />
              <circle cx="132" cy="44" r="3.5" fill="rgba(255,255,255,0.42)" />
              <circle cx="184" cy="48" r="3.5" fill="rgba(255,255,255,0.42)" />
              <circle cx="212" cy="70" r="4" fill="#ff9550" fillOpacity="0.8" />
              <circle cx="120" cy="98" r="3.5" fill="rgba(255,255,255,0.34)" />
              <circle cx="196" cy="98" r="3.5" fill="rgba(255,255,255,0.34)" />
              <circle cx="74" cy="92" r="4" fill="rgba(255,255,255,0.3)" />
              <circle cx="244" cy="92" r="4" fill="rgba(255,255,255,0.3)" />
            </svg>

            <div className="absolute left-5 top-5 h-11 w-11 rounded-full border border-[#6aaeff]/35 bg-[linear-gradient(180deg,#7fb9ff,#5477a9)] shadow-[0_0_18px_rgba(106,174,255,0.14)]">
              <div className="absolute left-1/2 top-2.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#1f2430]" />
              <div className="absolute left-1/2 top-6.5 h-4.5 w-6.5 -translate-x-1/2 rounded-t-full bg-[#1f2430]" />
            </div>

            <div className="absolute left-1/2 top-3 h-12 w-12 -translate-x-1/2 rounded-full border border-[#7ec7ff]/40 bg-[linear-gradient(180deg,#93d4ff,#4f8fbc)] shadow-[0_0_18px_rgba(126,199,255,0.16)]">
              <div className="absolute left-1/2 top-3 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#20252f]" />
              <div className="absolute left-1/2 top-7 h-4.5 w-7 -translate-x-1/2 rounded-t-full bg-[#20252f]" />
            </div>

            <div className="absolute left-1/2 top-[4.45rem] h-12 w-12 -translate-x-1/2 rounded-full border border-[#ff9550]/35 bg-[linear-gradient(180deg,#ffb07a,#cf6c3f)] shadow-[0_0_18px_rgba(255,149,80,0.14)]">
              <div className="absolute left-1/2 top-3 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#271d1a]" />
              <div className="absolute left-1/2 top-7 h-4.5 w-7 -translate-x-1/2 rounded-t-full bg-[#271d1a]" />
            </div>

            <div className="absolute right-5 top-5 h-11 w-11 rounded-full border border-[#ffb056]/38 bg-[linear-gradient(180deg,#ffc16e,#b8792d)] shadow-[0_0_18px_rgba(255,176,86,0.14)]">
              <div className="absolute left-1/2 top-2.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#2b2020]" />
              <div className="absolute left-1/2 top-6.5 h-4.5 w-6.5 -translate-x-1/2 rounded-t-full bg-[#2b2020]" />
            </div>

            <div className="absolute bottom-4 left-[3.05rem] flex h-14 w-14 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,#48556b,#212735)] shadow-[0_12px_24px_rgba(0,0,0,0.22)]">
              <div className="relative h-7 w-7">
                <div className="absolute left-1 top-0 h-3 w-3 rounded-full bg-white/78" />
                <div className="absolute right-1 top-0 h-3 w-3 rounded-full bg-white/55" />
                <div className="absolute left-1/2 top-4 h-3.5 w-4 -translate-x-1/2 rounded-t-full bg-[#7ec7ff]" />
                <div className="absolute left-0 bottom-0 h-3.5 w-4 rounded-t-full bg-white/55" />
                <div className="absolute right-0 bottom-0 h-3.5 w-4 rounded-t-full bg-white/78" />
              </div>
            </div>

            <div className="absolute bottom-4 right-[3.05rem] flex h-14 w-14 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,#545b67,#242833)] shadow-[0_12px_24px_rgba(0,0,0,0.22)]">
              <div className="relative h-7 w-7">
                <div className="absolute left-1 top-0 h-3 w-3 rounded-full bg-white/78" />
                <div className="absolute right-1 top-0 h-3 w-3 rounded-full bg-white/78" />
                <div className="absolute left-1/2 top-4 h-3.5 w-4 -translate-x-1/2 rounded-t-full bg-white/78" />
                <div className="absolute left-0 bottom-0 h-3.5 w-4 rounded-t-full bg-white/55" />
                <div className="absolute right-0 bottom-0 h-3.5 w-4 rounded-t-full bg-white/55" />
              </div>
            </div>
          </div>
        );
      case "creators":
        return (
          <div className={`${serviceArtworkPanel} flex flex-row items-stretch gap-2 p-3`}>
            <div className={serviceArtworkHighlight} />

            <div className="absolute left-3 top-4 w-[4.5rem] rounded-[1rem] border border-white/10 bg-[#3b3f48] px-2.5 py-2.5 shadow-[0_10px_22px_rgba(0,0,0,0.18)] shrink-0">
              <div className="mx-auto h-10 w-10 rounded-full border border-[#79aef0]/35 bg-[linear-gradient(180deg,#7fb3ef,#4c6f98)]">
                <div className="absolute left-1/2 top-[0.95rem] h-3 w-3 -translate-x-1/2 rounded-full bg-[#272d37]" />
                <div className="absolute left-1/2 top-[1.85rem] h-4 w-6 -translate-x-1/2 rounded-t-full bg-[#272d37]" />
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-[0.8rem] font-semibold text-white/84">
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-white/70">
                  <path d="M10 17.3c-.2 0-.4-.1-.5-.2C5.1 13.3 2 10.5 2 6.9A3.9 3.9 0 0 1 5.9 3c1.6 0 2.9.7 4.1 2 1.2-1.3 2.5-2 4.1-2A3.9 3.9 0 0 1 18 6.9c0 3.6-3.1 6.4-7.5 10.2-.1.1-.3.2-.5.2Z" />
                </svg>
                22k
              </div>
              <div className="mt-3 h-[3px] rounded-full bg-white/16" />
              <div className="mt-2 h-[3px] w-10 rounded-full bg-white/10" />
            </div>

            <div className="absolute right-3 top-4 w-[4.5rem] rounded-[1rem] border border-white/10 bg-[#3b3f48] px-2.5 py-2.5 shadow-[0_10px_22px_rgba(0,0,0,0.18)] shrink-0">
              <div className="mx-auto h-10 w-10 rounded-full border border-[#f0b37d]/35 bg-[linear-gradient(180deg,#f0c090,#81655b)]">
                <div className="absolute left-1/2 top-[0.95rem] h-3 w-3 -translate-x-1/2 rounded-full bg-[#322824]" />
                <div className="absolute left-1/2 top-[1.85rem] h-4 w-6 -translate-x-1/2 rounded-t-full bg-[#322824]" />
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-[0.8rem] font-semibold text-white/84">
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-white/70">
                  <path d="M10 17.3c-.2 0-.4-.1-.5-.2C5.1 13.3 2 10.5 2 6.9A3.9 3.9 0 0 1 5.9 3c1.6 0 2.9.7 4.1 2 1.2-1.3 2.5-2 4.1-2A3.9 3.9 0 0 1 18 6.9c0 3.6-3.1 6.4-7.5 10.2-.1.1-.3.2-.5.2Z" />
                </svg>
                31k
              </div>
              <div className="mt-3 h-[3px] rounded-full bg-white/16" />
              <div className="mt-2 h-[3px] w-10 rounded-full bg-white/10" />
            </div>

            <div className="absolute left-1/2 top-1/2 z-10 w-[min(7rem,45%)] -translate-x-1/2 -translate-y-1/2 rounded-[1.2rem] border border-[#8dd6ff]/50 bg-[linear-gradient(180deg,rgba(110,195,255,0.14),rgba(255,255,255,0.02))] px-3 py-3 shadow-[0_18px_32px_rgba(0,0,0,0.28),0_0_24px_rgba(110,195,255,0.12)]">
              <div className="absolute inset-x-0 top-0 h-10 rounded-t-[1.2rem] bg-linear-to-b from-white/12 to-transparent" />

              <div className="relative mx-auto h-14 w-14 rounded-full border border-[#8fe4ff]/40 bg-[radial-gradient(circle_at_50%_30%,#74f0cb,#52b697_62%,#2b4f52_100%)] shadow-[0_0_20px_rgba(116,240,203,0.18)]">
                <div className="absolute left-1/2 top-3.5 h-4 w-4 -translate-x-1/2 rounded-full bg-[#1f2b2d]" />
                <div className="absolute left-1/2 top-8 h-5 w-7 -translate-x-1/2 rounded-t-full bg-[#1f2b2d]" />
              </div>

              <div className="absolute right-3 top-[4.35rem] flex h-7 w-7 items-center justify-center rounded-full border border-[#dbf505]/40 bg-[#dbf505] shadow-[0_0_14px_rgba(219,245,5,0.28)]">
                <svg
                  className="h-3.5 w-3.5 text-[#1f2612]"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 10.5 8.5 14l7-8" />
                </svg>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-white">
                <svg viewBox="0 0 20 20" className="h-4 w-4 fill-white/75">
                  <path d="M10 17.3c-.2 0-.4-.1-.5-.2C5.1 13.3 2 10.5 2 6.9A3.9 3.9 0 0 1 5.9 3c1.6 0 2.9.7 4.1 2 1.2-1.3 2.5-2 4.1-2A3.9 3.9 0 0 1 18 6.9c0 3.6-3.1 6.4-7.5 10.2-.1.1-.3.2-.5.2Z" />
                </svg>
                120K
              </div>

              <div className="mt-1.5 flex items-center gap-2 text-white/92">
                <div className="h-0 w-0 border-y-[5px] border-l-8 border-y-transparent border-l-white/92" />
                <span className="text-[1.35rem] font-semibold leading-none">
                  Alex
                </span>
              </div>

              <div className="mt-2 border-t border-white/10 pt-2 text-[0.72rem] leading-tight text-white/74">
                <div>120K Followers</div>
                <div>
                  Engagement:{" "}
                  <span className="font-semibold text-[#dbf505]">8.9%</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "community":
        return (
          <div className={`${serviceArtworkPanel} flex flex-col p-3`}>
            <div className={serviceArtworkHighlight} />
            <div className="flex-1 min-h-0 flex flex-col sm:flex-row gap-3">
            <div className="flex-1 min-h-[6rem] rounded-[1.25rem] bg-[#3b3f48] p-4 shadow-[0_10px_22px_rgba(0,0,0,0.18)] flex flex-col items-center justify-center">
              <div className="relative mx-auto h-20 w-24">
                <div className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 rounded-full border-2 border-white/85" />
                <div className="absolute left-0 top-4 h-7 w-7 rounded-full border-2 border-white/65" />
                <div className="absolute right-0 top-4 h-7 w-7 rounded-full border-2 border-white/65" />
                <div className="absolute left-1/2 top-8 h-10 w-14 -translate-x-1/2 rounded-t-full border-2 border-b-0 border-white/85" />
                <div className="absolute left-1 top-10 h-8 w-10 rounded-t-full border-2 border-b-0 border-white/65" />
                <div className="absolute right-1 top-10 h-8 w-10 rounded-t-full border-2 border-b-0 border-white/65" />
              </div>
              <div className="mt-2 h-2.5 w-full max-w-[8rem] rounded-full bg-white/14" />
            </div>

            <div className="flex-1 min-h-[6rem] rounded-[1.25rem] bg-[#3b3f48] px-4 py-4 shadow-[0_10px_22px_rgba(0,0,0,0.18)] relative">
              <div className="mb-3 flex items-center justify-between">
                <div className="h-2.5 w-14 rounded-full bg-white/20" />
                <div className="h-3 w-3 rounded-full bg-[#dbf505]" />
              </div>
              <div className="space-y-2">
                <div className="h-2.5 w-20 rounded-full bg-white/18" />
                <div className="h-2.5 w-16 rounded-full bg-white/12" />
                <div className="h-2.5 w-12 rounded-full bg-white/10" />
              </div>
              <div className="absolute -bottom-2 right-6 h-5 w-5 rotate-45 rounded-sm bg-[#3b3f48]" />
            </div>
            </div>

            <div className="shrink-0 flex justify-center">
            <div className="flex items-center gap-2 rounded-full bg-white/8 px-3 py-2">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ff5a2a]" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/35" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#dbf505]" />
            </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

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
          <button className="rounded-xl bg-[#1754d8] hover:bg-[#1240a6] text-white text-[1.3rem] font-medium px-6 py-4 transition-transform hover:scale-105  tracking-wide">
            Join As Creator
          </button>
          <button className="rounded-full bg-transparent border-2 border-text-primary/30 hover:border-text-primary/60 hover:bg-text-primary/5 text-text-primary flex items-center justify-center gap-3 text-[1.3rem] font-medium px-6 py-4 transition-colors  tracking-wide">
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
        <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-8">
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
            <div className="w-full lg:w-1/2 text-left mt-8 lg:mt-0">
              <h2
                className={`${acidGroteskFont.className} text-4xl sm:text-5xl lg:text-[4.3rem] font-medium mb-8 -tracking-[.055625em] leading-[1.1]
                
                 
                `}
              >
                India’s Most <span className="text-[#dbf505]">Intelligent</span>{" "}
                <br />
                Creator Marketing <br />
                Platform
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
              <button className="rounded-xl bg-[#dbf505] hover:bg-[#E6FA3A] text-black text-[1.3rem] font-medium px-6 py-4 transition-transform hover:scale-105 tracking-wide">
                <div className="flex items-center gap-2">
                  Launch Your Campaign
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Verticals Carousel ── */}
      <section className="overflow-hidden border-t border-page-border bg-page-bg py-24">
        <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2
                className={`${acidGroteskFont.className} text-center text-4xl font-medium leading-[1.1] -tracking-[0.055625em] sm:text-5xl md:text-left lg:text-[4.3rem]`}
              >
                Our Verticals
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-text-primary/65 md:mx-0 md:text-left md:text-lg">
                Explore performance-first formats built for modern creator-led
                campaigns, from UGC and clipping to music and logo-led content.
              </p>
            </div>
          </div>

          <div
            className="-mx-4 mt-10 overflow-x-auto no-scrollbar pb-2 sm:mx-0 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex w-max gap-5 px-4 sm:gap-6 sm:px-0">
              {workItems.map((item) => (
                <div key={item.href} className="snap-start shrink-0">
                  <Link
                    href={item.href}
                    className="group relative block w-[260px] overflow-hidden rounded-[1.75rem] border border-page-border bg-page-surface aspect-9/16 sm:w-[300px] lg:w-[318px]"
                    aria-label={`${item.brand} vertical`}
                  >
                    <video
                      src={item.video}
                      poster={item.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
                      <h3
                        className={`${acidGroteskFont.className} mt-2 text-3xl font-medium leading-none sm:text-[2.1rem]`}
                      >
                        {item.brand}
                      </h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee / Ticker ── */}
      <section className="py-4 sm:py-6 overflow-hidden border-page-border flex items-center">
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
          style={{ animation: "marquee-fast 50s linear infinite" }}
        >
          {/* First set of words */}
          <div
            className={`${acidGroteskFont.className} flex gap-30 pr-30 text-text-primary text-center text-4xl font-medium leading-[1.1] -tracking-[0.055625em] sm:text-5xl md:text-left lg:text-[4.3rem]`}
            style={{ wordSpacing: ".5rem" }}
          >
            <span>
              Full Creator Network, Performance Tracking & Reporting Tool.
            </span>{" "}
            <span>
              Full Creator Network, Performance Tracking & Reporting Tool.
            </span>{" "}
            <span>
              Full Creator Network, Performance Tracking & Reporting Tool.
            </span>{" "}
          </div>
          {/* Identical duplicate set to seamlessly scroll */}
          <div
            className={`${acidGroteskFont.className} flex gap-30 pr-30 text-text-primary text-center text-4xl font-medium leading-[1.1] -tracking-[0.055625em] sm:text-5xl md:text-left lg:text-[4.3rem]`}
            style={{ wordSpacing: ".5rem" }}
          >
            <span>
              Full Creator Network, Performance Tracking & Reporting Tool.
            </span>{" "}
            <span>
              Full Creator Network, Performance Tracking & Reporting Tool.
            </span>{" "}
            <span>
              Full Creator Network, Performance Tracking & Reporting Tool.
            </span>{" "}
          </div>
        </div>
      </section>

      {/* ── Full Service grid ── */}
      <section className="relative overflow-hidden bg-[#121212] py-24 text-white">
        <div className="relative w-full px-4 sm:px-8 max-w-[1480px] mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <div
                key={i}
                className="group flex flex-col min-h-[420px] rounded-[1.4rem] border border-white/6 bg-[#1f1f1f] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex-1 min-h-0 flex flex-col">
                  {renderServiceArtwork(svc.art)}
                </div>
                <div className="mt-auto pt-4 shrink-0">
                  <h3
                    className="mb-2 text-xl font-semibold text-white leading-[1.4]"
                  >
                    {svc.title}
                  </h3>
                  <p className="text-[1rem] text-text-primary/70 leading-normal font-normal -tracking-[.01125em]">
                    {svc.desc}
                  </p>
                </div>
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
