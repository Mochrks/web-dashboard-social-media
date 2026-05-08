import AutomationPage from "@/components/pages/automation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation | Insightly",
  description: "Automate your social media workflows",
};

export default function Page() {
  return <AutomationPage />;
}
