"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { Search, Download, Heart, Share2, Send } from "lucide-react";

const followers = [
  {
    name: "Sarah Jenkins",
    username: "@sarah_j",
    followers: "14.2k",
    timeAgo: "2h",
    engagement: "High",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Marcus Chen",
    username: "@marcus_c",
    followers: "842",
    timeAgo: "5h",
    engagement: "Medium",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
  },
  {
    name: "Elena Rodriguez",
    username: "@elena_r",
    followers: "52.1k",
    timeAgo: "1d",
    engagement: "Potential Partner",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
  },
];

const topFans = [
  {
    name: "Jessica Miller",
    badges: ["🏅", "💬", "📤"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
  },
  {
    name: "David Thompson",
    badges: ["⭐", "❤️"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
];

const interactions = [
  {
    user: "@lily_designs",
    comment: "This workspace setup is literal goals! Where is the lamp from? ✨",
    timeAgo: "4m",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=100&h=100&fit=crop",
    type: "comment",
  },
  {
    user: "@creative_flow",
    comment: "Used your 2024 color guide for my latest project. Life saver!",
    timeAgo: "12m",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop",
    type: "mention",
  },
  {
    user: "@tech_gear_daily",
    comment: "We'd love to send you our new mouse for your productivity flow reel! DM?",
    timeAgo: "1h",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=100&h=100&fit=crop",
    type: "collab",
  },
];

export default function AudiencePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Audience Management
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Engage with your community and discover new opportunities.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                className="pl-9 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-primary focus:border-primary w-64"
                placeholder="Search followers..."
                type="text"
              />
            </div>

            <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-medium shadow-premium hover:scale-[1.02] transition-transform text-sm">
              Export Data
            </button>
          </div>
        </header>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button className="px-4 py-2 bg-primary text-white rounded-full text-xs font-semibold shadow-sm">
            All Followers
          </button>
          <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-lavender transition-smooth">
            Highly Engaged
          </button>
          <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-mint transition-smooth">
            New Followers
          </button>
          <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-peach transition-smooth">
            Potential Collaborators
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Recent Followers */}
            <Card className="overflow-hidden">
              <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
                <h2 className="font-bold text-lg">Recent Followers</h2>
                <button className="text-primary text-sm font-semibold hover:underline">
                  View All
                </button>
              </div>

              <div className="divide-y divide-slate-50 dark:divide-slate-800">
                {followers.map((follower) => (
                  <div
                    key={follower.username}
                    className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-smooth"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        src={follower.avatar}
                        alt={follower.name}
                      />
                      <div>
                        <h4 className="font-bold text-sm">{follower.name}</h4>
                        <p className="text-xs text-slate-500">
                          Followed {follower.timeAgo} ago • {follower.followers} followers
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <p className="text-xs text-slate-400 mb-1">Engagement</p>
                        <span
                          className={`font-bold text-sm ${
                            follower.engagement === "High"
                              ? "text-emerald-500"
                              : follower.engagement === "Medium"
                                ? "text-slate-500"
                                : "text-primary"
                          }`}
                        >
                          {follower.engagement}
                        </span>
                      </div>
                      <button className="p-2 text-slate-400 hover:text-primary transition-smooth">
                        •••
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Top Fans */}
            <Card className="p-6">
              <h2 className="font-bold text-lg mb-6">Top Fans</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topFans.map((fan) => (
                  <div
                    key={fan.name}
                    className="flex items-center gap-4 p-4 rounded-xl bg-lavender/50 dark:bg-primary/5 border border-primary/10"
                  >
                    <img
                      className="w-14 h-14 rounded-full border-2 border-white dark:border-slate-800 shadow-sm"
                      src={fan.avatar}
                      alt={fan.name}
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-sm">{fan.name}</h4>
                      <div className="flex gap-2 mt-1">
                        {fan.badges.map((badge, i) => (
                          <span key={i} className="text-lg">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Quick Interaction Sidebar */}
          <div className="lg:col-span-4">
            <Card className="flex flex-col h-full min-h-[600px]">
              <div className="p-6 border-b border-slate-50 dark:border-slate-800">
                <h2 className="font-bold text-lg">Quick Interaction</h2>
                <p className="text-xs text-slate-500 mt-1">Reply to top performing posts</p>
              </div>

              <div className="p-4 flex-1 overflow-y-auto space-y-6">
                {interactions.map((interaction) => (
                  <div key={interaction.user} className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <img
                        className="w-12 h-12 rounded-lg object-cover"
                        src={interaction.image}
                        alt="Post"
                      />
                      <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            {interaction.type === "comment"
                              ? "New Comment"
                              : interaction.type === "mention"
                                ? "Mentions"
                                : "Potential Collab"}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {interaction.timeAgo} ago
                          </span>
                        </div>
                        <p className="text-xs font-semibold">{interaction.user}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                          {interaction.comment}
                        </p>
                      </div>
                    </div>

                    {interaction.type === "comment" && (
                      <div className="flex gap-2 ml-15 pl-12">
                        <input
                          className="flex-1 text-xs py-2 px-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-primary focus:border-primary"
                          placeholder="Reply to Lily..."
                          type="text"
                        />
                        <button className="p-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity">
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    {interaction.type === "mention" && (
                      <div className="flex gap-2 ml-15 pl-12">
                        <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 border border-primary/20 text-primary rounded-lg text-xs font-semibold hover:bg-lavender transition-smooth">
                          <Heart className="w-3 h-3" />
                          Love it
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 border border-primary/20 text-primary rounded-lg text-xs font-semibold hover:bg-lavender transition-smooth">
                          <Share2 className="w-3 h-3" />
                          Repost
                        </button>
                      </div>
                    )}

                    {interaction.type === "collab" && (
                      <div className="flex gap-2 ml-15 pl-12">
                        <button className="w-full py-2 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-lg text-xs font-bold hover:opacity-90 transition-opacity">
                          Send DM
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-slate-50 dark:border-slate-800">
                <button className="w-full py-3 text-slate-500 text-xs font-bold hover:text-primary transition-smooth">
                  Open Moderation Dashboard
                </button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
