'use client'
import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import {motion} from 'framer-motion'
type Props = {}


const chapters = [
	`
	Once upon a time in the enchanted realm of Twitter, a joke was born, not through the majestic pen of a comedy wizard, but from the clumsy keystrokes of a mere elf. \n
And lo and behold, it became the sacred title of an entire fandom – the Test Subjects!

	`,
	`
	Deep within the mysterious Amethyst Tower, where Wi-Fi signals play hide and seek, there echoes a chorus of screams. Brave souls who dare to explore the remote corners of this double faced fortress are rewarded with a sight to behold – the dungeons!\n No, not the dragon-guarded kind, but the ones where the unsuspecting Guests find themselves, willingly or not.
	`,
	`
	In this not-so-hidden underworld, some Guests seem to be having the time of their virtual lives, while others contemplate the choices that led them to this purgatory.\n

This is the whimsical dance of life in the Amethyst Tower – where hashtags are spells, tweets are potions, and the occasional retweet is a digital high-five from the social media gods! 
	`,
	`
	And in the hallowed halls of the Tower, if  the air is thick with the sweet scent of success. And what might be the pinnacle of career ascension, you ask? None other than the illustrious title of "Assistant"!
	`,
	`
	But wait, there's more! Brace yourself for a symphony of explosions and side effects that could rival a fireworks display. Forget about peaceful coffee breaks; here, the Tower soundtrack is the gentle harmony of the “occasional” experiment explosion.
	`,

	`
	Yet fear not, brave soul! This promotion is a front-row ticket to the circus of madness, where chaos reigns supreme, and the coffee machine might just give you suspicious substances instead of coffee.\n
So, join the revelry, where the battle cry is not just "coffee," but "coff" – because in the realm of the Amethyst Tower, everyone is welcome!
	`
]
export default function Fandom({}: Props) {
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
		<section className="fandom" id="fandom">
				<div className="content">
					<article className="story-part">
						<div className="salvere-title">
								<h2>◈ Fandom</h2>
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
								key={'salver-text'+index}>
									{' '+ word}
							</motion.span>
							})}
						</motion.p>
					</AnimatePresence>
						<div className="action">
						
							<div className="controls">
								<button className='btn btn-ctrl' onClick={prev}><FaArrowLeft/></button>
								<p className='page-indicator'>{activeChapter+1}/{chapters.length}</p>
								<button className='btn btn-ctrl' onClick={next}><FaArrowRight/></button>
							</div>
							<a href='https://docs.google.com/document/d/1E2Lzo3QkM2IA19FLSZDgZx-lVGhppO717POOdC8hbOA' target='_blank' className="btn btn-styled">
							✦ More Info <FaArrowRight/>
							</a>
						</div>
					</article>
					<figure>
						<img src="" alt="" className='story-image' />
					</figure>
				</div>
			</section>
	)
}