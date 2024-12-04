import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentPosts = [
  {
    id: 1,
    title: "Exploring the Future of AI",
    author: "John Doe",
    avatar: "/avatars/01.png",
    initials: "JD",
    date: "2 hours ago",
  },
  {
    id: 2,
    title: "10 Tips for Productive Remote Work",
    author: "Jane Smith",
    avatar: "/avatars/02.png",
    initials: "JS",
    date: "5 hours ago",
  },
  {
    id: 3,
    title: "The Rise of Sustainable Technology",
    author: "Alex Johnson",
    avatar: "/avatars/03.png",
    initials: "AJ",
    date: "1 day ago",
  },
  {
    id: 4,
    title: "Cybersecurity Best Practices for 2023",
    author: "Emily Brown",
    avatar: "/avatars/04.png",
    initials: "EB",
    date: "2 days ago",
  },
]

export function RecentPosts() {
  return (
    <div className="space-y-8">
      {recentPosts.map((post) => (
        <div key={post.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={post.avatar} alt={post.author} />
            <AvatarFallback>{post.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{post.title}</p>
            <p className="text-sm text-muted-foreground">
              {post.author} • {post.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

