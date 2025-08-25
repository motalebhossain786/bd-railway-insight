import { TicketCompletionAnalytics } from "@/components/analytics/TicketCompletionAnalytics";

export default function CompletionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Ticket Completion Analytics</h1>
        <p className="text-muted-foreground">
          Performance analysis comparing peak vs non-peak hour completion times
        </p>
      </div>
      <TicketCompletionAnalytics />
    </div>
  );
}