import { PostList } from "@/components/section/post-list";
import { PostStats } from "@/components/section/post-stats";
import { PostCategories } from "@/components/section/post-categories";

export default function PostsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Posts</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <PostStats />
        <PostCategories />
      </div>
      <PostList />
    </div>
  );
}
