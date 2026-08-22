import AnalyticsPage from "@/components/pages/analytics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics | Insightly",
  description: "Deep dive into your performance metrics and audience behavior",
};

export default function Page() {
  return <AnalyticsPage />;
}
