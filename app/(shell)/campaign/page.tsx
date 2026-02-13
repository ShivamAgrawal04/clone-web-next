"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import CampaignCard from "@/components/layout/CampaignCard";
import { useRouter } from "next/navigation";

// Sample campaign data - you can replace this with API data
const campaignData = [
  {
    title: "Crown Coins x Terence Crawford",
    company: "Clipr Clipping",
    categories: ["CLIPPING", "ENTERTAINMENT"],
    platforms: ["instagram", "tiktok", "youtube"],
    paidOut: "$13,359.37",
    totalBudget: "$21,250",
    cp: 63,
    cpm: "$2.00",
    approval: "61%",
    views: "6.5M",
    creators: "1984",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
  },
  {
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
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
  },
  {
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
    creators: "567"
  },
  {
    title: "Tech Product Launch Campaign",
    company: "TechVision Media",
    categories: ["TECH", "REVIEW"],
    platforms: ["youtube", "instagram"],
    paidOut: "$5,420.00",
    totalBudget: "$12,000",
    cp: 45,
    cpm: "$1.75",
    approval: "68%",
    views: "3.1M",
    creators: "892"
  }
];

export default function CampaignPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Filter campaigns based on search query
  const filteredCampaigns = campaignData.filter(campaign =>
    campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    campaign.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    campaign.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCardClick = () => {
    router.push("/joined/my-submissions");
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Campaigns</h1>
        <p className="text-sm text-muted-foreground">
          Discover active campaigns from this <span className="text-[#d4af37]">Content Rewards Community</span>
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37]/50 transition-all"
          />
        </div>
      </div>

      {/* Campaigns Grid */}
      {filteredCampaigns.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign, index) => (
            <div key={index} onClick={handleCardClick}>
              <CampaignCard campaign={campaign} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-16 h-16 bg-muted/30 rounded-2xl flex items-center justify-center mb-4 border border-border">
            <Search className="text-muted-foreground" size={32} />
          </div>
          <h3 className="text-lg font-bold mb-2">No campaigns found</h3>
          <p className="text-sm text-muted-foreground text-center max-w-sm">
            Try adjusting your filters
          </p>
        </div>
      )}
    </div>
  );
}
