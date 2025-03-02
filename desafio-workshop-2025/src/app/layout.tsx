import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Pokémon Card",
  description: "Cards de Pokémon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        {children}
      </body>
    </html>
  );
}
