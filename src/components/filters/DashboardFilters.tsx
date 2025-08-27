import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Filter, RotateCcw } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { DashboardFilters as FilterTypes } from "@/types/analytics";

interface DashboardFiltersProps {
  filters: FilterTypes;
  onFiltersChange: (filters: FilterTypes) => void;
}

export function DashboardFilters({ filters, onFiltersChange }: DashboardFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const resetFilters = () => {
    onFiltersChange({
      dateRange: { from: null, to: null },
      channel: 'all',
      train: 'all-trains',
      seatClass: 'all-classes'
    });
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </div>
          <Button variant="outline" size="sm" onClick={resetFilters}>
            <RotateCcw className="h-3 w-3 mr-1" />
            Reset
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Date Range */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Date Range</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "justify-start text-left font-normal",
                    !filters.dateRange.from && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {filters.dateRange.from ? (
                    filters.dateRange.to ? (
                      <>
                        {format(filters.dateRange.from, "LLL dd, y")} -{" "}
                        {format(filters.dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(filters.dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={filters.dateRange.from || undefined}
                  selected={{
                    from: filters.dateRange.from || undefined,
                    to: filters.dateRange.to || undefined
                  }}
                  onSelect={(range) =>
                    onFiltersChange({
                      ...filters,
                      dateRange: {
                        from: range?.from || null,
                        to: range?.to || null
                      }
                    })
                  }
                  numberOfMonths={2}
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Channel */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Channel</label>
            <Select
              value={filters.channel}
              onValueChange={(value) =>
                onFiltersChange({
                  ...filters,
                  channel: value as FilterTypes['channel']
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select channel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Channels</SelectItem>
                <SelectItem value="web">Web Portal</SelectItem>
                <SelectItem value="app">Mobile App</SelectItem>
                <SelectItem value="pos">POS Terminal</SelectItem>
                <SelectItem value="vending">Vending Machine</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Train */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Train</label>
            <Select
              value={filters.train}
              onValueChange={(value) =>
                onFiltersChange({
                  ...filters,
                  train: value
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select train" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-trains">All Trains</SelectItem>
                <SelectItem value="dhaka-chittagong">Dhaka - Chittagong</SelectItem>
                <SelectItem value="dhaka-sylhet">Dhaka - Sylhet</SelectItem>
                <SelectItem value="dhaka-rajshahi">Dhaka - Rajshahi</SelectItem>
                <SelectItem value="dhaka-khulna">Dhaka - Khulna</SelectItem>
                <SelectItem value="chittagong-sylhet">Chittagong - Sylhet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Seat Class */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Seat Class</label>
            <Select
              value={filters.seatClass}
              onValueChange={(value) =>
                onFiltersChange({
                  ...filters,
                  seatClass: value
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-classes">All Classes</SelectItem>
                <SelectItem value="ac-first">AC First Class</SelectItem>
                <SelectItem value="ac-chair">AC Chair</SelectItem>
                <SelectItem value="first-chair">First Class Chair</SelectItem>
                <SelectItem value="shovan">Shovan</SelectItem>
                <SelectItem value="shulov">Shulov</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}