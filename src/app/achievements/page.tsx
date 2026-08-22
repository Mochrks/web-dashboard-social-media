import AchievementsPage from "@/components/pages/achievements";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements | Insightly",
  description: "Track your milestones and unlock rewards",
};

export default function Page() {
  return <AchievementsPage />;
}
