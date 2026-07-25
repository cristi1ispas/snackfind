import React, { useState } from 'react'

function Banner({ onMenuClick, onAccountClick}) {
  


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

					<md-icon-button id="account" className="threeDotMenuComponentAction">
						<md-icon>account_circle</md-icon>
					</md-icon-button>

					
				</div>
				<div id="ribbonRow">
					<md-filled-tonal-button id="locationAriaBtn">
						<span slot="icon" className="material-symbols-outlined">near_me</span>
						<span style={{fontFamily: "'Roboto Variable', sans-serif"}}>Kirchentellinsfurt</span>
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
			

			<md-menu has-overflow positioning="popover" id="locationAriaMenu" anchor="locationAriaBtn">
				<md-sub-menu menu-corner="start-start" anchor-corner="end-end">
					<md-menu-item slot="item">
						<div slot="headline">Kusterdingen</div>
						<md-icon slot="end">arrow_drop_down</md-icon>
					</md-menu-item>
					<md-menu slot="menu" has-overflow positioning="popover" x-offset="-40" y-offset="-12">
						<md-menu-item>
							<div slot="headline">Kusterdingen</div>
							<div slot="supporting-text">Shops: 15</div>
						</md-menu-item>
						<md-menu-item>
							<div slot="headline">Jettenburg</div>
							<div slot="supporting-text">Shops: 13</div>
						</md-menu-item>
						<md-menu-item>
							<div slot="headline">Wankheim</div>
							<div slot="supporting-text">Shops: 9</div>
						</md-menu-item>
						<md-menu-item>
							<div slot="headline">Mähringen</div>
							<div slot="supporting-text">Shops: 5</div>
						</md-menu-item>
						<md-menu-item>
							<div slot="headline">Immenhausen</div>
							<div slot="supporting-text">Shops: 3</div>
						</md-menu-item>
					</md-menu>
				</md-sub-menu>
				<md-sub-menu menu-corner="start-start" anchor-corner="end-end">
					<md-menu-item slot="item">
						<div slot="headline">Kunszentmiklós</div>
						<md-icon slot="end">arrow_drop_down</md-icon>
					</md-menu-item>
					<md-menu slot="menu" has-overflow positioning="popover" x-offset="-40" y-offset="-12">
						<md-menu-item>
							<div slot="headline">Kunszentmiklós</div>
							<div slot="supporting-text">Shops: 12</div>
						</md-menu-item>
						<md-menu-item>
							<div slot="headline">Felsőmocsolád</div>
							<div slot="supporting-text">Shops: 8</div>
						</md-menu-item>
						<md-menu-item>
							<div slot="headline">Kisújszállás</div>
							<div slot="supporting-text">Shops: 6</div>
						</md-menu-item>
						<md-menu-item>
							<div slot="headline">Szentmiklós</div>
							<div slot="supporting-text">Shops: 3</div>
						</md-menu-item>
						<md-menu-item>
							<div slot="headline">Sződliget</div>
							<div slot="supporting-text">Shops: 3</div>
						</md-menu-item>
						<md-menu-item>
							<div slot="headline">Tiszakécske</div>
							<div slot="supporting-text">Shops: 0</div>
						</md-menu-item>
					</md-menu>
				</md-sub-menu>
				<md-sub-menu menu-corner="start-start" anchor-corner="end-end">
					<md-menu-item slot="item">
						<div slot="headline">Prahova</div>
						<md-icon slot="end">arrow_drop_down</md-icon>
					</md-menu-item>
					<md-menu slot="menu" has-overflow positioning="popover" x-offset="-40" y-offset="-12">
						<md-menu-item>
							<div slot="headline">Ploiesti</div>
							<div slot="supporting-text">Shops: 56</div>
						</md-menu-item>
						<md-menu-item>
							<div slot="headline">Campina</div>
							<div slot="supporting-text">Shops: 23</div>
						</md-menu-item>
						<md-menu-item>
							<div slot="headline">Valenii de munte</div>
							<div slot="supporting-text">Shops: 18</div>
						</md-menu-item>
						<md-menu-item>
							<div slot="headline">Breaza</div>
							<div slot="supporting-text">Shops: 17</div>
						</md-menu-item>
						<md-menu-item>
							<div slot="headline">Blejoi</div>
							<div slot="supporting-text">Shops: 14</div>
						</md-menu-item>
						<md-menu-item>
							<div slot="headline">Maneciu</div>
							<div slot="supporting-text">Shops: 10</div>
						</md-menu-item>
					</md-menu>
				</md-sub-menu>
			</md-menu>
    </>
  )
}

export default Banner