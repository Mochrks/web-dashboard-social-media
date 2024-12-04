"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", likes: 4000, comments: 2400, shares: 2400 },
  { name: "Feb", likes: 3000, comments: 1398, shares: 2210 },
  { name: "Mar", likes: 2000, comments: 9800, shares: 2290 },
  { name: "Apr", likes: 2780, comments: 3908, shares: 2000 },
  { name: "May", likes: 1890, comments: 4800, shares: 2181 },
  { name: "Jun", likes: 2390, comments: 3800, shares: 2500 },
  { name: "Jul", likes: 3490, comments: 4300, shares: 2100 },
]

export function EngagementChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Engagement Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="likes" stroke="#8884d8" />
            <Line type="monotone" dataKey="comments" stroke="#82ca9d" />
            <Line type="monotone" dataKey="shares" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

