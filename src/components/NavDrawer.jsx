import { useState, useRef } from 'react'
import News from './subPages/NewsSubPage';
import Discounts from './subPages/DiscountsSubPage';
import Shops from './subPages/ShopsSubPage';
import Compare from './subPages/CompareSubPage';
import BestValue from './subPages/BestValueSubPage'
import Statistics from './subPages/StatisticsSubPage';
import Wishlist from './subPages/WishlistSubPage';
import Manager from './subPages/ManagerSubPage';
import Locations from './Locations';

function NavDrawer({ isOpen, onClose, onNavigate }) {

	const locationAriaMenuRef = useRef(null);

	const toggleLocationAriaMenu = () => {
		if(locationAriaMenuRef.current) {
			locationAriaMenuRef.current.open = !locationAriaMenuRef.current.open;
		}
	};

  return (
    <>
      <div id='navDrawer' className={` ${isOpen? 'open' : ''}`}>
				<div>
					<img src='src/assets/navDrawerLogo.png'/>
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

						<md-list-item type="button" onClick={() => { onClose(false); onNavigate("Best Value", <BestValue />); }}>
							<md-icon slot="start">savings</md-icon>
							<span>Best Value</span>
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
				<div id="locationAria">
					<span>Your general area:</span>
					<br />
					<md-filled-tonal-button onClick={toggleLocationAriaMenu} id="locationAriaBtn">
						<md-icon slot="icon">near_me</md-icon>
						<span>Prahova</span>
					</md-filled-tonal-button>
				</div>
			</div>

			<md-menu ref={locationAriaMenuRef} anchor="locationAriaBtn" has-overflow positioning="popover" id="locationAriaMenu">
				<Locations />
			</md-menu>		

			<div id="navDrawerBlur" onClick={() => onClose(false)} className={` ${isOpen? 'open' : ''}`}></div>
		
    </>
  )
}

export default NavDrawer