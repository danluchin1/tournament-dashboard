import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TransactionDialog } from "./TransactionDialog";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

interface TransactionActionsProps {
    onExecuteAction: (type: 'deposit' | 'withdraw', amount: number) => void;
}

export function TransactionActions({ onExecuteAction }: TransactionActionsProps) {
    const [activeMode, setActiveMode] = useState<'deposit' | 'withdraw' | null>(null);
    const [amount, setAmount] = useState<number>(0);

    const handleClose = () => {
        setActiveMode(null);
        setAmount(0);
    };

    const handleConfirmSubmit = () => {
        if (activeMode && amount > 0) {
            onExecuteAction(activeMode, amount);
            handleClose();
        }
    };

    return (
        <Card className="bg-card border-border">
            <CardHeader>
                <CardTitle className="text-base font-bold uppercase tracking-wider text-muted-foreground">
                    Manage Your Assets
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col xl:flex-row gap-3">
                <Button
                    onClick={() => setActiveMode('deposit')}
                    className="flex-1 bg-success/20 text-success border border-success/30 hover:bg-success/30 font-bold py-6 rounded-xl"
                >
                    <ArrowDownLeft className="mr-2 h-4 w-4" /> Deposit
                </Button>

                <Button
                    onClick={() => setActiveMode('withdraw')}
                    variant="secondary"
                    className="flex-1 font-bold py-6 rounded-xl"
                >
                    <ArrowUpRight className="mr-2 h-4 w-4" /> Withdraw
                </Button>

                <TransactionDialog
                    isOpen={activeMode !== null}
                    onClose={handleClose}
                    paymentType={activeMode || 'deposit'}
                    amount={amount}
                    setAmount={setAmount}
                    onConfirm={handleConfirmSubmit}
                />
            </CardContent>
        </Card>
    );
}