import React from 'react'
import PageTitle from '../components/layout/pageTitle/PageTitle'
import './stream.scss'
import { FaMailBulk } from 'react-icons/fa'
import Credit from './credit/Credit'
import Fandom from './fandom/Fandom'
import { FaArrowRight, FaDiscord, FaTwitter } from 'react-icons/fa6'
type Props = {}

export default function page({}: Props) {
	return (
		<main id="page_stream">
			<PageTitle
				title='STREAM'
				subtitle='stream information'
			/>

			<section className="schedules" id='schedules'>
					<div className="content">
						<div className="sched-part">
							<img src="/arts/placeholder_sched.png" alt="" />

						</div>
						<article className='sched-detail'>
							<h2>◈SCHEDULES◈</h2>
							<p>Welcome dear guest! 
Here’s the schedule of this week!</p>
							<img src="/decors/sched-head.png" alt="" />
							<a href="#" className='btn btn-styled'>✦ Catch My Streams!</a>
						</article>
					</div>
			</section>

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
					<figure className="spon-art">
						<img src="/arts/placeholder_spon.png" alt="" className='sponsor-img' />
					</figure>
				</div>
			</section>

			<section className='goals' id='goals'>
				<div className="goals-head">
					<hr />
					<h2>✦GOALS✦</h2>
					<hr />
				</div>

				<div className="goals-list">
					<div className="look-forward goal-container">
						<h2 className='title'>✦ Moments I look forward ✦</h2>
						<p className='description'>In our beautiful moments together, I wish to always grow more as a content creator and as a person. <br /> <br />
It is my belief that each milestone we reached should be celebrated, no matter how big or small it is, and that the journey that will bring us forward will see us grow together! <br /> <br />These are my wishes for this year:</p>

						<div className="lf-goals">
							{/* goal */}
							<div className="goal">
								<div className="circle-container">
									<div className="circle"></div>
								</div>
								<p>Reaching 1000 subscribers on Twitch</p>
							</div>
							{/* goal */}
							<div className="goal">
								<div className="circle-container">
									<div className="circle"></div>
								</div>
								<p>Reaching 1000 subscribers on Twitch</p>
							</div>
							{/* goal */}
							<div className="goal">
								<div className="circle-container">
									<div className="circle"></div>
								</div>
								<p>Reaching 1000 followers on Twitter</p>
							</div>
							{/* goal */}
							<div className="goal">
								<div className="circle-container">
									<div className="circle"></div>
								</div>
								<p>Creating my first cover</p>
							</div>
							{/* goal */}
							<div className="goal">
								<div className="circle-container">
									<div className="circle"></div>
								</div>
								<p>Publishing my first original song</p>
							</div>
							{/* goal */}
							<div className="goal">
								<div className="circle-container">
									<div className="circle"></div>
								</div>
								<p>Debuting my Live 2D model</p>
							</div>
							{/* goal */}
							<div className="goal">
								<div className="circle-container">
									<div className="circle"></div>
								</div>
								<p>Create a more cohesive branding</p>
							</div>
							{/* goal */}
							<div className="goal">
								<div className="circle-container">
									<div className="circle"></div>
								</div>
								<p>Befriending more people</p>
							</div>
							
						</div>
	
					
					</div>
					<div className="reached goal-container">
					<h2 className='title'>✦ Moments already in time ✦</h2>
						<p className='description'>In the years together, some important milestones are already reached! Let’s remember them fondly!</p>

						<div className="r-goals">
								<div className="goal">
									<div className="circle-container">
										<div className="circle"></div>
									</div>
									<div className="goal-text">
											<p>Befriending more people</p>
											<p className='date'>16 February 2022</p>
									</div>
								</div>
								<div className="goal">
									<div className="circle-container">
										<div className="circle"></div>
									</div>
									<div className="goal-text">
											<p>First Birthday together</p>
											<p className='date'>16 February 2022</p>
									</div>
								</div>
								<div className="goal">
									<div className="circle-container">
										<div className="circle"></div>
									</div>
									<div className="goal-text">
											<p>First 200 Twitch followers</p>
											<p className='date'>TBA</p>
									</div>
								</div>

								<div className="goal">
									<div className="circle-container">
										<div className="circle"></div>
									</div>
									<div className="goal-text">
											<p>Opening my own shop</p>
											<p className='date'>16 February 2022</p>
									</div>
								</div>
								<div className="goal">
									<div className="circle-container">
										<div className="circle"></div>
									</div>
									<div className="goal-text">
											<p>First Karaoke stream</p>
											<p className='date'>16 February 2022</p>
									</div>
								</div>
								<div className="goal">
									<div className="circle-container">
										<div className="circle"></div>
									</div>
									<div className="goal-text">
											<p>Commissioning my first Live 2D model</p>
											<p className='date'>TBA</p>
									</div>
								</div>
								<div className="goal">
									<div className="circle-container">
										<div className="circle"></div>
									</div>
									<div className="goal-text">
											<p>Launching my personal website</p>
											<p className='date'>TBA</p>
									</div>
								</div>
						</div>
					</div>
				</div>
			</section>

			<Credit/>

			<Fandom/>
	
			<section className="collabs" id="collabs">

				<div className="art-part">
					<img src="/arts/collab-art.png" alt="" className='collab-art' />
				</div>
				<div className="collab-text">
					<p className='description'>If you would like to collab, please feel free to reach us via Email, Twitter DM or Discord! <br /> <br /> You can consult the current list of games that are available for collabs: </p>
				</div>
				<div className="action">
					<div className="collab-links">
							<a href='#' target='_blank' className="btn collab-link">
									<FaMailBulk/>
							</a>
							<a href='#' target='_blank' className="btn collab-link">
									<FaDiscord/>
							</a>
							<a href='#' target='_blank' className="btn collab-link">
									<FaTwitter/>
							</a>

					</div>
					<a href='https://docs.google.com/document/d/19heJ2GMrCj-LszUBaOi3ZGqm6Tva8y669ZnDs_zeXuk/edit?usp=sharing' target='_blank' className="btn btn-styled">
							✦ Game List <FaArrowRight/>
					</a>
				</div>
			</section>
		</main>
	)
}