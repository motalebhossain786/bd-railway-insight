import { BarChart3, Users, MessageSquare, Clock, Settings, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import railwayLogo from "@/assets/railway-logo.jpg";

interface DashboardSidebarProps {
  className?: string;
}

const navigation = [
  { name: 'Overview', href: '/', icon: BarChart3 },
  { name: 'Registration Analytics', href: '/registration', icon: Users },
  { name: 'OTP SMS Analytics', href: '/otp', icon: MessageSquare },
  { name: 'Ticket Completion', href: '/completion', icon: Clock },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function DashboardSidebar({ className }: DashboardSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-card shadow-md"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        className
      )}>
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
            <img 
              src={railwayLogo} 
              alt="Bangladesh Railway" 
              className="w-8 h-8 rounded object-cover"
            />
            <div>
              <h1 className="font-semibold text-foreground">Bangladesh Railway</h1>
              <p className="text-xs text-muted-foreground">Analytics Dashboard</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-4 py-4 border-t border-border">
            <div className="text-xs text-muted-foreground">
              <p>ICT Ministry</p>
              <p>Government of Bangladesh</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}