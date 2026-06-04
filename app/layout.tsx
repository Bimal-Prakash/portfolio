import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bimal P.B | Applied AI Engineer",
  description: "Retro pixel portfolio for Bimal P.B, Applied AI Engineer building AI assistants, automation tools, and multimodal systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
