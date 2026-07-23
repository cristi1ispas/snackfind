import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
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
