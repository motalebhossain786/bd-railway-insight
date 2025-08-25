import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, UserX, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  mockRegistrationStats, 
  mockRegistrationTrend, 
  mockFailureReasons, 
  mockDailySummary 
} from "@/lib/mock-data";

const COLORS = ['hsl(var(--chart-error))', 'hsl(var(--chart-warning))', 'hsl(var(--chart-tertiary))', 'hsl(var(--chart-secondary))', 'hsl(var(--chart-primary))'];

export function RegistrationAnalytics() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-card to-primary/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Attempts</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockRegistrationStats.totalAttempts.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-success/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Count</CardTitle>
            <UserCheck className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{mockRegistrationStats.successCount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {mockRegistrationStats.successRate}% success rate
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-destructive/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Count</CardTitle>
            <UserX className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{mockRegistrationStats.failedCount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {(100 - mockRegistrationStats.successRate).toFixed(1)}% failure rate
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-warning/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Trend</CardTitle>
            <TrendingUp className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">+8.5%</div>
            <p className="text-xs text-muted-foreground">
              Compared to last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trend Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Registration Attempts vs Success Trend</CardTitle>
            <CardDescription>7-day trend analysis</CardDescription>
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
                  name="Attempts"
                />
                <Line 
                  type="monotone" 
                  dataKey="success" 
                  stroke="hsl(var(--chart-success))" 
                  strokeWidth={2}
                  name="Success"
                />
                <Line 
                  type="monotone" 
                  dataKey="failed" 
                  stroke="hsl(var(--chart-error))" 
                  strokeWidth={2}
                  name="Failed"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Failure Reasons */}
        <Card>
          <CardHeader>
            <CardTitle>Failure Reason Breakdown</CardTitle>
            <CardDescription>Distribution of registration failures</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mockFailureReasons}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                  label={({ reason, percentage }) => `${reason}: ${percentage}%`}
                >
                  {mockFailureReasons.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Daily Summary Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Registration Summary</CardTitle>
          <CardDescription>Detailed breakdown by date</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Total Attempts</TableHead>
                <TableHead className="text-right">Success Count</TableHead>
                <TableHead className="text-right">Failed Count</TableHead>
                <TableHead className="text-right">Success Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDailySummary.map((day) => (
                <TableRow key={day.date}>
                  <TableCell className="font-medium">{day.date}</TableCell>
                  <TableCell className="text-right">{day.totalAttempts.toLocaleString()}</TableCell>
                  <TableCell className="text-right text-success">{day.successCount.toLocaleString()}</TableCell>
                  <TableCell className="text-right text-destructive">{day.failedCount.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{day.successRate.toFixed(1)}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}