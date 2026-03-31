"use client";

import React, { useState } from "react";
import { Search, Info, TrendingUp, DollarSign } from "lucide-react";
import PremiumCampaignCard from "@/components/layout/PremiumCampaignCard";

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
    <div className="min-h-screen bg-[#0b0b0b] text-foreground p-4 sm:p-6 md:p-8">
      {/* Full Width Wrapper */}
      <div className="w-full">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-10">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#ff4e17]/10 text-[#ff4e17] rounded-full w-fit">
              <TrendingUp size={12} />
              <span className="text-[9px] font-black uppercase tracking-widest">Dashboard</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">
              Active <span className="text-[#ff4e17]">Campaigns</span>
            </h1>
            <p className="text-[13px] font-bold text-gray-500 max-w-xl uppercase tracking-wider leading-relaxed">
              Track performance, manage submissions and maximize your <span className="text-[#ff4e17]">earnings</span>.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-4 mt-6">
            <div className="bg-white/5 px-4 py-2.5 rounded-xl border border-white/5 flex items-center gap-4">
              <div className="bg-[#ff4e17]/10 p-2 rounded-lg">
                <DollarSign className="text-[#ff4e17]" size={18} />
              </div>
              <div className="pr-2">
                <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest leading-none mb-1">Total Balance</p>
                <p className="text-[16px] font-black text-white">₹21,200.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar - Reduced Padding */}
        <div className="flex flex-col md:flex-row items-center gap-3 bg-white/5 p-2 rounded-2xl border border-white/5 mb-12">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-700" size={18} />
            <input
              type="text"
              placeholder="SEARCH CAMPAIGNS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-12 pr-4 bg-transparent text-sm font-black text-white placeholder:text-gray-800 focus:outline-none uppercase tracking-widest"
            />
          </div>
          <button className="hidden md:flex items-center gap-2 h-11 px-6 bg-[#ff4e17] text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#ff5e00] transition-all active:scale-95">
            Filter Results
          </button>
        </div>

        {/* Campaign Grid - Optimized for Sidebar Interaction */}
        {filteredCampaignDetails.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8 justify-center">
            {filteredCampaignDetails.map((campaign, index) => (
              <div key={index} className="flex justify-center w-full">
                <PremiumCampaignCard campaign={campaign} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 bg-white/5 rounded-2xl border border-dashed border-white/10">
            <Search className="text-gray-800 mb-3" size={32} />
            <h3 className="text-xs font-black text-gray-600 uppercase tracking-widest">No Results Found</h3>
          </div>
        )}

        {/* Support Section */}
        <div className="mt-20 p-6 rounded-3xl bg-linear-to-br from-[#1a1a1a] to-[#0b0b0b] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h2 className="text-xl font-black text-white uppercase tracking-tight leading-none">Need Assistance?</h2>
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Our support team is live 24/7 to help you.</p>
          </div>
          <button className="flex items-center gap-2 bg-white text-black h-12 px-8 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-gray-100 transition-all">
            <Info size={16} />
            Get Help
          </button>
        </div>
      </div>
    </div>
  );
}
