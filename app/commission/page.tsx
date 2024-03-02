import React from 'react'
import PageTitle from '../components/layout/pageTitle/PageTitle'
import './commission.scss'
import ShopNavigation from '../shop/shopNavigation/ShopNavigation'
import ItemListing from '../shop/itemListing/ItemListing'
import ShopHeading from '../shop/shopHeading/ShopHeading'
import CommissionGuidelines from './commissionGuidelines/CommissionGuidelines'
type Props = {}

export default function page({}: Props) {
	return (
		<main id="page_commission">
			<PageTitle
				title='Commission'
				subtitle='item listing and commission info'
			/>
			<ShopNavigation active="commission"/>
			<ItemListing/>
			<ShopHeading
				title='Guidelines'
				description={`
				By commissioning me, you acknowledge and agree to these terms. Please address any concerns or seek clarification before proceeding.
				I am excited about creating a unique and beautiful piece for you!`}
			/>
			<CommissionGuidelines/>
		</main>
	)
}