import MediaPage from "@/components/pages/media";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media | Insightly",
  description: "Manage your images and videos",
};

export default function Page() {
  return <MediaPage />;
}
