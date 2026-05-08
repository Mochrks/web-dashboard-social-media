import CompetitorsPage from "@/components/pages/competitors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competitors | Insightly",
  description: "Track and compare your competitors' performance",
};

export default function Page() {
  return <CompetitorsPage />;
}
