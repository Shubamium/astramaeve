'use client'
import React from 'react'
import './itemListing.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
type Props = {}
import 'swiper/css';
import { Pagination,Navigation } from 'swiper/modules'
import 'swiper/css/pagination';
import { CgShoppingCart } from 'react-icons/cg'

export default function ItemListing({}: Props) {
	return (
		<div className="item-listing">
			<Swiper  
				className='item-list'
				// slidesPerView={4}
				centeredSlides={true}
				slidesPerView={'auto'}
				pagination={{
          dynamicBullets: true,
        }}
				navigation={{
					enabled:true
				}}
				modules={[Pagination,Navigation]}
				spaceBetween={30}
				// centeredSlides={true}
			>
				<SwiperSlide className="item">
					<div className="item-price">
							<p>$4</p>
					</div>
					<img src="/decors/mini_logo.png" alt="" className='decor_mini ni' />
					<div className="item-image">
						<img src="" alt="" />
					</div>
					<div className="item-info">
						<p className='item-title ni'>Sleepy Mushroom Hype Cup for Twitch and Youtube - Cute jar compatible with StreamElements</p>
						<div className="action">
							<a href="#" target='_blank' className='btn btn-styled btn-buy'> <CgShoppingCart/> BUY</a>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="item">
					<div className="item-price">
							<p>$4</p>
					</div>
					<img src="/decors/mini_logo.png" alt="" className='decor_mini ni' />
					<div className="item-image">
						<img src="" alt="" />
					</div>
					<div className="item-info">
						<p className='item-title ni'>Sleepy Mushroom Hype Cup for Twitch and Youtube - Cute jar compatible with StreamElements</p>
						<div className="action">
							<a href="#" target='_blank' className='btn btn-styled btn-buy'> <CgShoppingCart/> BUY</a>
						</div>
					</div>
				</SwiperSlide>
			
				<SwiperSlide className="item">
					<div className="item-price">
							<p>$4</p>
					</div>
					<img src="/decors/mini_logo.png" alt="" className='decor_mini ni' />
					<div className="item-image">
						<img src="" alt="" />
					</div>
					<div className="item-info">
						<p className='item-title ni'>Sleepy Mushroom Hype Cup for Twitch and Youtube - Cute jar compatible with StreamElements</p>
						<div className="action">
							<a href="#" target='_blank' className='btn btn-styled btn-buy'> <CgShoppingCart/> BUY</a>
						</div>
					</div>
				</SwiperSlide>
			
				<SwiperSlide className="item">
					<div className="item-price">
							<p>$4</p>
					</div>
					<img src="/decors/mini_logo.png" alt="" className='decor_mini ni' />
					<div className="item-image">
						<img src="" alt="" />
					</div>
					<div className="item-info">
						<p className='item-title ni'>Sleepy Mushroom Hype Cup for Twitch and Youtube - Cute jar compatible with StreamElements</p>
						<div className="action">
							<a href="#" target='_blank' className='btn btn-styled btn-buy'> <CgShoppingCart/> BUY</a>
						</div>
					</div>
				</SwiperSlide>
			
				<SwiperSlide className="item">
					<div className="item-price">
							<p>$4</p>
					</div>
					<img src="/decors/mini_logo.png" alt="" className='decor_mini ni' />
					<div className="item-image">
						<img src="" alt="" />
					</div>
					<div className="item-info">
						<p className='item-title ni'>Sleepy Mushroom Hype Cup for Twitch and Youtube - Cute jar compatible with StreamElements</p>
						<div className="action">
							<a href="#" target='_blank' className='btn btn-styled btn-buy'> <CgShoppingCart/> BUY</a>
						</div>
					</div>
				</SwiperSlide>
			
			
		</Swiper>
		</div>
	)
}