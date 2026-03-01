"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { Zap, Clock, CheckCircle, Play } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const automations = [
  {
    id: 1,
    name: "Auto-publish to Instagram",
    status: "Active",
    runs: "124",
    lastRun: "2 hours ago",
  },
  { id: 2, name: "Weekly Analytics Report", status: "Active", runs: "52", lastRun: "1 day ago" },
  { id: 3, name: "Auto-reply to Comments", status: "Paused", runs: "1,240", lastRun: "3 days ago" },
  { id: 4, name: "Hashtag Suggestions", status: "Active", runs: "89", lastRun: "5 hours ago" },
];

export default function AutomationPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto flex flex-col">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Automation</h1>
            <p className="text-slate-500">Automate your social media workflows</p>
          </div>
          <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-medium shadow-premium hover:scale-[1.02] transition-transform">
            Create Automation
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {automations.map((auto) => (
            <Card key={auto.id} className="p-6 hover:border-primary/30 transition-smooth">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-lavender dark:bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">{auto.name}</h3>
                    <p className="text-xs text-slate-500">{auto.runs} runs</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    auto.status === "Active"
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10"
                      : "bg-amber-100 text-amber-700 dark:bg-amber-500/10"
                  }`}
                >
                  {auto.status}
                </span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Clock className="w-4 h-4" />
                  Last run: {auto.lastRun}
                </div>
                <button className="text-primary text-sm font-semibold hover:underline">
                  Configure
                </button>
              </div>
            </Card>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
