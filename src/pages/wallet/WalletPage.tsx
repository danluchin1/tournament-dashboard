import { useAppStore } from "@/store";
import { AvailableBalance } from "./AvailableBalance";
import { TransactionActions } from "./TransactionActions";
import { TransactionHistory } from "./TransactionHistory";
import toast from "react-hot-toast";

export default function WalletPage() {
    const balance = useAppStore((state) => state.balance);
    const transactions = useAppStore((state) => state.transactions || []);
    const depositFunds = useAppStore((state) => state.deposit);
    const withdrawFunds = useAppStore((state) => state.withdraw);

    const handleTransaction = (type: 'deposit' | 'withdraw', amount: number) => {
        if (type === 'deposit') {
            depositFunds(amount);
            toast.success(`Successfully deposited $${amount.toFixed(2)}`);
        } else {
            const success = withdrawFunds(amount);
            if (success) {
                toast.success(`Successfully withdrew $${amount.toFixed(2)}`);
            } else {
                toast.error("Insufficient funds for withdrawal.");
            }
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-6">
            <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Wallet Hub</h1>
                <p className="text-sm text-muted-foreground mt-1">Manage your funds and audit your platform transactions ledger.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-stretch">
                <div className="md:col-span-1 flex flex-col gap-4">
                    <AvailableBalance balance={balance} />
                    <TransactionActions onExecuteAction={handleTransaction} />
                </div>

                <div className="md:col-span-2 flex flex-col">
                    <TransactionHistory transactions={transactions} />
                </div>
            </div>
        </div>
    );
}