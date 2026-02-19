"use client";

import { X, Eye } from "lucide-react";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-[420px] bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-black text-white mb-2 tracking-tight">
                        Welcome Back
                    </h2>
                    <p className="text-white/60 text-[15px] font-medium">
                        Sign in to your account
                    </p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-4">
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-[#161616] border border-white/5 rounded-lg px-4 py-3.5 text-white text-[15px] placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full bg-[#161616] border border-white/5 rounded-lg px-4 py-3.5 text-white text-[15px] placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
                            />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors">
                                <Eye size={18} />
                            </button>
                        </div>

                        <div className="text-right">
                            <a href="#" className="text-white/80 text-sm font-medium hover:text-white transition-colors">
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <button className="w-full bg-white text-black font-bold py-3.5 rounded-lg hover:bg-gray-100 transition-all text-[15px] tracking-wide mt-2">
                        Sign In
                    </button>

                    <div className="relative flex items-center justify-center py-3">
                        <div className="absolute inset-x-0 h-[1px] bg-transparent"></div>
                        <span className="relative bg-[#0A0A0A] px-3 text-white/40 text-sm font-medium">
                            or continue with
                        </span>
                    </div>

                    <button className="w-full bg-[#161616] border border-white/5 text-white font-medium py-3.5 rounded-lg hover:bg-[#202020] transition-all flex items-center justify-center gap-3 text-[15px]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.52 12.29C23.52 11.43 23.4414 10.69 23.3105 10H12V14.51H18.4718C18.1882 15.96 17.3395 17.16 16.0691 18.01V20.89H19.9405C22.215 18.78 23.52 15.68 23.52 12.29Z" fill="#4285F4" />
                            <path d="M12 24C15.24 24 17.9659 22.92 19.9445 21.09L16.0732 18.21C15 18.96 13.62 19.39 12 19.39C8.875 19.39 6.22591 17.27 5.27591 14.4H1.27591V17.5C3.26455 21.43 7.32409 24 12 24Z" fill="#34A853" />
                            <path d="M5.27591 14.4C5.02591 13.67 4.88727 12.87 4.88727 12C4.88727 11.13 5.02591 10.33 5.27591 9.6V6.5H1.27591C0.465455 8.13 0 9.99 0 12C0 14.01 0.465455 15.87 1.27591 17.5L5.27591 14.4Z" fill="#FBBC05" />
                            <path d="M12 4.61C13.765 4.61 15.345 5.23 16.595 6.4L19.995 3C17.955 1.11 15.24 0 12 0C7.32409 0 3.26455 2.57 1.27591 6.5L5.27591 9.6C6.22591 6.73 8.875 4.61 12 4.61Z" fill="#EA4335" />
                        </svg>
                        Google Sign-in
                    </button>

                    <div className="text-center pt-2 text-white/50 text-[13px] font-medium">
                        Don't have an account? <a href="#" className="text-white hover:underline ml-1">Register</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
