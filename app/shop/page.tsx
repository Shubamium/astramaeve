import React from 'react'
import PageTitle from '../components/layout/pageTitle/PageTitle'
import ItemListing from './itemListing/ItemListing'
import ShopNavigation from './shopNavigation/ShopNavigation'
import './shop.scss'
type Props = {}

export default function page({}: Props) {
	return (
		<main id="page_shop">
			<PageTitle
				title='Shop'
				subtitle='item listing and commission info'
			/>
			<ShopNavigation active="shop"/>
			<ItemListing/>
		</main>
	)
}