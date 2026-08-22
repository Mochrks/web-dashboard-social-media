import CampaignsPage from "@/components/pages/campaigns";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaigns | Insightly",
  description: "Manage your marketing campaigns",
};

export default function Page() {
  return <CampaignsPage />;
}
