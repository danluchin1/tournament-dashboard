import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface TournamentProps {
    name: string;
    status: string;
    entryFee: string;
    prizePool: string;
    participantsCount: number;
    maxParticipants: number;
    isJoined: boolean | undefined;
    tournamentId: string;
}

export function TournamentCard({
    name,
    status,
    entryFee,
    prizePool,
    participantsCount,
    maxParticipants,
    isJoined,
    tournamentId
}: TournamentProps) {
    const isTournamentFull = participantsCount === maxParticipants;

    return (
        <Card className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-card border-border gap-6 transition-all hover:bg-accent/10">
            <div className="flex flex-col items-start gap-1.5 min-w-45">
                <h3 className="text-base font-bold text-foreground tracking-tight line-clamp-1">
                    <Link to={`/tournaments/${tournamentId}`}>
                        {name}
                    </Link>
                </h3>
                <Badge className={`
                    text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5
                    ${status === 'open' ? 'bg-primary text-primary-foreground animate-pulse' : ''} 
                    ${status === 'active' ? 'bg-success/20 text-success border border-success/30' : ''}
                `}>
                    {status}
                </Badge>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:gap-10 text-left">
                <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                        Entry Fee
                    </span>
                    <span className="text-sm font-extrabold text-foreground">
                        {entryFee === "0" ? "FREE" : `$${entryFee}`}
                    </span>
                </div>

                <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                        Prize Pool
                    </span>
                    <span className="text-sm font-black text-success">
                        ${prizePool}
                    </span>
                </div>

                <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                        Players
                    </span>
                    <span className="text-sm font-bold text-foreground/90">
                        {participantsCount} <span className="text-muted-foreground font-medium text-xs">/ {maxParticipants}</span>
                    </span>
                </div>
            </div>

            <div className="w-full sm:w-auto flex justify-end pt-2 sm:pt-0 border-t border-border/40 sm:border-t-0">
                <Button
                    disabled={isTournamentFull || status === "active"}
                    className="w-full sm:w-auto rounded-full font-bold px-6 py-4 text-xs transition-transform active:scale-95"
                >
                    {isJoined ? 'Joined' : 'Join Arena'}
                </Button>
            </div>
        </Card>
    );
}