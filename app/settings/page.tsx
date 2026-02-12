"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import {
  User,
  Share2,
  Bell,
  CreditCard,
  Shield,
  Camera,
  Instagram,
  Youtube,
  Globe,
  Mail,
  Lock,
  Palette,
  Languages,
  Download,
  Trash2,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "account", label: "Account", icon: Lock },
    { id: "platforms", label: "Platforms", icon: Share2 },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "language", label: "Language & Region", icon: Languages },
    { id: "privacy", label: "Privacy", icon: Shield },
    { id: "data", label: "Data & Storage", icon: Download },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Settings Tabs - Sidebar */}
        <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-x-auto lg:overflow-y-auto">
          <div className="p-4 lg:p-6">
            <h2 className="font-bold text-lg mb-4 hidden lg:block">Settings</h2>
            <nav className="flex lg:flex-col gap-1 min-w-max lg:min-w-0">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-smooth text-sm whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-primary/10 text-primary"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    <span className="hidden lg:inline">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div>
              <h1 className="text-2xl font-bold mb-2">Profile Settings</h1>
              <p className="text-slate-500 mb-8">Manage your public profile information</p>

              <Card className="p-6 mb-6">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="relative">
                    <img
                      className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-lg"
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                      alt="Profile"
                    />
                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex-1 space-y-4 w-full">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue="Alex Rivera"
                        className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Username</label>
                      <input
                        type="text"
                        defaultValue="@arivera_creates"
                        className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Bio</label>
                      <textarea
                        rows={3}
                        defaultValue="Content creator & social media strategist. Helping brands grow their online presence."
                        className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>
              </Card>

              <div className="flex justify-end gap-3">
                <button className="px-5 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-smooth">
                  Cancel
                </button>
                <button className="px-5 py-2.5 bg-primary text-white rounded-lg font-semibold shadow-premium hover:opacity-90 transition-opacity">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Account Tab */}
          {activeTab === "account" && (
            <div>
              <h1 className="text-2xl font-bold mb-2">Account Settings</h1>
              <p className="text-slate-500 mb-8">Manage your account security and preferences</p>

              <Card className="p-6 mb-6">
                <h3 className="font-bold mb-4">Email Address</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    defaultValue="alex@insightly.com"
                    className="flex-1 px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                  />
                  <button className="px-5 py-2 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                    Update Email
                  </button>
                </div>
              </Card>

              <Card className="p-6 mb-6">
                <h3 className="font-bold mb-4">Change Password</h3>
                <div className="space-y-4">
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                  />
                  <button className="px-5 py-2.5 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Update Password
                  </button>
                </div>
              </Card>

              <Card className="p-6 border-rose-200 dark:border-rose-500/20 bg-rose-50/50 dark:bg-rose-500/5">
                <h3 className="font-bold text-rose-600 mb-2">Danger Zone</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <button className="px-5 py-2.5 bg-rose-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Delete Account
                </button>
              </Card>
            </div>
          )}

          {/* Platforms Tab */}
          {activeTab === "platforms" && (
            <div>
              <h1 className="text-2xl font-bold mb-2">Connected Platforms</h1>
              <p className="text-slate-500 mb-8">Manage your social media connections</p>

              <div className="space-y-4">
                {[
                  { name: "Instagram", icon: Instagram, connected: true, followers: "124.8K" },
                  { name: "YouTube", icon: Youtube, connected: true, subscribers: "45.2K" },
                  { name: "TikTok", icon: Globe, connected: false, followers: "-" },
                ].map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <Card key={platform.name} className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-lavender dark:bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold">{platform.name}</h3>
                            {platform.connected && (
                              <p className="text-sm text-slate-500">
                                {platform.followers} followers
                              </p>
                            )}
                          </div>
                        </div>
                        <button
                          className={`px-5 py-2.5 rounded-lg font-semibold transition-smooth whitespace-nowrap ${
                            platform.connected
                              ? "border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                              : "bg-primary text-white hover:opacity-90"
                          }`}
                        >
                          {platform.connected ? "Disconnect" : "Connect"}
                        </button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div>
              <h1 className="text-2xl font-bold mb-2">Notification Preferences</h1>
              <p className="text-slate-500 mb-8">Choose how you want to be notified</p>

              <Card className="p-6 mb-6">
                <h3 className="font-bold mb-4">Email Notifications</h3>
                <div className="space-y-4">
                  {[
                    {
                      label: "New followers",
                      state: emailNotifications,
                      setState: setEmailNotifications,
                    },
                    {
                      label: "Comments on posts",
                      state: pushNotifications,
                      setState: setPushNotifications,
                    },
                    {
                      label: "Marketing emails",
                      state: marketingEmails,
                      setState: setMarketingEmails,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800 last:border-0"
                    >
                      <span className="font-medium">{item.label}</span>
                      <button
                        onClick={() => item.setState(!item.state)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          item.state ? "bg-primary" : "bg-slate-200 dark:bg-slate-700"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            item.state ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Appearance Tab */}
          {activeTab === "appearance" && (
            <div>
              <h1 className="text-2xl font-bold mb-2">Appearance</h1>
              <p className="text-slate-500 mb-8">Customize how Insightly looks</p>

              <Card className="p-6">
                <h3 className="font-bold mb-4">Theme</h3>
                <div className="grid grid-cols-3 gap-4">
                  {["Light", "Dark", "System"].map((theme) => (
                    <button
                      key={theme}
                      className="p-4 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary transition-smooth"
                    >
                      <div
                        className={`w-full h-20 rounded mb-2 ${
                          theme === "Light"
                            ? "bg-white border border-slate-200"
                            : theme === "Dark"
                              ? "bg-slate-900"
                              : "bg-gradient-to-br from-white to-slate-900"
                        }`}
                      ></div>
                      <p className="font-semibold text-sm">{theme}</p>
                    </button>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Language Tab */}
          {activeTab === "language" && (
            <div>
              <h1 className="text-2xl font-bold mb-2">Language & Region</h1>
              <p className="text-slate-500 mb-8">Set your language and regional preferences</p>

              <Card className="p-6 mb-6">
                <h3 className="font-bold mb-4">Language</h3>
                <select className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-4">Timezone</h3>
                <select className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <option>Pacific Time (PT)</option>
                  <option>Eastern Time (ET)</option>
                  <option>Central European Time (CET)</option>
                </select>
              </Card>
            </div>
          )}

          {/* Privacy Tab */}
          {activeTab === "privacy" && (
            <div>
              <h1 className="text-2xl font-bold mb-2">Privacy Settings</h1>
              <p className="text-slate-500 mb-8">Control your privacy and data sharing</p>

              <Card className="p-6">
                <div className="space-y-4">
                  {[
                    "Make my profile public",
                    "Allow search engines to index my profile",
                    "Show my activity status",
                    "Allow others to tag me",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800 last:border-0"
                    >
                      <span className="font-medium">{item}</span>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                      </button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Data & Storage Tab */}
          {activeTab === "data" && (
            <div>
              <h1 className="text-2xl font-bold mb-2">Data & Storage</h1>
              <p className="text-slate-500 mb-8">Manage your data and storage usage</p>

              <Card className="p-6 mb-6">
                <h3 className="font-bold mb-4">Storage Usage</h3>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>2.4 GB of 10 GB used</span>
                    <span className="text-slate-500">24%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: "24%" }}></div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-6">
                <h3 className="font-bold mb-4">Export Data</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Download a copy of your data including posts, media, and analytics.
                </p>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  <Download className="w-4 h-4" />
                  Request Data Export
                </button>
              </Card>

              <Card className="p-6 border-rose-200 dark:border-rose-500/20 bg-rose-50/50 dark:bg-rose-500/5">
                <h3 className="font-bold text-rose-600 mb-2">Clear All Data</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  This will permanently delete all your posts, media, and analytics data.
                </p>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-rose-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  <Trash2 className="w-4 h-4" />
                  Clear All Data
                </button>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
