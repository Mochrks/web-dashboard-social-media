"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import { Footer } from "@/components/layout/footer";

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6 lg:p-10 overflow-y-auto flex flex-col">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Detailed Analytics
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Deep dive into your performance metrics and audience behavior.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex bg-white dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <button className="px-4 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-800 rounded-md">
                Last 30 Days
              </button>
              <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-300">
                Custom
              </button>
            </div>

            <button className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-slate-50 transition-smooth">
              <Download className="w-4 h-4" />
              Export PDF
            </button>
          </div>
        </header>

        {/* Reach & Impressions Chart */}
        <Card className="p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="flex gap-8">
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Reach</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-bold">1,284,092</h3>
                  <span className="text-emerald-500 text-xs font-bold">+14.2%</span>
                </div>
              </div>
              <div className="border-l border-slate-100 dark:border-slate-800 pl-8">
                <p className="text-sm text-slate-500 mb-1">Total Impressions</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-bold">3,120,448</h3>
                  <span className="text-emerald-500 text-xs font-bold">+8.4%</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="text-sm text-slate-600">Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary/30"></span>
                <span className="text-sm text-slate-600">Impressions</span>
              </div>
            </div>
          </div>

          {/* Line Chart */}
          <div className="relative h-72 w-full">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-50">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="border-t border-slate-100 dark:border-slate-800 w-full h-0"
                ></div>
              ))}
            </div>

            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 1000 100"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#8c30e8", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#8c30e8", stopOpacity: 0 }} />
                </linearGradient>
              </defs>

              <path
                d="M0,90 Q50,85 100,88 T200,75 T300,78 T400,60 T500,68 T600,55 T700,58 T800,40 T900,45 T1000,30"
                fill="none"
                stroke="#8c30e8"
                strokeWidth="3"
              />

              <path
                d="M0,90 Q50,85 100,88 T200,75 T300,78 T400,60 T500,68 T600,55 T700,58 T800,40 T900,45 T1000,30 V100 H0 Z"
                fill="url(#gradient)"
                opacity="0.1"
              />
            </svg>
          </div>

          <div className="flex justify-between mt-6 px-1 text-xs font-medium text-slate-400">
            {["01 Sep", "07 Sep", "14 Sep", "21 Sep", "28 Sep"].map((date) => (
              <span key={date}>{date}</span>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Audience Demographics */}
          <div className="lg:col-span-8 space-y-8">
            <Card className="p-8">
              <h3 className="text-lg font-bold mb-8">Audience Demographics</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Global Reach */}
                <div>
                  <p className="text-sm font-semibold text-slate-500 mb-6 uppercase tracking-wider">
                    Global Reach
                  </p>
                  <div className="space-y-3">
                    {[
                      { country: "United States", percent: 42 },
                      { country: "United Kingdom", percent: 18 },
                      { country: "Canada", percent: 12 },
                    ].map((item) => (
                      <div key={item.country} className="flex justify-between items-center text-sm">
                        <span className="text-slate-600">{item.country}</span>
                        <span className="font-bold">{item.percent}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Age & Gender */}
                <div>
                  <p className="text-sm font-semibold text-slate-500 mb-6 uppercase tracking-wider">
                    Age & Gender
                  </p>
                  <div className="space-y-6">
                    {[
                      { age: "18-24", male: 25, female: 35 },
                      { age: "25-34", male: 40, female: 20 },
                      { age: "35-44", male: 15, female: 15 },
                      { age: "45+", male: 10, female: 5 },
                    ].map((item) => (
                      <div key={item.age} className="flex items-center gap-4">
                        <span className="text-xs w-8 text-slate-500">{item.age}</span>
                        <div className="flex-1 h-6 flex gap-1">
                          <div
                            className="bg-primary/40 rounded-sm"
                            style={{ width: `${item.male}%` }}
                          ></div>
                          <div
                            className="bg-mint rounded-sm"
                            style={{ width: `${item.female}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-6">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-primary/40 rounded-sm"></span>
                      <span className="text-xs text-slate-500">Male</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-mint rounded-sm"></span>
                      <span className="text-xs text-slate-500">Female</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Optimal Posting Times Heatmap */}
            <Card className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-bold">Optimal Posting Times</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Lower</span>
                  <div className="flex gap-0.5">
                    <div className="w-3 h-3 bg-primary/10 rounded-sm"></div>
                    <div className="w-3 h-3 bg-primary/40 rounded-sm"></div>
                    <div className="w-3 h-3 bg-primary/70 rounded-sm"></div>
                    <div className="w-3 h-3 bg-primary rounded-sm"></div>
                  </div>
                  <span className="text-xs text-slate-400">Higher</span>
                </div>
              </div>

              {/* Heatmap Grid */}
              <div className="grid grid-cols-25 gap-1">
                <div className="grid grid-cols-1 gap-1 text-[10px] text-slate-400 font-medium">
                  {["Mon", "Wed", "Fri", "Sun"].map((day) => (
                    <div key={day} className="h-6 flex items-center">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="col-span-24 grid grid-cols-24 gap-1">
                  {/* Simplified heatmap cells */}
                  {[...Array(96)].map((_, i) => {
                    const intensity = Math.random();
                    const opacity =
                      intensity < 0.25 ? 10 : intensity < 0.5 ? 40 : intensity < 0.75 ? 70 : 100;
                    return (
                      <div
                        key={i}
                        className={`w-full aspect-square rounded-sm bg-primary/${opacity}`}
                      ></div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 flex justify-between px-10 text-[10px] text-slate-400 uppercase tracking-widest">
                {["12am", "6am", "12pm", "6pm", "11pm"].map((time) => (
                  <span key={time}>{time}</span>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar Stats */}
          <div className="lg:col-span-4 space-y-8">
            {/* Top Hashtags */}
            <Card className="p-8">
              <h3 className="text-lg font-bold mb-6">Top Hashtags</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "#minimalism",
                  "#design",
                  "#productivity",
                  "#workspace",
                  "#aesthetic",
                  "#creator",
                  "#growth",
                  "#tips",
                ].map((tag, i) => (
                  <span
                    key={tag}
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      i % 3 === 0
                        ? "bg-lavender text-primary"
                        : i % 3 === 1
                          ? "bg-mint text-emerald-700"
                          : "bg-peach text-orange-700"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">Hashtag Efficiency</span>
                  <span className="text-xs font-bold text-emerald-500">+12%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>
            </Card>

            {/* Performance by Type */}
            <Card className="p-8">
              <h3 className="text-lg font-bold mb-6">Performance by Type</h3>
              <div className="space-y-6">
                {[
                  { type: "Reels", avg: "64k", percent: 85, color: "bg-primary" },
                  { type: "Carousels", avg: "42k", percent: 60, color: "bg-emerald-400" },
                  { type: "Static Posts", avg: "18k", percent: 30, color: "bg-orange-400" },
                ].map((item) => (
                  <div key={item.type} className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 ${
                        item.type === "Reels"
                          ? "bg-lavender"
                          : item.type === "Carousels"
                            ? "bg-mint"
                            : "bg-peach"
                      } rounded-xl flex items-center justify-center`}
                    >
                      <span className="text-2xl">
                        {item.type === "Reels" ? "🎬" : item.type === "Carousels" ? "📸" : "🖼️"}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-bold">{item.type}</span>
                        <span className="text-slate-500">{item.avg} avg</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full">
                        <div
                          className={`${item.color} h-full rounded-full`}
                          style={{ width: `${item.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
