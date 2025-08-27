
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Bell, Shield, Database, Users, Info } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your dashboard preferences and system configuration.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Notifications Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Configure how you receive notifications about system events.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch id="email-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sms-notifications">SMS Alerts</Label>
              <Switch id="sms-notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="system-alerts">System Alerts</Label>
              <Switch id="system-alerts" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security
            </CardTitle>
            <CardDescription>
              Manage security preferences and access controls.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="two-factor">Two-Factor Authentication</Label>
              <Switch id="two-factor" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="session-timeout">Auto Session Timeout</Label>
              <Switch id="session-timeout" defaultChecked />
            </div>
            <Separator />
            <div className="space-y-2">
              <Button variant="outline" size="sm">Change Password</Button>
              <Button variant="outline" size="sm">Download Audit Log</Button>
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Data Management
            </CardTitle>
            <CardDescription>
              Configure data retention and export settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-backup">Automatic Backups</Label>
              <Switch id="auto-backup" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="data-retention">Extended Data Retention</Label>
              <Switch id="data-retention" />
            </div>
            <Separator />
            <div className="space-y-2">
              <Button variant="outline" size="sm">Export All Data</Button>
              <Button variant="outline" size="sm">Database Health Check</Button>
            </div>
          </CardContent>
        </Card>

        {/* User Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              User Management
            </CardTitle>
            <CardDescription>
              Manage user access and permissions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="user-registration">Allow User Registration</Label>
              <Switch id="user-registration" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="admin-approval">Require Admin Approval</Label>
              <Switch id="admin-approval" defaultChecked />
            </div>
            <Separator />
            <div className="space-y-2">
              <Button variant="outline" size="sm">Manage Users</Button>
              <Button variant="outline" size="sm">View Access Logs</Button>
            </div>
          </CardContent>
        </Card>

        {/* System Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              System Information
            </CardTitle>
            <CardDescription>
              View system status and version information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">System Version:</span>
                <span className="ml-2 text-muted-foreground">v2.1.0</span>
              </div>
              <div>
                <span className="font-medium">Last Updated:</span>
                <span className="ml-2 text-muted-foreground">Jan 15, 2025</span>
              </div>
              <div>
                <span className="font-medium">Database Status:</span>
                <span className="ml-2 text-green-600">Healthy</span>
              </div>
              <div>
                <span className="font-medium">Server Status:</span>
                <span className="ml-2 text-green-600">Online</span>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <Button variant="outline" size="sm">Check for Updates</Button>
              <Button variant="outline" size="sm">View System Logs</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;
