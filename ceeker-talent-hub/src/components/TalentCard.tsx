import { ShieldCheck } from "lucide-react";
import Link from "next/link";

interface TalentCardProps {
    talent: {
        handle: string;
        name: string;
        role: string;
        skills: string[];
        bountiesCount: number;
        verified: boolean;
    };
}

export default function TalentCard({ talent }: TalentCardProps) {
    return (
        <div className="group bg-[#0A0A0A] border border-white/5 hover:border-ceeker-primary/30 p-8 rounded-3xl transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-ceeker-primary/20 to-ceeker-secondary/20 mb-6 flex items-center justify-center text-3xl font-bold text-ceeker-primary border border-white/5 overflow-hidden">
                {talent.name.charAt(0)}
            </div>

            <h3 className="text-xl font-bold mb-1 tracking-tight">{talent.name}</h3>
            <p className="text-white/40 text-sm mb-4 font-mono">@{talent.handle}</p>

            <div className="text-ceeker-secondary text-sm font-semibold mb-4">
                {talent.role}
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {talent.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white/5 text-white/30 text-[11px] rounded-full font-medium uppercase tracking-wider">
                        {skill}
                    </span>
                ))}
            </div>

            <div className="w-full flex items-center justify-between pt-6 mb-8">
                <div className="text-left">
                    <div className="text-xl font-bold">{talent.bountiesCount}</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest">Bounties</div>
                </div>

                {talent.verified && (
                    <div className="flex items-center gap-1.5 text-ceeker-accent font-bold text-[10px] uppercase tracking-widest bg-ceeker-accent/10 px-3 py-1.5 rounded-full">
                        <ShieldCheck size={12} strokeWidth={3} />
                        Verified Work
                    </div>
                )}
            </div>

            <Link
                href={`/talent/${talent.handle}`}
                className="w-full py-4 bg-white text-black font-bold rounded-none hover:bg-ceeker-primary hover:text-white transition-all text-sm"
            >
                View Profile
            </Link>
        </div>
    );
}
