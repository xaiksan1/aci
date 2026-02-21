import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import { HelpCircle } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: number;
  percentageChange: number;
  valuePrefix?: string;
  valueSuffix?: string;
  className?: string;
}

export function StatsCard({
  title,
  value,
  percentageChange,
  valuePrefix = "",
  valueSuffix = "",
  className,
}: StatsCardProps) {
  const isPositive = percentageChange >= 0;

  return (
    <div className={cn("flex flex-col p-6", className)}>
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        {title}
        <HelpCircle className="h-4 w-4" />
      </div>
      <div className="mt-2 flex flex-col gap-1">
        <div className="text-2xl font-bold">
          {valuePrefix}
          {value.toLocaleString()}
          {valueSuffix}
        </div>
        <div
          className={cn(
            "flex items-center text-sm",
            isPositive ? "text-emerald-600" : "text-red-600",
          )}
        >
          {isPositive ? (
            <TrendingUp className="mr-1 h-4 w-4" />
          ) : (
            <TrendingDown className="mr-1 h-4 w-4" />
          )}
          {Math.abs(percentageChange)}% since last month
        </div>
      </div>
    </div>
  );
}
