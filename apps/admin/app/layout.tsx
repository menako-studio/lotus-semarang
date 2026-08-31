import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Admin Dashboard | Lotus Semarang",
  description: "Internal administrative dashboard for Lotus Health, Beauty & Care Semarang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-[#FAF7F2] text-[#241C18] antialiased">
        {children}
      </body>
    </html>
  );
}
