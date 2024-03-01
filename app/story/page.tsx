import React from 'react'
import './story.scss'
import PageTitle from '../components/layout/pageTitle/PageTitle'
import Link from 'next/link'
type Props = {}

export default function Story({}: Props) {
	return (
		<main id='page_story'>
			<PageTitle title='Story' subtitle='story of astra'/>
			<section className="general-info">
				<article className='about' id='about'>
						<div className="about-nav">
							<Link href={'#'} className='btn btn-about-nav'>✦ STORY</Link>
							<Link href={'#tower'} className='btn btn-about-nav alt'> ✦ AMETHYST TOWER</Link>
							<Link href={'#salvere'} className='btn btn-about-nav alt'> ✦ SALVERE</Link>
						</div>
						<p className='story-text'>
							{`Astra's journey began with a profound sense of disorientation as she opened her eyes for the first time. Instead of the expected demise, she found herself alive after what should have been the catastrophic end of a star's life. `}
						</p>

						<div className="who-is">
							<h2 className='who-title'>◈ WHO IS ASTRA</h2>
							<div className="info-lists">
								<div className="info one">
									<h2 className='info-head'>Full Name</h2>
									<p className='info-text'>Astralias Israndi Mæve-ir Salvere</p>
								</div>
								<div className="info-row">
									<div className="info">
										<h2 className='info-head'>Nickname</h2>
										<p className='info-text'>Astra</p>
									</div>
									<div className="info">
										<h2 className='info-head'>Residence</h2>
										<p className='info-text'>Amethyst Tower, Salvere</p>
									</div>
								</div>
								<div className="info-row">
									<div className="info">
										<h2 className='info-head'>Height</h2>
										<p className='info-text'>156 cm ⬩ 5,1”</p>
									</div>
									<div className="info">
										<h2 className='info-head'>Occupation</h2>
										<p className='info-text'>Archmage</p>
									</div>
								</div>
								<div className="info-row">
									<div className="info">
										<h2 className='info-head'>Age</h2>
										<p className='info-text'>848 <span>{'(current life)'}</span></p>
									</div>
									<div className="info">
										<h2 className='info-head'>Race</h2>
										<p className='info-text'>High Elf</p>
									</div>
								</div>
							</div>

							<h2 className='who-title small'>◈ FORMER LIFE</h2>
							<div className="info-lists former">
								<div className="info-row">
									<div className="info">
										<h2 className='info-head'>Race</h2>
										<p className='info-text'>Conscious Star</p>
									</div>
									<div className="info">
										<h2 className='info-head'>Classification</h2>
										<p className='info-text'>Blue Giant</p>
									</div>
								</div>
								<div className="info-row">
									<div className="info">
										<h2 className='info-head'>Residence</h2>
										<p className='info-text'>Unknown</p>
									</div>
									<div className="info">
										<h2 className='info-head'>Age</h2>
										<p className='info-text'>Unknown</p>
									</div>
								</div>
							</div>
						</div>

					
					

				</article>
				<article className='display'>
						<img src="/arts/character_large.png" alt="" className='character-large' />
				</article>
			</section>
			<section className="story_one">
				<div className="confine">
					<article className='story-part'>
						<div className="story-heading">
							<h2>◈ STORY - 1</h2> <hr />
						</div>
						<p> 
							{`Astra's journey began with a profound sense of disorientation as she opened her eyes for the first time. Instead of the expected demise, she found herself alive after what should have been the catastrophic end of a star's life. `}
						</p>
						<p>
							{`Her last memory lingered on the brink of a celestial explosion, the termination of a consciousness that usually fades away in quiet solitude. Stars, after all, rarely communicated with each other, their existence characterized by eons of solitary development. `}
						</p>
					</article>

					<figure>
						<img src="" alt="" />
					</figure>
				</div>
			</section>
		</main>
	)
}