import BillingPage from "@/components/pages/billing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billing | Insightly",
  description: "Manage your subscription and payment methods",
};

export default function Page() {
  return <BillingPage />;
}
