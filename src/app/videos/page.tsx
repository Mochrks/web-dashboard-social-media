import VideosPage from "@/components/pages/videos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos | Insightly",
  description: "Manage and analyze your video performance",
};

export default function Page() {
  return <VideosPage />;
}
