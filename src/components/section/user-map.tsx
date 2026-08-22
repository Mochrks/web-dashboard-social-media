"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function UserMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-[4/3] relative bg-slate-50 dark:bg-slate-900 rounded-md overflow-hidden">
          <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800">
            {/* This is a placeholder for the map. In a real application, you would use a mapping library like react-leaflet or google-maps-react */}
            <div className="absolute top-1/4 left-1/4 animate-pulse">
              <MapPin className="h-6 w-6 text-red-500" />
            </div>
            <div className="absolute top-1/2 left-1/2 animate-pulse">
              <MapPin className="h-6 w-6 text-blue-500" />
            </div>
            <div className="absolute bottom-1/4 right-1/4 animate-pulse">
              <MapPin className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
