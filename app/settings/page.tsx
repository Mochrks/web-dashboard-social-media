import SettingsPage from "@/components/pages/settings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | Insightly",
  description: "Manage your account security and preferences",
};

export default function Page() {
  return <SettingsPage />;
}
