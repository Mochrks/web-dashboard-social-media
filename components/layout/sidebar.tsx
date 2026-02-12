"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  LayoutDashboard,
  BarChart3,
  Send,
  Users,
  Settings,
  Sparkles,
  Calendar,
  MessageSquare,
  TrendingUp,
  FileText,
  Image,
  Video,
  Hash,
  Target,
  Zap,
  Menu,
  X,
  Bell,
  Wallet,
  UserPlus,
  Link2,
  Award,
  BookOpen,
  HelpCircle,
  Shield,
  Database,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard, category: "Main" },
  { name: "Analytics", href: "/analytics", icon: BarChart3, category: "Main" },
  { name: "Publishing", href: "/publishing", icon: Calendar, category: "Main" },
  { name: "Audience", href: "/audience", icon: Users, category: "Main" },
  { name: "Messages", href: "/messages", icon: MessageSquare, category: "Communication" },
  { name: "Notifications", href: "/notifications", icon: Bell, category: "Communication" },
  { name: "Trends", href: "/trends", icon: TrendingUp, category: "Insights" },
  { name: "Content", href: "/content", icon: FileText, category: "Content" },
  { name: "Media Library", href: "/media", icon: Image, category: "Content" },
  { name: "Videos", href: "/videos", icon: Video, category: "Content" },
  { name: "Hashtags", href: "/hashtags", icon: Hash, category: "Tools" },
  { name: "Campaigns", href: "/campaigns", icon: Target, category: "Marketing" },
  { name: "Automation", href: "/automation", icon: Zap, category: "Tools" },
  { name: "Reports", href: "/reports", icon: FileText, category: "Insights" },
  { name: "Competitors", href: "/competitors", icon: TrendingUp, category: "Insights" },
  { name: "Billing", href: "/billing", icon: Wallet, category: "Account" },
  { name: "Team", href: "/team", icon: UserPlus, category: "Account" },
  { name: "Integrations", href: "/integrations", icon: Link2, category: "Tools" },
  { name: "Achievements", href: "/achievements", icon: Award, category: "Gamification" },
  { name: "Learning", href: "/learning", icon: BookOpen, category: "Resources" },
  { name: "Support", href: "/support", icon: HelpCircle, category: "Resources" },
  { name: "Security", href: "/security", icon: Shield, category: "Account" },
  { name: "API", href: "/api-management", icon: Database, category: "Developer" },
  { name: "Webhooks", href: "/webhooks", icon: Zap, category: "Developer" },
  { name: "Settings", href: "/settings", icon: Settings, category: "Account" },
];

// Group navigation by category
const groupedNav = navigation.reduce(
  (acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  },
  {} as Record<string, typeof navigation>
);

export function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 h-screen z-40 transition-all duration-300",
          "border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900",
          "flex flex-col py-6 overflow-y-auto",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          isCollapsed ? "w-20 px-2" : "w-64 px-4"
        )}
      >
        {/* Logo */}
        <div className="mb-8 flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            {!isCollapsed && <span className="font-bold text-xl tracking-tight">Insightly</span>}
          </div>

          {/* Theme Toggle */}
          {!isCollapsed && <ThemeToggle />}
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-6 overflow-y-auto">
          {Object.entries(groupedNav).map(([category, items]) => (
            <div key={category}>
              {!isCollapsed && (
                <h3 className="px-3 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {category}
                </h3>
              )}
              <div className="space-y-1">
                {items.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-smooth text-sm group relative",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                      )}
                      title={isCollapsed ? item.name : undefined}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      {!isCollapsed && <span className="truncate">{item.name}</span>}

                      {/* Tooltip for collapsed state */}
                      {isCollapsed && (
                        <span className="absolute left-full ml-2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                          {item.name}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Collapse Toggle - Desktop Only */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex items-center justify-center py-2 mb-4 text-slate-500 hover:text-primary transition-smooth"
        >
          {isCollapsed ? "→" : "←"}
        </button>

        {/* Pro Plan Card */}
        {!isCollapsed && (
          <div className="mb-4">
            <div className="flex flex-col p-4 bg-lavender dark:bg-primary/5 rounded-xl border border-primary/10">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                Pro Plan
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                Unlock advanced AI content ideas.
              </p>
              <button className="w-full py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-premium">
                Upgrade
              </button>
            </div>
          </div>
        )}

        {/* User Profile */}
        <div
          className={cn(
            "flex items-center gap-3 px-2 pt-4 border-t border-slate-200 dark:border-slate-800",
            isCollapsed && "justify-center"
          )}
        >
          <img
            className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-sm shrink-0"
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
            alt="User profile"
          />
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate">Alex Rivera</p>
              <p className="text-xs text-slate-500 truncate">@arivera_creates</p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
