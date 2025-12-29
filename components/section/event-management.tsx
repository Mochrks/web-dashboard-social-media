"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Edit, Trash } from 'lucide-react'

const initialEvents = [
  { id: 1, title: "Tech Conference 2023", date: new Date(2023, 5, 5), description: "Annual tech conference featuring the latest in AI and blockchain." },
  { id: 2, title: "Product Launch", date: new Date(2023, 5, 12), description: "Launching our new flagship product with live demonstrations." },
  { id: 3, title: "Networking Mixer", date: new Date(2023, 5, 18), description: "Evening of networking with industry professionals and potential clients." },
]

export function EventManagement() {
  const [events, setEvents] = useState(initialEvents)
  const [newEvent, setNewEvent] = useState({ title: "", date: new Date(), description: "" })
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingEvent, setEditingEvent] = useState<number | null>(null)

  const handleAddEvent = () => {
    if (editingEvent !== null) {
      setEvents(events.map(event => event.id === editingEvent ? { ...event, ...newEvent } : event))
      setEditingEvent(null)
    } else {
      setEvents([...events, { id: events.length + 1, ...newEvent }])
    }
    setNewEvent({ title: "", date: new Date(), description: "" })
    setIsDialogOpen(false)
  }

  const handleEditEvent = (id: number) => {
    const event = events.find(e => e.id === id)
    if (event) {
      setNewEvent(event)
      setEditingEvent(id)
      setIsDialogOpen(true)
    }
  }

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Management</CardTitle>
        <CardDescription>Manage your upcoming events</CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="mb-4"><Plus className="mr-2 h-4 w-4" /> Add New Event</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{editingEvent !== null ? "Edit Event" : "Add New Event"}</DialogTitle>
              <DialogDescription>
                {editingEvent !== null ? "Make changes to your event here." : "Add the details of your new event here."}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date
                </Label>
                <div className="col-span-3">
                  <Calendar
                    mode="single"
                    selected={newEvent.date}
                    onSelect={(date) => setNewEvent({ ...newEvent, date: date || new Date() })}
                    className="rounded-md border"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddEvent}>{editingEvent !== null ? "Save Changes" : "Add Event"}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <div className="space-y-4">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.date.toDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{event.description}</p>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="outline" onClick={() => handleEditEvent(event.id)}>
                  <Edit className="mr-2 h-4 w-4" /> Edit
                </Button>
                <Button variant="destructive" onClick={() => handleDeleteEvent(event.id)}>
                  <Trash className="mr-2 h-4 w-4" /> Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

