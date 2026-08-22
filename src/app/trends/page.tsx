import TrendsPage from "@/components/pages/trends";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trends | Insightly",
  description: "Discover what's trending in your industry",
};

export default function Page() {
  return <TrendsPage />;
}
