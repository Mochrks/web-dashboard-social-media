import MessagesPage from "@/components/pages/messages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages | Insightly",
  description: "Engage with your community and discover new opportunities",
};

export default function Page() {
  return <MessagesPage />;
}
