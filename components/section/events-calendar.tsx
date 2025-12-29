"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const events = [
  { date: new Date(2023, 5, 5), title: "Tech Conference 2023", attendees: 500 },
  { date: new Date(2023, 5, 12), title: "Product Launch", attendees: 250 },
  { date: new Date(2023, 5, 18), title: "Networking Mixer", attendees: 100 },
  { date: new Date(2023, 5, 25), title: "Webinar: Future of AI", attendees: 1000 },
];

export function EventsCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card>
      <CardHeader>
        <CardTitle>Events Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          components={{
            Day: ({ date, ...props }) => {
              const event = events.find((e) => e.date.toDateString() === date.toDateString());
              if (event) {
                return (
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div {...props} className="relative">
                        <Badge
                          variant="secondary"
                          className="absolute top-0 right-0 -mr-1 -mt-1 h-2 w-2 rounded-full p-0"
                        />
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">{event.title}</h4>
                          <p className="text-sm">Attendees: {event.attendees}</p>
                          <div className="flex items-center pt-2">
                            <Calendar className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">
                              {event.date.toDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                );
              }
              return null;
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
