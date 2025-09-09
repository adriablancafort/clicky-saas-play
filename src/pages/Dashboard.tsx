import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  DollarSign, 
  Activity, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    changeType: "positive" as const,
    icon: DollarSign
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+180",
    changeType: "positive" as const,
    icon: Users
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "-0.4%",
    changeType: "negative" as const,
    icon: Activity
  },
  {
    title: "Growth Rate",
    value: "12.5%",
    change: "+4.3%",
    changeType: "positive" as const,
    icon: TrendingUp
  }
];

const recentActivity = [
  { user: "Alice Johnson", action: "Upgraded to Pro plan", time: "2 minutes ago" },
  { user: "Bob Smith", action: "Created new project", time: "5 minutes ago" },
  { user: "Carol Davis", action: "Invited 3 team members", time: "12 minutes ago" },
  { user: "David Wilson", action: "Completed onboarding", time: "1 hour ago" },
  { user: "Emma Brown", action: "Downloaded report", time: "2 hours ago" }
];

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="flex items-center text-sm">
                {stat.changeType === 'positive' ? (
                  <ArrowUpRight className="w-4 h-4 text-green-600 mr-1" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-600 mr-1" />
                )}
                <span className={stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>
                <span className="text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Progress Cards */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Monthly Goals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Revenue Target</span>
                  <span className="text-sm text-muted-foreground">$45,231 / $50,000</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">User Acquisition</span>
                  <span className="text-sm text-muted-foreground">2,350 / 3,000</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Project Completion</span>
                  <span className="text-sm text-muted-foreground">14 / 20</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 bg-gradient-accent rounded-lg flex items-center justify-center">
                <div className="text-center text-accent-foreground/60">
                  <Activity className="w-12 h-12 mx-auto mb-2" />
                  <p>Chart visualization would go here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{activity.user}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}