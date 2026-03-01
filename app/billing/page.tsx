"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { CreditCard, Download, Calendar } from "lucide-react";
import { Footer } from "@/components/layout/footer";

export default function BillingPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto flex flex-col">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Billing & Payments</h1>
          <p className="text-slate-500">Manage your subscription and payment methods</p>
        </header>

        {/* Current Plan */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-primary/10 to-lavender dark:from-primary/5 dark:to-primary/10 border-primary/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Pro Plan</h2>
              <p className="text-slate-600 dark:text-slate-400">
                $49/month • Renews on March 15, 2024
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 bg-white dark:bg-slate-800 rounded-lg font-semibold text-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-smooth">
                Change Plan
              </button>
              <button className="px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm shadow-premium hover:opacity-90 transition-opacity">
                Upgrade to Elite
              </button>
            </div>
          </div>
        </Card>

        {/* Payment Method */}
        <Card className="p-6 mb-8">
          <h3 className="text-lg font-bold mb-4">Payment Method</h3>
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white dark:text-slate-900" />
              </div>
              <div>
                <p className="font-semibold">•••• •••• •••• 4242</p>
                <p className="text-sm text-slate-500">Expires 12/2025</p>
              </div>
            </div>
            <button className="text-primary text-sm font-semibold hover:underline">Update</button>
          </div>
        </Card>

        {/* Billing History */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4">Billing History</h3>
          <div className="space-y-3">
            {[
              { date: "Feb 15, 2024", amount: "$49.00", status: "Paid" },
              { date: "Jan 15, 2024", amount: "$49.00", status: "Paid" },
              { date: "Dec 15, 2023", amount: "$49.00", status: "Paid" },
            ].map((invoice, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800 last:border-0"
              >
                <div className="flex items-center gap-4">
                  <Calendar className="w-5 h-5 text-slate-400" />
                  <div>
                    <p className="font-semibold text-sm">{invoice.date}</p>
                    <p className="text-xs text-slate-500">{invoice.status}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">{invoice.amount}</span>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-smooth">
                    <Download className="w-4 h-4" />
                  </button>
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
