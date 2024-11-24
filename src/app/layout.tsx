import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Regular.woff',
      weight: '400'
    },
    {
      path: './fonts/Satoshi-Medium.woff',
      weight: '500'
    },
    {
      path: './fonts/Satoshi-Bold.woff',
      weight: '700'
    }
  ],
  variable: '--font-satoshi'
})

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
        className={`${satoshi.variable} font-satoshi antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
