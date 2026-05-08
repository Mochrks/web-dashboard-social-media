import HashtagsPage from "@/components/pages/hashtags";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hashtags | Insightly",
  description: "Track and optimize your hashtag performance",
};

export default function Page() {
  return <HashtagsPage />;
}
