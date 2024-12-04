import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, Ticket, TrendingUp } from 'lucide-react'

const eventStats = [
  { title: "Total Events", value: "24", icon: Calendar, change: "+2 this month" },
  { title: "Total Attendees", value: "1,234", icon: Users, change: "+15% vs last month" },
  { title: "Ticket Sales", value: "$12,345", icon: Ticket, change: "+20% vs last month" },
  { title: "Engagement Rate", value: "87%", icon: TrendingUp, change: "+5% vs last month" },
]

export function EventsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {eventStats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

