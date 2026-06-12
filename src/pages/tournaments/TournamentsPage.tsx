import { useAppStore } from "@/store";
import { TournamentCard } from "./TournamentCard";
import toast from "react-hot-toast";


export default function TournamentsPage() {
    const tournaments = useAppStore((state) => state.tournaments);
    const joinTournament = useAppStore((state) => state.joinTournament);

    const handleRegisterClick = (id: string, name: string) => {
        const result = joinTournament(id);
        if (result.success) {
            toast.success(`Successfully registered for ${name}`);
        } else {
            toast.error(`${result.error}`);
        }
    };

    return (
        <div className="max-w-5xl mx-auto flex flex-col gap-2 p-6">
            {
                tournaments.map(tournament => (
                    <TournamentCard
                        key={tournament.id}
                        name={tournament.name}
                        status={tournament.status}
                        entryFee={tournament.entryFee.toLocaleString()}
                        rawEntryFee={tournament.entryFee}
                        prizePool={tournament.prizePool.toLocaleString()}
                        participantsCount={tournament.participantsCount}
                        maxParticipants={tournament.maxParticipants}
                        isJoined={tournament.isJoined}
                        tournamentId={tournament.id}
                        handleRegistration={() => handleRegisterClick(tournament.id, tournament.name)}
                    />
                ))
            }
        </div>
    );
}