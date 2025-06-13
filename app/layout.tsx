import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Julien Verley | Développeur",
	description:
		"Portfolio de Julien Verley, développeur d'applications frontend Javascript React Next.js. Services freelance et mentorat pour vos projets web modernes.",
	keywords: [
		"développeur frontend",
		"React",
		"Next.js",
		"JavaScript",
		"TypeScript",
		"freelance",
		"mentorat",
		"développement web",
		"applications web",
		"portfolio",
		"Site web personnel",
		"services web",
		"création de sites web",
		"création de sites internet",
		"création d'applications",
	],
	authors: [{ name: "Julien Verley" }],
	creator: "Julien Verley",
	publisher: "Julien Verley",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "fr_FR",
		url: "https://julienverley.vercel.app/",
		title: "Julien Verley | Développeur Frontend JavsaScript React",
		description:
			"Portfolio de Julien Verley, développeur d'applications frontend Javascript React Next.js. Services freelance et mentorat.",
		siteName: "Julien Verley Portfolio",
		images: [
			{
				url: "/julien-photo-opengraph.png", // ajouter une image pour l'Open Graph
				width: 1200,
				height: 630,
				alt: "Julien Verley - Développeur Frontend",
			},
		],
	},
	category: "technology",
	classification: "Portfolio professionnel",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
			</head>
			<body
				suppressHydrationWarning
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
