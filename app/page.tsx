import DashboardPage from "@/components/pages/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Insightly",
  description: "Social Media Analytics and Insights",
};

export default function Page() {
  return <DashboardPage />;
}
