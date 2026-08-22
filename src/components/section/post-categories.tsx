import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  { name: "Technology", count: 45 },
  { name: "Productivity", count: 32 },
  { name: "Environment", count: 28 },
  { name: "Security", count: 24 },
  { name: "Health", count: 20 },
  { name: "Finance", count: 18 },
  { name: "Travel", count: 15 },
  { name: "Food", count: 12 },
];

export function PostCategories() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Post Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category.name} variant="secondary">
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
