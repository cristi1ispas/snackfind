import { useState } from 'react'
import News from './subPages/NewsSubPage';
import Discounts from './subPages/DiscountsSubPage';
import Shops from './subPages/ShopsSubPage';
import Compare from './subPages/CompareSubPage';
import Statistics from './subPages/StatisticsSubPage';
import Manager from './subPages/ManagerSubPage';
import Wishlist from './subPages/WishlistSubPage';

function NavDrawer({ isOpen, onClose, onNavigate }) {

  return (
    <>
      <div id='navDrawer' className={` ${isOpen? 'open' : ''}`}>
				<img src='../src/assets/navDrawerLogo.png'/>
				<md-divider style={{padding: '0'}}></md-divider>
				<md-list>
					
					<md-list-item type="button" onClick={() => { onClose(false); onNavigate("News", <News />); }}>
						<md-icon slot="start">newspaper</md-icon>
						<span>News</span>
					</md-list-item>
					
					<md-list-item type="button" onClick={() => { onClose(false); onNavigate("Discounts", <Discounts />); }}>
						<md-icon slot="start">percent</md-icon>
						<span>Discounts</span>
					</md-list-item>

					<md-list-item type="button" onClick={() => { onClose(false); onNavigate("Shops", <Shops />); }}>
						<md-icon slot="start">store</md-icon>
						<span>Shops</span>
					</md-list-item>

					<md-list-item type="button" onClick={() => { onClose(false); onNavigate("Wishlist", <Wishlist />); }}>
						<md-icon slot="start">bookmark_heart</md-icon>
						<span>Wishlist</span>
					</md-list-item>

					<md-list-item type="button" onClick={() => { onClose(false); onNavigate("Compare", <Compare />); }}>
						<md-icon slot="start">compare_arrows</md-icon>
						<span>Compare</span>
					</md-list-item>

					<md-list-item type="button" onClick={() => { onClose(false); onNavigate("Statistics", <Statistics />); }}>
						<md-icon slot="start">finance_mode</md-icon>
						<span>Statistics</span>
					</md-list-item>

					<md-list-item type="button" onClick={() => { onClose(false); onNavigate("Manager", <Manager />); }}>
						<md-icon slot="start">engineering</md-icon>
						<span>Manager program</span>
					</md-list-item>

				</md-list>
				
			</div>

			<div id="navDrawerBlur" onClick={() => onClose(false)} className={` ${isOpen? 'open' : ''}`}></div>
		
    </>
  )
}

export default NavDrawer