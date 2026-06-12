import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ConfirmDialog } from "./tournament-details/ConfirmDialog";

interface TournamentProps {
    name: string;
    status: string;
    entryFee: string;
    rawEntryFee: number;
    prizePool: string;
    participantsCount: number;
    maxParticipants: number;
    isJoined: boolean | undefined;
    tournamentId: string;
    handleRegistration: () => void;
}

export function TournamentCard({
    name,
    status,
    entryFee,
    rawEntryFee,
    prizePool,
    participantsCount,
    maxParticipants,
    isJoined,
    tournamentId,
    handleRegistration
}: TournamentProps) {
    const isTournamentFull = participantsCount === maxParticipants;
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="w-full">
            <Card className="w-full flex flex-col xl:flex-row xl:items-center justify-between p-5 bg-card border-border gap-5 transition-all hover:bg-accent/10">
                <div className="flex flex-col items-start gap-1.5 w-full xl:flex-1 xl:min-w-0">
                    <h3 className="text-base font-bold text-foreground tracking-tight line-clamp-1 w-full">
                        <Link to={`/tournaments/${tournamentId}`} className="hover:text-primary transition-colors block truncate">
                            {name}
                        </Link>
                    </h3>
                    <Badge className={`
                        text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 select-none
                        ${status === 'open' ? 'bg-primary text-primary-foreground animate-pulse' : ''} 
                        ${status === 'active' ? 'bg-success/20 text-success border border-success/30' : ''}
                        ${status === 'completed' ? 'bg-muted text-muted-foreground border border-border' : ''}
                    `}>
                        {status}
                    </Badge>
                </div>

                <div className="w-full xl:w-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 xl:gap-8 shrink-0">
                    <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:gap-10 sm:min-w-85 text-left">
                        <div className="flex flex-col gap-0.5 sm:w-24">
                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                Entry Fee
                            </span>
                            <span className="text-sm font-extrabold text-foreground">
                                {entryFee === "0" ? "FREE" : `$${entryFee}`}
                            </span>
                        </div>

                        <div className="flex flex-col gap-0.5 sm:w-28">
                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                Prize Pool
                            </span>
                            <span className="text-sm font-black text-success">
                                ${prizePool}
                            </span>
                        </div>

                        <div className="flex flex-col gap-0.5 sm:w-24">
                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                Players
                            </span>
                            <span className="text-sm font-bold text-foreground/90">
                                {participantsCount} <span className="text-muted-foreground font-medium text-xs">/ {maxParticipants}</span>
                            </span>
                        </div>
                    </div>

                    <div className="w-full sm:w-auto sm:min-w-27.5 flex sm:justify-end pt-3 sm:pt-0 border-t border-border/40 sm:border-t-0 xl:border-t-0">
                        {isJoined ? (
                            <Button disabled className="w-full sm:w-auto bg-success/20 text-success border border-success/30 font-bold rounded-full px-6 py-4 text-xs">
                                Registered
                            </Button>
                        ) : (
                            <Button
                                onClick={() => setShowConfirm(true)}
                                disabled={isTournamentFull || status === "active" || status === "completed"}
                                className="w-full sm:w-auto rounded-full font-bold px-6 py-4 text-xs transition-transform active:scale-95"
                            >
                                {status === "completed" ? "Ended" : isTournamentFull ? "Full" : status === "active" ? "Locked" : "Join Arena"}
                            </Button>
                        )}
                    </div>
                </div>
            </Card>

            <ConfirmDialog
                isOpen={showConfirm}
                onClose={() => setShowConfirm(false)}
                onConfirm={() => {
                    setShowConfirm(false);
                    handleRegistration();
                }}
                tournamentName={name}
                entryFee={rawEntryFee}
            />
        </div>
    );
}