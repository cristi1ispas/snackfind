import React, { useState } from 'react'

function AccountCenter({ isOpen ,onClose }) {



  return (
    <>
      <div id="accountCenter" className={` ${isOpen? 'open' : ''}`}>
        
        <md-icon-button onClick={() => onClose(false)} id="accountCloseBtn">
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
            <label htmlFor="themeSwitch">
              <span>Theme MOVE IN SETTINGS</span> 
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

export default AccountCenter