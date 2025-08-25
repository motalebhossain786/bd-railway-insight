import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Bell, Shield, Database, Users, Clock } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your dashboard preferences and system configurations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Configure notification preferences for the dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-alerts" className="flex flex-col gap-1">
                <span>Email Alerts</span>
                <span className="text-sm font-normal text-muted-foreground">
                  Receive email notifications for system alerts
                </span>
              </Label>
              <Switch id="email-alerts" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="sms-alerts" className="flex flex-col gap-1">
                <span>SMS Alerts</span>
                <span className="text-sm font-normal text-muted-foreground">
                  Receive SMS notifications for critical issues
                </span>
              </Label>
              <Switch id="sms-alerts" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-refresh" className="flex flex-col gap-1">
                <span>Auto Refresh</span>
                <span className="text-sm font-normal text-muted-foreground">
                  Automatically refresh dashboard every 5 minutes
                </span>
              </Label>
              <Switch id="auto-refresh" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security
            </CardTitle>
            <CardDescription>
              Manage security settings and access controls
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="two-factor" className="flex flex-col gap-1">
                <span>Two-Factor Authentication</span>
                <span className="text-sm font-normal text-muted-foreground">
                  Enable 2FA for enhanced security
                </span>
              </Label>
              <Switch id="two-factor" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="session-timeout" className="flex flex-col gap-1">
                <span>Auto Logout</span>
                <span className="text-sm font-normal text-muted-foreground">
                  Automatically logout after 30 minutes of inactivity
                </span>
              </Label>
              <Switch id="session-timeout" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="audit-logs" className="flex flex-col gap-1">
                <span>Audit Logging</span>
                <span className="text-sm font-normal text-muted-foreground">
                  Log all user activities for security auditing
                </span>
              </Label>
              <Switch id="audit-logs" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              Data Management
            </CardTitle>
            <CardDescription>
              Configure data retention and backup settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Data Retention Period</Label>
              <p className="text-sm text-muted-foreground">
                Analytics data will be retained for 12 months
              </p>
              <Button variant="outline" size="sm">
                Configure Retention
              </Button>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Backup Schedule</Label>
              <p className="text-sm text-muted-foreground">
                Daily backups at 2:00 AM (GMT+6)
              </p>
              <Button variant="outline" size="sm">
                Modify Schedule
              </Button>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Export Data</Label>
              <p className="text-sm text-muted-foreground">
                Export all analytics data for external analysis
              </p>
              <Button variant="outline" size="sm">
                Export All Data
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* User Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              User Management
            </CardTitle>
            <CardDescription>
              Manage user access and permissions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Active Users</Label>
              <p className="text-sm text-muted-foreground">
                3 administrators currently have access
              </p>
              <Button variant="outline" size="sm">
                Manage Users
              </Button>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Role Permissions</Label>
              <p className="text-sm text-muted-foreground">
                Configure access levels for different user roles
              </p>
              <Button variant="outline" size="sm">
                Edit Permissions
              </Button>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>API Access</Label>
              <p className="text-sm text-muted-foreground">
                Manage API keys and external integrations
              </p>
              <Button variant="outline" size="sm">
                API Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            System Information
          </CardTitle>
          <CardDescription>
            Current system status and version information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <Label className="text-sm font-medium">System Version</Label>
              <p className="text-sm text-muted-foreground">v2.1.0</p>
            </div>
            <div className="space-y-1">
              <Label className="text-sm font-medium">Last Updated</Label>
              <p className="text-sm text-muted-foreground">January 15, 2025</p>
            </div>
            <div className="space-y-1">
              <Label className="text-sm font-medium">System Status</Label>
              <p className="text-sm text-emerald-600 font-medium">Operational</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;