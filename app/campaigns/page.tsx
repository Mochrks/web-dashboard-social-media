"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { Target, Calendar, BarChart3, Users } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const campaigns = [
  {
    id: 1,
    name: "Summer Sale 2024",
    status: "Active",
    reach: "124K",
    engagement: "8.2%",
    budget: "$5,000",
    color: "bg-emerald-500",
  },
  {
    id: 2,
    name: "Product Launch",
    status: "Scheduled",
    reach: "0",
    engagement: "0%",
    budget: "$8,500",
    color: "bg-amber-500",
  },
  {
    id: 3,
    name: "Brand Awareness",
    status: "Completed",
    reach: "250K",
    engagement: "12.4%",
    budget: "$12,000",
    color: "bg-slate-400",
  },
];

export default function CampaignsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto flex flex-col">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Campaigns</h1>
            <p className="text-slate-500">Manage your marketing campaigns</p>
          </div>
          <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-medium shadow-premium hover:scale-[1.02] transition-transform">
            Create Campaign
          </button>
        </header>

        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="p-6 hover:border-primary/30 transition-smooth">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-16 ${campaign.color} rounded-full`} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">{campaign.name}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        campaign.status === "Active"
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10"
                          : campaign.status === "Scheduled"
                            ? "bg-amber-100 text-amber-700 dark:bg-amber-500/10"
                            : "bg-slate-100 text-slate-700 dark:bg-slate-500/10"
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Reach</p>
                    <p className="font-bold">{campaign.reach}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Engagement</p>
                    <p className="font-bold">{campaign.engagement}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Budget</p>
                    <p className="font-bold">{campaign.budget}</p>
                  </div>
                  <div>
                    <button className="text-primary text-sm font-semibold hover:underline">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
