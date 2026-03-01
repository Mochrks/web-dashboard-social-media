"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Users, Heart, Eye, Share2, RefreshCw, TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";

const stats = [
  {
    title: "Total Followers",
    value: "124.8k",
    change: "+2.4%",
    trend: "up",
    icon: Users,
    bgColor: "bg-lavender dark:bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Engagement Rate",
    value: "6.2%",
    change: "+12%",
    trend: "up",
    icon: Heart,
    bgColor: "bg-mint dark:bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    title: "Monthly Reach",
    value: "842.1k",
    change: "-0.8%",
    trend: "down",
    icon: Eye,
    bgColor: "bg-peach dark:bg-orange-500/10",
    iconColor: "text-orange-600",
  },
  {
    title: "Total Shares",
    value: "12.4k",
    change: "+18%",
    trend: "up",
    icon: Share2,
    bgColor: "bg-slate-100 dark:bg-slate-800",
    iconColor: "text-slate-600",
  },
];

const topPosts = [
  {
    title: "Minimalist Workspace Tour",
    likes: "12.4k",
    comments: "248",
    type: "Reel",
    trending: true,
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=400&h=400&fit=crop",
  },
  {
    title: "Color Palette Guide 2024",
    likes: "8.9k",
    comments: "112",
    type: "Carousel",
    trending: false,
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=400&fit=crop",
  },
  {
    title: "Morning Productivity Flow",
    likes: "15.1k",
    comments: "432",
    type: "Reel",
    trending: true,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto flex flex-col">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 lg:mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Creator Insights
            </h1>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
              Welcome back, Alex. Your content is trending!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex bg-white dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800 overflow-x-auto">
              <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-800 rounded-md whitespace-nowrap">
                30 Days
              </button>
              <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-300 whitespace-nowrap">
                90 Days
              </button>
              <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-300 whitespace-nowrap">
                1 Year
              </button>
            </div>

            <button className="flex items-center justify-center gap-2 bg-primary text-white px-4 sm:px-5 py-2.5 rounded-lg font-medium shadow-premium hover:scale-[1.02] transition-transform text-sm">
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Sync Data</span>
              <span className="sm:hidden">Sync</span>
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 lg:mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;

            return (
              <Card
                key={stat.title}
                className="p-4 sm:p-6 hover:border-primary/30 transition-smooth group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 ${stat.bgColor} rounded-lg`}>
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.iconColor}`} />
                  </div>
                  <span
                    className={`${
                      stat.trend === "up"
                        ? "text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10"
                        : "text-rose-500 bg-rose-50 dark:bg-rose-500/10"
                    } px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1`}
                  >
                    <TrendIcon className="w-3 h-3" />
                    {stat.change}
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium">
                  {stat.title}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold mt-1">{stat.value}</h3>
              </Card>
            );
          })}
        </div>

        {/* Audience Growth Chart */}
        <Card className="p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 lg:mb-8">
            <div>
              <h3 className="text-base sm:text-lg font-bold">Audience Growth</h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Track your follower acquisition over time
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="text-xs font-medium text-slate-500">This Month</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-primary/20"></span>
                <span className="text-xs font-medium text-slate-500">Last Month</span>
              </div>
            </div>
          </div>

          {/* Chart Visualization */}
          <div className="relative h-48 sm:h-64 w-full flex items-end justify-between gap-1">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="border-t border-slate-100 dark:border-slate-800 w-full h-0"
                ></div>
              ))}
            </div>

            {[40, 55, 45, 70, 65, 85, 95].map((height, i) => (
              <div
                key={i}
                className={`relative flex-1 rounded-t-lg transition-all hover:scale-y-105 ${
                  i === 6
                    ? "bg-primary shadow-premium"
                    : "bg-primary/10 dark:bg-primary/20 hover:bg-primary"
                }`}
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>

          <div className="flex justify-between mt-4 px-1 text-xs font-medium text-slate-400">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Today"].map((day, i) => (
              <span key={day} className={i === 6 ? "text-slate-900 dark:text-white font-bold" : ""}>
                {day}
              </span>
            ))}
          </div>
        </Card>

        {/* Top Performing Posts */}
        <Card className="p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 lg:mb-8">
            <div>
              <h3 className="text-base sm:text-lg font-bold">Top Performing Posts</h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Visual content with the highest conversion rate
              </p>
            </div>
            <button className="text-primary text-sm font-semibold hover:underline self-start sm:self-auto">
              View All Posts
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {topPosts.map((post) => (
              <div
                key={post.title}
                className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-smooth cursor-pointer"
              >
                <img
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover shrink-0"
                  src={post.image}
                  alt={post.title}
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm line-clamp-2 mb-1">{post.title}</h4>
                  <div className="flex items-center gap-3 text-slate-400 mb-2">
                    <span className="flex items-center gap-1 text-xs">
                      <Heart className="w-3 h-3 text-primary fill-primary" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1 text-xs">
                      <Share2 className="w-3 h-3 text-emerald-500" />
                      {post.comments}
                    </span>
                  </div>
                  <div className="flex gap-1 flex-wrap">
                    <span className="px-2 py-0.5 bg-lavender dark:bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">
                      {post.type}
                    </span>
                    {post.trending && (
                      <span className="px-2 py-0.5 bg-mint dark:bg-emerald-500/10 text-emerald-600 text-[10px] font-bold rounded uppercase">
                        Trending
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Footer />
      </main>
    </div>
  );
}
