import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function NavBar() {

  const navigate = useNavigate();
  const location = useLocation();
	
  return (
    <>
      <nav id="navBar">
        <div className="navItem" onClick={() => navigate('/')}>
          <div className={`navItemIcon ${location.pathname === '/' ? 'active' : ''}`}>
            <md-icon className="material-symbols-outlined">explore</md-icon>
          </div>
          <span>Explore</span>
        </div>
        <div className="navItem" onClick={() => navigate('/favourite')}>
          <div className={`navItemIcon ${location.pathname === '/favourite' ? 'active' : ''}`}>
            <md-icon className="material-symbols-outlined">favorite</md-icon>
          </div>
          <span>favourite</span>
        </div>
        <div className="navItem" onClick={() => navigate('/cart')}>
          <div className={`navItemIcon ${location.pathname === '/cart' ? 'active' : ''}`}>
            <md-icon className="material-symbols-outlined">shopping_cart</md-icon>
          </div>
          <span>Cart</span>
        </div>
        <div className="navItem" onClick={() => navigate('/contribute')}>
          <div className={`navItemIcon ${location.pathname === '/contribute' ? 'active' : ''}`}>
            <md-icon style={{fontSize: '28px', width: '28px'}} className="material-symbols-outlined">crowdsource</md-icon>
          </div>
          <span>Contribute</span>
        </div>
      </nav>
    </>
  )
}

export default NavBar