import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { OverviewStats } from "@/components/overview-stats"
import { EngagementChart } from "@/components/engagement-chart"
import { TopPosts } from "@/components/top-posts"
import { AudienceDemographics } from "@/components/audience-demographics"
import { EventsOverview } from "@/components/events-overview"
import { EventsCalendar } from "@/components/events-calendar"
import { EventPerformance } from "@/components/event-performance"
import { EventManagement } from "@/components/event-management"

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="hidden lg:block" />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto p-4 md:p-6 space-y-6">
          <h1 className="text-3xl font-bold">Analytics</h1>
          <OverviewStats />
          <div className="grid gap-6 md:grid-cols-2">
            <EngagementChart />
            <AudienceDemographics />
          </div>
          <TopPosts />
          <h2 className="text-2xl font-semibold mt-8">Events Analytics</h2>
          <EventsOverview />
          <div className="grid gap-6 md:grid-cols-2">
            <EventsCalendar />
            <EventPerformance />
          </div>
          <EventManagement />
        </main>
      </div>
    </div>
  )
}

