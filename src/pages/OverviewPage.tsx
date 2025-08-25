import { OverviewDashboard } from "@/components/analytics/OverviewDashboard";
import { DashboardFilters } from "@/components/filters/DashboardFilters";
import { DashboardFilters as FilterTypes } from "@/types/analytics";
import { useState } from "react";

export default function OverviewPage() {
  const [filters, setFilters] = useState<FilterTypes>({
    dateRange: { from: null, to: null },
    channel: 'all',
    train: 'all-trains',
    seatClass: 'all-classes'
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Comprehensive analytics for Bangladesh Railway registration and OTP systems
        </p>
      </div>
      
      <DashboardFilters filters={filters} onFiltersChange={setFilters} />
      <OverviewDashboard />
    </div>
  );
}