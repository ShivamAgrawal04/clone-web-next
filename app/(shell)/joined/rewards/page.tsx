"use client";

import { ArrowLeft } from "lucide-react";

export default function ContentRewardsWhopExact() {
  return (
    <div className="w-full min-h-screen bg-[#0b0b0b] text-white">
      {/* HEADER */}
      <div className="h-14 flex items-center gap-3 px-6 border-b border-white/10">
        <ArrowLeft size={16} className="text-white/60" />
        <span className="text-sm font-medium">Content Rewards</span>
      </div>

      {/* CONTENT */}
      <div className="px-6 py-6 space-y-5">

        {/* TITLE */}
        <p className="text-center text-sm text-white/60">
          Clip Rayston&apos;s YouTube Videos
        </p>

        {/* BANNER — FULL WIDTH */}
        <div className="w-full flex justify-center">
          <img
            src="https://i.imgur.com/5KJ8QwJ.png"
            alt="banner"
            className="rounded-2xl max-w-[760px] w-full"
          />
        </div>

        {/* SUBMISSIONS */}
        <div className="border border-blue-500/40 rounded-lg py-2 text-center text-sm text-blue-400">
          My submissions (2)
        </div>

        {/* PAID OUT */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-white/60">
            <span>PAID OUT</span>
            <span className="text-white">100%</span>
          </div>

          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-full bg-orange-500" />
          </div>

          <p className="text-xs text-white/50">
            $950 of $950 paid out
          </p>
        </div>

        {/* INFO ROW */}
        <div className="flex flex-wrap gap-2">
          <Info title="REWARD" value="$1.00 / 1K" blue />
          <Info title="TYPE" value="Clipping" />
          <Info title="MINIMUM PAYOUT" value="$2.00" />
          <Info title="MAXIMUM PAYOUT" value="$60.00" />
          <Info title="CATEGORY" value="Personal brand" />
          <Info title="PLATFORMS" value="Instagram · TikTok · YouTube" />
        </div>

        {/* REQUIREMENTS */}
        <Section title="REQUIREMENTS">
          {[
            "Must watch the course",
            "Tag Rayston in caption and bio",
            "Put Rayston's YouTube channel link in bio",
            "Only High Quality edits accepted",
            "Target a tier 1 audience only.",
            "You can use a clipping page, dedicated page, or an established theme page",
            "Any sort of botting/faking views/engagement will get you banned (including promos)",
            "You can clip/use any clips from his YouTube videos",
          ]}
        </Section>

        {/* ASSETS */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-white/60">ASSETS</p>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#111] border border-white/10">
            <div className="h-8 w-8 rounded-full bg-white/20" />
            <div>
              <p className="text-sm">Rayston Heem</p>
              <p className="text-xs text-blue-400">
                youtube.com/@raystonheem
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#111] border border-white/10">
            <div className="h-8 w-8 rounded bg-white/20" />
            <p className="text-sm">
              I Tried Building a $1,000,000 Dropshipping Store in 7 Days.mp4
            </p>
          </div>
        </div>

        {/* DISCLAIMER */}
        <p className="text-[11px] text-white/40 leading-relaxed">
          Creators may reject submissions that don&apos;t meet requirements. By
          submitting, you grant full usage rights and agree to follow the FTC
          guidelines and the Content Rewards Terms.
        </p>

        {/* FOOTER */}
        <div className="flex items-center justify-between pt-3">
          <div className="text-sm text-white/60">
            Clip Rayston&apos;s YouTube Videos
            <span className="ml-2 text-white/40">$1.00 / 1K</span>
          </div>

          <button className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-semibold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function Info({
  title,
  value,
  blue,
}: {
  title: string;
  value: string;
  blue?: boolean;
}) {
  return (
    <div className="px-3 py-2 rounded-lg bg-[#111] border border-white/10">
      <p className="text-[10px] text-white/40">{title}</p>
      <p className={`text-sm font-semibold ${blue ? "text-blue-400" : ""}`}>
        {value}
      </p>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: string[];
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-white/60">{title}</p>
      <div className="flex flex-wrap gap-2">
        {children.map((t) => (
          <span
            key={t}
            className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
