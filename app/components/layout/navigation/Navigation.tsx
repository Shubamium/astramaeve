'use client'
import React, { useEffect, useRef, useState } from 'react'
import './navigation.scss'
import Link from 'next/link';
import { stagger, useAnimate } from 'framer-motion';
type Props = {}


const subLinks = {
	'home':[],
	'story':[
		{
			title:'Who is Astra?',
			link:'/story#about',
		},
		{
			title:'Story',
			link:'/story#story_one',
		},
		{
			title:'The Amethyst Tower',
			link:'/story#tower',
		},
		{
			title:'Salvere',
			link:'/story#salvere',
		},
	],
	'art':[
		{
			title:'References',
			link:'/art#references',
		},
		{
			title:'Gallery',
			link:'/art#gallery',
		},{
			title:'Fanart',
			link:'/art#fanart',
		},
	],
	'stream':[
		{
			title:'Schedules',
			link:'/stream#schedules',
		},{
			title:'Sponsors',
			link:'/stream#sponsors',
		},{
			title:'Goals',
			link:'/stream#goals',
		},{
			title:'Credits',
			link:'/stream#credits',
		},{
			title:'Fandom',
			link:'/stream#fandom',
		},{
			title:'Collab',
			link:'/stream#collabs',
		},
	],
	'shop':[
		{
			title:'Shop',
			link:'/shop#item',
		},{
			title:'Commission',
			link:'/commission#item',
		},
	],
	'terms':[
		{
			title:'General',
			link:'/terms#general',
		},
		{
			title:'Fandom Rules',
			link:'/terms#fandom',
		},
	],
	'contacts':[],
}

type Navlist = 'home' | 'art' | 'stream' | 'shop' | 'terms' | 'contacts' | 'story';
export default function Navigation({}: Props) {

	
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubOpen, setIsSubOpen] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);
	const [activeSub, setActiveSub] = useState<Navlist>('home');

	const [scope,animate] = useAnimate()
	
	const openSub = (sub:Navlist)=>{
		if(subLinks[sub].length === 0){
			setActiveSub('home');
			setIsSubOpen(false);
		}else{
			setActiveSub(sub);
			setIsSubOpen(true);
		}
	}
	const closeSub = ()=>{

		setIsSubOpen(false);
	
	}

	const openNav = ()=>{
		setIsSidebarOpen(true)
		if(videoRef.current){
			videoRef.current.currentTime = 0
		}
		setTimeout(()=>{
			videoRef.current?.play()
		
		},2200)

		const playAnimation = async ()=>{
			await animate('.sidebar-link',{
				x:-400,
				scale:1
			},{
				duration:0,
				delay:0
			})
			animate('.sidebar-link',{
				x:0,
			},{
				duration:0.5,
				delay:stagger(0.1,{
					startDelay:2
				}),
				type:'spring',
				stiffness:200,
				damping:25
			})
		}
		playAnimation()
	}
	const closeNav = ()=>{
		setIsSubOpen(false);
		setIsSidebarOpen(false);
		if(videoRef.current){
			videoRef.current.currentTime = 0
			videoRef.current.pause();
		}
		const playAnimation = async ()=>{
			animate('.sidebar-link:not(:hover)',{
				x:-400,
				scale:1,
			},{
				duration:0.5,
				delay:stagger(0.1,{
					startDelay:0
				}),
				type:'spring',
				stiffness:200,
				damping:25
			})
			 animate('.sidebar-link:hover',{
				x:100,
				scale:2,
			},{
				duration:0.5,
				type:'spring',
				stiffness:200,
				damping:25
			})
	
		}
		try{
			playAnimation()
		}catch(e){
			console.log(e);
		}
	}

	useEffect(()=>{
	},[])
	return (
		<div id='navigation' ref={scope} className={isSidebarOpen ? 'open' : 'close'}>
			<div className="sidebar">
				<div className="side-text top">
					<p>navigation</p>
					<hr />
				</div>
				<img src="./decors/logo_small.png" alt="" className='logo_side' onClick={openNav} />
				<div className="side-text">
					<hr />
					<p>website design by shubamium</p>
				</div>
			</div>
			<div className="sidebar-overlay" >
			</div>

		<nav className='sidebar-nav' onClickCapture={closeNav}>
			<div className="links">
				<img src="/decors/nav-circle.png" alt="" className='nav-circle ni' />
				<Link onClick={closeNav}  onMouseEnter={()=>{openSub('home')}} className='sidebar-link' href={'/'}><span>✵</span>HOME</Link>
				<Link onClick={closeNav}  onMouseEnter={()=>{openSub('story')}} className='sidebar-link' href={'/story'}><span>✵</span>STORY</Link>
				<Link onClick={closeNav}  onMouseEnter={()=>{openSub('art')}} className='sidebar-link' href={'/art'}><span>✵</span>ART</Link>
				<Link onClick={closeNav}  onMouseEnter={()=>{openSub('stream')}} className='sidebar-link' href={'/stream'}><span>✵</span>STREAM</Link>
				<Link onClick={closeNav}  onMouseEnter={()=>{openSub('shop')}} className='sidebar-link' href={'/shop'}><span>✵</span>SHOP</Link>
				<Link onClick={closeNav}  onMouseEnter={()=>{openSub('terms')}} className='sidebar-link' href={'/terms'}><span>✵</span>RULES</Link>
				<Link onClick={closeNav}  onMouseEnter={()=>{openSub('contacts')}} className='sidebar-link' href={'/contacts'}><span>✵</span>CONTACTS</Link>
			</div>
			<video src="/video/shatter1.webm" muted ref={videoRef} className='decor_shatter' playsInline></video>
			<div onMouseLeave={closeSub} className={`links-hover ${isSubOpen ? 'open' : 'closed'}` }>
				{subLinks[activeSub].map((link)=>{
					return (
						<Link onClick={closeNav} className='sidebar-hover-link' href={link.link} key={link.link}><span>◈ {link.title}</span></Link>
					)
				})}
			</div>
		</nav>

		</div>
	)
}