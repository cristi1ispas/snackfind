import React, { useState } from 'react';
import Banner from './components/Banner';
import NavDrawer from './components/NavDrawer';

function App() {

  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false)
  const toggleNavDrawer = () => {
    setIsNavDrawerOpen(!isNavDrawerOpen);
  }
  
  const [isAccountCenterOpen, setIsAccountCenterOpen] = useState(false)
  const toggleAccountCenter = () => {
    setIsAccountCenterOpen(!isAccountCenterOpen);
  }

  return (
    <>

      <Banner onMenuClick={toggleNavDrawer} onAccountClick={toggleAccountCenter} />
		{/* END OF BANNER

		    BEGIN navDrawer */}

		
		
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
