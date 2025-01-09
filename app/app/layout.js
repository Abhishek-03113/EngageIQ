import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
});




// SEO Metadata
export const metadata = {
  metadataBase: new URL("https://iq-engage.vercel.app"),
  title: "EngageIQ: Social Media Analysis",
  description: "Analyze social media data to get insights.",
  keywords: "EngageIQ, Social Media Analysis, engage iq, codewithdinesh, Langflow, Web Development, Next.js, React",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "EngageIQ: Social Media Analysis",
    description: "Analyze social media data to get insights.",
    url: "https://iq-engage.vercel.app",
    siteName: "EngageIQ",
    images: [
      {
        url: "/dashboard.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EngageIQ: Social Media Analysis",
    description: "Analyze social media data to get insights.",
    creator: "codewithdinesh",
    images: [
      {
        url: "/dashboard.png",
        alt: "EngageIQ: Social Media Analysis",
      },
    ],
  },
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable} antialiased`}
      >
        {children}

      </body>
    </html>
  );
}
