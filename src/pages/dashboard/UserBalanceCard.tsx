import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

interface UserBalanceProps {
    balance: number;
}

export function UserBalanceCard({ balance }: UserBalanceProps) {
    return (
        <Card className="w-full flex flex-row justify-between items-center p-6 bg-card">
            {/* Left Column: Balance Info */}
            <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Balance
                </span>
                <div className="flex items-center gap-1 text-3xl font-black text-success tracking-tight">
                    <DollarSign className="h-7 w-7" />
                    <span>{balance.toFixed(2)}</span>
                </div>
            </div>

            {/* Right Column: Navigation Action */}
            <div className="flex flex-col items-end gap-2">
                <span className="text-xs text-muted-foreground/70">Quick Access</span>
                <Button asChild variant="secondary" className="font-semibold">
                    <Link to="/wallet">Go to Wallet</Link>
                </Button>
            </div>
        </Card>
    );
}