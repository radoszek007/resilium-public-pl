import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resilium Public | System trenowanych reakcji",
  description:
    "Praktyczny system radzenia sobie z presją, stresem, konfliktami i wymagającymi sytuacjami życiowymi."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
