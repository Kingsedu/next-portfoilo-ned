import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Umeh Chinedu Kingsley Porfolio",
  description: "Portfolio website umeh chinedu Kingsley",
};
const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
