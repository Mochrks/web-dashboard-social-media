"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Tech Conference", attendees: 500, engagement: 85 },
  { name: "Product Launch", attendees: 250, engagement: 92 },
  { name: "Networking Mixer", attendees: 100, engagement: 78 },
  { name: "AI Webinar", attendees: 1000, engagement: 88 },
  { name: "Hackathon", attendees: 150, engagement: 95 },
]

export function EventPerformance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Bar yAxisId="left" dataKey="attendees" fill="#8884d8" name="Attendees" />
            <Bar yAxisId="right" dataKey="engagement" fill="#82ca9d" name="Engagement %" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

