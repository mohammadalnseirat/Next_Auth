import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header, Loader } from "@/components";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Auth App",
  description:
    "Next Auth App powered by Next.js 14 and MongoDB and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ClerkLoading>
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>
            <Header />
            {children}
            <Footer />
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
