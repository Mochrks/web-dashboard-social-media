"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const postData = [
  { name: "Mon", posts: 4, engagement: 400 },
  { name: "Tue", posts: 3, engagement: 300 },
  { name: "Wed", posts: 2, engagement: 500 },
  { name: "Thu", posts: 5, engagement: 780 },
  { name: "Fri", posts: 3, engagement: 400 },
  { name: "Sat", posts: 6, engagement: 600 },
  { name: "Sun", posts: 4, engagement: 400 },
];

export function PostStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Post Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="posts">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={postData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="posts" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="engagement">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={postData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="engagement" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
