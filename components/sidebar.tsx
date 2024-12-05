"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, FileText, Settings, } from 'lucide-react'

const sidebarItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Users", icon: Users, href: "/users" },
  { name: "Posts", icon: FileText, href: "/posts" },
  { name: "Settings", icon: Settings, href: "/settings" },
]

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Sidebar({ className }: SidebarProps) {

  return (
    <div className="w-[5px] md:w-[20rem] border-0 md:border-r">
      <aside className={cn("pb-12 hidden md:block fixed left-4 top-4 z-40 ", className)}>
        <SidebarContent />
      </aside>
    </div >
  )
}

export const SidebarContent = () => {
  const pathname = usePathname()

  return (
    <div className="space-y-5 py-4  w-[19rem]">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Social Media CMS
        </h2>
        <div className="flex flex-col gap-2 mt-5 ">
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

