import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Auth App",
  description:
    "Next Auth App powered by Next.js 14 and MongoDB and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
