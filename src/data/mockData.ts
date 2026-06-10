import type { Tournament, Transaction } from '@/types';

export const MOCK_TOURNAMENTS: Tournament[] = [
    {
        id: 't-1',
        name: 'Esports Masters Spring Showdown',
        game: 'Counter-Strike 2',
        entryFee: 25,
        prizePool: 5000,
        status: 'open',
        participantsCount: 48,
        maxParticipants: 64,
        startDate: '2026-06-15T18:00:00Z',
        description: 'The ultimate proving ground for semi-pro teams. Compete against the best in Europe for a slice of the $5,000 prize pool.',
        prizeDistribution: [
            { rank: '1st Place', percentage: 50, amount: 2500 },
            { rank: '2nd Place', percentage: 30, amount: 1500 },
            { rank: '3rd - 4th', percentage: 10, amount: 500 },
        ],
        isJoined: false
    },
    {
        id: 't-2',
        name: 'Challenger Arena Solo Queue Cup',
        game: 'League of Legends',
        entryFee: 0, // Free to enter
        prizePool: 1000,
        status: 'active',
        participantsCount: 128,
        maxParticipants: 128,
        startDate: '2026-06-10T14:00:00Z',
        description: 'A high-stakes tournament for solo players looking to make a name for themselves. Brackets are generated automatically.',
        prizeDistribution: [
            { rank: '1st Place', percentage: 60, amount: 600 },
            { rank: '2nd Place', percentage: 40, amount: 400 },
        ],
        isJoined: false
    }
];

export const MOCK_TRANSACTIONS: Transaction[] = [
    {
        id: 'tx-1',
        type: 'deposit',
        amount: 150,
        currency: 'USD',
        date: '2026-06-01T10:30:00Z',
        description: 'Initial Wallet Loading'
    },
    {
        id: 'tx-2',
        type: 'entry_fee',
        amount: 10,
        currency: 'USD',
        date: '2026-06-02T15:45:00Z',
        description: 'Entry Fee: Amateur Weekly Arena'
    }
];