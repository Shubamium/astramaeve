import React from 'react'
import PageTitle from '../components/layout/pageTitle/PageTitle'
import ItemListing from './itemListing/ItemListing'
import ShopNavigation from './shopNavigation/ShopNavigation'
import './shop.scss'
import ShopHeading from './shopHeading/ShopHeading'
type Props = {}

export default function page({}: Props) {
	return (
		<main id="page_shop">
			<PageTitle
				title='Shop'
				subtitle='item listing and commission info'
			/>
			<ShopNavigation active="shop"/>
			<ItemListing/>
			<ShopHeading
				title='Guidelines'
				description={`Don't forget to refer to my guidelines every time you consider making a purchase. You might find additional ones tucked away within the shop listings! It's always a good idea to double-check before making a decision.`}
			/>
			<section className='shop-guidelines'>
				<div className="confine">

					<div className="terms">
						<img src="/decors/mini_logo.png" alt="" className='decor decor_logo' />
						<img src="/decors/gold-star.png" alt="" className='decor decor_star' />
						<p>Unauthorized redistribution, claiming, or modification of my creations is strictly prohibited unless stated otherwise in the terms of use of said item. Please respect the originality and integrity of the work.</p>
					</div>
					<div className="terms">
						<img src="/decors/mini_logo.png" alt="" className='decor decor_logo' />
						<img src="/decors/gold-star.png" alt="" className='decor decor_star' />
						<p>Unauthorized redistribution, claiming, or modification of my creations is strictly prohibited unless stated otherwise in the terms of use of said item. Please respect the originality and integrity of the work.</p>
					</div>
					<div className="terms">
						<img src="/decors/mini_logo.png" alt="" className='decor decor_logo' />
						<img src="/decors/gold-star.png" alt="" className='decor decor_star' />
						<p>Unauthorized redistribution, claiming, or modification of my creations is strictly prohibited unless stated otherwise in the terms of use of said item. Please respect the originality and integrity of the work.</p>
					</div>
				</div>
			</section>
		</main>
	)
}