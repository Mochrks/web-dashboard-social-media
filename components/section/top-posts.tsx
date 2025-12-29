import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const topPosts = [
  {
    id: 1,
    title: "10 Tips for Productive Remote Work",
    author: "Jane Smith",
    avatar: "https://avatar.vercel.sh/jsmith.png",
    category: "Productivity",
    views: 15420,
    likes: 1023,
    comments: 89,
  },
  {
    id: 2,
    title: "The Future of Artificial Intelligence",
    author: "John Doe",
    avatar: "https://avatar.vercel.sh/jdoe.png",
    category: "Technology",
    views: 12350,
    likes: 892,
    comments: 76,
  },
  {
    id: 3,
    title: "Healthy Eating Habits for Busy Professionals",
    author: "Emily Brown",
    avatar: "https://avatar.vercel.sh/ebrown.png",
    category: "Health",
    views: 10980,
    likes: 756,
    comments: 62,
  },
];

export function TopPosts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performing Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {topPosts.map((post) => (
            <div key={post.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={post.avatar} alt={post.author} />
                <AvatarFallback>{post.author[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{post.title}</p>
                <p className="text-sm text-muted-foreground">
                  {post.author} • {post.category}
                </p>
              </div>
              <div className="ml-auto font-medium">
                <div className="text-right">{post.views.toLocaleString()} views</div>
                <div className="text-sm text-muted-foreground">
                  {post.likes} likes • {post.comments} comments
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
