import React from 'react'
import './story.scss'
import PageTitle from '../components/layout/pageTitle/PageTitle'
import Link from 'next/link'
import Tower from './Tower'
import Salvere from './Salvere'
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
							{`This should be replaced with general description about this page, Astra's journey began with a profound sense of disorientation as she opened her eyes for the first time. Instead of the expected demise, she found herself alive after what should have been the catastrophic end of a star's life. `}
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
			<section className="story_one" id='story_one'>
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

			<section className='companionship'>
					<figure className='companions'>
						<img src="./decors/companionship_decor.png" alt="" className='companion-decor' />
						<img src="./arts/talking.gif" alt="" className='companion-gif' />
					</figure>
					<article>
						<p>Yet Astra was different. Despite the vastness of her existence, she <strong>yearned for companionship</strong> in the cosmos. Her life as a star felt mundane and pitiful, with her only solace being the observation of life on distant worlds. </p>
					</article>
			</section>

			<section className='story_two'>
				<div className="content">
				<h2>◈ STORY - 2 ◈</h2>
				<p>
					Unexpectedly, the end of her celestial existence ushered in a new opportunity and a new life, now named Astralias, a member of the <strong>Noble Mæve Clan</strong> in the <strong>kingdom of Salvere</strong>. 
				</p>
				<p>In her new environment, Astra thrived. The vibrant colors, the bustling life, and the constant interactions with others fulfilled her long-standing desire for companionship. The voices of distant stars in her mind criticized her happiness in being reincarnated as an inferior being, but Astra remained content. </p>
				</div>
			</section>

			<section className="childhood">
				<article className="panel left">
					<div className="emote-top">
						<img src="./arts/emote_l.png" alt="" />
					</div>
					<p>Her childhood passed joyfully with a loving family, her grandfather a respected figure heading the Council. </p>
					<p>However, challenges surfaced when Astra turned 50: <u>her star powers began to manifest</u>, and the accumulation of mana in her body accelerated. </p>
				</article>
				<figure>
					<img src="./arts/chibi_childhood.png" alt="" className='astra-smile' />
				</figure>
				<article className="panel right">
				<div className="emote-top">
						<img src="./arts/emote_r.png" alt="" />
					</div>
					<p>The memories of billions of years brought headaches, and the immense mana concentration took a toll on her young body,<strong> confining her to bed for several years.</strong>  </p>
					<p>Determined to overcome these challenges, Astra embarked on a journey to master the energy within her, delving into <strong>the world of magic.</strong></p>
				</article>
			</section>

			<section className="story-three">
					<div className="decor-container">
						<img src="/decors/story_circle.png" alt="" className='story_circle l ' />
					</div>
					<div className="story-container">
						<div className="story-part">
							<img src="/arts/chibi_storya.png" alt="" className='chibi'/>
							<p>{`Despite her grandfather's aspirations for her to enter politics, Astra's heart remained devoted to magic. Instead of following the expected political path, she became renowned as the most powerful mage of her time, earning the title of "Archmage" and claiming ownership of her tower, The Amethyst Tower. `}</p>
						</div>
						<div className="story-part">
							<img src="/arts/chibi_storyb.png" alt="" className='chibi'/>
							<p>{`Astra's personality holds a tapestry of contradictions. She cherished company but preferred solitude, possessed a profound love for magical experimentation yet displayed laziness to an extreme. `}</p>
						</div>
						
						<div className="story-part">
							<img src="/arts/kurukuru.gif" alt="" className='chibi'/>
							<p>When not immersed in her latest research in the Amethyst Tower, she could be found teaching at Elvedere Academy or indulging in games in her messy room, much to the chagrin of her butler, Alvion, the only other resident of the tower.</p>
						</div>
					</div>
					<div className="decor-container">
						<img src="/decors/story_circle.png" alt="" className='story_circle r' />
					</div>
			</section>
			<Tower/>
			<Salvere/>
		</main>
	)
}