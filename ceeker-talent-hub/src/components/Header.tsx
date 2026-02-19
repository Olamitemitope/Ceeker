export default function Header() {
    return (
        <header className="pt-6 pb-12 text-center">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex justify-center mb-6">
                    <span className="bg-[#A954A8] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded">
                        Talent
                    </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-white">
                    Discover Proven Builders
                </h1>
                <p className="text-white/50 text-lg md:text-xl font-medium">
                    Hire by proof of work, not profiles
                </p>
            </div>
        </header>
    );
}
