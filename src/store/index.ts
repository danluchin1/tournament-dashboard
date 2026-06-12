import { create } from 'zustand';
import { createWalletSlice } from './slices/walletSlice';
import { createTournamentSlice } from './slices/tournamentSlice';
import type { CombinedStore } from '@/types';
import { createJSONStorage, persist } from "zustand/middleware";

export const useAppStore = create<CombinedStore>()(persist(
    (...a) => ({
        ...createWalletSlice(...a),
        ...createTournamentSlice(...a),
    }),
    {
        name: "arena-storage",
        storage: createJSONStorage(() => localStorage),
    }
));