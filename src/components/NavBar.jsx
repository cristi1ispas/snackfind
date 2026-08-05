import { useState } from 'react'

function NavBar({ onScreenChange, activeScreen }) {
	
  return (
    <>
      <nav id="navBar">
        <div className="navItem" onClick={() => onScreenChange('explore')}>
          <div className={`navItemIcon ${activeScreen === 'explore' ? 'active' : ''}`}>
            {activeScreen === 'explore' ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="18 -960 960 960" width="24px" fill="#000000"><path d="m300-300 280-80 80-280-280 80-80 280Zm180-120q-25 0-42.5-17.5T420-480q0-25 17.5-42.5T480-540q25 0 42.5 17.5T540-480q0 25-17.5 42.5T480-420Zm0 340q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
            ) : (
              <md-icon>explore</md-icon>
            )}
            
          </div>
          <span className={`navItemName ${activeScreen === 'explore' ? 'active' : ''}`}>Explore</span>
        </div>
        <div className="navItem" onClick={() => onScreenChange('favourite')}>
          <div className={`navItemIcon ${activeScreen === 'favourite' ? 'active' : ''}`}>
            {activeScreen === 'favourite' ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="18 -960 960 960" width="24px" fill="#000000"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/></svg>
            ) : (
              <md-icon>favorite</md-icon>
            )}
            
          </div>
          <span className={`navItemName ${activeScreen === 'favourite' ? 'active' : ''}`}>Favourite</span>
        </div>
        <div className="navItem" onClick={() => onScreenChange('cart')}>
          <div className={`navItemIcon ${activeScreen === 'cart' ? 'active' : ''}`}>
            {activeScreen === 'cart' ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="18 -960 960 960" width="24px" fill="#000000"><path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z"/></svg>
            ) : (
              <md-icon>shopping_cart</md-icon>
            )}
          </div>
          <span className={`navItemName ${activeScreen === 'cart' ? 'active' : ''}`}>Cart</span>
        </div>
        <div className="navItem" onClick={() => onScreenChange('contribute')}>
          <div className={`navItemIcon ${activeScreen === 'contribute' ? 'active' : ''}`}>
            <md-icon id="navItemIconContribute" >crowdsource</md-icon>
          </div>
          <span className={`navItemName ${activeScreen === 'contribute' ? 'active' : ''}`}>Contribute</span>
        </div>
      </nav>
    </>
  )
}

export default NavBar