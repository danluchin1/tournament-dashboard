import { MOCK_TRANSACTIONS } from "@/data/mockData";
import type { Transaction, WalletSlice, CombinedStore } from "@/types";
import type { StateCreator } from "zustand";

export const createWalletSlice: StateCreator<
    CombinedStore,
    [],
    [],
    WalletSlice
> = (set) => ({
    balance: 500,
    transactions: MOCK_TRANSACTIONS,

    deposit: (amount) => 
        set((state) => {
            const newTx: Transaction = {
                id: `tx-${crypto.randomUUID()}`,
                type: "deposit",
                amount,
                currency: "USD",
                date: new Date().toISOString(),
                description: "Deposited funds via dashboard",
            }
            return {
                balance: state.balance + amount,
                transactions: [newTx, ...state.transactions]
            }
        }),

    withdraw: (amount) => {
        let transactionAllowed = false;
        set((state) => {
            if(state.balance < amount) return {}

            transactionAllowed = true;
            const newTx: Transaction = {
                id: `tx-${crypto.randomUUID()}`,
                type: "withdraw",
                amount: amount,
                currency: "USD",
                date: new Date().toISOString(),
                description: "Withdrew funds from wallet",
            }
            return {
                balance: state.balance - amount,
                transactions: [newTx, ...state.transactions]
            }
        })
        return transactionAllowed;
    },

    addTransaction: (type, amount, description) => 
        set((state) => ({
            transactions: [
                {
                    id: `tx-${crypto.randomUUID()}`,
                    type: type,
                    amount: amount,
                    currency: "USD",
                    date: new Date().toISOString(),
                    description: description,
                },
                ...state.transactions,
            ],
        })),
});