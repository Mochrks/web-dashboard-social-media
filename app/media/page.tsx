"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { Upload, Image as ImageIcon, Folder } from "lucide-react";

export default function MediaPage() {
  const mediaItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    url: `https://images.unsplash.com/photo-${1500000000000 + i * 10000000}?w=400&h=400&fit=crop`,
    type: "image",
  }));

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Media Library</h1>
            <p className="text-slate-500">Manage your images and videos</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium shadow-premium hover:scale-[1.02] transition-transform">
            <Upload className="w-4 h-4" />
            Upload Media
          </button>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {mediaItems.map((item) => (
            <Card
              key={item.id}
              className="aspect-square overflow-hidden hover:border-primary/30 transition-smooth cursor-pointer group"
            >
              <img
                src={item.url}
                alt={`Media ${item.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
