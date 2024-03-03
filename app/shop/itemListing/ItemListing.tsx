'use client'
import React from 'react'
import './itemListing.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';

type Props = {
	items:itemList[]
}
import { Pagination,Navigation } from 'swiper/modules'
import { CgShoppingCart } from 'react-icons/cg'
import { itemList } from '../page';
import { urlFor } from '@/db/client';

export default function ItemListing({items}: Props) {

	return (
		<div className="item-listing">
			<Swiper   
				className='item-list'
				// slidesPerView={4}
				centeredSlides={true}
				slidesPerView={'auto'}
				pagination={{
          dynamicBullets: true,
					enabled:true
        }}
				navigation={{
					enabled:true
				}}
				modules={[Pagination,Navigation]}
				spaceBetween={30}
				// centeredSlides={true}
			>
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
			
		</Swiper>
		</div>
	)
}