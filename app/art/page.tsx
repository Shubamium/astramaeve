import React from 'react'
import PageTitle from '../components/layout/pageTitle/PageTitle'

import './art.scss'
import Link from 'next/link'
import GalleryDisplayer from '../components/galleryDisplayer/GalleryDisplayer'
type Props = {}

export default function page({}: Props) {
	return (
		<main id='page_art'>
				<PageTitle subtitle='gallery of illustrations' title='ART'></PageTitle>

				<section className='reference-art' id='references'>
					<img src="/arts/reference_sheet.png" alt=""  className='ref-sheet'/>
					<div className="credits">
						<a href="https://twitter.com/KUZERI3" target='_blank' className='ref-creds'>Reference Sheet by <span>KUZERI</span></a>
					</div>
				</section>

				<section className="reference-folder">
					<div className="reference">
						<img src="/arts/reference_head.png" alt="" className='reference-head' />
						<h2>◈ REFERENCES ◈</h2>
						<p>For every artist that wishes to create artworks with my design, here is the reference folder with all the materials to make it! I hope it’ll be of help! <br/><br/> Please remember that the design is property of Astra Maeve, do not replicate it for other Vtuber Model commissions, or for the creation of Original Characters. <br/><br/>
The materials inside the folder are for artworks and fanart only. </p>
						<Link href={'#'} target='_blank' className='btn btn-styled'>
							✦ Reference Folder 
						</Link>
					</div>
					
				</section>

				<GalleryDisplayer 
					title='Gallery'
					description='These artworks have been commissioned by Astra Maeve and are for her exclusive use.'
					id='gallery'
					/>
				<GalleryDisplayer 
					title='Fanart'
					id='fanart'
					description='These artworks have been commissioned by Astra Maeve and are for her exclusive use.'
				/>
		</main>
	)
}