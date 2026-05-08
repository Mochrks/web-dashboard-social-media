import UsersPage from "@/components/pages/users";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users | Insightly",
  description: "Manage and analyze your social media users",
};

export default function Page() {
  return <UsersPage />;
}
