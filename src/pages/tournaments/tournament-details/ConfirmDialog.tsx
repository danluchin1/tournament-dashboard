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

interface ConfirmDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    tournamentName: string;
    entryFee: number;
}

export function ConfirmDialog({
    isOpen,
    onClose,
    onConfirm,
    tournamentName,
    entryFee
}: ConfirmDialogProps) {
    return (
        <AlertDialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <AlertDialogContent className="bg-card border-border max-w-md">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-foreground font-bold">
                        Confirm Arena Entry
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-muted-foreground text-sm">
                        You are about to register for <span className="text-primary font-semibold">{tournamentName}</span> tournament.
                        {entryFee > 0 ? ` An entry fee of $${entryFee} will be deducted from your available funds.` : " This tournament is free to enter!"} This transaction cannot be reversed.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onClose} className="rounded-xl">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={onConfirm}
                        className="bg-primary text-primary-foreground font-bold rounded-xl"
                    >
                        Enter Tournament
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}