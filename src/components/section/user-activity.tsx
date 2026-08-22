"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const userActivity = [
  {
    user: "Alice Johnson",
    action: "Posted a new status",
    timestamp: "2023-06-01T09:00:00",
  },
  {
    user: "Bob Smith",
    action: "Liked a post",
    timestamp: "2023-06-01T09:15:00",
  },
  {
    user: "Charlie Brown",
    action: "Commented on a photo",
    timestamp: "2023-06-01T09:30:00",
  },
  {
    user: "Diana Prince",
    action: "Shared a link",
    timestamp: "2023-06-01T09:45:00",
  },
  {
    user: "Ethan Hunt",
    action: "Updated profile picture",
    timestamp: "2023-06-01T10:00:00",
  },
];

export function UserActivity() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Action</TableHead>
          <TableHead>Timestamp</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {userActivity.map((activity, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{activity.user}</TableCell>
            <TableCell>{activity.action}</TableCell>
            <TableCell>
              {new Date(activity.timestamp).toLocaleString("en-US", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
