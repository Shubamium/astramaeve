'use client'
import React from 'react'
import { creditData } from '../page'
import { urlFor } from '@/db/client'
import { motion,AnimatePresence} from 'framer-motion'
type Props = {
	creditList :creditData[]
}


const sampleCreditList:{
	name:string,
	role:string,
	link:string,
	pfp:string,
}[] = [
	{
		name:'DG Studio',
		role:'Live 2D Art',
		link:'https://twitter.com/KenKenMo6',
		pfp:'https://i.ibb.co/tmS2yf4/DCej7g-E8-400x400-1.jpg'
	},
	{
		name:'Astra Maeve',
		role:'Character Design',
		link:'https://twitter.com/astra_maeve',
		pfp:'https://i.ibb.co/61C5PFS/image.png'
	},{
		name:'Kuzeri',
		role:'Reference Sheet',
		link:'https://twitter.com/KUZERI3',
		pfp:'https://i.ibb.co/jrnVk3n/6-NEf-Gol2-400x400.jpg'
	},{
		name:'Astra Maeve',
		role:'Emotes, Schedule and Panels',
		link:'https://twitter.com/astra_maeve',
		pfp:'https://i.ibb.co/61C5PFS/image.png'
	},{
		name:' Rezami',
		role:'Ending Scene',
		link:'https://twitter.com/rezami_art',
		pfp:'https://i.ibb.co/1XZMjNL/5-iq-w-WE-400x400.jpg'
	},{
		name:'Shubamium',
		role:'Website',
		link:'https://twitter.com/Shubamium2',
		pfp:'https://i.ibb.co/N91BJSJ/3-J2-G4w-Mu-400x400.jpg'
	}
]
export default function Credit({creditList}: Props) {
	return (
		<section className='credits' id="credits">
			<div className="credit-header">
				<div className="confine">
				<div className="credit-title">
					◈CREDITS
				</div>
				<p>
					{`I want to express my gratitude to the incredibly talented artists and professionals who collaborated with me to bring my vision to life! Their creativity and expertise were essential in making this project a reality. If you're interested, I encourage you to take a look at their work – they're truly remarkable individuals!`}
				</p>
				</div>
			</div>

			<div className="credit-list">	
				{creditList.map((credit,index)=>{
					return 	<motion.div
					initial={{opacity:0,x:100,scale:0}}
					// animate={{opacity:1,x:0}}
					whileInView={{opacity:1,x:0,scale:1}}
					transition={{duration:0.5,delay:index*0.2}}
					className="credit" 
					key={'credit-list'+ credit.role}
					onClick={()=>{
						window.open(credit.link,'_blank')
					}}>
						<div className="credit-img">
							<img src={urlFor(credit.pfp).url() || "./arts/reference_head.png"} alt="" className='pfp' />
						</div>	
						<p className='role'>{credit.role}</p>
						<p className='name'>{credit.name}</p>
				</motion.div>
				})}
				{/* <div className="credit" onClick={()=>{
						window.open('https://google.com','_blank')
					}}>
						<div className="credit-img">
							<img src="./arts/reference_head.png" alt="" className='pfp' />
						</div>	
						<p className='role'>Chardacter Design</p>
						<p className='name'>Astra Maeve</p>
				</div>
				<div className="credit" onClick={()=>{
						window.open('https://google.com','_blank')
					}}>
						<div className="credit-img">
							<img src="./arts/reference_head.png" alt="" className='pfp' />
						</div>	
						<p className='role'>Chardacter Design</p>
						<p className='name'>Astra Maeve</p>
				</div>
				<div className="credit" onClick={()=>{
						window.open('https://google.com','_blank')
					}}>
						<div className="credit-img">
							<img src="./arts/reference_head.png" alt="" className='pfp' />
						</div>	
						<p className='role'>Chardacter Design</p>
						<p className='name'>Astra Maeve</p>
				</div>
				<div className="credit" onClick={()=>{
						window.open('https://google.com','_blank')
					}}>
						<div className="credit-img">
							<img src="./arts/reference_head.png" alt="" className='pfp' />
						</div>	
						<p className='role'>Chardacter Design</p>
						<p className='name'>Astra Maeve</p>
				</div>
				<div className="credit" onClick={()=>{
						window.open('https://google.com','_blank')
					}}>
						<div className="credit-img">
							<img src="./arts/reference_head.png" alt="" className='pfp' />
						</div>	
						<p className='role'>Chardacter Design</p>
						<p className='name'>Astra Maeve</p>
				</div>
				<div className="credit" onClick={()=>{
						window.open('https://google.com','_blank')
					}}>
						<div className="credit-img">
							<img src="./arts/reference_head.png" alt="" className='pfp' />
						</div>	
						<p className='role'>Chardacter Design</p>
						<p className='name'>Astra Maeve</p>
				</div>
				<div className="credit" onClick={()=>{
						window.open('https://google.com','_blank')
					}}>
						<div className="credit-img">
							<img src="./arts/reference_head.png" alt="" className='pfp' />
						</div>	
						<p className='role'>Chardacter Design</p>
						<p className='name'>Astra Maeve</p>
				</div>
				<div className="credit" onClick={()=>{
						window.open('https://google.com','_blank')
					}}>
						<div className="credit-img">
							<img src="./arts/reference_head.png" alt="" className='pfp' />
						</div>	
						<p className='role'>Chardacter Design</p>
						<p className='name'>Astra Maeve</p>
				</div> */}
				
			</div>
	</section>
	)
}