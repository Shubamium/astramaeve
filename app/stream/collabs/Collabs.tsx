'use client'
import React from 'react'
import { FaMailBulk } from 'react-icons/fa'
import { FaArrowRight, FaDiscord, FaTwitter } from 'react-icons/fa6'
import {motion} from 'framer-motion'
type Props = {}

export default function Collabs({}: Props) {
	return (
		<section className="collabs" id="collabs">

			<div className="art-part">
				<motion.img 
					initial={{opacity:0,scale:0}}
					whileInView={{opacity:1,scale:1}}
					style={{transformOrigin:'bottom'}}
					transition={{duration:0.7}}
					src="/arts/collab-art.png" alt="" className='collab-art' />
			</div>
			<div className="collab-text">
				<p className='description'>If you would like to collab, please feel free to reach us via Email, Twitter DM or Discord! <br /> <br /> You can consult the current list of games that are available for collabs: </p>
			</div>
			<div className="action">
				<div className="collab-links">
						<motion.div
							initial={{opacity:0,scale:5,rotate:-40}}
							animate={{opacity:1,scale:1,rotate:0}}
							transition={{duration:0.7,delay:0.5, type:'spring', stiffness:150,damping:12}}
						>
							<a href='mailto:astralias.maeve@gmail.com' target='_blank' className="btn collab-link">
									<FaMailBulk/>
							</a>
						</motion.div>
						<motion.div
							initial={{opacity:0,scale:5,rotate:-40}}
							animate={{opacity:1,scale:1,rotate:0}}
							transition={{duration:0.7,delay:0.7, type:'spring', stiffness:150,damping:12}}
						>
							<a href='https://discord.com/invite/hqWVaBQyn7' target='_blank' className="btn collab-link">
								<FaDiscord/>
						</a>
						</motion.div>

						<motion.div
							initial={{opacity:0,scale:5,rotate:-40}}
							animate={{opacity:1,scale:1,rotate:0}}
							transition={{duration:0.7,delay:0.9, type:'spring', stiffness:150,damping:12}}
						>
							<a href='https://twitter.com/astra_maeve' target='_blank' className="btn collab-link">
								<FaTwitter/>
						</a>
						</motion.div>
						{/* <a href='https://discord.com/invite/hqWVaBQyn7' target='_blank' className="btn collab-link">
								<FaDiscord/>
						</a>
						<a href='https://twitter.com/astra_maeve' target='_blank' className="btn collab-link">
								<FaTwitter/>
						</a> */}

				</div>
				<a href='https://docs.google.com/document/d/19heJ2GMrCj-LszUBaOi3ZGqm6Tva8y669ZnDs_zeXuk/edit?usp=sharing' target='_blank' className="btn btn-styled">
						✦ Game List <FaArrowRight/>
				</a>
			</div>
		</section>
	)
}