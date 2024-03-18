'use client'
import React from 'react'
import	{ Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaMailBulk } from 'react-icons/fa';
import { Pagination,Navigation } from 'swiper/modules';
import { urlFor } from '@/db/client';
// Pagination
type Props = {
	sponsors:{
		link:string;
		image:any;
	}[]
}

export default function Sponsors({
	sponsors
}: Props) {
	return (
		<section className="sponsors" id="sponsors">
		<div className="confine">
			<article>
				<div className="spon-head">
					<h2>Sponsors</h2>
					<hr />
				</div>
				<div className="description">
						<p>{`	I've established partnerships and affiliations with various entities, all geared towards benefiting the community through discounts or support groups.`}
						<br/><br/> If you have business inquiries, you can contact me at: </p>

						<a href="mailto:astralias.maeve@gmail.com" className='btn contact-mail'>◈  astralias.maeve@gmail.com <FaMailBulk/></a>
				</div>

			</article>
			<figure className="spon-list">
				<Swiper
					className='sponsor-slider'
					slidesPerView={'auto'}
					pagination={{
						dynamicBullets: true,
						enabled:true,
						type:'bullets'
					}}
					navigation={{
						nextEl:'.swiper-next',
						prevEl:'.swiper-prev',
						enabled:true
					}}
					modules={[Pagination,Navigation]}
					spaceBetween={30}
				>
					{
						sponsors && sponsors.map((spon,index)=>{
							return <SwiperSlide key={'sponsors-list'+index} onClick={()=>{
								window.open(spon.link,'_blank')
							}} className='sponsor-slide'>
								<img src={urlFor(spon.image).url()} alt="" className='sponsor-img' />
							</SwiperSlide>
						})
					}
				
					<div className="swiper-navigation">
						<button className='btn swiper-prev'>
							<img src="/decors/gallery-btn.png" alt="" />
						</button>
						<button className='btn swiper-next'>
							<img src="/decors/gallery-btn.png" alt="" />
						</button>
					</div>
				</Swiper>
			</figure>
		</div>
	</section>
	)
}