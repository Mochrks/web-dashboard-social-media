import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { SettingsTabs } from "@/components/settings-tabs"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="hidden lg:block" />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto p-4 md:p-6 space-y-6">
          <h1 className="text-3xl font-bold">Settings</h1>
          <SettingsTabs />
        </main>
      </div>
    </div>
  )
}

