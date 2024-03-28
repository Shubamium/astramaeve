'use client'
import React from 'react'
import './pageTitle.scss'
import {motion} from 'framer-motion'
type Props = {
	subtitle:string;
	title:string;
}

export default function PageTitle({subtitle,title}: Props) {
	return (
		<motion.div 
			initial={{opacity:0,y:-200}}
			animate={{opacity:1,y:0}}
			transition={{duration:1,delay:0}}
		className='page-title'>
			<div className="text-part">
				<motion.p 
						initial={{opacity:0,y:-200,rotate:90}}
						animate={{opacity:1,y:0,rotate:0}}
						transition={{duration:2,delay:1.5,type:'spring',stiffness:30,damping:9}}
				className='subtitle'> {'♢⬘'} {subtitle} {'⬘♢'} </motion.p>
				<motion.h2 
						initial={{opacity:0,y:-200,rotate:-90}}
						animate={{opacity:1,y:0,rotate:0}}
						transition={{duration:2,delay:1.5,type:'spring',stiffness:20,damping:12}}
				className='title'>✦ {title} ✦</motion.h2>
			</div>
			<div className="decor_diamonds">
				<motion.div
							initial={{scale:0,rotate:180}}
							animate={{scale:1,rotate:0}}
							transition={{duration:0.4,delay:1,type:'spring',stiffness:200,damping:9}}
				className="diamonds a"></motion.div>
				<motion.div
					initial={{scale:0,rotate:-180}}
					animate={{scale:1,rotate:0}}
					transition={{duration:0.4,delay:1.3,type:'spring',stiffness:200,damping:9}}
				className="diamonds b"></motion.div>
				<motion.div
					initial={{scale:0,rotate:-180}}
					animate={{scale:1,rotate:0}}
					transition={{duration:0.4,delay:1.5,type:'spring',stiffness:200,damping:9}}
				className="diamonds a"></motion.div>
			</div>
		</motion.div>
	)
}