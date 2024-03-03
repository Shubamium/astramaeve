'use client'
import React, { useState } from 'react'
import './galleryDisplayer.scss'
import { FaArrowLeft, FaArrowRight, FaDiamond } from 'react-icons/fa6'
import { galleryData } from '@/app/art/page'
import { urlFor } from '@/db/client'
type Props = {
	title:string,
	description:string,
	id:string,
	galleryData:galleryData[]
}

export default function GalleryDisplayer({
	title,description,id,galleryData
}: Props) {

	const [activeCategory, setActiveCategory] = useState(0);
	const [activeImage,setActiveImage] = useState(0)
	const aImageList = galleryData[activeCategory].images
	const aImage = aImageList[activeImage]

	const prev = ()=>{
		setActiveImage((id) => {
			return Math.max(id-1,0)
		});
	}
	const next = ()=>{
		setActiveImage((id) => {
			return Math.min(id+1,aImageList.length-1)
		});
	}
	return (
		<section className='gallery-displayer' id={id}>
			<div className="title">
			<div className="gallery-head">
				<hr />
					<h2>{title}</h2>
				<hr />
			</div>
			<p className='description'>{description} </p>
			</div>
			<div className="gallery-nav">
				{galleryData.map((data:galleryData,index)=>{
					return (
						<button onClick={()=>{
							setActiveCategory(index);
							setActiveImage(0);
						}} className={`btn btn-gallery ${index === activeCategory ? 'active' : ''}` } key={'nav-'+ data._id}>✦ {data.category_name}</button>
					)
				})}
			</div>
			<div className="gallery-part">
					<div className="content">
						<button onClick={prev} className='btn gallery-btn l'> 
							<img src="/decors/gallery-btn.png" alt="" />
						</button>
							<div className="image-part">
								<div className="top-part">
										{aImageList.map((data,index)=>{
											return (
												<FaDiamond className={`diamond-counter ${index > activeImage ? 'inactive' : '' }`} key={'indicator-'+data.artist+'-'+index}/>
											)											
										})}
									
								</div>
								<img src={urlFor(aImage.image).url()} alt="" className='active-img'  />
								<div className="bottom-part">
									<a href={aImage.artist_link} target='_blank' className="artwork-credit">
								    	Artwork by <span>{aImage.artist}</span>
									</a>
									<div className="ctrls">
										<button onClick={prev} className='btn btn-smallctrl'><FaArrowLeft/></button>
										<p>✦</p>
										<button onClick={next} className='btn btn-smallctrl'><FaArrowRight/></button>
									</div>
								</div>
							</div>
							<button onClick={next} className='btn gallery-btn r'> 
								<img src="/decors/gallery-btn.png" alt="" />
							</button>
					</div>
			</div>
		</section>
	)
}