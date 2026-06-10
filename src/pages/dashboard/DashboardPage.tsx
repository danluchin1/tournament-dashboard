import { useAppStore } from "@/store";
import { UserBalanceCard } from "./UserBalanceCard";
import { SecondaryMetrics } from "./SecondaryMetrics";
import { Activity, Trophy } from "lucide-react";

export default function DashboardPage() {
    const balance = useAppStore((state) => state.balance);
    const tournaments = useAppStore((state) => state.tournaments);

    const activeTournaments = tournaments.filter((t) => t.status === "active").length;
    const totalPrize = tournaments.reduce((acc, t) => acc + t.prizePool, 0);

    return (
        // <div className="flex flex-col gap-4 p-6">
        //     <UserBalanceCard balance={balance}/>
        //     <SecondaryMetrics title="Active Tournaments" amount={activeTournaments} icon={Activity} />
        //     <SecondaryMetrics title="Total Prize Pool" amount={totalPrize} icon={Trophy} />
        // </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch w-full max-w-5xl mx-auto p-6">
                <UserBalanceCard balance={balance} />
            <div className="flex flex-col gap-4">
                <SecondaryMetrics title="Active Tournaments" amount={activeTournaments.toLocaleString()} icon={Activity} />
                <SecondaryMetrics title="Total Prize Pool" amount={`$${totalPrize.toLocaleString()}`} icon={Trophy} />
            </div>
        </div>
    );
}