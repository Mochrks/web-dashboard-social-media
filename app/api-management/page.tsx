"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { Database, Copy, Eye, EyeOff, Plus, Trash2, BarChart } from "lucide-react";
import { useState } from "react";
import { Footer } from "@/components/layout/footer";

const apiKeys = [
  {
    id: 1,
    name: "Production API",
    key: "sk_live_4a2b8c9d1e3f5g6h",
    created: "Jan 15, 2024",
    lastUsed: "2 hours ago",
    requests: "1.2M",
  },
  {
    id: 2,
    name: "Development API",
    key: "sk_test_7i8j9k0l1m2n3o4p",
    created: "Feb 1, 2024",
    lastUsed: "1 day ago",
    requests: "45K",
  },
  {
    id: 3,
    name: "Mobile App API",
    key: "sk_live_5q6r7s8t9u0v1w2x",
    created: "Feb 10, 2024",
    lastUsed: "5 min ago",
    requests: "890K",
  },
];

export default function APIManagementPage() {
  const [showKeys, setShowKeys] = useState<Record<number, boolean>>({});

  const toggleKeyVisibility = (id: number) => {
    setShowKeys((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const maskKey = (key: string) => {
    return key.substring(0, 8) + "••••••••••••" + key.substring(key.length - 4);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto flex flex-col">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">API Management</h1>
            <p className="text-slate-500">Manage your API keys and monitor usage</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium shadow-premium hover:scale-[1.02] transition-transform">
            <Plus className="w-4 h-4" />
            Generate New Key
          </button>
        </header>

        {/* API Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <p className="text-sm text-slate-500 mb-1">Total Keys</p>
            <p className="text-2xl font-bold">3</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-slate-500 mb-1">Total Requests</p>
            <p className="text-2xl font-bold">2.1M</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-slate-500 mb-1">This Month</p>
            <p className="text-2xl font-bold text-primary">450K</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-slate-500 mb-1">Success Rate</p>
            <p className="text-2xl font-bold text-emerald-500">99.8%</p>
          </Card>
        </div>

        {/* API Keys List */}
        <Card className="overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="font-bold">API Keys</h2>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {apiKeys.map((apiKey) => (
              <div
                key={apiKey.id}
                className="p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-smooth"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-lavender dark:bg-primary/10 rounded-lg flex items-center justify-center">
                        <Database className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">{apiKey.name}</h3>
                        <p className="text-xs text-slate-500">Created {apiKey.created}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <code className="flex-1 px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded font-mono text-sm">
                        {showKeys[apiKey.id] ? apiKey.key : maskKey(apiKey.key)}
                      </code>
                      <button
                        onClick={() => toggleKeyVisibility(apiKey.id)}
                        className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-smooth"
                      >
                        {showKeys[apiKey.id] ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                      <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-smooth">
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <BarChart className="w-4 h-4" />
                        {apiKey.requests} requests
                      </span>
                      <span>Last used: {apiKey.lastUsed}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-smooth">
                      View Logs
                    </button>
                    <button className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-smooth">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* API Documentation */}
        <Card className="p-6 mt-8">
          <h2 className="font-bold mb-4">Quick Start</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold mb-2">Base URL</p>
              <code className="block px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded text-sm">
                https://api.insightly.com/v1
              </code>
            </div>

            <div>
              <p className="text-sm font-semibold mb-2">Authentication</p>
              <code className="block px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded text-sm">
                Authorization: Bearer YOUR_API_KEY
              </code>
            </div>

            <button className="text-primary text-sm font-semibold hover:underline">
              View Full Documentation →
            </button>
          </div>
        </Card>

        <Footer />
      </main>
    </div>
  );
}
