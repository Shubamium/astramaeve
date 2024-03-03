import React from 'react'
import PageTitle from '../components/layout/pageTitle/PageTitle'
import ItemListing from './itemListing/ItemListing'
import ShopNavigation from './shopNavigation/ShopNavigation'
import './shop.scss'
import ShopHeading from './shopHeading/ShopHeading'
import { fetchData } from '@/db/client'
type Props = {}

export type itemList = {
	_id:string,
	title:string,
	price:string,
	buy_link:string,
	image:any,
}
export default async function page({}: Props) {
	const shopData = await fetchData<itemList[]>(`
		*[_type == 'shop'] {
			_id,
			title,
			price,
			buy_link,
			image
		}
	`);
	
	return (
		<main id="page_shop">
			<PageTitle
				title='Shop'
				subtitle='item listing and commission info'
			/>
			<ShopNavigation active="shop"/>
			<ItemListing
				items={
					shopData
				}
			/>
			<ShopHeading
				title='Guidelines'
				description={`Don't forget to refer to my guidelines every time you consider making a purchase. You might find additional ones tucked away within the shop listings! It's always a good idea to double-check before making a decision.`}
			/>
			<section className='shop-guidelines'>
				<div className="confine">

					<div className="terms">
						<img src="/decors/mini_logo.png" alt="" className='decor decor_logo' />
						<img src="/decors/gold-star.png" alt="" className='decor decor_star' />
						<p>I only provide digital items for sale. If this will change in the future, the terms will be updated.</p>
					</div>
					<div className="terms">
						<img src="/decors/mini_logo.png" alt="" className='decor decor_logo' />
						<img src="/decors/gold-star.png" alt="" className='decor decor_star' />
						<p>Unauthorized redistribution, claiming, or modification of my creations is strictly prohibited unless stated otherwise in the terms of use of said item. Please respect the originality and integrity of the work.</p>
					</div>
					<div className="terms">
						<img src="/decors/mini_logo.png" alt="" className='decor decor_logo' />
						<img src="/decors/gold-star.png" alt="" className='decor decor_star' />
						<p>
							Commercial utilization of my merchandise is not allowed. Artists have been commissioned for specific rights, and any commercial use requires proper authorization.
						</p>
					</div>
					<div className="terms">
						<img src="/decors/mini_logo.png" alt="" className='decor decor_logo' />
						<img src="/decors/gold-star.png" alt="" className='decor decor_star' />
						<p>
						For the potential commercial use of said item, please reach me privately and the matter will be discussed with me and the artist that created the piece
						</p>
					</div>
					<div className="terms">
						<img src="/decors/mini_logo.png" alt="" className='decor decor_logo' />
						<img src="/decors/gold-star.png" alt="" className='decor decor_star' />
						<p>
						I retain the right to withdraw any of my creations from the market without providing a detailed explanation.
						</p>
					</div>
					<div className="terms">
						<img src="/decors/mini_logo.png" alt="" className='decor decor_logo' />
						<img src="/decors/gold-star.png" alt="" className='decor decor_star' />
						<p>
							Please always check the terms of use of each item provided for sale. If the use won’t fall within those specified, consequences may apply.
						</p>
					</div>
					<div className="terms">
						<img src="/decors/mini_logo.png" alt="" className='decor decor_logo' />
						<img src="/decors/gold-star.png" alt="" className='decor decor_star' />
						<p>
						Avoid using my products for political, religious, racist, or hate speech purposes, or in violation of any rights.
						</p>
					</div>
					<div className="terms">
						<img src="/decors/mini_logo.png" alt="" className='decor decor_logo' />
						<img src="/decors/gold-star.png" alt="" className='decor decor_star' />
						<p>
						Maintain the credits intact. Do not remove or alter them in any way.
						</p>
					</div>
					<div className="terms">
						<img src="/decors/mini_logo.png" alt="" className='decor decor_logo' />
						<img src="/decors/gold-star.png" alt="" className='decor decor_star' />
						<p>
						Refrain from utilizing my products for NFTs or AI applications and training. Such usage is expressly forbidden.
						</p>
					</div>
					<div className="terms">
						<img src="/decors/mini_logo.png" alt="" className='decor decor_logo' />
						<img src="/decors/gold-star.png" alt="" className='decor decor_star' />
						<p>
						I am solely accountable for the sale of my products; any subsequent use is the responsibility of the user.
						</p>
					</div>
				</div>
			</section>
		</main>
	)
}