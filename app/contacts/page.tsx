import React from 'react'
import PageTitle from '../components/layout/pageTitle/PageTitle'
import { FaX, FaXTwitter } from 'react-icons/fa6'
import './contacts.scss'
type Props = {}

export default function Contacts({}: Props) {
	return (
		<main id="page_contacts" className=''>
			<PageTitle subtitle='List of contacts' title='Contacts'/>
			<div className="contact-container">
				<div className="listcont left-contact">
						<a href='#' className="contact">
								<span className='contact-content'>
									<span className='media-type'>DISCORD</span>							
									<span className='handles'>@handle_sub</span>		
									<FaXTwitter className='contact-icon'/>				
								</span>		
						</a>
						<a href='#' className="contact offset">
								<span className='contact-content'>
									<span className='media-type'>DISCORD</span>							
									<span className='handles'>@handle_sub</span>		
									<FaXTwitter className='contact-icon'/>				
								</span>		
						</a>		
						<a href='#' className="contact">
								<span className='contact-content'>
									<span className='media-type'>DISCORD</span>							
									<span className='handles'>@handle_sub</span>		
									<FaXTwitter className='contact-icon'/>				
								</span>		
						</a>
				</div>

				<div className="center-contact">
					<div className="banner">
						<img src="/arts/contact-banner.png" alt="" className='maeve-banner' />
					</div>
					<img src="/arts/maeve-main-logo.png" alt="" className='maeve-logo' />
					<a  href="mailto:astralias.maeve@gmail.com" className='email'><strong>email</strong><br />astralias.maeve@gmail.com</a>
				</div>

				<div className="listcont right-contact">
				<a href='#' className="contact">
								<span className='contact-content'>
									<span className='media-type'>DISCORD</span>							
									<span className='handles'>@handle_sub</span>		
									<FaXTwitter className='contact-icon'/>				
								</span>		
						</a>
						<a href='#' className="contact offset">
								<span className='contact-content'>
									<span className='media-type'>DISCORD</span>							
									<span className='handles'>@handle_sub</span>		
									<FaXTwitter className='contact-icon'/>				
								</span>		
						</a>		
						<a href='#' className="contact">
								<span className='contact-content'>
									<span className='media-type'>DISCORD</span>							
									<span className='handles'>@handle_sub</span>		
									<FaXTwitter className='contact-icon'/>				
								</span>		
						</a>
				</div>
			</div>
		</main>	
	)
}