import { useState, useRef, useEffect } from 'react'
import Locations from './Locations';

function TopAppBar({ onMenuClick, onAccountClick }) {
  
	const locationAriaMenuRef = useRef(null);

	const toggleLocationAriaMenu = () => {
		if(locationAriaMenuRef.current) {
			locationAriaMenuRef.current.open = !locationAriaMenuRef.current.open;
		}
	};

  return (
    <>
			<div id="topAppBar">
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

					<div id="filterToggle">
						<label htmlFor="switchFilterToggle">Filters</label>
						<md-switch id="switchFilterToggle" icons disabled></md-switch>
					</div>
				</div>
			</div>
			
			<md-menu ref={locationAriaMenuRef} anchor="locationAriaBtn" has-overflow positioning="popover" id="locationAriaMenu">
				<Locations />
			</md-menu>			
    </>
  )
}

export default TopAppBar