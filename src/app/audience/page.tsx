import AudiencePage from "@/components/pages/audience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audience | Insightly",
  description: "Manage and engage with your social media audience",
};

export default function Page() {
  return <AudiencePage />;
}
