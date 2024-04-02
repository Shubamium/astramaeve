'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { PiShootingStarBold } from 'react-icons/pi'
import { GiScrollQuill } from 'react-icons/gi'

type Props = {}

export default function StroyThree({}: Props) {
	return (
		<section className="story-three">
					<div className="decor-container">
						<motion.img 
							initial={{scale:0,opacity:0}}
							whileInView={{scale:1,opacity:1}}
							transition={{duration:2,delay:0}}
						src="/decors/story_circle.png" alt="" className='story_circle l ' />
						
					</div>
					<div className="story-container">
						<motion.div 
							initial={{x:200,opacity:0}}
							whileInView={{x:0,opacity:1}}
							transition={{duration:0.5,delay:0.2}}
						className="story-part">
							<img src="/arts/chibi_storya.png" alt="" className='chibi'/>
							<p>{`Despite her grandfather's aspirations for her to enter politics, Astra's heart remained devoted to magic. Instead of following the expected political path, she became renowned as the most powerful mage of her time, earning the title of "Archmage" and claiming ownership of her tower, The Amethyst Tower. `}</p>
						</motion.div>
						<motion.div 
								initial={{x:-200,opacity:0}}
								whileInView={{x:0,opacity:1}}
								transition={{duration:0.5,delay:0.2}}
						className="story-part">
							<img src="/arts/chibi_storyb.png" alt="" className='chibi'/>
							<p>{`Astra's personality holds a tapestry of contradictions. She cherished company but preferred solitude, possessed a profound love for magical experimentation yet displayed laziness to an extreme. `}</p>
						</motion.div>
						
						<motion.div
								initial={{x:200,y:0,opacity:0}}
								whileInView={{x:0,y:0,opacity:1}}
								transition={{duration:0.5,delay:0.2}}
						className="story-part">
							<img src="/arts/kurukuru.gif" alt="" className='chibi'/>
							<p>When not immersed in her latest research in the Amethyst Tower, she could be found teaching at Elvedere Academy or indulging in games in her messy room, much to the chagrin of her butler, Alvion, the only other resident of the tower.</p>
							<a href="https://sites.google.com/view/theamethystarchives/home-page" target='_blank' className='btn btn-styled'>
								<PiShootingStarBold/> More Stories <GiScrollQuill/>
							</a>
						</motion.div>
					</div>
					<div className="decor-container">
						<motion.img 
								initial={{x:-200,opacity:0}}
								whileInView={{x:0,opacity:1}}
								transition={{duration:2,delay:0}}
								src="/decors/story_circle.png" alt="" className='story_circle r' />
					</div>
			</section>
	)
}