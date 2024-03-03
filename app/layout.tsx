import type { Metadata } from "next";
import { Cinzel_Decorative, Lora } from "next/font/google";
import "./globals.scss";
import Navigation from "./components/layout/navigation/Navigation";
import { CSSProperties } from "react";
import Loading from "./components/loading/Loading";


const cinzelDecorative = Cinzel_Decorative({ subsets: ["latin"],weight:['400','700','900'] });
const lora = Lora({ subsets: ["latin"],weight:['400','700'] });


const meta = {
	title: "Astra Maeve | Vtuber | The Amethyst Tower",
  description: `
	Welcome to Astra's corner of the internet! A vibrant Vtuber and Elf variety streamer,
	self-proclaimed coffee-addicted maniac who shares her adventures on Twitch and
	YouTube!
	Join her as she dives into games, indulges in random DIY projects, tries to draw live and
	serenades her audience with live singing performances.
	Dive into Astra's world of entertainment and creativity - there's always something
	exciting happening here!
	`,
}


const title = meta.title

const description = meta.description
const banner = 'https://i.ibb.co/5YDW11H/Banner.png'

export const metadata: Metadata = {
	title: title,

	metadataBase: new URL('https://astramaeve.com'),

	openGraph:{
		url:'https://astramaeve.com',
		title:title,
		description:description,
		authors:"shubamium",
		images:[
			banner
		]
	},
		twitter:{
		title:title,
		card:'summary_large_image',
		images:[
			banner
		]
	},
	description: description
}

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
