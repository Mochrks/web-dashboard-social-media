"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";
import { HelpCircle, MessageCircle, Mail, Phone, Search } from "lucide-react";

const faqs = [
  {
    q: "How do I connect my social media accounts?",
    a: "Go to Integrations page and click Connect on your desired platform.",
  },
  {
    q: "Can I schedule posts in advance?",
    a: "Yes! Use the Publishing Calendar to schedule posts up to 6 months ahead.",
  },
  {
    q: "How do I upgrade my plan?",
    a: "Visit the Billing page and click 'Upgrade to Elite' to see available plans.",
  },
];

export default function SupportPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Support Center</h1>
          <p className="text-slate-500">Get help and find answers to your questions</p>
        </header>

        {/* Search */}
        <Card className="p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </Card>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center hover:border-primary/30 transition-smooth cursor-pointer">
            <div className="w-12 h-12 bg-lavender dark:bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Live Chat</h3>
            <p className="text-sm text-slate-500 mb-4">Chat with our support team</p>
            <button className="text-primary text-sm font-semibold hover:underline">
              Start Chat
            </button>
          </Card>

          <Card className="p-6 text-center hover:border-primary/30 transition-smooth cursor-pointer">
            <div className="w-12 h-12 bg-mint dark:bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="font-bold mb-2">Email Support</h3>
            <p className="text-sm text-slate-500 mb-4">Get help via email</p>
            <button className="text-primary text-sm font-semibold hover:underline">
              Send Email
            </button>
          </Card>

          <Card className="p-6 text-center hover:border-primary/30 transition-smooth cursor-pointer">
            <div className="w-12 h-12 bg-peach dark:bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="font-bold mb-2">Phone Support</h3>
            <p className="text-sm text-slate-500 mb-4">Call us directly</p>
            <button className="text-primary text-sm font-semibold hover:underline">
              +1 (555) 123-4567
            </button>
          </Card>
        </div>

        {/* FAQs */}
        <Card className="p-6">
          <h2 className="text-lg font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="pb-4 border-b border-slate-100 dark:border-slate-800 last:border-0"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}
