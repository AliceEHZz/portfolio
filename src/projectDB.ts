import React from "react";
export const projects = [
	{
		id: "PicTok",
		title: "PicTok",
		subtitle: "VISUALLY IMPAIRED, IMAGE-TO-TEXT-TO-AUDIO, AI POWERED",
		previewImage: "/images/pictok/pictok-flyer.png",
		techStacks: [
			"Typescript",
			"Tailwind CSS",
			"Shadcn",
			"React",
			"Figma",
			"Supabase",
			"AWS",
			"AudioGen from Meta",
			"GPT-4-Vision-Preview",
		],
		appName: "pictok",
		github: "https://github.com/pictok/web-app",
		demo: "https://pictok.vercel.app/",
	},
	{
		id: "receipt-radar",
		title: "Receipt Radar",
		subtitle: "A EXPENSE TRACKER WITH DYNAMIC TABLE VIEW, AI POWERED",
		previewImage: "/images/receipt-radar/Logo.png",
		techStacks: [
			"React",
			"Typescript",
			"Tailwind CSS",
			"Shadcn",
			"Figma",
			"PostgreSQL",
			"NeonDB",
			"RESTful API",
			"NextAuth.js",
			"AWS S3",
		],
		appName: "receipt-radar",
		github: "https://github.com/AliceEHZz/receipt-radar",
		demo: "https://receipt-radar.vercel.app/",
	},
	{
		id: "ChatNet",
		title: "ChatNet",
		subtitle: "CHATGPT, GEMINI, TEAM COLLABORATION, GROUP AI CHATBOT",
		previewImage: "/images/chatnet/chatnet.png",
		techStacks: [
			"JavaScript",
			"GPT-4",
			"EJS",
			"Prisma",
			"Node.js",
			"Express.js",
			"Socket.io",
			"Tailwind CSS",
		],
		appName: "ChatNet",
		github: "https://github.com/slubendo/ChatNet",
		demo: "https://github.com/slubendo/ChatNet",
	},
	{
		id: "business-website-redesign",
		title: "Business Website Redesign",
		subtitle:
			"WEBSITE REDESIGN FOR A VANCOUVER-BASED WHOLESALE SUPPLIER COMPANY",
		previewImage: "/images/website-redesign/banner.png",
		techStacks: ["Next.js", "Tailwind CSS", "Figma"],
		appName: "website-redesign",
		github: "https://github.com/AliceEHZz/bwibusiness-redesign",
		demo: "https://bwibusiness-redesign.vercel.app/",
	},
];
export interface Project {
	id: string;
	title: string;
	subtitle: string;
	previewImage: string;
	techStacks: string[];
	appName: string;
	github: string;
	demo: string;
}

export const skills = [
	{
		category: "Languages",
		skills: [
			"TypeScript",
			"JavaScript (ES6+)",
			"HTML",
			"CSS",
			"Python",
			"Bash",
			"PowerShell",
		],
	},
	{
		category: "Frameworks/Libraries",
		skills: [
			"React",
			"Node.js",
			"Tailwind",
			"Material UI",
			"Shadcn",
			"Express.js",
			"Bootstrap",
			"jQuery",
		],
	},
	{
		category: "Databases & Operating Systems",
		skills: [
			"PostgreSQL",
			"MySQL",
			"SQLite",
			"MongoDB",
			"Linux",
			"MacOS",
			"Windows",
		],
	},
	{
		category: "Tools & Services",
		skills: [
			"AWS",
			"Git",
			"Figma",
			"Visual Studio",
			"Photoshop",
			"Balsamiq",
			"PyCharm",
		],
	},
];
