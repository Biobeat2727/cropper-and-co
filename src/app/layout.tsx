import type { Metadata } from "next";
import { Big_Shoulders, Inter, Fraunces } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Cropper & Co. Barbershop | Sandpoint, ID",
  description:
    "Barbershop and salon in Sandpoint, Idaho. Men's and boys' haircuts, beard grooming, and hot towel shaves, plus women's cuts and color. Est. 2019.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bigShoulders.variable} ${inter.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
