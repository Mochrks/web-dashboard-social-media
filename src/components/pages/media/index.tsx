"use client";

import { Card } from "@/components/ui/card";
import { Upload } from "lucide-react";

export default function MediaPage() {
  const unsplashIds = [
    "1494790108377-be9c29b29330",
    "1534528741775-53994a69daeb",
    "1506794778202-cad84cf45f1d",
    "1472099645785-5658abf4ff4e",
    "1498050108023-c5249f4df085",
    "1502823403499-6ccf18320c1e",
    "1511367461989-f85a21fda167",
    "1461749280684-dccba630e2f6",
    "1431512285697-7671b56a42a2",
    "1550525811-e5869dd03032",
    "1503023345310-bd7c1de61c7d",
    "1529665253569-6d01c0eaf7b6",
  ];

  const mediaItems = unsplashIds.map((id, i) => ({
    id: i + 1,
    url: `https://images.unsplash.com/photo-${id}?w=400&h=400&fit=crop`,
    type: "image",
  }));

  return (
    <div className="flex flex-col">
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
    </div>
  );
}
