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




export const metadata = {
  title: "Social Media Analysis Dashboard",
  description: " Analyze social media data to get insights.",
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
