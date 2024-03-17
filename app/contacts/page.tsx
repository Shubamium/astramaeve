import React from 'react'
import PageTitle from '../components/layout/pageTitle/PageTitle'
import { FaDiscord, FaThreads, FaTiktok, FaTwitch, FaX, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import './contacts.scss'
import { fetchData, urlFor } from '@/db/client'
import { generalData } from '../stream/page'
type Props = {}

export default async function Contacts({}: Props) {
	const generalData = await fetchData<generalData[]>(`
	*[_type == 'general' && preset == 'main'] {
		_id,
		preset,
		contact_art
	}
	`)
	const main = generalData[0];
	return (
		<main id="page_contacts" className=''>
			<PageTitle subtitle='List of contacts' title='Contacts'/>
			<div className="contact-container">
				<div className="listcont left-contact">
						<a target="_blank" href='https://discord.com/invite/hqWVaBQyn7' className="contact">
								<span className='contact-content'>
									<span className='media-type'>DISCORD</span>							
									<span className='handles'>@astramaeve</span>		
									<FaDiscord className='contact-icon'/>				
								</span>		
						</a>
						<a target="_blank" href='https://twitter.com/astra_maeve' className="contact offset">
								<span className='contact-content'>
									<span className='media-type'>Twitter</span>							
									<span className='handles'>@astra_maeve</span>		
									<FaXTwitter className='contact-icon'/>				
								</span>		
						</a>		
						<a target="_blank" href='https://www.twitch.tv/astramaeve' className="contact">
								<span className='contact-content'>
									<span className='media-type'>Twitch</span>							
									<span className='handles'>astramaeve</span>		
									<FaTwitch className='contact-icon'/>				
								</span>		
						</a>
				</div>

				<div className="center-contact">
					<div className="banner">
						<img src={main.contact_art ? urlFor(main.contact_art).url() : "/arts/contact-banner.png"} alt="" className='maeve-banner' />
					</div>
					<img src="/arts/maeve-main-logo.png" alt="" className='maeve-logo' />
					<a  href="mailto:astralias.maeve@gmail.com" className='email'><strong>email</strong><br /><span>astralias.maeve@gmail.com</span></a>
				</div>

				<div className="listcont right-contact">
						<a target="_blank" href='https://www.threads.net/@astramaeve' className="contact">
								<span className='contact-content'>
									<span className='media-type'>THREADS</span>							
									<span className='handles'>@astramaeve</span>		
									<FaThreads className='contact-icon'/>				
								</span>		
						</a>
						<a target="_blank" href='https://www.youtube.com/@astramaeve' className="contact offset">
								<span className='contact-content'>
									<span className='media-type'>YOUTUBE</span>							
									<span className='handles'>Astra Maeve </span>		
									<FaYoutube className='contact-icon'/>				
								</span>		
						</a>		
						<a target="_blank" href='https://www.tiktok.com/@astramaeve' className="contact">
								<span className='contact-content'>
									<span className='media-type'>TIKTOK</span>							
									<span className='handles'>@astramaeve</span>		
									<FaTiktok className='contact-icon'/>				
								</span>		
						</a>
				</div>
			</div>
		</main>	
	)
}