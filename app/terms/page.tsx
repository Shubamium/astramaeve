import React from 'react'
import PageTitle from '../components/layout/pageTitle/PageTitle'
import './terms.scss'
import GeneralRules from './generalRules/GeneralRules'
import FandomRules from './fandomRules/FandomRules'



type Props = {}

export default function page({}: Props) {
	return (
		<main id="page_terms">
				<PageTitle
					title='Rules'
					subtitle='general guidelines '
				/>
			<GeneralRules/>
			<FandomRules/>
		</main>
	)
}