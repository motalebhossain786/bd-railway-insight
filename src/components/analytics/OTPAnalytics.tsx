import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, MessageSquareX, Send, CheckCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, FunnelChart, Funnel, LabelList, Cell } from "recharts";
import { mockOTPStats, mockOTPTrend } from "@/lib/mock-data";

const funnelData = [
  { name: 'SMS Sent', value: mockOTPStats.totalSent, fill: 'hsl(var(--chart-primary))' },
  { name: 'SMS Used', value: mockOTPStats.totalUsed, fill: 'hsl(var(--chart-success))' },
];

export function OTPAnalytics() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-card to-primary/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total SMS Sent</CardTitle>
            <Send className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockOTPStats.totalSent.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-destructive/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">SMS Failed</CardTitle>
            <MessageSquareX className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{mockOTPStats.totalFailed.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {((mockOTPStats.totalFailed / mockOTPStats.totalSent) * 100).toFixed(1)}% failure rate
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-success/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">SMS Used</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{mockOTPStats.totalUsed.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {((mockOTPStats.totalUsed / (mockOTPStats.totalSent - mockOTPStats.totalFailed)) * 100).toFixed(1)}% utilization
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-warning/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <MessageSquare className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{mockOTPStats.successRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">
              Delivery success rate
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Success vs Failed Chart */}
        <Card>
          <CardHeader>
            <CardTitle>SMS Success vs Failed</CardTitle>
            <CardDescription>Daily comparison of SMS delivery status</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockOTPTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="sent" fill="hsl(var(--chart-primary))" name="Sent" />
                <Bar dataKey="used" fill="hsl(var(--chart-success))" name="Used" />
                <Bar dataKey="failed" fill="hsl(var(--chart-error))" name="Failed" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* SMS Usage Funnel */}
        <Card>
          <CardHeader>
            <CardTitle>SMS Usage Funnel</CardTitle>
            <CardDescription>From sent to actual usage</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <div className="w-full bg-chart-primary/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{mockOTPStats.totalSent.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">SMS Sent</div>
                </div>
                <div className="text-2xl">↓</div>
                <div className="w-4/5 bg-chart-success/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-success">{mockOTPStats.totalUsed.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">SMS Used</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {((mockOTPStats.totalUsed / mockOTPStats.totalSent) * 100).toFixed(1)}% conversion rate
                  </div>
                </div>
              </div>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Daily SMS Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Daily SMS Trend</CardTitle>
          <CardDescription>SMS delivery and usage trends over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockOTPTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="sent" 
                stroke="hsl(var(--chart-primary))" 
                strokeWidth={2}
                name="SMS Sent"
              />
              <Line 
                type="monotone" 
                dataKey="used" 
                stroke="hsl(var(--chart-success))" 
                strokeWidth={2}
                name="SMS Used"
              />
              <Line 
                type="monotone" 
                dataKey="failed" 
                stroke="hsl(var(--chart-error))" 
                strokeWidth={2}
                name="SMS Failed"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}