import CampaignCard from "@/components/layout/CampaignCard";
import FilterButton from "@/components/layout/FilterButton";
import { SparklesIcon } from "@/components/SparklesIcon";
import { TopBar } from "@/components/layout/TopBar";
import Link from "next/link";

const DOTS = [
  { x: "11.11%", y: "47.42%" },
  { x: "41.89%", y: "5.13%" },
  { x: "35.03%", y: "7.45%" },
  { x: "80.88%", y: "80.59%" },
  { x: "74.75%", y: "36.04%" },
  { x: "13.26%", y: "67.56%" },
  { x: "24.47%", y: "5.85%" },
  { x: "76.96%", y: "19.21%" },
  { x: "86.64%", y: "68.25%" },
  { x: "42.49%", y: "59.25%" },
  { x: "36.76%", y: "60.63%" },
  { x: "51.78%", y: "38.15%" },
  { x: "1.95%", y: "74.74%" },
  { x: "50.25%", y: "18.91%" },
  { x: "44.54%", y: "50.65%" },
  { x: "27.74%", y: "3.35%" },
  { x: "82.69%", y: "78.75%" },
  { x: "64.91%", y: "11.62%" },
  { x: "49.10%", y: "76.48%" },
  { x: "50.89%", y: "53.55%" },
];

export default function DiscoverPage() {
  return (
    <div className="bg-background relative">
        <TopBar />

      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-5 py-4 backdrop-blur-lg bg-transparent">
        {/* Left */}
        <div className="flex items-center gap-3">
          <a
            href="/discover"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted transition"
            aria-label="Back"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground"
            >
              <path
                d="M6.2334 2.70605C6.5337 2.4209 7.00869 2.43318 7.29395 2.7334C7.57915 3.03369 7.56684 3.50868 7.2666 3.79395L3.62891 7.25H14.25C14.6642 7.25 15 7.58582 15 8C15 8.41421 14.6642 8.75 14.25 8.75H3.62891L7.2666 12.2061C7.56687 12.4913 7.57912 12.9663 7.29395 13.2666C7.00868 13.5669 6.53371 13.5792 6.2334 13.2939L1.2334 8.54395C1.08438 8.40235 1 8.20556 1 8C1.00002 7.79445 1.08437 7.59763 1.2334 7.45605L6.2334 2.70605Z"
                fill="currentColor"
              />
            </svg>
          </a>

          <span className="text-base font-semibold text-foreground">
            Discover Content Rewards
          </span>
        </div>

        {/* Right */}
        <a
          href="/apps/app_QRxsQodZgK1r4D/install/"
          target="_blank"
          className="rounded-full bg-muted font-500 px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/80 transition"
        >
          Install app in your whop
        </a>
      </header>

      {/* Hero */}
      <section className="text-center mt-8 px-4 relative ">

        {/* Radial Glow */}
<div
  className="
    pointer-events-none
    absolute inset-x-0
    -top-87.5 md:-top-112.5
    h-150 md:h-200
    overflow-hidden
  "
>
  <div
    className="
      mx-auto
      w-[120%] md:w-[900px]
      h-full
    "
  >
    <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(251,191,36,0.15)_0%,rgba(251,191,36,0)_100%)]" />
  </div>
</div>

        {/* DOTS BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[260px]">
            {DOTS.map((dot, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-[#FBBF24] opacity-70"
                style={{
                  width: 3,
                  height: 3,
                  left: dot.x,
                  top: dot.y,
                }}
              />
            ))}
          </div>
        </div>


        {/* CONTENT SLOT */}
        <div className="mx-auto mb-6 h-12 w-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg">
          <SparklesIcon />
        </div>

        <h1 className="text-6xl lg:text-7xl font-medium text-foreground mb-3">
          Discover Campaigns
        </h1>
        <p className="text-lg text-muted-foreground">Get paid for posting</p>

        {/* Search */}
        <div className="relative mx-auto mt-8 w-full max-w-2xl">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            placeholder="Mr. Beast Clips..."
            className="w-full rounded-full
  bg-[color-mix(in_oklab,#f87f14_6%,transparent)]
  border border-orange-200
  py-4 pl-12 pr-4 text-base
  text-foreground placeholder:text-muted-foreground
  outline-none
  focus:ring-2 focus:ring-orange-300 focus:border-orange-300
  shadow-sm"
          />
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <p className="text-sm text-muted-foreground">215 campaigns live</p>
        </div>
      </section>

      {/* Filters */}
      <section className="mt-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-2 text-sm text-foreground">
                <span>Only show verified</span>
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-background after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                </div>
              </label>

              <FilterButton label="All Categories" />
              <FilterButton label="All Types" />
              <FilterButton label="Featured" />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Platform</span>
              <div className="flex gap-1">
                <button className="p-1 border-[rgba(251,191,36,0.5)] border bg-[linear-gradient(to right, rgba(251, 191, 36, 0.08), rgba(251, 191, 36, 0.08))] rounded-lg hover:bg-muted transition-colors">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-foreground"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </button>
                <button className="p-1 border-[rgba(251,191,36,0.5)] border bg-[linear-gradient(to right, rgba(251, 191, 36, 0.08), rgba(251, 191, 36, 0.08))] rounded-lg hover:bg-muted transition-colors">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-foreground"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                  </svg>
                </button>
                <button className="p-1 border-[rgba(251,191,36,0.5)] border bg-[linear-gradient(to right, rgba(251, 191, 36, 0.08), rgba(251, 191, 36, 0.08))] rounded-lg hover:bg-muted transition-colors">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-foreground"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                  </svg>
                </button>
                <button className="p-1 border-[rgba(251,191,36,0.5)] border bg-[linear-gradient(to right, rgba(251, 191, 36, 0.08), rgba(251, 191, 36, 0.08))] rounded-lg hover:bg-muted transition-colors">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-foreground"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="px-4 pt-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid  grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
            <Link href="/campaign/mumford-and-sons">
              <CampaignCard
                campaign={{
                  title: "Eleven Labs Clipping Campaign - [1]",
                  company: "Eleven Labs",
                  categories: ["CLIPPING", "LIFESTYLE"],
                  platforms: ["youtube", "tiktok"],
                  paidOut: "$8,245.12",
                  totalBudget: "$15,000",
                  cp: 55,
                  cpm: "$1.80",
                  approval: "73%",
                  views: "4.2M",
                  creators: "1234",
                  image:
                    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
                }}
              />
            </Link>
            <Link href="/campaign/mumford-and-sons">
            <CampaignCard
              campaign={{
                title: "Mumford & Sons | Album Promo",
                company: "Scene Society",
                categories: ["MUSIC", "ENTERTAINMENT"],
                platforms: ["instagram", "youtube", "x"],
                paidOut: "$18,750.00",
                totalBudget: "$25,000",
                cp: 75,
                cpm: "$2.50",
                approval: "82%",
                views: "8.1M",
                creators: "567",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
              }}
            />
            </Link>

              <Link href="/campaign/mumford-and-sons">
            <CampaignCard
              campaign={{
                title: "Mumford & Sons | Album Promo",
                company: "Scene Society",
                categories: ["MUSIC", "ENTERTAINMENT"],
                platforms: ["instagram", "youtube", "x"],
                paidOut: "$18,750.00",
                totalBudget: "$25,000",
                cp: 75,
                cpm: "$2.50",
                approval: "82%",
                views: "8.1M",
                creators: "567",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
              }}
            />
            </Link>
            <Link href="/campaign/mumford-and-sons">
            <CampaignCard
              campaign={{
                title: "Mumford & Sons | Album Promo",
                company: "Scene Society",
                categories: ["MUSIC", "ENTERTAINMENT"],
                platforms: ["instagram", "youtube", "x"],
                paidOut: "$18,750.00",
                totalBudget: "$25,000",
                cp: 75,
                cpm: "$2.50",
                approval: "82%",
                views: "8.1M",
                creators: "567",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
              }}
            />
            </Link>
            <Link href="/campaign/mumford-and-sons">
            <CampaignCard
              campaign={{
                title: "Mumford & Sons | Album Promo",
                company: "Scene Society",
                categories: ["MUSIC", "ENTERTAINMENT"],
                platforms: ["instagram", "youtube", "x"],
                paidOut: "$18,750.00",
                totalBudget: "$25,000",
                cp: 75,
                cpm: "$2.50",
                approval: "82%",
                views: "8.1M",
                creators: "567",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
              }}
            />
            </Link>
            <Link href="/campaign/mumford-and-sons">
            <CampaignCard
              campaign={{
                title: "Mumford & Sons | Album Promo",
                company: "Scene Society",
                categories: ["MUSIC", "ENTERTAINMENT"],
                platforms: ["instagram", "youtube", "x"],
                paidOut: "$18,750.00",
                totalBudget: "$25,000",
                cp: 75,
                cpm: "$2.50",
                approval: "82%",
                views: "8.1M",
                creators: "567",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
              }}
            />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
