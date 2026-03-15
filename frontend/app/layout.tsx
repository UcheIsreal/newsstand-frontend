import type { Metadata } from "next";
import "./globals.css";
import CategoryNav from "@/components/CategoryNav";

export const metadata: Metadata = {
  title: "Newsstand — All the News in One Place",
  description: "Your digital newsstand. Finance, politics, sports, business, tech and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        {/* Header */}
        <header className="bg-gray-900 text-white py-3 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight">
              📰 Newsstand
            </h1>
            <span className="text-xs text-gray-400">Updated every 30 mins</span>
          </div>
        </header>

        {/* Category Nav */}
        <CategoryNav />

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
