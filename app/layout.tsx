import type { Metadata } from "next";
import { Cinzel_Decorative, Lora } from "next/font/google";
import "./globals.scss";
import Navigation from "./components/layout/navigation/Navigation";
import { CSSProperties } from "react";
import Loading from "./components/loading/Loading";

const cinzelDecorative = Cinzel_Decorative({ subsets: ["latin"],weight:['400','700','900'] });
const lora = Lora({ subsets: ["latin"],weight:['400','700'] });

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
      <body className="body" style={{'--fontMain':lora.style.fontFamily,'--fontAlt':cinzelDecorative.style.fontFamily} as CSSProperties}>
				<Navigation/>
				{/* <Loading/> */}
				<img src="/decors/giant_arrow_circle.png" alt=""  className="decor_background-circle ni"/>
				<img src="/decors/logo_small.png" alt=""  className="decor_top logo ni"/>
				<img src="/decors/galaxy_circle.png" alt=""  className="decor_top circle ni"/>
				{children}
			</body>
    </html>
  );
}
