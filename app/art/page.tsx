import React from 'react'
import PageTitle from '../components/layout/pageTitle/PageTitle'

import './art.scss'
import Link from 'next/link'
import GalleryDisplayer from '../components/galleryDisplayer/GalleryDisplayer'
import { fetchData } from '@/db/client'
type Props = {}

export type galleryData = {
	_id:string,
	category_name:string,
	images:{
		artist:string,
		artist_link:string,
		image:any,
	}[]	
}
export default async function page({}: Props) {
	const galleryArt = await fetchData<galleryData[]>(`
	*[_type == 'gallery'] {
		_id,
		category_name,
		'images': image_list[] {
			artist,
			artist_link,
			image
		}
	}
	`)
	const fanart = await fetchData<galleryData[]>(`
	*[_type == 'fanart'] {
		_id,
		category_name,
		'images': image_list[] {
			artist,
			artist_link,
			image
		}
	}
	`)

	console.log(galleryArt)
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
						<a href={'https://drive.google.com/drive/folders/1e18kJp_YHqhfpBCQR6Vy6Rm7yfFzLZnz'} target='_blank' className='btn btn-styled'>
							✦ Reference Folder 
						</a>
					</div>
					
				</section>

				<GalleryDisplayer 
					title='Gallery'
					description='These artworks have been commissioned by Astra Maeve and are for her exclusive use.'
					id='gallery'
					galleryData={galleryArt}
					/>
				<GalleryDisplayer 
					title='Fanart'
					id='fanart'
					description='These fanarts are created by the wonderful members of this community! Thank you so much for every single artwork or gift received! I love them all!'
					galleryData={fanart}
				/>
		</main>
	)
}