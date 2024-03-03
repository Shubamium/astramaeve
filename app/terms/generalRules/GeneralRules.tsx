'use client'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { PiDatabase, PiShootingStar } from 'react-icons/pi'
import { Pagination,Navigation } from 'swiper/modules'
import './generalRules.scss'
import { GrContact } from 'react-icons/gr'
import { FaChildren, FaHandHoldingHeart, FaPersonArrowDownToLine, FaPersonCircleExclamation } from 'react-icons/fa6'
import { MdNoAdultContent } from 'react-icons/md'
import { TbDeviceComputerCameraOff } from 'react-icons/tb'
import { LiaGrinBeamSweatSolid } from 'react-icons/lia'
import { RiSpam2Fill } from 'react-icons/ri'
type Props = {}

export default function GeneralRules({}: Props) {
	return (
			<section className="general_rules">
					<Swiper className='rule-container'
						modules={[Pagination,Navigation]}
						slidesPerView={'auto'}
						navigation={{
							enabled:true
						}}
					>
						<SwiperSlide className='rule-grid'>
								<div className="rule">
									<div className="icon-part">
										<PiShootingStar/>
									</div>
									<p>{`Astra Maeve's character design is exclusively intended for the personal and commercial use of Astra Maeve herself.`}</p>
								</div>
								<div className="rule">
									<div className="icon-part">
										<GrContact/>
									</div>
									<p>{`If you are interested in collaborating with the character owner for commercial projects, kindly reach out to us via the provided business email.`}</p>
								</div>
						</SwiperSlide>
						<SwiperSlide className='rule-grid'>
					
									<div className="rule">
									<div className="icon-part">
										<MdNoAdultContent/>
									</div>
									<p>{`Please refrain from requesting specific types of fanwork from Astra, especially those of a heavily NSFW nature. Such behavior is neither appreciated nor tolerated.`}</p>
								</div>
								<div className="rule">
									<div className="icon-part">
										<FaPersonArrowDownToLine/>
									</div>
									<p>{`Feel free to use the character for fanwork projects, such as fan arts of games, as long as these projects are non-commercial in nature. However, it is mandatory to credit the character design's owner in such instances.`}</p>
								</div>
						</SwiperSlide>
			
						<SwiperSlide className='rule-grid'>
					
					<div className="rule">
						<div className="icon-part">
							<FaHandHoldingHeart/>
						</div>
						<p>{`Artwork commissioned by Astra is meant for her exclusive use. Avoid reposting commissioned pieces on other sites or claiming them as your own.
`}</p>
					</div>
					<div className="rule">
						<div className="icon-part">
							<TbDeviceComputerCameraOff/>
						</div>
						<p>{`I do not permit the use of my voice, design, artworks, or commissioned pieces for AI training, AI art, or NFTs.`}</p>
					</div>
			</SwiperSlide>

						<SwiperSlide className='rule-grid'>
								<div className="rule">
									<div className="icon-part">
										<LiaGrinBeamSweatSolid/>
									</div>
									<p>{`While I cannot prevent you from creating NSFW pieces, please be aware that I may feel uncomfortable with them and may choose not to share or discuss them.`}</p>
								</div>
												<div className="rule">
									<div className="icon-part">
										<RiSpam2Fill/>
									</div>
									<p>{`Avoid sending me personal messages with explicit content, attempting to force discussions on uncomfortable topics, or requesting personal information or photos. I am only interested in forming friendships and do not appreciate such requests.
`}</p>
								</div>
						</SwiperSlide>
						<SwiperSlide className='rule-grid'>
								<div className="rule">
									<div className="icon-part">
										<FaPersonCircleExclamation/>
									</div>
									<p>{`Do not pressure me at any point into revealing personal details or information. I will not tolerate such actions and will take appropriate measures to protect myself.
`}</p>
								</div>
												<div className="rule">
									<div className="icon-part">
										<FaChildren/>
									</div>
									<p>{`If you are a minor, please refrain from interacting with me, as my space is strictly for individuals aged 18 and above.
`}</p>
								</div>
						</SwiperSlide>
					</Swiper>
				</section>
	)
}