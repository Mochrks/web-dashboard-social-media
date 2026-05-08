import SupportPage from "@/components/pages/support";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Insightly",
  description: "Get help and find answers to your questions",
};

export default function Page() {
  return <SupportPage />;
}
