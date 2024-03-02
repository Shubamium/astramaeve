'use client'
import React from 'react'

type Props = {}

export default function Credit({}: Props) {
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
				
			</div>
	</section>
	)
}