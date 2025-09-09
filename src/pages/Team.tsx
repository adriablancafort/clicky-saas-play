import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  UserPlus, 
  Mail, 
  MoreHorizontal, 
  Search,
  Crown,
  Settings
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@company.com",
    role: "Owner",
    status: "Active",
    joinDate: "Jan 2023",
    initials: "AJ"
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@company.com", 
    role: "Admin",
    status: "Active",
    joinDate: "Mar 2023",
    initials: "BS"
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol@company.com",
    role: "Editor",
    status: "Active", 
    joinDate: "Jun 2023",
    initials: "CD"
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david@company.com",
    role: "Viewer",
    status: "Pending",
    joinDate: "Dec 2023",
    initials: "DW"
  },
  {
    id: 5,
    name: "Emma Brown",
    email: "emma@company.com",
    role: "Editor",
    status: "Active",
    joinDate: "Aug 2023", 
    initials: "EB"
  }
];

const pendingInvites = [
  {
    email: "john@company.com",
    role: "Editor",
    sentDate: "2 days ago"
  },
  {
    email: "sarah@company.com",
    role: "Viewer", 
    sentDate: "1 week ago"
  }
];

const getRoleColor = (role: string) => {
  switch (role) {
    case "Owner":
      return "bg-gradient-primary text-primary-foreground";
    case "Admin":
      return "bg-secondary text-secondary-foreground";
    case "Editor":
      return "bg-accent text-accent-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getStatusColor = (status: string) => {
  return status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800";
};

export default function Team() {
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Team Management</h1>
          <p className="text-muted-foreground">
            Manage your team members, roles, and permissions.
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <UserPlus className="w-4 h-4 mr-2" />
          Invite Member
        </Button>
      </div>

      {/* Team Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Total Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-sm text-muted-foreground">Active team members</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Pending Invites
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-sm text-muted-foreground">Awaiting response</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Crown className="w-4 h-4 mr-2" />
              Admins
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-sm text-muted-foreground">With admin access</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Team Members */}
        <div className="lg:col-span-2">
          <Card className="shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Team Members</CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search members..." 
                      className="pl-9 w-64"
                    />
                  </div>
                </div>
              </div>
              <CardDescription>
                Manage team member roles and permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-accent text-accent-foreground font-medium">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium">{member.name}</h3>
                          {member.role === "Owner" && (
                            <Crown className="w-4 h-4 text-yellow-500" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{member.email}</p>
                        <p className="text-xs text-muted-foreground">Joined {member.joinDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getRoleColor(member.role)}>
                        {member.role}
                      </Badge>
                      <Badge variant="secondary" className={getStatusColor(member.status)}>
                        {member.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Pending Invitations */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Pending Invitations</CardTitle>
              <CardDescription>
                Recently sent invitations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingInvites.map((invite, index) => (
                <div key={index} className="space-y-2 p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{invite.email}</span>
                    <Badge variant="outline" className="text-xs">
                      {invite.role}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Sent {invite.sentDate}</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs">
                      Resend
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1 text-xs">
                      Cancel
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Team Settings */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Settings className="w-4 h-4 mr-2" />
                Team Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                Manage Roles
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="w-4 h-4 mr-2" />
                Invitation Settings
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Crown className="w-4 h-4 mr-2" />
                Admin Controls
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}