"use client";

import React, { useState } from "react";
import { Search, Info, DollarSign } from "lucide-react";
import PremiumCampaignCard from "@/components/layout/PremiumCampaignCard";
import { SparklesIcon } from "@/components/SparklesIcon";

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

const campaignDetailsData = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Dream11_Logo.svg/1280px-Dream11_Logo.svg.png",
    category: "Gaming",
    categoryColor: "#7c3aed",
    title: "Dream11 [IPL Cricket]",
    earnings: "₹0.00",
    percentage: 13.51,
    currentAmount: "₹0.00",
    totalAmount: "₹8,50,000.00",
    submissions: 2,
    status: "active" as const,
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
    category: "General",
    categoryColor: "#3b82f6",
    title: "Zomato [Food Delivery]",
    earnings: "₹0.00",
    percentage: 59.55,
    currentAmount: "₹0.00",
    totalAmount: "₹2,50,000.00",
    submissions: 1,
    status: "active" as const,
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Meesho_Logo.svg/1024px-Meesho_Logo.svg.png",
    category: "General",
    categoryColor: "#3b82f6",
    title: "Meesho [Shopping]",
    earnings: "₹0.00",
    status: "paid_out" as const,
    statusMessage: "Campaign has ended. Earnings have been paid out.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/PhonePe_Logo.png",
    category: "Other",
    categoryColor: "#f97316",
    title: "PhonePe [UPI Payments]",
    earnings: "₹0.00",
    status: "paid_out" as const,
    statusMessage: "Campaign has ended. Earnings have been paid out.",
  }
];

export default function CampaignPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCampaignDetails = campaignDetailsData.filter(campaign =>
    campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    campaign.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-background relative min-h-screen">
      <header className="sticky top-0 z-40 flex items-center justify-between px-5 py-4 backdrop-blur-lg bg-background/50 border-b border-border">
        <div className="flex items-center gap-3">
          <span className="text-base font-semibold text-foreground">
            Active Campaigns
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <div className="bg-muted px-4 py-2.5 rounded-xl border border-border flex items-center gap-4">
            <div className="bg-[#ff4e17]/10 p-2 rounded-lg">
              <DollarSign className="text-[#ff4e17]" size={18} />
            </div>
            <div className="pr-2">
              <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1">Total Balance</p>
              <p className="text-[16px] font-black text-foreground">₹21,200.00</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Matching Discover */}
      <section className="text-center mt-12 px-4 relative mb-16">
        {/* Radial Glow */}
        <div className="pointer-events-none absolute inset-x-0 -top-87.5 md:-top-112.5 h-150 md:h-200 overflow-hidden">
          <div className="mx-auto w-[120%] md:w-[900px] h-full">
            <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(248,127,20,0.15)_0%,rgba(248,127,20,0)_100%)]" />
          </div>
        </div>

        {/* DOTS BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[260px]">
            {DOTS.map((dot, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-orange-500 opacity-40"
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

        <h1 className="text-6xl lg:text-7xl font-medium tracking-tight text-foreground mb-3">
          Active <span className="text-orange-500">Campaigns</span>
        </h1>
        <p className="text-lg text-muted-foreground font-medium">Track and manage your running reward campaigns</p>

        {/* Search - Matching Discover */}
        <div className="relative mx-auto mt-8 w-full max-w-2xl">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search size={20} />
          </div>
          <input
            placeholder="SEARCH CAMPAIGNS..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full bg-muted border border-orange-200/20 py-4 pl-12 pr-4 text-base text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500/50 shadow-sm"
          />
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse scale-animation"></div>
          <p className="text-sm text-muted-foreground">{filteredCampaignDetails.length} campaigns active</p>
        </div>
      </section>

      <div className="px-4 sm:px-6 md:px-8 pb-24">

        {/* Campaign Grid - Optimized for Sidebar Interaction */}
        {filteredCampaignDetails.length > 0 ? (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 lg:gap-8 justify-center max-w-7xl mx-auto">
            {filteredCampaignDetails.map((campaign, index) => (
              <PremiumCampaignCard key={index} campaign={campaign} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 bg-muted rounded-2xl border border-dashed border-border">
            <Search className="text-muted-foreground mb-3" size={32} />
            <h3 className="text-xs font-black text-muted-foreground uppercase tracking-widest">No Results Found</h3>
          </div>
        )}

        {/* Support Section */}
        <div className="mt-20 p-6 rounded-3xl bg-muted border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight leading-none">Need Assistance?</h2>
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Our support team is live 24/7 to help you.</p>
          </div>
          <button className="flex items-center gap-2 bg-foreground text-background h-12 px-8 rounded-xl font-black text-[11px] uppercase tracking-widest hover:opacity-90 transition-all">
            <Info size={16} />
            Get Help
          </button>
        </div>
      </div>
    </div>
  );
}
