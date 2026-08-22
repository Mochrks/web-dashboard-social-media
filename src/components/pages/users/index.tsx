import { UserList } from "@/components/section/user-list";
import { UserStats } from "@/components/section/user-stats";
import { UserMap } from "@/components/section/user-map";

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Users</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <UserStats />
        <UserMap />
      </div>
      <UserList />
    </div>
  );
}
