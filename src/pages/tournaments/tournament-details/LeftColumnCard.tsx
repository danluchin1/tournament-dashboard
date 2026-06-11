import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PrizeTier } from "@/types";
import { Trophy } from "lucide-react";

interface TournamentInfo {
    description: string;
    prizeDistribution: PrizeTier[];

}

export function LeftColumnCard({ description, prizeDistribution }: TournamentInfo) {
    return (
        <div className="space-y-6 w-full">
            <Card className="bg-card border-border">
                <CardHeader>
                    <CardTitle className="text-base font-bold uppercase tracking-wider text-muted-foreground">
                        Overview & Match Rules
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-foreground/80 leading-relaxed">
                    {description}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-base font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-amber-400" /> Prize Pool Distribution
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="divide-y divide-border/40">
                        {prizeDistribution?.map((tier, idx) => (
                            <div key={idx} className="flex justify-between items-center py-3 first:pt-0 last:pb-0">
                                <span className="font-semibold text-foreground">{tier.rank}</span>
                                <div className="text-right">
                                    <span className="text-sm font-black text-success block">
                                        ${tier.amount.toLocaleString()}
                                    </span>
                                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                                        {tier.percentage}% of total
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}