"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { Bell, Heart, MessageCircle, UserPlus, TrendingUp, Check } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "like",
    user: "Sarah Johnson",
    action: "liked your post",
    time: "2m ago",
    read: false,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: 2,
    type: "comment",
    user: "Mike Chen",
    action: "commented on your video",
    time: "15m ago",
    read: false,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
  },
  {
    id: 3,
    type: "follow",
    user: "Emma Wilson",
    action: "started following you",
    time: "1h ago",
    read: true,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
  {
    id: 4,
    type: "trending",
    user: "System",
    action: "Your post is trending!",
    time: "2h ago",
    read: true,
    avatar: null,
  },
];

export default function NotificationsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Notifications</h1>
            <p className="text-slate-500">Stay updated with your latest activities</p>
          </div>
          <button className="text-primary text-sm font-semibold hover:underline self-start">
            Mark all as read
          </button>
        </header>

        <div className="space-y-2">
          {notifications.map((notif) => (
            <Card
              key={notif.id}
              className={cn(
                "p-4 hover:border-primary/30 transition-smooth cursor-pointer",
                !notif.read && "bg-lavender/20 dark:bg-primary/5"
              )}
            >
              <div className="flex items-start gap-4">
                {notif.avatar ? (
                  <img src={notif.avatar} alt={notif.user} className="w-12 h-12 rounded-full" />
                ) : (
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Bell className="w-6 h-6 text-primary" />
                  </div>
                )}

                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-bold">{notif.user}</span> {notif.action}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{notif.time}</p>
                </div>

                {!notif.read && <span className="w-2 h-2 bg-primary rounded-full"></span>}
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
