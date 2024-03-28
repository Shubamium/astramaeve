'use client'
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import {motion,AnimatePresence} from 'framer-motion'
type Props = {}


const chapters = [
	`
	The enchanting elven realm of Salvere stands as an elusive sanctuary, shrouded in mystery and seldom graced by the presence of mortal souls. \n
	The reclusive elven residents prefer solitude from the mundane world, steering clear of human affairs and guarding their kingdom with a formidable barrier.	
	`,
	`
	Nestled in the heart of the European continent, Salvere's dimensions are substantial enough to sustain a notable population, yet its clever concealment remains intact despite humanity's remarkable technological progress over the past century.
	`,
	`
	The governance of the elven kingdom is a delicate balance which is maintained through a system of rule that blends regality with communal consensus. The kingdom is overseen by a sovereign, bearing the title of king, and a council composed of influential noble families, each entrusted with representing a specific segment of the sprawling realm. This council serves as the crucible where the alchemy of governance takes place, ensuring the diverse needs and concerns of the populace are considered. \n
Each law, in fact, will undergo a public approval after its creation, ensuing the kingdom’s commitment to fairness, and acting as a protection against potential biases.
	`,
	`
	Amidst the noble families, a hierarchy emerges based on influence and proximity to the royal lineage. Those families that maintain direct ties to the ruling monarch are bestowed with a unique honor—they bear the illustrious name "Salvere" in the entirety of their names.\n
This prestigious association becomes a symbol of extreme pride among the members of these influential families, signifying not only their proximity to the royal family but also their significant role in shaping the kingdom's destiny.

	`,
	`
	Within the kingdom's borders, a diverse populace thrives, composed of high elves, wood elves, and half-elves, each enjoying equal rights under the benevolent rule of the royal family.\n 
Salvere, in essence, is a tranquil haven, occasionally bordering on the mundane, shielded from the tumultuous events of the wider world and deeply ingrained in its independence. 
The kingdom coexists harmoniously with the lush, enveloping embrace of nature that blankets every corner of its territory.


	`,
	`
	Should you, dear guest, be blessed with the rare opportunity to venture into Salvere, you'll encounter a welcoming ambiance and a populace that extends warm greetings, cities and villages burst with vitality, and as you explore, you may find yourself pondering the curious mysteries of life beyond the potent magic barrier that steadfastly conceals this yet-to-be-discovered realm from the rest of the world.


	`
]
export default function Salvere({}: Props) {
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
		<section className="salvere" id="salvere">
				<div className="content">
					<article className="story-part">
						<div className="salvere-title">
								<h2>◈ SALVERE</h2>
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
						<div className="controls">
							<button className='btn btn-ctrl' onClick={prev}><FaArrowLeft/></button>
							<p className='page-indicator'>{activeChapter+1}/{chapters.length}</p>
							<button className='btn btn-ctrl' onClick={next}><FaArrowRight/></button>
						</div>
					</article>
					<figure>
						<img src="" alt="" className='story-image' />
					</figure>
				</div>
			</section>
	)
}