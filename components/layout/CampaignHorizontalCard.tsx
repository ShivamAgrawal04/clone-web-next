// "use client";

// import React from "react";
// import Image from "next/image";
// import { Instagram, Youtube } from "lucide-react";

// interface CampaignHorizontalCardProps {
//   campaign: {
//     id: string;
//     title: string;
//     image: string;
//     earnings: string;
//     totalAmount: string;
//     percentage: number;
//     submissions: number;
//     tags: string[];
//     status: string;
//     statusMessage?: string;
//   };
// }

// export default function CampaignHorizontalCard({ campaign }: CampaignHorizontalCardProps) {
//   const isClosed = campaign.percentage >= 100 || campaign.status === "ended" || campaign.status === "paid_out";
//   const isPaidOut = campaign.status === "paid_out";

//   return (
//     <div className="group bg-[#0f0f0f] border border-white/5 rounded-2xl overflow-hidden p-3 sm:p-4 lg:p-5 flex flex-col lg:flex-row gap-4 lg:gap-6 hover:border-white/10 transition-all duration-300 lg:h-[230px] w-full max-w-[2200px] mx-auto min-w-0">
//       {/* Left: Campaign Image Section */}
//       <div className="relative w-full lg:w-[220px] xl:w-[300px] h-[160px] xs:h-[200px] sm:h-[240px] lg:h-full rounded-xl overflow-hidden shrink-0">
//         <Image
//           src={campaign.image}
//           alt={campaign.title}
//           fill
//           className="object-cover group-hover:scale-105 transition-transform duration-700"
//           sizes="(max-width: 1024px) 100vw, 300px"
//         />
//         <div className="absolute top-3 left-3 z-10">
//           <span className="px-3 py-1 rounded-lg bg-[#eb4335]/90 text-white text-[10px] font-black uppercase tracking-wider shadow-xl backdrop-blur-md">
//             {campaign.tags[0]}
//           </span>
//         </div>
//       </div>

//       {/* Right: Content Section (Restored functional structure) */}
//       <div className="flex-1 flex flex-col justify-between py-0.5 min-w-0">
//         {/* Row 1: Header - Title and Earnings at top right */}
//         <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 mb-2 lg:mb-0">
//           <div className="flex flex-col gap-1.5 min-w-0 flex-1">
//             <h3 className="text-white tracking-tight text-xl font-extrabold leading-tight line-clamp-2 lg:line-clamp-1">
//               {campaign.title}
//             </h3>
//             <div className="flex flex-wrap items-center gap-2">
//               <div className="flex flex-wrap gap-1.5">
//                 {campaign.tags.slice(1, 4).map((tag, index) => (
//                   <span key={index} className="px-3 py-1 rounded-full bg-[#1c142e] text-[#9378ff] text-[10px] sm:text-[11px] font-bold">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex items-center gap-2.5 text-slate-400">
//                 <Instagram size={16} className="hover:text-white transition-colors cursor-pointer" />
//                 <Youtube size={16} className="hover:text-white transition-colors cursor-pointer" />
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col items-start xs:items-end shrink-0">
//             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1.5">Earnings</span>
//             <span className="text-2xl sm:text-3xl font-black text-white leading-none">{campaign.earnings}</span>
//             {isPaidOut && (
//               <span className="text-[11px] font-bold text-emerald-500 mt-1.5 flex items-center gap-1">
//                 <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
//                   <polyline points="20 6 9 17 4 12" />
//                 </svg>
//                 Paid Out
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Row 2: Status Messaging */}
//         <div className="hidden sm:flex h-6 lg:h-4 xl:h-6 items-center lg:mt-0 overflow-hidden">
//           {campaign.statusMessage && (
//             <p className="text-[11px] font-medium text-slate-500 italic line-clamp-1 border-l border-white/10 pl-2.5">
//               {campaign.statusMessage}
//             </p>
//           )}
//         </div>

//         {/* Row 3: Progress and Actions (Merged into one row for big screens as requested) */}
//         <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-4 lg:gap-3 xl:gap-8 mt-3 lg:mt-0 px-1 xl:px-0">
//           {/* Progress Tracking (Screenshot font styles) */}
//           <div className="flex-1 min-w-0 flex items-center gap-3 text-[11px] sm:text-[12px] font-bold">
//             <div className="flex items-center gap-1.5 shrink-0">
//               <span className="text-slate-200">{campaign.percentage}%</span>
//               <span className="text-slate-500 font-medium lowercase hidden 2xl:inline">campaign completion</span>
//             </div>
//             <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden min-w-[60px]">
//               <div
//                 className={`h-full rounded-full transition-all duration-1000 ${isClosed ? 'bg-slate-700' : 'bg-slate-400'}`}
//                 style={{ width: `${campaign.percentage}%` }}
//               />
//             </div>
//             <span className="text-white font-black shrink-0 tracking-tight">
//               {campaign.totalAmount}
//             </span>
//           </div>

//           {/* Functional Buttons (Restored colors from screenshot) */}
//           <div className="flex flex-wrap items-center gap-2.5 shrink-0">
//             <button className="flex items-center gap-2.5 px-3.5 sm:px-5 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-white text-[11px] sm:text-xs font-bold transition-all border border-white/5 whitespace-nowrap">
//               <span>Your Submissions</span>
//               <span className="flex items-center justify-center w-5 h-5 bg-white/10 rounded-md text-[10px] font-black">{campaign.submissions}</span>
//             </button>
//             <button className="px-3.5 sm:px-5 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-white text-[11px] sm:text-xs font-bold transition-all border border-white/5 whitespace-nowrap">
//               Campaign Details
//             </button>
//             <button
//               disabled={isClosed}
//               className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 sm:px-10 h-10 rounded-xl text-[11px] sm:text-xs font-semibold tracking-wider transition-all duration-300 shadow-xl whitespace-nowrap ml-auto 
//                   ${isClosed
//                   ? 'bg-slate-800/50 text-slate-500 cursor-not-allowed border border-white/5 opacity-50'
//                   : 'bg-[linear-gradient(#5c4a32,#362b1d)] hover:bg-[linear-gradient(#4c3d28,#292015)] text-white border-[#eab308]/20 shadow-orange-900/10 active:scale-95'
//                 }`}
//             >
//               {isClosed ? 'Completed' : 'Submit Now'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import React from "react";
import Image from "next/image";
import { Youtube, Instagram, Eye, Pause, Folder, Pencil, ChevronRight, IndianRupee } from "lucide-react";

interface CampaignHorizontalCardProps {
  campaign: {
    title: string;
    image: string;
    tags: string[];
    platforms: string[];
    views: string;
    creators: string;
    reviewCount: number;
    currentAmount: string;
    totalAmount: string;
    percentage: number;
    cpm: string;
    earnings: string;
    submissions: number;
    status: string;
    statusMessage?: string;
  };
}

export default function CampaignHorizontalCard({ campaign }: CampaignHorizontalCardProps) {
  return (
    <div className="group bg-[#0f0f0f] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 p-4 lg:p-5 flex flex-col md:flex-row gap-6 w-full max-w-[2200px] mx-auto min-h-min md:h-[230px] lg:h-[240px] xl:h-[220px]">
      {/* 1. Image section */}
      <div className="relative w-full md:w-56 lg:w-[320px] h-[180px] md:h-full rounded-xl overflow-hidden shrink-0 border border-white/5 bg-[#1a1a1a]">
        {campaign.image ? (
          <Image
            src={campaign.image}
            alt={campaign.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 font-sans"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#5c4a32] to-[#362b1d]" />
        )}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 rounded-lg bg-[#eb4335]/90 text-white text-[10px] font-black uppercase tracking-wider shadow-2xl backdrop-blur-md">
            Campaign
          </span>
        </div>
      </div>

      {/* 2. Content section */}
      <div className="flex flex-col flex-1 py-0.5 justify-between min-w-0">
        {/* Top Row: Title & Stats */}
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-4">
          <div className="flex flex-col gap-2 min-w-0 flex-1">
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight line-clamp-1 tracking-tight">
              {campaign.title}
            </h3>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap gap-2">
                {campaign.tags.slice(0, 3).map((tag, i) => (
                  <span key={tag + i} className="px-3 py-1 bg-[#1c142e] text-[#9378ff] border border-[#9378ff]/10 text-[11px] font-bold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                {campaign.platforms?.map((p) => (
                  <React.Fragment key={p}>
                    {p.toLowerCase().includes("instagram") && <Instagram size={17} className="hover:text-white transition-colors cursor-pointer" />}
                    {p.toLowerCase().includes("youtube") && <Youtube size={17} className="hover:text-white transition-colors cursor-pointer" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-slate-300 shrink-0">
            <div className="flex items-center gap-1.5">
              <Eye size={17} className="text-slate-500" />
              <span>{campaign.views}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Folder size={17} className="text-slate-500" />
              <span>{campaign.creators}</span>
            </div>
            <button className="flex items-center gap-1 text-[11px] font-black px-3.5 py-1.5 rounded-xl border border-[#eab308]/20 text-[#eab308] bg-[#eab308]/5 hover:bg-[#eab308]/10 transition-all uppercase tracking-tight">
              {campaign.reviewCount} need review
              <ChevronRight size={14} className="ml-0.5" />
            </button>
          </div>
        </div>

        {/* Middle Row: Progress Section */}
        <div className="flex flex-col xl:flex-row xl:items-center gap-3 xl:gap-6 mt-4 xl:mt-0">
          <div className="flex items-center gap-1 text-[14px] font-black whitespace-nowrap">
            <span className="text-white">{campaign.currentAmount}</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-500">{campaign.totalAmount}</span>
          </div>

          <div className="flex-1 flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden shrink-0">
              <div
                className="h-full bg-slate-400 transition-all duration-1000"
                style={{ width: `${campaign.percentage}%` }}
              />
            </div>
            <span className="text-white text-xs font-black shrink-0 tracking-tight leading-none">{campaign.percentage}%</span>
          </div>

          <span className="text-slate-400 font-bold text-[11px] whitespace-nowrap tracking-wide lowercase">
            {campaign.cpm} / 1k views
          </span>
        </div>

        {/* Bottom Row: Actions */}
        <div className="flex flex-wrap items-center justify-end gap-2.5 mt-4 xl:mt-0">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 h-10 rounded-xl bg-white/5 border border-white/5 text-xs font-bold text-white hover:bg-white/10 transition-all">
            <Folder size={16} className="text-slate-500" />
            <span>Archive</span>
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 h-10 rounded-xl bg-white/5 border border-white/5 text-xs font-bold text-white hover:bg-white/10 transition-all">
            <Pencil size={16} className="text-slate-500" />
            <span>Edit</span>
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 h-10 rounded-xl bg-white/5 border border-white/5 text-xs font-bold text-white hover:bg-white/10 transition-all">
            <Pause size={16} className="text-slate-500" />
            <span>Pause</span>
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 h-10 rounded-xl bg-[linear-gradient(#5c4a32,#362b1d)] hover:bg-[linear-gradient(#4c3d28,#292015)] border border-[#eab308]/20 text-[11px] font-black uppercase text-[#eab308] tracking-widest shadow-xl transition-all duration-300 active:scale-95">
            <IndianRupee size={16} className="shrink-0" />
            <span>Fund</span>
          </button>
        </div>
      </div>
    </div>
  );
}