import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownLeft, ArrowUpRight, ArrowLeftRight } from "lucide-react";

interface TransactionItem {
    id: string;
    type: 'deposit' | 'withdraw' | 'entry_fee' | 'prize_payout' | string;
    amount: number;
    date: string;
    description?: string;
}

interface TransactionHistoryProps {
    transactions: TransactionItem[];
}

export function TransactionHistory({ transactions }: TransactionHistoryProps) {
    const getTransactionConfig = (type: string) => {
        switch (type) {
            case 'deposit':
            case 'prize_payout':
                return {
                    icon: ArrowDownLeft,
                    iconClass: "text-success bg-success/10",
                    amountPrefix: "+",
                    amountClass: "text-success font-black"
                };
            case 'withdraw':
            case 'entry_fee':
                return {
                    icon: ArrowUpRight,
                    iconClass: "text-muted-foreground bg-muted",
                    amountPrefix: "-",
                    amountClass: "text-foreground/90 font-bold"
                };
            default:
                return {
                    icon: ArrowLeftRight,
                    iconClass: "text-primary bg-primary/10",
                    amountPrefix: "",
                    amountClass: "text-foreground font-medium"
                };
        }
    };

    return (
        <div className="max-h-140">
            <Card className="bg-card border-border w-full h-full flex flex-col">
                <CardHeader>
                    <CardTitle className="text-base font-bold uppercase tracking-wider text-muted-foreground">
                        Transaction History
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto min-h-0 pb-6 custom-scrollbar">
                    {transactions.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center border border-dashed border-border/60 rounded-xl">
                            <p className="text-sm text-muted-foreground">No historical transaction entries recorded yet.</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-border/40 pr-1">
                            {transactions.map((tx) => {
                                const config = getTransactionConfig(tx.type);
                                const IconComponent = config.icon;

                                return (
                                    <div key={tx.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0 gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-xl shrink-0 ${config.iconClass}`}>
                                                <IconComponent className="h-4 w-4" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-foreground capitalize tracking-tight">
                                                    {tx.description || tx.type.replace('_', ' ')}
                                                </span>
                                                <span className="text-[10px] text-muted-foreground font-medium uppercase mt-0.5 tracking-wider">
                                                    {new Date(tx.date).toLocaleDateString()} at {new Date(tx.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <span className={`text-base tracking-tight ${config.amountClass}`}>
                                                {config.amountPrefix}${tx.amount.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}