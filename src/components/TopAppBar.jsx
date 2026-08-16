import { useState, useRef } from 'react'
import Locations from './Locations';

function TopAppBar({ onMenuClick, searchBar, onSearchClick, onAccountClick, isLoggedIn, userDetails }) {
  
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
					<md-icon-button onClick={() => onMenuClick(true)}>
						<md-icon>menu</md-icon>
					</md-icon-button>

					<div id="searchBar" onClick={onSearchClick}>
						<span>
							{searchBar
								? searchBar
								: `Search Products`
							}
						</span>
					</div>

					<md-icon-button id="account" onClick={() => onAccountClick(true)} disabled>
						{isLoggedIn && userDetails.pfp
							? (<img src={userDetails.pfp} alt='Profile'/>)
							: (<md-icon>account_circle</md-icon>)
						}
					</md-icon-button>

					
				</div>
				<div id="ribbonRow">
					<md-filled-tonal-button onClick={toggleLocationAriaMenu} id="locationAriaBtn">
						<md-icon slot="icon">near_me</md-icon>
						<span>Prahova</span>
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