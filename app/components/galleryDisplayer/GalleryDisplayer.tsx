import React from 'react'
import './galleryDisplayer.scss'
import { FaArrowLeft, FaArrowRight, FaDiamond } from 'react-icons/fa6'
type Props = {
	title:string,
	description:string,
	id:string
}

export default function GalleryDisplayer({
	title,description,id
}: Props) {
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

			<div className="gallery-part">
					<div className="content">
						<button className='btn gallery-btn l'> 
							<img src="/decors/gallery-btn.png" alt="" />
						</button>
							<div className="image-part">
								<div className="top-part">
										<FaDiamond className='diamond-counter '/>
										<FaDiamond className='diamond-counter '/>
										<FaDiamond className='diamond-counter '/>
										<FaDiamond className='diamond-counter inactive'/>
										<FaDiamond className='diamond-counter inactive'/>
								</div>
								<img src="/" alt="" className='active-img'  />
								<div className="bottom-part">
									<a href='#' target='_blank' className="artwork-credit">
								    	Artwork by <span>Artist Name</span>
									</a>
									<div className="ctrls">
										<button className='btn btn-smallctrl'><FaArrowLeft/></button>
										<p>✦</p>
										<button className='btn btn-smallctrl'><FaArrowRight/></button>
									</div>
								</div>
							</div>
							<button className='btn gallery-btn r'> 
								<img src="/decors/gallery-btn.png" alt="" />
							</button>
					</div>
			</div>
		</section>
	)
}