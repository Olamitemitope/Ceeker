import Header from "@/components/Header";
import Filters from "@/components/Filters";
import TalentCard from "@/components/TalentCard";

// Hardcoded sample talent data
const sampleTalent = [
    {
        handle: "alex_dev",
        name: "Alex Rivera",
        role: "Fullstack Developer",
        skills: ["React", "Solidity"],
        bountiesCount: 12,
        eventsCount: 4,
        verified: true,
    },
    {
        handle: "sarah_design",
        name: "Sarah Chen",
        role: "UI/UX Designer",
        skills: ["Figma", "Branding"],
        bountiesCount: 8,
        eventsCount: 2,
        verified: true,
    },
    {
        handle: "mike_protocol",
        name: "Mike Ross",
        role: "Protocol Engineer",
        skills: ["Rust", "Go"],
        bountiesCount: 15,
        eventsCount: 6,
        verified: true,
    },
    {
        handle: "jenny_art",
        name: "Jenny Doe",
        role: "Digital Artist",
        skills: ["Blender", "NFTs"],
        bountiesCount: 5,
        eventsCount: 1,
        verified: false,
    },
    {
        handle: "tom_security",
        name: "Tom Wright",
        role: "Security Researcher",
        skills: ["Auditing", "Python"],
        bountiesCount: 20,
        eventsCount: 8,
        verified: true,
    },
    {
        handle: "eliza_web3",
        name: "Eliza Moon",
        role: "Community Manager",
        skills: ["DAO", "Strategy"],
        bountiesCount: 10,
        eventsCount: 3,
        verified: true,
    }
];

export default function TalentHubPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-ceeker-primary selection:text-black">
            <Header />

            <main className="max-w-7xl mx-auto px-6 py-12">
                <Filters />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {sampleTalent.map((talent) => (
                        <TalentCard key={talent.handle} talent={talent} />
                    ))}
                </div>
            </main>
        </div>
    );
}
