"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const userData = [
  { name: "Jan", newUsers: 400, activeUsers: 2400 },
  { name: "Feb", newUsers: 300, activeUsers: 2210 },
  { name: "Mar", newUsers: 200, activeUsers: 2290 },
  { name: "Apr", newUsers: 278, activeUsers: 2000 },
  { name: "May", newUsers: 189, activeUsers: 2181 },
  { name: "Jun", newUsers: 239, activeUsers: 2500 },
  { name: "Jul", newUsers: 349, activeUsers: 2100 },
]

export function UserStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="newUsers">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="newUsers">New Users</TabsTrigger>
            <TabsTrigger value="activeUsers">Active Users</TabsTrigger>
          </TabsList>
          <TabsContent value="newUsers">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="newUsers" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="activeUsers">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

