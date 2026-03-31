"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import CampaignHorizontalCard from "@/components/layout/CampaignHorizontalCard";

// Updated sample campaign data matching the horizontal layout
const campaignDetailsData = [
  {
    title: "Amul #AmulTopical",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    tags: ["Food & Beverage", "Both", "Product"],
    platforms: ["instagram", "youtube"],
    views: "8.1M",
    creators: "567",
    reviewCount: 7220,
    currentAmount: "₹18,750.00",
    totalAmount: "₹300,000.00",
    percentage: 56.1,
    cpm: "₹0.05",
    earnings: "₹0.00",
    submissions: 1,
    status: "active" as const,
  },
  {
    title: "Tata Motors - Nexon EV",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["Automobile", "Clipping", "Gaming"],
    platforms: ["instagram", "tiktok", "youtube"],
    views: "6.5M",
    creators: "1984",
    reviewCount: 1205,
    currentAmount: "₹13,359.37",
    totalAmount: "₹250,000.00",
    percentage: 100,
    cpm: "₹0.10",
    earnings: "₹0.00",
    submissions: 3,
    status: "paid_out" as const,
    statusMessage: "Campaign has ended. Earnings have been paid out.",
  },
  {
    title: "Zomato x BennyBucks",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["Food Delivery", "AI", "Tech"],
    platforms: ["youtube", "tiktok"],
    views: "4.2M",
    creators: "1234",
    reviewCount: 450,
    currentAmount: "₹8,245.12",
    totalAmount: "₹150,000.00",
    percentage: 100,
    cpm: "₹0.08",
    earnings: "₹1,250.00",
    submissions: 5,
    status: "paid_out" as const,
    statusMessage: "Campaign has ended. Earnings have been paid out.",
  }
];

export default function CampaignPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCampaignDetails = campaignDetailsData.filter(campaign =>
    campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    campaign.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-foreground">Campaigns</h1>
        <p className="text-sm text-muted-foreground">
          Track and manage your <span className="text-[#d4af37] font-semibold">Active Campaigns</span>
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37]/50 transition-all"
          />
        </div>
      </div>

      {/* Active Campaigns List */}
      <div className="mb-12">
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-1">My Active Campaigns</h2>
          <p className="text-sm text-muted-foreground">
            Manage your budget, review submissions and tracking performance.
          </p>
        </div>

        {filteredCampaignDetails.length > 0 ? (
          <div className="flex flex-col gap-4">
            {filteredCampaignDetails.map((campaign, index) => (
              <CampaignHorizontalCard key={index} campaign={campaign} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-card border border-border rounded-2xl">
            <div className="w-16 h-16 bg-muted/30 rounded-2xl flex items-center justify-center mb-4 border border-border">
              <Search className="text-muted-foreground" size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">No campaigns found</h3>
            <p className="text-sm text-muted-foreground text-center max-w-sm px-6">
              We couldn&apos;t find any campaigns matching your search. Try different keywords.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
