import ReportsPage from "@/components/pages/reports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports | Insightly",
  description: "Download and view your analytics reports",
};

export default function Page() {
  return <ReportsPage />;
}
