"use client";

import React, { useState } from "react";
import { Rocket, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

type TabType = "withdrawals" | "deposits" | "deductions";

type Transaction = {
  id: string;
  amount: number;
  status: "completed" | "pending" | "failed";
  sentTo: string;
  initiatedAt: string;
  estimatedArrival: string;
  receipt?: string;
};

export default function BalancePage() {
  const [activeTab, setActiveTab] = useState<TabType>("withdrawals");
  const [transactions] = useState<Transaction[]>([]);

  const totalBalance = 0.00;
  const availableBalance = 0.00;

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Balance</h1>
      </div>

      {/* Balance Card */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
          {/* Total Balance */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-medium text-muted-foreground">Total balance</h2>
              <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center">
                <span className="text-[10px] text-muted-foreground">?</span>
              </div>
            </div>
            <div className="text-4xl font-bold">${totalBalance.toFixed(2)}</div>
          </div>

          {/* Available Balance */}
          <div className="flex items-center justify-between py-4 border-t border-border">
            <span className="text-sm text-muted-foreground">Available balance</span>
            <span className="text-sm font-semibold">${availableBalance.toFixed(2)}</span>
          </div>

          {/* Verify Identity Button */}
          <button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
            Verify your identity
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-1 border-b border-border mb-6">
          <button
            onClick={() => setActiveTab("withdrawals")}
            className={`relative px-4 py-3 text-sm font-semibold transition-colors ${
              activeTab === "withdrawals"
                ? "text-[#d4af37]"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Withdrawals
            {activeTab === "withdrawals" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4af37]"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("deposits")}
            className={`relative px-4 py-3 text-sm font-semibold transition-colors ${
              activeTab === "deposits"
                ? "text-[#d4af37]"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Deposits
            {activeTab === "deposits" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4af37]"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("deductions")}
            className={`relative px-4 py-3 text-sm font-semibold transition-colors ${
              activeTab === "deductions"
                ? "text-[#d4af37]"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Deductions
            {activeTab === "deductions" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4af37]"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        </div>

        {/* Table Header */}
        <div className="bg-card border border-border rounded-t-2xl">
          <div className="grid grid-cols-6 gap-4 px-6 py-4 text-xs font-semibold text-muted-foreground border-b border-border">
            <div>Amount</div>
            <div>Status</div>
            <div>Sent to</div>
            <div>Initiated at</div>
            <div>Estimated arrival</div>
            <div>Receipt</div>
          </div>

          {/* Empty State */}
          {transactions.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 px-6">
              <div className="w-16 h-16 bg-muted/30 rounded-2xl flex items-center justify-center mb-4 border border-border">
                <Rocket className="text-muted-foreground" size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">
                No {activeTab} yet
              </h3>
              <p className="text-sm text-muted-foreground text-center max-w-sm">
                When you withdraw money from your Whop account, it will be displayed here.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {transactions.length === 0 && (
          <div className="bg-card border border-t-0 border-border rounded-b-2xl px-6 py-4 flex items-center justify-between">
            <button
              disabled
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground bg-muted/30 rounded-md cursor-not-allowed opacity-50"
            >
              <ChevronLeft size={16} className="inline mr-1" />
              Previous
            </button>
            <button
              disabled
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground bg-muted/30 rounded-md cursor-not-allowed opacity-50"
            >
              Next
              <ChevronRight size={16} className="inline ml-1" />
            </button>
          </div>
        )}
      </div>

      {/* Footer Note */}
      <div className="max-w-6xl mx-auto mt-6">
        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          *Whop is a technology company, not a bank. Payment services are provided by Whop&apos;s payment partners, including Stripe. Whop Balances are held for you by Cross River Bank (member FDIC) at another partner bank. Whop Balances are not FDIC insured.
        </p>
      </div>
    </div>
  );
}
