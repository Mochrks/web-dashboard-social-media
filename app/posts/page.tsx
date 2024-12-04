import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { PostList } from "@/components/post-list"
import { PostStats } from "@/components/post-stats"
import { PostCategories } from "@/components/post-categories"

export default function PostsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="hidden lg:block" />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto p-4 md:p-6 space-y-6">
          <h1 className="text-3xl font-bold">Posts</h1>
          <div className="grid gap-6 md:grid-cols-2">
            <PostStats />
            <PostCategories />
          </div>
          <PostList />
        </main>
      </div>
    </div>
  )
}

