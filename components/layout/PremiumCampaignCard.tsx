"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, Send, Check } from "lucide-react";

interface PremiumCampaignCardProps {
  campaign: {
    logo: string;
    category: string;
    categoryColor?: string;
    title: string;
    earnings: string;
    percentage?: number;
    currentAmount?: string;
    totalAmount?: string;
    submissions?: number;
    status: "active" | "paid_out";
    statusMessage?: string;
  };
  onClick?: () => void;
}

const PremiumCampaignCard = ({ campaign, onClick }: PremiumCampaignCardProps) => {
  const isActive = campaign.status === "active";
  const isPaidOut = campaign.status === "paid_out";

  return (
    <div 
      onClick={onClick}
      className="bg-[#141414] rounded-3xl shadow-xl border border-white/5 w-full min-w-[280px] max-w-[400px] transition-all hover:bg-[#181818] cursor-pointer flex flex-col h-full overflow-hidden mx-auto"
    >
      {/* FULL WIDTH IMAGE HEADER */}
      <div className="relative w-full h-40 shrink-0 bg-[#1a1a1a]">
        <Image
          src={campaign.logo}
          alt={campaign.title}
          fill
          className="object-cover"
          sizes="(max-width: 500px) 100vw, 500px"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span 
            className="text-white text-[9px] font-semibold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-lg"
            style={{ backgroundColor: campaign.categoryColor || "#7c3aed" }}
          >
            {campaign.category}
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <div className="mb-4 shrink-0 overflow-hidden">
          <h2 className="text-[#eee] text-[14px] font-semibold text-left leading-tight line-clamp-1">
            {campaign.title}
          </h2>
        </div>

        {/* Earnings Box - Reduced Padding and Font Size */}
        <div className="bg-[#0f0f0f] rounded-2xl py-4 px-3 mb-5 text-center border border-white/5 shrink-0 shadow-inner">
          <p className="text-[12px] font-medium text-gray-500 uppercase tracking-wider mb-1">
            YOUR EARNINGS
          </p>
          <p className="text-2xl font-semibold text-white tracking-tight">
            {campaign.earnings}
          </p>
          {isPaidOut && (
            <div className="flex items-center justify-center gap-1 mt-1 text-emerald-500/90">
              <Check size={12} strokeWidth={2.5} />
              <span className="text-[10px] font-semibold uppercase tracking-wide">Paid Out</span>
            </div>
          )}
        </div>

        {/* Campaign Metrics */}
        <div className="flex-1 mb-5">
          {isActive ? (
            <div className="w-full">
              <div className="text-center mb-2">
                <span className="text-[#ff4e17] text-[15px] font-bold tracking-tight italic">
                  {campaign.percentage}%
                </span>
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                  campaign completion
                </p>
              </div>
              
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-emerald-500/80 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${campaign.percentage}%` }}
                />
              </div>
              
              <div className="flex justify-between text-[11px] font-medium text-gray-500 tracking-tight">
                <span>{campaign.currentAmount}</span>
                <span>{campaign.totalAmount}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full min-h-[60px]">
              <p className="text-[12px] font-medium text-gray-500 text-center leading-relaxed italic px-4">
                {campaign.statusMessage || "Campaign has ended. Earnings have been paid out."}
              </p>
            </div>
          )}
        </div>

        {/* Interactive Rows (Only for Active) */}
        {isActive && (
          <div className="mt-auto space-y-2">
            <button className="w-full h-11 flex items-center justify-between bg-[#0f0f0f] px-4 rounded-xl hover:bg-[#181818] transition-all border border-white/5">
              <span className="text-[13px] font-medium text-gray-400">Your Submissions</span>
              <div className="bg-white/5 w-7 h-6 flex items-center justify-center rounded-lg text-[11px] font-semibold text-gray-300">
                {campaign.submissions}
              </div>
            </button>
            
            <button className="w-full h-11 flex items-center justify-between bg-[#0f0f0f] px-4 rounded-xl hover:bg-[#181818] transition-all border border-white/5 mb-4">
              <span className="text-[13px] font-medium text-gray-400">Campaign Details</span>
              <ChevronRight size={14} className="text-gray-500" />
            </button>

            <button className="w-full bg-[#ff5e00] hover:bg-[#ff7a29] text-white font-semibold h-12 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/10 active:scale-[0.98] transition-all transform shrink-0">
              <Send size={16} className="rotate-[-20deg] stroke-[2px]" />
              <span className="uppercase tracking-widest text-[13px]">Submit</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumCampaignCard;
