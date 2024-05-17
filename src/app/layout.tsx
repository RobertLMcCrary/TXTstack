import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Nav from "./components/Nav";
import { useTheme } from "next-themes";

const poppins = Poppins({subsets: ['latin'], weight: ['400']});

export const metadata: Metadata = {
    title: "TXTstack",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <ClerkProvider>
            <html lang="en">
                <body className={poppins.className}>
                    <Nav />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
