import TeamPage from "@/components/pages/team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Insightly",
  description: "Manage your team members and permissions",
};

export default function Page() {
  return <TeamPage />;
}
