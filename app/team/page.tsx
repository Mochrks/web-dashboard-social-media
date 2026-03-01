"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { UserPlus, Mail, Shield, MoreVertical } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const teamMembers = [
  {
    id: 1,
    name: "Alex Rivera",
    email: "alex@insightly.com",
    role: "Owner",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@insightly.com",
    role: "Admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    status: "Active",
  },
  {
    id: 3,
    name: "Mike Chen",
    email: "mike@insightly.com",
    role: "Editor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    status: "Active",
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma@insightly.com",
    role: "Viewer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    status: "Pending",
  },
];

export default function TeamPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto flex flex-col">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Team Management</h1>
            <p className="text-slate-500">Manage your team members and permissions</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium shadow-premium hover:scale-[1.02] transition-transform">
            <UserPlus className="w-4 h-4" />
            Invite Member
          </button>
        </header>

        {/* Team Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card className="p-4">
            <p className="text-sm text-slate-500 mb-1">Total Members</p>
            <p className="text-2xl font-bold">4</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-slate-500 mb-1">Active</p>
            <p className="text-2xl font-bold text-emerald-500">3</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-slate-500 mb-1">Pending</p>
            <p className="text-2xl font-bold text-amber-500">1</p>
          </Card>
        </div>

        {/* Team Members List */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                    Member
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                    Role
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                    Status
                  </th>
                  <th className="text-right py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {teamMembers.map((member) => (
                  <tr
                    key={member.id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-smooth"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-semibold text-sm">{member.name}</p>
                          <p className="text-xs text-slate-500">{member.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          member.role === "Owner"
                            ? "bg-primary/10 text-primary"
                            : member.role === "Admin"
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10"
                              : member.role === "Editor"
                                ? "bg-amber-100 text-amber-700 dark:bg-amber-500/10"
                                : "bg-slate-100 text-slate-700 dark:bg-slate-500/10"
                        }`}
                      >
                        {member.role}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          member.status === "Active"
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10"
                            : "bg-amber-100 text-amber-700 dark:bg-amber-500/10"
                        }`}
                      >
                        {member.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-smooth">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Footer />
      </main>
    </div>
  );
}
