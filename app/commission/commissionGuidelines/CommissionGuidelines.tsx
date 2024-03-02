'use client'
import React, { useState } from 'react'

type Props = {}

type guidelineItem ={
	title:string,
	slug:string,
	guideline:string[]
}
const guidelineList:guidelineItem[] = [
	{
		title:'Commission Platforms',
		slug:'comm_platform',
		guideline:[
			`Commissions are accepted exclusively through my Ko-fi page and VGen.
			`,
			`
			Initial contact must be made via email before placing a commission.
			`,
		]
	},
	{
		title:'Payments',
		slug:'payment',
		guideline:[
			`Payments are upfront and non-refundable unless the work remains incomplete and undelivered.
			`
		]
	},
	{
		title:'Reference and Information',
		slug:'reference',
		guideline:[
			`Always provide a clear reference for the subject of the commissioned artwork.
			`,`
			Art creation may be streamed; inform me if secrecy is required.
			`
		]
	},
	{
		title:'Creation Process',
		slug:'creation',
		guideline:[
			`Updates will be provided at each step.
			`,`
			Edits allowed during sketch phase; color changes in base color phase.
			`,`
			Subsequent edits may incur additional fees.
			`
		]
	},{
		title:'Timelines',
		slug:'timelines',
		guideline:[
			`Completion timelines will be agreed upon before project commencement.
			`,`
			Delays due to unforeseen circumstances will be promptly communicated.
			`,`
			If too many artworks are being commissioned at a given time, it might result in the creation of a waitlist.
			`
		]
	},{
		title:'Copyright and Usage',
		slug:'copyright',
		guideline:[
			`Clients are granted personal, non-commercial usage rights. Commercial use requires a separate agreement. Usage on Twitch/social media is allowed without additional commercial fee.
			`,`
			Edits allowed during sketch phase; color changes in base color phase.
			`,`
			Credit is mandatory for all commissioned works.
			`
		]
	},{
		title:'Approval and Delivery',
		slug:'approval',
		guideline:[
			`
			Watermarked previews will be provided for approval. Final, high-resolution versions are delivered upon completion without watermark.
			`
		]
	}
	
]
export default function CommissionGuidelines({}: Props) {

	const [activeGuideline, setActiveGuideline] = useState(0);
	return (
		<section className='comms-guidelines'>
				<div className="confine">
					<div className="guidelines-list">
						{guidelineList[activeGuideline].guideline.map((guide,index)=>{
							return (
								<div className="guideline" key={guidelineList[activeGuideline].slug+'-'+index}>
									<div className="icon">
										<img src="/decors/small_logo.png" alt="" />
									</div>
									<div className="text">
										<p>{guide}</p>
									</div>
								</div>
							)
						})}
						
				

					</div>
					<div className="comms-nav">
							{guidelineList.map((nav,index)=>{
								return (
									<div onClick={()=>{
										setActiveGuideline(index)
									}} className={`comms-nav-item btn ${index === activeGuideline ? 'active' : ''} `} key={'nav-'+nav.slug}>
										✦ {nav.title}
									</div>
								)
							})}
					</div>
				
				</div>
		</section>
	)
}