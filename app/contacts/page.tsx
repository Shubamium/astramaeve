import React from 'react'
import PageTitle from '../components/layout/pageTitle/PageTitle'

type Props = {}

export default function Contacts({}: Props) {
	return (
		<main id="page_contacts" className=''>
			<PageTitle subtitle='List of contacts' title='Contacts'/>
		</main>	
	)
}