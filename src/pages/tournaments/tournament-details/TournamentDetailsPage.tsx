import { useAppStore } from "@/store";
import { LeftColumnCard } from "./LeftColumnCard";
import { useNavigate, useParams } from "react-router";
import { HeaderNavigation } from "./HeaderNavigation";
import { Button } from "@/components/ui/button";
import { RightColumnCard } from "./RightColumnCard";
import { toast } from "react-hot-toast";

export default function TournamentDetailsPage() {
    const { tournamentId } = useParams<{ tournamentId: string }>();
    const navigate = useNavigate();

    const tournaments = useAppStore((state) => state.tournaments);
    const balance = useAppStore((state) => state.balance);
    const joinTournament = useAppStore((state) => state.joinTournament);

    const tournament = tournaments.find(t => t.id === tournamentId);

    if (!tournament) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
                <p className="text-sm text-muted-foreground">Tournament arena not found.</p>
                <Button onClick={() => navigate("/tournaments")}>
                    Return to Tournaments Hub
                </Button>
            </div>
        );
    }

    const isFull = tournament.participantsCount === tournament.maxParticipants;
    const hasFunds = balance >= tournament.entryFee;

    const handleRegistration = () => {
        const result = joinTournament(tournament.id);
        if (result.success) {
            toast.success(`Successfully registered for ${tournament.name}`)
        } else {
            toast.error(`${result.error}`);
        }
    }

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-6">
            <HeaderNavigation
                onBack={() => navigate("/tournaments")}
                gameName={tournament.game}
                tournamentName={tournament.name}
                status={tournament.status}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2">
                    <LeftColumnCard
                        description={tournament.description}
                        prizeDistribution={tournament.prizeDistribution}
                    />
                </div>

                <div className="md:col-span-1 md:sticky md:top-6">
                    <RightColumnCard
                        entryFee={tournament.entryFee}
                        participantsCount={tournament.participantsCount.toLocaleString()}
                        maxParticipants={tournament.maxParticipants.toLocaleString()}
                        startDate={tournament.startDate}
                        isJoined={tournament.isJoined}
                        status={tournament.status}
                        balance={balance}
                        isFull={isFull}
                        hasFunds={hasFunds}
                        handleRegistration={handleRegistration}
                        tournamentName={tournament.name}
                    />
                </div>
            </div>
        </div>
    );
}