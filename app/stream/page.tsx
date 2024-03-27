import React, { CSSProperties } from 'react'
import PageTitle from '../components/layout/pageTitle/PageTitle'
import './stream.scss'
import { FaMailBulk } from 'react-icons/fa'
import Credit from './credit/Credit'
import Fandom from './fandom/Fandom'
import { FaArrowLeft, FaArrowRight, FaDiscord, FaTwitter } from 'react-icons/fa6'
import { fetchData, urlFor } from '@/db/client'
import { BsArrowRightSquare } from 'react-icons/bs'
import Sponsors from './sponsors/Sponsors'
import { redirect } from 'next/navigation'

// import Swiper from 'swiper'
type Props = {}

export type generalData = {
	preset:string,
	schedule:any,
	sponsors:{
		link:string;
		image:any;
	}[],
	goals:string[],
	achieved_goals:{
		goal:string,
		date:string
	}[],
	contact_art:any;
}

export type creditData = {
	name:string,
	role:string,
	link:string,
	pfp:any
}
export default async function page({}: Props) {
	const generalData = await fetchData<generalData[]>(`
	*[_type == 'general' && preset == 'main'] {
		_id,
		preset,
		schedule,
		sponsors,
		goals,
		achieved_goals,
	}
	`)
	const creditData = await fetchData<creditData[]>(`
		*[_type == 'credits'] {
			name,
			role,
			link,
			pfp
		}
	`)
	// console.log(generalData[0])
	const main = generalData[0];
	if(!main){
		redirect('/')
		return;
	}
	return (
		<main id="page_stream">
			<PageTitle
				title='STREAM'
				subtitle='stream information'
			/>

			<section className="schedules" id='schedules'>
					<div className="content">
						<div className="sched-part">
							<img src={main && main.schedule ? urlFor(main.schedule).url() : "/arts/placeholder_sched.png" } alt="" />

						</div>
						<article className='sched-detail'>
							<h2>◈SCHEDULES◈</h2>
							<p>Welcome dear guest! 
Here’s the schedule of this week!</p>
							<img src={"/decors/sched-head.png"} alt="" />
							<a href="https://twitch.tv/astramaeve" target='_blank' className='btn btn-styled'>✦ Catch My Streams! <BsArrowRightSquare/></a>
						</article>
					</div>
			</section>

			<Sponsors sponsors={main.sponsors}/>

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

						<div className="lf-goals" style={{'--height':main.goals?.length} as CSSProperties}>
							{/* <div className="goal" */}
								{main.goals?.map((goal,index)=>{
									return <div className="goal" key={'goal-list'+index}>
									<div className="circle-container">
										<div className="circle"></div>
									</div>
									<p>{goal}</p>
								</div>
								})}
							{/* </div> */}
						</div>
					
					</div>
					<div className="reached goal-container">
					<h2 className='title'>✦ Moments already in time ✦</h2>
						<p className='description'>In the years together, some important milestones are already reached! Let’s remember them fondly!</p>

						<div className="r-goals" style={{'--height':main.achieved_goals?.length || 1} as CSSProperties} >
								{
									main.achieved_goals?.map((goal,index)=>{
										return 	<div className="goal" key={'achieved-goals-list'+index}>
										<div className="circle-container">
											<div className="circle"></div>
										</div>
										<div className="goal-text">
												<p>{goal.goal}</p>
												<p className='date'>{goal.date}</p>
										</div>
									</div>
									})
								}
							</div>
					</div>
				</div>
			</section>

			<Credit creditList={creditData}/>

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
							<a href='mailto:astralias.maeve@gmail.com' target='_blank' className="btn collab-link">
									<FaMailBulk/>
							</a>
							<a href='https://discord.com/invite/hqWVaBQyn7' target='_blank' className="btn collab-link">
									<FaDiscord/>
							</a>
							<a href='https://twitter.com/astra_maeve' target='_blank' className="btn collab-link">
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