import React from 'react'
import './pageTitle.scss'
type Props = {
	subtitle:string;
	title:string;
}

export default function PageTitle({subtitle,title}: Props) {
	return (
		<div className='page-title'>
			<div className="text-part">
				<p className='subtitle'> {'⬘'} {subtitle} {'⬘'} </p>
				<h2 className='title'>✦ {title} ✦</h2>
			</div>
			<div className="decor_diamonds">
				<div className="diamonds a"></div>
				<div className="diamonds b"></div>
				<div className="diamonds a"></div>
			</div>
		</div>
	)
}