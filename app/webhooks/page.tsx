"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { Zap, Plus, Play, Pause, Trash2, CheckCircle, XCircle, Clock } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const webhooks = [
  {
    id: 1,
    name: "Post Published",
    url: "https://api.example.com/webhooks/post",
    events: ["post.published", "post.updated"],
    status: "active",
    lastTriggered: "2 hours ago",
    successRate: "99.2%",
  },
  {
    id: 2,
    name: "New Follower",
    url: "https://api.example.com/webhooks/follower",
    events: ["follower.new"],
    status: "active",
    lastTriggered: "15 min ago",
    successRate: "100%",
  },
  {
    id: 3,
    name: "Comment Received",
    url: "https://api.example.com/webhooks/comment",
    events: ["comment.created"],
    status: "paused",
    lastTriggered: "1 day ago",
    successRate: "98.5%",
  },
];

export default function WebhooksPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto flex flex-col">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Webhooks</h1>
            <p className="text-slate-500">Receive real-time notifications for events</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium shadow-premium hover:scale-[1.02] transition-transform">
            <Plus className="w-4 h-4" />
            Create Webhook
          </button>
        </header>

        {/* Webhook Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <p className="text-sm text-slate-500 mb-1">Total Webhooks</p>
            <p className="text-2xl font-bold">3</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-slate-500 mb-1">Active</p>
            <p className="text-2xl font-bold text-emerald-500">2</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-slate-500 mb-1">Events Today</p>
            <p className="text-2xl font-bold">1,245</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-slate-500 mb-1">Success Rate</p>
            <p className="text-2xl font-bold text-primary">99.1%</p>
          </Card>
        </div>

        {/* Webhooks List */}
        <div className="space-y-4">
          {webhooks.map((webhook) => (
            <Card key={webhook.id} className="p-6 hover:border-primary/30 transition-smooth">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        webhook.status === "active"
                          ? "bg-emerald-100 dark:bg-emerald-500/10"
                          : "bg-amber-100 dark:bg-amber-500/10"
                      }`}
                    >
                      <Zap
                        className={`w-5 h-5 ${
                          webhook.status === "active" ? "text-emerald-500" : "text-amber-500"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold">{webhook.name}</h3>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                            webhook.status === "active"
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10"
                              : "bg-amber-100 text-amber-700 dark:bg-amber-500/10"
                          }`}
                        >
                          {webhook.status}
                        </span>
                      </div>
                      <code className="text-xs text-slate-500 block mb-3">{webhook.url}</code>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {webhook.events.map((event, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-lavender dark:bg-primary/10 text-primary text-xs font-semibold rounded"
                          >
                            {event}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Last triggered: {webhook.lastTriggered}
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          {webhook.successRate} success
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  {webhook.status === "active" ? (
                    <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-smooth flex items-center gap-2">
                      <Pause className="w-4 h-4" />
                      Pause
                    </button>
                  ) : (
                    <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Resume
                    </button>
                  )}
                  <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-smooth">
                    Test
                  </button>
                  <button className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-smooth">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Deliveries */}
        <Card className="p-6 mt-8">
          <h2 className="font-bold mb-4">Recent Deliveries</h2>
          <div className="space-y-3">
            {[
              {
                event: "post.published",
                status: "success",
                time: "2 min ago",
                webhook: "Post Published",
              },
              {
                event: "follower.new",
                status: "success",
                time: "15 min ago",
                webhook: "New Follower",
              },
              {
                event: "comment.created",
                status: "failed",
                time: "1 hour ago",
                webhook: "Comment Received",
              },
            ].map((delivery, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800 last:border-0"
              >
                <div className="flex items-center gap-3">
                  {delivery.status === "success" ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-500" />
                  )}
                  <div>
                    <p className="font-semibold text-sm">{delivery.webhook}</p>
                    <code className="text-xs text-slate-500">{delivery.event}</code>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`text-xs font-semibold ${
                      delivery.status === "success" ? "text-emerald-500" : "text-rose-500"
                    }`}
                  >
                    {delivery.status}
                  </p>
                  <p className="text-xs text-slate-500">{delivery.time}</p>
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
