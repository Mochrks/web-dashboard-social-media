"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { Download, FileText, Calendar } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const reports = [
  { id: 1, name: "Monthly Performance Report", date: "Jan 2024", type: "PDF", size: "2.4 MB" },
  { id: 2, name: "Engagement Analytics", date: "Dec 2023", type: "PDF", size: "1.8 MB" },
  { id: 3, name: "Audience Insights", date: "Nov 2023", type: "PDF", size: "3.1 MB" },
  { id: 4, name: "Campaign Results", date: "Oct 2023", type: "PDF", size: "2.2 MB" },
];

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto flex flex-col">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Reports</h1>
            <p className="text-slate-500">Download and view your analytics reports</p>
          </div>
          <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-medium shadow-premium hover:scale-[1.02] transition-transform">
            Generate New Report
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <Card
              key={report.id}
              className="p-6 hover:border-primary/30 transition-smooth group cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-lavender dark:bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold mb-1 truncate">{report.name}</h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="w-3 h-3" />
                    {report.date}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-sm">
                  <span className="text-slate-500">{report.type}</span>
                  <span className="text-slate-400 mx-2">•</span>
                  <span className="text-slate-500">{report.size}</span>
                </div>
                <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-primary hover:text-white transition-smooth">
                  <Download className="w-4 h-4" />
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
