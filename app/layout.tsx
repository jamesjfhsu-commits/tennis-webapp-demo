import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Tennis Season",
  description: "A clickable product demo for a personal Grand Slam-style tennis season.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
