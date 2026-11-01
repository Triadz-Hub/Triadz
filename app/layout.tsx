import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://triadz.in"),
  title: {
    default: "Triadz | Custom Software, Digital Marketing & Creative Media",
    template: "%s | Triadz",
  },
  description:
    "Triadz transforms brands through custom software development, targeted digital marketing, high-impact content creation, AI video generation, and cutting-edge 3D design.",
  keywords: [
    "software development company",
    "web and mobile app development",
    "digital marketing services",
    "content creation agency",
    "AI video generation",
    "3D product design",
    "3D animation and modeling",
    "custom software solutions",
    "Triadz",
  ],
  authors: [{ name: "Triadz" }],
  creator: "Triadz",
  publisher: "Triadz",
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
    locale: "en_US",
    url: "https://triadz.in",
    title: "Triadz | Custom Software, Digital Marketing & Creative Media",
    description:
      "Scale your digital presence with Triadz. We build scalable software, craft high-converting digital marketing campaigns, and produce next-gen 3D and video content.",
    siteName: "Triadz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Triadz - Software Development, Digital Marketing & 3D Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Triadz | Custom Software, Digital Marketing & Creative Media",
    description:
      "Custom software engineering, performance marketing, content production, and 3D visual experiences.",
    images: ["/og-image.png"],
    creator: "@triadz",
  },
  alternates: {
    canonical: "https://triadz.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
