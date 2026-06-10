import type { StateCreator } from "zustand";
import type { Tournament, TournamentSlice, CombinedStore } from "@/types";
import { MOCK_TOURNAMENTS } from "@/data/mockData";

export const createTournamentSlice: StateCreator<
    CombinedStore,
    [],
    [],
    TournamentSlice
> = (set, get) => ({
    tournaments: MOCK_TOURNAMENTS,
    activeTournamentId: null,
    setActiveTournament: (id) => set({ activeTournamentId: id }),
    joinTournament: (id) => {
        const tournament = get().tournaments.find((t: Tournament) => t.id === id);

        if (!tournament) {
            return { success: false, error: "Tournament not found." }
        }

        if (tournament.isJoined) {
            return { success: false, error: "Already registered for this tournament." }
        }

        if (get().balance < tournament.entryFee) {
            return { success: false, error: "Insufficient funds in your wallet." }
        }

        set((state) => ({
            balance: state.balance - tournament.entryFee,
            tournaments: state.tournaments.map((t: Tournament) =>
                t.id === id
                    ? { ...t, isJoined: true, participantsCount: t.participantsCount + 1 }
                    : t
            ),
        }))

        get().addTransaction(
            "entry_fee",
            tournament.entryFee,
            `Entry Fee: ${tournament.name}`
        );

        return { success: true }
    },
})