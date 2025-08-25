export interface RegistrationStats {
  totalAttempts: number;
  successCount: number;
  failedCount: number;
  successRate: number;
}

export interface RegistrationTrend {
  date: string;
  attempts: number;
  success: number;
  failed: number;
}

export interface FailureReason {
  reason: string;
  count: number;
  percentage: number;
}

export interface OTPStats {
  totalSent: number;
  totalFailed: number;
  totalUsed: number;
  successRate: number;
}

export interface OTPTrend {
  date: string;
  sent: number;
  failed: number;
  used: number;
}

export interface TicketCompletionStats {
  peakHour: {
    min: string;
    max: string;
    avg: string;
  };
  nonPeakHour: {
    min: string;
    max: string;
    avg: string;
  };
}

export interface CompletionTrend {
  time: string;
  peakCompletion: number;
  nonPeakCompletion: number;
}

export interface DashboardFilters {
  dateRange: {
    from: Date | null;
    to: Date | null;
  };
  channel: 'all' | 'web' | 'app' | 'pos' | 'vending';
  train: string;
  seatClass: string;
}

export interface DailySummary {
  date: string;
  totalAttempts: number;
  successCount: number;
  failedCount: number;
  successRate: number;
}