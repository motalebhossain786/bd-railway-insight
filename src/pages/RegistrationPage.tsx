import { RegistrationAnalytics } from "@/components/analytics/RegistrationAnalytics";

export default function RegistrationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Registration Analytics</h1>
        <p className="text-muted-foreground">
          Detailed analysis of user registration attempts, success rates, and failure patterns
        </p>
      </div>
      <RegistrationAnalytics />
    </div>
  );
}