"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { Search, Send, MoreVertical, Paperclip, Smile } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const conversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    username: "@sarah_j",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    lastMessage: "Thanks for the collaboration opportunity!",
    time: "2m ago",
    unread: 3,
    online: true,
  },
  {
    id: 2,
    name: "Marketing Team",
    username: "Group • 12 members",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Team",
    lastMessage: "Let's schedule the campaign launch",
    time: "1h ago",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "Alex Chen",
    username: "@alexchen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    lastMessage: "The analytics report looks great!",
    time: "3h ago",
    unread: 1,
    online: true,
  },
];

export default function MessagesPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Conversations List */}
          <div className="w-full lg:w-80 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800">
              <h2 className="text-xl font-bold mb-4">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="overflow-y-auto h-[calc(100vh-180px)]">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-smooth border-b border-slate-100 dark:border-slate-800"
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <img src={conv.avatar} alt={conv.name} className="w-12 h-12 rounded-full" />
                      {conv.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-sm truncate">{conv.name}</h3>
                        <span className="text-xs text-slate-500">{conv.time}</span>
                      </div>
                      <p className="text-xs text-slate-500 truncate">{conv.lastMessage}</p>
                    </div>

                    {conv.unread > 0 && (
                      <span className="px-2 py-0.5 bg-primary text-white text-xs font-bold rounded-full">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-950">
            {/* Chat Header */}
            <div className="p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                  alt="Sarah"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-xs text-emerald-500">Online</p>
                </div>
              </div>
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-smooth">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="flex justify-start">
                <div className="max-w-xs lg:max-w-md">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl rounded-tl-none p-3 shadow-sm">
                    <p className="text-sm">
                      Hey! I saw your latest post about content strategy. Really insightful!
                    </p>
                  </div>
                  <span className="text-xs text-slate-500 mt-1 block">10:30 AM</span>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-xs lg:max-w-md">
                  <div className="bg-primary text-white rounded-2xl rounded-tr-none p-3 shadow-sm">
                    <p className="text-sm">
                      Thanks! Would you be interested in collaborating on a project?
                    </p>
                  </div>
                  <span className="text-xs text-slate-500 mt-1 block text-right">10:32 AM</span>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-smooth">
                  <Paperclip className="w-5 h-5 text-slate-500" />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20"
                />
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-smooth">
                  <Smile className="w-5 h-5 text-slate-500" />
                </button>
                <button className="p-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
