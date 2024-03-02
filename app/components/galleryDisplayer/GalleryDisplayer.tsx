import React from 'react'
import './galleryDisplayer.scss'
type Props = {}

export default function GalleryDisplayer({}: Props) {
	return (
		<section className='gallery-displayer'>

			<div className="gallery-head">
				<hr />
					<h2>GALLERY</h2>
				<hr />
			</div>
			<p>These artworks have been commissioned by Astra Maeve and are for her exclusive use. </p>
		</section>
	)
}