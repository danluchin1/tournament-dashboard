// Mock Data types
export type TournamentStatus = "open" | "active" | "completed";

export interface PrizeTier {
    rank: string;
    percentage: number;
    amount: number;
}

export interface Tournament {
    id: string;
    name: string;
    entryFee: number;
    prizePool: number;
    status: TournamentStatus;
    game: string;
    startDate: string;
    participantsCount: number;
    maxParticipants: number;
    description: string;
    prizeDistribution: PrizeTier[];
    isJoined?: boolean;
}

export type TransactionType = "deposit" | "withdraw" | "entry_fee";

export interface Transaction {
    id: string;
    type: TransactionType;
    amount: number;
    currency: string;
    date: string;
    description: string;
}

export interface UserWallet {
    balance: number;
    transactions: Transaction[];
}

// Zustand Slices types
export interface WalletSlice {
    balance: number;
    transactions: Transaction[];
    deposit: (amount: number) => void;
    withdraw: (ammount: number) => boolean;
    addTransaction: (type: Transaction["type"], amount: number, description: string) => void;
}

export interface TournamentSlice {
    tournaments: Tournament[];
    activeTournamentId: string | null;
    setActiveTournament: (id: string | null) => void;
    joinTournament: (id: string) => { success: boolean; error?: string };
}

export type CombinedStore = WalletSlice & TournamentSlice;