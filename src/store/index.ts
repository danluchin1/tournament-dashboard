import { create } from 'zustand';
import { createWalletSlice } from './slices/walletSlice';
import { createTournamentSlice } from './slices/tournamentSlice';
import type { WalletSlice, TournamentSlice } from '@/types';

type AppStoreState = WalletSlice & TournamentSlice;

export const useAppStore = create<AppStoreState>()((...a) => ({
    ...createWalletSlice(...a),
    ...createTournamentSlice(...a),
}));