import { 
  RegistrationStats, 
  RegistrationTrend, 
  FailureReason, 
  OTPStats, 
  OTPTrend, 
  TicketCompletionStats, 
  CompletionTrend,
  DailySummary 
} from '@/types/analytics';

export const mockRegistrationStats: RegistrationStats = {
  totalAttempts: 15420,
  successCount: 12336,
  failedCount: 3084,
  successRate: 80.0
};

export const mockRegistrationTrend: RegistrationTrend[] = [
  { date: '2024-01-01', attempts: 1240, success: 992, failed: 248 },
  { date: '2024-01-02', attempts: 1380, success: 1104, failed: 276 },
  { date: '2024-01-03', attempts: 1520, success: 1216, failed: 304 },
  { date: '2024-01-04', attempts: 1680, success: 1344, failed: 336 },
  { date: '2024-01-05', attempts: 1420, success: 1136, failed: 284 },
  { date: '2024-01-06', attempts: 1180, success: 944, failed: 236 },
  { date: '2024-01-07', attempts: 2000, success: 1600, failed: 400 }
];

export const mockFailureReasons: FailureReason[] = [
  { reason: 'Invalid NID', count: 1234, percentage: 40.0 },
  { reason: 'Invalid Mobile Number', count: 925, percentage: 30.0 },
  { reason: 'Already Registered', count: 617, percentage: 20.0 },
  { reason: 'Invalid Date of Birth', count: 185, percentage: 6.0 },
  { reason: 'Invalid Name', count: 123, percentage: 4.0 }
];

export const mockOTPStats: OTPStats = {
  totalSent: 18750,
  totalFailed: 1125,
  totalUsed: 15625,
  successRate: 94.0
};

export const mockOTPTrend: OTPTrend[] = [
  { date: '2024-01-01', sent: 2100, failed: 105, used: 1785 },
  { date: '2024-01-02', sent: 2350, failed: 118, used: 1998 },
  { date: '2024-01-03', sent: 2650, failed: 133, used: 2253 },
  { date: '2024-01-04', sent: 2980, failed: 149, used: 2533 },
  { date: '2024-01-05', sent: 2450, failed: 123, used: 2083 },
  { date: '2024-01-06', sent: 2220, failed: 111, used: 1887 },
  { date: '2024-01-07', sent: 4000, failed: 286, used: 3086 }
];

export const mockTicketCompletionStats: TicketCompletionStats = {
  peakHour: {
    min: '2:34',
    max: '8:45',
    avg: '4:12'
  },
  nonPeakHour: {
    min: '1:28',
    max: '5:32',
    avg: '2:48'
  }
};

export const mockCompletionTrend: CompletionTrend[] = [
  { time: '00:00', peakCompletion: 180, nonPeakCompletion: 120 },
  { time: '04:00', peakCompletion: 240, nonPeakCompletion: 140 },
  { time: '08:00', peakCompletion: 380, nonPeakCompletion: 180 },
  { time: '12:00', peakCompletion: 420, nonPeakCompletion: 220 },
  { time: '16:00', peakCompletion: 350, nonPeakCompletion: 200 },
  { time: '20:00', peakCompletion: 280, nonPeakCompletion: 160 }
];

export const mockDailySummary: DailySummary[] = [
  { date: '2024-01-01', totalAttempts: 1240, successCount: 992, failedCount: 248, successRate: 80.0 },
  { date: '2024-01-02', totalAttempts: 1380, successCount: 1104, failedCount: 276, successRate: 80.0 },
  { date: '2024-01-03', totalAttempts: 1520, successCount: 1216, failedCount: 304, successRate: 80.0 },
  { date: '2024-01-04', totalAttempts: 1680, successCount: 1344, failedCount: 336, successRate: 80.0 },
  { date: '2024-01-05', totalAttempts: 1420, successCount: 1136, failedCount: 284, successRate: 80.0 }
];