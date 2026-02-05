"use client";

import { Search, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function DiscoverCampaigns() {
  return (
    <div className="min-h-screen bg-[#FFF8ED]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-8 py-4">
        <button className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <ArrowLeft size={16} />
          Discover Content Rewards
        </button>

        <button className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
          Install app in your whop
        </button>
      </div>

      {/* Hero */}
      <div className="mx-auto mt-16 max-w-3xl text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
          ⭐
        </div>

        <h1 className="text-[56px] font-extrabold tracking-tight text-gray-900">
          Discover Campaigns
        </h1>

        <p className="mt-3 text-lg text-gray-600">Get paid for posting</p>

        {/* Search */}
        <div className="relative mx-auto mt-8 max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            placeholder="Mr. Beast Clips..."
            className="w-full rounded-full border border-orange-200 bg-[#FFF3E0] py-3 pl-12 pr-4 text-sm outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <p className="mt-4 text-sm text-gray-500">
          <span className="mr-1 inline-block h-2 w-2 rounded-full bg-orange-400" />
          217 campaigns live
        </p>
      </div>

      {/* Filters */}
      <div className="mx-auto mt-20 flex max-w-6xl items-center justify-between px-8">
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm font-medium">
            Only show verified
            <input type="checkbox" className="accent-orange-500" />
          </label>

          {["All Categories", "All Types", "Featured"].map((f) => (
            <select
              key={f}
              className="rounded-full border border-orange-300 bg-white px-4 py-2 text-sm"
            >
              <option>{f}</option>
            </select>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm font-medium">
          Platform
          {["🎥", "🎵", "📸", "❌"].map((p) => (
            <div
              key={p}
              className="flex h-8 w-8 items-center justify-center rounded-full border"
            >
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-3 gap-6 px-8 pb-20">
        {cards.map((card) => (
          <div key={card.title} className="rounded-2xl border bg-white p-5">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-500">{card.days}</span>
            </div>

            <h3 className="mt-4 text-base font-semibold">{card.title}</h3>

            <p className="mt-1 text-sm text-gray-500">{card.by}</p>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-sm text-gray-500">Paid Out</p>
                <p className="font-semibold">
                  {card.paid}
                  <span className="text-sm text-gray-400"> / {card.cap}</span>
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500">CPM</p>
                <p className="font-semibold">{card.cpm}</p>
              </div>
            </div>

            <div className="mt-4 h-1 w-full rounded-full bg-orange-100">
              <div
                className="h-1 rounded-full bg-orange-500"
                style={{ width: card.progress }}
              />
            </div>

            <div className="mt-4 grid grid-cols-3 text-center text-sm">
              <div>
                <p className="font-semibold">{card.approval}</p>
                <p className="text-gray-500">Approval</p>
              </div>
              <div>
                <p className="font-semibold">{card.views}</p>
                <p className="text-gray-500">Views</p>
              </div>
              <div>
                <p className="font-semibold">{card.creators}</p>
                <p className="text-gray-500">Creators</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const cards = [
  {
    title: "Crown Coins x Terence Crawford",
    by: "Clip Clipping",
    tags: ["CLIPPING", "ENTERTAINMENT"],
    days: "34 days ago",
    paid: "$13,359.37",
    cap: "$21,250",
    cpm: "$2.00 / 1k views",
    progress: "70%",
    approval: "61%",
    views: "6.5M",
    creators: "1971",
  },
  {
    title: "Eleven Labs Clipping Campaign - [1]",
    by: "Eleven Labs",
    tags: ["CLIPPING", "LIFESTYLE"],
    days: "55 days ago",
    paid: "$13,304.81",
    cap: "$21,000",
    cpm: "$2.00 / 1k views",
    progress: "65%",
    approval: "45%",
    views: "11.0M",
    creators: "1986",
  },
  {
    title: "Mumford & Sons | Album Promo",
    by: "Scene Society",
    tags: ["MUSIC"],
    days: "49 days ago",
    paid: "$8,944.62",
    cap: "$10,000",
    cpm: "$1.00 / 1k views",
    progress: "90%",
    approval: "38%",
    views: "10.2M",
    creators: "557",
  },
];
