'use client'
import React, { useEffect, useRef, useState } from 'react'
import './loading.scss'

type Props = {}

export default function Loading({}: Props) {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
		setTimeout(()=>{
			setShowSplash(true)
		},3000)
		setTimeout(()=>{
			setShowSplash(true)
			
		},10000)
  }, []);

	
	return (
		<div className={`loading-screen ${showSplash ? 'loaded' : ''}`}> 
			<video src="/video/story.webm" ref={videoRef} autoPlay loop muted className="loading-video"></video>
			<div className='loading-text'>
				<p>Ah, behold! Whom do we encounter? A mortal soul? Nonetheless... <br/>
Step forth into the esteemed Amethyst Tower of Salvere, cherished Guest!</p>
			</div>
			<div className="loading-logo">
				<p>Please wait . . .</p>
				<img src="/arts/maeve-main-logo.png" alt="" className='logo-part' />
			</div>
		</div>
	)
}