import React from 'react'
import './story.scss'
import PageTitle from '../components/layout/pageTitle/PageTitle'
import Link from 'next/link'
import Tower from './Tower'
import Salvere from './Salvere'
import { FaStarAndCrescent } from 'react-icons/fa6'
import { PiShootingStarBold } from 'react-icons/pi'
import { GiScrollQuill } from 'react-icons/gi'
import StroyThree from './storyThree/StroyThree'
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
							{`Astra, the elven archmage of the kingdom of Salvere and presiding as the Master of the Amethyst Tower, is a figure of intrigue. Her days are often spent within the confines of her laboratories, where she delves into experiments, immerses herself in books, or indulges in games.`}
						</p>
						<p className='story-text'>
							{`Beyond her seemingly detached demeanor lies a depth that belies her years, evident in the occasional distant gaze that speaks of experiences far beyond her apparent age.
 Tower, is a figure of intrigue. Her days are often spent within the confines of her laboratories, where she delves into experiments, immerses herself in books, or indulges in games.`}
						</p>
						<p className='story-text'>
							{`But heed this warning: under no circumstances should one offer her coffee, for reasons best left unspoken."`}
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
				<figure className='display'>
						<img src="/arts/character_large.png" alt="" className='character-large' />
				</figure>
			</section>
			<section className="story_one" id='story_one'>
				<div className="confine">
					
					<figure>
						<img src="/arts/story-1.png" alt="" />
					</figure>

					<article className='story-part'>
						<div className="story-heading">
							<h2>◈ At the Beginning</h2> <hr />
						</div>
						<p> 
							{`Astra's journey began with a profound sense of disorientation as she opened her eyes for the first time. Instead of the expected demise, she found herself alive after what should have been the catastrophic end of a star's life. `}
						</p>
						<p>
							{`Her last memory lingered on the brink of a celestial explosion, the termination of a consciousness that usually fades away in quiet solitude. Stars, after all, rarely communicated with each other, their existence characterized by eons of solitary development. `}
						</p>
					</article>

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
				<h2>◈ Rebirth ◈</h2>
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

			<StroyThree/>
			<Tower/>
			<Salvere/>
		</main>
	)
}