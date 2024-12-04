import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { UserList } from "@/components/user-list"
import { UserStats } from "@/components/user-stats"
import { UserMap } from "@/components/user-map"

export default function UsersPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="hidden lg:block" />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto p-4 md:p-6 space-y-6">
          <h1 className="text-3xl font-bold">Users</h1>
          <div className="grid gap-6 md:grid-cols-2">
            <UserStats />
            <UserMap />
          </div>
          <UserList />
        </main>
      </div>
    </div>
  )
}

