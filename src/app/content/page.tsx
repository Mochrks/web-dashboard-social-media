import ContentPage from "@/components/pages/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content | Insightly",
  description: "Manage all your content in one place",
};

export default function Page() {
  return <ContentPage />;
}
