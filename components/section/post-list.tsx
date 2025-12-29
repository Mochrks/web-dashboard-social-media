"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const posts = [
  {
    id: 1,
    title: "Exploring the Future of AI",
    content: "Artificial Intelligence is rapidly evolving...",
    author: "John Doe",
    avatar: "https://avatar.vercel.sh/jdoe.png",
    date: "2023-06-01T09:00:00",
    likes: 120,
    comments: 35,
    shares: 15,
    category: "Technology",
  },
  {
    id: 2,
    title: "10 Tips for Productive Remote Work",
    content: "Working from home can be challenging...",
    author: "Jane Smith",
    avatar: "https://avatar.vercel.sh/jsmith.png",
    date: "2023-05-30T15:30:00",
    likes: 89,
    comments: 42,
    shares: 23,
    category: "Productivity",
  },
  {
    id: 3,
    title: "The Rise of Sustainable Technology",
    content: "As the world becomes more environmentally conscious...",
    author: "Alex Johnson",
    avatar: "https://avatar.vercel.sh/ajohnson.png",
    date: "2023-06-01T10:15:00",
    likes: 156,
    comments: 28,
    shares: 42,
    category: "Environment",
  },
  {
    id: 4,
    title: "Cybersecurity Best Practices for 2023",
    content: "In an increasingly digital world...",
    author: "Emily Brown",
    avatar: "https://avatar.vercel.sh/ebrown.png",
    date: "2023-05-31T16:20:00",
    likes: 102,
    comments: 19,
    shares: 31,
    category: "Security",
  },
]

export function PostList() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <Input
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button>Create Post</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src={post.avatar} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{post.author}</CardTitle>
                    <CardDescription>{new Date(post.date).toLocaleString()}</CardDescription>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit post</DropdownMenuItem>
                    <DropdownMenuItem>View analytics</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">Delete post</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{post.content}</p>
              <Badge className="mt-2">{post.category}</Badge>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="mr-2 h-4 w-4" />
                {post.comments}
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                {post.shares}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

