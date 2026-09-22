import { useEffect, useState } from "react"
import SignInUpForm from "./SignInUpForm";
import { useAppStore } from "../store/useAppStore";

function AccountCenter({ isOpen ,onClose }) {

  const [isSignInFormOpen, setIsSignInFormOpen] = useState(false);

  const profile = useAppStore(state => state.profile);
  const signOut = useAppStore(state => state.signOut);

  const [xpValue, setXpValue] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setXpValue(0);
    } else {
      if (profile) {
        setTimeout(() => {
          setXpValue(Number(profile.xp) / Number(profile.xp_required));
        }, 220);
      }
    }
  }, [profile, isOpen]);

  return (
    <div id="accountCenter" className={`${isOpen && 'open'}`}>
      <div className="accountCenterWrapper">
        <SignInUpForm isOpen={isSignInFormOpen} closeForm={setIsSignInFormOpen} />
        <md-icon-button onClick={() => onClose(false)} id="accountCloseBtn">
          <md-icon>close</md-icon>
        </md-icon-button>
        {profile ? (
          <md-outlined-button className='accountSignInAction' onClick={() => signOut()}>
            <md-icon slot='icon'>door_open</md-icon>
            <span>Log out</span>
          </md-outlined-button>
        ) : (
          <md-filled-button className='accountSignInAction' onClick={() => setIsSignInFormOpen(true)}>
            <md-icon slot='icon'>login</md-icon>
            <span>Sign In</span>
          </md-filled-button>
        )}

        <div id="accountPreview">
          <div style={{position: 'relative'}}>
            <img src={profile?.image? profile.image :'https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg'} />
            <md-circular-progress id='accountProgressXP' value={xpValue}></md-circular-progress>
            <div className="lvlNumberWraper">
              <b style={{fontSize: '24px'}}>{profile?.level ? profile.level : '?'}</b>
            </div>
          </div>
          <span style={{fontSize : '32px'}}>@{profile?.username ? profile.username : 'anon'}</span>
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
    </div>
  )
}

export default AccountCenter