import { Calendar, Users, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

interface CampaignCardProps {
  campaign?: {
    title: string;
    company: string;
    categories: string[];
    platforms: string[];
    paidOut: string;
    totalBudget: string;
    cp: number;
    cpm: string;
    approval: string;
    views: string;
    creators: string;
    image?: string;
    dateRange?: string;
  };
}

const getCategoryStyle = (cat: string) => {
  const normalized = cat.toUpperCase();
  if (normalized === "UGC") return "bg-blue-500 text-white";
  if (normalized === "MUSIC") return "bg-pink-600 text-white";
  if (normalized === "CLIPPING") return "bg-purple-600 text-white";
  if (normalized === "LOGO") return "bg-emerald-600 text-white";
  return "bg-muted text-muted-foreground border border-border";
};

const PlatformIcon = ({ platform }: { platform: string }) => {
  if (platform === 'instagram') {
    return (
      <div className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center text-[#e1306c]">
        <Instagram className="w-3.5 h-3.5" strokeWidth={2.5} />
      </div>
    );
  }
  if (platform === 'youtube') {
    return (
      <div className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center text-[#ff0000]">
        <Youtube className="w-3.5 h-3.5" strokeWidth={2.5} />
      </div>
    );
  }

  return null;
};

export default function CampaignCard({ campaign }: CampaignCardProps) {
  if (!campaign) return null;
  
  return (
    <div className="group relative flex flex-col bg-card border border-border rounded-[24px] overflow-hidden transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:bg-accent/10">
      {/* Top Image Section */}
      <div className="relative w-full h-[220px] bg-muted overflow-hidden">
        {/* Inner shadow overlay for 3D depth */}
        <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent z-10 pointer-events-none transition-opacity duration-500"></div>
        <Image
          alt={campaign.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          src={campaign.image || "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"}
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          {campaign.categories.map((category, index) => (
            <div
              key={index}
              className={`px-3 py-1 rounded-full text-[12px] font-bold tracking-wide capitalize ${getCategoryStyle(category)} shadow-lg shadow-black/20`}
            >
              {category.toLowerCase() === 'ugc' ? 'UGC' : category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
            </div>
          ))}
        </div>

        {/* Date Container */}
        <div className="absolute right-4 bottom-4 flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 text-[11px] text-muted-foreground backdrop-blur-md border border-border">
          <Calendar className="w-3 h-3 stroke-[2.5]" />
          <span className="font-semibold tracking-wide">{campaign.dateRange || "01 Mar 2026 — 31 Mar 2026"}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col gap-6 bg-card">

        {/* Header */}
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-1 min-w-0">
            <h3 className="text-[18px] font-bold text-foreground leading-tight truncate">
              {campaign.title}
            </h3>
            <span className="text-sm font-medium text-muted-foreground">
              {campaign.company}
            </span>
          </div>

          <div className="flex gap-1.5 shrink-0">
            {campaign.platforms.map((platform, idx) => (
              <PlatformIcon key={idx} platform={platform} />
            ))}
          </div>
        </div>

        {/* Stats Table */}
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="text-sm text-muted-foreground font-medium">
              Creators
            </span>
            <span className="flex items-center gap-1.5 text-sm font-bold text-foreground">
              <Users className="w-4 h-4 text-muted-foreground/60" strokeWidth={2.5} />
              {campaign.creators}
            </span>
          </div>

          <div className="flex justify-between items-center w-full">
            <span className="text-sm text-muted-foreground font-medium">Budget</span>
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-500">&#8377;{campaign.totalBudget}</span>
          </div>

          <div className="flex flex-col gap-2.5 w-full">
            <div className="flex justify-between items-center w-full">
              <span className="text-sm text-muted-foreground font-medium">Budget Used</span>
              <span className="text-sm font-bold text-foreground">{campaign.cp}%</span>
            </div>
            {/* Progress Bar */}
            <div className="relative w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-orange-500 rounded-full transition-all duration-300"
                style={{ width: `${campaign.cp}%` }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Rate Footer */}
      <div className="mt-auto border-t border-border bg-muted/30 p-4.5 py-4 flex flex-col items-center justify-center gap-1">
        <span className="text-[13px] text-muted-foreground font-medium">Rate per 1M Views</span>
        <span className="text-[20px] font-bold text-emerald-600 dark:text-emerald-500">&#8377;{campaign.cpm}</span>
      </div>
    </div>
  );
}
