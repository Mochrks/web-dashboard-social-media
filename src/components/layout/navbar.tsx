"use client";

import { useState, useEffect } from "react";
import { Search, Bell, Mail, Users, Menu, Settings, Calendar, LayoutDashboard } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";

interface NavbarProps {
  onMenuClick?: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4 flex-1">
        {/* Mobile Menu Button - only visible if Sidebar is hidden */}
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>

        {/* Search Bar */}
        <div className="relative w-full max-w-md hidden md:block">
          <Button
            variant="outline"
            className="w-full justify-start text-sm text-slate-500 bg-slate-50/50 dark:bg-slate-800/50 border-none h-10"
            onClick={() => setOpen(true)}
          >
            <Search className="mr-2 h-4 w-4" />
            Search analytics, posts, or trends...
            <kbd className="pointer-events-none absolute right-2 top-2.5 hidden h-5 select-none items-center gap-1 rounded border bg-slate-100 dark:bg-slate-700 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        </div>

        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Search className="mr-2 h-4 w-4" />
                <span>Search Analytics</span>
              </CommandItem>
              <CommandItem>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Settings">
              <CommandItem>
                <Users className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Messages Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative group">
              <Mail className="h-5 w-5 text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-[#8b5cf6] text-white text-[10px] rounded-full border-2 border-white dark:border-slate-900 shadow-sm">
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 p-0 mt-2">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-bold text-sm">Messages</h3>
              <Badge
                variant="outline"
                className="text-[10px] font-bold text-primary border-primary/20 bg-primary/5"
              >
                3 New
              </Badge>
            </div>
            <div className="max-h-[300px] overflow-y-auto">
              {[
                {
                  id: 1,
                  user: "Sarah Johnson",
                  text: "Hey! Just saw your latest post about...",
                  time: "2m ago",
                  avatar: "Sarah",
                  online: true,
                },
                {
                  id: 2,
                  user: "Mike Chen",
                  text: "The analytics report for April is ready.",
                  time: "1h ago",
                  avatar: "Mike",
                  online: false,
                },
                {
                  id: 3,
                  user: "Emma Wilson",
                  text: "Can we schedule a meeting for next week?",
                  time: "3h ago",
                  avatar: "Emma",
                  online: true,
                },
              ].map((msg) => (
                <DropdownMenuItem
                  key={msg.id}
                  className="p-4 flex gap-3 cursor-pointer focus:bg-slate-50 dark:focus:bg-slate-800"
                >
                  <div className="relative shrink-0">
                    <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${msg.avatar}`}
                        alt={msg.user}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {msg.online && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-sm font-bold truncate">{msg.user}</p>
                      <span className="text-[10px] text-slate-400 shrink-0">{msg.time}</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate">{msg.text}</p>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
            <div className="p-3 border-t border-slate-100 dark:border-slate-800 text-center">
              <Button
                variant="ghost"
                className="w-full text-xs font-bold text-primary hover:bg-primary/5"
              >
                View All Messages
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notifications Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative group">
              <Bell className="h-5 w-5 text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-[#ef4444] text-white text-[10px] rounded-full border-2 border-white dark:border-slate-900 shadow-sm">
                12
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 p-0 mt-2">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-bold text-sm">Notifications</h3>
              <button className="text-[10px] font-bold text-slate-400 hover:text-primary transition-colors">
                Mark all as read
              </button>
            </div>
            <div className="max-h-[300px] overflow-y-auto">
              {[
                {
                  id: 1,
                  user: "Sarah Johnson",
                  action: "liked your post",
                  time: "2m ago",
                  avatar: "Sarah",
                  unread: true,
                },
                {
                  id: 2,
                  user: "Mike Chen",
                  action: "commented on your video",
                  time: "15m ago",
                  avatar: "Mike",
                  unread: true,
                },
                {
                  id: 3,
                  user: "Emma Wilson",
                  action: "started following you",
                  time: "1h ago",
                  avatar: "Emma",
                  unread: false,
                },
                {
                  id: 4,
                  user: "System",
                  action: "Your post is trending!",
                  time: "2h ago",
                  avatar: "System",
                  unread: false,
                },
              ].map((notif) => (
                <DropdownMenuItem
                  key={notif.id}
                  className="p-4 flex gap-3 cursor-pointer focus:bg-slate-50 dark:focus:bg-slate-800"
                >
                  <div className="shrink-0 h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                    {notif.user === "System" ? (
                      <Bell className="h-5 w-5 text-primary" />
                    ) : (
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${notif.avatar}`}
                        alt={notif.user}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-tight">
                      <span className="font-bold text-slate-900 dark:text-white">{notif.user}</span>{" "}
                      {notif.action}
                    </p>
                    <span className="text-[10px] text-slate-400 mt-1 block">{notif.time}</span>
                  </div>
                  {notif.unread && (
                    <div className="h-2 w-2 rounded-full bg-primary shrink-0 mt-2" />
                  )}
                </DropdownMenuItem>
              ))}
            </div>
            <div className="p-3 border-t border-slate-100 dark:border-slate-800 text-center">
              <Button
                variant="ghost"
                className="w-full text-xs font-bold text-primary hover:bg-primary/5"
              >
                See All Notifications
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <ThemeToggle />

        <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2 hidden sm:block" />

        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-3 pl-2 pr-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all h-auto py-1"
            >
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-sm font-bold text-slate-900 dark:text-white leading-none">
                  Alex Rivera
                </span>
                <span className="text-[11px] text-slate-500 font-medium leading-none mt-1">
                  Pro Account
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-2 border-white dark:border-slate-700 shadow-sm">
                <Users className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mt-2 p-2">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-bold leading-none">Alex Rivera</p>
                <p className="text-xs leading-none text-slate-500">alex@insightly.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer py-2">
              <Users className="mr-2 h-4 w-4" />
              <span>Profile Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer py-2">
              <Bell className="mr-2 h-4 w-4" />
              <span>Notification Preferences</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer py-2 text-rose-500 focus:text-rose-500">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
