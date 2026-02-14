"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SubmitContentModal from "./SubmitContentModal";

interface CampaignDetailsCardProps {
  campaign?: {
    title: string;
    category: string;
    earnings: string;
    completionPercentage: number;
    completedAmount: string;
    totalAmount: string;
    submissions: number;
    status: "active" | "ended" | "paid_out";
    image?: string;
    gradientFrom?: string;
    gradientTo?: string;
  };
}

const defaultCampaign = {
  title: "Betstrike [GENERAL - ...]",
  category: "General",
  earnings: "$0.00",
  completionPercentage: 0.05,
  completedAmount: "$0.00",
  totalAmount: "$2,000.00",
  submissions: 1,
  status: "active" as const,
  image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
  gradientFrom: "#8B5CF6",
  gradientTo: "#6366F1"
};

export default function CampaignDetailsCard({ campaign = defaultCampaign }: CampaignDetailsCardProps) {
  const isActive = campaign.status === "active";
  const isPaidOut = campaign.status === "paid_out";
  const router = useRouter();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmitSuccess = () => {
    setHasSubmitted(true);
  };

  const handleViewSubmissions = () => {
    router.push("/joined/my-submissions");
  };
  
  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer hover:border-[#d4af37]/30">
      <div className="p-5 flex flex-col gap-5 h-full">
        {/* Header with Gradient Image */}
        <div className="relative w-full h-32 rounded-xl overflow-hidden" style={{
          background: `linear-gradient(135deg, ${campaign.gradientFrom || '#8B5CF6'} 0%, ${campaign.gradientTo || '#6366F1'} 100%)`
        }}>
          {/* Decorative shapes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-16 bg-white/20 rounded-lg transform -rotate-12 translate-x-8"></div>
            <div className="w-28 h-12 bg-white/30 rounded-lg transform rotate-6 -translate-x-6"></div>
          </div>
          
          {/* Category Badge */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <div className={`px-4 py-1.5 rounded-full ${
              isPaidOut ? 'bg-red-500' : 'bg-orange-500'
            }`}>
              <span className="text-xs font-semibold text-white">
                {campaign.category}
              </span>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-bold text-foreground leading-tight line-clamp-2">
            {campaign.title}
          </h3>
        </div>

        {/* Earnings Section */}
        <div className="bg-muted/30 border border-border rounded-xl p-4 flex flex-col gap-2">
          <span className="text-xs font-medium text-muted-foreground text-center">
            Your Earnings
          </span>
          <p className="text-3xl font-bold text-foreground text-center">
            {campaign.earnings}
          </p>
          
          {/* Paid Out Status */}
          {isPaidOut && (
            <div className="flex items-center justify-center gap-1.5 mt-1">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-semibold text-green-600">
                Paid Out
              </span>
            </div>
          )}
        </div>

        {/* Campaign Status Message for Inactive Campaigns */}
        {!isActive && (
          <div className="bg-muted/20 border border-border rounded-xl p-4">
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              Campaign has ended. Earnings have been paid out.
            </p>
          </div>
        )}

        {/* Campaign Completion - Only for Active Campaigns */}
        {isActive && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                campaign completion
              </span>
            </div>
            
            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold text-orange-500">
                {campaign.completionPercentage.toFixed(2)}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500"
                style={{
                  width: `${campaign.completionPercentage}%`,
                }}
              ></div>
            </div>

            {/* Amount Range */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                {campaign.completedAmount}
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {campaign.totalAmount}
              </span>
            </div>
          </div>
        )}

        {/* Submissions Button */}
        <div 
          onClick={handleViewSubmissions}
          className="bg-muted/30 border border-border rounded-xl p-3 flex items-center justify-between hover:bg-muted/50 transition-colors cursor-pointer"
        >
          <span className="text-sm font-semibold text-foreground">
            Your Submissions
          </span>
          <div className="w-8 h-8 bg-background border border-border rounded-lg flex items-center justify-center">
            <span className="text-sm font-bold text-foreground">
              {campaign.submissions}
            </span>
          </div>
        </div>

        {/* Campaign Details Button */}
        <button className="w-full bg-muted/30 border border-border rounded-xl p-3 text-sm font-semibold text-foreground hover:bg-muted/50 transition-colors">
          Campaign Details
        </button>

        {/* Submit Button - Only for Active Campaigns */}
        {isActive && (
          <button 
            onClick={() => setIsModalOpen(true)}
            disabled={hasSubmitted}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-muted disabled:to-muted disabled:cursor-not-allowed rounded-xl p-3.5 text-base font-bold text-white disabled:text-muted-foreground transition-all duration-300 shadow-lg hover:shadow-xl disabled:shadow-none"
          >
            {hasSubmitted ? "Submitted" : "Submit"}
          </button>
        )}
      </div>

      {/* Submit Content Modal */}
      <SubmitContentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        campaignTitle={campaign.title}
        onSubmitSuccess={handleSubmitSuccess}
      />
    </div>
  );
}
