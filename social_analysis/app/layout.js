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

export const metadata = {
  title: "Social Media Analysis Dashboard",
  description: " Analyze social media data to get insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={"min-h-screen bg-gray-50 text-gray-800"}>
          {/* <header className={"bg-primary  py-4 px-6 shadow-md"}>
            <h1 className="text-2xl font-bold">Social Media Dashboard</h1>
          </header> */}
          <main className="container mx-auto p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
