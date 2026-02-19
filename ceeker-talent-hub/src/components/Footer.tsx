import Link from "next/link";
import Image from "next/image";
import { Github, Book, Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="footer py-24 bg-black">
            <div className="max-w-[1200px] mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-16 mb-16">
                    <div className="max-w-[320px]">
                        <div className="logo mb-6">
                            <Image src="/assets/ceeker_logo.png" alt="Ceeker" width={120} height={32} className="h-8 w-auto" />
                        </div>
                        <p className="text-[#888888] text-[0.95rem] leading-relaxed">
                            Ceeker is a Web3 native platform helping small creators earn, grow, and
                            get discovered through bounties, events, and merit based opportunities.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-white font-bold text-[1.1rem] mb-8">Platform</h4>
                            <ul className="flex flex-col gap-4">
                                <li><a href="http://localhost:7000/index.html" className="text-[#888888] hover:text-white transition-colors">Home</a></li>
                                <li><a href="http://localhost:7000/bounties.html" className="text-[#888888] hover:text-white transition-colors">Bounties</a></li>
                                <li><Link href="/" className="text-[#888888] hover:text-white transition-colors">Talent Hub</Link></li>
                                <li><a href="http://localhost:7000/events.html" className="text-[#888888] hover:text-white transition-colors">Events</a></li>
                                <li><a href="http://localhost:7000/#how-it-works" className="text-[#888888] hover:text-white transition-colors">How it Works</a></li>
                                <li><a href="http://localhost:7000/#community" className="text-[#888888] hover:text-white transition-colors">Community</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold text-[1.1rem] mb-8">Resources</h4>
                            <ul className="flex flex-col gap-4">
                                <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Documentation</a></li>
                                <li><a href="#" className="text-[#888888] hover:text-white transition-colors">FAQ</a></li>
                                <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Support</a></li>
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-white font-bold text-[1.1rem] mb-8">Connect</h4>
                            <div className="flex gap-4">
                                <a href="#" className="flex items-center justify-center w-10 h-10 border border-white/10 rounded-lg text-[#888888] hover:text-white hover:border-white/20 transition-all">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="flex items-center justify-center w-10 h-10 border border-white/10 rounded-lg text-[#888888] hover:text-white hover:border-white/20 transition-all">
                                    <Book size={20} />
                                </a>
                                <a href="#" className="flex items-center justify-center w-10 h-10 border border-white/10 rounded-lg text-[#888888] hover:text-white hover:border-white/20 transition-all">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="flex items-center justify-center w-10 h-10 border border-white/10 rounded-lg text-[#888888] hover:text-white hover:border-white/20 transition-all">
                                    <MessageCircle size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 text-center text-[#888888] text-[0.9rem]">
                    <p>© 2026 Ceeker. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
