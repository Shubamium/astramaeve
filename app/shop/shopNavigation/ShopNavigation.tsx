import Link from 'next/link'
import React from 'react'
import './shopNavigation.scss'

type Props = {
	active:string
}

export default function ShopNavigation({
	active
}: Props) {
	return (
		<section className='shop-nav'>
			<Link href="/shop" className={`btn btn-shop-nav ${active === 'shop' ? 'active' : ''}`}>✦ SHOP</Link>
			<Link href="/commission" className={`btn btn-shop-nav ${active === 'commission' ? 'active' : ''}`}>✦ COMMISSIONS</Link>
		</section>
	)
}