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
        entryFee: 0,
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
    },
    {
        id: 't-3',
        name: 'Radiant Strike Open',
        game: 'Valorant',
        entryFee: 15,
        prizePool: 3000,
        status: 'open',
        participantsCount: 12,
        maxParticipants: 32,
        startDate: '2026-06-20T17:00:00Z',
        description: 'Gather your tactical squad for a double-elimination bracket on the latest patch. Anti-cheat mandatory.',
        prizeDistribution: [
            { rank: '1st Place', percentage: 55, amount: 1650 },
            { rank: '2nd Place', percentage: 30, amount: 900 },
            { rank: '3rd Place', percentage: 15, amount: 450 },
        ],
        isJoined: false
    },
    {
        id: 't-4',
        name: 'Supersonic Rocketeers Classic',
        game: 'Rocket League',
        entryFee: 5,
        prizePool: 500,
        status: 'open',
        participantsCount: 16,
        maxParticipants: 16,
        startDate: '2026-06-18T19:30:00Z',
        description: 'Fast-paced 3v3 aerial chaos. Open registration for all skill ranks up to Grandmaster.',
        prizeDistribution: [
            { rank: '1st Place', percentage: 70, amount: 350 },
            { rank: '2nd Place', percentage: 30, amount: 150 },
        ],
        isJoined: false
    },
    {
        id: 't-5',
        name: 'The International Community Shield',
        game: 'Dota 2',
        entryFee: 50,
        prizePool: 12000,
        status: 'open',
        participantsCount: 8,
        maxParticipants: 16,
        startDate: '2026-07-01T12:00:00Z',
        description: 'High entry barrier, premium pay-out structure. Battle through captains mode for our biggest prize pool this summer.',
        prizeDistribution: [
            { rank: '1st Place', percentage: 50, amount: 6000 },
            { rank: '2nd Place', percentage: 25, amount: 3000 },
            { rank: '3rd Place', percentage: 15, amount: 1800 },
            { rank: '4th Place', percentage: 10, amount: 1200 },
        ],
        isJoined: false
    },
    {
        id: 't-6',
        name: 'Champions Ultimate League',
        game: 'EA Sports FC 24',
        entryFee: 10,
        prizePool: 800,
        status: 'active',
        participantsCount: 64,
        maxParticipants: 64,
        startDate: '2026-06-11T16:00:00Z',
        description: '1v1 Competitive Ultimate Team squads clash. Matches are currently underway in a single-elimination formats.',
        prizeDistribution: [
            { rank: '1st Place', percentage: 65, amount: 520 },
            { rank: '2nd Place', percentage: 35, amount: 280 },
        ],
        isJoined: false
    },
    {
        id: 't-7',
        name: 'Apex Legends Apex Predator Invitational',
        game: 'Apex Legends',
        entryFee: 20,
        prizePool: 4500,
        status: 'open',
        participantsCount: 14,
        maxParticipants: 20,
        startDate: '2026-06-25T20:00:00Z',
        description: '20 Trios drop into World Edge. 6 Custom lobbies, point-based placement format system tracking kills and survivability.',
        prizeDistribution: [
            { rank: '1st Place Trios', percentage: 50, amount: 2250 },
            { rank: '2nd Place Trios', percentage: 30, amount: 1350 },
            { rank: '3rd Place Trios', percentage: 20, amount: 900 },
        ],
        isJoined: false
    },
    {
        id: 't-8',
        name: 'Sparks Ultimate Friday Night Fight',
        game: 'Super Smash Bros. Ultimate',
        entryFee: 0,
        prizePool: 250,
        status: 'completed',
        participantsCount: 32,
        maxParticipants: 32,
        startDate: '2026-06-05T19:00:00Z',
        description: 'Free to enter community bracket layout. 3 Stock, 7 Minutes, hazardless stage select roster.',
        prizeDistribution: [
            { rank: '1st Place', percentage: 60, amount: 150 },
            { rank: '2nd Place', percentage: 30, amount: 75 },
            { rank: '3rd Place', percentage: 10, amount: 25 },
        ],
        isJoined: false
    },
    {
        id: 't-9',
        name: 'Tactical Cyber Arena Master League',
        game: 'Counter-Strike 2',
        entryFee: 30,
        prizePool: 6000,
        status: 'open',
        participantsCount: 5,
        maxParticipants: 32,
        startDate: '2026-07-10T15:00:00Z',
        description: 'Premium tier tournament execution slot. Form tracking brackets and veto stages are executed live on competitive pool choices.',
        prizeDistribution: [
            { rank: '1st Place', percentage: 60, amount: 3600 },
            { rank: '2nd Place', percentage: 40, amount: 2400 },
        ],
        isJoined: false
    },
    {
        id: 't-10',
        name: 'Nexus Blitz Weekend Brawl',
        game: 'League of Legends',
        entryFee: 10,
        prizePool: 1500,
        status: 'completed',
        participantsCount: 64,
        maxParticipants: 64,
        startDate: '2026-06-06T13:00:00Z',
        description: 'Fast-paced custom mode setup executed successfully over previous weekend tournament modules.',
        prizeDistribution: [
            { rank: '1st Place Team', percentage: 70, amount: 1050 },
            { rank: '2nd Place Team', percentage: 30, amount: 450 },
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