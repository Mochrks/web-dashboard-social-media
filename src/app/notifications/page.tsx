import NotificationsPage from "@/components/pages/notifications";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications | Insightly",
  description: "Stay updated with your latest activities",
};

export default function Page() {
  return <NotificationsPage />;
}
