import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshiRegular = localFont({
  src: "./fonts/Satoshi-Regular.woff",
});

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshiRegular.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
