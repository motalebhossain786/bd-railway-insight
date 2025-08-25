import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, Clock, Activity, TrendingUp, AlertTriangle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { Badge } from "@/components/ui/badge";
import { 
  mockRegistrationStats, 
  mockOTPStats, 
  mockTicketCompletionStats,
  mockRegistrationTrend,
  mockFailureReasons 
} from "@/lib/mock-data";

const COLORS = ['hsl(var(--chart-primary))', 'hsl(var(--chart-success))', 'hsl(var(--chart-warning))', 'hsl(var(--chart-error))'];

const overviewData = [
  {
    name: 'Registration',
    attempts: mockRegistrationStats.totalAttempts,
    success: mockRegistrationStats.successCount,
    failed: mockRegistrationStats.failedCount
  },
  {
    name: 'OTP SMS',
    attempts: mockOTPStats.totalSent,
    success: mockOTPStats.totalUsed,
    failed: mockOTPStats.totalFailed
  }
];

export function OverviewDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-card to-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockRegistrationStats.totalAttempts.toLocaleString()}</div>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="secondary" className="text-xs">
                {mockRegistrationStats.successRate}% success
              </Badge>
              <span className="text-xs text-success">+12%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-success/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">SMS Delivery</CardTitle>
            <MessageSquare className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockOTPStats.totalSent.toLocaleString()}</div>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="secondary" className="text-xs">
                {mockOTPStats.successRate}% delivered
              </Badge>
              <span className="text-xs text-success">+8%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-warning/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Completion</CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockTicketCompletionStats.nonPeakHour.avg}</div>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline" className="text-xs">
                Non-peak optimal
              </Badge>
              <span className="text-xs text-destructive">+50% peak</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-destructive/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <Activity className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">98.5%</div>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="secondary" className="text-xs">
                Uptime
              </Badge>
              <span className="text-xs text-success">Excellent</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Registration Trend */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Registration & SMS Trends</CardTitle>
            <CardDescription>7-day performance overview</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockRegistrationTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="attempts" 
                  stroke="hsl(var(--chart-primary))" 
                  strokeWidth={2}
                  name="Registration Attempts"
                />
                <Line 
                  type="monotone" 
                  dataKey="success" 
                  stroke="hsl(var(--chart-success))" 
                  strokeWidth={2}
                  name="Successful Registrations"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Failure Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Failure Analysis</CardTitle>
            <CardDescription>Top failure reasons</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mockFailureReasons.slice(0, 4)}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                  label={({ percentage }) => `${percentage}%`}
                >
                  {mockFailureReasons.slice(0, 4).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {mockFailureReasons.slice(0, 4).map((reason, index) => (
                <div key={reason.reason} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: COLORS[index] }} />
                    <span className="text-xs">{reason.reason}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{reason.percentage}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Overview */}
      <Card>
        <CardHeader>
          <CardTitle>System Performance Overview</CardTitle>
          <CardDescription>Registration vs SMS delivery performance comparison</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={overviewData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="attempts" fill="hsl(var(--chart-tertiary))" name="Total Attempts" />
              <Bar dataKey="success" fill="hsl(var(--chart-success))" name="Successful" />
              <Bar dataKey="failed" fill="hsl(var(--chart-error))" name="Failed" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Alerts & Notifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-warning">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-warning" />
              System Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-sm">
                <div className="font-medium">Peak hour performance degradation</div>
                <div className="text-xs text-muted-foreground">Completion times increased by 50% during 08:00-09:00</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">SMS delivery spike</div>
                <div className="text-xs text-muted-foreground">15% increase in SMS volume detected</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-success">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-success" />
              Performance Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-sm">
                <div className="font-medium">Registration success improving</div>
                <div className="text-xs text-muted-foreground">80% success rate maintained this week</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Optimal SMS delivery</div>
                <div className="text-xs text-muted-foreground">94% delivery rate exceeds target</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}