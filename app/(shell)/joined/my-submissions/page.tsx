"use client";

import {
  Instagram,
  ExternalLink,
  Users,
  Bell,
  Search,
} from "lucide-react";


const isRewardsEnded = true; 

const submissions: {
  title: string;
  status: string;
  statusType: "pending" | "rejected";
  views: number;
  reward: string;
  payout: string;
}[] = [
  {
    title: "Clip Rayston's YouTube Videos",
    status: "Decision any moment",
    statusType: "pending",
    views: 12_430,
    reward: "$1.00 / 1K",
    payout: "$12.43",
  },
  {
    title: "Instagram Reels – Motivational Clips",
    status: "Decision any moment",
    statusType: "pending",
    views: 4_980,
    reward: "$1.50 / 1K",
    payout: "$7.47",
  },
  {
    title: "Short-form TikTok Edits",
    status: "Rejected",
    statusType: "rejected",
    views: 2_100,
    reward: "$2.00 / 1K",
    payout: "$0.00",
  },
  {
    title: "Podcast Highlight Clips",
    status: "Rejected",
    statusType: "rejected",
    views: 860,
    reward: "$1.00 / 1K",
    payout: "$0.00",
  },
];


export default function MySubmissions() {
  return (
    <div className="h-full w-full text-white">
      <Header />

      <Tabs />

      <Actions />

      {/* Content */}
      <div className="px-6">
     <Table submissions={submissions} ended={isRewardsEnded} />

      </div>
    </div>
  );
}

/* ======================
   HEADER
====================== */
function Header() {
  return (
    <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-green-500 flex items-center justify-center font-bold">
          $
        </div>
        <h1 className="text-lg font-semibold">Content Rewards</h1>
      </div>

      <div className="flex items-center gap-4 text-white/70">
        <Users size={18} />
        <Bell size={18} />
        <Search size={18} />
      </div>
    </div>
  );
}

/* ======================
   TABS
====================== */
function Tabs() {
  return (
    <div className="flex items-center justify-between border-b border-white/10 px-6">
      <div className="flex gap-6 text-sm">
        {/* <button className="py-3 text-white/60 hover:text-white">
          Rewards
        </button> */}
        <button className="py-3 border-b-2 border-white font-medium">
          My submissions
        </button>
      </div>

      <button className="text-xs text-white/60 hover:text-white">
        How do Content Rewards work?
      </button>
    </div>
  );
}

/* ======================
   ACTIONS
====================== */
function Actions() {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <button className="rounded-full border border-white/10 px-3 py-1.5 text-xs">
        Status
      </button>

      <button className="rounded-md border border-white/10 px-3 py-1.5 text-xs">
        Edit
      </button>
    </div>
  );
}

/* ======================
   TABLE
====================== */
function Table({ submissions, ended }: { submissions: any[]; ended: boolean }) {
  return (
    <div className="mt-2 relative">
   
      <div className="overflow-x-auto scrollbar-hide -mx-4 sm:mx-0 rounded-xl border border-white/10 bg-white/[0.02]">
        <table className="w-full min-w-[950px] text-left text-sm">
          <thead className="border-b border-white/10 text-white/50 uppercase text-[11px] tracking-wider">
            <tr>
              <th className="px-6 py-4 font-semibold">Title</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 text-right font-semibold">Total views</th>
              <th className="px-6 py-4 text-center font-semibold">Submission</th>
              <th className="px-6 py-4 font-semibold">Reward rate</th>
              <th className="px-6 py-4 text-right font-semibold">Paid out</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5">
            {submissions.length > 0 ? (
              submissions.map((item, i) => (
                <tr key={i} className="hover:bg-white/[0.03] transition-colors">
                  <td className="px-6 py-4 font-medium max-w-[240px] truncate">
                    {item.title}
                  </td>
                  <td className="px-6 py-4">
                    <StatusPill label={item.status} type={item.statusType} />
                  </td>
                  <td className="px-6 py-4 text-right tabular-nums">
                    {item.views.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      <Instagram size={18} className="text-white/60 hover:text-pink-500 cursor-pointer" />
                      <ExternalLink size={16} className="text-white/30 hover:text-white cursor-pointer" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white/70">{item.reward}</td>
                  <td className="px-6 py-4 text-right font-bold text-lime-400">
                    {item.payout}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="h-64">
                  <EmptyRow ended={ended} />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Optional: Mobile Scroll Indicator (only visible on small screens) */}
      <div className="mt-2 block sm:hidden text-center text-[10px] text-white/30 italic">
        ← Swipe horizontally to see more →
      </div>
    </div>
  );
}


function EmptyState({ ended }: { ended: boolean }) {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center text-center">
      {/* Illustration placeholder */}
      <div className="mb-6 h-40 w-40 rounded-full bg-white/5" />

      {ended ? (
        <>
          <h2 className="text-xl font-semibold">
            No <span className="text-lime-400">submissions</span> here
          </h2>
          <p className="mt-2 text-sm text-white/60">
            This Content Rewards campaign has ended.
          </p>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold">
            Start <span className="text-lime-400">submitting</span> content
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Submit content to earn money from this campaign.
          </p>

          <button className="mt-6 rounded-md bg-lime-500 px-4 py-2 text-sm font-medium text-black hover:bg-lime-400">
            Start submission
          </button>
        </>
      )}
    </div>
  );
}


function StatusPill({
  label,
  type,
}: {
  label: string;
  type: "pending" | "rejected";
}) {
  const styles =
    type === "pending"
      ? "bg-yellow-500/10 text-yellow-400"
      : "bg-red-500/10 text-red-400";

  return (
    <span className={`rounded-full px-3 py-1 text-xs ${styles}`}>
      {label}
    </span>
  );
}

function EmptyRow({ ended }: { ended: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="h-24 w-24 rounded-full bg-white/5" />

      {ended ? (
        <>
          <p className="text-lg font-semibold">
            No <span className="text-lime-400">submissions</span> here
          </p>
          <p className="text-sm text-white/60">
            This Content Rewards campaign has ended.
          </p>
        </>
      ) : (
        <>
          <p className="text-lg font-semibold">
            Start <span className="text-lime-400">submitting</span>{" "}
            content
          </p>
          <p className="text-sm text-white/60">
            Submit content to earn money.
          </p>

          <button className="mt-3 rounded-md bg-lime-500 px-4 py-2 text-sm font-medium text-black hover:bg-lime-400">
            Start submission
          </button>
        </>
      )}
    </div>
  );
}
