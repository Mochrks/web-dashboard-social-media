"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const calendarPosts = [
  {
    day: 3,
    title: "Morning Routine",
    type: "photo",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=200&h=200&fit=crop",
  },
  {
    day: 7,
    title: "Workspace Tour",
    type: "video",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=200&h=200&fit=crop",
  },
  {
    day: 13,
    title: "Color Guide",
    type: "carousel",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=200&h=200&fit=crop",
    scheduled: true,
  },
];

const draftPosts = [
  {
    title: "Setup Reveal 2024",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=100&h=100&fit=crop",
    daysAgo: 2,
  },
  {
    title: "Pastel Theory 101",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop",
    daysAgo: 5,
  },
  {
    title: "App Showcase Reel",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=100&h=100&fit=crop",
    daysAgo: 7,
  },
];

export default function PublishingPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 flex flex-col min-w-0">
        {/* Sticky Header */}
        <header className="p-6 lg:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 glass sticky top-0 z-10">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Publishing Calendar
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Plan and manage your upcoming social media posts.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex bg-white dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800 mr-2">
              <button className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-800 rounded-md">
                Month
              </button>
              <button className="px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-300">
                Week
              </button>
            </div>

            <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium shadow-premium hover:scale-[1.02] transition-transform">
              <Plus className="w-4 h-4" />
              Create New Post
            </button>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Calendar */}
          <div className="flex-1 overflow-y-auto p-6 lg:p-8">
            <Card className="overflow-hidden">
              {/* Calendar Header */}
              <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-bold">May 2024</h2>
                  <div className="flex gap-1">
                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-smooth">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-smooth">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-2">
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Published
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    Scheduled
                  </span>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 bg-slate-50 dark:bg-slate-950">
                {/* Day Headers */}
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div
                    key={day}
                    className="text-center py-2 text-xs font-bold uppercase text-slate-400 border-r border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 last:border-r-0"
                  >
                    {day}
                  </div>
                ))}

                {/* Calendar Days */}
                {[...Array(35)].map((_, i) => {
                  const dayNum = i - 2; // Start from day -2 (previous month)
                  const isCurrentMonth = dayNum >= 1 && dayNum <= 18;
                  const post = calendarPosts.find((p) => p.day === dayNum);
                  const isToday = dayNum === 13;

                  return (
                    <div
                      key={i}
                      className={`min-h-[120px] border-r border-b border-slate-200 dark:border-slate-800 p-3 last:border-r-0 ${
                        isCurrentMonth
                          ? "bg-white dark:bg-slate-900"
                          : "bg-white dark:bg-slate-900 opacity-40"
                      } ${isToday ? "bg-lavender/30 dark:bg-primary/5" : ""}`}
                    >
                      <span
                        className={`text-sm font-medium ${
                          isToday
                            ? "text-primary font-bold"
                            : !isCurrentMonth
                              ? "text-slate-400"
                              : ""
                        }`}
                      >
                        {dayNum > 0 ? dayNum : dayNum + 30}
                      </span>

                      {post && (
                        <div
                          className={`mt-2 p-1.5 rounded text-[10px] shadow-sm border-l-2 ${
                            post.scheduled
                              ? "bg-amber-50 dark:bg-amber-900/20 border-amber-400"
                              : "bg-lavender dark:bg-primary/20 border-primary"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold truncate">{post.title}</span>
                            <span className="text-[14px]">
                              {post.type === "photo" ? "📷" : post.type === "video" ? "🎥" : "📸"}
                            </span>
                          </div>
                          {post.image && (
                            <img
                              className="w-full h-10 object-cover rounded mb-1"
                              src={post.image}
                              alt={post.title}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Sidebar - Upcoming Queue */}
          <aside className="w-80 border-l border-slate-200 dark:border-slate-800 glass p-6 overflow-y-auto hidden xl:block">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900 dark:text-white">Upcoming Queue</h3>
              <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold rounded text-slate-500 uppercase">
                8 Drafts
              </span>
            </div>

            <div className="space-y-4">
              {draftPosts.map((draft) => (
                <Card
                  key={draft.title}
                  className="p-4 hover:border-primary/40 transition-smooth cursor-pointer group"
                >
                  <div className="flex gap-3 mb-3">
                    <img
                      className="w-12 h-12 rounded-lg object-cover"
                      src={draft.image}
                      alt={draft.title}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold truncate group-hover:text-primary transition-smooth">
                        {draft.title}
                      </p>
                      <p className="text-xs text-slate-500">Draft • {draft.daysAgo} days ago</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="text-sm">📷</span>
                      <span className="text-sm">🎥</span>
                    </div>
                    <button className="text-xs font-semibold text-primary hover:underline">
                      Schedule
                    </button>
                  </div>
                </Card>
              ))}
            </div>

            {/* AI Suggestion */}
            <Card className="mt-8 p-4 bg-lavender dark:bg-primary/10 border-primary/20">
              <h4 className="text-xs font-bold text-primary uppercase mb-2 tracking-wider">
                AI Suggestion
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 italic">
                &quot;Based on last week&apos;s reach, Thursday at 6PM is your best slot for a
                high-engagement Reel.&quot;
              </p>
              <button className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                Create suggestion
                <span className="text-[14px]">→</span>
              </button>
            </Card>
          </aside>
        </div>

        <Footer />
      </main>
    </div>
  );
}
