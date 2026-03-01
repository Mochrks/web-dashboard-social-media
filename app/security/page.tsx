"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import {
  Shield,
  Lock,
  Key,
  Smartphone,
  AlertTriangle,
  CheckCircle,
  Eye,
  Clock,
} from "lucide-react";
import { useState } from "react";
import { Footer } from "@/components/layout/footer";

export default function SecurityPage() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [loginAlerts, setLoginAlerts] = useState(true);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto flex flex-col">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Security Settings</h1>
          <p className="text-slate-500">Protect your account with advanced security features</p>
        </header>

        {/* Security Score */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-emerald-50 to-mint dark:from-emerald-500/10 border-emerald-200 dark:border-emerald-500/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold mb-1">Security Score</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Your account is well protected
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-white">85%</span>
              </div>
              <p className="text-xs text-emerald-600 font-semibold">Excellent</p>
            </div>
          </div>
        </Card>

        {/* Password Security */}
        <Card className="p-6 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-lavender dark:bg-primary/10 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">Password</h3>
                <p className="text-sm text-slate-500">Last changed 30 days ago</p>
              </div>
            </div>
            <button className="text-primary text-sm font-semibold hover:underline">
              Change Password
            </button>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>At least 12 characters</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Contains uppercase and lowercase</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Contains numbers and symbols</span>
            </div>
          </div>
        </Card>

        {/* Two-Factor Authentication */}
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-lavender dark:bg-primary/10 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">Two-Factor Authentication</h3>
                <p className="text-sm text-slate-500">Add an extra layer of security</p>
              </div>
            </div>
            <button
              onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                twoFactorEnabled ? "bg-primary" : "bg-slate-200 dark:bg-slate-700"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  twoFactorEnabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {twoFactorEnabled && (
            <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg border border-emerald-200 dark:border-emerald-500/20">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-emerald-700 dark:text-emerald-400 mb-1">
                    2FA is enabled
                  </p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-500">
                    Using authenticator app • Last used 2 hours ago
                  </p>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Login Alerts */}
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-peach dark:bg-orange-500/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h3 className="font-bold">Login Alerts</h3>
                <p className="text-sm text-slate-500">Get notified of suspicious activity</p>
              </div>
            </div>
            <button
              onClick={() => setLoginAlerts(!loginAlerts)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                loginAlerts ? "bg-primary" : "bg-slate-200 dark:bg-slate-700"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  loginAlerts ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </Card>

        {/* API Keys */}
        <Card className="p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-mint dark:bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <Key className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <h3 className="font-bold">API Keys</h3>
                <p className="text-sm text-slate-500">Manage your API access keys</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              Generate New Key
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="flex items-center gap-3">
                <code className="text-sm font-mono">sk_live_••••••••••••4a2b</code>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 text-xs font-semibold rounded">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-smooth">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="text-rose-500 text-sm font-semibold hover:underline">
                  Revoke
                </button>
              </div>
            </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Recent Security Activity
          </h3>
          <div className="space-y-3">
            {[
              { action: "Password changed", time: "30 days ago", location: "New York, US" },
              { action: "New device login", time: "2 days ago", location: "San Francisco, US" },
              { action: "2FA enabled", time: "45 days ago", location: "New York, US" },
            ].map((activity, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800 last:border-0"
              >
                <div>
                  <p className="font-semibold text-sm">{activity.action}</p>
                  <p className="text-xs text-slate-500">{activity.location}</p>
                </div>
                <p className="text-xs text-slate-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </Card>

        <Footer />
      </main>
    </div>
  );
}
