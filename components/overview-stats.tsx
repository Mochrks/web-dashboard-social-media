import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, ThumbsUp, Share2 } from 'lucide-react'

const stats = [
  { title: "Total Users", value: "10,245", icon: Users, change: "+5.25%" },
  { title: "Total Posts", value: "1,324", icon: FileText, change: "+2.74%" },
  { title: "Engagement Rate", value: "24.8%", icon: ThumbsUp, change: "+1.23%" },
  { title: "Shares", value: "8,765", icon: Share2, change: "+7.45%" },
]

export function OverviewStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
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
              {stat.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

