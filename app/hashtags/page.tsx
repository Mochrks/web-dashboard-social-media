"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { Hash, TrendingUp, Copy } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const hashtags = [
  { tag: "socialmedia", uses: "2.4M", engagement: "High", growth: "+24%" },
  { tag: "marketing", uses: "1.8M", engagement: "High", growth: "+18%" },
  { tag: "contentcreator", uses: "950K", engagement: "Medium", growth: "+12%" },
  { tag: "digitalmarketing", uses: "1.2M", engagement: "High", growth: "+32%" },
  { tag: "branding", uses: "680K", engagement: "Medium", growth: "+8%" },
];

export default function HashtagsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto flex flex-col">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Hashtag Manager</h1>
          <p className="text-slate-500">Track and optimize your hashtag performance</p>
        </header>

        <div className="grid grid-cols-1 gap-4">
          {hashtags.map((item) => (
            <Card key={item.tag} className="p-6 hover:border-primary/30 transition-smooth">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-lavender dark:bg-primary/10 rounded-lg flex items-center justify-center">
                    <Hash className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">#{item.tag}</h3>
                    <p className="text-sm text-slate-500">{item.uses} posts</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-xs text-slate-500 mb-1">Engagement</p>
                    <span
                      className={`font-semibold text-sm ${
                        item.engagement === "High" ? "text-emerald-500" : "text-amber-500"
                      }`}
                    >
                      {item.engagement}
                    </span>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-slate-500 mb-1">Growth</p>
                    <span className="font-semibold text-sm text-primary">{item.growth}</span>
                  </div>

                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-smooth">
                    <Copy className="w-5 h-5 text-slate-500" />
                  </button>
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
