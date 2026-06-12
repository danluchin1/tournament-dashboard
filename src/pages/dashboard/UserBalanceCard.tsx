import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface UserBalanceProps {
    balance: number;
}

export function UserBalanceCard({ balance }: UserBalanceProps) {
    return (
        <Card className="bg-card border-border w-full relative overflow-hidden flex flex-col justify-between p-6 h-full min-h-40">
            <CardContent className="p-0 space-y-4 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                        Available Gaming Balance
                    </span>
                    <div className="p-2 bg-success/10 text-success rounded-xl">
                        <Wallet className="h-4 w-4" />
                    </div>
                </div>

                <div className="flex flex-col gap-0.5 mt-2">
                    <span className="text-4xl font-black text-success tracking-tight">
                        ${balance.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-muted-foreground/70 uppercase font-medium tracking-wide">
                        Active Platform Assets
                    </span>
                </div>

                <div className="pt-4 border-t border-border/40 mt-auto">
                    <Button
                        asChild
                        variant="ghost"
                        className="w-full justify-between p-0 h-auto font-bold text-xs text-muted-foreground hover:text-primary hover:bg-transparent transition-colors group"
                    >
                        <Link to="/wallet" className="flex items-center justify-between w-full">
                            <span>Manage Wallet Account</span>
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-muted-foreground group-hover:text-primary" />
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}