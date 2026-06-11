import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface HeaderNavigation {
    onBack: () => void;
    gameName: string;
    tournamentName: string;
    status: string;
}

export function HeaderNavigation({ onBack, gameName, tournamentName, status }: HeaderNavigation) {
    return (
        <div className="flex flex-col gap-3">
            <Button
                variant="ghost"
                size="sm"
                className="w-fit text-muted-foreground hover:text-foreground -ml-2"
                onClick={onBack}
            >
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Tournaments
            </Button>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-1">
                    <span className="text-xs font-black uppercase tracking-widest text-primary">
                        {gameName}
                    </span>
                    <h1 className="text-3xl font-black tracking-tight text-foreground">
                        {tournamentName}
                    </h1>
                </div>
                <Badge className={`text-xs font-extrabold px-3 py-1 uppercase tracking-widest w-fit h-fit
                        ${status === 'open' ? 'bg-primary text-primary-foreground animate-pulse' : ''} 
                        ${status === 'active' ? 'bg-success/20 text-success border border-success/30' : ''}
                    `}>
                    {status}
                </Badge>
            </div>
        </div>
    );
}