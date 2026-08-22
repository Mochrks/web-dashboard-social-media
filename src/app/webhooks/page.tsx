import WebhooksPage from "@/components/pages/webhooks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webhooks | Insightly",
  description: "Receive real-time notifications for events",
};

export default function Page() {
  return <WebhooksPage />;
}
