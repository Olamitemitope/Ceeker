import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ceeker Talent Hub | Discover Proven Builders",
    description: "Hire by proof of work, not profiles.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased pt-24`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
