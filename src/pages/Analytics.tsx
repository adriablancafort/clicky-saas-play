import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  MousePointer, 
  Clock,
  Download
} from "lucide-react";

const metrics = [
  {
    title: "Page Views",
    value: "124,583",
    change: "+12.5%",
    icon: Eye,
    period: "Last 30 days"
  },
  {
    title: "Click-through Rate",
    value: "3.24%",
    change: "+0.8%",
    icon: MousePointer,
    period: "Last 30 days"
  },
  {
    title: "Avg. Session Duration",
    value: "4m 32s",
    change: "+1.2%",
    icon: Clock,
    period: "Last 30 days"
  },
  {
    title: "Conversion Rate",
    value: "2.67%",
    change: "-0.3%",
    icon: TrendingUp,
    period: "Last 30 days"
  }
];

const topPages = [
  { page: "/dashboard", views: "45,231", bounce: "32.4%" },
  { page: "/analytics", views: "23,456", bounce: "28.7%" },
  { page: "/settings", views: "12,890", bounce: "45.2%" },
  { page: "/team", views: "8,765", bounce: "38.9%" },
  { page: "/home", views: "6,543", bounce: "52.1%" }
];

const trafficSources = [
  { source: "Direct", visits: "42,350", percentage: 45 },
  { source: "Google", visits: "28,640", percentage: 30 },
  { source: "Social Media", visits: "14,320", percentage: 15 },
  { source: "Email", visits: "9,550", percentage: 10 }
];

export default function Analytics() {
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Analytics</h1>
          <p className="text-muted-foreground">
            Comprehensive insights into your application performance and user behavior.
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <metric.icon className="w-4 h-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">{metric.value}</div>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {metric.change}
                </Badge>
                <span className="text-xs text-muted-foreground">{metric.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {/* Chart Area */}
        <Card className="lg:col-span-2 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Traffic Overview
            </CardTitle>
            <CardDescription>
              Website traffic and user engagement over the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-gradient-accent rounded-lg flex items-center justify-center">
              <div className="text-center text-accent-foreground/60">
                <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Interactive Chart</p>
                <p className="text-sm">Traffic visualization would be displayed here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Where your visitors are coming from</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{source.source}</span>
                  <span className="text-muted-foreground">{source.visits}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all"
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Top Pages */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Top Pages</CardTitle>
          <CardDescription>Most visited pages in your application</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                <div className="flex-1">
                  <span className="font-medium">{page.page}</span>
                </div>
                <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                  <div className="text-right">
                    <p className="font-medium text-foreground">{page.views}</p>
                    <p>views</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">{page.bounce}</p>
                    <p>bounce rate</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}