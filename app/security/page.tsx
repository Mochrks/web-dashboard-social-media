import SecurityPage from "@/components/pages/security";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security | Insightly",
  description: "Protect your account with advanced security features",
};

export default function Page() {
  return <SecurityPage />;
}
