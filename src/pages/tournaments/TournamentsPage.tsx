import { useAppStore } from "@/store";
import { TournamentCard } from "./TournamentCard";


export default function TournamentsPage() {
    const tournaments = useAppStore((state) => state.tournaments);

    return (
        <div className="max-w-5xl mx-auto flex flex-col gap-2 p-6">
            {
                tournaments.map(tournament => (
                    <TournamentCard
                        key={tournament.id}
                        name={tournament.name}
                        status={tournament.status}
                        entryFee={tournament.entryFee.toLocaleString()}
                        prizePool={tournament.prizePool.toLocaleString()}
                        participantsCount={tournament.participantsCount}
                        maxParticipants={tournament.maxParticipants}
                        isJoined={tournament.isJoined}
                        tournamentId={tournament.id}
                    />
                ))
            }
        </div>
    );
}