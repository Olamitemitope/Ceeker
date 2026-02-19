"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoginModal from "./LoginModal";

export default function Navbar() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isActive = (path: string) => pathname === path;

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[padding,background-color,backdrop-filter] ${scrolled ? "py-4 bg-black/80 backdrop-blur-lg" : "py-6 bg-black"
                    }`}
            >
                <nav className="max-w-[1200px] mx-auto px-8 flex justify-between items-center relative">
                    <div className="flex items-center gap-3">
                        <Link href="http://localhost:7000">
                            <Image
                                src="/assets/ceeker_logo.png"
                                alt="Ceeker"
                                width={120}
                                height={32}
                                className="h-8 w-auto transform-gpu"
                            />
                        </Link>
                    </div>

                    <ul className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                        <li>
                            <a href="http://localhost:7000/index.html" className="text-[#888888] hover:text-white transition-colors duration-200 font-medium">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="http://localhost:7000/bounties.html" className="text-[#888888] hover:text-white transition-colors duration-200 font-medium">
                                Bounties
                            </a>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className={`font-medium transition-all duration-200 pb-[2px] ${isActive("/")
                                    ? "text-white border-b-2 border-[#A954A8]"
                                    : "text-[#888888] hover:text-white"
                                    }`}
                            >
                                Talent Hub
                            </Link>
                        </li>
                        <li>
                            <a href="http://localhost:7000/events.html" className="text-[#888888] hover:text-white transition-colors duration-200 font-medium">
                                Events
                            </a>
                        </li>
                        <li>
                            <a href="http://localhost:7000/#about" className="text-[#888888] hover:text-white transition-colors duration-200 font-medium">
                                About
                            </a>
                        </li>
                    </ul>

                    <div className="flex items-center">
                        <button
                            onClick={() => setIsLoginOpen(true)}
                            className="ceeker-cta ceeker-cta-primary"
                        >
                            Get Started
                        </button>
                    </div>
                </nav>
            </header>

            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
}
