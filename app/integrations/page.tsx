"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { Link2, Check, Plus } from "lucide-react";

const integrations = [
  { name: "Instagram", connected: true, icon: "📷", description: "Connect your Instagram account" },
  { name: "TikTok", connected: true, icon: "🎵", description: "Sync your TikTok content" },
  { name: "YouTube", connected: false, icon: "▶️", description: "Manage YouTube videos" },
  { name: "Twitter/X", connected: false, icon: "🐦", description: "Post to Twitter automatically" },
  { name: "LinkedIn", connected: false, icon: "💼", description: "Share professional content" },
  { name: "Facebook", connected: true, icon: "👍", description: "Manage Facebook pages" },
  { name: "Pinterest", connected: false, icon: "📌", description: "Pin your visual content" },
  { name: "Slack", connected: true, icon: "💬", description: "Team notifications" },
];

export default function IntegrationsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Integrations</h1>
          <p className="text-slate-500">Connect your favorite platforms and tools</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration) => (
            <Card key={integration.name} className="p-6 hover:border-primary/30 transition-smooth">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{integration.icon}</div>
                  <div>
                    <h3 className="font-bold">{integration.name}</h3>
                    <p className="text-xs text-slate-500">{integration.description}</p>
                  </div>
                </div>
                {integration.connected && (
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>

              <button
                className={`w-full py-2 rounded-lg font-semibold text-sm transition-smooth ${
                  integration.connected
                    ? "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
                    : "bg-primary text-white hover:opacity-90"
                }`}
              >
                {integration.connected ? "Disconnect" : "Connect"}
              </button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
