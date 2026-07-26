import { useState, useRef, useEffect } from 'react'
import Locations from './Locations';

function Banner({ onMenuClick, onAccountClick }) {
  
	const locationAriaMenuRef = useRef(null);

	const toggleLocationAriaMenu = () => {
		if(locationAriaMenuRef.current) {
			locationAriaMenuRef.current.open = !locationAriaMenuRef.current.open;
		}
	};

  return (
    <>
			<div id="banner">
				<div id="topRow">
					<md-icon-button onClick={onMenuClick} className="topRowIcons">
						<md-icon>menu</md-icon>
					</md-icon-button>

					<div id="searchBar" className="searchViewWindowAction">
						<span id="searchBtnText">Search in products</span>
					</div>

					<md-icon-button onClick={onAccountClick} id="account">
						<md-icon>account_circle</md-icon>
					</md-icon-button>

					
				</div>
				<div id="ribbonRow">
					<md-filled-tonal-button onClick={toggleLocationAriaMenu} id="locationAriaBtn">
						<span slot="icon" className="material-symbols-outlined">near_me</span>
						<span>Kirchentellinsfurt</span>
					</md-filled-tonal-button>

					{/* Advanced */}
					<div id="filterToggle">
						<label htmlFor="switchFilterToggle">Filters</label>
						<md-switch id="switchFilterToggle" icons></md-switch>
					</div>
				</div>
			</div>

			{/* Search Feature */}

			<div id="searchFeature" className="searchViewWindowAnimation">
				<md-filled-text-field type="search" placeholder="Search..." id="searchTextField">
					<md-icon-button slot="leading-icon" className="topRowIcons searchViewWindowAction">
						<md-icon>arrow_back</md-icon>
					</md-icon-button>
					<md-icon-button slot="trailing-icon" className="topRowIcons">
						<md-icon>close</md-icon>
					</md-icon-button>
				</md-filled-text-field>
				<md-list className="autocompleteSearch">
					<md-list-item type="button">
						<div slot="headline">in brands:</div>
					</md-list-item>
					<md-list-item type="button">
						<div slot="headline">by flavours:</div>
					</md-list-item>
					<md-list-item type="button">
						<div slot="headline">for quantity:</div>
					</md-list-item>
					<md-list-item type="button">
						<div slot="headline">in brands:</div>
					</md-list-item>
					<md-list-item type="button">
						<div slot="headline">in brands:</div>
					</md-list-item>
				</md-list>
			</div>

			<div id="searchViewWindow" className="searchViewWindowAnimation">

			</div>
			
			<md-menu ref={locationAriaMenuRef} anchor="locationAriaBtn" has-overflow positioning="popover" id="locationAriaMenu">
				<Locations />
			</md-menu>			
    </>
  )
}

export default Banner