import { useState } from 'react'

function NavBar({ onScreenChange, activeScreen }) {
	
  return (
    <>
      <nav id="navBar">
        <div className="navItem" onClick={() => onScreenChange('explore')}>
          <div className={`navItemIcon ${activeScreen === 'explore' ? 'active' : ''}`}>
            <md-icon className="material-symbols-outlined">explore</md-icon>
          </div>
          <span>Explore</span>
        </div>
        <div className="navItem" onClick={() => onScreenChange('favourite')}>
          <div className={`navItemIcon ${activeScreen === 'favourite' ? 'active' : ''}`}>
            <md-icon className="material-symbols-outlined">favorite</md-icon>
          </div>
          <span>favourite</span>
        </div>
        <div className="navItem" onClick={() => onScreenChange('cart')}>
          <div className={`navItemIcon ${activeScreen === 'cart' ? 'active' : ''}`}>
            <md-icon className="material-symbols-outlined">shopping_cart</md-icon>
          </div>
          <span>Cart</span>
        </div>
        <div className="navItem" onClick={() => onScreenChange('contribute')}>
          <div className={`navItemIcon ${activeScreen === 'contribute' ? 'active' : ''}`}>
            <md-icon style={{fontSize: '28px', width: '28px'}} className="material-symbols-outlined">crowdsource</md-icon>
          </div>
          <span>Contribute</span>
        </div>
      </nav>
    </>
  )
}

export default NavBar