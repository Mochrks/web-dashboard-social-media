"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { BookOpen, Play, Clock, CheckCircle } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const courses = [
  {
    id: 1,
    title: "Social Media Marketing 101",
    duration: "2h 30m",
    progress: 100,
    lessons: 12,
    completed: true,
  },
  {
    id: 2,
    title: "Content Creation Mastery",
    duration: "3h 15m",
    progress: 65,
    lessons: 15,
    completed: false,
  },
  {
    id: 3,
    title: "Analytics & Insights",
    duration: "1h 45m",
    progress: 30,
    lessons: 8,
    completed: false,
  },
  {
    id: 4,
    title: "Advanced Automation",
    duration: "2h 00m",
    progress: 0,
    lessons: 10,
    completed: false,
  },
];

export default function LearningPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto flex flex-col">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Learning Center</h1>
          <p className="text-slate-500">Enhance your skills with our courses and tutorials</p>
        </header>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <p className="text-sm text-slate-500 mb-1">Courses Enrolled</p>
            <p className="text-2xl font-bold">4</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-slate-500 mb-1">Completed</p>
            <p className="text-2xl font-bold text-emerald-500">1</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-slate-500 mb-1">In Progress</p>
            <p className="text-2xl font-bold text-amber-500">2</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-slate-500 mb-1">Total Hours</p>
            <p className="text-2xl font-bold">9.5</p>
          </Card>
        </div>

        {/* Courses */}
        <div className="space-y-4">
          {courses.map((course) => (
            <Card key={course.id} className="p-6 hover:border-primary/30 transition-smooth">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      course.completed
                        ? "bg-emerald-100 dark:bg-emerald-500/10"
                        : "bg-lavender dark:bg-primary/10"
                    }`}
                  >
                    {course.completed ? (
                      <CheckCircle className="w-6 h-6 text-emerald-500" />
                    ) : (
                      <BookOpen className="w-6 h-6 text-primary" />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold mb-1">{course.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </span>
                      <span>{course.lessons} lessons</span>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          course.completed ? "bg-emerald-500" : "bg-primary"
                        }`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{course.progress}% Complete</p>
                  </div>
                </div>

                <button
                  className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-smooth whitespace-nowrap ${
                    course.completed
                      ? "bg-slate-100 dark:bg-slate-800 text-slate-600"
                      : course.progress > 0
                        ? "bg-primary text-white hover:opacity-90"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  {course.completed ? "Review" : course.progress > 0 ? "Continue" : "Start Course"}
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
