"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, FileText, BarChart2, Settings, Menu } from 'lucide-react'

const sidebarItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Users", icon: Users, href: "/users" },
  { name: "Posts", icon: FileText, href: "/posts" },
  { name: "Analytics", icon: BarChart2, href: "/analytics" },
  { name: "Settings", icon: Settings, href: "/settings" },
]

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="md:hidden fixed left-4 top-4 z-40"
            size="icon"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
      <aside className={cn("pb-12 hidden md:block", className)}>
        <SidebarContent />
      </aside>
    </>
  )
}

function SidebarContent() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Social Media CMS
        </h2>
        <div className="space-y-1">
          {sidebarItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

