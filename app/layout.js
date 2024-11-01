import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MoiDo🐠",
  description: "A modern, minimal, and accessible todo app.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="flex items-center justify-center w-full scroll-smooth"
    >

      <Head>
        <link rel="icon" href="/favicon.ico" /> {/* Link to your favicon */}
      </Head>
      <body
        className={`${inter.className} bg-primary transition-all duration-700`}
        data-theme="blue"
      >
        {children}
      </body>
    </html>
  );
}
