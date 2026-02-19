import { ChevronDown } from "lucide-react";

export default function Filters() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="relative group">
                <button className="flex items-center gap-6 px-5 py-3 bg-white/5 border border-white/10 hover:border-white/20 rounded-full transition-all text-sm font-medium">
                    <span className="text-white/40">Skill</span>
                    <span>All Skills</span>
                    <ChevronDown size={16} className="text-white/40" />
                </button>
            </div>

            <div className="relative group">
                <button className="flex items-center gap-6 px-5 py-3 bg-white/5 border border-white/10 hover:border-white/20 rounded-full transition-all text-sm font-medium">
                    <span className="text-white/40">Availability</span>
                    <span>Available</span>
                    <ChevronDown size={16} className="text-white/40" />
                </button>
            </div>
        </div>
    );
}
