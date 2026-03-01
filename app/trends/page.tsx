"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const trendingTopics = [
  { tag: "#DigitalMarketing", posts: "1.2M", growth: "+24%", trend: "up" },
  { tag: "#ContentCreation", posts: "890K", growth: "+18%", trend: "up" },
  { tag: "#SocialMedia", posts: "2.1M", growth: "+12%", trend: "up" },
  { tag: "#Branding", posts: "650K", growth: "-5%", trend: "down" },
  { tag: "#Influencer", posts: "1.5M", growth: "+32%", trend: "up" },
];

export default function TrendsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto flex flex-col">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Trending Topics</h1>
          <p className="text-slate-500">Discover what&apos;s trending in your industry</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingTopics.map((topic) => (
            <Card key={topic.tag} className="p-6 hover:border-primary/30 transition-smooth">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-primary">{topic.tag}</h3>
                {topic.trend === "up" ? (
                  <TrendingUp className="w-5 h-5 text-emerald-500" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-rose-500" />
                )}
              </div>
              <p className="text-2xl font-bold mb-2">{topic.posts}</p>
              <p className="text-sm text-slate-500">Posts</p>
              <div
                className={`mt-4 text-sm font-semibold ${
                  topic.trend === "up" ? "text-emerald-500" : "text-rose-500"
                }`}
              >
                {topic.growth} this week
              </div>
            </Card>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
