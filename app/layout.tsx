import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
// import { Suspense } from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["devanagari"],
});

export const metadata = {
  title: "Glascript",
  description: "Find the perfect Apps Script library for your project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Image
          src="/Blue-Red-rects.svg"
          alt="blue Line"
          className="w-screen absolute -z-50 "
          width={100}
          height={24}
          priority
        />
        <Header />
        {/* <div className="h-16"></div> */}


        {children}

        <Footer/>
      </body>
    </html>
  );
}
