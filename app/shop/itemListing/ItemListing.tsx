'use client'
import React from 'react'
import './itemListing.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination,Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
type Props = {
	items:itemList[]
}

import { CgShoppingCart } from 'react-icons/cg'
import { itemList } from '../page';
import { urlFor } from '@/db/client';

export default function ItemListing({items}: Props) {

	return (
		<div className="item-listing">
			<Swiper   
				className='item-list'
				slidesPerView={'auto'}
				pagination={{
          dynamicBullets: true,
					enabled:true,
					type:'bullets'
        }}
				navigation={{
					nextEl:'.next-el',
					prevEl:'.prev-el',
					enabled:true
				}}
				modules={[Pagination,Navigation]}
				spaceBetween={30}
			>
				
				<div className="swiper-scrollbar"></div>
				{items.map((item,index)=>{
					return (
						<SwiperSlide className="item" key={item._id}>
							<div className="item-price">
									<p>{item.price}</p>
							</div>
							<img src="/decors/mini_logo.png" alt="" className='decor_mini ni' />
							<div className="item-image">
								<img src={urlFor(item.image).url()} alt="" />
							</div>
							<div className="item-info">
								<p className='item-title ni'>{item.title}</p>
								<div className="action">
									<a href={item.buy_link} target='_blank' className='btn btn-styled btn-buy'> <CgShoppingCart/> BUY</a>
								</div>
							</div>
						</SwiperSlide>
					)
				})}
				<div className="swiper-nav">
					<button className='btn prev-el'>
						<img src="/decors/gallery-btn.png" alt="" />
					</button>
					<button className='btn next-el'>
						<img src="/decors/gallery-btn.png" alt="" />
					</button>
				</div>
		</Swiper>
	
		</div>
	)
}