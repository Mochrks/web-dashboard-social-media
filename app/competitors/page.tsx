"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, BarChart3 } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const competitors = [
  {
    id: 1,
    name: "Brand A",
    followers: "145K",
    growth: "+12%",
    engagement: "8.4%",
    trend: "up",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=BA",
  },
  {
    id: 2,
    name: "Brand B",
    followers: "98K",
    growth: "-3%",
    engagement: "6.2%",
    trend: "down",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=BB",
  },
  {
    id: 3,
    name: "Brand C",
    followers: "210K",
    growth: "+24%",
    engagement: "12.1%",
    trend: "up",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=BC",
  },
];

export default function CompetitorsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto flex flex-col">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Competitor Analysis</h1>
          <p className="text-slate-500">Track and compare your competitors&apos; performance</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {competitors.map((comp) => (
            <Card key={comp.id} className="p-6 hover:border-primary/30 transition-smooth">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={comp.avatar}
                  alt={comp.name}
                  className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800"
                />
                <div>
                  <h3 className="font-bold text-lg">{comp.name}</h3>
                  <p className="text-sm text-slate-500">{comp.followers} followers</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Growth</span>
                  <div className="flex items-center gap-2">
                    {comp.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-rose-500" />
                    )}
                    <span
                      className={`font-semibold text-sm ${
                        comp.trend === "up" ? "text-emerald-500" : "text-rose-500"
                      }`}
                    >
                      {comp.growth}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Engagement</span>
                  <span className="font-semibold text-sm">{comp.engagement}</span>
                </div>
              </div>

              <button className="w-full mt-6 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-smooth">
                View Details
              </button>
            </Card>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
