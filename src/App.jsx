import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div id="banner">
			<div id="topRow">
				<md-icon-button id="navDrawerMenuBtn" className="topRowIcons navDrawerAction">
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
					Kirchentellinsfurt
				</md-filled-tonal-button>

				{/* Advanced */}
				<div id="filterToggle">
					<label for="switchFilterToggle">Filters</label>
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

		

		{/* END OF BANNER

		    BEGIN navDrawer */}

		
		<div className="navDrawerAnimation navDrawerStyle">
			<div style="font-size: 24px; padding: 24px;">project Mushroom</div>
			<md-divider style="padding: 0;"></md-divider>
			<md-list>
				
				<md-list-item type="button" className="navDrawerListItem" href="./news.html">
					<md-icon slot="start">newspaper</md-icon>
					News
				</md-list-item>
				
				<md-list-item type="button" className="navDrawerListItem" href="./discounts.html">
					<md-icon slot="start">percent</md-icon>
					Discounts
				</md-list-item>

				<md-list-item type="button" className="navDrawerListItem" href="./shops.html">
					<md-icon slot="start">store</md-icon>
					Shops
				</md-list-item>
				<md-list-item type="button" className="navDrawerListItem" href="./compare.html">
					<md-icon slot="start">compare_arrows</md-icon>
					Compare
				</md-list-item>
				<md-list-item type="button" className="navDrawerListItem" href="./manager.html">
					<md-icon slot="start">engineering</md-icon>
					Manager program
				</md-list-item>
			</md-list>
			<div>fluffy sheep</div>
			
		</div>

		<div id="navDrawerBlur" className="navDrawerAnimation navDrawerAction"></div>
		
		{/* END OF navDrawer

		    BEGIN accountCenter */}

		<div id="accountCenter">
			
			<md-icon-button id="accountCloseBtn">
				<md-icon>close</md-icon>
			</md-icon-button>
			
				<div id="accountPreview">
					<img id="accountPreviewIMG" src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg" />
					
					<b>$PROFILE NAME$</b>
					<sup>$username$</sup>
					<br />
				</div>
			
			<md-list id="accountSettingsList">
				<md-list-item type="button">
					<div slot="headline">Profile</div>
					<md-icon slot="end">account_circle</md-icon>
				</md-list-item>
				<md-list-item type="button">
					<div slot="headline">Achivements</div>
					<div slot="supporting-text">Score: 443</div>
					<md-icon slot="end">trophy</md-icon>
				</md-list-item>
				<md-list-item type="button" className="settingsTheme">
					<label for="themeSwitch">
						Theme MOVE IN SETTINGS 
						<div className="iconsAndThemeSwitch">
							<md-icon>light_mode</md-icon>
							<md-switch id="themeSwitch"></md-switch>
							<md-icon>mode_night</md-icon>
						</div>
					</label>
				</md-list-item>
				<md-list-item type="button">
					<div slot="headline">Settings</div>
					<md-icon slot="end">settings</md-icon>
				</md-list-item>
				<md-list-item type="button">
					<div slot="headline">Help</div>
					<md-icon slot="end">help</md-icon>
				</md-list-item>
				<md-list-item type="button">
					<div slot="headline">Feedback</div>
					<md-icon slot="end">feedback</md-icon>
				</md-list-item>

			</md-list>
		</div>
    </>
  )
}

export default App
