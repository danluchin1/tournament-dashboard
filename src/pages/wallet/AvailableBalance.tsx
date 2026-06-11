import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "lucide-react";

interface AvailableBalanceProps {
    balance: number;
}

export function AvailableBalance({ balance }: AvailableBalanceProps) {
    return (
        <Card className="bg-card border-border relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Available Balance
                </CardTitle>
                <Wallet className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent className="pt-2">
                <div className="flex flex-col gap-0.5">
                    <span className="text-4xl font-black text-success tracking-tight">
                        ${balance.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-muted-foreground uppercase font-medium tracking-wide">
                        Active Gaming Assets
                    </span>
                </div>
            </CardContent>
        </Card>
    );
}