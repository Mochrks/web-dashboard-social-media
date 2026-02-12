"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { Award, Trophy, Star, Target } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "First Post",
    description: "Published your first post",
    icon: "🎉",
    unlocked: true,
    date: "Jan 15, 2024",
  },
  {
    id: 2,
    title: "100 Followers",
    description: "Reached 100 followers",
    icon: "👥",
    unlocked: true,
    date: "Feb 1, 2024",
  },
  {
    id: 3,
    title: "Viral Content",
    description: "Post reached 10K views",
    icon: "🔥",
    unlocked: true,
    date: "Feb 10, 2024",
  },
  {
    id: 4,
    title: "Consistency King",
    description: "Posted for 30 days straight",
    icon: "📅",
    unlocked: false,
    progress: 75,
  },
  {
    id: 5,
    title: "Engagement Master",
    description: "Achieve 10% engagement rate",
    icon: "💬",
    unlocked: false,
    progress: 62,
  },
  {
    id: 6,
    title: "1K Followers",
    description: "Reach 1,000 followers",
    icon: "⭐",
    unlocked: false,
    progress: 85,
  },
];

export default function AchievementsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Achievements</h1>
          <p className="text-slate-500">Track your milestones and unlock rewards</p>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-lavender dark:from-primary/5">
            <Trophy className="w-8 h-8 text-primary mb-2" />
            <p className="text-3xl font-bold mb-1">3</p>
            <p className="text-sm text-slate-500">Unlocked</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-amber-100 to-peach dark:from-amber-500/10">
            <Star className="w-8 h-8 text-amber-500 mb-2" />
            <p className="text-3xl font-bold mb-1">3</p>
            <p className="text-sm text-slate-500">In Progress</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-mint to-emerald-100 dark:from-emerald-500/10">
            <Target className="w-8 h-8 text-emerald-500 mb-2" />
            <p className="text-3xl font-bold mb-1">74%</p>
            <p className="text-sm text-slate-500">Completion</p>
          </Card>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className={`p-6 ${
                achievement.unlocked
                  ? "border-primary/30 bg-lavender/20 dark:bg-primary/5"
                  : "opacity-75"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{achievement.icon}</div>
                {achievement.unlocked && (
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>

              <h3 className="font-bold mb-1">{achievement.title}</h3>
              <p className="text-sm text-slate-500 mb-4">{achievement.description}</p>

              {achievement.unlocked ? (
                <p className="text-xs text-emerald-500 font-semibold">
                  Unlocked on {achievement.date}
                </p>
              ) : (
                <div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
                    <div
                      className="bg-primary h-full rounded-full transition-all"
                      style={{ width: `${achievement.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-slate-500">{achievement.progress}% Complete</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
