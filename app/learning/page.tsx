import LearningPage from "@/components/pages/learning";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Center | Insightly",
  description: "Enhance your skills with our courses and tutorials",
};

export default function Page() {
  return <LearningPage />;
}
