import PostsPage from "@/components/pages/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts | Insightly",
  description: "Manage and analyze your social media posts",
};

export default function Page() {
  return <PostsPage />;
}
