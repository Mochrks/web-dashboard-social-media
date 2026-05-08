import IntegrationsPage from "@/components/pages/integrations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations | Insightly",
  description: "Connect your favorite platforms and tools",
};

export default function Page() {
  return <IntegrationsPage />;
}
