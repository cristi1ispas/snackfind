import { useState } from 'react'

function NavBar() {
	
  return (
    <>
      <nav id="navBar">
        <div className="navItem" onClick>
          <div className="navItemIcon ">
            <md-icon className="material-symbols-outlined">explore</md-icon>
          </div>
          <span>Explore</span>
        </div>
        <div className="navItem" onClick>
          <div className="navItemIcon ">
            <md-icon className="material-symbols-outlined">favorite</md-icon>
          </div>
          <span>favourite</span>
        </div>
        <div className="navItem" onClick>
          <div className="navItemIcon ">
            <md-icon className="material-symbols-outlined">shopping_cart</md-icon>
          </div>
          <span>Cart</span>
        </div>
        <div className="navItem" onClick>
          <div className="navItemIcon ">
            <md-icon style={{fontSize: '28px', width: '28px'}} className="material-symbols-outlined">crowdsource</md-icon>
          </div>
          <span>Contribute</span>
        </div>
      </nav>
    </>
  )
}

export default NavBar