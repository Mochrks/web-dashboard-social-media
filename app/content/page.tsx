"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { FileText, Image, Video, Plus } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const contentItems = [
  {
    id: 1,
    title: "Summer Campaign 2024",
    type: "article",
    status: "Published",
    date: "2 days ago",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Product Launch Video",
    type: "video",
    status: "Draft",
    date: "5 days ago",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Brand Guidelines",
    type: "document",
    status: "Published",
    date: "1 week ago",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
  },
];

export default function ContentPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto flex flex-col">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Content Library</h1>
            <p className="text-slate-500">Manage all your content in one place</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium shadow-premium hover:scale-[1.02] transition-transform">
            <Plus className="w-4 h-4" />
            New Content
          </button>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:border-primary/30 transition-smooth group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  {item.type === "video" && <Video className="w-4 h-4 text-primary" />}
                  {item.type === "article" && <FileText className="w-4 h-4 text-emerald-500" />}
                  {item.type === "document" && <FileText className="w-4 h-4 text-orange-500" />}
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      item.status === "Published"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10"
                        : "bg-amber-100 text-amber-700 dark:bg-amber-500/10"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.date}</p>
              </div>
            </Card>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
