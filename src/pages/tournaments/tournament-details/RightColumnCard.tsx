import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, ShieldAlert, Trophy, Users } from "lucide-react";
import { useState } from "react";
import { ConfirmDialog } from "./ConfirmDialog";

interface TournamentRules {
    entryFee: number;
    participantsCount: string;
    maxParticipants: string;
    startDate: string;
    isJoined: boolean | undefined;
    status: string;
    balance: number;
    isFull: boolean;
    hasFunds: boolean;
    handleRegistration: () => void;
    tournamentName: string;
}

export function RightColumnCard({
    entryFee, participantsCount,
    maxParticipants,
    startDate,
    isJoined,
    status,
    balance,
    isFull,
    hasFunds,
    handleRegistration,
    tournamentName
}: TournamentRules) {
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="space-y-4 w-full">
            <Card className="bg-card border-border p-6 space-y-6">
                <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                        Registration Details
                    </h3>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground flex items-center gap-2"><Trophy className="h-4 w-4" /> Entry Fee</span>
                            <span className="font-extrabold text-foreground">{entryFee === 0 ? "FREE" : `$${entryFee}`}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground flex items-center gap-2"><Users className="h-4 w-4" /> Enrolled Players</span>
                            <span className="font-bold text-foreground">{participantsCount} / {maxParticipants}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground flex items-center gap-2"><Calendar className="h-4 w-4" /> Schedule Kickoff</span>
                            <span className="font-medium text-foreground text-xs">{new Date(startDate).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-border/60">
                    {isJoined ? (
                        <Button disabled className="w-full bg-success/20 text-success border border-success/30 font-bold rounded-xl">
                            You are Registered
                        </Button>
                    ) : (
                        <Button
                            onClick={() => setShowConfirm(true)}
                            disabled={isFull || status === "active" || !hasFunds}
                            className="w-full font-bold text-sm py-5 rounded-xl transition-transform active:scale-95"
                        >
                            {isFull ? "Tournament Full" : status === "active" ? "Lobby Locked" : "Confirm Entry"}
                        </Button>
                    )}

                    {!isJoined && !hasFunds && status !== "active" && (
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-[11px] text-destructive-foreground mt-2">
                            <ShieldAlert className="h-4 w-4 shrink-0 text-destructive" />
                            <span>Insufficient funds. You need ${entryFee - balance} more to enter.</span>
                        </div>
                    )}
                </div>
            </Card>

            <ConfirmDialog
                isOpen={showConfirm}
                onClose={() => setShowConfirm(false)}
                onConfirm={() => {
                    setShowConfirm(false);
                    handleRegistration();
                }}
                tournamentName={tournamentName}
                entryFee={entryFee}
            />
        </div>
    );
}