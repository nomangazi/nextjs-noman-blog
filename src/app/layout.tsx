import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../client/assets/styles/styles.css";
import HeaderNavbar from "@/client/components/navbar/header_navbar";

const poppins = Poppins({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-poppins',
  style: 'normal',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Noman's Blog",
  description: "A blog about web development, programming, and technology.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={poppins.variable}>
        <HeaderNavbar />
        {children}
      </body>
    </html>
  );
}
