import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";

interface TransactionDialogProps {
    isOpen: boolean;
    onClose: () => void;
    paymentType: 'deposit' | 'withdraw';
    amount: number;
    setAmount: (value: number) => void;
    onConfirm: () => void;
}

export function TransactionDialog({
    isOpen,
    onClose,
    paymentType,
    amount,
    setAmount,
    onConfirm
}: TransactionDialogProps) {
    return (
        <AlertDialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <AlertDialogContent className="bg-card border-border max-w-md">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-foreground font-bold capitalize">
                        {paymentType} Assets
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-muted-foreground text-sm space-y-4">
                        <span>
                            You are about to {paymentType} assets into your account.
                            Please enter the desired amount below.
                        </span>

                        <Input
                            value={amount || ""}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            type="number"
                            min="1"
                            placeholder="Enter the amount..."
                            className="mt-2 bg-background border-border text-foreground"
                        />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onClose} className="rounded-xl">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={onConfirm}
                        disabled={amount <= 0}
                        className="bg-primary text-primary-foreground font-bold rounded-xl capitalize"
                    >
                        {paymentType}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}