import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Home, 
  BarChart3, 
  TrendingUp, 
  Settings, 
  Users, 
  Menu,
  X
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Analytics", href: "/analytics", icon: TrendingUp },
  { name: "Team", href: "/team", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 transform bg-sidebar border-r border-sidebar-border transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:inset-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-16 shrink-0 items-center justify-between px-6 border-b border-sidebar-border">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-primary-foreground" />
            </div>
            <h1 className="text-lg font-semibold text-sidebar-foreground">SaaSApp</h1>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1 px-4 py-6">
          <nav className="space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </ScrollArea>
      </div>

      {/* Main content */}
      <div className="md:pl-64">
        {/* Mobile header */}
        <div className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-background px-4 shadow-sm md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-gradient-primary flex items-center justify-center">
              <BarChart3 className="w-3 h-3 text-primary-foreground" />
            </div>
            <h1 className="text-sm font-semibold">SaaSApp</h1>
          </div>
        </div>

        {/* Page content */}
        <main className="py-8">
          {children}
        </main>
      </div>
    </div>
  );
}