import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Alice Lin",
	description: "Alice Lin Digital Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn("min-h-screen bg-background font-sans", inter.variable)}
			>
				<NavBar />
				<div className="mt-14">{children}</div>
			</body>
		</html>
	);
}
