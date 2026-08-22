import PublishingPage from "@/components/pages/publishing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publishing | Insightly",
  description: "Plan and manage your upcoming social media posts",
};

export default function Page() {
  return <PublishingPage />;
}
