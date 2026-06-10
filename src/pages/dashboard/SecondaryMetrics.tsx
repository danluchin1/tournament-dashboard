import { Card } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface MetricsProps {
    title: string;
    amount: string;
    icon: LucideIcon;
}

export function SecondaryMetrics({ title, amount, icon: Icon }: MetricsProps) {
    return (
        <Card className="flex flex-col justify-between p-4 bg-card h-full min-w-55">
            {/* Top row: Title and Muted Layout */}
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {title}
            </div>

            {/* Bottom row: Numerical data and your aligned Icon element */}
            <div className="flex items-center justify-between mt-2">
                <span className="text-2xl font-bold tracking-tight text-foreground">
                    {/* If it's a prize pool, you can style this or use .toLocaleString() in the parent */}
                    {amount}
                </span>

                {/* 3. Render it as a true capital-letter JSX component wrapper */}
                <Icon className="h-5 w-5 text-primary" />
            </div>
        </Card>
    );
}