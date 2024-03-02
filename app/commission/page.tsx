import React from 'react'
import PageTitle from '../components/layout/pageTitle/PageTitle'
import './commission.scss'
import ShopNavigation from '../shop/shopNavigation/ShopNavigation'
import ItemListing from '../shop/itemListing/ItemListing'
import ShopHeading from '../shop/shopHeading/ShopHeading'
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
				description={`Don't forget to refer to my guidelines every time you consider making a purchase. You might find additional ones tucked away within the shop listings! It's always a good idea to double-check before making a decision.`}
			/>
			<section className='comms-guidelines'></section>
		</main>
	)
}