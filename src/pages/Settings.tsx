import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Palette,
  Save
} from "lucide-react";

const settingsSections = [
  {
    id: "profile",
    title: "Profile Settings",
    icon: User,
    description: "Manage your personal information and preferences"
  },
  {
    id: "notifications",
    title: "Notifications",
    icon: Bell,
    description: "Configure how and when you receive notifications"
  },
  {
    id: "security",
    title: "Security & Privacy", 
    icon: Shield,
    description: "Manage your account security and privacy settings"
  },
  {
    id: "billing",
    title: "Billing & Plan",
    icon: CreditCard,
    description: "View your subscription and manage billing information"
  },
  {
    id: "appearance",
    title: "Appearance",
    icon: Palette,
    description: "Customize the look and feel of your workspace"
  }
];

export default function Settings() {
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences and application settings.
        </p>
      </div>

      <div className="space-y-8">
        {/* Profile Settings */}
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <CardTitle>Profile Information</CardTitle>
            </div>
            <CardDescription>
              Update your personal information and profile details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" defaultValue="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" defaultValue="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" placeholder="Tell us about yourself..." rows={3} />
            </div>
            <Button className="bg-gradient-primary">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Bell className="w-5 h-5" />
              <CardTitle>Notification Preferences</CardTitle>
            </div>
            <CardDescription>
              Choose how you want to be notified about important events
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive emails about your account activity</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Get push notifications in your browser</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Marketing Emails</Label>
                  <p className="text-sm text-muted-foreground">Receive emails about new features and updates</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <CardTitle>Security & Privacy</CardTitle>
            </div>
            <CardDescription>
              Manage your account security and privacy settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label className="text-base font-medium">Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground mb-3">Add an extra layer of security to your account</p>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary">Not Enabled</Badge>
                  <Button variant="outline" size="sm">Enable 2FA</Button>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="text-base font-medium">Password</Label>
                <p className="text-sm text-muted-foreground mb-3">Last changed 3 months ago</p>
                <Button variant="outline" size="sm">Change Password</Button>
              </div>
              <Separator />
              <div>
                <Label className="text-base font-medium">Active Sessions</Label>
                <p className="text-sm text-muted-foreground mb-3">Manage devices that are logged into your account</p>
                <Button variant="outline" size="sm">View Sessions</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Billing */}
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5" />
              <CardTitle>Billing & Subscription</CardTitle>
            </div>
            <CardDescription>
              Manage your subscription and billing information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-accent">
              <div>
                <h3 className="font-semibold text-accent-foreground">Pro Plan</h3>
                <p className="text-sm text-accent-foreground/80">$29/month • Renews on Jan 15, 2024</p>
              </div>
              <Badge className="bg-primary text-primary-foreground">Active</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline">Manage Subscription</Button>
              <Button variant="outline">Download Invoices</Button>
            </div>
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Palette className="w-5 h-5" />
              <CardTitle>Appearance</CardTitle>
            </div>
            <CardDescription>
              Customize how the application looks and feels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label className="text-base font-medium">Theme</Label>
                <p className="text-sm text-muted-foreground mb-3">Choose your preferred color scheme</p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Light</Button>
                  <Button variant="outline" size="sm">Dark</Button>
                  <Button variant="outline" size="sm">System</Button>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Compact Mode</Label>
                  <p className="text-sm text-muted-foreground">Use a more compact interface layout</p>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}