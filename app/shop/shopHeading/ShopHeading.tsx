import React from 'react'
import './shopHeading.scss'
type Props = {
	title:string,
	description:string
}

export default function ShopHeading({
	title,
	description
}: Props) {
	return (
		<div className='shop-heading'>
			<div className="title-part">
				<hr />
				<h2>✦{title}✦</h2>
				<hr />
			</div>
			<p>{description}</p>
		</div>
	)
}