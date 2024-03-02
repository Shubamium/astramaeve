import React from 'react'
import PageTitle from '../components/layout/pageTitle/PageTitle'
import './stream.scss'
type Props = {}

export default function page({}: Props) {
	return (
		<main id="page_stream">
			<PageTitle
				title='STREAM'
				subtitle='stream information'
			/>

			<div className="schedules" id='schedules'>
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
			</div>
		</main>
	)
}