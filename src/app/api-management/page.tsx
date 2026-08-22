import APIManagementPage from "@/components/pages/api-management";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Management | Insightly",
  description: "Manage your API keys and monitor usage",
};

export default function Page() {
  return <APIManagementPage />;
}
