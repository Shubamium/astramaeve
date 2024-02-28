import type { Metadata } from "next";
import { Cinzel_Decorative } from "next/font/google";
import "./globals.scss";

const cinzelDecorative = Cinzel_Decorative({ subsets: ["latin"],weight:['400','700','900'] });

export const metadata: Metadata = {
  title: "Astra Maeve",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cinzelDecorative.className}>

				<img src="/decors/giant_arrow_circle.png" alt=""  className="decor_background-circle"/>
				{children}
			</body>
    </html>
  );
}
