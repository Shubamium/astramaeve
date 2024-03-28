'use client'
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import {AnimatePresence, motion} from 'framer-motion'
type Props = {}


const chapters = [
	`Nestled in the far reaches of the expansive forest that blankets the Salvere Kingdom, the Amethyst Magic Tower, also simply known as the Amethyst Tower, stands as a masterpiece of elven craftsmanship in one of the kingdom's most secluded corners. \n 
	Despite its intricate design, this magical haven remains a well-hidden gem among the trees, a secret enclave forged by the Head Mage and one of its sole inhabitants, Astra.
	`,
	`
	The tower's numerous relocations, a consequence of the countless daring experiments conducted within, has turned it into a hidden spectacle. Amidst the forest's emerald embrace, the structure is skillfully concealed, shielded by the thick foliage. \n
	The constant rearrangement, prompted by Astra's penchant for extreme magical exploration, has given rise to sporadic explosions and Alvion's perennial cries of dismay. The beleaguered butler laments his fate each time, forced to clean the aftermath of his master's experiments.
	`,
	`
	While the tower boasts an elaborate design, featuring libraries, laboratories, and numerous (yet unsurprisingly unused) living quarters, its essence is straightforward.\n\n
	A magical elevator, conveniently positioned in the tower's core, facilitates seamless transitions between its various floors.
	`,
	`
	Adding a touch of whimsy to its serious pursuits of magic, the tower is also home to a bountiful population of rabbits and slimes introduced by the Head Mage, under the guise of being "cute."\n
	Over the years, an intriguing development occurred, resulting in the emergence of hybrids between the two species. Now, fortunate visitors may find themselves enchanted by the sight of adorable slime rabbits frolicking in and around the tower, a testament to the magical wonders that unfold within its walls.
	`
]
export default function Tower({}: Props) {
	const [activeChapter,setActiveChapter] = useState(0);

	const next = () =>{
		setActiveChapter((prev)=>{
			return Math.min(prev+1,chapters.length-1)
		})
	}
	const prev = () =>{
		setActiveChapter((prev)=>{
			return Math.max(prev-1,0)
		})
	}
	return (
		<section className="tower" id="tower">

				<div className="decor-circle ni">
					<motion.img 
						initial={{opacity:0,scale:2,rotate:-40}}
						whileInView={{opacity:1,scale:1,rotate:0}}
						transition={{delay:0.5,duration:.8}}
					src="/decors/circle_basic.png" alt="" className='circle-dec' />
				</div>
				<div className="content">
					<div className="tower-title">
							<hr />
							<h2>THE AMETHYST TOWER</h2>
							<hr />
					</div>
							
					<AnimatePresence mode='wait'>
						<motion.p 
							initial={{x:-200,opacity:0}}
							animate={{x:0,opacity:1}}
							exit={{x:200,opacity:0}}
							transition={{duration:0.5}}
						className='story-text' key={activeChapter}>
							{chapters[activeChapter].split(' ').map((word,index)=>{
								return	<motion.span 
									initial={{opacity:0,y:10}}
									animate={{opacity:1,y:0}}
									transition={{duration:0.5,delay:index*0.1}}
								key={'tower-text'+index}>
									{' '+ word}
							</motion.span>
							})}
						</motion.p>
					</AnimatePresence>

					<div className="controls">
							<button className='btn btn-ctrl' onClick={prev}><FaArrowLeft/></button>
							<p className='page-indicator'>{activeChapter+1}/{chapters.length}</p>
							<button className='btn btn-ctrl' onClick={next}><FaArrowRight/></button>
					</div>
				</div>
			</section>
	)
}