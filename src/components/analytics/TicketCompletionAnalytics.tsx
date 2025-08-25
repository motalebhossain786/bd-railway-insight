import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, TrendingUp, Timer, Activity } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Badge } from "@/components/ui/badge";
import { mockTicketCompletionStats, mockCompletionTrend } from "@/lib/mock-data";

const comparisonData = [
  {
    period: 'Peak Hour (08:00-09:00)',
    min: 154, // 2:34 in seconds
    max: 525, // 8:45 in seconds
    avg: 252  // 4:12 in seconds
  },
  {
    period: 'Non-Peak Hour (12:00-13:00)',
    min: 88,  // 1:28 in seconds
    max: 332, // 5:32 in seconds
    avg: 168  // 2:48 in seconds
  }
];

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export function TicketCompletionAnalytics() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-card to-primary/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peak Hour Average</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockTicketCompletionStats.peakHour.avg}</div>
            <p className="text-xs text-muted-foreground">
              08:00 - 09:00 completion time
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-success/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Non-Peak Average</CardTitle>
            <Timer className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{mockTicketCompletionStats.nonPeakHour.avg}</div>
            <p className="text-xs text-muted-foreground">
              12:00 - 13:00 completion time
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-warning/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peak vs Non-Peak</CardTitle>
            <TrendingUp className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">+50%</div>
            <p className="text-xs text-muted-foreground">
              Longer during peak hours
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-destructive/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peak Max Time</CardTitle>
            <Activity className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{mockTicketCompletionStats.peakHour.max}</div>
            <p className="text-xs text-muted-foreground">
              Maximum completion time
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Comparison Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Peak Hour Analysis (08:00-09:00)</CardTitle>
            <CardDescription>Completion time statistics during peak hours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Minimum Time:</span>
                <Badge variant="outline">{mockTicketCompletionStats.peakHour.min}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Average Time:</span>
                <Badge variant="secondary">{mockTicketCompletionStats.peakHour.avg}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Maximum Time:</span>
                <Badge variant="destructive">{mockTicketCompletionStats.peakHour.max}</Badge>
              </div>
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground">
                  Peak hours show increased completion times due to high system load and user traffic.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Non-Peak Hour Analysis (12:00-13:00)</CardTitle>
            <CardDescription>Completion time statistics during non-peak hours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Minimum Time:</span>
                <Badge variant="outline">{mockTicketCompletionStats.nonPeakHour.min}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Average Time:</span>
                <Badge variant="secondary">{mockTicketCompletionStats.nonPeakHour.avg}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Maximum Time:</span>
                <Badge variant="destructive">{mockTicketCompletionStats.nonPeakHour.max}</Badge>
              </div>
              <div className="mt-4 p-3 bg-success/10 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  Non-peak hours provide optimal performance with faster completion times.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Comparison Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Peak vs Non-Peak Comparison</CardTitle>
            <CardDescription>Completion time comparison in seconds</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="period" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  formatter={(value: number) => [formatTime(value), '']}
                  labelFormatter={(label) => label}
                />
                <Bar dataKey="min" fill="hsl(var(--chart-success))" name="Minimum" />
                <Bar dataKey="avg" fill="hsl(var(--chart-primary))" name="Average" />
                <Bar dataKey="max" fill="hsl(var(--chart-error))" name="Maximum" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Completion Time Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Completion Time Trend</CardTitle>
            <CardDescription>Average completion times throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockCompletionTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" tick={{ fontSize: 12 }} />
                <YAxis 
                  tick={{ fontSize: 12 }} 
                  tickFormatter={(value) => formatTime(value)}
                />
                <Tooltip 
                  formatter={(value: number) => [formatTime(value), '']}
                  labelFormatter={(label) => `Time: ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="peakCompletion" 
                  stroke="hsl(var(--chart-error))" 
                  strokeWidth={2}
                  name="Peak Hours"
                />
                <Line 
                  type="monotone" 
                  dataKey="nonPeakCompletion" 
                  stroke="hsl(var(--chart-success))" 
                  strokeWidth={2}
                  name="Non-Peak Hours"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}