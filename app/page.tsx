'use client'
import Link from 'next/link';
import './home.scss';
import {motion} from 'framer-motion'
export default function Home() {
  return (
    <main id="page_home" className={'home-page'}>
			<div className="decor ni">
				<img src="/decors/frame_edge.png" alt=""  className="decor_frame top"/>
				<img src="/decors/frame_edge.png" alt=""  className="decor_frame bottom"/>
			</div>

			<div className="content">
				<motion.article 
					initial={{opacity:0,x:100}}
					animate={{opacity:1,x:0}}
					transition={{duration:1,delay:0}}
					className="text-part">
					<motion.p
						initial={{opacity:0,x:100}}
						animate={{opacity:1,x:0}}
						transition={{duration:1,delay:2}}
					className='pretitle'>astralias israndi mæve-ir salvere</motion.p>
					<motion.h1 
						initial={{opacity:0,x:100}}
						animate={{opacity:1,x:0}}
						transition={{duration:1,delay:2.5}}
					
					className='main-title'>✦ {"Astra \n Maeve".split('').map((letter,index)=>{
						return <motion.span 
							initial={{scale:1.5,y:200,opacity:0,filter:'drop-shadow(0px 0px 20px 4px white)'}}
							animate={{scale:1,y:0,opacity:1,filter:'drop-shadow(0px 0px 20px 4px transparent)'}}
							transition={{duration:0.4,delay:2.5 + (index*0.2)}}
							style={{display:'inline-block'}}
						key={'title-letter'+index} >
								{letter}
						</motion.span>
					})}</motion.h1>
					<motion.p 
						initial={{opacity:0,x:100}}
						animate={{opacity:1,x:0}}
						transition={{duration:1,delay:3}}
					
					className='subtitle'>recluse elven archmage ✵ reincarnated blue giant star ✵ loves bunnies</motion.p>
					<motion.div
						initial={{opacity:0,scale:0}}
						animate={{opacity:1,scale:1}}
						transition={{duration:1,delay:3.2}}
					
					className="action">
						<Link href="/story" className='btn btn-main'>✦ Discover</Link>
						<Link href="/stream" className='btn btn-main ghost'>✦ Catch my streams  </Link>
					</motion.div>

					<div className="decoration">
						<motion.svg 
							initial={{opacity:0}}
							animate={{opacity:0.8}}
							transition={{duration:3,delay:1.5}}
						className='decor_blob' width="480" height="487" viewBox="0 0 480 487" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M386.878 45.1618C500.204 125.73 506.08 217.39 425.512 330.716C344.944 444.043 208.442 536.121 95.1152 455.553C-18.2112 374.985 -26.5938 224.172 53.9741 110.846C134.542 -2.4804 273.551 -35.4062 386.878 45.1618Z" fill="url(#paint0_linear_134_811)"/>
							<defs>
							<linearGradient id="paint0_linear_134_811" x1="-2.83391" y1="91.7089" x2="407.557" y2="383.471" gradientUnits="userSpaceOnUse">
								<stop stopColor="#F3F6FF"/>
								<stop offset="1" stopColor="#A4BAFF" stopOpacity="0.44"/>
							</linearGradient>
							</defs>
						</motion.svg>
						<motion.img 
							initial={{opacity:-1,scale:5,rotate:180}}
							animate={{opacity:0.6,scale:1,rotate:0}}
							transition={{duration:2,delay:3,ease:'easeInOut'}}
						src="/decors/rainbow_circle.png" alt="" className='decor_rainbow' />
					</div>
				</motion.article>
				<figure className='character-part'>
						<div className="galaxy"></div>
						<motion.img 
						
							initial={{opacity:0,x:200}}
							animate={{opacity:1,x:-400}}
							transition={{duration:1.4,delay:0}}
						src="./arts/character_model_s.png" alt="" className='model' />
				</figure>
			</div>
			
    </main>
  );
}
